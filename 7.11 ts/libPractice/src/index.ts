// 사용자 인터페이스 정의
// id(형식 예: 'admin-001', 'user-010'), 이름, 역할

enum Role {
  Admin = 'admin',
  Regular = 'regular'
}

interface User {
  id: string,
  name: string,
  role: Role
}

/**
 * Book interface
 * isbn string = 책고유번호
 * title
 * author
 * publishedYear = 출판연도
 * isAvailable = 대출가능여부
 */

interface Book {
  isbn: string,
  title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean
}

// LoanRecord
interface LoanRecord {
  loanId: number,
  bookIsbn: string,
  userId: string,
  loanDate: Date,
  dueDate: Date,
  returnDate?: Date
}

// 데이터 정의
// 도서 목록을 저장
let libraryBooks: Book[] = [];
// 회원 목록 저장
let libraryUsers: User[] = [];
// 대출 기록 저장
let loanRecords: LoanRecord[] = [];

// isAdmin
// 유저 정보를 받고 if문을 사용해서 role 값이 admin이면 리턴 값으로 true값을 줍니다.
function isAdmin(user: User): boolean {
  return user.role === Role.Admin;
}

function isRegularUser(user: User): boolean {
  return user.role === Role.Regular;
}

// 도서 등록 기능 - 관리자만 등록이 가능함
// 도서 등록 함수가 호출 되면, user가 권한이 있는지 확인하고, book정보가 이미 등록 되어있는지 확인하고
// 없는 경우에만 추가
function addBook1(user: User, book: Book): void {
  if (isAdmin(user)) {
    libraryBooks.forEach(libBook => {
      if (libBook.isbn === book.isbn) {
        console.log("책이 있음, 저장 불가");
      } else {
        console.log("저장완료");
        return libraryBooks.push(book);
      }
    })
  }
}

function addBook(user: User, book: Book): void {
  //user가 권한이 있는지 확인하고
  if (!isAdmin(user)) {
    console.log("권한없음!");
    return
  }

  //book정보가 이미 등록 되어있는지 확인하고
  if (libraryBooks.some(b => b.isbn === book.isbn)) {
    console.log("이미 있음");
    return
  }

  //없는 경우에만 추가
  libraryBooks.push(book);

}

/**
 * 도서 삭제
 * 1) 관리자인지 확인
 * 2) 도서 목록에 있는지 확인
 * 3) 대출 진행 중이면 삭제 불가
 * 4) 삭제
 */
//해당 책 찾아서 삭제
function removeBook2(user: User, isbn: string): void {

  //user가 권한이 있는지 확인하고
  if (!isAdmin(user)) {
    console.log("권한없음!");
    return
  }

  if (!libraryBooks.some(b => b.isbn === isbn)) {
    console.log("해당 책이 없습니다.");
    return
  }

  //찾아서 삭제
  for (let i = 0; i < libraryBooks.length; i++) {
    if (libraryBooks[i].isbn === isbn && libraryBooks[i].isAvailable === false) {
      libraryBooks.splice(i, 1);
      console.log(`책 고유번호 :${isbn} 삭제 되었습니다.`)
    }
  }
}

function removeBook(user: User, isbn: Pick<Book, 'isbn'>): void {

  //관리자인지 확인
  if (!isAdmin(user)) {
    console.log("권한없음!");
    return;
  }

  //2) 도서 목록에 있는지 확인
  const index = libraryBooks.findIndex(book => book.isbn === isbn);
  if (index === -1) {
    console.log("도서를 찾을 수 없습니다.");
    return;
  }

  //3) 대출 진행 중이면 삭제 불가
  if (!libraryBooks[index].isAvailable) {
    console.log("도서가 대출 중 입니다.");
    return;
  }

  const removeBook = libraryBooks.splice(index, 1)[0];
  console.log(`도서 ${removeBook.title}이 삭제 되었습니다.`);

}

/**
 * Regular 유저 인지 체크 
 * 입력 받은 isbn이 도서 목록에 있는지 확인 없으면 -1리턴
 * 해당 도서가 대출 중이면 -1 리턴
 * 해당 도서가 대출이 가능하면 해당 index값 리턴
 */
function borrowBook(user: User, isbn: string): number {
  //1. Regular 유저 인지 체크
  if (!isRegularUser(user)) {
    return -1;
  }

  // 2. 입력 받은 isbn이 도서 목록에 있는지 확인 없으면 -1리턴
  const index: number = libraryBooks.findIndex(book => book.isbn === isbn);
  if (index === -1) {
    console.log(`${isbn}인 도서를 찾을 수 없습니다.`);
    return -1;
  }

  // 3. 해당 도서가 대출 중이면 -1 리턴
  if (!libraryBooks[index].isAvailable) {
    console.log("도서가 대출 중 입니다.");
    return -1;
  }

  return index;

}

function borrowBook2(user: User, isbn: string): number {
  if (!isRegularUser(user)) {
    return -1;
  }

  const index: number = libraryBooks.findIndex(book => book.isbn === isbn);
  if (index === -1) {
    console.log("도서를 찾을 수 없습니다.");
    return -1;
  }

  if (!libraryBooks[index].isAvailable) {
    console.log("도서가 대출 중 입니다.");
    return -1;
  }

  return index;

}

//유저 등록 -> 받는 매개변수를 유틸리티 타입으로 받아야지 여러개 생겨도 괜찮다.
function registerUser(user: User, newUserId: string, newUserName: string, newUserRole: Role): void {
  // 1) 관리자인지 확인
  if (!isAdmin(user)) {
    console.log("권한 없음")
    return;
  }

  // 2) user 정보가 이미 등록 되어있는지 확인하고
  if (libraryUsers.some(u => u.id === newUserId)) {
    console.log("이미 있음");
    return
  }

  //새로운 유저 객체 -> User타입 안에 넣기 위해서
  const newUser : User = {
    id: newUserId,
    name: newUserName,
    role: newUserRole
  }

  libraryUsers.push(newUser);

}

function registerUser2(user: User, admin: User): void {
  if (!isAdmin(admin)) {
    console.log("권한 없음")
    return;
  }

  const userName = user.name;
  const index = libraryUsers.findIndex(user => user.name === userName);
  if (index > -1) {
    console.log(`${userName}인 회원이 존재합니다.`);
    return;
  }

  user.role = Role.Regular;
  libraryUsers.push(user);
}