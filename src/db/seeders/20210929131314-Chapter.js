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
                "name": "Deron",
                "content": "Alexander",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jaiden",
                "content": "Sidecar",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Roma",
                "content": "Alexander",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Barbara",
                "content": "Rusty Nail",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Melvin",
                "content": "Angel Face",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jacinthe",
                "content": "Bloody Mary",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Clark",
                "content": "Champagne Cocktail",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jordan",
                "content": "God Mother",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Eleanora",
                "content": "Espresso Martini",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Oda",
                "content": "Rose",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Sasha",
                "content": "Manhattan",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jameson",
                "content": "Vesper",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Elmore",
                "content": "Alexander",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Alaina",
                "content": "Mai Tai",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kole",
                "content": "Gin Fizz",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Aurelie",
                "content": "Margarita",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jamison",
                "content": "Yellow Bird",
                "comicId": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Deontae",
                "content": "Yellow Bird",
                "comicId": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Aaron",
                "content": "Dry Martini",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Sigmund",
                "content": "French Martini",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Garett",
                "content": "Manhattan",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Nora",
                "content": "Angel Face",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jamar",
                "content": "Mai Tai",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Clark",
                "content": "Pisco Sour",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Albert",
                "content": "Old Fashioned",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Naomi",
                "content": "Ramos Gin Fizz",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rowan",
                "content": "Kir",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Sidney",
                "content": "Mai Tai",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Richmond",
                "content": "Old Fashioned",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Brittany",
                "content": "Mai Tai",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Patricia",
                "content": "God Mother",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Arden",
                "content": "Bacardi",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kyra",
                "content": "Sazerac",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Ana",
                "content": "Lemon Drop Martini",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Laura",
                "content": "Yellow Bird",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Christian",
                "content": "Caipirinha",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kiara",
                "content": "Rusty Nail",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cortez",
                "content": "Ramos Gin Fizz",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Antone",
                "content": "Aviation",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Evalyn",
                "content": "Hemingway Special",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Casimer",
                "content": "Kamikaze",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Shaylee",
                "content": "Irish Coffee",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Zola",
                "content": "Daiquiri",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Felipa",
                "content": "Kamikaze",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Sonia",
                "content": "Gin Fizz",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rudolph",
                "content": "Champagne Cocktail",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Bria",
                "content": "Dark 'N' Stormy",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Eladio",
                "content": "Yellow Bird",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Ed",
                "content": "Singapore Sling",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Keon",
                "content": "Mimosa",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Eleanore",
                "content": "Paradise",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Virginia",
                "content": "Dark 'N' Stormy",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Conner",
                "content": "Dirty Martini",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Conor",
                "content": "Whiskey sour",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Alfred",
                "content": "Monkey Gland",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Vita",
                "content": "Paradise",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Wilfrid",
                "content": "Americano",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Magnus",
                "content": "Tequila Sunrise",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cassandre",
                "content": "Tommy's Margarita",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Glenda",
                "content": "Singapore Sling",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Quinn",
                "content": "God Father",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Valerie",
                "content": "B-52",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Ansley",
                "content": "Stinger",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Joyce",
                "content": "Sidecar",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Maybell",
                "content": "Derby",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Bridget",
                "content": "Manhattan",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Trevor",
                "content": "B-52",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rosamond",
                "content": "Mojito",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Giovanni",
                "content": "Bramble",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Elmer",
                "content": "Cosmopolitan",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Savannah",
                "content": "Screwdriver",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Iliana",
                "content": "Sidecar",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Denis",
                "content": "Porto flip",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rosalee",
                "content": "John Collins",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Myra",
                "content": "Negroni",
                "comicId": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Russell",
                "content": "Porto flip",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Catalina",
                "content": "Yellow Bird",
                "comicId": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Mercedes",
                "content": "Tequila Sunrise",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Dariana",
                "content": "Horse's Neck",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Libbie",
                "content": "Negroni",
                "comicId": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Matilde",
                "content": "Casino",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Pietro",
                "content": "Negroni",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Nicholaus",
                "content": "Dark 'N' Stormy",
                "comicId": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rhianna",
                "content": "John Collins",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Lyric",
                "content": "Bloody Mary",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Armani",
                "content": "Mary Pickford",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Preston",
                "content": "Casino",
                "comicId": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kendrick",
                "content": "Golden Dream",
                "comicId": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Donato",
                "content": "Mint Julep",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Lindsay",
                "content": "Alexander",
                "comicId": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rebeca",
                "content": "Black Russian",
                "comicId": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Milan",
                "content": "Angel Face",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Korbin",
                "content": "Old Fashioned",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cassandre",
                "content": "Bloody Mary",
                "comicId": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Fernando",
                "content": "Yellow Bird",
                "comicId": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Wilber",
                "content": "Vesper",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Tanya",
                "content": "Kamikaze",
                "comicId": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Keyon",
                "content": "Tommy's Margarita",
                "comicId": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Bailey",
                "content": "Sidecar",
                "comicId": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Concepcion",
                "content": "Mint Julep",
                "comicId": 6,
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
