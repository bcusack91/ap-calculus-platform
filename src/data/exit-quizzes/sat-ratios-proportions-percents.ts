/**
 * Exit Quiz Question Pool — SAT Ratios, Proportions & Percents
 * 40 questions covering ratio basics, proportions, unit rates,
 * percent problems, direct/inverse variation, scale factors.
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

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b)
  while (b) { [a, b] = [b, a % b] }
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
  // ===== RATIO BASICS (6 questions) =====
  {
    id: 'srp-q1',
    category: 'Ratio Basics',
    generate() {
      const a = randInt(2, 8)
      const b = randInt(2, 8)
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
    generate() {
      const a = randInt(2, 6)
      const b = randInt(2, 6)
      const total = randInt(3, 8) * (a + b)
      const partA = (total / (a + b)) * a
      const { options, correctIndex } = makeOptions(partA, 5)
      return {
        id: this.id, category: this.category,
        question: `Two quantities are in the ratio $${a} : ${b}$. If their sum is $${total}$, what is the larger quantity?`,
        options, correctIndex: makeOptions(Math.max(partA, total - partA), 5).correctIndex,
        explanation: `Total parts = $${a + b}$. Each part = $${total}/${a + b} = ${total / (a + b)}$. Larger = $${Math.max(a, b)} \\times ${total / (a + b)} = ${Math.max(partA, total - partA)}$.`
      }
    }
  },
  {
    id: 'srp-q3',
    category: 'Ratio Basics',
    generate() {
      const boys = randInt(8, 20)
      const girls = randInt(8, 20)
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
    generate() {
      const r1 = randInt(1, 4)
      const r2 = randInt(1, 4)
      const r3 = randInt(1, 4)
      const mult = randInt(2, 6)
      const total = (r1 + r2 + r3) * mult
      const partA = r1 * mult
      const partB = r2 * mult
      const partC = r3 * mult
      const { options, correctIndex } = makeOptions(partB, 4)
      return {
        id: this.id, category: this.category,
        question: `Three amounts are in the ratio $${r1} : ${r2} : ${r3}$. If the total is $${total}$, what is the middle amount?`,
        options, correctIndex,
        explanation: `Each part = $${total}/${r1 + r2 + r3} = ${mult}$. Middle = $${r2} \\times ${mult} = ${partB}$.`
      }
    }
  },
  {
    id: 'srp-q5',
    category: 'Ratio Basics',
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
    generate() {
      const a = randInt(3, 10)
      const b = a + randInt(2, 6)
      const total = a + b
      const ans = Math.round((a / total) * 100)
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `In a mixture of $${a}$ liters of water and $${b}$ liters of juice, what percent is water? (Round to nearest whole number)`,
        options, correctIndex,
        explanation: `Water fraction = $\\frac{${a}}{${total}} \\approx ${(a / total).toFixed(2)}$ → $${ans}\\%$.`
      }
    }
  },

  // ===== PROPORTIONS & CROSS-MULTIPLICATION (6 questions) =====
  {
    id: 'srp-q7',
    category: 'Proportions',
    generate() {
      const a = randInt(2, 8)
      const b = randInt(2, 8)
      const c = randInt(2, 8)
      const ans = (b * c) / a
      // Ensure integer answer
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
    generate() {
      const a = randInt(2, 6)
      const b = randInt(2, 6)
      const k = randInt(2, 5)
      const correct = a * k === b * k ? 'Yes' : 'No'
      // Create two fractions that may or may not be proportional
      const c = a * k
      const d = b * k
      const { options, correctIndex } = makeStringOptions('Yes', ['No', 'Cannot determine', 'Only if positive'])
      return {
        id: this.id, category: this.category,
        question: `Is $\\frac{${a}}{${b}} = \\frac{${c}}{${d}}$ a true proportion?`,
        options, correctIndex,
        explanation: `$${a} \\times ${d} = ${a * d}$ and $${b} \\times ${c} = ${b * c}$. Since $${a * d} = ${b * c}$, yes it is a true proportion.`
      }
    }
  },

  // ===== UNIT RATES & CONVERSIONS (5 questions) =====
  {
    id: 'srp-q13',
    category: 'Unit Rates',
    generate() {
      const miles = randInt(100, 300)
      const hours = randInt(2, 5)
      const ans = miles / hours
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `A car travels $${miles}$ miles in $${hours}$ hours. What is the average speed in mph?`,
        options, correctIndex,
        explanation: `Speed = $\\frac{${miles}}{${hours}} = ${ans}$ mph.`
      }
    }
  },
  {
    id: 'srp-q14',
    category: 'Unit Rates',
    generate() {
      const price = randInt(3, 9)
      const count = randInt(4, 12)
      const totalCost = price * count
      const { options, correctIndex } = makeOptions(price, 2)
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
    generate() {
      const ozA = randInt(8, 16)
      const priceA = randInt(2, 5)
      const ozB = randInt(20, 32)
      const priceB = randInt(4, 8)
      const rateA = (priceA / ozA).toFixed(2)
      const rateB = (priceB / ozB).toFixed(2)
      const betterDeal = parseFloat(rateA) < parseFloat(rateB) ? 'Brand A' : 'Brand B'
      const { options, correctIndex } = makeStringOptions(betterDeal, [
        betterDeal === 'Brand A' ? 'Brand B' : 'Brand A',
        'They are the same',
        'Cannot determine'
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
    generate() {
      const kmPerMile = 1.6
      const miles = randInt(5, 30) * 5
      const ans = miles * kmPerMile
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
    generate() {
      const workers = randInt(3, 8)
      const days = randInt(4, 10)
      const newWorkers = randInt(workers + 1, workers + 6)
      const totalWork = workers * days
      const ans = Math.round(totalWork / newWorkers)
      const { options, correctIndex } = makeOptions(ans, 3)
      return {
        id: this.id, category: this.category,
        question: `$${workers}$ workers can finish a job in $${days}$ days. How many days would $${newWorkers}$ workers take (same rate)?`,
        options, correctIndex,
        explanation: `Total worker-days = $${workers} \\times ${days} = ${totalWork}$. With $${newWorkers}$ workers: $${totalWork}/${newWorkers} \\approx ${ans}$ days.`
      }
    }
  },

  // ===== PERCENT PROBLEMS (7 questions) =====
  {
    id: 'srp-q18',
    category: 'Percent Problems',
    generate() {
      const whole = randInt(50, 500)
      const pct = randInt(10, 90)
      const ans = Math.round(whole * pct / 100)
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
    generate() {
      const part = randInt(10, 80)
      const whole = randInt(part + 20, part + 200)
      const ans = Math.round((part / whole) * 100)
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `$${part}$ is what percent of $${whole}$? (Round to nearest whole number)`,
        options, correctIndex,
        explanation: `$\\frac{${part}}{${whole}} \\approx ${(part / whole).toFixed(2)} = ${ans}\\%$.`
      }
    }
  },
  {
    id: 'srp-q20',
    category: 'Percent Problems',
    generate() {
      const original = randInt(40, 200)
      const pctIncrease = randInt(10, 50)
      const increase = Math.round(original * pctIncrease / 100)
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
    generate() {
      const original = randInt(50, 200)
      const pctOff = [10, 15, 20, 25, 30, 40, 50][randInt(0, 6)]
      const discount = original * pctOff / 100
      const ans = original - discount
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `A $\\$${original}$ item is $${pctOff}\\%$ off. What is the sale price?`,
        options, correctIndex,
        explanation: `Discount = $${original} \\times ${pctOff / 100} = \\$${discount}$. Sale price = $\\$${original} - \\$${discount} = \\$${ans}$.`
      }
    }
  },
  {
    id: 'srp-q22',
    category: 'Percent Problems',
    generate() {
      const oldVal = randInt(40, 100)
      const newVal = randInt(oldVal + 10, oldVal + 80)
      const change = newVal - oldVal
      const ans = Math.round((change / oldVal) * 100)
      const { options, correctIndex } = makeOptions(ans, 8)
      return {
        id: this.id, category: this.category,
        question: `A quantity increases from $${oldVal}$ to $${newVal}$. What is the percent increase? (Round to nearest whole)`,
        options, correctIndex,
        explanation: `Change = $${change}$, original = $${oldVal}$. $\\frac{${change}}{${oldVal}} \\approx ${ans}\\%$.`
      }
    }
  },
  {
    id: 'srp-q23',
    category: 'Percent Problems',
    generate() {
      const pct = [5, 8, 10, 15, 20, 25][randInt(0, 5)]
      const base = randInt(20, 60) * 10
      const result = Math.round(base * pct / 100)
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
    generate() {
      const price = randInt(20, 50) * 10
      const taxRate = [5, 6, 7, 8, 9, 10][randInt(0, 5)]
      const tax = price * taxRate / 100
      const ans = price + tax
      const { options, correctIndex } = makeOptions(ans, 20)
      return {
        id: this.id, category: this.category,
        question: `An item costs $\\$${price}$ with a $${taxRate}\\%$ sales tax. What is the total cost?`,
        options, correctIndex,
        explanation: `Tax = $\\$${price} \\times ${taxRate / 100} = \\$${tax}$. Total = $\\$${price} + \\$${tax} = \\$${ans}$.`
      }
    }
  },

  // ===== DIRECT & INVERSE VARIATION (5 questions) =====
  {
    id: 'srp-q25',
    category: 'Direct & Inverse Variation',
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
    generate() {
      const k = randInt(20, 100)
      const x1 = randInt(2, 10)
      const y1 = k / x1
      // Ensure integer results
      const realK = x1 * y1
      const x2Choices = [2, 4, 5, 10].filter(v => realK % v === 0 && v !== x1)
      const x2 = x2Choices.length > 0 ? x2Choices[randInt(0, x2Choices.length - 1)] : x1 * 2
      const ans = realK / x2
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `If $y$ varies inversely with $x$, and $y = ${y1}$ when $x = ${x1}$, find $y$ when $x = ${x2}$.`,
        options, correctIndex,
        explanation: `$k = xy = ${x1} \\times ${y1} = ${realK}$. When $x = ${x2}$: $y = ${realK}/${x2} = ${ans}$.`
      }
    }
  },
  {
    id: 'srp-q27',
    category: 'Direct & Inverse Variation',
    generate() {
      const correct = '$y = kx$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$y = k/x$', '$y = k + x$', '$y = kx^2$'
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
    generate() {
      const k = randInt(2, 6)
      const x = randInt(2, 8)
      const y = k * x
      const { options, correctIndex } = makeOptions(k, 2)
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
    generate() {
      const scenarios = [
        { desc: 'speed and time to travel a fixed distance', type: 'Inversely' },
        { desc: 'hours worked and total pay at a fixed rate', type: 'Directly' },
        { desc: 'the number of workers and time to complete a job', type: 'Inversely' },
        { desc: 'the price and quantity sold at constant revenue', type: 'Inversely' },
      ]
      const pick = scenarios[randInt(0, scenarios.length - 1)]
      const { options, correctIndex } = makeStringOptions(pick.type, [
        pick.type === 'Directly' ? 'Inversely' : 'Directly',
        'Neither',
        'Cannot determine'
      ])
      return {
        id: this.id, category: this.category,
        question: `Do ${pick.desc} vary directly or inversely?`,
        options, correctIndex,
        explanation: `They vary ${pick.type.toLowerCase()}.`
      }
    }
  },

  // ===== SCALE FACTORS (5 questions) =====
  {
    id: 'srp-q30',
    category: 'Scale Factors',
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
    generate() {
      const scaleFactor = randInt(2, 5)
      const side = randInt(3, 10)
      const newSide = side * scaleFactor
      const origArea = side * side
      const newArea = newSide * newSide
      const areaRatio = scaleFactor * scaleFactor
      const { options, correctIndex } = makeOptions(areaRatio)
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
    generate() {
      const original = randInt(6, 20)
      const scaled = original * randInt(2, 5)
      const factor = scaled / original
      const { options, correctIndex } = makeOptions(factor, 2)
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
    generate() {
      const k = randInt(2, 4)
      const origVol = randInt(2, 6)
      const cubeK = k * k * k
      const ans = origVol * cubeK
      const { options, correctIndex } = makeOptions(cubeK)
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
    generate() {
      const mapCm = randInt(3, 12)
      const kmPerCm = randInt(5, 25)
      const ans = mapCm * kmPerCm
      const { options, correctIndex } = makeOptions(ans, 20)
      return {
        id: this.id, category: this.category,
        question: `A map scale is $1$ cm $= ${kmPerCm}$ km. Two points are $${mapCm}$ cm apart. What is the real distance?`,
        options, correctIndex,
        explanation: `$${mapCm} \\times ${kmPerCm} = ${ans}$ km.`
      }
    }
  },

  // ===== REVIEW (6 questions) =====
  {
    id: 'srp-q35',
    category: 'Review',
    generate() {
      const original = randInt(60, 150)
      const pctDown = randInt(10, 40)
      const sale = Math.round(original * (100 - pctDown) / 100)
      const { options, correctIndex } = makeOptions(sale, 15)
      return {
        id: this.id, category: this.category,
        question: `A jacket originally costs $\\$${original}$. It is marked down $${pctDown}\\%$. Sale price?`,
        options, correctIndex,
        explanation: `$\\$${original} \\times (1 - ${pctDown / 100}) = \\$${original} \\times ${(100 - pctDown) / 100} = \\$${sale}$.`
      }
    }
  },
  {
    id: 'srp-q36',
    category: 'Review',
    generate() {
      const a = randInt(2, 6)
      const b = randInt(2, 6)
      const m = randInt(3, 8)
      const valB = b * m
      const ans = a * m
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `If $\\frac{x}{${valB}} = \\frac{${a}}{${b}}$, find $x$.`,
        options, correctIndex,
        explanation: `$x = \\frac{${a} \\times ${valB}}{${b}} = ${ans}$.`
      }
    }
  },
  {
    id: 'srp-q37',
    category: 'Review',
    generate() {
      const scored = randInt(15, 45)
      const total = randInt(50, 100)
      const pct = Math.round((scored / total) * 100)
      const { options, correctIndex } = makeOptions(pct, 5)
      return {
        id: this.id, category: this.category,
        question: `A student scores $${scored}$ out of $${total}$ on a test. What percent is that? (Round to nearest whole)`,
        options, correctIndex,
        explanation: `$\\frac{${scored}}{${total}} \\approx ${(scored / total).toFixed(2)} = ${pct}\\%$.`
      }
    }
  },
  {
    id: 'srp-q38',
    category: 'Review',
    generate() {
      const tipRate = [15, 18, 20][randInt(0, 2)]
      const bill = randInt(20, 80)
      const tip = Math.round(bill * tipRate / 100)
      const ans = bill + tip
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `A restaurant bill is $\\$${bill}$. You leave a $${tipRate}\\%$ tip. What is the total?`,
        options, correctIndex,
        explanation: `Tip = $\\$${bill} \\times ${tipRate / 100} = \\$${tip}$. Total = $\\$${bill} + \\$${tip} = \\$${ans}$.`
      }
    }
  },
  {
    id: 'srp-q39',
    category: 'Review',
    generate() {
      const partA = randInt(2, 5)
      const partB = randInt(2, 5)
      const total = (partA + partB) * randInt(5, 12)
      const share = total * partA / (partA + partB)
      const { options, correctIndex } = makeOptions(share, 10)
      return {
        id: this.id, category: this.category,
        question: `$\\$${total}$ is split in the ratio $${partA} : ${partB}$. What is the smaller share?`,
        options, correctIndex: makeOptions(Math.min(share, total - share), 10).correctIndex,
        explanation: `Total parts = $${partA + partB}$. Smaller = $${Math.min(partA, partB)} \\times \\frac{${total}}{${partA + partB}} = \\$${Math.min(share, total - share)}$.`
      }
    }
  },
  {
    id: 'srp-q40',
    category: 'Review',
    generate() {
      const price = randInt(50, 200)
      const pctDown = randInt(10, 30)
      const pctUp = randInt(10, 30)
      const afterDown = Math.round(price * (100 - pctDown) / 100)
      const afterUp = Math.round(afterDown * (100 + pctUp) / 100)
      const { options, correctIndex } = makeOptions(afterUp, 15)
      return {
        id: this.id, category: this.category,
        question: `A $\\$${price}$ stock drops $${pctDown}\\%$, then rises $${pctUp}\\%$. What is the new price?`,
        options, correctIndex,
        explanation: `After drop: $\\$${price} \\times ${(100 - pctDown) / 100} = \\$${afterDown}$. After rise: $\\$${afterDown} \\times ${(100 + pctUp) / 100} \\approx \\$${afterUp}$.`
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
