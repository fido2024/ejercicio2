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
- (Nombre 2): resta
- (Nombre 3): multiplicacion
- (Nombre 4): division
- ...
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

if (require.main === module) {
  console.log("La resta de los numeros (2,3) es =", resta(4,2));          // tiene que dar 2
  // colocar sus operaciones MATEMATICAS....
}