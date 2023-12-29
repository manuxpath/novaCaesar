
function cambiarSeccion(index) {

    const secciones = document.querySelectorAll('.tab1');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    secciones[index].style.display = 'block';
}