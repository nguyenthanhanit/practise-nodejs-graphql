const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {APP_SECRET} = require('../../utils')

module.exports = {
    Mutation: {
        async login(parent, args, context) {
            const user = await context.sequelize.User.findOne({where: {email: args.email}});
            if (!user) {
                throw new Error('No such user found')
            }
            const valid = await bcrypt.compare(args.password, user.password)
            if (!valid) {
                throw new Error('Invalid password')
            }
            const token = jwt.sign({userId: user.id}, APP_SECRET)
            return {
                token,
                user
            }
        },
        async signup(parent, args, context) {
            const password = await bcrypt.hash(args.password, 10)
            const user = await context.sequelize.User.create({...args, password})
            const token = jwt.sign({userId: user.id}, APP_SECRET)
            return {
                token,
                user
            }
        }
    },
    Query: {
        getUsers: (parent, args, context) => {
            return context.sequelize.User.findAll()
        }
    }
}