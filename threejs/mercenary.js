import * as THREE from "three";
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
      this.mainTHREE.loader['gltfLoader'].load(`./3dmodel/${characterEnum[i]}.gltf`, (gltf) => {
        this.threeModel[characterEnum[i]] = gltf;
      })
    }
  }

  comeOut(members = []) {
    for(let i = 0 ; i < members.length ; i ++) {

    }
  }

}