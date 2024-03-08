// 2.- Escribir un programa para formar una lista que realice las siguientes tareas:
// Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
// Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
// Mostrar todos los Nodos que superen un valor determinado.

const LinkedList = require("./linkedlist.js");

const list = new LinkedList();

// Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
const size = 10;
for (let i = 0; i < size; i++) {
  list.insert(Math.floor(Math.random() * 20));
}
list.print();

// Mostrar todos los Nodos que superen un valor determinado.
const VAL_MIN = 5;
console.log(`Los mayores a ${VAL_MIN}: `);
for (let i = 0; i < list.size(); i++) {
  const element = list.elementAt(i);
  if (element.data > VAL_MIN) console.log(element.data);
}
