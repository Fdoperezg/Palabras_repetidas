var entrada = document.getElementById('texto-entrada').innerHTML

function countWords(str) {
    return str.split(' ').length;
}

console.log (countWords(entrada))

var words_quantity = countWords(entrada)

document.getElementById('resultados').innerHTML
