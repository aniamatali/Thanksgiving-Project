
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
    return (this.yearAge(date) / 1.88);
  }

  mercuryAge(date) {
    return (this.yearAge(date) / .24);
  }

  venusAge(date) {
    return (this.yearAge(date) / .62);
  }

  jupiterAge(date) {
    return (this.yearAge(date) / 11.86);
  }

}
