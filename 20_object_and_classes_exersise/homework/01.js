function solve(arr) {
  for (let employesName of arr) {
    let employesNumber = employesName.length;

    let employeObj = {
      name: employesName,
      personalNumber: employesNumber,
    };

    console.log(
      `Name: ${employeObj.name} -- Personal Number: ${employeObj.personalNumber}`,
    );
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
