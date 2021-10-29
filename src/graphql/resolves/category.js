module.exports = {
    Query: {
        getCategories: (parent, args, context) => {
            return context.sequelize.Category.findAll()
        },
        getCategory: (parent, args, context) => {
            return context.sequelize.Category.findByPk(args.id)
        }
    },
    Mutation: {
        createCategory: (parent, args, context) => {
            return context.sequelize.Category.create(args)
        },
        async updateCategory(parent, args, context) {
            await context.sequelize.Category.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.sequelize.Category.findByPk(args.id)
        },
        deleteCategory(parent, args, context) {
            return context.sequelize.Category.destroy({
                where: args
            });
        },
    },
    Category: {
        comics(comics) {
            return comics.getComics()
        }
    }
}