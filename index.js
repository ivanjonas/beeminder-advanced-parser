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
  const parts = line.match(/"[^"]+"|[\w\^]+/g)
  let date
  console.log(parts)
  if (/^\^+$/.test(parts[0])) {
    const dateDiff = parts[0].length
    parts[0] = getDateXDaysAgo(dateDiff - 1)
  }

  // the first part may be a date or units
  // the second part may be units or comments

  return parts
}

function getDateXDaysAgo(daysAgo) {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  return date.getDate()
}

module.exports = transform
