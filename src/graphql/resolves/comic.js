module.exports = {
    Query: {
        getComics: (parent, args, context) => {
            return context.Comic.findAll()
        },
        getComic: (parent, args, context) => {
            return context.Comic.findByPk(args.id)
        },
        async getChapters(parent, args, context) {
            const comic = await context.Comic.findByPk(args.id);
            return await comic.getChapters();
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
}