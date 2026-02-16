import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding Grade 8 Math practice problems and flashcards - Batch 4 (Final - 3 topics)...\n');

  // Topic 1: Congruence and Similarity
  const congruenceSimilarity = await prisma.topic.findFirst({
    where: { slug: 'congruence-similarity' }
  });

  if (congruenceSimilarity) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: congruenceSimilarity.id,
          question: 'Two triangles have all three sides equal: Triangle 1 has sides 5, 7, 9 and Triangle 2 has sides 5, 7, 9. Are they congruent?',
          solution: 'All three corresponding sides are equal.\n\nThis satisfies SSS (Side-Side-Side) congruence.\n\nAnswer: Yes, the triangles are congruent by SSS',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: congruenceSimilarity.id,
          question: 'Two triangles have angles 40°, 60°, 80° and 40°, 60°, 80°. Are they congruent?',
          solution: 'The angles are all equal, but we don\'t know the side lengths.\n\nAAA only proves similarity, not congruence!\n\nThe triangles could be different sizes.\n\nAnswer: No, not necessarily congruent (but they are similar)',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: congruenceSimilarity.id,
          question: 'Triangle ABC has sides 3, 4, 5. Triangle DEF has sides 6, 8, 10. Are they similar? If so, find the scale factor.',
          solution: 'Check if sides are proportional:\n\n6/3 = 2\n8/4 = 2\n10/5 = 2\n\nAll ratios equal 2, so sides are proportional.\n\nAnswer: Yes, similar by SSS with scale factor k = 2',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: congruenceSimilarity.id,
          question: 'Two similar rectangles have areas 20 cm² and 45 cm². What is the scale factor?',
          solution: 'For similar figures, area ratio = k²\n\nArea ratio = 45/20 = 9/4\n\nk² = 9/4\n\nk = 3/2 = 1.5\n\nAnswer: Scale factor k = 1.5 (or 3/2)',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: congruenceSimilarity.id,
          question: 'A tree casts a 24-foot shadow. At the same time, a 5-foot person casts an 8-foot shadow. How tall is the tree?',
          solution: 'The triangles formed are similar (same sun angle).\n\nSet up proportion:\ntree height / tree shadow = person height / person shadow\n\nh/24 = 5/8\n\nCross multiply:\n8h = 120\n\nh = 15 feet\n\nAnswer: 15 feet',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: congruenceSimilarity.id,
          front: 'What does congruent mean?',
          back: 'Same size AND same shape (exact copies)',
          hint: 'Think: identical'
        },
        {
          topicId: congruenceSimilarity.id,
          front: 'What does similar mean?',
          back: 'Same shape but not necessarily same size (proportional)',
          hint: 'Think: same shape, different size'
        },
        {
          topicId: congruenceSimilarity.id,
          front: 'What are the triangle congruence tests?',
          back: 'SSS, SAS, ASA, AAS, and HL (for right triangles)',
          hint: 'Five tests for congruence'
        },
        {
          topicId: congruenceSimilarity.id,
          front: 'What are the triangle similarity tests?',
          back: 'AA (Angle-Angle), SSS (proportional sides), SAS (proportional sides with included angle)',
          hint: 'Three tests for similarity'
        },
        {
          topicId: congruenceSimilarity.id,
          front: 'If the scale factor is k, how does the perimeter change?',
          back: 'Perimeter is multiplied by k',
          hint: 'Linear - just k'
        },
        {
          topicId: congruenceSimilarity.id,
          front: 'If the scale factor is k, how does the area change?',
          back: 'Area is multiplied by k²',
          hint: 'Square the scale factor'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: congruence-similarity');
  }

  // Topic 2: Scatter Plots
  const scatterPlots = await prisma.topic.findFirst({
    where: { slug: 'scatter-plots' }
  });

  if (scatterPlots) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: scatterPlots.id,
          question: 'A scatter plot shows hours studied on the x-axis and test scores on the y-axis. As hours increase, scores increase. What type of correlation is this?',
          solution: 'When both variables increase together, the correlation is positive.\n\nThe points trend upward from left to right.\n\nAnswer: Positive correlation',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: scatterPlots.id,
          question: 'A scatter plot shows temperature and heating costs. As temperature increases, heating costs decrease. What type of correlation is this?',
          solution: 'When one variable increases and the other decreases, the correlation is negative.\n\nThe points trend downward from left to right.\n\nAnswer: Negative correlation',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: scatterPlots.id,
          question: 'A scatter plot has trend line equation y = 3x + 10. Predict y when x = 7.',
          solution: 'Substitute x = 7 into the equation:\n\ny = 3(7) + 10\n\ny = 21 + 10\n\ny = 31\n\nAnswer: y = 31',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: scatterPlots.id,
          question: 'Data shows ice cream sales and sunglasses sales both increase in summer. Is this correlation or causation?',
          solution: 'Both increase together (positive correlation), but ice cream sales don\'t CAUSE sunglasses sales.\n\nBoth are caused by warm weather - a confounding variable.\n\nThis is correlation but NOT causation.\n\nAnswer: Correlation, not causation',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: scatterPlots.id,
          question: 'A scatter plot shows strong positive correlation between study time (1-10 hours) and test scores. The trend line is y = 5x + 50. Is it reasonable to predict a score of 200 for 30 hours of study?',
          solution: 'Using the equation: y = 5(30) + 50 = 200\n\nHowever, this is EXTRAPOLATION (outside data range of 1-10 hours).\n\nAlso, test scores likely have a maximum (100%), so 200 is unrealistic.\n\nThe trend may not continue beyond the data range.\n\nAnswer: No, not reasonable - extrapolation is unreliable and exceeds realistic test scores',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: scatterPlots.id,
          front: 'What does a scatter plot show?',
          back: 'The relationship between two numerical variables plotted as points',
          hint: 'Two variables as points'
        },
        {
          topicId: scatterPlots.id,
          front: 'What is positive correlation?',
          back: 'As x increases, y increases (upward trend)',
          hint: 'Both go up together'
        },
        {
          topicId: scatterPlots.id,
          front: 'What is negative correlation?',
          back: 'As x increases, y decreases (downward trend)',
          hint: 'One up, one down'
        },
        {
          topicId: scatterPlots.id,
          front: 'What is the line of best fit?',
          back: 'A line that best represents the trend in the data',
          hint: 'Also called trend line'
        },
        {
          topicId: scatterPlots.id,
          front: 'What is an outlier in a scatter plot?',
          back: 'A point that doesn\'t fit the pattern (far from other points)',
          hint: 'Unusual data point'
        },
        {
          topicId: scatterPlots.id,
          front: 'Does correlation prove causation?',
          back: 'No! Correlation shows relationship, but doesn\'t prove one causes the other',
          hint: 'Correlation ≠ causation'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: scatter-plots');
  }

  // Topic 3: Two-Way Tables
  const twoWayTables = await prisma.topic.findFirst({
    where: { slug: 'two-way-tables' }
  });

  if (twoWayTables) {
    // Problems
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: twoWayTables.id,
          question: 'A survey of 100 students shows: 30 like math, 50 like science, 20 like both. How many like neither?',
          solution: 'Students liking math OR science = 30 + 50 - 20 = 60\n\n(We subtract 20 because those who like both were counted twice)\n\nStudents liking neither = 100 - 60 = 40\n\nAnswer: 40 students',
          difficulty: 'EASY',
          order: 1
        },
        {
          topicId: twoWayTables.id,
          question: 'In a two-way table, 25 out of 50 boys play sports and 30 out of 60 girls play sports. What is the joint frequency for girls who play sports?',
          solution: 'Joint frequency is the count in a specific cell.\n\nGirls who play sports = 30\n\nAnswer: 30',
          difficulty: 'EASY',
          order: 2
        },
        {
          topicId: twoWayTables.id,
          question: 'A table shows: 40 adults prefer coffee, 60 prefer tea (100 total adults); 30 teens prefer coffee, 20 prefer tea (50 total teens). What percent of ALL people prefer coffee?',
          solution: 'Total preferring coffee = 40 + 30 = 70\n\nGrand total = 100 + 50 = 150\n\nPercent = 70/150 = 7/15 ≈ 0.467 = 46.7%\n\nAnswer: 46.7% (or 7/15)',
          difficulty: 'MEDIUM',
          order: 3
        },
        {
          topicId: twoWayTables.id,
          question: 'Using the table from the previous problem, what percent of adults prefer coffee?',
          solution: 'This is CONDITIONAL relative frequency (given adults).\n\nAdults preferring coffee = 40\nTotal adults = 100\n\nPercent = 40/100 = 0.40 = 40%\n\nAnswer: 40%',
          difficulty: 'MEDIUM',
          order: 4
        },
        {
          topicId: twoWayTables.id,
          question: 'A study shows: Of 80 people who exercise daily, 60 rate their health as good. Of 120 people who rarely exercise, 40 rate their health as good. Is there an association between exercise and health rating?',
          solution: 'Compare conditional frequencies:\n\nDaily exercisers with good health: 60/80 = 75%\n\nRare exercisers with good health: 40/120 = 33.3%\n\nLarge difference (75% vs 33.3%) suggests an association.\n\nPeople who exercise daily are more likely to rate their health as good.\n\nAnswer: Yes, there appears to be a positive association between daily exercise and good health ratings',
          difficulty: 'HARD',
          order: 5
        }
      ]
    });

    // Flashcards
    await prisma.flashcard.createMany({
      data: [
        {
          topicId: twoWayTables.id,
          front: 'What is a two-way table?',
          back: 'A table that organizes data by two categorical variables (rows and columns)',
          hint: 'Also called contingency table'
        },
        {
          topicId: twoWayTables.id,
          front: 'What is a joint frequency?',
          back: 'The count in a specific cell (represents both categories together)',
          hint: 'Cell value'
        },
        {
          topicId: twoWayTables.id,
          front: 'What is a marginal frequency?',
          back: 'Row total or column total (represents one category only)',
          hint: 'Totals in the margins'
        },
        {
          topicId: twoWayTables.id,
          front: 'What is relative frequency?',
          back: 'A frequency expressed as a fraction, decimal, or percent of the total',
          hint: 'Divide by total'
        },
        {
          topicId: twoWayTables.id,
          front: 'What is conditional relative frequency?',
          back: 'Frequency within a specific group (divide by row or column total, not grand total)',
          hint: 'Given a specific group'
        },
        {
          topicId: twoWayTables.id,
          front: 'How do you find an association in a two-way table?',
          back: 'Compare conditional relative frequencies - large differences suggest an association',
          hint: 'Compare percents within groups'
        }
      ]
    });
    console.log('✅ Added problems and flashcards: two-way-tables');
  }

  console.log('\n✨ Successfully added practice problems and flashcards for 3 topics!');
  console.log('\n🎉 Grade 8 Math is now 100% COMPLETE! All 12 topics have content, problems, and flashcards!');
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
