const express = require("express");
const app = express();

app.get('/health', (req, res) => {
  return res.status(200).send("ok");
});

app.get("/test", (req, res) => {
  res.json({
    status: "sucessfully started",
  });
});

app.get("/purpose", (req, res) => {
  res.json({
    status: "this is a test for ci/cd pipeline and its successfull and this time i have made it myself",
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("done connected");
});

