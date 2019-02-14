export default class Movimiento {
    constructor(nombre, domicilio, telefono, saldo,retiro,depositar) {
        this._nombre = nombre.toUpperCase();
        this._domicilio = domicilio;
        this._telefono = telefono;
        this._saldo = saldo;
        this._retiro = retiro;
        this._depositar = depositar;
    }

imprimir() {
    console.log(`${this._nombre}, ${this._domicilio}, ${this._telefono}, ${this._saldo}, ${this._retiro}`);
}

get nombre () {
    return this._nombre;
}

get domicilio () {
    return this._domicilio.toUpperCase();
}

get saldo () {
    return this._saldo;
}

saldoNuevoRetiro(cant) {
    if(cant > this._saldo) {
        console.log("No es posible");
    }
    else{
        this._saldo = this._saldo - cant;
        console.log(`Saldo nuevo: $${this.saldo}`);
    }
}

saldoNuevoDeposito(cant) {
    this._saldo = this._saldo + cant;
    console.log(`Saldo nuevo: $${this.saldo}`);
}

}
