
function cambiarSeccion(index) {

    const secciones = document.querySelectorAll('.tab');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    secciones[index].style.display = 'block';
}