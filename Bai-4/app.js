let gallerys = document.querySelectorAll('.gallery img');
let modal = document.querySelector('.modal');
let imgFull = document.querySelector('.full-img');

gallerys.forEach(function(gallery) {
    gallery.addEventListener('click', function() {
        modal.classList.add('open');
        let imgAlt = gallery.getAttribute('alt');
        imgFull.src = `./img/full/${imgAlt}.jpg`;
        imgFull.classList.add('open');
    })
})

modal.addEventListener('click', function(e) {
    if(e.target.classList.contains('open')) {
        modal.classList.remove('open');
    }
})
