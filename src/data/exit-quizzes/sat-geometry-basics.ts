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

// Up to two misconception values (kept only when they have the key's digit count, so they cannot
// stand out by length), then integer-offset distractors placed so the key's rank among the four
// values is as uniform as the misconceptions allow.
function makeOptions(correct: number, spread: number = 2, min?: number, misc: number[] = []): { options: string[]; correctIndex: number } {
  const w = Math.max(3, spread * 3)
  const ok = (v: number) => v !== correct && (min === undefined || v >= min)
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

// "mx + b" with no 1x, -1x, 0x, "+ -b" or "+ 0" artifacts.
function lineExpr(m: number, b: number): string {
  const mx = m === 0 ? '' : m === 1 ? 'x' : m === -1 ? '-x' : `${m}x`
  if (!mx) return `${b}`
  return b === 0 ? mx : b > 0 ? `${mx} + ${b}` : `${mx} - ${-b}`
}
// Parenthesize negatives when substituting into a formula: "3 + (-2)".
function par(v: number): string { return v < 0 ? `(${v})` : `${v}` }

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
    const v = Math.round((c + randInt(1, 12) * 0.3 * (Math.random() < 0.5 ? -1 : 1)) * 10) / 10
    if (v > 0 && !vals.has(v)) { vals.add(v); distractors.push(v) }
  }
  const all = shuffle([c, ...distractors])
  return { options: all.map(v => `$\\approx ${v.toFixed(1)}$`), correctIndex: all.indexOf(c) }
}

