const seccionesPagina = new fullpage('#fullpage', {
	// ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
	autoScrolling: true, // Se activa el scroll.
	fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
	fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
	easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
	scrollingSpeed: 1000, // Velocidad del scroll. Valores: en milisegundos.
	css3: true, // Si usara CSS3 o javascript.
	easingcss3: 'ease-out', // Curva de velocidad del efecto.
	loopBottom: false,
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
	navigation: true, // Muesta la barra de navegacion.
	menu: '#menu', // Menu de navegación.
	anchors: ['inicio', 'sobremi', 'redes'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
	navigationTooltips: ['Inicio', 'Sobre Mí', 'Redes'], // Tooltips que mostrara por cada boton.
	showActiveTooltip: false, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
	sectionsColor : ['#353849', '#da4d4f', '#353849'], // Color de fondo de cada seccion.
	verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
	// ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
	controlArrows: true, // Flechas del slide
	slidesNavigation: false, // Indicadores del slide
	afterLoad: function(origin, destination){
		if(destination.anchor == 'contacto'){
			document.querySelector('.footer h2').style.opacity = 1;
		}
	}
});
