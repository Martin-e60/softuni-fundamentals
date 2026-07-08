function solve(data) {
  let phoneBook = {}; 
  for (let entry of data) {
    let parsedData = entry.split(' '); 

    [fullName, phoneNumber] = parsedData;

    phoneBook[fullName] = phoneNumber;
  }
  
  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}