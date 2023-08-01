const number = readline();
function maskCreditCard(cardNumber){
    const str = String(cardNumber).replace(" ","").replace("-","");
    const last = str.slice(-4);
    return last.padStart(str.length,"*");
}
console.log(maskCreditCard(number));