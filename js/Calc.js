
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
  }
