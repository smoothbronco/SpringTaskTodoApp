/* Modelではデータの処理，DBとのやりとりを行う．
 * Controllerからの命令を受けて処理をし，結果を返す． */

// mongoose：Nodejs -> MongoDBの操作のためのライブラリ
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/* スキーマ：DBの構造．各データの構成を設定する．
 * ここではname(string), Created_Date(Date)の2つで構成されている． */
var TaskSchema = new Schema({
	name: {
		type: String,
		required: "Enter the name of the task",
	},
	Created_date: {
		type: Date,
		default: Date.now,
	},
});

// Controllerにデータを渡すための処理．
module.exports = mongoose.model("Tasks", TaskSchema);
