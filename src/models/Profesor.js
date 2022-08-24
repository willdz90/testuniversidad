const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('profesor', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        last_name : {
            type : DataTypes.STRING,
            // allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            validate : {
                isEmail : true
            }
        }
    })
}