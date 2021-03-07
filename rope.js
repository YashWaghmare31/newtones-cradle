class rope{
      constructor(body1,body2,offsetX,offsetY){
           this.offsetX = offsetX
           this.offsetY = offsetY
           var Options={
               bodyA: body1,
               bodyB: body2,
               pointB: {x:this.offsetX,y:this.offsetY}
           }
           this.rope=contraint.create(options);
world.add(world,this.rope)           
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        var Anchor2X=pointA.x+this.offsetX
        var Anchor2Y=pointB.x+this.offsetY
    }
}