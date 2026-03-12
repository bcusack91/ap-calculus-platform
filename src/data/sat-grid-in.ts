/**
 * SAT Grid-In (Student-Produced Response) Problem Bank
 *
 * On the Digital SAT, ~25% of Math questions are student-produced response
 * (SPR) — students type a numeric answer instead of choosing from options.
 * This module provides a bank of SPR problems with procedural generation.
 */

export interface GridInProblem {
  id: string
  question: string
  /** The exact correct answer (numeric). For fractions, also accept decimal equivalents. */
  correctAnswer: number
  /** Alternative acceptable answers (e.g., equivalent fractions/decimals) */
  acceptableAnswers: number[]
  /** Tolerance for floating-point comparison (default 0) */
  tolerance: number
  explanation: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
}

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/** Generate a pool of grid-in problems with randomized values */
export function generateGridInProblems(count = 10): GridInProblem[] {
  const allGenerators = [
    genLinearSolve,
    genPercentChange,
    genMeanCalculation,
    genQuadraticRoot,
    genSystemsSolve,
    genRatioProblems,
    genExponentSimplify,
    genAreaProblems,
    genSlopeCalculation,
    genProportion,
    genDistanceRate,
    genAbsoluteValue,
    genTriangleAngle,
    genCircleArea,
    genScientificNotation,
    genUnitConversion,
    genProbability,
    genSequenceNthTerm,
    genFactoring,
    genWorkRate,
  ]

  // Shuffle and pick
  const shuffled = [...allGenerators].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((gen, i) => ({
    id: `gridin-${i + 1}`,
    ...gen(),
  }))
}

// ──────────────────────────────────────────────────────────
//  Problem Generators
// ──────────────────────────────────────────────────────────

function genLinearSolve(): Omit<GridInProblem, 'id'> {
  const a = rand(2, 9)
  const x = rand(-10, 10)
  const b = rand(1, 20)
  const c = a * x + b
  return {
    question: `If ${a}x + ${b} = ${c}, what is the value of x?`,
    correctAnswer: x,
    acceptableAnswers: [x],
    tolerance: 0,
    explanation: `Subtract ${b} from both sides: ${a}x = ${c - b}. Divide by ${a}: x = ${x}.`,
    category: 'Algebra',
    difficulty: 'easy',
  }
}

function genPercentChange(): Omit<GridInProblem, 'id'> {
  const original = rand(40, 200) * 5
  const pct = rand(10, 50)
  const increase = Math.round(original * pct / 100)
  const newVal = original + increase
  return {
    question: `A shirt's price increased from $${original} to $${newVal}. What is the percent increase?`,
    correctAnswer: pct,
    acceptableAnswers: [pct],
    tolerance: 0.01,
    explanation: `Percent increase = ((${newVal} - ${original}) / ${original}) × 100 = (${increase} / ${original}) × 100 = ${pct}%.`,
    category: 'Problem Solving',
    difficulty: 'easy',
  }
}

function genMeanCalculation(): Omit<GridInProblem, 'id'> {
  const n = 5
  const values = Array.from({ length: n }, () => rand(60, 100))
  const sum = values.reduce((a, b) => a + b, 0)
  const mean = sum / n
  return {
    question: `The test scores of ${n} students are ${values.join(', ')}. What is the mean score?`,
    correctAnswer: mean,
    acceptableAnswers: [mean],
    tolerance: 0.1,
    explanation: `Mean = (${values.join(' + ')}) / ${n} = ${sum} / ${n} = ${mean}.`,
    category: 'Statistics',
    difficulty: 'easy',
  }
}

