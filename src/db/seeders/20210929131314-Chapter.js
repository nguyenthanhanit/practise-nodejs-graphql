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
        await queryInterface.bulkInsert('Chapters', [
            {
                "name": "Chương 1: Tai họa bất ngờ",
                "content": "Tai họa bất ngờ",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Chương 2: Tỷ võ chiêu thân",
                "content": "Tỷ võ chiêu thân",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Chương 1: Độc cô cầu bại",
                "content": "Độc cô cầu bại",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Chương 2: Đại náo cấm cung",
                "content": "Đại náo cấm cung",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Chương 1",
                "content": "Ngạn",
                "comicId": 2,
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
