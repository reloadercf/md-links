let { extraer } = require('./lib/extractor.js')
let { consulterUrl } = require('./lib/consulter')

let validateLink = async(pwd) => {

    let extract = await extraer(pwd)
    let consulter = await extract.forEach(urls => {
        consulterUrl(urls)
    })
    return `${consulter}`
}
let statsLink = async(pwd) => {
    let extract = await extraer(pwd)
    let all = await extract
    return `${all.length}`
}

module.exports = {
    validateLink,
    statsLink
}