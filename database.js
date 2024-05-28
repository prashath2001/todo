const mongoose = require('mongoose');

const url = `mongodb://localhost:27017/new`;

const connectDatabase = async (req, res) => {
    try {
        await mongoose
            .connect(url)
            .then(() => {
                console.log("Database Connected!!");
            });
    } catch (error) {
        console.error("Database Connection Failed");
    }
};
connectDatabase();