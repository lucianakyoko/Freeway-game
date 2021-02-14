//Ator:
let xAtor = 85;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  
  }
  if(keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()) {
      yAtor += 3;
    }
  }
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);

    if(colisao) {
      voltaParaPosicaoInicial();
      somDaColisao.play(0, 1, 0.2);

      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaParaPosicaoInicial() {
  yAtor = 370;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(255, 240, 60);
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if(yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play(0, 1, 0.2);
    voltaParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 370;
}