function genQuadraticRoot(): Omit<GridInProblem, 'id'> {
  const r1 = rand(1, 8)
  const r2 = rand(r1 + 1, 12)
  // (x - r1)(x - r2) = x² - (r1+r2)x + r1*r2
  const b = -(r1 + r2)
  const c = r1 * r2
  return {
    question: `If x² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x + ${c} = 0 and x > 0, what is the larger value of x?`,
    correctAnswer: r2,
    acceptableAnswers: [r1, r2],
    tolerance: 0,
    explanation: `Factor: (x - ${r1})(x - ${r2}) = 0, so x = ${r1} or x = ${r2}. The larger value is ${r2}.`,
    category: 'Advanced Math',
    difficulty: 'medium',
  }
}

function genSystemsSolve(): Omit<GridInProblem, 'id'> {
  const x = rand(1, 8)
  const y = rand(1, 8)
  const a1 = rand(1, 4)
  const b1 = rand(1, 4)
  const c1 = a1 * x + b1 * y
  const a2 = rand(1, 4)
  const b2 = rand(1, 4)
  const c2 = a2 * x + b2 * y
  return {
    question: `In the system of equations ${a1}x + ${b1}y = ${c1} and ${a2}x + ${b2}y = ${c2}, what is the value of x + y?`,
    correctAnswer: x + y,
    acceptableAnswers: [x + y],
    tolerance: 0,
    explanation: `Solving the system: x = ${x}, y = ${y}. Therefore x + y = ${x + y}.`,
    category: 'Algebra',
    difficulty: 'medium',
  }
}

function genRatioProblems(): Omit<GridInProblem, 'id'> {
  const a = rand(2, 5)
  const b = rand(2, 5)
  const total = (a + b) * rand(3, 8)
  const partA = (a / (a + b)) * total
  return {
    question: `Two numbers are in the ratio ${a}:${b} and their sum is ${total}. What is the smaller number?`,
    correctAnswer: Math.min(partA, total - partA),
    acceptableAnswers: [Math.min(partA, total - partA)],
    tolerance: 0,
    explanation: `Sum of ratio parts = ${a + b}. Each part = ${total} / ${a + b} = ${total / (a + b)}. Smaller number = ${Math.min(a, b)} × ${total / (a + b)} = ${Math.min(partA, total - partA)}.`,
    category: 'Problem Solving',
    difficulty: 'easy',
  }
}

function genExponentSimplify(): Omit<GridInProblem, 'id'> {
  const base = rand(2, 5)
  const exp1 = rand(2, 4)
  const exp2 = rand(1, 3)
  const result = Math.pow(base, exp1 + exp2)
  return {
    question: `What is ${base}^${exp1} × ${base}^${exp2}?`,
    correctAnswer: result,
    acceptableAnswers: [result],
    tolerance: 0,
    explanation: `When multiplying powers with the same base, add exponents: ${base}^(${exp1}+${exp2}) = ${base}^${exp1 + exp2} = ${result}.`,
    category: 'Advanced Math',
    difficulty: 'easy',
  }
}

function genAreaProblems(): Omit<GridInProblem, 'id'> {
  const base = rand(5, 15)
  const height = rand(4, 12)
  const area = 0.5 * base * height
  return {
    question: `A triangle has a base of ${base} cm and a height of ${height} cm. What is its area in square centimeters?`,
    correctAnswer: area,
    acceptableAnswers: [area],
    tolerance: 0,
    explanation: `Area = ½ × base × height = ½ × ${base} × ${height} = ${area} cm².`,
    category: 'Geometry',
    difficulty: 'easy',
  }
}

function genSlopeCalculation(): Omit<GridInProblem, 'id'> {
  const x1 = rand(-5, 0)
  const y1 = rand(-5, 5)
  const x2 = rand(1, 6)
  const rise = rand(-8, 8)
  const y2 = y1 + rise
  const run = x2 - x1
  const slope = rise / run
  return {
    question: `What is the slope of the line passing through (${x1}, ${y1}) and (${x2}, ${y2})?`,
    correctAnswer: slope,
    acceptableAnswers: [slope],
    tolerance: 0.001,
    explanation: `Slope = (y₂ - y₁) / (x₂ - x₁) = (${y2} - ${y1}) / (${x2} - ${x1}) = ${rise} / ${run} = ${Number(slope.toFixed(3))}.`,
    category: 'Algebra',
    difficulty: 'easy',
  }
}

