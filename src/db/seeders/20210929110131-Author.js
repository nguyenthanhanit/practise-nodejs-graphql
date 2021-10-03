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
                "email": "Jerrold.Bashirian@gmail.com",
                "password": "PWL0zC1_mraD22d",
                "gender": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "General",
                "email": "Gianni_Balistreri6@gmail.com",
                "password": "n09W5mC9NoA8MWQ",
                "gender": 0,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Aisha",
                "email": "Isac.Fay1@hotmail.com",
                "password": "ak57oUz3bBqZCrS",
                "gender": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Melba",
                "email": "Cassidy73@hotmail.com",
                "password": "4roM4uyTwFybb9H",
                "gender": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jaleel",
                "email": "Madisyn13@yahoo.com",
                "password": "oozmxSI4Dc8pS0O",
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
