#!/usr/bin/env python3
"""Generate SAT exit quiz files for remaining math topics."""
import os

BASE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'exit-quizzes')

HEADER = '''/**
 * Exit Quiz Question Pool — SAT {title}
 * 40 questions with randomized numeric generation.
 */

export interface ExitQuizQuestion {{
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  category: string
}}

interface QuestionTemplate {{
  id: string
  category: string
  generate: () => ExitQuizQuestion
}}

function randInt(min: number, max: number): number {{
  return Math.floor(Math.random() * (max - min + 1)) + min
}}

function shuffle<T>(arr: T[]): T[] {{
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {{
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }}
  return a
}}

function makeOptions(correct: number, spread: number = 2): {{ options: string[]; correctIndex: number }} {{
  const distractors = new Set<number>()
  while (distractors.size < 3) {{
    const d = correct + randInt(-spread * 3, spread * 3)
    if (d !== correct) distractors.add(d)
  }}
  const all = [correct, ...distractors]
  const shuffled = shuffle(all)
  return {{ options: shuffled.map(String), correctIndex: shuffled.indexOf(correct) }}
}}

function makeStringOptions(correct: string, others: string[]): {{ options: string[]; correctIndex: number }} {{
  const unique = others.filter(o => o !== correct).slice(0, 3)
  while (unique.length < 3) unique.push('None of the above')
  const all = shuffle([correct, ...unique])
  return {{ options: all, correctIndex: all.indexOf(correct) }}
}}

'''

FOOTER = '''
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
'''

