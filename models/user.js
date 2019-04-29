'use strict';
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeSave((user,option)=>{
    var salt = bcrypt.genSaltSync(8)
    var hash = bcrypt.hashSync(user.password, salt)
    user.password = hash
  })
  return User;
};