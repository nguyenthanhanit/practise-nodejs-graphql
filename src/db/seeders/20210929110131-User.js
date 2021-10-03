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
        await queryInterface.bulkInsert('Users', [
            {
                "name": "Verla",
                "email": "Jerrold.Bashirian@gmail.com",
                "password": "PWL0zC1_mraD22d",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "General",
                "email": "Gianni_Balistreri6@gmail.com",
                "password": "n09W5mC9NoA8MWQ",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Aisha",
                "email": "Isac.Fay1@hotmail.com",
                "password": "ak57oUz3bBqZCrS",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Melba",
                "email": "Cassidy73@hotmail.com",
                "password": "4roM4uyTwFybb9H",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jaleel",
                "email": "Madisyn13@yahoo.com",
                "password": "oozmxSI4Dc8pS0O",
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
