import Movimiento from "./Movimiento.js";

let m1 = new Movimiento("Jonathan Ruiz", "Mirador", "312-111-1111", 5000,300);

m1.imprimir();

console.log(m1.nombre);
console.log(m1.domicilio);

m1.saldoNuevoRetiro(300);

m1.saldoNuevoDeposito(200);