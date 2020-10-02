// Especificación de objetos.
var objeto1 = {
    nombre: 'Luis',
    apellido: 'Armijos',
    altura: 180,
    cantidadLibros: 20,
}

var objeto2 = {
    nombre: 'Shirley',
    apellido: 'Coque',
    altura: 160,
    cantidadLibros: 200,
}

var objeto3 = {
    nombre: 'Javier',
    apellido: 'Ortiz',
    altura: 170,
    cantidadLibros: 50,
}

var objeto4 = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
    altura: 170,
    cantidadLibros: 50,
}

var objeto5 = {
    nombre: 'Galo',
    apellido: 'Valverde',
    altura: 160,
    cantidadLibros: 60,
}

var personas = [ objeto1, objeto2, objeto3, objeto4, objeto5 ]

// Recorrer un arreglo de objetos
for (persona of personas) {
    console.log( `${persona.nombre} ${persona.apellido}` )
}

console.log('\n')

for (var i=0; i<personas.length; i++) {
    console.log( `${personas[i].nombre} ${personas[i].apellido}` )
}