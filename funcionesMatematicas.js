/*
===========================================
Archivo: funcionesMatematicas.js
Curso: Ing. de Software - Ejercicio 2 GIT
Indicaciones para esta tarea:
- Un solo archivo con TODAS las operaciones
- Encabezado con nombres y operaciones
- Cada funcion debe incluir el nombre del autor

Integrantes y operaciones (complete aquí):
- Fidel Vasquez Carata: suma
- (Nombre 2): resta
- (Nombre 3): multiplicacion
- (Nombre 4): division
- ...
===========================================
*/

// === SECCION DE FUNCIONES () ===

// Autor: Fidel Vasquez Carata | Operacion: suma
function suma(a, b) {
  return a + b;
}



// === EXPORTS PARA USO EN NODE O TESTS  ===
module.exports = {
  suma,
};

// === Pruebas rapidas  ===
if (require.main === module) {
  console.log("suma_(2,3) =", suma_l(2,3));          // tiene que dar 5
  // colocar sus operaciones....
}
