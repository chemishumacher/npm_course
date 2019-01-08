const marker = require('@ajar/marker');

function slugger(...strings) {
    marker.green(`got ${strings.length} parameters`);
    const response = strings.join('-');
    return response;
}

module.exports = {
    slugger
}