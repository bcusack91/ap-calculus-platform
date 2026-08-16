import { renderRichText } from '../src/lib/render-rich-text'
const cases: [string, 'math' | 'literal'][] = [
  ['What is the mode of: $6, 17, 25, 6, 6, 9$?', 'math'],          // the reported bug
  ['Find the mode of: $12, 15, 15, 20$.', 'math'],                  // same class
  ['Find the median of $1, 3.5, 7$', 'math'],                       // decimals in list
  ['You pay $3, $7, and $12 for three tickets', 'literal'],         // currency list
  ['Tickets cost $5, $10 each day', 'literal'],                     // currency pair
  ['You pay $5 to play and win $10', 'literal'],                    // classic currency
  ['It costs $2 and a notebook costs $5', 'literal'],               // classic currency
  ['Solve $3x+2=11$', 'math'],
  ['The value is $100$', 'math'],
  ['Simplify $2 + 3$', 'math'],
]
let fail = 0
for (const [input, want] of cases) {
  const out = renderRichText(input)
  // Math path strips the $ delimiters (rendering or fallback); literal keeps them.
  const got = out.includes('$') ? 'literal' : 'math'
  const ok = got === want
  if (!ok) fail++
  console.log(`${ok ? '✓' : '✗ FAIL'} [want ${want}, got ${got}] ${input}`)
}
process.exit(fail ? 1 : 0)
