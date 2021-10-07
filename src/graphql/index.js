const fs = require('fs');
const path = require('path');
const resolves = require('./resolves');
const scalars = require('./customScalars');
const basename = path.basename(__filename);
const {makeExecutableSchema} = require('@graphql-tools/schema');
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

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers: [...scalars, ...resolves]
})