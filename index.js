var entrada = document.getElementById('texto-entrada').innerHTML

function countWords(str) {
    return "Cantidad de palabras: " + str.split(' ').length;
}

function ListWords(str) {
    var palabras = str.split(' ')
    for(var i = 0; i < palabras.length; i++){
        var palabra = palabras[i]
        
        var p = document.createElement("p");
        var texto_del_link = document.createTextNode();
        resultados.appendChild(texto_del_link);

        document.getElementById('resultados').appendChild(text_palabra)
    }
}

console.log (countWords(entrada))

var words_quantity = countWords(entrada)

var texto_del_link = document.createTextNode(words_quantity);

document.getElementById('resultados').appendChild(texto_del_link)
