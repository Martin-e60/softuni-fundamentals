function nextDay(year, month, day) {
    const date = new Date(year, month - 1, day + 1);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}