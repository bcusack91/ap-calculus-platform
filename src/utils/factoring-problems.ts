// Factoring problem generators for different types

export interface FactoringProblem {
  problem: string // LaTeX format
  answer: string // Factored form in LaTeX
  type: 'gcf' | 'gcf-identify' | 'difference-of-squares' | 'simple-trinomials' | 'complex-trinomials' | 'mixed'
  hint?: string
  gcfOnly?: string // For gcf-identify problems, just the GCF
}

// GCF Identification Problems (just identify the GCF, don't factor)
const gcfIdentifyProblems: FactoringProblem[] = [
  {
    problem: '6x^2 + 9x',
    answer: '3x',
    gcfOnly: '3x',
    type: 'gcf-identify',
    hint: 'Look at both coefficients (6 and 9) and variables (x² and x)'
  },
  {
    problem: '12x^3 - 8x^2',
    answer: '4x^2',
    gcfOnly: '4x^2',
    type: 'gcf-identify',
    hint: 'GCF of 12 and 8 is 4, lowest power of x is x²'
  },
  {
    problem: '15y^4 + 10y^2',
    answer: '5y^2',
    gcfOnly: '5y^2',
    type: 'gcf-identify',
    hint: 'GCF of 15 and 10 is 5, lowest power of y is y²'
  },
  {
    problem: '18a^3b - 12a^2b^2',
    answer: '6a^2b',
    gcfOnly: '6a^2b',
    type: 'gcf-identify',
    hint: 'GCF of 18 and 12 is 6, lowest powers: a² and b'
  },
  {
    problem: '20x^4 - 15x^3 + 10x^2',
    answer: '5x^2',
    gcfOnly: '5x^2',
    type: 'gcf-identify',
    hint: 'GCF of 20, 15, and 10 is 5, lowest power of x is x²'
  },
  {
    problem: '8m^3n^2 + 12m^2n^3',
    answer: '4m^2n^2',
    gcfOnly: '4m^2n^2',
    type: 'gcf-identify',
    hint: 'GCF of 8 and 12 is 4, lowest powers: m² and n²'
  },
  {
    problem: '21x^5 - 14x^3 + 7x',
    answer: '7x',
    gcfOnly: '7x',
    type: 'gcf-identify',
    hint: 'GCF of 21, 14, and 7 is 7, lowest power of x is x'
  },
  {
    problem: '16p^4q^2 - 24p^2q^3',
    answer: '8p^2q^2',
    gcfOnly: '8p^2q^2',
    type: 'gcf-identify',
    hint: 'GCF of 16 and 24 is 8, lowest powers: p² and q²'
  }
]

// GCF Problems
const gcfProblems: FactoringProblem[] = [
  {
    problem: '6x^2 + 9x',
    answer: '3x(2x + 3)',
    type: 'gcf',
    hint: 'The GCF is 3x'
  },
  {
    problem: '12x^3 - 8x^2',
    answer: '4x^2(3x - 2)',
    type: 'gcf',
    hint: 'The GCF is 4x²'
  },
  {
    problem: '15y^4 + 10y^2',
    answer: '5y^2(3y^2 + 2)',
    type: 'gcf',
    hint: 'The GCF is 5y²'
  },
  {
    problem: '18a^3b - 12a^2b^2',
    answer: '6a^2b(3a - 2b)',
    type: 'gcf',
    hint: 'The GCF is 6a²b'
  },
  {
    problem: '20x^4 - 15x^3 + 10x^2',
    answer: '5x^2(4x^2 - 3x + 2)',
    type: 'gcf',
    hint: 'The GCF is 5x²'
  },
  {
    problem: '8m^3n^2 + 12m^2n^3',
    answer: '4m^2n^2(2m + 3n)',
    type: 'gcf',
    hint: 'The GCF is 4m²n²'
  },
  {
    problem: '21x^5 - 14x^3 + 7x',
    answer: '7x(3x^4 - 2x^2 + 1)',
    type: 'gcf',
    hint: 'The GCF is 7x'
  },
  {
    problem: '16p^4q^2 - 24p^2q^3',
    answer: '8p^2q^2(2p^2 - 3q)',
    type: 'gcf',
    hint: 'The GCF is 8p²q²'
  }
]

