// Mini-Boss Questions for Factoring Part 2
// Question types: gcf-identify, gcf-factor, simple-diff-squares, complex-diff-squares, combined

export interface MiniBossQuestion {
  id: string
  type: 'gcf-identify' | 'gcf-factor' | 'simple-diff-squares' | 'complex-diff-squares' | 'combined'
  question: string // LaTeX format
  correctAnswer: string
  options: {
    label: 'A' | 'B' | 'C' | 'D'
    value: string // LaTeX format
    isCorrect: boolean
    explanation?: string // Why this is wrong (for common mistakes)
  }[]
}

// Category 1: Identify GCF (10 questions)
export const gcfIdentifyQuestions: MiniBossQuestion[] = [
  {
    id: 'gcf-id-1',
    type: 'gcf-identify',
    question: '12x^3 + 18x^2',
    correctAnswer: '6x^2',
    options: [
      { label: 'A', value: '6x^2', isCorrect: true },
      { label: 'B', value: '6x', isCorrect: false, explanation: 'Forgot to include highest power common to both terms' },
      { label: 'C', value: '3x^2', isCorrect: false, explanation: 'GCF of 12 and 18 is 6, not 3' },
      { label: 'D', value: '12x^2', isCorrect: false, explanation: '12 is not a factor of 18' }
    ]
  },
  {
    id: 'gcf-id-2',
    type: 'gcf-identify',
    question: '15x^4y^2 - 25x^2y^3',
    correctAnswer: '5x^2y^2',
    options: [
      { label: 'A', value: '5x^2y^2', isCorrect: true },
      { label: 'B', value: '5xy', isCorrect: false, explanation: 'Need lowest power common to both (x² and y²)' },
      { label: 'C', value: '15x^2y^2', isCorrect: false, explanation: '15 is not a factor of 25' },
      { label: 'D', value: '5x^4y^3', isCorrect: false, explanation: 'Need lowest powers, not highest' }
    ]
  },
  {
    id: 'gcf-id-3',
    type: 'gcf-identify',
    question: '8a^3b^2 + 12a^2b',
    correctAnswer: '4a^2b',
    options: [
      { label: 'A', value: '4a^2b', isCorrect: true },
      { label: 'B', value: '4ab', isCorrect: false, explanation: 'Lowest power of a is a²' },
      { label: 'C', value: '2a^2b', isCorrect: false, explanation: 'GCF of 8 and 12 is 4, not 2' },
      { label: 'D', value: '8a^2b', isCorrect: false, explanation: '8 is not a factor of 12' }
    ]
  },
  {
    id: 'gcf-id-4',
    type: 'gcf-identify',
    question: '21m^5 - 14m^3 + 7m^2',
    correctAnswer: '7m^2',
    options: [
      { label: 'A', value: '7m^2', isCorrect: true },
      { label: 'B', value: '7m', isCorrect: false, explanation: 'Lowest power of m is m²' },
      { label: 'C', value: 'm^2', isCorrect: false, explanation: 'Forgot the coefficient GCF of 7' },
      { label: 'D', value: '7m^3', isCorrect: false, explanation: 'Last term only has m², not m³' }
    ]
  },
  {
    id: 'gcf-id-5',
    type: 'gcf-identify',
    question: '30x^6 + 45x^4',
    correctAnswer: '15x^4',
    options: [
      { label: 'A', value: '15x^4', isCorrect: true },
      { label: 'B', value: '15x^2', isCorrect: false, explanation: 'Lowest power is x⁴, not x²' },
      { label: 'C', value: '5x^4', isCorrect: false, explanation: 'GCF of 30 and 45 is 15, not 5' },
      { label: 'D', value: '30x^4', isCorrect: false, explanation: '30 is not a factor of 45' }
    ]
  },
  {
    id: 'gcf-id-6',
    type: 'gcf-identify',
    question: '24p^4q^3 - 16p^3q^4',
    correctAnswer: '8p^3q^3',
    options: [
      { label: 'A', value: '8p^3q^3', isCorrect: true },
      { label: 'B', value: '8pq', isCorrect: false, explanation: 'Need lowest powers: p³ and q³' },
      { label: 'C', value: '4p^3q^3', isCorrect: false, explanation: 'GCF of 24 and 16 is 8, not 4' },
      { label: 'D', value: '8p^4q^4', isCorrect: false, explanation: 'Need lowest powers, not highest' }
    ]
  },
  {
    id: 'gcf-id-7',
    type: 'gcf-identify',
    question: '36x^2y - 48xy^2 + 60xy',
    correctAnswer: '12xy',
    options: [
      { label: 'A', value: '12xy', isCorrect: true },
      { label: 'B', value: '6xy', isCorrect: false, explanation: 'GCF of 36, 48, and 60 is 12, not 6' },
      { label: 'C', value: '12xy^2', isCorrect: false, explanation: 'Last term only has y, not y²' },
      { label: 'D', value: '12x^2y', isCorrect: false, explanation: 'Last term only has x, not x²' }
    ]
  },
  {
    id: 'gcf-id-8',
    type: 'gcf-identify',
    question: '18r^7s^3 + 27r^5s^5',
    correctAnswer: '9r^5s^3',
    options: [
      { label: 'A', value: '9r^5s^3', isCorrect: true },
      { label: 'B', value: '9rs', isCorrect: false, explanation: 'Need lowest powers: r⁵ and s³' },
      { label: 'C', value: '3r^5s^3', isCorrect: false, explanation: 'GCF of 18 and 27 is 9, not 3' },
      { label: 'D', value: '18r^5s^3', isCorrect: false, explanation: '18 is not a factor of 27' }
    ]
  },
  {
    id: 'gcf-id-9',
    type: 'gcf-identify',
    question: '42a^4b^2c - 35a^3b^3c^2',
    correctAnswer: '7a^3b^2c',
    options: [
      { label: 'A', value: '7a^3b^2c', isCorrect: true },
      { label: 'B', value: '7abc', isCorrect: false, explanation: 'Need lowest powers: a³, b², and c' },
      { label: 'C', value: '7a^4b^3c^2', isCorrect: false, explanation: 'Need lowest powers, not highest' },
      { label: 'D', value: '14a^3b^2c', isCorrect: false, explanation: 'GCF of 42 and 35 is 7, not 14' }
    ]
  },
  {
    id: 'gcf-id-10',
    type: 'gcf-identify',
    question: '20x^8 - 30x^5 + 10x^3',
    correctAnswer: '10x^3',
    options: [
      { label: 'A', value: '10x^3', isCorrect: true },
      { label: 'B', value: '10x', isCorrect: false, explanation: 'Lowest power is x³, not x' },
      { label: 'C', value: '5x^3', isCorrect: false, explanation: 'GCF of 20, 30, and 10 is 10, not 5' },
      { label: 'D', value: '10x^5', isCorrect: false, explanation: 'Last term only has x³, not x⁵' }
    ]
  }
]

