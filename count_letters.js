//This one here can count letters instead of words 
function letterCount(str) {
    str = str.trim();
    str = str.toLowerCase();
    str = str.replace(new RegExp(' ','g'),'');

    return str.split('').length; //The only difference is that you don't split the string by an space
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function countEachLettr(str) {
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
    
    str = str.trim();
    str = str.toLowerCase();
    str = str.replace(new RegExp(' ','g'),'')
    str_array = str.split('')
    var caracteres = []
    for(x = 0; x < str_array.length; x++) {
        letra = str_array[x];
        var count = 0;
        for(y = 0; y < str_array.length; y++) {
            if(letra == str_array[y]) {
                count++
            }
        }
        var texto = letra + ": " + count
        caracteres.push(texto)
    }
    return caracteres.filter(onlyUnique)
}

var text2 = 'bla bla'

console.log(countEachLettr(text2))

