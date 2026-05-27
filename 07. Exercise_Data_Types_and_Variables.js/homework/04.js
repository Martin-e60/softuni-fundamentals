function solve(num) {
  let metersToKilometers = (num / 1000);
  let kilometersToMiles = (metersToKilometers * 0.62137).toFixed(2);

  console.log(`${num} meters is equal to ${metersToKilometers} kilometers.`);
  console.log(`${metersToKilometers} kilometers is equal to ${kilometersToMiles} miles.`);
}