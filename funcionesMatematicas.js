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
- Julio Cesar Garcia Omonte: Potenciacion
- Jherlan Marcelo Calero Sardan: Serie Fibonacci
- Liz Karen Aroja Pinaya: radicacion
- Erick Samuel Peñaloza Lujan
- Frank Saul Guarayo Colomi: esPrimo
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
  resta,
  multiplicacion,
  factorial,
  potenciacion,
  fibonacci,
  radicacion,
  raizCuadradaDescompuesta,
  esPrimo
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

function factorial(n){
    if (n === 0 || n === 1) {
      return 1;
    }
  
    return n * factorial(n - 1);
};

//Autor: Julio Cesar Garcia Omonte
function potenciacion(base,exponente){
  return base**exponente;
};

//Autor: Jherlan Marcelo Calero Sardan
function fibonacci(n){
  if (n < 0){
    return "El número debe ser positivo";
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (require.main === module) {
  console.log("La resta de los numeros (2,3) es =", resta(4,2));          // tiene que dar 2
  console.log("La multiplicacion de los numeros (5, 4) es = ", multiplicacion(5,4));         // tiene que dar 20
  console.log("El factorial de 5 es = ", factorial(5));   // Tiene que dar 120
  console.log("La potenciacion de los numeros, base 2 y exponente 4: (2,4) es= ",potenciacion(2,4)) //Tiene que dar 16
  console.log("La serie Fibonacci del número 6 es =", fibonacci(6));      // 8
  // Pruebas para la función de raíz cuadrada descompuesta
  console.log(raizCuadradaDescompuesta(8));   // 2√2
  console.log(raizCuadradaDescompuesta(12));  // 2√3
  console.log(raizCuadradaDescompuesta(7));   // √7
  console.log(raizCuadradaDescompuesta(25));  // 5
  // colocar sus operaciones MATEMATICAS....

};

//Autor:Liz Karen Aroja Pinaya  
function radicacion(base, indice) {
  if (indice === 0) {
    return "Error: el índice no puede ser 0.";
  }

  // Si el número es negativo y el índice es par, no existe raíz real
  if (base < 0 && indice % 2 === 0) {
    return "Error: raíz par de número negativo no tiene solución real.";
  }

  return Math.sign(base) * Math.pow(Math.abs(base), 1 / indice);
};

//Autor: Erick Samuel Peñaloza Lujan
//raiz cuadrada de un numero 
function raizCuadradaDescompuesta(n) {
  if (n < 0) 
    return "No se puede calcular la raíz de un número negativo";
  if (n === 0 || n === 1) 
    return n;

  for (let i = Math.floor(Math.sqrt(n)); i > 0; i--){
    if (n % (i * i) === 0){
      const a = i;
      const b = n / (i * i);
      if (b === 1) 
        return a;
      if (a === 1) 
        return "√"+b;
      return a+"√"+b;
    }
  }
  return "√"+n;
}

//Autor Frank Saul Guarayo Colomi
function esPrimo(n){
    if(n <= 1) return 'no es Primo';
      for ( i = 2 ; i <= Math.sqrt(n); i++){
        if (n % i === 0) return 'no es Primo';
      }return 'si es Primo';
}

//Autor Carlos Josue Vasquez Huanca
function division(a, b) {
  if (b === 0) {
    return "Error: división entre 0 no permitida";
  }
  return a / b;
};