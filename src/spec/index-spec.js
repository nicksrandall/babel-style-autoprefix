import { expect } from 'chai';

const transform = (str) => {
  return require('babel-core').transform(str, {
    plugins: ['./src']
  }).code;
};

describe('Plugin', () => {
  describe('CSS', () => {
    it('Should prefix', () => {
      const code = 'const example = prefix`.babel { display: flex }`;';
      expect(transform(code)).to.equal('const example = prefix`.babel { display: -webkit-box; display: -ms-flexbox; display: flex }`;');
    });
  });
});
