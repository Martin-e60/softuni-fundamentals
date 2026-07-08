function solve(data) {
  let calendar = {};

  for (let entry of data) {
    let parsedData = entry.split(" ");

    [weekDay, fullName] = parsedData;

    if (calendar.hasOwnProperty(weekDay)) {
    console.log(`Conflict on ${weekDay}! `);
    } else {
    calendar[weekDay] = fullName;
    console.log(`Scheduled for ${weekDay}`)
    }
  }

  for (let key in calendar) {
    console.log(`${key} -> ${calendar[key]}`);
  }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
