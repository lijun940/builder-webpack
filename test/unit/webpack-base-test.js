const assert = require('assert')

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js')
  
  console.log(baseConfig,'测试1')
  it('entry', () => {
    assert.equal(baseConfig.entry.index, 'D:/worklab/practice/深入webpack/webpack/builder-webpack/test/smoke/template/src/index/index.js')
    assert.equal(baseConfig.entry.search, 'D:/worklab/practice/深入webpack/webpack/builder-webpack/test/smoke/template/src/search/index.js')
  })
})