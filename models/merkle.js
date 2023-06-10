module.exports = (sequelize, DataTypes) => {
    const merkle = sequelize.define('merkle', {
        id: {
            type: DataTypes.CHAR(36),
            allowNull: false,
            primaryKey: true
          },
          merkle: {
            type: DataTypes.STRING(200),
            allowNull: false
          },
          updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          },
          created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
          }
    }, {
        timestamps: false,
    });

    return merkle;
};