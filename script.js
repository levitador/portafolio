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

const track = document.querySelector('.track');
  const total = track.children.length;
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prev.addEventListener('click', () => {
    index = (index - 1 + total) % total; // ciclo
    update();
  });

  next.addEventListener('click', () => {
    index = (index + 1) % total;
    update();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prev.click();
    if (e.key === 'ArrowRight') next.click();
  });
