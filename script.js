let currentImage = 0;
const images = document.querySelectorAll('.mug');
const container = document.getElementById('imagenes');

function changeImage() {
            images[currentImage].classList.remove('active'); // Quita la clase
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].classList.add('active');    // Agrega la clase
        }

        container.addEventListener('mouseenter', changeImage);


// Navegación entre secciones
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const seccionDestino = link.getAttribute('href').substring(1);

        // Ocultar todas las secciones
        document.querySelectorAll('.section').forEach(seccion => {
            seccion.classList.remove('active');
        });

        
        // Remover 'active' de todos los enlaces
        document.querySelectorAll('.nav-link').forEach(nav => {
            nav.classList.remove('active');
        });

        // Mostrar sección destino
        const seccionActiva = document.getElementById(seccionDestino);
        if (seccionActiva) {
            seccionActiva.classList.add('active');
            link.classList.add('active');
        }
    });
});
