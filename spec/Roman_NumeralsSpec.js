describe('number_to_word', function(){
  it('throw error when number is lower than 1 or larger than 1000', function() {
    expect(function() {number_to_word(0)}).toThrow(new Error('number needs to be 1 to 1000'))
  })

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

  describe('number 100-999', function() {
    it('return 100 as C', function() {
      expect(number_to_word(100)).toEqual('C')
    });

    it('return 101 as CI', function() {
      expect(number_to_word(101)).toEqual('CI')
    });

    it('return 209 as CCIX', function() {
      expect(number_to_word(209)).toEqual('CCIX')
    });

    it('return 555 as DLV', function() {
      expect(number_to_word(555)).toEqual('DLV')
    });

    it('return 999 as CMXCIX', function() {
      expect(number_to_word(999)).toEqual('CMXCIX')
    });
  });

  describe('return 1000', function() {
    it('return 1000 as M', function() {
      expect(number_to_word(1000)).toEqual('M')
    });
  });
});
