const mainController = {
    sayHello: (_, res) => {
        res.json({
            msg: "hello world"
        })
    },
    testBody: (req, res) => {
        console.log(req.body);
        res.json({
            msg: "Body sudah diterima",
            body: req.body,
        })
    },
};

module.exports = mainController;