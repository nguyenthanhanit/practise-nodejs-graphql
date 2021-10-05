const _ = require('lodash');

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
            const comic = await context.Comic.findByPk(args.id, {
                attributes: ['id'],
                include: [
                    {
                        model: context.Category,
                        attributes: ['id'],
                        through: {
                            attributes: []
                        }
                    }
                ]
            })
            if (!_.isEmpty(args.categories)) {
                await comic.addCategories(args.categories)
            }
            const removeCategories = _.difference(_.map(comic.Categories, 'id'), args.categories);
            if (!_.isEmpty(removeCategories)) {
                await comic.removeCategories(removeCategories)
            }
            await context.Comic.update(args, {
                where: {
                    id: args.id
                }
            })
            return context.Comic.findByPk(args.id)
        },
        deleteComic(parent, args, context) {
            return context.Comic.destroy({
                where: args
            });
        },
    },
    Comic: {
        author(author) {
            return author.getAuthor()
        },
        chapters(chapters) {
            return chapters.getChapters();
        },
        categories(categories) {
            return categories.getCategories()
        },
        type(type) {
            return type.getType()
        }
    }
}