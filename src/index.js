const {ApolloServer} = require('apollo-server');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

let comics = [
    {
        id: 1,
        name: 'Thiên Long Bát Bộ',
        author: 'Kim Dung'
    },
    {
        id: 2,
        name: 'Anh Hùng Xạ Điêu',
        author: 'Kim Dung'
    },
    {
        id: 3,
        name: 'Thần Điêu Đại Hiệp',
        author: 'Kim Dung'
    },
    {
        id: 4,
        name: 'Ỷ Thiên Đồ Long Ký',
        author: 'Kim Dung'
    },
    {
        id: 5,
        name: 'Tuyệt Đại Song Kiêu',
        author: 'Cổ Long'
    },
]

const resolvers = {
    Query: {
        info: () => `Truyện tổng hợp`,
        all: () => comics,
        read: (parent, args) => {
            return _.find(comics, function (comic) {
                return comic.id === parseInt(args.id);
            })
        },
    },
    Mutation: {
        create: (parent, args) => {
            const comic = {
                id: _.size(comics) + 1,
                name: args.name,
                author: args.author,
            }
            comics.push(comic)
            return comic
        },
        update: (parent, args) => {
            _.remove(comics, function (comic) {
                return comic.id === parseInt(args.id);
            })
            const comic = {
                id: args.id,
                name: args.name,
                author: args.author,
            }
            comics.push(comic)
            return comic
        },
        delete: (parent, args) => {
            _.remove(comics, function (comic) {
                return comic.id === parseInt(args.id);
            })
            return comics
        },
    },
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
