var http = require('http');

http.createServer( function(req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de Tecnologia</html></body>");

    } else if(categoria == '/moda'){
        res.end("<html><body>Noticias de Moda</html></body>");

    } else if(categoria == '/beleza'){
        res.end("<html><body>Noticias de Beleza</html></body>");
        
    } else {
        res.end("<html><body>Portal de Noticias</html></body>");
        
    }


}).listen(3000);