import React, { useState } from "react";
import "../styles/Home.css";

function Home() {
    const [address, setAddress] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!address) {
            console.log("Missing address");
            return;
        }

        console.log(address);

        const res = await fetch("http://localhost:4000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({address})
        });

        if (!res.ok) {
            const err = await res.json();
            console.log("Wrong username or password");
            return;
        }

        console.log("Sent & received");
    }

    return (
        <div className="home-container">
            <div className="address-container">
                <input 
                    id="address-input"
                    placeholder="Add an address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}/>
                <button id="address-btn" type="button">Add</button>
            </div>
            
            <button id="search-addr-btn" type="button" onClick={handleSubmit}>Search</button>
        </div>
    );
}

export default Home;