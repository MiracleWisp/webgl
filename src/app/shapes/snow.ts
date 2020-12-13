import {Shape} from "./shape";
import {mat3, mat4, vec3} from "gl-matrix";
import SnowTex from "../../assets/textures/FajbNY.png";

export class Snow extends Shape {
    private readonly indices: number[] = [ // лицевая часть
        0, 1, 2, 3, 4, 5, 6, 7
    ];

    private readonly textureCoords: number[] = [
        0.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0
    ];

    private readonly normals: number[] = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0
    ];

    private flakes: Flake[] = [];
    private radius = 0.013;

    private vertices: number[] = [
        this.radius, 0, this.radius,
        -this.radius, 0, -this.radius,
        -this.radius, 0, this.radius,
        this.radius, 0, -this.radius,
        0, 0, this.radius,
        0, 0, -this.radius,
        -this.radius, 0, 0,
        this.radius, 0, 0
    ]

    constructor() {
        super();
        for (let i = 0; i < 1000; i++) {
            this.flakes.push({
                offset: [this.getRandom(-3, 3), this.getRandom(-0.5, 3), this.getRandom(-3, 3)],
                rotationVector: [Math.random(), Math.random(), Math.random()],
                rotationAngle: 0,
                scale: [1, 1, 1]
            });
        }

    }


    public draw(gl: WebGLRenderingContext): void {
        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.vertexAttribPointer(this.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);

        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.vertexAttribPointer(this.vertexTextureAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE3);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 3);
        gl.disable(gl.DEPTH_TEST);

        this.flakes.forEach(flake => {
            this.drawFlake(gl, flake, this.vertexPositionAttribute, this.modelMatrixLocation, this.normalMatrixLocation);
            this.moveFlake(flake);
        })
    }

    private drawFlake(gl: WebGLRenderingContext, flake: Flake, vertexPositionAttribute: GLint, modelMatrixLocation: WebGLUniformLocation, normalMatrixLocation: WebGLUniformLocation): void {

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);


        mat4.identity(this.modelMatrix);
        mat4.translate(this.modelMatrix, this.modelMatrix, flake.offset);
        // mat4.scale(this.modelMatrix, this.modelMatrix, flake.scale);
        mat4.rotate(this.modelMatrix, this.modelMatrix, flake.rotationAngle, flake.rotationVector);

        mat3.normalFromMat4(this.normalMatrix, this.modelMatrix);

        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(normalMatrixLocation, false, this.normalMatrix);

        gl.disable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        gl.drawElements(gl.LINES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }

    fillBuffers(gl: WebGLRenderingContext) {
        this.initTexture(gl, SnowTex);
        this.initFields(gl);

        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);


        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normals), gl.STATIC_DRAW);

        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoords), gl.STATIC_DRAW);
    }

    private moveFlake(flake: Flake) {
        flake.rotationAngle += this.getRandom(0, 0.03);
        flake.rotationAngle = flake.rotationAngle > 2 * Math.PI ? 0 : flake.rotationAngle;

        flake.offset = [
            flake.offset[0] + this.getRandom(-0.0008, 0.0008),
            flake.offset[1] - this.getRandom(0, 0.0008),
            flake.offset[2] + this.getRandom(-0.0008, 0.0008)
        ];
        if (flake.offset[1] < -0.5) {
            flake.offset[1] = 3;
        }

        // flake.rotation += this.getRandom(-0.03, 0.03);

        // flake.scale = [
        //     1 + this.getRandom(-0.05, 0.05),
        //     1 + this.getRandom(-0.05, 0.05),
        //     1 + this.getRandom(-0.05, 0.05),
        // ]
    }


    private getRandom(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
}

interface Flake {
    offset: vec3;
    rotationVector: vec3;
    rotationAngle: number;
    scale: vec3;
}
