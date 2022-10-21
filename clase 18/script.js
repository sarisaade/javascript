console.log(10)
//function flecha/arrow function
/*const addPalabra =() => {

}*/
//esta es una forma de escribir una funcion y las dos de abajo tambien

const arrayDePalabras = []; 
function addPalabra() {
    //capturo el valor del input
    const valuePalabra = document.getElementById('palabra').value;
//validacion que no sea vacio!uso if
if(valuePalabra==='') {
    alert ('Debe completar la palabra');
    return;
}
//como agrego las palabras?
//creo el array de la funcion pero por fuera 
//agrego la palabra al array
arrayDePalabras.push(valuePalabra);
//console.log(arrayDePalabras);
//ahora quierp mostrar las palbras en una lista paralela
listarPalabras(

);
}
function listarPalabras(){
    //primero verifico que el array no este vacio
    if(arrayDePalabras.length === 0){
        return;
    }
    //limpio el div
    document.getElementById('listado').appendChild(ul);
    //recorro el array y voy agregando las palabras
    const ul = document.createElement ('ul');
    for(let unaPalabra of arrayDePalabras) {
        const li = document.createElement ('li');
        li.innerHTML= unaPalabra;
        ul.appendChild(li);

         

    }
    //ul += '</ul>';
    //document.getElementById('listado').innerHTML = unaPalabra;
    // o lo mismo seria hacer esto 
    /*arrayDePalabras.foreach(x => );
        
    });*/
    //recorro el array de palabras y lo voy listando
}
/*addPalabra = function() {


}*/
//en react se usa la primera pero por ahora solo vamos a usar la segunda
