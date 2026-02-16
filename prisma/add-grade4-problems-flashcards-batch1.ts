import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding practice problems and flashcards to Grade 4 Math topics (Batch 1)...\n');

  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  if (!grade4Course) {
    throw new Error('Grade 4 Math course not found');
  }

  // Topic 1: Symmetry
  const symmetryTopic = await prisma.topic.findFirst({
    where: {
      slug: 'symmetry',
      category: { courseId: grade4Course.id }
    }
  });

  if (symmetryTopic) {
    // Add practice problems for Symmetry
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: symmetryTopic.id,
          question: 'Does the letter "H" have line symmetry? If yes, how many lines of symmetry does it have?',
          solution: 'Yes! The letter "H" has 2 lines of symmetry:\n\n1. A vertical line down the middle (splits it into left and right halves)\n2. A horizontal line across the middle (splits it into top and bottom halves)\n\nBoth halves match perfectly when you fold along these lines! ✓',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          question: 'Draw all lines of symmetry for a square.',
          solution: 'A square has 4 lines of symmetry:\n\n1. Vertical line through the center (top to bottom)\n2. Horizontal line through the center (left to right)\n3. Diagonal line from top-left to bottom-right\n4. Diagonal line from top-right to bottom-left\n\nAll 4 lines divide the square into matching halves! ✓',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          question: 'Which capital letters have exactly 1 line of symmetry: A, B, C, or D?',
          solution: 'The letters with exactly 1 line of symmetry are:\n\n- **A** - 1 vertical line of symmetry ✓\n- **B** - 1 horizontal line of symmetry ✓\n- **C** - 1 horizontal line of symmetry ✓\n- **D** - 1 horizontal line of symmetry ✓\n\nAll four letters have exactly 1 line of symmetry!',
          difficulty: 'EASY',
          order: 3,
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          question: 'Does a circle have rotational symmetry? How many times does it match itself in one full turn?',
          solution: 'Yes! A circle has rotational symmetry.\n\nIt matches itself **infinite times** during one full turn!\n\nNo matter how much you rotate a circle, it always looks exactly the same. Every point on the circle is the same distance from the center.\n\nThis is called "infinite rotational symmetry" ✓',
          difficulty: 'HARD',
          order: 4,
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          question: 'Complete this symmetrical shape: If the left half shows a triangle with base 4 cm, what should the right half show?',
          solution: 'The right half should show:\n\n**An identical triangle with base 4 cm**\n\nFor line symmetry, both sides must be mirror images:\n- Same shape (triangle)\n- Same size (4 cm base)\n- Same position relative to the line of symmetry\n- Flipped/reflected across the line\n\nThe completed shape would be a larger triangle or a diamond/kite shape made of two triangles! ✓',
          difficulty: 'MEDIUM',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Symmetry
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: symmetryTopic.id,
          front: 'What is line symmetry?',
          back: 'When you can fold a shape along a line and both halves match exactly.',
          hint: 'Think about folding paper in half',
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          front: 'What is the line of symmetry also called?',
          back: 'A mirror line (because one side is a mirror image of the other)',
          hint: 'Think about looking in a mirror',
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          front: 'How many lines of symmetry does a square have?',
          back: '4 lines of symmetry (vertical, horizontal, and 2 diagonals)',
          hint: 'Count all the ways you can fold it',
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          front: 'What is rotational symmetry?',
          back: 'When you can turn a shape less than 360° and it looks exactly the same',
          hint: 'Think about spinning the shape',
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          front: 'Does the letter "Z" have line symmetry?',
          back: 'No, but it has 180° rotational symmetry (looks the same upside down)',
          hint: 'Try flipping it upside down',
          isPremium: false
        },
        {
          topicId: symmetryTopic.id,
          front: 'How many lines of symmetry does an equilateral triangle have?',
          back: '3 lines of symmetry (one from each vertex to the opposite side)',
          hint: 'All sides are equal',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: symmetry');
  }

  // Topic 2: Rounding Numbers
  const roundingTopic = await prisma.topic.findFirst({
    where: {
      slug: 'rounding-numbers',
      category: { courseId: grade4Course.id }
    }
  });

  if (roundingTopic) {
    // Add practice problems for Rounding Numbers
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: roundingTopic.id,
          question: 'Round 347 to the nearest ten.',
          solution: 'Step 1: Identify the tens place: 4\nStep 2: Look at the ones place: 7\nStep 3: Is 7 ≥ 5? Yes!\nStep 4: Round UP\n\n347 rounds to **350** ✓\n\nThe 7 in the ones place tells us to round up!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          question: 'Round 5,832 to the nearest hundred.',
          solution: 'Step 1: Identify the hundreds place: 8\nStep 2: Look at the tens place: 3\nStep 3: Is 3 ≥ 5? No!\nStep 4: Round DOWN (keep the 8)\n\n5,832 rounds to **5,800** ✓\n\nThe 3 in the tens place tells us to round down (keep it the same).',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          question: 'Round 67,450 to the nearest thousand.',
          solution: 'Step 1: Identify the thousands place: 7\nStep 2: Look at the hundreds place: 4\nStep 3: Is 4 ≥ 5? No!\nStep 4: Round DOWN (keep the 7)\n\n67,450 rounds to **67,000** ✓\n\nThe 4 in the hundreds place tells us to round down.',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          question: 'A stadium has 48,651 people. Round this to the nearest ten thousand.',
          solution: 'Step 1: Identify the ten thousands place: 4\nStep 2: Look at the thousands place: 8\nStep 3: Is 8 ≥ 5? Yes!\nStep 4: Round UP (4 becomes 5)\n\n48,651 rounds to **50,000** ✓\n\nThe stadium has about 50,000 people.',
          difficulty: 'HARD',
          order: 4,
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          question: 'Round 9,999 to the nearest hundred. What happens?',
          solution: 'Step 1: Identify the hundreds place: 9 (second 9)\nStep 2: Look at the tens place: 9\nStep 3: Is 9 ≥ 5? Yes!\nStep 4: Round UP - but this creates a chain reaction!\n\n9,999 → the hundreds 9 rounds up to 10\n→ This makes the thousands 9 become 10\n→ This gives us 10,000!\n\n9,999 rounds to **10,000** ✓\n\nThis is a special case where rounding changes the number of digits!',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Rounding Numbers
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: roundingTopic.id,
          front: 'What is the rule for rounding?',
          back: 'If the digit to the right is 5 or more, round UP. If it\'s less than 5, round DOWN (stay the same).',
          hint: '5 or more, raise the score!',
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          front: 'When rounding to the nearest ten, which place do you look at?',
          back: 'Look at the ONES place to decide whether to round up or down',
          hint: 'Look one place to the right',
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          front: 'Round 85 to the nearest ten',
          back: '90 (the 5 in the ones place means round up)',
          hint: '5 or more, raise the score!',
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          front: 'What happens to all digits to the right when you round?',
          back: 'They become zeros',
          hint: 'Think: 347 rounded to nearest ten is 350',
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          front: 'Round 4,500 to the nearest thousand',
          back: '5,000 (the 5 in the hundreds place means round up)',
          hint: 'Look at the hundreds place',
          isPremium: false
        },
        {
          topicId: roundingTopic.id,
          front: 'Why do we round numbers?',
          back: 'To make them easier to work with and to estimate answers',
          hint: 'Think about shopping with approximate prices',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: rounding-numbers');
  }

  // Topic 3: Place Value to Millions
  const placeValueTopic = await prisma.topic.findFirst({
    where: {
      slug: 'place-value-millions',
      category: { courseId: grade4Course.id }
    }
  });

  if (placeValueTopic) {
    // Add practice problems for Place Value to Millions
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: placeValueTopic.id,
          question: 'What is the value of the 7 in 2,745,831?',
          solution: 'Let\'s identify each place:\n\n2,745,831\n  ↑\n  7 is in the HUNDRED THOUSANDS place\n\nValue = 7 × 100,000 = **700,000** ✓\n\nThe 7 represents seven hundred thousand!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          question: 'Write the number: 3 millions, 5 hundred thousands, 2 tens, 9 ones',
          solution: 'Build it place by place:\n\nMillions: 3,000,000\nHundred thousands: 500,000\nTen thousands: 0\nThousands: 0\nHundreds: 0\nTens: 20\nOnes: 9\n\nAdd them together:\n3,000,000 + 500,000 + 20 + 9 = **3,500,029** ✓',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          question: 'Compare using <, >, or =:\n4,567,890 ___ 4,576,890',
          solution: 'Compare digit by digit from left to right:\n\n4,567,890\n4,576,890\n\nMillions: 4 = 4 ✓\nHundred thousands: 5 = 5 ✓\nTen thousands: 6 < 7 ← Different!\n\nSince 6 < 7, we know:\n\n4,567,890 **<** 4,576,890 ✓',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          question: 'Write 5,030,407 in expanded form.',
          solution: 'Break down each digit by its place value:\n\n5,030,407 =\n\n5,000,000 (5 millions)\n+     0 (0 hundred thousands)\n+    30,000 (3 ten thousands)\n+     0 (0 thousands)\n+     400 (4 hundreds)\n+     0 (0 tens)\n+     7 (7 ones)\n\n**Expanded form:**\n5,000,000 + 30,000 + 400 + 7 ✓\n\n(We skip the zeros!)',
          difficulty: 'HARD',
          order: 4,
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          question: 'The population of a city is 8,429,156. How many ten thousands are in this number?',
          solution: 'Let\'s find the ten thousands place:\n\n8,429,156\n    ↑\n    2 is in the TEN THOUSANDS place\n\nBut wait! The question asks "how many ten thousands" total.\n\nWe can think of it as:\n8,429,156 ÷ 10,000 = 842.9156\n\nSo there are **842 complete ten thousands** in this number.\n\nOr simpler: Just look at all digits from the ten thousands place and left:\n842 ten thousands ✓',
          difficulty: 'HARD',
          order: 5,
          isPremium: false
        }
      ]
    });

    // Add flashcards for Place Value to Millions
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: placeValueTopic.id,
          front: 'What are the place values from right to left up to millions?',
          back: 'Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions',
          hint: 'Start with ones and go left',
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          front: 'How many zeros are in one million?',
          back: '6 zeros (1,000,000)',
          hint: 'Count the zeros: 1,000,000',
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          front: 'Where do we put commas in large numbers?',
          back: 'Every 3 digits from the right (separating thousands, millions, etc.)',
          hint: 'Think: 1,234,567',
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          front: 'What is the value of 4 in the hundred thousands place?',
          back: '400,000 (four hundred thousand)',
          hint: 'Hundred thousands = 100,000',
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          front: 'In the number 3,652,891, what digit is in the millions place?',
          back: '3',
          hint: 'The millions place is the leftmost digit',
          isPremium: false
        },
        {
          topicId: placeValueTopic.id,
          front: 'What does expanded form mean?',
          back: 'Writing a number as the sum of the values of each digit',
          hint: 'Example: 345 = 300 + 40 + 5',
          isPremium: false
        }
      ]
    });

    console.log('✅ Added problems and flashcards for: place-value-millions');
  }

  console.log('\n✨ Successfully added practice problems and flashcards to 3 topics!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
