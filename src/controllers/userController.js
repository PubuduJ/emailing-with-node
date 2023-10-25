const {db} = require("../models");
const {StatusCodes} = require("http-status-codes");
const {ConflictError} = require("../errors/errors");
const eMailSender = require("../util/eMailSender");

const User = db.users;
const sequelize = db.sequelize;

const createUser = async (req, res) => {
    const t = await sequelize.transaction();
    try {
        const availability = await User.findByPk(req.body.email);
        if (!availability) {
            const createdUser = await User.create(req.body, {transaction: t});
            await eMailSender(req.body.email, "Confirmation", `User: ${req.body.name} has successfully saved to the database`)
            await t.commit();
            return res.status(StatusCodes.CREATED).json(createdUser);
        }
        throw new ConflictError("User already exist in the database");
    } catch (error) {
        await t.rollback();
        throw error;
    }
}

module.exports = {createUser};