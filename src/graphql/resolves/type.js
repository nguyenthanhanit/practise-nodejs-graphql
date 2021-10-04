module.exports = {
    Query: {
        getTypes: (parent, args, context) => {
            return context.Type.findAll()
        },
        getType: (parent, args, context) => {
            return context.Type.findByPk(args.id)
        }
    },
    Mutation: {
        createType: (parent, args, context) => {
            return context.Type.create(args)
        },
        async updateType(parent, args, context) {
            await context.Type.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.Type.findByPk(args.id)
        },
        deleteType(parent, args, context) {
            return context.Type.destroy({
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