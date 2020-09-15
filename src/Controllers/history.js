const historyModel = require("../Models/history");
const formRespone = require("../Helpers/Forms/formRespone");

const historyController = {
    showAllHistory: (_, res) => {
        historyModel.showAllHistory()
            .then((data) => {
                formRespone.success(res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    showHistoryByInvoice: (req, res) => {
        historyModel.showHistoryByInvoice(req.params.invoice)
            .then((data) => {
                formRespone.success(res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    showHistoryByName: (req, res) => {
        historyModel.showHistoryByName(req.params.name)
            .then((data) => {
                formRespone.success(res, data);
            })
            .catch((err) => {
                formRespone.error(res, err);
            })
    },
    showHistory: (_, res) => {
        historyModel.showHistory()
            .then((data) => {
                formRespone.success(res, data)
            })
            .catch((err) => {
                formRespone.error(res, err)
            })
    },
}

module.exports = historyController;