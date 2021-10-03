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
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jaiden",
                "content": "Sidecar",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Roma",
                "content": "Alexander",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Barbara",
                "content": "Rusty Nail",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Melvin",
                "content": "Angel Face",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jacinthe",
                "content": "Bloody Mary",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Clark",
                "content": "Champagne Cocktail",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jordan",
                "content": "God Mother",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Eleanora",
                "content": "Espresso Martini",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Oda",
                "content": "Rose",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Sasha",
                "content": "Manhattan",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jameson",
                "content": "Vesper",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Elmore",
                "content": "Alexander",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Alaina",
                "content": "Mai Tai",
                "comic": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kole",
                "content": "Gin Fizz",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Aurelie",
                "content": "Margarita",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jamison",
                "content": "Yellow Bird",
                "comic": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Deontae",
                "content": "Yellow Bird",
                "comic": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Aaron",
                "content": "Dry Martini",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Sigmund",
                "content": "French Martini",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Garett",
                "content": "Manhattan",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Nora",
                "content": "Angel Face",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Jamar",
                "content": "Mai Tai",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Clark",
                "content": "Pisco Sour",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Albert",
                "content": "Old Fashioned",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Naomi",
                "content": "Ramos Gin Fizz",
                "comic": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rowan",
                "content": "Kir",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Sidney",
                "content": "Mai Tai",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Richmond",
                "content": "Old Fashioned",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Brittany",
                "content": "Mai Tai",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Patricia",
                "content": "God Mother",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Arden",
                "content": "Bacardi",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kyra",
                "content": "Sazerac",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Ana",
                "content": "Lemon Drop Martini",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Laura",
                "content": "Yellow Bird",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Christian",
                "content": "Caipirinha",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kiara",
                "content": "Rusty Nail",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cortez",
                "content": "Ramos Gin Fizz",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Antone",
                "content": "Aviation",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Evalyn",
                "content": "Hemingway Special",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Casimer",
                "content": "Kamikaze",
                "comic": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Shaylee",
                "content": "Irish Coffee",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Zola",
                "content": "Daiquiri",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Felipa",
                "content": "Kamikaze",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Sonia",
                "content": "Gin Fizz",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rudolph",
                "content": "Champagne Cocktail",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Bria",
                "content": "Dark 'N' Stormy",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Eladio",
                "content": "Yellow Bird",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Ed",
                "content": "Singapore Sling",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Keon",
                "content": "Mimosa",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Eleanore",
                "content": "Paradise",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Virginia",
                "content": "Dark 'N' Stormy",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Conner",
                "content": "Dirty Martini",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Conor",
                "content": "Whiskey sour",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Alfred",
                "content": "Monkey Gland",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Vita",
                "content": "Paradise",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Wilfrid",
                "content": "Americano",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Magnus",
                "content": "Tequila Sunrise",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cassandre",
                "content": "Tommy's Margarita",
                "comic": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Glenda",
                "content": "Singapore Sling",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Quinn",
                "content": "God Father",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Valerie",
                "content": "B-52",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Ansley",
                "content": "Stinger",
                "comic": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Joyce",
                "content": "Sidecar",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Maybell",
                "content": "Derby",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Bridget",
                "content": "Manhattan",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Trevor",
                "content": "B-52",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rosamond",
                "content": "Mojito",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Giovanni",
                "content": "Bramble",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Elmer",
                "content": "Cosmopolitan",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Savannah",
                "content": "Screwdriver",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Iliana",
                "content": "Sidecar",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Denis",
                "content": "Porto flip",
                "comic": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rosalee",
                "content": "John Collins",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Myra",
                "content": "Negroni",
                "comic": 7,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Russell",
                "content": "Porto flip",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Catalina",
                "content": "Yellow Bird",
                "comic": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Mercedes",
                "content": "Tequila Sunrise",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Dariana",
                "content": "Horse's Neck",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Libbie",
                "content": "Negroni",
                "comic": 5,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Matilde",
                "content": "Casino",
                "comic": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Pietro",
                "content": "Negroni",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Nicholaus",
                "content": "Dark 'N' Stormy",
                "comic": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rhianna",
                "content": "John Collins",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Lyric",
                "content": "Bloody Mary",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Armani",
                "content": "Mary Pickford",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Preston",
                "content": "Casino",
                "comic": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Kendrick",
                "content": "Golden Dream",
                "comic": 6,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Donato",
                "content": "Mint Julep",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Lindsay",
                "content": "Alexander",
                "comic": 9,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Rebeca",
                "content": "Black Russian",
                "comic": 1,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Milan",
                "content": "Angel Face",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Korbin",
                "content": "Old Fashioned",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Cassandre",
                "content": "Bloody Mary",
                "comic": 4,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Fernando",
                "content": "Yellow Bird",
                "comic": 8,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Wilber",
                "content": "Vesper",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Tanya",
                "content": "Kamikaze",
                "comic": 2,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Keyon",
                "content": "Tommy's Margarita",
                "comic": 10,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Bailey",
                "content": "Sidecar",
                "comic": 3,
                "createdAt": new Date(),
                "updatedAt": new Date()
            },
            {
                "name": "Concepcion",
                "content": "Mint Julep",
                "comic": 6,
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
