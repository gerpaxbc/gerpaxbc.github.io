document.querySelector('#calcular').addEventListener('click',function(){
    let n1= Number(document.getElementById('n1').value);
    let n2= Number(document.getElementById('n2').value);
    let n3= Number(document.getElementById('n3').value);
    let n4= Number(document.getElementById('n4').value);
    let n5= Number(document.getElementById('n5').value);
    let n6= Number(document.getElementById('n6').value);

    if (isNaN(n1)) {n1=0}
    if (isNaN(n2)) {n2=0}
    if (isNaN(n3)) {n3=0}
    if (isNaN(n4)) {n4=0}
    if (isNaN(n5)) {n5=0}
    if (isNaN(n6)) {n6=0}

    let entrada= [n1,n2,n3,n4,n5,n6];
    let salida=[];

    document.getElementById('entrada').textContent="Entrada: " + entrada;
    for (let valor of entrada){
         if (valor != 0 && valor % 2 == 0){
            salida.push(valor)
         }
    }
    document.getElementById('salida').textContent="Pares: " + salida;
 })

 document.querySelector('#limpiar').addEventListener('click',function(){
    document.getElementById('n1').value="";
    document.getElementById('n2').value="";
    document.getElementById('n3').value="";
    document.getElementById('n4').value="";
    document.getElementById('n5').value="";
    document.getElementById('n6').value= "";
    document.getElementById('entrada').textContent="";
    document.getElementById('salida').textContent="";
 })

 document.querySelector('#analizar').addEventListener('click',function(){
   let cadena= document.getElementById('datopal').value;
   let l= cadena.length;
   let c1="";
   let c2="";
   let si=true;
   console.log(cadena)

   for (let i = 0; i < l; i++) {
      c1 = cadena[i];
      c2 = cadena[l-(i+1)];
      if(c1!=c2){
         si = false;
      }
      console.log(i, c1, c2)
   }
   if (si){
      document.getElementById('espal').textContent="Es palíndrome";
   }
   else{
      document.getElementById('espal').textContent="No es palíndrome"
   }
})

document.querySelector('#limpiarpal').addEventListener('click',function(){
   document.getElementById('espal').textContent="";
   document.getElementById('datopal').value="";
})