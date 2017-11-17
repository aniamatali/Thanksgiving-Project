import { Calc } from './../js/Calc.js';

describe('Calc', function(){

  let calc;

  beforeEach(function(){
   calc = new Calc();
  });

  it('years to seconds', function(){
    const result1 = calc.yearsToSeconds(1);
    expect(result1).toEqual(31557600);
  });

  

});
