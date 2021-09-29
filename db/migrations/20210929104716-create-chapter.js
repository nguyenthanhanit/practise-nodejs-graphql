'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Chapters', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            comic: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'Comics',
                    },
                    key: 'id',
                },
                onDelete: 'CASCADE',
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Chapters');
    }
};