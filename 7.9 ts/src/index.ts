class Coffe {
  public coffeeType: string;
  shot: number;
  constructor(public type: string, public shots: number) {
    this.coffeeType = type;
    this.shot = shots;
  }

  describe() {
    console.log(`${this.shots}샷이 들어간 ${this.type} 커피입니다.`)
  }
}

const temp = new Coffe("에스프레소 ", 10)
const temp2 = new Coffe("에스프 ", 1)

/**
 * 접근 제한자
 * 클래스에서는 속성과 메서드에 접근 제한자를 사용해 접근을 제한할 수 있다.
 * 
 * 1) public
 *    클래스 외부에서도 접근이 가능함
 *    접근 제한자가 선언이 안되어있다면 기본적으로 접근 제한자는 public
 *    클래스의 함수 중 민감하지 않은 객체 정보를 열람할 때나 누구나 해당 클래스의 특정 기능을 사용해야 할 때 많이 사용
 * 
 * 2) private 
 *    클래스 내부에서만 접근이 가능한 접근 제한자
 *    보통은 클래스의 속성은 대부분 private으로 접근 제한자를 설정
 *      - 외부에서 직접적으로 객체의 속성을 변경할 수 없게 제한
 *    클래스의 속성을 보거나 편집하고 싶다면 별도의 getter/setter 메서드를 준비해놓는 것이 관례
 * 
 * 3) protected
 *    클래스 내부와 해당 클래스를 상속받은 자식 클래스에서만 접근이 가능한 접근 제한자
 */

/**
 * 생성자
 * 생성자는 클래스의 인스턴스를 생성하고 초기화하는데 사용되는 특별한 메서드
 * 생성자는 클래스 내에서 constructor라는 이름으로 정의
 * 생성자는 인스턴스를 생성할 때 자동으로 호출
 * 생성자는 클래스 내에 오직 하나만 존재할 수 있음
 * 보통, 생성자로 객체 속성을 초기화 하는것 뿐 아니라 객체가 생성이 될 때 꼭 되어야 하는 초기화 로직을 집어넣기도 함
 */

class BankAccount {
  private balance: number;
  constructor(startingBalance: number) {
    this.balance = startingBalance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number) {
    if (amount > 0) this.balance += amount
  }
}

const test = new BankAccount(100);
test.deposit(1000);

/**
 * 상속(Inheritance)
 *  코드 재사용을 위한 핵심 기능
 *  상속은 객체 지향 프로그래밍에서 클래스 간의 관계를 정의하는 중요한 개념
 *  상속을 통해 기존 클래스의 속성과 메서드를 물려받아 새로운 클래스를 정의
 *  상속에 있어서 똑같은 코드를 계속 반복적으로 작성할 필요 없음
 *  아래의 예제를 보면 Vehicle라는 클래스를 생성했으면 ElectricCar에서 클래스를 상속받고 자체적으로 필요한 속성 및 메서드를 추가하면 끝
 */

class Vehicle {
  move() {
    console.log('이동중..')
  }
}
class ElectricCar extends Vehicle {

}
class Car extends Vehicle {
  move() {
    console.log('시끄럽게 이동중..')
  }
}
const tesla = new ElectricCar();
tesla.move();

/**
 * 슈퍼 타입 / 서브 타입
 * 1) 서브타입
 *    두 개의 타입 a와 b가 있고 b가 a의 서브타입이면 a가 필요한 곳에는 어디든 b를 안전하게 사용할 수 있다.
 * 2) 슈퍼타입
 *    두 개의 타입 a와 b가 있고 b가 a의 슈퍼타입이면 b가 필요한 곳에는 어디든 a를 안전하게 사용할 수 있다.
 * 
 * 서브 타입 -> 슈퍼 타입으로 변환 : upcasting(implicit)
 * 슈퍼 타입 -> 서브 타입으로 변환 : downcast(eplicit)
 * 
 */

