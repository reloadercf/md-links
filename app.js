let { extraer } = require('./lib/extractor.js')
let { consulterUrl } = require('./lib/consulter')

let validateLink = async() => {

    let extract = await extraer()
    let consulter = await extract.forEach(urls => {
        consulterUrl(urls)
    })
    return `${consulter}`
}
validateLink().then(mensaje => {
    console.log(mensaje)
}).catch(e => {
    console.log(e)
})