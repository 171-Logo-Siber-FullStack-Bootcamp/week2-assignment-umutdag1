const httpStatus = require('http-status');
const posts = require('../data/posts.json');

getAllPosts = (req, res) => {
    const result = posts;
    res.statusCode = result.length == 0 ? 404 : 200;
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`];
    res.send(result);
}

getPostById = (req, res) => {
    const postId = new RegExp('^[0-9]+$').test(req.params.postId);
    const result = postId ? posts.filter(post => post.id == req.params.postId) : null;
    res.statusCode = result == null ? 400 : (result.length == 0 ? 404 : 200);
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`];
    res.send(result);
}

module.exports = {
    getAllPosts,
    getPostById,
};
