const noBtn = document.getElementById("noBtn"); // Botón original dentro de la carta
const yesBtn = document.getElementById("yesBtn");
const extraMessage = document.getElementById("extraMessage");
const movingNoBtn = document.getElementById("movingNoBtn"); // Nuevo botón que se moverá

noBtn.addEventListener("click", () => {
    noBtn.style.display = "none"; // Ocultar el botón original
    movingNoBtn.style.display = "block"; // Mostrar el nuevo botón
});

// Evento para mover el nuevo botón "No"
movingNoBtn.addEventListener("mouseover", () => {
    // Obtener dimensiones de la pantalla y del botón
    const btnWidth = movingNoBtn.offsetWidth;
    const btnHeight = movingNoBtn.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calcular límites para que no se salga de la pantalla
    const maxX = screenWidth - btnWidth - 10;
    const maxY = screenHeight - btnHeight - 10;

    // Generar nuevas coordenadas dentro de los límites
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    // Aplicar nuevas coordenadas al botón
    movingNoBtn.style.left = `${newX}px`;
    movingNoBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
        window.location.href = "corazon.html";
    }
);








