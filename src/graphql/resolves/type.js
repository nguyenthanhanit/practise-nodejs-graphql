module.exports = {
    Query: {
        getTypes: (parent, args, context) => {
            return context.sequelize.Type.findAll()
        },
        getType: (parent, args, context) => {
            return context.sequelize.Type.findByPk(args.id)
        }
    },
    Mutation: {
        createType: (parent, args, context) => {
            return context.sequelize.Type.create(args)
        },
        async updateType(parent, args, context) {
            await context.sequelize.Type.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.sequelize.Type.findByPk(args.id)
        },
        deleteType(parent, args, context) {
            return context.sequelize.Type.destroy({
                where: args
            });
        },
    },
    Type: {
        comics(comics) {
            return comics.getComics()
        }
    }
}