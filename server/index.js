const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const router = require("./routes/postRouter.js");
app.use("/api/posts", router);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING");
});
