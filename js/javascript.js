'use strict';

alert('Thanks for reading my stories, please answer four quesions at the end.');
var credit = 0;
function myFunction1() {
    var place = prompt('Where did us visited during my first propeller fly?');
    var newplace = place.toLowerCase();
    if(place === null){
        return;
    }
    while (newplace !== 'downtown sf') {
        alert('You are wrong, answer this question again or click cancel to quit!');
        place = prompt('Where did us visited during my first propeller fly?');
        newplace = place.toLowerCase();
        if(place === null){
            return;
        }
    }
    alert('You are corrcet! Get one credit!');
    credit++;
}

function myFunction2() {
    var age = prompt('How old is Stacey now?');
    if(age === null){
        return;
    }
    while (age !== '2') {
        alert('You are wrong, answer this question again or click cancel to quit!');
        age = prompt('How old is Stacey now?');
        if(age === null){
            return;
        }
    }
    alert('You are corrcet! Get one credit!');
    credit++;
}

function myFunction3() {
    var specialty= prompt('What is Jelissa good at?');
    var newSpecialty = specialty.toLowerCase();
    if(specialty === null){
        return;
    }
    while (newSpecialty !== 'drawing') {
        alert('You are wrong, answer this question again or click cancel to quit!');
        specialty= prompt('What is Jelissa good at?');
        newSpecialty = specialty.toLowerCase();
        if(specialty === null){
            return;
        }
    }
    alert('You are corrcet! Get one credit!');
    credit++;
}

function myFunction4() {
    var age= prompt('When Jelissa is 25 years old, how old is Stacy?');
    if(age === null){
        return;
    }
    while (age !== '18') {
        alert('You are wrong, answer this question again or click cancel to quit!');
        age= prompt('When Jelissa is 25 years old, how old is Stacy?');
        if(age === null){
            return;
        }
    }
    alert('You are corrcet! Get one credit!');
    credit++;
}

function myFunction5(){
    var userName = prompt('What is your name?');
    if(userName === null){
        return;
    }
    alert('Hi ' + userName +','+ ' congratulaitons to you! You got ' + credit + ' credits.');
    credit = 0;
}

function myFunction6(){
    alert('This is a guessing number game, please input a number which you think is my favorite number.');
    var Mynumber = prompt('Input a number.');
}


