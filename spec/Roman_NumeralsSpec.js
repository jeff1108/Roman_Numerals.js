describe('romanNumerals', function(){
  it('return 1 as I', function() {
    expect(romanNumerals(1)).toEqual('I')
  });

  it('return 3 as III', function() {
    expect(romanNumerals(3)).toEqual('III')
  })
});
