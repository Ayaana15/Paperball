class packageBody{
constructor(x,y,radius,options){

var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

this.body = Bodies.circle(x,y,radius,options)
this.radius = radius;

    World.add(world,this.body);
}  
    display(){
        packageBody.fillcolor = "blue"
        var pos = this.body.position
circle(pos.x,pos.y,this.radius)
    }

       
    
    }


