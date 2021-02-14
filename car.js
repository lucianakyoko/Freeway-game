//Carro:
let xCarro = 600;
let yCarro = 40;

function mostraCarro() {
  image(imagemCarro, xCarro, yCarro, 60, 40);
}

function movimentaCarro() {
  xCarro -= 2;
}