import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Pre-Algebra topics - Batch 6 (3 topics)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Reading Graphs and Charts
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'reading-graphs-charts',
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
          question: 'A bar graph shows book sales: Fiction sold 120 books, Non-Fiction sold 80 books, and Children\'s sold 100 books. How many more Fiction books were sold than Non-Fiction?',
          solution: 'Step 1: Read values from the graph.\nFiction: 120 books\nNon-Fiction: 80 books\n\nStep 2: Find the difference.\n120 - 80 = 40\n\nAnswer: 40 more Fiction books were sold than Non-Fiction books.',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'A line graph shows temperature over time: 8am (60°F), 12pm (75°F), 4pm (80°F), 8pm (70°F). During which time period did the temperature increase the most?',
          solution: 'Step 1: Calculate change for each period.\n8am to 12pm: 75 - 60 = 15°F increase\n12pm to 4pm: 80 - 75 = 5°F increase\n4pm to 8pm: 70 - 80 = -10°F (decrease)\n\nStep 2: Compare changes.\n15°F is the largest increase\n\nAnswer: 8am to 12pm (15°F increase)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'A pie chart shows how students get to school: Bus 45%, Walk 25%, Car 20%, Bike 10%. If there are 200 students total, how many walk to school?',
          solution: 'Step 1: Identify the percent who walk.\nWalk = 25%\n\nStep 2: Find 25% of 200 students.\n25% = 0.25\n0.25 × 200 = 50\n\nStep 3: Verify.\n25% of 200 = 1/4 of 200 = 50 ✓\n\nAnswer: 50 students walk to school',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'A double bar graph compares test scores for two classes. Class A: Test 1 (75), Test 2 (80), Test 3 (85). Class B: Test 1 (70), Test 2 (85), Test 3 (90). Which class showed greater overall improvement from Test 1 to Test 3?',
          solution: 'Step 1: Find Class A improvement.\nTest 1: 75\nTest 3: 85\nImprovement: 85 - 75 = 10 points\n\nStep 2: Find Class B improvement.\nTest 1: 70\nTest 3: 90\nImprovement: 90 - 70 = 20 points\n\nStep 3: Compare.\n20 points > 10 points\n\nAnswer: Class B showed greater improvement (20 points vs. 10 points)',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'A graph shows monthly rainfall. The y-axis starts at 2 inches instead of 0. Month A shows 3 inches and Month B shows 4 inches. Explain why this graph could be misleading and what it actually shows.',
          solution: 'Step 1: Identify the issue.\nY-axis starts at 2, not 0\nThis is a MISLEADING graph\n\nStep 2: Analyze visual impression.\nBar for Month B appears TWICE as tall as Month A\nThis exaggerates the difference visually\n\nStep 3: Calculate actual values.\nMonth A: 3 inches\nMonth B: 4 inches\nDifference: 4 - 3 = 1 inch\n\nStep 4: Calculate actual ratio.\n4/3 = 1.33 (only 33% more, not double)\n\nStep 5: Explain the problem.\nVisually looks like Month B has double the rain\nActually only has 33% more rain\nNot starting at zero distorts perception\n\nAnswer: The graph is misleading because not starting at 0 makes the difference appear much larger than it is. Month B has only 1 inch more rain (33% more), but visually appears to have twice as much.',
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
          front: 'What type of graph is best for comparing categories?',
          back: 'BAR GRAPH. Shows different categories with bars of different heights. Easy to compare at a glance.',
          hint: 'Bars for comparing categories'
        },
        {
          topicId: topic1.id,
          front: 'What type of graph is best for showing change over time?',
          back: 'LINE GRAPH. Shows trends and how data changes across time periods. Points connected by lines.',
          hint: 'Lines for trends over time'
        },
        {
          topicId: topic1.id,
          front: 'What type of graph is best for showing parts of a whole?',
          back: 'PIE CHART (circle graph). Shows percentages that add up to 100%. Each slice is part of the whole.',
          hint: 'Pie slices = parts of whole'
        },
        {
          topicId: topic1.id,
          front: 'What are the main parts every graph should have?',
          back: 'TITLE (what it shows), AXES with LABELS (what each axis represents), SCALE (numbers), DATA (bars/points/slices), LEGEND if needed.',
          hint: 'Title, axes, labels, scale, data, legend'
        },
        {
          topicId: topic1.id,
          front: 'What makes a graph misleading?',
          back: 'Not starting at 0, unequal intervals, missing labels, wrong scale, cherry-picked data, or distorted proportions.',
          hint: 'Not starting at 0 is most common'
        },
        {
          topicId: topic1.id,
          front: 'How do you identify a trend in a line graph?',
          back: 'Look at the overall direction: INCREASING (going up), DECREASING (going down), or CONSTANT (staying flat).',
          hint: 'Up = increasing, Down = decreasing, Flat = constant'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: reading-graphs-charts');
  }

  // Topic 2: Decimals and Percents
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'decimals-and-percents',
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
          question: 'Convert 0.45 to a percent.',
          solution: 'Step 1: Multiply by 100 (move decimal 2 places right).\n0.45 × 100 = 45\n\nStep 2: Add the percent symbol.\n45%\n\nAlternate method:\n0.45 = 45/100 = 45%\n\nAnswer: 45%',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'Convert 75% to a decimal.',
          solution: 'Step 1: Divide by 100 (move decimal 2 places left).\n75 ÷ 100 = 0.75\n\nStep 2: Remove the percent symbol.\n0.75\n\nAlternate method:\n75% = 75/100 = 0.75\n\nAnswer: 0.75',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'Convert 0.08 to a percent.',
          solution: 'Step 1: Multiply by 100.\n0.08 × 100 = 8\n\nStep 2: Add percent symbol.\n8%\n\nNote: Don\'t forget the 0.08 has a zero after the decimal!\n\nAnswer: 8%',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'Convert 125% to a decimal.',
          solution: 'Step 1: Recognize that percent can be greater than 100%.\n125% means 125 per 100\n\nStep 2: Divide by 100.\n125 ÷ 100 = 1.25\n\nStep 3: Understand the meaning.\n125% = 1.25 = more than the whole\n\nAnswer: 1.25',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'A baseball player had a batting average of 0.325 last season. This season it improved to 0.350. Express both as percents and find the increase in percentage points.',
          solution: 'Step 1: Convert 0.325 to percent.\n0.325 × 100 = 32.5%\n\nStep 2: Convert 0.350 to percent.\n0.350 × 100 = 35.0% or 35%\n\nStep 3: Find the increase in percentage points.\n35% - 32.5% = 2.5 percentage points\n\nNote: This is an ADDITIVE increase, not multiplicative.\nThe batting average increased BY 2.5 percentage points.\n\nAnswer: Last season: 32.5%, This season: 35%, Increase: 2.5 percentage points',
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
          front: 'How do you convert a decimal to a percent?',
          back: 'Multiply by 100 (move decimal 2 places RIGHT) and add %. Example: 0.6 → 60%',
          hint: 'Move decimal right 2 places, add %'
        },
        {
          topicId: topic2.id,
          front: 'How do you convert a percent to a decimal?',
          back: 'Divide by 100 (move decimal 2 places LEFT) and remove %. Example: 40% → 0.40 = 0.4',
          hint: 'Move decimal left 2 places, remove %'
        },
        {
          topicId: topic2.id,
          front: 'What does percent mean?',
          back: 'Per 100 or "out of 100". 25% means 25 out of 100, or 25/100.',
          hint: 'Percent = per 100'
        },
        {
          topicId: topic2.id,
          front: 'What is 0.5 as a percent?',
          back: '50% (0.5 × 100 = 50)',
          hint: 'Half = 50%'
        },
        {
          topicId: topic2.id,
          front: 'What is 100% as a decimal?',
          back: '1.0 or just 1 (100% = the whole thing)',
          hint: '100% = 1 whole'
        },
        {
          topicId: topic2.id,
          front: 'Can a percent be greater than 100%?',
          back: 'YES! Percents can be greater than 100% (like 150% = 1.5) or less than 1% (like 0.5% = 0.005).',
          hint: 'Percents can be any value, not limited to 0-100'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: decimals-and-percents');
  }

  // Topic 3: Absolute Value
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'absolute-value',
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
          question: 'Find |8|',
          solution: 'Step 1: Understand absolute value.\n|8| means "distance from 0"\n\nStep 2: Find distance.\n8 is 8 units from 0 on the number line\n\nStep 3: Distance is always positive.\n|8| = 8\n\nAnswer: 8',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'Find |-12|',
          solution: 'Step 1: Understand what absolute value does.\n|-12| means "distance of -12 from 0"\n\nStep 2: Find distance.\n-12 is 12 units away from 0\n\nStep 3: Distance is always positive.\n|-12| = 12\n\nAnswer: 12',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'Evaluate: |5| + |-3|',
          solution: 'Step 1: Find each absolute value separately.\n|5| = 5\n|-3| = 3\n\nStep 2: Add the results.\n5 + 3 = 8\n\nAnswer: 8',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'Solve for x: |x| = 7',
          solution: 'Step 1: Understand the question.\nWhat numbers are 7 units from 0?\n\nStep 2: Think about the number line.\nBoth 7 and -7 are 7 units from 0\n7 is 7 units to the right\n-7 is 7 units to the left\n\nStep 3: Check both solutions.\n|7| = 7 ✓\n|-7| = 7 ✓\n\nAnswer: x = 7 or x = -7 (two solutions)',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'The temperature at noon was 5°C. By midnight it was -3°C. What was the absolute change in temperature? Then determine if the temperature increased or decreased.',
          solution: 'Step 1: Find the actual change.\nChange = Final - Initial\nChange = -3 - 5 = -8°C\n\nStep 2: Find absolute change.\n|-8| = 8°C\nThe absolute change is 8 degrees\n\nStep 3: Determine direction.\nChange is negative (-8)\nSo temperature DECREASED\n\nStep 4: Interpret.\nThe temperature changed by 8 degrees (absolute value)\nIt went DOWN (negative change)\n\nAnswer: The absolute change was 8°C. The temperature decreased.',
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
          front: 'What is absolute value?',
          back: 'The DISTANCE from zero on the number line. Always NON-NEGATIVE (≥ 0). Uses symbol | |.',
          hint: 'Distance from zero, always positive or zero'
        },
        {
          topicId: topic3.id,
          front: 'What is |-5|?',
          back: '5 (distance from 0 is 5 units)',
          hint: 'Distance is always positive'
        },
        {
          topicId: topic3.id,
          front: 'What is |0|?',
          back: '0 (zero is 0 units from itself)',
          hint: 'Only number with absolute value of 0'
        },
        {
          topicId: topic3.id,
          front: 'Can absolute value ever be negative?',
          back: 'NO! Absolute value is always ≥ 0. It represents distance, which cannot be negative.',
          hint: 'Distance is never negative'
        },
        {
          topicId: topic3.id,
          front: 'If |x| = 6, what are the possible values of x?',
          back: 'x = 6 or x = -6 (both are 6 units from zero)',
          hint: 'Two numbers same distance from 0: positive and negative'
        },
        {
          topicId: topic3.id,
          front: 'What is the relationship between opposites and absolute value?',
          back: 'Opposites have the SAME absolute value. Example: |5| = |-5| = 5. They\'re the same distance from 0.',
          hint: 'Opposites = same distance from zero'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: absolute-value');
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
