import "pixi-spine";
import "./styles/main.css";
import { Application } from "pixi.js";

const gameWidth = 1280;
const gameHeight = 720;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = new Application<HTMLCanvasElement>({
    backgroundColor: 0xd3d3d3,
    width: gameWidth,
    height: gameHeight,
});
