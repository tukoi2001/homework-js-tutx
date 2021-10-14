// Câu 1
let arrNum = [1, 2, 3, 4, 5, 6];
let tong = 0;
for (let i = 0; i < arrNum.length; i++) {
    tong += arrNum[i];
}
let totalArr = document.getElementById('baitap-1');
totalArr.innerHTML = tong;

// Câu 2:
let arrString = ['hihi', 'haha'];
let printStr = document.getElementById('baitap-2').children;
for (let i = 0; i < arrString.length; i++) {
    printStr[i].innerHTML = arrString[i];
}

// Câu 2.2:
let addPara1 = document.getElementById('baitap-2');

let newItem  = document.createElement('P');
let textNode = document.createTextNode('Hehe');
newItem.appendChild(textNode);
addPara1.insertBefore(newItem, addPara1.childNodes[0]); //firstchild

let newItem2  = document.createElement('P');
let textNode2 = document.createTextNode('Huhu');
newItem2.appendChild(textNode2);
addPara1.appendChild(newItem2);

// Câu 3: 
let content = document.getElementById('content');
let box = document.getElementById('baitap-3');
function displayTest() {
    if(content.style.display == 'none') {
        content.style.display = 'block';
        box.style.backgroundColor = 'red';
    } else {
        content.style.display = 'none';
        box.style.backgroundColor = 'orange';
    }
}

// Câu 3.2:

let box1 = document.getElementById('baitap-1');
let box2 = document.getElementById('baitap-2');
let box3 = document.getElementById('baitap-3');
let content2 = document.querySelector('.content-bt');

function displayContent() {
    if(content2.style.display == 'none') {
        content2.style.display = 'block';
        box1.style.display = 'none';
        box2.style.display = 'none';
        box3.style.display = 'none';
    }
    else {
        content2.style.display = 'none';
        box1.style.display = 'block';
        box2.style.display = 'block';
        box3.style.display = 'block';
    }
}