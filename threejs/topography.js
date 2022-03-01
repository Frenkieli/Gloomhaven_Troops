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
          "./three/textrue/" + materialJson[i] + ".jpg"
        ),
        normalMap: main.loader.textrue.load(
          "./three/normalmap/" + materialJson[i] + ".jpg"
        ),
      };
    }
  }

  // 公式是依照中心往左右扣除範圍
  setTopography(type) {
    this.hexMatrix = [];
    const r = 25;
    const h = r * Math.sqrt(3);
    const { hexDesc, lightDesc } = this.topographyDescription[type];

    let verticalHight = 2 * h + (hexDesc.length - 1) * h;
    hexDesc.forEach((horizontal, verticalLine) => {
      let y = -(h + verticalLine * h) + verticalHight / 2;
      let horizontalHight = 4 * r + (horizontal.length - 1) * 6 * r;
      this.hexMatrix.push([]);
      horizontal.forEach((hexType, horizontalLine) => {
        let x = -(2 * r + horizontalLine * 6 * r) + horizontalHight / 2;
        const hex = this.createHex(hexType, r);
        hex.position.set(x, y, 0);
        this.hexMatrix[verticalLine].push(hex);
        this.mainTHREE.scene.add(hex);
      });
    });

    lightDesc.forEach(data => {
      let light = this.createLight(data);
      let position;
      if(Array.isArray(data.position[0])) {
        position = this.hexMatrix[data.position[0][0]][data.position[0][1]].position;
        console.log(position)
      } else {
        position= {
          x: data.position[0].x,
          y: data.position[0].y,
        }
      }

      light.position.set(position.x, position.y, data.position[1]);
      
      let lightHelper = new THREE.PointLightHelper(light);
      this.mainTHREE.scene.add(light);
      this.mainTHREE.scene.add(lightHelper);
    })
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

  createLight(data) {
    let light = new THREE.PointLight(...data.color);
    light.castShadow = true;
    return light;
  }

  topographyDescription = {
    construct: {
      lightDesc: [
        // {
        //   color: [0xffffff, 2, 2000, 2],
        //   position: [[0, 0], 300]
        // },
        // {
        //   color: [0xffffff, 1, 2000, 2],
        //   position: [[0, 4], 300]
        // },
        // {
        //   color: [0xffffff, 1, 2000, 2],
        //   position: [[17, 0], 300]
        // },
        // {
        //   color: [0xffffff, 1, 2000, 2],
        //   position: [[17, 5], 300]
        // },
        {
          color: [0xffffff, 2, 3000, 2],
          position: [{x:0, y:0}, 260]
        },
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
