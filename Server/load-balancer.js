/*var arguments = process.argv.splice(2);
var httpProxy = require('http-proxy');

//
// Addresses to use in the round robin proxy
//
var servers =  ['http://localhost:8001', 'http://localhost:8002', 'http://localhost:8003'];

var addresses = [
    {
        host: 'localhost',
        port: 8001
    },
    {
        host: 'localhost',
        port: 8002
    },
    {
        host: 'localhost',
        port: 8003
    }
];

var i = 0;
httpProxy.createServer(function (req, res, proxy) {
    proxy.proxyRequest(req, res, servers[i]);

    i = (i + 1) % addresses.length;
}).listen(arguments[0] || 8000);*/

var http = require('http'),
httpProxy = require('http-proxy');
var servers =  ['http://localhost:8001', 'http://localhost:8002', 'http://localhost:8003'];

var proxy = httpProxy.createProxyServer();
var count = 0;
http.createServer(function(req,res){
    loadBalanceProxy(req,res);
}).listen(8000);

var currentServer = 1;
function loadBalanceProxy(req, res){
    var cur = currentServer%servers.length;
    currentServer++;
    //console.log("Current request is: " + currentServer);
    var target = servers[cur];
    proxy.web(req, res, {
        target: target
    });
}
