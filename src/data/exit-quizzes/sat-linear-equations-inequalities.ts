/**
 * Exit Quiz Question Pool — SAT Linear Equations & Inequalities
 *
 * 40 questions covering all 7 lesson parts.
 * Each question has a `generate()` function that randomizes the numerical
 * values so students get different instances every attempt.
 *
 * To use: call `generateExitQuiz()` which picks 10 random questions
 * from the pool and calls generate() on each.
 */

export interface ExitQuizQuestion {
  id: string
  question: string // may contain $LaTeX$
  options: string[]
  correctIndex: number // 0-based index in options
  explanation: string
  category: string // which lesson part / domain it covers
  topicSlug?: string // which specific topic this question covers (for course-level filtering)
  partNumber?: number // which lesson part (1-N) this question tests (for variant retry targeting)
}

interface QuestionTemplate {
  id: string
  category: string
  generate: () => ExitQuizQuestion
}

// --- Helper utilities ---
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

function makeFractionOptions(num: number, den: number): { options: string[]; correctIndex: number } {
  const correct = `$\\frac{${num}}{${den}}$`
  const distractors: string[] = []
  const used = new Set<string>([correct])
  while (distractors.length < 3) {
    const dNum = num + randInt(-3, 3)
    const dDen = den + randInt(-2, 2)
    if (dDen === 0) continue
    const s = `$\\frac{${dNum}}{${dDen}}$`
    if (!used.has(s)) { used.add(s); distractors.push(s) }
  }
  const all = [correct, ...distractors]
  const shuffled = shuffle(all)
  return { options: shuffled, correctIndex: shuffled.indexOf(correct) }
}

// ================== QUESTION TEMPLATES ==================

