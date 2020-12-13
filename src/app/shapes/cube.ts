import {Shape} from "./shape";
import CubeTex from "../../assets/textures/bzz.png";
import {mat3, mat4} from "gl-matrix";

export class Cube extends Shape {
    private readonly indices: number[] = [ // лицевая часть
        0, 1, 2,
        2, 3, 0,
        // задняя часть
        4, 5, 6,
        6, 7, 4,
        //левая боковая часть
        8, 9, 10,
        10, 11, 8,
        // правая боковая часть
        12, 13, 14,
        14, 15, 12
    ];

    private readonly textureCoords: number[] = [
        0.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,

        0.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,

        0.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,

        0.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0
    ];

    private readonly normals: number[] = [
        // Лицевая сторона
        0.0, 0.0, 1.0, //v0
        0.0, 0.0, 1.0, //v1
        0.0, 0.0, 1.0, //v2
        0.0, 0.0, 1.0, //v3

        // Задняя сторона
        0.0, 0.0, -1.0, //v4
        0.0, 0.0, -1.0, //v5
        0.0, 0.0, -1.0, //v6
        0.0, 0.0, -1.0, //v7

        // Левая боковая сторона
        -1.0, 0.0, 0.0, //v8
        -1.0, 0.0, 0.0, //v9
        -1.0, 0.0, 0.0, //v10
        -1.0, 0.0, 0.0, //v11

        // Правая боковая сторона
        1.0, 0.0, 0.0, //v12
        1.0, 0.0, 0.0, //v13
        1.0, 0.0, 0.0, //v14
        1.0, 0.0, 0.0, //v15
    ];


    constructor(private vertices: number[]) {
        super();
    }

    public draw(gl: WebGLRenderingContext): void {

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.vertexAttribPointer(this.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);

        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.vertexAttribPointer(this.vertexTextureAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 2);
        gl.enable(gl.DEPTH_TEST);


        mat4.identity(this.modelMatrix);
        // mat4.scale(this.modelMatrix, this.modelMatrix, [0.5, 0.5, 0.5]);
        mat4.translate(this.modelMatrix, this.modelMatrix, [2, -0.25, 0]);

        mat3.normalFromMat4(this.normalMatrix, this.modelMatrix);

        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(this.normalMatrixLocation, false, this.normalMatrix);


        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }

    fillBuffers(gl: WebGLRenderingContext): void {
        this.initTexture(gl, CubeTex);
        this.initFields(gl);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);

        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normals), gl.STATIC_DRAW);

        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoords), gl.STATIC_DRAW);

    }
}
