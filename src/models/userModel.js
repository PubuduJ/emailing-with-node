const userModel = (sequelize, DataType) => {
    return sequelize.define("user", {
        email: {
            type: DataType.STRING(100),
            primaryKey: true,
            allowNull: false,
            field: "email",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Email cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "Email cannot be null"
                },
                isEmail: {
                    args: true,
                    msg: "Invalid email id format"
                }
            }
        },
        name: {
            type: DataType.STRING(100),
            allowNull: false,
            field: "name",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "user name cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "user name cannot be null"
                },
                is: {
                    args: /^[A-Za-z][A-Za-z ]+$/,
                    msg: "Invalid user name"
                }
            }
        },
        address: {
            type: DataType.STRING(250),
            allowNull: false,
            field: "address",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "User address cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "User address cannot be null"
                },
                is: {
                    args: /^[A-Za-z\d][A-Za-z\d-|/# ,.:;\\]+$/,
                    msg: "Invalid user address"
                }
            }
        },
        contact: {
            type: DataType.STRING(11),
            allowNull: false,
            field: "contact",
            validate: {
                notEmpty: {
                    args: true,
                    msg: "User contact number cannot be empty"
                },
                notNull: {
                    args: true,
                    msg: "User contact number cannot be null"
                },
                is: {
                    args: /^\d{3}-\d{7}$/,
                    msg: "Invalid user contact number"
                }
            }
        },
    },{
        tableName: 'user',
        timestamps: false
    })
}

module.exports = userModel;