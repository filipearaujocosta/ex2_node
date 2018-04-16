

var http = require('http');

var server= http.createServer(function(req,res){
    if(req.url == "/editar"){
        res.end('<html><body><h1>Bem Vindo ao Bilola - Edite sua pagina</h1></body></html>');
    }else{
        res.end('<html><body><h1>Bem Vindo ao Bilola Master</h1></body></html>');
    }
    
});
server.listen(3000);
console.log('Servidor no Ar!');
