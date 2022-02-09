const fs = require("fs");
const path = require("path");

let materialJson = [];
(async () => {
  await fs
    .readdirSync(path.join(__dirname, "./public/three/textrue/"))
    .forEach(function (file) {
      materialJson.push(file.split('.')[0]);
    });
  console.log(materialJson);
  fs.writeFile(
    path.join(__dirname, "./threejs/materialJson.json"),
    JSON.stringify(materialJson, null, "\t"),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
})();
