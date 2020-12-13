import {Camera} from "./camera";
import {createAndCompileShader} from "./util";
import vertexSrc from "../../shaders/vertexShader.glsl";
import fragmentSrc from "../../shaders/fragmentShader.glsl";
import {mat4} from "gl-matrix";
import {Shape} from "../shapes/shape";

export class Scene {
    private readonly shaderProgram: WebGLProgram;
    private readonly vertexPositionAttribute: GLint;
    private readonly ViewMatrix: WebGLUniformLocation;
    private readonly ProjMatrix: WebGLUniformLocation;
    private shapes: Set<Shape> = new Set<Shape>();
    private readonly vertexTextureAttribute: GLint;
    private readonly vertexNormalAttribute: GLint;
    private readonly viewport: number[];


    constructor(private gl: WebGLRenderingContext, private camera: Camera) {
        this.shaderProgram = gl.createProgram();
        gl.attachShader(this.shaderProgram, createAndCompileShader(gl, vertexSrc, gl.VERTEX_SHADER));
        gl.attachShader(this.shaderProgram, createAndCompileShader(gl, fragmentSrc, gl.FRAGMENT_SHADER));
        gl.linkProgram(this.shaderProgram);
        this.viewport = this.gl.getParameter(this.gl.VIEWPORT);
        this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram, "vertexPosition");
        gl.enableVertexAttribArray(this.vertexPositionAttribute);
        this.vertexTextureAttribute = gl.getAttribLocation(this.shaderProgram, "vertexTextureCoords");
        gl.enableVertexAttribArray(this.vertexTextureAttribute);
        this.vertexNormalAttribute = gl.getAttribLocation(this.shaderProgram, "vertexNormal");
        gl.enableVertexAttribArray(this.vertexNormalAttribute);


        this.ViewMatrix = gl.getUniformLocation(this.shaderProgram, "ViewMatrix");
        this.ProjMatrix = gl.getUniformLocation(this.shaderProgram, "PerspectiveMatrix");

        gl.useProgram(this.shaderProgram);
        gl.disable(gl.DEPTH_TEST);
        this.setupLight();
        const perspectiveMatrix: mat4 = mat4.create();
        mat4.perspective(perspectiveMatrix, 1.04, this.viewport[2] / this.viewport[3], 0.1, 100.0);
        this.gl.uniformMatrix4fv(this.ProjMatrix, false, perspectiveMatrix);
    }

    public addShape(shape: Shape): void {
        this.shapes.add(shape);
        shape.fillBuffers(this.gl);
    }

    public deleteShape(shape: Shape): void {
        this.shapes.delete(shape);
    }


    public start(): void {
        this.gl.clearColor(0.5, 0.5, 0.5, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.setupCamera();
        this.drawShapes();
        requestAnimationFrame(() => {
            this.start()
        });
    }

    private setupCamera(): void {
        const viewMatrix: mat4 = mat4.create();
        // const viewport: number[] = this.gl.getParameter(this.gl.VIEWPORT);

        mat4.identity(viewMatrix);
        mat4.lookAt(viewMatrix, this.camera.eye, this.camera.center, this.camera.up);

        this.gl.uniformMatrix4fv(this.ViewMatrix, false, viewMatrix);
    }

    private drawShapes(): void {
        this.shapes.forEach(shape => shape.draw(this.gl));
    }

    private setupLight(): void {
        // Позиция источника
        const uniformLightPosition = this.gl.getUniformLocation(this.shaderProgram, "lightPosition");
        // фоновое отражение света
        const uniformAmbientLightColor = this.gl.getUniformLocation(this.shaderProgram, "ambientLightColor");
        // диффузное отражение света
        const uniformDiffuseLightColor = this.gl.getUniformLocation(this.shaderProgram, "diffuseLightColor");
        // зеркальное отражение света
        const uniformSpecularLightColor = this.gl.getUniformLocation(this.shaderProgram, "specularLightColor");

        this.gl.uniform3fv(uniformLightPosition, [2.0, 1.0, 0]);
        this.gl.uniform3fv(uniformAmbientLightColor, [0.1, 0.1, 0.1]);
        this.gl.uniform3fv(uniformDiffuseLightColor, [0.7, 0.7, 0.7]);
        this.gl.uniform3fv(uniformSpecularLightColor, [1.0, 1.0, 1.0]);
    }
}
