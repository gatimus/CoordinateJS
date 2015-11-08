
function CartesianCoordinate2D(x, y) {
  CartesianCoordinate.call(this, x, y);
}

CartesianCoordinate2D.prototype = Object.create(CartesianCoordinate.prototype);

CartesianCoordinate2D.prototype.constructor = CartesianCoordinate2D;

CartesianCoordinate2D.prototype.clone = function() {
  return new CartesianCoordinate2D(this.coordinates[0], this.coordinates[1]);
};

CartesianCoordinate2D.prototype.getX = function() {
  return this.coordinates[0];
};

CartesianCoordinate2D.prototype.setX = function(value) {
  this.coordinates[0] = value;
};

CartesianCoordinate2D.prototype.getY = function() {
  return this.coordinates[1];
};

CartesianCoordinate2D.prototype.setY = function(value) {
  this.coordinates[1] = value;
};

CartesianCoordinate2D.prototype.getQuadrant = function() {
  if(this.coordinates[0] >= 0 && this.coordinates[1] >= 0) return 1;
  if(this.coordinates[0] <  0 && this.coordinates[1] >= 0) return 2;
  if(this.coordinates[0] <  0 && this.coordinates[1] <  0) return 3;
  if(this.coordinates[0] >= 0 && this.coordinates[1] <  0) return 4;
};


CartesianCoordinate2D.prototype.toPolar = function() {
  //TODO
};
