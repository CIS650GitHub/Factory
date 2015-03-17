var Discover = require('node-discover');
var os = require('os');
var http = require('http');
var express = require('express');
var connect = require("connect");
var blessed = require('blessed');
var bodyParser = require('body-parser');
var app = express();

var my_ip = "";
var port = "4000";
var my_bay = 1;
var bag_ip = "192.168.0.101";

var currReply = 0;
var currRequest = 0;
var numNodes = 0;
var sensorValue = 0;


var ifaces = os.networkInterfaces();
Object.keys(ifaces).forEach(function(ifname) {
	var alias = 0;

	ifaces[ifname].forEach(function(iface) {
		if ('IPv4' !== iface.family || iface.internal !== false) {
			return;
		}

		if (alias >= 1) {
			my_ip = iface.address;
		} else {
			my_ip = iface.address;
		}
	});
});

app.use(bodyParser.urlencoded());

// Create a screen object.
var screen = blessed.screen();

var  = blessed.list({
	parent: screen,
	width: '50%',
	height: '100%',
	top: 0,
	left: 0,
	align: 'center',
	fg: 'blue',
	border: {
		type: 'line'
	},
	//selectedBg: 'white',
	selectedBold: true,
	mouse: true,
	keys: true,
	vi: true
});

var buttonSensor1 = blessed.button({
	parent: screen,
	mouse: true,
	keys: true,
	shrink: true,
	top: 0,
	right: 0,
	width: '25%',
	height: '25%',
	name: 'Sensor1',
	content: 'Sensor1',
	style: {
		fg: 'black',
		bg: 'blue',
		focus: {
			bg: 'blue',
			fg: 'white'
		},
		hover: {
			bg: 'blue',
			fg: 'white'
		}
	},
	border: {
		type: 'line'
	}
});

var buttonSensor2 = blessed.button({
	parent: screen,
	mouse: true,
	keys: true,
	shrink: true,
	bottom: 0,
	right: 0,
	width: '25%',
	height: '25%',
	name: 'Sensor2',
	content: 'Sensor2',
	style: {
		fg: 'black',
		bg: 'red',
		focus: {
			bg: 'red',
			fg: 'white'
		},
		hover: {
			bg: 'red',
			fg: 'white'
		}
	},
	border: {
		type: 'line'
	}
});

var buttonSensor3 = blessed.button({
	parent: screen,
	mouse: true,
	keys: true,
	shrink: true,
	bottom: 0,
	right: 0,
	width: '25%',
	height: '25%',
	name: 'Sensor3',
	content: 'Sensor3',
	style: {
		fg: 'black',
		bg: 'yellow',
		focus: {
			bg: 'yellow',
			fg: 'white'
		},
		hover: {
			bg: 'yellow',
			fg: 'white'
		}
	},
	border: {
		type: 'line'
	}
});

var buttonSensor4 = blessed.button({
	parent: screen,
	mouse: true,
	keys: true,
	shrink: true,
	bottom: 0,
	right: 0,
	width: '25%',
	height: '25%',
	name: 'Sensor4',
	content: 'Sensor4',
	style: {
		fg: 'black',
		bg: 'green',
		focus: {
			bg: 'green',
			fg: 'white'
		},
		hover: {
			bg: 'green',
			fg: 'white'
		}
	},
	border: {
		type: 'line'
	}
});

app.set('port', process.env.PORT || port);
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
list.prepend(new blessed.Text({
	left: 2,
	content: ' This node is  ' + my_ip
}));
screen.render();

var logCount = 0;

function myLogs(log) {
	list.add("" + log);
	list.focus();
	list.select(logCount++);
	screen.render();
}

function changeColor(color) {
	list.style.bg = color;
	list.style.item.bg = color; //green for get
	screen.render();
}

buttonSensor1.on('press', function() {

	myLogs("Sensor Value: 10");

	//increment our time stamp
	my_time = highest_time + 1;
	changeColor('yellow');
	var success1 = d.send(master_ip, {
		Value: 10,
		TaskID: id,
		Description: ,
		Port: port,
		MessageType: messageType.request,
		TimeStamp: my_time,
		ipAddress: my_ip
	});

	if (!success1) {
		myLogs("sending message failed");
	}

});

buttonSensor2.on('press', function() {

	myLogs("Sensor Value: 15");

	//increment our time stamp
	my_time = highest_time + 1;
	changeColor('yellow');
	var success1 = d.send(master_ip, {
		Value: 15,
		TaskID: id,
		Description: ,
		Port: port,
		MessageType: messageType.request,
		TimeStamp: my_time,
		ipAddress: my_ip
	});

	if (!success1) {
		myLogs("sending message failed");
	}

});

