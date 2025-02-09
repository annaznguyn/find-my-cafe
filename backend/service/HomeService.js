const express = require("express");

class HomeService {

    /**
     * Find cafes based on the addresses
     */
    async handleAddress(addresses) {
        console.log("service" + addresses);
    }
}

module.exports = new HomeService();