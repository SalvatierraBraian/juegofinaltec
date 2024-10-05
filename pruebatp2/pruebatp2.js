let imagenes = []; 
let textos = []; 
let estado = 0; // controlar las imagenes 
let indiceTexto = 0; // control del texto

function preload() {
  // Cargar las 8 imágenes principales
  for (let i = 0; i < 8; i++) {
    imagenes[i] = loadImage('data/comida' + i + '.jpg');
  }
  textos = loadStrings("data/texto.txt"); 
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 8; i++) {
    imagenes[i].resize(640, 480);
  }
  textSize(18);
}

function draw() {
  background(255);

  // imagenes=estado
  image(imagenes[estado], 0, 0);
  textAlign(LEFT, TOP); //elinear mi texto
   if (estado === 3) { 
    text(textos[indiceTexto], 20, 20, 600, 400); // Mostrar el texto
    // Dibujar el botón "Siguiente"
    dibujarBoton(520, 400, 100, 40, "Siguiente");
  }

  if (estado === 2) {
    text(textos[indiceTexto], 20, 20, 600, 400); // Mostrar el texto
    // boton siguiente
    dibujarBoton(520, 400, 100, 40, "Siguiente");
  }

  if (estado === 0) {
    // boton de creditos
    dibujarBoton(520, 10, 100, 40, "Créditos");
    // boton inicial
    dibujarBoton(270, 300, 100, 40, "Empezar");
  }
}

function dibujarBoton(x, y, w, h, texto) {
  fill(200);
  rect(x, y, w, h);
  fill(0);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
}

function mousePressed() {
  // si presionas credito
  if (mouseX > 520 && mouseX < 620 && mouseY > 20 && mouseY < 60) {
    estado = 1; // Cambia a la imagen de créditos
  }

  // si presionas empezar te manda a la pantalla con el primer texto
  if (mouseX > 270 && mouseX < 370 && mouseY > 300 && mouseY < 340) {
    estado = 2; //pantalla 2
    indiceTexto = 0; //texto 1
  }

  //si presionas siguiente te manda a la pantalla con la primera decision 
  if ((estado === 2) && mouseX > 520 && mouseX <620 && mouseY > 400 && mouseY < 440) {
    estado = 3; //pantalla 3 
    indiceTexto = 1; //texto 2
  }
}
