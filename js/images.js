// Carrega as imagens e sons do jogo:
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage('/images/estrada.png');
  imagemDoAtor = loadImage('/images/ator-1.png');
  imagemCarro1 = loadImage('/images/carro-1.png');
  imagemCarro2 = loadImage('/images/carro-2.png');
  imagemCarro3 = loadImage('/images/carro-3.png');
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]

  somDaTrilha = loadSound('/song/trilha.mp3');
  somDaColisao = loadSound('/song/colidiu.mp3');
  somDoPonto = loadSound('/song/pontos.wav');
}

