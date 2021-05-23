'use strict';
var newprompt = require('prompt');
var table = [
    "4,0", "4,1", "4,2", "4,3", "4,4",
    "3,0", "3,1", "3,2", "3,3", "3,4",
    "2,0", "2,1", "2,2", "2,3", "2,4",
    "1,0", "1,1", "1,2", "1,3", "1,4",
    "0,0", "0,1", "0,2", "0,3", "0,4",
];
var singleCommand = ['LEFT', 'RIGHT', 'MOVE', 'REPORT', 'EXIT'];
var toyDirection = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
var toyRobot = {
    coordinates: null,
    facing: null
};
var havePlacedRobot = false;
var askCommand = function () {
    newprompt.get('command', function (err, result) {
        processCommand(result.command);
    });
};
var processCommand = function (command) {
    if (command.includes('PLACE')) {
        var tempCommand = command.replace("PLACE ", '');
        tempCommand = tempCommand.split(',');
        var currentXCoor = +tempCommand[0];
        var currentYCoor = +tempCommand[1];
        var currentFacing = tempCommand[2];
        if (!toyDirection.includes(currentFacing)) {
            console.log('Invalid direction. Please input valid direction.');
            return askCommand();
        }
        toyRobot.coordinates = currentXCoor + "," + currentYCoor;
        toyRobot.facing = currentFacing;
        if (table.includes(toyRobot.coordinates)) {
            havePlacedRobot = true;
            console.log('You have placed the ToyRobot to', toyRobot.coordinates);
            askCommand();
        }
        else {
            console.log('Invalid location: You must place the ToyRobot in a proper location.');
            askCommand();
        }
    }
    else if (havePlacedRobot === true && (command === "LEFT" || command === "RIGHT")) {
        if (toyRobot.facing === 'NORTH' && command === 'RIGHT') { // NORTH
            toyRobot.facing = 'EAST';
        }
        else if (toyRobot.facing === 'NORTH' && command === 'LEFT') { // NORTH
            toyRobot.facing = 'WEST';
        }
        else if (toyRobot.facing === 'EAST' && command === 'RIGHT') { // EAST
            toyRobot.facing = 'SOUTH';
        }
        else if (toyRobot.facing === 'EAST' && command === 'LEFT') { // EAST
            toyRobot.facing = 'NORTH';
        }
        else if (toyRobot.facing === 'SOUTH' && command === 'RIGHT') { // SOUTH
            toyRobot.facing = 'WEST';
        }
        else if (toyRobot.facing === 'SOUTH' && command === 'LEFT') { // SOUTH
            toyRobot.facing = 'EAST';
        }
        else if (toyRobot.facing === 'WEST' && command === 'RIGHT') { // WEST
            toyRobot.facing = 'NORTH';
        }
        else if (toyRobot.facing === 'WEST' && command === 'LEFT') { // WEST
            toyRobot.facing = 'SOUTH';
        }
        console.log("The ToyRobot is now facing " + toyRobot.facing + ".");
        askCommand();
    }
    else if (havePlacedRobot === true && command === 'MOVE') {
        var tempCoor = toyRobot.coordinates.split(',');
        var currentXCoor = +tempCoor[0];
        var currentYCoor = +tempCoor[1];
        if (toyRobot.facing === "NORTH") {
            currentXCoor += 1;
        }
        else if (toyRobot.facing === "EAST") {
            currentYCoor += 1;
        }
        else if (toyRobot.facing === "SOUTH") {
            currentXCoor -= 1;
        }
        else if (toyRobot.facing === "WEST") {
            currentYCoor -= 1;
        }
        if (!table.includes(currentXCoor + "," + currentYCoor)) {
            console.log('The ToyRobot will fall. Command ignored.');
            askCommand();
        }
        else {
            toyRobot.coordinates = currentXCoor + "," + currentYCoor;
            console.log("The ToyRobot is now at " + toyRobot.coordinates);
            askCommand();
        }
    }
    else if (havePlacedRobot === true && command === 'REPORT') {
        console.log("The ToyRobot location is " + toyRobot.coordinates + ". Facing " + toyRobot.facing);
        askCommand();
    }
    else if (!singleCommand.includes(command)) {
        console.log('Invalid Command');
        askCommand();
    }
    else if (command === 'EXIT') {
        console.log('ToyRobot simulator closing...');
        process.exit(0);
    }
    else {
        console.log('Error: You must place the ToyRobot first.');
        askCommand();
    }
};
newprompt.start();
askCommand();
