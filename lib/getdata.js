// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getCharactersData () {
  const data = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTvEcYpFz386IGwqKkDan9iMsqaPZqFrfVTdYTTvJwCzzXVG4KP0EE2tQZjyE7X3JMx70E5BnDZgR8/pub?output=csv"
  )
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      const lines = data.split("\n");
      let outData = [];
      let keys = lines[0].split(",");
      for (let i = 1; i < lines.length; i++) {
        let character = {};
        let characterRawData = lines[i].split(",");
        for (let k = 0; k < keys.length; k++) {
          character[keys[k]] = characterRawData[k];
        }
        outData.push(character);
      }
      return outData;
    });
  return data;
}
