module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        id: DataTypes.UUID,
        pseudo: {
            type: DataTypes.STRING,
            unique: true
        },
        mail: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
    });
}