function genProportion(): Omit<GridInProblem, 'id'> {
  const a = rand(3, 10)
  const b = rand(2, 8)
  const c = rand(2, 6) * a
  const answer = (b * c) / a
  return {
    question: `If ${a}/${b} = ${c}/x, what is the value of x?`,
    correctAnswer: answer,
    acceptableAnswers: [answer],
    tolerance: 0.01,
    explanation: `Cross multiply: ${a}x = ${b} × ${c} = ${b * c}. So x = ${b * c}/${a} = ${answer}.`,
    category: 'Problem Solving',
    difficulty: 'easy',
  }
}

function genDistanceRate(): Omit<GridInProblem, 'id'> {
  const rate = rand(30, 65) // mph
  const time = rand(2, 5) // hours
  const distance = rate * time
  return {
    question: `A car travels at ${rate} miles per hour for ${time} hours. How many miles does it travel?`,
    correctAnswer: distance,
    acceptableAnswers: [distance],
    tolerance: 0,
    explanation: `Distance = rate × time = ${rate} × ${time} = ${distance} miles.`,
    category: 'Problem Solving',
    difficulty: 'easy',
  }
}

function genAbsoluteValue(): Omit<GridInProblem, 'id'> {
  const a = rand(2, 8)
  const b = rand(1, 15)
  const sol1 = b / a
  const sol2 = -b / a
  const sum = sol1 + sol2
  return {
    question: `If |${a}x| = ${b}, what is the sum of all possible values of x?`,
    correctAnswer: sum,
    acceptableAnswers: [sum, 0],
    tolerance: 0.001,
    explanation: `|${a}x| = ${b} gives ${a}x = ${b} or ${a}x = -${b}. So x = ${Number(sol1.toFixed(3))} or x = ${Number(sol2.toFixed(3))}. Sum = ${sum}.`,
    category: 'Algebra',
    difficulty: 'medium',
  }
}

function genTriangleAngle(): Omit<GridInProblem, 'id'> {
  const a1 = rand(30, 80)
  const a2 = rand(20, 90 - a1 + 40)
  const a3 = 180 - a1 - a2
  return {
    question: `In a triangle, two angles measure ${a1}° and ${a2}°. What is the measure of the third angle in degrees?`,
    correctAnswer: a3,
    acceptableAnswers: [a3],
    tolerance: 0,
    explanation: `The sum of angles in a triangle is 180°. Third angle = 180 - ${a1} - ${a2} = ${a3}°.`,
    category: 'Geometry',
    difficulty: 'easy',
  }
}

function genCircleArea(): Omit<GridInProblem, 'id'> {
  const r = rand(3, 10)
  const area = Math.round(Math.PI * r * r * 100) / 100
  return {
    question: `What is the area of a circle with radius ${r}? (Round to the nearest hundredth.)`,
    correctAnswer: area,
    acceptableAnswers: [area],
    tolerance: 0.02,
    explanation: `Area = πr² = π × ${r}² = π × ${r * r} ≈ ${area}.`,
    category: 'Geometry',
    difficulty: 'medium',
  }
}

function genScientificNotation(): Omit<GridInProblem, 'id'> {
  const coeff = rand(2, 9)
  const exp = rand(3, 6)
  const answer = coeff * Math.pow(10, exp)
  return {
    question: `What is ${coeff} × 10^${exp} written as a standard number?`,
    correctAnswer: answer,
    acceptableAnswers: [answer],
    tolerance: 0,
    explanation: `${coeff} × 10^${exp} = ${answer.toLocaleString()}.`,
    category: 'Problem Solving',
    difficulty: 'easy',
  }
}

