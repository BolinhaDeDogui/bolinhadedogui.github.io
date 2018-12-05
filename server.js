var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, resp) {

    var caminho = url.parse(req.url).pathname;
    if (caminho === '/') {
        var arquivo = path.join(__dirname, caminho, 'index.html');
    } else {
        var arquivo = path.join(__dirname, caminho);
    }
    console.log(arquivo);
    fs.readFile(arquivo, function (erro, dados) {
        if (erro) {
            resp.writeHead(404);
            resp.end();
        } else {
            resp.end(dados);
        }
    });
}).listen(8080, 'localhost', function () {
    console.log('--- O servidor esta funcionando em http://localhost:8080 –--');
});