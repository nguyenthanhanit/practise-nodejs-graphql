const {ApolloServer, gql} = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
      title: String
      author: Author
  }
  type Author {
      name: String
      books: [Book]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book],
    authors: [Author]
  }
`;
const books = [
    {
        title: 'Thần điêu đại hiệp',
        author: {
            name: 'Kim Dung'
        },
    },
    {
        title: 'Thiên long bát bộ',
        author: {
            name: 'Kim Dung'
        },
    },
    {
        title: 'Tiếu ngạo giang hồ',
        author: {
            name: 'Kim Dung'
        },
    },
    {
        title: 'Tuyệt đại song kiêu',
        author: {
            name: 'Cổ Long'
        },
    }
];
const authors = [
    {
        name: 'Kim Dung',
        books: [
            {
                title: 'Thần điêu đại hiệp'
            },
            {
                title: 'Thiên long bát bộ'
            },
            {
                title: 'Tiếu ngạo giang hồ'
            },
        ]
    },
    {
        name: 'Cổ Long',
        books: [
            {
                title: 'Tuyệt đại song kiêu'
            }
        ]
    }
];
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});