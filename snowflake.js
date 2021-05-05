class Snowflake{
    constructor(x,y){
         var options = {
             restitution : 1,
             friction : 0,
             isStatic : false,
             density : 2 

         }
         this.body = Bodies.circle(x,y,50,options)
         this.r = 50;
         this.image = loadImage("snow4.webp")
         World.add(world,this.body);
    }
    
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;

        push();
        translate ( pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
         pop();
    }


}