// This is the compute function that calculates the interests
function compute()
{
    //Here we take the value of the amount
    var principal = document.getElementById("principal").value;
    
    //This conditional provides the data consistace, and we ensure that amount > 0
    if (principal < 1)
    {
        alert("Enter a positive number")
        return
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * parseFloat(years) / 100;

    //Now we take the actual year and add the numbers of years for the interest
    var ano_d = new Date().getFullYear() + parseFloat(years);
    var texto = "If you deposit <span style='background-color:yellow;'>" + principal.toString() + "</span>,<br> at an interest rate of  <span style='background-color:yellow;'>" + rate.toString() + "% </span>.<br> You will receive an amount of <span style='background-color:yellow;'>" + interest.toString() + "</span>,<br> in the year <span style='background-color:yellow;'>" + ano_d.toString() + "</span>" ;
    var n_us = document.getElementById("ansi").innerHTML = texto;
}

function barra()
{
    //We put the the percentage of the range value
    var rate = document.getElementById("rate").value.toString();
    var result = document.getElementById("porcentaje").innerHTML = rate + "%";
}        
