let a = 0;
let b = 0;
let c = 0;
let x1 = 0;
let x2 = 0;
let d=0;

function calcula(a,b,c){
//* Cáculo del discriminante
    d = Math.pow(b, 2) - 4*a*c
    if (d > 0){
        document.getElementById('resultado').textContent= "Discriminante: " + d + ", mayor de cero, hay dos soluciones reales distintas";
        x1 = (-b + Math.sqrt( Math.pow(b, 2) - 4 * a * c))  / (2*a);
        x2 = (-b - Math.sqrt( Math.pow(b, 2) - 4 * a * c))  / (2*a);

        document.getElementById('r1').value=x1;
        document.getElementById('r2').value=x2;
    }
    else if (d == 0){
        document.getElementById('resultado').textContent= "Discriminante: " + d + " es cero, hay dos soluciones reales iguales";    
        
        x1 = (-b + Math.sqrt( Math.pow(b, 2) - 4 * a * c)) / (2*a);
        document.getElementById('r1').value=x1;
        document.getElementById('r2').value=x1;
    }
    else if (d < 0){
        document.getElementById('resultado').textContent= "Discriminante: " + d + ", menor de cero, No hay soluciones reales";
        document.getElementById('r1').value="";
        document.getElementById('r2').value="";    
    }
}

document.querySelector('#calcular').addEventListener('click',function(){
    a= document.getElementById('va').value;
    b= document.getElementById('vb').value;
    c= document.getElementById('vc').value;

    if (a==""){a=1} else {a = Number(a)}
    if (b==""){b=1} else {b = Number(b)}
    if (c==""){c=0} else {c = Number(c)}

    if (isNaN(a)) {
        document.getElementById('na').textContent= "a= Dato no válido"
    }
    else {
        document.getElementById('na').textContent= "a= " + a
    }
    
    if (isNaN(b)) {
        document.getElementById('nb').textContent= "b= Dato no válido"
    }
    else {
        document.getElementById('nb').textContent= "b= " +  b
    }

    if (isNaN(c)) {
        document.getElementById('nc').textContent= "c= Dato no válido"
    }
    else {
        document.getElementById('nc').textContent= "c= " +  c
    }
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById('resultado').textContent="Error en el tipo de dato";
    }
    else{
        calcula(a,b,c)
    }      
 })

 document.querySelector('#limpiar').addEventListener('click',function(){
    document.getElementById('va').value="";
    document.getElementById('vb').value="";
    document.getElementById('vc').value="";
    document.getElementById('resultado').textContent="";
    document.getElementById('r1').value="";
    document.getElementById('r2').value="";
    document.getElementById('na').value="";
    document.getElementById('nb').value="";
    document.getElementById('nc').value="";
 })