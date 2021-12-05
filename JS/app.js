let villaPlatzi = document.getElementById('villaPlatzi');
let lienzo = villaPlatzi.getContext('2d');

let teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

let fondo = {
    url: '../img/tile.png',
    cargaOk: false
};

let vaca = {
    url: '../img/vaca.png',
    cargaOk: false
};

let lobo = {
    url: '../img/lobo.png',
    cargaOk: false,  
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVaca);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener('load', cargarLobo);

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarLobo() {
    lobo.cargaOk = true;
    dibujarLobo();
}

let cantidadVacas = aleatorio(0, 3);

function dibujar() {
    
    if (fondo.cargaOk) {
        lienzo.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOk) {
        for (let v = 0; v < cantidadVacas; v++) {
            let x = aleatorio(0, 5);
            let y = aleatorio(0, 5);
            x = x * 80;
            y = y * 80;
            lienzo.drawImage(vaca.imagen, x, y);
        }
    }   

}

let xLobo = 0;
let yLobo = 0;

function dibujarLobo()
{
    if (lobo.cargaOk) { 
        lienzo.drawImage(lobo.imagen, xLobo, yLobo);
    }
} 

function borrarLobo()
{
    lienzo.clearRect(0, 0, villaPlatzi.width, villaPlatzi.height)
    dibujar();
}

document.addEventListener('keydown', moverLobo)

function moverLobo(event)
{
    borrarLobo()
    let movimiento = 40; 
    switch(event.keyCode)
    {
        case teclas.UP: 
        dibujarLobo(xLobo, yLobo, xLobo, yLobo - movimiento);
        yLobo = yLobo - movimiento;
        break;
        case teclas.DOWN: 
        dibujarLobo(xLobo, yLobo, xLobo, yLobo + movimiento);
        yLobo = yLobo + movimiento;
        break;
        case teclas.RIGHT: 
        dibujarLobo(xLobo, yLobo, xLobo + movimiento , yLobo);
        xLobo = xLobo + movimiento;
        break;
        case teclas.LEFT: 
        dibujarLobo(xLobo, yLobo, xLobo - movimiento , yLobo);
        xLobo = xLobo - movimiento;
        break;
        default:
        console.log('ha presionado otra tecla')
    }

}

function aleatorio(min, max) {
    let result = Math.floor((Math.random() * (max - min + 1))) + min;
    return (result);
}

