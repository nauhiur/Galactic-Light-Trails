export class VisHelper {
  constructor(context) {
    this.context = context;
  }

  setStrokeWidth(lineWidth = 0) {
    this.context.lineCap = "round";
    this.context.lineJoin = "round";
    this.context.lineWidth = lineWidth;
  }

  strokeLine(x0, y0, x1, y1) {
    this.context.beginPath();
    this.context.moveTo(x0, y0);
    this.context.lineTo(x1, y1);
    this.context.stroke();
    this.context.closePath();
  }

  strokeCircle(x, y, r) {
    this.context.beginPath();
    this.context.arc(x, y, r, 0, 2 * Math.PI);
    this.context.stroke();
  }

  fillCircle(x, y, r) {
    this.context.beginPath();
    this.context.arc(x, y, r, 0, 2 * Math.PI);
    this.context.fill();
  }

  strokeRect(x, y, w, h) {
    this.context.beginPath();
    this.context.strokeRect(x, y, w, h);
    this.context.stroke();
  }

  fillRect(x, y, w, h) {
    this.context.beginPath();
    this.context.fillRect(x, y, w, h);
    this.context.fill();
  }

  putImage(imageURL, ...props) {
    const context = this.context;
    const img = new Image();
    img.src = imageURL;
    img.onload = function () {
      context.drawImage(img, ...props);
    };
  }

  drawText(text, centerX, centerY) {
    this.context.textAlign = "center";
    this.context.fillText(text, centerX, centerY);
  }
}
