// BOM: window, location, screen, history
const app = new Vue({
    el: '#app',
    data() {
        return {
            menus: [
                {
                    menu: "Gallery"
                },
                {
                    menu: "Books"
                },
                {
                    menu: "Student"
                },
                {
                    menu: "Colors"
                }
            ],

            listImages:[
                {
                    image: "img/small/pexels-anna-shvets-4588065.jpg",
                    alt: 1
                },
                {
                    image: "img/small/pexels-anthony-139639.jpg",
                    alt: 2
                },
                {
                    image: "img/small/pexels-burst-374825.jpg",
                    alt: 3
                },
                {
                    image: "img/small/pexels-carlos-spitzer-17811.jpg",
                    alt: 4
                },
                {
                    image: "img/small/pexels-charles-1851164.jpg",
                    alt: 5
                },
                {
                    image: "img/small/pexels-frans-van-heerden-631292.jpg",
                    alt: 6
                },
                {
                    image: "img/small/pexels-gratisography-4602.jpg",
                    alt: 7
                },
                {
                    image: "img/small/pexels-jan-kopřiva-3614358.jpg",
                    alt: 8
                },
                {
                    image: "img/small/pexels-jeremy-bishop-2422915.jpg",
                    alt: 9
                },
                {
                    image: "img/small/pexels-jim-long-949859.jpg",
                    alt: 10
                },
            ],
            clicked : 0,
        }
        
    },
    methods: {
        displayImage(e) {
            const altImage = e.target.getAttribute("alt")
            const fullImage = document.querySelector(".modal");
            if(altImage > 0) {
                fullImage.classList.add("open")
            } 
        },
        hideImage() {
            const fullImage = document.querySelector(".modal");
            fullImage.classList.remove("open");
        },
        switchColor() {
            const colorText = document.getElementById('color-text');
            const boxColor = document.getElementById('color');
            let variable1 = Math.floor(Math.random() * 256);
            let variable2 = Math.floor(Math.random() * 256);
            let variable3= Math.floor(Math.random() * 256);
            let colorChange = `rgb(${variable1}, ${variable2}, ${variable3})`;
            colorText.innerHTML = colorChange;
            colorText.style.color = colorChange;
            boxColor.style.backgroundColor = colorChange;
        }
    },
    computed: {
        
    }
});


// const modal = document.getElementsByClassName('modal')[0]
// // console.log(modal)                   [parseInt(altImage)]
// // const imageModal = document.getElementsByClassName('full-img')[0]
// // console.log(imageModal)
// const imageModal = document.querySelector('.full-img')
// // console.log(imageModal)

// // Tạo sự kiện click, doi url image va show popup
// // .addEventListener()
// const listImage = document.querySelectorAll('.img-container img')
// // console.log(listImage)

// listImage.forEach(element => {
//     element.addEventListener('click', function() {
//         // Open modal
//         modal.classList.add('open')
//         const imgAlt = element.getAttribute('alt');
//         // Set new url image
//         imageModal.src = `./img/full/${imgAlt}.jpg`;
//         imageModal.classList.add('open');
//     })
// });

// modal.addEventListener('click',(e) => {
//     if(e.target.classList.contains("modal")) {
//         modal.classList.remove("open");
//     };
// });


// // Demo, làm tiếp yêu cầu scroll
// //scroll section book:
// const elementBookToView = document.getElementById("books");
// let sectionBook = function() {
//     elementBookToView.scrollIntoView();
// }

// //scroll section students:
// const elementStudentsToView = document.getElementById("students");
// let sectionStudents = function() {
//     elementStudentsToView.scrollIntoView();
// }


// //scroll section Gallery:
// const elementGalleryToView = document.getElementById("gallery");
// let sectionGallery = function() {
//     elementGalleryToView.scrollIntoView();
// }


// //scroll section colors:
// const elementColorToView = document.getElementById("colors");
// let sectionColor = function() {
//     elementColorToView.scrollIntoView();
// }



// // Button Back To Top
// const backToTop = document.getElementById("btn-top");

// backToTop.onclick = function() {
//     window.scrollTo({ 
//         top: 0, 
//         behavior: "smooth" 
//     });
// }

// // arrow function, toán tử 3 ngôi
// // window.onscroll = () => window.scrollY > 500 ? 
// // backToTop.style.opacity = 1 : backToTop.style.opacity = 0;

// window.onscroll = function() {
//     if(window.scrollY > 500) {
//         backToTop.style.opacity = 1;
//     }
//     else {
//         backToTop.style.opacity = 0;
//     }
// }

// // Bài 4.2:

// const btnChangeColor = document.getElementById('changecolor');


// const defaultColor = `rgb(255, 255, 255)` ; 
// colorText.innerHTML = defaultColor;
// colorText.style.color = defaultColor;

// btnChangeColor.addEventListener('click', function() {
    // const colorText = document.getElementById('color-text');
//     const boxColor = document.getElementById('color');
//     let variable1 = Math.floor(Math.random() * 256);
//     let variable2 = Math.floor(Math.random() * 256);
//     let variable3= Math.floor(Math.random() * 256);
//     let colorChange = `rgb(${variable1}, ${variable2}, ${variable3})`;
//     colorText.innerHTML = colorChange;
//     colorText.style.color = colorChange;
//     boxColor.style.backgroundColor = colorChange;
// });


