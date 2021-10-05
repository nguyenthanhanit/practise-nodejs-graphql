const {GraphQLScalarType} = require('graphql');
const {GraphQLError} = require('graphql/error');
const {Kind} = require('graphql/language');
const {value} = require("lodash/seq");

module.exports = new GraphQLScalarType({
    name: 'Array',
    description: 'Array custom scalar type',
    serialize: value => {
        // value sent to the client
        return value
    },
    parseValue: value => {
        // value from the client
        return value
    },
    parseLiteral: ast => {
        if (ast.kind === Kind.LIST) {
            return value;
        }
        throw new GraphQLError('Query error: Can only parse array got a: ' + ast.kind, [ast]);
    }
});

