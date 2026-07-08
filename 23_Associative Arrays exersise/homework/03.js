function parkingLot(arr) {
  let parking = new Set();

  for (let line of arr) {
    let [direction, carNumber] = line.split(", ");

    if (direction == "IN") {
      parking.add(carNumber);
    } else {
      parking.delete(carNumber);
    }
  }

  if (parking.size === 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(Array.from(parking).sort().join("\n"));
  }
}

parkingLot([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
