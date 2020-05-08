const colors = require('colors');
const fetch = require('node-fetch');

let consulterUrl = (url) => {
    fetch(`${url}`).then(res => {
            if (res.ok) {
                console.log(`${url} true`.underline.brightGreen)
                return `${url} true`
            } else {
                console.log(`${url} false`)
                return `${url} false`
            }

        })
        .catch(
            e => {
                console.log(`${url} false`.underline.brightRed)
                return `${url} false`
            }
        )
}
module.exports = {
    consulterUrl
}