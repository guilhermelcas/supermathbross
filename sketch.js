var tela= 1;
var largura= 200;
var altura= 50;
var xMenu= 250;
var yMenu1= 227;
var yMenu2=277;
var yMenu3=327;
var img;
var yMenu4= 365;

function preload() {
  img = loadImage('inicial-bg.png');
  img1 = loadImage('bg.png');
  fontMario = loadFont('fontetema.ttf');
  fontTexto = loadFont('montserrat.ttf')
  
}


function setup() {
  createCanvas(700, 450);
}

function draw() {
  textStyle(BOLD)
  //Tela de menu
  if (tela == 1);{
    background(220);
    image(img, 0, 0)
    
    //Menu com três opções
    


  //Inicio de Jogo
  textAlign(CENTER);
  textSize(26);
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){

    stroke(200);
    fill(0,100,200);
    rect(xMenu, yMenu1, largura, altura, 15);
   if (mouseIsPressed){
      tela = 2;
  }

  }
    fill(240);
    noStroke();
    text("Jogar", 350, 260);

//Tutorial
if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){ 
  stroke(200);
  fill(0,100,200);
  rect(xMenu, yMenu2, largura, altura, 15);
  if (mouseIsPressed){
      tela = 3;
  }
}
  fill(240);
  noStroke();
  textFont(fontMario);
  text("Tutorial", 350, 310);

    //Créditos
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
  stroke(200);
  fill(0,100,200);
  rect(xMenu, yMenu3, largura, altura, 15);
    if (mouseIsPressed){
      tela = 4;
      
  }
  }
  fill(240);
  noStroke();
  text("Creditos", 350, 360);

  } 
if(tela == 2){
    background(220);
    image(img1, 0, 0)
     //Menu com três opções
    //JOGAR
    textSize(60);
    fill(255,255,255);
    noStroke();
    textFont(fontTexto)
    text("JOGO ", 350, 200);
    text("EM AÇÃO", 350, 260);
  //botao voltar
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
  stroke(200);
  fill(0,100,200);
  rect(xMenu, yMenu4, largura, altura, 15);
    if (mouseIsPressed){
      tela = 1;
  
  }
  }
  textSize(28)
  fill(240);
  noStroke();
  textFont(fontMario);
  text("VOLTAR", 350, 400 ); 

     
}
if(tela == 3){
    background(220);
    image(img1, 0, 0)
     //Menu com três opções
    //TUTORIAL
  textAlign(CENTER)  
  textSize(28);
    fill(255,255,255);
    noStroke();
    textFont(fontMario);
    text("TUTORIAL", 50, 35, 600, 300 );
    textFont(fontTexto)
    textSize(20)
    text("O jogo consiste em resolver questões básicas de matemática para alunos do 4º ano do ensino fundamental.", 110, 150, 480);
  //botao voltar
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
  stroke(200);
  fill(0,100,200);
  rect(xMenu, yMenu4, largura, altura, 15);
    if (mouseIsPressed){
      tela = 1;
  
  }
  }
  textSize(28);
  textFont(fontMario)
  fill(240);
  noStroke();
  text("VOLTAR", 350, 400 ); 

    
}
if(tela == 4){
    background(220);
    image(img1, 0, 0)
     //Menu com três opções
    //Titulo
  textAlign(CENTER)  
  textSize(18);
    fill(255,255,255);
    noStroke();
    textFont(fontTexto)
    text("(EF04MA03) Resolver e elaborar problemas com numeros naturais envolvendo adicao e subtracao, utilizando estrategias diversas, como calculo, calculo mental e algoritmos, alem de fazer estimativas do resultado. ", 50,100, 600, 300 );
    text("Desenvolvido por Guilherme Lucas - LOP/ECT ", 50, 250, 600, 300 );
  //botao voltar
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
  stroke(200);
  fill(0,100,200);
  rect(xMenu, yMenu4, largura, altura, 15);
    if (mouseIsPressed){
      tela = 1;
  
  }
  }
  textSize(28)
  fill(240);
  noStroke();
  textFont(fontMario);
  text("VOLTAR", 350, 400 ); 
    
}  
}