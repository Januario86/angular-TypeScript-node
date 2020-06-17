class SpaceCraft{

    constructor  (public propulsor:string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}

let ship = new SpaceCraft('hiperDrive')
ship.jumpIntoHyperSpace();