# ============ LINEAR INEQUALITIES & GRAPHS ============
LINEAR_INEQ = [
    # Slope-Intercept Inequalities (8)
    ("liq-q1", "Slope-Intercept Inequalities", """
    generate() {
      const m = randInt(1, 5)
      const b = randInt(-8, 8)
      const ops = ['<', '>', '\\\\u2264', '\\\\u2265']
      const op = ops[randInt(0, 3)]
      const correct = `y ${op} ${m}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}`
      return { id: this.id, category: this.category, question: `A line has slope ${m} and y-intercept ${b}. Which inequality represents all points on or below the line?`, ...makeStringOptions(correct, [`y > ${m}x + ${b}`, `y = ${m}x + ${b}`, `x ${op} ${m}y + ${b}`]), explanation: `The line equation is y = ${m}x + ${b}. Points below use y < or y \\\\u2264.` }
    }"""),
    ("liq-q2", "Slope-Intercept Inequalities", """
    generate() {
      const m = randInt(-4, -1)
      const b = randInt(1, 10)
      const correct = `y > ${m}x + ${b}`
      return { id: this.id, category: this.category, question: `Which inequality represents the region above the line y = ${m}x + ${b}?`, ...makeStringOptions(correct, [`y < ${m}x + ${b}`, `y = ${m}x + ${b}`, `y \\\\u2264 ${m}x + ${b}`]), explanation: `The region above a line is represented by y > mx + b.` }
    }"""),
    ("liq-q3", "Slope-Intercept Inequalities", """
    generate() {
      const m = randInt(1, 3)
      const b = randInt(-5, 5)
      const x = randInt(0, 6)
      const boundary = m * x + b
      const testY = boundary + randInt(1, 5)
      const correct = testY > boundary ? 'Above the line (satisfies y > mx + b)' : 'Below the line'
      return { id: this.id, category: this.category, question: `Does the point (${x}, ${testY}) satisfy y > ${m}x + ${b}? The boundary value at x = ${x} is ${boundary}.`, ...makeStringOptions(correct, ['Below the line', 'On the line exactly', 'Cannot be determined']), explanation: `At x = ${x}, mx + b = ${boundary}. Since ${testY} > ${boundary}, the point is above the line.` }
    }"""),
    ("liq-q4", "Slope-Intercept Inequalities", """
    generate() {
      const m = randInt(1, 4)
      const b = randInt(-6, 6)
      const correct = 'Dashed (strict inequality excludes boundary)'
      return { id: this.id, category: this.category, question: `When graphing y < ${m}x + ${b}, what type of boundary line is used?`, ...makeStringOptions(correct, ['Solid line', 'Dotted then solid', 'No boundary line']), explanation: 'Strict inequalities (< or >) use dashed lines because points on the line are NOT included.' }
    }"""),
    ("liq-q5", "Slope-Intercept Inequalities", """
    generate() {
      const m = randInt(1, 3)
      const b = randInt(1, 8)
      const correct = 'Solid (includes boundary points)'
      return { id: this.id, category: this.category, question: `When graphing y \\\\u2265 ${m}x + ${b}, what type of boundary line is used?`, ...makeStringOptions(correct, ['Dashed line', 'No boundary', 'Double line']), explanation: 'Non-strict inequalities (\\\\u2264 or \\\\u2265) use solid lines because boundary points ARE included.' }
    }"""),
    ("liq-q6", "Slope-Intercept Inequalities", """
    generate() {
      const a = randInt(1, 4)
      const b = randInt(1, 6)
      const total = randInt(20, 50)
      const correct = `${a}x + ${b}y \\\\u2264 ${total}`
      return { id: this.id, category: this.category, question: `A store sells item A for $${a} and item B for $${b}. A customer has $${total}. Which inequality models the possible purchase combinations?`, ...makeStringOptions(correct, [`${a}x + ${b}y \\\\u2265 ${total}`, `${a}x + ${b}y = ${total}`, `${a}x - ${b}y \\\\u2264 ${total}`]), explanation: `Total cost ${a}x + ${b}y must not exceed budget ${total}, so we use \\\\u2264.` }
    }"""),
    ("liq-q7", "Slope-Intercept Inequalities", """
    generate() {
      const m = randInt(2, 5)
      const b = randInt(-4, 4)
      const correct = `(0, ${b - 1})`
      return { id: this.id, category: this.category, question: `Which point is in the solution region of y < ${m}x + ${b}?`, ...makeStringOptions(correct, [`(0, ${b + 1})`, `(0, ${b})`, `(1, ${m + b + 2})`]), explanation: `At x = 0, the boundary is y = ${b}. Since ${b - 1} < ${b}, the point (0, ${b - 1}) satisfies y < ${m}x + ${b}.` }
    }"""),
    ("liq-q8", "Slope-Intercept Inequalities", """
    generate() {
      const m = randInt(1, 3)
      const b = randInt(0, 5)
      const correct = 'The half-plane below the line, not including the line'
      return { id: this.id, category: this.category, question: `Describe the solution set of y < ${m}x + ${b}.`, ...makeStringOptions(correct, ['The half-plane above the line', 'Only points on the line', 'The entire coordinate plane']), explanation: 'y < mx + b represents all points strictly below the boundary line.' }
    }"""),

    # Systems of Inequalities (8)
    ("liq-q9", "Systems of Inequalities", """
    generate() {
      const m1 = randInt(1, 3); const b1 = randInt(0, 5)
      const m2 = randInt(-3, -1); const b2 = randInt(1, 8)
      const correct = 'The overlapping shaded region of both inequalities'
      return { id: this.id, category: this.category, question: `What does the solution set of y \\\\u2264 ${m1}x + ${b1} AND y \\\\u2265 ${m2}x + ${b2} represent?`, ...makeStringOptions(correct, ['The union of both regions', 'Only the boundary lines', 'No solution exists']), explanation: 'A system of inequalities is solved by the intersection (overlap) of the individual solution regions.' }
    }"""),
    ("liq-q10", "Systems of Inequalities", """
    generate() {
      const a = randInt(2, 5); const b = randInt(2, 5); const c = randInt(20, 40)
      const correct = `${a}x + ${b}y \\\\u2264 ${c}, x \\\\u2265 0, y \\\\u2265 0`
      return { id: this.id, category: this.category, question: `A factory uses ${a} units of resource A and ${b} units of resource B per product. With ${c} total resource units and non-negative production, which system applies?`, ...makeStringOptions(correct, [`${a}x + ${b}y \\\\u2265 ${c}`, `${a}x + ${b}y = ${c}`, `${a}x - ${b}y \\\\u2264 ${c}`]), explanation: 'Resource constraints use \\\\u2264 with non-negativity constraints x \\\\u2265 0, y \\\\u2265 0.' }
    }"""),
    ("liq-q11", "Systems of Inequalities", """
    generate() {
      const correct = 'Test the point in each inequality; it must satisfy ALL of them'
      return { id: this.id, category: this.category, question: 'How do you verify a point is in the solution set of a system of inequalities?', ...makeStringOptions(correct, ['Substitute into just one inequality', 'Check if the point is on any boundary', 'Plot it and estimate visually']), explanation: 'A point must satisfy every inequality in the system to be in the solution region.' }
    }"""),
    ("liq-q12", "Systems of Inequalities", """
    generate() {
      const x = randInt(1, 5); const y = randInt(1, 5)
      const sum = x + y; const diff = x - y
      const satA = sum <= 10; const satB = diff >= 0
      const correct = (satA && satB) ? 'Yes, it satisfies both inequalities' : 'No, it fails at least one inequality'
      return { id: this.id, category: this.category, question: `Is (${x}, ${y}) in the solution set of x + y \\\\u2264 10 AND x - y \\\\u2265 0? Check: ${x}+${y}=${sum} and ${x}-${y}=${diff}.`, ...makeStringOptions(correct, ['Yes, it satisfies the first one only', 'No, it fails both', 'Cannot be determined from the given info']), explanation: `x + y = ${sum} ${satA ? '\\\\u2264' : '>'} 10 and x - y = ${diff} ${satB ? '\\\\u2265' : '<'} 0. Must satisfy both.` }
    }"""),
    ("liq-q13", "Systems of Inequalities", """
    generate() {
      const correct = 'No solution — the shaded regions do not overlap'
      return { id: this.id, category: this.category, question: 'If the graphs of two linear inequalities have no overlapping shaded region, what is the solution?', ...makeStringOptions(correct, ['Infinite solutions', 'Exactly one solution', 'The union of both regions']), explanation: 'When shaded regions do not overlap, the system has no solution (empty intersection).' }
    }"""),
    ("liq-q14", "Systems of Inequalities", """
    generate() {
      const c = randInt(5, 15)
      const correct = 'A triangular or polygonal region in the first quadrant'
      return { id: this.id, category: this.category, question: `Describe the shape of the solution region for: x \\\\u2265 0, y \\\\u2265 0, x + y \\\\u2264 ${c}.`, ...makeStringOptions(correct, ['A line segment', 'The entire first quadrant', 'A single point']), explanation: `These three inequalities form a triangle with vertices at (0,0), (${c},0), and (0,${c}).` }
    }"""),
    ("liq-q15", "Systems of Inequalities", """
    generate() {
      const a = randInt(2, 6); const b = randInt(2, 6)
      const budget = a * 3 + b * 2 + randInt(5, 15)
      const correct = `(3, 2)`
      return { id: this.id, category: this.category, question: `Given ${a}x + ${b}y \\\\u2264 ${budget} and x \\\\u2265 1, y \\\\u2265 1, is (3, 2) a feasible point? Check: ${a}(3) + ${b}(2) = ${a*3 + b*2}.`, ...makeStringOptions(correct, [`(${Math.ceil(budget/a) + 1}, 1)`, '(0, 0)', `(${Math.ceil(budget/a)}, ${Math.ceil(budget/b)})`]), explanation: `${a}(3) + ${b}(2) = ${a*3+b*2} \\\\u2264 ${budget}, and 3 \\\\u2265 1, 2 \\\\u2265 1. All constraints satisfied.` }
    }"""),
    ("liq-q16", "Systems of Inequalities", """
    generate() {
      const correct = 'At a vertex (corner point) of the feasible region'
      return { id: this.id, category: this.category, question: 'In linear programming, where does the optimal solution occur?', ...makeStringOptions(correct, ['At the center of the region', 'On any edge of the region', 'At the origin always']), explanation: 'The optimal value of a linear objective function occurs at a vertex of the feasible region (Corner Point Theorem).' }
    }"""),

    # Graphing Inequalities (8)
    ("liq-q17", "Graphing Inequalities", """
    generate() {
      const m = randInt(1, 4); const b = randInt(-5, 5)
      const correct = `Shade below the line y = ${m}x + ${b >= 0 ? b : '(' + b + ')'}`
      return { id: this.id, category: this.category, question: `To graph y < ${m}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}, after drawing a dashed line, where do you shade?`, ...makeStringOptions(correct, ['Shade above the line', 'Shade both sides', 'Do not shade']), explanation: 'For y < mx + b, shade the region below the boundary line.' }
    }"""),
    ("liq-q18", "Graphing Inequalities", """
    generate() {
      const a = randInt(1, 4); const b = randInt(1, 4); const c = randInt(5, 20)
      const xInt = Math.round(c / a); const yInt = Math.round(c / b)
      const correct = `x-intercept: ${xInt}, y-intercept: ${yInt}`
      return { id: this.id, category: this.category, question: `Find the intercepts of the boundary line ${a}x + ${b}y = ${c}.`, ...makeStringOptions(correct, [`x-int: ${yInt}, y-int: ${xInt}`, `x-int: ${c}, y-int: ${c}`, `x-int: ${a}, y-int: ${b}`]), explanation: `Set y=0: x = ${c}/${a} \\\\u2248 ${xInt}. Set x=0: y = ${c}/${b} \\\\u2248 ${yInt}.` }
    }"""),
    ("liq-q19", "Graphing Inequalities", """
    generate() {
      const correct = 'Test point (0, 0) — if it satisfies the inequality, shade toward origin; otherwise shade away'
      return { id: this.id, category: this.category, question: 'What is the test-point method for determining which side to shade?', ...makeStringOptions(correct, ['Always shade above the line', 'Always shade toward the origin', 'Shade the side with the larger area']), explanation: 'Substitute a test point (usually the origin) into the inequality. If true, shade that side; if false, shade the opposite side.' }
    }"""),
    ("liq-q20", "Graphing Inequalities", """
    generate() {
      const m = randInt(1, 3); const b = randInt(1, 6)
      const correct = 'Solid boundary line with shading below/on the line'
      return { id: this.id, category: this.category, question: `How would you graph y \\\\u2264 ${m}x + ${b}?`, ...makeStringOptions(correct, ['Dashed line with shading above', 'Solid line with shading above', 'Dashed line with shading below']), explanation: '\\\\u2264 means solid line (boundary included) and shade below (y values less than or equal).' }
    }"""),
    ("liq-q21", "Graphing Inequalities", """
    generate() {
      const k = randInt(1, 8)
      const correct = `A vertical line at x = ${k} with shading to the right`
      return { id: this.id, category: this.category, question: `How is x \\\\u2265 ${k} graphed on the coordinate plane?`, ...makeStringOptions(correct, ['A horizontal line with shading above', `A vertical line at x = ${k} with shading left`, 'A diagonal line']), explanation: `x \\\\u2265 ${k} is a vertical solid line at x = ${k} with shading to the right (larger x values).` }
    }"""),
    ("liq-q22", "Graphing Inequalities", """
    generate() {
      const k = randInt(-5, -1)
      const correct = `y > ${k}: horizontal dashed line, shade above`
      return { id: this.id, category: this.category, question: `Describe the graph of y > ${k}.`, ...makeStringOptions(correct, [`y > ${k}: horizontal solid line, shade below`, `y > ${k}: vertical line, shade right`, `No graph possible for constant inequality`]), explanation: `y > ${k} is a horizontal dashed line at y = ${k} with shading above.` }
    }"""),
    ("liq-q23", "Graphing Inequalities", """
    generate() {
      const m = randInt(-3, -1); const b = randInt(2, 8)
      const correct = 'The slope is negative, so the line goes down from left to right'
      return { id: this.id, category: this.category, question: `When graphing y \\\\u2265 ${m}x + ${b}, describe the boundary line direction.`, ...makeStringOptions(correct, ['The line goes up from left to right', 'The line is horizontal', 'The line is vertical']), explanation: `A negative slope (m = ${m}) means the line descends from left to right.` }
    }"""),
    ("liq-q24", "Graphing Inequalities", """
    generate() {
      const m = randInt(1, 3); const b = randInt(0, 4)
      const correct = 'The y-intercept is where the boundary line crosses the y-axis'
      return { id: this.id, category: this.category, question: `In y < ${m}x + ${b}, what role does ${b} play in the graph?`, ...makeStringOptions(correct, ['It determines the shading direction', 'It sets the slope', 'It determines line type (solid vs dashed)']), explanation: `The constant ${b} is the y-intercept — the point (0, ${b}) where the boundary line crosses the y-axis.` }
    }"""),

    # Absolute Value Inequalities (8)
    ("liq-q25", "Absolute Value Inequalities", """
    generate() {
      const a = randInt(2, 8)
      const correct = `x > ${a} or x < -${a}`
      return { id: this.id, category: this.category, question: `Solve |x| > ${a}.`, ...makeStringOptions(correct, [`-${a} < x < ${a}`, `x = ${a}`, `x > ${a}`]), explanation: `|x| > ${a} splits into x > ${a} OR x < -${a} (values far from zero).` }
    }"""),
    ("liq-q26", "Absolute Value Inequalities", """
    generate() {
      const a = randInt(2, 7)
      const correct = `-${a} \\\\u2264 x \\\\u2264 ${a}`
      return { id: this.id, category: this.category, question: `Solve |x| \\\\u2264 ${a}.`, ...makeStringOptions(correct, [`x \\\\u2264 -${a} or x \\\\u2265 ${a}`, `x = ${a}`, `x > -${a}`]), explanation: `|x| \\\\u2264 ${a} means -${a} \\\\u2264 x \\\\u2264 ${a} (values close to zero).` }
    }"""),
    ("liq-q27", "Absolute Value Inequalities", """
    generate() {
      const h = randInt(-5, 5); const k = randInt(2, 8)
      const lo = h - k; const hi = h + k
      const correct = `${lo} < x < ${hi}`
      return { id: this.id, category: this.category, question: `Solve |x - ${h}| < ${k}.`, ...makeStringOptions(correct, [`x < ${lo} or x > ${hi}`, `x = ${h}`, `${lo} \\\\u2264 x \\\\u2264 ${hi}`]), explanation: `|x - ${h}| < ${k} means ${h} - ${k} < x < ${h} + ${k}, so ${lo} < x < ${hi}.` }
    }"""),
    ("liq-q28", "Absolute Value Inequalities", """
    generate() {
      const h = randInt(0, 5); const k = randInt(2, 6)
      const lo = h - k; const hi = h + k
      const correct = `x < ${lo} or x > ${hi}`
      return { id: this.id, category: this.category, question: `Solve |x - ${h}| > ${k}.`, ...makeStringOptions(correct, [`${lo} < x < ${hi}`, `x = ${lo} or x = ${hi}`, `x \\\\u2265 ${lo}`]), explanation: `|x - ${h}| > ${k} means x < ${h} - ${k} or x > ${h} + ${k}, so x < ${lo} or x > ${hi}.` }
    }"""),
    ("liq-q29", "Absolute Value Inequalities", """
    generate() {
      const a = randInt(2, 5); const h = randInt(1, 6); const k = randInt(3, 10)
      const lo = h - Math.floor(k/a); const hi = h + Math.floor(k/a)
      const correct = `${lo} \\\\u2264 x \\\\u2264 ${hi}`
      return { id: this.id, category: this.category, question: `Solve ${a}|x - ${h}| \\\\u2264 ${k}. First divide: |x - ${h}| \\\\u2264 ${Math.floor(k/a)}.`, ...makeStringOptions(correct, [`x < ${lo} or x > ${hi}`, `x = ${h}`, `x \\\\u2265 ${lo}`]), explanation: `Divide by ${a}: |x - ${h}| \\\\u2264 ${Math.floor(k/a)}, so ${h} - ${Math.floor(k/a)} \\\\u2264 x \\\\u2264 ${h} + ${Math.floor(k/a)}.` }
    }"""),
    ("liq-q30", "Absolute Value Inequalities", """
    generate() {
      const correct = 'No solution — absolute value is always non-negative'
      return { id: this.id, category: this.category, question: 'What is the solution to |x + 3| < -2?', ...makeStringOptions(correct, ['x > -5 and x < -1', 'x = -3', 'All real numbers']), explanation: 'Absolute value is always \\\\u2265 0, so it can never be less than a negative number. No solution.' }
    }"""),
    ("liq-q31", "Absolute Value Inequalities", """
    generate() {
      const correct = 'All real numbers — absolute value is always \\\\u2265 0'
      return { id: this.id, category: this.category, question: 'What is the solution to |2x - 1| \\\\u2265 -5?', ...makeStringOptions(correct, ['No solution', 'x = 1/2 only', 'x > -5']), explanation: 'Since |2x - 1| \\\\u2265 0 > -5 for all x, every real number is a solution.' }
    }"""),
    ("liq-q32", "Absolute Value Inequalities", """
    generate() {
      const h = randInt(1, 5); const k = randInt(1, 5)
      const correct = `A V-shape with vertex at (${h}, 0), shaded below y = ${k}`
      return { id: this.id, category: this.category, question: `Describe the graph of |x - ${h}| < ${k} on a number line.`, ...makeStringOptions(correct, ['Two separate rays', 'A single point', 'The entire number line']), explanation: `|x - ${h}| < ${k} represents an open interval centered at ${h} with radius ${k}: (${h-k}, ${h+k}).` }
    }"""),

    # Word Problems (8)
    ("liq-q33", "Word Problems", """
    generate() {
      const rate = randInt(10, 25); const max = randInt(200, 500)
      const hours = Math.floor(max / rate)
      const correct = `h \\\\u2264 ${hours}`
      return { id: this.id, category: this.category, question: `A worker earns $${rate}/hour and needs at most $${max}. Which inequality represents hours h?`, ...makeStringOptions(correct, [`h \\\\u2265 ${hours}`, `h = ${hours}`, `h > ${hours}`]), explanation: `${rate}h \\\\u2264 ${max}, so h \\\\u2264 ${max}/${rate} = ${hours}.` }
    }"""),
    ("liq-q34", "Word Problems", """
    generate() {
      const min = randInt(60, 80); const current = randInt(50, 75); const tests = randInt(2, 4)
      const needed = min * tests - current * (tests - 1)
      const correct = `x \\\\u2265 ${needed}`
      return { id: this.id, category: this.category, question: `Average of ${tests} tests must be \\\\u2265 ${min}. With ${tests-1} test(s) averaging ${current}, what score x is needed on the last test?`, ...makeStringOptions(correct, [`x \\\\u2264 ${needed}`, `x = ${needed}`, `x > ${min}`]), explanation: `Need sum \\\\u2265 ${min * tests}. Have ${current * (tests-1)}. Need x \\\\u2265 ${needed}.` }
    }"""),
    ("liq-q35", "Word Problems", """
    generate() {
      const base = randInt(30, 50); const perItem = randInt(2, 8); const budget = randInt(80, 150)
      const items = Math.floor((budget - base) / perItem)
      const correct = `At most ${items} items`
      return { id: this.id, category: this.category, question: `A phone plan costs $${base}/month plus $${perItem}/item. Budget is $${budget}/month. How many items can be purchased?`, ...makeStringOptions(correct, [`Exactly ${items} items`, `At least ${items + 2} items`, `${items + 3} items`]), explanation: `${base} + ${perItem}n \\\\u2264 ${budget}, so ${perItem}n \\\\u2264 ${budget - base}, n \\\\u2264 ${items}.` }
    }"""),
    ("liq-q36", "Word Problems", """
    generate() {
      const length = randInt(10, 20)
      const maxP = randInt(60, 100)
      const maxW = Math.floor((maxP - 2 * length) / 2)
      const correct = `w \\\\u2264 ${maxW}`
      return { id: this.id, category: this.category, question: `A rectangle has length ${length} and perimeter at most ${maxP}. What is the constraint on width w?`, ...makeStringOptions(correct, [`w \\\\u2265 ${maxW}`, `w = ${maxW}`, `w < ${length}`]), explanation: `P = 2(${length}) + 2w \\\\u2264 ${maxP}, so 2w \\\\u2264 ${maxP - 2*length}, w \\\\u2264 ${maxW}.` }
    }"""),
    ("liq-q37", "Word Problems", """
    generate() {
      const speed1 = randInt(40, 60); const speed2 = randInt(50, 70)
      const minDist = randInt(200, 400)
      const correct = `${speed1}t + ${speed2}t \\\\u2265 ${minDist}`
      return { id: this.id, category: this.category, question: `Two cars travel in the same direction at ${speed1} mph and ${speed2} mph. After how many hours t will they be at least ${minDist} miles apart? Write the inequality.`, ...makeStringOptions(correct, [`${speed1}t - ${speed2}t \\\\u2265 ${minDist}`, `${speed1} + ${speed2} > ${minDist}`, `t \\\\u2265 ${minDist}`]), explanation: `Combined distance = (${speed1} + ${speed2})t. Need (${speed1 + speed2})t \\\\u2265 ${minDist}.` }
    }"""),
    ("liq-q38", "Word Problems", """
    generate() {
      const correct = 'Identify the variable, set up the inequality from constraints, solve, and check the direction'
      return { id: this.id, category: this.category, question: 'What is the general strategy for solving inequality word problems?', ...makeStringOptions(correct, ['Guess and check with numbers', 'Always use equations instead', 'Multiply everything by -1 first']), explanation: 'Define variables, translate word constraints into mathematical inequalities, solve algebraically, and verify the inequality direction matches the context.' }
    }"""),
    ("liq-q39", "Word Problems", """
    generate() {
      const n = randInt(3, 6); const perAdult = randInt(12, 20); const perChild = randInt(6, 10)
      const budget = randInt(50, 100)
      const correct = `${perAdult}a + ${perChild}c \\\\u2264 ${budget} where a + c = ${n}`
      return { id: this.id, category: this.category, question: `A group of ${n} people (adults $${perAdult}, children $${perChild}) has $${budget}. Write the system constraint.`, ...makeStringOptions(correct, [`${perAdult}a + ${perChild}c \\\\u2265 ${budget}`, `${perAdult}a - ${perChild}c \\\\u2264 ${budget}`, `a + c \\\\u2264 ${budget}`]), explanation: `Total people: a + c = ${n}. Budget constraint: ${perAdult}a + ${perChild}c \\\\u2264 ${budget}.` }
    }"""),
    ("liq-q40", "Word Problems", """
    generate() {
      const minGrade = randInt(70, 85); const n = randInt(4, 6)
      const needed = minGrade * n
      const correct = `The sum of all ${n} scores must be \\\\u2265 ${needed}`
      return { id: this.id, category: this.category, question: `To earn at least a ${minGrade} average across ${n} assignments, what must the total points be?`, ...makeStringOptions(correct, [`Each score must be exactly ${minGrade}`, `At least one score \\\\u2265 ${minGrade}`, `Total must equal ${needed}`]), explanation: `Average = total/${n} \\\\u2265 ${minGrade}, so total \\\\u2265 ${minGrade} \\\\u00d7 ${n} = ${needed}.` }
    }"""),
]

