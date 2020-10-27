class Seed{
	constructor(x, y){
		var options={
			isStatic: false
		}
		this.body = Bodies.circle(x, y, 20, options);
		this.radius = 20;
		this.color = (random(0, 255), random(0, 255), random(0, 255));

		World.add(world, this.body)
	}
	display(){
		fill(this.color);
		ellipseMode(RADIUS);
		ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
	}
}