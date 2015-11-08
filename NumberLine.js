
function NumberLine(value) {
  CartesianCoordinate.call(this, value);
}

NumberLine.prototype = Object.create(CartesianCoordinate.prototype);

NumberLine.prototype.constructor = NumberLine;

NumberLine.prototype.get = function() {
  return this.coordinates[0];
};

NumberLine.prototype.set = function(value) {
  this.coordinates[0] = value;
};

NumberLine.prototype.isPositive = function() {
  return this.coordinates[0] >= 0;
};
