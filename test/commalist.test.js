var test = require('tape');
var commaList = require('../../ps_quiz/commalist.js');

test('no items in list should return with ""', function(t) {
    t.plan(1);
    t.equal(commaList([]), "");
})

test('one item should return that item as string', function(t) {
    t.plan(1);
    t.equal(commaList(['one']), 'one');
})

test('two items in list should return with "and"', function(t) {
    t.plan(1);
    t.equal(commaList(['one','two']), "one and two");
})

test('three items in list should return with comma sep sentence', function(t) {
    t.plan(1);
    t.equal(commaList(['one', 'two', 'three']), 'one, two, and three', 'one, two, and three');
})