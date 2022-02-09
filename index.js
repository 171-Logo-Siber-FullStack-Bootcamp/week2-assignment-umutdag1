const express = require('express');
const cors = require('cors');

const postController = require('./src/controllers/posts.js');
const userController = require('./src/controllers/users.js');
const todoController = require('./src/controllers/todos.js');

const app = express();

app.use(cors());

app.get('/posts', postController.getAllPosts);
app.get('/posts/:postId', postController.getPostById);
app.get('/todos', todoController.getAllTodos);
app.get('/todos/:todoId', todoController.getTodoById);
app.get('/users', userController.getAllUsers);
app.get('/users/:userId', userController.getUserById);
app.get('/users/:userId/posts', userController.getPostByUserId);
app.get('/users/:userId/todos', userController.getTodoByUserId);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));