const sheetDataHandler = (rawData) => {
  const lines = rawData.split("\n");
  let outData = [];
  let keys = lines[0].split(",");
  for (let i = 1; i < lines.length; i++) {
    let object = {};
    let objectRawData = lines[i].split(",");
    for (let k = 0; k < keys.length; k++) {
      object[keys[k].replace('\r', '')] = objectRawData[k].replace('\r', '');
    }
    outData.push(object);
  }
  return outData;
}

export default sheetDataHandler;