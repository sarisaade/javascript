const personas = {
    dni: 12345678,
    nombre: 'juan',
    direcciones: [
        {
            calle: 'av siempre viva',
            localidad: {
                cp: 1236,
                nombre: 'caba'
            }
        },
        {
            calle: 'calle 14',
            localidad: {
                cp: 1237,
                nombre: 'amba'
            }
        },
    ]
};
console.log(personas)
//voy a mostrar el atributo nombre de la persona
console.log(personas.nombre);
//ahora convierto a json pero como string
const strpersona = JSON.stringify(personas);
console.log(strpersona);
console.log(strpersona.nombre);

//ahora parseo strpersona a un objeto
const otraPersona = JSON.parse(strpersona);
console.log(otraPersona);
//averiguar si existe el cp 1267
//con some es suficiente
const existe = personas.direcciones.some(dir=>dir.localidad.cp===1267);
console.log(existe);
//ahora tengo mas personas lo convierto en un vector
//se rompe porque persona ahora es un array*/
function repasoArray(){
const personas =[{ 
    dni: 12345678,
    nombre: 'juan',
    direcciones: [
        {
            calle: 'av siempre viva',
            localidad: {
                cp: 1236,
                nombre: 'caba'
            }
        },
        {
            calle: 'calle 14',
            localidad: {
                cp: 1237,
                nombre: 'amba'
            }
        },
    ],
    dni: 12345679,
    nombre: 'carlos',
    direcciones: [
        {
            calle: 'calle 16',
            localidad: {
                cp: 1236,
                nombre: 'caba'
            }
        },
        
        
        
        
        
        
        
    ]
}];
let existe = false;
for (let i =0; !existe && i < persona.length; i++) {
    existe = persona[i].direcciones.some(dir=> dir.localidad.cp === 1237);
}
console.log(existe);
const existeV2 = persona.every(per => per.direcciones.some(dir=> dir.localidad.cp === 1237));
//llegue hasta el minuto 54
console.log(existeV2);
//se parecen pero son diferentes
//tamben puedo hacer un map
const dirs = persona.map(p => p.direcciones);
console.log(dirs);
const dirsFlat = dirs.flat();
console.log(dirsFlat);
//la diferencia entre estos es que 
/*en el primero me puso mas arrays
y en el segundo puso una array con mas cosas y eso es lo que hace el metodo flat*/
const existeV3 = dirsFlat.some(d =>d.localidad.cp === 1237);
console.log(existeV3);
//----------------------
let array1 =[1,2,3,[4,5,6],7,8];
console.log(array1);
//[1,2,3,4,5,6,7,8]
array1 = array1.flat();
console.log(array1);
}

//dibujar los datos de una persona en un div
function crearDivPersona(personas) {
    const divPersona = document.getElementById('contenidoExterno');
    personas.array.forEach(() => {
        forEach
    });(persona => {
        divPersona.innerHTML += CrearCardPersona(personas);
    }); 

}
//inicio! llama a la funcion crear div personas y cuando estoy adentro de las personas puedo recorrer esa div
//da error porque teniamos ele elmento cargado de script js antes que el div entonces cuando intenta cargar da error
/*como buena practica los scripts van debajo del body xq siempre afectan al dom*/

function CrearCardPersona(unaPersona) {
    const html = `<div class="card" style="width: 18rem;">
    
    <div class="card-body">
      <h5 class="card-title">${unaPersona.nombre}</h5>
      <p class="card-text">${CrearDirecciones(unaPersona.direcciones)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>;
  </div>`;
  //comillas invertidas alt+96
  return html;

}
function CrearDirecciones(direccion){
    let dirs = `ul`;
    const dires = direccion.foreach(d =>dirs +=`<li>`+d.calle + d.localidad.cp + `</li>`);
    return dirs + dires +`</ul>`;
}
crearDivPersona(personas);
