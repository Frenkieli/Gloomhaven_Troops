import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from "stats-js";

/**
 * @description base three object
 *
 * @export
 * @class Base3dClass
 */
export class Base3dClass {
  canvasElement = null;
  scene = null;
  camera = null;
  renderer = null;
  stats = null;

  sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  constructor(canvasElement) {
    this.canvasElement = canvasElement;
  }

  /**
   * @description init three base object
   *
   * @memberof Base3dClass
   */
  init() {
    this.initScene();
    this.initCamera();
    window.addEventListener("resize", this.resizeTHREE.bind(this));
    let light = new THREE.PointLight(0xffffff, 1);
    light.position.set(1, 1, 5);

    this.scene.add(light);

    const geometry = new THREE.CylinderGeometry( 5, 5, 1, 6 );
    const material = new THREE.MeshStandardMaterial( {color: 0xffff00} );
    const cylinder = new THREE.Mesh( geometry, material );
    
    cylinder.rotation.x = Math.PI / 2;

    this.scene.add( cylinder );
    this.initRenderer();
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 30);
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.lookAt(this.scene.position);

    this.scene.add(this.camera);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasElement,
      antialias: true,
      // alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.render();
  }

  initTool() {
    this.stats = new Stats();
    this.stats.setMode(0);
    let stateBox = document.createElement("div");
    stateBox.className = "absolute t-0 l-0";
    stateBox.appendChild(this.stats.domElement);
    document.body.appendChild(stateBox);
    const controls = new OrbitControls(this.camera, this.canvasElement);
    controls.enableDamping = true;
  }

  resizeTHREE() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    // Update camera
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    console.log(this);
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    if(this.stats) {
      this.stats.update()
    }
    this.renderer.render(this.scene, this.camera);
  }

}
