const httpStatus = require('http-status');
const todos = require('../data/todos.json');

getAllTodos = (req, res) => {
    const result = todos;
    res.statusCode = result.length == 0 ? 404 : 200;
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`];
    res.send(result);
}

getTodoById = (req, res) => {
    const todoId = new RegExp('^[0-9]+$').test(req.params.todoId);
    const result = todoId ? todos.filter(todo => todo.id == req.params.todoId) : null;
    res.statusCode = result == null ? 400 : (result.length == 0 ? 404 : 200);
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`];
    res.send(result);
}

module.exports = {
    getAllTodos,
    getTodoById,
};