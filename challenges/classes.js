// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1{
    constructor(cube){
        this.length = cube.length;
        this.width = cube.width;
        this.height = cube.height;
    }
    volume(){
        return this.length * this.width * this.height;
      }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height:5
  })
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker1{
    constructor(realCube){
        super(realCube);
    }
    cubeVolume(){
        if(this.length === this.height && this.height === this. width){
            return this.length * this.width * this.height;
        }
        else{
            return `This is not a cube!`
        }
    }
    cubeSurfaceArea(){
        if(this.length === this.height && this.height === this. width){
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        }
        else{
            return `This is not a cube!`
        }
    }
}

const cube = new CubeMaker({
    length: 5,
    width: 5,
    height:5
  })

const failCube = new CubeMaker({
    length: 5,
    width: 2,
    height:7
})
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
console.log(failCube.cubeSurfaceArea());