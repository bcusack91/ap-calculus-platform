/**
 * Exit Quiz Question Pool — SAT Exponential Functions
 * 40 questions covering exponential growth & decay, compound interest,
 * graphing exponentials, exponential equations, and applications.
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

function randNonZero(min: number, max: number): number {
  let n = 0
  while (n === 0) n = randInt(min, max)
  return n
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
  // ===== EXPONENTIAL GROWTH (7 questions) =====
  {
    id: 'sef-q1',
    category: 'Exponential Growth',
    generate() {
      const a = randInt(50, 500)
      const r = randInt(5, 20)
      const t = randInt(1, 3)
      const base = 1 + r / 100
      const ans = Math.round(a * Math.pow(base, t))
      const { options, correctIndex } = makeOptions(ans, Math.max(50, Math.round(ans * 0.1)))
      return {
        id: this.id, category: this.category,
        question: `A population of $${a}$ grows $${r}\\%$ per year. What is the population after $${t}$ year${t > 1 ? 's' : ''}?`,
        options, correctIndex,
        explanation: `$${a}(${base})^{${t}} \\approx ${ans}$.`
      }
    }
  },
  {
    id: 'sef-q2',
    category: 'Exponential Growth',
    generate() {
      const a = randInt(100, 1000)
      const r = randInt(5, 25)
      const base = 1 + r / 100
      const correct = `$y = ${a}(${base})^t$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$y = ${a} + ${r}t$`,
        `$y = ${a}(${r})^t$`,
        `$y = ${a}(${(100 - r) / 100})^t$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Write an equation for a quantity starting at $${a}$ growing $${r}\\%$ per year.`,
        options, correctIndex,
        explanation: `Growth: $y = a(1 + r)^t = ${a}(1 + ${r / 100})^t = ${a}(${base})^t$.`
      }
    }
  },
  {
    id: 'sef-q3',
    category: 'Exponential Growth',
    generate() {
      const initial = randInt(2, 8) * 100
      const doublings = randInt(1, 4)
      const period = randInt(2, 10)
      const time = period * doublings
      const ans = initial * Math.pow(2, doublings)
      const { options, correctIndex } = makeOptions(ans, Math.round(ans * 0.15))
      return {
        id: this.id, category: this.category,
        question: `Bacteria start at $${initial}$ and double every $${period}$ hours. How many after $${time}$ hours?`,
        options, correctIndex,
        explanation: `$${time}/${period} = ${doublings}$ doublings. $${initial} \\times 2^{${doublings}} = ${ans}$.`
      }
    }
  },
  {
    id: 'sef-q4',
    category: 'Exponential Growth',
    generate() {
      const correct = 'The base $b$ is greater than $1$'
      const { options, correctIndex } = makeStringOptions(correct, [
        'The base $b$ is between $0$ and $1$',
        'The exponent is negative',
        'The initial value is negative'
      ])
      return {
        id: this.id, category: this.category,
        question: 'In $f(x) = a \\cdot b^x$, what makes it exponential growth?',
        options, correctIndex,
        explanation: 'When $b > 1$, the function increases exponentially (growth).'
      }
    }
  },
  {
    id: 'sef-q5',
    category: 'Exponential Growth',
    generate() {
      const a = randInt(1000, 5000)
      const r = randInt(3, 12)
      const base = 1 + r / 100
      const correct = `$${base}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${r}$`, `$${r / 100}$`, `$${(100 - r) / 100}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `In $y = ${a}(${base})^t$, what is the growth factor?`,
        options, correctIndex,
        explanation: `The growth factor is the base: $${base}$. The growth rate is ${r}%.`
      }
    }
  },
  {
    id: 'sef-q6',
    category: 'Exponential Growth',
    generate() {
      const a = randInt(200, 800)
      const r = randInt(10, 30)
      const base = 1 + r / 100
      const t1 = randInt(2, 4)
      const t2 = t1 + 1
      const v1 = Math.round(a * Math.pow(base, t1))
      const v2 = Math.round(a * Math.pow(base, t2))
      const diff = v2 - v1
      const { options, correctIndex } = makeOptions(diff, Math.round(diff * 0.2))
      return {
        id: this.id, category: this.category,
        question: `$f(t) = ${a}(${base})^t$. How much does $f$ increase from $t = ${t1}$ to $t = ${t2}$?`,
        options, correctIndex,
        explanation: `$f(${t1}) \\approx ${v1}$, $f(${t2}) \\approx ${v2}$. Increase = $${v2} - ${v1} = ${diff}$.`
      }
    }
  },
  {
    id: 'sef-q7',
    category: 'Exponential Growth',
    generate() {
      const a = randInt(50, 200)
      const r = randInt(5, 15)
      const ans = r
      const { options, correctIndex } = makeOptions(ans, 3)
      return {
        id: this.id, category: this.category,
        question: `A value grows from $${a}$ to $${Math.round(a * (1 + r / 100))}$ in one year. What is the annual growth rate in percent?`,
        options, correctIndex,
        explanation: `Growth rate = $\\frac{${Math.round(a * (1 + r / 100))} - ${a}}{${a}} \\times 100 = ${r}\\%$.`
      }
    }
  },

  // ===== EXPONENTIAL DECAY (6 questions) =====
  {
    id: 'sef-q8',
    category: 'Exponential Decay',
    generate() {
      const a = randInt(1000, 5000)
      const r = randInt(10, 30)
      const t = randInt(1, 3)
      const base = (100 - r) / 100
      const ans = Math.round(a * Math.pow(base, t))
      const { options, correctIndex } = makeOptions(ans, Math.max(100, Math.round(ans * 0.12)))
      return {
        id: this.id, category: this.category,
        question: `A car worth $\\$${a.toLocaleString()}$ depreciates $${r}\\%$ per year. Value after $${t}$ year${t > 1 ? 's' : ''}?`,
        options, correctIndex,
        explanation: `$${a}(${base})^{${t}} \\approx ${ans}$.`
      }
    }
  },
  {
    id: 'sef-q9',
    category: 'Exponential Decay',
    generate() {
      const a = randInt(100, 500)
      const halfLife = randInt(2, 8)
      const halves = randInt(1, 4)
      const time = halfLife * halves
      const ans = Math.round(a / Math.pow(2, halves))
      const { options, correctIndex } = makeOptions(ans, Math.max(10, Math.round(ans * 0.2)))
      return {
        id: this.id, category: this.category,
        question: `A substance with half-life $${halfLife}$ years starts at $${a}$ g. How much after $${time}$ years?`,
        options, correctIndex,
        explanation: `$${time}/${halfLife} = ${halves}$ half-lives. $${a}/2^{${halves}} = ${ans}$ g.`
      }
    }
  },
  {
    id: 'sef-q10',
    category: 'Exponential Decay',
    generate() {
      const r = randInt(10, 40)
      const base = (100 - r) / 100
      const correct = `$${base}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${(100 + r) / 100}$`, `$${r / 100}$`, `$-${r / 100}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `If a quantity decreases by $${r}\\%$ each period, what is the decay factor?`,
        options, correctIndex,
        explanation: `Decay factor $= 1 - ${r / 100} = ${base}$.`
      }
    }
  },
  {
    id: 'sef-q11',
    category: 'Exponential Decay',
    generate() {
      const eqs = [
        { eq: 'y = 500(0.85)^t', type: 'Decay', rate: '15%' },
        { eq: 'y = 300(1.12)^t', type: 'Growth', rate: '12%' },
        { eq: 'y = 1000(0.6)^t', type: 'Decay', rate: '40%' },
        { eq: 'y = 250(1.05)^t', type: 'Growth', rate: '5%' },
      ]
      const pick = eqs[randInt(0, eqs.length - 1)]
      const { options, correctIndex } = makeStringOptions(pick.type, [
        pick.type === 'Decay' ? 'Growth' : 'Decay',
        'Linear',
        'Neither'
      ])
      return {
        id: this.id, category: this.category,
        question: `Does $${pick.eq}$ represent growth or decay?`,
        options, correctIndex,
        explanation: `The base is ${pick.type === 'Decay' ? 'less than 1' : 'greater than 1'}, so it's exponential ${pick.type.toLowerCase()} (rate: ${pick.rate}).`
      }
    }
  },
  {
    id: 'sef-q12',
    category: 'Exponential Decay',
    generate() {
      const a = randInt(500, 2000)
      const r = randInt(5, 20)
      const base = (100 - r) / 100
      const correct = `$y = ${a}(${base})^t$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$y = ${a}(${(100 + r) / 100})^t$`,
        `$y = ${a} - ${r}t$`,
        `$y = ${a}(${r})^{-t}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Write an equation: initial value $${a}$, decaying $${r}\\%$ per year.`,
        options, correctIndex,
        explanation: `$y = ${a}(1 - ${r / 100})^t = ${a}(${base})^t$.`
      }
    }
  },
  {
    id: 'sef-q13',
    category: 'Exponential Decay',
    generate() {
      const correct = 'The function approaches $0$ but never reaches it'
      const { options, correctIndex } = makeStringOptions(correct, [
        'The function reaches $0$ after enough time',
        'The function goes negative eventually',
        'The function decreases linearly'
      ])
      return {
        id: this.id, category: this.category,
        question: 'As $t \\to \\infty$ in exponential decay $y = a(b)^t$ where $0 < b < 1$, what happens?',
        options, correctIndex,
        explanation: 'Exponential decay has a horizontal asymptote at $y = 0$; it approaches but never reaches zero.'
      }
    }
  },

  // ===== COMPOUND INTEREST (6 questions) =====
  {
    id: 'sef-q14',
    category: 'Compound Interest',
    generate() {
      const P = randInt(5, 20) * 100
      const r = randInt(3, 8)
      const t = randInt(2, 5)
      const A = Math.round(P * Math.pow(1 + r / 100, t))
      const { options, correctIndex } = makeOptions(A, Math.round(A * 0.08))
      return {
        id: this.id, category: this.category,
        question: `$\\$${P}$ invested at $${r}\\%$ annual interest compounded yearly for $${t}$ years. Final amount?`,
        options, correctIndex,
        explanation: `$A = ${P}(1 + ${r / 100})^{${t}} = ${P}(${1 + r / 100})^{${t}} \\approx \\$${A}$.`
      }
    }
  },
  {
    id: 'sef-q15',
    category: 'Compound Interest',
    generate() {
      const P = 1000
      const r = randInt(4, 10)
      const t = 1
      // Compounded quarterly: n=4
      const A = Math.round(P * Math.pow(1 + r / 400, 4) * 100) / 100
      const simple = Math.round(P * (1 + r / 100) * 100) / 100
      const correct = `$\\$${A.toFixed(2)}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\$${simple.toFixed(2)}$`,
        `$\\$${(P + P * r / 100 * 4).toFixed(2)}$`,
        `$\\$${Math.round(P * Math.pow(1 + r / 200, 2) * 100 / 100).toFixed(2)}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$\\$${P}$ at $${r}\\%$ compounded quarterly for $1$ year. What is $A$?`,
        options, correctIndex,
        explanation: `$A = ${P}\\left(1 + \\frac{${r / 100}}{4}\\right)^{4} \\approx \\$${A.toFixed(2)}$.`
      }
    }
  },
  {
    id: 'sef-q16',
    category: 'Compound Interest',
    generate() {
      const correct = '$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$A = P(1 + rt)$',
        '$A = P \\cdot r^t$',
        '$A = P + Prt$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Which formula gives compound interest?',
        options, correctIndex,
        explanation: '$A = P\\left(1 + \\frac{r}{n}\\right)^{nt}$ where $n$ is compounding frequency.'
      }
    }
  },
  {
    id: 'sef-q17',
    category: 'Compound Interest',
    generate() {
      const P = randInt(5, 15) * 100
      const r = randInt(4, 10)
      const t = randInt(2, 5)
      const A = Math.round(P * Math.pow(1 + r / 100, t))
      const interest = A - P
      const { options, correctIndex } = makeOptions(interest, Math.round(interest * 0.15))
      return {
        id: this.id, category: this.category,
        question: `$\\$${P}$ at $${r}\\%$ compounded annually for $${t}$ years. How much interest is earned?`,
        options, correctIndex,
        explanation: `$A = ${P}(${1 + r / 100})^{${t}} \\approx \\$${A}$. Interest = $${A} - ${P} = \\$${interest}$.`
      }
    }
  },
  {
    id: 'sef-q18',
    category: 'Compound Interest',
    generate() {
      const n = [1, 2, 4, 12][randInt(0, 3)]
      const labels: Record<number, string> = { 1: 'annually', 2: 'semi-annually', 4: 'quarterly', 12: 'monthly' }
      const correct = labels[n]
      const { options, correctIndex } = makeStringOptions(correct, [
        Object.values(labels).filter(l => l !== correct)[0],
        Object.values(labels).filter(l => l !== correct)[1],
        Object.values(labels).filter(l => l !== correct)[2],
      ])
      return {
        id: this.id, category: this.category,
        question: `In the compound interest formula, $n = ${n}$ means interest is compounded:`,
        options, correctIndex,
        explanation: `$n = ${n}$ → compounded ${correct}.`
      }
    }
  },
  {
    id: 'sef-q19',
    category: 'Compound Interest',
    generate() {
      const P = 2000
      const r = 6
      const tSimple = 5
      const simple = P + P * (r / 100) * tSimple
      const compound = Math.round(P * Math.pow(1 + r / 100, tSimple))
      const diff = compound - simple
      const correct = `$\\$${diff}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\$0$', `$\\$${diff + randInt(10, 50)}$`, `$\\$${Math.max(1, diff - randInt(10, 40))}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$\\$${P}$ at $${r}\\%$ for $${tSimple}$ yrs. How much more does compound give vs. simple interest?`,
        options, correctIndex,
        explanation: `Simple: $${P} + ${P}(${r / 100})(${tSimple}) = \\$${simple}$. Compound: $\\approx \\$${compound}$. Difference: $\\$${diff}$.`
      }
    }
  },

  // ===== GRAPHING EXPONENTIALS (7 questions) =====
  {
    id: 'sef-q20',
    category: 'Graphing Exponentials',
    generate() {
      const a = randInt(1, 5)
      const correct = `$(0, ${a})$`
      const b = [2, 3, 4, 5][randInt(0, 3)]
      const { options, correctIndex } = makeStringOptions(correct, [
        `$(${a}, 0)$`, `$(0, ${b})$`, `$(1, ${a * b})$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the $y$-intercept of $f(x) = ${a} \\cdot ${b}^x$?`,
        options, correctIndex,
        explanation: `At $x = 0$: $f(0) = ${a} \\cdot ${b}^0 = ${a} \\cdot 1 = ${a}$. So the $y$-intercept is $(0, ${a})$.`
      }
    }
  },
  {
    id: 'sef-q21',
    category: 'Graphing Exponentials',
    generate() {
      const correct = '$y = 0$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$x = 0$', '$y = 1$', 'There is no asymptote'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is the horizontal asymptote of $f(x) = 3^x$?',
        options, correctIndex,
        explanation: 'For $f(x) = b^x$ with no vertical shift, the horizontal asymptote is $y = 0$.'
      }
    }
  },
  {
    id: 'sef-q22',
    category: 'Graphing Exponentials',
    generate() {
      const k = randInt(1, 5)
      const correct = `$y = ${k}$`
      const b = randInt(2, 4)
      const { options, correctIndex } = makeStringOptions(correct, [
        '$y = 0$', `$y = -${k}$`, `$y = ${b}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the horizontal asymptote of $f(x) = 2^x + ${k}$?`,
        options, correctIndex,
        explanation: `The $+${k}$ shifts the asymptote from $y = 0$ to $y = ${k}$.`
      }
    }
  },
  {
    id: 'sef-q23',
    category: 'Graphing Exponentials',
    generate() {
      const correct = 'Reflected across the $y$-axis'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Reflected across the $x$-axis',
        'Shifted up',
        'Stretched vertically'
      ])
      return {
        id: this.id, category: this.category,
        question: 'How does $f(x) = 2^{-x}$ compare to $g(x) = 2^x$?',
        options, correctIndex,
        explanation: 'Replacing $x$ with $-x$ reflects the graph across the $y$-axis. $2^{-x} = (1/2)^x$, which is a decreasing function.'
      }
    }
  },
  {
    id: 'sef-q24',
    category: 'Graphing Exponentials',
    generate() {
      const a = randInt(2, 5)
      const b = randInt(2, 4)
      const x = randInt(1, 3)
      const ans = a * Math.pow(b, x)
      const { options, correctIndex } = makeOptions(ans, Math.round(ans * 0.15))
      return {
        id: this.id, category: this.category,
        question: `Evaluate $f(${x})$ if $f(x) = ${a} \\cdot ${b}^x$.`,
        options, correctIndex,
        explanation: `$f(${x}) = ${a} \\cdot ${b}^{${x}} = ${a} \\cdot ${Math.pow(b, x)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sef-q25',
    category: 'Graphing Exponentials',
    generate() {
      const correct = 'All real numbers'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Only positive numbers',
        '$x > 0$',
        'Only integers'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is the domain of $f(x) = 5^x$?',
        options, correctIndex,
        explanation: 'Exponential functions are defined for all real numbers: domain = $(-\\infty, \\infty)$.'
      }
    }
  },
  {
    id: 'sef-q26',
    category: 'Graphing Exponentials',
    generate() {
      const correct = '$(0, \\infty)$ — all positive reals'
      const { options, correctIndex } = makeStringOptions(correct, [
        'All real numbers',
        '$[0, \\infty)$',
        '$(-\\infty, 0)$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is the range of $f(x) = 3^x$?',
        options, correctIndex,
        explanation: '$3^x > 0$ for all $x$, and it can get arbitrarily large. Range = $(0, \\infty)$.'
      }
    }
  },

  // ===== EXPONENTIAL EQUATIONS (7 questions) =====
  {
    id: 'sef-q27',
    category: 'Exponential Equations',
    generate() {
      const base = randInt(2, 5)
      const exp = randInt(2, 5)
      const val = Math.pow(base, exp)
      const { options, correctIndex } = makeOptions(exp)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${base}^x = ${val}$.`,
        options, correctIndex,
        explanation: `$${base}^x = ${val} = ${base}^{${exp}}$ → $x = ${exp}$.`
      }
    }
  },
  {
    id: 'sef-q28',
    category: 'Exponential Equations',
    generate() {
      const base = randInt(2, 4)
      const m = randInt(2, 4)
      const bigVal = Math.pow(base, 2 * m)
      const { options, correctIndex } = makeOptions(m)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${base}^{2x} = ${bigVal}$.`,
        options, correctIndex,
        explanation: `$${base}^{2x} = ${base}^{${2 * m}}$ → $2x = ${2 * m}$ → $x = ${m}$.`
      }
    }
  },
  {
    id: 'sef-q29',
    category: 'Exponential Equations',
    generate() {
      // 4^x = 2^? → (2^2)^x = 2^(2x)
      const exp = randInt(1, 4) * 2
      const ans = exp / 2
      const correct = String(ans)
      const { options, correctIndex } = makeStringOptions(correct, [
        String(exp), String(exp * 2), String(exp - 1)
      ])
      return {
        id: this.id, category: this.category,
        question: `Solve: $4^x = 2^{${exp}}$.`,
        options, correctIndex,
        explanation: `$4^x = (2^2)^x = 2^{2x}$. So $2x = ${exp}$ → $x = ${ans}$.`
      }
    }
  },
  {
    id: 'sef-q30',
    category: 'Exponential Equations',
    generate() {
      const base = randInt(2, 5)
      const n = randInt(1, 3)
      const val = Math.pow(base, n)
      const ans = -n
      const { options, correctIndex } = makeOptions(ans, 2)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${base}^x = \\frac{1}{${val}}$.`,
        options, correctIndex,
        explanation: `$\\frac{1}{${val}} = ${base}^{-${n}}$, so $x = -${n}$.`
      }
    }
  },
  {
    id: 'sef-q31',
    category: 'Exponential Equations',
    generate() {
      // 9^x = 27 → 3^(2x) = 3^3 → x = 3/2
      const correct = '$\\frac{3}{2}$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$3$', '$2$', '$\\frac{2}{3}$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Solve: $9^x = 27$.',
        options, correctIndex,
        explanation: '$9^x = (3^2)^x = 3^{2x}$ and $27 = 3^3$. So $2x = 3$ → $x = \\frac{3}{2}$.'
      }
    }
  },
  {
    id: 'sef-q32',
    category: 'Exponential Equations',
    generate() {
      const base = randInt(2, 5)
      const a = randInt(1, 4)
      const b = randInt(1, 4)
      const ans = a + b
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `If $${base}^a = ${Math.pow(base, a)}$ and $${base}^b = ${Math.pow(base, b)}$, what is $${base}^{a+b}$?`,
        options, correctIndex: makeOptions(Math.pow(base, a + b), Math.round(Math.pow(base, a + b) * 0.15)).correctIndex,
        explanation: `$${base}^{a+b} = ${base}^a \\cdot ${base}^b = ${Math.pow(base, a)} \\cdot ${Math.pow(base, b)} = ${Math.pow(base, a + b)}$.`
      }
    }
  },
  {
    id: 'sef-q33',
    category: 'Exponential Equations',
    generate() {
      // f(x) = a*b^x, find when f(x) = target
      const a = randInt(2, 5)
      const b = randInt(2, 4)
      const x = randInt(1, 4)
      const target = a * Math.pow(b, x)
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${a} \\cdot ${b}^x$, for what $x$ does $f(x) = ${target}$?`,
        options, correctIndex,
        explanation: `$${a} \\cdot ${b}^x = ${target}$ → $${b}^x = ${target / a}$ → $x = ${x}$.`
      }
    }
  },

  // ===== APPLICATIONS & REVIEW (7 questions) =====
  {
    id: 'sef-q34',
    category: 'Applications & Review',
    generate() {
      const correct = 'Exponential'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Linear', 'Quadratic', 'Constant'
      ])
      return {
        id: this.id, category: this.category,
        question: 'A quantity triples every year. What type of function models this?',
        options, correctIndex,
        explanation: 'Constant multiplicative change (tripling) = exponential growth.'
      }
    }
  },
  {
    id: 'sef-q35',
    category: 'Applications & Review',
    generate() {
      const correct = 'Exponential — it changes by a constant ratio'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Linear — it changes by a constant amount',
        'Quadratic — it has a squared term',
        'Neither — it cannot be determined'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Values: $4, 12, 36, 108, ...$. Is this linear or exponential?',
        options, correctIndex,
        explanation: 'Each term is $\\times 3$ the previous. Constant ratio = exponential.'
      }
    }
  },
  {
    id: 'sef-q36',
    category: 'Applications & Review',
    generate() {
      const a = randInt(100, 400)
      const b = [2, 3, 4][randInt(0, 2)]
      const x = 0
      const f0 = a
      const correct = String(a)
      const { options, correctIndex } = makeStringOptions(correct, [
        String(a * b), String(b), '0'
      ])
      return {
        id: this.id, category: this.category,
        question: `In $f(x) = ${a} \\cdot ${b}^x$, what does $${a}$ represent?`,
        options, correctIndex,
        explanation: `$${a}$ is the initial value — $f(0) = ${a} \\cdot ${b}^0 = ${a}$.`
      }
    }
  },
  {
    id: 'sef-q37',
    category: 'Applications & Review',
    generate() {
      const P = randInt(1, 5) * 1000
      const r = [5, 6, 8, 10][randInt(0, 3)]
      // Rule of 72
      const approxDouble = Math.round(72 / r)
      const { options, correctIndex } = makeOptions(approxDouble, 4)
      return {
        id: this.id, category: this.category,
        question: `Using the Rule of 72, about how many years to double $\\$${P}$ at $${r}\\%$ annual compound interest?`,
        options, correctIndex,
        explanation: `Rule of 72: $72/${r} \\approx ${approxDouble}$ years.`
      }
    }
  },
  {
    id: 'sef-q38',
    category: 'Applications & Review',
    generate() {
      const a = randInt(200, 600)
      const r = randInt(5, 15)
      const base = 1 + r / 100
      const ans = Math.round(a * base)
      const { options, correctIndex } = makeOptions(ans, Math.round(ans * 0.08))
      return {
        id: this.id, category: this.category,
        question: `$f(t) = ${a}(${base})^t$ models a population. What is the population at $t = 1$?`,
        options, correctIndex,
        explanation: `$f(1) = ${a}(${base}) = ${ans}$.`
      }
    }
  },
  {
    id: 'sef-q39',
    category: 'Applications & Review',
    generate() {
      const correct = 'Linear grows by addition; exponential grows by multiplication'
      const { options, correctIndex } = makeStringOptions(correct, [
        'They are the same thing',
        'Linear is always faster than exponential',
        'Exponential always starts higher than linear'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is the key difference between linear and exponential growth?',
        options, correctIndex,
        explanation: 'Linear: constant additive change. Exponential: constant multiplicative change (ratio).'
      }
    }
  },
  {
    id: 'sef-q40',
    category: 'Applications & Review',
    generate() {
      const a = randInt(2, 6) * 100
      const r = randInt(10, 25)
      const base = (100 - r) / 100
      const t = randInt(2, 4)
      const ans = Math.round(a * Math.pow(base, t))
      const { options, correctIndex } = makeOptions(ans, Math.round(ans * 0.15))
      return {
        id: this.id, category: this.category,
        question: `A medicine's concentration is $${a}$ mg, decreasing $${r}\\%$ per hour. Amount after $${t}$ hours?`,
        options, correctIndex,
        explanation: `$${a}(${base})^{${t}} \\approx ${ans}$ mg.`
      }
    }
  },
]

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
