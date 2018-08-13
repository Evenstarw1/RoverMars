// Rover Object Goes Here
var rover = {
name: "Rover1",
direction: "N",
x: 0,
y: 0,
obstacule: [[1,1], [3,4], [8,5]],
travelLog: []
};

var rover2 = {
  name: "Rover2",
  direction: "N",
  x: 9,
  y: 9,
  obstacule: [[1,1], [3,4], [8,5]],
  travelLog: []
};

// 10x10 GRID
var grid = [
  [rover,null,null,null,null,null,null,null,null,null],
  [null, "obstacule" ,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,"obstacule",null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,"obstacule",null,null,null,null],
  [null,null,null,null,null,null,null,null,null,rover2],
];

var obstacule = [
  {
  name: "obstacule",
  position: [1,1]
},
{
  name: "obstacule",
  position: [3,4]
},
{
  name: "obstacule",
position: [8,5]
}
]

for (var x = 0; x < grid.length; x++){
  var row = grid[x];
  for (var y = 0; y < row.length; y++){
    var column = row[y];
  }
}

// FUNCTIONS

// Left
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
    case "W":
    rover.direction = "S";
    break;
  }
  console.log("turnLeft was called! " + rover.direction);


  switch (rover2.direction) {
    case "N":
    rover2.direction = "W";
    break;
    case "S":
    rover2.direction = "E";
    break;
    case "E":
    rover2.direction = "N";
    break;
    case "W":
    rover2.direction = "S";
    break;
  }
  console.log("turnLeft was called! " + rover2.direction);
}




//Right
function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called! " + rover.direction);

  switch (rover2.direction) {
    case "N":
    rover2.direction = "E";
    break;
    case "S":
    rover2.direction = "W";
    break;
    case "E":
    rover2.direction = "S";
    break;
    case "W":
    rover2.direction = "N";
    break;
  }
  console.log("turnRight was called! " + rover2.direction);
}

//Forward
function moveForward(rover) {
  switch (rover.direction) {
    case "N":
    rover.y--;
    break;
    case "S":
    rover.y++;
    break;
    case "E":
    rover.x++;
    break;
    case "W":
    rover.x--;
    break;
    } 
console.log("moveForward was called. The rover is at: " + (rover.x + ", " + rover.y));
}

//Backwards
function moveBackward(rover) {
  switch (rover.direction) {
    case "N":
    rover.y++;
    break;
    case "S":
    rover.y--;
    break;
    case "E":
    rover.x--;
    break;
    case "W":
    rover.x++;
    break;
    } 
console.log("moveBackward was called. The rover is at: " + (rover.x + ", " + rover.y));
}

//COMMANDS
function commandOrder (command) {
  for (var i=0; i<command.length; i++) {
    switch(command[i]) {
      case "f":
      moveForward(rover, rover2);
      break;
      case "r":
      turnRight(rover, rover2);
      break;
      case "l":
      turnLeft (rover, rover2);
      break;
      default:
      return "Error!! Please, try again with a valid command"
    }
    rover.travelLog.push(rover.x + "," + rover.y);
  }
}


//PRINT

function printGrid (Grid) {
  for (var i=0; i<10; i++) {
    console.log(grid[i]);
  }
}
