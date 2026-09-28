/**
 * Exit Quiz Question Pool — SAT Data & Statistics
 * 43 questions with randomized numeric generation.
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

function gcd(a: number, b: number): number { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b] } return a }

function distinctVals(vals: number[]): boolean {
  return new Set(vals).size === vals.length
}

// Up to two misconception values (kept only when they have the key's digit count, so they cannot
// stand out by length), then integer-offset distractors placed so the key's rank among the four
// values is as uniform as the misconceptions allow. Distractors never go below `min`.
function makeOptions(correct: number, spread: number = 2, min: number = -Infinity, misc: number[] = []): { options: string[]; correctIndex: number } {
  const w = Math.max(3, spread * 3)
  const ok = (v: number) => v !== correct && v >= min
  const fixed = [...new Set(misc.filter(v => ok(v) && String(v).length === String(correct).length))].slice(0, 2)
  const below: number[] = []
  const above: number[] = []
  for (let d = 1; d <= w; d++) {
    if (ok(correct - d) && !fixed.includes(correct - d)) below.push(correct - d)
    if (!fixed.includes(correct + d)) above.push(correct + d)
  }
  const need = 3 - fixed.length
  const ks: number[] = []
  for (let k = 0; k <= need; k++) if (k <= below.length && need - k <= above.length) ks.push(k)
  const k = ks[randInt(0, ks.length - 1)]
  const all = shuffle([correct, ...fixed, ...shuffle(below).slice(0, k), ...shuffle(above).slice(0, need - k)])
  return { options: all.map(v => String(Math.round(v * 1e6) / 1e6)), correctIndex: all.indexOf(correct) }
}

// round(100·n/d) with halves rounded up, in exact integer arithmetic (no float ties).
function pctRound(n: number, d: number): number {
  return Math.floor((200 * n + d) / (2 * d))
}

function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
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
      const { options, correctIndex } = makeOptions(mean, 5, 1, [[...vals].sort((x, y) => x - y)[2], Math.max(...vals) - Math.min(...vals)])
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
      const { options, correctIndex } = makeOptions(median, 4, 1, [vals[2], vals[4]])
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
      return { id: this.id, category: this.category, question: `Find the mode of: $${shuffle(vals).join(', ')}$.`, ...makeStringOptions(correct, [`${mode + 2}`, `${mode - 1}`, '3']), explanation: `$${mode}$ appears 3 times (most frequent), so the mode is $${mode}$.` }
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
      const { options, correctIndex } = makeOptions(range, 5, 1, [sorted[sorted.length - 1], sorted[2]])
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
      const { options, correctIndex } = makeOptions(needed, 8, 0, [target])
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
      return { id: this.id, category: this.category, question: `Find the median of this even-count set: $${vals.join(', ')}$.`, ...makeStringOptions(correct, [median + 1, vals[2], median - 1, vals[3], median + 2, median - 2].map(String)), explanation: `For an even count, the median is the average of the two middle values: $\\frac{${vals[2]} + ${vals[3]}}{2} = ${median}$.` }
    }
  },
  {
    id: 'ds-q7',
    category: 'Mean Median Mode',
    difficulty: 'medium',
    generate() {
      const vals = [10, 20, 30, 40, 50, 200]
      const correct = 'The median is more resistant to outliers than the mean'
      return { id: this.id, category: this.category, question: `Data: $${vals.join(', ')}$. The mean is $58.3$ but the median is $35$. Why the big difference?`, ...makeStringOptions(correct, ['The data set is too small for the mean to be accurate', 'Mean and median always differ by a large amount', 'The mode pulls the mean and the median apart']), explanation: 'The outlier (200) pulls the mean up significantly but barely affects the median.' }
    }
  },
  {
    id: 'ds-q8',
    category: 'Mean Median Mode',
    difficulty: 'medium',
    generate() {
      const n = randInt(20, 50); const mean = randInt(70, 90)
      const total = n * mean
      const { options, correctIndex } = makeOptions(total, 30, 1, [n + mean, n * (mean + 1)])
      return { id: this.id, category: this.category, question: `A class of $${n}$ students has a test mean of $${mean}$. What is the total of all scores?`, options, correctIndex, explanation: `Total $= n \\times \\text{mean} = ${n} \\times ${mean} = ${total}$.` }
    }
  },
  {
    id: 'ds-q9',
    category: 'Standard Deviation',
    difficulty: 'easy',
    generate() {
      const correct = 'How spread out the values are from the mean'
      return { id: this.id, category: this.category, question: 'What does standard deviation measure?', ...makeStringOptions(correct, ['The most frequently occurring value in the data', 'The gap between the largest and smallest values', 'The middle value when the data are put in order']), explanation: 'Standard deviation quantifies how spread out data is from the mean.' }
    }
  },
  {
    id: 'ds-q10',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const correct = 'Set B, whose values are farther from 50'
      return { id: this.id, category: this.category, question: 'Set A: $\\{48, 50, 52\\}$. Set B: $\\{30, 50, 70\\}$. Which has greater standard deviation?', ...makeStringOptions(correct, ['Set A, whose values are closer to 50', 'Neither, since both have mean 50', 'Neither, since both have the same number of values']), explanation: 'Set B has values farther from the mean (50), so its standard deviation is larger.' }
    }
  },
  {
    id: 'ds-q11',
    category: 'Standard Deviation',
    difficulty: 'hard',
    generate() {
      // Conceptual SD reasoning (the SAT never asks for the empirical rule or an SD computation):
      // adding a value equal to the mean leaves the mean alone and shrinks the spread.
      const n = randInt(8, 15); const mean = randInt(60, 90)
      const correct = 'The mean stays the same and the standard deviation decreases'
      return { id: this.id, category: this.category, question: `A data set of $${n}$ test scores has a mean of $${mean}$, and the scores are not all equal. A new score of exactly $${mean}$ is added to the data set. Which statement about the new data set is true?`, ...makeStringOptions(correct, ['The mean stays the same and the standard deviation increases', 'The mean increases and the standard deviation stays the same', 'The mean and the standard deviation both stay exactly the same']), explanation: `A value equal to the mean does not move the mean. It adds a data point at distance 0 from the mean, so the typical distance from the mean (the standard deviation) gets smaller.` }
    }
  },
  {
    id: 'ds-q12',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const correct = 'It stays the same'
      return { id: this.id, category: this.category, question: 'If 10 is added to every data point, what happens to the standard deviation?', ...makeStringOptions(correct, ['It increases by 10', 'It is multiplied by 10', 'It decreases']), explanation: 'Adding a constant shifts all values equally, so spread (standard deviation) stays the same.' }
    }
  },
  {
    id: 'ds-q13',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const k = randInt(2, 5)
      const correct = `It is multiplied by ${k}`
      return { id: this.id, category: this.category, question: `If every data value is multiplied by $${k}$, what happens to the standard deviation?`, ...makeStringOptions(correct, ['It stays exactly the same', `It is multiplied by ${k * k}`, `It increases by ${k} units`]), explanation: `Multiplying all values by $${k}$ multiplies the SD by $|${k}| = ${k}$.` }
    }
  },
  {
    id: 'ds-q14',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const correct = 'Class A, because its scores are more spread out'
      return { id: this.id, category: this.category, question: 'Two classes took the same test and had the same mean score. Class A\'s scores ranged from 55 to 98; Class B\'s ranged from 74 to 82. Which class has the larger standard deviation?', ...makeStringOptions(correct, ['Class B, because its scores are tightly clustered', 'Neither, because equal means give equal spreads', 'Class B, because its scores have a smaller range']), explanation: 'Standard deviation measures spread around the mean. A wider spread of scores (55–98 vs 74–82) means a larger standard deviation.' }
    }
  },
  {
    id: 'ds-q15',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const mean = randInt(60, 80); const add = randInt(3, 8)
      const { options, correctIndex } = makeOptions(mean + add, 3, 1, [mean, mean + 2 * add])
      return { id: this.id, category: this.category, question: `A data set has mean $${mean}$. If every value in the data set is increased by $${add}$, what is the new mean?`, options, correctIndex, explanation: `Adding a constant to every value shifts the mean by that constant: $${mean} + ${add} = ${mean + add}$. (The standard deviation does not change.)` }
    }
  },
  {
    id: 'ds-q16',
    category: 'Standard Deviation',
    difficulty: 'medium',
    generate() {
      const correct = 'It decreases, since the values cluster near the mean'
      return { id: this.id, category: this.category, question: 'A data set is $10, 20, 30, 40, 50$. Each value is replaced so the set becomes $28, 29, 30, 31, 32$ (same mean). What happens to the standard deviation?', ...makeStringOptions(correct, ['It increases, since the values are closer together', 'It stays the same, since the mean has not changed', 'It stays the same, since there are still exactly 5 values']), explanation: 'The new values all lie within 2 of the mean 30, while the original values were up to 20 away. Less spread around the mean means a smaller standard deviation; an unchanged mean or count does not keep the spread the same.' }
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
      return { id: this.id, category: this.category, question: `A bag has $${fav}$ red and $${total - fav}$ blue marbles. If one marble is drawn at random, what is the probability it is red?`, ...makeStringOptions(correct, [`$\\frac{${total - fav}}{${total}}$`, `$\\frac{${fav}}{${fav}}$`, `$\\frac{1}{${total}}$`]), explanation: `Probability = favorable outcomes ÷ total outcomes $= \\frac{${fav}}{${total}}$.` }
    }
  },
  {
    id: 'ds-q18',
    category: 'Probability',
    difficulty: 'hard',
    generate() {
      // Overlap reasoning in words (was a P(A∪B) formula item — congruence
      // audit 2026-08-17: the SAT never uses set notation).
      const french = randInt(30, 45); const spanish = randInt(25, 40)
      const both = randInt(8, Math.min(french, spanish) - 5)
      const either = french + spanish - both
      const { options, correctIndex } = makeOptions(either, 10, 1, [french + spanish, either - both])
      return { id: this.id, category: this.category, question: `In a class of 100 students, ${french} take French, ${spanish} take Spanish, and ${both} take both languages. How many students take French or Spanish (or both)?`, options, correctIndex, explanation: `Adding ${french} + ${spanish} counts the ${both} both-takers twice, so subtract once: ${french} + ${spanish} - ${both} = ${either}.` }
    }
  },
  {
    id: 'ds-q19',
    category: 'Probability',
    difficulty: 'medium',
    generate() {
      // Expected count from a probability (was an n! arrangements item; counting formulas are not on the SAT)
      const pct = [2, 3, 4, 5, 6, 8][randInt(0, 5)]
      const n = randInt(5, 30) * 100
      const ans = n * pct / 100
      const { options, correctIndex } = makeOptions(ans, 10, 1, [n * pct / 1000, n - ans])
      return { id: this.id, category: this.category, question: `The probability that a randomly chosen light bulb from a factory is defective is $0.0${pct}$. In a shipment of $${n}$ bulbs, about how many would be expected to be defective?`, options, correctIndex, explanation: `Expected number $= ${n} \\times 0.0${pct} = ${ans}$.` }
    }
  },
  {
    id: 'ds-q20',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      // Replaced independence-formula item per 2026-08-17 congruence audit —
      // the SAT asks conditional/joint questions in words from tables.
      const correct = 'Divide club-member seniors by all the seniors'
      return { id: this.id, category: this.category, question: 'A two-way table shows class year (junior/senior) versus club membership. To find the probability that a randomly selected SENIOR is a club member, you should:', ...makeStringOptions(correct, ['Divide club-member seniors by all students', 'Divide club-member seniors by all club members', 'Divide all club members by the number of seniors']), explanation: 'The condition "a senior is selected" restricts you to the senior row: club-member seniors over total seniors.' }
    }
  },
  {
    id: 'ds-q21',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      const p = [2, 4][randInt(0, 1)]
      const correct = '$\\frac{5}{6}$'
      return { id: this.id, category: this.category, question: `A fair six-sided die is rolled once. What is the probability that the result is NOT a ${p}?`, ...makeStringOptions(correct, ['$\\frac{1}{6}$', `$\\frac{${p}}{6}$`, '$\\frac{1}{2}$']), explanation: `Five of the six equally likely outcomes are something other than ${p}: $\\frac{5}{6}$ (the same as $1 - \\frac{1}{6}$).` }
    }
  },
  {
    id: 'ds-q22',
    category: 'Probability',
    difficulty: 'hard',
    generate() {
      // How many to add to reach a target probability (was a C(n, r) combinations item; not on the SAT)
      let r = 0, b = 0, add = 0, num = 0, den = 0
      do {
        r = randInt(2, 10); b = randInt(4, 16); add = randInt(2, 12)
        const g = gcd(r + add, r + add + b); num = (r + add) / g; den = (r + add + b) / g
      } while (den > 12 || num === 1 || add === r || add === b)
      const { options, correctIndex } = makeOptions(add, 2, 1, [r + add, b - r > 0 ? b - r : -1])
      return { id: this.id, category: this.category, question: `A jar holds $${r}$ red marbles and $${b}$ blue marbles. How many red marbles must be added to the jar so that the probability of drawing a red marble at random is $\\frac{${num}}{${den}}$?`, options, correctIndex, explanation: `After adding $x$ red marbles: $\\frac{${r} + x}{${r + b} + x} = \\frac{${num}}{${den}}$. Cross-multiplying gives $${den}(${r} + x) = ${num}(${r + b} + x)$, so $x = ${add}$. Check: $\\frac{${r + add}}{${r + b + add}} = \\frac{${num}}{${den}}$.` }
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
      return { id: this.id, category: this.category, question: `A bag holds $${r}$ red and $${b}$ blue marbles. Two marbles are drawn at random, one after the other, without replacement. Which expression gives the probability that both marbles are red?`, ...makeStringOptions(correct, [`$\\frac{${p1}}{${den1}} \\times \\frac{${p1}}{${den1}}$`, `$\\frac{${p1}}{${den1}} + \\frac{${p2}}{${den2}}$`, `$\\frac{${p1}}{${den1}} \\times \\frac{${p2}}{${den1}}$`]), explanation: `The first draw is red with probability $\\frac{${p1}}{${den1}}$. After one red is removed, $${p2}$ of the remaining $${den2}$ marbles are red, so multiply: $\\frac{${p1}}{${den1}} \\times \\frac{${p2}}{${den2}}$.` }
    }
  },
  {
    id: 'ds-q24',
    category: 'Probability',
    difficulty: 'medium',
    generate() {
      // Replaced expected-value item (not on the SAT) with margin of error
      // (which is) per 2026-08-17 congruence audit.
      const correct = 'A range of plausible values for the population percentage'
      return { id: this.id, category: this.category, question: 'A poll based on a random sample reports 54% support with a margin of error of 3 percentage points. The margin of error describes:', ...makeStringOptions(correct, ['The percentage of the sample who answered incorrectly', 'A guaranteed range for the population percentage', 'The share of the population that the poll was not able to survey']), explanation: 'Margin of error gives the plausible range for the population value — here, roughly 51% to 57%.' }
    }
  },
  {
    id: 'ds-q25',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const correct = 'Positive linear — as x increases, y also increases'
      return { id: this.id, category: this.category, question: 'A scatterplot shows points rising from left to right in a roughly straight pattern. Describe the association.', ...makeStringOptions(correct, ['Negative linear — as x increases, y decreases', 'No association — y does not change with x', 'Nonlinear — y rises, then falls as x increases']), explanation: 'Points rising left to right indicate a positive linear association.' }
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
      const { options, correctIndex } = makeOptions(y, 10, -Infinity, [m + b + x])
      return { id: this.id, category: this.category, question: `A line of best fit is $y = ${m}x${b === 0 ? '' : b < 0 ? ' - ' + Math.abs(b) : ' + ' + b}$. What is the predicted value of $y$ when $x = ${x}$?`, options, correctIndex, explanation: `$y = ${m}(${x})${b === 0 ? '' : b < 0 ? ' - ' + Math.abs(b) : ' + ' + b} = ${y}$.` }
    }
  },
  {
    id: 'ds-q27',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      // Describe the association shown in a table, in words.
      const kind = randInt(0, 2)
      const noise = () => randInt(-1, 1)
      const xs = [1, 2, 3, 4, 5]
      let ys: number[]
      if (kind === 2) {
        const top = randInt(30, 45); const c = randInt(3, 5)
        ys = xs.map(x => top - c * (x - 3) * (x - 3) + (x === 3 ? 0 : noise()))
      } else {
        const start = kind === 0 ? randInt(5, 25) : randInt(35, 60); const d = randInt(5, 8) * (kind === 0 ? 1 : -1)
        ys = xs.map(x => start + d * (x - 1) + noise())
      }
      const labels = [
        'Positive linear — as x increases, y also increases',
        'Negative linear — as x increases, y decreases',
        'Nonlinear — y rises, then falls as x increases',
      ]
      const correct = labels[kind]
      const why = [
        'the y-values rise by roughly the same amount at each step, so the association is positive and linear',
        'the y-values fall by roughly the same amount at each step, so the association is negative and linear',
        'the y-values rise to a peak at $x = 3$ and then fall, so the association is nonlinear',
      ][kind]
      const table = `| $x$ | ${xs.join(' | ')} |\n| --- | --- | --- | --- | --- | --- |\n| $y$ | ${ys.join(' | ')} |`
      return { id: this.id, category: this.category, question: `The table shows five pairs of values of $x$ and $y$. Which best describes the association between $x$ and $y$?\n\n${table}`, ...makeStringOptions(correct, [...labels.filter(l => l !== correct), 'No association — y does not change with x']), explanation: `Reading left to right, ${why}.` }
    }
  },
  {
    id: 'ds-q28',
    category: 'Scatterplots',
    difficulty: 'medium',
    generate() {
      // Interpret the y-intercept of a line of best fit in context.
      if (Math.random() < 0.5) {
        const m = randInt(2, 9) / 10; const b = randInt(8, 30)
        const correct = 'The predicted height, in centimeters, at day 0'
        return { id: this.id, category: this.category, question: `A botanist models the height $h$, in centimeters, of a plant $d$ days after she first measured it with the line of best fit $h = ${m}d + ${b}$. What is the best interpretation of ${b} in this context?`, ...makeStringOptions(correct, ['The predicted growth, in centimeters, for each day', `The predicted height, in centimeters, at day ${b}`, 'The predicted number of days until the height is 0 cm']), explanation: `In $h = ${m}d + ${b}$, the constant ${b} is the value of $h$ when $d = 0$: the predicted height, in centimeters, on the day of the first measurement. The coefficient ${m} is the predicted growth per day.` }
      }
      const m = randInt(2, 4); const b = randInt(24, 38)
      const correct = 'The predicted value, in thousands of dollars, at age 0'
      return { id: this.id, category: this.category, question: `A dealer models the value $v$, in thousands of dollars, of a used car that is $a$ years old with the line of best fit $v = ${b} - ${m}a$. What is the best interpretation of ${b} in this context?`, ...makeStringOptions(correct, ['The predicted drop, in thousands of dollars, per year', `The predicted value, in thousands of dollars, at age ${b}`, 'The predicted age, in years, when the value is 0']), explanation: `In $v = ${b} - ${m}a$, the constant ${b} is the value of $v$ when $a = 0$: the predicted value, in thousands of dollars, of a car that is 0 years old. The ${m} is the predicted drop in value, in thousands of dollars, per year.` }
    }
  },
  {
    id: 'ds-q29',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const actual = randInt(40, 80); let predicted = randInt(35, 75); while (predicted === actual) predicted = randInt(35, 75)
      const residual = actual - predicted
      const { options, correctIndex } = makeOptions(residual, 8, -Infinity, [-residual])
      return { id: this.id, category: this.category, question: `Actual $y = ${actual}$, predicted $y = ${predicted}$. Find the residual.`, options, correctIndex, explanation: `Residual = actual $-$ predicted $= ${actual} - ${predicted} = ${residual}$.` }
    }
  },
  {
    id: 'ds-q30',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const correct = 'An outlier'
      return { id: this.id, category: this.category, question: 'A point in a scatterplot lies very far from the line of best fit and from the general pattern of the data. What is this point called?', ...makeStringOptions(correct, ['The intercept', 'The midpoint', 'A zero residual']), explanation: 'Points far from the regression line are outliers or influential points.' }
    }
  },
  {
    id: 'ds-q31',
    category: 'Scatterplots',
    difficulty: 'medium',
    generate() {
      const correct = 'The pattern may not continue outside the data'
      return { id: this.id, category: this.category, question: 'Why is it risky to use a regression line to predict $y$ for x-values far outside the data range?', ...makeStringOptions(correct, ['The line is always wrong far from the origin', 'The residuals are all zero outside the data range', 'The slope changes sign outside the observed data']), explanation: 'Extrapolation assumes the linear pattern continues, which may not be true beyond the observed data range.' }
    }
  },
  {
    id: 'ds-q32',
    category: 'Scatterplots',
    difficulty: 'medium',
    generate() {
      const correct = 'The predicted change in $y$ per 1-unit increase in $x$'
      return { id: this.id, category: this.category, question: 'In a regression equation $y = mx + b$, what does the slope $m$ represent in context?', ...makeStringOptions(correct, ['The predicted value of $y$ when $x$ equals zero', 'The predicted change in $x$ per unit change in $y$', 'The average of all the $x$ and $y$ values']), explanation: 'The slope is the rate of change — for every 1-unit increase in $x$, $y$ changes by $m$ units on average.' }
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
      return { id: this.id, category: this.category, question: `If one person is selected at random from everyone in the table, what is the probability the person is in Group A AND said Yes?\n\n|  | Yes | No |\n| --- | --- | --- |\n| Group A | ${a} | ${b} |\n| Group B | ${c} | ${d} |`, ...makeStringOptions(correct, [`$\\frac{${a + c}}{${total}}$`, `$\\frac{${a}}{${a + b}}$`, `$\\frac{${a}}{${a + c}}$`]), explanation: `Joint probability: $${a}$ out of total $${total}$ = $\\frac{${a}}{${total}}$.` }
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
      return { id: this.id, category: this.category, question: `One row of a survey table shows ${yes} people answered Yes and ${no} answered No. If a person is selected at random from THIS row, what is the probability the person answered Yes?`, ...makeStringOptions(correct, [`$\\frac{${no}}{${rowTotal}}$`, `$\\frac{${yes}}{${rowTotal + extra}}$`, `$\\frac{1}{2}$`]), explanation: `Only this row counts, so divide by the row total: $\\frac{${yes}}{${rowTotal}}$.` }
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
      const correct = 'No — both groups ordered coffee at the same 50% rate'
      return { id: this.id, category: this.category, question: 'A table shows 30 of 60 morning customers and 45 of 90 evening customers ordered coffee. Do the data suggest an association between time of day and ordering coffee?', ...makeStringOptions(correct, ['Yes — more evening customers than morning ones ordered coffee', 'Yes — the evening group is larger than the morning group', 'No — a table of counts cannot reveal an association']), explanation: 'Compare the RATES: morning 30/60 = 50%, evening 45/90 = 50%. Equal rates suggest NO association — raw counts alone mislead.' }
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
      return { id: this.id, category: this.category, question: `In a survey, males answered Yes ${m_y} times and No ${m_n} times; females answered Yes ${f_y} times and No ${f_n} times. If one respondent is selected at random, what is the probability the respondent answered Yes?`, ...makeStringOptions(correct, [`$\\frac{${m_y}}{${grandTotal}}$`, `$\\frac{${f_y}}{${grandTotal}}$`, `$\\frac{${m_y + m_n}}{${grandTotal}}$`]), explanation: `Total Yes answers ($${m_y} + ${f_y} = ${totalYes}$) divided by all respondents ($${grandTotal}$): $\\frac{${totalYes}}{${grandTotal}}$.` }
    }
  },
  {
    id: 'ds-q38',
    category: 'Two-way Tables',
    difficulty: 'easy',
    generate() {
      let N = 0, pct = 0, k = 0
      do { N = [80, 120, 160, 200, 240][randInt(0, 4)]; pct = randInt(1, 8) * 5; k = N * pct / 100 } while (!Number.isInteger(k) || k === pct || pct * 10 === 100 - pct)
      const f = (n: number, v: string) => `$\\frac{${n}}{${N}} = ${v}\\%$`
      const correct = f(k, `${pct}`)
      return { id: this.id, category: this.category, question: `In a survey table, $${k}$ of the $${N}$ respondents are seniors who bike to school. What is the relative frequency of senior bikers among ALL respondents?`, ...makeStringOptions(correct, [`$\\frac{${k}}{100} = ${k}\\%$`, f(k, `${pct / 10}`), f(N - k, `${100 - pct}`)]), explanation: `Relative frequency among ALL respondents = cell ÷ grand total: $\\frac{${k}}{${N}} = ${pct}\\%$.` }
    }
  },
  {
    id: 'ds-q39',
    category: 'Two-way Tables',
    difficulty: 'hard',
    generate() {
      // Only clear-cut gaps (>= 20 points or <= 3 points) so exactly one
      // answer is defensible.
      let pAgivenRow1 = 0; let pAgivenRow2 = 0; let gap = 0
      do {
        const a = randInt(10, 30); const b = randInt(10, 30); const c = randInt(10, 30); const d = randInt(10, 30)
        pAgivenRow1 = pctRound(a, a + b)
        pAgivenRow2 = pctRound(c, c + d)
        gap = Math.abs(pAgivenRow1 - pAgivenRow2)
      } while (!(gap >= 20 || gap <= 3))
      const isAssoc = gap >= 20
      const yesKey = 'Yes — the two row percentages are far apart'
      const noKey = 'No — the two row percentages are nearly equal'
      const correct = isAssoc ? yesKey : noKey
      const others = isAssoc
        ? [noKey, 'No — percentages cannot reveal an association', 'No — only raw counts can show an association']
        : [yesKey, 'Yes — any gap in percentages proves an association', 'Yes — each row has a different number of entries']
      return { id: this.id, category: this.category, question: `In Row 1, ${pAgivenRow1}% of entries fall in Column 1; in Row 2, ${pAgivenRow2}% do. Do the data suggest an association between row and column?`, ...makeStringOptions(correct, others), explanation: `Compare the row percentages: ${pAgivenRow1}% vs. ${pAgivenRow2}%, a gap of $${gap}$ percentage points. ${isAssoc ? 'A gap this large suggests an association.' : 'A gap this small suggests no association; row sizes and tiny differences do not change that.'}` }
    }
  },
  {
    id: 'ds-q40',
    category: 'Two-way Tables',
    difficulty: 'medium',
    generate() {
      const total = randInt(100, 200); const cellCount = randInt(15, 45)
      const pct = pctRound(cellCount, total)
      const { options, correctIndex } = makeOptions(pct, 8, 1, [cellCount, pctRound(cellCount, total - cellCount)])
      return { id: this.id, category: this.category, question: `In a two-way table with grand total $${total}$, a cell has count $${cellCount}$. What percentage is this? (Rounded to the nearest percent)`, options, correctIndex, explanation: `$\\frac{${cellCount}}{${total}} \\times 100 \\approx ${pct}\\%$.` }
    }
  },
  {
    id: 'ds-q41',
    category: 'Two-way Tables',
    difficulty: 'easy',
    generate() {
      let a = 0; let b = 0; let c = 0; let d = 0
      do { a = randInt(12, 40); b = randInt(12, 40); c = randInt(12, 40); d = randInt(12, 40) } while (!distinctVals([a + b, a + c, b + d, c + d, a + b + c + d]))
      const { options, correctIndex } = makeOptions(c + d, 5, 1, [a + c, b + d])
      return { id: this.id, category: this.category, question: `How many people in Group B were surveyed?\n\n|  | Yes | No |\n| --- | --- | --- |\n| Group A | ${a} | ${b} |\n| Group B | ${c} | ${d} |`, options, correctIndex, explanation: `Add across the Group B row: $${c} + ${d} = ${c + d}$.` }
    }
  },
  {
    id: 'ds-q42',
    category: 'Scatterplots',
    difficulty: 'easy',
    generate() {
      const m = randInt(2, 9) * 5; const b = randInt(12, 40) * 10; const yr = [2000, 2005, 2010, 2015][randInt(0, 3)]
      const correct = `The predicted price, in dollars, of the bicycle in ${yr}`
      return { id: this.id, category: this.category, question: `The line of best fit $y = ${m}x + ${b}$ models the price $y$, in dollars, of a bicycle model $x$ years after ${yr}. What does the number $${b}$ represent?`, ...makeStringOptions(correct, [`The predicted yearly increase in price, in dollars`, `The predicted price, in dollars, after ${m} years`, `The number of years until the price is ${m + b} dollars`]), explanation: `When $x = 0$ (the year ${yr}), $y = ${b}$, so $${b}$ is the predicted price in ${yr}. The yearly increase is the slope, $${m}$.` }
    }
  },
  {
    id: 'ds-q43',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      const n = [8, 10, 12][randInt(0, 2)]
      const set = new Set<number>(); while (set.size < n) set.add(randInt(1, 40))
      const vals = [...set].sort((x, y) => x - y)
      const cut = vals[randInt(2, n - 3)]
      const fav = vals.filter(v => v > cut).length
      const g = gcd(fav, n)
      const frac = (x: number, y: number) => { const h = gcd(x, y); return `$\\frac{${x / h}}{${y / h}}$` }
      const correct = frac(fav, n)
      const others = [frac(n - fav, n), frac(fav + 1, n), frac(fav, n - fav), frac(Math.max(1, fav - 1), n)].filter(o => o !== correct)
      return { id: this.id, category: this.category, question: `A number is chosen at random from this list: $${vals.join(', ')}$. What is the probability that the number is greater than $${cut}$?`, ...makeStringOptions(correct, others), explanation: `${fav} of the ${n} numbers are greater than ${cut}, so the probability is $\\frac{${fav}}{${n}}${g > 1 ? ` = \\frac{${fav / g}}{${n / g}}` : ''}$.` }
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