//upcasting
class Animal {
  eat() {
    console.log("먹는다")
  }

}
class Dog extends Animal {
  name: string;
  constructor(inputName: string) {
    super();
    this.name = inputName
  }
}
let dog: Dog = new Dog('또순이');
let animal: Animal = dog;

//downcast
let animal2: Animal;
animal2 = new Dog('또순이');

let realDog: Dog = animal2 as Dog;
animal.eat();

/**
 * 추상 클래스
 * 추상 클래스는 클래스와는 다르게 인스턴스화를 할 수 없는 클래스
 * 추상 클래스의 목적은 상속을 통해 자식 클래스에서 메서드를 제각각 구현하도록 강제를 하는 용도
 * 추상 클래스도 최소한의 기본 메소드는 정의를 할 수 있음
 * 핵심 기능의 구현은 전부 자식 클래스에게 위임
 */

/**
 * 인터페이스
 * 객체가 가져야 하는 속성과 메서드를 정의
 * 인터페이스를 구현한 객체는 인터페이스를 반드시 준수해야됨, 규약과 같아서 어길 수가 없음
 * 코드의 안정성을 높이고 유지 보수성을 향상시킬 수 있다.
 */

/**
 * 차이점
 * 구현부
 * 추상 클래스 : 클래스의 기본 구현을 제공
 * 인터페이스 : 객체의 구조만을 정의하고 기본 구현을 제공하지 않음
 * 
 * 동작방식
 * 추상 클래스 : 단일 상속만 지원
 * 인터페이스 : 다중 상속을 지원
 * 
 * 구현 방식
 * 추상 클래스 : 추상 클래스를 상속받은  자식 클래스는 반드시 추상 함수를 구현
 * 인터페이스 : 인터페이스를 구현하는 클래스는 인터페이스에 정의된 모든 메서드를 전부 구현
 */
abstract class Media {
  constructor(public title: string) {

  }
  abstract play(): void;
}
//'Song' 비추상 클래스는 'Media' 클래스에서 상속된 추상 멤버 'play'을(를) 구현하지 않습니다.ts(2515)
class Song extends Media {
  play(): void {
    console.log(`${this.title} 재생 중`)
  }
}

/**
 * S.O.L.I.D 원칙
 * 1) 단일 책임 원칙 (SRP) - 핵심
 * 클래스는 하나의 책임만 가져야 한다는 기본적인 원칙
 * 5개의 설계 원칙 중 가장 기본적이고 중요한 원칙
 * 예를 들면, 유저 서비스라는 클래스가 있는 경우에 해당 클래스는 유저 관련된 액션만 해야하고 다른 액션을 해서는 안된다.
 * 
 * 2)개방 폐쇄 원칙 (OCP) - 클래스상속과 인터페이스 많이사용하세요.
 * 클래스는 확장에 대해서는 열려 있어야 하고 수정에 대해서는 닫혀 있어야 한다는 원칙
 * 클래스의 기존 코드를 변경하지 않고도 기능을 확장할 수 있어야 한다.
 * 즉, 인터페이스나 상속을 통해서 이를 해결할 수 있다.
 * 부모 클래스의 기존 코드 변경을 하지 않고 기능 확장 가능함
 * 
 * 3) 리스코프 치환 원칙 (LSP)
 * 서브타입은 기반이 되는 슈퍼타입을 대채할 수 있어야 한다는 원칙
 * 다시 말해, 자식 클래스는 부모 클래스의 기능을 수정하지 않고도 부모 클래스와 호환되어야 한다
 * 논리적으로 엄격하게 관계가 정립이 되어야 한다.
 * 
 * 4) 인터페이스 분리 원칙 (ISP)
 * 클래스는 자신이 사용하지 않는 인터페이스의 영향을 받지 않아야 한다
 * 즉, 해당 클래스에게 무의미한 메소드의 구현을 막자는 의미
 * 인터페이스를 너무 크게 정의하기보단 필요한 만큼만 정의하고 클래스는 요구사항에 맞게 인터페이스를 구현 하도록 유도해라
 * 
 * 5) 의존 역전 원칙 (DIP)
 * DIP는 JAVA의 Spring 프레임워크나 Node.js의 Nest.js 프레임워크와 같이 웹 서버 프레임워크 내에서 많이 나오는 원칙
 * 이 원칙은 하위 수준 모듈(구현 클래스)보다 상위 수준 모듈(인터페이스)에 의존을 해야한다는 의미
 */
