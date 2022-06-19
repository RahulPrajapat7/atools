const express = require("express");
const User = require("../models/User");

const router = express.Router();
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var JWT_SECRET = 'Harryisagoodb$oy'

//Route1: create a user using :post "/api/auth/createuser",no login required
router.post(
    "/createuser",
    [
        body("email", "enter a valid email").isEmail(),
        body("password", "password must  be atleast 5 letter").isLength({ min: 5 }),
    ],
    async (req, res) => {
        let success = false;
        // if there are are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            //create a bcrypt password generator for security
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            //create a new user
            const user = await User.create({

                email: req.body.email,
                password: secPass,
            })

            const data = {
                user: {
                    id: user.id,
                }
            }
            //creating a json web toke
            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authToken ,msg:"Login successfully "})
        } catch (error) {
            console.error(error.message);
            res.status(500).send("internal server error");
        }
    }
);
module.exports = router;