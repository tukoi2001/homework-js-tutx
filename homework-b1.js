//Câu 1: Khai báo biến đúng:
	let $variable = 0;
	let _variable = 0;
	let variableText = 'Hello';
	const constVariable = 0;
	const variable2 = 0;
       //Khai báo biến sai:
	let 5Variable = 0;
	const 12Text = 0;
	let va-ri = 0;
	const hang-so = 10;
	let variable.num = 10;
// Câu 2:
function sum(a, b) {
    return a + b;
}
console.log(sum(10,4))

function subs(a , b) {
    return a - b;
}
console.log(subs(10,4))

function mul(a, b) {
    return a * b;
}
console.log(mul(10,4))

function div(a, b) {
    if (b != 0) {
        return a / b;
    }
    else {
        return "Không thể chia cho 0"
    }
}
console.log(div(-10,0))

// Câu 3:
// 3.1 x = 5. Tính: ++x + x++ - --x - x-- Kết quả = 0. 
// Giải thích: 6 + 6 - 6 - 6, ++x tăng luôn 1 đơn vị là 5 + 1 = 6,
// tiếp + với x++ là cộng thêm 6 là 6 + 6 = 12, sau khi cộng giá trị của
// x hiện tại là x = 7, tiếp - --x là trừ 1 đơn vị, giá trị x hiện tại là
// x = 6, 12 - 6 =  6, và x-- là 6 - 6 = 0.

// 3.2 x = 6, y = 10. Tính: ++y - y++ + x++ + x-- - --x - --y Kết quả: -3;
// Giải thích: 11 - 11 + 6 + 6 - 4 - 11 = -3
// Ban đầu giá trị y = 10, sau khi ++y giá trị y = 11, khi ++y - y++ thì y++ vẫn là 11,
// sau khi + x++ y hiện tại mang giá trị y = 12, x++ có giá trị = 6, + x-- cũng có 
// giá trị bằng 6 sau đó - x-- có giá trị bằng 4, bởi vì sau khi x-- thì x = 5 và --x nữa
// x = 4 và - --y lúc này y có giá trị là 12 sau khi --y còn 11.

// 3.3 x = 10, y = 12, z = 16. 
// Tính: x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x-- = 68
//        10 + 16 - 10 + 11 - 11 + 11 + 16 + 15 + 10 = 68
// 	em lười giải thích quá :3
 
// 3.4 enter, tính lần 2 bài 3.3: 
// Bài này em lấy giá trị cũ của x , y , z ở vế trên. x = 9, y = 11, z = 15
// ++x - x++ + z++ + ++y - y-- = 15
// 10 - 10 + 15 + 12 - 12 = 15
// Em lười giải thích



// Câu 4:

let variableNumber = 10;
console.log(typeof variableNumber) //number

let variableString = 'Học Js cơ bản'
console.log(typeof variableString) //string

let variableArr = [1, 2, 3 ,4]
console.log(typeof variableArr) //object

let variableObj = {
    title: 'Học Js',
    author: 'Mr.Quang'
}
console.log(typeof variableObj) //object

let isTrue = true
console.log(typeof isTrue) //boolean

// Câu 5:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr[0] + arr[1]) // tính tổng phần tử 1 và 2 có index = 0 và 1

console.log(arr[0] * arr[9]) //tính tích phần tử đầu và cuối

//Câu 6
let human = {
    firstName: 'Tú',
    lastName: 'Trần',
    age: 20,
    favorite: 'Ngủ'
}

human.firstName = 'Tú Đội';
console.log(human.firstName);
human.lastName = 'Trần Xuân';
console.log(human.lastName);