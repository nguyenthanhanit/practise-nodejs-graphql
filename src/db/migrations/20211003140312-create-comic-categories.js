'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ComicCategories', {
            categoryId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Categories',
                    },
                    key: 'id'
                }
            },
            comicId: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Comics',
                    },
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('ComicCategories');
    }
};