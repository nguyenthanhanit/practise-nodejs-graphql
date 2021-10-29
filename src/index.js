const {ApolloServer} = require('apollo-server');
require('dotenv').config();
const schema = require('./graphql')
const sequelize = require('./db/models')
const {getUserId} = require('./utils')

const server = new ApolloServer({
    schema,
    context: ({req}) => {
        return {
            ...req,
            sequelize,
            userId:
                req && req.headers.authorization
                    ? getUserId(req)
                    : null
        };
    }
})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});