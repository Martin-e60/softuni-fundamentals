function companyInformation(arr) {
  let companyKey = {};
  let sortedCompanies = [];

  for (let i = 0; i < arr.length; i++) {
    let [company, id] = arr[i].split(" -> ");

    if (!companyKey[company]) {
      companyKey[company] = [];
    }

    if (!companyKey[company].includes(id)) {
      companyKey[company].push(id);
    }
  }

  sortedCompanies = Object.keys(companyKey).sort();

  for (let company of sortedCompanies) {
    console.log(company);

    for (let id of companyKey[company]) {
      console.log(`-- ${id}`);
    }
  }
}

companyInformation([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
