const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../Configs/dbMySql');

const authModel = {
    postNewUser: (body) => {
        return new Promise((resolve, reject) => {
            const querySelect = 'SELECT username FROM tb_user WHERE username = ?';
            db.query(querySelect, [body.username], (err, data) => {
                if (data.length) {
                    reject({
                        msg: "Username is already taken..!"
                    })
                } else {
                    // registration
                    const saltRounds = 10;
                    bcrypt.genSalt(saltRounds, (err, salt) => {
                        if (err) {
                            reject(err);
                        }
                        const { password } = body;
                        bcrypt.hash(password, salt, (err, hashedPassword) => {
                            if (err) {
                                reject(err);
                            }
                            const newBody = { ...body, password: hashedPassword };
                            const queryString = "INSERT INTO tb_user SET ?";
                            db.query(queryString, newBody, (err, data) => {
                                if (!err) {
                                    resolve(data);
                                } else {
                                    reject(err);
                                }
                            })
                        })
                    })
                }
            })
        })
    }, //end registration
    loginUser: (body) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT username, password, level_id FROM tb_user WHERE username=?";
            db.query(queryString, body.username, (err, data) => {
                // check error query
                if (err) {
                    reject(err);
                }
                // check data
                if (data.length) {
                    // check password
                    bcrypt.compare(body.password, data[0].password, (err, result) => {
                        if (result) {
                            const { username } = body;
                            const { level_id } = data[0];
                            const payload = {
                                username,
                                level_id,
                            }
                            const token = jwt.sign(payload, process.env.SECRET_KEY
                                // , { expiresIn: "6h" }
                            );
                            const msg = "Login success..!";
                            resolve({ msg, username, level_id, token })
                        }
                        if (!result) {
                            reject({ msg: "Wrong password..!" })
                        }
                        if (err) {
                            reject(err);
                        }
                    })
                } else {
                    reject({ msg: "Username not found..!" })
                }
            })
        })
    },
}

module.exports = authModel;