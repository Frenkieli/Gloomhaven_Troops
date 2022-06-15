import * as THREE from "three";
import materialJson from "./materialJson.json";

export class Topography {
  mainTHREE = null;
  material = {};
  hexMatrix = [];
  constructor(main) {

    this.mainTHREE = main;
    for (let i = 0; i < materialJson.length; i++) {
      const materiaStr = materialJson[i].split("_");
      this.material[materiaStr[0]] = {
        name: materiaStr[1],
        textrue: main.loader.textrue.load(
          "../three/textrue/" + materialJson[i] + ".jpg"
        ),
        normalMap: main.loader.textrue.load(
          "../three/normalmap/" + materialJson[i] + ".jpg"
        ),
      };
    }
  }

  /**
   * 地形建造公式
   * r 半徑 - 2(間隔)
   * 地形中心點位置公式
   * 1 1 1
   *  2 2
   * [r, r] [3r, r] [5r r]
   *   [2r, 2r]  [4r 2r]
   * 地形偏移公式是依照中心往左右去偏移
   * 總 r 除以二
   * 流程
   * 先以 0 0 為中心點畫出地形的地形位置
   * 而後偏移一個算好的整體偏移
   */
  setTopography(type) {
    this.hexMatrix = [];
    const r = 25;
    const h = r * Math.sqrt(3);
    const { hexDesc } = this.topographyDescription[type];

    let verticalHight = 2 * h + (hexDesc.length - 1) * h;
    hexDesc.forEach((horizontal, verticalLine) => {
      let y = -(h + verticalLine * h) + verticalHight / 2;
      let horizontalHight = 4 * r + (horizontal.length - 1) * 6 * r;
      this.hexMatrix.push([]);
      horizontal.forEach((hexType, horizontalLine) => {
        let x = -(2 * r + horizontalLine * 6 * r) + horizontalHight / 2;
        const hex = this.createHex(hexType, r);
        hex.position.set(x, y, Math.random() * 40);
        this.hexMatrix[verticalLine].push(hex);
        this.mainTHREE.scene.add(hex);
      });
    });

    this.light = this.createLight();
    
    let lightHelper = new THREE.SpotLightHelper(this.light);
    this.mainTHREE.scene.add(this.light);
    this.mainTHREE.scene.add(lightHelper);

    const hemiLight = new THREE.DirectionalLight(0xffffff, 1);
    hemiLight.position.set(0, -400, 380);
    
    let hemiLightHelper = new THREE.DirectionalLightHelper(hemiLight);
    this.mainTHREE.scene.add(hemiLight);
    this.mainTHREE.scene.add(hemiLightHelper);
  }

  createHex(type, r) {
    const geometry = new THREE.CylinderGeometry(r * 2 - 2, r * 2 - 2, 10, 6);
    const material = new THREE.MeshStandardMaterial({
      map: this.material[type].textrue,
      normalMap: this.material[type].normalMap,
    });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.rotation.y = Math.PI / -2;
    cylinder.rotation.x = Math.PI / -2;
    cylinder.roleType = "topography";
    cylinder.receiveShadow = true;
    return cylinder;
  }

  createLight() {
    let light = new THREE.SpotLight(0xffffff, 2, 990, 0.5, 1, 0.3);
    light.castShadow = true;

    light.position.set(0, -400, 380);
    return light;
  }

  topographyDescription = {
    construct: {
      hexDesc: [
        [1, 1, 1],
        [1, 1, 1, 1],
        [2, 2, 2],
        [2, 2, 2, 2],
        [3, 3, 3],
        [3, 3, 3, 3],
        [4, 4, 4],
        [4, 4, 4, 4],
        [5, 5, 5],
        [5, 5],
        [6],
      ],
    },
  };
}