// Difference of Squares Problems
const differenceOfSquaresProblems: FactoringProblem[] = [
  {
    problem: 'x^2 - 16',
    answer: '(x + 4)(x - 4)',
    type: 'difference-of-squares',
    hint: 'Pattern: a² - b² = (a + b)(a - b)'
  },
  {
    problem: 'x^2 - 25',
    answer: '(x + 5)(x - 5)',
    type: 'difference-of-squares',
    hint: '25 = 5²'
  },
  {
    problem: '4x^2 - 9',
    answer: '(2x + 3)(2x - 3)',
    type: 'difference-of-squares',
    hint: '4x² = (2x)² and 9 = 3²'
  },
  {
    problem: '9x^2 - 16',
    answer: '(3x + 4)(3x - 4)',
    type: 'difference-of-squares',
    hint: '9x² = (3x)² and 16 = 4²'
  },
  {
    problem: '25x^2 - 36',
    answer: '(5x + 6)(5x - 6)',
    type: 'difference-of-squares',
    hint: '25x² = (5x)² and 36 = 6²'
  },
  {
    problem: 'x^2 - 100',
    answer: '(x + 10)(x - 10)',
    type: 'difference-of-squares',
    hint: '100 = 10²'
  },
  {
    problem: '16x^2 - 49',
    answer: '(4x + 7)(4x - 7)',
    type: 'difference-of-squares',
    hint: '16x² = (4x)² and 49 = 7²'
  },
  {
    problem: '49x^2 - 64y^2',
    answer: '(7x + 8y)(7x - 8y)',
    type: 'difference-of-squares',
    hint: '49x² = (7x)² and 64y² = (8y)²'
  },
  {
    problem: 'x^4 - 16',
    answer: '(x^2 + 4)(x^2 - 4)',
    type: 'difference-of-squares',
    hint: 'x⁴ = (x²)², then factor (x² - 4) further'
  }
]

// Simple Trinomials (leading coefficient = 1)
const simpleTrinomialProblems: FactoringProblem[] = [
  {
    problem: 'x^2 + 5x + 6',
    answer: '(x + 2)(x + 3)',
    type: 'simple-trinomials',
    hint: 'Find two numbers that multiply to 6 and add to 5'
  },
  {
    problem: 'x^2 + 7x + 12',
    answer: '(x + 3)(x + 4)',
    type: 'simple-trinomials',
    hint: 'Find two numbers that multiply to 12 and add to 7'
  },
  {
    problem: 'x^2 - 5x + 6',
    answer: '(x - 2)(x - 3)',
    type: 'simple-trinomials',
    hint: 'Both numbers are negative: multiply to 6, add to -5'
  },
  {
    problem: 'x^2 + 8x + 15',
    answer: '(x + 3)(x + 5)',
    type: 'simple-trinomials',
    hint: 'Find two numbers that multiply to 15 and add to 8'
  },
  {
    problem: 'x^2 - 7x + 12',
    answer: '(x - 3)(x - 4)',
    type: 'simple-trinomials',
    hint: 'Both numbers are negative'
  },
  {
    problem: 'x^2 + 2x - 15',
    answer: '(x + 5)(x - 3)',
    type: 'simple-trinomials',
    hint: 'One positive, one negative: multiply to -15, add to 2'
  },
  {
    problem: 'x^2 - 2x - 15',
    answer: '(x - 5)(x + 3)',
    type: 'simple-trinomials',
    hint: 'One positive, one negative: multiply to -15, add to -2'
  },
  {
    problem: 'x^2 + 9x + 20',
    answer: '(x + 4)(x + 5)',
    type: 'simple-trinomials',
    hint: 'Find two numbers that multiply to 20 and add to 9'
  },
  {
    problem: 'x^2 - 8x + 15',
    answer: '(x - 3)(x - 5)',
    type: 'simple-trinomials',
    hint: 'Both numbers are negative'
  },
  {
    problem: 'x^2 + x - 12',
    answer: '(x + 4)(x - 3)',
    type: 'simple-trinomials',
    hint: 'Multiply to -12, add to 1'
  },
  {
    problem: 'x^2 - 3x - 18',
    answer: '(x - 6)(x + 3)',
    type: 'simple-trinomials',
    hint: 'Multiply to -18, add to -3'
  },
  {
    problem: 'x^2 + 11x + 24',
    answer: '(x + 3)(x + 8)',
    type: 'simple-trinomials',
    hint: 'Find two numbers that multiply to 24 and add to 11'
  }
]

// Complex Trinomials (leading coefficient ≠ 1)
const complexTrinomialProblems: FactoringProblem[] = [
  {
    problem: '2x^2 + 7x + 3',
    answer: '(2x + 1)(x + 3)',
    type: 'complex-trinomials',
    hint: 'AC method: 2×3 = 6, find two numbers that multiply to 6 and add to 7'
  },
  {
    problem: '2x^2 + 5x + 3',
    answer: '(2x + 3)(x + 1)',
    type: 'complex-trinomials',
    hint: 'AC method: 2×3 = 6, need 2 and 3'
  },
  {
    problem: '3x^2 + 10x + 8',
    answer: '(3x + 4)(x + 2)',
    type: 'complex-trinomials',
    hint: 'AC method: 3×8 = 24, find two numbers that multiply to 24 and add to 10'
  },
  {
    problem: '3x^2 - 10x + 8',
    answer: '(3x - 4)(x - 2)',
    type: 'complex-trinomials',
    hint: 'AC method: 3×8 = 24, need -4 and -6'
  },
  {
    problem: '2x^2 - 7x + 3',
    answer: '(2x - 1)(x - 3)',
    type: 'complex-trinomials',
    hint: 'AC method: 2×3 = 6, need -1 and -6'
  },
  {
    problem: '4x^2 + 12x + 5',
    answer: '(2x + 1)(2x + 5)',
    type: 'complex-trinomials',
    hint: 'AC method: 4×5 = 20, find two numbers that add to 12'
  },
  {
    problem: '6x^2 + 13x + 6',
    answer: '(2x + 3)(3x + 2)',
    type: 'complex-trinomials',
    hint: 'AC method: 6×6 = 36, need 4 and 9'
  },
  {
    problem: '3x^2 + 7x + 2',
    answer: '(3x + 1)(x + 2)',
    type: 'complex-trinomials',
    hint: 'AC method: 3×2 = 6, need 1 and 6'
  },
  {
    problem: '5x^2 + 13x + 6',
    answer: '(5x + 3)(x + 2)',
    type: 'complex-trinomials',
    hint: 'AC method: 5×6 = 30, need 3 and 10'
  },
  {
    problem: '2x^2 - 5x - 3',
    answer: '(2x + 1)(x - 3)',
    type: 'complex-trinomials',
    hint: 'AC method: 2×(-3) = -6, need 1 and -6'
  }
]

