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
        "comic": 8
      },
      {
        "name": "Jaiden",
        "content": "Sidecar",
        "comic": 1
      },
      {
        "name": "Roma",
        "content": "Alexander",
        "comic": 6
      },
      {
        "name": "Barbara",
        "content": "Rusty Nail",
        "comic": 2
      },
      {
        "name": "Melvin",
        "content": "Angel Face",
        "comic": 10
      },
      {
        "name": "Jacinthe",
        "content": "Bloody Mary",
        "comic": 10
      },
      {
        "name": "Clark",
        "content": "Champagne Cocktail",
        "comic": 7
      },
      {
        "name": "Jordan",
        "content": "God Mother",
        "comic": 2
      },
      {
        "name": "Eleanora",
        "content": "Espresso Martini",
        "comic": 10
      },
      {
        "name": "Oda",
        "content": "Rose",
        "comic": 9
      },
      {
        "name": "Sasha",
        "content": "Manhattan",
        "comic": 7
      },
      {
        "name": "Jameson",
        "content": "Vesper",
        "comic": 8
      },
      {
        "name": "Elmore",
        "content": "Alexander",
        "comic": 2
      },
      {
        "name": "Alaina",
        "content": "Mai Tai",
        "comic": 3
      },
      {
        "name": "Kole",
        "content": "Gin Fizz",
        "comic": 1
      },
      {
        "name": "Aurelie",
        "content": "Margarita",
        "comic": 2
      },
      {
        "name": "Jamison",
        "content": "Yellow Bird",
        "comic": 4
      },
      {
        "name": "Deontae",
        "content": "Yellow Bird",
        "comic": 4
      },
      {
        "name": "Aaron",
        "content": "Dry Martini",
        "comic": 6
      },
      {
        "name": "Sigmund",
        "content": "French Martini",
        "comic": 10
      },
      {
        "name": "Garett",
        "content": "Manhattan",
        "comic": 6
      },
      {
        "name": "Nora",
        "content": "Angel Face",
        "comic": 7
      },
      {
        "name": "Jamar",
        "content": "Mai Tai",
        "comic": 10
      },
      {
        "name": "Clark",
        "content": "Pisco Sour",
        "comic": 9
      },
      {
        "name": "Albert",
        "content": "Old Fashioned",
        "comic": 10
      },
      {
        "name": "Naomi",
        "content": "Ramos Gin Fizz",
        "comic": 3
      },
      {
        "name": "Rowan",
        "content": "Kir",
        "comic": 7
      },
      {
        "name": "Sidney",
        "content": "Mai Tai",
        "comic": 9
      },
      {
        "name": "Richmond",
        "content": "Old Fashioned",
        "comic": 8
      },
      {
        "name": "Brittany",
        "content": "Mai Tai",
        "comic": 10
      },
      {
        "name": "Patricia",
        "content": "God Mother",
        "comic": 1
      },
      {
        "name": "Arden",
        "content": "Bacardi",
        "comic": 1
      },
      {
        "name": "Kyra",
        "content": "Sazerac",
        "comic": 10
      },
      {
        "name": "Ana",
        "content": "Lemon Drop Martini",
        "comic": 8
      },
      {
        "name": "Laura",
        "content": "Yellow Bird",
        "comic": 1
      },
      {
        "name": "Christian",
        "content": "Caipirinha",
        "comic": 6
      },
      {
        "name": "Kiara",
        "content": "Rusty Nail",
        "comic": 7
      },
      {
        "name": "Cortez",
        "content": "Ramos Gin Fizz",
        "comic": 10
      },
      {
        "name": "Antone",
        "content": "Aviation",
        "comic": 10
      },
      {
        "name": "Evalyn",
        "content": "Hemingway Special",
        "comic": 8
      },
      {
        "name": "Casimer",
        "content": "Kamikaze",
        "comic": 3
      },
      {
        "name": "Shaylee",
        "content": "Irish Coffee",
        "comic": 1
      },
      {
        "name": "Zola",
        "content": "Daiquiri",
        "comic": 1
      },
      {
        "name": "Felipa",
        "content": "Kamikaze",
        "comic": 2
      },
      {
        "name": "Sonia",
        "content": "Gin Fizz",
        "comic": 7
      },
      {
        "name": "Rudolph",
        "content": "Champagne Cocktail",
        "comic": 8
      },
      {
        "name": "Bria",
        "content": "Dark 'N' Stormy",
        "comic": 1
      },
      {
        "name": "Eladio",
        "content": "Yellow Bird",
        "comic": 9
      },
      {
        "name": "Ed",
        "content": "Singapore Sling",
        "comic": 1
      },
      {
        "name": "Keon",
        "content": "Mimosa",
        "comic": 9
      },
      {
        "name": "Eleanore",
        "content": "Paradise",
        "comic": 10
      },
      {
        "name": "Virginia",
        "content": "Dark 'N' Stormy",
        "comic": 10
      },
      {
        "name": "Conner",
        "content": "Dirty Martini",
        "comic": 9
      },
      {
        "name": "Conor",
        "content": "Whiskey sour",
        "comic": 8
      },
      {
        "name": "Alfred",
        "content": "Monkey Gland",
        "comic": 2
      },
      {
        "name": "Vita",
        "content": "Paradise",
        "comic": 6
      },
      {
        "name": "Wilfrid",
        "content": "Americano",
        "comic": 10
      },
      {
        "name": "Magnus",
        "content": "Tequila Sunrise",
        "comic": 7
      },
      {
        "name": "Cassandre",
        "content": "Tommy's Margarita",
        "comic": 3
      },
      {
        "name": "Glenda",
        "content": "Singapore Sling",
        "comic": 8
      },
      {
        "name": "Quinn",
        "content": "God Father",
        "comic": 6
      },
      {
        "name": "Valerie",
        "content": "B-52",
        "comic": 7
      },
      {
        "name": "Ansley",
        "content": "Stinger",
        "comic": 3
      },
      {
        "name": "Joyce",
        "content": "Sidecar",
        "comic": 8
      },
      {
        "name": "Maybell",
        "content": "Derby",
        "comic": 10
      },
      {
        "name": "Bridget",
        "content": "Manhattan",
        "comic": 10
      },
      {
        "name": "Trevor",
        "content": "B-52",
        "comic": 2
      },
      {
        "name": "Rosamond",
        "content": "Mojito",
        "comic": 7
      },
      {
        "name": "Giovanni",
        "content": "Bramble",
        "comic": 1
      },
      {
        "name": "Elmer",
        "content": "Cosmopolitan",
        "comic": 7
      },
      {
        "name": "Savannah",
        "content": "Screwdriver",
        "comic": 1
      },
      {
        "name": "Iliana",
        "content": "Sidecar",
        "comic": 6
      },
      {
        "name": "Denis",
        "content": "Porto flip",
        "comic": 3
      },
      {
        "name": "Rosalee",
        "content": "John Collins",
        "comic": 6
      },
      {
        "name": "Myra",
        "content": "Negroni",
        "comic": 7
      },
      {
        "name": "Russell",
        "content": "Porto flip",
        "comic": 10
      },
      {
        "name": "Catalina",
        "content": "Yellow Bird",
        "comic": 5
      },
      {
        "name": "Mercedes",
        "content": "Tequila Sunrise",
        "comic": 9
      },
      {
        "name": "Dariana",
        "content": "Horse's Neck",
        "comic": 10
      },
      {
        "name": "Libbie",
        "content": "Negroni",
        "comic": 5
      },
      {
        "name": "Matilde",
        "content": "Casino",
        "comic": 3
      },
      {
        "name": "Pietro",
        "content": "Negroni",
        "comic": 2
      },
      {
        "name": "Nicholaus",
        "content": "Dark 'N' Stormy",
        "comic": 4
      },
      {
        "name": "Rhianna",
        "content": "John Collins",
        "comic": 9
      },
      {
        "name": "Lyric",
        "content": "Bloody Mary",
        "comic": 6
      },
      {
        "name": "Armani",
        "content": "Mary Pickford",
        "comic": 9
      },
      {
        "name": "Preston",
        "content": "Casino",
        "comic": 4
      },
      {
        "name": "Kendrick",
        "content": "Golden Dream",
        "comic": 6
      },
      {
        "name": "Donato",
        "content": "Mint Julep",
        "comic": 10
      },
      {
        "name": "Lindsay",
        "content": "Alexander",
        "comic": 9
      },
      {
        "name": "Rebeca",
        "content": "Black Russian",
        "comic": 1
      },
      {
        "name": "Milan",
        "content": "Angel Face",
        "comic": 2
      },
      {
        "name": "Korbin",
        "content": "Old Fashioned",
        "comic": 8
      },
      {
        "name": "Cassandre",
        "content": "Bloody Mary",
        "comic": 4
      },
      {
        "name": "Fernando",
        "content": "Yellow Bird",
        "comic": 8
      },
      {
        "name": "Wilber",
        "content": "Vesper",
        "comic": 10
      },
      {
        "name": "Tanya",
        "content": "Kamikaze",
        "comic": 2
      },
      {
        "name": "Keyon",
        "content": "Tommy's Margarita",
        "comic": 10
      },
      {
        "name": "Bailey",
        "content": "Sidecar",
        "comic": 3
      },
      {
        "name": "Concepcion",
        "content": "Mint Julep",
        "comic": 6
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
