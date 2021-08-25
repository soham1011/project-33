class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1
           
        }
        this.r = 5;
        this.Snow = Bodies.circle(x, y, this.r, options);
      //  this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.Snow);
    }
    updateY(){ 
        if (this.Snow.position.y > height){
            Matter.Body.setPosition (this.Snow,{x:random(0,800),y:random(0,400)})
        }
      }
    display() {

        var pos = this.Snow.position;
        var angle = this.Snow.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}