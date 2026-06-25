function dungeonestDark(input) {
  let arr = input[0].split("|");
  let initialHealth = 100;
  let initialCoins = 0;
  let dungeonRoom = 0;
  let alive = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("potion")) {
      let potion = Number(arr[i].split(" ")[1]);
      let healedAmount = potion;

      if (initialHealth + potion > 100) {
        healedAmount = 100 - initialHealth;
      }

      initialHealth += healedAmount;
      console.log(`You healed for ${healedAmount} hp.`);
      console.log(`Current health: ${initialHealth} hp.`);
      dungeonRoom += 1;

    } else if (arr[i].includes("chest")) {
      let chest = Number(arr[i].split(" ")[1]);
      initialCoins += chest;
      dungeonRoom += 1;
      console.log(`You found ${chest} coins.`);

    } else {
      let monster = arr[i].split(" ")[0];
      let attack = Number(arr[i].split(" ")[1]);
      initialHealth -= attack;

      if (initialHealth > 0) {
        console.log(`You slayed ${monster}.`);
        dungeonRoom += 1;
      } else {
        alive = false;
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${dungeonRoom}`);
        return;
      }
    }
  }
  if (alive == true) {
    console.log("You've made it!");
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
  }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);