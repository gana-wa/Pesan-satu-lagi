const db = require("../Configs/dbMySql");

const querySelect = `SELECT * FROM tb_category`;

const categoryModel = {
    // GET
    getAllCategory: () => {
        return new Promise((resolve, reject) => {
            const queryString = `${querySelect}`;
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    // POST/INSERT
    postCategory: (body) => {
        return new Promise((resolve, reject) => {
            const queryString = "INSERT INTO tb_category SET ?";
            db.query(queryString, [body], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
    // UPDATE
    updateCategory: (body) => {
        const { category_name, category_id } = body;
        const queryUpdate = `UPDATE tb_category SET category_name = ? WHERE category_id = ?`;
        return new Promise((resolve, rejects) => {
            db.query(queryUpdate, [category_name, category_id], (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    rejects(err);
                }
            });
        });
    },
    // DELETE
    deleteCategory: (category_id) => {
        // const { category_id } = body;
        const queryString = `DELETE FROM tb_category WHERE category_id = ${category_id}`
        return new Promise((resolve, reject) => {
            db.query(queryString, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
}

module.exports = categoryModel;