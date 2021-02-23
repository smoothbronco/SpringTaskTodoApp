/* Model, Route, Controllerを組み合わせてAPIが稼働できるようにする． */

var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require("mongoose"),
	Task = require("./api/models/taskModel"), // 作成したModelの読み込み
	bodyParser = require("body-parser"); // bodeParser: HTML(ejs)においてform内のinputに入力した値を受け取れるようにするもの

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/taskRoutes"); // Routeのインポート
routes(app); //appにRouteを設定する。

app.listen(port); // appを特定のportでlistenさせる。

console.log("todo list RESTful API server started on: " + port);
