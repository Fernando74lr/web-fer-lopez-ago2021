
var base;
var altura;
var area;

function calcularArea() {
    var baseElement = document.getElementById("base");
    var alturaElement = document.getElementById("altura");

    base = baseElement.value;
    altura = alturaElement.value;
    
    console.log('base', base);
    console.log('altura', altura);

    area = (base * altura) / 2;
    console.log('area', area);

    var areaElement = document.getElementById("resultado");
    areaElement.innerHTML = "Área = " + area;
}