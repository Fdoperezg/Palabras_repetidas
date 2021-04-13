var txt = "This is an example of string to count characters"
    count = 0;

for (var i = 0; i < txt.length; i++) {
    if(txt.charAt(i) === 'e') {
        count++;
    }
}
console.log(count);

/* This one here can count letters instead of words 
function letterCount(str) {
    return str.split('').length; //The only difference is that you don't split the string by an space
}

console.log(letterCount('Hello how are you'))
*/

