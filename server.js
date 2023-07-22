const express = require("express");
const bodyParser = require("body-parser");
const farmerRouter = require("./routes/farmerRoute");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/farmers", farmerRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
