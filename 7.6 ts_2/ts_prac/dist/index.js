"use strict";
function checkUserStatus(isLoggedIn) {
    if (isLoggedIn) {
        return "사용자가 로그인됨";
    }
    else {
        return "사용자가 로그인되어 있지 않습니다.";
    }
}
const currentUserloggedIn = true;
/**
 * 2) number
 * - number 타입은 TypeScript에서 **모든 종류의 숫자**를 나타냅니다.
 * - 일반적인 프로그래밍 언어에서 정수(integer)와 실수(float/double)를 구분하여 다른 타입을 사용하지만,
 * TypeScript에서는 number타입 하나로 이 모든 것을 처리합니다.
 * - 심지어 2진수, 8진수, 16진수 리터럴까지도 number 타입으로 표현가능
 * - 모든 수치 연산에 사용되는 값은 number타입
 */
function calculateDiscountPrice(originalPrice, discountRate) {
    return originalPrice * (1 - discountRate);
}
const productPrice = 12500.50;
const discount = 0.15;
const finalPrice = calculateDiscountPrice(productPrice, discount);
console.log(`원가 ${productPrice}, 할인률: ${discount * 100} 할인가격: ${calculateDiscountPrice}`);
const hexValue = 0xFF;
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
function calculAvg(grades) {
    if (grades.length === 0) {
        return 0;
    }
    let sum = 0;
    for (const grade of grades) {
        sum += grade;
    }
    return sum / grades.length;
}
const studentGrades = [88, 92, 76, 92, 11];
const averageGrade = calculAvg(studentGrades);
console.log(`학생 평균 점수: ${averageGrade.toFixed(2)}점`);
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
const userInfo = ["aaa", 35, true];
console.log(`name: ${userInfo[0]}`);
/**
 * 6) enum
 * - enum은 열거형 테이터 타입이라고 불림
 * - 관련된 상수값의 집합에 의미있는 이름을 부여하여 코드를 더 쉽게 관리할 수 있게 만들어주는 타입
 * - enum 내부의 각 요소는 별로 설정 값을 지정하지 않으면, 0으로 시작함
 * - 숫자, string 만 가능
 * - enum은 명확하게 관련된 상수 값들을 그룹화하여 코드를 더 읽기 쉽게 만들고 싶을 때 사용하는 것이 좋습니다.
 * - 하지만 값을 수가 적거나, 값들 사이의 관계가 뚜렷하지 않으면 string 리터럴 유니온 타입 등을 고려하는 것이 더 나을 수 있습니다.
 */
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Editor"] = "editor";
    UserRole["User"] = "user";
})(UserRole || (UserRole = {}));
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
})(Day || (Day = {}));
const today = Day.Monday;
console.log(`현재 요일: ${Day} (${Day.Monday})`);
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
    constructor(id, name, price) {
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
 */
let flexibleValue;
flexibleValue = 10;
console.log(flexibleValue);
flexibleValue = "문자열 가능";
console.log(flexibleValue);
flexibleValue = { id: 1, type: "data" };
console.log(flexibleValue);
let num = flexibleValue;
console.log(num); //오류나옴
