const chai = require('chai');
const arrayToString = require('../dist').default;
const expect = chai.expect;

describe('Trendy array to fancy string async', () => {
  it('runs the function asynchronously', () => {
    console.log('Running arrayToString');
    arrayToString([1, 2, 3, 4, 5, 6, 7, 8])
      .catch(error => done(error))
      .then(res => {
        console.log('Result', res);
        expect(res).to.eventually.equal('1-8');
      });

    console.log('Running arrayToString');
    arrayToString([1, 3, 4, 5, 6, 7, 8])
      .catch(error => done(error))
      .then(res => {
        console.log('Result', res);
        expect(res).to.eventually.equal('1-8');
      });

    console.log('Running arrayToString');
    arrayToString([1, 3, 4, 5, 6, 7, 8, 10, 11, 12])
      .catch(error => done(error))
      .then(res => {
        console.log('Result', res);
        expect(res).to.eventually.equal('1,3-8,10-12');
      });
  })
});
