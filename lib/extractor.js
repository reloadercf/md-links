let fs = require('fs');
let markdownLinkExtractor = require('markdown-link-extractor');

let extraer = (pwd) => {
    let markdown = fs.readFileSync('README.md').toString();

    let links = markdownLinkExtractor(markdown);

    return links
}

module.exports = {
    extraer,
}