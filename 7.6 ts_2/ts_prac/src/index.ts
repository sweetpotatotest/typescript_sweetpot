function checkUserStatus(isLoggedIn: boolean): string {
  if (isLoggedIn) {
    return "사용자가 로그인됨"
  } else {
    return "사용자가 로그인되어 있지 않습니다."
  }
}

const currentUserloggedIn: boolean = true;

/**
 * 2) number
 * - number 타입은 TypeScript에서 **모든 종류의 숫자**를 나타냅니다.
 * - 일반적인 프로그래밍 언어에서 정수(integer)와 실수(float/double)를 구분하여 다른 타입을 사용하지만,
 * TypeScript에서는 number타입 하나로 이 모든 것을 처리합니다.
 * - 심지어 2진수, 8진수, 16진수 리터럴까지도 number 타입으로 표현가능
 * - 모든 수치 연산에 사용되는 값은 number타입
 */

function calculateDiscountPrice(originalPrice: number, discountRate: number): number {
  return originalPrice * (1 - discountRate);
}
const productPrice: number = 12500.50;
const discount: number = 0.15;
const finalPrice = calculateDiscountPrice(productPrice, discount);
console.log(`원가 ${productPrice}, 할인률: ${discount * 100} 할인가격: ${calculateDiscountPrice}`);

const hexValue: number = 0xFF;
console.log(hexValue);

/**
 * 3) string
 * - string 타입은 텍스트 데이터를 나타냅니다. 작은따옴표', 큰따옴표",또는 백쿼트`를 사용하여 문자열을 표현할 수 있습니다.
 * - 특히 백쿼트는 ES6부터 도입된 템플릿 리터럴을 사용할 때 쓰이면, 문자열 내부에 변수나 표현식을 쉽게 삽입할 수 있도록 해줍니다.
 * string 타입은 텍스트를 조작하거나, 다른 텍스트와 합치거나, 특정 문자열을 찾고 대체하는 등 다양한 텍스트 관련 작업에 활용됩니다.
 */

/**
 * 4) Array
 * - 배열은 같은 타입의 여러 원소들을 순서대로 저장하는 자료구조
 * - 특정 타입 뒤에 [] 를 붙여서 명시
 */

function calculAvg(grades: number[]): number {
  if (grades.length === 0) {
    return 0;
  }
  let sum: number = 0;
  for (const grade of grades) {
    sum += grade;
  }
  return sum / grades.length;
}
const studentGrades: number[] = [88, 92, 76, 92, 11];
const averageGrade = calculAvg(studentGrades);
console.log(`학생 평균 점수: ${averageGrade.toFixed(2)}점`)

/**
 * 5) 튜플(Tuple)
 * - 튜플은 서로 다른 타입의 원소들을 정해진 순서와 개수에 맞게 가질 수 있는 특수한 형태의 배열
 * - 각 위치에 올 수 있는 원소의 타입을 미리 명확하게 정의해야 합니다.
 * 
 * 튜플하고 배열의 차이
 *  가장 큰 차이는 원소의 타입 규칙!
 * 
 * 배열
 *  string[] => string 만 넣을 수 있음
 * 튜플
 *  [string, string, number] 각 위치에 오는 타입이 다를 수 있음, 다만 순서와 개수를 미리 지정해야 함
 */

const userInfo: [string, number, boolean] = ["aaa", 35, true];
console.log(`name: ${userInfo[0]}`)

/**
 * 6) enum
 * - enum은 열거형 테이터 타입이라고 불림
 * - 관련된 상수값의 집합에 의미있는 이름을 부여하여 코드를 더 쉽게 관리할 수 있게 만들어주는 타입
 * - enum 내부의 각 요소는 별로 설정 값을 지정하지 않으면, 0으로 시작함
 * - 숫자, string 만 가능
 * - enum은 명확하게 관련된 상수 값들을 그룹화하여 코드를 더 읽기 쉽게 만들고 싶을 때 사용하는 것이 좋습니다.
 * - 하지만 값을 수가 적거나, 값들 사이의 관계가 뚜렷하지 않으면 string 리터럴 유니온 타입 등을 고려하는 것이 더 나을 수 있습니다.
 */

enum UserRole {
  Admin = "admin",
  Editor = "editor",
  User = 'user'
}

enum Day {
  Sunday,   //0
  Monday,   //1
  Tuesday,    //2
}

const today: Day = Day.Monday;
console.log(`현재 요일: ${Day} (${Day.Monday})`)

