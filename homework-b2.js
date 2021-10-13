// Câu 1.1: Kiểm tra số chẵn lẻ

let checkNumber = function (number) {
    if (number % 2 === 0) {
        return number + ' Là số chẵn!';
    }
    else {
        return number + ' Là số lẻ!';
    }
}

console.log('Kết quả bài 1.1: ' + checkNumber(3)); // Kết quả bài 1.1: 3 Là số lẻ!


// Câu 1.2 

checkNumber = function (number) {
    if (number % 2 === 0) {
        if (number > 0) {
            return number + ' Là số dương và là số chẵn!';
        }
        else {
            return number + ' Là số âm và là số chẵn!';
        }
    }
    else {
        if (number > 0) {
            return number + ' Là số dương và là số lẻ!';
        }
        else {
            return number + ' Là số âm và là số lẻ!';
        }
    }
}

console.log('Kết quả bài 1.2: ' +checkNumber(3)); // Kết quả bài 1.2: 3 Là số dương và là số lẻ!



// Câu 2: Kiểm tra ngày trong tháng

function checkMonth(month, year) {

    let checkYear = function () {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            return true;
        }
        else {
            return false;
        }
    }
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            return 'Tháng ' + month + ' có 31 ngày!';
            break;
        }
        case 2: {
            if (checkYear() === true) {
                return 'Tháng ' + month + ' có 29 ngày! vì ' + year + ' là năm nhuận';
            }
            else {
                return 'Tháng ' + month + ' có 28 ngày! vì ' + year + ' không là năm nhuận';
            }
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11: {
            return 'Tháng ' + month + ' có 30 ngày!';
            break;
        }
        default: {
            return 'Tháng ' + month + ' bạn nhập chưa đúng!';
        }
    }

}

console.log('Kết quả bài 2.1: ' + checkMonth(2, 2020)); //Kết quả bài 2.1: Tháng 2 có 29 ngày! vì 2020 là năm nhuận


// Câu 2.2


function checkNumber2(number) {
   if (number > 0 && number % 1 === 0) {
       return number + ' là số nguyên dương!';
   }
   else if (number < 0 && number % 1 === 0) {
       return number + ' là số nguyên âm!';
   }
   else {
        return 'Không phải là số cần kiểm tra!';
   }

}

console.log('Kết quả bài 2.2: ' + checkNumber2(-2)); //Kết quả bài 2.2: -2 là số nguyên âm!


// Câu 30

function menuNumber(number1, number2, operator) {
    if(!isNaN(number1) && !isNaN(number2)) {
        switch(operator) {
            case '+': {
                return number1 + number2;
                break;
            }
            case '-': {
                return number1 - number2;
                break;
            }
            case '*': {
                return number1 * number2;
                break;
            }
            case '/': {
                if (number2 === 0) {
                    return 'Số bị chia không thể bằng 0!';
                } else {
                    return number1 / number2;
                }
            }
            case '%': {
                return number1 % number2;
                break;
            }
            default: {
                return 'Bạn nhập sai toán tử rồi!';
            }
        }
    }
    else {
        return 'Số bạn nhập vào chưa đúng!';
    }
}

console.log('Kết quả bài 3: ' + menuNumber(2, 0, '/')) // Kết quả bài 3: Số bị chia không thể bằng 0!