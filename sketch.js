let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload() {
  imagemDaEstrada = loadImage('/images/estrada.png');
  imagemDoAtor = loadImage('/images/ator-1.png');
  imagemCarro = loadImage('/images/carro-1.png');
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, 100, 366, 30, 30);
  image(imagemCarro, 420, 40, 60, 40);
}