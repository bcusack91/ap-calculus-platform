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
  difficulty?: 'easy' | 'medium' | 'hard'
}

interface QuestionTemplate {
  id: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
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

function distinctVals(vals: number[]): boolean {
  return new Set(vals).size === vals.length
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
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
  const fillers = ['None of the above', 'Cannot be determined', 'None of these']
  for (const f of fillers) { if (unique.length >= 3) break; if (f !== correct && !unique.includes(f)) unique.push(f) }
  const all = shuffle([correct, ...unique])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  {
    id: 'ds-q1',
    category: 'Mean Median Mode',
    difficulty: 'easy',
    generate() {
      const vals = Array.from({ length: 4 }, () => randInt(10, 50))
      let v5 = randInt(10, 50)
      const r = (vals.reduce((a, b) => a + b, 0) + v5) % 5
      v5 -= r
      if (v5 < 10) v5 += 5
      vals.push(v5)
      const sum = vals.reduce((a, b) => a + b, 0)
      const mean = sum / 5
      const { options, correctIndex } = makeOptions(mean, 5)
      return { id: this.id, category: this.category, question: `Find the mean of: $${vals.join(', ')}$.`, options, correctIndex, explanation: `Mean $= \\frac{${vals.join(' + ')}}{5} = \\frac{${sum}}{5} = ${mean}$.` }
    }
  },
  {
    id: 'ds-q2',
    category: 'Mean Median Mode',
    difficulty: 'easy',
    generate() {
      const vals = Array.from({ length: 7 }, () => randInt(5, 30)).sort((a, b) => a - b)
      const median = vals[3]
      const { options, correctIndex } = makeOptions(median, 4)
      return { id: this.id, category: this.category, question: `Find the median of: $${vals.join(', ')}$.`, options, correctIndex, explanation: `Sorted: $${vals.join(', ')}$. Middle value (4th of 7) = $${median}$.` }
    }
  },
  {
    id: 'ds-q3',
    category: 'Mean Median Mode',
    difficulty: 'easy',
    generate() {
      const mode = randInt(5, 20)
      const fillerVals = new Set<number>()
      while (fillerVals.size < 3) { const v = randInt(1, 30); if (v !== mode) fillerVals.add(v) }
      const vals = [mode, mode, mode, ...fillerVals]
      const correct = `${mode}`
      return { id: this.id, category: this.category, question: `Find the mode of: $${shuffle(vals).join(', ')}$.`, ...makeStringOptions(correct, [`${mode + 1}`, `${mode - 2}`, 'No mode']), explanation: `$${mode}$ appears 3 times (most frequent), so the mode is $${mode}$.` }
    }
  },
  {
    id: 'ds-q4',
    category: 'Mean Median Mode',
    difficulty: 'easy',
    generate() {
      const vals = Array.from({ length: 5 }, () => randInt(10, 40))
      const sorted = [...vals].sort((a, b) => a - b)
      const range = sorted[sorted.length - 1] - sorted[0]
      const { options, correctIndex } = makeOptions(range, 5)
      return { id: this.id, category: this.category, question: `Find the range of: $${vals.join(', ')}$.`, options, correctIndex, explanation: `Range = max $-$ min = $${sorted[sorted.length - 1]} - ${sorted[0]} = ${range}$.` }
    }
  },
  {
    id: 'ds-q5',
    category: 'Mean Median Mode',
    difficulty: 'hard',
    generate() {
      let n = 0; let target = 0; let scores: number[] = []; let sum = 0; let needed = 0
      do {
        n = randInt(4, 6); target = randInt(75, 95)
        scores = Array.from({ length: n - 1 }, () => randInt(60, 100))
        sum = scores.reduce((a, b) => a + b, 0)
        needed = target * n - sum
      } while (needed > 100 || needed < 0)
      const { options, correctIndex } = makeOptions(needed, 8)
      return { id: this.id, category: this.category, question: `Current scores: $${scores.join(', ')}$. What score is needed on the next test for a $${target}$ average?`, options, correctIndex, explanation: `Need total $= ${target} \\times ${n} = ${target * n}$. Have $${sum}$. Need $${needed}$.` }
    }
  },
  {
    id: 'ds-q6',
    category: 'Mean Median Mode',
    difficulty: 'medium',
    generate() {
      let vals: number[] = []
      do { vals = Array.from({ length: 6 }, () => randInt(5, 25)).sort((a, b) => a - b) } while (vals[2] === vals[3])
      const median = (vals[2] + vals[3]) / 2
      const correct = `${median}`
      return { id: this.id, category: this.category, question: `Find the median of this even-count set: $${vals.join(', ')}$.`, ...makeStringOptions(correct, [`${vals[2]}`, `${vals[3]}`, `${vals[2] - 1}`]), explanation: `For an even count, the median is the average of the two middle values: $\\frac{${vals[2]} + ${vals[3]}}{2} = ${median}$.` }
    }
  },
  {
    id: 'ds-q7',
    category: 'Mean Median Mode',
    difficulty: 'medium',
    generate() {
      const vals = [10, 20, 30, 40, 50, 200]
      const correct = 'The median is more resistant to outliers than the mean'
      return { id: this.id, category: this.category, question: `Data: $${vals.join(', ')}$. The mean is $58.3$ but the median is $35$. Why the big difference?`, ...makeStringOptions(correct, ['The data set is too small', 'Mean and median always differ', 'The mode affects both']), explanation: 'The outlier (200) pulls the mean up significantly but barely affects the median.' }
    }
  },
  {
    id: 'ds-q8',
    category: 'Mean Median Mode',
    difficulty: 'medium',
    generate() {
      const n = randInt(20, 50); const mean = randInt(70, 90)
      const total = n * mean
      const { options, correctIndex } = makeOptions(total, 100)
      return { id: this.id, category: this.category, question: `A class of $${n}$ students has a test mean of $${mean}$. What is the total of all scores?`, options, correctIndex, explanation: `Total $= n \\times \\text{mean} = ${n} \\times ${mean} = ${total}$.` }
    }
  },
  {
    id: 'ds-q9',
    category: 'Standard Deviation',
    difficulty: 'easy',
    generate() {
      const correct = 'It measures the average distance of data points from the mean'
      return { id: this.id, category: this.category, question: 'What does standard deviation measure?', ...makeStringOptions(correct, ['The maximum value in the data', 'The most frequent value', 'The range of the data']), explanation: 'Standard deviation quantifies how spread out data is from the mean.' }
    }
  },
  {
    id: 'ds-q10',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const correct = 'Set B (values more spread out from mean)'
      return { id: this.id, category: this.category, question: 'Set A: $\\{48, 50, 52\\}$. Set B: $\\{30, 50, 70\\}$. Which has greater standard deviation?', ...makeStringOptions(correct, ['Set A', 'They are equal', 'Cannot determine']), explanation: 'Set B has values farther from the mean (50), so its standard deviation is larger.' }
    }
  },
  {
    id: 'ds-q11',
    category: 'Standard Deviation',
    difficulty: 'hard',
    generate() {
      const sd = randInt(3, 8); const mean = randInt(60, 90)
      const lo = mean - 2 * sd; const hi = mean + 2 * sd
      const correct = `$${lo}$ to $${hi}$`
      return { id: this.id, category: this.category, question: `Mean $= ${mean}$, SD $= ${sd}$. Using the 95% rule, what range contains most data?`, ...makeStringOptions(correct, [`$${mean - sd}$ to $${mean + sd}$`, `$${mean}$ to $${hi}$`, `$${lo - sd}$ to $${hi + sd}$`]), explanation: `About 95% of data falls within 2 SDs: mean $\\pm 2 \\cdot$ SD $= ${lo}$ to $${hi}$.` }
    }
  },
  {
    id: 'ds-q12',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const correct = 'Adding the same constant to every value does NOT change the standard deviation'
      return { id: this.id, category: this.category, question: 'If 10 is added to every data point, what happens to the standard deviation?', ...makeStringOptions(correct, ['It increases by 10', 'It doubles', 'It becomes 0']), explanation: 'Adding a constant shifts all values equally, so spread (standard deviation) stays the same.' }
    }
  },
  {
    id: 'ds-q13',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const k = randInt(2, 5)
      const correct = `The standard deviation is multiplied by ${k}`
      return { id: this.id, category: this.category, question: `If every data value is multiplied by $${k}$, what happens to the standard deviation?`, ...makeStringOptions(correct, ['It stays the same', `It is multiplied by ${k * k}`, 'It becomes 0']), explanation: `Multiplying all values by $${k}$ multiplies the SD by $|${k}| = ${k}$.` }
    }
  },
  {
    id: 'ds-q14',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const correct = 'A z-score tells how many standard deviations a value is from the mean'
      return { id: this.id, category: this.category, question: 'What does a z-score of $2.0$ indicate?', ...makeStringOptions(correct, ['The value is twice the mean', 'The value equals 2', 'The data has 2 modes']), explanation: '$z = \\frac{x - \\text{mean}}{SD}$. A z-score of 2.0 means the value is 2 standard deviations above the mean.' }
    }
  },
  {
    id: 'ds-q15',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const mean = randInt(60, 80); const sd = randInt(5, 10); const x = mean + sd * 2
      const z = 2
      const { options, correctIndex } = makeOptions(z, 1)
      return { id: this.id, category: this.category, question: `Mean $= ${mean}$, SD $= ${sd}$. Find the z-score for $x = ${x}$.`, options, correctIndex, explanation: `$z = \\frac{${x} - ${mean}}{${sd}} = \\frac{${x - mean}}{${sd}} = ${z}$.` }
    }
  },
  {
    id: 'ds-q16',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const correct = '68% within 1 SD, 95% within 2 SDs, 99.7% within 3 SDs'
      return { id: this.id, category: this.category, question: 'State the empirical rule (68-95-99.7 rule) for normal distributions.', ...makeStringOptions(correct, ['50-75-100 rule', '70-90-100 rule', '60-80-95 rule']), explanation: 'The empirical rule: about 68% of data lies within 1 SD of the mean, 95% within 2 SDs, and 99.7% within 3 SDs.' }
    }
  },
  {
    id: 'ds-q17',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      let fav = 0; let total = 0
      do { fav = randInt(2, 10); total = fav + randInt(5, 20) } while (fav === total - fav)
      const correct = `$\\frac{${fav}}{${total}}$`
      return { id: this.id, category: this.category, question: `A bag has $${fav}$ red and $${total - fav}$ blue marbles. $P(\\text{red}) = $ ?`, ...makeStringOptions(correct, [`$\\frac{${total - fav}}{${total}}$`, `$\\frac{${fav}}{${fav}}$`, `$\\frac{1}{${total}}$`]), explanation: `$P(\\text{red}) = \\frac{\\text{favorable}}{\\text{total}} = \\frac{${fav}}{${total}}$.` }
    }
  },
  {
    id: 'ds-q18',
    category: 'Probability',
    difficulty: 'hard',
    generate() {
      const pA = randInt(10, 40); const pB = randInt(10, 40)
      const pBoth = randInt(5, Math.min(pA, pB))
      const pUnion = pA + pB - pBoth
      const { options, correctIndex } = makeOptions(pUnion, 10)
      return { id: this.id, category: this.category, question: `$P(A) = ${pA}\\%$, $P(B) = ${pB}\\%$, $P(A \\text{ and } B) = ${pBoth}\\%$. Find $P(A \\text{ or } B)$ (as %).`, options, correctIndex, explanation: `$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = ${pA} + ${pB} - ${pBoth} = ${pUnion}\\%$.` }
    }
  },
  {
    id: 'ds-q19',
    category: 'Probability',
    difficulty: 'medium',
    generate() {
      const n = randInt(3, 6)
      const fact = [1, 1, 2, 6, 24, 120, 720][n]
      const { options, correctIndex } = makeOptions(fact, 30)
      return { id: this.id, category: this.category, question: `How many ways can $${n}$ books be arranged on a shelf?`, options, correctIndex, explanation: `$${n}! = ${fact}$ arrangements.` }
    }
  },
  {
    id: 'ds-q20',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      const correct = 'Multiply individual probabilities (for independent events)'
      return { id: this.id, category: this.category, question: 'How do you find $P(A \\text{ and } B)$ for two independent events?', ...makeStringOptions(correct, ['Add the probabilities', 'Subtract P(B) from P(A)', 'Divide P(A) by P(B)']), explanation: 'For independent events: $P(A \\cap B) = P(A) \\times P(B)$.' }
    }
  },
  {
    id: 'ds-q21',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      const p = [2, 4][randInt(0, 1)]
      const correct = '$\\frac{5}{6}$'
      return { id: this.id, category: this.category, question: `$P(\\text{rolling a } ${p} \\text{ on a die}) = \\frac{1}{6}$. What is $P(\\text{NOT rolling a } ${p})$?`, ...makeStringOptions(correct, ['$\\frac{1}{6}$', `$\\frac{${p}}{6}$`, '$\\frac{1}{2}$']), explanation: `$P(\\text{not } A) = 1 - P(A) = 1 - \\frac{1}{6} = \\frac{5}{6}$.` }
    }
  },
  {
    id: 'ds-q22',
    category: 'Probability',
    difficulty: 'hard',
    generate() {
      const n = randInt(5, 10); const r = randInt(2, 3)
      let comb = 1
      for (let i = 0; i < r; i++) comb = comb * (n - i) / (i + 1)
      comb = Math.round(comb)
      const { options, correctIndex } = makeOptions(comb, 10)
      return { id: this.id, category: this.category, question: `How many ways to choose $${r}$ items from $${n}$? (combinations)`, options, correctIndex, explanation: `$C(${n}, ${r}) = \\frac{${n}!}{${r}!(${n} - ${r})!} = ${comb}$.` }
    }
  },
  {
    id: 'ds-q23',
    category: 'Probability',
    difficulty: 'hard',
    generate() {
      const r = randInt(3, 8); const b = randInt(3, 8)
      const total = r + b
      const p1 = r; const p2 = r - 1; const den1 = total; const den2 = total - 1
      const correct = `$\\frac{${p1}}{${den1}} \\times \\frac{${p2}}{${den2}}$`
      return { id: this.id, category: this.category, question: `$${r}$ red, $${b}$ blue marbles. $P(\\text{2 red without replacement})$?`, ...makeStringOptions(correct, [`$\\frac{${p1}}{${den1}} \\times \\frac{${p1}}{${den1}}$`, `$\\frac{${p1}}{${den1}} + \\frac{${p2}}{${den2}}$`, `$\\frac{${p1}}{${den1}} \\times \\frac{${p2}}{${den1}}$`]), explanation: `Without replacement: $P = \\frac{\\text{red}}{\\text{total}} \\times \\frac{\\text{red} - 1}{\\text{total} - 1}$.` }
    }
  },
  {
    id: 'ds-q24',
    category: 'Probability',
    difficulty: 'medium',
    generate() {
      const correct = 'Expected value = the sum of (outcome $\\times$ probability) over all outcomes'
      return { id: this.id, category: this.category, question: 'How do you calculate expected value?', ...makeStringOptions(correct, ['Take the mode of probabilities', 'Add all outcomes together', 'Multiply the largest outcome by its probability']), explanation: '$E(X) = \\sum x \\cdot P(x)$ — the weighted average of all possible outcomes.' }
    }
  },
  {
    id: 'ds-q25',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const correct = 'Positive linear — as x increases, y also increases'
      return { id: this.id, category: this.category, question: 'A scatterplot shows points rising from left to right in a roughly straight pattern. Describe the association.', ...makeStringOptions(correct, ['Negative linear', 'No association', 'Quadratic']), explanation: 'Points rising left to right indicate a positive linear association.' }
    }
  },
  {
    id: 'ds-q26',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const m = randInt(2, 8); const b = randInt(-10, 10)
      const x = randInt(5, 15)
      const y = m * x + b
      const { options, correctIndex } = makeOptions(y, 10)
      return { id: this.id, category: this.category, question: `Line of best fit: $y = ${m}x ${b < 0 ? '- ' + Math.abs(b) : '+ ' + b}$. Predict $y$ when $x = ${x}$.`, options, correctIndex, explanation: `$y = ${m}(${x}) ${b < 0 ? '- ' + Math.abs(b) : '+ ' + b} = ${y}$.` }
    }
  },
  {
    id: 'ds-q27',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const r = randInt(85, 98) / 100
      const correct = 'Strong positive correlation'
      return { id: this.id, category: this.category, question: `$r = ${r}$. Describe the correlation.`, ...makeStringOptions(correct, ['Weak positive', 'Strong negative', 'No correlation']), explanation: `$r$ close to 1 ($${r}$) indicates strong positive correlation.` }
    }
  },
  {
    id: 'ds-q28',
    category: 'Scatterplots',
    difficulty: 'medium',
    generate() {
      const correct = '$r^2$ tells the percentage of variation in $y$ explained by $x$'
      return { id: this.id, category: this.category, question: 'What does the coefficient of determination ($r^2$) represent?', ...makeStringOptions(correct, ['The slope of the regression line', 'The y-intercept', 'The number of data points']), explanation: '$r^2$ indicates what fraction of the dependent variable variation is explained by the model.' }
    }
  },
  {
    id: 'ds-q29',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const actual = randInt(40, 80); const predicted = randInt(35, 75)
      const residual = actual - predicted
      const { options, correctIndex } = makeOptions(residual, 8)
      return { id: this.id, category: this.category, question: `Actual $y = ${actual}$, predicted $y = ${predicted}$. Find the residual.`, options, correctIndex, explanation: `Residual = actual $-$ predicted $= ${actual} - ${predicted} = ${residual}$.` }
    }
  },
  {
    id: 'ds-q30',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const correct = 'It is an outlier — far from the general pattern'
      return { id: this.id, category: this.category, question: 'A point in a scatterplot is very far from the line of best fit. What is this point called?', ...makeStringOptions(correct, ['The y-intercept', 'The slope', 'A normal point']), explanation: 'Points far from the regression line are outliers or influential points.' }
    }
  },
  {
    id: 'ds-q31',
    category: 'Scatterplots',
    difficulty: 'medium',
    generate() {
      const correct = 'Extrapolation — predicting beyond the range of the data — is unreliable'
      return { id: this.id, category: this.category, question: 'Why is it risky to use a regression line to predict $y$ for x-values far outside the data range?', ...makeStringOptions(correct, ['Because the line is always wrong', 'Because r = 0 outside the data', 'Because the slope changes sign']), explanation: 'Extrapolation assumes the linear pattern continues, which may not be true beyond the observed data range.' }
    }
  },
  {
    id: 'ds-q32',
    category: 'Scatterplots',
    difficulty: 'medium',
    generate() {
      const correct = 'The slope represents the predicted change in $y$ for each 1-unit increase in $x$'
      return { id: this.id, category: this.category, question: 'In a regression equation $y = mx + b$, what does the slope $m$ represent in context?', ...makeStringOptions(correct, ['The starting value of y', 'The total of all y-values', 'The average of x and y']), explanation: 'The slope is the rate of change — for every 1-unit increase in $x$, $y$ changes by $m$ units on average.' }
    }
  },
  {
    id: 'ds-q33',
    category: 'Two-way Tables',
    difficulty: 'medium',
    generate() {
      let a = 0; let b = 0; let c = 0; let d = 0; let total = 0
      do {
        a = randInt(20, 50); b = randInt(10, 40); c = randInt(15, 45); d = randInt(10, 35)
        total = a + b + c + d
      } while (!distinctVals([a / total, (a + c) / total, a / (a + b), a / (a + c)]))
      const correct = `$\\frac{${a}}{${total}}$`
      return { id: this.id, category: this.category, question: `What is $P(\\text{Group A and Yes})$?\n\n|  | Yes | No |\n| --- | --- | --- |\n| Group A | ${a} | ${b} |\n| Group B | ${c} | ${d} |`, ...makeStringOptions(correct, [`$\\frac{${a + c}}{${total}}$`, `$\\frac{${a}}{${a + b}}$`, `$\\frac{${a}}{${a + c}}$`]), explanation: `Joint probability: $${a}$ out of total $${total}$ = $\\frac{${a}}{${total}}$.` }
    }
  },
  {
    id: 'ds-q34',
    category: 'Two-way Tables',
    difficulty: 'medium',
    generate() {
      let yes = 0; let no = 0; let extra = 0
      do { yes = randInt(30, 60); no = randInt(20, 50); extra = randInt(10, 30) } while (!distinctVals([yes / (yes + no), no / (yes + no), yes / (yes + no + extra), 0.5]))
      const rowTotal = yes + no
      const correct = `$\\frac{${yes}}{${rowTotal}}$`
      return { id: this.id, category: this.category, question: `In a row: Yes $= ${yes}$, No $= ${no}$. Find the conditional probability $P(\\text{Yes} \\mid \\text{this row})$.`, ...makeStringOptions(correct, [`$\\frac{${no}}{${rowTotal}}$`, `$\\frac{${yes}}{${rowTotal + extra}}$`, `$\\frac{1}{2}$`]), explanation: `Conditional $P = \\frac{${yes}}{\\text{row total } ${rowTotal}} = \\frac{${yes}}{${rowTotal}}$.` }
    }
  },
  {
    id: 'ds-q35',
    category: 'Two-way Tables',
    difficulty: 'medium',
    generate() {
      let a = 0; let b = 0; let c = 0; let d = 0
      do { a = randInt(15, 40); b = randInt(15, 40); c = randInt(15, 40); d = randInt(15, 40) } while (!distinctVals([a + c, a + b, c + d, a + b + c + d]))
      const colTotal = a + c
      const correct = `${colTotal}`
      return { id: this.id, category: this.category, question: `Top-left $= ${a}$, bottom-left $= ${c}$, top-right $= ${b}$, bottom-right $= ${d}$. What is the marginal total for the first column?`, ...makeStringOptions(correct, [`${a + b}`, `${c + d}`, `${a + b + c + d}`]), explanation: `Marginal total = sum of the column: $${a} + ${c} = ${colTotal}$.` }
    }
  },
  {
    id: 'ds-q36',
    category: 'Two-way Tables',
    difficulty: 'hard',
    generate() {
      const correct = 'Compare conditional probabilities across rows/columns — if equal, variables are independent'
      return { id: this.id, category: this.category, question: 'How do you determine if two variables in a two-way table are independent?', ...makeStringOptions(correct, ['Check if the total is even', 'See if all cells are equal', 'Add row and column totals']), explanation: 'If $P(A \\mid B) = P(A)$, the variables are independent. Compare conditional probabilities across groups.' }
    }
  },
  {
    id: 'ds-q37',
    category: 'Two-way Tables',
    difficulty: 'hard',
    generate() {
      let m_y = 0; let m_n = 0; let f_y = 0; let f_n = 0
      do { m_y = randInt(30, 50); m_n = randInt(20, 40); f_y = randInt(25, 45); f_n = randInt(25, 45) } while (!distinctVals([m_y + f_y, m_y, f_y, m_y + m_n]))
      const totalYes = m_y + f_y
      const grandTotal = m_y + m_n + f_y + f_n
      const correct = `$\\frac{${totalYes}}{${grandTotal}}$`
      return { id: this.id, category: this.category, question: `Males: Yes $= ${m_y}$, No $= ${m_n}$. Females: Yes $= ${f_y}$, No $= ${f_n}$. $P(\\text{Yes})$ overall $=$ ?`, ...makeStringOptions(correct, [`$\\frac{${m_y}}{${grandTotal}}$`, `$\\frac{${f_y}}{${grandTotal}}$`, `$\\frac{${m_y + m_n}}{${grandTotal}}$`]), explanation: `$P(\\text{Yes}) = \\frac{\\text{total Yes}}{\\text{grand total}} = \\frac{${totalYes}}{${grandTotal}}$.` }
    }
  },
  {
    id: 'ds-q38',
    category: 'Two-way Tables',
    difficulty: 'easy',
    generate() {
      const correct = 'The relative frequency of each cell compared to its row or column total'
      return { id: this.id, category: this.category, question: 'What is a relative frequency in a two-way table?', ...makeStringOptions(correct, ['The largest number in the table', 'The sum of all cells', 'The difference between rows']), explanation: 'Relative frequency = cell count / total (row, column, or grand total), expressed as a fraction or percentage.' }
    }
  },
  {
    id: 'ds-q39',
    category: 'Two-way Tables',
    difficulty: 'hard',
    generate() {
      const a = randInt(10, 30); const b = randInt(10, 30); const c = randInt(10, 30); const d = randInt(10, 30)
      const rowA = a + b; const rowB = c + d
      const pAgivenRow1 = Math.round(a / rowA * 100)
      const pAgivenRow2 = Math.round(c / rowB * 100)
      const isAssoc = Math.abs(pAgivenRow1 - pAgivenRow2) > 10
      const correct = isAssoc ? 'Yes, conditional probabilities differ significantly' : 'Possibly not — conditional probabilities are similar'
      return { id: this.id, category: this.category, question: `Row 1: $${a}, ${b}$. Row 2: $${c}, ${d}$. $P(\\text{col 1} \\mid \\text{row 1}) = ${pAgivenRow1}\\%$, $P(\\text{col 1} \\mid \\text{row 2}) = ${pAgivenRow2}\\%$. Is there an association?`, ...makeStringOptions(correct, ['No difference at all', 'Impossible to compare', 'Only with a chi-square test']), explanation: `A difference of $${Math.abs(pAgivenRow1 - pAgivenRow2)}$ percentage points ${isAssoc ? 'suggests' : 'may not strongly suggest'} an association.` }
    }
  },
  {
    id: 'ds-q40',
    category: 'Two-way Tables',
    difficulty: 'medium',
    generate() {
      const total = randInt(100, 200); const cellCount = randInt(15, 45)
      const pct = Math.round(cellCount / total * 100)
      const { options, correctIndex } = makeOptions(pct, 8)
      return { id: this.id, category: this.category, question: `In a two-way table with grand total $${total}$, a cell has count $${cellCount}$. What percentage is this? (Rounded to the nearest percent)`, options, correctIndex, explanation: `$\\frac{${cellCount}}{${total}} \\times 100 \\approx ${pct}\\%$.` }
    }
  },
]

type Tier = 'easy' | 'medium' | 'hard'
const tierFallback: Record<Tier, Tier[]> = { easy: ['medium', 'hard'], medium: ['easy', 'hard'], hard: ['medium', 'easy'] }

export function generateExitQuiz(count: number = 10, _topicSlug?: string, difficulty?: 'easy' | 'medium' | 'hard'): ExitQuizQuestion[] {
  if (difficulty) {
    const selected = shuffle(questionPool.filter(q => q.difficulty === difficulty)).slice(0, count)
    for (const tier of tierFallback[difficulty]) {
      if (selected.length >= count) break
      for (const q of shuffle(questionPool.filter(t => t.difficulty === tier))) {
        if (selected.length >= count) break
        selected.push(q)
      }
    }
    return shuffle(selected).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
  }
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
  return shuffle(selected).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
}
