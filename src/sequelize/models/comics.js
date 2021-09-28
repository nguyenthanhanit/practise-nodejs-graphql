module.exports = (db, DataTypes) => {
    return db.define('Comics', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // author: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         // This is a reference to another model
        //         model: Authors,
        //
        //         // This is the column name of the referenced model
        //         key: 'id'
        //     }
        //     // allowNull defaults to true
        // }
    }, {
        // Other model options go here
        db, // We need to pass the connection instance
        modelName: 'comics' // We need to choose the model name
    })
}