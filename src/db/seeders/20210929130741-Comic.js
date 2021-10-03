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
                "authorId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Orrin",
                "authorId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cheyanne",
                "authorId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Frieda",
                "authorId": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Elda",
                "authorId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Delmer",
                "authorId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Marcellus",
                "authorId": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Madilyn",
                "authorId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Micheal",
                "authorId": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jean",
                "authorId": 4,
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
