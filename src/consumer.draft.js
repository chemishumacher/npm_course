const index = require('./index')
const marker = require('@ajar/marker')

const strings = ["hi", "my", "name", "is"];
marker.blue(`calling slugger with parameters: ${strings}`)
const result = index.slugger(...strings);
marker.blue(`Got result: ${result}`)