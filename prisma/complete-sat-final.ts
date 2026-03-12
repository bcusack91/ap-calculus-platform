import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding SAT Prep - FINAL Batch (3 topics)\n');

  // Topic 1: Calculator vs No-Calculator Strategies
  const calculatorStrategiesTopic = await prisma.topic.findFirst({
    where: {
      slug: 'calculator-strategies',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (calculatorStrategiesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: calculatorStrategiesTopic.id,
          question: 'On the NO-CALCULATOR section, you encounter: "What is the value of (2x + 3)(x - 4) when x = 5?"\n\nWhat is the BEST strategy?\n\nA) Try to multiply the binomials in your head, then substitute x = 5\nB) Substitute x = 5 first, then calculate (2(5) + 3)(5 - 4)\nC) Skip the question since you don\'t have a calculator\nD) Use the answer choices to work backwards',
          solution: 'Without a calculator, you want the SIMPLEST, most ERROR-FREE approach.\n\nA) Multiply binomials in head, then substitute\n• (2x + 3)(x - 4) = 2x² - 8x + 3x - 12 = 2x² - 5x - 12\n• Then substitute: 2(25) - 5(5) - 12 = 50 - 25 - 12 = 13\n• DIFFICULT mental math\n• High error risk ✗\n\nB) Substitute FIRST, then calculate\n• x = 5 → (2(5) + 3)(5 - 4)\n• = (10 + 3)(1)\n• = (13)(1)\n• = 13\n• MUCH SIMPLER! ✓\n• Fewer steps, easier arithmetic\n• BEST approach ✓\n\nC) Skip the question\n• This is a doable problem!\n• No reason to skip ✗\n\nD) Work backwards from answers\n• Would work, but more time-consuming\n• Not necessary when substitution is so easy ✗\n\nAnswer: B) Substitute x = 5 first, then calculate (2(5) + 3)(5 - 4)\n\nNo-Calculator Strategy:\n**When evaluating expressions at a specific value, SUBSTITUTE FIRST before simplifying!**\n\nThis often turns complex algebra into simple arithmetic.\n\nOther No-Calculator Tips:\n• Look for patterns and shortcuts\n• Factor or simplify before calculating\n• Use estimation to check reasonableness\n• Cancel common factors in fractions\n• Recognize perfect squares and cubes',
          difficulty: 'MEDIUM',
          order: 1,
          isPremium: false
        },
        {
          topicId: calculatorStrategiesTopic.id,
          question: 'On the CALCULATOR section, you need to solve: 2x² - 5x - 3 = 0\n\nWhich strategy is MOST efficient with a calculator?\n\nA) Use the quadratic formula and calculate step-by-step\nB) Graph y = 2x² - 5x - 3 and find x-intercepts\nC) Try to factor mentally, then use calculator to check\nD) Guess and check using the answer choices',
          solution: 'With a calculator available, use it STRATEGICALLY to save time and avoid errors.\n\nA) Quadratic formula: x = (-b ± √(b² - 4ac))/(2a)\n• x = (5 ± √(25 + 24))/4\n• x = (5 ± √49)/4\n• x = (5 ± 7)/4\n• x = 3 or x = -1/2\n• WORKS but requires careful entry\n• Moderate speed ✓\n\nB) Graph y = 2x² - 5x - 3, find x-intercepts\n• Enter equation in graphing calculator\n• Use "zero" or "root" function\n• Visual confirmation\n• FAST and RELIABLE! ✓✓\n• BEST for calculator section! ✓\n\nC) Factor mentally, then check\n• (2x + 1)(x - 3) = 0\n• x = -1/2 or x = 3\n• Works if you can factor, but why waste mental energy? ✗\n\nD) Guess and check\n• Inefficient\n• Answer choices might not be given\n• Not strategic ✗\n\nAnswer: B) Graph y = 2x² - 5x - 3 and find x-intercepts\n\nCalculator Section Strategy:\n**Use the graphing calculator\'s powerful features!**\n\nGraphing calculator advantages:\n• Find intersections (solve systems)\n• Find zeros/roots (solve equations)\n• Calculate with complex expressions\n• Verify algebraic work\n• Handle decimal answers easily\n\nWhen to graph:\n• Solving quadratic equations\n• Systems of equations\n• Finding maximums/minimums\n• Understanding function behavior\n\nStill use algebra when:\n• It\'s faster (simple factoring)\n• Exact symbolic answer needed\n• Problem requires showing work conceptually',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: calculatorStrategiesTopic.id,
          question: 'You\'re on the NO-CALCULATOR section with 5 minutes left and 3 questions remaining. One requires simplifying a complex fraction, one is a word problem with simple arithmetic, and one involves factoring a quadratic. What order should you tackle them?\n\nA) Complex fraction → Word problem → Quadratic\nB) Quadratic → Word problem → Complex fraction\nC) Word problem → Quadratic → Complex fraction\nD) Do them in the order they appear',
          solution: 'Strategic prioritization without a calculator means doing EASIER computations first.\n\nAssessing difficulty (no calculator):\n\n1. Word problem with simple arithmetic:\n• Reading + basic addition/subtraction/multiplication\n• Most straightforward\n• EASIEST ⭐\n\n2. Factoring quadratic:\n• Pattern recognition\n• (x + a)(x + b) form\n• Moderate difficulty if factors are obvious\n• MEDIUM 🔶\n\n3. Complex fraction:\n• Multiple steps\n• Finding common denominators\n• Simplifying nested fractions\n• High chance of arithmetic errors\n• HARDEST 🔴\n\nOptimal order: EASY → MEDIUM → HARD\n\nC) Word problem → Quadratic → Complex fraction\n• Tackle easiest first (guaranteed points)\n• Build confidence\n• Save hardest for last (when you might run out of time)\n• BEST strategy! ✓\n\nWhy not the others:\nA) Starts with hardest - risky ✗\nB) Medium first - not optimal ✗\nD) Random order - ignores difficulty ✗\n\nAnswer: C) Word problem → Quadratic → Complex fraction\n\nGeneral No-Calculator Prioritization:\n\n1. Questions with simple arithmetic\n2. Estimation and reasonableness\n3. Pattern recognition (sequences, factors)\n4. Basic algebra\n5. Complex fractions/radicals\n6. Multi-step calculations\n\nTime Management:\n• Don\'t get stuck on one hard problem\n• Quick wins first = points in the bank\n• Come back to hard ones if time permits\n• Smart guessing on remaining questions (no penalty!)\n\nNo-Calculator Mindset:\n• Look for shortcuts\n• Simplify before calculating\n• Use answer choices strategically\n• Check reasonableness',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: calculatorStrategiesTopic.id,
          front: 'When evaluating expressions on the no-calculator section, what\'s the best approach?',
          back: 'Substitute values BEFORE simplifying complex algebra. This turns difficult symbolic manipulation into simpler arithmetic. Example: For (2x+3)(x-4) at x=5, calculate (13)(1) rather than expanding first.',
          hint: 'Substitute first',
          isPremium: false
        },
        {
          topicId: calculatorStrategiesTopic.id,
          front: 'What\'s the most efficient way to use a graphing calculator on SAT Math?',
          back: 'Use graphing features to solve equations (find x-intercepts), solve systems (find intersections), and verify algebraic work. Graph y = equation and use zero/root/intersection functions.',
          hint: 'Graph and use built-in functions',
          isPremium: false
        },
        {
          topicId: calculatorStrategiesTopic.id,
          front: 'How should you prioritize questions on the no-calculator section when short on time?',
          back: 'Do easiest computations first (simple arithmetic, estimation), then moderate difficulty (factoring, basic algebra), save complex fractions and multi-step calculations for last.',
          hint: 'Easy → Medium → Hard',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Calculator vs No-Calculator Strategies');
  }

  // Topic 2: Time Management for SAT
  const timeManagementTopic = await prisma.topic.findFirst({
    where: {
      slug: 'sat-time-management',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (timeManagementTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: timeManagementTopic.id,
          question: 'The SAT Reading section has 5 passages and 52 questions in 65 minutes. What is the recommended time allocation per passage?\n\nA) 10 minutes per passage\nB) 13 minutes per passage\nC) 15 minutes per passage\nD) Spend equal time on each question regardless of passage',
          solution: 'Calculate time per passage:\n\nTotal time: 65 minutes\nNumber of passages: 5\nTime per passage: 65 ÷ 5 = 13 minutes\n\nB) 13 minutes per passage ✓\n\nBreakdown per passage (13 minutes):\n• 3-4 minutes: Read/skim passage\n• 8-9 minutes: Answer questions (~50-60 seconds per question)\n• 1 minute: Review flagged questions\n\nWhy 13 minutes works:\n• Balances reading and answering\n• ~10-11 questions per passage\n• About 1 minute per question\n• Sustainable pace\n\nWhy not the others:\nA) 10 min × 5 = 50 min (leaves 15 min unused - wasteful) ✗\nC) 15 min × 5 = 75 min (over time limit!) ✗\nD) Ignores passage reading time ✗\n\nAnswer: B) 13 minutes per passage\n\nTime Management Tips:\n\n1. TRACK TIME:\n• Check clock after each passage\n• Adjust if behind/ahead\n\n2. FLEXIBLE PACING:\n• Easier passages: might finish in 11 minutes\n• Harder passages: might need 15 minutes\n• Average should be ~13 minutes\n\n3. DON\'T PANIC:\n• If one passage takes longer, speed up on next\n• Better to complete 4 passages well than rush through all 5\n\n4. STRATEGIC SKIPPING:\n• If a passage seems very difficult, consider skipping and returning\n• Do easier passages first\n\nGeneral SAT Sections:\n• Reading: 65 min, 52 questions (5 passages) → 13 min/passage\n• Writing: 35 min, 44 questions (4 passages) → 8-9 min/passage\n• Math No-Calc: 25 min, 20 questions → 1.25 min/question\n• Math Calc: 55 min, 38 questions → 1.4 min/question',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: timeManagementTopic.id,
          question: 'You\'re working on the SAT Math (calculator) section. You\'ve spent 4 minutes on one question and still aren\'t sure of the answer. What should you do?\n\nA) Keep working until you solve it - you\'ve already invested 4 minutes\nB) Make your best guess, mark it, and move on\nC) Leave it blank and never return to it\nD) Spend 2 more minutes to ensure you get it right',
          solution: 'This tests the "sunk cost fallacy" and smart time management.\n\nA) Keep working - "sunk cost fallacy"\n• Already spent 4 min doesn\'t mean you should spend more\n• Average should be 1.4 min/question\n• You\'re WAY over time\n• Missing easier questions you could solve ✗\n\nB) Best guess, mark it, move on\n• Cut your losses\n• 4 minutes could solve 2-3 easier problems\n• Can return if time permits\n• Marked so you remember to come back\n• BEST strategy! ✓\n\nC) Leave blank, never return\n• No penalty for wrong answers on SAT!\n• Should always guess\n• Might not have time to return, so guess now ✗\n\nD) Spend 2 more minutes (6 minutes total!)\n• Even if you get it right, huge time waste\n• Could cost you multiple easier questions\n• Not strategic ✗\n\nAnswer: B) Make your best guess, mark it, and move on\n\nWhen to move on:\n• Spent 2× average time (about 3 minutes for calculator section)\n• Still unclear on approach\n• Feeling stuck or frustrated\n• Have other questions to complete\n\nMarking strategy:\n• Circle question number in test booklet\n• Make educated guess (eliminate wrong answers first)\n• Come back if time remains\n\nNo Penalty for Wrong Answers:\n• SAT scoring: Right = +1 point, Wrong or Blank = 0 points\n• ALWAYS GUESS if running out of time!\n• Educated guessing better than random (eliminate 1-2 choices)\n\nTime Management Mindset:\n• All questions worth 1 point\n• Easy question = same value as hard question\n• Maximize total points, not perfection on individual questions\n• Strategic point collection > perfectionism',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: timeManagementTopic.id,
          question: 'With 10 minutes left in the Writing section, you have:\n• 2 passages completely unanswered (16 questions)\n• 3 questions marked for review\n\nWhat\'s your BEST strategy?\n\nA) Review the 3 marked questions carefully, then guess on the 16\nB) Quickly work through as many of the 16 questions as possible, skip the marked ones\nC) Split time evenly: 5 min on marked questions, 5 min on new passages\nD) Triage: Skim both passages, answer easy/direct questions first, then marked questions if time allows',
          solution: 'Crisis time management requires MAXIMIZING POINTS in limited time.\n\nGiven:\n• 10 minutes\n• 16 new questions (2 passages)\n• 3 review questions\n• Total: 19 questions to handle\n\nAssessing options:\n\nA) Review 3 marked, then guess on 16\n• Might perfect 3 questions = 3 points\n• Random guess on 16 = ~4 points (25% × 16)\n• Expected total: ~7 points\n• WASTEFUL ✗\n\nB) Work through 16, skip marked\n• Might answer 8-10 of the 16 correctly in 10 min\n• Abandon 3 marked questions\n• Expected: 8-10 points\n• Better, but not optimal ✗\n\nC) Split evenly\n• 5 min on 3 marked: might get 2-3 right\n• 5 min on 16 new: might get 4-5 right\n• Expected: 6-8 points\n• Mediocre ✗\n\nD) Triage - prioritize answerable questions\n• Skim passages quickly (2 min)\n• Identify easy questions: grammar, word choice, sentence placement (4-5 min)\n• Answer 8-10 easy ones = 8-10 points\n• Quick check on marked if time (2 min)\n• Guess on remaining\n• Expected: 10-12 points\n• MAXIMIZES points! ✓\n\nAnswer: D) Triage: Skim both passages, answer easy/direct questions first, then marked questions if time allows\n\nTriage Principles:\n\n1. ASSESS QUICKLY\n• Don\'t read passages deeply\n• Scan for question difficulty\n\n2. CATEGORIZE QUESTIONS:\n   EASY (answer quickly):\n   • Grammar rules (subject-verb agreement, punctuation)\n   • Word choice\n   • Sentence structure\n   • Transitions (if you skim context)\n   \n   HARDER (save for last):\n   • Main idea questions\n   • Organization questions\n   • Questions requiring deep reading\n\n3. LOW-HANGING FRUIT\n• Some questions can be answered from one sentence\n• Don\'t need full passage understanding\n• Grab these points!\n\n4. EDUCATED GUESSING\n• Eliminate obviously wrong answers\n• 50/50 guess better than 1/4 random\n\nGeneral Crisis Strategy:\n1. Don\'t panic (wastes time)\n2. Assess what\'s left (30 seconds)\n3. Prioritize high-success questions\n4. Execute quickly\n5. Guess on remaining (no penalty!)',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: timeManagementTopic.id,
          front: 'How much time should you spend per passage on SAT Reading?',
          back: 'About 13 minutes per passage (65 minutes ÷ 5 passages). Spend 3-4 minutes reading, 8-9 minutes answering questions (~50-60 seconds per question).',
          hint: '65 ÷ 5 = 13 minutes',
          isPremium: false
        },
        {
          topicId: timeManagementTopic.id,
          front: 'When should you move on from a difficult question?',
          back: 'If you\'ve spent 2× the average time (about 2-3 minutes) and are still stuck, make your best guess, mark it, and move on. You can return if time permits. Don\'t fall for the sunk cost fallacy.',
          hint: 'After 2× average time',
          isPremium: false
        },
        {
          topicId: timeManagementTopic.id,
          front: 'What is the triage strategy when running out of time on SAT?',
          back: 'Quickly assess remaining questions, identify and answer easy/quick ones first (grammar rules, direct questions), then tackle harder ones if time allows. Maximize points by prioritizing high-success questions.',
          hint: 'Easy questions first, maximize points',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Time Management for SAT');
  }

  // Topic 3: Process of Elimination
  const processEliminationTopic = await prisma.topic.findFirst({
    where: {
      slug: 'process-of-elimination',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (processEliminationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: processEliminationTopic.id,
          question: 'In the sentence "The committee members was discussing the new policy," you need to identify the error. Using process of elimination, which answers can you eliminate immediately?\n\nA) NO CHANGE\nB) change "committee" to "committees"\nC) change "was" to "were"\nD) change "policy" to "policies"\n\nWhich can you eliminate first?',
          solution: 'Process of Elimination strategy: Remove OBVIOUSLY WRONG answers first.\n\nIdentify the error:\n• Subject: "committee members" (plural)\n• Verb: "was" (singular)\n• ERROR: Subject-verb disagreement\n\nEliminating answers:\n\nA) NO CHANGE\n• Keeps the error (was with plural subject)\n• Possible wrong answer, but could be trick\n• Don\'t eliminate yet ⏸️\n\nB) change "committee" to "committees"\n• Makes subject "committees members" (awkward)\n• Doesn\'t fix verb agreement\n• ELIMINATE immediately ✗\n\nC) change "was" to "were"\n• Makes verb plural to match subject\n• Fixes the error!\n• KEEP ✓\n\nD) change "policy" to "policies"\n• "Policy" is object, not part of subject-verb agreement\n• Doesn\'t address the error\n• ELIMINATE immediately ✗\n\nAnswer: You can eliminate B and D immediately, leaving A vs. C.\n\nSince there\'s an error, A is wrong, C is correct.\n\nElimination Strategy:\n\n1. IDENTIFY THE ISSUE (grammar, math concept, etc.)\n\n2. ELIMINATE OBVIOUSLY WRONG:\n   • Changes unrelated parts\n   • Creates new errors\n   • Nonsensical\n\n3. NARROW TO 2-3 CHOICES\n\n4. EVALUATE REMAINING CAREFULLY\n\nBenefits:\n• Improves odds (50% vs 25% if guessing)\n• Reduces cognitive load\n• Focuses attention on viable options\n• Faster decision-making\n\nSAT Tip: Even eliminating ONE wrong answer significantly improves your odds!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: processEliminationTopic.id,
          question: 'On a math question asking "What is the value of x in 3x + 7 = 22?", the answers are:\n\nA) 3\nB) 5\nC) 7\nD) 15\n\nYou don\'t remember the exact steps. How can you use process of elimination?\n\nWhat\'s the BEST elimination strategy?',
          solution: 'When stuck, use ANSWER CHOICES to your advantage!\n\nStrategy 1: PLUG IN answers (backsolving)\n\nTest A) x = 3:\n3(3) + 7 = 9 + 7 = 16 ≠ 22 ✗\nELIMINATE A\n\nTest B) x = 5:\n3(5) + 7 = 15 + 7 = 22 ✓\nThis works! \nAnswer: B\n\nStrategy 2: ESTIMATION (before calculating)\n\n3x + 7 = 22\n3x = 15 (approximately, after subtracting 7)\nx = 5 (dividing by 3)\n\nEliminate:\nC) 7 → 3(7) + 7 = 28 (too big) ✗\nD) 15 → 3(15) + 7 = 52 (way too big) ✗\n\nNarrow to A or B, then test\n\nStrategy 3: REASONABLENESS\n\n22 - 7 = 15\n15 ÷ 3 = 5\n\nAnswer: B) 5\n\nElimination Principles:\n\n1. TOO LARGE/SMALL:\n• Quick estimation eliminates extreme values\n• In this case, C and D are clearly too large\n\n2. DOESN\'T FIT PATTERN:\n• If answer must be even/odd\n• If answer must be positive/negative\n• Eliminates incompatible choices\n\n3. BACKSOLVING:\n• Plug answers into equation\n• Works great for equations and word problems\n• Start with middle value (B or C) if answers are ordered\n\n4. PROCESS:\n• Eliminate 1-2 wrong answers\n• Test remaining\n• Confirm answer makes sense\n\nBEST strategy for this problem: Backsolving (testing answer choices)\n\nWhen to backsolvе:\n• Equation solving\n• Word problems with numerical answers\n• "Which value satisfies..."\n• When algebra feels too complicated',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: processEliminationTopic.id,
          question: 'A Reading question asks: "The author\'s tone in the passage can best be described as:"\n\nA) hostile and bitter\nB) cautiously optimistic\nC) completely neutral\nD) ecstatically joyful\n\nYou remember the passage was positive but measured. How do you use elimination effectively?',
          solution: 'For subjective questions (tone, attitude, purpose), eliminate EXTREME or UNSUPPORTED answers.\n\nWhat you know: Passage was positive but measured (not extreme)\n\nEliminating:\n\nA) "hostile and bitter"\n• EXTREME negative words\n• Passage was positive, not negative\n• ELIMINATE immediately ✗\n\nB) "cautiously optimistic"\n• Positive (optimistic) ✓\n• Measured (cautiously) ✓\n• Fits description\n• KEEP ✓\n\nC) "completely neutral"\n• "Completely" is extreme\n• Passage was positive, not neutral\n• ELIMINATE ✗\n\nD) "ecstatically joyful"\n• EXTREME positive words\n• Passage was measured, not ecstatic\n• ELIMINATE ✗\n\nAnswer: B) cautiously optimistic\n\nElimination for Tone/Attitude Questions:\n\n1. ELIMINATE EXTREMES:\n   Extreme words (usually wrong):\n   • Absolutely, completely, entirely, utterly\n   • Ecstatic, furious, devastating, perfect\n   • Always, never, all, none\n   \n   SAT favors NUANCED answers:\n   • Somewhat, slightly, generally, often\n   • Cautiously, moderately, reasonably\n   • Suggests, implies, tends to\n\n2. ELIMINATE OPPOSITE TONE:\n• If passage is positive, eliminate negative\n• If passage is serious, eliminate humorous\n• If passage is critical, eliminate praising\n\n3. LOOK FOR QUALIFIERS:\n• "Cautiously optimistic" better than "optimistic"\n• "Mildly critical" better than "harshly critical"\n• "Generally supportive" better than "completely supportive"\n\n4. CONTEXT CLUES:\n• Strong adjectives (amazing, terrible) → not neutral\n• Hedging language (perhaps, may, seems) → tentative tone\n• Imperatives (must, should) → authoritative tone\n\nElimination Pattern for Reading:\n\n1st Pass - ELIMINATE:\n• Opposite meaning\n• Extreme statements\n• Unsupported by passage\n• Too narrow or too broad\n\n2nd Pass - COMPARE REMAINING:\n• Which has more passage support?\n• Which is more precise?\n• Which better matches scope?\n\n3rd Pass - CONFIRM:\n• Reread relevant parts\n• Verify answer choice\n\nGeneral Elimination Wisdom:\n\nSAT answer patterns:\n• Extreme answers usually wrong\n• "Always"/"Never" usually wrong\n• Middle-ground answers often correct\n• Answers with qualifiers often correct\n\nWhen stuck between 2:\n• Reread relevant passage section\n• Look for subtle differences\n• Choose more specific/nuanced option\n• Trust your instinct (first impression often right)\n\nRemember: Eliminating even ONE answer improves odds from 25% to 33%!',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: processEliminationTopic.id,
          front: 'What is the process of elimination strategy?',
          back: 'Remove obviously wrong answers first to narrow your choices, improving odds even if you\'re not sure of the right answer. Eliminating one wrong answer increases your chance from 25% to 33%, eliminating two increases it to 50%.',
          hint: 'Remove wrong answers to improve odds',
          isPremium: false
        },
        {
          topicId: processEliminationTopic.id,
          front: 'What types of answer choices should you eliminate first on SAT Reading?',
          back: 'Eliminate extreme answers (absolutely, completely, ecstatically), opposite tone from passage, unsupported claims, and answers that are too narrow or broad. SAT favors nuanced, qualified answers.',
          hint: 'Extremes and opposites',
          isPremium: false
        },
        {
          topicId: processEliminationTopic.id,
          front: 'When should you use backsolving (plugging in answer choices)?',
          back: 'When solving equations, word problems with numerical answers, or "which value satisfies" questions. Plug answer choices into the equation to see which works. Start with middle values if answers are ordered.',
          hint: 'Test answer choices in the equation',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Process of Elimination');
  }

  console.log('\n🎉🎉🎉 SAT PREP IS NOW 100% COMPLETE! (38/38 topics) 🎉🎉🎉\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
