const tape = require('tape')
const transform = require('./index.js')

tape.test('existing format', function(t) {
  t.equal(transform('10 10'), '10 10', 'shorthand')
  t.equal(transform('10 10 "hello"'), '10 10 "hello"', 'one-word comment')
  t.equal(transform('10 10 "multiple words in quotes"'), '10 10 "multiple words in quotes"', 'multi-word comment')
  
  // all of the above in a single multiline
  const multiline = '10 10\n10 10 "oneword"\n10 10 "multiple words"'
  t.equal(transform(multiline), multiline, 'multi-line entry')
  t.end()
})
