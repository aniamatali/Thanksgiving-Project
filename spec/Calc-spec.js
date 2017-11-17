import { Calc } from './../js/Calc.js';

describe('Calc', function(){

  let calc;
  let birthdate;
  let gender;

  beforeEach(function(){
    calc = new Calc();
    birthdate = '2016-01-01';
    gender = 'female'
  });

  it('years to seconds', function(){
    const result1 = calc.yearsToSeconds(1);
    expect(result1).toEqual(31540000);
  });

  it ('days to seconds', function(){
    const result2 = calc.daysToSeconds(2);

    expect(result2).toEqual(172820);
  });

  it("age to seconds", function(){
    let result3 = calc.ageToSeconds(1);
    expect(result3).toEqual(31540000);
  });

  it("age in years", function(){

    let yearAge = calc.yearAge(birthdate);
    expect(yearAge).toEqual(1);
  });

  it("age on Mars", function(){
    let marsAge = calc.marsAge(birthdate);
    expect(marsAge).toEqual(.53);
  });

  it("age on Mercury", function(){
    let mercuryAge = calc.mercuryAge(birthdate);
    expect(mercuryAge).toEqual(4.16);
  });

  it("Age on venus", function(){
    let venusAge = calc.venusAge(birthdate);
    expect(venusAge).toEqual(1.61);
  });

  it("age on joopeetur", function(){
    let jupiterAge = calc.jupiterAge(birthdate);
    expect(jupiterAge).toEqual(.08);
  });

  it("life expectancy", function(){
    let lifeExpectancy = calc.lifeExpectancy(gender);
    expect(lifeExpectancy).toEqual(99);
  });

  it("life expectancy", function(){
    let lifeExpectancy = calc.lifeExpectancy(gender);
    expect(lifeExpectancy).toEqual(101);
  });

});
