 " use strict";

let btn = document.getElementById("btn");
let billAmount = document.getElementById("bill_amount");
let tipPercent = document.getElementById("tip_percent");
let tipAmount = document.getElementById("tip_amount");
let totalBill = document.getElementById("total_bill");
 

btn.addEventListener("click", function(){
    tipAmount.value = billAmount.value * tipPercent.value /100;
    totalBill.value = parseFloat(billAmount.value)+ parseFloat(tipAmount.value);
})

