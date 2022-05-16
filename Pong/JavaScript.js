function setup() {
    createCanvas(600, 400);
    trilha.loop();
    trilha.setVolume(.07)
}

function draw() {
    background(0);
    mostraBolinha();
    movimentoBolinha();
    colisaoBolinha();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentoRaquete();
    movimentoRaqueteOponente();
    colisaoRaquete(xRaquete, yRaquete);
    colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPontos();
}

//sons

let raquetada;
let ponto;
let trilha;

function preload() {
    raquetada = loadSound('raquetada.mp3');
    ponto = loadSound("ponto.mp3");
    trilha = loadSound("Wii Music.mp3");
}

//placar e pontos

let meusPontos = 0;
let oponentePontos = 0;

function incluiPlacar() {
    stroke(255)
    textSize(25);
    textAlign(CENTER);
    fill(color(255, 140, 0));
    rect(150, 10, 45, 30, 5);
    fill(255);
    text(meusPontos, 173, 33);
    fill(color(255, 140, 0));
    rect(450, 10, 45, 30, 5);
    fill(255);
    text(oponentePontos, 473, 33);
}

function marcaPontos() {
    if (xBolinha > 590) {
        meusPontos += 1
        ponto.play();
        ponto.setVolume(.08)
    }
    if (xBolinha < 10) {
        oponentePontos += 1
        ponto.play();
        ponto.setVolume(.08)
    }
}

//Bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2

let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function colisaoBolinha() {
    if (xBolinha + raio > width || xBolinha < raio) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha < raio) {
        velocidadeYBolinha *= -1;
    }
}

//Raquete Aliada

let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function mostraRaquete(x, y) {
    rect(x, y, larguraRaquete, alturaRaquete, 5);
}

function movimentoRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 6
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 6
    }
}

function colisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
        raquetada.play();
        raquetada.setVolume(.3)
    }
}

//Raquete Oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function movimentoRaqueteOponente() {
    if (keyIsDown(87)) {
        yRaqueteOponente -= 6
    }
    if (keyIsDown(83)) {
        yRaqueteOponente += 6
    }
}