const express = require('express');
    var router = express.Router();

    router.get('/', (req, res) => {
        res.render("home/homepage", {
            viewTitle: "MyOpinion"
        });
    });
    module.exports=router;
