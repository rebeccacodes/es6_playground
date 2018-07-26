// import elementToBody from './add_to_dom';
// import $ from 'jquery';

// elementToBody('h1', 'something different');

// elementToBody('p', 'test test test test test test test');

// $('body').append('<h1>i came from jquery</h1>');

import {
    Person,
    SuperPerson
} from './person';

const bob = new Person('Bob');

const superSara = new SuperPerson('Sara', 'pow');

console.log(bob.speak('My name is Bob'));

console.log(superSara.speak('My name is super Sara'));

superSara.saySuperpower();