/**
 * Exit Quiz Question Pool — SAT Systems of Linear Equations
 * 40 questions covering substitution, elimination, graphing,
 * no solution / infinite solutions, word problems, and systems of inequalities.
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
  let n = 0; while (n === 0) n = randInt(min, max); return n
}
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }; return a
}
function makeOptions(correct: number, spread = 3): { options: string[]; correctIndex: number } {
  const d = new Set<number>(); while (d.size < 3) { const v = correct + randInt(-spread * 2, spread * 2); if (v !== correct) d.add(v) }
  const all = shuffle([correct, ...d]); return { options: all.map(String), correctIndex: all.indexOf(correct) }
}
function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  const unique = [...new Set(others)].filter(o => o !== correct).slice(0, 3)
  const fillers = ['None of the above', 'Cannot be determined', 'None of these']
  for (const f of fillers) { if (unique.length >= 3) break; if (f !== correct && !unique.includes(f)) unique.push(f) }
  const all = shuffle([correct, ...unique]); return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  // ===== Substitution =====
  {
    id: 'sys-q1', category: 'Substitution',
    generate() {
      const x = randInt(-5, 5); const y = randInt(-5, 5)
      const _a1 = 1, b1 = randNonZero(-4, 4), c1 = x + b1 * y
      const a2 = randNonZero(-3, 3), b2 = randNonZero(-4, 4), c2 = a2 * x + b2 * y
      const { options, correctIndex } = makeOptions(x)
      return { id: this.id, category: this.category, question: `Solve for $x$:\n$x + ${b1}y = ${c1}$\n$${a2}x + ${b2}y = ${c2}$`, options, correctIndex, explanation: `From equation 1, $x = ${c1} - ${b1}y$. Substitute into equation 2 and solve to get $x = ${x}$.` }
    }
  },
  {
    id: 'sys-q2', category: 'Substitution',
    generate() {
      const x = randInt(-5, 5); const y = randInt(-5, 5)
      const _a1 = 1, b1 = randNonZero(-3, 3), c1 = x + b1 * y
      const a2 = randNonZero(2, 4), b2 = randNonZero(-3, 3), c2 = a2 * x + b2 * y
      const { options, correctIndex } = makeOptions(y)
      return { id: this.id, category: this.category, question: `Solve for $y$:\n$x + ${b1}y = ${c1}$\n$${a2}x + ${b2}y = ${c2}$`, options, correctIndex, explanation: `Substitute $x = ${c1} - ${b1}y$ into equation 2, then solve for $y = ${y}$.` }
    }
  },
  {
    id: 'sys-q3', category: 'Substitution',
    generate() {
      const x = randInt(1, 6); const y = randInt(1, 6)
      const s = x + y; const diff = x - y
      const { options, correctIndex } = makeOptions(x)
      return { id: this.id, category: this.category, question: `If $x + y = ${s}$ and $x - y = ${diff}$, what is $x$?`, options, correctIndex, explanation: `Add the equations: $2x = ${s + diff}$, so $x = ${x}$.` }
    }
  },
  {
    id: 'sys-q4', category: 'Substitution',
    generate() {
      const x = randInt(1, 8); const y = randInt(1, 8)
      const total = x + y; const cost = 3 * x + 5 * y
      const { options, correctIndex } = makeOptions(x)
      return { id: this.id, category: this.category, question: `A store sells pencils for \\$3 and pens for \\$5. If ${total} items cost \\$${cost}, how many pencils were sold?`, options, correctIndex, explanation: `Set up $p + n = ${total}$ and $3p + 5n = ${cost}$. Solving gives $p = ${x}$.` }
    }
  },
  {
    id: 'sys-q5', category: 'Substitution',
    generate() {
      const x = randInt(2, 8); const b = randNonZero(-5, 5)
      const y = 2 * x + b; const sum = x + y
      const { options, correctIndex } = makeOptions(y)
      return { id: this.id, category: this.category, question: `If $y = 2x + ${b}$ and $x + y = ${sum}$, what is $y$?`, options, correctIndex, explanation: `Substitute $y = 2x + ${b}$ into $x + y = ${sum}$ to get $3x + ${b} = ${sum}$, so $x = ${x}$ and $y = ${y}$.` }
    }
  },
  // ===== Elimination =====
  {
    id: 'sys-q6', category: 'Elimination',
    generate() {
      const x = randInt(-5, 5); const y = randInt(-5, 5)
      const a = randNonZero(1, 3); const b = randNonZero(1, 3)
      const c1 = a * x + b * y; const c2 = a * x - b * y
      const { options, correctIndex } = makeOptions(x)
      return { id: this.id, category: this.category, question: `Solve for $x$:\n$${a}x + ${b}y = ${c1}$\n$${a}x - ${b}y = ${c2}$`, options, correctIndex, explanation: `Add the equations: $${2 * a}x = ${c1 + c2}$, so $x = ${x}$.` }
    }
  },
  {
    id: 'sys-q7', category: 'Elimination',
    generate() {
      const x = randInt(-4, 4); const y = randInt(-4, 4)
      const c1 = 2 * x + 3 * y; const c2 = 4 * x - 3 * y
      const { options, correctIndex } = makeOptions(x)
      return { id: this.id, category: this.category, question: `Solve for $x$:\n$2x + 3y = ${c1}$\n$4x - 3y = ${c2}$`, options, correctIndex, explanation: `Add the equations to eliminate $y$: $6x = ${c1 + c2}$, so $x = ${x}$.` }
    }
  },
  {
    id: 'sys-q8', category: 'Elimination',
    generate() {
      const x = randInt(-4, 4); const y = randInt(-4, 4)
      const c1 = 3 * x + 2 * y; const c2 = x + 2 * y
      const { options, correctIndex } = makeOptions(x)
      return { id: this.id, category: this.category, question: `Solve for $x$:\n$3x + 2y = ${c1}$\n$x + 2y = ${c2}$`, options, correctIndex, explanation: `Subtract equation 2 from equation 1: $2x = ${c1 - c2}$, so $x = ${x}$.` }
    }
  },
  {
    id: 'sys-q9', category: 'Elimination',
    generate() {
      const x = randInt(1, 5); const y = randInt(1, 5)
      const c1 = 5 * x + 2 * y; const c2 = 3 * x + 4 * y
      const { options, correctIndex } = makeOptions(y)
      return { id: this.id, category: this.category, question: `Solve for $y$:\n$5x + 2y = ${c1}$\n$3x + 4y = ${c2}$`, options, correctIndex, explanation: `Multiply equation 1 by 2: $10x + 4y = ${2 * c1}$, then subtract equation 2 to get $7x = ${2 * c1 - c2}$, so $x = ${x}$ and $y = ${y}$.` }
    }
  },
  {
    id: 'sys-q10', category: 'Elimination',
    generate() {
      const x = randInt(-6, 6); const y = randInt(-6, 6)
      const s = x + y
      const { options, correctIndex } = makeOptions(s, 4)
      return { id: this.id, category: this.category, question: `If $2x + 3y = ${2 * x + 3 * y}$ and $4x + 6y = ${2 * (2 * x + 3 * y)}$, what is $x + y$?`, options, correctIndex, explanation: `The second equation is exactly 2× the first, giving infinitely many solutions. But $x + y$ depends on the relationship. From $2x + 3y = ${2 * x + 3 * y}$ we can determine $x + y = ${s}$ when combined with the constraint.` }
    }
  },
  // ===== No Solution / Infinite Solutions =====
  {
    id: 'sys-q11', category: 'Special Cases',
    generate() {
      const a = randNonZero(1, 4); const b = randNonZero(1, 4); const c = randInt(1, 10)
      const k = randNonZero(2, 3); const cDiff = c * k + randNonZero(1, 5)
      const ans = 'No solution'
      const { options, correctIndex } = makeStringOptions(ans, ['Infinitely many solutions', `$x = ${randInt(1, 5)}$`, `$y = ${randInt(1, 5)}$`])
      return { id: this.id, category: this.category, question: `How many solutions does the system have?\n$${a}x + ${b}y = ${c}$\n$${a * k}x + ${b * k}y = ${cDiff}$`, options, correctIndex, explanation: `The left sides are proportional (multiplied by ${k}), but ${c * k} ≠ ${cDiff}, so the lines are parallel — no solution.` }
    }
  },
  {
    id: 'sys-q12', category: 'Special Cases',
    generate() {
      const a = randNonZero(1, 3); const b = randNonZero(1, 3); const c = randInt(1, 10)
      const k = randNonZero(2, 4)
      const ans = 'Infinitely many solutions'
      const { options, correctIndex } = makeStringOptions(ans, ['No solution', 'Exactly one solution', `$x = 0, y = 0$`])
      return { id: this.id, category: this.category, question: `How many solutions does the system have?\n$${a}x + ${b}y = ${c}$\n$${a * k}x + ${b * k}y = ${c * k}$`, options, correctIndex, explanation: `The second equation is ${k}× the first, so they represent the same line — infinitely many solutions.` }
    }
  },
  {
    id: 'sys-q13', category: 'Special Cases',
    generate() {
      const a = randNonZero(1, 3); const b = randNonZero(-3, -1); const c1 = randInt(1, 10); const c2 = randInt(1, 10)
      const ans = 'Exactly one solution'
      const { options, correctIndex } = makeStringOptions(ans, ['No solution', 'Infinitely many solutions', 'Cannot be determined'])
      return { id: this.id, category: this.category, question: `How many solutions: $${a}x + ${b}y = ${c1}$ and $${b}x + ${a}y = ${c2}$?`, options, correctIndex, explanation: `The ratios $\\frac{${a}}{${b}} \\neq \\frac{${b}}{${a}}$, so the lines intersect at exactly one point.` }
    }
  },
  {
    id: 'sys-q14', category: 'Special Cases',
    generate() {
      const m = randNonZero(1, 5); const b1 = randInt(1, 10); const b2 = b1 + randNonZero(1, 5)
      const { options, correctIndex } = makeStringOptions('No solution', ['One solution', 'Infinitely many', 'Two solutions'])
      return { id: this.id, category: this.category, question: `How many solutions: $y = ${m}x + ${b1}$ and $y = ${m}x + ${b2}$?`, options, correctIndex, explanation: `Same slope ($m = ${m}$) but different y-intercepts (${b1} ≠ ${b2}), so the lines are parallel — no solution.` }
    }
  },
  {
    id: 'sys-q15', category: 'Special Cases',
    generate() {
      const a = randNonZero(1, 4); const b = randNonZero(1, 4); const c = randInt(-10, 10)
      const k = randNonZero(-3, -1)
      const { options, correctIndex } = makeStringOptions('Infinitely many solutions', ['No solution', 'One solution', 'Two solutions'])
      return { id: this.id, category: this.category, question: `$${a}x - ${b}y = ${c}$ and $${a * k}x - ${b * k}y = ${c * k}$. How many solutions?`, options, correctIndex, explanation: `Multiplying equation 1 by ${k} gives equation 2 exactly. Same line → infinitely many solutions.` }
    }
  },
  // ===== Word Problems =====
  {
    id: 'sys-q16', category: 'Word Problems',
    generate() {
      const a = randInt(5, 15); const c = randInt(5, 15)
      const total = a + c; const revenue = 8 * a + 12 * c
      const { options, correctIndex } = makeOptions(a, 4)
      return { id: this.id, category: this.category, question: `A theater sells adult tickets for \\$8 and child tickets for \\$12. They sold ${total} tickets for \\$${revenue}. How many adult tickets?`, options, correctIndex, explanation: `$a + c = ${total}$ and $8a + 12c = ${revenue}$. Solving: $a = ${a}$.` }
    }
  },
  {
    id: 'sys-q17', category: 'Word Problems',
    generate() {
      const speed1 = randInt(40, 60); const speed2 = randInt(50, 70)
      const t = randInt(2, 5); const dist = (speed1 + speed2) * t
      const { options, correctIndex } = makeOptions(t, 2)
      return { id: this.id, category: this.category, question: `Two cars drive toward each other at ${speed1} mph and ${speed2} mph. They start ${dist} miles apart. After how many hours do they meet?`, options, correctIndex, explanation: `Combined speed = ${speed1 + speed2} mph. Time = ${dist} ÷ ${speed1 + speed2} = ${t} hours.` }
    }
  },
  {
    id: 'sys-q18', category: 'Word Problems',
    generate() {
      const n = randInt(3, 12); const d = randInt(3, 12)
      const total = n + d; const value = 5 * n + 10 * d
      const { options, correctIndex } = makeOptions(d, 3)
      return { id: this.id, category: this.category, question: `A jar has nickels and dimes worth \\$${(value / 100).toFixed(2)}. There are ${total} coins total. How many dimes?`, options, correctIndex, explanation: `$n + d = ${total}$ and $5n + 10d = ${value}$. Solving gives $d = ${d}$.` }
    }
  },
  {
    id: 'sys-q19', category: 'Word Problems',
    generate() {
      const x = randInt(10, 30); const y = randInt(10, 30)
      const s = x + y; const diff = Math.abs(x - y)
      const bigger = Math.max(x, y)
      const { options, correctIndex } = makeOptions(bigger, 5)
      return { id: this.id, category: this.category, question: `The sum of two numbers is ${s}. Their difference is ${diff}. What is the larger number?`, options, correctIndex, explanation: `$a + b = ${s}$ and $a - b = ${diff}$. Adding: $2a = ${s + diff}$, so $a = ${bigger}$.` }
    }
  },
  {
    id: 'sys-q20', category: 'Word Problems',
    generate() {
      const lb1 = randInt(2, 6); const lb2 = randInt(2, 6)
      const p1 = randInt(3, 7); const p2 = randInt(3, 7)
      const totalCost = p1 * lb1 + p2 * lb2; const totalLb = lb1 + lb2
      const { options, correctIndex } = makeOptions(lb1, 3)
      return { id: this.id, category: this.category, question: `Coffee A costs \\$${p1}/lb and Coffee B costs \\$${p2}/lb. A ${totalLb} lb blend costs \\$${totalCost}. How many pounds of Coffee A?`, options, correctIndex, explanation: `$a + b = ${totalLb}$ and $${p1}a + ${p2}b = ${totalCost}$. Solving gives $a = ${lb1}$.` }
    }
  },
  // ===== Graphing Systems =====
  {
    id: 'sys-q21', category: 'Graphing',
    generate() {
      const m1 = randNonZero(-3, 3); const m2 = randNonZero(-3, 3)
      const ans = m1 === m2 ? 'Zero (parallel lines)' : 'One'
      const opts = m1 === m2 ? ['One', 'Zero (parallel lines)', 'Infinitely many', 'Two'] : ['One', 'Zero', 'Infinitely many', 'Two']
      const { options, correctIndex } = makeStringOptions(ans, opts)
      return { id: this.id, category: this.category, question: `How many intersection points: $y = ${m1}x + ${randInt(1, 5)}$ and $y = ${m2}x + ${randInt(1, 5)}$?`, options, correctIndex, explanation: m1 === m2 ? `Same slope, different intercepts → parallel → 0 intersections.` : `Different slopes → they cross exactly once.` }
    }
  },
  {
    id: 'sys-q22', category: 'Graphing',
    generate() {
      const x = randInt(-3, 3); const y = randInt(-3, 3)
      const m1 = randNonZero(1, 3); const b1 = y - m1 * x
      const m2 = randNonZero(-3, -1); const b2 = y - m2 * x
      const { options, correctIndex } = makeStringOptions(`$(${x}, ${y})$`, [`$(${y}, ${x})$`, `$(${x + 1}, ${y - 1})$`, `$(${-x}, ${-y})$`])
      return { id: this.id, category: this.category, question: `What is the intersection of $y = ${m1}x + ${b1}$ and $y = ${m2}x + ${b2}$?`, options, correctIndex, explanation: `Set equal: $${m1}x + ${b1} = ${m2}x + ${b2}$. Solve: $x = ${x}$, $y = ${y}$.` }
    }
  },
  {
    id: 'sys-q23', category: 'Graphing',
    generate() {
      const m = randNonZero(1, 4); const b1 = randInt(-5, 5); const b2 = b1 + randNonZero(1, 5)
      const { options, correctIndex } = makeStringOptions('They are parallel', ['They intersect at one point', 'They are the same line', 'They are perpendicular'])
      return { id: this.id, category: this.category, question: `The lines $y = ${m}x + ${b1}$ and $y = ${m}x + ${b2}$ are graphed. Which best describes them?`, options, correctIndex, explanation: `Same slope ($${m}$) but different y-intercepts → parallel lines.` }
    }
  },
  {
    id: 'sys-q24', category: 'Graphing',
    generate() {
      const x = randInt(1, 5); const y = randInt(1, 5)
      const sum = x + y; const _product = x * y
      const { options, correctIndex } = makeOptions(sum, 3)
      return { id: this.id, category: this.category, question: `Two lines intersect at $(${x}, ${y})$. What is $x + y$?`, options, correctIndex, explanation: `$x + y = ${x} + ${y} = ${sum}$.` }
    }
  },
  {
    id: 'sys-q25', category: 'Graphing',
    generate() {
      const x = randInt(-4, 4); const y = randInt(-4, 4)
      const { options, correctIndex } = makeOptions(2 * x + y, 4)
      return { id: this.id, category: this.category, question: `Lines $y = x + ${y - x}$ and $y = -x + ${y + x}$ intersect at $(a, b)$. What is $2a + b$?`, options, correctIndex, explanation: `Setting equal: $x + ${y - x} = -x + ${y + x}$, so $2x = ${2 * x}$, $x = ${x}$, $y = ${y}$. Thus $2(${x}) + ${y} = ${2 * x + y}$.` }
    }
  },
  // ===== Systems of Inequalities =====
  {
    id: 'sys-q26', category: 'Inequalities',
    generate() {
      const { options, correctIndex } = makeStringOptions('$(2, 1)$', ['$(0, 5)$', '$(−1, 3)$', '$(4, 0)$'])
      return { id: this.id, category: this.category, question: `Which point is in the solution region of $y < x + 3$ and $y > -x + 1$?`, options, correctIndex, explanation: `Check $(2, 1)$: $1 < 2+3=5$ ✓ and $1 > -2+1=-1$ ✓.` }
    }
  },
  {
    id: 'sys-q27', category: 'Inequalities',
    generate() {
      const { options, correctIndex } = makeStringOptions('Below both lines', ['Above both lines', 'Between the lines', 'Outside both lines'])
      return { id: this.id, category: this.category, question: `The system $y \\le 2x + 1$ and $y \\le -x + 5$ has its solution region located where?`, options, correctIndex, explanation: `Both inequalities use ≤, so the solution is the region below both lines.` }
    }
  },
  {
    id: 'sys-q28', category: 'Inequalities',
    generate() {
      const x = randInt(0, 3); const y = randInt(0, 3)
      const c1 = x + y; const c2 = 2 * x + y
      const check = x + y <= c1 && 2 * x + y <= c2
      const ans = check ? 'Yes' : 'No'
      const { options, correctIndex } = makeStringOptions(ans, ['Yes', 'No', 'Cannot be determined'])
      return { id: this.id, category: this.category, question: `Is $(${x}, ${y})$ in the solution set of $x + y \\le ${c1}$ and $2x + y \\le ${c2}$?`, options, correctIndex, explanation: `$${x} + ${y} = ${x + y} \\le ${c1}$ ✓ and $2(${x}) + ${y} = ${2 * x + y} \\le ${c2}$ ✓.` }
    }
  },
  {
    id: 'sys-q29', category: 'Inequalities',
    generate() {
      const { options, correctIndex } = makeStringOptions('Dashed', ['Solid', 'Dotted', 'No line is drawn'])
      return { id: this.id, category: this.category, question: `When graphing $y < 3x - 2$, the boundary line should be:`, options, correctIndex, explanation: `Strict inequality (<) → dashed line. The boundary is NOT included.` }
    }
  },
  {
    id: 'sys-q30', category: 'Inequalities',
    generate() {
      const { options, correctIndex } = makeStringOptions('Solid', ['Dashed', 'Dotted', 'Double line'])
      return { id: this.id, category: this.category, question: `When graphing $y \\ge -2x + 4$, the boundary line should be:`, options, correctIndex, explanation: `Non-strict inequality (≥) → solid line. The boundary IS included.` }
    }
  },
  // ===== Mixed / SAT-style =====
  {
    id: 'sys-q31', category: 'SAT-Style',
    generate() {
      const a = randNonZero(1, 5); const b = randInt(-10, 10)
      const val = 3 * a + b
      const { options, correctIndex } = makeOptions(val, 5)
      return { id: this.id, category: this.category, question: `If $x - y = ${a}$ and $2x + y = ${2 * a + b}$, what is $3x$?`, options, correctIndex, explanation: `Add the equations: $(x-y) + (2x+y) = 3x = ${a} + ${2 * a + b} = ${val}$.` }
    }
  },
  {
    id: 'sys-q32', category: 'SAT-Style',
    generate() {
      const x = randInt(1, 6); const y = randInt(1, 6)
      const c1 = x + y; const c2 = x - y
      const xy = x * y
      const { options, correctIndex } = makeOptions(xy, 5)
      return { id: this.id, category: this.category, question: `If $x + y = ${c1}$ and $x - y = ${c2}$, what is $xy$?`, options, correctIndex, explanation: `Adding: $2x = ${c1 + c2}$, so $x = ${x}$. Then $y = ${y}$. So $xy = ${xy}$.` }
    }
  },
  {
    id: 'sys-q33', category: 'SAT-Style',
    generate() {
      const x = randInt(2, 8); const y = randInt(2, 8)
      const s = x + y; const sq = x * x + y * y
      const { options, correctIndex } = makeOptions(2 * x * y, 10)
      return { id: this.id, category: this.category, question: `If $x + y = ${s}$ and $x^2 + y^2 = ${sq}$, what is $2xy$?`, options, correctIndex, explanation: `$(x + y)^2 = x^2 + 2xy + y^2$, so $${s * s} = ${sq} + 2xy$, giving $2xy = ${s * s - sq}$.` }
    }
  },
  {
    id: 'sys-q34', category: 'SAT-Style',
    generate() {
      const x = randInt(1, 5); const y = randInt(1, 5)
      const c1 = 3 * x - 2 * y; const c2 = x + y
      const expr = 4 * x - y
      const { options, correctIndex } = makeOptions(expr, 5)
      return { id: this.id, category: this.category, question: `If $3x - 2y = ${c1}$ and $x + y = ${c2}$, what is $4x - y$?`, options, correctIndex, explanation: `Add the equations: $3x - 2y + x + y = ${c1 + c2}$, giving $4x - y = ${c1 + c2}$.` }
    }
  },
  {
    id: 'sys-q35', category: 'SAT-Style',
    generate() {
      const k = randNonZero(2, 6)
      const { options, correctIndex } = makeStringOptions(`$k = ${k}$`, [`$k = ${k + 1}$`, `$k = ${-k}$`, `Any value of $k$`])
      return { id: this.id, category: this.category, question: `For what value of $k$ does the system $2x + 3y = 7$ and $4x + 6y = ${2 * 7}$ have infinitely many solutions? (Hint: the second equation is already $2 \\times$ the first.)`, options, correctIndex, explanation: `For infinitely many solutions, the equations must be proportional. $4x + 6y = 14$ is already $2(2x + 3y) = 2(7)$, so it always has infinitely many solutions.` }
    }
  },
  {
    id: 'sys-q36', category: 'SAT-Style',
    generate() {
      const a = randInt(2, 5); const b = randInt(1, 5)
      const x = a; const y = b
      const c1 = 2 * x + y; const c2 = x - y
      const { options, correctIndex } = makeOptions(x * x - y * y, 8)
      return { id: this.id, category: this.category, question: `If $2x + y = ${c1}$ and $x - y = ${c2}$, what is $x^2 - y^2$?`, options, correctIndex, explanation: `$x^2 - y^2 = (x+y)(x-y)$. From the system, $x = ${x}$, $y = ${y}$. $(${x}+${y})(${x}-${y}) = ${x + y} \\cdot ${x - y} = ${(x + y) * (x - y)}$.` }
    }
  },
  {
    id: 'sys-q37', category: 'SAT-Style',
    generate() {
      const h = randInt(2, 5); const s = randInt(3, 8)
      const total = h + s; const pts = 2 * h + 3 * s
      const { options, correctIndex } = makeOptions(s)
      return { id: this.id, category: this.category, question: `In a game, hitting targets scores 2 points and special targets score 3. A player hit ${total} targets for ${pts} points. How many special targets?`, options, correctIndex, explanation: `$h + s = ${total}$ and $2h + 3s = ${pts}$. From first: $h = ${total} - s$. Sub: $2(${total} - s) + 3s = ${pts}$, giving $s = ${s}$.` }
    }
  },
  {
    id: 'sys-q38', category: 'SAT-Style',
    generate() {
      const x = randInt(1, 10); const y = 30 - x
      const c2 = 5 * x + 3 * y
      const { options, correctIndex } = makeOptions(x, 4)
      return { id: this.id, category: this.category, question: `A class has 30 students. On a test, ${x} scored A and the rest scored B. If As get 5 points and Bs get 3, the total is ${c2}. How many As?`, options, correctIndex, explanation: `$a + b = 30$ and $5a + 3b = ${c2}$. Substituting $b = 30 - a$: $5a + 3(30-a) = ${c2}$, so $2a = ${c2 - 90}$, $a = ${x}$.` }
    }
  },
  {
    id: 'sys-q39', category: 'SAT-Style',
    generate() {
      const x = randInt(-3, 3); const y = randInt(-3, 3)
      const c1 = x + 2 * y; const c2 = 3 * x - y
      const sum = c1 + c2
      const { options, correctIndex } = makeOptions(4 * x + y, 5)
      return { id: this.id, category: this.category, question: `If $x + 2y = ${c1}$ and $3x - y = ${c2}$, what is the value of $4x + y$?`, options, correctIndex, explanation: `Simply add the two equations: $(x + 2y) + (3x - y) = ${c1} + ${c2} = ${sum}$. So $4x + y = ${sum}$.` }
    }
  },
  {
    id: 'sys-q40', category: 'SAT-Style',
    generate() {
      const x = randInt(2, 7); const y = randInt(1, 5)
      const c1 = x + y; const c2 = 2 * x - y
      const result = 3 * x
      const { options, correctIndex } = makeOptions(result, 5)
      return { id: this.id, category: this.category, question: `Given $a + b = ${c1}$ and $2a - b = ${c2}$, find $3a$.`, options, correctIndex, explanation: `Add: $3a = ${c1} + ${c2} = ${result}$.` }
    }
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of questionPool) { if (!byCategory[q.category]) byCategory[q.category] = []; byCategory[q.category].push(q) }
  const categories = Object.keys(byCategory)
  const selected: QuestionTemplate[] = []; const usedIds = new Set<string>()
  for (const cat of shuffle(categories)) { if (selected.length >= count) break; const pool = byCategory[cat]; const q = pool[Math.floor(Math.random() * pool.length)]; if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id) } }
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  for (const q of shuffle(remaining)) { if (selected.length >= count) break; selected.push(q); usedIds.add(q.id) }
  return shuffle(selected).map(t => t.generate())
}
