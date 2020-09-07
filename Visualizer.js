import { Frame } from "./Frame.js";
import { Data } from "./Data.js";

document.title = "Galactic Light Trails";

export class Visualizer {
  constructor(width, height) {
    this.frame = new Frame(width, height);
    this.addListener()

    // TODO: Initialize Data
    this.data = new Data(this.frame, 400);

    this.run();
  }

  run(interval = 10) {
    // TODO: Animation Logic
    setInterval(() => {
      this.data.update();
      this.frame.render(this.data);
    }, interval);
  }

  addListener() {
    window.onresize = () => {
      this.frame.canvas.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.frame.canvas.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      this.data.init();
    };
    window.onmousedown = () => {
      this.data.isFading = true;
    }
    window.onmouseup = () => {
      this.data.isFading = false;
    }
  }
}
