export default class Reservacion {
    constructor(nombre, tipoHabitacion, fechaLlegada, fechaSalida){
        this._nombre = nombre.toUpperCase();
        this._tipoHabitacion = tipoHabitacion;
        this._fechaLlegada = fechaLlegada;
        this._fechaSalida = fechaSalida;

    }

    imprimir() {
        console.log(`${this._nombre}, ${this._tipoHabitacion}, ${this._fechaLlegada}, ${this._fechaSalida}`);
    }

    get nombre() {
        return this._nombre;
    }

    get tipoHabitacion() {
        return this._tipoHabitacion;
    }


    getDiasNoches () {
        let llegada = new Date(this._fechaLlegada).getTime();
        let salida = new Date(this._fechaSalida).getTime();
        let dif = salida - llegada;
        dif = dif/(1000*60*60*24)+1;
        let noches = dif-1;
        console.log(`Se quedará ${noches} noches y se quedará ${dif} dias`);

    }

    
}