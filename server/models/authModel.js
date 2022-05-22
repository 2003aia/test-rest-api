module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define("auth", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  return Auth;
};
