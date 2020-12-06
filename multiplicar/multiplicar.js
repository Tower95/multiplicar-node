const { rejects } = require('assert');
const colors = require('colors');
const fs = require('fs'); //paquete de file Sytem propios de nodejs
const { number } = require('yargs');

let listarTabla = (base, limite = 10) => {
    if (!Number(base) || !Number(limite)) {
        console.log(`La base o el limite proporcionados no es un Numero!`.red);
    } else {
        console.log("============".green);
        console.log(`Tabla del ${base}`.green);
        console.log("============".green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${i} * ${base} = ${i*base}`);
        }
    }
}



let crearArchivo = (base, limite = 10) => {


    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base proporcionada (${base}) no es un Numero!`.red)
            return;

        }
        if (!Number(limite)) {
            reject(`El limite proporcionada (${limite}) no es un Numero!`.red)
            return;
        }
        let data = "";
        let filename = ""
        let Tabla = (base) => {
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${ base * i} \n`;
            }
            filename = `tabla-${base}-al-${limite}.txt`;
        }
        Tabla(base);
        fs.writeFile(`tablas/${filename}`, data, (err) => {
            if (err) reject(err)
            else
                resolve(filename);
        });
    })
}

//agregamos las funciones al modulo
module.exports = {
    crearArchivo,
    listarTabla
}