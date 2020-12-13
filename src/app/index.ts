import "../assets/style/main.css";
import {getGlContext} from "./utils/util";
import {Cube} from "./shapes/cube";
import {Camera} from "./utils/camera";
import {Scene} from "./utils/scene";
import {Sphere} from "./shapes/sphere";
import {CustomObject} from "./shapes/custom-object";
import Elsa from "../assets/models/Elsa.obj";
import {Ground} from "./shapes/ground";
import {Snow} from "./shapes/snow";
/*
1. Средствами библиотеки OpenGL реализовать несколько типов источников света, движение камеры, динамику (движение некоторых объектов, например, снег). В центре сцены поставить объекты, на некоторые из них наложить текстуры. Объекты:
    а) несколько различных примитивов, например, сферу, куб, тор.
    б) выгруженный из 3d редактора объект.
*/

const gl: WebGLRenderingContext = getGlContext();

const camera = new Camera();
const scene = new Scene(gl, camera);
const cube: Cube = new Cube([
    // лицевая часть
    -0.25, -0.25, 0.25,
    -0.25, 0.25, 0.25,
    0.25, 0.25, 0.25,
    0.25, -0.25, 0.25,
    // задняя часть 
    -0.25, -0.25, -0.25,
    -0.25, 0.25, -0.25,
    0.25, 0.25, -0.25,
    0.25, -0.25, -0.25,

    // левая боковая часть
    -0.25, -0.25, 0.25,
    -0.25, 0.25, 0.25,
    -0.25, 0.25, -0.25,
    -0.25, -0.25, -0.25,

    // правая боковая часть
    0.25, -0.25, 0.25,
    0.25, 0.25, 0.25,
    0.25, 0.25, -0.25,
    0.25, -0.25, -0.25
]);


scene.addShape(cube);
scene.addShape(new Ground());
scene.addShape(new Snow());
scene.addShape(new Sphere([0, 0, 0], 0.5));
scene.addShape(new CustomObject(Elsa));
scene.start();