buttonSensor3.on('press', function() {

	myLogs("Sensor Value: 20");

	//increment our time stamp
	my_time = highest_time + 1;
	changeColor('yellow');
	var success1 = d.send(master_ip, {
		Value: 20,
		TaskID: id,
		Description: ,
		Port: port,
		MessageType: messageType.request,
		TimeStamp: my_time,
		ipAddress: my_ip
	});

	if (!success1) {
		myLogs("sending message failed");
	}

});

buttonSensor4.on('press', function() {

	myLogs("Sensor Value: 25");

	//increment our time stamp
	my_time = highest_time + 1;
	changeColor('yellow');
	var success1 = d.send(master_ip, {
		Value: 25,
		TaskID: id,
		Description: ,
		Port: port,
		MessageType: messageType.request,
		TimeStamp: my_time,
		ipAddress: my_ip
	});

	if (!success1) {
		myLogs("sending message failed");
	}

});


var d = new Discover({
	helloInterval: 1000,
	checkInterval: 2000,
	nodeTimeout: 2000,
	masterTimeout: 2000
});

registerCallbacks();


function doSensorTask() {
		/*
    setTimeout(sendPrimeWork, k_milli);
    workNum = n;
    workPrimeCount = c;
    box.setContent("Counting from!!!!!" + workPrimeCount);
    box.style.bg = 'yellow'; //green for get
    screen.render();
    workPrimeCounter(workNum, workPrimeCount, k_milli);
		*/
}


/*
First, the sensor receives a broadcasted task (request) message
from the bag.  The sensor then submits a request message
to the bag for this particular task.  If this sensor is
chosen to complete the task, then the sensor will receive a
response message from the bag.  Finally, the sensor will
submit a response message to the bag, with the result of the
sensor-reading task.
Sensor: 1 request, 1 response (send);
Bag: 1 request, 1 response (send);

Receive a broadcasted task message with a task ID,
description, sender IP address, and timestamp.

*/
function receiveMessage(data) {
	//myLogs("Received ");
	var taskID = data.taskID;
	var taskDes = data.taskDes;

	/*
	//A new sensor task was added to the Bag.
	//Let's get the task and start working!
	myLogs("Sent Task Request");
	var post_data = querystring.stringify({
				ipAddress: my_ip,
				message: "getTask",
				idSender: "sensor",
				bayID: my_bay
	});
	PostObject(post_data, bag_ip);
	*/

	//Response from the bag, indicating that the
	//sensor has been given the task that was requested.
		myLogs("Task Request Granted");
		myLogs("Waiting for a sensor reading...");
    //Once a human presses a sensor-value button,
		//grab the selected value and package it in the taskDescr
		var post_data = querystring.stringify({
				ipAddress: my_ip,
				message: "addResult",
				idSender: "sensor",
				sensorReading: , //place value here...
				id: taskID,
				description: taskDes
			});
		PostObject(post_data, bag_ip);

}

function registerCallbacks() {

	d.on("promotion", function() {
		master_ip = my_ip;
		var success = d.join(my_ip, receiveMessage);
		if (!success) {
			//myLogs("could not join that channel; probably because it is reserved");
		}
	});

	d.on("demotion", function() {

	});

	d.on("added", function(obj) {

		numNodes++;
		myLogs("Other nodes " + numNodes);
	});

	d.on("removed", function(obj) {

		numNodes--;
		myLogs("Other nodes " + numNodes);
		if (currentState == states.WAIT && replyQueue.length == (numNodes)) {

			changeColor('red');
			currentState = states.CRITICAL;
			myLogs("Critical section");
		}

	});

	d.on("master", function(obj) {

		master_ip = obj.address;
		var success = d.join(master_ip, receiveMessage);
		if (!success) {
			//myLogs("slave could not join that channel; probably because it is reserved");
		}

	});

	d.eachNode(function(node) {});
}


function PostObject(post_data, address) {
	// An object of options to indicate where to post to

	//myLogs('Sending PostObject');
	var post_options = {
		host: address,
		port: port,
		path: '/do_post',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': Buffer.byteLength(post_data)
		}
	};

	// Set up the request
	var post_req = http.request(post_options, function(res) {
		res.setEncoding('utf8');
		res.on('data', function(chunk) {

		});
	});

	post_req.on('error', function(e, post_data) {
		myLogs('problem with sending request: ');

	});

	post_req.write(post_data);
	post_req.end();
}

app.get('/', function(request, response) {
	response.sendfile('test.html');
});

// handle POST requests
app.post('/do_post', function(req, res) {
	//myLogs("app.post received" );

	receiveMessage(req.body);
	res.json({
		"query": req.body,
		"id": JSON.stringify(my_ip)
	});
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
	return process.exit(0);
});

screen.render();

http.createServer(app).listen(app.get('port'), function() {
	myLogs("Express server listening on port " + app.get('port'));

});

process.on('uncaughtException', function(err) {
	console.log('Caught exception: ' + err);
});
