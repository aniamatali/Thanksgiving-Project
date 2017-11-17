import { Calc } from './../js/Calc.js';

$(document).ready(function () {

  $('#user-form').submit(function(event){
    event.preventDefault();
    $('.results').show();

    const birthdate = $('#birthdate').val();
    const gender = $('input:radio[name=gender]:checked').val();
    let calc = new Calc();

    const earthAge = calc.yearAge(birthdate);
    const secondsAge = calc.dateToSeconds(birthdate);
    const lifeExpectancy = calc.lifeExpectancy(gender);
    const marsAge = calc.marsAge(birthdate);
    const mercuryAge = calc.mercuryAge(birthdate);
    const venusAge = calc.venusAge(birthdate);
    const jupiterAge = calc.jupiterAge(birthdate);
    const yearsLeft = calc.yearsLeft(birthdate, gender);
    const yearsLeftMercury = calc.yearsLeftMercury(birthdate, gender);
    const yearsLeftMars = calc.yearsLeftMars(birthdate, gender);
    const yearsLeftJupiter = calc.yearsLeftJupiter(birthdate, gender);
    const yearsLeftVenus = calc.yearsLeftVenus(birthdate, gender);


    $('#results-earth').append("<li>" + "Your years on Earth in seconds = " + secondsAge + "</li>");
    $('#results-earth').append("<li>" + "Your age in Earth years = " + earthAge + "</li>");
    $('#results-earth').append("<li>" + "Your life expectancy on Earth in years = " + lifeExpectancy + "</li>");
    $('#results-earth').append("<li>" + yearsLeft + "</li>");
    $('#results-mars').append("<li>" + "Your age in Mars years = " + marsAge + "</li>");
    $('#results-mars').append("<li>" + yearsLeftMars + "</li>");
    $('#results-mercury').append("<li>" + "Your age in Mercury years = " + mercuryAge + "</li>");
    $('#results-mercury').append("<li>" + yearsLeftMercury + "</li>");
    $('#results-venus').append("<li>" + "Your age in Venus years = " + venusAge + "</li>");
    $('#results-venus').append("<li>" + yearsLeftVenus + "</li>");
    $('#results-jupiter').append("<li>" + "Your age in Jupiter years = " + jupiterAge + "</li>");
    $('#results-jupiter').append("<li>" + yearsLeftJupiter + "</li>");
  });

  $('#date-form').submit(function(event){
    event.preventDefault();
    $(".seconds").show();
    const startDate = $('#start-date').val();
    const endDate = $('#end-date').val();
    let calc = new Calc();
    const seconds = calc.secondsBetween(endDate, startDate);
    $('#seconds-results').text("There are " + seconds + " seconds between " + startDate + " and " + endDate);
  });


});
