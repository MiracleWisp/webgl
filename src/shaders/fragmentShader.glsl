precision highp float;
varying vec2 textureCoords;
varying vec3 lightWeighting;
uniform sampler2D Sampler;

void main(void) {
    vec4 texelColor = texture2D(Sampler, textureCoords);
    gl_FragColor = vec4(lightWeighting.rgb * texelColor.rgb, 1);
    gl_FragColor.rgb *= gl_FragColor.a;
}
