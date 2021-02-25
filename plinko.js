class Plinko {
    constructor(x,y){
        options = {
            restitution: 1,
            isStatic: true
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body)
    }
    display(){
        pos = this.body.position;
        var angle = this.position;

        push();
        translate(pos.x,pos.y);
        
    }
}