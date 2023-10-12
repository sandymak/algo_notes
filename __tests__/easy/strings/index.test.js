const { semordnilap } = require('../../../easy/strings/semordnilap');

xdescribe('Semordnilap', () => {
  it('Should get a list of palidromes', () => {
    const words = ['abc', 'poop', 'like', 'poop', 'cbs', 'cba'];
    const expectedPairs = [['poop', 'poop'], ['abc', 'cba'],];
    const actualPairs = semordnilap(words);

    console.log('Palidromes | Actual Pairs = ', actualPairs)
    expect(actualPairs).toStrictEqual(expectedPairs)

  })
})