function mostrarSeccion(seccion) {
    // Oculta todas las secciones
    document.querySelectorAll('.contenido').forEach(sec => sec.classList.add('oculto'));

    // Muestra la sección seleccionada
    document.getElementById(seccion).classList.remove('oculto');

    // Resalta la opción activa en la barra de navegación
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('activo'));
    event.target.classList.add('activo');
}
