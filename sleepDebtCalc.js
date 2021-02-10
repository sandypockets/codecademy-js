// The current amount of sleep each night in hours
let sleepHours = 0;
const getSleepHours = function (day) {
  day.toLowerCase();
  if (day === 'monday') {
    return sleepHours = 8;
  } else if (day === 'tuesday') {
    return sleepHours = 8;
  } else if (day === 'wednesday') {
    return sleepHours = 8;
  } else if (day === 'thursday') {
    return sleepHours = 8;
  } else if (day === 'friday') {
    return sleepHours = 7;
  } else if (day === 'saturday') {
    return sleepHours = 6;
  } else if (day === 'sunday') {
    return sleepHours = 9;
  }
}

// The total hours of sleep each week in hours
let weeklyActualSleepHours = 0;
const getActualSleepHours = function () {
  return weeklyActualSleepHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

// The ideal amount of hours of sleep each week
const getIdealSleepHours = function () {
  let idealSleepHours = 7;
  return idealSleepHours * 7;
}

// Calculate sleep debt
let idealWeeklyHours = getIdealSleepHours();
const calculateSleepDebt = function () {
  if (idealWeeklyHours === weeklyActualSleepHours) {
    return 'You\'re getting the perfect amount of sleep!';
  } else if (idealWeeklyHours > weeklyActualSleepHours) {
    return 'You\'re not gettting enough sleep!';
  } else if (idealWeeklyHours < weeklyActualSleepHours) {
    return 'You\'re getting plenty of sleep!';
  } else {
    return 'Broken';
  }
}

// Function that runs through all the other functions
const runProgram = function () {
  getSleepHours('monday');
  getActualSleepHours();
  getIdealSleepHours();
  console.log(calculateSleepDebt());
}

runProgram();