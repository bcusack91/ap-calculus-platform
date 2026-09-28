/**
 * Exit Quiz Question Pool — SAT Statistics & Data Interpretation
 * 40 questions covering mean/median/mode, spread, two-way tables,
 * scatterplots, probability, study design.
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

function randNonZero(min: number, max: number): number {
  let n = 0
  while (n === 0) n = randInt(min, max)
  return n
}

function gcd(a: number, b: number): number { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b] } return a }

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
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

// round(100·n/d) with halves rounded up, in exact integer arithmetic (23/40 is 58%, not a float
// 57.49999 that Math.round sends to 57).
function pctRound(n: number, d: number): number {
  return Math.floor((200 * n + d) / (2 * d))
}

// "mx + b" with no 1x, -1x, "+ -b" or "+ 0" artifacts.
function lin(m: number, b: number): string {
  const mx = m === 1 ? 'x' : m === -1 ? '-x' : `${m}x`
  return b === 0 ? mx : b > 0 ? `${mx} + ${b}` : `${mx} - ${-b}`
}

function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
  const all = shuffle([correct, ...unique])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  // ===== MEAN, MEDIAN, MODE (7 questions) =====
  {
    id: 'ssd-q1',
    category: 'Mean, Median, Mode',
    difficulty: 'easy',
    generate() {
      const n = 5
      const vals = Array.from({ length: n - 1 }, () => randInt(60, 100))
      let last = randInt(60, 100)
      const r = (vals.reduce((a, b) => a + b, 0) + last) % n
      last -= r
      if (last < 60) last += n
      vals.push(last)
      const sum = vals.reduce((a, b) => a + b, 0)
      const mean = sum / n
      const { options, correctIndex } = makeOptions(mean, 3, 1, [sum / (n - 1) === Math.round(sum / (n - 1)) ? sum / (n - 1) : -1, [...vals].sort((x, y) => x - y)[2]])
      return {
        id: this.id, category: this.category,
        question: `Find the mean of: $${vals.join(', ')}$.`,
        options, correctIndex,
        explanation: `Mean = $\\frac{${vals.join(' + ')}}{${n}} = \\frac{${sum}}{${n}} = ${mean}$.`
      }
    }
  },
  {
    id: 'ssd-q2',
    category: 'Mean, Median, Mode',
    difficulty: 'easy',
    generate() {
      const n = 7
      const vals = Array.from({ length: n }, () => randInt(10, 50)).sort((a, b) => a - b)
      const median = vals[3]
      const { options, correctIndex } = makeOptions(median, 4, 1, [Math.round(vals.reduce((a, b) => a + b, 0) / n), vals[6] - vals[0]])
      return {
        id: this.id, category: this.category,
        question: `Find the median of: $${vals.join(', ')}$.`,
        options, correctIndex,
        explanation: `Sorted data has ${n} values. Middle value (4th) = $${median}$.`
      }
    }
  },
  {
    id: 'ssd-q3',
    category: 'Mean, Median, Mode',
    difficulty: 'medium',
    generate() {
      // Even number of values → median is average of two middle (may end in .5)
      let vals: number[] = []
      do { vals = Array.from({ length: 6 }, () => randInt(20, 60)).sort((a, b) => a - b) } while (vals[2] === vals[3] || vals[3] - vals[2] === 2)
      const median = (vals[2] + vals[3]) / 2
      const correct = `${median}`
      const { options, correctIndex } = makeStringOptions(correct, [`${vals[2]}`, `${vals[3]}`, `${median - 1}`])
      return {
        id: this.id, category: this.category,
        question: `Find the median of: $${vals.join(', ')}$.`,
        options, correctIndex,
        explanation: `6 values → median = average of 3rd and 4th: $\\frac{${vals[2]} + ${vals[3]}}{2} = ${median}$.`
      }
    }
  },
  {
    id: 'ssd-q4',
    category: 'Mean, Median, Mode',
    difficulty: 'easy',
    generate() {
      const mode = randInt(5, 20)
      const fillerVals = new Set<number>()
      while (fillerVals.size < 3) { const v = randInt(1, 25); if (v !== mode) fillerVals.add(v) }
      const dataset = shuffle([mode, mode, mode, ...fillerVals])
      const { options, correctIndex } = makeOptions(mode, 4, 1)
      return {
        id: this.id, category: this.category,
        question: `What is the mode of: $${dataset.join(', ')}$?`,
        options, correctIndex,
        explanation: `$${mode}$ appears 3 times, more than any other value.`
      }
    }
  },
  {
    id: 'ssd-q5',
    category: 'Mean, Median, Mode',
    difficulty: 'hard',
    generate() {
      // Weighted average
      const scores = [randInt(70, 90), randInt(80, 100), randInt(60, 85)]
      const weights = [randInt(2, 4), randInt(2, 4), randInt(2, 4)]
      const totalWeight = weights.reduce((a, b) => a + b, 0)
      const weightedSum = scores.reduce((sum, s, i) => sum + s * weights[i], 0)
      const ans = Math.round(weightedSum / totalWeight)
      const { options, correctIndex } = makeOptions(ans, 4)
      return {
        id: this.id, category: this.category,
        question: `Three tests scored $${scores[0]}$, $${scores[1]}$, $${scores[2]}$ with weights $${weights[0]}$, $${weights[1]}$, $${weights[2]}$. Weighted average? (Rounded to the nearest whole number)`,
        options, correctIndex,
        explanation: `$\\frac{${scores[0]}(${weights[0]}) + ${scores[1]}(${weights[1]}) + ${scores[2]}(${weights[2]})}{${totalWeight}} = \\frac{${weightedSum}}{${totalWeight}} \\approx ${ans}$.`
      }
    }
  },
  {
    id: 'ssd-q6',
    category: 'Mean, Median, Mode',
    difficulty: 'hard',
    generate() {
      const n = randInt(4, 8)
      const targetMean = randInt(75, 95)
      const currentSum = targetMean * n - randInt(70, 100)
      const lastScore = targetMean * n - currentSum
      const { options, correctIndex } = makeOptions(lastScore, 5)
      return {
        id: this.id, category: this.category,
        question: `After $${n - 1}$ tests with sum $${currentSum}$, what score on test $${n}$ gives a mean of $${targetMean}$?`,
        options, correctIndex,
        explanation: `Need total = $${targetMean} \\times ${n} = ${targetMean * n}$. Last score = $${targetMean * n} - ${currentSum} = ${lastScore}$.`
      }
    }
  },
  {
    id: 'ssd-q7',
    category: 'Mean, Median, Mode',
    difficulty: 'easy',
    generate() {
      const vals = [randInt(10, 30), randInt(10, 30), randInt(10, 30), randInt(10, 30), randInt(10, 30)]
      const sorted = [...vals].sort((a, b) => a - b)
      const range = sorted[sorted.length - 1] - sorted[0]
      const { options, correctIndex } = makeOptions(range, 3, 1, [sorted[sorted.length - 1], sorted[2]])
      return {
        id: this.id, category: this.category,
        question: `Find the range of: $${vals.join(', ')}$.`,
        options, correctIndex,
        explanation: `Range = max − min = $${sorted[sorted.length - 1]} - ${sorted[0]} = ${range}$.`
      }
    }
  },

  // ===== SPREAD & VARIABILITY (5 questions) =====
  {
    id: 'ssd-q8',
    category: 'Spread & Variability',
    difficulty: 'easy',
    generate() {
      const correct = 'The values are more spread out'
      const { options, correctIndex } = makeStringOptions(correct, [
        'The mean of the data set is larger',
        'The data set contains more values',
        'The values are packed closer together'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Two data sets are compared. What does a larger standard deviation for one of them indicate about that data set?',
        options, correctIndex,
        explanation: 'Standard deviation measures spread around the mean. Larger SD = more spread.'
      }
    }
  },
  {
    id: 'ssd-q9',
    category: 'Spread & Variability',
    difficulty: 'easy',
    generate() {
      // IQR = Q3 - Q1
      const q1 = randInt(20, 40)
      const q3 = q1 + randInt(10, 30)
      const iqr = q3 - q1
      const { options, correctIndex } = makeOptions(iqr, 5, 1, [q1 + q3 >= 100 ? -1 : q1 + q3, (q1 + q3) / 2])
      return {
        id: this.id, category: this.category,
        question: `If $Q_1 = ${q1}$ and $Q_3 = ${q3}$, what is the IQR?`,
        options, correctIndex,
        explanation: `IQR = $Q_3 - Q_1 = ${q3} - ${q1} = ${iqr}$.`
      }
    }
  },
  {
    id: 'ssd-q10',
    category: 'Spread & Variability',
    difficulty: 'hard',
    generate() {
      const q1 = randInt(20, 40)
      const q3 = q1 + 2 * randInt(8, 15)
      const iqr = q3 - q1
      const lowerFence = q1 - 1.5 * iqr
      const upperFence = q3 + 1.5 * iqr
      const correct = `Above $${upperFence}$ or below $${lowerFence}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `Above $${q3}$ or below $${q1}$`,
        `Above $${q3 + iqr}$`,
        `More than $${iqr}$ from the median`
      ])
      return {
        id: this.id, category: this.category,
        question: `With $Q_1 = ${q1}$, $Q_3 = ${q3}$, IQR = $${iqr}$, a value is an outlier if it is:`,
        options, correctIndex,
        explanation: `Outlier if $< Q_1 - 1.5 \\times IQR = ${lowerFence}$ or $> Q_3 + 1.5 \\times IQR = ${upperFence}$.`
      }
    }
  },
  {
    id: 'ssd-q11',
    category: 'Spread & Variability',
    difficulty: 'easy',
    generate() {
      const setA = [10, 10, 10, 10, 10]
      const setB = [2, 6, 10, 14, 18]
      const correct = 'Set B'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Set A', 'Both are equal', 'Cannot determine'
      ])
      return {
        id: this.id, category: this.category,
        question: `Set A: $${setA.join(', ')}$. Set B: $${setB.join(', ')}$. Which has greater standard deviation?`,
        options, correctIndex,
        explanation: 'Set A has SD = 0 (all identical). Set B has values spread around 10, so SD > 0.'
      }
    }
  },
  {
    id: 'ssd-q12',
    category: 'Spread & Variability',
    difficulty: 'medium',
    generate() {
      const correct = 'Median and IQR'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Mean and standard deviation',
        'Mode and the range',
        'Mean and variance'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Which measures of center and spread are most resistant to outliers?',
        options, correctIndex,
        explanation: 'Median and IQR are resistant to outliers because they depend on middle values, not extremes.'
      }
    }
  },

  // ===== TWO-WAY TABLES (5 questions) =====
  {
    id: 'ssd-q13',
    category: 'Two-Way Tables',
    difficulty: 'easy',
    generate() {
      const a = randInt(15, 30)
      const b = randInt(10, 25)
      const c = randInt(10, 25)
      const d = randInt(15, 30)
      const total = a + b + c + d
      const { options, correctIndex } = makeOptions(total, 10, 1, [a + b, a + c])
      return {
        id: this.id, category: this.category,
        question: `What is the total number of people surveyed in this two-way table?\n\n|  | Yes | No |\n| --- | --- | --- |\n| Male | ${a} | ${c} |\n| Female | ${b} | ${d} |`,
        options, correctIndex,
        explanation: `$${a} + ${b} + ${c} + ${d} = ${total}$.`
      }
    }
  },
  {
    id: 'ssd-q14',
    category: 'Two-Way Tables',
    difficulty: 'medium',
    generate() {
      const a = randInt(20, 40)
      const b = randInt(15, 35)
      const _c = randInt(10, 30)
      const _d = randInt(15, 35)
      const rowTotal = a + b
      const pct = pctRound(a, rowTotal)
      const { options, correctIndex } = makeOptions(pct, 5, 1, [pctRound(b, rowTotal), pctRound(a, b)])
      return {
        id: this.id, category: this.category,
        question: `Of $${rowTotal}$ males, $${a}$ said Yes and $${b}$ said No. What percent of males said Yes? (Rounded to the nearest percent)`,
        options, correctIndex,
        explanation: `$\\frac{${a}}{${rowTotal}} \\times 100 \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q15',
    category: 'Two-Way Tables',
    difficulty: 'medium',
    generate() {
      const cat = randInt(10, 25)
      const dog = randInt(15, 30)
      const both = randInt(5, Math.min(cat, dog))
      const neither = randInt(5, 15)
      const _total = cat + dog - both + neither
      const onlyCat = cat - both
      const { options, correctIndex } = makeOptions(onlyCat, 3)
      return {
        id: this.id, category: this.category,
        question: `$${cat}$ students own cats, $${dog}$ own dogs, $${both}$ own both. How many own only cats?`,
        options, correctIndex,
        explanation: `Only cats = $${cat} - ${both} = ${onlyCat}$.`
      }
    }
  },
  {
    id: 'ssd-q16',
    category: 'Two-Way Tables',
    difficulty: 'hard',
    generate() {
      const sYes = randInt(30, 50)
      const sNo = randInt(20, 40)
      const jYes = randInt(20, 40)
      const jNo = randInt(30, 50)
      const totalYes = sYes + jYes
      const total = sYes + sNo + jYes + jNo
      const pct = pctRound(totalYes, total)
      const { options, correctIndex } = makeOptions(pct, 5, 1, [pctRound(sYes, sYes + sNo), pctRound(jYes, jYes + jNo)])
      return {
        id: this.id, category: this.category,
        question: `Seniors: $${sYes}$ yes, $${sNo}$ no. Juniors: $${jYes}$ yes, $${jNo}$ no. What percent of all students said yes? (Rounded to the nearest percent)`,
        options, correctIndex,
        explanation: `Total yes = $${totalYes}$. Total = $${total}$. $\\frac{${totalYes}}{${total}} \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q17',
    category: 'Two-Way Tables',
    difficulty: 'medium',
    generate() {
      const correct = 'Joint relative frequency'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Marginal relative frequency',
        'Conditional relative frequency',
        'Cumulative frequency'
      ])
      return {
        id: this.id, category: this.category,
        question: 'The ratio of a cell value to the grand total in a two-way table is called:',
        options, correctIndex,
        explanation: 'A cell divided by the grand total gives a joint relative frequency.'
      }
    }
  },

  // ===== SCATTERPLOTS & LINE OF BEST FIT (5 questions) =====
  {
    id: 'ssd-q18',
    category: 'Scatterplots & Best Fit',
    difficulty: 'easy',
    generate() {
      const m = randInt(1, 5)
      const b = randInt(10, 50)
      const x = randInt(5, 15)
      const y = m * x + b
      const { options, correctIndex } = makeOptions(y, 10, 1, [m + b, m * (x + b)])
      return {
        id: this.id, category: this.category,
        question: `A line of best fit is $y = ${lin(m, b)}$. What is the predicted value of $y$ when $x = ${x}$?`,
        options, correctIndex,
        explanation: `$y = ${m === 1 ? '' : m}(${x}) + ${b} = ${m * x} + ${b} = ${y}$.`
      }
    }
  },
  {
    id: 'ssd-q19',
    category: 'Scatterplots & Best Fit',
    difficulty: 'easy',
    generate() {
      const correct = 'Strong negative linear association'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Weak positive association',
        'No association',
        'Non-linear association'
      ])
      return {
        id: this.id, category: this.category,
        question: 'A scatterplot shows points closely following a downward line. This is:',
        options, correctIndex,
        explanation: 'Points close to a line going down = strong negative linear association.'
      }
    }
  },
  {
    id: 'ssd-q20',
    category: 'Scatterplots & Best Fit',
    difficulty: 'easy',
    generate() {
      const m = randNonZero(-5, 5)
      const b = randInt(10, 60)
      const correct = m > 0 ? 'Positive' : 'Negative'
      const { options, correctIndex } = makeStringOptions(correct, [
        m > 0 ? 'Negative' : 'Positive',
        'Zero',
        'Undefined'
      ])
      return {
        id: this.id, category: this.category,
        question: `If the line of best fit for a scatterplot is $y = ${lin(m, b)}$, the association between $x$ and $y$ is:`,
        options, correctIndex,
        explanation: `The slope, $${m}$, is ${m > 0 ? 'positive' : 'negative'}, so the association is ${correct.toLowerCase()}.`
      }
    }
  },
  {
    id: 'ssd-q21',
    category: 'Scatterplots & Best Fit',
    difficulty: 'medium',
    generate() {
      const m = randInt(2, 6)
      const correct = `$y$ increases by $${m}$ for each $1$-unit increase in $x$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x$ increases by $${m}$ for each $1$-unit increase in $y$`,
        `$y$ equals $${m}$ when $x$ equals $0$`,
        `$y$ is always exactly $${m}$ times as large as $x$`
      ])
      return {
        id: this.id, category: this.category,
        question: `In the model $y = ${m}x + ${randInt(5, 30)}$, what does the slope $${m}$ mean?`,
        options, correctIndex,
        explanation: `The slope tells us $y$ changes by $${m}$ for each unit increase in $x$.`
      }
    }
  },
  {
    id: 'ssd-q22',
    category: 'Scatterplots & Best Fit',
    difficulty: 'medium',
    generate() {
      const rChoices = [
        { r: '0.95', desc: 'very strong positive' },
        { r: '-0.88', desc: 'strong negative' },
        { r: '0.12', desc: 'very weak positive' },
        { r: '-0.02', desc: 'essentially none' },
      ]
      const pick = rChoices[randInt(0, rChoices.length - 1)]
      const correct = pick.desc
      const others = rChoices.filter(c => c.r !== pick.r).map(c => c.desc)
      const { options, correctIndex } = makeStringOptions(correct, others.slice(0, 3))
      return {
        id: this.id, category: this.category,
        question: `A correlation coefficient is $r = ${pick.r}$. This suggests:`,
        options, correctIndex,
        explanation: `$r = ${pick.r}$ indicates a ${pick.desc} linear relationship.`
      }
    }
  },

  // ===== PROBABILITY (6 questions) =====
  {
    id: 'ssd-q23',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      const total = randInt(20, 50)
      const favorable = randInt(5, total - 5)
      const pct = pctRound(favorable, total)
      const { options, correctIndex } = makeOptions(pct, 5, 1, [pctRound(total - favorable, total), pctRound(favorable, total - favorable)])
      return {
        id: this.id, category: this.category,
        question: `A bag has $${total}$ marbles, and $${favorable}$ of them are red. If one marble is drawn at random, what is the probability that it is red, as a percent rounded to the nearest whole percent?`,
        options, correctIndex,
        explanation: `The probability is $\\frac{${favorable}}{${total}}$, and $\\frac{${favorable}}{${total}} \\times 100 \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q24',
    category: 'Probability',
    difficulty: 'medium',
    generate() {
      const total = randInt(30, 60)
      const eventA = randInt(10, 25)
      const complement = total - eventA
      const pct = pctRound(complement, total)
      const { options, correctIndex } = makeOptions(pct, 5, 1, [pctRound(eventA, total)])
      return {
        id: this.id, category: this.category,
        question: `In a class of $${total}$ students, $${eventA}$ like math. If a student is chosen at random, what is the probability that the student does NOT like math, as a percent rounded to the nearest whole percent?`,
        options, correctIndex,
        explanation: `$${complement}$ of the $${total}$ students do not like math: $\\frac{${complement}}{${total}} \\times 100 \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q25',
    category: 'Probability',
    difficulty: 'hard',
    generate() {
      // Conditional reasoning from a two-way table, asked in words (the SAT's
      // form) — replaced an independent-events product question per the
      // 2026-08-17 congruence audit (SAT-CONTENT-AUDIT.md).
      // Resample until all four fractions differ in VALUE: when b*c === a*d the
      // "passed overall" distractor equals the conditional answer, and b === a
      // made two options identical.
      let a = 0, b = 0, c = 0, d = 0
      for (;;) {
        a = randInt(12, 24); b = randInt(6, 18); c = randInt(8, 16); d = randInt(12, 24)
        const t = a + b + c + d
        const vals = [a / (a + b), a / t, (a + c) / t, b / (a + b)]
        if (new Set(vals.map(v => v.toFixed(9))).size === 4) break
      }
      const correct = `$\\frac{${a}}{${a + b}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{${a}}{${a + b + c + d}}$`,
        `$\\frac{${a + c}}{${a + b + c + d}}$`,
        `$\\frac{${b}}{${a + b}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `|  | Passed | Did Not Pass |\n|---|---|---|\n| Attended review | ${a} | ${b} |\n| Skipped review | ${c} | ${d} |\n\nIf a student is selected at random from those who attended the review session, what is the probability the student passed?`,
        options, correctIndex,
        explanation: `Restrict to the "attended review" row: ${a} passed out of ${a + b} attendees, so $\\frac{${a}}{${a + b}}$.`
      }
    }
  },
  {
    id: 'ssd-q26',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      const red = randInt(3, 8)
      let blue = randInt(3, 8)
      while (blue === red) blue = randInt(3, 8)
      const total = red + blue
      const f = (n: number, d: number) => { const g = gcd(n, d); return `$\\frac{${n / g}}{${d / g}}$` }
      const { options, correctIndex } = makeStringOptions('$1$', [f(red, total), f(blue, total), '$\\frac{1}{2}$'])
      return {
        id: this.id, category: this.category,
        question: `A bag holds only $${red}$ red balls and $${blue}$ blue balls. If one ball is drawn at random, what is the probability that it is red OR blue?`,
        options, correctIndex,
        explanation: `Every ball in the bag is red or blue, so the event is certain: the probability is $\\frac{${total}}{${total}} = 1$.`
      }
    }
  },
  {
    id: 'ssd-q27',
    category: 'Probability',
    difficulty: 'medium',
    generate() {
      const faces = 6
      const n = [2, 4][randInt(0, 1)]
      const favorable = faces - n + 1
      const correct = `$\\frac{${favorable}}{${faces}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{${n}}{${faces}}$`,
        `$\\frac{1}{${faces}}$`,
        `$\\frac{${favorable - 1}}{${faces}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `A fair six-sided die is rolled once. What is the probability of rolling a number greater than or equal to ${n}?`,
        options, correctIndex,
        explanation: `The outcomes ${Array.from({ length: favorable }, (_, i) => n + i).join(', ')} are at least ${n}: ${favorable} of the ${faces} equally likely outcomes, so the probability is $\\frac{${favorable}}{${faces}}$.`
      }
    }
  },
  {
    id: 'ssd-q28',
    category: 'Probability',
    difficulty: 'easy',
    generate() {
      const total = 52
      const suit = 13
      const pct = Math.round((suit / total) * 100)
      const suitNames = ['hearts', 'diamonds', 'clubs', 'spades']
      const pick = suitNames[randInt(0, 3)]
      const { options, correctIndex } = makeStringOptions(`${pct}`, ['13', '50', '75'])
      return {
        id: this.id, category: this.category,
        question: `A standard 52-card deck has 13 cards in each of 4 suits. If one card is drawn at random, what is the probability, as a percent, that it is one of the ${pick}?`,
        options, correctIndex,
        explanation: `$\\frac{13}{52} = \\frac{1}{4} = 25\\%$.`
      }
    }
  },

  // ===== STUDY DESIGN (5 questions) =====
  {
    id: 'ssd-q29',
    category: 'Study Design',
    difficulty: 'medium',
    generate() {
      const correct = 'Randomized experiment'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Observational study',
        'Sample survey',
        'Census of all the patients'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Researchers randomly assign patients to treatment or placebo groups. This is a:',
        options, correctIndex,
        explanation: 'Random assignment to groups = randomized controlled experiment.'
      }
    }
  },
  {
    id: 'ssd-q30',
    category: 'Study Design',
    difficulty: 'medium',
    generate() {
      const correct = 'Observational study'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Experiment',
        'Controlled trial',
        'Complete census'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Researchers track eating habits and health outcomes without intervening. This is:',
        options, correctIndex,
        explanation: 'No treatment is imposed → observational study.'
      }
    }
  },
  {
    id: 'ssd-q31',
    category: 'Study Design',
    difficulty: 'medium',
    generate() {
      const correct = 'The sample does not represent everyone'
      const { options, correctIndex } = makeStringOptions(correct, [
        'The sample is too large to analyze',
        'Exercise habits cannot be measured by a survey',
        'Gym members always answer dishonestly'
      ])
      return {
        id: this.id, category: this.category,
        question: 'A survey only asks people at a gym about exercise habits. The main concern is:',
        options, correctIndex,
        explanation: 'Gym-goers are not representative of the general population → sampling bias.'
      }
    }
  },
  {
    id: 'ssd-q32',
    category: 'Study Design',
    difficulty: 'medium',
    generate() {
      const correct = 'No, because correlation does not show cause'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Yes, because the two variables rise and fall together',
        'Yes, because the data show a strong correlation',
        'No, because the two events happen in different places'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Ice cream sales and drownings are correlated. Can we conclude ice cream causes drownings?',
        options, correctIndex,
        explanation: 'Correlation does not imply causation. A confounding variable (hot weather) likely explains both.'
      }
    }
  },
  {
    id: 'ssd-q33',
    category: 'Study Design',
    difficulty: 'hard',
    generate() {
      const n = randInt(100, 500)
      const margin = randInt(2, 5)
      const pct = randInt(40, 60)
      const low = pct - margin
      const high = pct + margin
      const correct = `$${low}\\%$ to $${high}\\%$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${pct}\\%$ to $${high}\\%$`,
        `$${pct - 2 * margin}\\%$ to $${pct + 2 * margin}\\%$`,
        `$${low}\\%$ to $${pct}\\%$`
      ])
      return {
        id: this.id, category: this.category,
        question: `A poll of $${n}$ people finds $${pct}\\%$ support with margin of error $\\pm${margin}\\%$. Which range of values for the percentage of the whole population is plausible?`,
        options, correctIndex,
        explanation: `Plausible values extend the margin of error on both sides of the estimate: $${pct}\\% \\pm ${margin}\\%$, from $${low}\\%$ to $${high}\\%$.`
      }
    }
  },

  // ===== REVIEW (7 questions) =====
  {
    id: 'ssd-q34',
    category: 'Review',
    difficulty: 'hard',
    generate() {
      const vals = Array.from({ length: 5 }, () => randInt(50, 100))
      const sorted = [...vals].sort((a, b) => a - b)
      const median = sorted[2]
      const sum = vals.reduce((s, v) => s + v, 0)
      const meanExact = sum / 5
      const meanStr = (sum / 5).toFixed(1)
      const correct = meanExact > median ? 'The mean is larger' : meanExact < median ? 'The median is larger' : 'They are equal'
      const { options, correctIndex } = makeStringOptions(correct, [
        'The mean is larger',
        'The median is larger',
        'They are equal',
        'The mode is larger than both'
      ])
      return {
        id: this.id, category: this.category,
        question: `For the data set $${vals.join(', ')}$, which statement correctly compares the mean and the median?`,
        options, correctIndex,
        explanation: `Mean $= \\frac{${sum}}{5} = ${meanStr}$. In order the values are $${sorted.join(', ')}$, so the median is $${median}$. ${correct}.`
      }
    }
  },
  {
    id: 'ssd-q35',
    category: 'Review',
    difficulty: 'easy',
    generate() {
      // Relative frequency read from a frequency table (was a twin of ssd-q23's "k of n as a percent")
      let c: number[] = []
      let total = 0
      do { c = [randInt(5, 20), randInt(5, 20), randInt(5, 20), randInt(5, 20)]; total = c.reduce((a, b) => a + b, 0) } while ((100 * (c[1] + c[2])) % total !== 0 || c[1] === c[2])
      const pct = 100 * (c[1] + c[2]) / total
      const { options, correctIndex } = makeOptions(pct, 4, 1, [100 * c[1] / total, 100 * c[2] / total].filter(v => Number.isInteger(v)))
      return {
        id: this.id, category: this.category,
        question: `A group of $${total}$ students chose a favorite sport.\n\n| Sport | Soccer | Basketball | Tennis | Other |\n| --- | --- | --- | --- | --- |\n| Students | ${c[0]} | ${c[1]} | ${c[2]} | ${c[3]} |\n\nWhat percent of the students chose basketball or tennis?`,
        options, correctIndex,
        explanation: `$${c[1]} + ${c[2]} = ${c[1] + c[2]}$ of the $${total}$ students: $\\frac{${c[1] + c[2]}}{${total}} \\times 100 = ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q36',
    category: 'Review',
    difficulty: 'easy',
    generate() {
      const m = randInt(2, 5)
      const b = randInt(5, 30)
      const x = randInt(8, 15)
      const predicted = m * x + b
      let actual = predicted
      while (actual === predicted) actual = predicted + randInt(-10, 10)
      const residual = actual - predicted
      const { options, correctIndex } = makeOptions(residual, 5, -Infinity, [-residual])
      return {
        id: this.id, category: this.category,
        question: `Predicted value = $${predicted}$, actual = $${actual}$. What is the residual?`,
        options, correctIndex,
        explanation: `Residual = actual − predicted = $${actual} - ${predicted} = ${residual}$.`
      }
    }
  },
  {
    id: 'ssd-q37',
    category: 'Review',
    difficulty: 'medium',
    generate() {
      const correct = 'It supports causal conclusions'
      const { options, correctIndex } = makeStringOptions(correct, [
        'It guarantees a larger sample size',
        'It lets results apply to every population',
        'It removes the need for a control group'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Why is random assignment important in experiments?',
        options, correctIndex,
        explanation: 'Random assignment controls for confounding variables, enabling causal conclusions.'
      }
    }
  },
  {
    id: 'ssd-q38',
    category: 'Review',
    difficulty: 'hard',
    generate() {
      // Conceptual SD comparison — the SAT never asks students to COMPUTE a
      // standard deviation (replaced a formula-computation item per the
      // 2026-08-17 congruence audit).
      const center = randInt(20, 30)
      const tight = [center - 1, center, center, center + 1, center]
      const spread = [center - 12, center - 5, center, center + 6, center + 11]
      const correct = 'Data Set B — its values are farther from the mean'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Data Set A — its values are closer together',
        'Both have the same standard deviation',
        'It cannot be determined without a calculator'
      ])
      return {
        id: this.id, category: this.category,
        question: `Data Set A: $${tight.join(', ')}$\nData Set B: $${spread.join(', ')}$\n\nBoth data sets have a mean of about ${center}. Which statement correctly compares their standard deviations?`,
        options, correctIndex,
        explanation: `Standard deviation measures spread around the mean. Set B's values are much more spread out, so Set B has the larger standard deviation — no computation needed.`
      }
    }
  },
  {
    id: 'ssd-q39',
    category: 'Review',
    difficulty: 'medium',
    generate() {
      const a = randInt(10, 25)
      const _b = randInt(10, 25)
      const c = randInt(10, 25)
      const _d = randInt(10, 25)
      const colTotal = a + c
      const conditionalPct = pctRound(a, colTotal)
      const { options, correctIndex } = makeOptions(conditionalPct, 5, 1, [pctRound(a, a + _b), pctRound(a, a + _b + c + _d)])
      return {
        id: this.id, category: this.category,
        question: `What percent of Group 1 said Yes? (Rounded to the nearest percent)\n\n|  | Yes | No |\n| --- | --- | --- |\n| Group 1 | ${a} | ${c} |\n| Group 2 | ${_b} | ${_d} |`,
        options, correctIndex,
        explanation: `$\\frac{${a}}{${a} + ${c}} = \\frac{${a}}{${colTotal}} \\approx ${conditionalPct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q40',
    category: 'Review',
    difficulty: 'hard',
    generate() {
      const correct = 'Larger random samples give smaller margins of error'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Larger random samples give larger margins of error',
        'Larger samples remove every source of bias',
        'Sample size has no effect on the margin of error'
      ])
      return {
        id: this.id, category: this.category,
        question: 'How does sample size affect margin of error?',
        options, correctIndex,
        explanation: 'Larger random samples produce more precise estimates, so the margin of error shrinks as the sample size grows. Sample size does not fix bias from a poorly chosen sample.'
      }
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
  const categories = Object.keys(byCategory)
  const selected: QuestionTemplate[] = []
  const usedIds = new Set<string>()
  const shuffledCats = shuffle(categories)
  for (const cat of shuffledCats) {
    if (selected.length >= count) break
    const pool = byCategory[cat]
    const q = pool[Math.floor(Math.random() * pool.length)]
    if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id) }
  }
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  const shuffledRemaining = shuffle(remaining)
  for (const q of shuffledRemaining) {
    if (selected.length >= count) break
    selected.push(q); usedIds.add(q.id)
  }
  return shuffle(selected).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
}
