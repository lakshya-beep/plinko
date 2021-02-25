class Divider {
    constructor (x,y,width,height) {
         options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

    }
    display() {
        var pos = this.body.position.x;
        rectMode(CENTER);
        fill(white);
        rectangle(pos.x,pos.y,this.width,this.height);


    }
}