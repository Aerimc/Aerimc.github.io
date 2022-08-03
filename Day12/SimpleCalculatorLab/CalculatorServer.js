var express = require("express");
var app = express();
var path = require("path");
app.use(express.json());
app.use(express.urlencoded());
app.use(
  express.static(
    "C:/Users/Hermon AW/Desktop/MIU/WAP/Aerimc.github.io/Day12/SimpleCalculatorLab/public"
  )
);

app.get("/", function (req, res, next) {
  res.sendFile(
    "C:/Users/Hermon AW/Desktop/MIU/WAP/Aerimc.github.io/Day12/SimpleCalculatorLab/public/SimpleAdder.html"
  );
});

app.post("/CalculatorServer", function (req, res, next) {
  var cont = req.body;
  if (cont.process == "Addition") {
    var result = parseInt(cont.first) + parseInt(cont.second);
  } else if (cont.process == "Subtraction") {
    var result = parseInt(cont.first) - parseInt(cont.second);
  } else if (cont.process == "Multiplication") {
    var result = parseInt(cont.first) * parseInt(cont.second);
  } else {
    var result = parseInt(cont.first) / parseInt(cont.second);
  }

  res.send(`
    <div class="main" style="width: 40%;margin: 15% auto;color: aliceblue;background-color: rgb(65, 77, 77);border: 2px solid;
            line-height: 40px;border: 5px solid grey;border-radius: 5px;box-shadow: 10px 10px 5px gray;">
      <h1 style="color: rgb(5, 5, 5);margin-left: 15%;text-shadow: 5px 5px 10px rgb(36, 33, 33);">Simple Calculator</h1>
      <div id="form" style="margin: 10%;">
        <h1 class="res">The result is: ${result}</h1> <br>
        <h1 class="back"><a style="color: chartreuse;" href="http://localhost:8080/">Another calculation</a></h1>
      </div>
    </div>
  `);
});
app.listen(8080);
