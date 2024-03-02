const input = require("readline-sync")
let a = input.questionInt("enter first number: ");
let b = input.questionInt("enter second number: ");
let c = input.questionInt("enter third number: ");
let d = input.questionInt("enter fourt number: ");
let e = input.questionInt("enter fivth number: ");
let f = input.questionInt("enter six number: ");
let g = input.questionInt("enter seventh number: ");
let h = input.questionInt("enter eighth number: ");

if(a>b){l=a;}else{l=b;}
if(c>d){l1=c;}else{l1=d;}
if(l>l1){l2=l;}else{l2=l1;}
if(e>f){l3=e;}else{l3=f}
if(g>h){l4=g;}else{l4=h;}
if(l3>l4){l5=l3;}else{l5=l4;}
if(l2>l5){l6=l2;}else{l6=l5;}
console.log("l6 is greater number",l6)