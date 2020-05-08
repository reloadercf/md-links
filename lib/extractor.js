let fs = require('fs');
let markdownLinkExtractor = require('markdown-link-extractor');

let extraer = (pwd) => {
    let markdown = fs.readFileSync(`${pwd}`).toString();

    let links = markdownLinkExtractor(markdown);

    return links
}

module.exports = {
    extraer,
}