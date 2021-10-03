module.exports = {
    Query: {
        getAuthors: (parent, args, context) => {
            return context.Author.findAll()
        },
        getAuthor: (parent, args, context) => {
            return context.Author.findByPk(args.id)
        }
    },
    Mutation: {
        createAuthor: (parent, args, context) => {
            return context.Author.create(args)
        },
        async updateAuthor(parent, args, context) {
            await context.Author.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.Author.findByPk(args.id)
        },
        deleteAuthor(parent, args, context) {
            return context.Author.destroy({
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