const fs = require("fs");
const templates = require("./templates");
const model = require("./model");

function home(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  const html = templates.home();
  response.end(html);
}

function tryCatch(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  const html = templates.tryCatch();
  response.end(html);
}

function callback(request, response) {
  fs.readFile("incorrect-path.html", (error, file) => {
    response.writeHead(200, { "content-type": "text/html" });
    response.end(file);
  });
}

function rejection(request, response) {
  model.getPosts().then(posts => {
    response.writeHead(200, { "content-type": "text/html" });
    const html = templates.rejection(posts);
    response.end(html);
  }).catch;
}

function missing(request, response) {
  response.writeHead(404, { "content-type": "text/html" });
  const html = templates.missing();
  response.end(html);
}

module.exports = { home, tryCatch, callback, rejection, missing };
