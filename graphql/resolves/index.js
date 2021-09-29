module.exports = {
    Query: {
        read: (parent, args, context) => {
            return context.User.findByPk(args.id)
        },
    },
    Mutation: {
        create: (parent, args, context) => {
            return context.User.create(args)
        },
        async update(parent, args, context) {
            await context.User.update(args, {
                where: {
                    id: args.id
                }
            })
            return await context.User.findByPk(args.id)
        },
        delete(parent, args, context) {
            return context.User.destroy({
                where: args
            });
        },
    },
}