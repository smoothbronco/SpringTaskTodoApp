/* ルーティング設定．
 * それぞれのルートに対してhttpメソッドを定義． */

module.exports = function (app) {
	// Controllerで定義しているメソッドのリスト．
	var taskList = require("../controllers/taskController");

	app.route("/tasks").get(taskList.all_tasks).post(taskList.create_task);

	app
		.route("/tasks/:taskId")
		.get(taskList.load_task)
		.put(taskList.update_task)
		.delete(taskList.delete_task);
};
