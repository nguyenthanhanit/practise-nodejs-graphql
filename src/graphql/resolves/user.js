module.exports = {
    Query: {
        getUsers: (parent, args, context) => {
            return context.User.findAll()
        },
        getUser: (parent, args, context) => {
            return context.User.findByPk(args.id)
        }
    },
    Mutation: {
        createUser: (parent, args, context) => {
            return context.User.create(args)
        },
        async updateUser(parent, args, context) {
            await context.User.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.User.findByPk(args.id)
        },
        deleteUser(parent, args, context) {
            return context.User.destroy({
                where: args
            });
        }
    },
    User: {
        comics(comics) {
            return comics.getComics()
        }
    },
}