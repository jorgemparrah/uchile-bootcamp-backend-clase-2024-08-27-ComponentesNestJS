export class Contenedor<T> {

  lista: T[];

  constructor() {
    this.lista = [];
  }

  longitud() {
    return this.lista.length;
  }

  obtenerElemento(indice: number): T {
    return this.lista[indice];
  }

  insertarElemento(elemento: T) {
    this.lista.push(elemento);
  }

}