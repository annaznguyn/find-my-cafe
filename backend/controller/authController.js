const express = require("express");
const authService = require("../service/authService");

class AuthController {
    
    /**
     * Endpoint of user registration.
     */
    async signup(req, res) {
        const username = req.body.username;
        const password = req.body.password;

        // console.log(username, password);

        // call service to insert user
        const data = await authService.signup(username, password);

        if (!data) {
            res.send("Something went wrong, no data :(");
            return;
        }

        res.status(200).json({ message: "Register successful", user: data});
    }
}

module.exports = new AuthController();