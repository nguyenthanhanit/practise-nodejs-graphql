const {ApolloServer} = require('apollo-server');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const sequelizeProvider = require('./sequelize/index');

sequelizeProvider.init();

const resolvers = {
    Query: {
        read: (parent, args, context) => {
            console.log(parent)
            return context.sequelizeProvider.getModel().findByPk(args.id)
        },
    },
    Mutation: {
        create: (parent, args, context) => {
            return context.sequelizeProvider.getModel().create(args)
        },
        async update(parent, args, context) {
            await context.sequelizeProvider.getModel().update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.sequelizeProvider.getModel().findByPk(args.id)
        },
        delete(parent, args, context) {
            return context.sequelizeProvider.getModel().destroy({
                where: args
            });
        },
    },
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    context: {
        sequelizeProvider,
    }
})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
