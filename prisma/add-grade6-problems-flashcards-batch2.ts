import { PrismaClient, Difficulty } from '@prisma/client';

const prisma = new PrismaClient();

async function addGrade6ProblemsAndFlashcardsBatch2() {
  console.log('Adding practice problems and flashcards to Grade 6 Math - Batch 2...\n');

  // Get topic IDs
  const evaluatingExpressions = await prisma.topic.findFirst({
    where: { slug: 'evaluating-expressions' }
  });

  const solvingEquations = await prisma.topic.findFirst({
    where: { slug: 'solving-one-step-equations' }
  });

  const statisticalQuestions = await prisma.topic.findFirst({
    where: { slug: 'statistical-questions-data-display' }
  });

  if (!evaluatingExpressions || !solvingEquations || !statisticalQuestions) {
    throw new Error('Could not find one or more topics');
  }

  // Topic 1: Evaluating Expressions
  console.log('Adding problems and flashcards for: evaluating-expressions');

  await prisma.exampleProblem.deleteMany({
    where: { topicId: evaluatingExpressions.id }
  });
  await prisma.flashcard.deleteMany({
    where: { topicId: evaluatingExpressions.id }
  });

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: evaluatingExpressions.id,
        question: 'Evaluate: 5x + 3 when x = 4',
        solution: 'Step 1: Substitute 4 for x\n5(4) + 3\n\nStep 2: Multiply\n20 + 3\n\nStep 3: Add\n23\n\nAnswer: 23',
        difficulty: Difficulty.EASY,
        order: 1
      },
      {
        topicId: evaluatingExpressions.id,
        question: 'Evaluate: 12 - 2n when n = 3',
        solution: 'Step 1: Substitute 3 for n\n12 - 2(3)\n\nStep 2: Multiply\n12 - 6\n\nStep 3: Subtract\n6\n\nAnswer: 6',
        difficulty: Difficulty.EASY,
        order: 2
      },
      {
        topicId: evaluatingExpressions.id,
        question: 'Evaluate: 3(x + 4) when x = 5',
        solution: 'Step 1: Substitute 5 for x\n3(5 + 4)\n\nStep 2: Parentheses first - add inside\n3(9)\n\nStep 3: Multiply\n27\n\nAnswer: 27',
        difficulty: Difficulty.MEDIUM,
        order: 3
      },
      {
        topicId: evaluatingExpressions.id,
        question: 'Evaluate: 2a + 3b when a = 6 and b = 4',
        solution: 'Step 1: Substitute both values\n2(6) + 3(4)\n\nStep 2: Multiply each term\n12 + 12\n\nStep 3: Add\n24\n\nAnswer: 24',
        difficulty: Difficulty.MEDIUM,
        order: 4
      },
      {
        topicId: evaluatingExpressions.id,
        question: 'The formula for converting Celsius to Fahrenheit is F = 9C/5 + 32. What is the Fahrenheit temperature when C = 25°?',
        solution: 'Evaluate F = 9C/5 + 32 when C = 25\n\nStep 1: Substitute 25 for C\nF = 9(25)/5 + 32\n\nStep 2: Multiply in numerator\nF = 225/5 + 32\n\nStep 3: Divide\nF = 45 + 32\n\nStep 4: Add\nF = 77\n\nAnswer: 77°F',
        difficulty: Difficulty.HARD,
        order: 5
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: evaluatingExpressions.id,
        front: 'What does it mean to evaluate an expression?',
        back: 'To evaluate means to substitute numbers for variables and calculate the numerical value.\n\nExample: Evaluate 2x + 5 when x = 3 → 2(3) + 5 = 11',
        hint: 'Replace variables with numbers and calculate'
      },
      {
        topicId: evaluatingExpressions.id,
        front: 'What should you do when substituting a negative number?',
        back: 'Use parentheses around the negative number to avoid mistakes!\n\nExample: 3x when x = -2 → 3(-2) = -6',
        hint: 'Parentheses protect you from sign errors'
      },
      {
        topicId: evaluatingExpressions.id,
        front: 'When evaluating 2x² with x = 5, what do you do first?',
        back: 'Square the variable first (exponents before multiplication):\n2x² = 2(5²) = 2(25) = 50\n\nNOT (2×5)² = 10² = 100',
        hint: 'Remember PEMDAS - exponents come before multiplication'
      },
      {
        topicId: evaluatingExpressions.id,
        front: 'How do you evaluate an expression with two variables like 3x + 2y?',
        back: 'Substitute the value for each variable, then calculate.\n\nExample: If x = 4 and y = 5:\n3(4) + 2(5) = 12 + 10 = 22',
        hint: 'Replace each variable with its value'
      },
      {
        topicId: evaluatingExpressions.id,
        front: 'What order should you follow when evaluating expressions?',
        back: 'PEMDAS:\nParentheses\nExponents\nMultiplication and Division (left to right)\nAddition and Subtraction (left to right)',
        hint: 'Please Excuse My Dear Aunt Sally'
      },
      {
        topicId: evaluatingExpressions.id,
        front: 'What\'s the difference between evaluating and simplifying?',
        back: 'Evaluating: Substitute values and get a number (2x + 3 when x = 5 → 13)\n\nSimplifying: Combine like terms, no substitution (2x + 3x → 5x)',
        hint: 'Evaluating gives you a number, simplifying gives you a shorter expression'
      }
    ]
  });

  // Topic 2: Solving One-Step Equations
  console.log('Adding problems and flashcards for: solving-one-step-equations');

  await prisma.exampleProblem.deleteMany({
    where: { topicId: solvingEquations.id }
  });
  await prisma.flashcard.deleteMany({
    where: { topicId: solvingEquations.id }
  });

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: solvingEquations.id,
        question: 'Solve: x + 9 = 15',
        solution: 'Subtract 9 from both sides:\n\nx + 9 - 9 = 15 - 9\nx = 6\n\nCheck: 6 + 9 = 15 ✓\n\nAnswer: x = 6',
        difficulty: Difficulty.EASY,
        order: 1
      },
      {
        topicId: solvingEquations.id,
        question: 'Solve: y - 7 = 12',
        solution: 'Add 7 to both sides:\n\ny - 7 + 7 = 12 + 7\ny = 19\n\nCheck: 19 - 7 = 12 ✓\n\nAnswer: y = 19',
        difficulty: Difficulty.EASY,
        order: 2
      },
      {
        topicId: solvingEquations.id,
        question: 'Solve: 6n = 42',
        solution: 'Divide both sides by 6:\n\n6n ÷ 6 = 42 ÷ 6\nn = 7\n\nCheck: 6(7) = 42 ✓\n\nAnswer: n = 7',
        difficulty: Difficulty.MEDIUM,
        order: 3
      },
      {
        topicId: solvingEquations.id,
        question: 'Solve: x/5 = 8',
        solution: 'Multiply both sides by 5:\n\n(x/5) × 5 = 8 × 5\nx = 40\n\nCheck: 40/5 = 8 ✓\n\nAnswer: x = 40',
        difficulty: Difficulty.MEDIUM,
        order: 4
      },
      {
        topicId: solvingEquations.id,
        question: 'Maria saved some money. After spending $15 on a book, she has $42 left. Write and solve an equation to find how much money she had originally.',
        solution: 'Let m = original amount of money\n\nEquation: m - 15 = 42\n\nSolve by adding 15 to both sides:\nm - 15 + 15 = 42 + 15\nm = 57\n\nCheck: 57 - 15 = 42 ✓\n\nAnswer: Maria had $57 originally',
        difficulty: Difficulty.HARD,
        order: 5
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: solvingEquations.id,
        front: 'What is an equation?',
        back: 'A mathematical sentence with an equal sign that states two expressions are equal.\n\nExample: x + 5 = 12',
        hint: 'Look for the equal sign!'
      },
      {
        topicId: solvingEquations.id,
        front: 'What does it mean to solve an equation?',
        back: 'Find the value of the variable that makes the equation true.\n\nExample: x + 3 = 10 → x = 7 makes it true because 7 + 3 = 10',
        hint: 'Find what makes both sides equal'
      },
      {
        topicId: solvingEquations.id,
        front: 'What are inverse operations?',
        back: 'Operations that undo each other:\n• Addition ↔ Subtraction\n• Multiplication ↔ Division\n\nUse them to isolate the variable!',
        hint: 'They cancel each other out'
      },
      {
        topicId: solvingEquations.id,
        front: 'How do you solve x + 7 = 15?',
        back: 'Subtract 7 from both sides:\nx + 7 - 7 = 15 - 7\nx = 8\n\n(Addition is undone by subtraction)',
        hint: 'Use the inverse of addition'
      },
      {
        topicId: solvingEquations.id,
        front: 'How do you solve 4x = 28?',
        back: 'Divide both sides by 4:\n4x ÷ 4 = 28 ÷ 4\nx = 7\n\n(Multiplication is undone by division)',
        hint: 'Use the inverse of multiplication'
      },
      {
        topicId: solvingEquations.id,
        front: 'Why should you check your solution?',
        back: 'Substitute your answer back into the original equation to verify it makes both sides equal.\n\nExample: If x = 5, check that 2x + 3 = 13 → 2(5) + 3 = 13 ✓',
        hint: 'Plug it back in to make sure it works!'
      }
    ]
  });

  // Topic 3: Statistical Questions and Data Display
  console.log('Adding problems and flashcards for: statistical-questions-data-display');

  await prisma.exampleProblem.deleteMany({
    where: { topicId: statisticalQuestions.id }
  });
  await prisma.flashcard.deleteMany({
    where: { topicId: statisticalQuestions.id }
  });

  await prisma.exampleProblem.createMany({
    data: [
      {
        topicId: statisticalQuestions.id,
        question: 'Which of these is a statistical question?\nA) How old is Mrs. Johnson?\nB) How old are the teachers at our school?',
        solution: 'A statistical question anticipates variability - different answers.\n\nA) "How old is Mrs. Johnson?" - ONE specific answer (not statistical)\n\nB) "How old are the teachers at our school?" - MULTIPLE different answers expected (statistical)\n\nAnswer: B is the statistical question\n\nKey: Look for questions that will have a variety of responses!',
        difficulty: Difficulty.EASY,
        order: 1
      },
      {
        topicId: statisticalQuestions.id,
        question: 'Classify this data: favorite pizza toppings of students',
        solution: 'Pizza toppings are categories (pepperoni, cheese, vegetables, etc.), not numbers.\n\nThis is CATEGORICAL data because it describes qualities or categories.\n\nAnswer: Categorical data',
        difficulty: Difficulty.EASY,
        order: 2
      },
      {
        topicId: statisticalQuestions.id,
        question: 'Create a frequency table for this data:\nFavorite sports: Soccer, Basketball, Soccer, Baseball, Soccer, Basketball, Soccer, Baseball, Soccer\n\nThen identify which sport is most popular.',
        solution: 'Frequency Table:\n\nSport         | Frequency\n--------------|-----------\nSoccer        | 5\nBasketball    | 2  \nBaseball      | 2\n\nSoccer appears 5 times, more than any other sport.\n\nAnswer: Soccer is the most popular sport (frequency = 5)',
        difficulty: Difficulty.MEDIUM,
        order: 3
      },
      {
        topicId: statisticalQuestions.id,
        question: 'Which type of graph would be best for showing how a plant\'s height changes over 6 weeks?\nA) Bar graph\nB) Pie chart\nC) Line graph\nD) Histogram',
        solution: 'We need to show change over TIME.\n\nBar graph: Compares categories ✗\nPie chart: Shows parts of a whole ✗\nLine graph: Shows change over time ✓\nHistogram: Shows distribution of numerical data ✗\n\nAnswer: C) Line graph\n\nLine graphs are perfect for showing trends over time!',
        difficulty: Difficulty.MEDIUM,
        order: 4
      },
      {
        topicId: statisticalQuestions.id,
        question: 'A class survey asked: "How many pets do you have?" The responses were: 0, 2, 1, 3, 1, 0, 2, 1, 4, 1, 0, 2\n\nCreate a frequency table and identify:\na) The most common number of pets\nb) How many students have 2 or more pets',
        solution: 'Frequency Table:\n\nNumber of Pets | Frequency\n---------------|----------\n0              | 3\n1              | 4\n2              | 3\n3              | 1\n4              | 1\n\na) Most common: 1 pet (appears 4 times - highest frequency)\n\nb) Students with 2+ pets:\n- 2 pets: 3 students\n- 3 pets: 1 student\n- 4 pets: 1 student\nTotal: 3 + 1 + 1 = 5 students\n\nAnswers:\na) 1 pet (mode)\nb) 5 students have 2 or more pets',
        difficulty: Difficulty.HARD,
        order: 5
      }
    ]
  });

  await prisma.flashcard.createMany({
    data: [
      {
        topicId: statisticalQuestions.id,
        front: 'What is a statistical question?',
        back: 'A question that anticipates variability in the data - expects different answers.\n\nExample: "How tall are 6th graders?" (statistical)\nNot: "How tall is Sarah?" (not statistical)',
        hint: 'Look for questions expecting variety in responses'
      },
      {
        topicId: statisticalQuestions.id,
        front: 'What is categorical data? Give an example.',
        back: 'Data that describes categories or qualities (not numbers).\n\nExamples:\n- Favorite colors\n- Types of pets\n- Eye color\n- Pizza toppings',
        hint: 'Categories, not measurements'
      },
      {
        topicId: statisticalQuestions.id,
        front: 'What is numerical data? Give an example.',
        back: 'Data that are numbers/measurements.\n\nExamples:\n- Height (cm)\n- Age (years)\n- Number of siblings\n- Test scores',
        hint: 'Numbers and measurements'
      },
      {
        topicId: statisticalQuestions.id,
        front: 'What is a frequency table?',
        back: 'A table that shows how often each value appears in a dataset.\n\nExample:\nColor    | Frequency\nBlue     | 5\nRed      | 3\nGreen    | 2',
        hint: 'Counts how many times each value occurs'
      },
      {
        topicId: statisticalQuestions.id,
        front: 'When should you use a bar graph?',
        back: 'To compare amounts across different CATEGORIES.\n\nExample: Comparing favorite sports of students\n(Soccer, Basketball, Baseball on x-axis, Count on y-axis)',
        hint: 'Best for comparing categories'
      },
      {
        topicId: statisticalQuestions.id,
        front: 'When should you use a line graph?',
        back: 'To show how something CHANGES OVER TIME.\n\nExample: Temperature throughout the day, plant growth over weeks\n\nThe line shows trends and patterns.',
        hint: 'Perfect for showing change over time'
      }
    ]
  });

  console.log('\n✨ Successfully added practice problems and flashcards to 3 topics!');
}

addGrade6ProblemsAndFlashcardsBatch2()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
