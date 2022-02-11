import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Stats from "stats-js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

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
  loader = {};
  loadingManager = null;
  setProgress= null;

  sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  constructor(canvasElement, setProgress) {
    this.canvasElement = canvasElement;
    this.setProgress = setProgress;
  }

  /**
   * @description init three base object
   *
   * @memberof Base3dClass
   */
  init() {
    this.initScene();
    this.initCamera();
    this.initLoadingManager();
    this.initLoader();
    window.addEventListener("resize", this.resizeTHREE.bind(this));
    let light = new THREE.PointLight(0xffffff, 3);
    light.position.set(0, 0, 100);
    // let directionalLightHelper = new THREE.DirectionalLightHelper(
    //   light
    // )
    this.scene.add(light);
    // this.scene.add(directionalLightHelper);

    // our mindthief

    this.loader['gltfLoader'].load('./3dmodel/mindthief.gltf', (gltf) => {
      gltf.scene.scale.x = 30;
      gltf.scene.scale.y = 30;
      gltf.scene.scale.z = 30;
      gltf.scene.position.z = 90;
      gltf.scene.position.y = 90;
      gltf.scene.rotation.x = Math.PI / 2;
      this.scene.add(gltf.scene);
    })

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
      3000
    );
    this.camera.position.set(0, -420, 420);
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

  initLoadingManager() {
    let vm = this;
    this.loadingManager = new THREE.LoadingManager();
    this.loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
      console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };
    this.loadingManager.onLoad = function ( ) {
      console.log( 'Loading complete!');
    };
    this.loadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
      vm.setProgress(itemsLoaded / itemsTotal * 100);
      console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    };
    this.loadingManager.onError = function ( url ) {
      console.log( 'There was an error loading ' + url );
    };
  }

  initLoader() {
    this.loader['textrue'] = new THREE.TextureLoader(this.loadingManager);
    this.loader['gltfLoader'] = new GLTFLoader(this.loadingManager);
  }

  initTool() {
    const axesHelper = new THREE.AxesHelper( 99999 );
    this.scene.add( axesHelper );
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
