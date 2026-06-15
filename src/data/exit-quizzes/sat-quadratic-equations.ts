/**
 * Exit Quiz Question Pool — SAT Quadratic Equations
 * 40 questions covering factoring, quadratic formula, vertex form,
 * graphing parabolas, systems, and word problems.
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

// Formats + or - sign nicely
function sign(n: number): string {
  return n >= 0 ? `+ ${n}` : `- ${Math.abs(n)}`
}

const questionPool: QuestionTemplate[] = [
  // ===== FACTORING (6 questions) =====
  {
    id: 'sqe-q1',
    category: 'Factoring',
    generate() {
      const r1 = randInt(-9, 9)
      const r2 = randInt(-9, 9)
      const b = -(r1 + r2)
      const c = r1 * r2
      const smaller = Math.min(r1, r2)
      const { options, correctIndex } = makeOptions(smaller)
      return {
        id: this.id, category: this.category,
        question: `What is the smaller root of $x^2 ${sign(b)}x ${sign(c)} = 0$?`,
        options, correctIndex,
        explanation: `Factor: $(x - ${r1})(x - ${r2}) = 0$, so $x = ${r1}$ or $x = ${r2}$. The smaller root is $${smaller}$.`
      }
    }
  },
  {
    id: 'sqe-q2',
    category: 'Factoring',
    generate() {
      const r = randInt(2, 12)
      const c = r * r
      const { options, correctIndex } = makeOptions(2 * r)
      return {
        id: this.id, category: this.category,
        question: `The equation $x^2 - ${c} = 0$ has two solutions. What is the distance between them?`,
        options, correctIndex,
        explanation: `$x^2 = ${c}$ gives $x = \\pm ${r}$. Distance $= ${r} - (-${r}) = ${2 * r}$.`
      }
    }
  },
  {
    id: 'sqe-q3',
    category: 'Factoring',
    generate() {
      const r1 = randInt(1, 8)
      const r2 = randInt(1, 8)
      const product = r1 * r2
      const { options, correctIndex } = makeOptions(product)
      return {
        id: this.id, category: this.category,
        question: `If $x^2 - ${r1 + r2}x + c = 0$ has roots $${r1}$ and $${r2}$, what is $c$?`,
        options, correctIndex,
        explanation: `By Vieta's formulas, the product of the roots equals $c$: $c = ${r1} \\times ${r2} = ${product}$.`
      }
    }
  },
  {
    id: 'sqe-q4',
    category: 'Factoring',
    generate() {
      const a = randInt(2, 5)
      const r1 = randInt(-6, 6)
      const r2 = randInt(-6, 6)
      const sum = r1 + r2
      const { options, correctIndex } = makeOptions(sum)
      return {
        id: this.id, category: this.category,
        question: `If $${a}(x - ${r1})(x - ${r2}) = 0$, what is the sum of the solutions?`,
        options, correctIndex,
        explanation: `The solutions are $x = ${r1}$ and $x = ${r2}$. Sum $= ${r1} + ${r2} = ${sum}$.`
      }
    }
  },
  {
    id: 'sqe-q5',
    category: 'Factoring',
    generate() {
      const r1 = randInt(1, 7)
      const r2 = randInt(1, 7)
      const b = r1 + r2
      const c = r1 * r2
      const correct = `$(x - ${r1})(x - ${r2})$`
      const d1 = `$(x + ${r1})(x + ${r2})$`
      const d2 = `$(x - ${r1})(x + ${r2})$`
      const d3 = `$(x + ${r1})(x - ${r2})$`
      const { options, correctIndex } = makeStringOptions(correct, [d1, d2, d3])
      return {
        id: this.id, category: this.category,
        question: `Which is the correct factored form of $x^2 - ${b}x + ${c}$?`,
        options, correctIndex,
        explanation: `We need two numbers that multiply to $${c}$ and add to $-${b}$: $-${r1}$ and $-${r2}$. So $(x - ${r1})(x - ${r2})$.`
      }
    }
  },
  {
    id: 'sqe-q6',
    category: 'Factoring',
    generate() {
      const r = randInt(2, 10)
      const c = r * r
      const { options, correctIndex } = makeStringOptions(
        `$(x - ${r})(x + ${r})$`,
        [`$(x - ${r})^2$`, `$(x + ${r})^2$`, `$(x - ${c})(x + 1)$`]
      )
      return {
        id: this.id, category: this.category,
        question: `Factor $x^2 - ${c}$ completely.`,
        options, correctIndex,
        explanation: `This is a difference of squares: $x^2 - ${r}^2 = (x - ${r})(x + ${r})$.`
      }
    }
  },

  // ===== QUADRATIC FORMULA & DISCRIMINANT (6 questions) =====
  {
    id: 'sqe-q7',
    category: 'Quadratic Formula',
    generate() {
      // Ensure integer solutions: a=1, roots r1,r2
      const r1 = randInt(-8, 8)
      const r2 = randInt(-8, 8)
      const b = -(r1 + r2)
      const c = r1 * r2
      const larger = Math.max(r1, r2)
      const { options, correctIndex } = makeOptions(larger)
      return {
        id: this.id, category: this.category,
        question: `Using the quadratic formula, find the larger solution of $x^2 ${sign(b)}x ${sign(c)} = 0$.`,
        options, correctIndex,
        explanation: `$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ with $a=1, b=${b}, c=${c}$. Solutions are $${r1}$ and $${r2}$. Larger is $${larger}$.`
      }
    }
  },
  {
    id: 'sqe-q8',
    category: 'Quadratic Formula',
    generate() {
      const a = randInt(1, 4)
      const b = randInt(-10, 10)
      const c = randInt(-10, 10)
      const disc = b * b - 4 * a * c
      const { options, correctIndex } = makeOptions(disc, 10)
      return {
        id: this.id, category: this.category,
        question: `What is the discriminant of $${a}x^2 ${sign(b)}x ${sign(c)} = 0$?`,
        options, correctIndex,
        explanation: `Discriminant $= b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${b * b} - ${4 * a * c} = ${disc}$.`
      }
    }
  },
  {
    id: 'sqe-q9',
    category: 'Quadratic Formula',
    generate() {
      const scenarios = [
        { disc: 'positive', count: 'Two distinct real solutions' },
        { disc: 'zero', count: 'Exactly one real solution (repeated root)' },
        { disc: 'negative', count: 'No real solutions' },
      ]
      const pick = randInt(0, 2)
      // Build equation to match
      let a: number, b: number, c: number
      if (pick === 0) {
        a = 1; b = randInt(1, 8); c = randInt(-10, -1) // b²-4c > 0
      } else if (pick === 1) {
        const r = randInt(1, 6); a = 1; b = -2 * r; c = r * r // perfect square
      } else {
        a = 1; b = randInt(-3, 3); c = b * b + randInt(1, 5) // disc < 0
      }
      const disc = b * b - 4 * a * c
      const correct = scenarios[pick].count
      const others = scenarios.filter((_, i) => i !== pick).map(s => s.count)
      others.push('Infinitely many solutions')
      const { options, correctIndex } = makeStringOptions(correct, others)
      return {
        id: this.id, category: this.category,
        question: `How many real solutions does $x^2 ${sign(b)}x ${sign(c)} = 0$ have? (Discriminant $= ${disc}$)`,
        options, correctIndex,
        explanation: `The discriminant is $${disc}$. ${disc > 0 ? 'Positive → two distinct real solutions.' : disc === 0 ? 'Zero → exactly one repeated root.' : 'Negative → no real solutions.'}`
      }
    }
  },
  {
    id: 'sqe-q10',
    category: 'Quadratic Formula',
    generate() {
      // ax² + bx + c = 0 with no real solutions
      const a = randInt(1, 3)
      const b = randInt(-4, 4)
      const cMin = Math.floor(b * b / (4 * a)) + 1
      const c = cMin + randInt(0, 5)
      const disc = b * b - 4 * a * c
      const correct = 'No real solutions'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Two positive solutions', 'Two negative solutions', 'One positive, one negative'
      ])
      return {
        id: this.id, category: this.category,
        question: `The equation $${a}x^2 ${sign(b)}x + ${c} = 0$ has a discriminant of $${disc}$. What can we conclude?`,
        options, correctIndex,
        explanation: `Since the discriminant $${disc} < 0$, the equation has no real solutions.`
      }
    }
  },
  {
    id: 'sqe-q11',
    category: 'Quadratic Formula',
    generate() {
      const r1 = randInt(-6, 6)
      const r2 = randInt(-6, 6)
      const sum = r1 + r2
      const product = r1 * r2
      const { options, correctIndex } = makeOptions(product)
      return {
        id: this.id, category: this.category,
        question: `If the sum of the roots of $x^2 + bx + c = 0$ is $${-sum}$ (so $b = ${sum}$) and one root is $${r1}$, what is $c$?`,
        options, correctIndex,
        explanation: `If one root is $${r1}$ and the sum is $${-(sum)}$, the other root is $${r2}$. Then $c = ${r1} \\times ${r2} = ${product}$.`
      }
    }
  },
  {
    id: 'sqe-q12',
    category: 'Quadratic Formula',
    generate() {
      // Which equation has exactly one solution?
      const r = randInt(1, 8)
      const b = -2 * r
      const c = r * r
      const correct = `$x^2 ${sign(b)}x + ${c} = 0$`
      const b2 = b + randNonZero(-3, 3)
      const c2 = c + randNonZero(1, 4)
      const c3 = c - randInt(1, 4)
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x^2 ${sign(b2)}x + ${c} = 0$`,
        `$x^2 ${sign(b)}x + ${c2} = 0$`,
        `$x^2 ${sign(b)}x + ${c3} = 0$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Which equation has exactly one real solution?`,
        options, correctIndex,
        explanation: `$x^2 ${sign(b)}x + ${c} = 0$ → discriminant $= (${b})^2 - 4(${c}) = ${b * b - 4 * c} = 0$, so exactly one solution.`
      }
    }
  },

  // ===== COMPLETING THE SQUARE & VERTEX FORM (6 questions) =====
  {
    id: 'sqe-q13',
    category: 'Vertex Form',
    generate() {
      const h = randInt(-8, 8)
      const k = randInt(-10, 10)
      const a = randNonZero(-3, 3)
      const { options, correctIndex } = makeOptions(k)
      return {
        id: this.id, category: this.category,
        question: `What is the $y$-coordinate of the vertex of $y = ${a}(x - ${h})^2 + ${k}$?`,
        options, correctIndex,
        explanation: `In vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k) = (${h}, ${k})$. The $y$-coordinate is $${k}$.`
      }
    }
  },
  {
    id: 'sqe-q14',
    category: 'Vertex Form',
    generate() {
      const h = randInt(-8, 8)
      const k = randInt(-10, 10)
      const { options, correctIndex } = makeOptions(h)
      return {
        id: this.id, category: this.category,
        question: `For $y = 2(x ${sign(-h)})^2 ${sign(k)}$, what is the $x$-coordinate of the vertex?`,
        options, correctIndex,
        explanation: `Comparing with $y = a(x - h)^2 + k$: $h = ${h}$. The vertex $x$-coordinate is $${h}$.`
      }
    }
  },
  {
    id: 'sqe-q15',
    category: 'Vertex Form',
    generate() {
      // x² + bx + c → complete the square
      const h = randInt(-7, 7)
      const k = randInt(-10, 10)
      // y = (x - h)² + k = x² - 2hx + h² + k
      const b = -2 * h
      const c = h * h + k
      const { options, correctIndex } = makeOptions(k)
      return {
        id: this.id, category: this.category,
        question: `Complete the square: $y = x^2 ${sign(b)}x + ${c}$. What is the minimum (or maximum) value of $y$?`,
        options, correctIndex,
        explanation: `$y = (x ${sign(-h)})^2 + ${k}$. Since $a = 1 > 0$, the minimum value is $k = ${k}$.`
      }
    }
  },
  {
    id: 'sqe-q16',
    category: 'Vertex Form',
    generate() {
      const h = randInt(-6, 6)
      const k = randInt(-8, 8)
      const a = -randInt(1, 3) // negative → max
      const { options, correctIndex } = makeOptions(k)
      return {
        id: this.id, category: this.category,
        question: `The function $f(x) = ${a}(x - ${h})^2 + ${k}$ has a maximum value. What is it?`,
        options, correctIndex,
        explanation: `Since $a = ${a} < 0$, the parabola opens down. Maximum value $= k = ${k}$.`
      }
    }
  },
  {
    id: 'sqe-q17',
    category: 'Vertex Form',
    generate() {
      const h = randInt(1, 8)
      const k = randInt(-8, 8)
      const correct = `$x = ${h}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x = ${-h}$`, `$x = ${k}$`, `$x = ${-k}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the axis of symmetry for $y = 3(x - ${h})^2 + ${k}$?`,
        options, correctIndex,
        explanation: `The axis of symmetry is $x = h = ${h}$.`
      }
    }
  },
  {
    id: 'sqe-q18',
    category: 'Vertex Form',
    generate() {
      const h = randInt(-5, 5)
      const k = randInt(-8, 8)
      const a = randInt(1, 3)
      // Standard form: a(x-h)² + k = ax² - 2ahx + ah² + k
      const bStd = -2 * a * h
      const cStd = a * h * h + k
      const correct = `$(${h}, ${k})$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$(${-h}, ${k})$`, `$(${h}, ${-k})$`, `$(${bStd}, ${cStd})$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Find the vertex of $y = ${a}x^2 ${sign(bStd)}x + ${cStd}$.`,
        options, correctIndex,
        explanation: `$y = ${a}(x ${sign(-h)})^2 + ${k}$, so vertex is $(${h}, ${k})$.`
      }
    }
  },

  // ===== GRAPHING PARABOLAS (5 questions) =====
  {
    id: 'sqe-q19',
    category: 'Graphing',
    generate() {
      const a = randNonZero(-5, 5)
      const correct = a > 0 ? 'Upward' : 'Downward'
      const { options, correctIndex } = makeStringOptions(correct, [
        a > 0 ? 'Downward' : 'Upward', 'Left', 'Right'
      ])
      return {
        id: this.id, category: this.category,
        question: `In which direction does the parabola $y = ${a}x^2 + 3x - 7$ open?`,
        options, correctIndex,
        explanation: `Since $a = ${a}$ is ${a > 0 ? 'positive' : 'negative'}, the parabola opens ${correct.toLowerCase()}.`
      }
    }
  },
  {
    id: 'sqe-q20',
    category: 'Graphing',
    generate() {
      const a = randNonZero(-4, 4)
      const b = randInt(-8, 8)
      const c = randInt(-10, 10)
      const { options, correctIndex } = makeOptions(c)
      return {
        id: this.id, category: this.category,
        question: `What is the $y$-intercept of $y = ${a}x^2 ${sign(b)}x ${sign(c)}$?`,
        options, correctIndex,
        explanation: `Set $x = 0$: $y = ${c}$. The $y$-intercept is $${c}$.`
      }
    }
  },
  {
    id: 'sqe-q21',
    category: 'Graphing',
    generate() {
      const a = randInt(1, 4)
      const h = randInt(-6, 6)
      const k = randInt(1, 10) // positive minimum → range is [k, ∞)
      const correct = `$y \\geq ${k}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$y \\leq ${k}$`, `$y \\geq ${-k}$`, `All real numbers`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the range of $f(x) = ${a}(x - ${h})^2 + ${k}$?`,
        options, correctIndex,
        explanation: `Since $a = ${a} > 0$, the minimum is $k = ${k}$. Range: $y \\geq ${k}$.`
      }
    }
  },
  {
    id: 'sqe-q22',
    category: 'Graphing',
    generate() {
      const a = randNonZero(-4, 4)
      const b = randInt(-10, 10)
      const axisNum = -b
      const axisDen = 2 * a
      const g = gcd(Math.abs(axisNum), Math.abs(axisDen))
      const sNum = (axisDen < 0 ? -1 : 1) * axisNum / g
      const sDen = Math.abs(axisDen) / g
      const correct = fmtX(axisNum, axisDen)
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x = ${b}$`, `$x = ${-a}$`, fmtX(b, a)
      ])
      return {
        id: this.id, category: this.category,
        question: `Find the axis of symmetry of $y = ${a}x^2 ${sign(b)}x + 1$.`,
        options, correctIndex,
        explanation: `Axis of symmetry $= \\frac{-b}{2a} = \\frac{${-b}}{${2 * a}}${g > 1 ? ' = ' + (sDen === 1 ? sNum : '\\frac{' + sNum + '}{' + sDen + '}') : ''}$.`
      }
    }
  },
  {
    id: 'sqe-q23',
    category: 'Graphing',
    generate() {
      const r1 = randInt(-6, 6)
      const r2 = r1 + randInt(2, 8)
      const midpoint = (r1 + r2) / 2
      const correct = Number.isInteger(midpoint) ? `$x = ${midpoint}$` : `$x = ${r1 + r2}/2$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x = ${r1}$`, `$x = ${r2}$`, `$x = ${r1 * r2}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `A parabola crosses the $x$-axis at $x = ${r1}$ and $x = ${r2}$. What is the axis of symmetry?`,
        options, correctIndex,
        explanation: `The axis of symmetry is the midpoint of the roots: $x = \\frac{${r1} + ${r2}}{2} = ${midpoint}$.`
      }
    }
  },

  // ===== SYSTEMS WITH QUADRATICS (5 questions) =====
  {
    id: 'sqe-q24',
    category: 'Systems',
    generate() {
      // y = x², y = mx + b with known intersection
      const x1 = randInt(-5, 5)
      const y1 = x1 * x1
      const m = randInt(-4, 4)
      const b = y1 - m * x1
      const { options, correctIndex } = makeOptions(y1)
      return {
        id: this.id, category: this.category,
        question: `If $y = x^2$ and $y = ${m}x ${sign(b)}$ intersect at $x = ${x1}$, what is the $y$-value at that point?`,
        options, correctIndex,
        explanation: `Substitute $x = ${x1}$ into $y = x^2$: $y = ${x1}^2 = ${y1}$.`
      }
    }
  },
  {
    id: 'sqe-q25',
    category: 'Systems',
    generate() {
      // How many intersections: y = x² + k and y = c
      const k = randInt(-5, 5)
      const c = k + randInt(-3, 8)
      const diff = c - k // x² = diff
      let correct: string
      if (diff > 0) correct = 'Two points'
      else if (diff === 0) correct = 'One point'
      else correct = 'No points'
      const { options, correctIndex } = makeStringOptions(correct, [
        diff > 0 ? 'One point' : 'Two points',
        diff >= 0 ? 'No points' : 'One point',
        'Infinitely many points'
      ])
      return {
        id: this.id, category: this.category,
        question: `How many points of intersection do $y = x^2 + ${k}$ and $y = ${c}$ have?`,
        options, correctIndex,
        explanation: `Set $x^2 + ${k} = ${c}$ → $x^2 = ${diff}$. ${diff > 0 ? 'Positive → two solutions → two points.' : diff === 0 ? 'Zero → one solution → one point (tangent).' : 'Negative → no real solutions → no intersection.'}`
      }
    }
  },
  {
    id: 'sqe-q26',
    category: 'Systems',
    generate() {
      const r = randInt(1, 6)
      const yVal = r * r
      const { options, correctIndex } = makeOptions(r)
      return {
        id: this.id, category: this.category,
        question: `The system $y = x^2$ and $y = ${yVal}$ has two solutions. What is the positive $x$-value?`,
        options, correctIndex,
        explanation: `$x^2 = ${yVal}$ → $x = \\pm ${r}$. The positive value is $${r}$.`
      }
    }
  },
  {
    id: 'sqe-q27',
    category: 'Systems',
    generate() {
      const a = randInt(1, 3)
      const r1 = randInt(-4, 0)
      const r2 = randInt(1, 5)
      const numSolutions = 2
      const { options, correctIndex } = makeOptions(numSolutions)
      return {
        id: this.id, category: this.category,
        question: `The quadratic $y = ${a}(x - ${r1})(x - ${r2})$ intersects the $x$-axis at how many points?`,
        options, correctIndex,
        explanation: `Setting $y = 0$: $(x - ${r1})(x - ${r2}) = 0$ gives $x = ${r1}$ and $x = ${r2}$. That's $2$ points.`
      }
    }
  },
  {
    id: 'sqe-q28',
    category: 'Systems',
    generate() {
      // y = ax² and y = bx. Intersect at x=0 and x=b/a
      const a = randInt(1, 4)
      const b = a * randInt(1, 6)
      const x2 = b / a
      const { options, correctIndex } = makeOptions(x2)
      return {
        id: this.id, category: this.category,
        question: `$y = ${a}x^2$ and $y = ${b}x$ intersect at the origin and one other point. What is the non-zero $x$-value?`,
        options, correctIndex,
        explanation: `Set $${a}x^2 = ${b}x$ → $${a}x^2 - ${b}x = 0$ → $x(${a}x - ${b}) = 0$ → $x = 0$ or $x = ${x2}$.`
      }
    }
  },

  // ===== WORD PROBLEMS (6 questions) =====
  {
    id: 'sqe-q29',
    category: 'Word Problems',
    generate() {
      const v0 = randInt(20, 60) * 2 // even initial velocity
      const timeMax = v0 / 32 // h(t) = v0*t - 16t²
      const maxH = v0 * timeMax - 16 * timeMax * timeMax
      const { options, correctIndex } = makeOptions(maxH, 20)
      return {
        id: this.id, category: this.category,
        question: `A ball is thrown upward with $h(t) = ${v0}t - 16t^2$ feet. What is the maximum height?`,
        options, correctIndex,
        explanation: `Max at $t = \\frac{${v0}}{32} = ${timeMax}$. $h(${timeMax}) = ${v0}(${timeMax}) - 16(${timeMax})^2 = ${maxH}$ feet.`
      }
    }
  },
  {
    id: 'sqe-q30',
    category: 'Word Problems',
    generate() {
      const v0 = 16 * randInt(2, 6) // makes time integer
      const tHit = v0 / 16  // h = v0*t - 16t², hits ground at t = v0/16
      const { options, correctIndex } = makeOptions(tHit)
      return {
        id: this.id, category: this.category,
        question: `A projectile follows $h(t) = ${v0}t - 16t^2$. After how many seconds does it hit the ground?`,
        options, correctIndex,
        explanation: `Set $h = 0$: $t(${v0} - 16t) = 0$ → $t = 0$ or $t = ${tHit}$. It hits the ground at $t = ${tHit}$ seconds.`
      }
    }
  },
  {
    id: 'sqe-q31',
    category: 'Word Problems',
    generate() {
      // Revenue: R(x) = px - cx² where p = price, x = quantity
      const p = randInt(10, 30)
      const c = randInt(1, 3)
      const xMax = Math.floor(p / (2 * c))
      const maxR = p * xMax - c * xMax * xMax
      const { options, correctIndex: _correctIndex } = makeOptions(maxR, 30)
      return {
        id: this.id, category: this.category,
        question: `Revenue is $R(x) = ${p}x - ${c}x^2$. How many units maximize revenue?`,
        options, correctIndex: makeOptions(xMax).correctIndex,
        explanation: `$R'(x) = ${p} - ${2 * c}x = 0$ → $x = ${xMax}$. (Or vertex at $x = \\frac{${p}}{${2 * c}} = ${xMax}$).`
      }
    }
  },
  {
    id: 'sqe-q32',
    category: 'Word Problems',
    generate() {
      // Two numbers with given sum, maximize product
      const s = randInt(10, 30) * 2 // even sum
      const half = s / 2
      const maxProduct = half * half
      const { options, correctIndex } = makeOptions(maxProduct, 50)
      return {
        id: this.id, category: this.category,
        question: `Two numbers sum to $${s}$. What is the maximum possible product?`,
        options, correctIndex,
        explanation: `If $x + y = ${s}$, then $P = x(${s} - x) = -x^2 + ${s}x$. Max at $x = ${half}$: $P = ${maxProduct}$.`
      }
    }
  },
  {
    id: 'sqe-q33',
    category: 'Word Problems',
    generate() {
      const t = randInt(1, 5)
      const v0 = randInt(20, 80)
      const h0 = randInt(0, 20)
      const h = h0 + v0 * t - 16 * t * t
      const { options, correctIndex } = makeOptions(h, 20)
      return {
        id: this.id, category: this.category,
        question: `A ball follows $h(t) = -16t^2 + ${v0}t + ${h0}$. What is the height at $t = ${t}$?`,
        options, correctIndex,
        explanation: `$h(${t}) = -16(${t})^2 + ${v0}(${t}) + ${h0} = ${-16 * t * t} + ${v0 * t} + ${h0} = ${h}$.`
      }
    }
  },
  {
    id: 'sqe-q34',
    category: 'Word Problems',
    generate() {
      // Rectangle: perimeter P, maximize area
      const P = randInt(10, 30) * 4 // divisible by 4 for nice numbers
      const side = P / 4
      const maxArea = side * side
      const { options, correctIndex } = makeOptions(maxArea, 50)
      return {
        id: this.id, category: this.category,
        question: `A rectangle has perimeter $${P}$. What is the maximum possible area?`,
        options, correctIndex,
        explanation: `If sides are $x$ and $${P / 2} - x$, area $= x(${P / 2} - x)$. Max when $x = ${side}$ (a square): area $= ${maxArea}$.`
      }
    }
  },

  // ===== MIXED REVIEW (6 questions) =====
  {
    id: 'sqe-q35',
    category: 'Review',
    generate() {
      const r1 = randInt(-8, 8)
      const r2 = randInt(-8, 8)
      const sum = r1 + r2
      const { options, correctIndex } = makeOptions(sum)
      return {
        id: this.id, category: this.category,
        question: `If $x^2 ${sign(-(r1 + r2))}x + ${r1 * r2} = 0$, what is the sum of the roots?`,
        options, correctIndex,
        explanation: `By Vieta's formulas, sum of roots $= -b/a = ${sum}$. (Or: roots are $${r1}$ and $${r2}$, sum $= ${sum}$).`
      }
    }
  },
  {
    id: 'sqe-q36',
    category: 'Review',
    generate() {
      const a = randInt(1, 5)
      const h = randInt(-6, 6)
      const k = randInt(-8, 8)
      const yIntercept = a * h * h + k
      const { options, correctIndex } = makeOptions(yIntercept, 10)
      return {
        id: this.id, category: this.category,
        question: `What is the $y$-intercept of $f(x) = ${a}(x - ${h})^2 + ${k}$?`,
        options, correctIndex,
        explanation: `$f(0) = ${a}(0 - ${h})^2 + ${k} = ${a}(${h * h}) + ${k} = ${a * h * h} + ${k} = ${yIntercept}$.`
      }
    }
  },
  {
    id: 'sqe-q37',
    category: 'Review',
    generate() {
      const a = randNonZero(-4, 4)
      const correct = a > 0 ? 'Minimum' : 'Maximum'
      const { options, correctIndex } = makeStringOptions(correct, [
        a > 0 ? 'Maximum' : 'Minimum', 'Neither', 'Both'
      ])
      return {
        id: this.id, category: this.category,
        question: `Does $f(x) = ${a}x^2 + 5x - 3$ have a minimum or maximum value?`,
        options, correctIndex,
        explanation: `Since $a = ${a}$ is ${a > 0 ? 'positive (opens up)' : 'negative (opens down)'}, the function has a ${correct.toLowerCase()}.`
      }
    }
  },
  {
    id: 'sqe-q38',
    category: 'Review',
    generate() {
      const k = randInt(1, 10)
      const correct = `$x = \\pm\\sqrt{${k}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x = ${k}$`, `$x = \\pm ${k}$`, `$x = \\sqrt{${k}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Solve $x^2 = ${k}$.`,
        options, correctIndex,
        explanation: `Taking square roots: $x = \\pm\\sqrt{${k}}$.`
      }
    }
  },
  {
    id: 'sqe-q39',
    category: 'Review',
    generate() {
      const r1 = randInt(1, 9)
      const r2 = randInt(1, 9)
      // (x + r1)(x - r2) = x² + (r1-r2)x - r1*r2
      const b = r1 - r2
      const c = -(r1 * r2)
      const posRoot = r2
      const { options, correctIndex } = makeOptions(posRoot)
      return {
        id: this.id, category: this.category,
        question: `What is the positive solution of $x^2 ${sign(b)}x ${sign(c)} = 0$?`,
        options, correctIndex,
        explanation: `Factor: $(x + ${r1})(x - ${r2}) = 0$ → $x = -${r1}$ or $x = ${r2}$. Positive solution: $${r2}$.`
      }
    }
  },
  {
    id: 'sqe-q40',
    category: 'Review',
    generate() {
      const n = randInt(2, 8)
      const answer = n * n
      const { options, correctIndex } = makeOptions(answer)
      return {
        id: this.id, category: this.category,
        question: `To complete the square for $x^2 + ${2 * n}x$, what constant should be added?`,
        options, correctIndex,
        explanation: `Take half of $${2 * n}$ → $${n}$, then square it: $${n}^2 = ${answer}$. Add $${answer}$.`
      }
    }
  },
]

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b)
  while (b) { [a, b] = [b, a % b] }
  return a
}

function fmtX(num: number, den: number): string {
  if (den === 0) return `$x = ${num}$`
  const g = gcd(Math.abs(num), Math.abs(den)) || 1
  let n = num / g, d = den / g
  if (d < 0) { n = -n; d = -d }
  return d === 1 ? `$x = ${n}$` : `$x = \\frac{${n}}{${d}}$`
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
