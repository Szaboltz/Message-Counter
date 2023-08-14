var message = prompt("Escreva uma messagen: ");
var mSlice = message.slice(0, 140);
var mLength = mSlice.length

alert(mSlice);
alert("Você escreveu: " + mLength + " Caracteres, e possui: " + (140 - mLength) + " restantes!" );
