import { Calc } from './../js/Calc.js';

describe('Calc', function(){

  let calc;
  let birthdate;

  beforeEach(function(){
   calc = new Calc();
   birthdate = '2016-01-01';
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


});
