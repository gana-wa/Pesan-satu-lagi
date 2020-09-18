const db = require("../Configs/dbMySql");

const querySelect = `SELECT tb_product.product_id, tb_product.product_name, tb_category.category_name, tb_product.price, tb_product.image FROM tb_product JOIN tb_category ON tb_product.category_id = tb_category.category_id`;

const productModel = {
   // GET or SELECT
   getAllProducts: () => {
      return new Promise((resolve, rejects) => {
         const queryString = `${querySelect}`;
         db.query(queryString, (err, data) => {
            if (!err) {
               resolve(data);
            } else {
               rejects(err);
            }
         });
      });
   },
   getPaginatedProducts: (page, limit) => {
      return new Promise((resolve, rejects) => {
         const offset = (page - 1) * limit;
         const queryString = `${querySelect} LIMIT ? OFFSET ?`;
         db.query(queryString, [Number(limit), offset], (err, data) => {
            if (!err) {
               resolve(data);
            } else {
               rejects(err);
            }
         });
      });
   },
   getProductByCategory: (category_name) => {
      return new Promise((resolve, rejects) => {
         const queryString = `${querySelect} WHERE tb_category.category_name = '${category_name}'`;
         db.query(queryString, [category_name], (err, data) => {
            if (!err) {
               if (data.length !== 0) {
                  resolve(data);
               }
               rejects({ msg: "Belum ada data" })
            } else {
               rejects(err);
            }
         })
      });
   },
   // GET or SELECT with SORTING
   sortProducts: (query) => {
      const sortBy = query.by;
      const sortOrder = query.order;
      return new Promise((resolve, rejects) => {
         // const queryString = `${querySelect} ORDER BY tb_product.product_name ASC`;
         const queryString = `${querySelect} ORDER BY tb_product.${sortBy} ${sortOrder}`;
         db.query(queryString, (err, data) => {
            if (!err) {
               resolve(data);
            } else {
               rejects(err);
            }
         });
      });
   },
   // SEARCH
   searchProductByName: (query) => {
      return new Promise((resolve, rejects) => {
         const queryString = `${querySelect} WHERE tb_product.product_name LIKE '%${query.product_name}%' ORDER BY tb_product.${query.by}`;
         db.query(queryString, (err, data) => {
            if (!err) {
               if (data.length !== 0) {
                  resolve(data);
               }
               rejects({ msg: "Data not found..!" })
            } else {
               rejects(err);
            }
         });
      });
   },
   // POST or INSERT
   postNewProduct: (body) => {
      const { product_name, price, category_id, image } = body;
      const queryString = "INSERT INTO tb_product SET product_name=?, price=?, category_id=?, image=?"
      // const queryString = "INSERT INTO tb_product SET ?";
      return new Promise((resolve, rejects) => {
         db.query(queryString, [product_name, price, category_id, image], (err, data) => {
            // db.query(queryString, (err, data) => {
            if (!err) {
               resolve(data);
            } else {
               rejects(err);
            }
         })
      });
   },
   // UPDATE
   updateProduct: (product_id, body) => {
      const { product_name, price, category_id, image } = body;
      const queryUpdate = `UPDATE tb_product SET ? WHERE tb_product.product_id = '${product_id}'`;
      // const queryUpdate = `UPDATE tb_product SET ? WHERE tb_product.product_id = '${product_id}'`;
      return new Promise((resolve, rejects) => {
         db.query(queryUpdate, [body], (err, data) => {
            if (!err) {
               resolve(data);
            } else {
               rejects(err);
            }
         });
      });
   },
   // DELETE
   deleteProduct: (product_id) => {
      const queryUpdate = `DELETE FROM tb_product WHERE tb_product.product_id = '${product_id}'`;
      return new Promise((resolve, rejects) => {
         db.query(queryUpdate, [product_id], (err, data) => {
            if (!err) {
               resolve(data);
            } else {
               rejects(err);
            }
         });
      });
   },
}

module.exports = productModel;