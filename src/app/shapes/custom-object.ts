import {Shape} from "./shape";
import Mesh from "../mesh/mesh";
import {mat3, mat4, ReadonlyVec3, vec3} from "gl-matrix";
import ElsaTex from "../../assets/textures/ElsaTex.png"

export class CustomObject extends Shape {

    private mesh: Mesh;
    private scaleArray: ReadonlyVec3 = [0.5, 0.5, 0.5];
    private translateArray: ReadonlyVec3 = [2, -1, 0.3];

    constructor(objString: string) {
        super();
        this.mesh = new Mesh(objString);
        this.mesh.vertexNormals = this.getNormals(this.mesh.vertices, this.mesh.indices);
    }

    draw(gl: WebGLRenderingContext): void {

        // initMeshBuffers(gl, this.mesh);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.vertexAttribPointer(this.vertexTextureAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 0);
        gl.enable(gl.DEPTH_TEST);


        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh.vertexNormals), gl.STATIC_DRAW);
        gl.vertexAttribPointer(this.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);


        mat4.identity(this.modelMatrix);
        mat4.scale(this.modelMatrix, this.modelMatrix, this.scaleArray);
        mat4.translate(this.modelMatrix, this.modelMatrix, this.translateArray);

        mat3.normalFromMat4(this.normalMatrix, this.modelMatrix);

        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(this.normalMatrixLocation, false, this.normalMatrix);


        gl.drawElements(gl.TRIANGLES, this.mesh.indices.length, gl.UNSIGNED_SHORT, 0);
    }

    private getNormals(coords: number[], indices: number[]): number[] {
        const vNormals: vec3[] = [];
        const fNormals: vec3[] = [];
        const vertices: vec3[] = [];
        for (let i = 0; i < coords.length; i += 3) {
            vertices.push([coords[i], coords[i + 1], coords[i + 2]]);
            vNormals.push(vec3.create());
        }

        for (let i = 0; i < indices.length; i += 3) {
            const normal: vec3 = vec3.create();
            const sideA: vec3 = vec3.create();
            vec3.sub(sideA, vertices[indices[i + 1]], vertices[indices[i]]);
            const sideB: vec3 = vec3.create();
            vec3.sub(sideB, vertices[indices[i + 2]], vertices[indices[i]]);
            vec3.cross(normal, sideA, sideB);
            vec3.normalize(normal, normal);
            fNormals.push(normal);
        }

        for (let i = 0; i < indices.length; i++) {
            const f = Math.floor(i / 3);                 // which face is this index part of (3 per face?)
            const v = indices[i];        // which vertex number is being used
            vec3.add(vNormals[v], vNormals[v], fNormals[f]);
        }

        vNormals.forEach(normal => vec3.normalize(normal, normal));
        /*        vNormals.forEach(normal => {
                    if (normal[1] < 0) {
                        normal[1] *= -1;
                    }
                })*/
        // vNormals.forEach(normal => vec3.normalize(normal, normal));

        console.log("norm:", vNormals);
        console.log("flat:", (<number[][]>vNormals).flat());
        const res = vNormals.map(normal => Array.from(normal));
        return res.flat();
    }


    fillBuffers(gl: WebGLRenderingContext): void {
        this.initTexture(gl, ElsaTex);
        this.initFields(gl);

        // initMeshBuffers(gl, this.mesh);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh.vertices), gl.STATIC_DRAW);

        // создание буфера индексов
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.mesh.indices), gl.STATIC_DRAW);

        // текстурка
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh.textures), gl.STATIC_DRAW);


        // буфер нормалей
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexNormalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.mesh.vertexNormals), gl.STATIC_DRAW);

    }

}
