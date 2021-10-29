module.exports = {
    Query: {
        getChapter: (parent, args, context) => {
            return context.sequelize.Chapter.findByPk(args.id)
        }
    },
    Mutation: {
        createChapter: (parent, args, context) => {
            return context.sequelize.Chapter.create(args)
        },
        async updateChapter(parent, args, context) {
            await context.sequelize.Chapter.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.sequelize.Chapter.findByPk(args.id)
        },
        deleteChapter(parent, args, context) {
            return context.sequelize.Chapter.destroy({
                where: args
            });
        }
    }
}