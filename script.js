/*edad +1
variable++ */
// obtengo la etiqueta label id del html











function incrementar() {
    const LabelContador = document.getElementById(`contador`);


let ValorDelLabelContador = parseInt(LabelContador.innerHTML);
ValorDelLabelContador++;
LabelContador.innerHTML = ValorDelLabelContador;
let resto = ValorDelLabelContador %2;
if (resto === 0) {
    const labelparidad = document.getElementById('paridad');
labelparidad.innerHTML = 'ES PAR';
    //tomar elemento de html y decir es par
    
}
else{
    const labelparidad = document.getElementById('paridad');
    labelparidad.innerHTML = 'ES IMPAR';
}

    
}

    


function decrementar() {
    const LabelContador = document.getElementById(`contador`);


    let ValorDelLabelContador = parseInt(LabelContador.innerHTML);
    ValorDelLabelContador--;
    
    LabelContador.innerHTML = ValorDelLabelContador;
        
    
    ValorDelLabelContador--;
    let resto = ValorDelLabelContador %2;
if (resto === 0) {
    const labelparidad = document.getElementById('paridad');
labelparidad.innerHTML = 'ES PAR';
    //tomar elemento de html y decir es par
    
}
else{
    const labelparidad = document.getElementById('paridad');
    labelparidad.innerHTML = 'ES IMPAR';
}
    
}

function esPar (valor){
    if ((valor % 2) === 0) {return true;
        
    } else {return false;
        
    }

}
console.log(esPar(1));
console.log(esPar(2));
console.log(esPar(250));

