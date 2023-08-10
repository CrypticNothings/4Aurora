const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const clearButton = document.getElementById("clear-button");
const colorButtons = document.querySelectorAll(".color-button");

let isDrawing = false;
let currentColor = "black";

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
clearButton.addEventListener("click", clearCanvas);

colorButtons.forEach(button => {
    button.addEventListener("click", changeColor);
});

function startDrawing(e) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
}

function draw(e) {
    if (!isDrawing) return;

    context.lineWidth = 2;
    context.lineCap = "round";
    context.strokeStyle = currentColor;

    context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
}

function stopDrawing() {
    isDrawing = false;
    context.beginPath();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function changeColor(e) {
    currentColor = e.target.id;
    context.strokeStyle = currentColor;
}
