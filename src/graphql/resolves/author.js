module.exports = {
    Query: {
        getAuthors: (parent, args, context) => {
            return context.sequelize.Author.findAll()
        },
        getAuthor: (parent, args, context) => {
            return context.sequelize.Author.findByPk(args.id)
        }
    },
    Mutation: {
        createAuthor: (parent, args, context) => {
            return context.sequelize.Author.create(args)
        },
        async updateAuthor(parent, args, context) {
            await context.sequelize.Author.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.sequelize.Author.findByPk(args.id)
        },
        deleteAuthor(parent, args, context) {
            return context.sequelize.Author.destroy({
                where: args
            });
        }
    },
    Author: {
        comics(comics) {
            return comics.getComics()
        }
    },
}