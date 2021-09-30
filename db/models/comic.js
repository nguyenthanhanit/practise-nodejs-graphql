'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {foreignKey: 'author'})
            this.hasMany(models.Chapter, {foreignKey: 'comic'})
        }
    }

    Comic.init({
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Comic',
    });
    return Comic;
};