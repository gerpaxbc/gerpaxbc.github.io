let operacion = "";
let valor1 = 0;
let valor2 = 0;
let nop = 0;
let act = 0;
let enop=0;
let ndot = 0;

function sumar(a,b){
    console.log(a);
    console.log(b);

    if (b == "0"){
        if (a!="."){
            b="";
        }
    }
    const resultado = b + a;
    return resultado;
}

function hacer_calculo(a,b){
    let resultado=0;

    switch(operacion) {
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;
        case "*":
            resultado = a * b;
            break;
        case "/":
            if (b!=0){
                resultado = a / b;
            }
            else{
                resultado = "error";
            }
            break;
    }
    return resultado;
}

function factorial(n){
    if (n % 1 == 0) {
        if (n==0) {
            return 1;
        }
        else {
            return n * factorial(n-1);
        }    
    } 
    else {
        return  "No es numero entero";
    }
}

document.querySelector('#dot').addEventListener('click',function(){
    if (enop==0 && ndot == 0){
        const num1= document.getElementById('dot').textContent;
        const res= document.getElementById('resultado').textContent;

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
        ndot =1;
    }
 })

document.querySelector('#n1').addEventListener('click',function(){
    if (enop==0){
        const num1= document.getElementById('n1').textContent;
        const res= document.getElementById('resultado').textContent;

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
 })

document.querySelector('#n2').addEventListener('click',function(){
    if (enop==0){
        const num1=document.getElementById('n2').textContent.toString();
        const res= document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})

document.querySelector('#n3').addEventListener('click',function(){
    if (enop==0){
        const num1= document.getElementById('n3').textContent.toString();
        const res= document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})

document.querySelector('#n4').addEventListener('click',function(){
    if (enop==0){
        const num1= document.getElementById('n4').textContent.toString();
        const res= document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})
document.querySelector('#n5').addEventListener('click',function(){
    if (enop==0){
        const num1= document.getElementById('n5').textContent.toString();
        const res= document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})
document.querySelector('#n6').addEventListener('click',function(){
    if (enop==0){
        const num1=document.getElementById('n6').textContent.toString();
        const res= document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})
document.querySelector('#n7').addEventListener('click',function(){
    if (enop==0){
        const num1= document.getElementById('n7').textContent.toString();
        const res=document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})
document.querySelector('#n8').addEventListener('click',function(){
    if (enop==0){
        const num1=document.getElementById('n8').textContent.toString();
        const res= document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})
document.querySelector('#n9').addEventListener('click',function(){
    if (enop==0){
        const num1= document.getElementById('n9').textContent.toString();
        const res= document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})
document.querySelector('#n0').addEventListener('click',function(){
    if (enop==0){
        const num1= document.getElementById('n0').textContent.toString();
        const res= document.getElementById('resultado').textContent.toString();

        const resultado = sumar(num1,res)
        document.getElementById('resultado').textContent=resultado;
    }
})
document.querySelector('#clear').addEventListener('click',function(){
    document.getElementById('resultado').textContent="0";
    valor1 = 0;
    valor2=0;
    nop=0;
    operacion = "";
    document.getElementById('historia').textContent ="";
    act=0;
    enop=0;
    ndot =0;
})
document.querySelector('#corrige').addEventListener('click',function(){
    document.getElementById('resultado').textContent="0";
    ndot =0;
})

document.querySelector('#calcula').addEventListener('click',function(){
    if (act!=0){
        valor2= Number(document.getElementById('resultado').textContent);

        const resultado = hacer_calculo(Number(valor1),valor2);
        document.getElementById('resultado').textContent=resultado;
        valor1=resultado;
        document.getElementById('historia').textContent = document.getElementById('historia').textContent + valor2;
        valor2 = 0;
        operacion ="";
        nop+=1;
        act=0;
        enop=1;
        ndot =0;
    }
})

document.querySelector('#suma').addEventListener('click',function(){
    if (operacion ==""){
        operacion = "+";
        enop=0;
        ndot =0;
        valor1 = document.getElementById('resultado').textContent;
        document.getElementById('resultado').textContent="0";
        act=1;
        if (nop==0){
            document.getElementById('historia').textContent = document.getElementById('historia').textContent + valor1 + " " + operacion + " ";
        }
        else{
            document.getElementById('historia').textContent = document.getElementById('historia').textContent + " " + operacion + " ";    
        }
    }
})

document.querySelector('#resta').addEventListener('click',function(){
    if (operacion ==""){
        operacion = "-";
        act=1;
        enop=0;
        ndot =0;
        valor1 = document.getElementById('resultado').textContent;
        document.getElementById('resultado').textContent="0";
        if (nop==0){
            document.getElementById('historia').textContent = document.getElementById('historia').textContent + valor1 + " " + operacion + " ";
        }
        else{
            document.getElementById('historia').textContent = document.getElementById('historia').textContent + " " + operacion + " ";    
        }
    }
})

document.querySelector('#multi').addEventListener('click',function(){
    if (operacion ==""){
        operacion = "*";
        act=1;
        enop=0;
        ndot =0;
        valor1 = document.getElementById('resultado').textContent;
        document.getElementById('resultado').textContent="0";
        if (nop==0){
            document.getElementById('historia').textContent = document.getElementById('historia').textContent + valor1 + " " + operacion + " ";
        }
        else{
            document.getElementById('historia').textContent = document.getElementById('historia').textContent + " " + operacion + " ";    
        }
    }
})

document.querySelector('#div').addEventListener('click',function(){
    if (operacion ==""){
        operacion = "/";
        act=1;
        enop=0;
        ndot =0;
        valor1 = document.getElementById('resultado').textContent;
        document.getElementById('resultado').textContent="0";
        if (nop==0){
            document.getElementById('historia').textContent = document.getElementById('historia').textContent + valor1 + " " + operacion + " ";
        }
        else{
            document.getElementById('historia').textContent = document.getElementById('historia').textContent + " " + operacion + " ";    
        }
    }
})

document.querySelector('#factor').addEventListener('click',function(){
    console.log("!")
    if (operacion ==""){
        valor1 = document.getElementById('resultado').textContent;
        valor2 = valor1;
        const resultado = factorial(Number(valor1));
        document.getElementById('resultado').textContent=resultado;
        
        valor1=resultado;
        document.getElementById('historia').textContent = document.getElementById('historia').textContent + " " + valor2 + "! ";
        valor2 = 0;
        operacion ="";
        nop=0;
        act=0;
        enop=1;
        ndot =0;
    }
})

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }



