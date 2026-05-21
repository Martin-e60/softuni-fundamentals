function solve(numOfPages, pagesReadPerHour, numOfDaysReading) {
  let timePerBook = (numOfPages / pagesReadPerHour);
  let timeReadingPerDayNeeded = (timePerBook / numOfDaysReading);
  console.log (timeReadingPerDayNeeded);
}
