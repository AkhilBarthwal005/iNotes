const connectToMongo = require("./dbConnect");

connectToMongo();

const express = require("express");
const app = express();
const port = 3000;

// Available routes
app.use("/", require("./routes/home"));
app.use("/user/auth", require("./routes/auth"));
app.use("/user/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
