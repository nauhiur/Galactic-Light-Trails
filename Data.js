class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
}

export class Data {
  constructor(frame, n = 150) {
    this.context = frame.context;
    this.canvas = frame.canvas;
    this.particles = new Array(n);
    this.colors = ["#d81159", "#8f2d56", "#218380", "#fbb13c", "#73d2de"];
    this.isFading = false;
    this.alpha = 1;
    this.init();
  }

  init() {
    this.radians = 0;
    const diag = Math.sqrt(this.canvas.width * this.canvas.width + this.canvas.height * this.canvas.height);
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i] = new Particle(
        (Math.random() - 0.5) * diag,
        (Math.random() - 0.5) * diag,
        Math.random() * 2 + 1,
        this.colors[Math.floor(Math.random() * this.colors.length)]
      );
    }
  }

  update() {
    if (this.isFading && this.alpha > 0.05) {
      this.alpha -= 0.005;
    } else if (!this.isFading && this.alpha < 1) {
      this.alpha += 0.01;
    }
    if (this.isFading) {
      this.radians += 0.01;
    }
    this.radians += 0.003;
  }
}
