const { expect } = require('chai');
const Parser = require('../src/parser').default;

describe('parameter parsing test', () => {
  const parser = new Parser();
  it('should parse MySQL named parameters', () => {
    const {
      namedParameters,
    } = parser.parse('SELECT * FROM t where t.a > :my_param', {
      database: 'mysql',
    });
    expect(namedParameters).to.eql(['my_param']);
  });
  it('should parse PostgreSQL named parameters', () => {
    const {
      namedParameters,
    } = parser.parse('SELECT * FROM t where t.a > :my_param', {
      database: 'postgresql',
    });
    expect(namedParameters).to.eql(['my_param']);
  });
});
