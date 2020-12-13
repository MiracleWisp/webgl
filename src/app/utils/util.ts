export function getGlContext(): WebGLRenderingContext {
    const canvas = document.createElement("canvas");
    canvas.id = "wgl";


    const body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    const gl: WebGLRenderingContext | null = canvas.getContext("webgl", {
        premultipliedAlpha: false
    });
    if (!gl) {
        throw "No WebGL support";
    }
    canvas.height = canvas.clientHeight;
    canvas.width = canvas.clientWidth;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    return gl;
}

export function loadTextResource(url: string): Promise<string> {
    return fetch(url).then(res => {
        return res.text();
    });
}

export function createAndCompileShader(gl: WebGLRenderingContext, shaderSrc: string, type: GLenum): WebGLShader {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, shaderSrc);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw "Ошибка компиляции шейдера: " + log;
    }
    return shader;
}
