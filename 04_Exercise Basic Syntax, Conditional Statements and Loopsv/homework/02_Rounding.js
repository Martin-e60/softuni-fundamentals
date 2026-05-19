function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let formattedNumStr = num.toFixed(precision);
  let result = parseFloat(formattedNumStr);
  console.log(result);
}

