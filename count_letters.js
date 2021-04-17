//This one here can count letters instead of words 
function letterCount(str) {
    str = str.trim();
    str = str.toLowerCase();
    str = str.replace(new RegExp(' ','g'),'');

    return str.split('').length; //The only difference is that you don't split the string by an space
}

console.log(letterCount('H H hh H    H  '))


