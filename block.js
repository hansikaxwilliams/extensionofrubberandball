class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
          super.display()
        }
        else {
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-5
        tint(255,this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y,50,50)
        pop();
        }
      }
      }
