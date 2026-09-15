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

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Sign-aware trailing term, e.g. "+ 3" / "- 3"
function pm(n: number): string {
  return n < 0 ? `- ${Math.abs(n)}` : `+ ${n}`
}

/**
 * Tidy generated math the way a textbook writes it: a coefficient of 1 is
 * dropped ("1x" → "x", "-1x" → "-x") and a zero term is removed ("2x + 0" →
 * "2x", "|x - 0|" → "|x|"). Applied only inside $…$ spans, so prose and
 * currency are untouched.
 */
function tidyMath(text: string): string {
  return text.replace(/\$[^$]+\$/g, (span) =>
    span
      .replace(/(^|[^\d.\\])1(?=[a-z](?![a-z]))/g, '$1')
      .replace(/ [+-] 0(?![\d.])/g, ''),
  )
}

function tidyQuestion(q: ExitQuizQuestion): ExitQuizQuestion {
  return { ...q, question: tidyMath(q.question), options: q.options.map(tidyMath), explanation: tidyMath(q.explanation) }
}

function makeStringOptions(correct: string, others: string[]): { options: string[]; correctIndex: number } {
  // Tidy before de-duplicating, so options that differ only as "1x" vs "x" collapse.
  correct = tidyMath(correct)
  const unique = [...new Set(others.map(tidyMath))].filter(o => o !== correct).slice(0, 3)
  const all = shuffle([correct, ...unique])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  {
    id: 'liq-q1',
    category: 'Slope-Intercept Inequalities',
    difficulty: 'easy',
    generate() {
      // Slope 2+ and a nonzero intercept, so the expression never prints "1x" or "+ 0".
      const m = randInt(2, 5)
      const b = randInt(1, 8) * (Math.random() < 0.5 ? -1 : 1)
      const correct = `$y \\le ${m}x ${pm(b)}$`
      return { id: this.id, category: this.category, question: `A line has slope $${m}$ and y-intercept $${b}$. Which inequality represents all points on or below the line?`, ...makeStringOptions(correct, [`$y \\ge ${m}x ${pm(b)}$`, `$y > ${m}x ${pm(b)}$`, `$y = ${m}x ${pm(b)}$`]), explanation: `The line is $y = ${m}x ${pm(b)}$. "On or below" includes the boundary, so use $y \\le ${m}x ${pm(b)}$.` }
    }
  },
  {
    id: 'liq-q2',
    category: 'Slope-Intercept Inequalities',
    difficulty: 'easy',
    generate() {
      const m = randInt(-4, -1)
      const b = randInt(1, 10)
      const correct = `$y > ${m}x + ${b}$`
      return { id: this.id, category: this.category, question: `Which inequality represents the region above the line $y = ${m}x + ${b}$?`, ...makeStringOptions(correct, [`$y < ${m}x + ${b}$`, `$y = ${m}x + ${b}$`, `$y \\le ${m}x + ${b}$`]), explanation: `The region above a line is represented by $y > mx + b$.` }
    }
  },
  {
    id: 'liq-q3',
    category: 'Slope-Intercept Inequalities',
    difficulty: 'medium',
    generate() {
      const m = randInt(1, 3)
      const b = randInt(-5, 5)
      const x = randInt(0, 6)
      const boundary = m * x + b
      const testY = boundary + randInt(1, 5)
      const correct = 'Yes — it lies above the boundary line'
      return { id: this.id, category: this.category, question: `Does the point $(${x}, ${testY})$ satisfy $y > ${m}x ${pm(b)}$? The boundary value at $x = ${x}$ is $${boundary}$.`, ...makeStringOptions(correct, ['No — it lies below the boundary line', 'No — it lies on the boundary line', 'Yes — it lies on the boundary line']), explanation: `At $x = ${x}$, $mx + b = ${boundary}$. Since $${testY} > ${boundary}$, the point is above the line, so it satisfies the inequality.` }
    }
  },
  {
    id: 'liq-q4',
    category: 'Slope-Intercept Inequalities',
    difficulty: 'easy',
    generate() {
      const m = randInt(1, 4)
      const b = randInt(-6, 6)
      const correct = 'Dashed line'
      return { id: this.id, category: this.category, question: `When graphing $y < ${m}x ${pm(b)}$, what type of boundary line is used?`, ...makeStringOptions(correct, ['Solid line', 'Double line', 'No boundary line']), explanation: 'Strict inequalities ($<$ or $>$) use dashed lines because points on the line are NOT included.' }
    }
  },
  {
    id: 'liq-q5',
    category: 'Slope-Intercept Inequalities',
    difficulty: 'easy',
    generate() {
      const m = randInt(1, 3)
      const b = randInt(1, 8)
      const correct = 'Solid line'
      return { id: this.id, category: this.category, question: `When graphing $y \\ge ${m}x + ${b}$, what type of boundary line is used?`, ...makeStringOptions(correct, ['Dashed line', 'Double line', 'No boundary line']), explanation: 'Non-strict inequalities ($\\le$ or $\\ge$) use solid lines because boundary points ARE included.' }
    }
  },
  {
    id: 'liq-q6',
    category: 'Slope-Intercept Inequalities',
    difficulty: 'medium',
    generate() {
      // Prices of $2 or more, so the model never prints "1x" or "1y".
      const a = randInt(2, 4)
      const b = randInt(2, 6)
      const total = randInt(20, 50)
      const correct = `$${a}x + ${b}y \\le ${total}$`
      return { id: this.id, category: this.category, question: `A store sells item A for $\\$${a}$ and item B for $\\$${b}$. A customer has $\\$${total}$. Which inequality models the possible purchase combinations?`, ...makeStringOptions(correct, [`$${a}x + ${b}y \\ge ${total}$`, `$${a}x + ${b}y = ${total}$`, `$${a}x - ${b}y \\le ${total}$`]), explanation: `The total cost $${a}x + ${b}y$ must not exceed the budget $${total}$, so we use $\\le$.` }
    }
  },
  {
    id: 'liq-q7',
    category: 'Slope-Intercept Inequalities',
    difficulty: 'medium',
    generate() {
      const m = randInt(2, 5)
      const b = randInt(-4, 4)
      const correct = `$(0, ${b - 1})$`
      return { id: this.id, category: this.category, question: `Which point is in the solution region of $y < ${m}x ${pm(b)}$?`, ...makeStringOptions(correct, [`$(0, ${b + 1})$`, `$(0, ${b})$`, `$(1, ${m + b + 2})$`]), explanation: `At $x = 0$, the boundary is $y = ${b}$. Since $${b - 1} < ${b}$, the point $(0, ${b - 1})$ satisfies $y < ${m}x ${pm(b)}$.` }
    }
  },
  {
    id: 'liq-q8',
    category: 'Slope-Intercept Inequalities',
    difficulty: 'easy',
    generate() {
      const m = randInt(1, 3)
      const b = randInt(0, 5)
      const correct = 'The half-plane below the line, not including the line'
      return { id: this.id, category: this.category, question: `Describe the solution set of $y < ${m}x + ${b}$.`, ...makeStringOptions(correct, ['The half-plane above the line, excluding the line', 'The half-plane below the line, including the line', 'Only the points that lie on the line itself']), explanation: '$y < mx + b$ represents all points strictly below the boundary line.' }
    }
  },
  {
    id: 'liq-q9',
    category: 'Systems of Inequalities',
    difficulty: 'medium',
    generate() {
      const m1 = randInt(1, 3); const b1 = randInt(0, 5)
      const m2 = randInt(-3, -1); const b2 = randInt(1, 8)
      const correct = 'The overlapping shaded region of both inequalities'
      return { id: this.id, category: this.category, question: `What does the solution set of $y \\le ${m1}x + ${b1}$ AND $y \\ge ${m2}x + ${b2}$ represent?`, ...makeStringOptions(correct, ['Every point shaded by at least one inequality', 'Only the points lying on both boundary lines', 'The region that neither inequality shades']), explanation: 'A system of inequalities is solved by the intersection (overlap) of the individual solution regions.' }
    }
  },
  {
    id: 'liq-q10',
    category: 'Systems of Inequalities',
    difficulty: 'hard',
    generate() {
      const a = randInt(2, 5); const b = randInt(2, 5); const c = randInt(20, 40)
      const correct = `$${a}x + ${b}y \\le ${c}$, $x \\ge 0$, $y \\ge 0$`
      return { id: this.id, category: this.category, question: `A factory uses $${a}$ units of resource A and $${b}$ units of resource B per product. With $${c}$ total resource units and non-negative production, which system applies?`, ...makeStringOptions(correct, [`$${a}x + ${b}y \\ge ${c}$, $x \\ge 0$, $y \\ge 0$`, `$${a}x + ${b}y \\le ${c}$, $x \\le 0$, $y \\le 0$`, `$${a}x + ${b}y = ${c}$, $x \\ge 0$, $y \\ge 0$`]), explanation: `Resource constraints use $\\le$ together with the non-negativity constraints $x \\ge 0$, $y \\ge 0$.` }
    }
  },
  {
    id: 'liq-q11',
    category: 'Systems of Inequalities',
    difficulty: 'easy',
    generate() {
      const correct = 'Yes — it satisfies both inequalities'
      return { id: this.id, category: this.category, question: 'Is the point $(2, 3)$ in the solution set of the system $y > x$ and $y < 2x + 1$?', ...makeStringOptions(correct, ['No — it fails the inequality $y > x$', 'No — the point fails $y < 2x + 1$', 'No — it lies on a boundary line']), explanation: 'Check BOTH: $3 > 2$ ✓ and $3 < 5$ ✓ — the point satisfies every inequality, so it is in the solution set.' }
    }
  },
  {
    id: 'liq-q12',
    category: 'Systems of Inequalities',
    difficulty: 'medium',
    generate() {
      const x = randInt(1, 8); const y = randInt(1, 8)
      const sum = x + y; const diff = x - y
      const satA = sum <= 10; const satB = diff >= 0
      const states = {
        both: 'Yes — it satisfies both inequalities',
        first: 'No — it fails only the first inequality',
        second: 'No — it fails only the second inequality',
        neither: 'No — it fails both of the inequalities',
      }
      const correct = satA && satB ? states.both : !satA && satB ? states.first : satA && !satB ? states.second : states.neither
      return { id: this.id, category: this.category, question: `Is $(${x}, ${y})$ in the solution set of $x + y \\le 10$ AND $x - y \\ge 0$? Check: $${x} + ${y} = ${sum}$ and $${x} - ${y} = ${diff}$.`, ...makeStringOptions(correct, Object.values(states)), explanation: `$x + y = ${sum} ${satA ? '\\le' : '>'} 10$, so the first inequality ${satA ? 'holds' : 'fails'}; $x - y = ${diff} ${satB ? '\\ge' : '<'} 0$, so the second ${satB ? 'holds' : 'fails'}. The point is in the solution set only if both hold.` }
    }
  },
  {
    id: 'liq-q13',
    category: 'Systems of Inequalities',
    difficulty: 'medium',
    generate() {
      const correct = 'No solution — the shaded regions do not overlap'
      return { id: this.id, category: this.category, question: 'If the graphs of two linear inequalities have no overlapping shaded region, what is the solution?', ...makeStringOptions(correct, ['Infinitely many solutions — every shaded point works', 'Exactly one solution — where the boundary lines meet', 'The union of both shaded regions is the solution']), explanation: 'When shaded regions do not overlap, the system has no solution (empty intersection).' }
    }
  },
  {
    id: 'liq-q14',
    category: 'Systems of Inequalities',
    difficulty: 'hard',
    generate() {
      const c = randInt(5, 15)
      const correct = 'A triangle in the first quadrant'
      return { id: this.id, category: this.category, question: `Describe the shape of the solution region for: $x \\ge 0$, $y \\ge 0$, $x + y \\le ${c}$.`, ...makeStringOptions(correct, [`A line segment on the line $x + y = ${c}$`, 'The entire first quadrant and its axes', 'A triangle in the fourth quadrant']), explanation: `These three inequalities form a triangle with vertices at $(0, 0)$, $(${c}, 0)$, and $(0, ${c})$.` }
    }
  },
  {
    id: 'liq-q15',
    category: 'Systems of Inequalities',
    difficulty: 'hard',
    generate() {
      const a = randInt(2, 6); const b = randInt(2, 6)
      const budget = a * 3 + b * 2 + randInt(5, 15)
      const correct = `$(3, 2)$`
      return { id: this.id, category: this.category, question: `Which point is a feasible solution of $${a}x + ${b}y \\le ${budget}$ with $x \\ge 1$ and $y \\ge 1$?`, ...makeStringOptions(correct, [`$(${Math.ceil(budget / a) + 1}, 1)$`, `$(0, ${Math.ceil(budget / b)})$`, `$(${Math.ceil(budget / a)}, ${Math.ceil(budget / b)})$`]), explanation: `$${a}(3) + ${b}(2) = ${a * 3 + b * 2} \\le ${budget}$, and $3 \\ge 1$, $2 \\ge 1$. Each other point violates at least one constraint.` }
    }
  },
  {
    id: 'liq-q16',
    category: 'Systems of Inequalities',
    difficulty: 'medium',
    generate() {
      const correct = 'At a vertex (corner point) of the feasible region'
      return { id: this.id, category: this.category, question: 'In linear programming, where does the optimal solution occur?', ...makeStringOptions(correct, ['At the center point of the feasible region', 'At the origin, whatever the region looks like', 'At any interior point of the feasible region']), explanation: 'The optimal value of a linear objective function occurs at a vertex of the feasible region (Corner Point Theorem).' }
    }
  },
  {
    id: 'liq-q17',
    category: 'Graphing Inequalities',
    difficulty: 'easy',
    generate() {
      const m = randInt(1, 4); const b = randInt(-5, 5)
      const correct = `Shade below the line $y = ${m}x ${pm(b)}$`
      return { id: this.id, category: this.category, question: `To graph $y < ${m}x ${pm(b)}$, after drawing a dashed line, where do you shade?`, ...makeStringOptions(correct, [`Shade above and on the line $y = ${m}x ${pm(b)}$`, `Shade only on the line $y = ${m}x ${pm(b)}$`, `Shade right of the line $y = ${m}x ${pm(b)}$`]), explanation: 'For $y < mx + b$, shade the region below the boundary line.' }
    }
  },
  {
    id: 'liq-q18',
    category: 'Graphing Inequalities',
    difficulty: 'medium',
    generate() {
      // a !== b and c divisible by both → intercepts are exact and distinct
      const a = randInt(1, 4); let b = randInt(1, 4); while (b === a) b = randInt(1, 4)
      const c = a * b * randInt(2, 5)
      const xInt = c / a; const yInt = c / b
      const correct = `x-intercept: $${xInt}$, y-intercept: $${yInt}$`
      return { id: this.id, category: this.category, question: `Find the intercepts of the boundary line $${a}x + ${b}y = ${c}$.`, ...makeStringOptions(correct, [`x-intercept: $${yInt}$, y-intercept: $${xInt}$`, `x-intercept: $${c}$, y-intercept: $${c}$`, `x-intercept: $${a}$, y-intercept: $${b}$`]), explanation: `Set $y = 0$: $x = ${c}/${a} = ${xInt}$. Set $x = 0$: $y = ${c}/${b} = ${yInt}$.` }
    }
  },
  {
    id: 'liq-q19',
    category: 'Graphing Inequalities',
    difficulty: 'easy',
    generate() {
      const correct = 'Test a point like $(0, 0)$ and shade the side where it is true'
      return { id: this.id, category: this.category, question: 'What is the test-point method for determining which side to shade?', ...makeStringOptions(correct, ['Always shade above the line, whatever the inequality says', 'Always shade the side that contains the origin $(0, 0)$', 'Shade the side with the larger area in the viewing window']), explanation: 'Substitute a test point (usually the origin) into the inequality. If true, shade that side; if false, shade the opposite side.' }
    }
  },
  {
    id: 'liq-q20',
    category: 'Graphing Inequalities',
    difficulty: 'easy',
    generate() {
      const m = randInt(1, 3); const b = randInt(1, 6)
      const correct = 'Solid line, shading below'
      return { id: this.id, category: this.category, question: `How would you graph $y \\le ${m}x + ${b}$?`, ...makeStringOptions(correct, ['Dashed line, shading above', 'Solid line, shading above', 'Dashed line, shading below']), explanation: '$\\le$ means a solid line (boundary included) and shading below (y values less than or equal).' }
    }
  },
  {
    id: 'liq-q21',
    category: 'Graphing Inequalities',
    difficulty: 'easy',
    generate() {
      const k = randInt(1, 8)
      const correct = `A vertical line at $x = ${k}$ with shading to the right`
      return { id: this.id, category: this.category, question: `How is $x \\ge ${k}$ graphed on the coordinate plane?`, ...makeStringOptions(correct, [`A horizontal line at $y = ${k}$ with shading above`, `A vertical line at $x = ${k}$ with shading to the left`, `A dashed vertical line at $x = ${k}$, shading right`]), explanation: `$x \\ge ${k}$ is a solid vertical line at $x = ${k}$ with shading to the right (larger $x$ values).` }
    }
  },
  {
    id: 'liq-q22',
    category: 'Graphing Inequalities',
    difficulty: 'medium',
    generate() {
      const k = randInt(-5, -1)
      const correct = `$y > ${k}$: horizontal dashed line, shade above`
      return { id: this.id, category: this.category, question: `Describe the graph of $y > ${k}$.`, ...makeStringOptions(correct, [`$y > ${k}$: horizontal solid line, shading above`, `$y > ${k}$: horizontal dashed line, shading below`, `$y > ${k}$: vertical dashed line, shading to the right`]), explanation: `$y > ${k}$ is a horizontal dashed line at $y = ${k}$ with shading above.` }
    }
  },
  {
    id: 'liq-q23',
    category: 'Graphing Inequalities',
    difficulty: 'easy',
    generate() {
      const m = randInt(-3, -1); const b = randInt(2, 8)
      const correct = 'The slope is negative, so the line goes down from left to right'
      return { id: this.id, category: this.category, question: `When graphing $y \\ge ${m}x + ${b}$, describe the boundary line direction.`, ...makeStringOptions(correct, ['The slope is positive, so the line goes up from left to right', 'The slope is zero, so the line is horizontal across the plane', 'The slope is undefined, so the line is perfectly vertical']), explanation: `A negative slope ($m = ${m}$) means the line descends from left to right.` }
    }
  },
  {
    id: 'liq-q24',
    category: 'Graphing Inequalities',
    difficulty: 'easy',
    generate() {
      const m = randInt(1, 3); const b = randInt(0, 4)
      const correct = 'It is the y-intercept of the boundary line'
      return { id: this.id, category: this.category, question: `In $y < ${m}x + ${b}$, what role does $${b}$ play in the graph?`, ...makeStringOptions(correct, ['It is the slope of the boundary line', 'It sets which side of the line is shaded', 'It sets if the line is solid or dashed']), explanation: `The constant $${b}$ is the y-intercept — the point $(0, ${b})$ where the boundary line crosses the y-axis.` }
    }
  },
  {
    id: 'liq-q25',
    category: 'Absolute Value Inequalities',
    difficulty: 'medium',
    generate() {
      const a = randInt(2, 8)
      const correct = `$x > ${a}$ or $x < -${a}$`
      return { id: this.id, category: this.category, question: `Solve $|x| > ${a}$.`, ...makeStringOptions(correct, [`$-${a} < x < ${a}$`, `$x > ${a}$ or $x > -${a}$`, `$x < ${a}$ or $x > -${a}$`]), explanation: `$|x| > ${a}$ splits into $x > ${a}$ OR $x < -${a}$ (values far from zero).` }
    }
  },
  {
    id: 'liq-q26',
    category: 'Absolute Value Inequalities',
    difficulty: 'easy',
    generate() {
      const a = randInt(2, 7)
      const correct = `$-${a} \\le x \\le ${a}$`
      return { id: this.id, category: this.category, question: `Solve $|x| \\le ${a}$.`, ...makeStringOptions(correct, [`$x \\le -${a}$ or $x \\ge ${a}$`, `$x = ${a}$`, `$x > -${a}$`]), explanation: `$|x| \\le ${a}$ means $-${a} \\le x \\le ${a}$ (values close to zero).` }
    }
  },
  {
    id: 'liq-q27',
    category: 'Absolute Value Inequalities',
    difficulty: 'medium',
    generate() {
      const h = randInt(-5, 5); const k = randInt(2, 8)
      const lo = h - k; const hi = h + k
      const inner = `x ${h < 0 ? '+' : '-'} ${Math.abs(h)}`
      const correct = `$${lo} < x < ${hi}$`
      return { id: this.id, category: this.category, question: `Solve $|${inner}| < ${k}$.`, ...makeStringOptions(correct, [`$x < ${lo}$ or $x > ${hi}$`, `$x = ${h}$`, `$${lo} \\le x \\le ${hi}$`]), explanation: `$|${inner}| < ${k}$ means $${h} - ${k} < x < ${h} + ${k}$, so $${lo} < x < ${hi}$.` }
    }
  },
  {
    id: 'liq-q28',
    category: 'Absolute Value Inequalities',
    difficulty: 'medium',
    generate() {
      const h = randInt(0, 5); const k = randInt(2, 6)
      const lo = h - k; const hi = h + k
      const correct = `$x < ${lo}$ or $x > ${hi}$`
      return { id: this.id, category: this.category, question: `Solve $|x - ${h}| > ${k}$.`, ...makeStringOptions(correct, [`$${lo} < x < ${hi}$`, `$x = ${lo}$ or $x = ${hi}$`, `$x \\ge ${lo}$`]), explanation: `$|x - ${h}| > ${k}$ means $x < ${h} - ${k}$ or $x > ${h} + ${k}$, so $x < ${lo}$ or $x > ${hi}$.` }
    }
  },
  {
    id: 'liq-q29',
    category: 'Absolute Value Inequalities',
    difficulty: 'hard',
    generate() {
      const a = randInt(2, 5); const h = randInt(1, 6); const q = randInt(1, 4)
      const k = a * q
      const lo = h - q; const hi = h + q
      const correct = `$${lo} \\le x \\le ${hi}$`
      return { id: this.id, category: this.category, question: `Solve $${a}|x - ${h}| \\le ${k}$. First divide both sides by $${a}$: $|x - ${h}| \\le ${q}$.`, ...makeStringOptions(correct, [`$x < ${lo}$ or $x > ${hi}$`, `$x = ${h}$`, `$x \\ge ${lo}$`]), explanation: `Divide by $${a}$: $|x - ${h}| \\le ${q}$, so $${h} - ${q} \\le x \\le ${h} + ${q}$, giving $${lo} \\le x \\le ${hi}$.` }
    }
  },
  {
    id: 'liq-q30',
    category: 'Absolute Value Inequalities',
    difficulty: 'medium',
    generate() {
      const correct = 'No solution'
      return { id: this.id, category: this.category, question: 'What is the solution to $|x + 3| < -2$?', ...makeStringOptions(correct, ['$-5 < x < -1$', '$x = -3$ only', 'All real numbers']), explanation: 'Absolute value is always $\\ge 0$, so it can never be less than a negative number. No solution.' }
    }
  },
  {
    id: 'liq-q31',
    category: 'Absolute Value Inequalities',
    difficulty: 'medium',
    generate() {
      const correct = 'All real numbers'
      return { id: this.id, category: this.category, question: 'What is the solution to $|2x - 1| \\ge -5$?', ...makeStringOptions(correct, ['No solution', '$x \\ge -2$ only', '$-2 \\le x \\le 3$']), explanation: 'Since $|2x - 1| \\ge 0 > -5$ for all $x$, every real number is a solution.' }
    }
  },
  {
    id: 'liq-q32',
    category: 'Absolute Value Inequalities',
    difficulty: 'medium',
    generate() {
      const h = randInt(1, 5); const k = randInt(1, 5)
      const correct = `An open interval from $${h - k}$ to $${h + k}$`
      return { id: this.id, category: this.category, question: `Describe the graph of $|x - ${h}| < ${k}$ on a number line.`, ...makeStringOptions(correct, [`A closed interval from $${h - k}$ to $${h + k}$`, `Two rays: $x < ${h - k}$ or $x > ${h + k}$`, `A single point at $x = ${h}$`]), explanation: `$|x - ${h}| < ${k}$ represents an open interval centered at $${h}$ with radius $${k}$: $(${h - k}, ${h + k})$.` }
    }
  },
  {
    id: 'liq-q33',
    category: 'Word Problems',
    difficulty: 'medium',
    generate() {
      const rate = randInt(10, 25); const hours = randInt(10, 25)
      const max = rate * hours
      const correct = `$h \\le ${hours}$`
      return { id: this.id, category: this.category, question: `A worker earns $\\$${rate}$/hour and can earn at most $\\$${max}$. Which inequality represents the possible hours $h$?`, ...makeStringOptions(correct, [`$h \\ge ${hours}$`, `$h = ${hours}$`, `$h > ${hours}$`]), explanation: `$${rate}h \\le ${max}$, so $h \\le ${max}/${rate} = ${hours}$.` }
    }
  },
  {
    id: 'liq-q34',
    category: 'Word Problems',
    difficulty: 'hard',
    generate() {
      let min = 0; let current = 0; let tests = 0; let needed = 0
      do {
        min = randInt(60, 80); current = randInt(50, 75); tests = randInt(2, 4)
        needed = min * tests - current * (tests - 1)
      } while (needed > 100 || needed < 0)
      const correct = `$x \\ge ${needed}$`
      return { id: this.id, category: this.category, question: `The average of $${tests}$ tests must be at least $${min}$. The first $${tests - 1}$ test(s) average $${current}$. What score $x$ is needed on the last test?`, ...makeStringOptions(correct, [`$x \\le ${needed}$`, `$x = ${needed}$`, `$x > ${min}$`]), explanation: `Need a total of at least $${min} \\times ${tests} = ${min * tests}$. Current total: $${current * (tests - 1)}$. So $x \\ge ${needed}$.` }
    }
  },
  {
    id: 'liq-q35',
    category: 'Word Problems',
    difficulty: 'hard',
    generate() {
      const base = randInt(30, 50); const perItem = randInt(2, 8); const budget = randInt(80, 150)
      const items = Math.floor((budget - base) / perItem)
      const correct = `At most ${items} items`
      return { id: this.id, category: this.category, question: `A phone plan costs $\\$${base}$/month plus $\\$${perItem}$/item. The budget is $\\$${budget}$/month. How many items can be purchased?`, ...makeStringOptions(correct, [`Exactly ${items} items`, `At least ${items + 2} items`, `${items + 3} items`]), explanation: `$${base} + ${perItem}n \\le ${budget}$, so $${perItem}n \\le ${budget - base}$ and $n \\le ${budget - base}/${perItem}$ — at most $${items}$ whole items.` }
    }
  },
  {
    id: 'liq-q36',
    category: 'Word Problems',
    difficulty: 'hard',
    generate() {
      const length = randInt(10, 20)
      const maxP = 2 * randInt(30, 50)
      const maxW = (maxP - 2 * length) / 2
      const correct = `$w \\le ${maxW}$`
      return { id: this.id, category: this.category, question: `A rectangle has length $${length}$ and perimeter at most $${maxP}$. What is the constraint on the width $w$?`, ...makeStringOptions(correct, [`$w \\ge ${maxW}$`, `$w = ${maxW}$`, `$w < ${length}$`]), explanation: `$P = 2(${length}) + 2w \\le ${maxP}$, so $2w \\le ${maxP - 2 * length}$, $w \\le ${maxW}$.` }
    }
  },
  {
    id: 'liq-q37',
    category: 'Word Problems',
    difficulty: 'hard',
    generate() {
      const speed1 = randInt(40, 60); let speed2 = randInt(50, 70)
      while (speed2 === speed1) speed2 = randInt(50, 70)
      const minDist = randInt(200, 400)
      const correct = `$${speed1}t + ${speed2}t \\ge ${minDist}$`
      return { id: this.id, category: this.category, question: `Two cars leave the same point traveling in opposite directions at $${speed1}$ mph and $${speed2}$ mph. After how many hours $t$ will they be at least $${minDist}$ miles apart? Write the inequality.`, ...makeStringOptions(correct, [`$${speed1}t - ${speed2}t \\ge ${minDist}$`, `$${speed1}t + ${speed2}t \\le ${minDist}$`, `$${speed2}t - ${speed1}t \\ge ${minDist}$`]), explanation: `Traveling in opposite directions, the separation is $(${speed1} + ${speed2})t$. Need $(${speed1 + speed2})t \\ge ${minDist}$.` }
    }
  },
  {
    id: 'liq-q38',
    category: 'Word Problems',
    difficulty: 'easy',
    generate() {
      const correct = 'Define a variable, write the inequality, solve, and check'
      return { id: this.id, category: this.category, question: 'What is the general strategy for solving inequality word problems?', ...makeStringOptions(correct, ['Use an equation instead and never check the answer', 'Guess and check numbers until one seems to work', 'Multiply both sides by $-1$ before doing anything else']), explanation: 'Define variables, translate word constraints into mathematical inequalities, solve algebraically, and verify the inequality direction matches the context.' }
    }
  },
  {
    id: 'liq-q39',
    category: 'Word Problems',
    difficulty: 'hard',
    generate() {
      const n = randInt(3, 6); const perAdult = randInt(12, 20); const perChild = randInt(6, 10)
      const budget = randInt(50, 100)
      const correct = `$${perAdult}a + ${perChild}c \\le ${budget}$ where $a + c = ${n}$`
      return { id: this.id, category: this.category, question: `A group of $${n}$ people (adults $\\$${perAdult}$, children $\\$${perChild}$) has $\\$${budget}$. Write the system constraint.`, ...makeStringOptions(correct, [`$${perAdult}a + ${perChild}c \\ge ${budget}$ where $a + c = ${n}$`, `$${perAdult}a + ${perChild}c \\le ${budget}$ where $a - c = ${n}$`, `$${perChild}a + ${perAdult}c \\le ${budget}$ where $a + c = ${n}$`]), explanation: `Total people: $a + c = ${n}$. Budget constraint: $${perAdult}a + ${perChild}c \\le ${budget}$.` }
    }
  },
  {
    id: 'liq-q40',
    category: 'Word Problems',
    difficulty: 'medium',
    generate() {
      const minGrade = randInt(70, 85); const n = randInt(4, 6)
      const needed = minGrade * n
      const correct = `The sum of all $${n}$ scores must be $\\ge ${needed}$`
      return { id: this.id, category: this.category, question: `To earn at least a $${minGrade}$ average across $${n}$ assignments, what must the total points be?`, ...makeStringOptions(correct, [`The sum of all $${n}$ scores must be $\\le ${needed}$`, `The sum of all $${n}$ scores must be $\\ge ${minGrade}$`, `The sum of all $${n}$ scores must equal $${needed}$`]), explanation: `Average $= \\frac{\\text{total}}{${n}} \\ge ${minGrade}$, so total $\\ge ${minGrade} \\times ${n} = ${needed}$.` }
    }
  },
]

type Tier = 'easy' | 'medium' | 'hard'
const tierFallback: Record<Tier, Tier[]> = { easy: ['medium', 'hard'], medium: ['easy', 'hard'], hard: ['medium', 'easy'] }

// Every template's output goes through tidyQuestion (stems and explanations too).
for (const t of questionPool) {
  const generate = t.generate.bind(t)
  t.generate = () => tidyQuestion(generate())
}

export function generateExitQuiz(count: number = 10, _topicSlug?: string, difficulty?: 'easy' | 'medium' | 'hard'): ExitQuizQuestion[] {
  if (difficulty) {
    const selected = shuffle(questionPool.filter(q => q.difficulty === difficulty)).slice(0, count)
    for (const tier of tierFallback[difficulty]) {
      if (selected.length >= count) break
      for (const q of shuffle(questionPool.filter(t => t.difficulty === tier))) {
        if (selected.length >= count) break
        selected.push(q)
      }
    }
    return shuffle(selected).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
  }
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
  return shuffle(selected).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
}
