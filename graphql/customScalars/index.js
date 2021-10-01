const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const basename = path.basename(__filename);
let scalars = {};

fs.readdirSync(__dirname)
    .filter((file) => (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    ))
    .forEach((file) => {
        const scalar = _.upperFirst(_.replace(file, '.js', ''));
        scalars[scalar] = require(path.join(__dirname, file));
    });

module.exports = [scalars];