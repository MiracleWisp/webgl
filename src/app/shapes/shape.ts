import {mat3, mat4} from "gl-matrix";

export abstract class Shape {
    protected texture: WebGLTexture;
    protected textureNum: number;
    protected shaderProgram: WebGLProgram;
    protected vertexPositionAttribute: GLint;
    protected vertexTextureAttribute: GLint;
    protected vertexNormalAttribute: GLint;
    protected modelMatrixLocation: WebGLUniformLocation;
    protected normalMatrixLocation: WebGLUniformLocation;
    protected modelMatrix: mat4 = mat4.create();
    protected normalMatrix: mat3 = mat3.create();
    protected vertexBuffer: WebGLBuffer;
    protected indexBuffer: WebGLBuffer;
    protected vertexNormalBuffer: WebGLBuffer;
    protected textureCoordsBuffer: WebGLBuffer;

    abstract draw(gl: WebGLRenderingContext): void;

    abstract fillBuffers(gl: WebGLRenderingContext): void;

    protected initFields(gl: WebGLRenderingContext): void {
        this.shaderProgram = gl.getParameter(gl.CURRENT_PROGRAM);
        this.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram, "vertexPosition");
        this.vertexTextureAttribute = gl.getAttribLocation(this.shaderProgram, "vertexTextureCoords");
        this.vertexNormalAttribute = gl.getAttribLocation(this.shaderProgram, "vertexNormal");
        this.modelMatrixLocation = gl.getUniformLocation(this.shaderProgram, "ModelMatrix");
        this.normalMatrixLocation = gl.getUniformLocation(this.shaderProgram, "NormalMatrix");
        this.vertexBuffer = gl.createBuffer();
        this.indexBuffer = gl.createBuffer();
        this.vertexNormalBuffer = gl.createBuffer();
        this.textureCoordsBuffer = gl.createBuffer();
    }


    protected initTexture(gl: WebGLRenderingContext, imageSrc: string): void {
        this.texture = gl.createTexture();
        console.log(this.texture);
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        const image = new Image();
        image.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.bindTexture(gl.TEXTURE_2D, null);
        }
        image.src = imageSrc;
    }
}
