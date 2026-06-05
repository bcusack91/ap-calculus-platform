/**
 * Exit Quiz Question Pool — SAT Data & Statistics
 * 40 questions with randomized numeric generation.
 */

export interface ExitQuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  category: string
}

interface QuestionTemplate {
  id: string
  category: string
  generate: () => ExitQuizQuestion
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makeOptions(correct: number, spread: number = 2): { options: string[]; correctIndex: number } {
  const distractors = new Set<number>()
  while (distractors.size < 3) {
    const d = correct + randInt(-spread * 3, spread * 3)
    if (d !== correct) distractors.add(d)
  }
  const all = [correct, ...distractors]
  const shuffled = shuffle(all)
  return { options: shuffled.map(String), correctIndex: shuffled.indexOf(correct) }
}

function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  const unique = others.filter(o => o !== correct).slice(0, 3)
  while (unique.length < 3) unique.push('None of the above')
  const all = shuffle([correct, ...unique])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  {
    id: 'ds-q1',
    category: 'Mean Median Mode',

    generate() {
      const vals = Array.from({length: 5}, () => randInt(10, 50))
      const sum = vals.reduce((a,b) => a+b, 0)
      const mean = Math.round(sum / vals.length * 10) / 10
      const { options, correctIndex } = makeOptions(Math.round(mean), 5)
      return { id: this.id, category: this.category, question: `Find the mean of: ${vals.join(', ')}.`, options, correctIndex, explanation: `Mean = (${vals.join(' + ')}) / ${vals.length} = ${sum}/${vals.length} = ${mean}.` }
    }
  },
  {
    id: 'ds-q2',
    category: 'Mean Median Mode',

    generate() {
      const vals = Array.from({length: 7}, () => randInt(5, 30)).sort((a,b) => a-b)
      const median = vals[3]
      const { options, correctIndex } = makeOptions(median, 4)
      return { id: this.id, category: this.category, question: `Find the median of: ${vals.join(', ')}.`, options, correctIndex, explanation: `Sorted: ${vals.join(', ')}. Middle value (4th of 7) = ${median}.` }
    }
  },
  {
    id: 'ds-q3',
    category: 'Mean Median Mode',

    generate() {
      const mode = randInt(5, 20)
      const vals = [mode, mode, mode, randInt(1, 30), randInt(1, 30), randInt(1, 30)]
      const correct = `${mode}`
      return { id: this.id, category: this.category, question: `Find the mode of: ${shuffle(vals).join(', ')}.`, ...makeStringOptions(correct, [`${mode + 1}`, `${mode - 2}`, 'No mode']), explanation: `${mode} appears 3 times (most frequent), so the mode is ${mode}.` }
    }
  },
  {
    id: 'ds-q4',
    category: 'Mean Median Mode',

    generate() {
      const vals = Array.from({length: 5}, () => randInt(10, 40))
      const sorted = [...vals].sort((a,b) => a-b)
      const range = sorted[sorted.length - 1] - sorted[0]
      const { options, correctIndex } = makeOptions(range, 5)
      return { id: this.id, category: this.category, question: `Find the range of: ${vals.join(', ')}.`, options, correctIndex, explanation: `Range = max - min = ${sorted[sorted.length-1]} - ${sorted[0]} = ${range}.` }
    }
  },
  {
    id: 'ds-q5',
    category: 'Mean Median Mode',

    generate() {
      const n = randInt(4, 6); const target = randInt(75, 95)
      const scores = Array.from({length: n - 1}, () => randInt(60, 100))
      const sum = scores.reduce((a,b) => a+b, 0)
      const needed = target * n - sum
      const { options, correctIndex } = makeOptions(needed, 8)
      return { id: this.id, category: this.category, question: `Current scores: ${scores.join(', ')}. What score is needed on the next test for a ${target} average?`, options, correctIndex, explanation: `Need total = ${target} \× ${n} = ${target*n}. Have ${sum}. Need ${needed}.` }
    }
  },
  {
    id: 'ds-q6',
    category: 'Mean Median Mode',

    generate() {
      const vals = Array.from({length: 6}, () => randInt(5, 25)).sort((a,b) => a-b)
      const median = (vals[2] + vals[3]) / 2
      const correct = `${median}`
      return { id: this.id, category: this.category, question: `Find the median of this even-count set: ${vals.join(', ')}.`, ...makeStringOptions(correct, [`${vals[2]}`, `${vals[3]}`, `${vals[2] - 1}`]), explanation: `For even count, median = average of two middle values = (${vals[2]} + ${vals[3]})/2 = ${median}.` }
    }
  },
  {
    id: 'ds-q7',
    category: 'Mean Median Mode',

    generate() {
      const vals = [10, 20, 30, 40, 50, 200]
      const correct = 'The median is more resistant to outliers than the mean'
      return { id: this.id, category: this.category, question: `Data: ${vals.join(', ')}. The mean is 58.3 but the median is 35. Why the big difference?`, ...makeStringOptions(correct, ['The data set is too small', 'Mean and median always differ', 'The mode affects both']), explanation: 'The outlier (200) pulls the mean up significantly but barely affects the median.' }
    }
  },
  {
    id: 'ds-q8',
    category: 'Mean Median Mode',

    generate() {
      const n = randInt(20, 50); const mean = randInt(70, 90)
      const total = n * mean
      const { options, correctIndex } = makeOptions(total, 100)
      return { id: this.id, category: this.category, question: `A class of ${n} students has a test mean of ${mean}. What is the total of all scores?`, options, correctIndex, explanation: `Total = n \× mean = ${n} \× ${mean} = ${total}.` }
    }
  },
  {
    id: 'ds-q9',
    category: 'Standard Deviation',

    generate() {
      const correct = 'It measures the average distance of data points from the mean'
      return { id: this.id, category: this.category, question: 'What does standard deviation measure?', ...makeStringOptions(correct, ['The maximum value in the data', 'The most frequent value', 'The range of the data']), explanation: 'Standard deviation quantifies how spread out data is from the mean.' }
    }
  },
  {
    id: 'ds-q10',
    category: 'Standard Deviation',

    generate() {
      const correct = 'Set B (values more spread out from mean)'
      return { id: this.id, category: this.category, question: 'Set A: {48, 50, 52}. Set B: {30, 50, 70}. Which has greater standard deviation?', ...makeStringOptions(correct, ['Set A', 'They are equal', 'Cannot determine']), explanation: 'Set B has values farther from the mean (50), so its standard deviation is larger.' }
    }
  },
  {
    id: 'ds-q11',
    category: 'Standard Deviation',

    generate() {
      const sd = randInt(3, 8); const mean = randInt(60, 90)
      const lo = mean - 2 * sd; const hi = mean + 2 * sd
      const correct = `${lo} to ${hi}`
      return { id: this.id, category: this.category, question: `Mean = ${mean}, SD = ${sd}. Using the 95% rule, what range contains most data?`, ...makeStringOptions(correct, [`${mean - sd} to ${mean + sd}`, `${mean} to ${hi}`, `${lo - sd} to ${hi + sd}`]), explanation: '~95% of data falls within 2 SDs: mean \± 2(SD) = ' + lo + ' to ' + hi + '.' }
    }
  },
  {
    id: 'ds-q12',
    category: 'Standard Deviation',

    generate() {
      const correct = 'Adding the same constant to every value does NOT change the standard deviation'
      return { id: this.id, category: this.category, question: 'If 10 is added to every data point, what happens to the standard deviation?', ...makeStringOptions(correct, ['It increases by 10', 'It doubles', 'It becomes 0']), explanation: 'Adding a constant shifts all values equally, so spread (standard deviation) stays the same.' }
    }
  },
  {
    id: 'ds-q13',
    category: 'Standard Deviation',

    generate() {
      const k = randInt(2, 5)
      const correct = `The standard deviation is multiplied by ${k}`
      return { id: this.id, category: this.category, question: `If every data value is multiplied by ${k}, what happens to the standard deviation?`, ...makeStringOptions(correct, ['It stays the same', `It is multiplied by ${k*k}`, 'It becomes 0']), explanation: `Multiplying all values by ${k} multiplies the SD by |${k}| = ${k}.` }
    }
  },
  {
    id: 'ds-q14',
    category: 'Standard Deviation',

    generate() {
      const correct = 'A z-score tells how many standard deviations a value is from the mean'
      return { id: this.id, category: this.category, question: 'What does a z-score of 2.0 indicate?', ...makeStringOptions(correct, ['The value is twice the mean', 'The value equals 2', 'The data has 2 modes']), explanation: 'z = (x - mean)/SD. A z-score of 2.0 means the value is 2 standard deviations above the mean.' }
    }
  },
  {
    id: 'ds-q15',
    category: 'Standard Deviation',

    generate() {
      const mean = randInt(60, 80); const sd = randInt(5, 10); const x = mean + sd * 2
      const z = 2
      const { options, correctIndex } = makeOptions(z, 1)
      return { id: this.id, category: this.category, question: `Mean = ${mean}, SD = ${sd}. Find the z-score for x = ${x}.`, options, correctIndex, explanation: `z = (${x} - ${mean}) / ${sd} = ${x - mean} / ${sd} = ${z}.` }
    }
  },
  {
    id: 'ds-q16',
    category: 'Standard Deviation',

    generate() {
      const correct = '68% within 1 SD, 95% within 2 SDs, 99.7% within 3 SDs'
      return { id: this.id, category: this.category, question: 'State the empirical rule (68-95-99.7 rule) for normal distributions.', ...makeStringOptions(correct, ['50-75-100 rule', '70-90-100 rule', '60-80-95 rule']), explanation: 'The empirical rule: ~68% within mean \± 1 SD, ~95% within \± 2 SD, ~99.7% within \± 3 SD.' }
    }
  },
  {
    id: 'ds-q17',
    category: 'Probability',

    generate() {
      const fav = randInt(2, 10); const total = fav + randInt(5, 20)
      const pNum = fav; const pDen = total
      const correct = `${pNum}/${pDen}`
      return { id: this.id, category: this.category, question: `A bag has ${fav} red and ${total - fav} blue marbles. P(red) = ?`, ...makeStringOptions(correct, [`${total - fav}/${total}`, `${fav}/${fav}`, `1/${total}`]), explanation: `P(red) = favorable/total = ${fav}/${total}.` }
    }
  },
  {
    id: 'ds-q18',
    category: 'Probability',

    generate() {
      const pA = randInt(10, 40); const pB = randInt(10, 40)
      const pBoth = randInt(5, Math.min(pA, pB))
      const pUnion = pA + pB - pBoth
      const { options, correctIndex } = makeOptions(pUnion, 10)
      return { id: this.id, category: this.category, question: `P(A) = ${pA}%, P(B) = ${pB}%, P(A and B) = ${pBoth}%. Find P(A or B).`, options, correctIndex, explanation: `P(A or B) = P(A) + P(B) - P(A and B) = ${pA} + ${pB} - ${pBoth} = ${pUnion}%.` }
    }
  },
  {
    id: 'ds-q19',
    category: 'Probability',

    generate() {
      const n = randInt(3, 6)
      const fact = [1, 1, 2, 6, 24, 120, 720][n]
      const { options, correctIndex } = makeOptions(fact, 30)
      return { id: this.id, category: this.category, question: `How many ways can ${n} books be arranged on a shelf?`, options, correctIndex, explanation: `${n}! = ${fact} arrangements.` }
    }
  },
  {
    id: 'ds-q20',
    category: 'Probability',

    generate() {
      const correct = 'Multiply individual probabilities (for independent events)'
      return { id: this.id, category: this.category, question: 'How do you find P(A and B) for two independent events?', ...makeStringOptions(correct, ['Add the probabilities', 'Subtract P(B) from P(A)', 'Divide P(A) by P(B)']), explanation: 'For independent events: P(A and B) = P(A) \× P(B).' }
    }
  },
  {
    id: 'ds-q21',
    category: 'Probability',

    generate() {
      const p = randInt(1, 5); const total = 6
      const comp = total - p
      const correct = `${comp}/${total}`
      return { id: this.id, category: this.category, question: `P(rolling a ${p} on a die) = 1/6. What is P(NOT rolling a ${p})?`, ...makeStringOptions(correct, [`1/${total}`, `${p}/${total}`, `1/2`]), explanation: `P(not A) = 1 - P(A) = 1 - 1/6 = ${comp}/${total}.` }
    }
  },
  {
    id: 'ds-q22',
    category: 'Probability',

    generate() {
      const n = randInt(5, 10); const r = randInt(2, 3)
      let comb = 1
      for (let i = 0; i < r; i++) comb = comb * (n - i) / (i + 1)
      comb = Math.round(comb)
      const { options, correctIndex } = makeOptions(comb, 10)
      return { id: this.id, category: this.category, question: `How many ways to choose ${r} items from ${n}? (combinations)`, options, correctIndex, explanation: `C(${n},${r}) = ${n}! / (${r}!(${n}-${r})!) = ${comb}.` }
    }
  },
  {
    id: 'ds-q23',
    category: 'Probability',

    generate() {
      const r = randInt(3, 8); const b = randInt(3, 8)
      const total = r + b
      const p1 = r; const p2 = r - 1; const den1 = total; const den2 = total - 1
      const correct = `(${p1}/${den1}) \× (${p2}/${den2})`
      return { id: this.id, category: this.category, question: `${r} red, ${b} blue marbles. P(2 red without replacement)?`, ...makeStringOptions(correct, [`(${p1}/${den1}) \× (${p1}/${den1})`, `${p1}/${den1} + ${p2}/${den2}`, `(${p1}/${den1})\²`]), explanation: 'Without replacement: P = (red/total) \× ((red-1)/(total-1)).' }
    }
  },
  {
    id: 'ds-q24',
    category: 'Probability',

    generate() {
      const correct = 'Expected value = sum of (outcome \× probability) for all outcomes'
      return { id: this.id, category: this.category, question: 'How do you calculate expected value?', ...makeStringOptions(correct, ['Take the mode of probabilities', 'Add all outcomes together', 'Multiply the largest outcome by its probability']), explanation: 'E(X) = \Σ[x \× P(x)] — the weighted average of all possible outcomes.' }
    }
  },
  {
    id: 'ds-q25',
    category: 'Scatterplots',

    generate() {
      const correct = 'Positive linear — as x increases, y also increases'
      return { id: this.id, category: this.category, question: 'A scatterplot shows points rising from left to right in a roughly straight pattern. Describe the association.', ...makeStringOptions(correct, ['Negative linear', 'No association', 'Quadratic']), explanation: 'Points rising left to right indicate a positive linear association.' }
    }
  },
  {
    id: 'ds-q26',
    category: 'Scatterplots',

    generate() {
      const m = randInt(2, 8); const b = randInt(-10, 10)
      const x = randInt(5, 15)
      const y = m * x + b
      const { options, correctIndex } = makeOptions(y, 10)
      return { id: this.id, category: this.category, question: `Line of best fit: y = ${m}x + ${b}. Predict y when x = ${x}.`, options, correctIndex, explanation: `y = ${m}(${x}) + ${b} = ${m*x} + ${b} = ${y}.` }
    }
  },
  {
    id: 'ds-q27',
    category: 'Scatterplots',

    generate() {
      const r = randInt(85, 98) / 100
      const correct = 'Strong positive correlation'
      return { id: this.id, category: this.category, question: `r = ${r}. Describe the correlation.`, ...makeStringOptions(correct, ['Weak positive', 'Strong negative', 'No correlation']), explanation: `r close to 1 (${r}) indicates strong positive correlation.` }
    }
  },
  {
    id: 'ds-q28',
    category: 'Scatterplots',

    generate() {
      const correct = 'r\² tells the percentage of variation in y explained by x'
      return { id: this.id, category: this.category, question: 'What does the coefficient of determination (r\²) represent?', ...makeStringOptions(correct, ['The slope of the regression line', 'The y-intercept', 'The number of data points']), explanation: 'r\² indicates what fraction of the dependent variable variation is explained by the model.' }
    }
  },
  {
    id: 'ds-q29',
    category: 'Scatterplots',

    generate() {
      const actual = randInt(40, 80); const predicted = randInt(35, 75)
      const residual = actual - predicted
      const { options, correctIndex } = makeOptions(residual, 8)
      return { id: this.id, category: this.category, question: `Actual y = ${actual}, predicted y = ${predicted}. Find the residual.`, options, correctIndex, explanation: `Residual = actual - predicted = ${actual} - ${predicted} = ${residual}.` }
    }
  },
  {
    id: 'ds-q30',
    category: 'Scatterplots',

    generate() {
      const correct = 'It is an outlier — far from the general pattern'
      return { id: this.id, category: this.category, question: 'A point in a scatterplot is very far from the line of best fit. What is this point called?', ...makeStringOptions(correct, ['The y-intercept', 'The slope', 'A normal point']), explanation: 'Points far from the regression line are outliers or influential points.' }
    }
  },
  {
    id: 'ds-q31',
    category: 'Scatterplots',

    generate() {
      const correct = 'Extrapolation — predicting beyond the range of the data — is unreliable'
      return { id: this.id, category: this.category, question: 'Why is it risky to use a regression line to predict y for x-values far outside the data range?', ...makeStringOptions(correct, ['Because the line is always wrong', 'Because r = 0 outside the data', 'Because the slope changes sign']), explanation: 'Extrapolation assumes the linear pattern continues, which may not be true beyond the observed data range.' }
    }
  },
  {
    id: 'ds-q32',
    category: 'Scatterplots',

    generate() {
      const correct = 'The slope represents the predicted change in y for each 1-unit increase in x'
      return { id: this.id, category: this.category, question: 'In a regression equation y = mx + b, what does the slope m represent in context?', ...makeStringOptions(correct, ['The starting value of y', 'The total of all y-values', 'The average of x and y']), explanation: 'The slope is the rate of change — for every 1-unit increase in x, y changes by m units on average.' }
    }
  },
  {
    id: 'ds-q33',
    category: 'Two-way Tables',

    generate() {
      const a = randInt(20, 50); const b = randInt(10, 40); const c = randInt(15, 45); const d = randInt(10, 35)
      const total = a + b + c + d
      const correct = `${a}/${total}`
      return { id: this.id, category: this.category, question: `What is P(Group A and Yes)?\n\n|  | Yes | No |\n| --- | --- | --- |\n| Group A | ${a} | ${b} |\n| Group B | ${c} | ${d} |`, ...makeStringOptions(correct, [`${a + c}/${total}`, `${a}/${a + b}`, `${a}/${a + c}`]), explanation: `Joint probability: ${a} out of total ${total} = ${a}/${total}.` }
    }
  },
  {
    id: 'ds-q34',
    category: 'Two-way Tables',

    generate() {
      const yes = randInt(30, 60); const no = randInt(20, 50)
      const rowTotal = yes + no
      const correct = `${yes}/${rowTotal}`
      return { id: this.id, category: this.category, question: `In a row: Yes = ${yes}, No = ${no}. Find the conditional probability P(Yes | this row).`, ...makeStringOptions(correct, [`${no}/${rowTotal}`, `${yes}/${yes + no + randInt(10,30)}`, `1/2`]), explanation: `Conditional P = ${yes} / row total ${rowTotal} = ${yes}/${rowTotal}.` }
    }
  },
  {
    id: 'ds-q35',
    category: 'Two-way Tables',

    generate() {
      const a = randInt(15, 40); const b = randInt(15, 40); const c = randInt(15, 40); const d = randInt(15, 40)
      const colTotal = a + c
      const correct = `Column total for the first attribute = ${colTotal}`
      return { id: this.id, category: this.category, question: `Top-left=${a}, bottom-left=${c}, top-right=${b}, bottom-right=${d}. What is the marginal total for the first column?`, ...makeStringOptions(correct, [`${a + b}`, `${c + d}`, `${a + b + c + d}`]), explanation: `Marginal total = sum of column: ${a} + ${c} = ${colTotal}.` }
    }
  },
  {
    id: 'ds-q36',
    category: 'Two-way Tables',

    generate() {
      const correct = 'Compare conditional probabilities across rows/columns — if equal, variables are independent'
      return { id: this.id, category: this.category, question: 'How do you determine if two variables in a two-way table are independent?', ...makeStringOptions(correct, ['Check if the total is even', 'See if all cells are equal', 'Add row and column totals']), explanation: 'If P(A|B) = P(A), the variables are independent. Compare conditional probabilities across groups.' }
    }
  },
  {
    id: 'ds-q37',
    category: 'Two-way Tables',

    generate() {
      const m_y = randInt(30, 50); const m_n = randInt(20, 40)
      const f_y = randInt(25, 45); const f_n = randInt(25, 45)
      const totalYes = m_y + f_y
      const grandTotal = m_y + m_n + f_y + f_n
      const correct = `${totalYes}/${grandTotal}`
      return { id: this.id, category: this.category, question: `Males: Yes=${m_y}, No=${m_n}. Females: Yes=${f_y}, No=${f_n}. P(Yes) overall = ?`, ...makeStringOptions(correct, [`${m_y}/${grandTotal}`, `${f_y}/${grandTotal}`, `${m_y + m_n}/${grandTotal}`]), explanation: `P(Yes) = total Yes / grand total = ${totalYes}/${grandTotal}.` }
    }
  },
  {
    id: 'ds-q38',
    category: 'Two-way Tables',

    generate() {
      const correct = 'The relative frequency of each cell compared to its row or column total'
      return { id: this.id, category: this.category, question: 'What is a relative frequency in a two-way table?', ...makeStringOptions(correct, ['The largest number in the table', 'The sum of all cells', 'The difference between rows']), explanation: 'Relative frequency = cell count / total (row, column, or grand total), expressed as a fraction or percentage.' }
    }
  },
  {
    id: 'ds-q39',
    category: 'Two-way Tables',

    generate() {
      const a = randInt(10, 30); const b = randInt(10, 30); const c = randInt(10, 30); const d = randInt(10, 30)
      const rowA = a + b; const rowB = c + d
      const pAgivenRow1 = Math.round(a / rowA * 100)
      const pAgivenRow2 = Math.round(c / rowB * 100)
      const isAssoc = Math.abs(pAgivenRow1 - pAgivenRow2) > 10
      const correct = isAssoc ? 'Yes, conditional probabilities differ significantly' : 'Possibly not — conditional probabilities are similar'
      return { id: this.id, category: this.category, question: `Row 1: ${a}, ${b}. Row 2: ${c}, ${d}. P(col1|row1) = ${pAgivenRow1}%, P(col1|row2) = ${pAgivenRow2}%. Is there an association?`, ...makeStringOptions(correct, ['No difference at all', 'Impossible to compare', 'Only with a chi-square test']), explanation: `Difference of ${Math.abs(pAgivenRow1 - pAgivenRow2)} percentage points ${isAssoc ? 'suggests' : 'may not strongly suggest'} an association.` }
    }
  },
  {
    id: 'ds-q40',
    category: 'Two-way Tables',

    generate() {
      const total = randInt(100, 200); const cellCount = randInt(15, 45)
      const pct = Math.round(cellCount / total * 100)
      const { options, correctIndex } = makeOptions(pct, 8)
      return { id: this.id, category: this.category, question: `In a two-way table with grand total ${total}, a cell has count ${cellCount}. What percentage is this?`, options, correctIndex, explanation: `${cellCount}/${total} \× 100 = ${pct}%.` }
    }
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of questionPool) {
    if (!byCategory[q.category]) byCategory[q.category] = []
    byCategory[q.category].push(q)
  }
  const selected: QuestionTemplate[] = []
  const usedIds = new Set<string>()
  for (const cat of shuffle(Object.keys(byCategory))) {
    if (selected.length >= count) break
    const pool = byCategory[cat]
    const q = pool[Math.floor(Math.random() * pool.length)]
    if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id) }
  }
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  for (const q of shuffle(remaining)) {
    if (selected.length >= count) break
    selected.push(q)
    usedIds.add(q.id)
  }
  return shuffle(selected).map(t => t.generate())
}
