const Spool = require('../../dist/common').Spool

module.exports = class Testspool extends Spool {
  constructor (app) {
    super(app, {
      pkg: {
        name: 'spool-test'
      },
      config: {
        test: {
          val: 0,
          otherval: 1
        }
      }
    })
  }
}
