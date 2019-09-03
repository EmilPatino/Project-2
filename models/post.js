module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
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
      type: DataTypes.DECIMAL(10,2),
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

  Post.associate = function (models) {
    Post.belongsTo(models.Clients, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
};
