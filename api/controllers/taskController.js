/* MVCモデルにおけるViewとModelを操作するControllerの部分
 * Viewからのリクエストを受けてModelに処理の命令をし，
 * 返ってきた結果からレスポンスをViewに返す． */
var mongoose = require("mongoose"),
	Task = mongoose.model("Tasks"); // Modelから返ってきたデータを入れる．

// 以下関数パラメータ req: request, res: response

// 全てのタスクを取得する。
exports.all_tasks = function (req, res) {
	Task.find({}, function (err, task) {
		if (err) res.send(err);
		res.json(task);
	});
};

// 新しいタスクを作成する。
exports.create_task = function (req, res) {
	var new_task = new Task(req.body);
	new_task.save(function (err, task) {
		if (err) res.send(err);
		res.json(task);
	});
};

// 特定のタスクを取得する。
exports.load_task = function (req, res) {
	// findByIdではリクエストの際にパラメータとしてidを渡し，特定のタスクが得られる．
	Task.findById(req.params.taskId, function (err, task) {
		if (err) res.send(err);
		res.json(task);
	});
};

// 特定のタスクを更新する。
exports.update_task = function (req, res) {
	Task.findOneAndUpdate(
		{ _id: req.params.taskId },
		req.body,
		{ new: true },
		function (err, task) {
			if (err) res.send(err);
			res.json(task);
		}
	);
};

// 特定のタスクを削除する。
exports.delete_task = function (req, res) {
	Task.remove(
		{
			_id: req.params.taskId,
		},
		function (err, task) {
			if (err) res.send(err);
			res.json({ message: "Task successfully deleted" });
		}
	);
};
