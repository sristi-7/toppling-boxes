class ground{
 constructor(x,y,width,height){
     var option={
         isStatic:true
     }
  this.body = Bodies.rectangle(x,y,width,height,option);
  World.add(world,this.body);
  this.width = width;
  this.height = height;

 }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(250);
    rect(pos.x,pos.y,this.width,this.height);
}

}