// Mixed problems (all types combined)
const mixedProblems: FactoringProblem[] = [
  ...gcfProblems.slice(0, 2),
  ...differenceOfSquaresProblems.slice(0, 2),
  ...simpleTrinomialProblems.slice(0, 3),
  ...complexTrinomialProblems.slice(0, 2),
  // Additional mixed problems
  {
    problem: '3x^2 - 75',
    answer: '3(x + 5)(x - 5)',
    type: 'mixed',
    hint: 'First factor out the GCF of 3, then use difference of squares'
  },
  {
    problem: '2x^2 + 10x + 12',
    answer: '2(x + 2)(x + 3)',
    type: 'mixed',
    hint: 'First factor out the GCF of 2'
  },
  {
    problem: '4x^2 - 100',
    answer: '4(x + 5)(x - 5)',
    type: 'mixed',
    hint: 'First factor out the GCF of 4'
  }
]

// Get random problem by type
export function getRandomFactoringProblem(type: 'gcf' | 'gcf-identify' | 'difference-of-squares' | 'simple-trinomials' | 'complex-trinomials' | 'mixed'): FactoringProblem {
  let problems: FactoringProblem[]
  
  switch (type) {
    case 'gcf':
      problems = gcfProblems
      break
    case 'gcf-identify':
      problems = gcfIdentifyProblems
      break
    case 'difference-of-squares':
      problems = differenceOfSquaresProblems
      break
    case 'simple-trinomials':
      problems = simpleTrinomialProblems
      break
    case 'complex-trinomials':
      problems = complexTrinomialProblems
      break
    case 'mixed':
      problems = mixedProblems
      break
  }
  
  return problems[Math.floor(Math.random() * problems.length)]
}

// Normalize answer for comparison (remove spaces, handle parentheses order)
export function normalizeFactoredForm(expression: string): string {
  // Remove all spaces
  let normalized = expression.replace(/\s/g, '')
  
  // Handle common variations
  // Convert ** to ^ for exponents
  normalized = normalized.replace(/\*\*/g, '^')
  
  // Handle multiplication symbols
  normalized = normalized.replace(/×/g, '*').replace(/·/g, '*')
  
  // For simple cases, try to sort binomials in standard order
  // This handles cases like (x+3)(x+2) vs (x+2)(x+3)
  
  return normalized.toLowerCase()
}

// Check if answer is correct (with some flexibility for equivalent forms)
export function checkFactoringAnswer(userAnswer: string, correctAnswer: string): boolean {
  const userNorm = normalizeFactoredForm(userAnswer)
  const correctNorm = normalizeFactoredForm(correctAnswer)
  
  // Direct match
  if (userNorm === correctNorm) return true
  
  // Check for reversed binomial order
  // e.g., (x+2)(x+3) vs (x+3)(x+2)
  const reversedCheck = reverseFactorOrder(userNorm)
  if (reversedCheck === correctNorm) return true
  
  // Check for different but equivalent forms
  // e.g., (2x+1)(x+3) vs (x+3)(2x+1)
  const userParts = extractFactors(userNorm)
  const correctParts = extractFactors(correctNorm)
  
  if (userParts && correctParts) {
    // Sort both sets of factors and compare
    const userSorted = userParts.sort().join('')
    const correctSorted = correctParts.sort().join('')
    if (userSorted === correctSorted) return true
  }
  
  return false
}

// Helper: Extract individual factors from factored form
function extractFactors(expression: string): string[] | null {
  // Match parentheses groups
  const matches = expression.match(/\([^)]+\)/g)
  return matches
}

// Helper: Reverse factor order
function reverseFactorOrder(expression: string): string {
  const factors = extractFactors(expression)
  if (!factors || factors.length < 2) return expression
  
  // Get any leading coefficient (outside parentheses)
  const leadingMatch = expression.match(/^(\d+)/)
  const leading = leadingMatch ? leadingMatch[1] : ''
  
  return leading + factors.reverse().join('')
}
