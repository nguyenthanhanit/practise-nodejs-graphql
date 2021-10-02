module.exports = {
    Query: {
        getComics: (parent, args, context) => {
            return context.Comic.findAll()
        },
        getComic: (parent, args, context) => {
            return context.Comic.findByPk(args.id)
        }
    },
    Mutation: {
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
    Comic: {
        author(author) {
            return author.getUser()
        },
        chapters(chapters) {
            return chapters.getChapters();
        }
    }
}