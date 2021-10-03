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
        await queryInterface.bulkInsert('Comics', [
            {
                "name": "Friedrich",
                "author": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Orrin",
                "author": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cheyanne",
                "author": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Frieda",
                "author": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Elda",
                "author": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Delmer",
                "author": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Marcellus",
                "author": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Madilyn",
                "author": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Micheal",
                "author": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jean",
                "author": 4,
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
