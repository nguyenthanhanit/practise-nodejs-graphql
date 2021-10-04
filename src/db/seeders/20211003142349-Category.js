'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Categories', [
            {
                "name": "Tình cảm",
                "description": "Tình cảm",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Hài",
                "description": "Hài",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kiếm hiệp",
                "description": "Hài",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Anime",
                "description": "Anime",
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
