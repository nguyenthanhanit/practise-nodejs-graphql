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
            this.belongsTo(models.Author)
            this.hasMany(models.Chapter)
            this.belongsToMany(models.Category, {through: 'ComicCategories'});
            this.belongsTo(models.Type)
        }
    }

    Comic.init({
        name: DataTypes.STRING,
        authorId: DataTypes.INTEGER,
        typeId: DataTypes.INTEGER,
        visible: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Comic',
    });
    return Comic;
};