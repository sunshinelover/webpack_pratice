/**
 * Created by chenyulin on 2018/3/15.
 */
var express = require('express');
var app = express();

function requestHandler(request, response) {
    console.log("In comes a request to: " + request.url);
    response.end("Hello, world!");
}
app.use(requestHandler);
app.listen(1337);


