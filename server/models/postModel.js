module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("post", {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING
    }
  });

  return Post;
};
