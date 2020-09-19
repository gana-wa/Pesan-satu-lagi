const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../Configs/dbMySql');

const authModel = {
    postNewUser: (body) => {
        return new Promise((resolve, reject) => {
            const querySelect = 'SELECT telp FROM tb_user WHERE telp = ?';
            db.query(querySelect, [body.telp], (err, data) => {
                if (data.length) {
                    reject({
                        msg: "Nomer ini sudah terdaftar, silahkan login"
                    })
                } else {
                    // registration
                    const saltRounds = 10;
                    bcrypt.genSalt(saltRounds, (err, salt) => {
                        if (err) {
                            reject(err);
                        }
                        const { password, name, telp, level_id } = body;
                        bcrypt.hash(password, salt, (err, hashedPassword) => {
                            if (err) {
                                reject(err);
                            }
                            const newBody = { ...body, password: hashedPassword };
                            const queryString = "INSERT INTO tb_user SET ?";
                            db.query(queryString, newBody, (err, data) => {
                                if (!err) {
                                    const payload = {
                                        telp,
                                        name,
                                        level_id,
                                    }
                                    const token = jwt.sign(payload, process.env.SECRET_KEY
                                        // , { expiresIn: "6h" }
                                    );
                                    const msg = `${name} berhasil didaftarkan..!`;
                                    const id = data.insertId;
                                    resolve({ msg, name, telp, level_id, token, id });
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
            const queryString = "SELECT id, name, telp, password, level_id FROM tb_user WHERE telp=?";
            db.query(queryString, body.telp, (err, data) => {
                // check error query
                if (err) {
                    reject(err);
                }
                // check data
                if (data.length) {
                    // check password
                    bcrypt.compare(body.password, data[0].password, (err, result) => {
                        if (result) {
                            const { telp } = body;
                            const { level_id, name, id } = data[0];
                            const payload = {
                                telp,
                                name,
                                level_id,
                            }
                            const token = jwt.sign(payload, process.env.SECRET_KEY
                                // , { expiresIn: "6h" }
                            );
                            const msg = "Login berhasil..!";
                            resolve({ msg, name, telp, level_id, token, id })
                        }
                        if (!result) {
                            reject({ msg: "Password salah..!" })
                        }
                        if (err) {
                            reject(err);
                        }
                    })
                } else {
                    reject({ msg: "Nomer ini belum terdaftar, silahkan daftar terlebih dahulu.." })
                }
            })
        })
    },
    editUser: (id, body) => {
        return new Promise((resolve, reject) => {
            const queryUpdate = `UPDATE tb_user SET ? WHERE tb_user.id = '${id}'`;
            db.query(queryUpdate, body, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    }
}

module.exports = authModel;