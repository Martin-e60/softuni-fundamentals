function legendaryFarming(str) {
  let keyMaterialQty = { motes: 0, fragments: 0, shards: 0 };
  let junkMaterialQty = {};
  let materialLegendary = {
    motes: "Dragonwrath",
    fragments: "Valanyr",
    shards: "Shadowmourne",
  };

  let infoEls = str.split(" ");

  for (let i = 0; i < infoEls.length; i += 2) {
    let qty = Number(infoEls[i]);
    let material = infoEls[i + 1].toLowerCase();

    if (material in keyMaterialQty) {
      keyMaterialQty[material] += qty;

      if (keyMaterialQty[material] >= 250) {
        console.log(`${materialLegendary[material]} obtained`);
        keyMaterialQty[material] -= 250;
        break;
      }
    } else {
      if (material in junkMaterialQty) {
        junkMaterialQty[material] += qty;
      } else {
        junkMaterialQty[material] = qty;
      }
    }
  }
  console.log(keyMaterialQty);
  console.log(junkMaterialQty);
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
  