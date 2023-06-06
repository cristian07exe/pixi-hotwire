import { Application, Loader, Sprite } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});
Loader.shared.add({ url: "./p.jpg", name: "foto" });

Loader.shared.add({ url: "./p.jpg", name: "Clampy" });
Loader.shared.onComplete.add(() => {
  const clampy: Sprite = Sprite.from("foto");

  clampy.anchor.set(0.5);

  clampy.x = app.screen.width / 5;
  clampy.y = app.screen.height / 5;

  app.stage.addChild(clampy);
});
Loader.shared.load();
console.log("hola");
