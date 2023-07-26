function maskCcreditCard(cardNumber){
    const str = String(cardNumber).replace(" ","").replace("-","");
    const last = str.slice(-4);
    return last.padStart(str.length,"*");
}
console.log(maskCcreditCard(5022291085471220));
console.log(maskCcreditCard("5022291085471220"));
console.log(maskCcreditCard("5022-2910-8547-1220"));