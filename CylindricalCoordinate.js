
function CylindricalCoordinate(rho, degrees, z) {
  PolarCoordinate.call(this, rho, degrees);
  this.z = z;
}

CylindricalCoordinate.prototype = Object.create(PolarCoordinate.prototype);

CylindricalCoordinate.prototype.constructor = CylindricalCoordinate;

CylindricalCoordinate.prototype.toCartesianCoordinate3D = function() {
  //TODO
};