# ============ GEOMETRY BASICS ============
GEOMETRY_BASICS = [
    # Angles (8)
    ("gb-q1", "Angles", """
    generate() {
      const a = randInt(30, 80)
      const comp = 90 - a
      const { options, correctIndex } = makeOptions(comp, 10)
      return { id: this.id, category: this.category, question: `Two complementary angles measure ${a}\\\\u00b0 and x\\\\u00b0. Find x.`, options, correctIndex, explanation: `Complementary angles sum to 90\\\\u00b0. x = 90 - ${a} = ${comp}\\\\u00b0.` }
    }"""),
    ("gb-q2", "Angles", """
    generate() {
      const a = randInt(50, 140)
      const supp = 180 - a
      const { options, correctIndex } = makeOptions(supp, 15)
      return { id: this.id, category: this.category, question: `Find the supplement of a ${a}\\\\u00b0 angle.`, options, correctIndex, explanation: `Supplementary angles sum to 180\\\\u00b0. Supplement = 180 - ${a} = ${supp}\\\\u00b0.` }
    }"""),
    ("gb-q3", "Angles", """
    generate() {
      const a = randInt(40, 70)
      const vert = a
      const { options, correctIndex } = makeOptions(vert, 10)
      return { id: this.id, category: this.category, question: `Two lines intersect forming a ${a}\\\\u00b0 angle. What is the measure of the vertical angle?`, options, correctIndex, explanation: `Vertical angles are equal. The vertical angle = ${a}\\\\u00b0.` }
    }"""),
    ("gb-q4", "Angles", """
    generate() {
      const a = randInt(30, 80); const b = randInt(30, 80)
      const c = 180 - a - b
      const { options, correctIndex } = makeOptions(c, 10)
      return { id: this.id, category: this.category, question: `A triangle has angles ${a}\\\\u00b0 and ${b}\\\\u00b0. Find the third angle.`, options, correctIndex, explanation: `Triangle angle sum = 180\\\\u00b0. Third = 180 - ${a} - ${b} = ${c}\\\\u00b0.` }
    }"""),
    ("gb-q5", "Angles", """
    generate() {
      const ext = randInt(90, 150)
      const int = 180 - ext
      const { options, correctIndex } = makeOptions(int, 10)
      return { id: this.id, category: this.category, question: `An exterior angle of a triangle is ${ext}\\\\u00b0. What is its adjacent interior angle?`, options, correctIndex, explanation: `An exterior angle and its adjacent interior angle are supplementary: ${180} - ${ext} = ${int}\\\\u00b0.` }
    }"""),
    ("gb-q6", "Angles", """
    generate() {
      const a = randInt(40, 70)
      const alt = a
      const { options, correctIndex } = makeOptions(alt, 8)
      return { id: this.id, category: this.category, question: `Parallel lines cut by a transversal create an angle of ${a}\\\\u00b0. What is the alternate interior angle?`, options, correctIndex, explanation: `Alternate interior angles are equal when lines are parallel: ${alt}\\\\u00b0.` }
    }"""),
    ("gb-q7", "Angles", """
    generate() {
      const a = randInt(40, 80)
      const co = a
      const { options, correctIndex } = makeOptions(co, 8)
      return { id: this.id, category: this.category, question: `A transversal crosses parallel lines creating a ${a}\\\\u00b0 angle. What is the corresponding angle on the other parallel line?`, options, correctIndex, explanation: `Corresponding angles are equal: ${co}\\\\u00b0.` }
    }"""),
    ("gb-q8", "Angles", """
    generate() {
      const n = randInt(5, 8)
      const sum = (n - 2) * 180
      const { options, correctIndex } = makeOptions(sum, 90)
      return { id: this.id, category: this.category, question: `What is the sum of interior angles of a regular ${n}-sided polygon?`, options, correctIndex, explanation: `Sum = (n - 2) \\\\u00d7 180 = (${n} - 2) \\\\u00d7 180 = ${sum}\\\\u00b0.` }
    }"""),

    # Area & Perimeter (8)
    ("gb-q9", "Area & Perimeter", """
    generate() {
      const l = randInt(5, 15); const w = randInt(3, 12)
      const area = l * w
      const { options, correctIndex } = makeOptions(area, 10)
      return { id: this.id, category: this.category, question: `Find the area of a rectangle with length ${l} and width ${w}.`, options, correctIndex, explanation: `Area = l \\\\u00d7 w = ${l} \\\\u00d7 ${w} = ${area}.` }
    }"""),
    ("gb-q10", "Area & Perimeter", """
    generate() {
      const l = randInt(5, 15); const w = randInt(3, 12)
      const p = 2 * (l + w)
      const { options, correctIndex } = makeOptions(p, 8)
      return { id: this.id, category: this.category, question: `Find the perimeter of a rectangle with length ${l} and width ${w}.`, options, correctIndex, explanation: `Perimeter = 2(l + w) = 2(${l} + ${w}) = ${p}.` }
    }"""),
    ("gb-q11", "Area & Perimeter", """
    generate() {
      const b = randInt(4, 14); const h = randInt(3, 10)
      const area = Math.round(b * h / 2)
      const { options, correctIndex } = makeOptions(area, 8)
      return { id: this.id, category: this.category, question: `Find the area of a triangle with base ${b} and height ${h}.`, options, correctIndex, explanation: `Area = (1/2)bh = (1/2)(${b})(${h}) = ${area}.` }
    }"""),
    ("gb-q12", "Area & Perimeter", """
    generate() {
      const a = randInt(3, 8); const b = randInt(5, 12); const h = randInt(3, 8)
      const area = Math.round((a + b) * h / 2)
      const { options, correctIndex } = makeOptions(area, 10)
      return { id: this.id, category: this.category, question: `Find the area of a trapezoid with parallel sides ${a} and ${b}, height ${h}.`, options, correctIndex, explanation: `Area = (1/2)(a + b)h = (1/2)(${a} + ${b})(${h}) = ${area}.` }
    }"""),
    ("gb-q13", "Area & Perimeter", """
    generate() {
      const r = randInt(2, 10)
      const area = Math.round(Math.PI * r * r)
      const { options, correctIndex } = makeOptions(area, 15)
      return { id: this.id, category: this.category, question: `Find the area of a circle with radius ${r} (round to nearest integer).`, options, correctIndex, explanation: `Area = \\\\u03c0r\\\\u00b2 = \\\\u03c0(${r})\\\\u00b2 \\\\u2248 ${area}.` }
    }"""),
    ("gb-q14", "Area & Perimeter", """
    generate() {
      const r = randInt(2, 10)
      const circ = Math.round(2 * Math.PI * r)
      const { options, correctIndex } = makeOptions(circ, 10)
      return { id: this.id, category: this.category, question: `Find the circumference of a circle with radius ${r} (round to nearest integer).`, options, correctIndex, explanation: `C = 2\\\\u03c0r = 2\\\\u03c0(${r}) \\\\u2248 ${circ}.` }
    }"""),
    ("gb-q15", "Area & Perimeter", """
    generate() {
      const s = randInt(3, 10)
      const area = s * s
      const { options, correctIndex } = makeOptions(area, 8)
      return { id: this.id, category: this.category, question: `Find the area of a square with side length ${s}.`, options, correctIndex, explanation: `Area = s\\\\u00b2 = ${s}\\\\u00b2 = ${area}.` }
    }"""),
    ("gb-q16", "Area & Perimeter", """
    generate() {
      const s = randInt(3, 10)
      const p = 4 * s
      const { options, correctIndex } = makeOptions(p, 6)
      return { id: this.id, category: this.category, question: `Find the perimeter of a square with side length ${s}.`, options, correctIndex, explanation: `Perimeter = 4s = 4(${s}) = ${p}.` }
    }"""),

    # Volume & Surface Area (8)
    ("gb-q17", "Volume & Surface Area", """
    generate() {
      const l = randInt(2, 8); const w = randInt(2, 8); const h = randInt(2, 8)
      const vol = l * w * h
      const { options, correctIndex } = makeOptions(vol, 30)
      return { id: this.id, category: this.category, question: `Find the volume of a rectangular prism with dimensions ${l} \\\\u00d7 ${w} \\\\u00d7 ${h}.`, options, correctIndex, explanation: `V = lwh = ${l} \\\\u00d7 ${w} \\\\u00d7 ${h} = ${vol}.` }
    }"""),
    ("gb-q18", "Volume & Surface Area", """
    generate() {
      const r = randInt(2, 6); const h = randInt(3, 10)
      const vol = Math.round(Math.PI * r * r * h)
      const { options, correctIndex } = makeOptions(vol, 40)
      return { id: this.id, category: this.category, question: `Find the volume of a cylinder with radius ${r} and height ${h} (round to nearest integer).`, options, correctIndex, explanation: `V = \\\\u03c0r\\\\u00b2h = \\\\u03c0(${r})\\\\u00b2(${h}) \\\\u2248 ${vol}.` }
    }"""),
    ("gb-q19", "Volume & Surface Area", """
    generate() {
      const r = randInt(2, 6); const h = randInt(3, 10)
      const vol = Math.round(Math.PI * r * r * h / 3)
      const { options, correctIndex } = makeOptions(vol, 30)
      return { id: this.id, category: this.category, question: `Find the volume of a cone with radius ${r} and height ${h} (round to nearest integer).`, options, correctIndex, explanation: `V = (1/3)\\\\u03c0r\\\\u00b2h = (1/3)\\\\u03c0(${r})\\\\u00b2(${h}) \\\\u2248 ${vol}.` }
    }"""),
    ("gb-q20", "Volume & Surface Area", """
    generate() {
      const r = randInt(2, 8)
      const vol = Math.round(4/3 * Math.PI * r * r * r)
      const { options, correctIndex } = makeOptions(vol, 50)
      return { id: this.id, category: this.category, question: `Find the volume of a sphere with radius ${r} (round to nearest integer).`, options, correctIndex, explanation: `V = (4/3)\\\\u03c0r\\\\u00b3 = (4/3)\\\\u03c0(${r})\\\\u00b3 \\\\u2248 ${vol}.` }
    }"""),
    ("gb-q21", "Volume & Surface Area", """
    generate() {
      const l = randInt(3, 8); const w = randInt(3, 8); const h = randInt(3, 8)
      const sa = 2 * (l*w + l*h + w*h)
      const { options, correctIndex } = makeOptions(sa, 20)
      return { id: this.id, category: this.category, question: `Find the surface area of a rectangular prism ${l} \\\\u00d7 ${w} \\\\u00d7 ${h}.`, options, correctIndex, explanation: `SA = 2(lw + lh + wh) = 2(${l*w} + ${l*h} + ${w*h}) = ${sa}.` }
    }"""),
    ("gb-q22", "Volume & Surface Area", """
    generate() {
      const s = randInt(2, 8)
      const vol = s * s * s
      const { options, correctIndex } = makeOptions(vol, 30)
      return { id: this.id, category: this.category, question: `Find the volume of a cube with edge length ${s}.`, options, correctIndex, explanation: `V = s\\\\u00b3 = ${s}\\\\u00b3 = ${vol}.` }
    }"""),
    ("gb-q23", "Volume & Surface Area", """
    generate() {
      const s = randInt(2, 8)
      const sa = 6 * s * s
      const { options, correctIndex } = makeOptions(sa, 20)
      return { id: this.id, category: this.category, question: `Find the surface area of a cube with edge length ${s}.`, options, correctIndex, explanation: `SA = 6s\\\\u00b2 = 6(${s})\\\\u00b2 = ${sa}.` }
    }"""),
    ("gb-q24", "Volume & Surface Area", """
    generate() {
      const r = randInt(2, 6)
      const sa = Math.round(4 * Math.PI * r * r)
      const { options, correctIndex } = makeOptions(sa, 30)
      return { id: this.id, category: this.category, question: `Find the surface area of a sphere with radius ${r} (round to nearest integer).`, options, correctIndex, explanation: `SA = 4\\\\u03c0r\\\\u00b2 = 4\\\\u03c0(${r})\\\\u00b2 \\\\u2248 ${sa}.` }
    }"""),

    # Pythagorean Theorem (8)
    ("gb-q25", "Pythagorean Theorem", """
    generate() {
      const a = randInt(3, 12); const b = randInt(4, 12)
      const cSq = a*a + b*b; const c = Math.round(Math.sqrt(cSq) * 10) / 10
      const correct = `c \\\\u2248 ${c}`
      return { id: this.id, category: this.category, question: `A right triangle has legs ${a} and ${b}. Find the hypotenuse c.`, ...makeStringOptions(correct, [`c = ${a + b}`, `c = ${Math.abs(a - b)}`, `c = ${Math.round(c) + 2}`]), explanation: `c = \\\\u221a(${a}\\\\u00b2 + ${b}\\\\u00b2) = \\\\u221a(${cSq}) \\\\u2248 ${c}.` }
    }"""),
    ("gb-q26", "Pythagorean Theorem", """
    generate() {
      const triples = [[3,4,5],[5,12,13],[8,15,17],[7,24,25]]
      const [a,b,c] = triples[randInt(0, triples.length - 1)]
      const { options, correctIndex } = makeOptions(c, 3)
      return { id: this.id, category: this.category, question: `A right triangle has legs ${a} and ${b}. Find the hypotenuse.`, options, correctIndex, explanation: `${a}\\\\u00b2 + ${b}\\\\u00b2 = ${a*a} + ${b*b} = ${c*c} = ${c}\\\\u00b2.` }
    }"""),
    ("gb-q27", "Pythagorean Theorem", """
    generate() {
      const triples = [[3,4,5],[5,12,13],[8,15,17]]
      const [a,b,c] = triples[randInt(0, triples.length - 1)]
      const { options, correctIndex } = makeOptions(a, 3)
      return { id: this.id, category: this.category, question: `A right triangle has hypotenuse ${c} and one leg ${b}. Find the other leg.`, options, correctIndex, explanation: `a = \\\\u221a(${c}\\\\u00b2 - ${b}\\\\u00b2) = \\\\u221a(${c*c} - ${b*b}) = \\\\u221a${c*c - b*b} = ${a}.` }
    }"""),
    ("gb-q28", "Pythagorean Theorem", """
    generate() {
      const d = randInt(5, 15)
      const diag = Math.round(d * Math.sqrt(2) * 10) / 10
      const correct = `\\\\u2248 ${diag}`
      return { id: this.id, category: this.category, question: `A square has side length ${d}. Find the diagonal length.`, ...makeStringOptions(correct, [`${d * 2}`, `${d}`, `${d + 1}`]), explanation: `Diagonal = s\\\\u221a2 = ${d}\\\\u221a2 \\\\u2248 ${diag}.` }
    }"""),
    ("gb-q29", "Pythagorean Theorem", """
    generate() {
      const correct = '3-4-5, 5-12-13, 8-15-17, 7-24-25'
      return { id: this.id, category: this.category, question: 'List four common Pythagorean triples.', ...makeStringOptions(correct, ['2-3-4, 5-6-7', '1-2-3, 4-5-6', '3-5-7, 4-6-8']), explanation: 'Common Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (and their multiples).' }
    }"""),
    ("gb-q30", "Pythagorean Theorem", """
    generate() {
      const a = randInt(3, 8); const b = randInt(3, 8); const c = randInt(10, 15)
      const isRight = a*a + b*b === c*c
      const correct = isRight ? 'Yes, it is a right triangle' : 'No, it is not a right triangle'
      return { id: this.id, category: this.category, question: `Do sides ${a}, ${b}, ${c} form a right triangle? Check: ${a}\\\\u00b2 + ${b}\\\\u00b2 = ${a*a+b*b}, ${c}\\\\u00b2 = ${c*c}.`, ...makeStringOptions(correct, [isRight ? 'No' : 'Yes', 'Only if angles are given', 'Cannot determine']), explanation: `${a}\\\\u00b2 + ${b}\\\\u00b2 = ${a*a + b*b} ${isRight ? '=' : '\\\\u2260'} ${c*c} = ${c}\\\\u00b2. ${isRight ? 'Equal, so right triangle.' : 'Not equal, not a right triangle.'}` }
    }"""),
    ("gb-q31", "Pythagorean Theorem", """
    generate() {
      const h = randInt(10, 30); const d = randInt(5, 15)
      const ladder = Math.round(Math.sqrt(h*h + d*d) * 10) / 10
      const correct = `\\\\u2248 ${ladder} ft`
      return { id: this.id, category: this.category, question: `A ladder reaches ${h} ft up a wall. Its base is ${d} ft from the wall. How long is the ladder?`, ...makeStringOptions(correct, [`${h + d} ft`, `${h} ft`, `${h - d} ft`]), explanation: `Ladder = \\\\u221a(${h}\\\\u00b2 + ${d}\\\\u00b2) = \\\\u221a(${h*h + d*d}) \\\\u2248 ${ladder} ft.` }
    }"""),
    ("gb-q32", "Pythagorean Theorem", """
    generate() {
      const k = randInt(2, 4); const a = 3*k; const b = 4*k; const c = 5*k
      const { options, correctIndex } = makeOptions(c, 5)
      return { id: this.id, category: this.category, question: `A right triangle has legs ${a} and ${b}. Find the hypotenuse.`, options, correctIndex, explanation: `This is a ${k}x multiple of the 3-4-5 triple: ${a}-${b}-${c}.` }
    }"""),

    # Coordinate Geometry (8)
    ("gb-q33", "Coordinate Geometry", """
    generate() {
      const x1 = randInt(-5, 5); const y1 = randInt(-5, 5)
      const x2 = randInt(-5, 5); const y2 = randInt(-5, 5)
      const dx = x2 - x1; const dy = y2 - y1
      const dist = Math.round(Math.sqrt(dx*dx + dy*dy) * 10) / 10
      const correct = `\\\\u2248 ${dist}`
      return { id: this.id, category: this.category, question: `Find the distance between (${x1}, ${y1}) and (${x2}, ${y2}).`, ...makeStringOptions(correct, [`${Math.abs(dx) + Math.abs(dy)}`, `${dist + 2}`, `${Math.abs(dist - 3)}`]), explanation: `d = \\\\u221a((${dx})\\\\u00b2 + (${dy})\\\\u00b2) = \\\\u221a(${dx*dx + dy*dy}) \\\\u2248 ${dist}.` }
    }"""),
    ("gb-q34", "Coordinate Geometry", """
    generate() {
      const x1 = randInt(-6, 6); const y1 = randInt(-6, 6)
      const x2 = randInt(-6, 6); const y2 = randInt(-6, 6)
      const mx = (x1 + x2) / 2; const my = (y1 + y2) / 2
      const correct = `(${mx}, ${my})`
      return { id: this.id, category: this.category, question: `Find the midpoint of (${x1}, ${y1}) and (${x2}, ${y2}).`, ...makeStringOptions(correct, [`(${x1}, ${y2})`, `(${x2}, ${y1})`, `(${mx + 1}, ${my - 1})`]), explanation: `Midpoint = ((${x1}+${x2})/2, (${y1}+${y2})/2) = (${mx}, ${my}).` }
    }"""),
    ("gb-q35", "Coordinate Geometry", """
    generate() {
      const x1 = randInt(-5, 0); const y1 = randInt(-5, 0)
      const x2 = randInt(1, 5); const y2 = randInt(1, 5)
      const rise = y2 - y1; const run = x2 - x1
      const slope = Math.round(rise/run * 100) / 100
      const correct = `${slope}`
      return { id: this.id, category: this.category, question: `Find the slope between (${x1}, ${y1}) and (${x2}, ${y2}).`, ...makeStringOptions(correct, [`${-slope}`, `${Math.round(run/rise * 100)/100}`, `${slope + 1}`]), explanation: `Slope = (${y2} - ${y1})/(${x2} - ${x1}) = ${rise}/${run} = ${slope}.` }
    }"""),
    ("gb-q36", "Coordinate Geometry", """
    generate() {
      const m = randInt(1, 4)
      const perpM = `-1/${m}`
      const correct = perpM
      return { id: this.id, category: this.category, question: `A line has slope ${m}. What is the slope of a perpendicular line?`, ...makeStringOptions(correct, [`${m}`, `${-m}`, `1/${m}`]), explanation: `Perpendicular slopes are negative reciprocals: -1/${m}.` }
    }"""),
    ("gb-q37", "Coordinate Geometry", """
    generate() {
      const m = randInt(-3, 3); const b = randInt(-5, 5)
      const correct = `Parallel (same slope ${m})`
      return { id: this.id, category: this.category, question: `Line 1: y = ${m}x + ${b}. Line 2: y = ${m}x + ${b + randInt(1, 5)}. What relationship?`, ...makeStringOptions(correct, ['Perpendicular', 'Intersecting', 'Identical']), explanation: `Both lines have slope ${m} but different y-intercepts, so they are parallel.` }
    }"""),
    ("gb-q38", "Coordinate Geometry", """
    generate() {
      const m = randInt(1, 4); const b = randInt(-5, 5); const x = randInt(-3, 3)
      const y = m * x + b
      const { options, correctIndex } = makeOptions(y, 5)
      return { id: this.id, category: this.category, question: `Find y when x = ${x} on the line y = ${m}x + ${b}.`, options, correctIndex, explanation: `y = ${m}(${x}) + ${b} = ${m*x} + ${b} = ${y}.` }
    }"""),
    ("gb-q39", "Coordinate Geometry", """
    generate() {
      const m = randInt(1, 3); const x1 = randInt(-3, 3); const y1 = randInt(-3, 3)
      const b = y1 - m * x1
      const correct = `y = ${m}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}`
      return { id: this.id, category: this.category, question: `Write the equation of the line through (${x1}, ${y1}) with slope ${m}.`, ...makeStringOptions(correct, [`y = ${-m}x + ${b}`, `y = ${m}x + ${-b}`, `y = ${b}x + ${m}`]), explanation: `y - ${y1} = ${m}(x - ${x1}), so y = ${m}x + ${b}.` }
    }"""),
    ("gb-q40", "Coordinate Geometry", """
    generate() {
      const h = randInt(-4, 4); const k = randInt(-4, 4); const r = randInt(2, 6)
      const correct = `(x - ${h})\\\\u00b2 + (y - ${k})\\\\u00b2 = ${r*r}`
      return { id: this.id, category: this.category, question: `Write the equation of a circle centered at (${h}, ${k}) with radius ${r}.`, ...makeStringOptions(correct, [`(x + ${h})\\\\u00b2 + (y + ${k})\\\\u00b2 = ${r}`, `x\\\\u00b2 + y\\\\u00b2 = ${r*r}`, `(x - ${h})\\\\u00b2 + (y - ${k})\\\\u00b2 = ${r}`]), explanation: `Circle equation: (x - h)\\\\u00b2 + (y - k)\\\\u00b2 = r\\\\u00b2 = ${r*r}.` }
    }"""),
]

