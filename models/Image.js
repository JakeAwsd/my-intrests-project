module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.BLOB("long"),
      },
    });
    return Image;
  };