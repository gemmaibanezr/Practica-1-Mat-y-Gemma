# Practica-1-Mat-y-Gemma

<!-- Teatro: ---------------------------------------------------------------------------------->

MARCELA (Una canción de Cervantes) --> Interpretada por Celia Freijeiro y dirigida por Leticia Dolera.
Domingo 30 - Teatro Jaime Salom 
Precio de las entradas: 7€
Duración: 90 minutos

Argumento: Un hombre ha aparecido muerto: Grisóstomo. Una mujer ha sido acusada de su muerte: Marcela.
Los pastores sospechan de Marcela. No les gusta su hermosura, ni su orgullo.
Estamos en 1605 y todos creen que merece un castigo. Pero Marcela no acata la norma y habla en su propia defensa.
Marcela es uno de los personajes más célebres de Cervantes. De la mano de tres creadoras actuales, Leticia Dolera, Celia Freijeiro y María Folguera, descubriremos los muchos fuegos que iluminan este mito.

--------------------------------------------------------------------------------------------------

Personas, lugares y cosas --> Protagonizada por Irene Escolar.
Desde el 25 de noviembre hasta el 11 de enero de 2026 - Sala Principal del Teatro Español
Precio de las entradas: entre 6 y 22€
Duración: 140 minutos (con descanso)

Argumento: Emma es actriz. Está en escena actuando el papel protagonista de La gaviota. “A mí habría que matarme” dice. Porque lo pone el texto, pero también porque lo piensa. Y unos instantes después, colapsa. Emma, Nina y todo. Ahí empezará su viaje hacia la recuperación. Ahí empieza Personas, lugares y cosas. Los días en la clínica de desintoxicación junto al grupo de profesionales y pacientes serán el marco en el que Duncan Macmillan desplegará este viaje hacia el corazón del trauma, en la búsqueda por sanar la herida. ¿Cómo volver a estar aquí, después de tanto querer irse? En la obra no hay certezas pero sí un acción sostenida: la de escuchar. Escuchar a los otros, dejar de mirarse por un rato. Y así, verse mejor. Saberse parte de un grupo que conoce tanto del placer como del sufrimiento. “Estoy aquí. Estás aquí. Estamos aquí” dice Emma. Y algo del dolor se calma al saberse cerca.

Más breve: Emma, una actriz que se siente identificada con su papel en La gaviota, sufre un colapso mental en el escenario. Este evento la lleva directamente a una clínica de desintoxicación, donde comienza la obra "Personas, lugares y cosas". Rodeada de otros pacientes y profesionales, la obra de Duncan Macmillan es el viaje de Emma hacia la recuperación, explorando la necesidad de escuchar a los demás y dejar de lado el auto-foco para sanar su profundo trauma y aprender a querer volver a estar presente.

*Aviso al público: El espectáculo contiene efectos realizados con luz estroboscópica

--------------------------------------------------------------------------------------------------

La mujer rota --> Protagonizada por Anabel Alonso y dirigida por Heidi Steinhardt
Hasta el 20 de noviembre, de martes a domingo a las 19:00, en el Teatro Infanta Isabel
Precio: desde 20 €
Duración: 90 Minutos

Argumento:

Nochevieja.

Murielle está en su casa, sola. Los ruidos de la calle y los gritos de sus vecinos celebrando le impiden conciliar el sueño. En esa vigilia, los recuerdos se enfrentan a un presente desolador y a un futuro aún menos prometedor. Lo perdido, lo arrebatado, el fracaso y la soledad la han dejado fuera de juego, deambulando en un limbo donde todavía se debate entre la supervivencia y la muerte.

Su verdadera tragedia—que también es comedia—ha hecho trizas su autoestima como mujer, como esposa, como madre y como hija.

--------------------------------------------------------------------------------------------------

<!-- CSS -->

.image-container .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.479); 
    color: #082c55; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.image-container:hover img {
    transform: scale(1.1); 
    opacity: 0.9; 
}

.image-container:hover .overlay {
    opacity: 1; 
}

<!-- HTML -->

<section id="conoce-santander-imagenes">
        <div class="grid">
            <div class="image-container">
                <img src="media/img/Palacio-de-la-Magdalena.png" alt="Palacio de la Magdalena">
                <div class="overlay">Palacio de la Magdalena</div>
            </div>
            <div class="image-container">
                <img src="media/img/Catedral-de-Santander.png" alt="Catedral de Santander">
                <div class="overlay">Catedral de Santander</div>
            </div>
            <div class="image-container">
                <img src="media/img/Playa-del-Sardinero.png" alt="Playa del Sardinero">
                <div class="overlay">Playa del Sardinero</div>
            </div>
            <div class="image-container">
                <img src="media/img/Peninsula-de-la-Magdalena.png" alt="Península de la Magdalena">
                <div class="overlay">Península de la Magdalena</div>
            </div>
            <div class="image-container">
                <img src="media/img/Centro-Botin.png" alt="Centro Botín">
                <div class="overlay">Centro Botín</div>
            </div>
            <div class="image-container">
                <img src="media/img/Museo-Maritimo-del-Cantabrico.png" alt="Museo Marítimo del Cantábrico">
                <div class="overlay">Museo Marítimo del Cantábrico</div>
            </div>
        </div>
    </section>