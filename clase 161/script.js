/*defino el primer vector/array/arreglo*/
const edadCarlos = 36;
const edadEduardo = 40;
const edadCesar = 25;
//los vectores son dinamicos




//para agregar un elemento, hago edaddes.push
const edades = []
edades.push(36);//agregando 36 al valor edadaes y tambien invoco al push
edades.push(edadEduardo);
edades[2]= edadCesar;
console.log(edades);
//recorrer el vector
console.log ('0',edades [0]);
console.log ('1',edades [1]);
console.log ('2',edades [2]);
//agrego mas edades
edades.push(38);
edades.push(39);
edades.push(51);

//uso de ciclos
//comillas invertidas alt96
for(let i=0;i<edades.length;i++){
    console.log('dentro del for $(i):',edades [i])
}
function calcular(){
    const nota1value = document.getElementById('nota1').value;
    const nota2ivalue = document.getElementById('nota2').value;
    if(notas1value !== ''&& notas2value !=='')
    //invoco la funcion que me procesa datos
    procesarNotas(nota1value,nota2);
    else (
        alert('complete los datos')
    )
    procesarNotas(nota1value,nota2);
}
function procesarNotas(nota1,nota2) {
    const notas = (nota1, nota2);
    let min= calcularMinimo (notas);
    let max = calcularMaximo (notas);
    let promedio= calcularPromedio (notas);
    //muestro x consola los datos
    console.log('minimo:',min);
    console.log('maximo',max);
    console.log('promedio',promedio);

    
    
    


    
    
    
    
    
    
    
    
    
    max= calcularMaximo(notas);
    function calcularMaximo(nota1,nota2) {
        let max;
        if (notas(0)>notas (1)) {
            max = notas(0);
            
        }
        if (notas(1)> notas (0)) {
            max = notas (1);
            
        }
        if (notas (0)=== notas (1)) {
            max = notas (0);
            
        }
        return max;

        
    }


    
}
max= calcularMinimo(notas);
function calcularMinimo(nota1,nota2) {
    let min;
    if (notas(0)< notas (1)) {
        min = notas(0);
        
    }
    if (notas(1)< notas (0)) {
        min = notas (1);
        
    }
    if (notas (0)=== notas (1)) {
        min = notas (0);
        
    }
    return min;
    
}
function calcularPromedio(notas) {
    //recorro el vector acumulando las notas
    let acumulador =0;
    for(let i=0; i<notas.length;i++)
        acumulador= acumulador + notas(i);
        const promedio = acumulador / notas.length;
        //retorno el promedio

        return promedio;
        
    }
    
    
}


