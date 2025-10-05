/*
===========================================
Archivo: funcionesMatematicas.js
Curso: Ing. de Software - Ejercicio 2 GIT
Indicaciones para esta tarea:
- Un solo archivo con TODAS las operaciones matematicas
- Encabezado con nombres y operaciones matematicas
- Cada funcion debe incluir el nombre del autor

Integrantes y funciones :
- Fidel Vasquez Carata: suma
- Pablo Walter Zuleta Novillo: resta
- Jose Aaron Coaquira Jimenez: multiplicacion
- (Nombre 4): division
- Enrique Walter Zuleta Novillo: factorial de un numero
===========================================
*/

// === SECCION DE FUNCIONES U OPERACIONES MATEMATICAS () ===

// Autor: Fidel Vasquez Carata | Funcion: suma
function suma(a, b) {
  return a + b;
}



// === EXPORTS PARA USO EN NODE O TESTS  ===
module.exports = {
  suma,
};

// === Pruebas rapidas  ===
if (require.main === module) {
  console.log("La suma de estos numeros (2,3) es =", suma(2,3));          // tiene que dar 5
  // colocar sus operaciones MATEMATICAS....
}

//Autor: Pablo Walter Zuleta Novillo
function resta(a,b){
  return a - b;
};

//Autor: Jose Aaron Coaquira Jimenez
function multiplicacion(a, b){
  return a * b;	
};


//Autor: Enrique Walter Zuleta Novillo

function factorial(a){
    if (n === 0 || n === 1) {
      return 1;
    }
  
    return n * factorial(n - 1);
};

if (require.main === module) {
  console.log("La resta de los numeros (2,3) es =", resta(4,2));          // tiene que dar 2
  console.log("La multiplicacion de los numeros (5, 4) es = ", multiplicacion(5*4));         // tiene que dar 20
  console.log("El factorial de 5 es = ", factorial(5));   // Tiene que dar 120
  // colocar sus operaciones MATEMATICAS....
};