const images = [
    '../Photos/Photo1.jpg',
    '../Photos/Photo2.jpg',
    '../Photos/Photo3.jpg',
    '../Photos/Photo2.jpg',
    '../Photos/Photo4.jpg',
    '../Photos/Photo5.jpg',
    '../Photos/Photo6.jpg',
    '../Photos/Photo7.jpg',
    '../Photos/Photo8.jpg'
];

let currentIndex = 0;
const background = document.querySelector('.background-image');

function updateImage() {
    background.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Set the first image on load
updateImage();
