const options = {
    path: {
        demand: true,
        alias: 'p',
        default: "README.md"
    },
}
const argv = require('yargs')
    .command('validate', 'valida links', options)
    .command('stats', 'genera estadisticas', options)
    .help()
    .argv;

module.exports = {
    argv
}