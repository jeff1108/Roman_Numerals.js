describe('number_to_word', function(){

  describe('numbers 1 to 9', function() {
    it('return 1 as I', function() {
      expect(number_to_word(1)).toEqual('I');
    });

    it('return 3 as III', function() {
      expect(number_to_word(3)).toEqual('III');
    })

    it('return 4 as IV', function() {
      expect(number_to_word(4)).toEqual('IV');
    })

    it('return 6 as VI', function() {
      expect(number_to_word(6)).toEqual('VI');
    })

    it('return 9 as IX', function() {
      expect(number_to_word(9)).toEqual('IX');
    })
  });

  describe('number 10-99', function() {
    it('return 10 as X', function() {
      expect(number_to_word(10)).toEqual('X')
    });

    it('return 25 as XXV', function() {
      expect(number_to_word(25)).toEqual('XXV')
    });

    it('return 39 as XXIX', function() {
      expect(number_to_word(39)).toEqual('XXXIX')
    });

    it('return 50 as L', function() {
      expect(number_to_word(50)).toEqual('L')
    });

    it('return 99 as L', function() {
      expect(number_to_word(99)).toEqual('XCIX')
    });
  });
});
