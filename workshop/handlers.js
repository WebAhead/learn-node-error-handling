const fs = require("fs");
const templates = require("./templates");
const model = require("./model");

function home(req, res) {
  const html = templates.home();
  res.status(200).send(html);
}

function tryCatch(req, res) {
  const html = templates.tryCatch();
  res.status(200).send(html);
}

function callback(req, res) {
  fs.readFile("incorrect-path.html", (error, file) => {
    res.status(200).send(file);
  });
}

function rejection(req, res) {
  model.getPosts().then(posts => {
    const html = templates.rejection(posts);
    res.status(200).send(html);
  }).catch;
}

function missing(req, res) {
  const html = templates.missing();
  res.status(404).send(html);
}

module.exports = { home, tryCatch, callback, rejection, missing };
