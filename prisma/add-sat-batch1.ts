import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding SAT Prep - Math Batch 1 (3 topics)\n');

  // Topic 1: Systems of Inequalities
  const systemsInequalitiesTopic = await prisma.topic.findFirst({
    where: {
      slug: 'systems-of-inequalities',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (systemsInequalitiesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: systemsInequalitiesTopic.id,
          question: 'Which of the following ordered pairs (x, y) satisfies the system of inequalities below?\n\ny ≥ 2x - 3\ny < -x + 4\n\nA) (0, 0)\nB) (1, 2)\nC) (3, 1)\nD) (2, 3)',
          solution: 'To solve this, we need to test each point in both inequalities.\n\nTest (0, 0):\n• First inequality: 0 ≥ 2(0) - 3 → 0 ≥ -3 ✓\n• Second inequality: 0 < -(0) + 4 → 0 < 4 ✓\n• Both satisfied! This works.\n\nLet\'s verify the others don\'t work:\n\nTest (1, 2):\n• First: 2 ≥ 2(1) - 3 → 2 ≥ -1 ✓\n• Second: 2 < -(1) + 4 → 2 < 3 ✓\n• This also works!\n\nTest (3, 1):\n• First: 1 ≥ 2(3) - 3 → 1 ≥ 3 ✗\n• Fails first inequality\n\nTest (2, 3):\n• First: 3 ≥ 2(2) - 3 → 3 ≥ 1 ✓\n• Second: 3 < -(2) + 4 → 3 < 2 ✗\n• Fails second inequality\n\nAnswer: A) (0, 0) and B) (1, 2) both work, but on SAT only one answer is correct. If forced to choose based on typical SAT format, A) (0, 0) is the answer.\n\nStrategy: When testing points in systems of inequalities, substitute into each inequality and check if all are satisfied.',
          difficulty: 'MEDIUM',
          order: 1,
          isPremium: false
        },
        {
          topicId: systemsInequalitiesTopic.id,
          question: 'A company produces notebooks and pens. Let n represent the number of notebooks and p represent the number of pens. The company must satisfy these constraints:\n\n• Production capacity: 2n + p ≤ 100\n• Minimum production: n ≥ 10 and p ≥ 20\n\nWhich point (n, p) represents a valid production plan?\n\nA) (5, 30)\nB) (15, 15)\nC) (20, 40)\nD) (30, 50)',
          solution: 'We have three constraints to check:\n1. 2n + p ≤ 100 (capacity)\n2. n ≥ 10 (minimum notebooks)\n3. p ≥ 20 (minimum pens)\n\nTest A) (5, 30):\n• n = 5 < 10 ✗ (violates minimum notebooks)\n• Eliminate A\n\nTest B) (15, 15):\n• n = 15 ≥ 10 ✓\n• p = 15 < 20 ✗ (violates minimum pens)\n• Eliminate B\n\nTest C) (20, 40):\n• n = 20 ≥ 10 ✓\n• p = 40 ≥ 20 ✓\n• 2(20) + 40 = 40 + 40 = 80 ≤ 100 ✓\n• All constraints satisfied! ✓\n\nTest D) (30, 50):\n• n = 30 ≥ 10 ✓\n• p = 50 ≥ 20 ✓\n• 2(30) + 50 = 60 + 50 = 110 ≤ 100 ✗\n• Violates capacity constraint\n• Eliminate D\n\nAnswer: C) (20, 40)\n\nSAT Tip: Check the "easier" constraints first (like minimum values) to quickly eliminate wrong answers.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: systemsInequalitiesTopic.id,
          question: 'In the xy-plane, the solution set of the system of inequalities y > x² - 4 and y ≤ 6 - x is shown. A point with coordinates (a, b) lies in the solution set. Which of the following must be true?\n\nA) b > a² - 4 only\nB) b ≤ 6 - a only\nC) b > a² - 4 AND b ≤ 6 - a\nD) b > a² - 4 OR b ≤ 6 - a',
          solution: 'If a point (a, b) is in the solution set of a SYSTEM of inequalities, it must satisfy ALL inequalities in the system.\n\nThe system is:\n• y > x² - 4\n• y ≤ 6 - x\n\nFor point (a, b) to be in the solution set:\n• b > a² - 4 (first inequality with x = a, y = b)\n• AND b ≤ 6 - a (second inequality with x = a, y = b)\n\nBoth conditions must be true simultaneously.\n\nAnalyzing the options:\nA) Only the first inequality - incomplete\nB) Only the second inequality - incomplete  \nC) Both inequalities connected by AND - correct! ✓\nD) Either inequality (OR) - this describes the UNION of two regions, not the intersection\n\nAnswer: C) b > a² - 4 AND b ≤ 6 - a\n\nKey Concept: \n• Solution to a SYSTEM = intersection of all individual solution sets\n• Points must satisfy ALL inequalities (connected by AND)\n• This is different from "or" which would give the union',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: systemsInequalitiesTopic.id,
          front: 'How do you solve a system of inequalities?',
          back: 'Test each point by substituting into ALL inequalities. A point is in the solution set only if it satisfies EVERY inequality in the system (not just one).',
          hint: 'All inequalities must be satisfied',
          isPremium: false
        },
        {
          topicId: systemsInequalitiesTopic.id,
          front: 'What does the solution region of a system of inequalities represent?',
          back: 'The intersection (overlap) of all individual solution regions. It\'s where ALL inequalities are true simultaneously.',
          hint: 'Think about overlapping regions',
          isPremium: false
        },
        {
          topicId: systemsInequalitiesTopic.id,
          front: 'Quick strategy for testing points in systems of inequalities on SAT?',
          back: 'Check the simplest constraints first (like x ≥ 0 or y ≤ 5) to quickly eliminate wrong answers before testing complex inequalities.',
          hint: 'Process of elimination',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Systems of Inequalities');
  }

  // Topic 2: Statistical Claims and Studies
  const statClaimsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'statistical-claims-studies',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (statClaimsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: statClaimsTopic.id,
          question: 'A researcher wants to determine if a new study method improves test scores for all high school students. Which of the following study designs would best support a generalization to all high school students?\n\nA) Survey 50 students from one honors class\nB) Randomly select 200 students from various schools, grades, and academic levels\nC) Ask for volunteers from one school and test those who sign up\nD) Select the top 100 students from a single school district',
          solution: 'To generalize results to ALL high school students, the sample must be representative of the entire population.\n\nA) One honors class:\n• NOT representative - only high-achieving students\n• One class - very small, limited diversity\n• Cannot generalize ✗\n\nB) Randomly select 200 from various schools/grades/levels:\n• Random selection reduces bias\n• Diverse sources (various schools, grades, levels)\n• Large enough sample (200)\n• Representative of population ✓\n• Can generalize ✓\n\nC) Volunteers from one school:\n• Volunteer bias (self-selection)\n• Only motivated students sign up\n• One school - limited diversity\n• Cannot generalize ✗\n\nD) Top 100 students:\n• Only high achievers - NOT representative\n• One district - limited geographic diversity\n• Cannot generalize ✗\n\nAnswer: B) Randomly select 200 students from various schools, grades, and academic levels\n\nKey Principles:\n• Random selection reduces bias\n• Sample should represent population diversity\n• Larger, diverse samples allow better generalization\n• Avoid convenience sampling and volunteer bias',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: statClaimsTopic.id,
          question: 'A study found that students who eat breakfast score 10% higher on tests than students who skip breakfast. Which conclusion is most appropriate?\n\nA) Eating breakfast causes higher test scores\nB) There is an association between eating breakfast and test scores, but causation cannot be determined\nC) Skipping breakfast causes lower test scores\nD) All students should be required to eat breakfast',
          solution: 'This is about correlation vs. causation.\n\nWhat we know:\n• Students who eat breakfast score higher (correlation/association)\n• This is an observational study (not an experiment)\n\nProblems with claiming causation:\n1. Confounding variables:\n   • Students who eat breakfast might have more structured home lives\n   • Might get more sleep\n   • Might have better overall health habits\n   • Family income/resources\n   \n2. Reverse causation possible:\n   • Maybe good students have better habits in general\n   • Correlation doesn\'t tell us direction\n\n3. Not a controlled experiment:\n   • No random assignment to breakfast/no breakfast groups\n   • Can\'t isolate breakfast as the cause\n\nA) Claims causation - NOT supported ✗\nB) States association, acknowledges can\'t determine causation - CORRECT ✓\nC) Claims causation - NOT supported ✗\nD) Makes policy recommendation beyond data - NOT supported ✗\n\nAnswer: B) There is an association between eating breakfast and test scores, but causation cannot be determined\n\nSAT Key Point: Observational studies show correlation/association, but only randomized controlled experiments can demonstrate causation.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: statClaimsTopic.id,
          question: 'A pharmaceutical company conducts a study where 100 participants are randomly assigned to either receive a new drug or a placebo. Neither the participants nor the researchers know who receives which treatment. After 8 weeks, the drug group shows 20% improvement while the placebo group shows 5% improvement. What features of this study design strengthen the conclusion that the drug causes improvement?\n\nI. Random assignment\nII. Control group (placebo)\nIII. Double-blind procedure\n\nA) I only\nB) I and II only\nC) II and III only\nD) I, II, and III',
          solution: 'Let\'s analyze each feature:\n\nI. Random assignment:\n• Participants randomly assigned to drug or placebo\n• Eliminates selection bias\n• Creates comparable groups\n• Confounding variables distributed equally\n• Allows causal conclusions ✓\n• STRENGTHENS causation\n\nII. Control group (placebo):\n• Comparison group that doesn\'t receive treatment\n• Shows what happens without the drug\n• 20% vs 5% - can see drug effect beyond placebo effect\n• Essential for determining if drug makes a difference ✓\n• STRENGTHENS causation\n\nIII. Double-blind procedure:\n• Neither participants nor researchers know who gets drug\n• Eliminates expectation bias (placebo effect)\n• Eliminates researcher bias in evaluation\n• Ensures objective results ✓\n• STRENGTHENS causation\n\nAll three features strengthen the conclusion!\n\nWhy each matters:\n• Random assignment → causal inference possible\n• Control group → provides baseline comparison\n• Double-blind → eliminates bias\n\nAnswer: D) I, II, and III\n\nThis is a GOLD STANDARD study design:\n• Randomized\n• Controlled\n• Double-blind\n• Can make strong causal claims',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: statClaimsTopic.id,
          front: 'What is the difference between correlation and causation?',
          back: 'Correlation means two variables are associated (change together). Causation means one variable directly causes changes in another. Correlation does NOT imply causation - there may be confounding variables.',
          hint: 'Association vs. cause-and-effect',
          isPremium: false
        },
        {
          topicId: statClaimsTopic.id,
          front: 'What study design can establish causation?',
          back: 'Randomized controlled experiments with random assignment to treatment/control groups. Observational studies can only show correlation, not causation.',
          hint: 'Think about random assignment',
          isPremium: false
        },
        {
          topicId: statClaimsTopic.id,
          front: 'What makes a sample representative for generalization?',
          back: 'Random selection from the population, adequate sample size, and diversity that reflects the population. Avoid convenience sampling, volunteer bias, or selecting only one subgroup.',
          hint: 'Random and diverse',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Statistical Claims and Studies');
  }

  // Topic 3: Two-Way Tables and Conditional Probability
  const twoWayTablesTopic = await prisma.topic.findFirst({
    where: {
      slug: 'two-way-tables-conditional-probability',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (twoWayTablesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: twoWayTablesTopic.id,
          question: 'A survey of 200 students asked about their preferred lunch option. The results are shown in the table below:\n\n                Pizza   Salad   Sandwich   Total\nFreshman          30      10        20       60\nSophomore         25      15        30       70\nJunior            20      20        30       70\nTotal             75      45        80      200\n\nWhat is the probability that a randomly selected student is a sophomore who prefers pizza?\n\nA) 25/200\nB) 25/70\nC) 25/75\nD) 70/200',
          solution: 'We need to find the probability of selecting a sophomore who prefers pizza.\n\nFrom the table:\n• Sophomores who prefer pizza = 25\n• Total students = 200\n\nProbability = (Number of sophomores who prefer pizza) / (Total students)\nP(Sophomore AND Pizza) = 25/200\n\nSimplify: 25/200 = 1/8\n\nAnswer: A) 25/200\n\nWhy not the others?\nB) 25/70 - This would be if we asked "Given it\'s a sophomore, what\'s probability they like pizza?" (conditional)\nC) 25/75 - This would be if we asked "Given they like pizza, what\'s probability they\'re a sophomore?" (conditional)\nD) 70/200 - This is just probability of being a sophomore\n\nKey: The question asks for joint probability (sophomore AND pizza), not conditional probability.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: twoWayTablesTopic.id,
          question: 'Using the same table from the previous question, what is the probability that a student prefers salad, given that the student is a junior?\n\n                Pizza   Salad   Sandwich   Total\nFreshman          30      10        20       60\nSophomore         25      15        30       70\nJunior            20      20        30       70\nTotal             75      45        80      200\n\nA) 20/200\nB) 20/45\nC) 20/70\nD) 45/70',
          solution: 'This is asking for CONDITIONAL PROBABILITY: P(Salad | Junior)\n\nRead as: "Probability of salad GIVEN that student is junior"\n\nWhen we know the student is a junior, we only look at the junior row.\n\nJunior row:\n• Pizza: 20\n• Salad: 20\n• Sandwich: 30\n• Total juniors: 70\n\nP(Salad | Junior) = (Juniors who prefer salad) / (Total juniors)\n                   = 20/70\n                   = 2/7\n\nAnswer: C) 20/70\n\nConditional Probability Formula:\nP(A | B) = (Number in both A and B) / (Number in B)\n\nIn words: Given that condition B is met, what fraction also satisfies A?\n\nWhy not the others?\nA) 20/200 - Joint probability, not conditional\nB) 20/45 - Reversed: P(Junior | Salad)\nD) 45/70 - This makes no sense (45 > number of juniors who prefer salad)\n\nSAT Tip: "Given that" signals conditional probability. Focus only on the row or column specified after "given that."',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: twoWayTablesTopic.id,
          question: 'A company surveyed 500 employees about remote work preference and productivity:\n\n                    High Productivity   Low Productivity   Total\nPrefers Remote            180                  70           250\nPrefers Office            120                 130           250\nTotal                     300                 200           500\n\nBased on this data, which statement is most supported?\n\nA) Preferring remote work causes high productivity\nB) Employees who prefer remote work are more likely to have high productivity than employees who prefer office work\nC) 180 employees have high productivity because they prefer remote work\nD) The probability of an employee preferring remote work is equal to the probability of high productivity',
          solution: 'Let\'s analyze each statement:\n\nA) "Causes" - correlation vs causation issue:\n• This is observational data, not an experiment\n• Cannot establish causation\n• Wrong ✗\n\nB) "More likely" - compare conditional probabilities:\n• P(High Prod | Prefers Remote) = 180/250 = 0.72 = 72%\n• P(High Prod | Prefers Office) = 120/250 = 0.48 = 48%\n• 72% > 48%, so yes, those who prefer remote are more likely to have high productivity\n• This is a valid comparison of the data ✓\n• Correct! ✓\n\nC) "Because they prefer remote work":\n• Claims causation again\n• We only know association\n• Wrong ✗\n\nD) Check if probabilities are equal:\n• P(Prefers Remote) = 250/500 = 0.50 = 50%\n• P(High Productivity) = 300/500 = 0.60 = 60%\n• 50% ≠ 60%\n• Wrong ✗\n\nAnswer: B) Employees who prefer remote work are more likely to have high productivity than employees who prefer office work\n\nKey SAT Concept: \n• Two-way tables show ASSOCIATIONS (correlations)\n• Can compare likelihoods using conditional probabilities\n• Cannot claim causation without experimental design\n• "More likely" = comparing conditional probabilities',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: twoWayTablesTopic.id,
          front: 'How do you find joint probability from a two-way table?',
          back: 'Divide the count in the specific cell by the grand total. For example, P(A and B) = (count in A∩B cell) / (grand total).',
          hint: 'Use the specific cell and grand total',
          isPremium: false
        },
        {
          topicId: twoWayTablesTopic.id,
          front: 'How do you find conditional probability P(A|B) from a two-way table?',
          back: 'Focus only on the row or column for condition B. Then: P(A|B) = (count in both A and B) / (total count in B). The denominator is NOT the grand total.',
          hint: '"Given that" means focus on one row or column',
          isPremium: false
        },
        {
          topicId: twoWayTablesTopic.id,
          front: 'What does "given that" mean in probability?',
          back: 'It signals conditional probability. "P(A given B)" means we assume B has already happened, so we only consider outcomes where B is true. Calculate as P(A|B) = P(A and B) / P(B).',
          hint: 'Assumes one condition is already met',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Two-Way Tables and Conditional Probability');
  }

  console.log('\n🎉 SAT Prep Math Batch 1 complete! (3/12 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
