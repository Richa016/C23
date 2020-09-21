class Box{
    constructor(x,y,height){
        var options = {
            restitution :1,
            density :1,
            friction :1,
        }
        this.body= Bodies.rectangle(x,y,80,height,options);
        this.width =80;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill('lightblue');
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}