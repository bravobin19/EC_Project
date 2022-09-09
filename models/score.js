module.exports = function(sequelize, DataTypes) {
    return sequelize.define('score', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categories_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT
      },
      score: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });
  };