document.querySelector('#calcular').addEventListener('click',function(){
    const n1= Number(document.getElementById('n1').value);
    const n2= Number(document.getElementById('n2').value);
    const n3= Number(document.getElementById('n3').value);
    const n4= Number(document.getElementById('n4').value);
    const n5= Number(document.getElementById('n5').value);
    const n6= Number(document.getElementById('n6').value);

    if (isNaN(n1)) {n1=0}
    if (isNaN(n2)) {n2=0}
    if (isNaN(n3)) {n3=0}
    if (isNaN(n4)) {n4=0}
    if (isNaN(n5)) {n5=0}
    if (isNaN(n6)) {n6=0}

    let entrada= [n1,n2,n3,n4,n5,n6];
    document.getElementById('entrada').textContent="Entrada: " + entrada;

    console.log(n1)
 })

 document.querySelector('#limpiar').addEventListener('click',function(){
    document.getElementById('n1').value="";
    document.getElementById('n2').value="";
    document.getElementById('n3').value="";
    document.getElementById('n4').value="";
    document.getElementById('n5').value="";
    document.getElementById('n6').value= "";
    document.getElementById('entrada').textContent="";
 })