/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      return array[0]; // Retornar el primer elemento del arreglo
    } else {
      return null; // Retornar null si el arreglo está vacío
    }
  } 
  var numeros = [1, 2, 3, 4, 5];
  var primerElemento = devolverPrimerElemento(numeros);
  console.log(primerElemento); // Imprimirá 1
  
  var frutas = ['manzana', 'naranja', 'plátano'];
  var primerFruta = devolverPrimerElemento(frutas);
  console.log(primerFruta); // Imprimirá 'manzana'
  
  var vacio = [];
  var primerElementoVacio = devolverPrimerElemento(vacio);
  console.log(primerElementoVacio); // Imprimirá null

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      return array[array.length - 1]; // Retornar el primer elemento del arreglo
    } else {
      return null; // Retornar null si el arreglo está vacío
    }
   
}
var numeros = [1, 2, 3, 4, 5];
var ultimoElemento = devolverUltimoElemento(numeros);
console.log(ultimoElemento); // Imprimirá 1

var frutas = ['manzana', 'naranja', 'plátano'];
var ultimaFruta = devolverUltimoElemento(frutas);
console.log(ultimaFruta); // Imprimirá 'manzana'

var vacio = [];
var arrayElementoVacio = devolverUltimoElemento(vacio);
console.log(arrayElementoVacio); // Imprimirá null

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length; // Retornar la longitud del arreglo
}
var numeros = [1, 2, 3, 4, 5];
var longitud = obtenerLargoDelArray(numeros);
console.log(longitud); // Imprimirá 5

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map( (num) => {    
        return num + 1 
       } );
   
   return(masUno);
 
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento); // Agregar el elemento al final del arreglo
      return array; // Retornar el arreglo actualizado
   
}

var numeros = [1, 2, 3, 4, 5];
var nuevoNumeros = agregarItemAlFinalDelArray(numeros, 6);
console.log(nuevoNumeros); // Imprimirá [1, 2, 3, 4, 5, 6]

var frutas = ['manzana', 'naranja', 'plátano'];
var nuevasFrutas = agregarItemAlFinalDelArray(frutas, 'sandía');
console.log(nuevasFrutas); // Imprimirá ['manzana', 'naranja', 'plátano', 'sandía']

var vacio = [];
var nuevoVacio = agregarItemAlFinalDelArray(vacio, 'elemento');
console.log(nuevoVacio); // Imprimirá ['elemento']

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento); // Agregar el elemento al final del arreglo
      return array; // Retornar el arreglo actualizado
}

var numeros = [1, 2, 3, 4, 5];
var nuevoNumeros = agregarItemAlComienzoDelArray(numeros, 6);
console.log(nuevoNumeros); // Imprimirá [1, 2, 3, 4, 5, 6]

var frutas = ['manzana', 'naranja', 'plátano'];
var nuevasFrutas = agregarItemAlComienzoDelArray(frutas, 'sandía');
console.log(nuevasFrutas); // Imprimirá ['manzana', 'naranja', 'plátano', 'sandía']

var vacio = [];
var nuevoVacio = agregarItemAlComienzoDelArray(vacio, 'elemento');
console.log(nuevoVacio); // Imprimirá ['elemento']


function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

var palabras1 = ['Hello', 'world!'];
var frase1 = dePalabrasAFrase(palabras1);
console.log(frase1); // Imprimirá 'Hello world!'

var palabras2 = ['OpenAI', 'is', 'amazing'];
var frase2 = dePalabrasAFrase(palabras2);
console.log(frase2); // Imprimirá 'OpenAI is amazing'

var palabra3 = dePalabrasAFrase(['Henry', 'JavaScript', 'Class']);
console.log(palabra3);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
var numeros = [1, 2, 3, 4, 5];
var contiene1 = arrayContiene(numeros, 3);
console.log(contiene1); // Imprimirá true

var frutas = ['manzana', 'naranja', 'plátano'];
var contiene2 = arrayContiene(frutas, 'pera');
console.log(contiene2); // Imprimirá false


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   if (arrayOfNums.length === 0) {
      return 0; // Si el arreglo está vacío, retorna 0 para evitar división por cero
    }
  
    var suma = 0;
    for (var i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i]; // Sumar cada resultado al acumulador
    }
    return suma;

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
      if (resultadosTest.length === 0) {
        return 0; // Si el arreglo está vacío, retorna 0 para evitar división por cero
      }
    
      var suma = 0;
      for (var i = 0; i < resultadosTest.length; i++) {
        suma += resultadosTest[i]; // Sumar cada resultado al acumulador
      }
    
      var promedio = suma / resultadosTest.length; // Calcular el promedio dividiendo la suma entre la cantidad de elementos
      return promedio;
    
}
var resultados1 = [80, 75, 90, 95, 85];
var promedio1 = promedioResultadosTest(resultados1);
console.log(promedio1); // Imprimirá 85

