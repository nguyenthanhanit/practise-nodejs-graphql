module.exports = {
    Query: {
        getUsers: (parent, args, context) => {
            return context.User.findAll()
        },
        getComics: (parent, args, context) => {
            return context.Comic.findAll()
        },

        getUser: (parent, args, context) => {
            return context.User.findByPk(args.id)
        },
        getComic: (parent, args, context) => {
            return context.Comic.findByPk(args.id)
        },
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
        },

        createComic: (parent, args, context) => {
            return context.Comic.create(args)
        },
        async updateComic(parent, args, context) {
            await context.Comic.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.Comic.findByPk(args.id)
        },
        deleteComic(parent, args, context) {
            return context.Comic.destroy({
                where: args
            });
        },
    },
}