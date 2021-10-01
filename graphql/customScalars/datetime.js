const {GraphQLScalarType} = require('graphql');
const {Kind} = require('graphql/language');
const moment = require('moment');

module.exports = new GraphQLScalarType({
    name: 'Datetime',
    description: 'Datetime custom scalar type',
    serialize: value => {
        if (value instanceof Date && !isNaN(value)) {
            return moment(value).format("DD/MM/YYYY hh:mm:ss");
        }
        // Output (Outgoing)
        return ''
    },
    parseValue: value => {
        // Input (Ingoing)
        return new Date(value);
    },
    parseLiteral: ast => {
        if (ast.kind === Kind.INT) {
            return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
        }
        return null; // Invalid hard-coded value (not an integer)
    }
});

