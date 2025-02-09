const express = require("express");
const homeService = require("../service/HomeService");

class HomeController {
    
    /**
     * Endpoint of handling addresses.
     */
    async handleAddresses(req, res) {
        const addresses = req.body.address;

        console.log(addresses);

        // call service to insert user
        // const data = await homeService.handleAddress(addresses);

        // if (!data) {
        //     res.send("Something went wrong, no data :(");
        //     return;
        // }

        // res.status(200).json({ message: "Find successful", user: data});
    }
}

module.exports = new HomeController();