/**
 * const
 * 상수를 선언할때 사용
 * const numbers = [1,2,3,4,5]
 * numbers.push(6)
 * number = [1,2,3,4,5,6]
 * - 객체나 배열 내부의 속성 또는 원소는 변경될 수 있다는 것
 */

/**
 * readonly
 * - readonly 키워드는 TypeScript에서만 사용되는 키워드입니다.
 * - 클래스의 속성(Property)이나 인터페이스의 속성을 불변(Immutable)으로 만들 때 사용
 * - readonly로 선언된 속성은 생성자(Constructor) 내부에서 한 번만 초기화될 수 있으며,
 *    그 이후로는 값을 변경할 수 없습니다.
 * - const가 변수 자체의 재할당을 막는다면, readonly는 객체 속성의 재할당을 막는 데 특화되어 있습니다.
 * 
 * const와 readonly 모두 불변성을 보장하는데 사용함
 */

class Product {
  readonly productId: string;
  productName: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.productId = id;
    this.productName = name;
    this.price = price;
  }
}

const laptop = new Product("laptod001", "최신형노트북", 1500000);

/**
 * any
 * any 타입은 모든 타입의 슈퍼 타입
 * any 타입으로 선언된 변수에는 어떤 타입의 값이든 저장할 수 있다는 의미
 * JavaScript의 Object 타입처럼, 모든 값을 수용할 수 있는 만능타입
 * 
 * any 타입은 TypeScript의 타입 안정성을 포기하게 만드는 가장 위험한 도구
 * any를 사용하면 TypeScript의 타입 검사 기능이 무력화되어, 잠재적인 런타임 오류를 컴파일 시점에 잡아내지 못하게 됩니다.
 */

let flexibleValue: any;
flexibleValue = 10;
console.log(flexibleValue);

flexibleValue = "문자열 가능";
console.log(flexibleValue);

flexibleValue = { id: 1, type: "data" };
console.log(flexibleValue);

let num: number = flexibleValue;
console.log(num); //오류나올 가능성 있음

/**
 * union 타입
 * - unknown 타입은 안전하게 타입을 다룰 수 있지만, 결국 값을 사용할 때만다 매번 타입을 확인해야 하는 번거로움
 * - union 타입은 변수가 여러 타입 중 하나를 가질 수 있도록 선언할 때 사용
 * - 'A 또는 B또는 C'와 같은 논리적 OR(|) 연산자처럼, 정의된 여러 타입 중 하나만 만족
 */
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(`id는 문자열입니다.`)
  } else {
    console.log(`id는 숫자입니다.`)
  }
}
printId("spartn");
printId(1231);



/* * 
 * unknown
 * unknown 타입은 any 타입과 비슷하게 모든 타입의 값을 저장할 수 있습니다.
 * any와는 다르게 더 안전한 방식으로 동작
 * unknown 타입의 변수에 할당된 값을 다른 특정 타입의 변수에 할당하거나, 그 값을 직접 사용하려면 명시적으로 타입이 무엇인지 확인
 * 
 * 즉, 사용하기 전에 반드시 타입 체크를 강제하도록 만듦
 */


/**
 * TypeScript 사용하는 이유는 코드의 안정성과 유지보수성을 높이려고 사용합니다.
 * 
 * any, unknown을 남용하면 ㅡ^ㅡ
 * 변수가 가질 수 있는 타입을 최대한 구체적으로 명시하려는 습관을 들이는 것이 중요합니다.
 * 
 * union 타입과 같은 기능을 적극적으로 활용하여 불필요한 타입 오류를 방지하고,
 * 더 견고하고 예측 가능한 코드를 작성
 */

/**
 * 타입 가드
 * TypeScript는 코드를 실행하기 전에 타입 오류를 잡는 강력한 기능을 제공하지만,
 * 때로는 런타임 변수의 실제 타입을 확인하고 싶을 때가 있습니다.
 * 
 * 이때 사용하는 것이 타입가드
 * 
 * 타입 가드는 특정 스코프 내에서 변수의 타입을 좁히는 역할을 하여, 해당 타입의 속성이나 메서드를 안전하게 사용할 수 있도록 돕습니다.
 * 
 * typeof
 * 원시 타입(string, number..등)을 체크할 때 사용
 * 
 * instanceof
 * 특정 클래스의 인스턴스인지 확인할 때 사용
 * 
 * in 연산자
 * 객체에 특정 속성이 존재하는지 확인할 때 사용
 * 
 * 사용자 정의 타입 가드
 * 개발자가 직접 타입을 좁히는 함수를 정의
 * 반환 타입에 parameter is Type 형태의 타입 프레디케이트(Type Predicate)를 사용
 */

