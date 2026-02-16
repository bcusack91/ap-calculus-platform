import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Grade 8 Math practice problems and flashcards - Batch 1 (3 topics)...\n');

  // Topic 1: Integer Exponents
  const integerExponents = await prisma.topic.findFirst({
    where: { slug: 'integer-exponents' }
  });

  if (integerExponents) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: integerExponents.id,
          question: 'Simplify: 5⁰',
          solution: 'Any non-zero number raised to the power of 0 equals 1.\n\n5⁰ = 1\n\nAnswer: 1',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: integerExponents.id,
          question: 'Simplify: 3⁻²',
          solution: 'Use the negative exponent rule: a⁻ⁿ = 1/aⁿ\n\n3⁻² = 1/3² = 1/9\n\nAnswer: 1/9',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: integerExponents.id,
          question: 'Simplify: 2³ × 2⁻⁵',
          solution: 'Use the product rule: aᵐ × aⁿ = aᵐ⁺ⁿ\n\n2³ × 2⁻⁵ = 2³⁺⁽⁻⁵⁾ = 2⁻² = 1/2² = 1/4\n\nAnswer: 1/4',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: integerExponents.id,
          question: 'Simplify: (4⁻²)³',
          solution: 'Use the power rule: (aᵐ)ⁿ = aᵐⁿ\n\n(4⁻²)³ = 4⁻⁶ = 1/4⁶ = 1/4096\n\nAnswer: 1/4096',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: integerExponents.id,
          question: 'Simplify and write with positive exponents: (2x⁻³y²)⁻²',
          solution: 'Apply the power rule to each factor:\n\n(2x⁻³y²)⁻² = 2⁻² × (x⁻³)⁻² × (y²)⁻²\n\n= 2⁻² × x⁶ × y⁻⁴\n\nWrite with positive exponents:\n\n= x⁶/(2² × y⁴) = x⁶/(4y⁴)\n\nAnswer: x⁶/(4y⁴)',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: integerExponents.id,
          front: 'What is the zero exponent rule?',
          back: 'a⁰ = 1 (for any non-zero number a)',
          hint: 'Any non-zero number to the power of 0'
        },
        {
          topicId: integerExponents.id,
          front: 'What is the negative exponent rule?',
          back: 'a⁻ⁿ = 1/aⁿ (flip to denominator and make exponent positive)',
          hint: 'Negative exponent means reciprocal'
        },
        {
          topicId: integerExponents.id,
          front: 'What is the product rule for exponents?',
          back: 'aᵐ × aⁿ = aᵐ⁺ⁿ (same base, add exponents)',
          hint: 'When multiplying, add the exponents'
        },
        {
          topicId: integerExponents.id,
          front: 'What is the quotient rule for exponents?',
          back: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ (same base, subtract exponents)',
          hint: 'When dividing, subtract the exponents'
        },
        {
          topicId: integerExponents.id,
          front: 'What is the power rule for exponents?',
          back: '(aᵐ)ⁿ = aᵐⁿ (multiply the exponents)',
          hint: 'Power to a power'
        },
        {
          topicId: integerExponents.id,
          front: 'Simplify: x⁻³',
          back: '1/x³',
          hint: 'Use the negative exponent rule'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: integer-exponents');
  }

  // Topic 2: Operations with Scientific Notation
  const scientificNotation = await prisma.topic.findFirst({
    where: { slug: 'operations-scientific-notation' }
  });

  if (scientificNotation) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: scientificNotation.id,
          question: 'Multiply: (3 × 10⁴) × (2 × 10⁵)',
          solution: 'Multiply coefficients and add exponents:\n\n(3 × 2) × 10⁴⁺⁵ = 6 × 10⁹\n\nAnswer: 6 × 10⁹',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: scientificNotation.id,
          question: 'Divide: (8 × 10⁶) ÷ (4 × 10²)',
          solution: 'Divide coefficients and subtract exponents:\n\n(8 ÷ 4) × 10⁶⁻² = 2 × 10⁴\n\nAnswer: 2 × 10⁴',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: scientificNotation.id,
          question: 'Add: (5.2 × 10³) + (3.1 × 10³)',
          solution: 'Exponents are the same, so add coefficients:\n\n(5.2 + 3.1) × 10³ = 8.3 × 10³\n\nAnswer: 8.3 × 10³',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: scientificNotation.id,
          question: 'Subtract: (7.5 × 10⁵) - (2.3 × 10⁴)',
          solution: 'First, match the exponents. Rewrite 2.3 × 10⁴ as 0.23 × 10⁵:\n\n(7.5 × 10⁵) - (0.23 × 10⁵) = (7.5 - 0.23) × 10⁵ = 7.27 × 10⁵\n\nAnswer: 7.27 × 10⁵',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: scientificNotation.id,
          question: 'Calculate: [(6 × 10⁸) × (4 × 10⁻³)] ÷ (8 × 10²)',
          solution: 'First multiply, then divide:\n\nMultiply: (6 × 4) × 10⁸⁺⁽⁻³⁾ = 24 × 10⁵\n\nAdjust: 24 × 10⁵ = 2.4 × 10⁶\n\nDivide: (2.4 × 10⁶) ÷ (8 × 10²) = (2.4 ÷ 8) × 10⁶⁻² = 0.3 × 10⁴\n\nAdjust: 0.3 × 10⁴ = 3 × 10³\n\nAnswer: 3 × 10³',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: scientificNotation.id,
          front: 'How do you multiply numbers in scientific notation?',
          back: 'Multiply the coefficients and add the exponents',
          hint: 'Think: multiply × add'
        },
        {
          topicId: scientificNotation.id,
          front: 'How do you divide numbers in scientific notation?',
          back: 'Divide the coefficients and subtract the exponents',
          hint: 'Think: divide ÷ subtract'
        },
        {
          topicId: scientificNotation.id,
          front: 'How do you add or subtract numbers in scientific notation?',
          back: 'First make the exponents the same, then add or subtract the coefficients',
          hint: 'Exponents must match first!'
        },
        {
          topicId: scientificNotation.id,
          front: 'What is proper scientific notation form?',
          back: 'a × 10ⁿ where 1 ≤ a < 10 and n is an integer',
          hint: 'Coefficient must be between 1 and 10'
        },
        {
          topicId: scientificNotation.id,
          front: 'How do you adjust 24 × 10⁵ to proper scientific notation?',
          back: 'Move decimal left 1 place, add 1 to exponent: 2.4 × 10⁶',
          hint: 'Move decimal, adjust exponent'
        },
        {
          topicId: scientificNotation.id,
          front: 'How do you adjust 0.3 × 10⁴ to proper scientific notation?',
          back: 'Move decimal right 1 place, subtract 1 from exponent: 3 × 10³',
          hint: 'Move decimal, adjust exponent'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: operations-scientific-notation');
  }

  // Topic 3: Slope and Rate of Change
  const slopeRateChange = await prisma.topic.findFirst({
    where: { slug: 'slope-rate-of-change' }
  });

  if (slopeRateChange) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: slopeRateChange.id,
          question: 'Find the slope between points (2, 5) and (6, 13).',
          solution: 'Use the slope formula: m = (y₂ - y₁)/(x₂ - x₁)\n\nm = (13 - 5)/(6 - 2) = 8/4 = 2\n\nAnswer: m = 2',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: slopeRateChange.id,
          question: 'What is the slope of a line passing through points (3, 7) and (3, -2)?',
          solution: 'Use the slope formula: m = (y₂ - y₁)/(x₂ - x₁)\n\nm = (-2 - 7)/(3 - 3) = -9/0\n\nDivision by zero means the slope is undefined. This is a vertical line.\n\nAnswer: Undefined',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: slopeRateChange.id,
          question: 'A line passes through (1, 4) and (5, 4). Find the slope and describe the line.',
          solution: 'Use the slope formula: m = (y₂ - y₁)/(x₂ - x₁)\n\nm = (4 - 4)/(5 - 1) = 0/4 = 0\n\nSlope of 0 means this is a horizontal line.\n\nAnswer: m = 0, horizontal line',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: slopeRateChange.id,
          question: 'A car travels 240 miles in 4 hours. Find the rate of change (speed) in miles per hour.',
          solution: 'Rate of change = change in distance / change in time\n\nRate = 240 miles / 4 hours = 60 miles/hour\n\nThis is the slope if we graph distance vs. time.\n\nAnswer: 60 mph',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: slopeRateChange.id,
          question: 'Line A passes through (2, 5) and (4, 9). Line B passes through (1, 3) and (3, -1). Determine if the lines are parallel, perpendicular, or neither.',
          solution: 'Find slope of each line:\n\nLine A: m₁ = (9 - 5)/(4 - 2) = 4/2 = 2\n\nLine B: m₂ = (-1 - 3)/(3 - 1) = -4/2 = -2\n\nCheck:\n- Parallel? No (slopes not equal: 2 ≠ -2)\n- Perpendicular? m₁ × m₂ = 2 × (-2) = -4 ≠ -1\n\nAnswer: Neither parallel nor perpendicular',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: slopeRateChange.id,
          front: 'What is the slope formula?',
          back: 'm = (y₂ - y₁)/(x₂ - x₁) or m = rise/run',
          hint: 'Change in y over change in x'
        },
        {
          topicId: slopeRateChange.id,
          front: 'What does a positive slope mean?',
          back: 'The line goes upward from left to right (as x increases, y increases)',
          hint: 'Think uphill'
        },
        {
          topicId: slopeRateChange.id,
          front: 'What does a negative slope mean?',
          back: 'The line goes downward from left to right (as x increases, y decreases)',
          hint: 'Think downhill'
        },
        {
          topicId: slopeRateChange.id,
          front: 'What is the slope of a horizontal line?',
          back: '0 (zero)',
          hint: 'No rise, all run'
        },
        {
          topicId: slopeRateChange.id,
          front: 'What is the slope of a vertical line?',
          back: 'Undefined (division by zero)',
          hint: 'All rise, no run'
        },
        {
          topicId: slopeRateChange.id,
          front: 'How are slopes of perpendicular lines related?',
          back: 'Their slopes are negative reciprocals (m₁ × m₂ = -1)',
          hint: 'Multiply to get -1'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: slope-rate-of-change');
  }

  console.log('\n✨ Successfully added practice problems and flashcards for 3 topics!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
