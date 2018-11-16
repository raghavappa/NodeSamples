var express = require('express');
var app = express();
var first_function = function (req, res) {
	//because it is get request, we are using req.pramas
	// Incase of post, we use req.body
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	var operator = req.params.oper;
	console.log("Got get request for home page" + num1 + "num2 ..." + num2 + operator);
	if (operator == "add") {
		console.log("adding ");
		res.json({"operator":"add","result": (num1+num2)});
	}
	if(operator == "minus"){
		console.log("subsract ");
		res.json({"operator":"add","result": (num1-num2)});
	}
}
//This is a get router
app.get('/callme/:num1/:num2/:oper', first_function); 

//0.0.0.0 is ip address, you can also use 172.0.0.1
// From browser this has to be invoked like http://127.0.0.1:8085/callme/2/3/add
var server = app.listen(8085, '0.0.0.0', function () {
	var host = server.address().address
	var port = server.address().port
	console.log("example app listening at http://%s:%s", host, port)
});