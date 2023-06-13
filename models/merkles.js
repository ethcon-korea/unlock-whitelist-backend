module.exports = (sequelize, DataTypes) => {
    const merkles = sequelize.define('merkles', {
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
        defaultValue: DataTypes.NOW
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      timestamps: false,
    });
  
    return merkles;
  };