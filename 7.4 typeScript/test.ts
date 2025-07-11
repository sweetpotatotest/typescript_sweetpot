//명시적 타입 선언
//string
let username: string = "alice";
let message: string = `hello, ${username}`;

//number
//NaN, Infinity
let age: number = 27;
let pi: number = 3.14;

//boolean
let isLoggedIn: boolean = true;

//null, undefined
// strictNullChecks tsconfig에 설정 필요
let nothing: null = null;
let notAssigned: undefined = undefined;

//any - 타입스크립트에서 권장하지 않음
let data: any = 123;
data = "문자열가능";
data = true;

//unknown - 타입확인을 필수적으로 한다.
let value: unknown = "문자열";

//void
// 함수가 값을 반환하지 않을 때 사용
function logMessage(message: string): void {
  console.log(message)
}

//never
// 절대 반환하지 않는 함수에 사용 - 에러등
function throwError(): never {
  throw new Error("예외발생!")
}

//object
let obj: object = {name: "alice"}
let obj2: {name: string} = {name: "alice"}

//배열 - 문자열만 고정
let fruits: string[] = ["tes", "st"];

//타입 추론 - 처음에 인식한 타입으로 고정됨
let name2 = "etst";
name2 = "cc";