var resultados2 = [60, 70, 80, 90, 100];
var promedio2 = promedioResultadosTest(resultados2);
console.log(promedio2); // Imprimirá 80

var resultados3 = [];
var promedio3 = promedioResultadosTest(resultados3);
console.log(promedio3); // Imprimirá 0


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   var maximo = arrayOfNums[0]; // Asignar el primer número del arreglo como máximo inicial

  for (var i = 1; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] > maximo) {
      maximo = arrayOfNums[i]; // Actualizar el máximo si se encuentra un número mayor
    }
  }

  return maximo; // Retornar el número más grande

}

var numeros1 = [5, 8, 2, 1, 10];
var maximo1 = numeroMasGrande(numeros1);
console.log(maximo1); // Imprimirá 10

var numeros2 = [15, 7, 12, 3, 9];
var maximo2 = numeroMasGrande(numeros2);
console.log(maximo2); // Imprimirá 15

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

   if (arguments.length === 0) {
      return 0; // Si no se pasan argumentos, retorna 0
    }
  
    if (arguments.length === 1) {
      return arguments[0]; // Si se pasa un argumento, simplemente se retorna ese argumento
    }
  
    var producto = 1;
    for (var i = 0; i < arguments.length; i++) {
      producto *= arguments[i]; // Multiplicar cada argumento por el producto acumulado
    }
  
    return producto; // Retornar el producto de los argumentos
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var conteo = 0;
   for ( var i = 0; i < array.length; i++){  
         if (array[i]> 18){   
            conteo++;
         }
   }
   return conteo; // Retornar la cantidad de elementos mayores que 18
}

var numeros = [10, 20, 15, 25, 30];
var cantidad = cuentoElementos(numeros);
console.log(cantidad); // Imprimirá 3 (hay 3 elementos mayores que 18 en el arreglo)

var letras = ['a', 'b', 'c', 'd'];
var cantidad2 = cuentoElementos(letras);
console.log(cantidad2); // Imprimirá 0 (no hay elementos mayores que 18 en el arreglo)

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   //var diasDeLaSemana = [Domingo, Lunes, Martes, Miercoles, Jueves, Vierne, Sabado]
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
    } else if (numeroDeDia >= 2 && numeroDeDia <= 6) {
      return "Es dia laboral";
    } else {
      return "Número de día inválido";
    }
   
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return num.toString().startsWith('9');
}

console.log(empiezaConNueve(987)); // Imprimirá true
console.log(empiezaConNueve(123)); // Imprimirá false
console.log(empiezaConNueve(-954)); // Imprimirá true


function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var primerElemento = array[0];
   for (let i =0; i < array.length; i++){ 
      if (array[i] !== primerElemento){   
         return (false);
      } 
   }
   return (true);

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesPedidos = [];
   var mesesBuscados = ["Enero", "Marzo", "Noviembre"];
 
   for (var i = 0; i < array.length; i++) {
     if (mesesBuscados.includes(array[i])) {
       mesesPedidos.push(array[i]);
     }
   }
 
   if (mesesPedidos.length === mesesBuscados.length) {
     return mesesPedidos;
   } else {
     return "No se encontraron los meses pedidos";
   }

}

console.log(mesesDelAño(["Enero", "Febrero", "Marzo", "Abril", "Noviembre"])); // Imprimirá ["Enero", "Marzo", "Noviembre"]
console.log(mesesDelAño(["Febrero", "Marzo", "Abril"])); // Imprimirá "No se encontraron los meses pedidos"

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tablaSeis = numeros.map( (num) => {    
     return num * 6 
    } );

return(tablaSeis);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
 
      var mayoresACien = [];
    
      for (var i = 0; i < array.length; i++) {
        if (array[i] > 100) {
          mayoresACien.push(array[i]);
        }
      }
    
      return mayoresACien;
   
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var resultado = [];
   var suma = num;

  for (var i = 0; i < 10; i++) {
    suma += 2;
    resultado.push(suma);

    if (suma === i) {
      return "Se interrumpió la ejecución";
      break;
    }
  }

  return resultado;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   var resultado = [];
  var suma = num;

  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }

    suma += 2;
    resultado.push(suma);
  }

  return resultado;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
