(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calc = exports.Calc = function () {
  function Calc() {
    _classCallCheck(this, Calc);
  }

  _createClass(Calc, [{
    key: "yearsToSeconds",
    value: function yearsToSeconds(years) {
      return years * 31540000;
    }
  }, {
    key: "daysToSeconds",
    value: function daysToSeconds(days) {
      return days * 86410;
    }
  }, {
    key: "ageToSeconds",
    value: function ageToSeconds(age) {
      return age * 31540000;
    }
  }, {
    key: "dateToSeconds",
    value: function dateToSeconds(date) {
      return this.yearAge(date) * 31540000;
    }
  }, {
    key: "yearAge",
    value: function yearAge(date) {
      var today = new Date();
      var birthdate = new Date(date);
      var age = new Date(today - birthdate).getFullYear() - 1970;
      return age;
    }
  }, {
    key: "marsAge",
    value: function marsAge(date) {
      return Math.round(100 * (this.yearAge(date) / 1.88)) / 100;
    }
  }, {
    key: "mercuryAge",
    value: function mercuryAge(date) {
      return Math.round(100 * (this.yearAge(date) / 0.24)) / 100;
    }
  }, {
    key: "venusAge",
    value: function venusAge(date) {
      return Math.round(100 * (this.yearAge(date) / 0.62)) / 100;
    }
  }, {
    key: "jupiterAge",
    value: function jupiterAge(date) {
      return Math.round(100 * (this.yearAge(date) / 11.86)) / 100;
    }
  }, {
    key: "lifeExpectancy",
    value: function lifeExpectancy(gender) {
      var averageLife = 100;
      if (gender == "male") {
        return averageLife -= 1;
      } else if (gender != "male") {
        return averageLife += 1;
      }
    }
  }, {
    key: "yearsLeft",
    value: function yearsLeft(date, gender) {
      var averageAge = this.lifeExpectancy(gender);
      var Age = this.yearAge(date);
      if (Age > averageAge) {
        var yearsPlus = Age - averageAge;
        return "You passed the life expectancy.";
      } else {
        var ageMinus = averageAge - Age;
        return "You will die in about " + ageMinus + " years.";
      }
    }
  }, {
    key: "yearsLeftMercury",
    value: function yearsLeftMercury(date, gender) {
      var earthAge = this.lifeExpectancy(gender);
      var mercuryExpectancy = earthAge / 0.24;
      var mercuryAge = this.lifeExpectancy(gender);
      var Age = this.mercuryAge(date);
      if (Age > mercuryAge) {
        var yearsPlus = Age - mercuryAge;
        return "You passed the life expectancy.";
      } else {
        var ageMinus = mercuryAge - Age;
        return "You will die in about " + ageMinus + " years.";
      }
    }
  }, {
    key: "yearsLeftMars",
    value: function yearsLeftMars(date, gender) {
      var earthAge = this.lifeExpectancy(gender);
      var marsExpectancy = earthAge / 1.88;
      var marsAge = this.lifeExpectancy(gender);
      var Age = this.marsAge(date);
      if (Age > marsAge) {
        var yearsPlus = Age - marsAge;
        return "You passed the life expectancy.";
      } else {
        var ageMinus = marsAge - Age;
        return "You will die in about " + ageMinus + " years.";
      }
    }
  }, {
    key: "yearsLeftVenus",
    value: function yearsLeftVenus(date, gender) {
      var earthAge = this.lifeExpectancy(gender);
      var venusExpectancy = earthAge / 0.62;
      var venusAge = this.lifeExpectancy(gender);
      var Age = this.venusAge(date);
      if (Age > venusAge) {
        var yearsPlus = Age - venusAge;
        return "You passed the life expectancy.";
      } else {
        var ageMinus = venusAge - Age;
        return "You will die in about " + ageMinus + " years.";
      }
    }
  }, {
    key: "yearsLeftJupiter",
    value: function yearsLeftJupiter(date, gender) {
      var earthAge = this.lifeExpectancy(gender);
      var jupiterExpectancy = earthAge / 1.88;
      var jupiterAge = this.lifeExpectancy(gender);
      var Age = this.jupiterAge(date);
      if (Age > jupiterAge) {
        var yearsPlus = Age - jupiterAge;
        return "You passed the life expectancy.";
      } else {
        var ageMinus = jupiterAge - Age;
        return "You will die in about " + ageMinus + " years.";
      }
    }
  }, {
    key: "secondsBetween",
    value: function secondsBetween(date1, date2) {
      var day1 = new Date(date1);
      var day2 = new Date(date2);
      return (new Date(day1) - new Date(day2)) / 1000;
    }
  }]);

  return Calc;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _Calc = require('./../js/Calc.js');

$(document).ready(function () {

  $('#user-form').submit(function (event) {
    event.preventDefault();
    $('.results').show();

    var birthdate = $('#birthdate').val();
    var gender = $('input:radio[name=gender]:checked').val();
    var calc = new _Calc.Calc();

    var earthAge = calc.yearAge(birthdate);
    var secondsAge = calc.dateToSeconds(birthdate);
    var lifeExpectancy = calc.lifeExpectancy(gender);
    var marsAge = calc.marsAge(birthdate);
    var mercuryAge = calc.mercuryAge(birthdate);
    var venusAge = calc.venusAge(birthdate);
    var jupiterAge = calc.jupiterAge(birthdate);
    var yearsLeft = calc.yearsLeft(birthdate, gender);
    var yearsLeftMercury = calc.yearsLeftMercury(birthdate, gender);
    var yearsLeftMars = calc.yearsLeftMars(birthdate, gender);
    var yearsLeftJupiter = calc.yearsLeftJupiter(birthdate, gender);
    var yearsLeftVenus = calc.yearsLeftVenus(birthdate, gender);

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

  $('#date-form').submit(function (event) {
    event.preventDefault();
    $(".seconds").show();
    var startDate = $('#start-date').val();
    var endDate = $('#end-date').val();
    var calc = new _Calc.Calc();
    var seconds = calc.secondsBetween(endDate, startDate);
    $('#seconds-results').text("There are " + seconds + " seconds between " + startDate + " and " + endDate);
  });
});

},{"./../js/Calc.js":1}]},{},[2]);
