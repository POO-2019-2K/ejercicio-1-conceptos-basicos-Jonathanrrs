import Contacto from "./Contacto.js";

let c1 = new Contacto("Juan Perez", "Operador", "312-456-2345", "juan.perez@gmail.com");

c1.imprimir();

console.log(c1.nombre);
console.log(c1._email);

c1.puesto = "jefe de departamento";

console.log(c1.puesto);