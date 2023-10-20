// Declaración de una constante llamada 'mgsHola' y asignación de un valor de cadena.
const mgsHola = 'System.out.println("Bienvenidos a Java");';

// Selección de un elemento HTML con el atributo 'id' igual a 'output' y actualización de su contenido interno.
document.getElementById('output').innerHTML = mgsHola;

// sonido del video
let video = document.getElementById('video-background'); // Obtiene el elemento de video con el id 'video-background' y lo almacena en la variable 'video'.

let soundToggle = document.getElementById('sound-toggle'); // Obtiene el elemento de alternancia de sonido con el id 'sound-toggle' y lo almacena en la variable 'soundToggle'.

soundToggle.addEventListener('click', function() { // Agrega un event listener al elemento 'soundToggle' para que se active cuando se hace clic en él.
    if (video.muted) { // Comprueba si el video está en modo silencio (muted).
        video.muted = false; // Si el video está en modo silencio, lo desactiva (no silencio).
        soundToggle.classList.remove('sound-off'); // Remueve la clase 'sound-off' del botón de alternancia de sonido.
        soundToggle.classList.add('sound-on'); // Agrega la clase 'sound-on' al botón de alternancia de sonido.
    } else { // Si el video no está en modo silencio.
        video.muted = true; // Establece el video en modo silencio.
        soundToggle.classList.remove('sound-on'); // Remueve la clase 'sound-on' del botón de alternancia de sonido.
        soundToggle.classList.add('sound-off'); // Agrega la clase 'sound-off' al botón de alternancia de sonido.
    }
});

