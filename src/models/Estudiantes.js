const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('estudiantes', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name : {
            type : DataTypes.STRING,
            allowNull: false
        },
        carrera : {
            type : DataTypes.STRING,
            allowNull : false
        }
    })
}