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
}

interface QuestionTemplate {
  id: string
  category: string
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
  {
    id: 'gb-q1',
    category: 'Angles',

    generate() {
      const a = randInt(30, 80)
      const comp = 90 - a
      const { options, correctIndex } = makeOptions(comp, 10)
      return { id: this.id, category: this.category, question: `Two complementary angles measure ${a}\\u00b0 and x\\u00b0. Find x.`, options, correctIndex, explanation: `Complementary angles sum to 90\\u00b0. x = 90 - ${a} = ${comp}\\u00b0.` }
    }
  },
  {
    id: 'gb-q2',
    category: 'Angles',

    generate() {
      const a = randInt(50, 140)
      const supp = 180 - a
      const { options, correctIndex } = makeOptions(supp, 15)
      return { id: this.id, category: this.category, question: `Find the supplement of a ${a}\\u00b0 angle.`, options, correctIndex, explanation: `Supplementary angles sum to 180\\u00b0. Supplement = 180 - ${a} = ${supp}\\u00b0.` }
    }
  },
  {
    id: 'gb-q3',
    category: 'Angles',

    generate() {
      const a = randInt(40, 70)
      const vert = a
      const { options, correctIndex } = makeOptions(vert, 10)
      return { id: this.id, category: this.category, question: `Two lines intersect forming a ${a}\\u00b0 angle. What is the measure of the vertical angle?`, options, correctIndex, explanation: `Vertical angles are equal. The vertical angle = ${a}\\u00b0.` }
    }
  },
  {
    id: 'gb-q4',
    category: 'Angles',

    generate() {
      const a = randInt(30, 80); const b = randInt(30, 80)
      const c = 180 - a - b
      const { options, correctIndex } = makeOptions(c, 10)
      return { id: this.id, category: this.category, question: `A triangle has angles ${a}\\u00b0 and ${b}\\u00b0. Find the third angle.`, options, correctIndex, explanation: `Triangle angle sum = 180\\u00b0. Third = 180 - ${a} - ${b} = ${c}\\u00b0.` }
    }
  },
  {
    id: 'gb-q5',
    category: 'Angles',

    generate() {
      const ext = randInt(90, 150)
      const int = 180 - ext
      const { options, correctIndex } = makeOptions(int, 10)
      return { id: this.id, category: this.category, question: `An exterior angle of a triangle is ${ext}\\u00b0. What is its adjacent interior angle?`, options, correctIndex, explanation: `An exterior angle and its adjacent interior angle are supplementary: ${180} - ${ext} = ${int}\\u00b0.` }
    }
  },
  {
    id: 'gb-q6',
    category: 'Angles',

    generate() {
      const a = randInt(40, 70)
      const alt = a
      const { options, correctIndex } = makeOptions(alt, 8)
      return { id: this.id, category: this.category, question: `Parallel lines cut by a transversal create an angle of ${a}\\u00b0. What is the alternate interior angle?`, options, correctIndex, explanation: `Alternate interior angles are equal when lines are parallel: ${alt}\\u00b0.` }
    }
  },
  {
    id: 'gb-q7',
    category: 'Angles',

    generate() {
      const a = randInt(40, 80)
      const co = a
      const { options, correctIndex } = makeOptions(co, 8)
      return { id: this.id, category: this.category, question: `A transversal crosses parallel lines creating a ${a}\\u00b0 angle. What is the corresponding angle on the other parallel line?`, options, correctIndex, explanation: `Corresponding angles are equal: ${co}\\u00b0.` }
    }
  },
  {
    id: 'gb-q8',
    category: 'Angles',

    generate() {
      const n = randInt(5, 8)
      const sum = (n - 2) * 180
      const { options, correctIndex } = makeOptions(sum, 90)
      return { id: this.id, category: this.category, question: `What is the sum of interior angles of a regular ${n}-sided polygon?`, options, correctIndex, explanation: `Sum = (n - 2) \\u00d7 180 = (${n} - 2) \\u00d7 180 = ${sum}\\u00b0.` }
    }
  },
  {
    id: 'gb-q9',
    category: 'Area & Perimeter',

    generate() {
      const l = randInt(5, 15); const w = randInt(3, 12)
      const area = l * w
      const { options, correctIndex } = makeOptions(area, 10)
      return { id: this.id, category: this.category, question: `Find the area of a rectangle with length ${l} and width ${w}.`, options, correctIndex, explanation: `Area = l \\u00d7 w = ${l} \\u00d7 ${w} = ${area}.` }
    }
  },
  {
    id: 'gb-q10',
    category: 'Area & Perimeter',

    generate() {
      const l = randInt(5, 15); const w = randInt(3, 12)
      const p = 2 * (l + w)
      const { options, correctIndex } = makeOptions(p, 8)
      return { id: this.id, category: this.category, question: `Find the perimeter of a rectangle with length ${l} and width ${w}.`, options, correctIndex, explanation: `Perimeter = 2(l + w) = 2(${l} + ${w}) = ${p}.` }
    }
  },
  {
    id: 'gb-q11',
    category: 'Area & Perimeter',

    generate() {
      const b = randInt(4, 14); const h = randInt(3, 10)
      const area = Math.round(b * h / 2)
      const { options, correctIndex } = makeOptions(area, 8)
      return { id: this.id, category: this.category, question: `Find the area of a triangle with base ${b} and height ${h}.`, options, correctIndex, explanation: `Area = (1/2)bh = (1/2)(${b})(${h}) = ${area}.` }
    }
  },
  {
    id: 'gb-q12',
    category: 'Area & Perimeter',

    generate() {
      const a = randInt(3, 8); const b = randInt(5, 12); const h = randInt(3, 8)
      const area = Math.round((a + b) * h / 2)
      const { options, correctIndex } = makeOptions(area, 10)
      return { id: this.id, category: this.category, question: `Find the area of a trapezoid with parallel sides ${a} and ${b}, height ${h}.`, options, correctIndex, explanation: `Area = (1/2)(a + b)h = (1/2)(${a} + ${b})(${h}) = ${area}.` }
    }
  },
  {
    id: 'gb-q13',
    category: 'Area & Perimeter',

    generate() {
      const r = randInt(2, 10)
      const area = Math.round(Math.PI * r * r)
      const { options, correctIndex } = makeOptions(area, 15)
      return { id: this.id, category: this.category, question: `Find the area of a circle with radius ${r} (round to nearest integer).`, options, correctIndex, explanation: `Area = \\u03c0r\\u00b2 = \\u03c0(${r})\\u00b2 \\u2248 ${area}.` }
    }
  },
  {
    id: 'gb-q14',
    category: 'Area & Perimeter',

    generate() {
      const r = randInt(2, 10)
      const circ = Math.round(2 * Math.PI * r)
      const { options, correctIndex } = makeOptions(circ, 10)
      return { id: this.id, category: this.category, question: `Find the circumference of a circle with radius ${r} (round to nearest integer).`, options, correctIndex, explanation: `C = 2\\u03c0r = 2\\u03c0(${r}) \\u2248 ${circ}.` }
    }
  },
  {
    id: 'gb-q15',
    category: 'Area & Perimeter',

    generate() {
      const s = randInt(3, 10)
      const area = s * s
      const { options, correctIndex } = makeOptions(area, 8)
      return { id: this.id, category: this.category, question: `Find the area of a square with side length ${s}.`, options, correctIndex, explanation: `Area = s\\u00b2 = ${s}\\u00b2 = ${area}.` }
    }
  },
  {
    id: 'gb-q16',
    category: 'Area & Perimeter',

    generate() {
      const s = randInt(3, 10)
      const p = 4 * s
      const { options, correctIndex } = makeOptions(p, 6)
      return { id: this.id, category: this.category, question: `Find the perimeter of a square with side length ${s}.`, options, correctIndex, explanation: `Perimeter = 4s = 4(${s}) = ${p}.` }
    }
  },
  {
    id: 'gb-q17',
    category: 'Volume & Surface Area',

    generate() {
      const l = randInt(2, 8); const w = randInt(2, 8); const h = randInt(2, 8)
      const vol = l * w * h
      const { options, correctIndex } = makeOptions(vol, 30)
      return { id: this.id, category: this.category, question: `Find the volume of a rectangular prism with dimensions ${l} \\u00d7 ${w} \\u00d7 ${h}.`, options, correctIndex, explanation: `V = lwh = ${l} \\u00d7 ${w} \\u00d7 ${h} = ${vol}.` }
    }
  },
  {
    id: 'gb-q18',
    category: 'Volume & Surface Area',

    generate() {
      const r = randInt(2, 6); const h = randInt(3, 10)
      const vol = Math.round(Math.PI * r * r * h)
      const { options, correctIndex } = makeOptions(vol, 40)
      return { id: this.id, category: this.category, question: `Find the volume of a cylinder with radius ${r} and height ${h} (round to nearest integer).`, options, correctIndex, explanation: `V = \\u03c0r\\u00b2h = \\u03c0(${r})\\u00b2(${h}) \\u2248 ${vol}.` }
    }
  },
  {
    id: 'gb-q19',
    category: 'Volume & Surface Area',

    generate() {
      const r = randInt(2, 6); const h = randInt(3, 10)
      const vol = Math.round(Math.PI * r * r * h / 3)
      const { options, correctIndex } = makeOptions(vol, 30)
      return { id: this.id, category: this.category, question: `Find the volume of a cone with radius ${r} and height ${h} (round to nearest integer).`, options, correctIndex, explanation: `V = (1/3)\\u03c0r\\u00b2h = (1/3)\\u03c0(${r})\\u00b2(${h}) \\u2248 ${vol}.` }
    }
  },
  {
    id: 'gb-q20',
    category: 'Volume & Surface Area',

    generate() {
      const r = randInt(2, 8)
      const vol = Math.round(4/3 * Math.PI * r * r * r)
      const { options, correctIndex } = makeOptions(vol, 50)
      return { id: this.id, category: this.category, question: `Find the volume of a sphere with radius ${r} (round to nearest integer).`, options, correctIndex, explanation: `V = (4/3)\\u03c0r\\u00b3 = (4/3)\\u03c0(${r})\\u00b3 \\u2248 ${vol}.` }
    }
  },
  {
    id: 'gb-q21',
    category: 'Volume & Surface Area',

    generate() {
      const l = randInt(3, 8); const w = randInt(3, 8); const h = randInt(3, 8)
      const sa = 2 * (l*w + l*h + w*h)
      const { options, correctIndex } = makeOptions(sa, 20)
      return { id: this.id, category: this.category, question: `Find the surface area of a rectangular prism ${l} \\u00d7 ${w} \\u00d7 ${h}.`, options, correctIndex, explanation: `SA = 2(lw + lh + wh) = 2(${l*w} + ${l*h} + ${w*h}) = ${sa}.` }
    }
  },
  {
    id: 'gb-q22',
    category: 'Volume & Surface Area',

    generate() {
      const s = randInt(2, 8)
      const vol = s * s * s
      const { options, correctIndex } = makeOptions(vol, 30)
      return { id: this.id, category: this.category, question: `Find the volume of a cube with edge length ${s}.`, options, correctIndex, explanation: `V = s\\u00b3 = ${s}\\u00b3 = ${vol}.` }
    }
  },
  {
    id: 'gb-q23',
    category: 'Volume & Surface Area',

    generate() {
      const s = randInt(2, 8)
      const sa = 6 * s * s
      const { options, correctIndex } = makeOptions(sa, 20)
      return { id: this.id, category: this.category, question: `Find the surface area of a cube with edge length ${s}.`, options, correctIndex, explanation: `SA = 6s\\u00b2 = 6(${s})\\u00b2 = ${sa}.` }
    }
  },
  {
    id: 'gb-q24',
    category: 'Volume & Surface Area',

    generate() {
      const r = randInt(2, 6)
      const sa = Math.round(4 * Math.PI * r * r)
      const { options, correctIndex } = makeOptions(sa, 30)
      return { id: this.id, category: this.category, question: `Find the surface area of a sphere with radius ${r} (round to nearest integer).`, options, correctIndex, explanation: `SA = 4\\u03c0r\\u00b2 = 4\\u03c0(${r})\\u00b2 \\u2248 ${sa}.` }
    }
  },
  {
    id: 'gb-q25',
    category: 'Pythagorean Theorem',

    generate() {
      const a = randInt(3, 12); const b = randInt(4, 12)
      const cSq = a*a + b*b; const c = Math.round(Math.sqrt(cSq) * 10) / 10
      const correct = `c \\u2248 ${c}`
      return { id: this.id, category: this.category, question: `A right triangle has legs ${a} and ${b}. Find the hypotenuse c.`, ...makeStringOptions(correct, [`c = ${a + b}`, `c = ${Math.abs(a - b)}`, `c = ${Math.round(c) + 2}`]), explanation: `c = \\u221a(${a}\\u00b2 + ${b}\\u00b2) = \\u221a(${cSq}) \\u2248 ${c}.` }
    }
  },
  {
    id: 'gb-q26',
    category: 'Pythagorean Theorem',

    generate() {
      const triples = [[3,4,5],[5,12,13],[8,15,17],[7,24,25]]
      const [a,b,c] = triples[randInt(0, triples.length - 1)]
      const { options, correctIndex } = makeOptions(c, 3)
      return { id: this.id, category: this.category, question: `A right triangle has legs ${a} and ${b}. Find the hypotenuse.`, options, correctIndex, explanation: `${a}\\u00b2 + ${b}\\u00b2 = ${a*a} + ${b*b} = ${c*c} = ${c}\\u00b2.` }
    }
  },
  {
    id: 'gb-q27',
    category: 'Pythagorean Theorem',

    generate() {
      const triples = [[3,4,5],[5,12,13],[8,15,17]]
      const [a,b,c] = triples[randInt(0, triples.length - 1)]
      const { options, correctIndex } = makeOptions(a, 3)
      return { id: this.id, category: this.category, question: `A right triangle has hypotenuse ${c} and one leg ${b}. Find the other leg.`, options, correctIndex, explanation: `a = \\u221a(${c}\\u00b2 - ${b}\\u00b2) = \\u221a(${c*c} - ${b*b}) = \\u221a${c*c - b*b} = ${a}.` }
    }
  },
  {
    id: 'gb-q28',
    category: 'Pythagorean Theorem',

    generate() {
      const d = randInt(5, 15)
      const diag = Math.round(d * Math.sqrt(2) * 10) / 10
      const correct = `\\u2248 ${diag}`
      return { id: this.id, category: this.category, question: `A square has side length ${d}. Find the diagonal length.`, ...makeStringOptions(correct, [`${d * 2}`, `${d}`, `${d + 1}`]), explanation: `Diagonal = s\\u221a2 = ${d}\\u221a2 \\u2248 ${diag}.` }
    }
  },
  {
    id: 'gb-q29',
    category: 'Pythagorean Theorem',

    generate() {
      const correct = '3-4-5, 5-12-13, 8-15-17, 7-24-25'
      return { id: this.id, category: this.category, question: 'List four common Pythagorean triples.', ...makeStringOptions(correct, ['2-3-4, 5-6-7', '1-2-3, 4-5-6', '3-5-7, 4-6-8']), explanation: 'Common Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (and their multiples).' }
    }
  },
  {
    id: 'gb-q30',
    category: 'Pythagorean Theorem',

    generate() {
      const a = randInt(3, 8); const b = randInt(3, 8); const c = randInt(10, 15)
      const isRight = a*a + b*b === c*c
      const correct = isRight ? 'Yes, it is a right triangle' : 'No, it is not a right triangle'
      return { id: this.id, category: this.category, question: `Do sides ${a}, ${b}, ${c} form a right triangle? Check: ${a}\\u00b2 + ${b}\\u00b2 = ${a*a+b*b}, ${c}\\u00b2 = ${c*c}.`, ...makeStringOptions(correct, [isRight ? 'No' : 'Yes', 'Only if angles are given', 'Cannot determine']), explanation: `${a}\\u00b2 + ${b}\\u00b2 = ${a*a + b*b} ${isRight ? '=' : '\\u2260'} ${c*c} = ${c}\\u00b2. ${isRight ? 'Equal, so right triangle.' : 'Not equal, not a right triangle.'}` }
    }
  },
  {
    id: 'gb-q31',
    category: 'Pythagorean Theorem',

    generate() {
      const h = randInt(10, 30); const d = randInt(5, 15)
      const ladder = Math.round(Math.sqrt(h*h + d*d) * 10) / 10
      const correct = `\\u2248 ${ladder} ft`
      return { id: this.id, category: this.category, question: `A ladder reaches ${h} ft up a wall. Its base is ${d} ft from the wall. How long is the ladder?`, ...makeStringOptions(correct, [`${h + d} ft`, `${h} ft`, `${h - d} ft`]), explanation: `Ladder = \\u221a(${h}\\u00b2 + ${d}\\u00b2) = \\u221a(${h*h + d*d}) \\u2248 ${ladder} ft.` }
    }
  },
  {
    id: 'gb-q32',
    category: 'Pythagorean Theorem',

    generate() {
      const k = randInt(2, 4); const a = 3*k; const b = 4*k; const c = 5*k
      const { options, correctIndex } = makeOptions(c, 5)
      return { id: this.id, category: this.category, question: `A right triangle has legs ${a} and ${b}. Find the hypotenuse.`, options, correctIndex, explanation: `This is a ${k}x multiple of the 3-4-5 triple: ${a}-${b}-${c}.` }
    }
  },
  {
    id: 'gb-q33',
    category: 'Coordinate Geometry',

    generate() {
      const x1 = randInt(-5, 5); const y1 = randInt(-5, 5)
      const x2 = randInt(-5, 5); const y2 = randInt(-5, 5)
      const dx = x2 - x1; const dy = y2 - y1
      const dist = Math.round(Math.sqrt(dx*dx + dy*dy) * 10) / 10
      const correct = `\\u2248 ${dist}`
      return { id: this.id, category: this.category, question: `Find the distance between (${x1}, ${y1}) and (${x2}, ${y2}).`, ...makeStringOptions(correct, [`${Math.abs(dx) + Math.abs(dy)}`, `${dist + 2}`, `${Math.abs(dist - 3)}`]), explanation: `d = \\u221a((${dx})\\u00b2 + (${dy})\\u00b2) = \\u221a(${dx*dx + dy*dy}) \\u2248 ${dist}.` }
    }
  },
  {
    id: 'gb-q34',
    category: 'Coordinate Geometry',

    generate() {
      const x1 = randInt(-6, 6); const y1 = randInt(-6, 6)
      const x2 = randInt(-6, 6); const y2 = randInt(-6, 6)
      const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2
      const correct = `(${mx}, ${my})`
      return { id: this.id, category: this.category, question: `Find the midpoint of (${x1}, ${y1}) and (${x2}, ${y2}).`, ...makeStringOptions(correct, [`(${x1}, ${y2})`, `(${x2}, ${y1})`, `(${mx + 1}, ${my - 1})`]), explanation: `Midpoint = ((${x1}+${x2})/2, (${y1}+${y2})/2) = (${mx}, ${my}).` }
    }
  },
  {
    id: 'gb-q35',
    category: 'Coordinate Geometry',

    generate() {
      const x1 = randInt(-5, 0); const y1 = randInt(-5, 0)
      const x2 = randInt(1, 5); const y2 = randInt(1, 5)
      const rise = y2 - y1; const run = x2 - x1
      const slope = Math.round(rise/run * 100) / 100
      const correct = `${slope}`
      return { id: this.id, category: this.category, question: `Find the slope between (${x1}, ${y1}) and (${x2}, ${y2}).`, ...makeStringOptions(correct, [`${-slope}`, `${Math.round(run/rise * 100)/100}`, `${slope + 1}`]), explanation: `Slope = (${y2} - ${y1})/(${x2} - ${x1}) = ${rise}/${run} = ${slope}.` }
    }
  },
  {
    id: 'gb-q36',
    category: 'Coordinate Geometry',

    generate() {
      const m = randInt(1, 4)
      const perpM = `-1/${m}`
      const correct = perpM
      return { id: this.id, category: this.category, question: `A line has slope ${m}. What is the slope of a perpendicular line?`, ...makeStringOptions(correct, [`${m}`, `${-m}`, `1/${m}`]), explanation: `Perpendicular slopes are negative reciprocals: -1/${m}.` }
    }
  },
  {
    id: 'gb-q37',
    category: 'Coordinate Geometry',

    generate() {
      const m = randInt(-3, 3); const b = randInt(-5, 5)
      const correct = `Parallel (same slope ${m})`
      return { id: this.id, category: this.category, question: `Line 1: y = ${m}x + ${b}. Line 2: y = ${m}x + ${b + randInt(1, 5)}. What relationship?`, ...makeStringOptions(correct, ['Perpendicular', 'Intersecting', 'Identical']), explanation: `Both lines have slope ${m} but different y-intercepts, so they are parallel.` }
    }
  },
  {
    id: 'gb-q38',
    category: 'Coordinate Geometry',

    generate() {
      const m = randInt(1, 4); const b = randInt(-5, 5); const x = randInt(-3, 3)
      const y = m * x + b
      const { options, correctIndex } = makeOptions(y, 5)
      return { id: this.id, category: this.category, question: `Find y when x = ${x} on the line y = ${m}x + ${b}.`, options, correctIndex, explanation: `y = ${m}(${x}) + ${b} = ${m*x} + ${b} = ${y}.` }
    }
  },
  {
    id: 'gb-q39',
    category: 'Coordinate Geometry',

    generate() {
      const m = randInt(1, 3); const x1 = randInt(-3, 3); const y1 = randInt(-3, 3)
      const b = y1 - m * x1
      const correct = `y = ${m}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}`
      return { id: this.id, category: this.category, question: `Write the equation of the line through (${x1}, ${y1}) with slope ${m}.`, ...makeStringOptions(correct, [`y = ${-m}x + ${b}`, `y = ${m}x + ${-b}`, `y = ${b}x + ${m}`]), explanation: `y - ${y1} = ${m}(x - ${x1}), so y = ${m}x + ${b}.` }
    }
  },
  {
    id: 'gb-q40',
    category: 'Coordinate Geometry',

    generate() {
      const h = randInt(-4, 4); const k = randInt(-4, 4); const r = randInt(2, 6)
      const correct = `(x - ${h})\\u00b2 + (y - ${k})\\u00b2 = ${r*r}`
      return { id: this.id, category: this.category, question: `Write the equation of a circle centered at (${h}, ${k}) with radius ${r}.`, ...makeStringOptions(correct, [`(x + ${h})\\u00b2 + (y + ${k})\\u00b2 = ${r}`, `x\\u00b2 + y\\u00b2 = ${r*r}`, `(x - ${h})\\u00b2 + (y - ${k})\\u00b2 = ${r}`]), explanation: `Circle equation: (x - h)\\u00b2 + (y - k)\\u00b2 = r\\u00b2 = ${r*r}.` }
    }
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of questionPool) {
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
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  for (const q of shuffle(remaining)) {
    if (selected.length >= count) break
    selected.push(q)
    usedIds.add(q.id)
  }
  return shuffle(selected).map(t => t.generate())
}