function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
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
      const { options, correctIndex } = makeOptions(comp, 10, 1, [180 - a, a])
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
      const { options, correctIndex } = makeOptions(supp, 15, 1, [90 - a, 360 - a])
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
      const { options, correctIndex } = makeOptions(vert, 10, 1, [180 - a, 90 - a])
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
      const { options, correctIndex } = makeOptions(int, 10, 1, [ext - 90, 360 - ext])
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
      const { options, correctIndex } = makeOptions(alt, 8, 1, [180 - a, 90 - a])
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
      const { options, correctIndex } = makeOptions(co, 8, 1, [180 - a, 90 - a])
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
      const { options, correctIndex } = makeOptions(p, 8, 1, [l + w, l * w])
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
      const { options, correctIndex } = makeOptions(area, 8, 1, [b * h])
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
      const { options, correctIndex } = makeOptions(area, 8, 1, [4 * s, 2 * s])
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
      const { options, correctIndex } = makeOptions(p, 6, 1, [s * s, 2 * s])
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
      const t = triples[randInt(0, triples.length - 1)]
      const k = randInt(1, 3)
      const [a, b, c] = [t[0] * k, t[1] * k, t[2] * k]
      const { options, correctIndex } = makeOptions(a, 3, 1, [c - b, c + b])
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
      // Name the hypotenuse from the right-angle vertex (was "list four triples", whose
      // key was always the one long option)
      const letters = shuffle(['P', 'Q', 'R'])
      const [rt, u, v] = letters
      const seg = (a: string, b: string) => [a, b].sort().join('')
      const hyp = seg(u, v), l1 = seg(rt, u), l2 = seg(rt, v)
      const eq = (a: string, b: string, c: string) => `$${a}^2 + ${b}^2 = ${c}^2$`
      const correct = eq(l1, l2, hyp)
      return { id: this.id, category: this.category, question: `In triangle $PQR$, angle $${rt}$ is a right angle. Which equation must be true?`, ...makeStringOptions(correct, [eq(l1, hyp, l2), eq(l2, hyp, l1), `$(${l1} + ${l2})^2 = ${hyp}^2$`]), explanation: `The hypotenuse is the side opposite the right angle at $${rt}$, which is $${hyp}$. The Pythagorean theorem says the squares of the legs $${l1}$ and $${l2}$ add to the square of the hypotenuse.` }
    }
  },
  {
    id: 'gb-q30',
    category: 'Pythagorean Theorem',
    difficulty: 'hard',
    generate() {
      // Converse of the Pythagorean theorem. Every option is a genuine triangle (triangle
      // inequality holds) and exactly one satisfies a^2 + b^2 = c^2; the student does the check.
      const bases = [[20, 21, 29], [9, 40, 41], [12, 35, 37], [28, 45, 53], [11, 60, 61], [33, 56, 65], [16, 63, 65], [48, 55, 73]]
      const [a, b, c] = bases[randInt(0, bases.length - 1)]
      const isRight = (x: number, y: number, z: number) => x * x + y * y === z * z
      const near = [[a, b, c + 1], [a + 1, b, c], [a, b + 1, c], [a, b - 1, c], [a - 1, b, c], [a, b, c - 1], [a + 1, b + 1, c + 1]]
        .filter(([x, y, z]) => !isRight(x, y, z) && x + y > z)
      const fmt = (t: number[]) => `$${t.join(', ')}$`
      return { id: this.id, category: this.category, question: 'Which of the following could be the side lengths of a right triangle?', ...makeStringOptions(fmt([a, b, c]), shuffle(near).map(fmt)), explanation: `Check whether the two shorter sides' squares add to the longest side's square: $${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${c * c} = ${c}^2$. In each other set one side is off by 1, so the equation fails (all four sets do form triangles).` }
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
      // Diagonal of a rectangle (was a twin of gb-q26's "legs a and b, find the hypotenuse")
      const t = [[3, 4, 5], [5, 12, 13], [8, 15, 17]][randInt(0, 2)]
      const k = randInt(1, 3); const a = t[0] * k; const b = t[1] * k; const c = t[2] * k
      const { options, correctIndex } = makeOptions(c, 2, 1, [a + b, 2 * (a + b)])
      return { id: this.id, category: this.category, question: `A rectangle is $${b}$ inches long and $${a}$ inches wide. What is the length, in inches, of a diagonal of the rectangle?`, options, correctIndex, explanation: `A diagonal splits the rectangle into two right triangles with legs $${a}$ and $${b}$: $\\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a * a + b * b}} = ${c}$.` }
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
      let x1 = 0, y1 = 0, x2 = 0, y2 = 0
      do { x1 = randInt(-6, 6); y1 = randInt(-6, 6); x2 = randInt(-6, 6); y2 = randInt(-6, 6) } while ((x2 === x1 && y2 === y1) || [x1, y1, x2, y2].includes(0))
      const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2
      const correct = `$(${mx}, ${my})$`
      return { id: this.id, category: this.category, question: `Find the midpoint of $(${x1}, ${y1})$ and $(${x2}, ${y2})$.`, ...makeStringOptions(correct, [`$(${x1}, ${y2})$`, `$(${x2}, ${y1})$`, `$(${mx + 1}, ${my - 1})$`, `$(${mx - 1}, ${my + 1})$`, `$(${mx + 2}, ${my})$`]), explanation: `Midpoint $= \\left(\\frac{${x1} + ${par(x2)}}{2}, \\frac{${y1} + ${par(y2)}}{2}\\right) = (${mx}, ${my})$.` }
    }
  },
  {
    id: 'gb-q35',
    category: 'Coordinate Geometry',
    difficulty: 'medium',
    generate() {
      const x1 = randInt(-5, 0); const y1 = randInt(-5, 5)
      const x2 = randInt(1, 5); let y2 = randInt(-5, 5)
      while (y2 === y1) y2 = randInt(-5, 5)
      const rise = y2 - y1; const run = x2 - x1
      const v = rise / run
      const correct = `$${fmtFrac(rise, run)}$`
      const candPairs: [number, number][] = [[-rise, run], [run, rise], [rise + run, run], [-run, rise], [rise - run, run], [rise, 2 * run], [2 * rise, run]]
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
      let m = 0
      while (m === 0) m = randInt(-4, 4)
      const b = randInt(-5, 5)
      let b2 = b
      while (b2 === b) b2 = randInt(-6, 6)
      const correct = 'Parallel lines'
      return { id: this.id, category: this.category, question: `Line 1 has equation $y = ${lineExpr(m, b)}$ and line 2 has equation $y = ${lineExpr(m, b2)}$. How are the two lines related?`, ...makeStringOptions(correct, ['Perpendicular', 'The same line', 'Crossing lines']), explanation: `Both lines have slope $${m}$ but different $y$-intercepts ($${b}$ and $${b2}$), so they never meet: they are parallel.` }
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
      return { id: this.id, category: this.category, question: `Find $y$ when $x = ${x}$ on the line $y = ${lineExpr(m, b)}$.`, options, correctIndex, explanation: `$y = ${m === 1 ? '' : m}(${x})${b === 0 ? '' : b > 0 ? ` + ${b}` : ` - ${-b}`} = ${y}$.` }
    }
  },
  {
    id: 'gb-q39',
    category: 'Coordinate Geometry',
    difficulty: 'hard',
    generate() {
      const m = randInt(1, 3) * (Math.random() < 0.5 ? -1 : 1); const x1 = randInt(-3, 3); const y1 = randInt(-3, 3)
      const b = y1 - m * x1
      const lineStr = (slope: number, intercept: number): string => `y = ${lineExpr(slope, intercept)}`
      const correct = `$${lineStr(m, b)}$`
      const d1 = `$${lineStr(-m, b)}$`
      const d2 = `$${lineStr(m, b === 0 ? randInt(2, 4) : -b)}$`
      const d3 = `$${lineStr(b === m || b === 0 ? m + 2 : b, m)}$`
      return { id: this.id, category: this.category, question: `Write the equation of the line through $(${x1}, ${y1})$ with slope $${m}$.`, ...makeStringOptions(correct, [d1, d2, d3, `$${lineStr(m, b + m)}$`, `$${lineStr(m, y1)}$`]), explanation: `$y - (${y1}) = ${m}(x - (${x1}))$, so $${lineStr(m, b)}$.` }
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
