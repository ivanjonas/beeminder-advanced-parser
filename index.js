function transform(input) {
  const parts = input
    .split(/[\n\r]/)
    .map((s) => s.trim())
    .filter((s) => s.length)
    .map((s) => standardizeLine(s))
  return parts.join('\n')
}

function standardizeLine(line) {
  return getParts(line).join(' ')
}

function getParts(line) {
  const parts = line.match(/"[^"]+"|\w+/g)
  return parts
}

module.exports = transform
