function letterCount(str) {
    str = str.trim();
    str = str.toLowerCase();
    // str = str.replace(/(\r\n|\,|\.|\n|\r|\s)/gm, " ")
    str = str.replace(new RegExp(' ','g','|\s'),''); // Regular exp

    str = str.split('')
    var unique = str.filter(onlyUnique);
    return unique.length; //The only difference is that you don't split the string by an space
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function countEachLetter(str) {
    letters = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
        }
    entrada = str
    str = str.trim();
    str = str.toLowerCase();
    str = str.replace(/(\r\n|\?|\,|\.|\n|\r|\s)/gm, "")
    str_array = str.split('')
    var caracteres = []
    for(x = 0; x < str_array.length; x++) {
        letra = str_array[x];
        caracteres.push(letra)
    }
    for(var i = 0; i < caracteres.length; i++){
        //aqui se hace un arreglo de la palabra
        let arr = [...caracteres[i].toLowerCase()];
        arr.forEach(element => letters[element]+=1 );
    }

    var resultados = document.getElementById('resultados')

    var letters_quantity = letterCount(entrada)
    var texto = "Cantidad de Letras: " + letters_quantity
    var texto_del_link = document.createTextNode(texto);

    resultados.appendChild(texto_del_link)
    
    
    var unique = caracteres.filter(onlyUnique).sort();

    for(var i = 0; i < unique.length ; i++) {
        // 
        var strong = document.createElement('strong');

        // let arr = [...caracteres[i].toLowerCase()];
        
        var texto = unique[i] + ": " + letters[unique[i]]

        var texto_strong = document.createTextNode(texto);
        
        strong.appendChild(texto_strong);
        
        var p = document.createElement('p');
        p.appendChild(strong);
        
        resultados.appendChild(p);
        // 
    }

    return letters
}

var text1 = document.getElementById('texto-entrada').innerHTML
console.log(letterCount(text1))
console.log(countEachLetter(text1))