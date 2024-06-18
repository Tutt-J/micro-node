require("dotenv").config();
const app = require("./app.js");

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
    res.send("Welcome to the auth microservice !")
})

app.listen(PORT, () => {
    console.log(`Auth microservice is listening on ${PORT}`)
})