import { expect } from 'chai';
import 'babel-polyfill';

const transform = (str) => {
  return require('babel-core').transform(str, {
    plugins: ['./src']
  }).code;
};

describe('Plugin', () => {
  describe('CSS', () => {
    it('Should prefix', () => {
      process.env.NODE_ENV = 'development';
      const code = 'const example = css`.babel { display: flex }`;';
      expect(transform(code)).to.equal('const example = css`.babel { display: -webkit-box; display: -ms-flexbox; display: flex }`;');
    });
    it('Should prefix and minify', () => {
      process.env.NODE_ENV = 'production';
      const code = 'const example = css`.babel { display: flex }`;';
      expect(transform(code)).to.equal('const example = css`.babel{display:-webkit-box;display:-ms-flexbox;display:flex}`;');
    });
  });
});
