const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('crear', 'Crea en consola la tabla multiplicar', opts)
    .command('listar', 'Lista en consola la tabla multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}