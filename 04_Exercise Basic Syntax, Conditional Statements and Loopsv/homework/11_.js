function bitcoinMining(arr) {
  let bitcoinCount = 0;
  let firstBitcoin = 0;
  let money = 0;

  let currentDay = 1;

  for (let gold of arr) {
    if (currentDay % 3 === 0) {
      gold *= 0.7;
    }

    money = gold * 67.51;

    while (money <= 11949.16) {
      if (bitcoinCount === 0) {
        firstBitcoin = currentDay;
      }

      money -= 11949.16;
      bitcoinCount++;
    }

    currentDay++;
  }

  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if (bitcoinCount > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
  }

  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
