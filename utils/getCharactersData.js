// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sheetUrl } from "../constants";
import sheetDataHandler from "./sheetDataHandler";

export default async function getCharactersData () {
  const data = await fetch(sheetUrl.member)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return sheetDataHandler(data);
    });
  return data;
}

export const characterEnum = {
  0: 'brute',
  1: 'cragheart',
  2: 'mindthief',
  3: 'scoundrel',
  4: 'spellweaver',
  5: 'tinkerer',
  6: 'beast_tyrant',
  7: 'berserker',
  8: 'doomstalker',
  9: 'elementalist',
  10: 'nightshroud',
  11: 'plagueherald',
  12: 'quartermaster',
  13: 'sawbones',
  14: 'soothsinger',
  15: 'summoner',
  16: 'sunkeeper',
  'brute': 0,
  'cragheart': 1,
  'mindthief': 2,
  'scoundrel': 3,
  'spellweaver': 4,
  'tinkerer': 5,
  'beast_tyrant': 6,
  'berserker': 7,
  'doomstalker': 8,
  'elementalist': 9,
  'nightshroud': 10,
  'plagueherald': 11,
  'quartermaster': 12,
  'sawbones': 13,
  'soothsinger': 14,
  'summoner': 15,
  'sunkeeper': 16,
}