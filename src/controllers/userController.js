const {db} = require("../models");
const {StatusCodes} = require("http-status-codes");

const createUser = async (req, res) => {
    res.status(StatusCodes.CREATED).json({message: "Created"});
}

module.exports = {createUser};