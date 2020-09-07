import { VisHelper } from "./VisHelper.js";

export class Frame {
  constructor(width = 0, height = 0) {
    this.canvas = document.getElementById("cvs");
    this.context = this.canvas.getContext("2d");
    this.visHelper = new VisHelper(this.context);

    this.canvas.width = width;
    this.canvas.height = height;
    this.visHelper.setStrokeWidth();
  }

  render(data) {
    this.data = data;
    this.repaint();
  }

  repaint() {
    // this.clearCanvas();
    this.fadeCanvas();

    // TODO: Specific Drawing Process w/ this.data
    this.context.save()
    this.context.translate(this.canvas.width / 2, this.canvas.height / 2)
    this.context.rotate(this.data.radians)
    this.data.particles.forEach((particle) => {
      this.context.fillStyle = particle.color;
      this.context.shadowColor = particle.color;
      this.context.shadowBlur = 5;
      this.visHelper.fillCircle(particle.x, particle.y, particle.radius);
    });
    this.context.restore();
  }

  fadeCanvas() {
    this.context.fillStyle = `rgba(0, 0, 0, ${this.data.alpha})`;
    this.context.fillRect(
      this.canvas.offsetLeft,
      this.canvas.offsetTop,
      this.canvas.width,
      this.canvas.height
    );
  }

  clearCanvas() {
    this.context.clearRect(
      this.canvas.offsetLeft,
      this.canvas.offsetTop,
      this.canvas.width,
      this.canvas.height
    );
  }
}
