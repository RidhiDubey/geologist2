class Rubber{
    constructor(x,y){
        var options={
            'restitution':0.3,
            'fricton':5,
            'density':1

        }

        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
      translate(pos.x, pos.y);
      
      ellipseMode(CENTER);
      fill("red");
      ellipse(0, 0, this.radius);
      pop();
    }
    
}