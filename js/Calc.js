
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
        return ("You will die in about " + ageMinus + " years.");
      }
    }

    yearsLeftMercury(date, gender) {
      const earthAge = this.lifeExpectancy(gender);
      let mercuryExpectancy = (earthAge / 0.24);
      let mercuryAge = this.lifeExpectancy(gender);
      let Age = this.mercuryAge(date);
      if (Age>mercuryAge) {
        const yearsPlus = Age - mercuryAge;
        return ("You passed the life expectancy.");
      } else {
        const ageMinus = (mercuryAge - Age);
        return ("You will die in about " + ageMinus + " years.");
      }
    }

    yearsLeftMars(date, gender) {
      const earthAge = this.lifeExpectancy(gender);
      let marsExpectancy = (earthAge / 1.88);
      let marsAge = this.lifeExpectancy(gender);
      let Age = this.marsAge(date);
      if (Age>marsAge) {
        const yearsPlus = Age - marsAge;
        return ("You passed the life expectancy.");
      } else {
        const ageMinus = (marsAge - Age);
        return ("You will die in about " + ageMinus + " years.");
      }
    }

    yearsLeftVenus(date, gender) {
      const earthAge = this.lifeExpectancy(gender);
      let venusExpectancy = (earthAge / 0.62);
      let venusAge = this.lifeExpectancy(gender);
      let Age = this.venusAge(date);
      if (Age>venusAge) {
        const yearsPlus = Age - venusAge;
        return ("You passed the life expectancy.");
      } else {
        const ageMinus = (venusAge - Age);
        return ("You will die in about " + ageMinus + " years.");
      }
    }

    yearsLeftJupiter(date, gender) {
      const earthAge = this.lifeExpectancy(gender);
      let jupiterExpectancy = (earthAge / 1.88);
      let jupiterAge = this.lifeExpectancy(gender);
      let Age = this.jupiterAge(date);
      if (Age>jupiterAge) {
        const yearsPlus = Age - jupiterAge;
        return ("You passed the life expectancy.");
      } else {
        const ageMinus = (jupiterAge - Age);
        return ("You will die in about " + ageMinus + " years.");
      }
    }




  secondsBetween(date1, date2){
  let day1 = new Date(date1);
  let day2 = new Date(date2);
  return (new Date(day1) - new Date(day2)) / 1000;
}

}
