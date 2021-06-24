class Drops{
    constructor(x,y){
      var options={
          'restitution':0.1,
          'density': 0.01,
          'friction':0.1
      }
 this.body = Bodies.circle(x,y,5,options)
 //this.x=100;
 //this.y=200;
this.radius=5;
World.add(world, this.body)
    }

update(){
    if(this.body.position.y>height){

        Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})

    }


}

display(){
    var pos=this.body.position

    ellipse(pos.x,pos.y,this.radius,this.radius)








}
    
    
}