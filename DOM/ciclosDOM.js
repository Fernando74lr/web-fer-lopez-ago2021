var myText;
var result;
var number = 5;
var textElement = document.getElementById("myText");

function creaP() {
    myText = textElement.value;
    console.log(myText);
    result = "";
    for (let i = 0; i < number; i++) {
        result += '<p>' + myText + '</p>';
    }
    console.log(result);
    document.getElementById("parrafos").innerHTML = result;
}

function creaLista() {
    myText = textElement.value;
    console.log(myText);
    result = "<ol>";
    for (let i = 0; i < number; i++) {
        result += '<li>' + myText + '</li>';
    }
    result += "</ol>";
    console.log(result);
    document.getElementById("listas").innerHTML = result;
}

function creaTable() {
    myText = textElement.value;
    console.log(myText);
    result = "<table border=1>";
    result += "<tr><th> Texto </th></tr>";
    for (let i = 0; i < number; i++) {
        result += '<tr><td>' + myText + '</td></tr>';
    }
    result += "</table>";
    console.log(result);
    document.getElementById("tabla").innerHTML = result;
}
