let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;

let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;

function setup() {
    createCanvas(500, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentoBolinha();
    colisaoBolinha();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function colisaoBolinha() {
    if (xBolinha > (width - 10) || xBolinha < 10) {
        velocidadeXBolinha *= -1
    }
    if (yBolinha > (height - 10) || yBolinha < 10) {
        velocidadeYBolinha *= -1
    }
}