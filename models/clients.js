module.exports = function (sequelize, DataTypes) {
  var Clients = sequelize.define("Clients", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [120]
      }
    },
    clientAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [120]
      }
    },
    clientState: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3]
      }
    },
    clientPhone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [20]
      }
    },
    clientEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    clientValue: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        len: [150]
      }
    },
    clientPriority: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [150]
      }
    },
  });


  //To asssociate with graph overview page
  Clients.associate = function (models) {
    Clients.hasMany(models.Clients, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Clients;
};