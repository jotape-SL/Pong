function setup() {
    createCanvas(600, 400);
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
        velocidadeXBolinha *= -1
    }
    if (yBolinha + raio > height || yBolinha < raio) {
        velocidadeYBolinha *= -1
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