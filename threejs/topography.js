import * as THREE from "three";
import materialJson from "./materialJson.json";

export class Topography {
  loader = null;
  mainTHREE = null;
  material = {};
  constructor(main) {
    this.loader = new THREE.TextureLoader();

    this.mainTHREE = main;
    for (let i = 0; i < materialJson.length; i++) {
      const materiaStr = materialJson[i].split("_");
      this.material[materiaStr[0]] = {
        name: materiaStr[1],
        textrue: this.loader.load(
          "./three/textrue/" + materialJson[i] + ".jpg"
        ),
        normalMap: this.loader.load(
          "./three/normalmap/" + materialJson[i] + ".jpg"
        ),
      };
    }
  }

  setTopography(type) {
    const r = 25;
    const h = r * Math.sqrt(3);
    const { hexDesc, lightDesc } = this.topographyDescription[type];

    let verticalHight = 2 * h + (hexDesc.length - 1) * h;
    hexDesc.forEach((horizontal, verticalLine) => {
      let y = -(h + verticalLine * h) + verticalHight / 2;
      let horizontalHight = 4 * r + (horizontal.length - 1) * 6 * r;
      horizontal.forEach((hexType, horizontalLine) => {
        let x = -(2 * r + horizontalLine * 6 * r) + horizontalHight / 2;
        const hex = this.createHex(hexType, r);
        hex.position.set(x, y, 0);
        this.mainTHREE.scene.add(hex);
      });
    });
    
    // lightDesc.forEach(data => {
    //   let light = this.createLight(data);
    //   light.position.set(data.position[0], data.position[1], data.position[2]);
    //   console.log(light.position);
    //   let lightHelper = new THREE.PointLightHelper(light);

    //   this.mainTHREE.scene.add(light);
    //   this.mainTHREE.scene.add(lightHelper);
    // })
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
    return cylinder;
  }

  createLight(data) {
    let light = new THREE.PointLight(...data.color);
    return light;
  }

  topographyDescription = {
    construct: {
      lightDesc: [
        {
          color: [0xffffff, 1],
          position: [0, 0, 300]
        }
      ],
      hexDesc: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4],
        [5, 5, 5, 5, 5], // 正中心點
        [5, 5, 5, 5, 5, 5], // 正中心點
        [6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6],
        [7, 7, 7, 7, 7],
        [7, 7, 7, 7, 7, 7],
        [8, 8, 8, 8, 8],
        [8, 8, 8, 8, 8, 8],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9, 9],
      ],
    },
  };
}
