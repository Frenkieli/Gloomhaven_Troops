// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sheetUrl } from "../config/config";
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
