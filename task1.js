function sum(){
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var sum=n1+n2
    document.getElementById("res").value=sum
}
function subtract(){
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var difference=n1-n2
    document.getElementById("res").value=difference
}
function multiply(){
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var product=n1*n2
    document.getElementById("res").value=product
}
function divide(){
    var n1=parseInt(document.getElementById("num1").value)
    var n2=parseInt(document.getElementById("num2").value)
    var quotient=n1/n2
    document.getElementById("res").value=quotient
}