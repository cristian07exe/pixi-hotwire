import { Application, Sprite } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 1080,
  height: 480,
});

const clampy: Sprite = Sprite.from("p.jpg");

clampy.anchor.set(0.5);

clampy.x = app.screen.width / 5;
clampy.y = app.screen.height / 5;

app.stage.addChild(clampy);
