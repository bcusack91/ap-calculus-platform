/**
 * Exit Quiz Question Pool — SAT Circles & Trigonometry
 * 40 questions covering circle equations, arc length & sectors,
 * right triangle trig, unit circle basics, and trig applications.
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

function gcd(a: number, b: number): number { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b] } return a }
// Render (num/den)·π reduced; coefficient 1 omitted, whole numbers shown without a bar.
function fmtPi(num: number, den: number): string {
  const g = gcd(num, den) || 1
  const n = num / g, d = den / g
  const co = n === 1 ? '' : `${n}`
  return d === 1 ? `${co}\\pi` : `\\frac{${co}\\pi}{${d}}`
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
  // ===== CIRCLE EQUATIONS (8 questions) =====
  {
    id: 'sct-q1',
    category: 'Circle Equations',
    generate() {
      const h = randInt(-5, 5)
      const k = randInt(-5, 5)
      const r = randInt(2, 8)
      const r2 = r * r
      const hStr = h === 0 ? 'x' : h > 0 ? `(x - ${h})` : `(x + ${-h})`
      const kStr = k === 0 ? 'y' : k > 0 ? `(y - ${k})` : `(y + ${-k})`
      const correct = `$(${h}, ${k})$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$(${-h}, ${-k})$`, `$(${k}, ${h})$`, `$(${h + 1}, ${k - 1})$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Find the center of $${hStr}^2 + ${kStr}^2 = ${r2}$.`,
        options, correctIndex,
        explanation: `Standard form $(x - h)^2 + (y - k)^2 = r^2$. Center = $(${h}, ${k})$.`
      }
    }
  },
  {
    id: 'sct-q2',
    category: 'Circle Equations',
    generate() {
      const h = randInt(-4, 4)
      const k = randInt(-4, 4)
      const r = randInt(2, 7)
      const r2 = r * r
      const { options, correctIndex } = makeOptions(r, 2)
      return {
        id: this.id, category: this.category,
        question: `Circle equation: $(x - ${h})^2 + (y - ${k})^2 = ${r2}$. What is the radius?`,
        options, correctIndex,
        explanation: `$r^2 = ${r2}$ → $r = \\sqrt{${r2}} = ${r}$.`
      }
    }
  },
  {
    id: 'sct-q3',
    category: 'Circle Equations',
    generate() {
      const h = randInt(1, 5)
      const k = randInt(1, 5)
      const r = randInt(2, 6)
      const r2 = r * r
      const correct = `$(x - ${h})^2 + (y - ${k})^2 = ${r2}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$(x + ${h})^2 + (y + ${k})^2 = ${r2}$`,
        `$(x - ${h})^2 + (y - ${k})^2 = ${r}$`,
        `$(x - ${k})^2 + (y - ${h})^2 = ${r2}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Write the equation of a circle with center $(${h}, ${k})$ and radius $${r}$.`,
        options, correctIndex,
        explanation: `$(x - ${h})^2 + (y - ${k})^2 = ${r}^2 = ${r2}$.`
      }
    }
  },
  {
    id: 'sct-q4',
    category: 'Circle Equations',
    generate() {
      const r = randInt(3, 8)
      const r2 = r * r
      const correct = `$x^2 + y^2 = ${r2}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$x^2 + y^2 = ${r}$`,
        `$(x - ${r})^2 + y^2 = ${r2}$`,
        `$x^2 - y^2 = ${r2}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Write the equation of a circle centered at the origin with radius $${r}$.`,
        options, correctIndex,
        explanation: `Center $(0,0)$: $x^2 + y^2 = r^2 = ${r2}$.`
      }
    }
  },
  {
    id: 'sct-q5',
    category: 'Circle Equations',
    generate() {
      // Completing the square: x² + y² + Dx + Ey + F = 0
      const h = randInt(1, 4)
      const k = randInt(1, 4)
      const r = randInt(2, 5)
      const D = -2 * h
      const E = -2 * k
      const F = h * h + k * k - r * r
      const correct = `$(${h}, ${k})$, $r = ${r}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$(${-h}, ${-k})$, $r = ${r}$`,
        `$(${h}, ${k})$, $r = ${r * r}$`,
        `$(${D}, ${E})$, $r = ${r}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$x^2 + y^2 ${D >= 0 ? '+' : ''}${D}x ${E >= 0 ? '+' : ''}${E}y ${F >= 0 ? '+' : ''}${F} = 0$. Find center and radius.`,
        options, correctIndex,
        explanation: `Complete the square: $(x ${D / 2 >= 0 ? '+' : ''}${D / 2})^2 + (y ${E / 2 >= 0 ? '+' : ''}${E / 2})^2 = ${r * r}$. Center $(${h}, ${k})$, $r = ${r}$.`
      }
    }
  },
  {
    id: 'sct-q6',
    category: 'Circle Equations',
    generate() {
      const h = randInt(-3, 3)
      const k = randInt(-3, 3)
      const r = randInt(3, 7)
      const px = h + r
      const py = k
      const correct = 'Yes'
      const { options, correctIndex } = makeStringOptions(correct, [
        'No', 'Cannot determine', 'Only if $r > 5$'
      ])
      return {
        id: this.id, category: this.category,
        question: `Is $(${px}, ${py})$ on the circle $(x - ${h})^2 + (y - ${k})^2 = ${r * r}$?`,
        options, correctIndex,
        explanation: `$(${px} - ${h})^2 + (${py} - ${k})^2 = ${r}^2 + 0 = ${r * r}$ ✓. Yes, it's on the circle.`
      }
    }
  },
  {
    id: 'sct-q7',
    category: 'Circle Equations',
    generate() {
      const r = randInt(3, 8)
      const d = 2 * r
      const { options, correctIndex } = makeOptions(d, 3)
      return {
        id: this.id, category: this.category,
        question: `A circle has equation $x^2 + y^2 = ${r * r}$. What is the diameter?`,
        options, correctIndex,
        explanation: `$r = ${r}$, so diameter $= 2r = ${d}$.`
      }
    }
  },
  {
    id: 'sct-q8',
    category: 'Circle Equations',
    generate() {
      const r = randInt(2, 6)
      const _area = Math.round(Math.PI * r * r)
      const correct = `$${r * r}\\pi$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${2 * r}\\pi$`, `$${r}\\pi$`, `$${r * r * 2}\\pi$`
      ])
      return {
        id: this.id, category: this.category,
        question: `A circle has radius $${r}$. What is its area?`,
        options, correctIndex,
        explanation: `$A = \\pi r^2 = \\pi(${r})^2 = ${r * r}\\pi$.`
      }
    }
  },

  // ===== ARC LENGTH & SECTORS (7 questions) =====
  {
    id: 'sct-q9',
    category: 'Arc Length & Sectors',
    generate() {
      const r = randInt(3, 10)
      const C = 2 * r
      const correct = `$${C}\\pi$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${r}\\pi$`, `$${r * r}\\pi$`, `$${C + 2}\\pi$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the circumference of a circle with radius $${r}$?`,
        options, correctIndex,
        explanation: `$C = 2\\pi r = 2\\pi(${r}) = ${C}\\pi$.`
      }
    }
  },
  {
    id: 'sct-q10',
    category: 'Arc Length & Sectors',
    generate() {
      const r = randInt(4, 12)
      const deg = [60, 90, 120, 180][randInt(0, 3)]
      const frac = deg / 360
      const _arcLen = `${frac === 0.5 ? '' : frac === 0.25 ? '\\frac{1}{2}' : `\\frac{${deg}}{360}`}\\cdot 2\\pi(${r})`
      const _simplified = deg === 180 ? `${r}\\pi` : deg === 90 ? `\\frac{${r}\\pi}{1}` : `${(2 * r * deg / 360)}`
      // Arc length = (θ/360) × 2πr
      const numCoeff = 2 * r * deg / 360
      const correct = Number.isInteger(numCoeff) ? `$${numCoeff}\\pi$` : `$\\frac{${2 * r * deg}}{360}\\pi$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${r}\\pi$`, `$${2 * r}\\pi$`, `$${Math.round(numCoeff + 2)}\\pi$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Find the arc length for a $${deg}°$ arc on a circle with radius $${r}$.`,
        options, correctIndex,
        explanation: `Arc = $\\frac{${deg}}{360} \\times 2\\pi(${r}) = ${numCoeff}\\pi$.`
      }
    }
  },
  {
    id: 'sct-q11',
    category: 'Arc Length & Sectors',
    generate() {
      const r = randInt(3, 8)
      const deg = [60, 90, 120][randInt(0, 2)]
      const frac = deg / 360
      const sectorArea = frac * r * r
      const correct = `$${Number.isInteger(sectorArea) ? sectorArea : `\\frac{${r * r * deg}}{360}`}\\pi$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${r * r}\\pi$`, `$${2 * r}\\pi$`, `$${Math.round(sectorArea + 3)}\\pi$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Find the sector area for a $${deg}°$ angle in a circle of radius $${r}$.`,
        options, correctIndex,
        explanation: `Sector area = $\\frac{${deg}}{360} \\times \\pi r^2 = \\frac{${deg}}{360} \\times ${r * r}\\pi = ${sectorArea}\\pi$.`
      }
    }
  },
  {
    id: 'sct-q12',
    category: 'Arc Length & Sectors',
    generate() {
      const correct = '$\\frac{\\theta}{360} \\times \\pi r^2$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\frac{\\theta}{360} \\times 2\\pi r$',
        '$\\pi r^2$',
        '$\\theta \\times r^2$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Which formula gives the area of a sector with central angle $\\theta$ (in degrees)?',
        options, correctIndex,
        explanation: 'Sector area = $\\frac{\\theta}{360} \\times \\pi r^2$.'
      }
    }
  },
  {
    id: 'sct-q13',
    category: 'Arc Length & Sectors',
    generate() {
      const degs = [30, 45, 60, 90, 120, 180, 270, 360]
      const deg = degs[randInt(0, degs.length - 1)]
      const rad = deg === 30 ? '\\frac{\\pi}{6}' : deg === 45 ? '\\frac{\\pi}{4}' : deg === 60 ? '\\frac{\\pi}{3}' : deg === 90 ? '\\frac{\\pi}{2}' : deg === 120 ? '\\frac{2\\pi}{3}' : deg === 180 ? '\\pi' : deg === 270 ? '\\frac{3\\pi}{2}' : '2\\pi'
      const correct = `$${rad}$`
      const others = degs.filter(d => d !== deg).slice(0, 3).map(d => {
        const r = d === 30 ? '\\frac{\\pi}{6}' : d === 45 ? '\\frac{\\pi}{4}' : d === 60 ? '\\frac{\\pi}{3}' : d === 90 ? '\\frac{\\pi}{2}' : d === 120 ? '\\frac{2\\pi}{3}' : d === 180 ? '\\pi' : d === 270 ? '\\frac{3\\pi}{2}' : '2\\pi'
        return `$${r}$`
      })
      const { options, correctIndex } = makeStringOptions(correct, others)
      return {
        id: this.id, category: this.category,
        question: `Convert $${deg}°$ to radians.`,
        options, correctIndex,
        explanation: `$${deg}° \\times \\frac{\\pi}{180°} = ${rad}$.`
      }
    }
  },
  {
    id: 'sct-q14',
    category: 'Arc Length & Sectors',
    generate() {
      // Arc length formula in radians: s = rθ
      const r = randInt(3, 10)
      const thetaNum = randInt(1, 3)
      const thetaDen = [2, 3, 4, 6][randInt(0, 3)]
      const _s = r * thetaNum / thetaDen
      const correct = `$${fmtPi(r * thetaNum, thetaDen)}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${r}\\pi$`, `$\\frac{${r}\\pi}{${thetaDen + 1}}$`, `$${r * thetaNum}\\pi$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Arc length on a circle of radius $${r}$, central angle $${fmtPi(thetaNum, thetaDen)}$ radians?`,
        options, correctIndex,
        explanation: `$s = r\\theta = ${r} \\cdot ${fmtPi(thetaNum, thetaDen)} = ${fmtPi(r * thetaNum, thetaDen)}$.`
      }
    }
  },
  {
    id: 'sct-q15',
    category: 'Arc Length & Sectors',
    generate() {
      const r = randInt(4, 10)
      const _semicircleArea = r * r / 2
      const correct = `$\\frac{${r * r}\\pi}{2}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${r * r}\\pi$`, `$${r}\\pi$`, `$\\frac{${r}\\pi}{2}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `What is the area of a semicircle with radius $${r}$?`,
        options, correctIndex,
        explanation: `Semicircle area = $\\frac{\\pi r^2}{2} = \\frac{${r * r}\\pi}{2}$.`
      }
    }
  },

  // ===== RIGHT TRIANGLE TRIG (8 questions) =====
  {
    id: 'sct-q16',
    category: 'Right Triangle Trig',
    generate() {
      const correct = '$\\frac{\\text{opposite}}{\\text{hypotenuse}}$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{opposite}}{\\text{adjacent}}$',
        '$\\frac{\\text{hypotenuse}}{\\text{opposite}}$'
      ])
      return {
        id: this.id, category: this.category,
        question: '$\\sin(\\theta)$ equals:',
        options, correctIndex,
        explanation: 'SOH: $\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$.'
      }
    }
  },
  {
    id: 'sct-q17',
    category: 'Right Triangle Trig',
    generate() {
      const correct = '$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\frac{\\text{opposite}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{opposite}}{\\text{adjacent}}$',
        '$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$'
      ])
      return {
        id: this.id, category: this.category,
        question: '$\\cos(\\theta)$ equals:',
        options, correctIndex,
        explanation: 'CAH: $\\cos = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$.'
      }
    }
  },
  {
    id: 'sct-q18',
    category: 'Right Triangle Trig',
    generate() {
      const correct = '$\\frac{\\text{opposite}}{\\text{adjacent}}$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\frac{\\text{adjacent}}{\\text{opposite}}$',
        '$\\frac{\\text{opposite}}{\\text{hypotenuse}}$',
        '$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$'
      ])
      return {
        id: this.id, category: this.category,
        question: '$\\tan(\\theta)$ equals:',
        options, correctIndex,
        explanation: 'TOA: $\\tan = \\frac{\\text{opposite}}{\\text{adjacent}}$.'
      }
    }
  },
  {
    id: 'sct-q19',
    category: 'Right Triangle Trig',
    generate() {
      // 3-4-5 or multiples
      const k = randInt(1, 4)
      const a = 3 * k
      const b = 4 * k
      const c = 5 * k
      const correct = `$\\frac{${a}}{${c}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{${b}}{${c}}$`, `$\\frac{${a}}{${b}}$`, `$\\frac{${c}}{${a}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `In a right triangle with legs $${a}$ and $${b}$, hypotenuse $${c}$, find $\\sin(\\theta)$ where $\\theta$ is opposite the side of length $${a}$.`,
        options, correctIndex,
        explanation: `$\\sin(\\theta) = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{${a}}{${c}}$.`
      }
    }
  },
  {
    id: 'sct-q20',
    category: 'Right Triangle Trig',
    generate() {
      // Special triangle: 30-60-90
      const correct = '$\\frac{1}{2}$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $\\sin(30°)$?',
        options, correctIndex,
        explanation: 'In a 30-60-90 triangle (sides $1, \\sqrt{3}, 2$): $\\sin(30°) = \\frac{1}{2}$.'
      }
    }
  },
  {
    id: 'sct-q21',
    category: 'Right Triangle Trig',
    generate() {
      const correct = '$\\frac{\\sqrt{2}}{2}$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$1$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $\\cos(45°)$?',
        options, correctIndex,
        explanation: 'In a 45-45-90 triangle (sides $1, 1, \\sqrt{2}$): $\\cos(45°) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.'
      }
    }
  },
  {
    id: 'sct-q22',
    category: 'Right Triangle Trig',
    generate() {
      const correct = '$\\frac{\\sqrt{3}}{2}$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{3}$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $\\sin(60°)$?',
        options, correctIndex,
        explanation: 'In a 30-60-90 triangle: $\\sin(60°) = \\frac{\\sqrt{3}}{2}$.'
      }
    }
  },
  {
    id: 'sct-q23',
    category: 'Right Triangle Trig',
    generate() {
      // Find missing side using trig
      const hyp = randInt(8, 20)
      const _angle = 30
      // sin(30) = opp/hyp → opp = hyp/2
      const opp = hyp / 2
      const { options, correctIndex } = makeOptions(opp, 3)
      return {
        id: this.id, category: this.category,
        question: `In a right triangle, hypotenuse $= ${hyp}$ and one angle is $30°$. What is the side opposite the $30°$ angle?`,
        options, correctIndex,
        explanation: `$\\sin(30°) = \\frac{\\text{opp}}{${hyp}} = \\frac{1}{2}$ → opp $= \\frac{${hyp}}{2} = ${opp}$.`
      }
    }
  },

  // ===== UNIT CIRCLE & SPECIAL ANGLES (8 questions) =====
  {
    id: 'sct-q24',
    category: 'Unit Circle & Special Angles',
    generate() {
      const correct = '$1$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$2$', '$\\pi$', '$0$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is the radius of the unit circle?',
        options, correctIndex,
        explanation: 'The unit circle has radius $1$ and is centered at the origin.'
      }
    }
  },
  {
    id: 'sct-q25',
    category: 'Unit Circle & Special Angles',
    generate() {
      const correct = '$(\\cos\\theta, \\sin\\theta)$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$(\\sin\\theta, \\cos\\theta)$',
        '$(\\tan\\theta, 1)$',
        '$(1, \\theta)$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'On the unit circle, a point at angle $\\theta$ has coordinates:',
        options, correctIndex,
        explanation: 'On the unit circle: $x = \\cos\\theta$, $y = \\sin\\theta$. Point: $(\\cos\\theta, \\sin\\theta)$.'
      }
    }
  },
  {
    id: 'sct-q26',
    category: 'Unit Circle & Special Angles',
    generate() {
      const correct = '$0$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$1$', '$-1$', '$\\frac{1}{2}$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $\\sin(0°)$?',
        options, correctIndex,
        explanation: 'At $0°$ on the unit circle, the point is $(1, 0)$. $\\sin(0°) = 0$.'
      }
    }
  },
  {
    id: 'sct-q27',
    category: 'Unit Circle & Special Angles',
    generate() {
      const correct = '$1$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$0$', '$-1$', '$\\frac{\\sqrt{2}}{2}$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $\\sin(90°)$?',
        options, correctIndex,
        explanation: 'At $90°$ on the unit circle, the point is $(0, 1)$. $\\sin(90°) = 1$.'
      }
    }
  },
  {
    id: 'sct-q28',
    category: 'Unit Circle & Special Angles',
    generate() {
      const correct = '$-1$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$0$', '$1$', '$\\frac{1}{2}$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $\\cos(180°)$?',
        options, correctIndex,
        explanation: 'At $180°$ the point is $(-1, 0)$. $\\cos(180°) = -1$.'
      }
    }
  },
  {
    id: 'sct-q29',
    category: 'Unit Circle & Special Angles',
    generate() {
      const correct = '$\\sin^2\\theta + \\cos^2\\theta = 1$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$\\sin\\theta + \\cos\\theta = 1$',
        '$\\sin\\theta \\cdot \\cos\\theta = 1$',
        '$\\tan^2\\theta + 1 = \\sec\\theta$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Which is the Pythagorean identity?',
        options, correctIndex,
        explanation: 'From $x^2 + y^2 = 1$ on the unit circle: $\\cos^2\\theta + \\sin^2\\theta = 1$.'
      }
    }
  },
  {
    id: 'sct-q30',
    category: 'Unit Circle & Special Angles',
    generate() {
      const correct = '$1$'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$0$', '$\\sqrt{3}$', 'Undefined'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $\\tan(45°)$?',
        options, correctIndex,
        explanation: '$\\tan(45°) = \\frac{\\sin(45°)}{\\cos(45°)} = \\frac{\\sqrt{2}/2}{\\sqrt{2}/2} = 1$.'
      }
    }
  },
  {
    id: 'sct-q31',
    category: 'Unit Circle & Special Angles',
    generate() {
      const correct = 'Undefined'
      const { options, correctIndex } = makeStringOptions(correct, [
        '$0$', '$1$', '$\\infty$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'What is $\\tan(90°)$?',
        options, correctIndex,
        explanation: '$\\tan(90°) = \\frac{\\sin(90°)}{\\cos(90°)} = \\frac{1}{0}$, which is undefined.'
      }
    }
  },

  // ===== TRIG APPLICATIONS & REVIEW (9 questions) =====
  {
    id: 'sct-q32',
    category: 'Trig Applications & Review',
    generate() {
      // Using Pythagorean theorem
      const a = randInt(3, 12)
      const b = randInt(3, 12)
      const c2 = a * a + b * b
      const c = Math.sqrt(c2)
      const isPerf = Number.isInteger(c)
      const correct = isPerf ? `$${c}$` : `$\\sqrt{${c2}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${a + b}$`, `$${Math.abs(a - b)}$`, `$\\sqrt{${c2 + randInt(1, 5)}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `Right triangle with legs $${a}$ and $${b}$. Find the hypotenuse.`,
        options, correctIndex,
        explanation: `$c = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a * a} + ${b * b}} = \\sqrt{${c2}}${isPerf ? ` = ${c}` : ''}$.`
      }
    }
  },
  {
    id: 'sct-q33',
    category: 'Trig Applications & Review',
    generate() {
      const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]
      const t = triples[randInt(0, triples.length - 1)]
      const k = randInt(1, 3)
      const a = t[0] * k
      const c = t[2] * k
      const b = t[1] * k
      const { options, correctIndex } = makeOptions(b, 3)
      return {
        id: this.id, category: this.category,
        question: `A right triangle has hypotenuse $${c}$ and one leg $${a}$. Find the other leg.`,
        options, correctIndex,
        explanation: `$b = \\sqrt{${c}^2 - ${a}^2} = \\sqrt{${c * c} - ${a * a}} = \\sqrt{${b * b}} = ${b}$.`
      }
    }
  },
  {
    id: 'sct-q34',
    category: 'Trig Applications & Review',
    generate() {
      const angles = [
        { angle: '30°', sin: '\\frac{1}{2}', cos: '\\frac{\\sqrt{3}}{2}' },
        { angle: '45°', sin: '\\frac{\\sqrt{2}}{2}', cos: '\\frac{\\sqrt{2}}{2}' },
        { angle: '60°', sin: '\\frac{\\sqrt{3}}{2}', cos: '\\frac{1}{2}' },
      ]
      const pick = angles[randInt(0, 2)]
      const correct = `$${pick.cos}$`
      const others = angles.filter(a => a.angle !== pick.angle).map(a => `$${a.cos}$`)
      others.push('$0$')
      const { options, correctIndex } = makeStringOptions(correct, others.slice(0, 3))
      return {
        id: this.id, category: this.category,
        question: `What is $\\cos(${pick.angle})$?`,
        options, correctIndex,
        explanation: `$\\cos(${pick.angle}) = ${pick.cos}$.`
      }
    }
  },
  {
    id: 'sct-q35',
    category: 'Trig Applications & Review',
    generate() {
      // If sin(θ) = 3/5, find cos(θ)
      const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17]]
      const t = triples[randInt(0, triples.length - 1)]
      const correct = `$\\frac{${t[1]}}{${t[2]}}$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\frac{${t[0]}}{${t[2]}}$`,
        `$\\frac{${t[0]}}{${t[1]}}$`,
        `$\\frac{${t[2]}}{${t[1]}}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `If $\\sin(\\theta) = \\frac{${t[0]}}{${t[2]}}$ and $\\theta$ is acute, find $\\cos(\\theta)$.`,
        options, correctIndex,
        explanation: `$\\cos(\\theta) = \\frac{\\text{adj}}{\\text{hyp}}$. adj = $\\sqrt{${t[2]}^2 - ${t[0]}^2} = ${t[1]}$. So $\\cos(\\theta) = \\frac{${t[1]}}{${t[2]}}$.`
      }
    }
  },
  {
    id: 'sct-q36',
    category: 'Trig Applications & Review',
    generate() {
      const h = randInt(-4, 4)
      const k = randInt(-4, 4)
      const r = randInt(3, 7)
      const circ = 2 * r
      const correct = `$${circ}\\pi$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${r}\\pi$`, `$${r * r}\\pi$`, `$${circ + 2}\\pi$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$(x - ${h})^2 + (y - ${k})^2 = ${r * r}$. What is the circumference?`,
        options, correctIndex,
        explanation: `$r = ${r}$. $C = 2\\pi r = ${circ}\\pi$.`
      }
    }
  },
  {
    id: 'sct-q37',
    category: 'Trig Applications & Review',
    generate() {
      const height = randInt(5, 20) * 10
      const angle = [30, 45, 60][randInt(0, 2)]
      let dist: string
      if (angle === 45) dist = `$${height}$`
      else if (angle === 30) dist = `$${height}\\sqrt{3}$`
      else dist = `$\\frac{${height}\\sqrt{3}}{3}$`
      const { options, correctIndex } = makeStringOptions(dist, [
        `$${height * 2}$`, `$${Math.round(height / 2)}$`, `$${height + 10}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `A building is $${height}$ ft tall. From a point on the ground, the angle of elevation is $${angle}°$. How far from the building? (exact answer)`,
        options, correctIndex,
        explanation: `$\\tan(${angle}°) = \\frac{${height}}{d}$ → $d = \\frac{${height}}{\\tan(${angle}°)} = ${dist.replace(/\$/g, '')}$ ft.`
      }
    }
  },
  {
    id: 'sct-q38',
    category: 'Trig Applications & Review',
    generate() {
      const _correct = '$\\sin^2(\\theta) + \\cos^2(\\theta)$'
      const { options, correctIndex } = makeStringOptions('$1$', [
        '$0$', '$\\sin(2\\theta)$', '$2\\cos(\\theta)$'
      ])
      return {
        id: this.id, category: this.category,
        question: 'Simplify $\\sin^2(\\theta) + \\cos^2(\\theta)$.',
        options, correctIndex,
        explanation: 'Pythagorean identity: $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$.'
      }
    }
  },
  {
    id: 'sct-q39',
    category: 'Trig Applications & Review',
    generate() {
      const r = randInt(3, 8)
      const r2 = r * r
      const correct = `$${r2}\\pi$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$${2 * r}\\pi$`, `$${r}\\pi$`, `$${r2 * 2}$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$x^2 + y^2 = ${r2}$. What is the area enclosed?`,
        options, correctIndex,
        explanation: `$r = ${r}$. $A = \\pi r^2 = ${r2}\\pi$.`
      }
    }
  },
  {
    id: 'sct-q40',
    category: 'Trig Applications & Review',
    generate() {
      // Complementary angles: sin(θ) = cos(90° - θ)
      const ang = [20, 25, 30, 35, 40][randInt(0, 4)]
      const comp = 90 - ang
      const correct = `$\\cos(${comp}°)$`
      const { options, correctIndex } = makeStringOptions(correct, [
        `$\\cos(${ang}°)$`, `$\\sin(${comp}°)$`, `$\\tan(${ang}°)$`
      ])
      return {
        id: this.id, category: this.category,
        question: `$\\sin(${ang}°)$ is equal to which of the following?`,
        options, correctIndex,
        explanation: `Complementary angles: $\\sin(${ang}°) = \\cos(90° - ${ang}°) = \\cos(${comp}°)$.`
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