# ============ DATA & STATISTICS ============
DATA_STATS = [
    ("ds-q1", "Mean Median Mode", """
    generate() {
      const vals = Array.from({length: 5}, () => randInt(10, 50))
      const sum = vals.reduce((a,b) => a+b, 0)
      const mean = Math.round(sum / vals.length * 10) / 10
      const { options, correctIndex } = makeOptions(Math.round(mean), 5)
      return { id: this.id, category: this.category, question: `Find the mean of: ${vals.join(', ')}.`, options, correctIndex, explanation: `Mean = (${vals.join(' + ')}) / ${vals.length} = ${sum}/${vals.length} = ${mean}.` }
    }"""),
    ("ds-q2", "Mean Median Mode", """
    generate() {
      const vals = Array.from({length: 7}, () => randInt(5, 30)).sort((a,b) => a-b)
      const median = vals[3]
      const { options, correctIndex } = makeOptions(median, 4)
      return { id: this.id, category: this.category, question: `Find the median of: ${vals.join(', ')}.`, options, correctIndex, explanation: `Sorted: ${vals.join(', ')}. Middle value (4th of 7) = ${median}.` }
    }"""),
    ("ds-q3", "Mean Median Mode", """
    generate() {
      const mode = randInt(5, 20)
      const vals = [mode, mode, mode, randInt(1, 30), randInt(1, 30), randInt(1, 30)]
      const correct = `${mode}`
      return { id: this.id, category: this.category, question: `Find the mode of: ${shuffle(vals).join(', ')}.`, ...makeStringOptions(correct, [`${mode + 1}`, `${mode - 2}`, 'No mode']), explanation: `${mode} appears 3 times (most frequent), so the mode is ${mode}.` }
    }"""),
    ("ds-q4", "Mean Median Mode", """
    generate() {
      const vals = Array.from({length: 5}, () => randInt(10, 40))
      const sorted = [...vals].sort((a,b) => a-b)
      const range = sorted[sorted.length - 1] - sorted[0]
      const { options, correctIndex } = makeOptions(range, 5)
      return { id: this.id, category: this.category, question: `Find the range of: ${vals.join(', ')}.`, options, correctIndex, explanation: `Range = max - min = ${sorted[sorted.length-1]} - ${sorted[0]} = ${range}.` }
    }"""),
    ("ds-q5", "Mean Median Mode", """
    generate() {
      const n = randInt(4, 6); const target = randInt(75, 95)
      const scores = Array.from({length: n - 1}, () => randInt(60, 100))
      const sum = scores.reduce((a,b) => a+b, 0)
      const needed = target * n - sum
      const { options, correctIndex } = makeOptions(needed, 8)
      return { id: this.id, category: this.category, question: `Current scores: ${scores.join(', ')}. What score is needed on the next test for a ${target} average?`, options, correctIndex, explanation: `Need total = ${target} \\\\u00d7 ${n} = ${target*n}. Have ${sum}. Need ${needed}.` }
    }"""),
    ("ds-q6", "Mean Median Mode", """
    generate() {
      const vals = Array.from({length: 6}, () => randInt(5, 25)).sort((a,b) => a-b)
      const median = (vals[2] + vals[3]) / 2
      const correct = `${median}`
      return { id: this.id, category: this.category, question: `Find the median of this even-count set: ${vals.join(', ')}.`, ...makeStringOptions(correct, [`${vals[2]}`, `${vals[3]}`, `${vals[2] - 1}`]), explanation: `For even count, median = average of two middle values = (${vals[2]} + ${vals[3]})/2 = ${median}.` }
    }"""),
    ("ds-q7", "Mean Median Mode", """
    generate() {
      const vals = [10, 20, 30, 40, 50, 200]
      const correct = 'The median is more resistant to outliers than the mean'
      return { id: this.id, category: this.category, question: `Data: ${vals.join(', ')}. The mean is 58.3 but the median is 35. Why the big difference?`, ...makeStringOptions(correct, ['The data set is too small', 'Mean and median always differ', 'The mode affects both']), explanation: 'The outlier (200) pulls the mean up significantly but barely affects the median.' }
    }"""),
    ("ds-q8", "Mean Median Mode", """
    generate() {
      const n = randInt(20, 50); const mean = randInt(70, 90)
      const total = n * mean
      const { options, correctIndex } = makeOptions(total, 100)
      return { id: this.id, category: this.category, question: `A class of ${n} students has a test mean of ${mean}. What is the total of all scores?`, options, correctIndex, explanation: `Total = n \\\\u00d7 mean = ${n} \\\\u00d7 ${mean} = ${total}.` }
    }"""),

    # Standard Deviation & Variance (8)
    ("ds-q9", "Standard Deviation", """
    generate() {
      const correct = 'It measures the average distance of data points from the mean'
      return { id: this.id, category: this.category, question: 'What does standard deviation measure?', ...makeStringOptions(correct, ['The maximum value in the data', 'The most frequent value', 'The range of the data']), explanation: 'Standard deviation quantifies how spread out data is from the mean.' }
    }"""),
    ("ds-q10", "Standard Deviation", """
    generate() {
      const correct = 'Set B (values more spread out from mean)'
      return { id: this.id, category: this.category, question: 'Set A: {48, 50, 52}. Set B: {30, 50, 70}. Which has greater standard deviation?', ...makeStringOptions(correct, ['Set A', 'They are equal', 'Cannot determine']), explanation: 'Set B has values farther from the mean (50), so its standard deviation is larger.' }
    }"""),
    ("ds-q11", "Standard Deviation", """
    generate() {
      const sd = randInt(3, 8); const mean = randInt(60, 90)
      const lo = mean - 2 * sd; const hi = mean + 2 * sd
      const correct = `${lo} to ${hi}`
      return { id: this.id, category: this.category, question: `Mean = ${mean}, SD = ${sd}. Using the 95% rule, what range contains most data?`, ...makeStringOptions(correct, [`${mean - sd} to ${mean + sd}`, `${mean} to ${hi}`, `${lo - sd} to ${hi + sd}`]), explanation: '~95% of data falls within 2 SDs: mean \\\\u00b1 2(SD) = ' + lo + ' to ' + hi + '.' }
    }"""),
    ("ds-q12", "Standard Deviation", """
    generate() {
      const correct = 'Adding the same constant to every value does NOT change the standard deviation'
      return { id: this.id, category: this.category, question: 'If 10 is added to every data point, what happens to the standard deviation?', ...makeStringOptions(correct, ['It increases by 10', 'It doubles', 'It becomes 0']), explanation: 'Adding a constant shifts all values equally, so spread (standard deviation) stays the same.' }
    }"""),
    ("ds-q13", "Standard Deviation", """
    generate() {
      const k = randInt(2, 5)
      const correct = `The standard deviation is multiplied by ${k}`
      return { id: this.id, category: this.category, question: `If every data value is multiplied by ${k}, what happens to the standard deviation?`, ...makeStringOptions(correct, ['It stays the same', `It is multiplied by ${k*k}`, 'It becomes 0']), explanation: `Multiplying all values by ${k} multiplies the SD by |${k}| = ${k}.` }
    }"""),
    ("ds-q14", "Standard Deviation", """
    generate() {
      const correct = 'A z-score tells how many standard deviations a value is from the mean'
      return { id: this.id, category: this.category, question: 'What does a z-score of 2.0 indicate?', ...makeStringOptions(correct, ['The value is twice the mean', 'The value equals 2', 'The data has 2 modes']), explanation: 'z = (x - mean)/SD. A z-score of 2.0 means the value is 2 standard deviations above the mean.' }
    }"""),
    ("ds-q15", "Standard Deviation", """
    generate() {
      const mean = randInt(60, 80); const sd = randInt(5, 10); const x = mean + sd * 2
      const z = 2
      const { options, correctIndex } = makeOptions(z, 1)
      return { id: this.id, category: this.category, question: `Mean = ${mean}, SD = ${sd}. Find the z-score for x = ${x}.`, options, correctIndex, explanation: `z = (${x} - ${mean}) / ${sd} = ${x - mean} / ${sd} = ${z}.` }
    }"""),
    ("ds-q16", "Standard Deviation", """
    generate() {
      const correct = '68% within 1 SD, 95% within 2 SDs, 99.7% within 3 SDs'
      return { id: this.id, category: this.category, question: 'State the empirical rule (68-95-99.7 rule) for normal distributions.', ...makeStringOptions(correct, ['50-75-100 rule', '70-90-100 rule', '60-80-95 rule']), explanation: 'The empirical rule: ~68% within mean \\\\u00b1 1 SD, ~95% within \\\\u00b1 2 SD, ~99.7% within \\\\u00b1 3 SD.' }
    }"""),

    # Probability & Counting (8)
    ("ds-q17", "Probability", """
    generate() {
      const fav = randInt(2, 10); const total = fav + randInt(5, 20)
      const pNum = fav; const pDen = total
      const correct = `${pNum}/${pDen}`
      return { id: this.id, category: this.category, question: `A bag has ${fav} red and ${total - fav} blue marbles. P(red) = ?`, ...makeStringOptions(correct, [`${total - fav}/${total}`, `${fav}/${fav}`, `1/${total}`]), explanation: `P(red) = favorable/total = ${fav}/${total}.` }
    }"""),
    ("ds-q18", "Probability", """
    generate() {
      const pA = randInt(10, 40); const pB = randInt(10, 40)
      const pBoth = randInt(5, Math.min(pA, pB))
      const pUnion = pA + pB - pBoth
      const { options, correctIndex } = makeOptions(pUnion, 10)
      return { id: this.id, category: this.category, question: `P(A) = ${pA}%, P(B) = ${pB}%, P(A and B) = ${pBoth}%. Find P(A or B).`, options, correctIndex, explanation: `P(A or B) = P(A) + P(B) - P(A and B) = ${pA} + ${pB} - ${pBoth} = ${pUnion}%.` }
    }"""),
    ("ds-q19", "Probability", """
    generate() {
      const n = randInt(3, 6)
      const fact = [1, 1, 2, 6, 24, 120, 720][n]
      const { options, correctIndex } = makeOptions(fact, 30)
      return { id: this.id, category: this.category, question: `How many ways can ${n} books be arranged on a shelf?`, options, correctIndex, explanation: `${n}! = ${fact} arrangements.` }
    }"""),
    ("ds-q20", "Probability", """
    generate() {
      const correct = 'Multiply individual probabilities (for independent events)'
      return { id: this.id, category: this.category, question: 'How do you find P(A and B) for two independent events?', ...makeStringOptions(correct, ['Add the probabilities', 'Subtract P(B) from P(A)', 'Divide P(A) by P(B)']), explanation: 'For independent events: P(A and B) = P(A) \\\\u00d7 P(B).' }
    }"""),
    ("ds-q21", "Probability", """
    generate() {
      const p = randInt(1, 5); const total = 6
      const comp = total - p
      const correct = `${comp}/${total}`
      return { id: this.id, category: this.category, question: `P(rolling a ${p} on a die) = 1/6. What is P(NOT rolling a ${p})?`, ...makeStringOptions(correct, [`1/${total}`, `${p}/${total}`, `1/2`]), explanation: `P(not A) = 1 - P(A) = 1 - 1/6 = ${comp}/${total}.` }
    }"""),
    ("ds-q22", "Probability", """
    generate() {
      const n = randInt(5, 10); const r = randInt(2, 3)
      let comb = 1
      for (let i = 0; i < r; i++) comb = comb * (n - i) / (i + 1)
      comb = Math.round(comb)
      const { options, correctIndex } = makeOptions(comb, 10)
      return { id: this.id, category: this.category, question: `How many ways to choose ${r} items from ${n}? (combinations)`, options, correctIndex, explanation: `C(${n},${r}) = ${n}! / (${r}!(${n}-${r})!) = ${comb}.` }
    }"""),
    ("ds-q23", "Probability", """
    generate() {
      const r = randInt(3, 8); const b = randInt(3, 8)
      const total = r + b
      const p1 = r; const p2 = r - 1; const den1 = total; const den2 = total - 1
      const correct = `(${p1}/${den1}) \\\\u00d7 (${p2}/${den2})`
      return { id: this.id, category: this.category, question: `${r} red, ${b} blue marbles. P(2 red without replacement)?`, ...makeStringOptions(correct, [`(${p1}/${den1}) \\\\u00d7 (${p1}/${den1})`, `${p1}/${den1} + ${p2}/${den2}`, `(${p1}/${den1})\\\\u00b2`]), explanation: 'Without replacement: P = (red/total) \\\\u00d7 ((red-1)/(total-1)).' }
    }"""),
    ("ds-q24", "Probability", """
    generate() {
      const correct = 'Expected value = sum of (outcome \\\\u00d7 probability) for all outcomes'
      return { id: this.id, category: this.category, question: 'How do you calculate expected value?', ...makeStringOptions(correct, ['Take the mode of probabilities', 'Add all outcomes together', 'Multiply the largest outcome by its probability']), explanation: 'E(X) = \\\\u03a3[x \\\\u00d7 P(x)] — the weighted average of all possible outcomes.' }
    }"""),

    # Scatterplots & Regression (8)
    ("ds-q25", "Scatterplots", """
    generate() {
      const correct = 'Positive linear — as x increases, y also increases'
      return { id: this.id, category: this.category, question: 'A scatterplot shows points rising from left to right in a roughly straight pattern. Describe the association.', ...makeStringOptions(correct, ['Negative linear', 'No association', 'Quadratic']), explanation: 'Points rising left to right indicate a positive linear association.' }
    }"""),
    ("ds-q26", "Scatterplots", """
    generate() {
      const m = randInt(2, 8); const b = randInt(-10, 10)
      const x = randInt(5, 15)
      const y = m * x + b
      const { options, correctIndex } = makeOptions(y, 10)
      return { id: this.id, category: this.category, question: `Line of best fit: y = ${m}x + ${b}. Predict y when x = ${x}.`, options, correctIndex, explanation: `y = ${m}(${x}) + ${b} = ${m*x} + ${b} = ${y}.` }
    }"""),
    ("ds-q27", "Scatterplots", """
    generate() {
      const r = randInt(85, 98) / 100
      const correct = 'Strong positive correlation'
      return { id: this.id, category: this.category, question: `r = ${r}. Describe the correlation.`, ...makeStringOptions(correct, ['Weak positive', 'Strong negative', 'No correlation']), explanation: `r close to 1 (${r}) indicates strong positive correlation.` }
    }"""),
    ("ds-q28", "Scatterplots", """
    generate() {
      const correct = 'r\\\\u00b2 tells the percentage of variation in y explained by x'
      return { id: this.id, category: this.category, question: 'What does the coefficient of determination (r\\\\u00b2) represent?', ...makeStringOptions(correct, ['The slope of the regression line', 'The y-intercept', 'The number of data points']), explanation: 'r\\\\u00b2 indicates what fraction of the dependent variable variation is explained by the model.' }
    }"""),
    ("ds-q29", "Scatterplots", """
    generate() {
      const actual = randInt(40, 80); const predicted = randInt(35, 75)
      const residual = actual - predicted
      const { options, correctIndex } = makeOptions(residual, 8)
      return { id: this.id, category: this.category, question: `Actual y = ${actual}, predicted y = ${predicted}. Find the residual.`, options, correctIndex, explanation: `Residual = actual - predicted = ${actual} - ${predicted} = ${residual}.` }
    }"""),
    ("ds-q30", "Scatterplots", """
    generate() {
      const correct = 'It is an outlier — far from the general pattern'
      return { id: this.id, category: this.category, question: 'A point in a scatterplot is very far from the line of best fit. What is this point called?', ...makeStringOptions(correct, ['The y-intercept', 'The slope', 'A normal point']), explanation: 'Points far from the regression line are outliers or influential points.' }
    }"""),
    ("ds-q31", "Scatterplots", """
    generate() {
      const correct = 'Extrapolation — predicting beyond the range of the data — is unreliable'
      return { id: this.id, category: this.category, question: 'Why is it risky to use a regression line to predict y for x-values far outside the data range?', ...makeStringOptions(correct, ['Because the line is always wrong', 'Because r = 0 outside the data', 'Because the slope changes sign']), explanation: 'Extrapolation assumes the linear pattern continues, which may not be true beyond the observed data range.' }
    }"""),
    ("ds-q32", "Scatterplots", """
    generate() {
      const correct = 'The slope represents the predicted change in y for each 1-unit increase in x'
      return { id: this.id, category: this.category, question: 'In a regression equation y = mx + b, what does the slope m represent in context?', ...makeStringOptions(correct, ['The starting value of y', 'The total of all y-values', 'The average of x and y']), explanation: 'The slope is the rate of change — for every 1-unit increase in x, y changes by m units on average.' }
    }"""),

    # Two-way Tables (8)
    ("ds-q33", "Two-way Tables", """
    generate() {
      const a = randInt(20, 50); const b = randInt(10, 40); const c = randInt(15, 45); const d = randInt(10, 35)
      const total = a + b + c + d
      const correct = `${a}/${total}`
      return { id: this.id, category: this.category, question: `Two-way table: Group A Yes=${a}, No=${b}. Group B Yes=${c}, No=${d}. P(Group A and Yes) = ?`, ...makeStringOptions(correct, [`${a + c}/${total}`, `${a}/${a + b}`, `${a}/${a + c}`]), explanation: `Joint probability: ${a} out of total ${total} = ${a}/${total}.` }
    }"""),
    ("ds-q34", "Two-way Tables", """
    generate() {
      const yes = randInt(30, 60); const no = randInt(20, 50)
      const rowTotal = yes + no
      const correct = `${yes}/${rowTotal}`
      return { id: this.id, category: this.category, question: `In a row: Yes = ${yes}, No = ${no}. Find the conditional probability P(Yes | this row).`, ...makeStringOptions(correct, [`${no}/${rowTotal}`, `${yes}/${yes + no + randInt(10,30)}`, `1/2`]), explanation: `Conditional P = ${yes} / row total ${rowTotal} = ${yes}/${rowTotal}.` }
    }"""),
    ("ds-q35", "Two-way Tables", """
    generate() {
      const a = randInt(15, 40); const b = randInt(15, 40); const c = randInt(15, 40); const d = randInt(15, 40)
      const colTotal = a + c
      const correct = `Column total for the first attribute = ${colTotal}`
      return { id: this.id, category: this.category, question: `Top-left=${a}, bottom-left=${c}, top-right=${b}, bottom-right=${d}. What is the marginal total for the first column?`, ...makeStringOptions(correct, [`${a + b}`, `${c + d}`, `${a + b + c + d}`]), explanation: `Marginal total = sum of column: ${a} + ${c} = ${colTotal}.` }
    }"""),
    ("ds-q36", "Two-way Tables", """
    generate() {
      const correct = 'Compare conditional probabilities across rows/columns — if equal, variables are independent'
      return { id: this.id, category: this.category, question: 'How do you determine if two variables in a two-way table are independent?', ...makeStringOptions(correct, ['Check if the total is even', 'See if all cells are equal', 'Add row and column totals']), explanation: 'If P(A|B) = P(A), the variables are independent. Compare conditional probabilities across groups.' }
    }"""),
    ("ds-q37", "Two-way Tables", """
    generate() {
      const m_y = randInt(30, 50); const m_n = randInt(20, 40)
      const f_y = randInt(25, 45); const f_n = randInt(25, 45)
      const totalYes = m_y + f_y
      const grandTotal = m_y + m_n + f_y + f_n
      const correct = `${totalYes}/${grandTotal}`
      return { id: this.id, category: this.category, question: `Males: Yes=${m_y}, No=${m_n}. Females: Yes=${f_y}, No=${f_n}. P(Yes) overall = ?`, ...makeStringOptions(correct, [`${m_y}/${grandTotal}`, `${f_y}/${grandTotal}`, `${m_y + m_n}/${grandTotal}`]), explanation: `P(Yes) = total Yes / grand total = ${totalYes}/${grandTotal}.` }
    }"""),
    ("ds-q38", "Two-way Tables", """
    generate() {
      const correct = 'The relative frequency of each cell compared to its row or column total'
      return { id: this.id, category: this.category, question: 'What is a relative frequency in a two-way table?', ...makeStringOptions(correct, ['The largest number in the table', 'The sum of all cells', 'The difference between rows']), explanation: 'Relative frequency = cell count / total (row, column, or grand total), expressed as a fraction or percentage.' }
    }"""),
    ("ds-q39", "Two-way Tables", """
    generate() {
      const a = randInt(10, 30); const b = randInt(10, 30); const c = randInt(10, 30); const d = randInt(10, 30)
      const rowA = a + b; const rowB = c + d
      const pAgivenRow1 = Math.round(a / rowA * 100)
      const pAgivenRow2 = Math.round(c / rowB * 100)
      const isAssoc = Math.abs(pAgivenRow1 - pAgivenRow2) > 10
      const correct = isAssoc ? 'Yes, conditional probabilities differ significantly' : 'Possibly not — conditional probabilities are similar'
      return { id: this.id, category: this.category, question: `Row 1: ${a}, ${b}. Row 2: ${c}, ${d}. P(col1|row1) = ${pAgivenRow1}%, P(col1|row2) = ${pAgivenRow2}%. Is there an association?`, ...makeStringOptions(correct, ['No difference at all', 'Impossible to compare', 'Only with a chi-square test']), explanation: `Difference of ${Math.abs(pAgivenRow1 - pAgivenRow2)} percentage points ${isAssoc ? 'suggests' : 'may not strongly suggest'} an association.` }
    }"""),
    ("ds-q40", "Two-way Tables", """
    generate() {
      const total = randInt(100, 200); const cellCount = randInt(15, 45)
      const pct = Math.round(cellCount / total * 100)
      const { options, correctIndex } = makeOptions(pct, 8)
      return { id: this.id, category: this.category, question: `In a two-way table with grand total ${total}, a cell has count ${cellCount}. What percentage is this?`, options, correctIndex, explanation: `${cellCount}/${total} \\\\u00d7 100 = ${pct}%.` }
    }"""),
]

files_data = {
    'sat-linear-inequalities-graphs.ts': ('Linear Inequalities & Graphs', LINEAR_INEQ),
    'sat-geometry-basics.ts': ('Geometry Basics', GEOMETRY_BASICS),
    'sat-data-statistics.ts': ('Data & Statistics', DATA_STATS),
}

for filename, (title, questions) in files_data.items():
    filepath = os.path.join(BASE, filename)
    with open(filepath, 'w') as f:
        f.write(HEADER.format(title=title))
        f.write('const questionPool: QuestionTemplate[] = [\n')
        for qid, cat, gen_body in questions:
            f.write(f'  {{\n    id: \'{qid}\',\n    category: \'{cat}\',\n{gen_body}\n  }},\n')
        f.write(']\n')
        f.write(FOOTER)
    print(f'  Wrote {filepath}')

print(f'Done: {len(files_data)} files')
