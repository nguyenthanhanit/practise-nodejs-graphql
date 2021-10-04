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
        await queryInterface.bulkInsert('ComicCategories', [
            {
                "comicId": 1,
                "categoryId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "comicId": 1,
                "categoryId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "comicId": 2,
                "categoryId": 1,
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
