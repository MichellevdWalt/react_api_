'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class User extends Sequelize.Model {}

    User.init({
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: "Please enter a user first name",
                }
              }
        },
        lastName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: "Please enter a user last name",
                }
              }
        },
        emailAddress: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: "Email address cannot be empty",
                },
                isEmail: {
                  msg: "Please enter a valid email address"
                }
              }
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  msg: "Please enter a valid password",
                }
              }
        }
    },
    {sequelize});

    User.associate = (models) => {
        User.hasMany(models.Course,
            {foreignKey: {
              fieldName: "userId",
              allowNull: false
              }
            }
        )
    };

    return User
}