const db = require("../Configs/dbMySql");

const transactionModel = {
    // POST
    addTransaction: (body) => {
        const { invoice, cashier, total, transaction } = body;
        return new Promise((resolve, reject) => {
            const startTransaction = `START TRANSACTION;`;
            const firstQuery = `INSERT INTO tb_history SET invoice = ?, cashier = ?, total = ?;`;
            const secondQuery = `INSERT INTO tb_transaction (invoice, product_id, quantity) VALUES ?;`;
            const endTransaction = `COMMIT;`;
            const joinQuery = startTransaction + firstQuery + secondQuery + endTransaction;
            let arrOfQuery = transaction.map((item) => {
                return [invoice, item.product_id, item.quantity]
            });
            db.query(joinQuery, [invoice, cashier, total, arrOfQuery], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    }
}

module.exports = transactionModel;