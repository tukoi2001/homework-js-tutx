// BOM: window, location, screen, history

const modal = document.getElementsByClassName('modal')[0]
// console.log(modal)
// const imageModal = document.getElementsByClassName('full-img')[0]
// console.log(imageModal)
const imageModal = document.querySelector('.full-img')
// console.log(imageModal)

// Tạo sự kiện click, doi url image va show popup
// .addEventListener()
const listImage = document.querySelectorAll('.img-container img')
// console.log(listImage)

listImage.forEach(element => {
    element.addEventListener('click', function() {
        // Open modal
        modal.classList.add('open')
        const imgAlt = element.getAttribute('alt');
        // Set new url image
        imageModal.src = `./img/full/${imgAlt}.jpg`;
        imageModal.classList.add('open');
    })
});

modal.addEventListener('click',(e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    };
});


// Demo, làm tiếp yêu cầu scroll
//scroll section book:
const elementBookToView = document.getElementById("books");
let sectionBook = function() {
    elementBookToView.scrollIntoView();
}

//scroll section students:
const elementStudentsToView = document.getElementById("students");
let sectionStudents = function() {
    elementStudentsToView.scrollIntoView();
}


//scroll section Gallery:
const elementGalleryToView = document.getElementById("gallery");
let sectionGallery = function() {
    elementGalleryToView.scrollIntoView();
}


//scroll section colors:
const elementColorToView = document.getElementById("colors");
let sectionColor = function() {
    elementColorToView.scrollIntoView();
}



// Button Back To Top
const backToTop = document.getElementById("btn-top");

backToTop.onclick = function() {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
}

// arrow function, toán tử 3 ngôi
// window.onscroll = () => window.scrollY > 500 ? 
// backToTop.style.opacity = 1 : backToTop.style.opacity = 0;

window.onscroll = function() {
    if(window.scrollY > 500) {
        backToTop.style.opacity = 1;
    }
    else {
        backToTop.style.opacity = 0;
    }
}

// Bài 4.2:

const btnChangeColor = document.getElementById('changecolor');
const colorText = document.getElementById('color-text');
const boxColor = document.getElementById('color');

const defaultColor = `rgb(255, 255, 255)` ; 
colorText.innerHTML = defaultColor;
colorText.style.color = defaultColor;

btnChangeColor.addEventListener('click', function() {
    let variable1 = Math.floor(Math.random() * 256);
    let variable2 = Math.floor(Math.random() * 256);
    let variable3= Math.floor(Math.random() * 256);
    let colorChange = `rgb(${variable1}, ${variable2}, ${variable3})`;
    colorText.innerHTML = colorChange;
    colorText.style.color = colorChange;
    boxColor.style.backgroundColor = colorChange;
});


