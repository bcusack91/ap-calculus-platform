/**
 * Exit Quiz Question Pool — SAT Geometry Basics
 * 40 questions with randomized numeric generation.
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

function gcd(a: number, b: number): number { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b] } return a }

// Render a reduced fraction (or integer) in LaTeX.
function fmtFrac(num: number, den: number): string {
  if (den < 0) { num = -num; den = -den }
  const g = gcd(num, den) || 1
  const n = num / g, d = den / g
  if (d === 1) return `${n}`
  return n < 0 ? `-\\frac{${-n}}{${d}}` : `\\frac{${n}}{${d}}`
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

// Uniformly formatted "≈ value" options so the key isn't identifiable by format.
function makeDecimalOptions(correct: number, extras: number[] = []): { options: string[]; correctIndex: number } {
  const c = Math.round(correct * 10) / 10
  const vals = new Set<number>([c])
  const distractors: number[] = []
  for (const e of extras) {
    if (distractors.length >= 3) break
    const v = Math.round(e * 10) / 10
    if (v > 0 && !vals.has(v)) { vals.add(v); distractors.push(v) }
  }
  while (distractors.length < 3) {
    const v = Math.round((c + randInt(1, 12) * 0.5 * (Math.random() < 0.5 ? -1 : 1)) * 10) / 10
    if (v > 0 && !vals.has(v)) { vals.add(v); distractors.push(v) }
  }
  const all = shuffle([c, ...distractors])
  return { options: all.map(v => `$\\approx ${v}$`), correctIndex: all.indexOf(c) }
}

function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
  const fillers = ['None of the above', 'Cannot be determined', 'None of these']
  for (const f of fillers) { if (unique.length >= 3) break; if (f !== correct && !unique.includes(f)) unique.push(f) }
  const all = shuffle([correct, ...unique])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  {
    id: 'gb-q1',
    category: 'Angles',
    difficulty: 'easy',
    generate() {
      const a = randInt(30, 80)
      const comp = 90 - a
      const { options, correctIndex } = makeOptions(comp, 10, 1)
      return { id: this.id, category: this.category, question: `Two complementary angles measure $${a}°$ and $x°$. Find $x$.`, options, correctIndex, explanation: `Complementary angles sum to $90°$. $x = 90 - ${a} = ${comp}°$.` }
    }
  },
  {
    id: 'gb-q2',
    category: 'Angles',
    difficulty: 'easy',
    generate() {
      const a = randInt(50, 140)
      const supp = 180 - a
      const { options, correctIndex } = makeOptions(supp, 15, 1)
      return { id: this.id, category: this.category, question: `Find the supplement of a $${a}°$ angle.`, options, correctIndex, explanation: `Supplementary angles sum to $180°$. Supplement $= 180 - ${a} = ${supp}°$.` }
    }
  },
  {
    id: 'gb-q3',
    category: 'Angles',
    difficulty: 'easy',
    generate() {
      const a = randInt(40, 70)
      const vert = a
      const { options, correctIndex } = makeOptions(vert, 10, 1)
      return { id: this.id, category: this.category, question: `Two lines intersect forming a $${a}°$ angle. What is the measure of the vertical angle?`, options, correctIndex, explanation: `Vertical angles are equal. The vertical angle $= ${a}°$.` }
    }
  },
  {
    id: 'gb-q4',
    category: 'Angles',
    difficulty: 'medium',
    generate() {
      const a = randInt(30, 80); const b = randInt(30, 80)
      const c = 180 - a - b
      const { options, correctIndex } = makeOptions(c, 10, 1)
      return { id: this.id, category: this.category, question: `A triangle has angles $${a}°$ and $${b}°$. Find the third angle.`, options, correctIndex, explanation: `Triangle angle sum $= 180°$. Third $= 180 - ${a} - ${b} = ${c}°$.` }
    }
  },
  {
    id: 'gb-q5',
    category: 'Angles',
    difficulty: 'medium',
    generate() {
      const ext = randInt(90, 150)
      const int = 180 - ext
      const { options, correctIndex } = makeOptions(int, 10, 1)
      return { id: this.id, category: this.category, question: `An exterior angle of a triangle is $${ext}°$. What is its adjacent interior angle?`, options, correctIndex, explanation: `An exterior angle and its adjacent interior angle are supplementary: $180 - ${ext} = ${int}°$.` }
    }
  },
  {
    id: 'gb-q6',
    category: 'Angles',
    difficulty: 'easy',
    generate() {
      const a = randInt(40, 70)
      const alt = a
      const { options, correctIndex } = makeOptions(alt, 8, 1)
      return { id: this.id, category: this.category, question: `Parallel lines cut by a transversal create an angle of $${a}°$. What is the alternate interior angle?`, options, correctIndex, explanation: `Alternate interior angles are equal when lines are parallel: $${alt}°$.` }
    }
  },
  {
    id: 'gb-q7',
    category: 'Angles',
    difficulty: 'easy',
    generate() {
      const a = randInt(40, 80)
      const co = a
      const { options, correctIndex } = makeOptions(co, 8, 1)
      return { id: this.id, category: this.category, question: `A transversal crosses parallel lines creating a $${a}°$ angle. What is the corresponding angle on the other parallel line?`, options, correctIndex, explanation: `Corresponding angles are equal: $${co}°$.` }
    }
  },
  {
    id: 'gb-q8',
    category: 'Angles',
    difficulty: 'medium',
    generate() {
      const n = randInt(5, 8)
      const sum = (n - 2) * 180
      const { options, correctIndex } = makeOptions(sum, 90, 1)
      return { id: this.id, category: this.category, question: `What is the sum of interior angles of a regular $${n}$-sided polygon?`, options, correctIndex, explanation: `Sum $= (n - 2) \\times 180 = (${n} - 2) \\times 180 = ${sum}°$.` }
    }
  },
  {
    id: 'gb-q9',
    category: 'Area & Perimeter',
    difficulty: 'easy',
    generate() {
      const l = randInt(5, 15); const w = randInt(3, 12)
      const area = l * w
      const { options, correctIndex } = makeOptions(area, 10, 1)
      return { id: this.id, category: this.category, question: `Find the area of a rectangle with length $${l}$ and width $${w}$.`, options, correctIndex, explanation: `Area $= l \\times w = ${l} \\times ${w} = ${area}$.` }
    }
  },
  {
    id: 'gb-q10',
    category: 'Area & Perimeter',
    difficulty: 'easy',
    generate() {
      const l = randInt(5, 15); const w = randInt(3, 12)
      const p = 2 * (l + w)
      const { options, correctIndex } = makeOptions(p, 8, 1)
      return { id: this.id, category: this.category, question: `Find the perimeter of a rectangle with length $${l}$ and width $${w}$.`, options, correctIndex, explanation: `Perimeter $= 2(l + w) = 2(${l} + ${w}) = ${p}$.` }
    }
  },
  {
    id: 'gb-q11',
    category: 'Area & Perimeter',
    difficulty: 'medium',
    generate() {
      const b = 2 * randInt(2, 7); const h = randInt(3, 10)
      const area = b * h / 2
      const { options, correctIndex } = makeOptions(area, 8, 1)
      return { id: this.id, category: this.category, question: `Find the area of a triangle with base $${b}$ and height $${h}$.`, options, correctIndex, explanation: `Area $= \\frac{1}{2}bh = \\frac{1}{2}(${b})(${h}) = ${area}$.` }
    }
  },
  {
    id: 'gb-q12',
    category: 'Area & Perimeter',
    difficulty: 'medium',
    generate() {
      const a = randInt(3, 8); const b = randInt(5, 12); const h = 2 * randInt(2, 4)
      const area = (a + b) * h / 2
      const { options, correctIndex } = makeOptions(area, 10, 1)
      return { id: this.id, category: this.category, question: `Find the area of a trapezoid with parallel sides $${a}$ and $${b}$, height $${h}$.`, options, correctIndex, explanation: `Area $= \\frac{1}{2}(a + b)h = \\frac{1}{2}(${a} + ${b})(${h}) = ${area}$.` }
    }
  },
  {
    id: 'gb-q13',
    category: 'Area & Perimeter',
    difficulty: 'easy',
    generate() {
      const r = randInt(2, 10)
      const area = Math.round(Math.PI * r * r)
      const { options, correctIndex } = makeOptions(area, 15, 1)
      return { id: this.id, category: this.category, question: `Find the area of a circle with radius $${r}$ (round to nearest integer).`, options, correctIndex, explanation: `Area $= \\pi r^2 = \\pi(${r})^2 \\approx ${area}$.` }
    }
  },
  {
    id: 'gb-q14',
    category: 'Area & Perimeter',
    difficulty: 'easy',
    generate() {
      const r = randInt(2, 10)
      const circ = Math.round(2 * Math.PI * r)
      const { options, correctIndex } = makeOptions(circ, 10, 1)
      return { id: this.id, category: this.category, question: `Find the circumference of a circle with radius $${r}$ (round to nearest integer).`, options, correctIndex, explanation: `$C = 2\\pi r = 2\\pi(${r}) \\approx ${circ}$.` }
    }
  },
  {
    id: 'gb-q15',
    category: 'Area & Perimeter',
    difficulty: 'easy',
    generate() {
      const s = randInt(3, 10)
      const area = s * s
      const { options, correctIndex } = makeOptions(area, 8, 1)
      return { id: this.id, category: this.category, question: `Find the area of a square with side length $${s}$.`, options, correctIndex, explanation: `Area $= s^2 = ${s}^2 = ${area}$.` }
    }
  },
  {
    id: 'gb-q16',
    category: 'Area & Perimeter',
    difficulty: 'easy',
    generate() {
      const s = randInt(3, 10)
      const p = 4 * s
      const { options, correctIndex } = makeOptions(p, 6, 1)
      return { id: this.id, category: this.category, question: `Find the perimeter of a square with side length $${s}$.`, options, correctIndex, explanation: `Perimeter $= 4s = 4(${s}) = ${p}$.` }
    }
  },
  {
    id: 'gb-q17',
    category: 'Volume & Surface Area',
    difficulty: 'easy',
    generate() {
      const l = randInt(2, 8); const w = randInt(2, 8); const h = randInt(2, 8)
      const vol = l * w * h
      const { options, correctIndex } = makeOptions(vol, 30, 1)
      return { id: this.id, category: this.category, question: `Find the volume of a rectangular prism with dimensions $${l} \\times ${w} \\times ${h}$.`, options, correctIndex, explanation: `$V = lwh = ${l} \\times ${w} \\times ${h} = ${vol}$.` }
    }
  },
  {
    id: 'gb-q18',
    category: 'Volume & Surface Area',
    difficulty: 'medium',
    generate() {
      const r = randInt(2, 6); const h = randInt(3, 10)
      const vol = Math.round(Math.PI * r * r * h)
      const { options, correctIndex } = makeOptions(vol, 40, 1)
      return { id: this.id, category: this.category, question: `Find the volume of a cylinder with radius $${r}$ and height $${h}$ (round to nearest integer).`, options, correctIndex, explanation: `$V = \\pi r^2 h = \\pi(${r})^2(${h}) \\approx ${vol}$.` }
    }
  },
  {
    id: 'gb-q19',
    category: 'Volume & Surface Area',
    difficulty: 'medium',
    generate() {
      const r = randInt(2, 6); const h = randInt(3, 10)
      const vol = Math.round(Math.PI * r * r * h / 3)
      const { options, correctIndex } = makeOptions(vol, 30, 1)
      return { id: this.id, category: this.category, question: `Find the volume of a cone with radius $${r}$ and height $${h}$ (round to nearest integer).`, options, correctIndex, explanation: `$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(${r})^2(${h}) \\approx ${vol}$.` }
    }
  },
  {
    id: 'gb-q20',
    category: 'Volume & Surface Area',
    difficulty: 'medium',
    generate() {
      const r = randInt(2, 8)
      const vol = Math.round(4 / 3 * Math.PI * r * r * r)
      const { options, correctIndex } = makeOptions(vol, 50, 1)
      return { id: this.id, category: this.category, question: `Find the volume of a sphere with radius $${r}$ (round to nearest integer).`, options, correctIndex, explanation: `$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(${r})^3 \\approx ${vol}$.` }
    }
  },
  {
    id: 'gb-q21',
    category: 'Volume & Surface Area',
    difficulty: 'hard',
    generate() {
      const l = randInt(3, 8); const w = randInt(3, 8); const h = randInt(3, 8)
      const sa = 2 * (l * w + l * h + w * h)
      const { options, correctIndex } = makeOptions(sa, 20, 1)
      return { id: this.id, category: this.category, question: `Find the surface area of a rectangular prism $${l} \\times ${w} \\times ${h}$.`, options, correctIndex, explanation: `$SA = 2(lw + lh + wh) = 2(${l * w} + ${l * h} + ${w * h}) = ${sa}$.` }
    }
  },
  {
    id: 'gb-q22',
    category: 'Volume & Surface Area',
    difficulty: 'easy',
    generate() {
      const s = randInt(2, 8)
      const vol = s * s * s
      const { options, correctIndex } = makeOptions(vol, 30, 1)
      return { id: this.id, category: this.category, question: `Find the volume of a cube with edge length $${s}$.`, options, correctIndex, explanation: `$V = s^3 = ${s}^3 = ${vol}$.` }
    }
  },
  {
    id: 'gb-q23',
    category: 'Volume & Surface Area',
    difficulty: 'medium',
    generate() {
      const s = randInt(2, 8)
      const sa = 6 * s * s
      const { options, correctIndex } = makeOptions(sa, 20, 1)
      return { id: this.id, category: this.category, question: `Find the surface area of a cube with edge length $${s}$.`, options, correctIndex, explanation: `$SA = 6s^2 = 6(${s})^2 = ${sa}$.` }
    }
  },
  {
    id: 'gb-q24',
    category: 'Volume & Surface Area',
    difficulty: 'medium',
    generate() {
      const r = randInt(2, 6)
      const sa = Math.round(4 * Math.PI * r * r)
      const { options, correctIndex } = makeOptions(sa, 30, 1)
      return { id: this.id, category: this.category, question: `Find the surface area of a sphere with radius $${r}$ (round to nearest integer).`, options, correctIndex, explanation: `$SA = 4\\pi r^2 = 4\\pi(${r})^2 \\approx ${sa}$.` }
    }
  },
  {
    id: 'gb-q25',
    category: 'Pythagorean Theorem',
    difficulty: 'medium',
    generate() {
      const a = randInt(3, 12); const b = randInt(4, 12)
      const cSq = a * a + b * b; const c = Math.round(Math.sqrt(cSq) * 10) / 10
      const { options, correctIndex } = makeDecimalOptions(c, [a + b, Math.abs(a - b), Math.round(c) + 2])
      return { id: this.id, category: this.category, question: `A right triangle has legs $${a}$ and $${b}$. Find the hypotenuse $c$ (rounded to the nearest tenth).`, options, correctIndex, explanation: `$c = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${cSq}} \\approx ${c}$.` }
    }
  },
  {
    id: 'gb-q26',
    category: 'Pythagorean Theorem',
    difficulty: 'easy',
    generate() {
      const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]
      const [a, b, c] = triples[randInt(0, triples.length - 1)]
      const { options, correctIndex } = makeOptions(c, 3, 1)
      return { id: this.id, category: this.category, question: `A right triangle has legs $${a}$ and $${b}$. Find the hypotenuse.`, options, correctIndex, explanation: `$${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${c * c} = ${c}^2$.` }
    }
  },
  {
    id: 'gb-q27',
    category: 'Pythagorean Theorem',
    difficulty: 'medium',
    generate() {
      const triples = [[3, 4, 5], [5, 12, 13], [8, 15, 17]]
      const [a, b, c] = triples[randInt(0, triples.length - 1)]
      const { options, correctIndex } = makeOptions(a, 3, 1)
      return { id: this.id, category: this.category, question: `A right triangle has hypotenuse $${c}$ and one leg $${b}$. Find the other leg.`, options, correctIndex, explanation: `$a = \\sqrt{${c}^2 - ${b}^2} = \\sqrt{${c * c} - ${b * b}} = \\sqrt{${c * c - b * b}} = ${a}$.` }
    }
  },
  {
    id: 'gb-q28',
    category: 'Pythagorean Theorem',
    difficulty: 'hard',
    generate() {
      const d = randInt(5, 15)
      const diag = Math.round(d * Math.sqrt(2) * 10) / 10
      const { options, correctIndex } = makeDecimalOptions(diag, [2 * d, d, d + 1])
      return { id: this.id, category: this.category, question: `A square has side length $${d}$. Find the diagonal length (rounded to the nearest tenth).`, options, correctIndex, explanation: `Diagonal $= s\\sqrt{2} = ${d}\\sqrt{2} \\approx ${diag}$.` }
    }
  },
  {
    id: 'gb-q29',
    category: 'Pythagorean Theorem',
    difficulty: 'easy',
    generate() {
      const correct = '3-4-5, 5-12-13, 8-15-17, 7-24-25'
      return { id: this.id, category: this.category, question: 'List four common Pythagorean triples.', ...makeStringOptions(correct, ['2-3-4, 5-6-7', '1-2-3, 4-5-6', '3-5-7, 4-6-8']), explanation: 'Common Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (and their multiples).' }
    }
  },
  {
    id: 'gb-q30',
    category: 'Pythagorean Theorem',
    difficulty: 'hard',
    generate() {
      const a = randInt(3, 8); const b = randInt(3, 8); const c = randInt(10, 15)
      const isRight = a * a + b * b === c * c
      const correct = isRight ? 'Yes, it is a right triangle' : 'No, it is not a right triangle'
      return { id: this.id, category: this.category, question: `Do sides $${a}$, $${b}$, $${c}$ form a right triangle? Check: $${a}^2 + ${b}^2 = ${a * a + b * b}$, $${c}^2 = ${c * c}$.`, ...makeStringOptions(correct, [isRight ? 'No' : 'Yes', 'Only if angles are given', 'Cannot determine']), explanation: `$${a}^2 + ${b}^2 = ${a * a + b * b} ${isRight ? '=' : '\\neq'} ${c * c} = ${c}^2$. ${isRight ? 'Equal, so right triangle.' : 'Not equal, not a right triangle.'}` }
    }
  },
  {
    id: 'gb-q31',
    category: 'Pythagorean Theorem',
    difficulty: 'hard',
    generate() {
      const h = randInt(10, 30); const d = randInt(5, 15)
      const ladder = Math.round(Math.sqrt(h * h + d * d) * 10) / 10
      const { options, correctIndex } = makeDecimalOptions(ladder, [h + d, h, h - d])
      return { id: this.id, category: this.category, question: `A ladder reaches $${h}$ ft up a wall. Its base is $${d}$ ft from the wall. How long is the ladder, in feet (rounded to the nearest tenth)?`, options, correctIndex, explanation: `Ladder $= \\sqrt{${h}^2 + ${d}^2} = \\sqrt{${h * h + d * d}} \\approx ${ladder}$ ft.` }
    }
  },
  {
    id: 'gb-q32',
    category: 'Pythagorean Theorem',
    difficulty: 'medium',
    generate() {
      const k = randInt(2, 4); const a = 3 * k; const b = 4 * k; const c = 5 * k
      const { options, correctIndex } = makeOptions(c, 5, 1)
      return { id: this.id, category: this.category, question: `A right triangle has legs $${a}$ and $${b}$. Find the hypotenuse.`, options, correctIndex, explanation: `This is a $${k}\\times$ multiple of the 3-4-5 triple: $${a}$-$${b}$-$${c}$.` }
    }
  },
  {
    id: 'gb-q33',
    category: 'Coordinate Geometry',
    difficulty: 'hard',
    generate() {
      const x1 = randInt(-5, 5); const y1 = randInt(-5, 5)
      let dx = randInt(-5, 5); while (dx === 0) dx = randInt(-5, 5)
      let dy = randInt(-5, 5); while (dy === 0) dy = randInt(-5, 5)
      const x2 = x1 + dx; const y2 = y1 + dy
      const dist = Math.round(Math.sqrt(dx * dx + dy * dy) * 10) / 10
      const { options, correctIndex } = makeDecimalOptions(dist, [Math.abs(dx) + Math.abs(dy), dist + 2, Math.abs(dist - 3)])
      return { id: this.id, category: this.category, question: `Find the distance between $(${x1}, ${y1})$ and $(${x2}, ${y2})$ (rounded to the nearest tenth).`, options, correctIndex, explanation: `$d = \\sqrt{(${dx})^2 + (${dy})^2} = \\sqrt{${dx * dx + dy * dy}} \\approx ${dist}$.` }
    }
  },
  {
    id: 'gb-q34',
    category: 'Coordinate Geometry',
    difficulty: 'medium',
    generate() {
      const x1 = randInt(-6, 6); const y1 = randInt(-6, 6)
      let x2 = randInt(-6, 6); let y2 = randInt(-6, 6)
      while (x2 === x1 && y2 === y1) { x2 = randInt(-6, 6); y2 = randInt(-6, 6) }
      const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2
      const correct = `$(${mx}, ${my})$`
      return { id: this.id, category: this.category, question: `Find the midpoint of $(${x1}, ${y1})$ and $(${x2}, ${y2})$.`, ...makeStringOptions(correct, [`$(${x1}, ${y2})$`, `$(${x2}, ${y1})$`, `$(${mx + 1}, ${my - 1})$`, `$(${mx - 1}, ${my + 1})$`, `$(${mx + 2}, ${my})$`]), explanation: `Midpoint $= \\left(\\frac{${x1} + ${x2}}{2}, \\frac{${y1} + ${y2}}{2}\\right) = (${mx}, ${my})$.` }
    }
  },
  {
    id: 'gb-q35',
    category: 'Coordinate Geometry',
    difficulty: 'medium',
    generate() {
      const x1 = randInt(-5, 0); const y1 = randInt(-5, 0)
      const x2 = randInt(1, 5); const y2 = randInt(1, 5)
      const rise = y2 - y1; const run = x2 - x1
      const v = rise / run
      const correct = `$${fmtFrac(rise, run)}$`
      const candPairs: [number, number][] = [[-rise, run], [run, rise], [rise + run, run], [rise + 2 * run, run], [-run, rise]]
      const seen = new Set<number>([v]); const distractors: string[] = []
      for (const [n, d] of candPairs) {
        if (distractors.length >= 3) break
        const val = n / d
        if (!seen.has(val)) { seen.add(val); distractors.push(`$${fmtFrac(n, d)}$`) }
      }
      return { id: this.id, category: this.category, question: `Find the slope between $(${x1}, ${y1})$ and $(${x2}, ${y2})$.`, ...makeStringOptions(correct, distractors), explanation: `Slope $= \\frac{${y2} - (${y1})}{${x2} - (${x1})} = \\frac{${rise}}{${run}} = ${fmtFrac(rise, run)}$.` }
    }
  },
  {
    id: 'gb-q36',
    category: 'Coordinate Geometry',
    difficulty: 'medium',
    generate() {
      const m = randInt(2, 5)
      const correct = `$-\\frac{1}{${m}}$`
      return { id: this.id, category: this.category, question: `A line has slope $${m}$. What is the slope of a perpendicular line?`, ...makeStringOptions(correct, [`$${m}$`, `$${-m}$`, `$\\frac{1}{${m}}$`]), explanation: `Perpendicular slopes are negative reciprocals: $-\\frac{1}{${m}}$.` }
    }
  },
  {
    id: 'gb-q37',
    category: 'Coordinate Geometry',
    difficulty: 'easy',
    generate() {
      const m = randInt(-3, 3); const b = randInt(-5, 5)
      const correct = `Parallel (same slope $${m}$)`
      return { id: this.id, category: this.category, question: `Line 1: $y = ${m}x + ${b}$. Line 2: $y = ${m}x + ${b + randInt(1, 5)}$. What relationship?`, ...makeStringOptions(correct, ['Perpendicular', 'Intersecting', 'Identical']), explanation: `Both lines have slope $${m}$ but different $y$-intercepts, so they are parallel.` }
    }
  },
  {
    id: 'gb-q38',
    category: 'Coordinate Geometry',
    difficulty: 'easy',
    generate() {
      const m = randInt(1, 4); const b = randInt(-5, 5); const x = randInt(-3, 3)
      const y = m * x + b
      const { options, correctIndex } = makeOptions(y, 5)
      return { id: this.id, category: this.category, question: `Find $y$ when $x = ${x}$ on the line $y = ${m}x + ${b}$.`, options, correctIndex, explanation: `$y = ${m}(${x}) + ${b} = ${m * x} + ${b} = ${y}$.` }
    }
  },
  {
    id: 'gb-q39',
    category: 'Coordinate Geometry',
    difficulty: 'hard',
    generate() {
      const m = randInt(1, 3); const x1 = randInt(-3, 3); const y1 = randInt(-3, 3)
      const b = y1 - m * x1
      const lineStr = (slope: number, intercept: number): string => {
        const bPart = intercept === 0 ? '' : intercept > 0 ? ` + ${intercept}` : ` - ${-intercept}`
        return `y = ${slope}x${bPart}`
      }
      const correct = `$${lineStr(m, b)}$`
      const d1 = `$${lineStr(-m, b)}$`
      const d2 = `$${lineStr(m, b === 0 ? randInt(2, 4) : -b)}$`
      const d3 = `$${lineStr(b === m || b === 0 ? m + 2 : b, m)}$`
      return { id: this.id, category: this.category, question: `Write the equation of the line through $(${x1}, ${y1})$ with slope $${m}$.`, ...makeStringOptions(correct, [d1, d2, d3]), explanation: `$y - (${y1}) = ${m}(x - (${x1}))$, so $${lineStr(m, b)}$.` }
    }
  },
  {
    id: 'gb-q40',
    category: 'Coordinate Geometry',
    difficulty: 'hard',
    generate() {
      let h = randInt(-4, 4); const k = randInt(-4, 4); const r = randInt(2, 6)
      if (h === 0 && k === 0) h = randInt(1, 4)
      const hStr = h === 0 ? 'x' : h > 0 ? `(x - ${h})` : `(x + ${-h})`
      const kStr = k === 0 ? 'y' : k > 0 ? `(y - ${k})` : `(y + ${-k})`
      const flipH = h === 0 ? 'x' : `(x ${h > 0 ? '+' : '-'} ${Math.abs(h)})`
      const flipK = k === 0 ? 'y' : `(y ${k > 0 ? '+' : '-'} ${Math.abs(k)})`
      const correct = `$${hStr}^2 + ${kStr}^2 = ${r * r}$`
      return { id: this.id, category: this.category, question: `Write the equation of a circle centered at $(${h}, ${k})$ with radius $${r}$.`, ...makeStringOptions(correct, [`$${flipH}^2 + ${flipK}^2 = ${r * r}$`, `$${hStr}^2 + ${kStr}^2 = ${r}$`, `$${hStr}^2 + ${kStr}^2 = ${2 * r * r}$`]), explanation: `Circle equation: $(x - h)^2 + (y - k)^2 = r^2$ with $h = ${h}$, $k = ${k}$, $r^2 = ${r * r}$.` }
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
  const selected: QuestionTemplate[] = []
  const usedIds = new Set<string>()
  for (const cat of shuffle(Object.keys(byCategory))) {
    if (selected.length >= count) break
    const pool = byCategory[cat]
    const q = pool[Math.floor(Math.random() * pool.length)]
    if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id) }
  }
  const remaining = sourcePool.filter(q => !usedIds.has(q.id))
  for (const q of shuffle(remaining)) {
    if (selected.length >= count) break
    selected.push(q)
    usedIds.add(q.id)
  }
  return shuffle(selected).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
}
