import Cliente from "./Cliente.js";
import { Impuestos } from "./Impuestos.js";

let impuestoCliente = new Impuestos(10000, 2000);
let clientePrueba = new Cliente('Diego', impuestoCliente)