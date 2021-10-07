const {ApolloServer} = require('apollo-server');
const schema = require('./graphql');
const sequelize = require('./db/models');

const server = new ApolloServer({
    schema,
    context: sequelize
})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});