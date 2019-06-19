module.exports = (sequelize, DataTypes) => {

    const Agenda = sequelize.define('tblAgenda', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        time: {
            type: DataTypes.DATE
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false

        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return Agenda;
}