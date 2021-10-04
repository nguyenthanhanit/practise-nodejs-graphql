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
                "name": "Kim Dung",
                "gender": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cổ Long",
                "gender": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Nguyễn Nhật Ánh",
                "gender": 1,
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
