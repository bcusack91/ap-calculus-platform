import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding problems and flashcards to Pre-Algebra topics - Batch 5 (3 topics)...\n');

  // Get the Pre-Algebra course
  const course = await prisma.course.findUnique({
    where: { slug: 'pre-algebra' }
  });

  if (!course) {
    throw new Error('Pre-Algebra course not found');
  }

  // Topic 1: Volume of Rectangular Prisms
  const topic1 = await prisma.topic.findFirst({
    where: {
      slug: 'volume-rectangular-prisms',
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
          question: 'Find the volume of a rectangular prism with length 6 cm, width 4 cm, and height 5 cm.',
          solution: 'Step 1: Use the volume formula.\nVolume = length × width × height\nV = l × w × h\n\nStep 2: Substitute values.\nV = 6 × 4 × 5\n\nStep 3: Calculate.\nV = 24 × 5\nV = 120 cubic centimeters\n\nStep 4: Include units.\nVolume is in CUBIC units (cm³)\n\nAnswer: 120 cm³',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic1.id,
          question: 'A cube has sides of 4 inches. What is its volume?',
          solution: 'Step 1: Recall that a cube has all equal sides.\nLength = width = height = 4 inches\n\nStep 2: Use the cube volume formula.\nVolume = s³ (side cubed)\nV = 4³\n\nStep 3: Calculate.\nV = 4 × 4 × 4\nV = 64 cubic inches\n\nAnswer: 64 in³',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic1.id,
          question: 'A box is 10 cm long, 6 cm wide, and 8 cm tall. How many cubic centimeters of space does it contain?',
          solution: 'Step 1: Identify dimensions.\nl = 10 cm\nw = 6 cm\nh = 8 cm\n\nStep 2: Apply volume formula.\nV = l × w × h\nV = 10 × 6 × 8\n\nStep 3: Calculate step by step.\n10 × 6 = 60\n60 × 8 = 480\n\nAnswer: 480 cm³',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic1.id,
          question: 'An aquarium is 2 feet long, 1.5 feet wide, and 18 inches tall. What is its volume in cubic feet?',
          solution: 'Step 1: Convert all to same units (feet).\nLength = 2 feet\nWidth = 1.5 feet\nHeight = 18 inches = 18/12 = 1.5 feet\n\nStep 2: Apply volume formula.\nV = l × w × h\nV = 2 × 1.5 × 1.5\n\nStep 3: Calculate.\nV = 2 × 2.25\nV = 4.5 cubic feet\n\nAnswer: 4.5 ft³',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic1.id,
          question: 'A swimming pool is 25 meters long, 10 meters wide, and has an average depth of 2 meters. If 1 cubic meter holds 1,000 liters of water, how many liters does the pool hold when full?',
          solution: 'Step 1: Find volume in cubic meters.\nV = l × w × h\nV = 25 × 10 × 2\nV = 500 m³\n\nStep 2: Convert to liters.\n1 m³ = 1,000 liters\n500 m³ = 500 × 1,000 liters\n\nStep 3: Calculate.\n500 × 1,000 = 500,000 liters\n\nAnswer: 500,000 liters (or 500 m³)',
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
          front: 'What is volume?',
          back: 'The amount of SPACE INSIDE a 3D object. How much it can hold. Units are CUBIC (cm³, ft³, m³).',
          hint: 'Volume = 3D space, always cubic units'
        },
        {
          topicId: topic1.id,
          front: 'What is the formula for volume of a rectangular prism?',
          back: 'Volume = length × width × height (V = lwh)',
          hint: 'Multiply all three dimensions'
        },
        {
          topicId: topic1.id,
          front: 'What is the formula for volume of a cube?',
          back: 'Volume = s³ (side cubed) or s × s × s, since all sides are equal.',
          hint: 'Side × side × side'
        },
        {
          topicId: topic1.id,
          front: 'What units do you use for volume?',
          back: 'CUBIC units: cm³, m³, ft³, in³. The exponent 3 shows it\'s 3-dimensional.',
          hint: 'Cubic = ³ (three dimensions)'
        },
        {
          topicId: topic1.id,
          front: 'How is volume different from area?',
          back: 'Volume is 3D space (cubic units). Area is 2D surface (square units). Volume = inside, Area = surface.',
          hint: 'Volume = 3D (cubic), Area = 2D (square)'
        },
        {
          topicId: topic1.id,
          front: 'What must you do before calculating volume if dimensions have different units?',
          back: 'Convert all measurements to the SAME UNIT first. Example: change inches to feet, or cm to meters.',
          hint: 'All dimensions must use same unit'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: volume-rectangular-prisms');
  }

  // Topic 2: Mean, Median, Mode
  const topic2 = await prisma.topic.findFirst({
    where: {
      slug: 'mean-median-mode',
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
          question: 'Find the mean of: 8, 12, 15, 10, 5',
          solution: 'Step 1: Add all numbers.\n8 + 12 + 15 + 10 + 5 = 50\n\nStep 2: Count how many numbers.\n5 numbers\n\nStep 3: Divide sum by count.\nMean = 50 ÷ 5 = 10\n\nAnswer: Mean = 10',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic2.id,
          question: 'Find the median of: 3, 7, 2, 9, 5',
          solution: 'Step 1: Put in order from least to greatest.\n2, 3, 5, 7, 9\n\nStep 2: Find the middle number.\n5 numbers, so the 3rd number is in the middle.\n\nStep 3: Identify the median.\nThe middle value is 5.\n\nAnswer: Median = 5',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic2.id,
          question: 'Find the mode of: 4, 7, 2, 7, 9, 7, 3',
          solution: 'Step 1: Count how many times each number appears.\n2: once\n3: once\n4: once\n7: three times\n9: once\n\nStep 2: Identify the most frequent.\n7 appears most often (3 times)\n\nAnswer: Mode = 7',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic2.id,
          question: 'Find the mean, median, and mode of: 12, 15, 11, 15, 13, 10, 15, 14',
          solution: 'Mean:\nSum = 12 + 15 + 11 + 15 + 13 + 10 + 15 + 14 = 105\nCount = 8 numbers\nMean = 105 ÷ 8 = 13.125\n\nMedian:\nOrdered: 10, 11, 12, 13, 14, 15, 15, 15\n8 numbers (even), so average the 4th and 5th.\nMiddle values: 13 and 14\nMedian = (13 + 14) ÷ 2 = 13.5\n\nMode:\n15 appears 3 times (most frequent)\nMode = 15\n\nAnswer: Mean = 13.125, Median = 13.5, Mode = 15',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic2.id,
          question: 'Test scores are: 85, 90, 78, 92, 88, 95, 45. Which measure of center (mean, median, or mode) best represents the typical score? Explain why.',
          solution: 'Step 1: Calculate mean.\nSum = 85 + 90 + 78 + 92 + 88 + 95 + 45 = 573\nMean = 573 ÷ 7 = 81.86\n\nStep 2: Find median.\nOrdered: 45, 78, 85, 88, 90, 92, 95\nMedian = 88 (middle value)\n\nStep 3: Find mode.\nAll numbers appear once, no mode.\n\nStep 4: Analyze.\n45 is an OUTLIER (much lower than others)\nThe mean (81.86) is pulled down by the outlier\nThe median (88) better represents typical score\nMost scores are in the 78-95 range\n\nAnswer: The MEDIAN (88) best represents the typical score because the mean is affected by the outlier score of 45.',
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
          front: 'What is the mean?',
          back: 'The AVERAGE. Add all numbers and divide by how many numbers. Also called the arithmetic mean.',
          hint: 'Mean = average (sum ÷ count)'
        },
        {
          topicId: topic2.id,
          front: 'What is the median?',
          back: 'The MIDDLE number when data is in order. If even count, average the two middle numbers.',
          hint: 'Median = middle (put in order first!)'
        },
        {
          topicId: topic2.id,
          front: 'What is the mode?',
          back: 'The number that appears MOST OFTEN. There can be no mode, one mode, or multiple modes.',
          hint: 'Mode = most (most frequent)'
        },
        {
          topicId: topic2.id,
          front: 'How do you find the median with an even number of values?',
          back: 'Put in order, then AVERAGE the two middle numbers. Example: 2, 5, 8, 10 → median = (5+8)/2 = 6.5',
          hint: 'Average the two middle values'
        },
        {
          topicId: topic2.id,
          front: 'Which measure of center is most affected by outliers?',
          back: 'The MEAN. Outliers pull the mean toward them. The median is more resistant to outliers.',
          hint: 'Mean is sensitive, median is resistant'
        },
        {
          topicId: topic2.id,
          front: 'What if there is no mode?',
          back: 'If all numbers appear the same number of times (usually once each), there is NO MODE.',
          hint: 'No mode when no number repeats more than others'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: mean-median-mode');
  }

  // Topic 3: Range and Outliers
  const topic3 = await prisma.topic.findFirst({
    where: {
      slug: 'range-and-outliers',
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
          question: 'Find the range of: 5, 12, 8, 15, 3, 10',
          solution: 'Step 1: Find the maximum (largest value).\nMax = 15\n\nStep 2: Find the minimum (smallest value).\nMin = 3\n\nStep 3: Calculate range.\nRange = Max - Min\nRange = 15 - 3 = 12\n\nAnswer: Range = 12',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: topic3.id,
          question: 'Data set: 22, 25, 23, 24, 26, 23. What is the range?',
          solution: 'Step 1: Identify maximum.\nMax = 26\n\nStep 2: Identify minimum.\nMin = 22\n\nStep 3: Subtract.\nRange = 26 - 22 = 4\n\nAnswer: Range = 4',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: topic3.id,
          question: 'Identify any outliers in this data set: 15, 18, 17, 16, 19, 45, 18',
          solution: 'Step 1: Look at all values.\n15, 16, 17, 18, 18, 19 are clustered together (15-19)\n45 is much larger\n\nStep 2: Identify outliers.\n45 is FAR from the cluster\n45 - 19 = 26 (much bigger gap than within cluster)\n\nStep 3: Conclusion.\n45 is an outlier (unusually high value)\n\nAnswer: 45 is an outlier',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: topic3.id,
          question: 'Test scores: 82, 78, 85, 90, 88, 30, 84, 86. Find the range with and without the outlier, and explain the effect.',
          solution: 'Step 1: Identify outlier.\n30 is much lower than all others (which are 78-90)\n30 is an outlier\n\nStep 2: Range WITH outlier.\nMax = 90, Min = 30\nRange = 90 - 30 = 60\n\nStep 3: Range WITHOUT outlier.\nMax = 90, Min = 78\nRange = 90 - 78 = 12\n\nStep 4: Effect.\nOutlier GREATLY increases range from 12 to 60\nRange is very sensitive to outliers\n\nAnswer: With outlier: Range = 60. Without outlier: Range = 12. The outlier dramatically increases the range.',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: topic3.id,
          question: 'Two classes took the same test. Class A scores: 70, 75, 80, 85, 90 (range = 20). Class B scores: 60, 70, 80, 90, 100 (range = 40). What does the range tell you about each class\'s performance?',
          solution: 'Step 1: Analyze Class A.\nRange = 20 (smaller)\nScores are 70-90, fairly clustered\nMore CONSISTENT performance\nLess variation between students\n\nStep 2: Analyze Class B.\nRange = 40 (larger)\nScores are 60-100, more spread out\nLess CONSISTENT performance\nMore variation between students\n\nStep 3: Compare.\nBoth have same median (80)\nClass A: students performed more similarly\nClass B: wider gap between top and bottom\n\nAnswer: Class A has more consistent scores (smaller range = less spread). Class B has more variation (larger range = more spread between highest and lowest).',
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
          front: 'What is the range?',
          back: 'The difference between the MAXIMUM and MINIMUM values. Range = Max - Min. It measures spread.',
          hint: 'Range = biggest - smallest'
        },
        {
          topicId: topic3.id,
          front: 'What is an outlier?',
          back: 'A data value that is MUCH HIGHER or MUCH LOWER than the rest of the data. It stands out from the cluster.',
          hint: 'Outlier = value far from the others'
        },
        {
          topicId: topic3.id,
          front: 'What does a large range tell you about data?',
          back: 'The data is SPREAD OUT with lots of variation. Large difference between highest and lowest values.',
          hint: 'Large range = spread out data'
        },
        {
          topicId: topic3.id,
          front: 'What does a small range tell you about data?',
          back: 'The data is CLUSTERED together with little variation. Values are close to each other.',
          hint: 'Small range = clustered data'
        },
        {
          topicId: topic3.id,
          front: 'How do outliers affect the range?',
          back: 'Outliers can GREATLY INCREASE the range because range uses the max and min values, which outliers affect.',
          hint: 'Outliers make range much bigger'
        },
        {
          topicId: topic3.id,
          front: 'How do outliers affect the mean vs. median?',
          back: 'Outliers PULL THE MEAN toward them but have LITTLE EFFECT on the median. Median is more resistant to outliers.',
          hint: 'Mean = affected, Median = resistant'
        }
      ]
    });

    console.log('✅ Added problems and flashcards: range-and-outliers');
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
