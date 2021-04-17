var entrada = document.getElementById('texto-entrada').innerHTML

function countWords(str) {
    return str.split(' ').length;
}

console.log (countWords(entrada))

var words_quantity = countWords(entrada)

var texto_del_link = document.createTextNode(words_quantity);

document.getElementById('resultados').appendChild(texto_del_link)