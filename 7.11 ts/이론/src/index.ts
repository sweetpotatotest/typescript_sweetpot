/**
 * 제너릭
 * 프로그래밍을 하면서 다양한 데이터를 다루게 되는데, 이 데이터들을 안정적으로 처리하기 위해 나왔습니다
 * 어떤 함수나 클래스가 여러 타입을 유연하게 받아들일 수 있어야 할 때 필요하다
 */

function print(value: any): any {
  return value;
}

//any를 사용하면 모든 타입을 받을 수 있지만, 타입스크립트의 가장 큰 장점인 정적 타입 검사가 없어진다.
// 아무 타입이안 들어오고 아무 타입으로 나가니 IDE나 컴퍼일러가 도와줄 수 없기 때문에 등장
// 제너릭은 타입을 매개변수처럼 사용하는 문법
// 마치 함수의 인자처럼, 나중에 타입을 넘길 수 있는 유연한 방식


function print2<T>(value: T): T {
  return value;
}
/**
 * T는 타입 변수
 * print2<number>(123)이라고 호출하면 T는 number가 되고,
 * (hello)라고 하면 T는 string이 됩니다.
 * 이처럼 제너릭은 유연성(재사용성)과 타입 안정성을 모두 챙길 수 있는 도구
 */

/**
 * 유틸리티 타입
 * TS의 유틸리티 타입은 기존 타입을 기반으로 새로운 타입을 쉽게 생성하고 변환할 수 있도록 돕는 강력한 기능
 * 이를 통해 코드의 재사용성을 높이고 타입 추론을 더욱 효과적으로 활용할 수 있습니다.
 * 
 * 1) Partial<T>타입
 * 타입 T의 모든 속성을 선택적으로 만듭니다.
 * 즉, 해당 타입의 객체를 생성할 때 일부 또는 모든 속성을 생략할 수 있게 해줍니다.
 * 보통은 객체의 일부 속성만 업데이트하거나, 특정 필드가 필수가 아닌 경우 사용 합니다.
 * 2) Required<T>타입
 * 
 * 3) Readonly<T>타입
 * 4) Pick<T, K>타입
 * 5) Omit<T, K>타입
 */

//Partial<T>
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

function updateProduct(product: Product, fieldsToUpdate: Partial<Product>): Product {
  return { ...product, ...fieldsToUpdate }
}

const originalProduct: Product = {
  id: "aa",
  name: "l",
  price: 122
}
const partial = updateProduct(originalProduct, { name: "laptop" });
console.log(partial);

//Required<T>
// Partial<T>과는 반대로, 타입 T의 모든 속성을 필수적으로 만듦
interface UserProfile {
  username: string;
  email: string;
  phone?: string;
  address?: string;
}

type RequiredProfile = Required<UserProfile>;

const newUser: RequiredProfile = {
  username: "string",
  email: "str@ing.cc",
  phone: "1231231",
  address: "11"
}

//required로 지정해서 ?들이 필수값이됨 - 에러뜸
// const incompleteUser:RequiredProfile = {
//   username: "kgb",
//   email: "aa@aa.cc"
// }

/**
 * Readonly<T>는 타입 T의 모든 속성을 읽기 전용으로 만듭니다.
 * 한 번 할당된 속성 값은 이후에 변경할 수 있습니다.
 */

interface Point {
  x: number;
  y: number;
}

const mutablePoint: Point = { x: 10, y: 20 };
mutablePoint.x = 15

type ReadonlyPoint = Readonly<Point>;

const point: ReadonlyPoint = { x: 20, y: 10 };
//에러나옴 Readonly속성 들어감
//point.x = 40;

/**
 * Pick<T, K>
 * 타입 T에서 K에 해당하는 속성들만 선택하여 새로운 타입
 * 여기서 K는 T의 속성 이름들의 유니온 타입
 */
interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

type CustomerName = Pick<Customer, "firstName" | "lastName">;

const customer: CustomerName = {
  firstName: "aa",
  lastName: "bb",
  // Pick -> 명시된 두가지 속성만 쓸수 있음
  // email: "a11"
};
console.log(customer); //{firstName : 'aa', lastName: 'bb'}

/**
 * Omit<T, K>
 * Pick<T, K>과는 반대로, 타입 T에서 K에 해당하는 속성들만 제외하여 새로운 타입을 만든다
 * 기존 타입에서 불필요한 속성들을 제거하여 새로운 타입을 정의할 때 사용
 */
interface Employee {
  id: string;
  name: string;
  department: string;
  salary: number;
  hireDate: Date;
}
type PublicEmployee = Omit<Employee, "salary" | "hireDate">;

const OmitEmployee: PublicEmployee = {
  id: "string",
  name: "aa",
  department: "st",
  // Omit으로 제거했기 때문에 에러나옴
  // salary: 123
}
console.log(OmitEmployee)