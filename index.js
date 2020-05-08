const argv = require('./config/yargs').argv
const { validateLink, statsLink } = require('./app')
const colors = require('colors');

let comand = argv._[0];

switch (comand) {
    case 'validate':
        validateLink(argv.path)
            .then(message => {
                console.log(message)
            })
            .catch(e => {
                console.log(e.brightRed)
            })
        break;
    case 'stats':
        statsLink(argv.path)
            .then(message => {
                console.log(`total links = ${message}`.inverse.brightMagenta)
            })
            .catch(e => {
                console.log(e.brightRed)
            })
        break;
    default:
        console.log('you need --help')
}