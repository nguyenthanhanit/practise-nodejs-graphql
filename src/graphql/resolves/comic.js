const _ = require('lodash');
const {Op} = require("sequelize");

module.exports = {
    Query: {
        getComics: (parent, args, context) => {
            return context.sequelize.Comic.findAll()
        },
        getComic: (parent, args, context) => {
            return context.sequelize.Comic.findByPk(args.id)
        }
    },
    Mutation: {
        async createComic(parent, args, context) {
            const comic = await context.sequelize.Comic.create(args);
            await comic.addCategories(args.categories);
            return context.sequelize.Comic.findByPk(comic.id)
        },
        async updateComic(parent, args, context) {
            const comic = await context.sequelize.Comic.findByPk(args.id, {
                attributes: ['id'],
                include: [
                    {
                        model: context.sequelize.Category,
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
            await context.sequelize.Comic.update(args, {
                where: {
                    id: args.id
                }
            })
            return context.sequelize.Comic.findByPk(args.id)
        },
        deleteComic(parent, args, context) {
            return context.sequelize.Comic.destroy({
                where: args
            });
        },
        async updateVisibleComic(parent, args, context) {
            if (!_.isEmpty(args.PublicComics)) {
                await context.sequelize.Comic.update({
                    visible: true
                }, {
                    where: {
                        id: {
                            [Op.or]: args.PublicComics
                        }
                    }
                })
            }
            if (!_.isEmpty(args.PrivateComics)) {
                await context.sequelize.Comic.update({
                    visible: false
                }, {
                    where: {
                        id: {
                            [Op.or]: args.PrivateComics
                        }
                    }
                })
            }

            return 1
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