const express = require("express");
const cors = require("cors");
require("dotenv").config();
const translationRouter = require("./routes/translation-text.routes");
const path  = require("path")

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
app.use("/", translationRouter);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
});
