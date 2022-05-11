function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentoBolinha();
    colisaoBolinha();
    mostraRaquete();
    movimentoRaquete();
    colisaoRaquete();
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

//Raquete

let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function mostraRaquete() {
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete, 5)
}

function movimentoRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 6
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 6
    }
}

function colisaoRaquete() {
    if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}