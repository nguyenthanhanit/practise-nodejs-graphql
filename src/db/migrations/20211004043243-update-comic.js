'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
                queryInterface.addColumn('Comics', 'typeId', {
                    type: Sequelize.DataTypes.INTEGER,
                    references: {
                        model: {
                            tableName: 'Types',
                        },
                        key: 'id',
                    },
                    onDelete: 'CASCADE'
                }, {transaction: t}),
            ]);
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Comics');
    }
};