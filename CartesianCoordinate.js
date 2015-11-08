
function CartesianCoordinate() {
  this.coordinates = arguments;
  this.dimensions = arguments.length;
}

CartesianCoordinate.prototype.constructor = CartesianCoordinate;

CartesianCoordinate.prototype.clone = function() {
  return new CartesianCoordinate(this.coordinates);
};

CartesianCoordinate.prototype.get = function(dimension) {
  return this.coordinates[dimension-1];
};

CartesianCoordinate.prototype.set = function(dimension, value) {
  this.coordinates[dimension-1] = value;
};

CartesianCoordinate.prototype.add = function() {
  var coordinatesToAdd;
  if(typeof arguments[0] === "number") {
    coordinatesToAdd = arguments;
  } else if(typeof arguments[0] === "object") {
    coordinatesToAdd = arguments[0].coordinates;
  }
  for(var i = 0; i < this.coordinates.length; i++) {
    this.coordinates[i] += coordinatesToAdd[i];
  }
};

CartesianCoordinate.prototype.subtract = function() {
  var coordinatesToSubtract;
  if(typeof arguments[0] === "number") {
    coordinatesToSubtract = arguments;
  } else if(typeof arguments[0] === "object") {
    coordinatesToSubtract = arguments[0].coordinates;
  }
  for(var i = 0; i < this.coordinates.length; i++) {
    this.coordinates[i] -= coordinatesToSubtract[i];
  }
};