// Category 2: Factor out GCF (10 questions)
export const gcfFactorQuestions: MiniBossQuestion[] = [
  {
    id: 'gcf-factor-1',
    type: 'gcf-factor',
    question: '12x^3 + 18x^2',
    correctAnswer: '6x^2(2x + 3)',
    options: [
      { label: 'A', value: '6x^2(2x + 3)', isCorrect: true },
      { label: 'B', value: '6x(2x^2 + 3x)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '3x^2(4x + 6)', isCorrect: false, explanation: 'Wrong GCF - should be 6x²' },
      { label: 'D', value: '6x^2(2x + 18)', isCorrect: false, explanation: 'Forgot to divide second term by 6x²' }
    ]
  },
  {
    id: 'gcf-factor-2',
    type: 'gcf-factor',
    question: '15x^4y^2 - 25x^2y^3',
    correctAnswer: '5x^2y^2(3x^2 - 5y)',
    options: [
      { label: 'A', value: '5x^2y^2(3x^2 - 5y)', isCorrect: true },
      { label: 'B', value: '5xy(3x^3y - 5xy^2)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '5x^2y^2(3x^2 + 5y)', isCorrect: false, explanation: 'Sign error - should be subtraction' },
      { label: 'D', value: '5x^2y^2(3x - 5y)', isCorrect: false, explanation: 'First term should be 3x², not 3x' }
    ]
  },
  {
    id: 'gcf-factor-3',
    type: 'gcf-factor',
    question: '8a^3b^2 + 12a^2b',
    correctAnswer: '4a^2b(2ab + 3)',
    options: [
      { label: 'A', value: '4a^2b(2ab + 3)', isCorrect: true },
      { label: 'B', value: '4ab(2a^2b + 3a)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '4a^2b(2ab + 12)', isCorrect: false, explanation: 'Forgot to divide second term by GCF' },
      { label: 'D', value: '2a^2b(4ab + 6)', isCorrect: false, explanation: 'Wrong GCF - should be 4a²b' }
    ]
  },
  {
    id: 'gcf-factor-4',
    type: 'gcf-factor',
    question: '21m^5 - 14m^3 + 7m^2',
    correctAnswer: '7m^2(3m^3 - 2m + 1)',
    options: [
      { label: 'A', value: '7m^2(3m^3 - 2m + 1)', isCorrect: true },
      { label: 'B', value: '7m(3m^4 - 2m^2 + m)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '7m^2(3m^3 + 2m + 1)', isCorrect: false, explanation: 'Sign error - middle term should be negative' },
      { label: 'D', value: '7m^2(3m^2 - 2m + 1)', isCorrect: false, explanation: 'First term should be 3m³, not 3m²' }
    ]
  },
  {
    id: 'gcf-factor-5',
    type: 'gcf-factor',
    question: '30x^6 + 45x^4',
    correctAnswer: '15x^4(2x^2 + 3)',
    options: [
      { label: 'A', value: '15x^4(2x^2 + 3)', isCorrect: true },
      { label: 'B', value: '15x^2(2x^4 + 3x^2)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '5x^4(6x^2 + 9)', isCorrect: false, explanation: 'Wrong GCF - should be 15x⁴' },
      { label: 'D', value: '15x^4(2x + 3)', isCorrect: false, explanation: 'First term should be 2x², not 2x' }
    ]
  },
  {
    id: 'gcf-factor-6',
    type: 'gcf-factor',
    question: '24p^4q^3 - 16p^3q^4',
    correctAnswer: '8p^3q^3(3p - 2q)',
    options: [
      { label: 'A', value: '8p^3q^3(3p - 2q)', isCorrect: true },
      { label: 'B', value: '8pq(3p^3q^2 - 2p^2q^3)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '8p^3q^3(3p + 2q)', isCorrect: false, explanation: 'Sign error - should be subtraction' },
      { label: 'D', value: '4p^3q^3(6p - 4q)', isCorrect: false, explanation: 'Wrong GCF - should be 8p³q³' }
    ]
  },
  {
    id: 'gcf-factor-7',
    type: 'gcf-factor',
    question: '36x^2y - 48xy^2 + 60xy',
    correctAnswer: '12xy(3x - 4y + 5)',
    options: [
      { label: 'A', value: '12xy(3x - 4y + 5)', isCorrect: true },
      { label: 'B', value: '6xy(6x - 8y + 10)', isCorrect: false, explanation: 'Wrong GCF - should be 12xy' },
      { label: 'C', value: '12xy(3x + 4y + 5)', isCorrect: false, explanation: 'Sign error - middle term should be negative' },
      { label: 'D', value: '12x(3xy - 4y^2 + 5y)', isCorrect: false, explanation: 'Didn\'t factor out y from GCF' }
    ]
  },
  {
    id: 'gcf-factor-8',
    type: 'gcf-factor',
    question: '18r^7s^3 + 27r^5s^5',
    correctAnswer: '9r^5s^3(2r^2 + 3s^2)',
    options: [
      { label: 'A', value: '9r^5s^3(2r^2 + 3s^2)', isCorrect: true },
      { label: 'B', value: '9rs(2r^6s^2 + 3r^4s^4)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '3r^5s^3(6r^2 + 9s^2)', isCorrect: false, explanation: 'Wrong GCF - should be 9r⁵s³' },
      { label: 'D', value: '9r^5s^3(2r + 3s)', isCorrect: false, explanation: 'Should be 2r² and 3s², not 2r and 3s' }
    ]
  },
  {
    id: 'gcf-factor-9',
    type: 'gcf-factor',
    question: '42a^4b^2c - 35a^3b^3c^2',
    correctAnswer: '7a^3b^2c(6a - 5bc)',
    options: [
      { label: 'A', value: '7a^3b^2c(6a - 5bc)', isCorrect: true },
      { label: 'B', value: '7abc(6a^3b - 5a^2b^2c)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '7a^3b^2c(6a + 5bc)', isCorrect: false, explanation: 'Sign error - should be subtraction' },
      { label: 'D', value: '7a^3b^2c(6 - 5bc)', isCorrect: false, explanation: 'First term should be 6a, not just 6' }
    ]
  },
  {
    id: 'gcf-factor-10',
    type: 'gcf-factor',
    question: '20x^8 - 30x^5 + 10x^3',
    correctAnswer: '10x^3(2x^5 - 3x^2 + 1)',
    options: [
      { label: 'A', value: '10x^3(2x^5 - 3x^2 + 1)', isCorrect: true },
      { label: 'B', value: '10x(2x^7 - 3x^4 + x^2)', isCorrect: false, explanation: 'Didn\'t factor out complete GCF' },
      { label: 'C', value: '5x^3(4x^5 - 6x^2 + 2)', isCorrect: false, explanation: 'Wrong GCF - should be 10x³' },
      { label: 'D', value: '10x^3(2x^5 + 3x^2 + 1)', isCorrect: false, explanation: 'Sign error - middle term should be negative' }
    ]
  }
]

// Category 3: Simple Difference of Squares (x² - something) (10 questions)
export const simpleDiffSquaresQuestions: MiniBossQuestion[] = [
  {
    id: 'simple-diff-1',
    type: 'simple-diff-squares',
    question: 'x^2 - 9',
    correctAnswer: '(x + 3)(x - 3)',
    options: [
      { label: 'A', value: '(x + 3)(x - 3)', isCorrect: true },
      { label: 'B', value: '(x - 3)(x - 3)', isCorrect: false, explanation: 'Both factors can\'t have subtraction' },
      { label: 'C', value: '(x + 3)(x + 3)', isCorrect: false, explanation: 'This would give x² + 6x + 9' },
      { label: 'D', value: '(x + 9)(x - 1)', isCorrect: false, explanation: 'Square root of 9 is 3, not 9' }
    ]
  },
  {
    id: 'simple-diff-2',
    type: 'simple-diff-squares',
    question: 'x^2 - 16',
    correctAnswer: '(x + 4)(x - 4)',
    options: [
      { label: 'A', value: '(x + 4)(x - 4)', isCorrect: true },
      { label: 'B', value: '(x + 2)(x - 8)', isCorrect: false, explanation: 'Square root of 16 is 4, not 2 and 8' },
      { label: 'C', value: '(x - 4)(x - 4)', isCorrect: false, explanation: 'This would give x² - 8x + 16' },
      { label: 'D', value: '(x + 16)(x - 1)', isCorrect: false, explanation: 'Square root of 16 is 4, not 16' }
    ]
  },
  {
    id: 'simple-diff-3',
    type: 'simple-diff-squares',
    question: 'x^2 - 49',
    correctAnswer: '(x + 7)(x - 7)',
    options: [
      { label: 'A', value: '(x + 7)(x - 7)', isCorrect: true },
      { label: 'B', value: '(x - 7)(x - 7)', isCorrect: false, explanation: 'Need one + and one -' },
      { label: 'C', value: '(x + 49)(x - 1)', isCorrect: false, explanation: 'Square root of 49 is 7, not 49' },
      { label: 'D', value: '(x + 7)^2', isCorrect: false, explanation: 'This would give x² + 14x + 49' }
    ]
  },
  {
    id: 'simple-diff-4',
    type: 'simple-diff-squares',
    question: 'x^2 - 100',
    correctAnswer: '(x + 10)(x - 10)',
    options: [
      { label: 'A', value: '(x + 10)(x - 10)', isCorrect: true },
      { label: 'B', value: '(x + 50)(x - 2)', isCorrect: false, explanation: 'Square root of 100 is 10' },
      { label: 'C', value: '(x - 10)(x - 10)', isCorrect: false, explanation: 'Need one + and one -' },
      { label: 'D', value: '(x + 5)(x - 20)', isCorrect: false, explanation: 'Square root of 100 is 10' }
    ]
  },
  {
    id: 'simple-diff-5',
    type: 'simple-diff-squares',
    question: 'x^2 - 64',
    correctAnswer: '(x + 8)(x - 8)',
    options: [
      { label: 'A', value: '(x + 8)(x - 8)', isCorrect: true },
      { label: 'B', value: '(x + 4)(x - 16)', isCorrect: false, explanation: 'Square root of 64 is 8' },
      { label: 'C', value: '(x + 8)(x + 8)', isCorrect: false, explanation: 'This would give x² + 16x + 64' },
      { label: 'D', value: '(x - 8)^2', isCorrect: false, explanation: 'This would give x² - 16x + 64' }
    ]
  },
  {
    id: 'simple-diff-6',
    type: 'simple-diff-squares',
    question: 'x^2 - 25',
    correctAnswer: '(x + 5)(x - 5)',
    options: [
      { label: 'A', value: '(x + 5)(x - 5)', isCorrect: true },
      { label: 'B', value: '(x - 5)(x - 5)', isCorrect: false, explanation: 'Need one + and one -' },
      { label: 'C', value: '(x + 1)(x - 25)', isCorrect: false, explanation: 'Square root of 25 is 5, not 25' },
      { label: 'D', value: '(x + 5)^2', isCorrect: false, explanation: 'This would give x² + 10x + 25' }
    ]
  },
  {
    id: 'simple-diff-7',
    type: 'simple-diff-squares',
    question: 'x^2 - 1',
    correctAnswer: '(x + 1)(x - 1)',
    options: [
      { label: 'A', value: '(x + 1)(x - 1)', isCorrect: true },
      { label: 'B', value: '(x - 1)(x - 1)', isCorrect: false, explanation: 'Need one + and one -' },
      { label: 'C', value: 'x(x - 1)', isCorrect: false, explanation: 'This would give x² - x, not x² - 1' },
      { label: 'D', value: '(x + 1)^2', isCorrect: false, explanation: 'This would give x² + 2x + 1' }
    ]
  },
  {
    id: 'simple-diff-8',
    type: 'simple-diff-squares',
    question: 'x^2 - 36',
    correctAnswer: '(x + 6)(x - 6)',
    options: [
      { label: 'A', value: '(x + 6)(x - 6)', isCorrect: true },
      { label: 'B', value: '(x + 3)(x - 12)', isCorrect: false, explanation: 'Square root of 36 is 6' },
      { label: 'C', value: '(x - 6)^2', isCorrect: false, explanation: 'This would give x² - 12x + 36' },
      { label: 'D', value: '(x + 6)(x + 6)', isCorrect: false, explanation: 'This would give x² + 12x + 36' }
    ]
  },
  {
    id: 'simple-diff-9',
    type: 'simple-diff-squares',
    question: 'x^2 - 81',
    correctAnswer: '(x + 9)(x - 9)',
    options: [
      { label: 'A', value: '(x + 9)(x - 9)', isCorrect: true },
      { label: 'B', value: '(x - 9)(x - 9)', isCorrect: false, explanation: 'Need one + and one -' },
      { label: 'C', value: '(x + 3)(x - 27)', isCorrect: false, explanation: 'Square root of 81 is 9' },
      { label: 'D', value: '(x + 81)(x - 1)', isCorrect: false, explanation: 'Square root of 81 is 9, not 81' }
    ]
  },
  {
    id: 'simple-diff-10',
    type: 'simple-diff-squares',
    question: 'x^2 - 4',
    correctAnswer: '(x + 2)(x - 2)',
    options: [
      { label: 'A', value: '(x + 2)(x - 2)', isCorrect: true },
      { label: 'B', value: '(x - 2)(x - 2)', isCorrect: false, explanation: 'Need one + and one -' },
      { label: 'C', value: '(x + 4)(x - 1)', isCorrect: false, explanation: 'Square root of 4 is 2, not 4' },
      { label: 'D', value: 'x(x - 4)', isCorrect: false, explanation: 'This would give x² - 4x, not x² - 4' }
    ]
  }
]

// Category 4: Complex Difference of Squares (10 questions)
export const complexDiffSquaresQuestions: MiniBossQuestion[] = [
  {
    id: 'complex-diff-1',
    type: 'complex-diff-squares',
    question: '25x^2 - 36y^4',
    correctAnswer: '(5x + 6y^2)(5x - 6y^2)',
    options: [
      { label: 'A', value: '(5x + 6y^2)(5x - 6y^2)', isCorrect: true },
      { label: 'B', value: '(5x + 6y)(5x - 6y)', isCorrect: false, explanation: 'Square root of y⁴ is y², not y' },
      { label: 'C', value: '(25x + 36y^2)(x - y^2)', isCorrect: false, explanation: 'Square root of 25x² is 5x, not 25x' },
      { label: 'D', value: '(5x - 6y^2)(5x - 6y^2)', isCorrect: false, explanation: 'Need one + and one -' }
    ]
  },
  {
    id: 'complex-diff-2',
    type: 'complex-diff-squares',
    question: '49a^2 - 64b^2',
    correctAnswer: '(7a + 8b)(7a - 8b)',
    options: [
      { label: 'A', value: '(7a + 8b)(7a - 8b)', isCorrect: true },
      { label: 'B', value: '(49a + 64b)(a - b)', isCorrect: false, explanation: 'Take square roots of coefficients' },
      { label: 'C', value: '(7a - 8b)(7a - 8b)', isCorrect: false, explanation: 'Need one + and one -' },
      { label: 'D', value: '(7a + 8b)^2', isCorrect: false, explanation: 'This would give 49a² + 112ab + 64b²' }
    ]
  },
  {
    id: 'complex-diff-3',
    type: 'complex-diff-squares',
    question: '9x^4 - 16y^2',
    correctAnswer: '(3x^2 + 4y)(3x^2 - 4y)',
    options: [
      { label: 'A', value: '(3x^2 + 4y)(3x^2 - 4y)', isCorrect: true },
      { label: 'B', value: '(3x + 4y)(3x - 4y)', isCorrect: false, explanation: 'Square root of x⁴ is x², not x' },
      { label: 'C', value: '(9x^2 + 16y)(x^2 - y)', isCorrect: false, explanation: 'Take square roots of coefficients' },
      { label: 'D', value: '(3x^2 - 4y)^2', isCorrect: false, explanation: 'This would give 9x⁴ - 24x²y + 16y²' }
    ]
  },
  {
    id: 'complex-diff-4',
    type: 'complex-diff-squares',
    question: '16m^4 - 25n^6',
    correctAnswer: '(4m^2 + 5n^3)(4m^2 - 5n^3)',
    options: [
      { label: 'A', value: '(4m^2 + 5n^3)(4m^2 - 5n^3)', isCorrect: true },
      { label: 'B', value: '(4m + 5n)(4m - 5n)', isCorrect: false, explanation: 'Wrong powers - need m² and n³' },
      { label: 'C', value: '(16m^2 + 25n^3)(m^2 - n^3)', isCorrect: false, explanation: 'Take square roots of coefficients' },
      { label: 'D', value: '(4m^2 - 5n^3)^2', isCorrect: false, explanation: 'Need one + and one -' }
    ]
  },
  {
    id: 'complex-diff-5',
    type: 'complex-diff-squares',
    question: '81p^2 - 100q^2',
    correctAnswer: '(9p + 10q)(9p - 10q)',
    options: [
      { label: 'A', value: '(9p + 10q)(9p - 10q)', isCorrect: true },
      { label: 'B', value: '(9p - 10q)(9p - 10q)', isCorrect: false, explanation: 'Need one + and one -' },
      { label: 'C', value: '(81p + 100q)(p - q)', isCorrect: false, explanation: 'Take square roots of coefficients' },
      { label: 'D', value: '(27p + 50q)(3p - 2q)', isCorrect: false, explanation: 'Square root of 81 is 9, and of 100 is 10' }
    ]
  },
  {
    id: 'complex-diff-6',
    type: 'complex-diff-squares',
    question: '4x^6 - 9y^2',
    correctAnswer: '(2x^3 + 3y)(2x^3 - 3y)',
    options: [
      { label: 'A', value: '(2x^3 + 3y)(2x^3 - 3y)', isCorrect: true },
      { label: 'B', value: '(2x + 3y)(2x - 3y)', isCorrect: false, explanation: 'Square root of x⁶ is x³, not x' },
      { label: 'C', value: '(4x^3 + 9y)(x^3 - y)', isCorrect: false, explanation: 'Take square roots of coefficients' },
      { label: 'D', value: '(2x^3 - 3y)^2', isCorrect: false, explanation: 'Need one + and one -' }
    ]
  },
  {
    id: 'complex-diff-7',
    type: 'complex-diff-squares',
    question: '36r^4 - 49s^2',
    correctAnswer: '(6r^2 + 7s)(6r^2 - 7s)',
    options: [
      { label: 'A', value: '(6r^2 + 7s)(6r^2 - 7s)', isCorrect: true },
      { label: 'B', value: '(6r + 7s)(6r - 7s)', isCorrect: false, explanation: 'Square root of r⁴ is r², not r' },
      { label: 'C', value: '(36r^2 + 49s)(r^2 - s)', isCorrect: false, explanation: 'Take square roots of coefficients' },
      { label: 'D', value: '(18r^2 + 7s)(2r^2 - 7s)', isCorrect: false, explanation: 'Square root of 36 is 6, not 18' }
    ]
  },
  {
    id: 'complex-diff-8',
    type: 'complex-diff-squares',
    question: '64a^4 - 121b^4',
    correctAnswer: '(8a^2 + 11b^2)(8a^2 - 11b^2)',
    options: [
      { label: 'A', value: '(8a^2 + 11b^2)(8a^2 - 11b^2)', isCorrect: true },
      { label: 'B', value: '(8a + 11b)(8a - 11b)', isCorrect: false, explanation: 'Square roots of a⁴ and b⁴ are a² and b²' },
      { label: 'C', value: '(64a^2 + 121b^2)(a^2 - b^2)', isCorrect: false, explanation: 'Take square roots of coefficients' },
      { label: 'D', value: '(8a^2 - 11b^2)^2', isCorrect: false, explanation: 'Need one + and one -' }
    ]
  },
  {
    id: 'complex-diff-9',
    type: 'complex-diff-squares',
    question: '100x^2 - 9y^4',
    correctAnswer: '(10x + 3y^2)(10x - 3y^2)',
    options: [
      { label: 'A', value: '(10x + 3y^2)(10x - 3y^2)', isCorrect: true },
      { label: 'B', value: '(10x + 3y)(10x - 3y)', isCorrect: false, explanation: 'Square root of y⁴ is y², not y' },
      { label: 'C', value: '(50x + 3y^2)(2x - 3y^2)', isCorrect: false, explanation: 'Square root of 100 is 10' },
      { label: 'D', value: '(10x - 3y^2)(10x - 3y^2)', isCorrect: false, explanation: 'Need one + and one -' }
    ]
  },
  {
    id: 'complex-diff-10',
    type: 'complex-diff-squares',
    question: '144m^6 - 25n^2',
    correctAnswer: '(12m^3 + 5n)(12m^3 - 5n)',
    options: [
      { label: 'A', value: '(12m^3 + 5n)(12m^3 - 5n)', isCorrect: true },
      { label: 'B', value: '(12m + 5n)(12m - 5n)', isCorrect: false, explanation: 'Square root of m⁶ is m³, not m' },
      { label: 'C', value: '(144m^3 + 25n)(m^3 - n)', isCorrect: false, explanation: 'Take square roots of coefficients' },
      { label: 'D', value: '(72m^3 + 5n)(2m^3 - 5n)', isCorrect: false, explanation: 'Square root of 144 is 12' }
    ]
  }
]

// Category 5: Combined - Factor COMPLETELY (GCF + Difference of Squares) (10 questions)
export const combinedQuestions: MiniBossQuestion[] = [
  {
    id: 'combined-1',
    type: 'combined',
    question: '2x^2 - 50',
    correctAnswer: '2(x + 5)(x - 5)',
    options: [
      { label: 'A', value: '2(x + 5)(x - 5)', isCorrect: true },
      { label: 'B', value: '(2x + 10)(x - 5)', isCorrect: false, explanation: 'Factor out GCF first, then use difference of squares' },
      { label: 'C', value: '2(x^2 - 25)', isCorrect: false, explanation: 'Continue factoring - x² - 25 is difference of squares' },
      { label: 'D', value: '(x + 5)(2x - 10)', isCorrect: false, explanation: 'Factor out GCF of 2 first' }
    ]
  },
  {
    id: 'combined-2',
    type: 'combined',
    question: '3x^2 - 75',
    correctAnswer: '3(x + 5)(x - 5)',
    options: [
      { label: 'A', value: '3(x + 5)(x - 5)', isCorrect: true },
      { label: 'B', value: '3(x^2 - 25)', isCorrect: false, explanation: 'Continue factoring - x² - 25 factors further' },
      { label: 'C', value: '(3x + 15)(x - 5)', isCorrect: false, explanation: 'Factor out GCF first' },
      { label: 'D', value: '(x + 5)(3x - 15)', isCorrect: false, explanation: 'Factor out GCF of 3 first' }
    ]
  },
  {
    id: 'combined-3',
    type: 'combined',
    question: '5x^2 - 45',
    correctAnswer: '5(x + 3)(x - 3)',
    options: [
      { label: 'A', value: '5(x + 3)(x - 3)', isCorrect: true },
      { label: 'B', value: '5(x^2 - 9)', isCorrect: false, explanation: 'Not completely factored - continue with difference of squares' },
      { label: 'C', value: '(5x + 15)(x - 3)', isCorrect: false, explanation: 'Factor out GCF of 5 first' },
      { label: 'D', value: '5(x - 3)^2', isCorrect: false, explanation: 'This would give 5(x² - 6x + 9)' }
    ]
  },
  {
    id: 'combined-4',
    type: 'combined',
    question: '4x^2 - 100',
    correctAnswer: '4(x + 5)(x - 5)',
    options: [
      { label: 'A', value: '4(x + 5)(x - 5)', isCorrect: true },
      { label: 'B', value: '4(x^2 - 25)', isCorrect: false, explanation: 'Not completely factored' },
      { label: 'C', value: '(2x + 10)(2x - 10)', isCorrect: false, explanation: 'Factor out GCF of 4 first' },
      { label: 'D', value: '2(2x + 10)(x - 5)', isCorrect: false, explanation: 'Factor 4, not 2, and simplify properly' }
    ]
  },
  {
    id: 'combined-5',
    type: 'combined',
    question: '7x^2 - 63',
    correctAnswer: '7(x + 3)(x - 3)',
    options: [
      { label: 'A', value: '7(x + 3)(x - 3)', isCorrect: true },
      { label: 'B', value: '7(x^2 - 9)', isCorrect: false, explanation: 'Must factor completely' },
      { label: 'C', value: '(7x + 21)(x - 3)', isCorrect: false, explanation: 'Factor out GCF first' },
      { label: 'D', value: '7(x - 3)^2', isCorrect: false, explanation: 'Need one + and one -' }
    ]
  },
  {
    id: 'combined-6',
    type: 'combined',
    question: '6x^2 - 96',
    correctAnswer: '6(x + 4)(x - 4)',
    options: [
      { label: 'A', value: '6(x + 4)(x - 4)', isCorrect: true },
      { label: 'B', value: '6(x^2 - 16)', isCorrect: false, explanation: 'Continue factoring x² - 16' },
      { label: 'C', value: '2(3x + 12)(x - 4)', isCorrect: false, explanation: 'Factor out complete GCF of 6' },
      { label: 'D', value: '(6x + 24)(x - 4)', isCorrect: false, explanation: 'Factor out GCF of 6 first' }
    ]
  },
  {
    id: 'combined-7',
    type: 'combined',
    question: '8x^2 - 32',
    correctAnswer: '8(x + 2)(x - 2)',
    options: [
      { label: 'A', value: '8(x + 2)(x - 2)', isCorrect: true },
      { label: 'B', value: '8(x^2 - 4)', isCorrect: false, explanation: 'Not completely factored' },
      { label: 'C', value: '4(2x + 4)(x - 2)', isCorrect: false, explanation: 'Factor out complete GCF of 8' },
      { label: 'D', value: '(4x + 8)(2x - 4)', isCorrect: false, explanation: 'Factor out GCF first' }
    ]
  },
  {
    id: 'combined-8',
    type: 'combined',
    question: '9x^2 - 81',
    correctAnswer: '9(x + 3)(x - 3)',
    options: [
      { label: 'A', value: '9(x + 3)(x - 3)', isCorrect: true },
      { label: 'B', value: '9(x^2 - 9)', isCorrect: false, explanation: 'Must factor x² - 9 further' },
      { label: 'C', value: '3(3x + 9)(x - 3)', isCorrect: false, explanation: 'Factor out complete GCF of 9' },
      { label: 'D', value: '(3x + 9)(3x - 9)', isCorrect: false, explanation: 'Factor out GCF of 9 first' }
    ]
  },
  {
    id: 'combined-9',
    type: 'combined',
    question: '12x^2 - 48',
    correctAnswer: '12(x + 2)(x - 2)',
    options: [
      { label: 'A', value: '12(x + 2)(x - 2)', isCorrect: true },
      { label: 'B', value: '12(x^2 - 4)', isCorrect: false, explanation: 'Continue factoring x² - 4' },
      { label: 'C', value: '4(3x + 6)(x - 2)', isCorrect: false, explanation: 'Factor out complete GCF of 12' },
      { label: 'D', value: '6(2x + 4)(x - 2)', isCorrect: false, explanation: 'Factor out complete GCF of 12' }
    ]
  },
  {
    id: 'combined-10',
    type: 'combined',
    question: '10x^2 - 160',
    correctAnswer: '10(x + 4)(x - 4)',
    options: [
      { label: 'A', value: '10(x + 4)(x - 4)', isCorrect: true },
      { label: 'B', value: '10(x^2 - 16)', isCorrect: false, explanation: 'Not completely factored' },
      { label: 'C', value: '5(2x + 8)(x - 4)', isCorrect: false, explanation: 'Factor out complete GCF of 10' },
      { label: 'D', value: '2(5x + 20)(x - 4)', isCorrect: false, explanation: 'Factor out complete GCF of 10' }
    ]
  }
]

// Export all questions by category
export const allMiniBossQuestions = {
  'gcf-identify': gcfIdentifyQuestions,
  'gcf-factor': gcfFactorQuestions,
  'simple-diff-squares': simpleDiffSquaresQuestions,
  'complex-diff-squares': complexDiffSquaresQuestions,
  'combined': combinedQuestions
}

// Get random question by type
export function getRandomMiniBossQuestion(
  type: 'gcf-identify' | 'gcf-factor' | 'simple-diff-squares' | 'complex-diff-squares' | 'combined',
  excludeIds: string[] = []
): MiniBossQuestion {
  const questions = allMiniBossQuestions[type].filter(q => !excludeIds.includes(q.id))
  return questions[Math.floor(Math.random() * questions.length)]
}
