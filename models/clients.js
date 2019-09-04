module.exports = function (sequelize, DataTypes) {
  var Clients = sequelize.define("Clients", {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
  });

  //To asssociate with graph overview page
  Clients.associate = function (models) {
    Clients.hasMany(models.Post, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Clients;
};