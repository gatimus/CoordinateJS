
function Angle(radians) {
  this.radians = radians;
}

Angle.prototype.getDegrees = function() {
  return this.radians / (Math.PI / 180);
};

Angle.prototype.getTurns = function() {
  //TODO
};