function genUnitConversion(): Omit<GridInProblem, 'id'> {
  const feet = rand(3, 20)
  const inches = feet * 12
  return {
    question: `How many inches are in ${feet} feet?`,
    correctAnswer: inches,
    acceptableAnswers: [inches],
    tolerance: 0,
    explanation: `1 foot = 12 inches. ${feet} feet = ${feet} × 12 = ${inches} inches.`,
    category: 'Problem Solving',
    difficulty: 'easy',
  }
}

function genProbability(): Omit<GridInProblem, 'id'> {
  const red = rand(3, 8)
  const blue = rand(2, 6)
  const green = rand(1, 4)
  const total = red + blue + green
  const answer = Math.round((red / total) * 1000) / 1000
  return {
    question: `A bag contains ${red} red, ${blue} blue, and ${green} green marbles. If one marble is drawn at random, what is the probability it is red? (Give as a decimal, rounded to the nearest thousandth.)`,
    correctAnswer: answer,
    acceptableAnswers: [answer, red / total],
    tolerance: 0.002,
    explanation: `P(red) = ${red}/${total} ≈ ${answer}.`,
    category: 'Statistics',
    difficulty: 'medium',
  }
}

function genSequenceNthTerm(): Omit<GridInProblem, 'id'> {
  const a1 = rand(2, 10)
  const d = rand(2, 7)
  const n = rand(8, 15)
  const an = a1 + (n - 1) * d
  return {
    question: `In an arithmetic sequence, the first term is ${a1} and the common difference is ${d}. What is the ${n}th term?`,
    correctAnswer: an,
    acceptableAnswers: [an],
    tolerance: 0,
    explanation: `aₙ = a₁ + (n-1)d = ${a1} + (${n}-1)(${d}) = ${a1} + ${(n - 1) * d} = ${an}.`,
    category: 'Advanced Math',
    difficulty: 'medium',
  }
}

function genFactoring(): Omit<GridInProblem, 'id'> {
  const a = rand(2, 6)
  const b = rand(1, 9)
  const product = a * b
  const sum = a + b
  return {
    question: `If two positive integers have a product of ${product} and a sum of ${sum}, what is the larger integer?`,
    correctAnswer: Math.max(a, b),
    acceptableAnswers: [Math.max(a, b)],
    tolerance: 0,
    explanation: `The two numbers are ${a} and ${b} since ${a} × ${b} = ${product} and ${a} + ${b} = ${sum}. The larger is ${Math.max(a, b)}.`,
    category: 'Problem Solving',
    difficulty: 'easy',
  }
}

function genWorkRate(): Omit<GridInProblem, 'id'> {
  const t1 = rand(3, 8)
  const t2 = rand(3, 8)
  const combined = (t1 * t2) / (t1 + t2)
  const answer = Math.round(combined * 100) / 100
  return {
    question: `Machine A can complete a job in ${t1} hours. Machine B can complete the same job in ${t2} hours. Working together, how many hours will it take? (Round to nearest hundredth.)`,
    correctAnswer: answer,
    acceptableAnswers: [answer, combined],
    tolerance: 0.02,
    explanation: `Combined rate = 1/${t1} + 1/${t2} = (${t2} + ${t1}) / ${t1 * t2} = ${t1 + t2}/${t1 * t2}. Time = ${t1 * t2}/${t1 + t2} ≈ ${answer} hours.`,
    category: 'Problem Solving',
    difficulty: 'hard',
  }
}

/**
 * Check if a student's answer matches the correct answer within tolerance.
 */
export function checkGridInAnswer(
  problem: GridInProblem,
  studentAnswer: number,
): boolean {
  const tol = problem.tolerance
  if (Math.abs(studentAnswer - problem.correctAnswer) <= tol) return true
  return problem.acceptableAnswers.some(
    ans => Math.abs(studentAnswer - ans) <= tol,
  )
}
