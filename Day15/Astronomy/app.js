const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(
  express.static(
    "C:/Users/Hermon AW/Desktop/MIU/WAP/Aerimc.github.io/Day15/Astronomy/public"
  )
);

app.get("/", (req, res, next) => {
  res.sendFile(
    "C:/Users/Hermon AW/Desktop/MIU/WAP/Aerimc.github.io/Day15/Astronomy/public/apod.html"
  );
});
app.post("/submit", (req, res) => {
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
