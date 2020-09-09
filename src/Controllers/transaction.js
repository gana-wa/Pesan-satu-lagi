const transactionModel = require("../Models/transaction");
const formRespone = require("../Helpers/Forms/formRespone");

const transactionController = {
    // POST
    addTransaction: (req, res) => {
        transactionModel
        .addTransaction(req.body)
        .then((data) => {
            // res.status(200).json(data);
            formRespone.success(res,data);
        })
        .catch((err) => {
            // res.status(500).json(err);
            formRespone.error(res, err);
        })
    }
}

module.exports = transactionController;