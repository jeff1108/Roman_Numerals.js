describe('romanNumerals', function(){

  describe('numbers 1 to 9', function() {
    it('return 1 as I', function() {
      expect(romanNumerals(1)).toEqual('I');
    });

    it('return 3 as III', function() {
      expect(romanNumerals(3)).toEqual('III');
    })

    it('return 4 as IV', function() {
      expect(romanNumerals(4)).toEqual('IV');
    })

    it('return 6 as VI', function() {
      expect(romanNumerals(6)).toEqual('VI');
    })

    it('return 9 as IX', function() {
      expect(romanNumerals(9)).toEqual('IX');
    })
  });
});
