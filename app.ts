//tarea4
let numbers: number[] = [1, 6, 8, 20, 2, 7, 10, 3, 5];
// Inicializamos la variable para almacenar el número mayor con el primer elemento del arreglo
let numeroMayor: number = numbers[0];

// Utilizamos un ciclo for para recorrer el arreglo
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numeroMayor) {
    numeroMayor = numbers[i];
  }
}

console.log(`El número mayor en el arreglo es: ${numeroMayor}`);
