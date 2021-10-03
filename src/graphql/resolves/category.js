module.exports = {
    Query: {
        getCategories: (parent, args, context) => {
            return context.Category.findAll()
        },
        getCategory: (parent, args, context) => {
            return context.Category.findByPk(args.id)
        }
    },
    Mutation: {
        createCategory: (parent, args, context) => {
            return context.Category.create(args)
        },
        async updateCategory(parent, args, context) {
            await context.Category.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.Category.findByPk(args.id)
        },
        deleteCategory(parent, args, context) {
            return context.Category.destroy({
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