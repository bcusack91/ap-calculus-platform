/**
 * Exit Quiz Question Pool — SAT Linear Inequalities & Graphs
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
    id: 'liq-q1',
    category: 'Slope-Intercept Inequalities',

    generate() {
      const m = randInt(1, 5)
      const b = randInt(-8, 8)
      const ops = ['<', '>', '\≤', '\≥']
      const op = ops[randInt(0, 3)]
      const correct = `y ${op} ${m}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}`
      return { id: this.id, category: this.category, question: `A line has slope ${m} and y-intercept ${b}. Which inequality represents all points on or below the line?`, ...makeStringOptions(correct, [`y > ${m}x + ${b}`, `y = ${m}x + ${b}`, `x ${op} ${m}y + ${b}`]), explanation: `The line equation is y = ${m}x + ${b}. Points below use y < or y \≤.` }
    }
  },
  {
    id: 'liq-q2',
    category: 'Slope-Intercept Inequalities',

    generate() {
      const m = randInt(-4, -1)
      const b = randInt(1, 10)
      const correct = `y > ${m}x + ${b}`
      return { id: this.id, category: this.category, question: `Which inequality represents the region above the line y = ${m}x + ${b}?`, ...makeStringOptions(correct, [`y < ${m}x + ${b}`, `y = ${m}x + ${b}`, `y \≤ ${m}x + ${b}`]), explanation: `The region above a line is represented by y > mx + b.` }
    }
  },
  {
    id: 'liq-q3',
    category: 'Slope-Intercept Inequalities',

    generate() {
      const m = randInt(1, 3)
      const b = randInt(-5, 5)
      const x = randInt(0, 6)
      const boundary = m * x + b
      const testY = boundary + randInt(1, 5)
      const correct = testY > boundary ? 'Above the line (satisfies y > mx + b)' : 'Below the line'
      return { id: this.id, category: this.category, question: `Does the point (${x}, ${testY}) satisfy y > ${m}x + ${b}? The boundary value at x = ${x} is ${boundary}.`, ...makeStringOptions(correct, ['Below the line', 'On the line exactly', 'Cannot be determined']), explanation: `At x = ${x}, mx + b = ${boundary}. Since ${testY} > ${boundary}, the point is above the line.` }
    }
  },
  {
    id: 'liq-q4',
    category: 'Slope-Intercept Inequalities',

    generate() {
      const m = randInt(1, 4)
      const b = randInt(-6, 6)
      const correct = 'Dashed (strict inequality excludes boundary)'
      return { id: this.id, category: this.category, question: `When graphing y < ${m}x + ${b}, what type of boundary line is used?`, ...makeStringOptions(correct, ['Solid line', 'Dotted then solid', 'No boundary line']), explanation: 'Strict inequalities (< or >) use dashed lines because points on the line are NOT included.' }
    }
  },
  {
    id: 'liq-q5',
    category: 'Slope-Intercept Inequalities',

    generate() {
      const m = randInt(1, 3)
      const b = randInt(1, 8)
      const correct = 'Solid (includes boundary points)'
      return { id: this.id, category: this.category, question: `When graphing y \≥ ${m}x + ${b}, what type of boundary line is used?`, ...makeStringOptions(correct, ['Dashed line', 'No boundary', 'Double line']), explanation: 'Non-strict inequalities (\≤ or \≥) use solid lines because boundary points ARE included.' }
    }
  },
  {
    id: 'liq-q6',
    category: 'Slope-Intercept Inequalities',

    generate() {
      const a = randInt(1, 4)
      const b = randInt(1, 6)
      const total = randInt(20, 50)
      const correct = `${a}x + ${b}y \≤ ${total}`
      return { id: this.id, category: this.category, question: `A store sells item A for $${a} and item B for $${b}. A customer has $${total}. Which inequality models the possible purchase combinations?`, ...makeStringOptions(correct, [`${a}x + ${b}y \≥ ${total}`, `${a}x + ${b}y = ${total}`, `${a}x - ${b}y \≤ ${total}`]), explanation: `Total cost ${a}x + ${b}y must not exceed budget ${total}, so we use \≤.` }
    }
  },
  {
    id: 'liq-q7',
    category: 'Slope-Intercept Inequalities',

    generate() {
      const m = randInt(2, 5)
      const b = randInt(-4, 4)
      const correct = `(0, ${b - 1})`
      return { id: this.id, category: this.category, question: `Which point is in the solution region of y < ${m}x + ${b}?`, ...makeStringOptions(correct, [`(0, ${b + 1})`, `(0, ${b})`, `(1, ${m + b + 2})`]), explanation: `At x = 0, the boundary is y = ${b}. Since ${b - 1} < ${b}, the point (0, ${b - 1}) satisfies y < ${m}x + ${b}.` }
    }
  },
  {
    id: 'liq-q8',
    category: 'Slope-Intercept Inequalities',

    generate() {
      const m = randInt(1, 3)
      const b = randInt(0, 5)
      const correct = 'The half-plane below the line, not including the line'
      return { id: this.id, category: this.category, question: `Describe the solution set of y < ${m}x + ${b}.`, ...makeStringOptions(correct, ['The half-plane above the line', 'Only points on the line', 'The entire coordinate plane']), explanation: 'y < mx + b represents all points strictly below the boundary line.' }
    }
  },
  {
    id: 'liq-q9',
    category: 'Systems of Inequalities',

    generate() {
      const m1 = randInt(1, 3); const b1 = randInt(0, 5)
      const m2 = randInt(-3, -1); const b2 = randInt(1, 8)
      const correct = 'The overlapping shaded region of both inequalities'
      return { id: this.id, category: this.category, question: `What does the solution set of y \≤ ${m1}x + ${b1} AND y \≥ ${m2}x + ${b2} represent?`, ...makeStringOptions(correct, ['The union of both regions', 'Only the boundary lines', 'No solution exists']), explanation: 'A system of inequalities is solved by the intersection (overlap) of the individual solution regions.' }
    }
  },
  {
    id: 'liq-q10',
    category: 'Systems of Inequalities',

    generate() {
      const a = randInt(2, 5); const b = randInt(2, 5); const c = randInt(20, 40)
      const correct = `${a}x + ${b}y \≤ ${c}, x \≥ 0, y \≥ 0`
      return { id: this.id, category: this.category, question: `A factory uses ${a} units of resource A and ${b} units of resource B per product. With ${c} total resource units and non-negative production, which system applies?`, ...makeStringOptions(correct, [`${a}x + ${b}y \≥ ${c}`, `${a}x + ${b}y = ${c}`, `${a}x - ${b}y \≤ ${c}`]), explanation: 'Resource constraints use \≤ with non-negativity constraints x \≥ 0, y \≥ 0.' }
    }
  },
  {
    id: 'liq-q11',
    category: 'Systems of Inequalities',

    generate() {
      const correct = 'Test the point in each inequality; it must satisfy ALL of them'
      return { id: this.id, category: this.category, question: 'How do you verify a point is in the solution set of a system of inequalities?', ...makeStringOptions(correct, ['Substitute into just one inequality', 'Check if the point is on any boundary', 'Plot it and estimate visually']), explanation: 'A point must satisfy every inequality in the system to be in the solution region.' }
    }
  },
  {
    id: 'liq-q12',
    category: 'Systems of Inequalities',

    generate() {
      const x = randInt(1, 5); const y = randInt(1, 5)
      const sum = x + y; const diff = x - y
      const satA = sum <= 10; const satB = diff >= 0
      const correct = (satA && satB) ? 'Yes, it satisfies both inequalities' : 'No, it fails at least one inequality'
      return { id: this.id, category: this.category, question: `Is (${x}, ${y}) in the solution set of x + y \≤ 10 AND x - y \≥ 0? Check: ${x}+${y}=${sum} and ${x}-${y}=${diff}.`, ...makeStringOptions(correct, ['Yes, it satisfies the first one only', 'No, it fails both', 'Cannot be determined from the given info']), explanation: `x + y = ${sum} ${satA ? '\≤' : '>'} 10 and x - y = ${diff} ${satB ? '\≥' : '<'} 0. Must satisfy both.` }
    }
  },
  {
    id: 'liq-q13',
    category: 'Systems of Inequalities',

    generate() {
      const correct = 'No solution — the shaded regions do not overlap'
      return { id: this.id, category: this.category, question: 'If the graphs of two linear inequalities have no overlapping shaded region, what is the solution?', ...makeStringOptions(correct, ['Infinite solutions', 'Exactly one solution', 'The union of both regions']), explanation: 'When shaded regions do not overlap, the system has no solution (empty intersection).' }
    }
  },
  {
    id: 'liq-q14',
    category: 'Systems of Inequalities',

    generate() {
      const c = randInt(5, 15)
      const correct = 'A triangular or polygonal region in the first quadrant'
      return { id: this.id, category: this.category, question: `Describe the shape of the solution region for: x \≥ 0, y \≥ 0, x + y \≤ ${c}.`, ...makeStringOptions(correct, ['A line segment', 'The entire first quadrant', 'A single point']), explanation: `These three inequalities form a triangle with vertices at (0,0), (${c},0), and (0,${c}).` }
    }
  },
  {
    id: 'liq-q15',
    category: 'Systems of Inequalities',

    generate() {
      const a = randInt(2, 6); const b = randInt(2, 6)
      const budget = a * 3 + b * 2 + randInt(5, 15)
      const correct = `(3, 2)`
      return { id: this.id, category: this.category, question: `Given ${a}x + ${b}y \≤ ${budget} and x \≥ 1, y \≥ 1, is (3, 2) a feasible point? Check: ${a}(3) + ${b}(2) = ${a*3 + b*2}.`, ...makeStringOptions(correct, [`(${Math.ceil(budget/a) + 1}, 1)`, '(0, 0)', `(${Math.ceil(budget/a)}, ${Math.ceil(budget/b)})`]), explanation: `${a}(3) + ${b}(2) = ${a*3+b*2} \≤ ${budget}, and 3 \≥ 1, 2 \≥ 1. All constraints satisfied.` }
    }
  },
  {
    id: 'liq-q16',
    category: 'Systems of Inequalities',

    generate() {
      const correct = 'At a vertex (corner point) of the feasible region'
      return { id: this.id, category: this.category, question: 'In linear programming, where does the optimal solution occur?', ...makeStringOptions(correct, ['At the center of the region', 'On any edge of the region', 'At the origin always']), explanation: 'The optimal value of a linear objective function occurs at a vertex of the feasible region (Corner Point Theorem).' }
    }
  },
  {
    id: 'liq-q17',
    category: 'Graphing Inequalities',

    generate() {
      const m = randInt(1, 4); const b = randInt(-5, 5)
      const correct = `Shade below the line y = ${m}x + ${b >= 0 ? b : '(' + b + ')'}`
      return { id: this.id, category: this.category, question: `To graph y < ${m}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}, after drawing a dashed line, where do you shade?`, ...makeStringOptions(correct, ['Shade above the line', 'Shade both sides', 'Do not shade']), explanation: 'For y < mx + b, shade the region below the boundary line.' }
    }
  },
  {
    id: 'liq-q18',
    category: 'Graphing Inequalities',

    generate() {
      const a = randInt(1, 4); const b = randInt(1, 4); const c = randInt(5, 20)
      const xInt = Math.round(c / a); const yInt = Math.round(c / b)
      const correct = `x-intercept: ${xInt}, y-intercept: ${yInt}`
      return { id: this.id, category: this.category, question: `Find the intercepts of the boundary line ${a}x + ${b}y = ${c}.`, ...makeStringOptions(correct, [`x-int: ${yInt}, y-int: ${xInt}`, `x-int: ${c}, y-int: ${c}`, `x-int: ${a}, y-int: ${b}`]), explanation: `Set y=0: x = ${c}/${a} \≈ ${xInt}. Set x=0: y = ${c}/${b} \≈ ${yInt}.` }
    }
  },
  {
    id: 'liq-q19',
    category: 'Graphing Inequalities',

    generate() {
      const correct = 'Test point (0, 0) — if it satisfies the inequality, shade toward origin; otherwise shade away'
      return { id: this.id, category: this.category, question: 'What is the test-point method for determining which side to shade?', ...makeStringOptions(correct, ['Always shade above the line', 'Always shade toward the origin', 'Shade the side with the larger area']), explanation: 'Substitute a test point (usually the origin) into the inequality. If true, shade that side; if false, shade the opposite side.' }
    }
  },
  {
    id: 'liq-q20',
    category: 'Graphing Inequalities',

    generate() {
      const m = randInt(1, 3); const b = randInt(1, 6)
      const correct = 'Solid boundary line with shading below/on the line'
      return { id: this.id, category: this.category, question: `How would you graph y \≤ ${m}x + ${b}?`, ...makeStringOptions(correct, ['Dashed line with shading above', 'Solid line with shading above', 'Dashed line with shading below']), explanation: '\≤ means solid line (boundary included) and shade below (y values less than or equal).' }
    }
  },
  {
    id: 'liq-q21',
    category: 'Graphing Inequalities',

    generate() {
      const k = randInt(1, 8)
      const correct = `A vertical line at x = ${k} with shading to the right`
      return { id: this.id, category: this.category, question: `How is x \≥ ${k} graphed on the coordinate plane?`, ...makeStringOptions(correct, ['A horizontal line with shading above', `A vertical line at x = ${k} with shading left`, 'A diagonal line']), explanation: `x \≥ ${k} is a vertical solid line at x = ${k} with shading to the right (larger x values).` }
    }
  },
  {
    id: 'liq-q22',
    category: 'Graphing Inequalities',

    generate() {
      const k = randInt(-5, -1)
      const correct = `y > ${k}: horizontal dashed line, shade above`
      return { id: this.id, category: this.category, question: `Describe the graph of y > ${k}.`, ...makeStringOptions(correct, [`y > ${k}: horizontal solid line, shade below`, `y > ${k}: vertical line, shade right`, `No graph possible for constant inequality`]), explanation: `y > ${k} is a horizontal dashed line at y = ${k} with shading above.` }
    }
  },
  {
    id: 'liq-q23',
    category: 'Graphing Inequalities',

    generate() {
      const m = randInt(-3, -1); const b = randInt(2, 8)
      const correct = 'The slope is negative, so the line goes down from left to right'
      return { id: this.id, category: this.category, question: `When graphing y \≥ ${m}x + ${b}, describe the boundary line direction.`, ...makeStringOptions(correct, ['The line goes up from left to right', 'The line is horizontal', 'The line is vertical']), explanation: `A negative slope (m = ${m}) means the line descends from left to right.` }
    }
  },
  {
    id: 'liq-q24',
    category: 'Graphing Inequalities',

    generate() {
      const m = randInt(1, 3); const b = randInt(0, 4)
      const correct = 'The y-intercept is where the boundary line crosses the y-axis'
      return { id: this.id, category: this.category, question: `In y < ${m}x + ${b}, what role does ${b} play in the graph?`, ...makeStringOptions(correct, ['It determines the shading direction', 'It sets the slope', 'It determines line type (solid vs dashed)']), explanation: `The constant ${b} is the y-intercept — the point (0, ${b}) where the boundary line crosses the y-axis.` }
    }
  },
  {
    id: 'liq-q25',
    category: 'Absolute Value Inequalities',

    generate() {
      const a = randInt(2, 8)
      const correct = `x > ${a} or x < -${a}`
      return { id: this.id, category: this.category, question: `Solve |x| > ${a}.`, ...makeStringOptions(correct, [`-${a} < x < ${a}`, `x = ${a}`, `x > ${a}`]), explanation: `|x| > ${a} splits into x > ${a} OR x < -${a} (values far from zero).` }
    }
  },
  {
    id: 'liq-q26',
    category: 'Absolute Value Inequalities',

    generate() {
      const a = randInt(2, 7)
      const correct = `-${a} \≤ x \≤ ${a}`
      return { id: this.id, category: this.category, question: `Solve |x| \≤ ${a}.`, ...makeStringOptions(correct, [`x \≤ -${a} or x \≥ ${a}`, `x = ${a}`, `x > -${a}`]), explanation: `|x| \≤ ${a} means -${a} \≤ x \≤ ${a} (values close to zero).` }
    }
  },
  {
    id: 'liq-q27',
    category: 'Absolute Value Inequalities',

    generate() {
      const h = randInt(-5, 5); const k = randInt(2, 8)
      const lo = h - k; const hi = h + k
      const correct = `${lo} < x < ${hi}`
      return { id: this.id, category: this.category, question: `Solve |x - ${h}| < ${k}.`, ...makeStringOptions(correct, [`x < ${lo} or x > ${hi}`, `x = ${h}`, `${lo} \≤ x \≤ ${hi}`]), explanation: `|x - ${h}| < ${k} means ${h} - ${k} < x < ${h} + ${k}, so ${lo} < x < ${hi}.` }
    }
  },
  {
    id: 'liq-q28',
    category: 'Absolute Value Inequalities',

    generate() {
      const h = randInt(0, 5); const k = randInt(2, 6)
      const lo = h - k; const hi = h + k
      const correct = `x < ${lo} or x > ${hi}`
      return { id: this.id, category: this.category, question: `Solve |x - ${h}| > ${k}.`, ...makeStringOptions(correct, [`${lo} < x < ${hi}`, `x = ${lo} or x = ${hi}`, `x \≥ ${lo}`]), explanation: `|x - ${h}| > ${k} means x < ${h} - ${k} or x > ${h} + ${k}, so x < ${lo} or x > ${hi}.` }
    }
  },
  {
    id: 'liq-q29',
    category: 'Absolute Value Inequalities',

    generate() {
      const a = randInt(2, 5); const h = randInt(1, 6); const k = randInt(3, 10)
      const lo = h - Math.floor(k/a); const hi = h + Math.floor(k/a)
      const correct = `${lo} \≤ x \≤ ${hi}`
      return { id: this.id, category: this.category, question: `Solve ${a}|x - ${h}| \≤ ${k}. First divide: |x - ${h}| \≤ ${Math.floor(k/a)}.`, ...makeStringOptions(correct, [`x < ${lo} or x > ${hi}`, `x = ${h}`, `x \≥ ${lo}`]), explanation: `Divide by ${a}: |x - ${h}| \≤ ${Math.floor(k/a)}, so ${h} - ${Math.floor(k/a)} \≤ x \≤ ${h} + ${Math.floor(k/a)}.` }
    }
  },
  {
    id: 'liq-q30',
    category: 'Absolute Value Inequalities',

    generate() {
      const correct = 'No solution — absolute value is always non-negative'
      return { id: this.id, category: this.category, question: 'What is the solution to |x + 3| < -2?', ...makeStringOptions(correct, ['x > -5 and x < -1', 'x = -3', 'All real numbers']), explanation: 'Absolute value is always \≥ 0, so it can never be less than a negative number. No solution.' }
    }
  },
  {
    id: 'liq-q31',
    category: 'Absolute Value Inequalities',

    generate() {
      const correct = 'All real numbers — absolute value is always \≥ 0'
      return { id: this.id, category: this.category, question: 'What is the solution to |2x - 1| \≥ -5?', ...makeStringOptions(correct, ['No solution', 'x = 1/2 only', 'x > -5']), explanation: 'Since |2x - 1| \≥ 0 > -5 for all x, every real number is a solution.' }
    }
  },
  {
    id: 'liq-q32',
    category: 'Absolute Value Inequalities',

    generate() {
      const h = randInt(1, 5); const k = randInt(1, 5)
      const correct = `A V-shape with vertex at (${h}, 0), shaded below y = ${k}`
      return { id: this.id, category: this.category, question: `Describe the graph of |x - ${h}| < ${k} on a number line.`, ...makeStringOptions(correct, ['Two separate rays', 'A single point', 'The entire number line']), explanation: `|x - ${h}| < ${k} represents an open interval centered at ${h} with radius ${k}: (${h-k}, ${h+k}).` }
    }
  },
  {
    id: 'liq-q33',
    category: 'Word Problems',

    generate() {
      const rate = randInt(10, 25); const max = randInt(200, 500)
      const hours = Math.floor(max / rate)
      const correct = `h \≤ ${hours}`
      return { id: this.id, category: this.category, question: `A worker earns $${rate}/hour and needs at most $${max}. Which inequality represents hours h?`, ...makeStringOptions(correct, [`h \≥ ${hours}`, `h = ${hours}`, `h > ${hours}`]), explanation: `${rate}h \≤ ${max}, so h \≤ ${max}/${rate} = ${hours}.` }
    }
  },
  {
    id: 'liq-q34',
    category: 'Word Problems',

    generate() {
      const min = randInt(60, 80); const current = randInt(50, 75); const tests = randInt(2, 4)
      const needed = min * tests - current * (tests - 1)
      const correct = `x \≥ ${needed}`
      return { id: this.id, category: this.category, question: `Average of ${tests} tests must be \≥ ${min}. With ${tests-1} test(s) averaging ${current}, what score x is needed on the last test?`, ...makeStringOptions(correct, [`x \≤ ${needed}`, `x = ${needed}`, `x > ${min}`]), explanation: `Need sum \≥ ${min * tests}. Have ${current * (tests-1)}. Need x \≥ ${needed}.` }
    }
  },
  {
    id: 'liq-q35',
    category: 'Word Problems',

    generate() {
      const base = randInt(30, 50); const perItem = randInt(2, 8); const budget = randInt(80, 150)
      const items = Math.floor((budget - base) / perItem)
      const correct = `At most ${items} items`
      return { id: this.id, category: this.category, question: `A phone plan costs $${base}/month plus $${perItem}/item. Budget is $${budget}/month. How many items can be purchased?`, ...makeStringOptions(correct, [`Exactly ${items} items`, `At least ${items + 2} items`, `${items + 3} items`]), explanation: `${base} + ${perItem}n \≤ ${budget}, so ${perItem}n \≤ ${budget - base}, n \≤ ${items}.` }
    }
  },
  {
    id: 'liq-q36',
    category: 'Word Problems',

    generate() {
      const length = randInt(10, 20)
      const maxP = randInt(60, 100)
      const maxW = Math.floor((maxP - 2 * length) / 2)
      const correct = `w \≤ ${maxW}`
      return { id: this.id, category: this.category, question: `A rectangle has length ${length} and perimeter at most ${maxP}. What is the constraint on width w?`, ...makeStringOptions(correct, [`w \≥ ${maxW}`, `w = ${maxW}`, `w < ${length}`]), explanation: `P = 2(${length}) + 2w \≤ ${maxP}, so 2w \≤ ${maxP - 2*length}, w \≤ ${maxW}.` }
    }
  },
  {
    id: 'liq-q37',
    category: 'Word Problems',

    generate() {
      const speed1 = randInt(40, 60); const speed2 = randInt(50, 70)
      const minDist = randInt(200, 400)
      const correct = `${speed1}t + ${speed2}t \≥ ${minDist}`
      return { id: this.id, category: this.category, question: `Two cars travel in the same direction at ${speed1} mph and ${speed2} mph. After how many hours t will they be at least ${minDist} miles apart? Write the inequality.`, ...makeStringOptions(correct, [`${speed1}t - ${speed2}t \≥ ${minDist}`, `${speed1} + ${speed2} > ${minDist}`, `t \≥ ${minDist}`]), explanation: `Combined distance = (${speed1} + ${speed2})t. Need (${speed1 + speed2})t \≥ ${minDist}.` }
    }
  },
  {
    id: 'liq-q38',
    category: 'Word Problems',

    generate() {
      const correct = 'Identify the variable, set up the inequality from constraints, solve, and check the direction'
      return { id: this.id, category: this.category, question: 'What is the general strategy for solving inequality word problems?', ...makeStringOptions(correct, ['Guess and check with numbers', 'Always use equations instead', 'Multiply everything by -1 first']), explanation: 'Define variables, translate word constraints into mathematical inequalities, solve algebraically, and verify the inequality direction matches the context.' }
    }
  },
  {
    id: 'liq-q39',
    category: 'Word Problems',

    generate() {
      const n = randInt(3, 6); const perAdult = randInt(12, 20); const perChild = randInt(6, 10)
      const budget = randInt(50, 100)
      const correct = `${perAdult}a + ${perChild}c \≤ ${budget} where a + c = ${n}`
      return { id: this.id, category: this.category, question: `A group of ${n} people (adults $${perAdult}, children $${perChild}) has $${budget}. Write the system constraint.`, ...makeStringOptions(correct, [`${perAdult}a + ${perChild}c \≥ ${budget}`, `${perAdult}a - ${perChild}c \≤ ${budget}`, `a + c \≤ ${budget}`]), explanation: `Total people: a + c = ${n}. Budget constraint: ${perAdult}a + ${perChild}c \≤ ${budget}.` }
    }
  },
  {
    id: 'liq-q40',
    category: 'Word Problems',

    generate() {
      const minGrade = randInt(70, 85); const n = randInt(4, 6)
      const needed = minGrade * n
      const correct = `The sum of all ${n} scores must be \≥ ${needed}`
      return { id: this.id, category: this.category, question: `To earn at least a ${minGrade} average across ${n} assignments, what must the total points be?`, ...makeStringOptions(correct, [`Each score must be exactly ${minGrade}`, `At least one score \≥ ${minGrade}`, `Total must equal ${needed}`]), explanation: `Average = total/${n} \≥ ${minGrade}, so total \≥ ${minGrade} \× ${n} = ${needed}.` }
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
