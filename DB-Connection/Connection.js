const mongoose = require('mongoose');

const connectionString = process.env.DATABASE;

mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true 
}).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log("mongodb connection failed");
});
