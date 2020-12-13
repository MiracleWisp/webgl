attribute vec3 vertexPosition;
attribute vec3 vertexNormal;
attribute vec2 vertexTextureCoords;

uniform mat4 ViewMatrix;
uniform mat4 PerspectiveMatrix;
uniform mat4 ModelMatrix;
uniform mat3 NormalMatrix;

uniform vec3 lightPosition;
uniform vec3 ambientLightColor;
uniform vec3 diffuseLightColor;
uniform vec3 specularLightColor;

varying vec2 textureCoords;
varying vec3 lightWeighting;

const float shininess = 16.0;
void main(void) {
    // установка позиции наблюдателя сцены
    vec4 vertexPositionEye4 = ViewMatrix * ModelMatrix * vec4(vertexPosition, 1.0);
    vec3 vertexPositionEye3 = vertexPositionEye4.xyz / vertexPositionEye4.w;

    // получаем вектор направления света
    vec3 lightDirection = normalize(lightPosition - vertexPositionEye3);

    // получаем нормаль
    vec3 normal = normalize(NormalMatrix * vertexNormal);

    // получаем скалярное произведение векторов нормали и направления света
    float diffuseLightDot = max(dot(normal, lightDirection), 0.0);

    // получаем вектор отраженного луча и нормализуем его
    vec3 reflectionVector = normalize(reflect(-lightDirection, normal));

    // установка вектора камеры
    vec3 viewVectorEye = -normalize(vertexPositionEye3);

    float specularLightDot = max(dot(reflectionVector, viewVectorEye), 0.0);

    float specularLightParam = pow(specularLightDot, shininess);

    // отраженный свет равен сумме фонового, диффузного и зеркального отражений света
    lightWeighting = ambientLightColor + diffuseLightColor * diffuseLightDot +
    specularLightColor * specularLightParam;

    // Finally transform the geometry
    gl_Position = PerspectiveMatrix * ViewMatrix * ModelMatrix * vec4(vertexPosition, 1.0);
    textureCoords = vertexTextureCoords;
}
