const {GraphQLScalarType} = require('graphql');
const {GraphQLError} = require('graphql/error');
const {Kind} = require('graphql/language');

module.exports = new GraphQLScalarType({
    name: 'Email',
    description: 'Email custom scalar type',
    serialize: value => {
        // Output (Outgoing)
        return value;
    },
    parseValue: value => {
        return value;
    },
    parseLiteral: ast => {
        if (ast.kind !== Kind.STRING) {
            throw new GraphQLError('Query error: Can only parse strings got a: ' + ast.kind, [ast]);
        }

        // Regex taken from: http://stackoverflow.com/a/46181/761555
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!re.test(ast.value)) {
            throw new GraphQLError('Query error: Not a valid Email', [ast]);
        }
        return ast.value;
    }
});