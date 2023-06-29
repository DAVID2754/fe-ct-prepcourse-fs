/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   if (typeof nombre !== "string") {
      throw new Error("El argumento debe ser una cadena de texto");
    }
  
    if (nombre.length === 0) {
      return nombre; // Si el nombre es una cadena vacía, se devuelve tal cual.
    }
  
    var primeraLetra = nombre[0].toUpperCase(); // Convertir la primera letra a mayúscula.
    var restoDelNombre = nombre.slice(1); // Obtener el resto del nombre.
  
    return primeraLetra + restoDelNombre;
  }
  

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   if (typeof cb !== "function") {
      throw new Error("El argumento debe ser una función");
    }
  
    cb(); // Invocar/ejecutar el callback
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   if (typeof cb !== "function") {
      throw new Error("El tercer argumento debe ser una función");
    }
  
    return cb(num1, num2); // Retornar el resultado del callback pasándole los números como parámetros
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   if (!Array.isArray(arrayOfNumbers)) {
      throw new Error("El primer argumento debe ser un arreglo");
    }
  
    if (typeof cb !== "function") {
      throw new Error("El segundo argumento debe ser una función");
    }
  
    var suma = arrayOfNumbers.reduce(function (total, num) {
      return total + num;
    }, 0);
  
    cb(suma); // Pasar el resultado como argumento al callback

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   if (!Array.isArray(array)) {
      throw new Error("El primer argumento debe ser un arreglo");
    }
  
    if (typeof cb !== "function") {
      throw new Error("El segundo argumento debe ser una función");
    }
  
    for (var i = 0; i < array.length; i++) {
      cb(array[i]); // Pasar el elemento como argumento al callback
    }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   if (!Array.isArray(array)) {
      throw new Error("El primer argumento debe ser un arreglo");
    }
  
    if (typeof cb !== "function") {
      throw new Error("El segundo argumento debe ser una función");
    }
    var nuevoArreglo = [];

    for (var i = 0; i < array.length; i++) {
      var resultado = cb(array[i]); // Pasar el elemento como argumento al callback
      nuevoArreglo.push (resultado);
    }
    return nuevoArreglo;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   if (!Array.isArray(arrayOfStrings)) {
      throw new Error("El argumento debe ser un arreglo");
    }
  
    var nuevoArreglo = [];
  
    for (var i = 0; i < arrayOfStrings.length; i++) {
      var elemento = arrayOfStrings[i];
  
      if (typeof elemento === "string" && elemento.charAt(0).toLowerCase() === "a") {
        nuevoArreglo.push(elemento);
      }
    }
  
    return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
