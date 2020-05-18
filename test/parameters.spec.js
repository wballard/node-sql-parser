const { expect } = require('chai');
const Parser = require('../src/parser').default;

describe('parameter parsing test', () => {
  const parser = new Parser();
  it('should parse MySQL named parameters', () => {
    const {
      parameterList,
    } = parser.parse('SELECT * FROM t where t.a > :my_param', {
      database: 'mysql',
    });
    expect(parameterList).to.eql([
      {
        type: 'param',
        value: 'my_param',
        offset: 28,
      },
    ]);
  });
  it('should parse PostgreSQL named parameters', () => {
    const {
      parameterList,
    } = parser.parse('SELECT * FROM t where t.a > :my_param', {
      database: 'postgresql',
    });
    expect(parameterList).to.eql([
      {
        type: 'param',
        value: 'my_param',
        offset: 28,
      },
    ]);
  });
});
