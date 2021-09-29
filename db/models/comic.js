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
            this.belongsTo(models.User)
        }
    }

    Comic.init({
        name: DataTypes.STRING,
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'Users',
                },
                key: 'id',
            },
            // allowNull defaults to true
        }
    }, {
        sequelize,
        modelName: 'Comic',
    });
    return Comic;
};