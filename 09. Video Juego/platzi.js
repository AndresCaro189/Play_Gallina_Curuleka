
//Declara el contexto del canvas
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext ("2d");


//Determina moviemiento de teclas
var teclas =  {LEFT:37, RIGHT:39, UP:38, DOWN:40}
document.addEventListener("keydown", dibujarTeclado);
var x_c = 420-80;
var y_c = 420-80;

//Declara los objetos de las imagenes de la villa
//JSON
var fondo = {
    url: "tile.png",
    cargaOk: false
}

var vaca = {
    url: "vaca.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};

var pollo = {
    url: "pollo.png",
    cargaOk: false
};

//Carga el fondo
fondo.imagen = new Image ();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//Carga la vaca
vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

//Carga el pollo
cerdo.imagen = new Image ();
cerdo.imagen.src = "cerdo.png";
cerdo.imagen.addEventListener("load", cargarCerdo);

//Carga el cerdo
pollo.imagen = new Image ();
pollo.imagen.src = "pollo.png";
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo (){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca (){
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdo (){
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollo (){
    pollo.cargaOk = true;
    dibujar();
}

function dibujar(){
    if (fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0, 0);
    }  
        if (vaca.cargaOk){
            for (var v=0; v<cantidad1; v++){
                var x = aleatorio(0, 7);
                var y = aleatorio(0, 7);
                var x = x*60;
                var y = y*60;
                papel.drawImage(vaca.imagen, x, y);
            }
        if (cerdo.cargaOk){
            for (var v=0; v<cantidad2; v++){
                 var x = aleatorio(0, 7);
                 var y = aleatorio(0, 7);
                 var x = x*60;
                 var y = y*60;
                 papel.drawImage(cerdo.imagen, x, y);
                
            }  
        if (pollo.cargaOk){
            for (var v=0; v<cantidad3; v++){
                 var x = aleatorio(0, 7);
                 var y = aleatorio(0, 7);
                 var x = x*60;
                 var y = y*60;
                 papel.drawImage(pollo.imagen, x, y);
                } 
            } 
        
        var c = papel.drawImage(pollo.imagen,x_c,y_c);
        }
    }    
}

var cantidad1 = aleatorio (5, 25);
var cantidad2 = aleatorio (5, 25);
var cantidad3 = aleatorio (5, 25);

//Movimiento
function dibujarTeclado (evento)
{
  var movimiento = 20;
  switch (evento.keyCode)
  {
    case teclas.LEFT:
        console.log ("izquierda");
        x_c = x_c - movimiento;
        papel.drawImage(pollo.imagen,x_c,y_c);
    break;

    case teclas.RIGHT:
        console.log ("derecha");
        x_c = x_c + movimiento;
        papel.drawImage(pollo.imagen,x_c,y_c);
    break;

    case teclas.UP:
        console.log ("Arriva");
        y_c = y_c - movimiento;
        papel.drawImage(pollo.imagen,x_c,y_c);
    break;

    case teclas.DOWN:
        console.log ("Abajo");
        y_c = y_c + movimiento;
        papel.drawImage(pollo.imagen,x_c,y_c);
    break;

    default:
        console.log ("Otra tecla");
  }

}

/*
var z;
for(var i=0; i<10; i++){
    z = aleatorio (10,20);
    document.write(z + ", ");
}
*/

function aleatorio (min, maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}