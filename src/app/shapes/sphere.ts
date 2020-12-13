import {Shape} from "./shape";
import {mat3, mat4, ReadonlyVec3} from "gl-matrix";
import Earth from "../../assets/textures/planeta.png";

export class Sphere extends Shape {

    private sectorsCount = 20;
    private stacksCount = 10;
    private vertices: number[] = [];
    private normals: number[] = [];
    private texCoords: number[] = [];
    private indices: number[] = [];


    constructor(private center: ReadonlyVec3, private radius: number) {
        super();
        this.getVertices()
        this.getIndices();
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
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.uniform1i(gl.getUniformLocation(this.shaderProgram, "Sampler"), 1);
        gl.enable(gl.DEPTH_TEST);


        mat4.identity(this.modelMatrix);

        mat3.normalFromMat4(this.normalMatrix, this.modelMatrix);


        gl.uniformMatrix4fv(this.modelMatrixLocation, false, this.modelMatrix);
        gl.uniformMatrix3fv(this.normalMatrixLocation, false, this.normalMatrix);

        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }

    fillBuffers(gl: WebGLRenderingContext) {
        this.initTexture(gl, Earth);
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
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.texCoords), gl.STATIC_DRAW);
    }

    private getVertices(): void {
        const sectorStep: number = 2 * Math.PI / this.sectorsCount;
        const stackStep: number = Math.PI / this.stacksCount;
        let sectorAngle: number;
        let stackAngle: number;
        let x, y, z, xy;
        let nx, ny, nz;
        const lengthInv = 1.0 / this.radius;
        let s, t;

        for (let i = 0; i <= this.stacksCount; i++) {
            stackAngle = Math.PI / 2 - i * stackStep; // starting from pi/2 to -pi/2
            xy = this.radius * Math.cos(stackAngle);  // r * cos(u)
            z = this.radius * Math.sin(stackAngle);   // r * sin(u)

            for (let j = 0; j <= this.sectorsCount; j++) {
                sectorAngle = j * sectorStep;           // starting from 0 to 2pi

                // vertex position (x, y, z)
                x = xy * Math.cos(sectorAngle);             // r * cos(u) * cos(v)
                y = xy * Math.sin(sectorAngle);             // r * cos(u) * sin(v)
                this.vertices.push(x);
                this.vertices.push(y);
                this.vertices.push(z);

                // normalized vertex normal (nx, ny, nz)
                nx = x * lengthInv;
                ny = y * lengthInv;
                nz = z * lengthInv;
                this.normals.push(nx);
                this.normals.push(ny);
                this.normals.push(nz);

                // vertex tex coord (s, t) range between [0, 1]
                s = j / this.sectorsCount;
                t = i / this.stacksCount;
                this.texCoords.push(s);
                this.texCoords.push(t);
            }

        }
    }

    private getIndices(): void {
        let k1, k2;
        for (let i = 0; i <= this.stacksCount; i++) {
            k1 = i * (this.sectorsCount + 1);     // beginning of current stack
            k2 = k1 + this.sectorsCount + 1;      // beginning of next stack

            for (let j = 0; j < this.sectorsCount; j++, k1++, k2++) {
                // 2 triangles per sector excluding first and last stacks
                // k1 => k2 => k1+1
                if (i != 0) {
                    this.indices.push(k1);
                    this.indices.push(k2);
                    this.indices.push(k1 + 1);
                }

                // k1+1 => k2 => k2+1
                if (i != (this.stacksCount - 1)) {
                    this.indices.push(k1 + 1);
                    this.indices.push(k2);
                    this.indices.push(k2 + 1);
                }
            }
        }
    }
}
