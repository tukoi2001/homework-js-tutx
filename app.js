
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



