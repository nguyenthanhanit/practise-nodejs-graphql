'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ComicCategories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    ComicCategories.init({
        comicId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ComicCategories',
    });
    return ComicCategories;
};