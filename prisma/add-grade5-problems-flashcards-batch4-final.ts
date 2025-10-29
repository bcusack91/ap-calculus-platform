import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 5 Math - Batch 4 (Final - 5 topics)...\n');

  // Topic 1: Line Graphs
  const lineGraphs = await prisma.topic.findFirst({
    where: { slug: 'line-graphs' }
  });

  if (lineGraphs) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: lineGraphs.id,
          question: 'This line graph shows temperature throughout the day. At what time was the temperature highest?\n\nTime: 8am(65°), 10am(70°), 12pm(78°), 2pm(82°), 4pm(80°), 6pm(72°)',
          solution: 'Look at all the temperatures on the graph:\n8am: 65°\n10am: 70°\n12pm: 78°\n2pm: 82° ← Highest point\n4pm: 80°\n6pm: 72°\n\nThe highest temperature is 82°, which occurred at 2pm.\n\nAnswer: 2pm (82°F)',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: lineGraphs.id,
          question: 'Using the temperature graph from the previous problem, during which time period did the temperature decrease the most?',
          solution: 'Calculate the change for each time period:\n\n8am to 10am: 70° - 65° = +5° (increase)\n10am to 12pm: 78° - 70° = +8° (increase)\n12pm to 2pm: 82° - 78° = +4° (increase)\n2pm to 4pm: 80° - 82° = -2° (decrease)\n4pm to 6pm: 72° - 80° = -8° (decrease) ← Largest decrease\n\nThe steepest downward line is from 4pm to 6pm.\n\nAnswer: 4pm to 6pm (decreased 8°)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: lineGraphs.id,
          question: 'A line graph shows plant height over 5 weeks: Week 1(2cm), Week 2(5cm), Week 3(8cm), Week 4(11cm), Week 5(14cm). What is the pattern? Predict the height at Week 6.',
          solution: 'Step 1: Find the pattern\n5 - 2 = 3cm\n8 - 5 = 3cm\n11 - 8 = 3cm\n14 - 11 = 3cm\n\nThe plant grows 3cm each week.\n\nStep 2: Predict Week 6\n14 + 3 = 17cm\n\nThis would show as a line graph with a constant upward slope (steady increase).\n\nAnswer: The plant grows 3cm per week. Week 6 height will be 17cm.',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: lineGraphs.id,
          question: 'The graph shows money in Sarah\'s savings account over 6 months. In which month(s) did the amount stay the same?\n\nJan($50), Feb($75), Mar($100), Apr($100), May($125), Jun($150)',
          solution: 'Look for time periods where the line is flat (horizontal).\n\nJan to Feb: $75 - $50 = +$25 (increase)\nFeb to Mar: $100 - $75 = +$25 (increase)\nMar to Apr: $100 - $100 = $0 (no change) ← Flat line\nApr to May: $125 - $100 = +$25 (increase)\nMay to Jun: $150 - $125 = +$25 (increase)\n\nFrom March to April, the amount stayed at $100.\n\nAnswer: March to April (the amount stayed at $100)',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: lineGraphs.id,
          question: 'Two students track their reading. In Week 1, both read 2 books. By Week 4, Student A read 8 books total and Student B read 5 books total. If both students\' graphs show straight lines, who is reading at a faster rate? How many more books per week?',
          solution: 'Student A:\nWeek 1: 2 books\nWeek 4: 8 books\nChange: 8 - 2 = 6 books in 3 weeks\nRate: 6 ÷ 3 = 2 books per week\n\nStudent B:\nWeek 1: 2 books\nWeek 4: 5 books\nChange: 5 - 2 = 3 books in 3 weeks\nRate: 3 ÷ 3 = 1 book per week\n\nCompare rates:\nStudent A: 2 books/week\nStudent B: 1 book/week\nDifference: 2 - 1 = 1 book per week\n\nOn a line graph, Student A\'s line would be steeper.\n\nAnswer: Student A is reading faster, by 1 more book per week.',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: lineGraphs.id,
          front: 'What type of data is best shown on a line graph?',
          back: 'Data that changes over time (temperature, growth, sales, etc.)',
          hint: 'Think: trends and changes'
        },
        {
          topicId: lineGraphs.id,
          front: 'What does a line going UP from left to right show?',
          back: 'An increase or growth in the data',
          hint: 'Rising line = rising values'
        },
        {
          topicId: lineGraphs.id,
          front: 'What does a FLAT (horizontal) line show on a graph?',
          back: 'No change - the value stays the same during that time period',
          hint: 'Flat = no change'
        },
        {
          topicId: lineGraphs.id,
          front: 'What is the difference between a steep line and a gradual line?',
          back: 'Steep = rapid change (big change in short time). Gradual = slow change (small change over longer time).',
          hint: 'Steepness shows speed of change'
        },
        {
          topicId: lineGraphs.id,
          front: 'What are the two axes on a line graph usually called?',
          back: 'Horizontal axis (x-axis, often time) and Vertical axis (y-axis, the measured quantity)',
          hint: 'x is horizontal, y is vertical'
        },
        {
          topicId: lineGraphs.id,
          front: 'Why must the scale on a line graph have equal intervals?',
          back: 'To accurately show the data - unequal intervals would distort the information.',
          hint: 'Equal spacing = accurate representation'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: line-graphs');
  }

  // Topic 2: Measures of Center
  const measuresCenter = await prisma.topic.findFirst({
    where: { slug: 'measures-of-center' }
  });

  if (measuresCenter) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: measuresCenter.id,
          question: 'Find the mean of: 8, 12, 10, 15, 5',
          solution: 'Step 1: Add all the numbers\n8 + 12 + 10 + 15 + 5 = 50\n\nStep 2: Count how many numbers\nThere are 5 numbers\n\nStep 3: Divide the sum by the count\n50 ÷ 5 = 10\n\nAnswer: Mean = 10',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: measuresCenter.id,
          question: 'Find the median of: 15, 22, 18, 30, 12',
          solution: 'Step 1: Put the numbers in order from least to greatest\n12, 15, 18, 22, 30\n\nStep 2: Find the middle number\nThere are 5 numbers, so the middle one is the 3rd number\n\n12, 15, **18**, 22, 30\n\nAnswer: Median = 18',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: measuresCenter.id,
          question: 'Find the mode of: 7, 3, 9, 7, 5, 7, 2, 9',
          solution: 'Step 1: Count how many times each number appears\n2 appears 1 time\n3 appears 1 time\n5 appears 1 time\n7 appears 3 times ← Most frequent\n9 appears 2 times\n\nStep 2: Find the number that appears most often\n7 appears 3 times, more than any other number\n\nAnswer: Mode = 7',
          difficulty: 'EASY',
          order: 3
        },
        {
          topicId: measuresCenter.id,
          question: 'Find the mean and median of: 5, 8, 10, 12, 100. Which better represents the typical value? Explain.',
          solution: 'Mean:\n5 + 8 + 10 + 12 + 100 = 135\n135 ÷ 5 = 27\n\nMedian:\nNumbers are already in order: 5, 8, 10, 12, 100\nMiddle number = 10\n\nComparison:\nMean = 27\nMedian = 10\n\nThe median (10) better represents the typical value because the mean (27) is pulled up by the outlier 100. Most of the numbers (5, 8, 10, 12) are close to 10, not 27.\n\nAnswer: Mean = 27, Median = 10. The median (10) is more representative because 100 is an outlier.',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: measuresCenter.id,
          question: 'The test scores are: 85, 90, 88, 85, 92, 88, 85. Find the mean, median, and mode. If the teacher can only report one measure, which should they use and why?',
          solution: 'Mean:\n85 + 90 + 88 + 85 + 92 + 88 + 85 = 613\n613 ÷ 7 = 87.57 (about 87.6)\n\nMedian:\nOrder: 85, 85, 85, 88, 88, 90, 92\nMiddle (4th number): 88\n\nMode:\n85 appears 3 times ← Most frequent\n88 appears 2 times\n90 appears 1 time\n92 appears 1 time\nMode = 85\n\nSummary:\nMean = 87.6\nMedian = 88\nMode = 85\n\nRecommendation: The teacher should report the mean (87.6) or median (88) because they\'re very close and represent the center of the data well. The mode (85) is the lowest score that appears most often, so it might make the class look worse than it is.\n\nAnswer: Mean = 87.6, Median = 88, Mode = 85. Best to report: mean or median.',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: measuresCenter.id,
          front: 'How do you calculate the mean?',
          back: 'Add all the numbers and divide by how many numbers there are.',
          hint: 'Sum ÷ Count'
        },
        {
          topicId: measuresCenter.id,
          front: 'How do you find the median?',
          back: 'Put numbers in order, then find the middle number. With an even count, average the two middle numbers.',
          hint: 'Order first, then find the middle'
        },
        {
          topicId: measuresCenter.id,
          front: 'What is the mode?',
          back: 'The number that appears most frequently in a data set.',
          hint: 'Most Often Determines Everything'
        },
        {
          topicId: measuresCenter.id,
          front: 'Can a data set have more than one mode?',
          back: 'Yes! If two or more numbers tie for appearing most often, they\'re all modes (bimodal or multimodal).',
          hint: 'Multiple numbers can tie for most frequent'
        },
        {
          topicId: measuresCenter.id,
          front: 'Which measure of center is most affected by outliers?',
          back: 'The mean - extreme values pull it up or down significantly.',
          hint: 'Mean gets "pulled" by extreme values'
        },
        {
          topicId: measuresCenter.id,
          front: 'Find the median: 3, 7, 2, 9, 5',
          back: '5 (Order: 2, 3, 5, 7, 9 - middle is 5)',
          hint: 'Remember to order first!'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: measures-of-center');
  }

  // Topic 3: Multiplying Decimals (already had content, adding problems/flashcards)
  const multiplyDecimals = await prisma.topic.findFirst({
    where: { slug: 'multiplying-decimals' }
  });

  if (multiplyDecimals) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: multiplyDecimals.id,
          question: 'Multiply: 3.2 × 4',
          solution: 'Step 1: Ignore the decimal and multiply\n32 × 4 = 128\n\nStep 2: Count decimal places in the original problem\n3.2 has 1 decimal place\n4 has 0 decimal places\nTotal: 1 decimal place\n\nStep 3: Place the decimal in the answer\n128 → 12.8 (1 decimal place)\n\nAnswer: 12.8',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: multiplyDecimals.id,
          question: 'Calculate: 0.5 × 0.6',
          solution: 'Step 1: Multiply without decimals\n5 × 6 = 30\n\nStep 2: Count total decimal places\n0.5 has 1 decimal place\n0.6 has 1 decimal place\nTotal: 1 + 1 = 2 decimal places\n\nStep 3: Place the decimal\n30 → 0.30 = 0.3 (2 decimal places from the right)\n\nAnswer: 0.3',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: multiplyDecimals.id,
          question: 'A book costs $12.50. How much do 3 books cost?',
          solution: 'Multiply: 12.50 × 3\n\nStep 1: Multiply without the decimal\n1250 × 3 = 3750\n\nStep 2: Count decimal places\n12.50 has 2 decimal places\n3 has 0 decimal places\nTotal: 2 decimal places\n\nStep 3: Place the decimal\n3750 → 37.50\n\nAnswer: $37.50',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: multiplyDecimals.id,
          question: 'Multiply: 2.4 × 1.5',
          solution: 'Step 1: Multiply without decimals\n24 × 15 = 360\n\nStep 2: Count decimal places\n2.4 has 1 decimal place\n1.5 has 1 decimal place\nTotal: 1 + 1 = 2 decimal places\n\nStep 3: Place the decimal\n360 → 3.60 = 3.6\n\nAnswer: 3.6',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: multiplyDecimals.id,
          question: 'A rectangle has length 4.5 cm and width 2.8 cm. What is the area?',
          solution: 'Area = length × width\nArea = 4.5 × 2.8\n\nStep 1: Multiply without decimals\n45 × 28 = 1260\n\nBreak it down:\n45 × 28\n= 45 × 20 + 45 × 8\n= 900 + 360\n= 1260\n\nStep 2: Count decimal places\n4.5 has 1 decimal place\n2.8 has 1 decimal place\nTotal: 2 decimal places\n\nStep 3: Place the decimal\n1260 → 12.60 = 12.6\n\nAnswer: 12.6 square cm',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: multiplyDecimals.id,
          front: 'What is the first step when multiplying decimals?',
          back: 'Ignore the decimal points and multiply the numbers as whole numbers.',
          hint: 'Pretend they\'re whole numbers first'
        },
        {
          topicId: multiplyDecimals.id,
          front: 'How do you know where to place the decimal in the answer?',
          back: 'Count the total decimal places in both factors, then place the decimal that many places from the right in the product.',
          hint: 'Add up decimal places from both numbers'
        },
        {
          topicId: multiplyDecimals.id,
          front: 'What is 10 × 0.5?',
          back: '5 (or 5.0)',
          hint: 'Multiplying by 10 moves the decimal right one place'
        },
        {
          topicId: multiplyDecimals.id,
          front: 'How many decimal places are in 3.45 × 2.1?',
          back: '3 decimal places (3.45 has 2, and 2.1 has 1, so 2 + 1 = 3)',
          hint: 'Add the decimal places from both numbers'
        },
        {
          topicId: multiplyDecimals.id,
          front: 'Estimate: 4.8 × 3.1',
          back: 'About 15 (round to 5 × 3 = 15)',
          hint: 'Round to make it easier'
        },
        {
          topicId: multiplyDecimals.id,
          front: 'True or False: Multiplying by a decimal less than 1 makes the product smaller.',
          back: 'True! For example, 10 × 0.5 = 5, which is smaller than 10.',
          hint: 'Think of 0.5 as half'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: multiplying-decimals');
  }

  // Topic 4: Dividing Decimals (already had content, adding problems/flashcards)
  const divideDecimals = await prisma.topic.findFirst({
    where: { slug: 'dividing-decimals' }
  });

  if (divideDecimals) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: divideDecimals.id,
          question: 'Divide: 8.4 ÷ 2',
          solution: 'When dividing by a whole number, divide normally and keep the decimal in the same place.\n\n  4.2\n2)8.4\n  8\n  --\n  0.4\n  0.4\n  ---\n    0\n\nAnswer: 4.2',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: divideDecimals.id,
          question: 'Calculate: 15 ÷ 0.5',
          solution: 'When dividing by a decimal, move the decimal point to make the divisor a whole number.\n\nStep 1: Move decimal in 0.5 one place right → 5\nStep 2: Move decimal in 15 the same amount → 150\nStep 3: Divide 150 ÷ 5 = 30\n\nAnswer: 30',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: divideDecimals.id,
          question: 'Sarah paid $18.75 for 5 notebooks. How much did each notebook cost?',
          solution: 'Divide the total cost by the number of notebooks:\n18.75 ÷ 5\n\n  3.75\n5)18.75\n  15\n  ---\n   3.7\n   3.5\n   ---\n   0.25\n   0.25\n   ----\n      0\n\nAnswer: $3.75 per notebook',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: divideDecimals.id,
          question: 'Divide: 6.3 ÷ 0.9',
          solution: 'Step 1: Move decimal in divisor (0.9) one place right → 9\nStep 2: Move decimal in dividend (6.3) one place right → 63\nStep 3: Divide 63 ÷ 9 = 7\n\nAnswer: 7',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: divideDecimals.id,
          question: 'A ribbon 12.6 meters long is cut into pieces that are 0.35 meters each. How many pieces can be made?',
          solution: 'Divide: 12.6 ÷ 0.35\n\nStep 1: Move decimal 2 places right in both numbers\n12.6 → 1260\n0.35 → 35\n\nStep 2: Divide 1260 ÷ 35\n\n   36\n35)1260\n   105\n   ---\n   210\n   210\n   ---\n     0\n\nAnswer: 36 pieces',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: divideDecimals.id,
          front: 'When dividing by a decimal, what must you do first?',
          back: 'Move the decimal point to the right in the divisor to make it a whole number, then move it the same number of places in the dividend.',
          hint: 'Make the divisor (outside number) a whole number'
        },
        {
          topicId: divideDecimals.id,
          front: 'What is 10 ÷ 0.1?',
          back: '100',
          hint: 'Dividing by 0.1 is the same as multiplying by 10'
        },
        {
          topicId: divideDecimals.id,
          front: 'Calculate: 4.8 ÷ 2',
          back: '2.4',
          hint: 'Keep the decimal aligned when dividing'
        },
        {
          topicId: divideDecimals.id,
          front: 'When dividing decimals, where does the decimal point go in the quotient?',
          back: 'Directly above where it is in the dividend (after adjusting for divisor being a whole number).',
          hint: 'Line it up above the dividend\'s decimal'
        },
        {
          topicId: divideDecimals.id,
          front: 'True or False: Dividing by a decimal less than 1 makes the quotient larger.',
          back: 'True! For example, 10 ÷ 0.5 = 20, which is larger than 10.',
          hint: 'Think of 0.5 as half - how many halves in 10?'
        },
        {
          topicId: divideDecimals.id,
          front: 'Estimate: 25.2 ÷ 4.8',
          back: 'About 5 (round to 25 ÷ 5 = 5)',
          hint: 'Round both numbers to make it easier'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: dividing-decimals');
  }

  console.log('\n✨ Successfully added problems and flashcards to all 5 topics!');
  console.log('\n🎉 GRADE 5 MATH COMPLETE! All topics now have content, practice problems, and flashcards!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
