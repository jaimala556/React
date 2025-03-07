const name ='jaimala';
document.querySelector('#name').innerText=name;

let wecome="helloo message"
console.log(wecome)
let bagprice=(15599-(10/100*15599))-272;
let jeansprice=(2499-(41/100*2499))-29;
let GSTpercentage=18;
let bagvalue=Math.round((bagprice + jeansprice +25+20) *(100+GSTpercentage)/100);
 let bagSummary=`your final mintra amount is ₹${bagvalue}`;
 console.log(bagSummary);
 console.log(bagvalue);
 
 
 

 