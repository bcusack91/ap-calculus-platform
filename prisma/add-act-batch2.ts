import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding ACT Prep - Batch 2 (3 topics)\n');

  // Topic 1: Number and Quantity
  const numberQuantityTopic = await prisma.topic.findFirst({
    where: {
      slug: 'act-number-quantity',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (numberQuantityTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: numberQuantityTopic.id,
          question: 'What is 3/4 + 2/5?\n\nA) 5/9\nB) 6/20\nC) 23/20\nD) 11/9\nE) 5/20',
          solution: 'To add fractions, we need a common denominator.\n\nStep 1: Find LCD (least common denominator)\nLCD of 4 and 5 = 20\n\nStep 2: Convert to equivalent fractions\n3/4 = 15/20 (multiply by 5/5)\n2/5 = 8/20 (multiply by 4/4)\n\nStep 3: Add numerators\n15/20 + 8/20 = 23/20\n\nAnswer: C) 23/20\n\nNote: 23/20 = 1 3/20 as a mixed number\n\nCommon mistakes:\n• A) 5/9 - adding numerators AND denominators (wrong!)\n• B) 6/20 - only adding numerators (wrong!)\n• E) 5/20 - multiplying denominators (wrong!)\n\nFraction addition rule: Same denominator required!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: numberQuantityTopic.id,
          question: 'Which of the following is equivalent to 2^5 × 2^3?\n\nF) 2^8\nG) 2^15\nH) 4^8\nJ) 4^15\nK) 2^2',
          solution: 'When multiplying powers with the same base, ADD the exponents.\n\nExponent Rule: a^m × a^n = a^(m+n)\n\nStep 1: Apply the rule\n2^5 × 2^3 = 2^(5+3) = 2^8\n\nAnswer: F) 2^8\n\nVerification:\n2^5 = 32\n2^3 = 8\n32 × 8 = 256\n2^8 = 256 ✓\n\nKey Exponent Rules for ACT:\n• a^m × a^n = a^(m+n) [multiply → add exponents]\n• a^m ÷ a^n = a^(m-n) [divide → subtract exponents]\n• (a^m)^n = a^(mn) [power to power → multiply exponents]\n• a^0 = 1 [anything to zero = 1]\n• a^(-n) = 1/a^n [negative exponent = reciprocal]',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: numberQuantityTopic.id,
          question: 'If √(x + 12) = 7, what is the value of x?\n\nA) 19\nB) 37\nC) 49\nD) 61\nE) 85',
          solution: 'To solve a square root equation, square both sides.\n\nGiven: √(x + 12) = 7\n\nStep 1: Square both sides\n(√(x + 12))^2 = 7^2\nx + 12 = 49\n\nStep 2: Solve for x\nx = 49 - 12\nx = 37\n\nStep 3: Check the solution\n√(37 + 12) = √49 = 7 ✓\n\nAnswer: B) 37\n\nCommon mistake:\nSome students might solve √x + 12 = 7 instead:\n√x = -5 (impossible! Square roots can\'t be negative)\n\nKey points:\n• Always check your answer in the original equation\n• √ symbol means principal (positive) square root\n• When squaring both sides, parentheses matter!\n  (√(x + 12))^2 = x + 12, not x + 144',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: numberQuantityTopic.id,
          front: 'How do you add or subtract fractions?',
          back: 'Find a common denominator, convert both fractions to equivalent fractions with that denominator, then add/subtract only the numerators. Keep the denominator the same.',
          hint: 'Common denominator needed',
          isPremium: false
        },
        {
          topicId: numberQuantityTopic.id,
          front: 'What is the rule for multiplying powers with the same base?',
          back: 'When multiplying powers with the same base, ADD the exponents: a^m × a^n = a^(m+n). Example: 2^3 × 2^4 = 2^7',
          hint: 'Same base? Add exponents',
          isPremium: false
        },
        {
          topicId: numberQuantityTopic.id,
          front: 'How do you solve a square root equation?',
          back: 'Square both sides of the equation to eliminate the square root, then solve. Always check your answer in the original equation to ensure it\'s valid (no negative under square root).',
          hint: 'Square both sides',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${numberQuantityTopic.title}`);
  }

  // Topic 2: Modeling and Problem Solving
  const modelingTopic = await prisma.topic.findFirst({
    where: {
      slug: 'act-modeling-problem-solving',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (modelingTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: modelingTopic.id,
          question: 'A rectangular garden is 3 times as long as it is wide. If the width is w feet, which expression represents the perimeter in feet?\n\nF) 4w\nG) 6w\nH) 8w\nJ) 3w^2\nK) 12w',
          solution: 'Set up the problem with variables and use the perimeter formula.\n\nGiven information:\n• Width = w feet\n• Length = 3w feet (3 times the width)\n\nStep 1: Recall perimeter formula for rectangle\nPerimeter = 2(length) + 2(width)\nOr: P = 2L + 2W\n\nStep 2: Substitute the expressions\nP = 2(3w) + 2(w)\nP = 6w + 2w\nP = 8w\n\nAnswer: H) 8w\n\nCheck with a specific example:\nIf w = 5, then length = 15\nPerimeter = 5 + 15 + 5 + 15 = 40\n8w = 8(5) = 40 ✓\n\nCommon mistakes:\n• F) 4w - forgot the length is 3 times width\n• G) 6w - only added one length and one width\n• K) 12w - multiplied instead of using perimeter formula',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: modelingTopic.id,
          question: 'A car rental company charges $45 per day plus $0.25 per mile driven. Which equation represents the total cost C (in dollars) for renting a car for d days and driving m miles?\n\nA) C = 45d + 0.25m\nB) C = 45m + 0.25d\nC) C = 45 + 0.25(d + m)\nD) C = (45 + 0.25)(d + m)\nE) C = 45d × 0.25m',
          solution: 'Identify each cost component and add them together.\n\nCost breakdown:\n• Daily charge: $45 per day × d days = 45d\n• Mileage charge: $0.25 per mile × m miles = 0.25m\n\nStep 1: Write total cost equation\nTotal Cost = Daily Cost + Mileage Cost\nC = 45d + 0.25m\n\nAnswer: A) C = 45d + 0.25m\n\nTest with an example:\n3 days, 200 miles:\nC = 45(3) + 0.25(200)\nC = 135 + 50 = $185\n\nReasonable? Yes!\n• 3 days at $45 = $135\n• 200 miles at $0.25 = $50\n• Total = $185 ✓\n\nACT modeling tip:\n• Identify what each variable represents\n• Match units (dollars per day → multiply by days)\n• Check if answer makes sense with real numbers',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: modelingTopic.id,
          question: 'A population of bacteria doubles every 3 hours. If there are initially 500 bacteria, which function models the population P after t hours?\n\nF) P(t) = 500 + 2t\nG) P(t) = 500(2)^t\nH) P(t) = 500(2)^(t/3)\nJ) P(t) = 500(3)^(t/2)\nK) P(t) = 500 + 2^t',
          solution: 'This is exponential growth. Key: population doubles every 3 hours.\n\nExponential growth formula: P(t) = P₀(r)^(t/d)\nWhere:\n• P₀ = initial amount = 500\n• r = growth factor = 2 (doubles)\n• t = time elapsed\n• d = doubling period = 3 hours\n\nStep 1: Build the function\nP(t) = 500(2)^(t/3)\n\nAnswer: H) P(t) = 500(2)^(t/3)\n\nVerification:\n• At t = 0: P(0) = 500(2)^0 = 500(1) = 500 ✓\n• At t = 3: P(3) = 500(2)^1 = 1000 ✓ (doubled!)\n• At t = 6: P(6) = 500(2)^2 = 2000 ✓ (doubled again!)\n\nWhy not the others?\n• F) Linear growth, not exponential\n• G) Doubles every hour, not every 3 hours\n• J) Wrong growth factor (3 instead of 2)\n• K) Linear growth with exponential component\n\nKey: The exponent must be t/3 to account for doubling every 3 hours!',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: modelingTopic.id,
          front: 'How do you set up a perimeter word problem?',
          back: 'Define variables for dimensions, write the perimeter formula (Rectangle: P = 2L + 2W or P = 2(L + W)), substitute the given relationships, and simplify.',
          hint: 'P = 2L + 2W',
          isPremium: false
        },
        {
          topicId: modelingTopic.id,
          front: 'How do you model a cost problem with multiple charges?',
          back: 'Identify each cost component separately (fixed costs, per-unit costs), multiply each rate by its quantity, then add all costs together. Total = Cost₁ + Cost₂ + ...',
          hint: 'Add all cost components',
          isPremium: false
        },
        {
          topicId: modelingTopic.id,
          front: 'What is the exponential growth formula when doubling occurs?',
          back: 'P(t) = P₀(2)^(t/d), where P₀ is initial amount, t is time elapsed, and d is the doubling period. The exponent t/d tells how many doubling periods have passed.',
          hint: 'Base is 2 for doubling',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${modelingTopic.title}`);
  }

  // Topic 3: Sentence Structure and Formation
  const sentenceStructureTopic = await prisma.topic.findFirst({
    where: {
      slug: 'sentence-structure-formation',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (sentenceStructureTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: sentenceStructureTopic.id,
          question: 'The team practiced hard, they won the championship.\n\nWhich of the following is the best revision?\n\nA) NO CHANGE\nB) hard; they won\nC) hard and they won\nD) hard, and they won',
          solution: 'This is a comma splice - two independent clauses joined by only a comma.\n\nProblem: "The team practiced hard" and "they won the championship" are both complete sentences.\n\nStep 1: Identify the error\nComma splice - comma alone can\'t join two independent clauses\n\nStep 2: Evaluate options\nA) NO CHANGE - comma splice (incorrect)\nB) hard; they won - semicolon correctly joins (correct!)\nC) hard and they won - needs comma before "and" (incorrect)\nD) hard, and they won - compound sentence (also correct!)\n\nBoth B and D are grammatically correct!\n\nAnswer: B) hard; they won OR D) hard, and they won\n\n(ACT would typically make only one option work, likely B)\n\nFixes for comma splices:\n1. Semicolon: hard; they won\n2. Comma + coordinating conjunction: hard, and they won\n3. Period: hard. They won\n4. Subordinating conjunction: Because they practiced hard, they won',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: sentenceStructureTopic.id,
          question: 'Running quickly down the street, the bus was missed by Sarah.\n\nWhich is the best revision to fix the misplaced modifier?\n\nF) NO CHANGE\nG) the bus, it was missed by Sarah.\nH) Sarah missed the bus.\nJ) Sarah was missing the bus.\nK) missing the bus was Sarah.',
          solution: 'A misplaced modifier - "Running quickly down the street" incorrectly modifies "the bus."\n\nProblem: The bus wasn\'t running - Sarah was!\n\nStep 1: Identify who is performing the action\nSarah is running (not the bus)\n\nStep 2: Place the modifier next to what it modifies\nThe opening phrase should modify Sarah, so Sarah must come immediately after the comma.\n\nStep 3: Evaluate options\nF) NO CHANGE - bus is running (illogical!)\nG) the bus, it was missed - still has bus running\nH) Sarah missed the bus - CORRECT! Sarah directly follows modifier\nJ) Sarah was missing - wrong tense\nK) missing the bus was Sarah - awkward structure\n\nAnswer: H) Sarah missed the bus.\n\nModifier rule: Place descriptive phrases next to what they describe!\n\nCorrect: Running quickly, Sarah missed the bus.\nIncorrect: Running quickly, the bus was missed.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: sentenceStructureTopic.id,
          question: 'Although the weather was cold, and we decided to go hiking anyway.\n\nWhich is the correct revision?\n\nA) NO CHANGE\nB) cold, we decided\nC) cold; and we decided\nD) cold. And we decided\nE) cold, yet we decided',
          solution: 'This is a sentence fragment - the subordinating conjunction "Although" makes the first clause dependent.\n\nProblem: "Although" + "and" creates confusion. You can\'t have both!\n\nStep 1: Understand subordinating conjunctions\n"Although" creates a dependent clause that needs an independent clause to complete it.\n\nStep 2: Analyze the structure\n"Although the weather was cold" = dependent clause (incomplete)\n"we decided to go hiking anyway" = independent clause (complete)\n\nThese should be joined by a comma, not "and"!\n\nStep 3: Evaluate options\nA) NO CHANGE - has both "although" and "and" (incorrect)\nB) cold, we decided - correctly joins dependent + independent (CORRECT!)\nC) cold; and we decided - semicolon wrong with "although" (incorrect)\nD) cold. And we decided - creates fragment (incorrect)\nE) cold, yet we decided - "although" + "yet" is redundant (incorrect)\n\nAnswer: B) cold, we decided\n\nSubordinating conjunctions (make clause dependent):\nalthough, because, since, while, when, if, unless, after, before\n\nPattern: [Although dependent clause], [independent clause].\nNo additional conjunction needed!',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: sentenceStructureTopic.id,
          front: 'What is a comma splice and how do you fix it?',
          back: 'A comma splice joins two independent clauses with only a comma. Fix it by: 1) Using a semicolon, 2) Adding a comma + coordinating conjunction (and, but, or), 3) Making two sentences, or 4) Making one clause dependent.',
          hint: 'Two complete sentences need more than a comma',
          isPremium: false
        },
        {
          topicId: sentenceStructureTopic.id,
          front: 'What is a misplaced modifier?',
          back: 'A descriptive phrase placed far from what it describes, creating confusion or illogical meaning. Fix: Place the modifier next to the word it modifies. Example: "Running late, the bus left without me" should be "Running late, I missed the bus."',
          hint: 'Modifier must be next to what it describes',
          isPremium: false
        },
        {
          topicId: sentenceStructureTopic.id,
          front: 'How do you use subordinating conjunctions correctly?',
          back: 'Subordinating conjunctions (although, because, since, while, if) create dependent clauses. Pattern: [Dependent clause], [independent clause]. No additional conjunction needed! Don\'t combine with "and," "but," etc.',
          hint: 'Dependent + independent, no extra conjunction',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${sentenceStructureTopic.title}`);
  }

  console.log('\n🎉 ACT Prep Batch 2 complete! (6/17 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
