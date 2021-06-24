class Umbrella{
    constructor(x,y){
        var options={
        "isStatic":true,
        }
this.body = Bodies.rectangle(x,y,50,50,options);

    


World.add(world,this.body)
this.image=loadImage("batman.png")
    }
display(){
    image(this.image, this.body.position.x,this.body.position.y, 250,250)
}
}