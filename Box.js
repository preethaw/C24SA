class Box {
  constructor(x, y, w, h) {
    var options = {
        restitution:0.8,
        friction:1.0,
        density:0.04,
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    
    World.add(world, this.body);
  }
  display(){
    // write push(), translate(), rotate() and rectMode() functions


    


    strokeWeight(4);
    stroke("red");
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    //write pop() here


  }
}