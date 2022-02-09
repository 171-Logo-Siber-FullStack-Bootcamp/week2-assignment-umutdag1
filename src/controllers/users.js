const httpStatus = require('http-status');
const users = require('../data/users.json');
const posts = require('../data/posts.json');
const todos = require('../data/todos.json');

getAllUsers = (req, res) => {
    const result = users;
    res.statusCode = result.length == 0 ? 404 : 200;
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`];
    res.send(result);
}

getUserById = (req, res) => {
    const userId = new RegExp('^[0-9]+$').test(req.params.userId);
    const result = userId ? users.filter(user => user.id == req.params.userId) : null;
    res.statusCode = result == null ? 400 : (result.length == 0 ? 404 : 200);
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`];
    res.send(result);
}

getPostByUserId = (req, res) => {
    const userId = new RegExp('^[0-9]+$').test(req.params.userId);
    const result = userId ? posts.filter(post => post.userId == req.params.userId) : null;
    res.statusCode = result == null ? 400 : (result.length == 0 ? 404 : 200);
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`];
    res.send(result);
}

getTodoByUserId = (req, res) => {
    const userId = new RegExp('^[0-9]+$').test(req.params.userId);
    const result = userId ? todos.filter(todo => todo.userId == req.params.userId) : null;
    res.statusCode = result == null ? 400 : (result.length == 0 ? 404 : 200);
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`];
    res.send(result);
}

module.exports = {
    getAllUsers,
    getUserById,
    getPostByUserId,
    getTodoByUserId,
};
