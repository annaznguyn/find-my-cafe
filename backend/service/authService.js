const bcrypt = require("bcrypt");

const database = require("../db/databaseConnection");

class AuthService {
    /**
     * Insert new user to the users table (with hashed password).
     * @param username Input username.
     * @param password Input password.
     * @returns Inserted data.
     */
    async signup(username, password) {
        try {
            // check if username already exists
            // TODO: here
            const { data: checkData, error: checkError } = await database
                .from("users")
                .select("username")
                .eq("username", username);

            if (checkError) {
                console.error("Error checking username:", checkError.message);
                return null;
            }
            
            if (checkData.length > 0) {
                console.log("Username already exists");
                return null;
            }

            // hash the password
            const saltRounds = 10;
            const hash = await bcrypt.hash(password, saltRounds);

            // add user to the table
            const { data: insertData, error: insertError } = await database
                .from("users")
                .insert([{
                    username: username,
                    password: hash,
                }])
                .select();
            
            if (insertError) {
                console.error("Error inserting user:", insertError.message);
                return null;
            }
            
            console.log("Added user successfully");
            return insertData;
        } catch (err) {
            console.error("Unexpected error:", err.message);
            return null;
        }
    }
}

module.exports = new AuthService();