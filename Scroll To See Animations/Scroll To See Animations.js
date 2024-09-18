
const containers = document.querySelectorAll('.container');

containers.forEach((container, index) => {

  if (index % 2 === 0) {
    container.classList.add('from-left');
  } else {
    container.classList.add('from-right');
  }

  container.style.backgroundImage = `url('/img/${(index % 3) + 1}.jpg')`; 
});

// Función para comprobar la visibilidad del contenedor
function checkVisibility() {
  containers.forEach(container => {
    const rect = container.getBoundingClientRect();
    
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      container.classList.add('show');
    } else {
      container.classList.remove('show');
    }
  });
}

// Detectar el scroll de la página completa (window)
window.addEventListener('scroll', checkVisibility);

// Ejecutar la función una vez para comprobar la visibilidad al cargar la página
window.addEventListener('load', checkVisibility);
