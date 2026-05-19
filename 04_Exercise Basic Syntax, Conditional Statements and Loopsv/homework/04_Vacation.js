function solve(numOfPeople, typeOfGroup, dayOfTheWeek) {
let TotalPrice = 0
  if (typeOfGroup === 'Students') {
    if (dayOfTheWeek === 'Friday') {
      if (numOfPeople >= 30) {
        TotalPrice = (numOfPeople * 8.45) * 0.85
      } else if (numOfPeople < 30) {
        TotalPrice = (numOfPeople * 8.45)
      }
    } else if (dayOfTheWeek === 'Saturday') {
      if (numOfPeople >= 30) {
        TotalPrice = (numOfPeople * 9.80) * 0.85
      } else if (numOfPeople < 30) {
        TotalPrice = (numOfPeople * 9.80)
      }
    } else if (dayOfTheWeek === 'Sunday') {
      if (numOfPeople >= 30) {
        TotalPrice = (numOfPeople * 10.46) * 0.85
      } else if (numOfPeople < 30) {
        TotalPrice = (numOfPeople * 10.46)
      }
    }
  } else if (typeOfGroup === 'Business') {
    if (dayOfTheWeek === 'Friday') {
      if (numOfPeople >= 100) {
        TotalPrice = (numOfPeople * 10.90) - (10 * 10.90)
      } else if (numOfPeople < 100) {
        TotalPrice = (numOfPeople * 10.90)
      }
    } else if (dayOfTheWeek === 'Saturday') {
      if (numOfPeople >= 100) {
        TotalPrice = (numOfPeople * 15.60) - (10 * 15.60)
      } else if (numOfPeople < 100) {
        TotalPrice = (numOfPeople * 15.60)
      }
    } else if (dayOfTheWeek === 'Sunday') {
      if (numOfPeople >= 100) {
        TotalPrice = (numOfPeople * 16) - (10 * 16)
      } else if (numOfPeople < 100) {
        TotalPrice = (numOfPeople * 16)
      }
    }
  } else if (typeOfGroup === 'Regular') {
    if (dayOfTheWeek === 'Friday') {
      if (numOfPeople >= 10 && numOfPeople <= 20) {
        TotalPrice = (numOfPeople * 15) * 0.95
      } else {
        TotalPrice = (numOfPeople * 15)
      }
    } else if (dayOfTheWeek === 'Saturday') {
      if (numOfPeople >= 10 && numOfPeople <= 20) {
        TotalPrice = (numOfPeople * 20) * 0.95
      } else {
        TotalPrice = (numOfPeople * 20)
      }
    } else if (dayOfTheWeek === 'Sunday') {
      if (numOfPeople >= 10 && numOfPeople <= 20) {
        TotalPrice = (numOfPeople * 22.50) * 0.95
      } else {
        TotalPrice = (numOfPeople * 22.50)
      }
    }
  }
  console.log('Total price: ' + TotalPrice.toFixed(2))
}


