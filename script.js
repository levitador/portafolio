let currentImage = 0;
const images = document.querySelectorAll('.mug');
const container = document.getElementById('imagenes');

function changeImage() {
            images[currentImage].classList.remove('active'); // Quita la clase
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].classList.add('active');    // Agrega la clase
        }

        container.addEventListener('mouseenter', changeImage);