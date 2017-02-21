var Bird = require('../bird');
var assert = require('assert');

describe('Bird', function() {
  var bird;

  beforeEach(function() {
    bird = new Bird({
      specie: 'Barn Owl',
      family: ['Raptor']
    });
  });

  it('should have specie of Barn Owl', function() {
    assert.equal(bird.specie, 'Barn Owl');
  });
});
