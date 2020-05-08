const fetch = require('node-fetch');

let consulterUrl = (url) => {
    fetch(`${url}`).then(res => {
            if (res.ok) {
                console.log(`${url} true`)
                return `${url} true`
            } else {
                console.log(`${url} false`)
                return `${url} false`
            }

        })
        .catch(
            e => {
                console.log("false")
                return 'false'
            }
        )
}
module.exports = {
    consulterUrl
}