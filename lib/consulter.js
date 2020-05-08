const fetch = require('node-fetch');

let consulterUrl = (url) => {
    fetch(`${url}`).then(res => {
            console.log(res.ok);
        })
        .catch(e => { console.log(e) })
}
module.exports = {
    consulterUrl
}