/**
 * Exit Quiz Question Pool — SAT Complex Numbers
 * 40 questions covering the imaginary unit, complex arithmetic,
 * conjugates, powers of i, and complex roots of quadratics.
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

type Difficulty = 'easy' | 'medium' | 'hard'

interface QuestionTemplate {
  id: string
  category: string
  difficulty: Difficulty
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

// Render a + bi without zero terms ("8i", "3", "3 - i"), coefficient 1 omitted.
function fmtComplex(re: number, im: number): string {
  if (im === 0) return `${re}`
  const imAbs = Math.abs(im)
  const imPart = `${imAbs === 1 ? '' : imAbs}i`
  if (re === 0) return im < 0 ? `-${imPart}` : imPart
  return `${re} ${im < 0 ? '-' : '+'} ${imPart}`
}

function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
  const fillers = ['None of the above', 'Cannot be determined', 'None of these']
  for (const f of fillers) { if (unique.length >= 3) break; if (f !== correct && !unique.includes(f)) unique.push(f) }
  const all = shuffle([correct, ...unique])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  // ===== IMAGINARY UNIT BASICS (8 questions) =====
  {
    id: 'scn-q1',
    category: 'Imaginary Unit Basics',
    difficulty: 'easy',
    generate() {
      const correct = '$-1$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$1$', '$i$', '$-i$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $i^2$?',
        options, correctIndex,
        explanation: 'By definition, $i = \\sqrt{-1}$, so $i^2 = -1$.'
      }
    }
  },
  {
    id: 'scn-q2',
    category: 'Imaginary Unit Basics',
    difficulty: 'easy',
    generate() {
      const correct = '$i$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$-i$', '$1$', '$-1$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Simplify $\\sqrt{-1}$.',
        options, correctIndex,
        explanation: '$\\sqrt{-1} = i$ by definition.'
      }
    }
  },
  {
    id: 'scn-q3',
    category: 'Imaginary Unit Basics',
    difficulty: 'easy',
    generate() {
      const n = randInt(2, 9)
      const n2 = n * n
      const correct = `$${n}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${n}i$`, `$${n2}i$`, `$${n}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $\\sqrt{-${n2}}$.`,
        options, correctIndex,
        explanation: `$\\sqrt{-${n2}} = \\sqrt{${n2}} \\cdot \\sqrt{-1} = ${n}i$.`
      }
    }
  },
  {
    id: 'scn-q4',
    category: 'Imaginary Unit Basics',
    difficulty: 'easy',
    generate() {
      const a = randInt(2, 8)
      const b = randInt(2, 8)
      const correct = `$${a}$`
      // Distractors are distinct string forms that never equal `$a$` (b≥2), so
      // they survive even when a === b (no filler padding).
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a + b}$`, `$${a}i$`, `$${a} + ${b}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the real part of $${a} + ${b}i$?`,
        options, correctIndex,
        explanation: `In $a + bi$, the real part is $a = ${a}$.`
      }
    }
  },
  {
    id: 'scn-q5',
    category: 'Imaginary Unit Basics',
    difficulty: 'easy',
    generate() {
      const a = randInt(2, 8)
      const b = randInt(2, 8)
      const correct = `$${b}$`
      // Distinct string forms that never equal `$b$`, robust to a === b.
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${b}$`, `$${b}i$`, `$${a} + ${b}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the imaginary part of $${a} + ${b}i$?`,
        options, correctIndex,
        explanation: `In $a + bi$, the imaginary part is $b = ${b}$.`
      }
    }
  },
  {
    id: 'scn-q6',
    category: 'Imaginary Unit Basics',
    difficulty: 'easy',
    generate() {
      const correct = 'Imaginary numbers'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Real numbers', 'Rational numbers', 'Irrational numbers'
      ])
      return {
        id: this.id, category: this.category,
        question: '$\\sqrt{-4}$ belongs to which number set?',
        options, correctIndex,
        explanation: '$\\sqrt{-4} = 2i$, which is an imaginary number.'
      }
    }
  },
  {
    id: 'scn-q7',
    category: 'Imaginary Unit Basics',
    difficulty: 'easy',
    generate() {
      const correct = '$a + bi$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$a + b$', '$ai + b$', '$a \\times bi$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'The standard form of a complex number is:',
        options, correctIndex,
        explanation: 'Standard form: $a + bi$ where $a$ is real part, $b$ is imaginary part.'
      }
    }
  },
  {
    id: 'scn-q8',
    category: 'Imaginary Unit Basics',
    difficulty: 'easy',
    generate() {
      const a = randInt(1, 6)
      const correct = '$0$'
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a}$`, `$${a}i$`, `$-${a}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the imaginary part of $${a}$?`,
        options, correctIndex,
        explanation: `$${a}$ is a real number. It can be written as $${a} + 0i$, so the imaginary part is $0$.`
      }
    }
  },

  // ===== COMPLEX ARITHMETIC (8 questions) =====
  {
    id: 'scn-q9',
    category: 'Complex Arithmetic',
    difficulty: 'medium',
    generate() {
      const a = randInt(1, 8)
      const b = randInt(1, 8)
      const c = randInt(1, 8)
      const d = randInt(1, 8)
      const re = a + c
      const im = b + d
      const correct = `$${re} + ${im}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${re} - ${im}i$`, `$${a + c + b + d}i$`, `$${re} + ${im}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$(${a} + ${b}i) + (${c} + ${d}i) = ?$`,
        options, correctIndex,
        explanation: `Real: $${a} + ${c} = ${re}$, Imaginary: $${b} + ${d} = ${im}$. Answer: $${re} + ${im}i$.`
      }
    }
  },
  {
    id: 'scn-q10',
    category: 'Complex Arithmetic',
    difficulty: 'medium',
    generate() {
      const a = randInt(4, 10)
      const b = randInt(4, 10)
      const c = randInt(1, a - 1)
      const d = randInt(1, b - 1)
      const re = a - c
      const im = b - d
      const correct = im === 0 ? `$${re}$` : `$${re} + ${im}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${re} - ${im}i$`, `$${a - c + b - d}$`, `$${re + 1} + ${im + 1}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$(${a} + ${b}i) - (${c} + ${d}i) = ?$`,
        options, correctIndex,
        explanation: `Real: $${a} - ${c} = ${re}$, Imaginary: $${b} - ${d} = ${im}$. Answer: $${correct.replace(/\\$/g, '')}$.`
      }
    }
  },
  {
    id: 'scn-q11',
    category: 'Complex Arithmetic',
    difficulty: 'medium',
    generate() {
      // (a)(bi) = abi
      const a = randInt(2, 6)
      const b = randInt(2, 6)
      const prod = a * b
      const correct = `$${prod}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${prod}i$`, `$${prod}$`, `$-${prod}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $${a} \\cdot ${b}i$.`,
        options, correctIndex,
        explanation: `$${a} \\cdot ${b}i = ${prod}i$.`
      }
    }
  },
  {
    id: 'scn-q12',
    category: 'Complex Arithmetic',
    difficulty: 'hard',
    generate() {
      // (a + bi)(c + di) = (ac - bd) + (ad + bc)i
      const a = randInt(1, 5)
      const b = randInt(1, 5)
      const c = randInt(1, 5)
      const d = randInt(1, 5)
      const re = a * c - b * d
      const im = a * d + b * c
      const correct = `$${fmtComplex(re, im)}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${fmtComplex(a * c + b * d, a * d - b * c)}$`,
        `$${fmtComplex(re, -im)}$`,
        `$${fmtComplex(re + 1, im)}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$(${a} + ${b}i)(${c} + ${d}i) = ?$`,
        options, correctIndex,
        explanation: `Use FOIL: $${a}\\cdot${c} + ${a}\\cdot${d}i + ${b}i\\cdot${c} + ${b}i\\cdot${d}i = ${a * c} + ${a * d}i + ${b * c}i + ${b * d}i^2 = ${a * c} + ${a * d + b * c}i - ${b * d} = ${fmtComplex(re, im)}$.`
      }
    }
  },
  {
    id: 'scn-q13',
    category: 'Complex Arithmetic',
    difficulty: 'medium',
    generate() {
      // (bi)(ci) = bci² = -bc
      const b = randInt(2, 7)
      const c = randInt(2, 7)
      const prod = -(b * c)
      const correct = `$${prod}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${b * c}$`, `$${b * c}i$`, `$-${b * c}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $(${b}i)(${c}i)$.`,
        options, correctIndex,
        explanation: `$(${b}i)(${c}i) = ${b * c}i^2 = ${b * c}(-1) = ${prod}$.`
      }
    }
  },
  {
    id: 'scn-q14',
    category: 'Complex Arithmetic',
    difficulty: 'medium',
    generate() {
      const a = randInt(2, 8)
      const b = randInt(2, 8)
      const k = randInt(2, 4)
      const re = k * a
      const im = k * b
      const correct = `$${re} + ${im}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${re} - ${im}i$`, `$${k * a + k * b}i$`, `$${re}i + ${im}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $${k}(${a} + ${b}i)$.`,
        options, correctIndex,
        explanation: `$${k}(${a} + ${b}i) = ${re} + ${im}i$.`
      }
    }
  },
  {
    id: 'scn-q15',
    category: 'Complex Arithmetic',
    difficulty: 'medium',
    generate() {
      // (a + bi) + (a - bi) = 2a
      const a = randInt(2, 8)
      const b = randInt(2, 8)
      const correct = `$${2 * a}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${2 * b}i$`, `$${a}$`, `$${2 * a} + ${2 * b}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$(${a} + ${b}i) + (${a} - ${b}i) = ?$`,
        options, correctIndex,
        explanation: `Imaginary parts cancel: $${a} + ${a} = ${2 * a}$, $${b}i - ${b}i = 0$. Answer: $${2 * a}$.`
      }
    }
  },
  {
    id: 'scn-q16',
    category: 'Complex Arithmetic',
    difficulty: 'hard',
    generate() {
      // (a + bi)² = a² - b² + 2abi
      const a = randInt(1, 5)
      const b = randInt(1, 5)
      const re = a * a - b * b
      const im = 2 * a * b
      const correct = `$${fmtComplex(re, im)}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a * a + b * b}$`,
        `$${a * a} + ${b * b}i$`,
        `$${fmtComplex(re, -im)}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Expand $(${a} + ${b}i)^2$.`,
        options, correctIndex,
        explanation: `$(${a} + ${b}i)^2 = ${a * a} + 2(${a})(${b}i) + (${b}i)^2 = ${a * a} + ${2 * a * b}i - ${b * b} = ${fmtComplex(re, im)}$.`
      }
    }
  },

  // ===== COMPLEX CONJUGATES (8 questions) =====
  {
    id: 'scn-q17',
    category: 'Complex Conjugates',
    difficulty: 'easy',
    generate() {
      const a = randInt(1, 8)
      const b = randInt(1, 8)
      const correct = `$${a} - ${b}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${a} + ${b}i$`, `$-${a} - ${b}i$`, `$${a} + ${b}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the conjugate of $${a} + ${b}i$?`,
        options, correctIndex,
        explanation: `The conjugate of $a + bi$ is $a - bi$. So: $${a} - ${b}i$.`
      }
    }
  },
  {
    id: 'scn-q18',
    category: 'Complex Conjugates',
    difficulty: 'medium',
    generate() {
      const a = randInt(1, 6)
      const b = randInt(1, 6)
      // (a + bi)(a - bi) = a² + b²
      const prod = a * a + b * b
      const correct = `$${prod}$`
      const crossTerm = 2 * a * b === prod ? `$${(a + b) * (a + b)}$` : `$${2 * a * b}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a * a - b * b}$`, `$${prod}i$`, crossTerm
      ])
      return {
        id: this.id, category: this.category,
        question: `$(${a} + ${b}i)(${a} - ${b}i) = ?$`,
        options, correctIndex,
        explanation: `$(a + bi)(a - bi) = a^2 + b^2 = ${a * a} + ${b * b} = ${prod}$.`
      }
    }
  },
  {
    id: 'scn-q19',
    category: 'Complex Conjugates',
    difficulty: 'hard',
    generate() {
      // Rationalize: 1/(a + bi) = (a - bi)/(a² + b²)
      const a = randInt(1, 4)
      const b = randInt(1, 4)
      const denom = a * a + b * b
      const correct = `$\\frac{${a} - ${b}i}{${denom}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{${a} + ${b}i}{${denom}}$`,
        `$\\frac{1}{${a} + ${b}i}$`,
        `$\\frac{${a}}{${denom}} + ${b}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Rationalize $\\frac{1}{${a} + ${b}i}$.`,
        options, correctIndex,
        explanation: `Multiply by conjugate: $\\frac{1}{${a} + ${b}i} \\cdot \\frac{${a} - ${b}i}{${a} - ${b}i} = \\frac{${a} - ${b}i}{${denom}}$.`
      }
    }
  },
  {
    id: 'scn-q20',
    category: 'Complex Conjugates',
    difficulty: 'easy',
    generate() {
      const a = randInt(2, 6)
      const b = randInt(2, 6)
      const correct = `$${a} + ${b}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${a} + ${b}i$`, `$${a} - ${b}i$`, `$-${a} - ${b}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the conjugate of $${a} - ${b}i$?`,
        options, correctIndex,
        explanation: `Conjugate of $a - bi$ is $a + bi$: $${a} + ${b}i$.`
      }
    }
  },
  {
    id: 'scn-q21',
    category: 'Complex Conjugates',
    difficulty: 'easy',
    generate() {
      const correct = 'Change the sign of the imaginary part'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Change the sign of both parts',
        'Change the sign of the real part',
        'Square the number'
      ])
      return {
        id: this.id, category: this.category,
        question: 'To find the conjugate of a complex number, you:',
        options, correctIndex,
        explanation: 'The conjugate of $a + bi$ is $a - bi$ — flip the sign of the imaginary part only.'
      }
    }
  },
  {
    id: 'scn-q22',
    category: 'Complex Conjugates',
    difficulty: 'medium',
    generate() {
      const a = randInt(1, 5)
      const b = randInt(1, 5)
      const mod2 = a * a + b * b
      const isPerf = Number.isInteger(Math.sqrt(mod2))
      const display = isPerf ? `$${Math.sqrt(mod2)}$` : `$\\sqrt{${mod2}}$`
      const { options, correctIndex } = makeStringOptions(display, [
        `$${a + b}$`, `$${a * b}$`, `$\\sqrt{${mod2 + 1}}$`, `$${a + b + 2}$`, `$${a * b + 1}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is $|${a} + ${b}i|$ (the modulus)?`,
        options, correctIndex,
        explanation: `$|a + bi| = \\sqrt{a^2 + b^2} = \\sqrt{${a * a} + ${b * b}} = \\sqrt{${mod2}}${isPerf ? ` = ${Math.sqrt(mod2)}` : ''}$.`
      }
    }
  },
  {
    id: 'scn-q23',
    category: 'Complex Conjugates',
    difficulty: 'easy',
    generate() {
      const correct = 'Always a real number'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Always imaginary', 'Always zero', 'Always negative'
      ])
      return {
        id: this.id, category: this.category,
        question: 'The product of a complex number and its conjugate is:',
        options, correctIndex,
        explanation: '$(a + bi)(a - bi) = a^2 + b^2$, which is always real and non-negative.'
      }
    }
  },
  {
    id: 'scn-q24',
    category: 'Complex Conjugates',
    difficulty: 'hard',
    generate() {
      // 2/(bi): multiply by i/i → 2i/(bi²) = -2i/b, reduced
      const b = randInt(2, 6)
      const g = b % 2 === 0 ? 2 : 1
      const n = 2 / g, d = b / g
      const frac = d === 1 ? `${n}` : `\\frac{${n}}{${d}}`
      const red = d === 1 && n === 1 ? '-i' : `-${frac}i`
      const correct = `$${red}$`
      const positive = d === 1 && n === 1 ? '$i$' : `$${frac}i$`
      const realVersion = d === 1 ? `$-${n}$` : `$-\\frac{${n}}{${d}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        positive, `$-${b}i$`, realVersion
      ])
      return {
        id: this.id, category: this.category,
        question: `Simplify $\\frac{2}{${b}i}$.`,
        options, correctIndex,
        explanation: `$\\frac{2}{${b}i} \\cdot \\frac{i}{i} = \\frac{2i}{${b}i^2} = \\frac{2i}{-${b}} = ${red}$.`
      }
    }
  },

  // ===== POWERS OF i (8 questions) =====
  {
    id: 'scn-q25',
    category: 'Powers of i',
    difficulty: 'medium',
    generate() {
      // i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1, then repeats
      const powValues = ['i', '-1', '-i', '1']
      const n = randInt(1, 20)
      const mod = ((n % 4) + 4) % 4
      const val = mod === 0 ? '1' : mod === 1 ? 'i' : mod === 2 ? '-1' : '-i'
      const correct = `$${val}$`
      const others = powValues.filter(v => v !== val).map(v => `$${v}$`)
      const { options, correctIndex } = makeStringOptions(correct, others)
      return {
        id: this.id, category: this.category,
        question: `Simplify $i^{${n}}$.`,
        options, correctIndex,
        explanation: `$i$ has period 4: $i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1$. $${n} \\mod 4 = ${n % 4}$, so $i^{${n}} = ${val}$.`
      }
    }
  },
  {
    id: 'scn-q26',
    category: 'Powers of i',
    difficulty: 'easy',
    generate() {
      const correct = '$-i$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$i$', '$-1$', '$1$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $i^3$?',
        options, correctIndex,
        explanation: '$i^3 = i^2 \\cdot i = (-1)(i) = -i$.'
      }
    }
  },
  {
    id: 'scn-q27',
    category: 'Powers of i',
    difficulty: 'easy',
    generate() {
      const correct = '$1$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$i$', '$-1$', '$-i$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $i^4$?',
        options, correctIndex,
        explanation: '$i^4 = (i^2)^2 = (-1)^2 = 1$.'
      }
    }
  },
  {
    id: 'scn-q28',
    category: 'Powers of i',
    difficulty: 'easy',
    generate() {
      const correct = '$4$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$2$', '$3$', '$6$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'The powers of $i$ repeat with a cycle of:',
        options, correctIndex,
        explanation: '$i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1, i^5 = i, \\ldots$ Cycle length = $4$.'
      }
    }
  },
  {
    id: 'scn-q29',
    category: 'Powers of i',
    difficulty: 'medium',
    generate() {
      const n = randInt(20, 100)
      const mod = n % 4
      const val = mod === 0 ? '1' : mod === 1 ? 'i' : mod === 2 ? '-1' : '-i'
      const correct = `$${val}$`
      const powValues = ['i', '-1', '-i', '1']
      const others = powValues.filter(v => v !== val).map(v => `$${v}$`)
      const { options, correctIndex } = makeStringOptions(correct, others)
      return {
        id: this.id, category: this.category,
        question: `What is $i^{${n}}$?`,
        options, correctIndex,
        explanation: `$${n} \\div 4 = ${Math.floor(n / 4)}$ remainder $${mod}$. $i^{${mod === 0 ? 4 : mod}} = ${val}$.`
      }
    }
  },
  {
    id: 'scn-q30',
    category: 'Powers of i',
    difficulty: 'medium',
    generate() {
      // i + i² + i³ + i⁴ = i - 1 - i + 1 = 0
      const correct = '$0$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$1$', '$i$', '$-1$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $i + i^2 + i^3 + i^4$?',
        options, correctIndex,
        explanation: '$i + (-1) + (-i) + 1 = 0$. Each complete cycle of 4 sums to $0$.'
      }
    }
  },
  {
    id: 'scn-q31',
    category: 'Powers of i',
    difficulty: 'medium',
    generate() {
      // i^(-1) = 1/i = -i
      const correct = '$-i$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$i$', '$1$', '$-1$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $i^{-1}$?',
        options, correctIndex,
        explanation: '$i^{-1} = \\frac{1}{i} = \\frac{1}{i} \\cdot \\frac{-i}{-i} = \\frac{-i}{-i^2} = \\frac{-i}{1} = -i$.'
      }
    }
  },
  {
    id: 'scn-q32',
    category: 'Powers of i',
    difficulty: 'easy',
    generate() {
      const correct = 'Divide the exponent by $4$ and use the remainder'
      const { options, correctIndex } = makeStringOptions(correct, [
        'Divide the exponent by $2$',
        'Multiply $i$ by the exponent',
        'Raise $-1$ to the exponent'
      ])
      return {
        id: this.id, category: this.category,
        question: 'The shortcut for simplifying $i^n$ is:',
        options, correctIndex,
        explanation: 'Since $i$ cycles every 4 powers, find $n \\bmod 4$ and look up: $0 \\to 1$, $1 \\to i$, $2 \\to -1$, $3 \\to -i$.'
      }
    }
  },

  // ===== QUADRATICS & COMPLEX ROOTS (8 questions) =====
  {
    id: 'scn-q33',
    category: 'Quadratics & Complex Roots',
    difficulty: 'medium',
    generate() {
      // x² + c = 0 where c > 0 → x = ±√(-c) = ±i√c
      const c = [1, 4, 9, 16, 25][randInt(0, 4)]
      const root = Math.sqrt(c)
      const rootStr = root === 1 ? 'i' : `${root}i`
      const correct = `$\\pm ${rootStr}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\pm ${root}$`, `$${rootStr}$`, c === root ? `$\\pm ${c + 1}i$` : `$\\pm ${c}i$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Solve $x^2 + ${c} = 0$.`,
        options, correctIndex,
        explanation: `$x^2 = -${c}$ → $x = \\pm\\sqrt{-${c}} = \\pm ${rootStr}$.`
      }
    }
  },
  {
    id: 'scn-q34',
    category: 'Quadratics & Complex Roots',
    difficulty: 'easy',
    generate() {
      const correct = '$b^2 - 4ac < 0$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$b^2 - 4ac > 0$', '$b^2 - 4ac = 0$', '$a < 0$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'A quadratic has complex (non-real) roots when:',
        options, correctIndex,
        explanation: 'The discriminant $\\Delta = b^2 - 4ac$. If $\\Delta < 0$, roots are complex.'
      }
    }
  },
  {
    id: 'scn-q35',
    category: 'Quadratics & Complex Roots',
    difficulty: 'hard',
    generate() {
      // x² - 2ax + (a² + b²) = 0 has roots a ± bi
      const a = randInt(1, 5)
      const b = randInt(1, 5)
      const negB = 2 * a
      const c = a * a + b * b
      const correct = `$${a} \\pm ${b}i$`
      const swapped = a === b ? `$${b} \\pm ${a + 1}i$` : `$${b} \\pm ${a}i$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$-${a} \\pm ${b}i$`, `$${a} \\pm ${b}$`, swapped
      ])
      return {
        id: this.id, category: this.category,
        question: `Solve $x^2 - ${negB}x + ${c} = 0$.`,
        options, correctIndex,
        explanation: `$\\Delta = ${negB * negB} - 4(${c}) = ${negB * negB - 4 * c}$. $x = \\frac{${negB} \\pm \\sqrt{${negB * negB - 4 * c}}}{2} = \\frac{${negB} \\pm ${2 * b}i}{2} = ${a} \\pm ${b}i$.`
      }
    }
  },
  {
    id: 'scn-q36',
    category: 'Quadratics & Complex Roots',
    difficulty: 'easy',
    generate() {
      const correct = 'They come in conjugate pairs'
      const { options, correctIndex } = makeStringOptions(correct, [
        'They are always equal', 'They are always real', 'One is always zero'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Complex roots of a quadratic with real coefficients:',
        options, correctIndex,
        explanation: 'Complex roots always come in conjugate pairs: if $a + bi$ is a root, so is $a - bi$.'
      }
    }
  },
  {
    id: 'scn-q37',
    category: 'Quadratics & Complex Roots',
    difficulty: 'medium',
    generate() {
      // discriminant calculation
      const b2 = randInt(2, 6) * 2 // ensure even b
      const c = randInt(b2 * b2 / 4 + 1, b2 * b2 / 4 + 10) // ensure negative discriminant
      const disc = b2 * b2 - 4 * c
      const correct = `$${disc}$`
      const seen = new Set<number>([disc])
      const ds: string[] = []
      for (const v of [-disc, b2 * b2, 4 * c, b2 * b2 + 4 * c]) {
        if (ds.length >= 3) break
        if (!seen.has(v)) { seen.add(v); ds.push(`$${v}$`) }
      }
      const { options, correctIndex } = makeStringOptions(correct, ds)
      return {
        id: this.id, category: this.category,
        question: `Find the discriminant of $x^2 + ${b2}x + ${c} = 0$.`,
        options, correctIndex,
        explanation: `$\\Delta = b^2 - 4ac = ${b2}^2 - 4(1)(${c}) = ${b2 * b2} - ${4 * c} = ${disc}$.`
      }
    }
  },
  {
    id: 'scn-q38',
    category: 'Quadratics & Complex Roots',
    difficulty: 'easy',
    generate() {
      const correct = '$2$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$0$', '$1$', '$4$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'How many complex roots does $x^2 + 1 = 0$ have?',
        options, correctIndex,
        explanation: '$x^2 = -1$ → $x = \\pm i$. Two complex roots: $i$ and $-i$.'
      }
    }
  },
  {
    id: 'scn-q39',
    category: 'Quadratics & Complex Roots',
    difficulty: 'hard',
    generate() {
      // If roots are a ± bi, the quadratic is x² - 2ax + (a² + b²)
      const a = randInt(1, 4)
      const b = randInt(1, 4)
      const sum = 2 * a
      const prod = a * a + b * b
      const altC = a * a - b * b
      const altTerm = altC === 0 ? '' : ` ${altC > 0 ? '+' : '-'} ${Math.abs(altC)}`
      const correct = `$x^2 - ${sum}x + ${prod} = 0$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x^2 + ${sum}x + ${prod} = 0$`,
        `$x^2 - ${sum}x - ${prod} = 0$`,
        `$x^2 - ${sum}x${altTerm} = 0$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Write a quadratic with roots $${a} + ${b}i$ and $${a} - ${b}i$.`,
        options, correctIndex,
        explanation: `Sum of roots $= ${sum}$, product $= ${a}^2 + ${b}^2 = ${prod}$. Equation: $x^2 - ${sum}x + ${prod} = 0$.`
      }
    }
  },
  {
    id: 'scn-q40',
    category: 'Quadratics & Complex Roots',
    difficulty: 'hard',
    generate() {
      // Roots r1 ± r2·i multiply to r1² + r2²
      const r1 = randInt(1, 5)
      const r2 = randInt(1, 5)
      const prod = r1 * r1 + r2 * r2
      const correct = `$${prod}$`
      const seen = new Set<number>([prod])
      const ds: string[] = []
      for (const v of [r1 * r1 - r2 * r2, 2 * r1, 2 * r1 * r2, (r1 + r2) * (r1 + r2), prod + 2, prod + 4]) {
        if (ds.length >= 3) break
        if (!seen.has(v)) { seen.add(v); ds.push(`$${v}$`) }
      }
      const { options, correctIndex } = makeStringOptions(correct, ds)
      return {
        id: this.id, category: this.category,
        question: `If the roots of a quadratic are $${r1} + ${r2}i$ and $${r1} - ${r2}i$, what is the product of the roots?`,
        options, correctIndex,
        explanation: `$(${r1} + ${r2}i)(${r1} - ${r2}i) = ${r1}^2 + ${r2}^2 = ${r1 * r1} + ${r2 * r2} = ${prod}$.`
      }
    }
  },
]

export function generateExitQuiz(count: number = 10, _topicSlug?: string, difficulty?: 'easy' | 'medium' | 'hard'): ExitQuizQuestion[] {
  let sourcePool = questionPool
  if (difficulty) {
    const fillOrder: Record<Difficulty, Difficulty[]> = { easy: ['medium', 'hard'], medium: ['easy', 'hard'], hard: ['medium', 'easy'] }
    sourcePool = questionPool.filter(q => q.difficulty === difficulty)
    for (const tier of fillOrder[difficulty]) {
      if (sourcePool.length >= count) break
      sourcePool = [...sourcePool, ...shuffle(questionPool.filter(q => q.difficulty === tier)).slice(0, count - sourcePool.length)]
    }
  }
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of sourcePool) {
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
  const remaining = sourcePool.filter(q => !usedIds.has(q.id))
  const shuffledRemaining = shuffle(remaining)
  for (const q of shuffledRemaining) {
    if (selected.length >= count) break
    selected.push(q); usedIds.add(q.id)
  }
  return shuffle(selected).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
}
