/**
 * Exit Quiz Question Pool — SAT Ratios, Proportions & Percents
 * 42 questions covering ratio basics, proportions, unit rates,
 * percent problems, direct/inverse variation, scale factors.
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

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b)
  while (b) { [a, b] = [b, a % b] }
  return a
}

// Up to two misconception values (kept only when they have the key's digit count, so they cannot
// stand out by length), then integer-offset distractors placed so the key's rank among the four
// values is as uniform as the misconceptions allow. Distractors never go below `min` (default 1:
// no negative prices, counts, or scale factors), and values print without float noise.
function makeOptions(correct: number, spread: number = 2, min: number = 1, misc: number[] = []): { options: string[]; correctIndex: number } {
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

// round(100·n/d) with halves rounded up, in exact integer arithmetic (no float ties like 57.49999).
function pctRound(n: number, d: number): number {
  return Math.floor((200 * n + d) / (2 * d))
}

function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
  const all = shuffle([correct, ...unique])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  // ===== RATIO BASICS (6 questions) =====
  {
    id: 'srp-q1',
    category: 'Ratio Basics',
    difficulty: 'easy',
    generate() {
      let a = randInt(2, 8)
      let b = randInt(2, 8)
      while (a === b || gcd(a, b) === 1) { a = randInt(2, 8); b = randInt(2, 8) }
      const g = gcd(a, b)
      const correct = `$${a / g} : ${b / g}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a} : ${b}$`,
        `$${b / g} : ${a / g}$`,
        `$${a + b} : ${a}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify the ratio $${a} : ${b}$.`,
        options, correctIndex,
        explanation: `$\\gcd(${a}, ${b}) = ${g}$. So $${a} : ${b} = ${a / g} : ${b / g}$.`
      }
    }
  },
  {
    id: 'srp-q2',
    category: 'Ratio Basics',
    difficulty: 'medium',
    generate() {
      const a = randInt(2, 6)
      let b = randInt(2, 6)
      while (b === a) b = randInt(2, 6)
      const total = randInt(3, 8) * (a + b)
      const unit = total / (a + b)
      const larger = Math.max(a, b) * unit
      const { options, correctIndex } = makeOptions(larger, 5)
      return {
        id: this.id, category: this.category,
        question: `Two quantities are in the ratio $${a} : ${b}$. If their sum is $${total}$, what is the larger quantity?`,
        options, correctIndex,
        explanation: `Total parts = $${a + b}$. Each part = $${total}/${a + b} = ${unit}$. Larger = $${Math.max(a, b)} \\times ${unit} = ${larger}$.`
      }
    }
  },
  {
    id: 'srp-q3',
    category: 'Ratio Basics',
    difficulty: 'easy',
    generate() {
      let boys = randInt(8, 20)
      let girls = randInt(8, 20)
      while (boys === girls || gcd(boys, girls) === 1) { boys = randInt(8, 20); girls = randInt(8, 20) }
      const g = gcd(boys, girls)
      const correct = `$${boys / g} : ${girls / g}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${girls / g} : ${boys / g}$`,
        `$${boys} : ${girls}$`,
        `$${boys + girls} : ${boys}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `A class has $${boys}$ boys and $${girls}$ girls. What is the ratio of boys to girls in simplest form?`,
        options, correctIndex,
        explanation: `$${boys} : ${girls}$, divide by $\\gcd = ${g}$ → $${boys / g} : ${girls / g}$.`
      }
    }
  },
  {
    id: 'srp-q4',
    category: 'Ratio Basics',
    difficulty: 'hard',
    generate() {
      const r1 = randInt(1, 4)
      const r2 = randInt(1, 4)
      const r3 = randInt(1, 4)
      const mult = randInt(2, 6)
      const total = (r1 + r2 + r3) * mult
      const parts = [r1 * mult, r2 * mult, r3 * mult]
      const median = [...parts].sort((a, b) => a - b)[1]
      const { options, correctIndex } = makeOptions(median, 4)
      return {
        id: this.id, category: this.category,
        question: `Three amounts are in the ratio $${r1} : ${r2} : ${r3}$. If the total is $${total}$, what is the median (middle) amount when the three are ordered?`,
        options, correctIndex,
        explanation: `Each part = $${total}/${r1 + r2 + r3} = ${mult}$. The amounts are $${parts.join(', ')}$; in order, the middle value is $${median}$.`
      }
    }
  },
  {
    id: 'srp-q5',
    category: 'Ratio Basics',
    difficulty: 'medium',
    generate() {
      const a = randInt(2, 5)
      const b = randInt(2, 5)
      const mult = randInt(3, 8)
      const valA = a * mult
      const ans = b * mult
      const { options, correctIndex } = makeOptions(ans, 4)
      return {
        id: this.id, category: this.category,
        question: `If $x : y = ${a} : ${b}$ and $x = ${valA}$, find $y$.`,
        options, correctIndex,
        explanation: `$\\frac{x}{y} = \\frac{${a}}{${b}}$ → $y = \\frac{${valA} \\times ${b}}{${a}} = ${ans}$.`
      }
    }
  },
  {
    id: 'srp-q6',
    category: 'Ratio Basics',
    difficulty: 'medium',
    generate() {
      const a = randInt(3, 10)
      const b = a + randInt(2, 6)
      const total = a + b
      const ans = pctRound(a, total)
      const { options, correctIndex } = makeOptions(ans, 5, 1, [pctRound(b, total), pctRound(a, b)])
      return {
        id: this.id, category: this.category,
        question: `In a mixture of $${a}$ liters of water and $${b}$ liters of juice, what percent is water? (Round to nearest whole number)`,
        options, correctIndex,
        explanation: `Water is $${a}$ of the $${total}$ liters: $\\frac{${a}}{${total}} \\times 100 \\approx ${ans}\\%$.`
      }
    }
  },

  // ===== PROPORTIONS & CROSS-MULTIPLICATION (6 questions) =====
  {
    id: 'srp-q7',
    category: 'Proportions',
    difficulty: 'easy',
    generate() {
      const realA = randInt(2, 6)
      const realB = randInt(2, 6)
      const m = randInt(2, 5)
      const realC = realA * m
      const realAns = realB * m
      const { options, correctIndex } = makeOptions(realAns, 4)
      return {
        id: this.id, category: this.category,
        question: `Solve: $\\frac{${realA}}{${realB}} = \\frac{${realC}}{x}$.`,
        options, correctIndex,
        explanation: `Cross-multiply: $${realA}x = ${realB} \\times ${realC} = ${realB * realC}$ → $x = ${realAns}$.`
      }
    }
  },
  {
    id: 'srp-q8',
    category: 'Proportions',
    difficulty: 'medium',
    generate() {
      const items = randInt(3, 8)
      const cost = items * randInt(2, 5)
      const newItems = randInt(10, 20)
      const priceEach = cost / items
      const ans = priceEach * newItems
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `If $${items}$ items cost $\\$${cost}$, how much do $${newItems}$ items cost?`,
        options, correctIndex,
        explanation: `Unit price = $\\$${cost}/${items} = \\$${priceEach}$ each. $${newItems} \\times \\$${priceEach} = \\$${ans}$.`
      }
    }
  },
  {
    id: 'srp-q9',
    category: 'Proportions',
    difficulty: 'medium',
    generate() {
      const height = randInt(4, 8)
      const shadow = randInt(2, 6)
      const treeShadow = shadow * randInt(3, 7)
      const ans = (height * treeShadow) / shadow
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `A $${height}$-ft pole casts a $${shadow}$-ft shadow. A tree casts a $${treeShadow}$-ft shadow. How tall is the tree?`,
        options, correctIndex,
        explanation: `$\\frac{${height}}{${shadow}} = \\frac{x}{${treeShadow}}$ → $x = \\frac{${height} \\times ${treeShadow}}{${shadow}} = ${ans}$ ft.`
      }
    }
  },
  {
    id: 'srp-q10',
    category: 'Proportions',
    difficulty: 'easy',
    generate() {
      const mapDist = randInt(2, 8)
      const scale = randInt(5, 15)
      const ans = mapDist * scale
      const { options, correctIndex } = makeOptions(ans, 15)
      return {
        id: this.id, category: this.category,
        question: `On a map, $1$ inch = $${scale}$ miles. Two cities are $${mapDist}$ inches apart on the map. What is the actual distance?`,
        options, correctIndex,
        explanation: `$${mapDist} \\times ${scale} = ${ans}$ miles.`
      }
    }
  },
  {
    id: 'srp-q11',
    category: 'Proportions',
    difficulty: 'easy',
    generate() {
      const cups = randInt(2, 4)
      const servings = randInt(4, 8)
      const newServings = servings * randInt(2, 4)
      const ans = cups * (newServings / servings)
      const { options, correctIndex } = makeOptions(ans, 3)
      return {
        id: this.id, category: this.category,
        question: `A recipe needs $${cups}$ cups of flour for $${servings}$ servings. How many cups for $${newServings}$ servings?`,
        options, correctIndex,
        explanation: `$\\frac{${cups}}{${servings}} = \\frac{x}{${newServings}}$ → $x = ${ans}$ cups.`
      }
    }
  },
  {
    id: 'srp-q12',
    category: 'Proportions',
    difficulty: 'easy',
    generate() {
      // Half the instances are NOT proportions (the key used to be "Yes" every time).
      const a = randInt(2, 6)
      let b = randInt(2, 7)
      while (b === a) b = randInt(2, 7)
      const k = randInt(2, 5)
      const isTrue = Math.random() < 0.5
      const c = a * k
      const d = isTrue ? b * k : b * k + (Math.random() < 0.5 ? 1 : -1)
      const correct = isTrue ? 'Yes, because the cross products are equal' : 'No, because the cross products differ'
      const { options, correctIndex } = makeStringOptions(correct, isTrue
        ? ['No, because the cross products differ', 'No, because the numerators are different', 'Yes, because both numerators are even']
        : ['Yes, because the cross products are equal', 'Yes, because both fractions are in simplest form', 'No, because the denominators are different'])
      return {
        id: this.id, category: this.category,
        question: `Is $\\frac{${a}}{${b}} = \\frac{${c}}{${d}}$ a true proportion?`,
        options, correctIndex,
        explanation: `Cross products: $${a} \\times ${d} = ${a * d}$ and $${b} \\times ${c} = ${b * c}$. ${isTrue ? 'They are equal, so it is a true proportion.' : 'They are not equal, so it is not a true proportion.'}`
      }
    }
  },

  // ===== UNIT RATES & CONVERSIONS (5 questions) =====
  {
    id: 'srp-q13',
    category: 'Unit Rates',
    difficulty: 'easy',
    generate() {
      const hours = randInt(2, 5)
      const speed = randInt(30, 70)
      const miles = hours * speed
      const { options, correctIndex } = makeOptions(speed, 10)
      return {
        id: this.id, category: this.category,
        question: `A car travels $${miles}$ miles in $${hours}$ hours. What is the average speed in mph?`,
        options, correctIndex,
        explanation: `Speed = $\\frac{${miles}}{${hours}} = ${speed}$ mph.`
      }
    }
  },
  {
    id: 'srp-q14',
    category: 'Unit Rates',
    difficulty: 'easy',
    generate() {
      const price = randInt(3, 6)
      const count = randInt(4, 12)
      const totalCost = price * count
      const { options, correctIndex } = makeOptions(price, 1, 1, [totalCost - count])
      return {
        id: this.id, category: this.category,
        question: `$${count}$ notebooks cost $\\$${totalCost}$. What is the unit price?`,
        options, correctIndex,
        explanation: `$\\$${totalCost} \\div ${count} = \\$${price}$ per notebook.`
      }
    }
  },
  {
    id: 'srp-q15',
    category: 'Unit Rates',
    difficulty: 'hard',
    generate() {
      let ozA = 0; let priceA = 0; let ozB = 0; let priceB = 0; let rateA = ''; let rateB = ''
      do {
        ozA = randInt(8, 16); priceA = randInt(2, 5); ozB = randInt(20, 32); priceB = randInt(4, 8)
        rateA = (priceA / ozA).toFixed(2); rateB = (priceB / ozB).toFixed(2)
      } while (rateA === rateB || priceA * ozB === priceB * ozA)
      const betterDeal = priceA * ozB < priceB * ozA ? 'Brand A' : 'Brand B'
      const other = betterDeal === 'Brand A' ? 'Brand B' : 'Brand A'
      const { options, correctIndex } = makeStringOptions(`${betterDeal}, since it costs less per ounce`, [
        `${other}, since it costs less per ounce`,
        `${other}, because its package is bigger`,
        'Neither, because the unit prices are equal'
      ])
      return {
        id: this.id, category: this.category,
        question: `Brand A: $${ozA}$ oz for $\\$${priceA}$. Brand B: $${ozB}$ oz for $\\$${priceB}$. Which is the better deal?`,
        options, correctIndex,
        explanation: `A: $\\$${rateA}$/oz. B: $\\$${rateB}$/oz. ${betterDeal} costs less per ounce.`
      }
    }
  },
  {
    id: 'srp-q16',
    category: 'Unit Rates',
    difficulty: 'medium',
    generate() {
      const miles = randInt(5, 30) * 5
      const ans = miles * 8 / 5
      const { options, correctIndex } = makeOptions(ans, 20)
      return {
        id: this.id, category: this.category,
        question: `Convert $${miles}$ miles to kilometers ($1$ mile $\\approx 1.6$ km).`,
        options, correctIndex,
        explanation: `$${miles} \\times 1.6 = ${ans}$ km.`
      }
    }
  },
  {
    id: 'srp-q17',
    category: 'Unit Rates',
    difficulty: 'hard',
    generate() {
      const workers = randInt(3, 8)
      const newWorkers = randInt(workers + 1, workers + 6)
      const r = randInt(1, 2)
      const days = newWorkers * r
      const totalWork = workers * days
      const ans = workers * r
      const { options, correctIndex } = makeOptions(ans, 3)
      return {
        id: this.id, category: this.category,
        question: `$${workers}$ workers can finish a job in $${days}$ days. How many days would $${newWorkers}$ workers take (same rate)?`,
        options, correctIndex,
        explanation: `Total worker-days = $${workers} \\times ${days} = ${totalWork}$. With $${newWorkers}$ workers: $${totalWork}/${newWorkers} = ${ans}$ days.`
      }
    }
  },

  // ===== PERCENT PROBLEMS (7 questions) =====
  {
    id: 'srp-q18',
    category: 'Percent Problems',
    difficulty: 'easy',
    generate() {
      const whole = randInt(5, 50) * 10
      const pct = randInt(1, 9) * 10
      const ans = whole * pct / 100
      const { options, correctIndex } = makeOptions(ans, 20)
      return {
        id: this.id, category: this.category,
        question: `What is $${pct}\\%$ of $${whole}$?`,
        options, correctIndex,
        explanation: `$${pct}\\%$ of $${whole} = ${whole} \\times ${pct / 100} = ${ans}$.`
      }
    }
  },
  {
    id: 'srp-q19',
    category: 'Percent Problems',
    difficulty: 'medium',
    generate() {
      const part = randInt(10, 80)
      const whole = randInt(part + 20, part + 200)
      const ans = pctRound(part, whole)
      const { options, correctIndex } = makeOptions(ans, 5, 1, [pctRound(whole, part), pctRound(part, whole + part)])
      return {
        id: this.id, category: this.category,
        question: `$${part}$ is what percent of $${whole}$? (Round to nearest whole number)`,
        options, correctIndex,
        explanation: `$\\frac{${part}}{${whole}} \\times 100 \\approx ${ans}\\%$.`
      }
    }
  },
  {
    id: 'srp-q20',
    category: 'Percent Problems',
    difficulty: 'medium',
    generate() {
      const original = randInt(4, 20) * 10
      const pctIncrease = randInt(1, 5) * 10
      const increase = original * pctIncrease / 100
      const ans = original + increase
      const { options, correctIndex } = makeOptions(ans, 15)
      return {
        id: this.id, category: this.category,
        question: `A price of $\\$${original}$ increases by $${pctIncrease}\\%$. What is the new price?`,
        options, correctIndex,
        explanation: `Increase = $${original} \\times ${pctIncrease / 100} = ${increase}$. New price = $${original} + ${increase} = \\$${ans}$.`
      }
    }
  },
  {
    id: 'srp-q21',
    category: 'Percent Problems',
    difficulty: 'medium',
    generate() {
      const original = randInt(3, 10) * 20
      const pctOff = [10, 15, 20, 25, 30, 40, 50][randInt(0, 6)]
      const discount = original * pctOff / 100
      const ans = original - discount
      const { options, correctIndex } = makeOptions(ans, 10, 1, [discount, original - pctOff])
      return {
        id: this.id, category: this.category,
        question: `An item that regularly costs \\$${original} is on sale for $${pctOff}\\%$ off. What is the sale price, in dollars?`,
        options, correctIndex,
        explanation: `Discount $= ${original} \\times ${pctOff / 100} = ${discount}$ dollars. Sale price $= ${original} - ${discount} = ${ans}$ dollars.`
      }
    }
  },
  {
    id: 'srp-q22',
    category: 'Percent Problems',
    difficulty: 'medium',
    generate() {
      const oldVal = randInt(40, 100)
      const newVal = randInt(oldVal + 10, oldVal + 80)
      const change = newVal - oldVal
      const ans = pctRound(change, oldVal)
      const { options, correctIndex } = makeOptions(ans, 8, 1, [pctRound(change, newVal), change])
      return {
        id: this.id, category: this.category,
        question: `A quantity increases from $${oldVal}$ to $${newVal}$. What is the percent increase? (Round to nearest whole)`,
        options, correctIndex,
        explanation: `Change = $${change}$, original = $${oldVal}$. $\\frac{${change}}{${oldVal}} \\times 100 \\approx ${ans}\\%$ (divide by the ORIGINAL value).`
      }
    }
  },
  {
    id: 'srp-q23',
    category: 'Percent Problems',
    difficulty: 'hard',
    generate() {
      const pct = [5, 8, 10, 15, 20, 25][randInt(0, 5)]
      const base = randInt(2, 6) * 100
      const result = base * pct / 100
      const ans = base
      const { options, correctIndex } = makeOptions(ans, 50)
      return {
        id: this.id, category: this.category,
        question: `$${result}$ is $${pct}\\%$ of what number?`,
        options, correctIndex,
        explanation: `$${result} = ${pct / 100}x$ → $x = ${result} / ${pct / 100} = ${ans}$.`
      }
    }
  },
  {
    id: 'srp-q24',
    category: 'Percent Problems',
    difficulty: 'medium',
    generate() {
      // Work in cents so no float noise (e.g. 248.39999999999998) reaches an option.
      const price = randInt(20, 50) * 10
      const taxRate = [5, 6, 7, 8, 9, 10][randInt(0, 5)]
      const cents = price * (100 + taxRate)
      const money = (c: number) => (c / 100).toFixed(2)
      const others = [price * 100 + price * taxRate / 10, price * 100 + taxRate * 100, price * (100 - taxRate), price * (100 + 2 * taxRate)]
      const { options, correctIndex } = makeStringOptions(money(cents), shuffle(others.filter(c => c !== cents)).map(money))
      return {
        id: this.id, category: this.category,
        question: `An item costs \\$${price} before a $${taxRate}\\%$ sales tax is added. What is the total cost, in dollars, including tax?`,
        options, correctIndex,
        explanation: `Tax $= ${price} \\times ${taxRate / 100} = ${money(price * taxRate)}$. Total $= ${price} + ${money(price * taxRate)} = ${money(cents)}$ dollars.`
      }
    }
  },

  // ===== DIRECT & INVERSE VARIATION (5 questions) =====
  {
    id: 'srp-q25',
    category: 'Direct & Inverse Variation',
    difficulty: 'medium',
    generate() {
      const k = randInt(2, 8)
      const x1 = randInt(2, 6)
      const y1 = k * x1
      const x2 = randInt(7, 12)
      const ans = k * x2
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `If $y$ varies directly with $x$, and $y = ${y1}$ when $x = ${x1}$, find $y$ when $x = ${x2}$.`,
        options, correctIndex,
        explanation: `$k = \\frac{${y1}}{${x1}} = ${k}$. When $x = ${x2}$: $y = ${k}(${x2}) = ${ans}$.`
      }
    }
  },
  {
    id: 'srp-q26',
    category: 'Direct & Inverse Variation',
    difficulty: 'hard',
    generate() {
      const m = randInt(2, 4)
      const y2 = randInt(2, 6)
      const y1 = m * y2
      const x1 = randInt(2, 10)
      const k = x1 * y1
      const x2 = x1 * m
      const { options, correctIndex } = makeOptions(y2, 1, 1, [y1 * m])
      return {
        id: this.id, category: this.category,
        question: `If $y$ varies inversely with $x$, and $y = ${y1}$ when $x = ${x1}$, find $y$ when $x = ${x2}$.`,
        options, correctIndex,
        explanation: `$k = xy = ${x1} \\times ${y1} = ${k}$. When $x = ${x2}$: $y = ${k}/${x2} = ${y2}$.`
      }
    }
  },
  {
    id: 'srp-q27',
    category: 'Direct & Inverse Variation',
    difficulty: 'easy',
    generate() {
      const correct = '$y = kx$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$y = \\frac{k}{x}$', '$y = x^k$', '$y = k^x$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Which equation represents direct variation?',
        options, correctIndex,
        explanation: 'Direct variation: $y = kx$ where $k$ is the constant of proportionality.'
      }
    }
  },
  {
    id: 'srp-q28',
    category: 'Direct & Inverse Variation',
    difficulty: 'easy',
    generate() {
      const k = randInt(2, 6)
      const x = randInt(2, 8)
      const y = k * x
      const { options, correctIndex } = makeOptions(k, 1, 1, [y - x])
      return {
        id: this.id, category: this.category,
        question: `In the equation $y = kx$, if $y = ${y}$ and $x = ${x}$, what is $k$?`,
        options, correctIndex,
        explanation: `$k = \\frac{y}{x} = \\frac{${y}}{${x}} = ${k}$.`
      }
    }
  },
  {
    id: 'srp-q29',
    category: 'Direct & Inverse Variation',
    difficulty: 'medium',
    generate() {
      const scenarios = [
        { desc: 'speed and time to travel a fixed distance', type: 'Inversely' },
        { desc: 'hours worked and total pay at a fixed rate', type: 'Directly' },
        { desc: 'the number of workers and time to complete a job', type: 'Inversely' },
        { desc: 'the number of gallons bought and the total cost at a fixed price per gallon', type: 'Directly' },
        { desc: 'the length of a side of a square and its perimeter', type: 'Directly' },
      ]
      const pick = scenarios[randInt(0, scenarios.length - 1)]
      const { options, correctIndex } = makeStringOptions(pick.type, [
        pick.type === 'Directly' ? 'Inversely' : 'Directly',
        'Neither',
        'Jointly'
      ])
      return {
        id: this.id, category: this.category,
        question: `How do ${pick.desc} vary?`,
        options, correctIndex,
        explanation: `They vary ${pick.type.toLowerCase()}.`
      }
    }
  },

  // ===== SCALE FACTORS (5 questions) =====
  {
    id: 'srp-q30',
    category: 'Scale Factors',
    difficulty: 'easy',
    generate() {
      const modelLen = randInt(2, 8)
      const scale = randInt(10, 50)
      const ans = modelLen * scale
      const { options, correctIndex } = makeOptions(ans, 30)
      return {
        id: this.id, category: this.category,
        question: `A model car is $${modelLen}$ inches long with scale $1 : ${scale}$. How long is the real car in inches?`,
        options, correctIndex,
        explanation: `Real length = $${modelLen} \\times ${scale} = ${ans}$ inches.`
      }
    }
  },
  {
    id: 'srp-q31',
    category: 'Scale Factors',
    difficulty: 'hard',
    generate() {
      const scaleFactor = randInt(2, 5)
      const side = randInt(3, 10)
      const newSide = side * scaleFactor
      const _origArea = side * side
      const _newArea = newSide * newSide
      const areaRatio = scaleFactor * scaleFactor
      const { options, correctIndex } = makeOptions(areaRatio, 2, 1, [scaleFactor, 2 * scaleFactor])
      return {
        id: this.id, category: this.category,
        question: `If a square is scaled by factor $${scaleFactor}$, by what factor does the area change?`,
        options, correctIndex,
        explanation: `Area scales by $k^2 = ${scaleFactor}^2 = ${areaRatio}$.`
      }
    }
  },
  {
    id: 'srp-q32',
    category: 'Scale Factors',
    difficulty: 'easy',
    generate() {
      const original = randInt(6, 20)
      const scaled = original * randInt(2, 5)
      const factor = scaled / original
      const { options, correctIndex } = makeOptions(factor, 1, 1)
      return {
        id: this.id, category: this.category,
        question: `A shape's side goes from $${original}$ cm to $${scaled}$ cm. What is the scale factor?`,
        options, correctIndex,
        explanation: `Scale factor = $\\frac{${scaled}}{${original}} = ${factor}$.`
      }
    }
  },
  {
    id: 'srp-q33',
    category: 'Scale Factors',
    difficulty: 'hard',
    generate() {
      const k = randInt(2, 4)
      const origVol = randInt(2, 6)
      const cubeK = k * k * k
      const _ans = origVol * cubeK
      const { options, correctIndex } = makeOptions(cubeK, 3, 1, [k * k, 3 * k])
      return {
        id: this.id, category: this.category,
        question: `If all dimensions of a solid are scaled by factor $${k}$, by what factor does the volume change?`,
        options, correctIndex,
        explanation: `Volume scales by $k^3 = ${k}^3 = ${cubeK}$.`
      }
    }
  },
  {
    id: 'srp-q34',
    category: 'Scale Factors',
    difficulty: 'easy',
    generate() {
      // Real distance -> map distance (srp-q10 goes map -> real; this was its twin)
      const mapCm = randInt(3, 12)
      const kmPerCm = randInt(5, 25)
      const real = mapCm * kmPerCm
      const { options, correctIndex } = makeOptions(mapCm, 2, 1, [real - kmPerCm])
      return {
        id: this.id, category: this.category,
        question: `A map scale is $1$ cm $= ${kmPerCm}$ km. Two towns are $${real}$ km apart. How far apart, in centimeters, are the towns on the map?`,
        options, correctIndex,
        explanation: `$${real} \\div ${kmPerCm} = ${mapCm}$ cm.`
      }
    }
  },

  // ===== REVIEW (6 questions) =====
  {
    id: 'srp-q35',
    category: 'Review',
    difficulty: 'medium',
    generate() {
      // Reverse percent: find the original price (srp-q21 already asks for a sale price)
      const pctDown = [10, 20, 25, 40][randInt(0, 3)]
      const original = randInt(4, 16) * 20
      const sale = original * (100 - pctDown) / 100
      const naive = Math.round(sale * (100 + pctDown) / 100)
      const { options, correctIndex } = makeOptions(original, 8, 1, [naive, sale + pctDown])
      return {
        id: this.id, category: this.category,
        question: `After a $${pctDown}\\%$ discount, a jacket sells for \\$${sale}. What was the original price, in dollars?`,
        options, correctIndex,
        explanation: `The sale price is $${(100 - pctDown) / 100}$ of the original: $${(100 - pctDown) / 100}p = ${sale}$, so $p = ${original}$. Adding $${pctDown}\\%$ of the sale price back does not work, because the discount was taken from the larger original price.`
      }
    }
  },
  {
    id: 'srp-q36',
    category: 'Review',
    difficulty: 'medium',
    generate() {
      // Proportion with an expression in the numerator (srp-q7 already solves a/b = c/x)
      const a = randInt(2, 6)
      let b = randInt(2, 6)
      while (b === a) b = randInt(2, 6)
      const m = randInt(3, 8)
      const valB = b * m
      const d = randInt(2, 9)
      const ans = a * m - d
      const { options, correctIndex } = makeOptions(ans, 3, -20, [a * m, a * m + d])
      return {
        id: this.id, category: this.category,
        question: `If $\\frac{x + ${d}}{${valB}} = \\frac{${a}}{${b}}$, what is the value of $x$?`,
        options, correctIndex,
        explanation: `Cross-multiply: $${b}(x + ${d}) = ${a} \\times ${valB} = ${a * valB}$, so $x + ${d} = ${a * m}$ and $x = ${ans}$.`
      }
    }
  },
  {
    id: 'srp-q37',
    category: 'Review',
    difficulty: 'easy',
    generate() {
      const scored = randInt(15, 45)
      const total = randInt(50, 100)
      const pct = pctRound(scored, total)
      const { options, correctIndex } = makeOptions(pct, 5)
      return {
        id: this.id, category: this.category,
        question: `A student scores $${scored}$ out of $${total}$ on a test. What percent is that? (Round to nearest whole)`,
        options, correctIndex,
        explanation: `$\\frac{${scored}}{${total}} \\times 100 \\approx ${pct}\\%$.`
      }
    }
  },
  {
    id: 'srp-q38',
    category: 'Review',
    difficulty: 'medium',
    generate() {
      const tipRate = [15, 18, 20][randInt(0, 2)]
      const bill = randInt(20, 80)
      const tip = Math.floor((bill * tipRate + 50) / 100)
      const ans = bill + tip
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `A restaurant bill is $\\$${bill}$. You leave a $${tipRate}\\%$ tip (rounded to the nearest dollar). What is the total?`,
        options, correctIndex,
        explanation: `Tip = $\\$${bill} \\times ${tipRate / 100} \\approx \\$${tip}$. Total = $\\$${bill} + \\$${tip} = \\$${ans}$.`
      }
    }
  },
  {
    id: 'srp-q39',
    category: 'Review',
    difficulty: 'medium',
    generate() {
      // Difference between shares (srp-q2 already asks for one share)
      const partA = randInt(2, 7)
      let partB = randInt(2, 7)
      while (partB === partA) partB = randInt(2, 7)
      const unit = randInt(5, 12)
      const total = (partA + partB) * unit
      const diff = Math.abs(partA - partB) * unit
      const { options, correctIndex } = makeOptions(diff, 5, 1, [Math.min(partA, partB) * unit, Math.abs(partA - partB)])
      return {
        id: this.id, category: this.category,
        question: `A prize of \\$${total} is split between two people in the ratio $${partA} : ${partB}$. How many more dollars does the person with the larger share receive?`,
        options, correctIndex,
        explanation: `Total parts $= ${partA + partB}$, so each part is $${total} \\div ${partA + partB} = ${unit}$ dollars. The shares differ by $${Math.abs(partA - partB)}$ parts: $${Math.abs(partA - partB)} \\times ${unit} = ${diff}$ dollars.`
      }
    }
  },
  {
    id: 'srp-q40',
    category: 'Review',
    difficulty: 'hard',
    generate() {
      // Exact final value (price × (1 − d) × (1 + u)), rounded ONCE at the end. Distractors are
      // the classic errors and are kept at least 2 away from the key so that an intermediate-
      // rounding slip can never match a distractor.
      let price = 0, pctDown = 0, pctUp = 0, ans = 0, cands: number[] = []
      do {
        price = randInt(50, 200); pctDown = randInt(10, 30); pctUp = randInt(10, 30)
        const exact = price * (100 - pctDown) * (100 + pctUp) // in 1/10000 dollars
        ans = Math.floor((exact + 5000) / 10000)
        cands = [
          Math.floor((price * (100 - pctDown + pctUp) + 50) / 100), // net percent change
          price, // "down then up cancels"
          Math.floor((price * (100 + pctUp - pctDown) * 100 + price * pctDown * pctUp + 5000) / 10000), // sign error on the cross term
          Math.floor((price * (100 - pctDown) + 50) / 100) // stopped after the drop
        ].filter((v, i, arr) => Math.abs(v - ans) >= 2 && arr.indexOf(v) === i)
      } while (cands.length < 3)
      const { options, correctIndex } = makeStringOptions(`${ans}`, cands.slice(0, 3).map(String))
      return {
        id: this.id, category: this.category,
        question: `A stock priced at \\$${price} drops $${pctDown}\\%$, and then the new price rises $${pctUp}\\%$. To the nearest dollar, what is the final price, in dollars?`,
        options, correctIndex,
        explanation: `Multiply by both factors, then round once: $${price} \\times ${(100 - pctDown) / 100} \\times ${(100 + pctUp) / 100} \\approx ${ans}$. The two percents do not simply combine to a net change of $${pctUp - pctDown}\\%$, because the rise applies to the lower price.`
      }
    }
  },
  // ===== ADDITIONAL EASY ITEMS (Core Skills retakes) =====
  {
    id: 'srp-q41',
    category: 'Percent Problems',
    difficulty: 'easy',
    generate() {
      const pct = [5, 15, 25, 35, 45, 75][randInt(0, 5)]
      const whole = randInt(2, 12) * 20
      const walk = whole * pct / 100
      const ans = whole - walk
      const { options, correctIndex } = makeOptions(ans, 4, 1, [walk, whole - pct])
      return {
        id: this.id, category: this.category,
        question: `A class has $${whole}$ students, and $${pct}\\%$ of them walk to school. How many students in the class do NOT walk to school?`,
        options, correctIndex,
        explanation: `$${pct}\\%$ of $${whole}$ is $${walk}$, so $${whole} - ${walk} = ${ans}$ students do not walk (equivalently, $${100 - pct}\\%$ of $${whole}$).`
      }
    }
  },
  {
    id: 'srp-q42',
    category: 'Unit Rates',
    difficulty: 'easy',
    generate() {
      const rate = randInt(6, 25)
      const t1 = randInt(2, 5)
      let t2 = randInt(3, 9)
      while (t2 === t1) t2 = randInt(3, 9)
      const ans = rate * t2
      const { options, correctIndex } = makeOptions(ans, 5, 1, [rate * t1 + t2, rate * (t1 + t2)])
      return {
        id: this.id, category: this.category,
        question: `A printer prints $${rate * t1}$ pages in $${t1}$ minutes. At this rate, how many pages does it print in $${t2}$ minutes?`,
        options, correctIndex,
        explanation: `Unit rate: $${rate * t1} \\div ${t1} = ${rate}$ pages per minute. In $${t2}$ minutes: $${rate} \\times ${t2} = ${ans}$ pages.`
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
