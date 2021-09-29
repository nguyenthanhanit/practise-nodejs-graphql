const fs = require('fs');
const path = require('path');
const resolves = require('./resolves');

const basename = path.basename(__filename);
let typeDefs = '';

fs.readdirSync(`${__dirname}/schemas`)
    .filter((file) => (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-8) === '.graphql'
    ))
    .forEach((file) => {
        typeDefs += fs.readFileSync(
            path.join(`${__dirname}/schemas`, `${file}`),
            'utf8'
        )
    });

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolves
}
