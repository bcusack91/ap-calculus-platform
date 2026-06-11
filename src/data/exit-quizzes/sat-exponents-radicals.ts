/**
 * Exit Quiz Question Pool — SAT Exponents & Radicals
 * 40 questions covering exponent laws, fractional exponents, radicals,
 * exponential equations, scientific notation, growth & decay.
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
  // ===== LAWS OF EXPONENTS (6 questions) =====
  {
    id: 'ser-q1',
    category: 'Laws of Exponents',
    generate() {
      const base = randInt(2, 7)
      const m = randInt(2, 6)
      const n = randInt(2, 6)
      const ans = m + n
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `Simplify: $${base}^{${m}} \\cdot ${base}^{${n}}$. The answer is $${base}^{?}$. What is the exponent?`,
        options, correctIndex,
        explanation: `Product rule: $${base}^{${m}} \\cdot ${base}^{${n}} = ${base}^{${m}+${n}} = ${base}^{${ans}}$.`
      }
    }
  },
  {
    id: 'ser-q2',
    category: 'Laws of Exponents',
    generate() {
      const base = randInt(2, 6)
      const m = randInt(5, 12)
      const n = randInt(1, m - 1)
      const ans = m - n
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `Simplify: $\\frac{${base}^{${m}}}{${base}^{${n}}}$. The answer is $${base}^{?}$.`,
        options, correctIndex,
        explanation: `Quotient rule: $\\frac{${base}^{${m}}}{${base}^{${n}}} = ${base}^{${m}-${n}} = ${base}^{${ans}}$.`
      }
    }
  },
  {
    id: 'ser-q3',
    category: 'Laws of Exponents',
    generate() {
      const base = randInt(2, 5)
      const m = randInt(2, 5)
      const n = randInt(2, 4)
      const ans = m * n
      const { options, correctIndex } = makeOptions(ans, 3)
      return {
        id: this.id, category: this.category,
        question: `Simplify: $(${base}^{${m}})^{${n}}$. The answer is $${base}^{?}$.`,
        options, correctIndex,
        explanation: `Power rule: $(${base}^{${m}})^{${n}} = ${base}^{${m} \\times ${n}} = ${base}^{${ans}}$.`
      }
    }
  },
  {
    id: 'ser-q4',
    category: 'Laws of Exponents',
    generate() {
      const a = randInt(2, 6)
      const b = randInt(2, 6)
      const n = randInt(2, 4)
      const ans = Math.pow(a, n) * Math.pow(b, n)
      const correct = `$${Math.pow(a, n)} \\cdot ${Math.pow(b, n)}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a + b}^{${n}}$`,
        `$${a * b}^{${n + 1}}$`,
        `$${a}^{${n}} + ${b}^{${n}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Expand $(${a} \\cdot ${b})^{${n}}$.`,
        options, correctIndex,
        explanation: `$(${a} \\cdot ${b})^{${n}} = ${a}^{${n}} \\cdot ${b}^{${n}} = ${Math.pow(a, n)} \\cdot ${Math.pow(b, n)}$.`
      }
    }
  },
  {
    id: 'ser-q5',
    category: 'Laws of Exponents',
    generate() {
      const base = randInt(2, 10)
      const correct = '1'
      const { options, correctIndex } = makeStringOptions(correct, [
        `${base}`, '0', `${-base}`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is $${base}^0$?`,
        options, correctIndex,
        explanation: `Any nonzero number raised to the power $0$ equals $1$. $${base}^0 = 1$.`
      }
    }
  },
  {
    id: 'ser-q6',
    category: 'Laws of Exponents',
    generate() {
      const a = randInt(2, 5)
      const m = randInt(2, 5)
      const b = randInt(2, 5)
      const n = randInt(2, 5)
      const sumExp = m + n
      const correct = `$x^{${sumExp}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x^{${m * n}}$`,
        `$x^{${Math.abs(m - n)}}$`,
        `$${a * b}x^{${m * n}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify the exponent: $x^{${m}} \\cdot x^{${n}}$.`,
        options, correctIndex,
        explanation: `$x^{${m}} \\cdot x^{${n}} = x^{${m}+${n}} = x^{${sumExp}}$.`
      }
    }
  },

  // ===== NEGATIVE EXPONENTS (5 questions) =====
  {
    id: 'ser-q7',
    category: 'Negative Exponents',
    generate() {
      const base = randInt(2, 6)
      const n = randInt(1, 3)
      const val = Math.pow(base, n)
      const correct = `$\\frac{1}{${val}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${val}$`, `$${val}$`, `$\\frac{-1}{${val}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Evaluate $${base}^{-${n}}$.`,
        options, correctIndex,
        explanation: `$${base}^{-${n}} = \\frac{1}{${base}^{${n}}} = \\frac{1}{${val}}$.`
      }
    }
  },
  {
    id: 'ser-q8',
    category: 'Negative Exponents',
    generate() {
      const base = randInt(2, 5)
      const n = randInt(1, 3)
      const correct = `$${base}^{${n}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${base}^{${n}}$`,
        `$${base}^{-${n}}$`,
        `$\\frac{-1}{${base}^{${n}}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Rewrite $\\frac{1}{${base}^{-${n}}}$ with a positive exponent.`,
        options, correctIndex,
        explanation: `$\\frac{1}{${base}^{-${n}}} = ${base}^{${n}}$.`
      }
    }
  },
  {
    id: 'ser-q9',
    category: 'Negative Exponents',
    generate() {
      const m = randInt(3, 8)
      const n = randInt(m + 1, m + 5)
      const diff = m - n // negative
      const correct = `$x^{${diff}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x^{${n - m}}$`,
        `$x^{${m * n}}$`,
        `$\\frac{1}{x^{${m + n}}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $\\frac{x^{${m}}}{x^{${n}}}$.`,
        options, correctIndex,
        explanation: `$\\frac{x^{${m}}}{x^{${n}}} = x^{${m}-${n}} = x^{${diff}}$.`
      }
    }
  },
  {
    id: 'ser-q10',
    category: 'Negative Exponents',
    generate() {
      const a = randInt(2, 4)
      const b = randInt(2, 4)
      const correct = `$\\frac{${b}^2}{${a}^2}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{${a}^2}{${b}^2}$`,
        `$\\left(\\frac{-${a}}{${b}}\\right)^2$`,
        `$-\\frac{${b}^2}{${a}^2}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $\\left(\\frac{${a}}{${b}}\\right)^{-2}$.`,
        options, correctIndex,
        explanation: `$\\left(\\frac{${a}}{${b}}\\right)^{-2} = \\left(\\frac{${b}}{${a}}\\right)^{2} = \\frac{${b}^2}{${a}^2}$.`
      }
    }
  },
  {
    id: 'ser-q11',
    category: 'Negative Exponents',
    generate() {
      const base = randInt(2, 5)
      const n = randInt(2, 4)
      const val = Math.pow(base, n)
      const { options, correctIndex } = makeOptions(val)
      return {
        id: this.id, category: this.category,
        question: `If $x^{-${n}} = \\frac{1}{${val}}$, what is $x$?`,
        options, correctIndex: makeOptions(base).correctIndex,
        explanation: `$x^{-${n}} = \\frac{1}{x^{${n}}} = \\frac{1}{${val}}$, so $x^{${n}} = ${val}$ → $x = ${base}$.`
      }
    }
  },

  // ===== FRACTIONAL EXPONENTS (6 questions) =====
  {
    id: 'ser-q12',
    category: 'Fractional Exponents',
    generate() {
      const bases = [4, 9, 16, 25, 36, 49, 64]
      const b = bases[randInt(0, bases.length - 1)]
      const ans = Math.round(Math.sqrt(b))
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `Evaluate $${b}^{1/2}$.`,
        options, correctIndex,
        explanation: `$${b}^{1/2} = \\sqrt{${b}} = ${ans}$.`
      }
    }
  },
  {
    id: 'ser-q13',
    category: 'Fractional Exponents',
    generate() {
      const bases = [8, 27, 64, 125]
      const roots = [2, 3, 4, 5]
      const i = randInt(0, bases.length - 1)
      const b = bases[i]
      const ans = roots[i]
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `Evaluate $${b}^{1/3}$.`,
        options, correctIndex,
        explanation: `$${b}^{1/3} = \\sqrt[3]{${b}} = ${ans}$.`
      }
    }
  },
  {
    id: 'ser-q14',
    category: 'Fractional Exponents',
    generate() {
      // a^(3/2) where a is a perfect square
      const root = randInt(2, 5)
      const a = root * root
      const ans = root * root * root
      const { options, correctIndex } = makeOptions(ans, 10)
      return {
        id: this.id, category: this.category,
        question: `Evaluate $${a}^{3/2}$.`,
        options, correctIndex,
        explanation: `$${a}^{3/2} = (\\sqrt{${a}})^3 = ${root}^3 = ${ans}$.`
      }
    }
  },
  {
    id: 'ser-q15',
    category: 'Fractional Exponents',
    generate() {
      const n = randInt(2, 5)
      const correct = `$\\sqrt[${n}]{x}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x^${n}$`, `$\\frac{x}{${n}}$`, `$${n}\\sqrt{x}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Rewrite $x^{1/${n}}$ in radical form.`,
        options, correctIndex,
        explanation: `$x^{1/${n}} = \\sqrt[${n}]{x}$.`
      }
    }
  },
  {
    id: 'ser-q16',
    category: 'Fractional Exponents',
    generate() {
      const m = randInt(2, 4)
      const n = randInt(2, 4)
      const correct = `$x^{${m}/${n}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x^{${m * n}}$`,
        `$x^{${n}/${m}}$`,
        `$${m}x^{1/${n}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Rewrite $\\sqrt[${n}]{x^{${m}}}$ using a fractional exponent.`,
        options, correctIndex,
        explanation: `$\\sqrt[${n}]{x^{${m}}} = x^{${m}/${n}}$.`
      }
    }
  },
  {
    id: 'ser-q17',
    category: 'Fractional Exponents',
    generate() {
      // 8^(2/3) = (8^(1/3))^2 = 2^2 = 4
      const cubes = [{ base: 8, root: 2 }, { base: 27, root: 3 }, { base: 64, root: 4 }]
      const pick = cubes[randInt(0, cubes.length - 1)]
      const ans = pick.root * pick.root
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `Evaluate $${pick.base}^{2/3}$.`,
        options, correctIndex,
        explanation: `$${pick.base}^{2/3} = (\\sqrt[3]{${pick.base}})^2 = ${pick.root}^2 = ${ans}$.`
      }
    }
  },

  // ===== SIMPLIFYING RADICALS (5 questions) =====
  {
    id: 'ser-q18',
    category: 'Simplifying Radicals',
    generate() {
      const k = randInt(2, 6)
      const inner = randInt(2, 8)
      const radicand = k * k * inner
      const correct = `$${k}\\sqrt{${inner}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${inner}\\sqrt{${k}}$`,
        `$\\sqrt{${radicand}}$`,
        `$${k * inner}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $\\sqrt{${radicand}}$.`,
        options, correctIndex,
        explanation: `$\\sqrt{${radicand}} = \\sqrt{${k}^2 \\cdot ${inner}} = ${k}\\sqrt{${inner}}$.`
      }
    }
  },
  {
    id: 'ser-q19',
    category: 'Simplifying Radicals',
    generate() {
      const a = randInt(2, 6)
      const b = randInt(2, 6)
      const n = randInt(2, 5) // same radicand
      const sum = a + b
      const correct = `$${sum}\\sqrt{${n}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a * b}\\sqrt{${n}}$`,
        `$${a + b}\\sqrt{${2 * n}}$`,
        `$\\sqrt{${(a + b) * n}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $${a}\\sqrt{${n}} + ${b}\\sqrt{${n}}$.`,
        options, correctIndex,
        explanation: `Like radicals: $${a}\\sqrt{${n}} + ${b}\\sqrt{${n}} = (${a}+${b})\\sqrt{${n}} = ${sum}\\sqrt{${n}}$.`
      }
    }
  },
  {
    id: 'ser-q20',
    category: 'Simplifying Radicals',
    generate() {
      const a = randInt(2, 8)
      const b = randInt(2, 8)
      const product = a * b
      const correct = `$\\sqrt{${product}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\sqrt{${a}} + \\sqrt{${b}}$`,
        `$\\sqrt{${a + b}}$`,
        `$${a}\\sqrt{${b}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $\\sqrt{${a}} \\cdot \\sqrt{${b}}$.`,
        options, correctIndex,
        explanation: `$\\sqrt{${a}} \\cdot \\sqrt{${b}} = \\sqrt{${a} \\cdot ${b}} = \\sqrt{${product}}$.`
      }
    }
  },
  {
    id: 'ser-q21',
    category: 'Simplifying Radicals',
    generate() {
      const n = randInt(2, 6)
      const correct = `$\\frac{\\sqrt{${n}}}{${n}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{1}{${n}}$`,
        `$\\sqrt{${n}}$`,
        `$\\frac{${n}}{\\sqrt{${n}}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Rationalize $\\frac{1}{\\sqrt{${n}}}$.`,
        options, correctIndex,
        explanation: `$\\frac{1}{\\sqrt{${n}}} \\cdot \\frac{\\sqrt{${n}}}{\\sqrt{${n}}} = \\frac{\\sqrt{${n}}}{${n}}$.`
      }
    }
  },
  {
    id: 'ser-q22',
    category: 'Simplifying Radicals',
    generate() {
      const n = randInt(1, 10)
      const sq = n * n
      const { options, correctIndex } = makeOptions(n)
      return {
        id: this.id, category: this.category,
        question: `What is $\\sqrt{${sq}}$?`,
        options, correctIndex,
        explanation: `$\\sqrt{${sq}} = ${n}$ since $${n}^2 = ${sq}$.`
      }
    }
  },

  // ===== EXPONENTIAL EQUATIONS (5 questions) =====
  {
    id: 'ser-q23',
    category: 'Exponential Equations',
    generate() {
      const base = randInt(2, 5)
      const exp = randInt(2, 5)
      const val = Math.pow(base, exp)
      const { options, correctIndex } = makeOptions(exp)
      return {
        id: this.id, category: this.category,
        question: `Solve for $x$: $${base}^x = ${val}$.`,
        options, correctIndex,
        explanation: `$${base}^x = ${val} = ${base}^{${exp}}$, so $x = ${exp}$.`
      }
    }
  },
  {
    id: 'ser-q24',
    category: 'Exponential Equations',
    generate() {
      const base = randInt(2, 4)
      const exp = randInt(2, 4)
      // base^(2x) = base^exp → 2x = exp
      const val = Math.pow(base, exp)
      // We need exp to be even for integer answer
      const evenExp = exp * 2
      const bigVal = Math.pow(base, evenExp)
      const ans = evenExp / 2
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `Solve: $${base}^{2x} = ${bigVal}$. (Hint: $${bigVal} = ${base}^{${evenExp}}$)`,
        options, correctIndex,
        explanation: `$${base}^{2x} = ${base}^{${evenExp}}$ → $2x = ${evenExp}$ → $x = ${ans}$.`
      }
    }
  },
  {
    id: 'ser-q25',
    category: 'Exponential Equations',
    generate() {
      const base = randInt(2, 5)
      const n = randInt(2, 4)
      const val = Math.pow(base, n)
      const negN = -n
      const correct = `$\\frac{1}{${val}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${val}$`, `$${val}$`, `$\\frac{-1}{${val}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `If $${base}^x = \\frac{1}{${val}}$, what is $x$?`,
        options, correctIndex: makeOptions(negN).correctIndex,
        explanation: `$\\frac{1}{${val}} = \\frac{1}{${base}^{${n}}} = ${base}^{-${n}}$, so $x = -${n}$.`
      }
    }
  },
  {
    id: 'ser-q26',
    category: 'Exponential Equations',
    generate() {
      // 4^x = 2^(something): 4 = 2², so 4^x = 2^(2x)
      const exp = randInt(2, 6)
      const ans = exp / 2
      // Make exp even for integer answer
      const evenExp = randInt(1, 4) * 2
      const correct = String(evenExp / 2)
      const { options, correctIndex } = makeStringOptions(correct, [
        String(evenExp), String(evenExp * 2), String(evenExp - 1)
      ])
      return {
        id: this.id, category: this.category,
        question: `Solve: $4^x = 2^{${evenExp}}$.`,
        options, correctIndex,
        explanation: `$4^x = (2^2)^x = 2^{2x}$. So $2x = ${evenExp}$ → $x = ${evenExp / 2}$.`
      }
    }
  },
  {
    id: 'ser-q27',
    category: 'Exponential Equations',
    generate() {
      const base = randInt(2, 5)
      const m = randInt(2, 5)
      const n = randInt(2, 5)
      const ans = m + n
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `If $${base}^a = ${Math.pow(base, m)}$ and $${base}^b = ${Math.pow(base, n)}$, what is $a + b$?`,
        options, correctIndex,
        explanation: `$a = ${m}$ and $b = ${n}$, so $a + b = ${ans}$.`
      }
    }
  },

  // ===== SCIENTIFIC NOTATION (5 questions) =====
  {
    id: 'ser-q28',
    category: 'Scientific Notation',
    generate() {
      const coeff = randInt(1, 9)
      const exp = randInt(3, 7)
      const val = coeff * Math.pow(10, exp)
      const correct = `$${coeff} \\times 10^{${exp}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${coeff} \\times 10^{${exp - 1}}$`,
        `$${coeff} \\times 10^{${exp + 1}}$`,
        `$${coeff * 10} \\times 10^{${exp - 1}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Express $${val.toLocaleString()}$ in scientific notation.`,
        options, correctIndex,
        explanation: `$${val.toLocaleString()} = ${coeff} \\times 10^{${exp}}$.`
      }
    }
  },
  {
    id: 'ser-q29',
    category: 'Scientific Notation',
    generate() {
      const a = randInt(2, 9)
      const b = randInt(2, 9)
      const expA = randInt(2, 5)
      const expB = randInt(2, 5)
      const product = a * b
      const sumExp = expA + expB
      // Normalize if product >= 10
      let finalCoeff = product
      let finalExp = sumExp
      if (product >= 10) {
        finalCoeff = product / 10
        finalExp = sumExp + 1
      }
      const correct = `$${finalCoeff} \\times 10^{${finalExp}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a * b} \\times 10^{${sumExp}}$`,
        `$${a + b} \\times 10^{${expA * expB}}$`,
        `$${finalCoeff} \\times 10^{${finalExp - 1}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Multiply: $(${a} \\times 10^{${expA}})(${b} \\times 10^{${expB}})$.`,
        options, correctIndex,
        explanation: `$(${a})(${b}) = ${product}$; $10^{${expA}} \\cdot 10^{${expB}} = 10^{${sumExp}}$. ${product >= 10 ? `Normalize: $${finalCoeff} \\times 10^{${finalExp}}$.` : `Result: $${finalCoeff} \\times 10^{${finalExp}}$.`}`
      }
    }
  },
  {
    id: 'ser-q30',
    category: 'Scientific Notation',
    generate() {
      const coeff = randInt(1, 9)
      const exp = randInt(1, 5)
      const correct = `$0.${'0'.repeat(exp - 1)}${coeff}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$0.${'0'.repeat(exp)}${coeff}$`,
        `$0.${'0'.repeat(Math.max(0, exp - 2))}${coeff}$`,
        `$${coeff}${'0'.repeat(exp)}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Convert $${coeff} \\times 10^{-${exp}}$ to standard notation.`,
        options, correctIndex,
        explanation: `Move the decimal ${exp} places left: $${coeff} \\times 10^{-${exp}} = 0.${'0'.repeat(exp - 1)}${coeff}$.`
      }
    }
  },
  {
    id: 'ser-q31',
    category: 'Scientific Notation',
    generate() {
      const a = randInt(2, 8)
      const b = randInt(2, 4)
      const expA = randInt(5, 9)
      const expB = randInt(2, 4)
      const quotient = a / b
      const diffExp = expA - expB
      let finalCoeff = quotient
      let finalExp = diffExp
      if (quotient < 1) { finalCoeff = quotient * 10; finalExp = diffExp - 1 }
      // Only generate when quotient is clean
      const cleanA = b * randInt(1, 3)
      const cleanQuotient = cleanA / b
      const newFinalCoeff = cleanQuotient >= 10 ? cleanQuotient / 10 : cleanQuotient < 1 ? cleanQuotient * 10 : cleanQuotient
      const newFinalExp = cleanQuotient >= 10 ? diffExp + 1 : cleanQuotient < 1 ? diffExp - 1 : diffExp
      const correct = `$${newFinalCoeff} \\times 10^{${newFinalExp}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${newFinalCoeff} \\times 10^{${newFinalExp + 1}}$`,
        `$${newFinalCoeff} \\times 10^{${newFinalExp - 1}}$`,
        `$${cleanA + b} \\times 10^{${diffExp}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Divide: $\\frac{${cleanA} \\times 10^{${expA}}}{${b} \\times 10^{${expB}}}$.`,
        options, correctIndex,
        explanation: `$\\frac{${cleanA}}{${b}} = ${cleanQuotient}$; $10^{${expA}-${expB}} = 10^{${diffExp}}$. Result: $${newFinalCoeff} \\times 10^{${newFinalExp}}$.`
      }
    }
  },
  {
    id: 'ser-q32',
    category: 'Scientific Notation',
    generate() {
      const correct = 'Between 1 and 10 (including 1)'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Between 0 and 1', 'Any positive number', 'Between 10 and 100'
      ])
      return {
        id: this.id, category: this.category,
        question: 'In scientific notation $a \\times 10^n$, what must be true about $a$?',
        options, correctIndex,
        explanation: 'In scientific notation, $1 \\leq a < 10$.'
      }
    }
  },

  // ===== GROWTH & DECAY (6 questions) =====
  {
    id: 'ser-q33',
    category: 'Growth & Decay',
    generate() {
      const initial = randInt(5, 20) * 100
      const rate = randInt(5, 15)
      const t = randInt(1, 3)
      const multiplier = 1 + rate / 100
      const ans = Math.round(initial * Math.pow(multiplier, t))
      const { options, correctIndex } = makeOptions(ans, 100)
      return {
        id: this.id, category: this.category,
        question: `A population of $${initial}$ grows $${rate}\\%$ per year. What is the population after $${t}$ year${t > 1 ? 's' : ''}?`,
        options, correctIndex,
        explanation: `$${initial}(1 + ${rate / 100})^{${t}} = ${initial}(${multiplier})^{${t}} \\approx ${ans}$.`
      }
    }
  },
  {
    id: 'ser-q34',
    category: 'Growth & Decay',
    generate() {
      const initial = randInt(10, 50) * 100
      const rate = randInt(10, 30)
      const t = randInt(1, 3)
      const multiplier = 1 - rate / 100
      const ans = Math.round(initial * Math.pow(multiplier, t))
      const { options, correctIndex } = makeOptions(ans, 200)
      return {
        id: this.id, category: this.category,
        question: `A car worth $\\$${initial.toLocaleString()}$ depreciates $${rate}\\%$ per year. What is its value after $${t}$ year${t > 1 ? 's' : ''}?`,
        options, correctIndex,
        explanation: `$${initial}(1 - ${rate / 100})^{${t}} = ${initial}(${multiplier})^{${t}} \\approx ${ans}$.`
      }
    }
  },
  {
    id: 'ser-q35',
    category: 'Growth & Decay',
    generate() {
      const initial = randInt(50, 200)
      // Half-life: after n half-lives, amount = initial / 2^n
      const halfLives = randInt(1, 4)
      const ans = Math.round(initial / Math.pow(2, halfLives))
      const halfLifeYears = randInt(2, 10)
      const totalTime = halfLifeYears * halfLives
      const { options, correctIndex } = makeOptions(ans, 20)
      return {
        id: this.id, category: this.category,
        question: `A substance has a half-life of $${halfLifeYears}$ years. Starting with $${initial}$ grams, how much remains after $${totalTime}$ years?`,
        options, correctIndex,
        explanation: `$${totalTime} / ${halfLifeYears} = ${halfLives}$ half-lives. $${initial} / 2^{${halfLives}} = ${ans}$ grams.`
      }
    }
  },
  {
    id: 'ser-q36',
    category: 'Growth & Decay',
    generate() {
      const choices = [
        { eq: 'y = 500(1.08)^t', answer: 'Growth', rate: '8%' },
        { eq: 'y = 200(0.95)^t', answer: 'Decay', rate: '5%' },
        { eq: 'y = 1000(1.12)^t', answer: 'Growth', rate: '12%' },
        { eq: 'y = 800(0.7)^t', answer: 'Decay', rate: '30%' },
      ]
      const pick = choices[randInt(0, choices.length - 1)]
      const correct = pick.answer
      const { options, correctIndex } = makeStringOptions(correct, [
        pick.answer === 'Growth' ? 'Decay' : 'Growth',
        'Neither',
        'Linear growth'
      ])
      return {
        id: this.id, category: this.category,
        question: `Does $${pick.eq}$ model exponential growth or decay?`,
        options, correctIndex,
        explanation: `The base is ${pick.answer === 'Growth' ? '> 1' : 'between 0 and 1'}, so this is exponential ${pick.answer.toLowerCase()} at a rate of ${pick.rate}.`
      }
    }
  },
  {
    id: 'ser-q37',
    category: 'Growth & Decay',
    generate() {
      const initial = randInt(2, 8) * 100
      const doublings = randInt(1, 4)
      const ans = initial * Math.pow(2, doublings)
      const period = randInt(2, 10)
      const totalTime = period * doublings
      const { options, correctIndex } = makeOptions(ans, 500)
      return {
        id: this.id, category: this.category,
        question: `A bacteria population of $${initial}$ doubles every $${period}$ hours. How many after $${totalTime}$ hours?`,
        options, correctIndex,
        explanation: `$${totalTime}/${period} = ${doublings}$ doublings. $${initial} \\times 2^{${doublings}} = ${ans}$.`
      }
    }
  },
  {
    id: 'ser-q38',
    category: 'Growth & Decay',
    generate() {
      const rate = randInt(5, 20)
      const multiplier = (100 - rate) / 100
      const correct = `$${multiplier}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${(100 + rate) / 100}$`,
        `$${rate / 100}$`,
        `$-${rate / 100}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `If a quantity decreases by $${rate}\\%$ each period, what is the decay factor (base)?`,
        options, correctIndex,
        explanation: `Decay factor $= 1 - ${rate / 100} = ${multiplier}$.`
      }
    }
  },

  // ===== REVIEW (2 questions) =====
  {
    id: 'ser-q39',
    category: 'Review',
    generate() {
      const base = randInt(2, 5)
      const a = randInt(2, 5)
      const b = randInt(2, 5)
      const ans = a + b
      const { options, correctIndex } = makeOptions(ans)
      return {
        id: this.id, category: this.category,
        question: `If $${base}^a \\cdot ${base}^b = ${base}^{${ans}}$, and $a = ${a}$, what is $b$?`,
        options, correctIndex: makeOptions(b).correctIndex,
        explanation: `$a + b = ${ans}$ → $b = ${ans} - ${a} = ${b}$.`
      }
    }
  },
  {
    id: 'ser-q40',
    category: 'Review',
    generate() {
      const n = randInt(2, 8)
      const sq = n * n
      const cube = n * n * n
      const correct = `$${cube}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${sq}$`, `$${n * 4}$`, `$${sq + n}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Evaluate $(\\sqrt{${sq}})^3$.`,
        options, correctIndex,
        explanation: `$\\sqrt{${sq}} = ${n}$, so $(\\sqrt{${sq}})^3 = ${n}^3 = ${cube}$.`
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
