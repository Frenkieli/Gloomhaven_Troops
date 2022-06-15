import { characterEnum } from "../utils/getCharactersData";

const characterLength = Object.keys(characterEnum).length / 2;

export class Mercenary {
  mainTHREE = null;
  mainTopography = null;
  threeModel = {};
  constructor(main, topography) {
    this.mainTHREE = main;
    this.mainTopography = topography;
    for(let i = 0 ; i < characterLength ; i ++) {
      console.log(i);
      this.mainTHREE.loader['gltfLoader'].load(`../3dmodel/${characterEnum[i]}.gltf`, (gltf) => {
        this.threeModel[characterEnum[i]] = gltf;
      })
    }
  }

  comeOut(mvp, members = []) {
    const mvpPosition = [8, 1];
    const characterPosition = [[5, 1], [4, 1], [5, 2]];
    console.log(this.mainTopography);

    this.characterModelLoader(mvp, mvpPosition);
    this.mainTopography.light.color.setHex( `0x${mvp.color.replace('#', '')}`);

    for(let i = 0 ; i < members.length ; i ++) {
      this.characterModelLoader(members[i], characterPosition[i]);
    }
  }

  characterModelLoader(characterData, position) {
      this.mainTHREE.loader['gltfLoader'].load(`../3dmodel/${characterData.class}.gltf`, (gltf) => {
        const characterHex = this.mainTopography.hexMatrix[position[0]][position[1]];

        gltf.scene.scale.x = 30;
        gltf.scene.scale.y = 30;
        gltf.scene.scale.z = 30;
        gltf.scene.position.x = characterHex.position.x;
        gltf.scene.position.y = characterHex.position.y;
        gltf.scene.position.z = characterHex.position.z + 70;
        gltf.scene.rotation.x = Math.PI /2;
        gltf.scene.traverse( function( node ) {
  
          if ( node.isMesh ) { node.castShadow = true; }
  
      } );
        this.mainTHREE.scene.add(gltf.scene);
      })
  }

}