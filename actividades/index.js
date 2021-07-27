let currid=0;

function myFunction() {
    let input=''
    let filter='' 
    let table=''
    let tr=''
    let td='' 
    let tipo=''
    
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    if(document.querySelector('input[id="bnombre"]:checked')) {
      tipo = 1  //* por noombre *//
      }
    else{
      tipo = 2  //* por actividad *//
    }

    console.log(tipo);

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[tipo];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function limpiar(){
    document.getElementById('nombre').value='';
    document.getElementById('actividad').value='' ;
    document.getElementById('fecha').value='';
  }

  document.querySelector('#cancelar').addEventListener('click',function(){
      limpiar();      
   })

document.querySelector('#guardar').addEventListener('click',function(){
    const evento = new Array(4);
  
    const nombre= document.getElementById('nombre').value;
    const actividad= document.getElementById('actividad').value ;
    const fecha= document.getElementById('fecha').value;
    
    evento[0]=nombre;
    evento[1]=actividad;
    evento[2]=fecha;
    evento[3]='Pendiente';
    salvar(evento);
    limpiar();      
 })

function salvar(evento) {
    let n=0;
    let objeto = {};

    if (evento[0]!=="" && evento[1] !== "" && evento[2]!==""){
      n=neventos();
      
      if (currid==0){
        if (n==0){
          n=1;
        }
        else{
          n+=1;
        }
        window.localStorage.setItem(0,n)
      }  
      else {
        n=currid;
      }

      objeto.datos = evento;
      window.localStorage.setItem(n,JSON.stringify(objeto))
 
      currid=0;
      location.reload()
    }
}

function neventos() {
    let n=0;
    
    n=Number(window.localStorage.getItem(0))
  return n
}

function editar(ev){
  let evento ='';
  let devento = new Array(4);
  let objeto = {};

  let id = ev.target.getAttribute('data-id')

  evento = window.localStorage.getItem(id)
  let data = JSON.parse(evento)
  
  document.getElementById('nombre').value = data.datos[0];
  document.getElementById('actividad').value = data.datos[1];
  document.getElementById('fecha').value = data.datos[2];
  currid=Number(id)
  
  console.log(currid);
}

function terminar(ev){
  let evento ='';
  let devento = new Array(4);
  let objeto = {};

  let id = ev.target.getAttribute('data-id')

  evento = window.localStorage.getItem(id)
  let data = JSON.parse(evento)
  devento[0]= data.datos[0];
  devento[1]= data.datos[1];
  devento[2]= data.datos[2];
  devento[3]= 'Terminado';

  objeto.datos = devento;
  window.localStorage.setItem(id,JSON.stringify(objeto))
  currid=0;
  location.reload()
}

function borrar(ev){
  let evento ='';
  let devento = new Array(4);
  let objeto = {};

  let id = ev.target.getAttribute('data-id')
  window.localStorage.removeItem(id) 
  currid=0;
  location.reload()
}


function muestrarenglon(evento, id) {
    let renglon = '<tr>'+
                    '<td>'+ id + '</td>' +
                    '<td>'+ evento.datos[0] + '</td>' +
                    '<td>'+ evento.datos[1] + '</td>' +
                    '<td>'+ evento.datos[2] + '</td>' +
                    '<td>'+ evento.datos[3] + '</td>' +
                    '<td> <input class="editar ButtonEditar" type="submit" value="" data-id=' + id + '></input> </td>' +
                    '<td> <input class="terminar ButtonOk" type="submit" value="" data-id=' + id + '></input> </td>' +
                    '<td> <input class="borrar ButtonBorrar" type="submit" value="" data-id=' + id + '></input> </td>' +
                  '</tr>';
    return renglon;
}

let tabla = '<table class="w3-table-all w3-margin-top" id="myTable">';
tabla += '<tr>';
tabla += '<th style="width:5%;">Id</th>';
tabla += '<th style="width:20%;">Nombre</th>';
tabla += '<th style="width:25%;">Actividad</th>';
tabla += '<th style="width:10%;">Fecha</th>';
tabla += '<th style="width:10%;">Estado</th>';
tabla += '<th style="width:5%;">Editar</th>';
tabla += '<th style="width:5%;">Terminar</th>';
tabla += '<th style="width:5%;">Borrar</th>';
tabla += '</tr>';

const ftabla = '</table>' +
'<br> <br>' +
'<footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style="margin:-24px">' +
'<a class="fa fa-facebook-official w3-hover-opacity"  target="_blank" href="https://www.facebook.com/gerardo.paxtian.1"> </a>' +
'<a class="fa fa-linkedin w3-hover-opacity"  target="_blank"  href="https://www.linkedin.com/in/gerpax/"></a>' +
'<p class="w3-medium">Powered by UCamper gerpax</a></p>' +
'</footer>'

const container = document.querySelector('section[class="section"]')
let evento = '';
n=neventos();
if (n!==0){
  for (let i = 1; i <= n; i++) {
      evento = window.localStorage.getItem(i)
      let data = JSON.parse(evento)
      console.log(data)

      if (data !== null){
        tabla += muestrarenglon(data, i);   
      }
    }
    tabla += ftabla;
}
container.innerHTML = container.innerHTML + tabla

document.querySelectorAll('.editar').forEach((element) => {
  element.addEventListener('click', editar)
})

document.querySelectorAll('.terminar').forEach((element) => {
  element.addEventListener('click', terminar)
})

document.querySelectorAll('.borrar').forEach((element) => {
  element.addEventListener('click', borrar)
})
