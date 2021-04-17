
function countWords(str) {
    return "Cantidad de palabras: " + str.split(' ').length;
}

function ListWords(str) {
    str = str.replace(/(\r\n|\,|\.|\n|\r|\s)/gm, " ")
    var palabras = contar_palabras(str)
    var resultados = document.getElementById('resultados')
    var unicos = []
    for(var i = 0; i < palabras.length ; i++){
        if (palabras[i].palabra != "")
            palabra = palabras[i].palabra
            var cant = 0
            for(var x = 0; x < palabras.length ; x++){
                if (palabras[x].palabra == palabra){
                cant++
                }
            }
        // if ya existe no hay que push
        var sw = 0
        for(var j = 0; j < unicos.length ; j++){
            var unico = unicos[j]
            if (unico.palabra == palabra) {
                sw = 1
            // salir de ciclo
            }
        }
        if (sw == 0){
            unicos.push(new contadorPalabra(palabra, cant))
        }

    }

    for(var i = 0; i < unicos.length ; i++){
        var palabra = unicos[i];
        
        var strong = document.createElement('strong');
        var texto = palabra.palabra + ":" + palabra.cantidad
        var texto_strong = document.createTextNode(texto);
        
        strong.appendChild(texto_strong);
        
        var p = document.createElement('p');
        p.appendChild(strong);
        
        resultados.appendChild(p);
    }
    return unicos
}

function contadorPalabra(palabra, cantidad=1){
    this.palabra = palabra;
    this.cantidad = cantidad;
}

function contar_palabras(texto){
    const palabras = []
    var texto = texto.split(" ");
    for( var i = 0 ; i < texto.length ; i++){
        palabra = texto[i];
        palabras.push(new contadorPalabra(palabra))
    }
    
    return palabras;
}

function initilize(){
    var entrada = document.getElementById('texto-entrada').innerHTML

    // Cantidad de Palabras
    var words_quantity = countWords(entrada)
    var texto_del_link = document.createTextNode(words_quantity);
    document.getElementById('resultados').appendChild(texto_del_link)
    // 
    ListWords(entrada)
}

initilize()
