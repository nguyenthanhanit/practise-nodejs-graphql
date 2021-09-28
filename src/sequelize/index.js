const {Sequelize, DataTypes} = require("sequelize");
const fs = require("fs");
const path = require("path");
const _ = require('lodash');
const basename = path.basename(__filename);

class SequelizeProvider {
    constructor() {
        this.db = {};
        this.models = {};
        this.typeDB = 'mysql';
        this.nameDB = 'practise';
        this.username = 'root';
        this.password = 'password';
        this.modelsFolder = `${__dirname}/models`;
    }

    init() {
        this.db = new Sequelize(this.nameDB, this.username, this.password, {
            dialect: this.typeDB
        })
        fs.readdirSync(this.modelsFolder)
            .filter((file) => (
                file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
            ))
            .forEach((file) => {
                const model = require(path.join(this.modelsFolder, file));
                this.models = {
                    ...this.models,
                    ...{
                        [_.upperFirst(_.replace(path.basename(file), '.js', ''))]: model(this.db, DataTypes)
                    }
                }
            });
    }

    getModel() {
        return this.models['Comics']
    }
}

module.exports = new SequelizeProvider();