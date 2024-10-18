const Task = require("../Models/taskModel");
const factory = require("./handlerFactory");

exports.createTask = factory.createOne(Task);
exports.getAllTasks = factory.getAll(Task);
exports.getTask = factory.getOne(Task);
exports.updateTask = factory.updateOne(Task);
exports.deleteTask = factory.deleteOne(Task);