const questionPool: QuestionTemplate[] = [
  // ===== PART 1: Linear Equations Basics (one/two-step) =====
  {
    id: 'sle-q1',
    category: 'One-Step Equations',
    generate() {
      const a = randNonZero(-12, 12)
      const b = randInt(-20, 20)
      const x = b - a
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve for $x$: $x + ${a} = ${b}$`,
        options, correctIndex,
        explanation: `Subtract ${a} from both sides: $x = ${b} - ${a < 0 ? '(' + a + ')' : a} = ${x}$`
      }
    }
  },
  {
    id: 'sle-q2',
    category: 'One-Step Equations',
    generate() {
      const a = randNonZero(-9, 9)
      const x = randInt(-10, 10)
      const b = a * x
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve for $x$: $${a}x = ${b}$`,
        options, correctIndex,
        explanation: `Divide both sides by ${a}: $x = \\frac{${b}}{${a}} = ${x}$`
      }
    }
  },
  {
    id: 'sle-q3',
    category: 'One-Step Equations',
    generate() {
      const d = randNonZero(2, 9)
      const x = d * randInt(-8, 8)
      const b = x / d
      const { options, correctIndex } = makeOptions(x, 4)
      return {
        id: this.id, category: this.category,
        question: `Solve for $x$: $\\frac{x}{${d}} = ${b}$`,
        options, correctIndex,
        explanation: `Multiply both sides by ${d}: $x = ${b} \\times ${d} = ${x}$`
      }
    }
  },
  // ===== PART 1: Two-step equations =====
  {
    id: 'sle-q4',
    category: 'Two-Step Equations',
    generate() {
      const a = randNonZero(2, 8)
      const b = randNonZero(-15, 15)
      const x = randInt(-10, 10)
      const c = a * x + b
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve for $x$: $${a}x + ${b} = ${c}$`,
        options, correctIndex,
        explanation: `Subtract ${b} from both sides: $${a}x = ${c - b}$. Divide by ${a}: $x = ${x}$`
      }
    }
  },
  {
    id: 'sle-q5',
    category: 'Two-Step Equations',
    generate() {
      const a = randNonZero(2, 7)
      const b = randNonZero(-12, 12)
      const x = randInt(-8, 8)
      const c = a * x - b
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve for $x$: $${a}x - ${b} = ${c}$`,
        options, correctIndex,
        explanation: `Add ${b} to both sides: $${a}x = ${c + b}$. Divide by ${a}: $x = ${x}$`
      }
    }
  },
  {
    id: 'sle-q6',
    category: 'Two-Step Equations',
    generate() {
      const a = randNonZero(-6, -2)
      const b = randInt(1, 15)
      const x = randInt(-8, 8)
      const c = a * x + b
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve for $x$: $${a}x + ${b} = ${c}$`,
        options, correctIndex,
        explanation: `Subtract ${b}: $${a}x = ${c - b}$. Divide by ${a}: $x = ${x}$`
      }
    }
  },
  // ===== PART 2: Multi-step equations =====
  {
    id: 'sle-q7',
    category: 'Multi-Step Equations',
    generate() {
      const a = randNonZero(2, 5)
      const b = randInt(1, 8)
      const c = randInt(2, 10)
      const x = randInt(1, 8)
      const rhs = a * (x + b) + c
      // actually solve it: a(x+b)+c = rhs => ax + ab + c = rhs => ax = rhs - ab - c => x = (rhs - ab - c)/a
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${a}(x + ${b}) + ${c} = ${rhs}$`,
        options, correctIndex,
        explanation: `Distribute: $${a}x + ${a * b} + ${c} = ${rhs}$. Combine: $${a}x + ${a * b + c} = ${rhs}$. Subtract ${a * b + c}: $${a}x = ${rhs - a * b - c}$. Divide by ${a}: $x = ${x}$`
      }
    }
  },
  {
    id: 'sle-q8',
    category: 'Multi-Step Equations',
    generate() {
      const a = randNonZero(2, 6)
      const b = randNonZero(-7, 7)
      const c = randNonZero(2, 5)
      const x = randInt(-6, 6)
      const rhs = a * x + b + c * x
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${a}x + ${b} + ${c}x = ${rhs}$`,
        options, correctIndex,
        explanation: `Combine like terms: $${a + c}x + ${b} = ${rhs}$. Subtract ${b}: $${a + c}x = ${rhs - b}$. Divide by ${a + c}: $x = ${x}$`
      }
    }
  },
  {
    id: 'sle-q9',
    category: 'Multi-Step Equations',
    generate() {
      const d = randNonZero(2, 5)
      const b = randNonZero(-10, 10)
      const x = d * randInt(1, 6) // ensure integer solution
      const a = x / d + b
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve: $\\frac{x}{${d}} + ${b} = ${a}$`,
        options, correctIndex,
        explanation: `Subtract ${b}: $\\frac{x}{${d}} = ${a - b}$. Multiply by ${d}: $x = ${(a - b) * d}$`
      }
    }
  },
  // ===== PART 3: Variables on Both Sides =====
  {
    id: 'sle-q10',
    category: 'Variables on Both Sides',
    generate() {
      const a = randInt(3, 8)
      const b = randInt(1, 12)
      const c = randInt(1, a - 1) // ensure c < a so coefficient is positive
      const d = randInt(1, 12)
      // ax + b = cx + d => (a-c)x = d-b => x = (d-b)/(a-c)
      const num = d - b
      const den = a - c
      if (num % den === 0) {
        const x = num / den
        const { options, correctIndex } = makeOptions(x)
        return {
          id: this.id, category: this.category,
          question: `Solve: $${a}x + ${b} = ${c}x + ${d}$`,
          options, correctIndex,
          explanation: `Subtract ${c}x: $${a - c}x + ${b} = ${d}$. Subtract ${b}: $${a - c}x = ${d - b}$. Divide by ${a - c}: $x = ${x}$`
        }
      }
      const { options, correctIndex } = makeFractionOptions(num, den)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${a}x + ${b} = ${c}x + ${d}$`,
        options, correctIndex,
        explanation: `Subtract ${c}x: $${a - c}x + ${b} = ${d}$. Subtract ${b}: $${a - c}x = ${d - b}$. Divide by ${a - c}: $x = \\frac{${num}}{${den}}$`
      }
    }
  },
  {
    id: 'sle-q11',
    category: 'Variables on Both Sides',
    generate() {
      const a = randInt(2, 6)
      const b = randInt(1, 10)
      const x = randInt(-5, 5)
      const rhs = a * x + b
      const c = randInt(1, a - 1 > 0 ? a - 1 : 2)
      const d = rhs - c * x
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${a}x + ${b} = ${c}x + ${d}$`,
        options, correctIndex,
        explanation: `Move ${c}x to left: $${a - c}x + ${b} = ${d}$. Subtract ${b}: $${a - c}x = ${d - b}$. Divide: $x = ${x}$`
      }
    }
  },
  {
    id: 'sle-q12',
    category: 'Variables on Both Sides',
    generate() {
      const a = randInt(2, 5)
      const b = randInt(1, 6)
      const c = randInt(1, 8)
      const x = randInt(1, 8)
      // a(x - b) = c + x => ax - ab = c + x => (a-1)x = c + ab => x = (c+ab)/(a-1)
      const rhs = c + x  // We want ax - ab = c + x
      const ab = a * b
      const lhs = a * x - ab
      // Recalculate: a(x-b) = c + x where c = lhs - x = ax - ab - x = (a-1)x - ab
      const cVal = (a - 1) * x - ab
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${a}(x - ${b}) = ${cVal} + x$`,
        options, correctIndex,
        explanation: `Distribute: $${a}x - ${ab} = ${cVal} + x$. Subtract $x$: $${a - 1}x - ${ab} = ${cVal}$. Add ${ab}: $${a - 1}x = ${cVal + ab}$. Divide: $x = ${x}$`
      }
    }
  },
  // ===== PART 4: Systems of Equations =====
  {
    id: 'sle-q13',
    category: 'Systems of Equations',
    generate() {
      const x = randInt(-5, 5)
      const y = randInt(-5, 5)
      const a1 = randNonZero(1, 4)
      const b1 = randNonZero(-3, 3)
      const c1 = a1 * x + b1 * y
      // second equation: just y = constant
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Given the system: $${a1}x + ${b1}y = ${c1}$ and $y = ${y}$, find $x$.`,
        options, correctIndex,
        explanation: `Substitute $y = ${y}$: $${a1}x + ${b1}(${y}) = ${c1}$. So $${a1}x + ${b1 * y} = ${c1}$, giving $${a1}x = ${c1 - b1 * y}$, so $x = ${x}$`
      }
    }
  },
  {
    id: 'sle-q14',
    category: 'Systems of Equations',
    generate() {
      // Elimination: ax + by = c1, ax + dy = c2 => subtract
      const x = randInt(-4, 4)
      const y = randInt(-4, 4)
      const a = randNonZero(1, 3)
      const b1 = randNonZero(1, 4)
      const b2 = randNonZero(-4, -1)
      const c1 = a * x + b1 * y
      const c2 = a * x + b2 * y
      const { options, correctIndex } = makeOptions(y)
      return {
        id: this.id, category: this.category,
        question: `Solve the system by elimination. Find $y$:\n\n$${a}x + ${b1}y = ${c1}$\n\n$${a}x + ${b2}y = ${c2}$`,
        options, correctIndex,
        explanation: `Subtract the second equation from the first: $(${b1} - (${b2}))y = ${c1} - ${c2}$. So $${b1 - b2}y = ${c1 - c2}$, giving $y = ${y}$`
      }
    }
  },
  {
    id: 'sle-q15',
    category: 'Systems of Equations',
    generate() {
      const x = randInt(1, 6)
      const y = randInt(1, 6)
      const c1 = x + y
      const c2 = x - y
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `If $x + y = ${c1}$ and $x - y = ${c2}$, what is $x$?`,
        options, correctIndex,
        explanation: `Add both equations: $2x = ${c1 + c2}$, so $x = ${x}$`
      }
    }
  },
  {
    id: 'sle-q16',
    category: 'Systems of Equations',
    generate() {
      const x = randInt(1, 8)
      const y = randInt(1, 8)
      const a = randNonZero(2, 4)
      const c1 = x + y
      const c2 = a * x + y
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `Solve the system for $x$:\n\n$x + y = ${c1}$\n\n$${a}x + y = ${c2}$`,
        options, correctIndex,
        explanation: `Subtract first from second: $${a - 1}x = ${c2 - c1}$, so $x = ${x}$`
      }
    }
  },
  // ===== PART 5: Modeling with Equations =====
  {
    id: 'sle-q17',
    category: 'Modeling with Equations',
    generate() {
      const rate = randInt(12, 25)
      const hours = randInt(3, 8)
      const total = rate * hours
      const { options, correctIndex } = makeOptions(total, 20)
      return {
        id: this.id, category: this.category,
        question: `A worker earns $\\$${rate}$ per hour. If they work ${hours} hours, which expression gives their total pay?\n\nWhat is the total pay?`,
        options: correctIndex >= 0 ? [`$\\$${total}$`, `$\\$${total + rate}$`, `$\\$${total - rate}$`, `$\\$${rate + hours}$`] : [],
        correctIndex: 0,
        explanation: `Total pay $= ${rate} \\times ${hours} = \\$${total}$`
      }
    }
  },
  {
    id: 'sle-q18',
    category: 'Modeling with Equations',
    generate() {
      const base = randInt(20, 50)
      const perItem = randInt(2, 8)
      const items = randInt(5, 15)
      const total = base + perItem * items
      const { options, correctIndex } = makeOptions(items)
      return {
        id: this.id, category: this.category,
        question: `A phone plan costs $\\$${base}$ per month plus $\\$${perItem}$ per text message. If the total bill is $\\$${total}$, how many text messages were sent?`,
        options, correctIndex,
        explanation: `$${base} + ${perItem}n = ${total}$. Subtract ${base}: $${perItem}n = ${total - base}$. Divide by ${perItem}: $n = ${items}$`
      }
    }
  },
  {
    id: 'sle-q19',
    category: 'Modeling with Equations',
    generate() {
      const speed1 = randInt(40, 60)
      const speed2 = randInt(50, 70)
      const hours = randInt(2, 5)
      const totalDist = (speed1 + speed2) * hours
      const { options, correctIndex } = makeOptions(hours)
      return {
        id: this.id, category: this.category,
        question: `Two cars drive toward each other from ${totalDist} miles apart. One travels at ${speed1} mph and the other at ${speed2} mph. After how many hours do they meet?`,
        options, correctIndex,
        explanation: `Combined speed = $${speed1} + ${speed2} = ${speed1 + speed2}$ mph. Time $= \\frac{${totalDist}}{${speed1 + speed2}} = ${hours}$ hours`
      }
    }
  },
  {
    id: 'sle-q20',
    category: 'Modeling with Equations',
    generate() {
      const originalPrice = randInt(40, 100)
      const discountPct = randInt(10, 30)
      const salePrice = originalPrice - Math.round(originalPrice * discountPct / 100)
      const { options, correctIndex } = makeOptions(salePrice, 5)
      return {
        id: this.id, category: this.category,
        question: `A shirt originally costs $\\$${originalPrice}$. It is on sale for ${discountPct}% off. What is the sale price?`,
        options: [`$\\$${salePrice}$`, `$\\$${salePrice + 5}$`, `$\\$${salePrice - 5}$`, `$\\$${salePrice + 10}$`].sort(() => Math.random() - 0.5),
        get correctIndex() { return this.options.indexOf(`$\\$${salePrice}$`) },
        explanation: `Discount = $${originalPrice} \\times ${discountPct / 100} = \\$${Math.round(originalPrice * discountPct / 100)}$. Sale price = $${originalPrice} - ${Math.round(originalPrice * discountPct / 100)} = \\$${salePrice}$`
      }
    }
  },
  // ===== PART 5/6: Inequalities =====
  {
    id: 'sle-q21',
    category: 'Inequalities',
    generate() {
      const a = randNonZero(2, 6)
      const b = randInt(1, 10)
      const c = a * randInt(2, 8) + b // ensure clean answer
      const x = (c - b) / a
      return {
        id: this.id, category: this.category,
        question: `Solve: $${a}x + ${b} > ${c}$. What is the solution?`,
        options: [`$x > ${x}$`, `$x < ${x}$`, `$x \\geq ${x}$`, `$x > ${x + 1}$`].sort(() => Math.random() - 0.5),
        get correctIndex() { return this.options.indexOf(`$x > ${x}$`) },
        explanation: `Subtract ${b}: $${a}x > ${c - b}$. Divide by ${a}: $x > ${x}$`
      }
    }
  },
  {
    id: 'sle-q22',
    category: 'Inequalities',
    generate() {
      const a = randNonZero(-6, -2)
      const b = randInt(1, 15)
      const x = randInt(-5, 5)
      const c = a * x + b
      // -ax + b ≤ c => -ax ≤ c - b => x ≥ (c-b)/a  (flip!)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${a}x + ${b} \\leq ${c}$. What happens to the inequality sign when dividing by a negative?`,
        options: ['It flips direction', 'It stays the same', 'It becomes an equals sign', 'It disappears'],
        correctIndex: 0,
        explanation: `When you divide (or multiply) both sides of an inequality by a **negative number**, the inequality sign **flips**. This is one of the most commonly tested concepts on the SAT!`
      }
    }
  },
  {
    id: 'sle-q23',
    category: 'Inequalities',
    generate() {
      const a = randNonZero(-5, -2)
      const b = randInt(5, 20)
      const x = randInt(-4, 4)
      const c = a * x + b
      // ax + b < c => ax < c - b => x > (c-b)/a (flip because a is negative)
      const solVal = x
      return {
        id: this.id, category: this.category,
        question: `Solve: $${a}x + ${b} < ${c}$`,
        options: [`$x > ${solVal}$`, `$x < ${solVal}$`, `$x > ${-solVal}$`, `$x < ${-solVal}$`].sort(() => Math.random() - 0.5),
        get correctIndex() { return this.options.indexOf(`$x > ${solVal}$`) },
        explanation: `Subtract ${b}: $${a}x < ${c - b}$. Divide by ${a} (flip!): $x > ${solVal}$`
      }
    }
  },
  // ===== PART 6: Problem-Solving / SAT-Style =====
  {
    id: 'sle-q24',
    category: 'SAT Problem Solving',
    generate() {
      const perAdult = randInt(8, 15)
      const perChild = randInt(4, 7)
      const adults = randInt(2, 5)
      const children = randInt(3, 8)
      const total = perAdult * adults + perChild * children
      const { options, correctIndex } = makeOptions(children)
      return {
        id: this.id, category: this.category,
        question: `Adult tickets cost $\\$${perAdult}$ and child tickets cost $\\$${perChild}$. If ${adults} adults and some children attend, and the total cost is $\\$${total}$, how many children attended?`,
        options, correctIndex,
        explanation: `$${perAdult}(${adults}) + ${perChild}c = ${total}$. So $${perAdult * adults} + ${perChild}c = ${total}$. $${perChild}c = ${total - perAdult * adults}$. $c = ${children}$`
      }
    }
  },
  {
    id: 'sle-q25',
    category: 'SAT Problem Solving',
    generate() {
      const n = randInt(3, 8)
      const first = randInt(5, 20)
      // n consecutive integers starting at first
      const sum = n * first + n * (n - 1) / 2
      const { options, correctIndex } = makeOptions(first)
      return {
        id: this.id, category: this.category,
        question: `The sum of ${n} consecutive integers is ${sum}. What is the smallest integer?`,
        options, correctIndex,
        explanation: `Let the integers be $x, x+1, ..., x+${n - 1}$. Sum $= ${n}x + ${n * (n - 1) / 2} = ${sum}$. So $${n}x = ${sum - n * (n - 1) / 2}$, giving $x = ${first}$`
      }
    }
  },
  {
    id: 'sle-q26',
    category: 'SAT Problem Solving',
    generate() {
      const speed = randInt(40, 65)
      const time = randInt(2, 6)
      const distance = speed * time
      const { options, correctIndex } = makeOptions(distance, 30)
      return {
        id: this.id, category: this.category,
        question: `If a car travels at a constant speed of ${speed} mph for ${time} hours, how far does it travel?`,
        options, correctIndex,
        explanation: `Distance $= \\text{speed} \\times \\text{time} = ${speed} \\times ${time} = ${distance}$ miles`
      }
    }
  },
  // ===== PART 7: Review & Applications =====
  {
    id: 'sle-q27',
    category: 'Review - No Solution / Infinite',
    generate() {
      const a = randNonZero(2, 6)
      const b = randInt(1, 10)
      const c = b + randNonZero(1, 5) // different constant = no solution
      return {
        id: this.id, category: this.category,
        question: `How many solutions does this equation have? $${a}x + ${b} = ${a}x + ${c}$`,
        options: ['No solution', 'One solution', 'Infinitely many solutions', 'Two solutions'],
        correctIndex: 0,
        explanation: `Subtracting $${a}x$ from both sides gives $${b} = ${c}$, which is false. **No solution** (the lines are parallel).`
      }
    }
  },
  {
    id: 'sle-q28',
    category: 'Review - No Solution / Infinite',
    generate() {
      const a = randNonZero(2, 5)
      const b = randInt(1, 10)
      return {
        id: this.id, category: this.category,
        question: `How many solutions does this equation have? $${a}(x + ${b}) = ${a}x + ${a * b}$`,
        options: ['Infinitely many solutions', 'No solution', 'One solution', 'Two solutions'],
        correctIndex: 0,
        explanation: `Distribute: $${a}x + ${a * b} = ${a}x + ${a * b}$. This is always true! **Infinitely many solutions** (same line).`
      }
    }
  },
  {
    id: 'sle-q29',
    category: 'Review - Slope & Intercept',
    generate() {
      const m = randNonZero(-5, 5)
      const b = randInt(-10, 10)
      return {
        id: this.id, category: this.category,
        question: `What is the slope of the line $y = ${m}x + ${b}$?`,
        options: [`${m}`, `${b}`, `${-m}`, `${m + 1}`].sort(() => Math.random() - 0.5),
        get correctIndex() { return this.options.indexOf(`${m}`) },
        explanation: `In $y = mx + b$ form, the slope is $m = ${m}$ and the y-intercept is $b = ${b}$.`
      }
    }
  },
  {
    id: 'sle-q30',
    category: 'Review - Slope & Intercept',
    generate() {
      const m = randNonZero(-4, 4)
      const b = randInt(-8, 8)
      const { options, correctIndex } = makeOptions(b)
      return {
        id: this.id, category: this.category,
        question: `What is the y-intercept of the line $y = ${m}x + ${b}$?`,
        options, correctIndex,
        explanation: `In $y = mx + b$ form, the y-intercept is $b = ${b}$ (the point $(0, ${b})$).`
      }
    }
  },
  {
    id: 'sle-q31',
    category: 'Review - Slope from Points',
    generate() {
      const x1 = randInt(0, 5)
      const y1 = randInt(-5, 5)
      const x2 = x1 + randInt(1, 5) // ensure different x
      const y2 = y1 + randNonZero(-6, 6)
      const rise = y2 - y1
      const run = x2 - x1
      if (rise % run === 0) {
        const m = rise / run
        const { options, correctIndex } = makeOptions(m)
        return {
          id: this.id, category: this.category,
          question: `Find the slope of the line through $(${x1}, ${y1})$ and $(${x2}, ${y2})$.`,
          options, correctIndex,
          explanation: `Slope $= \\frac{${y2} - ${y1}}{${x2} - ${x1}} = \\frac{${rise}}{${run}} = ${m}$`
        }
      }
      const { options, correctIndex } = makeFractionOptions(rise, run)
      return {
        id: this.id, category: this.category,
        question: `Find the slope of the line through $(${x1}, ${y1})$ and $(${x2}, ${y2})$.`,
        options, correctIndex,
        explanation: `Slope $= \\frac{${y2} - ${y1}}{${x2} - ${x1}} = \\frac{${rise}}{${run}}$`
      }
    }
  },
  // ===== More SAT-style mixed questions =====
  {
    id: 'sle-q32',
    category: 'SAT Equivalent Expressions',
    generate() {
      const a = randNonZero(2, 6)
      const b = randInt(1, 10)
      const c = randNonZero(1, 5)
      const expanded = `$${a}x + ${a * b} + ${c}$`
      return {
        id: this.id, category: this.category,
        question: `Which expression is equivalent to $${a}(x + ${b}) + ${c}$?`,
        options: [expanded, `$${a}x + ${b} + ${c}$`, `$${a}x + ${b + c}$`, `$${a + c}x + ${b}$`].sort(() => Math.random() - 0.5),
        get correctIndex() { return this.options.indexOf(expanded) },
        explanation: `Distribute: $${a}x + ${a * b} + ${c} = ${a}x + ${a * b + c}$. But as written, the expanded form is $${a}x + ${a * b} + ${c}$.`
      }
    }
  },
  {
    id: 'sle-q33',
    category: 'Absolute Value Equations',
    generate() {
      const a = randInt(2, 12)
      return {
        id: this.id, category: this.category,
        question: `How many solutions does $|x| = ${a}$ have?`,
        options: ['2', '1', '0', 'Infinitely many'],
        correctIndex: 0,
        explanation: `$|x| = ${a}$ means $x = ${a}$ or $x = -${a}$. That's **2** solutions.`
      }
    }
  },
  {
    id: 'sle-q34',
    category: 'Absolute Value Equations',
    generate() {
      const a = randInt(1, 10)
      const b = randInt(1, 8)
      const sol1 = a + b
      const sol2 = -(a - b) // Actually: |x - b| = a => x - b = a or x - b = -a => x = b+a or x = b-a
      const xPos = b + a
      const xNeg = b - a
      const { options, correctIndex } = makeOptions(xPos)
      return {
        id: this.id, category: this.category,
        question: `One solution of $|x - ${b}| = ${a}$ is $x = ${xNeg}$. What is the **other** solution?`,
        options, correctIndex,
        explanation: `$|x - ${b}| = ${a}$ gives $x - ${b} = ${a}$ or $x - ${b} = -${a}$. So $x = ${xPos}$ or $x = ${xNeg}$. The other solution is $x = ${xPos}$.`
      }
    }
  },
  // ===== More mixed difficulty =====
  {
    id: 'sle-q35',
    category: 'Word Problems',
    generate() {
      const rate1 = randInt(30, 60)
      const rate2 = randInt(40, 70)
      const initialDist = randInt(10, 50)
      // After t hours: rate1*t = rate2*t + initialDist? No, let's do simpler:
      // Person A has $a saved, saves $r1/week. Person B has $b saved, saves $r2/week. When equal?
      const saved_a = randInt(50, 200)
      const saved_b = randInt(0, saved_a - 10)
      const rateA = randInt(10, 25)
      const rateB = rateA + randInt(5, 15) // B saves more to catch up
      // saved_a + rateA*w = saved_b + rateB*w => (rateB - rateA)*w = saved_a - saved_b
      const diff = saved_a - saved_b
      const rateDiff = rateB - rateA
      if (diff % rateDiff === 0) {
        const weeks = diff / rateDiff
        const { options, correctIndex } = makeOptions(weeks)
        return {
          id: this.id, category: this.category,
          question: `Alice has $\\$${saved_a}$ saved and saves $\\$${rateA}$ per week. Bob has $\\$${saved_b}$ saved and saves $\\$${rateB}$ per week. After how many weeks will they have the same amount?`,
          options, correctIndex,
          explanation: `Set equal: $${saved_a} + ${rateA}w = ${saved_b} + ${rateB}w$. So $${saved_a - saved_b} = ${rateB - rateA}w$, giving $w = ${weeks}$ weeks.`
        }
      }
      // Fallback with clean numbers
      const w = randInt(2, 8)
      const cleanRateB = rateA + Math.floor((saved_a - saved_b) / w)
      const cleanSavedB = saved_a + rateA * w - cleanRateB * w
      const { options, correctIndex } = makeOptions(w)
      return {
        id: this.id, category: this.category,
        question: `Alice has $\\$${saved_a}$ and saves $\\$${rateA}$/week. Bob has $\\$${cleanSavedB}$ and saves $\\$${cleanRateB}$/week. When do they have the same amount?`,
        options, correctIndex,
        explanation: `Set amounts equal and solve for weeks: $w = ${w}$`
      }
    }
  },
  {
    id: 'sle-q36',
    category: 'Word Problems',
    generate() {
      const totalPeople = randInt(20, 50)
      const adults = randInt(8, totalPeople - 5)
      const children = totalPeople - adults
      const { options, correctIndex } = makeOptions(children)
      return {
        id: this.id, category: this.category,
        question: `At a concert, there are ${totalPeople} people total. If there are ${adults} adults, which equation finds the number of children $c$? Solve for $c$.`,
        options, correctIndex,
        explanation: `$${adults} + c = ${totalPeople}$, so $c = ${totalPeople} - ${adults} = ${children}$`
      }
    }
  },
  {
    id: 'sle-q37',
    category: 'Interpreting Linear Functions',
    generate() {
      const initial = randInt(100, 500)
      const rate = randInt(20, 80)
      const months = randInt(2, 6)
      const total = initial + rate * months
      const { options, correctIndex } = makeOptions(total, 20)
      return {
        id: this.id, category: this.category,
        question: `A gym charges a $\\$${initial}$ sign-up fee plus $\\$${rate}$/month. The cost function is $C(m) = ${rate}m + ${initial}$. What is $C(${months})$?`,
        options, correctIndex,
        explanation: `$C(${months}) = ${rate}(${months}) + ${initial} = ${rate * months} + ${initial} = ${total}$`
      }
    }
  },
  {
    id: 'sle-q38',
    category: 'Interpreting Linear Functions',
    generate() {
      const m = randNonZero(-5, 5)
      const b = randInt(10, 100)
      return {
        id: this.id, category: this.category,
        question: `In the function $f(x) = ${m}x + ${b}$, what does the value ${m} represent?`,
        options: ['The rate of change (slope)', 'The starting value (y-intercept)', 'The x-intercept', 'The maximum value'],
        correctIndex: 0,
        explanation: `In $f(x) = mx + b$, the coefficient of $x$ (here ${m}) is the **slope** — the rate of change per unit increase in $x$.`
      }
    }
  },
  {
    id: 'sle-q39',
    category: 'Systems - Number of Solutions',
    generate() {
      const a = randNonZero(2, 5)
      const b = randInt(1, 10)
      // Parallel lines: same slope, different intercept
      const c = b + randNonZero(1, 5)
      return {
        id: this.id, category: this.category,
        question: `The system $y = ${a}x + ${b}$ and $y = ${a}x + ${c}$ has how many solutions?`,
        options: ['No solution — the lines are parallel', 'Exactly one solution', 'Infinitely many solutions', 'Exactly two solutions'],
        correctIndex: 0,
        explanation: `Both lines have slope ${a} but different y-intercepts (${b} and ${c}). Parallel lines never intersect → **no solution**.`
      }
    }
  },
  {
    id: 'sle-q40',
    category: 'Systems - Number of Solutions',
    generate() {
      const a = randNonZero(1, 5)
      const b = randNonZero(1, 5)
      // different slopes = exactly one solution
      const c = a + randNonZero(1, 3)
      const d = randInt(-5, 5)
      return {
        id: this.id, category: this.category,
        question: `The system $y = ${a}x + ${b}$ and $y = ${c}x + ${d}$ has how many solutions?`,
        options: ['Exactly one solution', 'No solution', 'Infinitely many solutions', 'Cannot be determined'],
        correctIndex: 0,
        explanation: `The slopes are ${a} and ${c} (different), so the lines intersect at exactly one point → **one solution**.`
      }
    }
  },
]

/**
 * Generate an exit quiz by selecting 10 random questions from the pool,
 * ensuring variety across categories.
 */
export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  // Group questions by category for balanced selection
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of questionPool) {
    if (!byCategory[q.category]) byCategory[q.category] = []
    byCategory[q.category].push(q)
  }

  const categories = Object.keys(byCategory)
  const selected: QuestionTemplate[] = []
  const usedIds = new Set<string>()

  // First pass: pick one from each category (up to count)
  const shuffledCats = shuffle(categories)
  for (const cat of shuffledCats) {
    if (selected.length >= count) break
    const pool = byCategory[cat]
    const q = pool[Math.floor(Math.random() * pool.length)]
    if (!usedIds.has(q.id)) {
      selected.push(q)
      usedIds.add(q.id)
    }
  }

  // Second pass: fill remaining slots randomly
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  const shuffledRemaining = shuffle(remaining)
  for (const q of shuffledRemaining) {
    if (selected.length >= count) break
    selected.push(q)
    usedIds.add(q.id)
  }

  // Shuffle the final selection and generate concrete instances
  return shuffle(selected).map(t => t.generate())
}