class Car {
  drive() {
    console.log('운전시작')
  }
}

class Bicycle {
  pedal() {
    console.log("자전거 페달을 밟습니다.");
  }
}
function moveVehicle(vehicle: Car | Bicycle) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.pedal();
  }
}

//
interface Dog {
  bark(): void;
  breed: string;
}
interface Cat {
  meow(): void;
  purr: boolean;
}
function makeSound(animal: Dog | Cat) {
  if ('bark' in animal) {
    animal.bark();
    console.log(`품종: ${animal.breed}`);
  } else {
    animal.meow();
    console.log(`ㅂㅂ: ${animal.purr}`);
  }
}

//
interface Fish {
  swim(): void
}
interface Bird {
  fly(): void
}
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined
}
function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly()
  }
}
/**
 * 인터페이스 (Interface)
 * 인터페이스는 TS에서 객체의 모양을 정의하는 도구
 * 
 * 인터페이스 상속
 * 인터페이스는 extends 키워드를 사용하여 다른 이터페이스의 정의를 상속(확장)받을 수 있습니다.
 * 
 * 코드의 재사용성을 높이고, 관련된 인터페이스 간의 계층 구조를 명확히 하는 데 도움을 줍니다.
 * 여러 인터페이스를 동시에 상속받는 것도 가능합니다.
 */

interface Product1 {
  id: number;
  name: string;
  price: number;
  description?: string; //옵션, 없어도됨
  readonly createdAt: Date;
}
const laptop1: Product1 = {
  id: 101,
  name: "string",
  price: 15111,
  createdAt: new Date()
}

//함수타입 인터페이스
interface SearchFunction {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunction;

mySearch = function (src: string, sub: string): boolean {
  const result = src.indexOf(sub);
  return result > -1;
}
console.log(mySearch("안녕하세요 ts", "type"));


// 인덱싱 기능 인터페이스
// 배열이나 객체처럼 인덱스를 통해 접근할 수 있는 타입의 모양을 정의할 때 사용
// 인덱스 시그니처([index: IndexType]: ValueType)를 사용하여 정의하며, IndexType은 string 또는 number만 가능

interface StringArray {
  [index: number]: string
}
let myArray: StringArray;
myArray = ["Hello", "world"];

interface Dictionary {
  [key: string]: string;
}
let myDictionary: Dictionary = {
  name: "1",
  city: "서"
}
myDictionary["country"] = "대";

//상속
interface Shape {
  color: string;
}
interface Circle extends Shape {
  radius: number;
}
interface ColoredCircleWithBorder extends Circle {
  borderWidth: number;
  borderColor: string;
}
const myCicle: Circle = {
  color: "red",
  radius: 5
}
const myComplex: ColoredCircleWithBorder = {
  color: "red",
  radius: 5,
  borderWidth: 2,
  borderColor: "black"
}

/**
 * 타입 별칭(Type Alias)
 * 타입 별칭은 기존 타입에 새로운 이름을 부여하는데 사용
 * type은 키워드를 사용하여 정의하며,
 * 인터페이스와 달리 객체 타입뿐만 아니라 원시타입, 유니온타입, 튜플, 함수 시그니처등 거의 모든 TypeScript 타입에 별칭을 부여할 수 있음
 * 
 * 모든 타입에 적용 가능
 * 복잡한 타입 단순화
 * 타입 조합
 * 선언적 병합 불가
 */

//원시 타입에 별칭을 부여
type Age = number;
type UserName = string;

const userAge: Age = 30;
const greetingname: UserName = "typescript";
console.log(`${greetingname}의 나이: ${userAge}`)

//유니온 타입에 별칭부여
type ResultStatus = "success" | "fail";
type IdOrName = number | string;

function showStatus(status: ResultStatus): void {
  console.log(`처리상태: ${status}`);
}
showStatus("success");

//3. 객체 타입에 별칭 부여
type Coods = {
  x: number;
  y: number;
}

const point: Coods = { x: 10, y: 20 };


//4. 함수 시그니처에 별칭부여

//5. 타입 조합
type PersonInfo = {
  name: string;
  age: number;
}

type EmployeesInfo = PersonInfo & {
  employeeId:string;
  department: string;
};

const employee: EmployeesInfo = {
  name: "김영희",
  age: 1,
  employeeId:"Emp-001",
  department: "개발"
}

/**
 * interface --- type
 * extends --- &
 * 
 */
