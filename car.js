//Carro 1:
let xCarro1 = 600;
let yCarro1 = 40;
let velocidadeCarro1 = 2;

//Carro 2:
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 3;

//Carro 3:
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 2.5;


function mostraCarro() {
  image(imagemCarro1, xCarro1, yCarro1, 60, 40);
  image(imagemCarro2, xCarro2, yCarro2, 60, 40);
  image(imagemCarro3, xCarro3, yCarro3, 60, 40);
}

function movimentaCarro() {
  xCarro1 -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}

function voltaPosicaoInicialDoCarro() {
  if(xCarro1 < -50) {
    xCarro1 = 600;
  }
  if(xCarro2 < -50) {
    xCarro2 = 600;
  }
  if(xCarro3 < -50) {
    xCarro3 = 600;
  }
}