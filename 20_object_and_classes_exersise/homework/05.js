function registerOfHeroes(arr) {
  let heroes = [];

  for (let heroStr of arr) {
    let [heroName, heroLevel, heroItems] = heroStr.split(" / ");
    heroLevel = Number(heroLevel);

    let heroObj = {
      name: heroName,
      level: heroLevel,
      items: heroItems,
    };

    heroes.push(heroObj);
    heroes.sort((a, b) => a.level - b.level);
  }

  for (let heroObjs of heroes) {
    console.log(`Hero: ${heroObjs.name}`);
    console.log(`level => ${heroObjs.level}`);
    console.log(`items => ${heroObjs.items}`);
  }
}

registerOfHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
