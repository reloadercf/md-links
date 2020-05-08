const fetch = require('node-fetch');

let consulterUrl = (url) => {
    fetch(`${url}`).then(res => {
            if (res.ok) {
                console.log('true')
                return 'true'
            } else {
                console.log("false")
                return 'false'
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