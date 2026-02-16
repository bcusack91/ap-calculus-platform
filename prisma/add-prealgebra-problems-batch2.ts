import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Pre-Algebra topics - Batch 2 (3 topics)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Exponents and Powers
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'exponents-and-powers',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic1) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic1.id,
          question: 'Calculate 5³',
          solution: 'Step 1: Identify the base and exponent.\nBase = 5\nExponent = 3\n\nStep 2: Multiply the base by itself 3 times.\n5³ = 5 × 5 × 5\n\nStep 3: Calculate.\n5 × 5 = 25\n25 × 5 = 125\n\nAnswer: 5³ = 125',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'What is 10⁴?',
          solution: 'Step 1: Recognize the pattern for powers of 10.\n10⁴ means 1 followed by 4 zeros.\n\nStep 2: Calculate.\n10⁴ = 10 × 10 × 10 × 10 = 10,000\n\nShortcut: For 10ⁿ, write 1 followed by n zeros.\n\nAnswer: 10⁴ = 10,000',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'Simplify: 2³ × 2²',
          solution: 'Step 1: Use the product rule for exponents.\nWhen multiplying same bases, ADD exponents.\naᵐ × aⁿ = aᵐ⁺ⁿ\n\nStep 2: Apply the rule.\n2³ × 2² = 2³⁺² = 2⁵\n\nStep 3: Calculate if needed.\n2⁵ = 32\n\nAnswer: 2³ × 2² = 2⁵ = 32',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'Evaluate: (3²)³',
          solution: 'Step 1: Use the power rule for exponents.\nWhen raising a power to a power, MULTIPLY exponents.\n(aᵐ)ⁿ = aᵐˣⁿ\n\nStep 2: Apply the rule.\n(3²)³ = 3²ˣ³ = 3⁶\n\nStep 3: Calculate.\n3⁶ = 3 × 3 × 3 × 3 × 3 × 3\n= 9 × 9 × 9\n= 81 × 9\n= 729\n\nAnswer: (3²)³ = 3⁶ = 729',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'A bacteria colony doubles every hour. If it starts with 5 bacteria, how many bacteria will there be after 6 hours? Express your answer using exponents, then calculate.',
          solution: 'Step 1: Understand the pattern.\nStart: 5 bacteria\nAfter 1 hour: 5 × 2 = 10\nAfter 2 hours: 5 × 2 × 2 = 5 × 2²\nAfter 3 hours: 5 × 2 × 2 × 2 = 5 × 2³\n\nStep 2: Write the formula.\nAfter n hours: 5 × 2ⁿ\n\nStep 3: Calculate for 6 hours.\nBacteria = 5 × 2⁶\n\nStep 4: Evaluate 2⁶.\n2⁶ = 64\n\nStep 5: Multiply.\n5 × 64 = 320\n\nAnswer: 5 × 2⁶ = 320 bacteria after 6 hours',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic1.id,
          front: 'What does 4³ mean?',
          back: '4 multiplied by itself 3 times: 4 × 4 × 4 = 64. The 3 is called the exponent, 4 is the base.',
          hint: 'The exponent tells you how many times to multiply the base'
        },
        {
          topicId: topic1.id,
          front: 'What is the product rule for exponents?',
          back: 'When multiplying same bases, ADD the exponents: aᵐ × aⁿ = aᵐ⁺ⁿ. Example: 2³ × 2² = 2⁵',
          hint: 'Same base + multiplication = add exponents'
        },
        {
          topicId: topic1.id,
          front: 'What is the quotient rule for exponents?',
          back: 'When dividing same bases, SUBTRACT the exponents: aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Example: 5⁶ ÷ 5² = 5⁴',
          hint: 'Same base + division = subtract exponents'
        },
        {
          topicId: topic1.id,
          front: 'What is the power rule for exponents?',
          back: 'When raising a power to a power, MULTIPLY the exponents: (aᵐ)ⁿ = aᵐˣⁿ. Example: (2³)² = 2⁶',
          hint: 'Power to a power = multiply exponents'
        },
        {
          topicId: topic1.id,
          front: 'What is any number raised to the power of 0?',
          back: 'Any number (except 0) raised to the power of 0 equals 1: a⁰ = 1. Examples: 5⁰ = 1, 100⁰ = 1',
          hint: 'Anything to the zero power equals 1'
        },
        {
          topicId: topic1.id,
          front: 'What is any number raised to the power of 1?',
          back: 'Any number raised to the power of 1 equals itself: a¹ = a. Examples: 7¹ = 7, 25¹ = 25',
          hint: 'To the first power = itself'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: exponents-and-powers');
  }

  // Topic 2: Unit Rates
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'unit-rates',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic2) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic2.id,
          question: 'A car travels 240 miles in 4 hours. What is the unit rate in miles per hour?',
          solution: 'Step 1: Identify the quantities.\nDistance = 240 miles\nTime = 4 hours\n\nStep 2: Write as a rate.\n240 miles / 4 hours\n\nStep 3: Divide to find unit rate.\n240 ÷ 4 = 60\n\nStep 4: Include units.\n60 miles per hour (or 60 mph)\n\nAnswer: 60 miles per hour',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'If 3 pounds of apples cost $4.50, what is the unit price (cost per pound)?',
          solution: 'Step 1: Identify the quantities.\nCost = $4.50\nWeight = 3 pounds\n\nStep 2: Set up the division.\nUnit price = Total cost ÷ Number of pounds\n\nStep 3: Calculate.\n$4.50 ÷ 3 = $1.50\n\nStep 4: State the unit rate.\n$1.50 per pound\n\nAnswer: $1.50 per pound',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'A printer prints 450 pages in 15 minutes. How many pages does it print per minute?',
          solution: 'Step 1: Set up the rate.\n450 pages / 15 minutes\n\nStep 2: Divide to get unit rate.\n450 ÷ 15 = 30\n\nStep 3: Include units.\n30 pages per minute\n\nAnswer: 30 pages per minute',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'Store A sells 5 pounds of rice for $12.75. Store B sells 8 pounds for $19.20. Which store has the better unit price?',
          solution: 'Step 1: Find unit price for Store A.\n$12.75 ÷ 5 pounds = $2.55 per pound\n\nStep 2: Find unit price for Store B.\n$19.20 ÷ 8 pounds = $2.40 per pound\n\nStep 3: Compare.\nStore A: $2.55 per pound\nStore B: $2.40 per pound\n\nStore B has the LOWER price (better deal).\n\nAnswer: Store B has the better unit price at $2.40 per pound (vs. $2.55 at Store A)',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'A water tank is being filled at a rate of 8 gallons every 3 minutes. At this rate, how long will it take to fill a 120-gallon tank?',
          solution: 'Step 1: Find the unit rate (gallons per minute).\n8 gallons / 3 minutes\nUnit rate = 8/3 gallons per minute\n\nStep 2: Set up the equation.\nTime = Total gallons ÷ Rate\nTime = 120 ÷ (8/3)\n\nStep 3: Divide by a fraction (multiply by reciprocal).\n120 ÷ (8/3) = 120 × (3/8)\n= (120 × 3) / 8\n= 360 / 8\n= 45 minutes\n\nCheck: In 45 minutes at 8 gallons per 3 minutes:\n45 ÷ 3 = 15 (number of 3-minute periods)\n15 × 8 = 120 gallons ✓\n\nAnswer: 45 minutes',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic2.id,
          front: 'What is a unit rate?',
          back: 'A rate with a denominator of 1. It tells "how much per ONE unit." Example: 60 miles per 1 hour = 60 mph',
          hint: 'Unit = one, so divide until you get "per 1"'
        },
        {
          topicId: topic2.id,
          front: 'How do you find a unit rate?',
          back: 'Divide the first quantity by the second quantity. Example: 150 miles in 3 hours → 150 ÷ 3 = 50 mph',
          hint: 'Divide the numerator by the denominator'
        },
        {
          topicId: topic2.id,
          front: 'What is a unit price?',
          back: 'The cost per ONE item or unit. Example: If 4 pencils cost $2, the unit price is $2 ÷ 4 = $0.50 per pencil',
          hint: 'Total cost divided by number of items'
        },
        {
          topicId: topic2.id,
          front: 'Why are unit rates useful for comparing?',
          back: 'Unit rates make it easy to compare different quantities. When everything is "per 1 unit," you can directly compare the numbers.',
          hint: 'Same denominator makes comparison easier'
        },
        {
          topicId: topic2.id,
          front: 'What does "miles per hour" mean?',
          back: 'Miles traveled in ONE hour. If a car goes 60 mph, it travels 60 miles every hour.',
          hint: '"Per" means "for each" or "in one"'
        },
        {
          topicId: topic2.id,
          front: 'How do you use a unit rate to solve problems?',
          back: 'Multiply the unit rate by the number of units. Example: At 50 mph for 3 hours → 50 × 3 = 150 miles',
          hint: 'Unit rate × quantity = total'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: unit-rates');
  }

  // Topic 3: Percent Applications
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'percent-applications',
      category: {
        courseId: course.id
      }
    }
  });

  if (topic3) {
    // Add 5 practice problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: topic3.id,
          question: 'What is 20% of 80?',
          solution: 'Method 1: Convert percent to decimal and multiply.\nStep 1: Convert 20% to decimal.\n20% = 20/100 = 0.20\n\nStep 2: Multiply.\n0.20 × 80 = 16\n\nMethod 2: Use the fraction.\n20% = 20/100 = 1/5\n1/5 of 80 = 80 ÷ 5 = 16\n\nAnswer: 20% of 80 = 16',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'A shirt originally costs $40. It is on sale for 25% off. What is the sale price?',
          solution: 'Step 1: Find the discount amount.\n25% of $40\n0.25 × 40 = $10 discount\n\nStep 2: Subtract from original price.\n$40 - $10 = $30\n\nAlternate method:\nIf 25% off, you pay 75%\n75% of $40 = 0.75 × 40 = $30\n\nAnswer: $30',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'A restaurant bill is $45. You want to leave a 18% tip. How much should the tip be?',
          solution: 'Step 1: Convert percent to decimal.\n18% = 0.18\n\nStep 2: Multiply by the bill amount.\nTip = 0.18 × $45\n= $8.10\n\nStep 3: Total bill (if needed).\n$45 + $8.10 = $53.10\n\nAnswer: The tip should be $8.10 (total: $53.10)',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'In a class of 25 students, 15 are girls. What percent of the class are girls?',
          solution: 'Step 1: Write as a fraction.\nGirls/Total = 15/25\n\nStep 2: Convert to decimal.\n15 ÷ 25 = 0.60\n\nStep 3: Convert to percent.\n0.60 = 60%\n\nAlternate: Simplify fraction first.\n15/25 = 3/5\n3/5 = 0.60 = 60%\n\nAnswer: 60% of the class are girls',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'A store marks up items by 40% above cost. If an item costs the store $30, what price do they sell it for? If they then have a 20% off sale, what is the final sale price?',
          solution: 'Part 1: Find selling price with 40% markup.\nMarkup amount = 40% of $30\n= 0.40 × 30 = $12\n\nSelling price = $30 + $12 = $42\n\nPart 2: Find sale price with 20% off.\n20% off means pay 80%\nSale price = 80% of $42\n= 0.80 × 42 = $33.60\n\nAlternate for Part 2:\nDiscount = 20% of $42 = 0.20 × 42 = $8.40\nSale price = $42 - $8.40 = $33.60\n\nAnswer: Regular selling price is $42. Sale price is $33.60.',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Add 6 flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: topic3.id,
          front: 'How do you find "what percent of" a number?',
          back: 'Convert the percent to a decimal and MULTIPLY. Example: 25% of 60 = 0.25 × 60 = 15',
          hint: 'Of = multiply'
        },
        {
          topicId: topic3.id,
          front: 'What does "percent off" mean?',
          back: 'Subtract that percent from the original price. Example: 30% off $50 = subtract $15 (30% of $50), pay $35',
          hint: 'Find the discount, then subtract from original'
        },
        {
          topicId: topic3.id,
          front: 'How do you calculate sales tax?',
          back: 'Multiply the price by the tax rate (as a decimal), then ADD to the original price. Example: 8% tax on $100 = $100 + (0.08 × $100) = $108',
          hint: 'Tax is ADDED to the price'
        },
        {
          topicId: topic3.id,
          front: 'How do you find what percent one number is of another?',
          back: 'Divide the part by the whole, then convert to percent. Example: 15 out of 60 = 15/60 = 0.25 = 25%',
          hint: 'Part ÷ whole, then × 100%'
        },
        {
          topicId: topic3.id,
          front: 'What is a tip/gratuity?',
          back: 'A percent of the bill you add for service. Common: 15-20%. Calculate: multiply bill by percent. Example: 15% tip on $40 = 0.15 × $40 = $6',
          hint: 'Multiply the bill amount by the tip percent'
        },
        {
          topicId: topic3.id,
          front: 'What is the shortcut for finding the final price after a percent discount?',
          back: 'Subtract the discount percent from 100%, then multiply. Example: 25% off means pay 75%, so multiply by 0.75',
          hint: 'If 25% off, you pay 75% = 0.75'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: percent-applications');
  }

  console.log('\n✨ Successfully added problems and flashcards to 3 topics!');
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
