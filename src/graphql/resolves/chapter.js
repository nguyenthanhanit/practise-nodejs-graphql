module.exports = {
    Query: {
        getChapter: (parent, args, context) => {
            return context.Chapter.findByPk(args.id)
        }
    },
    Mutation: {
        createChapter: (parent, args, context) => {
            return context.Chapter.create(args)
        },
        async updateChapter(parent, args, context) {
            await context.Chapter.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.Chapter.findByPk(args.id)
        },
        deleteChapter(parent, args, context) {
            return context.Chapter.destroy({
                where: args
            });
        }
    },
}