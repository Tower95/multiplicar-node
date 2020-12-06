// Tipos requires
//const { table } = require('console');

//const fs = require('express'); //paquetes no nativos

//esto se usa para recivir los parametros con Yargs.


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //archivos propios
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`creado archivo: `, `${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log(`No se reconoce el comando ${comando}`);
        break;

}

// let base = parametro.split('=')[1];