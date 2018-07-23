const fs = require('fs');
const colors = require('colors');

let data = '';

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} NO es un Número!`);
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-del${ base }al${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-del${ base }al${ limite }.txt`)
        });
    })
};

let listarTabla = (base, limite) => {
    console.log('========================================');
    console.log(`======= Tabla de ${base}================`.green);
    console.log('========================================');
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}