
function test() {
    alert('soy test');
}
//funcion principal


function render( ) {
    //llama a los demas componentes
    //referencia al objeto html
const divHtml = document.getElementById('navbar');

//invoco la funcion que esta en el archivo navbar.js
const parametros ={
    contenedor:'navbar',
    titulo:'MI NAVBAR',
    fnTest: test
};
 Navbar(parametros);
 console.log(json);



}
//invocar a la funcion
render();