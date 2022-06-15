// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sheetUrl } from "../constants";
import sheetDataHandler from "./sheetDataHandler";

export default async function getProgressData () {
  const data = await fetch(sheetUrl.progress)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return sheetDataHandler(data);
    });
  return data;
}