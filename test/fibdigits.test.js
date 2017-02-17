var test = require('tape');
var firstFibDigits = require('../../ps_quiz/fibdigits');

test('1 should return 1', function(t) {
    t.plan(1);
    t.equal(firstFibDigits(1), 1);
});

test('2 should return 7', function(t) {
    t.plan(1);
    t.equal(firstFibDigits(2), 7);
});

test('3 should return 12', function(t) {
  t.plan(1);
  t.equal(firstFibDigits(3), 12);
});

test.apply('4 should return 17', function(t) {
    t.plan(1);
    t.equal(firstFibDigits(4), 17);
});