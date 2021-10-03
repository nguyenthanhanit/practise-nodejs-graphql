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
        await queryInterface.bulkInsert('Authors', [
            {
                "name": "Verla",
                "gender": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "General",
                "gender": 0,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Aisha",
                "gender": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Melba",
                "gender": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jaleel",
                "gender": 0,
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
