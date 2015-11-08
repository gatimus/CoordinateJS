
function CartesianCoordinate3D(x, y, z) {
  CartesianCoordinate2D.call(this, x, y);
  this.coordinates.push(z);
}

CartesianCoordinate3D.prototype = Object.create(CartesianCoordinate2D.prototype);

CartesianCoordinate3D.prototype.constructor = CartesianCoordinate3D;

CartesianCoordinate3D.prototype.clone = function() {
  return new CartesianCoordinate3D(this.coordinates[0], this.coordinates[1], this.coordinates[2]);
};

CartesianCoordinate3D.prototype.getZ = function() {
  return this.coordinates[2];
};

CartesianCoordinate3D.prototype.setZ = function(value) {
  this.coordinates[2] = value;
};

CartesianCoordinate3D.prototype.toCylindrical = function() {
  //TODO
};

CartesianCoordinate3D.prototype.toSpherical  = function() {
  //TODO
};
