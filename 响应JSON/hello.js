var http=require('http');

var onRequest =function(request,response){
    console.log('Request received');
    response.writeHead(200,{'Content-Type':'application/json'});
    //response.write('Hello from out application');
    var myObj={
        name:"2012122",
        job:"programmer",
        age:22
    };
    response.end(JSON.stringify(myObj));
}

var server=http.createServer(onRequest);

server.listen(3000);
console.log('Server started on localhost port 3000');
