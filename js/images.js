// Carrega as imagens do jogo:
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

function preload() {
  imagemDaEstrada = loadImage('/images/estrada.png');
  imagemDoAtor = loadImage('/images/ator-1.png');
  imagemCarro1 = loadImage('/images/carro-1.png');
  imagemCarro2 = loadImage('/images/carro-2.png');
  imagemCarro3 = loadImage('/images/carro-3.png');
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3]
}