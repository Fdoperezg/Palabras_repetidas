var entrada = document.getElementById('texto-entrada').innerHTML

function countWords(str) {
    return "Cantidad de Palabras: " + str.split(' ').length;
}

function ListWords(str) {
    var palabras = str.split(' ')
    var resultados = document.getElementById('resultados')
    for(var i = 0; i < palabras.length ; i++){
        var palabra = palabras[i];
        
        var p = document.createElement("p"); 
        var texto_del_link = document.createTextNode(p); 
        resultados.appendChild(texto_del_link);

    }
}

console.log (countWords(entrada))

var words_quantity = countWords(entrada)

var texto_del_link = document.createTextNode(words_quantity);

document.getElementById('resultados').appendChild(texto_del_link)

ListWords(entrada)
