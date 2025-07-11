/**
 * 제너릭
 * 프로그래밍을 하면서 다양한 데이터를 다루게 되는데, 이 데이터들을 안정적으로 처리하기 위해 나왔습니다
 * 어떤 함수나 클래스가 여러 타입을 유연하게 받아들일 수 있어야 할 때 필요하다
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function print(value) {
    return value;
}
//any를 사용하면 모든 타입을 받을 수 있지만, 타입스크립트의 가장 큰 장점인 정적 타입 검사가 없어진다.
// 아무 타입이안 들어오고 아무 타입으로 나가니 IDE나 컴퍼일러가 도와줄 수 없기 때문에 등장
// 제너릭은 타입을 매개변수처럼 사용하는 문법
// 마치 함수의 인자처럼, 나중에 타입을 넘길 수 있는 유연한 방식
function print2(value) {
    return value;
}
//Partial<T>
function updateProduct(product, fieldsToUpdate) {
    return __assign(__assign({}, product), fieldsToUpdate);
}
var originalProduct = {
    id: "aa",
    name: "l",
    price: 122
};
var partial = updateProduct(originalProduct, { name: "laptop" });
console.log(partial);
var newUser = {
    username: "string",
    email: "str@ing.cc",
    phone: "1231231",
    address: "11"
};
var mutablePoint = { x: 10, y: 20 };
mutablePoint.x = 15;
var point = { x: 20, y: 10 };
var customer = {
    firstName: "aa",
    lastName: "bb"
};
console.log(customer); //{firstName : 'aa', lastName: 'bb'}
