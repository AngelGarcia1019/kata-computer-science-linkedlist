// 1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.
const LinkedList = require("./linkedlist.js");

const list = new LinkedList();

list.insertUnique(1);
list.insertUnique(1);

list.print();
