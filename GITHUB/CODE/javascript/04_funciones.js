var nombreApellido = 'Mercedes Solorzano'
var edad = 27

// Función tipo declarativa
function imprimirEdad(nombre, edad) {
    console.log( `${nombre} tiene la edad de ${edad}.` )
}

// Función tipo flecha
var imprimirEdad2 = (nombre, edad) => { 
    console.log( `${nombre} tiene la edad de ${edad}.` ) 
}

// Función tipo expresiva
var imprimirEdad3 = function(nombre, edad) {
    console.log( `${nombre} tiene la edad de ${edad}.` ) 
}

imprimirEdad( nombreApellido, edad )
imprimirEdad( 'Damaris Solorzano', 18 )
imprimirEdad2( nombreApellido, edad )
imprimirEdad3( 'Geremy Lara', 10 )