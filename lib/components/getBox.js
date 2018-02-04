const glslify = require('glslify');
const path = require('path');
const shaderReload = require('shader-reload');
//const glslify = require('glslify');

module.exports = function (app) {
  const geom = new THREE.BoxGeometry(1, 1, 1);
  const obj = require('shader-reload')({
    vertex: glslify(path.resolve(__dirname, `../shaders/cube.vert`)),
    fragment: glslify(path.resolve(__dirname, `../shaders/cube.frag`))
  });

  const mat = new THREE.ShaderMaterial({
    vertexShader: obj.vertex,
    fragmentShader: obj.fragment,
    depthTest: false,
    depthWrite: false
  });

  const box = new THREE.Mesh(geom, mat);
  box.frustumCulled = false;
  box.position.set(0, 0, 0);
  box.scale.set(10, 10, 10);

  return {
    object3d: box,

    update (dt, state) {

    }
  };
};
