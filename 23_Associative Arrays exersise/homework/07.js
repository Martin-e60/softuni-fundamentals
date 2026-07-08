function solve(input) {
  let resources = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (resources[resource] === undefined) {
      resources[resource] = 0;
    }

    resources[resource] += quantity;
  }

  for (let key in resources) {
    console.log(`${key} -> ${resources[key]}`);
  }
}