class Bird {
  fly(): void {
    console.log('펄럭펄럭');
  }
}

class Penguin extends Bird {
  //펭귄은 못남
}

interface My {
  save(data: string): void;
}
class Mylocal implements My {
  save(data: string): void {
    console.log(`로컬에 저장: ${data}`)
  }
}
class MyCloud implements My {
  save(data: string): void {
    console.log(`클라우드에 저장: ${data}`)
  }
}
class Database {
  constructor(private storage: My) { }

  saveData(data: string): void {
    this.storage.save(data);
  }
}
const myLocal = new Mylocal();
const myCloud = new MyCloud();
const myLDatabase = new Database(myLocal);
const myClDatabase = new Database(myCloud);
myLDatabase.saveData("로컬");
myClDatabase.saveData("클라우드")

/**
 * Enum과 객체 리터럴
 * - 공통점
 * enum과 객체 리터럴은 모두 상수를 정의하고 그룹화하는데 사용 될 수 있다
 * 
 * -차이점
 * 1) enum
 * 상수 값들의 집합을 정의하는 데 사용되는 특별한 데이터 타입
 * 주로 관련된 상수들을 명확하게 그룹화하고 관리할 때 유용
 * 가독성 및 명확성 : 상수 값에 의미 있는 이름을 부여하여 코드의 가독성이 높아진다
 * 컴파일 시 자동 매핑 : 별도의 값 할당 없이 자동으로 숫자 값으로 매핑
 * 미리 정의된 상수 값만 사용할 수 있어 탕비 안정성이 높다
 * 
 * 2)객체 리터럴
 * 객체 리터럴은 키-값 쌍으로 구성된 객체를 직접 생성하는 방식
 * const 또는 let 키워드를 사용하여 정의하며, 다양한 데이터타입을 값으로 가질 수 있음
 * 유연한구조 : enum과 달리 키에 다양한 타입의 값을 할당할 수 있다.
 * 런타임 유연성 : 필요에 따라 객체의 속성을 추가, 수정, 삭제하는 등 런타임에 더 유연하게 다룰 수 있다.
 * 다목적 사용 : 상수 그룹화 외에도 데이터 구조, 설정 객체 등 다양한 용도로 활용
 * 
 * - enum을 쓰면 좋은 경우
 *  enum은 간단한 상수 값을 그룹화해서 관리를 할 때 적합
 *  또한, enum은 상수 값이기 때문에 각 멤버의 값이 변하면 안된다는 조건이 있음
 * - 객체 리터럴을 쓰면 좋은경우
 *  객체 리터럴은 멤버의 값이나 데이터 타입을 맘대로 변경 할 수 있을때
 *  복잡한 구조와 다양한 데이터 타입을 사용해야 할 때는 객체 리터럴을 사용
 */

enum UserRole {
  Admin = "admin",
  Editor = "editor",
  User = 'user'
}

enum OrderStatus {
  PENDING,      //0
  PROGRESSING,  //1
  COMPLETED,    //2
  CANCELLED     //3
}

//오류가 적다 - enum
function handleUserAction(role: UserRole, order: OrderStatus): void {
  if (role === UserRole.Admin){

  } else if (role === UserRole.Editor){}
  else{}
  switch(order){
    case OrderStatus.COMPLETED:
      console.log("주문완료")
      break;
    case OrderStatus.PENDING:
      console.log("주문")
      break;
    default:
      console.log("주문오류")

  }
}

const currentUserRole = "";

//객체 리터럴
const appConfig = {
  appName: "My Awesome App",
  version: "1.0.0",
  apiEndPoints: {
    users: "api/users",
    product: "api/products",
  },
  isActive: true,
  maxUsers: 100
}