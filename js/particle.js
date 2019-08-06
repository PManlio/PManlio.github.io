var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particles = [];
var num_particles = 200; // number of particle; you can change it to the number you want

//Particle object with random starting position, velocity, direction and color
var Particle = function () {
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.vx = 0.3 * Math.random();
    this.vy = 0.3 * Math.random();
    this.direction = {
        'x': -1 + Math.random() * 2,
        'y': -1 + Math.random() * 2
    };
    this.Color = 'rgba(128,128,128,' + Math.random() + ')';
}
//Ading two methods: Draw the particle and Update it's position
Particle.prototype.Draw = function (ctx) {
    ctx.fillStyle = this.Color;
    ctx.fillRect(this.x, this.y, 2, 2);
}
Particle.prototype.Update = function () {
    
    this.x += this.vx * this.direction.x;
    this.y += this.vy * this.direction.y;

    // this one will add a "sparky" look to the particles
    this.Color = 'rgba(128,128,128,' + Math.random() + ')';
 
    if (this.x<0 || this.x > canvas.width)
        this.vx = -this.vx;
 
    if (this.y < 0 || this.y > canvas.height)
        this.vy = -this.vy;
}
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < num_particles; i++) {
        particles[i].Update();
        particles[i].Draw(ctx);
    }
    requestAnimationFrame(loop);
}
//Create particles
for (var i = 0; i < num_particles; i++)
    particles.push(new Particle());
loop();