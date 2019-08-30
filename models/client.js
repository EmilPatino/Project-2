module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("clients", {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    clientAddress: {
      type: DataTypes.STRING
    },
    clientState: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    clientEmail: {
      type: DataTypes.STRING
    },
    clientPhone: {
      type: DataTypes.STRING
    },
    contactName: {
      type: DataTypes.STRING
    },
    clientPriority: {
      type: DataTypes.STRING
    },
    clientValue: {
      type: DataTypes.STRING
    }
  });
  return Client;
};
