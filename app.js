var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    }
    SpaceCraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return SpaceCraft;
}());
var ship = new SpaceCraft('hiperDrive');
ship.jumpIntoHyperSpace();
