function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

const m = getRandomIntInclusive(2,10);
const n = getRandomIntInclusive(2,10);

const matrix = new Array(m);
for (i=0; i<m; i++){
    matrix[i] = new Array(n);
}

for (let i = 0; i<m; i++){
    for (let j = 0; j<n; j++){
        const r = getRandomIntInclusive(1,100);
        matrix[i][j] = r;
    }
}

class matriz {
    template = '';
      constructor(tabla) {
          this.tabla = tabla;
      }
      get template() {
        return this.template
      }
  
      creamatriz () {
        return muestramatriz(
          this.tabla,
        )
      }
    }
    
    const muestramatriz = (tabla) => {
      return `
        ${tabla}
      `
    };
    
    const container = document.querySelector('section[class="section"]')
    let nmatriz = new matriz;
    let tabla ="";
    
    tabla = '<div class="container">' +
            '    <div class="panel panel-default">' +
            '        <div class="panel-heading">' +
            '            <h4> <b> Matriz de: </b>  <i>' + m + 'x' + n + '</i> </h4>' +
            '        </div>' +
            '    </div>' +
            '</div>'
    
    tabla = tabla + '<div class="container">' 
    
    for (let i = 0; i < m; i++) {

        tabla = tabla + '<div>'
            for (j=0; j<n; j++){
                if (matrix[i][j] % 2 == 0){
                    tabla = tabla +'<button class="button">' + matrix[i][j] + '</button>'     
                }
                else{
                    tabla = tabla +'<button class="button2">' + matrix[i][j] + '</button>' 
                }
            }
        tabla = tabla + '</div>';
    } 
    
    tabla = tabla + '</div>'
    
    nmatriz.tabla = tabla;
    container.innerHTML = container.innerHTML + nmatriz.creamatriz();
    