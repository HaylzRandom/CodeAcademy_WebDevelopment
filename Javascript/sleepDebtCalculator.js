// Javascript program to calculate whether or not you got an ideak amount of sleep for the week

const getSleepHours = day => {
    switch (day) {
      case 'Monday': 
        return 5;
      case 'Tuesday':
        return 5;
      case 'Wednesday':
        return 4;
      case 'Thursday':
        return 5;
      case 'Friday':
        return 8;
      case 'Saturday':
        return 10;
      case 'Sunday':
        return 8;
      default:
        return "Error!";
    }
  }
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
  
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep');
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log('You slept for '+  (actualSleepHours - idealSleepHours) + ' hours(s) more of sleep than you needed this week. You must be well rested!');
    }
    else {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours(s) less sleep than you needed this week. Go to bed!');
    }
  };
  
  calculateSleepDebt();