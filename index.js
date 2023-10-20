const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (res, reqs) => {
    reqs.send("yesss")
});


app.listen(port, () => console.log(`listen ${port}`));