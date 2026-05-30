function solve(dayNum) {
  let weekDays = [
    'Monday', 
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  if (dayNum === 1) {
    console.log(weekDays[0]);
  } else if (dayNum === 2) {
    console.log(weekDays[1])
  } else if (dayNum === 3) {
    console.log(weekDays[2]);
  } else if (dayNum === 4) {
    console.log(weekDays[3]);
  } else if (dayNum === 5) {
    console.log (weekDays[4]);
  } else if (dayNum === 6) {
    console.log(weekDays[5]);
  } else if (dayNum === 7) {
    console.log(weekDays[6]);
  } else {
    console.log('Invalid day!')
  }
} 


