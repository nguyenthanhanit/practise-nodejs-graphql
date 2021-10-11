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
        await queryInterface.bulkInsert('Types', [
            {
                "name": "Truyện tranh",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Truyện chữ",
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Truyện audio",
                "createdAt": new Date(),
                "updatedAt": new Date()
            }
        ], {});
        await queryInterface.bulkInsert('Comics', [
            {
                "name": "Thần điêu đại hiệp",
                "authorId": 1,
                "typeId": 2,
                "visible": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Mắt biếc",
                "authorId": 3,
                "typeId": 2,
                "visible": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Tuyệt đại song kiêu",
                "authorId": 2,
                "typeId": 3,
                "visible": 0,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Anh hùng xạ điêu",
                "authorId": 1,
                "typeId": 1,
                "visible": 1,
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
