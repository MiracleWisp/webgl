import {Shape} from "./shape";
import Tex from "../../assets/textures/texture-18.png";
import {mat3, mat4} from "gl-matrix";

export class Ground extends Shape {
    private readonly indices: number[] = [ // лицевая часть
        0, 1, 2,
        2, 3, 0,
    ];

    private readonly textureCoords: number[] = [
        0.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0
    ];

    private readonly vertices: number[] = [
        3, -0.5, 3,
        3, -0.5, -3,
        -3, -0.5, -3,
        -3, -0.5, 3

    ];

    private readonly normals: number[] = [
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0
    ];

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
        // mat4.scale(modelMatrix, modelMatrix, [0.5, 0.5, 0.5]);
        // mat4.translate(modelMatrix, modelMatrix, [2, 0, 0]);

        mat3.normalFromMat4(this.normalMatrix, this.modelMatrix);

        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(this.normalMatrixLocation, false, this.normalMatrix);


        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }

    fillBuffers(gl: WebGLRenderingContext) {
        this.initTexture(gl, Tex);
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
