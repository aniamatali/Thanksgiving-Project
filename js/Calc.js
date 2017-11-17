
export class Calc {

  yearsToSeconds(years) {
    return years * 31540000;
  }

  daysToSeconds(days) {
    return days * 86410;
  }

  ageToSeconds(age) {
    return age * 31540000;
  }

  dateToSeconds(date) {
    return this.yearAge(date)*31540000;
  }

  yearAge(date){
    let today = new Date();
    let birthdate = new Date(date);
    const age = new Date(today-birthdate).getFullYear()-1970;
    return age;
  }

  marsAge(date) {
    return Math.round(100*(this.yearAge(date) / 1.88))/100;
  }

  mercuryAge(date) {
    return Math.round(100*(this.yearAge(date) / 0.24))/100;
  }

  venusAge(date) {
    return Math.round(100*(this.yearAge(date) / 0.62))/100;
  }

  jupiterAge(date) {
    return Math.round(100*(this.yearAge(date) / 11.86))/100;
  }

  lifeExpectancy(gender) {
    let averageLife = 100;
    if (gender == "male") {
      return averageLife -= 1;
    } else if
      (gender != "male") {
        return averageLife += 1;
      }
    }

    yearsLeft(date, gender) {
      let averageAge = this.lifeExpectancy(gender);
      let Age = this.yearAge(date);
      if (Age>averageAge) {
        const yearsPlus = Age - averageAge;
        return ("You passed the life expectancy.");
      } else {
        const ageMinus = (averageAge - Age);
        return ("You will die in about" + ageMinus + "years.");
      }
    }


  secondsBetween(date1, date2){
  let day1 = new Date(date1);
  let day2 = new Date(date2);
  return (new Date(day1) - new Date(day2)) / 1000;
}

}
