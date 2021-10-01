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
                "author": 3
            },
            {
                "name": "Orrin",
                "author": 1
            },
            {
                "name": "Cheyanne",
                "author": 3
            },
            {
                "name": "Frieda",
                "author": 4
            },
            {
                "name": "Elda",
                "author": 2
            },
            {
                "name": "Delmer",
                "author": 2
            },
            {
                "name": "Marcellus",
                "author": 4
            },
            {
                "name": "Madilyn",
                "author": 2
            },
            {
                "name": "Micheal",
                "author": 5
            },
            {
                "name": "Jean",
                "author": 4
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
