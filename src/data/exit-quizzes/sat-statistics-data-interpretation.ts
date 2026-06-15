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
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
  const fillers = ['None of the above', 'Cannot be determined', 'None of these']
  for (const f of fillers) { if (unique.length >= 3) break; if (f !== correct && !unique.includes(f)) unique.push(f) }
  const all = shuffle([correct, ...unique])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  // ===== MEAN, MEDIAN, MODE (7 questions) =====
  {
    id: 'ssd-q1',
    category: 'Mean, Median, Mode',
    generate() {
      const n = 5
      const vals = Array.from({ length: n }, () => randInt(60, 100))
      const sum = vals.reduce((a, b) => a + b, 0)
      const mean = sum / n
      const ans = Math.round(mean * 10) / 10
      const { options, correctIndex } = makeOptions(Math.round(mean), 3)
      return {
        id: this.id, category: this.category,
        question: `Find the mean of: $${vals.join(', ')}$.`,
        options, correctIndex,
        explanation: `Mean = $\\frac{${vals.join(' + ')}}{${n}} = \\frac{${sum}}{${n}} = ${ans}$.`
      }
    }
  },
  {
    id: 'ssd-q2',
    category: 'Mean, Median, Mode',
    generate() {
      const n = 7
      const vals = Array.from({ length: n }, () => randInt(10, 50)).sort((a, b) => a - b)
      const median = vals[3]
      const { options, correctIndex } = makeOptions(median, 4)
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
    generate() {
      // Even number of values → median is average of two middle
      const vals = Array.from({ length: 6 }, () => randInt(20, 60)).sort((a, b) => a - b)
      const median = (vals[2] + vals[3]) / 2
      const ans = Math.round(median * 10) / 10
      const { options, correctIndex } = makeOptions(Math.round(median), 3)
      return {
        id: this.id, category: this.category,
        question: `Find the median of: $${vals.join(', ')}$.`,
        options, correctIndex,
        explanation: `6 values → median = average of 3rd and 4th: $\\frac{${vals[2]} + ${vals[3]}}{2} = ${ans}$.`
      }
    }
  },
  {
    id: 'ssd-q4',
    category: 'Mean, Median, Mode',
    generate() {
      const mode = randInt(5, 20)
      const others = [mode, mode, mode, randInt(1, 25), randInt(1, 25), randInt(1, 25)]
      const dataset = shuffle(others)
      const { options, correctIndex } = makeOptions(mode, 4)
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
        question: `Three tests scored $${scores[0]}$, $${scores[1]}$, $${scores[2]}$ with weights $${weights[0]}$, $${weights[1]}$, $${weights[2]}$. Weighted average?`,
        options, correctIndex,
        explanation: `$\\frac{${scores[0]}(${weights[0]}) + ${scores[1]}(${weights[1]}) + ${scores[2]}(${weights[2]})}{${totalWeight}} = \\frac{${weightedSum}}{${totalWeight}} \\approx ${ans}$.`
      }
    }
  },
  {
    id: 'ssd-q6',
    category: 'Mean, Median, Mode',
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
    generate() {
      const vals = [randInt(10, 30), randInt(10, 30), randInt(10, 30), randInt(10, 30), randInt(10, 30)]
      const sorted = [...vals].sort((a, b) => a - b)
      const range = sorted[sorted.length - 1] - sorted[0]
      const { options, correctIndex } = makeOptions(range, 3)
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
    generate() {
      const correct = 'The data values are more spread out from the mean'
      const { options, correctIndex } = makeStringOptions(correct, [
        'The mean is larger',
        'The data has more values',
        'The median equals the mean'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What does a larger standard deviation indicate?',
        options, correctIndex,
        explanation: 'Standard deviation measures spread around the mean. Larger SD = more spread.'
      }
    }
  },
  {
    id: 'ssd-q9',
    category: 'Spread & Variability',
    generate() {
      // IQR = Q3 - Q1
      const q1 = randInt(20, 40)
      const q3 = q1 + randInt(10, 30)
      const iqr = q3 - q1
      const { options, correctIndex } = makeOptions(iqr, 5)
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
    generate() {
      const q1 = randInt(20, 40)
      const q3 = q1 + randInt(15, 30)
      const iqr = q3 - q1
      const lowerFence = q1 - 1.5 * iqr
      const upperFence = q3 + 1.5 * iqr
      const _outlier = upperFence + randInt(5, 20)
      const ans = Math.round(upperFence)
      const correct = `Above $${ans}$ or below $${Math.round(lowerFence)}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `Above $${q3}$ or below $${q1}$`,
        `Above $${q3 + iqr}$`,
        `More than $${iqr}$ from the median`
      ])
      return {
        id: this.id, category: this.category,
        question: `With $Q_1 = ${q1}$, $Q_3 = ${q3}$, IQR = $${iqr}$, a value is an outlier if it is:`,
        options, correctIndex,
        explanation: `Outlier if $< Q_1 - 1.5 \\times IQR = ${Math.round(lowerFence)}$ or $> Q_3 + 1.5 \\times IQR = ${ans}$.`
      }
    }
  },
  {
    id: 'ssd-q11',
    category: 'Spread & Variability',
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
    generate() {
      const correct = 'Median and IQR'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Mean and standard deviation',
        'Mode and range',
        'Mean and mode'
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
    generate() {
      const a = randInt(15, 30)
      const b = randInt(10, 25)
      const c = randInt(10, 25)
      const d = randInt(15, 30)
      const total = a + b + c + d
      const { options, correctIndex } = makeOptions(total, 10)
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
    generate() {
      const a = randInt(20, 40)
      const b = randInt(15, 35)
      const _c = randInt(10, 30)
      const _d = randInt(15, 35)
      const rowTotal = a + b
      const pct = Math.round((a / rowTotal) * 100)
      const { options, correctIndex } = makeOptions(pct, 5)
      return {
        id: this.id, category: this.category,
        question: `Of $${rowTotal}$ males, $${a}$ said Yes and $${b}$ said No. What percent of males said Yes?`,
        options, correctIndex,
        explanation: `$\\frac{${a}}{${rowTotal}} \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q15',
    category: 'Two-Way Tables',
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
    generate() {
      const sYes = randInt(30, 50)
      const sNo = randInt(20, 40)
      const jYes = randInt(20, 40)
      const jNo = randInt(30, 50)
      const totalYes = sYes + jYes
      const total = sYes + sNo + jYes + jNo
      const pct = Math.round((totalYes / total) * 100)
      const { options, correctIndex } = makeOptions(pct, 5)
      return {
        id: this.id, category: this.category,
        question: `Seniors: $${sYes}$ yes, $${sNo}$ no. Juniors: $${jYes}$ yes, $${jNo}$ no. What percent of all students said yes?`,
        options, correctIndex,
        explanation: `Total yes = $${totalYes}$. Total = $${total}$. $\\frac{${totalYes}}{${total}} \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q17',
    category: 'Two-Way Tables',
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
    generate() {
      const m = randInt(1, 5)
      const b = randInt(10, 50)
      const x = randInt(5, 15)
      const y = m * x + b
      const { options, correctIndex } = makeOptions(y, 10)
      return {
        id: this.id, category: this.category,
        question: `A line of best fit is $y = ${m}x + ${b}$. Predict $y$ when $x = ${x}$.`,
        options, correctIndex,
        explanation: `$y = ${m}(${x}) + ${b} = ${m * x} + ${b} = ${y}$.`
      }
    }
  },
  {
    id: 'ssd-q19',
    category: 'Scatterplots & Best Fit',
    generate() {
      const correct = 'Strong negative linear association'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Strong positive linear association',
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
        question: `If the line of best fit is $y = ${m}x + ${b}$, the correlation is:`,
        options, correctIndex,
        explanation: `Slope = $${m}$ which is ${m > 0 ? 'positive' : 'negative'}, so correlation is ${correct.toLowerCase()}.`
      }
    }
  },
  {
    id: 'ssd-q21',
    category: 'Scatterplots & Best Fit',
    generate() {
      const m = randInt(2, 6)
      const correct = `For each increase of $1$ in $x$, $y$ increases by $${m}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$y$ starts at $${m}$`,
        `$x$ and $y$ are always $${m}$ apart`,
        `$y$ is always $${m}$ times $x$`
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
    generate() {
      const total = randInt(20, 50)
      const favorable = randInt(5, total - 5)
      const pct = Math.round((favorable / total) * 100)
      const { options, correctIndex } = makeOptions(pct, 5)
      return {
        id: this.id, category: this.category,
        question: `A bag has $${total}$ marbles, $${favorable}$ are red. Probability of drawing red? (as %)`,
        options, correctIndex,
        explanation: `$P = \\frac{${favorable}}{${total}} \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q24',
    category: 'Probability',
    generate() {
      const total = randInt(30, 60)
      const eventA = randInt(10, 25)
      const complement = total - eventA
      const pct = Math.round((complement / total) * 100)
      const { options, correctIndex } = makeOptions(pct, 5)
      return {
        id: this.id, category: this.category,
        question: `$${eventA}$ of $${total}$ students like math. Probability a random student does NOT like math? (as %)`,
        options, correctIndex,
        explanation: `$P(\\text{not math}) = 1 - \\frac{${eventA}}{${total}} = \\frac{${complement}}{${total}} \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q25',
    category: 'Probability',
    generate() {
      // Two independent events
      const p1Num = randInt(1, 5)
      const p1Den = 6
      const p2Num = randInt(1, 5)
      const p2Den = 6
      const prodNum = p1Num * p2Num
      const prodDen = p1Den * p2Den
      const correct = `$\\frac{${prodNum}}{${prodDen}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{${p1Num + p2Num}}{${p1Den}}$`,
        `$\\frac{${p1Num}}{${prodDen}}$`,
        `$\\frac{${prodNum}}{${p1Den}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Two dice are rolled. $P(\\text{first shows ${p1Num}+}) = \\frac{${p1Num}}{${p1Den}}$; $P(\\text{second shows ${p2Num}+}) = \\frac{${p2Num}}{${p2Den}}$. Find $P(\\text{both})$.`,
        options, correctIndex,
        explanation: `Independent events: $P(A \\cap B) = \\frac{${p1Num}}{${p1Den}} \\times \\frac{${p2Num}}{${p2Den}} = \\frac{${prodNum}}{${prodDen}}$.`
      }
    }
  },
  {
    id: 'ssd-q26',
    category: 'Probability',
    generate() {
      const red = randInt(3, 8)
      const blue = randInt(3, 8)
      const total = red + blue
      const _pRed = Math.round((red / total) * 100)
      const _pBlue = Math.round((blue / total) * 100)
      const pRedOrBlue = 100
      const { options, correctIndex } = makeOptions(pRedOrBlue, 10)
      return {
        id: this.id, category: this.category,
        question: `A bag has $${red}$ red and $${blue}$ blue balls (only). Probability of drawing red OR blue? (as %)`,
        options, correctIndex,
        explanation: `Red and blue are the only colors, so $P = 100\\%$.`
      }
    }
  },
  {
    id: 'ssd-q27',
    category: 'Probability',
    generate() {
      const faces = 6
      const n = randInt(1, 6)
      const favorable = faces - n + 1
      const correct = `$\\frac{${favorable}}{${faces}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{${n}}{${faces}}$`,
        `$\\frac{1}{${faces}}$`,
        `$\\frac{${favorable - 1}}{${faces}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Rolling a fair die, what is $P(\\text{rolling} \\geq ${n})$?`,
        options, correctIndex,
        explanation: `Values $\\geq ${n}$: ${Array.from({ length: favorable }, (_, i) => n + i).join(', ')}. $P = \\frac{${favorable}}{${faces}}$.`
      }
    }
  },
  {
    id: 'ssd-q28',
    category: 'Probability',
    generate() {
      const total = 52
      const suit = 13
      const pct = Math.round((suit / total) * 100)
      const suitNames = ['hearts', 'diamonds', 'clubs', 'spades']
      const pick = suitNames[randInt(0, 3)]
      const { options, correctIndex } = makeOptions(pct, 5)
      return {
        id: this.id, category: this.category,
        question: `From a standard 52-card deck, probability of drawing a ${pick}? (as %)`,
        options, correctIndex,
        explanation: `$\\frac{13}{52} = \\frac{1}{4} = 25\\%$.`
      }
    }
  },

  // ===== STUDY DESIGN (5 questions) =====
  {
    id: 'ssd-q29',
    category: 'Study Design',
    generate() {
      const correct = 'Randomized controlled experiment'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Observational study',
        'Survey',
        'Census'
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
    generate() {
      const correct = 'Observational study'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Experiment',
        'Clinical trial',
        'Census'
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
    generate() {
      const correct = 'Bias — the sample is not representative'
      const { options, correctIndex } = makeStringOptions(correct, [
        'The sample is too large',
        'This is perfectly valid',
        'It is a census'
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
    generate() {
      const correct = 'No — correlation does not imply causation'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Yes — the data proves it',
        'Only if the sample is large',
        'Yes — if the correlation is strong'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Ice cream sales and drownings are correlated. Can we conclude ice cream causes drownings?',
        options, correctIndex,
        explanation: 'Correlation ≠ causation. A confounding variable (hot weather) likely explains both.'
      }
    }
  },
  {
    id: 'ssd-q33',
    category: 'Study Design',
    generate() {
      const n = randInt(100, 500)
      const margin = randInt(2, 5)
      const pct = randInt(40, 60)
      const low = pct - margin
      const high = pct + margin
      const correct = `$${low}\\%$ to $${high}\\%$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${pct}\\%$ exactly`,
        `$${pct - 2 * margin}\\%$ to $${pct + 2 * margin}\\%$`,
        `$${low}\\%$ to $${pct}\\%$`
      ])
      return {
        id: this.id, category: this.category,
        question: `A poll of $${n}$ people finds $${pct}\\%$ support with margin of error $\\pm${margin}\\%$. The confidence interval is:`,
        options, correctIndex,
        explanation: `$${pct}\\% \\pm ${margin}\\% = [${low}\\%, ${high}\\%]$.`
      }
    }
  },

  // ===== REVIEW (7 questions) =====
  {
    id: 'ssd-q34',
    category: 'Review',
    generate() {
      const vals = Array.from({ length: 5 }, () => randInt(50, 100))
      const sorted = [...vals].sort((a, b) => a - b)
      const median = sorted[2]
      const mean = Math.round(vals.reduce((s, v) => s + v, 0) / 5)
      const _diff = Math.abs(mean - median)
      const correct = mean > median ? 'Mean is larger' : mean < median ? 'Median is larger' : 'They are equal'
      const { options, correctIndex } = makeStringOptions(correct, [
        mean > median ? 'Median is larger' : 'Mean is larger',
        'They are equal',
        'Cannot determine'
      ])
      return {
        id: this.id, category: this.category,
        question: `Data: $${vals.join(', ')}$. Mean = $${mean}$, Median = $${median}$. Which is larger?`,
        options, correctIndex,
        explanation: `Mean = $${mean}$, Median = $${median}$. ${correct}.`
      }
    }
  },
  {
    id: 'ssd-q35',
    category: 'Review',
    generate() {
      const total = randInt(80, 200)
      const eventA = randInt(20, total - 20)
      const pct = Math.round((eventA / total) * 100)
      const { options, correctIndex } = makeOptions(pct, 5)
      return {
        id: this.id, category: this.category,
        question: `In a group of $${total}$, $${eventA}$ prefer option A. What is the relative frequency? (as %)`,
        options, correctIndex,
        explanation: `$\\frac{${eventA}}{${total}} \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q36',
    category: 'Review',
    generate() {
      const m = randInt(2, 5)
      const b = randInt(5, 30)
      const x = randInt(8, 15)
      const predicted = m * x + b
      const actual = predicted + randInt(-10, 10)
      const residual = actual - predicted
      const { options, correctIndex } = makeOptions(residual, 5)
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
    generate() {
      const correct = 'To allow cause-and-effect conclusions'
      const { options, correctIndex } = makeStringOptions(correct, [
        'To increase sample size',
        'To reduce cost',
        'To make the study shorter'
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
    generate() {
      const n = 5
      const vals = Array.from({ length: n }, () => randInt(10, 40))
      const mean = vals.reduce((s, v) => s + v, 0) / n
      const sqDiffs = vals.map(v => (v - mean) ** 2)
      const variance = sqDiffs.reduce((s, v) => s + v, 0) / n
      const sd = Math.round(Math.sqrt(variance) * 10) / 10
      const { options, correctIndex } = makeOptions(Math.round(sd), 3)
      return {
        id: this.id, category: this.category,
        question: `Data: $${vals.join(', ')}$. Mean ≈ $${Math.round(mean * 10) / 10}$. The standard deviation is closest to:`,
        options, correctIndex,
        explanation: `$\\sigma = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n}} \\approx ${sd}$.`
      }
    }
  },
  {
    id: 'ssd-q39',
    category: 'Review',
    generate() {
      const a = randInt(10, 25)
      const _b = randInt(10, 25)
      const c = randInt(10, 25)
      const _d = randInt(10, 25)
      const colTotal = a + c
      const conditionalPct = Math.round((a / colTotal) * 100)
      const { options, correctIndex } = makeOptions(conditionalPct, 5)
      return {
        id: this.id, category: this.category,
        question: `What percent of Group 1 said Yes?\n\n|  | Yes | No |\n| --- | --- | --- |\n| Group 1 | ${a} | ${c} |`,
        options, correctIndex,
        explanation: `$\\frac{${a}}{${a} + ${c}} = \\frac{${a}}{${colTotal}} \\approx ${conditionalPct}\\%$.`
      }
    }
  },
  {
    id: 'ssd-q40',
    category: 'Review',
    generate() {
      const correct = 'Larger samples generally give smaller margins of error'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Larger samples always eliminate bias',
        'Sample size does not affect margin of error',
        'Larger samples increase the margin of error'
      ])
      return {
        id: this.id, category: this.category,
        question: 'How does sample size affect margin of error?',
        options, correctIndex,
        explanation: 'Margin of error ∝ $1/\\sqrt{n}$,' + ' so larger samples produce smaller margins.' 
      }
    }
  },
]

function randNonZero(min: number, max: number): number {
  let n = 0
  while (n === 0) n = randInt(min, max)
  return n
}

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
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
  return shuffle(selected).map(t => t.generate())
}
