/**
 * Exit Quiz Question Pool — SAT Functions & Graphs
 * 40 questions covering function notation, domain/range, transformations,
 * composition, inverses, graph interpretation, piecewise & absolute value.
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

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makeOptions(correct: number, spread: number = 2, min?: number): { options: string[]; correctIndex: number } {
  const distractors = new Set<number>()
  while (distractors.size < 3) {
    const d = correct + randInt(-spread * 3, spread * 3)
    if (d !== correct && (min === undefined || d >= min)) distractors.add(d)
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

function sign(n: number): string {
  return n >= 0 ? `+ ${n}` : `- ${Math.abs(n)}`
}
// Coefficient on x: omit 1, render -1 as "-", everything else literal.
function coef(m: number): string {
  if (m === 1) return ''
  if (m === -1) return '-'
  return `${m}`
}
// "mx + b" with coefficient + sign folding (handles m = ±1, b = 0, and the constant sign).
function linear(m: number, b: number): string {
  return b === 0 ? `${coef(m)}x` : `${coef(m)}x ${sign(b)}`
}
// "ax^2 + bx + c" with coefficient folding and zero-term skipping.
function quad(a: number, b: number, c: number): string {
  let s = `${coef(a)}x^2`
  if (b !== 0) s += ` ${b > 0 ? '+' : '-'} ${Math.abs(b) === 1 ? '' : Math.abs(b)}x`
  if (c !== 0) s += ` ${sign(c)}`
  return s
}

const questionPool: QuestionTemplate[] = [
  // ===== FUNCTION NOTATION (5 questions) =====
  {
    id: 'sfg-q1',
    category: 'Function Notation',
    difficulty: 'easy',
    generate() {
      const a = randNonZero(-5, 5)
      const b = randInt(-10, 10)
      const x = randInt(-5, 5)
      const ans = a * x + b
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(a, b)}$, what is $f(${x})$?`,
        options, correctIndex,
        explanation: `$f(${x}) = ${a}(${x}) ${sign(b)} = ${a * x} ${sign(b)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q2',
    category: 'Function Notation',
    difficulty: 'medium',
    generate() {
      const a = randInt(1, 4)
      const b = randInt(-6, 6)
      const c = randInt(-8, 8)
      const x = randInt(-3, 3)
      const ans = a * x * x + b * x + c
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${quad(a, b, c)}$, find $f(${x})$.`,
        options, correctIndex,
        explanation: `$f(${x}) = ${a}(${x})^2 ${sign(b)}(${x}) ${sign(c)} = ${a * x * x} ${sign(b * x)} ${sign(c)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q3',
    category: 'Function Notation',
    difficulty: 'medium',
    generate() {
      const a = randNonZero(-4, 4)
      const b = randInt(-8, 8)
      // f(x) = ax + b, solve f(x) = 0
      const ans = -b / a
      if (!Number.isInteger(ans)) {
        // Force integer answer
        const newB = a * randInt(-5, 5)
        const newAns = -newB / a
        const { options, correctIndex } = makeOptions(newAns)
        return {
          id: this.id, category: this.category,
          question: `If $f(x) = ${linear(a, newB)}$, for what value of $x$ does $f(x) = 0$?`,
          options, correctIndex,
          explanation: `Set $${linear(a, newB)} = 0$ → $x = ${newAns}$.`
        }
      }
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(a, b)}$, for what value of $x$ does $f(x) = 0$?`,
        options, correctIndex,
        explanation: `Set $${linear(a, b)} = 0$ → $${coef(a)}x = ${-b}$ → $x = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q4',
    category: 'Function Notation',
    difficulty: 'easy',
    generate() {
      const a = randInt(1, 5)
      const b = randInt(-5, 5)
      const x = randInt(0, 4)
      const ans = a * x * x + b
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `Given $g(x) = ${quad(a, 0, b)}$, evaluate $g(${x})$.`,
        options, correctIndex,
        explanation: `$g(${x}) = ${a}(${x})^2 ${sign(b)} = ${a * x * x} ${sign(b)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q5',
    category: 'Function Notation',
    difficulty: 'medium',
    generate() {
      const m = randNonZero(-5, 5)
      const b = randInt(-8, 8)
      const x1 = randInt(-3, 3)
      const x2 = x1 + randInt(1, 4)
      const f1 = m * x1 + b
      const f2 = m * x2 + b
      const diff = f2 - f1
      const { options, correctIndex } = makeOptions(diff)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(m, b)}$, what is $f(${x2}) - f(${x1})$?`,
        options, correctIndex,
        explanation: `$f(${x2}) = ${f2}$, $f(${x1}) = ${f1}$. Difference $= ${f2} - ${f1} = ${diff}$.`
      }
    }
  },

  // ===== DOMAIN & RANGE (5 questions) =====
  {
    id: 'sfg-q6',
    category: 'Domain & Range',
    difficulty: 'easy',
    generate() {
      const a = randInt(1, 8)
      const correct = `$x \\neq ${a}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x \\neq -${a}$`, `$x \\geq ${a}$`, 'All real numbers'
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the domain of $f(x) = \\frac{1}{x - ${a}}$?`,
        options, correctIndex,
        explanation: `The denominator $x - ${a} \\neq 0$, so $x \\neq ${a}$.`
      }
    }
  },
  {
    id: 'sfg-q7',
    category: 'Domain & Range',
    difficulty: 'easy',
    generate() {
      const a = randInt(-8, 8)
      const correct = `$x \\geq ${a}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x \\leq ${a}$`, `$x > ${a}$`, 'All real numbers'
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the domain of $f(x) = \\sqrt{x - ${a}}$?`,
        options, correctIndex,
        explanation: `The expression under the radical must be $\\geq 0$: $x - ${a} \\geq 0$ → $x \\geq ${a}$.`
      }
    }
  },
  {
    id: 'sfg-q8',
    category: 'Domain & Range',
    difficulty: 'medium',
    generate() {
      const k = randNonZero(-8, 8)
      const correct = `$y \\geq ${k}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$y \\leq ${k}$`, `$y \\geq 0$`, 'All real numbers'
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the range of $f(x) = x^2 ${sign(k)}$?`,
        options, correctIndex,
        explanation: `$x^2 \\geq 0$, so $f(x) \\geq ${k}$. Range: $y \\geq ${k}$.`
      }
    }
  },
  {
    id: 'sfg-q9',
    category: 'Domain & Range',
    difficulty: 'medium',
    generate() {
      const a = randInt(1, 6)
      const b = randInt(1, 6)
      const correct = `$x \\neq ${a}$ and $x \\neq -${b}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x \\neq ${a}$`, `$x \\neq -${b}$`, 'All real numbers'
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the domain of $f(x) = \\frac{x}{(x - ${a})(x + ${b})}$?`,
        options, correctIndex,
        explanation: `Denominator is zero when $x = ${a}$ or $x = -${b}$. Exclude both.`
      }
    }
  },
  {
    id: 'sfg-q10',
    category: 'Domain & Range',
    difficulty: 'easy',
    generate() {
      const correct = 'All real numbers'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$x \\geq 0$', '$x \\neq 0$', '$x > 0$'
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the domain of $f(x) = x^3 - ${randInt(1, 10)}x + ${randInt(1, 10)}$?`,
        options, correctIndex,
        explanation: `Polynomials are defined for all real numbers. Domain: all real numbers.`
      }
    }
  },

  // ===== TRANSFORMATIONS (5 questions) =====
  {
    id: 'sfg-q11',
    category: 'Transformations',
    difficulty: 'easy',
    generate() {
      const h = randInt(1, 8)
      const dir = h > 0 ? 'right' : 'left'
      const correct = `Shifts $f(x)$ ${dir} by $${Math.abs(h)}$ units`
      const opp = h > 0 ? 'left' : 'right'
      const { options, correctIndex } = makeStringOptions(correct, [
        `Shifts $f(x)$ ${opp} by $${Math.abs(h)}$ units`,
        `Shifts $f(x)$ up by $${Math.abs(h)}$ units`,
        `Shifts $f(x)$ down by $${Math.abs(h)}$ units`
      ])
      return {
        id: this.id, category: this.category,
        question: `How does $g(x) = f(x - ${h})$ relate to $f(x)$?`,
        options, correctIndex,
        explanation: `$f(x - ${h})$ shifts the graph right by $${h}$ units.`
      }
    }
  },
  {
    id: 'sfg-q12',
    category: 'Transformations',
    difficulty: 'easy',
    generate() {
      const k = randInt(1, 10)
      const correct = `Shifts $f(x)$ up by $${k}$ units`
      const { options, correctIndex } = makeStringOptions(correct, [
        `Shifts $f(x)$ down by $${k}$ units`,
        `Shifts $f(x)$ right by $${k}$ units`,
        `Stretches $f(x)$ vertically by factor $${k}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What transformation does $g(x) = f(x) + ${k}$ apply to $f(x)$?`,
        options, correctIndex,
        explanation: `Adding $${k}$ to $f(x)$ shifts the graph up by $${k}$ units.`
      }
    }
  },
  {
    id: 'sfg-q13',
    category: 'Transformations',
    difficulty: 'easy',
    generate() {
      const correct = 'Reflects $f(x)$ across the $x$-axis'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Reflects $f(x)$ across the $y$-axis',
        'Shifts $f(x)$ down by $1$ unit',
        'Rotates $f(x)$ by $180^\\circ$'
      ])
      return {
        id: this.id, category: this.category,
        question: `What does $g(x) = -f(x)$ do to the graph of $f(x)$?`,
        options, correctIndex,
        explanation: `Negating $f(x)$ reflects the graph across the $x$-axis.`
      }
    }
  },
  {
    id: 'sfg-q14',
    category: 'Transformations',
    difficulty: 'easy',
    generate() {
      const a = randInt(2, 5)
      const correct = `Vertical stretch by factor $${a}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `Vertical compression by factor $${a}$`,
        `Horizontal stretch by factor $${a}$`,
        `Shift up by $${a}$ units`
      ])
      return {
        id: this.id, category: this.category,
        question: `How does $g(x) = ${a} \\cdot f(x)$ compare to $f(x)$?`,
        options, correctIndex,
        explanation: `Multiplying by $${a} > 1$ stretches the graph vertically by a factor of $${a}$.`
      }
    }
  },
  {
    id: 'sfg-q15',
    category: 'Transformations',
    difficulty: 'medium',
    generate() {
      const h = randInt(1, 6)
      const k = randInt(1, 8)
      const correct = `Right $${h}$, up $${k}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `Left $${h}$, up $${k}$`,
        `Right $${h}$, down $${k}$`,
        `Left $${h}$, down $${k}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$g(x) = f(x - ${h}) + ${k}$ shifts $f(x)$ in which direction?`,
        options, correctIndex,
        explanation: `$x - ${h}$ → right $${h}$; $+ ${k}$ → up $${k}$.`
      }
    }
  },

  // ===== COMPOSITION (5 questions) =====
  {
    id: 'sfg-q16',
    category: 'Composition',
    difficulty: 'medium',
    generate() {
      const a = randNonZero(-4, 4)
      const b = randInt(-6, 6)
      const c = randNonZero(-4, 4)
      const d = randInt(-6, 6)
      const x = randInt(-3, 3)
      const gx = c * x + d
      const ans = a * gx + b
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(a, b)}$ and $g(x) = ${linear(c, d)}$, what is $f(g(${x}))$?`,
        options, correctIndex,
        explanation: `$g(${x}) = ${c}(${x}) ${sign(d)} = ${gx}$. $f(${gx}) = ${a}(${gx}) ${sign(b)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q17',
    category: 'Composition',
    difficulty: 'hard',
    generate() {
      const a = randInt(1, 4)
      const b = randInt(-5, 5)
      const x = randInt(0, 5)
      const fx = a * x + b
      const ans = a * fx + b
      const { options, correctIndex } = makeOptions(ans, 5)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(a, b)}$, what is $f(f(${x}))$?`,
        options, correctIndex,
        explanation: `$f(${x}) = ${fx}$. $f(${fx}) = ${a}(${fx}) ${sign(b)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q18',
    category: 'Composition',
    difficulty: 'medium',
    generate() {
      const a = randNonZero(-3, 3)
      const b = randInt(-5, 5)
      const x = randInt(0, 6)
      const gx = x * x
      const ans = a * gx + b
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(a, b)}$ and $g(x) = x^2$, find $f(g(${x}))$.`,
        options, correctIndex,
        explanation: `$g(${x}) = ${x}^2 = ${gx}$. $f(${gx}) = ${a}(${gx}) ${sign(b)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q19',
    category: 'Composition',
    difficulty: 'medium',
    generate() {
      const a = randInt(1, 4)
      const b = randInt(-5, 5)
      const x = randInt(0, 4)
      const fx = a * x + b
      const ans = fx * fx
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(a, b)}$ and $g(x) = x^2$, find $g(f(${x}))$.`,
        options, correctIndex,
        explanation: `$f(${x}) = ${fx}$. $g(${fx}) = (${fx})^2 = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q20',
    category: 'Composition',
    difficulty: 'hard',
    generate() {
      // f(g(x)) = m(nx + b2) + b1 = mnx + mb2 + b1; redraw until all four options are distinct
      let m = 1, b1 = 0, n = 1, b2 = 0, compM = 1, compB = 0
      let correct = '', d1 = '', d2 = '', d3 = ''
      do {
        m = randNonZero(-4, 4); b1 = randInt(-5, 5)
        n = randNonZero(-4, 4); b2 = randInt(-5, 5)
        compM = m * n
        compB = m * b2 + b1
        correct = `$${linear(compM, compB)}$`
        d1 = `$${linear(m + n, b1 + b2)}$`
        d2 = `$${linear(m * n, b1 * b2)}$`
        d3 = `$${linear(n, compB)}$`
      } while (m + n === 0 || new Set([correct, d1, d2, d3]).size < 4)
      const { options, correctIndex } = makeStringOptions(correct, [d1, d2, d3])
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(m, b1)}$ and $g(x) = ${linear(n, b2)}$, express $f(g(x))$ in simplified form.`,
        options, correctIndex,
        explanation: `$f(g(x)) = ${m}(${linear(n, b2)}) ${sign(b1)} = ${linear(compM, m * b2)} ${sign(b1)} = ${linear(compM, compB)}$.`
      }
    }
  },

  // ===== INVERSES (5 questions) =====
  {
    id: 'sfg-q21',
    category: 'Inverses',
    difficulty: 'hard',
    generate() {
      const m = randNonZero(-5, 5)
      const b = randInt(-8, 8)
      // f(x) = mx + b → f⁻¹(x) = (x - b)/m
      const y = m * randInt(-3, 3) + b // make sure f⁻¹(y) is integer
      const ans = (y - b) / m
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(m, b)}$, what is $f^{-1}(${y})$?`,
        options, correctIndex,
        explanation: `$f^{-1}(x) = \\frac{x ${sign(-b)}}{${m}}$. $f^{-1}(${y}) = \\frac{${y} ${sign(-b)}}{${m}} = \\frac{${y - b}}{${m}} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q22',
    category: 'Inverses',
    difficulty: 'hard',
    generate() {
      const m = randNonZero(-5, 5)
      const b = randNonZero(-8, 8)
      const correct = `$f^{-1}(x) = \\frac{x ${sign(-b)}}{${m}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$f^{-1}(x) = ${linear(m, -b)}$`,
        `$f^{-1}(x) = \\frac{${m}}{x ${sign(-b)}}$`,
        `$f^{-1}(x) = \\frac{x ${sign(b)}}{${m}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Find the inverse of $f(x) = ${linear(m, b)}$.`,
        options, correctIndex,
        explanation: `Swap $x$ and $y$: $x = ${m}y ${sign(b)}$ → $y = \\frac{x ${sign(-b)}}{${m}}$.`
      }
    }
  },
  {
    id: 'sfg-q23',
    category: 'Inverses',
    difficulty: 'hard',
    generate() {
      const a = randInt(2, 6)
      const b = randInt(-5, 5)
      const x = randInt(-3, 3)
      const fx = a * x + b
      // f(f⁻¹(x)) = x always — the answer is x itself, so options must center on x
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `If $f(${x}) = ${fx}$, what is $f^{-1}(${fx})$?`,
        options, correctIndex,
        explanation: `Since $f(${x}) = ${fx}$, we know $f^{-1}(${fx}) = ${x}$.`
      }
    }
  },
  {
    id: 'sfg-q24',
    category: 'Inverses',
    difficulty: 'easy',
    generate() {
      const correct = '$y = x$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$y = -x$', '$y = 0$', 'The $x$-axis'
      ])
      return {
        id: this.id, category: this.category,
        question: `The graph of $f(x)$ and its inverse $f^{-1}(x)$ are reflections across which line?`,
        options, correctIndex,
        explanation: `A function and its inverse are always reflections across the line $y = x$.`
      }
    }
  },
  {
    id: 'sfg-q25',
    category: 'Inverses',
    difficulty: 'easy',
    generate() {
      const a = randInt(1, 5)
      const b = randInt(-5, 5)
      const x = randInt(-3, 3)
      const _ans = a * x + b
      // f⁻¹(f(x)) = x
      const { options, correctIndex } = makeOptions(x)
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(a, b)}$, what is $f^{-1}(f(${x}))$?`,
        options, correctIndex,
        explanation: `$f^{-1}(f(x)) = x$ for any $x$ in the domain. So $f^{-1}(f(${x})) = ${x}$.`
      }
    }
  },

  // ===== GRAPH INTERPRETATION (5 questions) =====
  {
    id: 'sfg-q26',
    category: 'Graph Interpretation',
    difficulty: 'easy',
    generate() {
      const a = randNonZero(-4, 4)
      const b = randInt(-8, 8)
      const yInt = b
      const { options, correctIndex } = makeOptions(yInt)
      return {
        id: this.id, category: this.category,
        question: `What is the $y$-intercept of $f(x) = ${linear(a, b)}$?`,
        options, correctIndex,
        explanation: `The $y$-intercept occurs at $x = 0$: $f(0) = ${b}$.`
      }
    }
  },
  {
    id: 'sfg-q27',
    category: 'Graph Interpretation',
    difficulty: 'easy',
    generate() {
      const r1 = randInt(-6, -1)
      const r2 = randInt(1, 6)
      const numZeros = 2
      const { options, correctIndex } = makeOptions(numZeros)
      return {
        id: this.id, category: this.category,
        question: `$f(x) = (x ${sign(-r1)})(x ${sign(-r2)})$ has how many $x$-intercepts?`,
        options, correctIndex,
        explanation: `Setting $f(x) = 0$: $x = ${r1}$ and $x = ${r2}$. That's $2$ $x$-intercepts.`
      }
    }
  },
  {
    id: 'sfg-q28',
    category: 'Graph Interpretation',
    difficulty: 'medium',
    generate() {
      const m = randNonZero(-5, 5)
      const correct = m > 0 ? 'Increasing on its entire domain' : 'Decreasing on its entire domain'
      const wrong = m > 0 ? 'Decreasing on its entire domain' : 'Increasing on its entire domain'
      const { options, correctIndex } = makeStringOptions(correct, [
        wrong, 'Constant', 'Increasing then decreasing'
      ])
      return {
        id: this.id, category: this.category,
        question: `The function $f(x) = ${linear(m, randInt(1, 10))}$ is:`,
        options, correctIndex,
        explanation: `The slope is $${m}$, which is ${m > 0 ? 'positive → increasing' : 'negative → decreasing'} everywhere.`
      }
    }
  },
  {
    id: 'sfg-q29',
    category: 'Graph Interpretation',
    difficulty: 'medium',
    generate() {
      const a = randInt(1, 4)
      const h = randInt(-5, 5)
      const k = randInt(-5, 5)
      const min = k
      const { options, correctIndex } = makeOptions(min)
      return {
        id: this.id, category: this.category,
        question: `What is the minimum value of $f(x) = ${a}(x - ${h})^2 + ${k}$?`,
        options, correctIndex,
        explanation: `Since $a > 0$, the minimum is at the vertex: $f(${h}) = ${k}$.`
      }
    }
  },
  {
    id: 'sfg-q30',
    category: 'Graph Interpretation',
    difficulty: 'medium',
    generate() {
      const a = randNonZero(-4, 4)
      const b = randInt(-8, 8)
      const slope = a
      const { options, correctIndex } = makeOptions(slope)
      return {
        id: this.id, category: this.category,
        question: `What is the average rate of change of $f(x) = ${linear(a, b)}$ over any interval?`,
        options, correctIndex,
        explanation: `For a linear function $f(x) = mx + b$, the rate of change is the slope $m = ${a}$ everywhere.`
      }
    }
  },

  // ===== PIECEWISE & ABSOLUTE VALUE (5 questions) =====
  {
    id: 'sfg-q31',
    category: 'Piecewise',
    difficulty: 'easy',
    generate() {
      const a = randInt(-8, 8)
      const ans = Math.abs(a)
      const { options, correctIndex } = makeOptions(ans, 2, 0)
      return {
        id: this.id, category: this.category,
        question: `What is $|${a}|$?`,
        options, correctIndex,
        explanation: `$|${a}| = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q32',
    category: 'Piecewise',
    difficulty: 'easy',
    generate() {
      const c = randInt(1, 8)
      const correct = `$x = ${c}$ or $x = ${-c}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x = ${c}$`, `$x = -${c}$`, `No solution`
      ])
      return {
        id: this.id, category: this.category,
        question: `Solve $|x| = ${c}$.`,
        options, correctIndex,
        explanation: `$|x| = ${c}$ means $x = ${c}$ or $x = -${c}$.`
      }
    }
  },
  {
    id: 'sfg-q33',
    category: 'Piecewise',
    difficulty: 'medium',
    generate() {
      const a = randNonZero(-5, 5)
      const b = randInt(-8, 8)
      const c = randInt(1, 10)
      // |ax + b| = c → ax + b = c or ax + b = -c
      const _x1 = (c - b) / a
      const _x2 = (-c - b) / a
      const numSolns = 2
      const { options, correctIndex } = makeOptions(numSolns)
      return {
        id: this.id, category: this.category,
        question: `How many solutions does $|${linear(a, b)}| = ${c}$ have?`,
        options, correctIndex,
        explanation: `Since $${c} > 0$, there are two cases: $${linear(a, b)} = ${c}$ and $${linear(a, b)} = -${c}$. Two solutions.`
      }
    }
  },
  {
    id: 'sfg-q34',
    category: 'Piecewise',
    difficulty: 'medium',
    generate() {
      const breakpoint = randInt(-3, 3)
      const a = randNonZero(-4, 4)
      const b = randInt(-5, 5)
      const c = randNonZero(-4, 4)
      const d = randInt(-5, 5)
      const x = breakpoint - randInt(1, 4) // x < breakpoint
      const ans = a * x + b
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `$f(x) = \\begin{cases} ${linear(a, b)} & \\text{if } x < ${breakpoint} \\\\ ${linear(c, d)} & \\text{if } x \\geq ${breakpoint} \\end{cases}$. Find $f(${x})$.`,
        options, correctIndex,
        explanation: `Since $${x} < ${breakpoint}$, use the first piece: $f(${x}) = ${a}(${x}) ${sign(b)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q35',
    category: 'Piecewise',
    difficulty: 'medium',
    generate() {
      const h = randNonZero(-5, 5)
      const k = randNonZero(-5, 5)
      const correct = `$(${h}, ${k})$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$(${-h}, ${k})$`, `$(${h}, ${-k})$`, `$(0, ${k + Math.abs(h)})$`
      ])
      const absExpr = `|x ${sign(-h)}| ${sign(k)}`
      return {
        id: this.id, category: this.category,
        question: `What is the vertex of $f(x) = ${absExpr}$?`,
        options, correctIndex,
        explanation: `$f(x) = ${absExpr}$ has vertex at $(${h}, ${k})$.`
      }
    }
  },

  // ===== MIXED REVIEW (5 questions) =====
  {
    id: 'sfg-q36',
    category: 'Review',
    difficulty: 'easy',
    generate() {
      const m = randNonZero(-5, 5)
      const b = randInt(-8, 8)
      const x = randInt(-4, 4)
      const ans = m * x + b
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `If $h(x) = ${linear(m, b)}$, calculate $h(${x})$.`,
        options, correctIndex,
        explanation: `$h(${x}) = ${m}(${x}) ${sign(b)} = ${ans}$.`
      }
    }
  },
  {
    id: 'sfg-q37',
    category: 'Review',
    difficulty: 'easy',
    generate() {
      const a = randInt(1, 5)
      const correct = `$x \\geq 0$`
      const { options, correctIndex } = makeStringOptions(correct, [
        '$x > 0$', 'All real numbers', '$x \\neq 0$'
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the domain of $f(x) = \\sqrt{${a}x}$?`,
        options, correctIndex,
        explanation: `Need $${a}x \\geq 0$ → $x \\geq 0$ (since $${a} > 0$).`
      }
    }
  },
  {
    id: 'sfg-q38',
    category: 'Review',
    difficulty: 'hard',
    generate() {
      // g(f(x)): g(ax+b) = c(ax+b)+d = cax + cb + d; redraw until all four options are distinct
      let a = 1, b = 0, c = 1, d = 0, compM = 1, compB = 0
      let correct = '', d1 = '', d2 = '', d3 = ''
      do {
        a = randNonZero(-3, 3); b = randInt(-6, 6)
        c = randNonZero(-3, 3); d = randInt(-6, 6)
        compM = c * a
        compB = c * b + d
        correct = `$${linear(compM, compB)}$`
        d1 = `$${linear(a * c, a * d + b)}$`
        d2 = `$${linear(a + c, b + d)}$`
        d3 = `$${linear(a, d)}$`
      } while (a + c === 0 || new Set([correct, d1, d2, d3]).size < 4)
      const { options, correctIndex } = makeStringOptions(correct, [d1, d2, d3])
      return {
        id: this.id, category: this.category,
        question: `If $f(x) = ${linear(a, b)}$ and $g(x) = ${linear(c, d)}$, find $g(f(x))$.`,
        options, correctIndex,
        explanation: `$g(f(x)) = ${c}(${linear(a, b)}) ${sign(d)} = ${linear(compM, c * b)} ${sign(d)} = ${linear(compM, compB)}$.`
      }
    }
  },
  {
    id: 'sfg-q39',
    category: 'Review',
    difficulty: 'medium',
    generate() {
      const c = randInt(2, 10)
      const correct = '0'
      const { options, correctIndex } = makeStringOptions(correct, [
        '1', '2', 'Infinitely many'
      ])
      return {
        id: this.id, category: this.category,
        question: `How many solutions does $|x| = -${c}$ have?`,
        options, correctIndex,
        explanation: `Absolute value is always $\\geq 0$, so $|x| = -${c}$ has no solution.`
      }
    }
  },
  {
    id: 'sfg-q40',
    category: 'Review',
    difficulty: 'medium',
    generate() {
      const h = randInt(1, 6)
      const k = randInt(1, 8)
      const correct = `$y \\geq ${k}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$y \\geq 0$`, `$y \\leq ${k}$`, 'All real numbers'
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the range of $f(x) = |x - ${h}| + ${k}$?`,
        options, correctIndex,
        explanation: `$|x - ${h}| \\geq 0$, so $f(x) \\geq ${k}$. Range: $y \\geq ${k}$.`
      }
    }
  },
]

export function generateExitQuiz(count: number = 10, topicSlug?: string, difficulty?: 'easy' | 'medium' | 'hard'): ExitQuizQuestion[] {
  if (difficulty) {
    const fill: Record<'easy' | 'medium' | 'hard', Array<'easy' | 'medium' | 'hard'>> = {
      easy: ['easy', 'medium', 'hard'],
      medium: ['medium', 'easy', 'hard'],
      hard: ['hard', 'medium', 'easy'],
    }
    const selected: QuestionTemplate[] = []
    for (const tier of fill[difficulty]) {
      if (selected.length >= count) break
      for (const t of shuffle(questionPool.filter(q => q.difficulty === tier))) {
        if (selected.length >= count) break
        selected.push(t)
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
