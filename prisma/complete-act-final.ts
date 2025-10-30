import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding ACT Prep - FINAL Batch (2 topics)\n');

  // Topic 1: Vocabulary in Context
  const vocabularyTopic = await prisma.topic.findFirst({
    where: {
      slug: 'vocabulary-in-context',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (vocabularyTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: vocabularyTopic.id,
          question: 'Read the sentence:\n\n"The politician\'s ambiguous statement left voters uncertain about her position on the issue."\n\nIn this context, "ambiguous" most nearly means:\n\nA) clear and direct\nB) unclear or open to multiple interpretations\nC) angry and confrontational\nD) lengthy and detailed\nE) honest and truthful',
          solution: 'Use context clues to determine word meaning.\n\nSentence: "The politician\'s ambiguous statement left voters uncertain about her position."\n\nStep 1: Identify context clues\nKey phrase: "left voters uncertain"\n\nEffect: voters are uncertain/confused\nCause: the statement was "ambiguous"\n\nLogic: If statement → uncertain, then statement must be unclear!\n\nStep 2: Evaluate options\n\nA) "clear and direct"\n• Would make voters CERTAIN, not uncertain ✗\n• Opposite effect ✗\n\nB) "unclear or open to multiple interpretations"\n• Explains why voters are uncertain ✓\n• Multiple meanings → confusion ✓\n• Matches context perfectly ✓ CORRECT!\n\nC) "angry and confrontational"\n• Might upset voters but doesn\'t explain uncertainty ✗\n• No anger mentioned in context ✗\n\nD) "lengthy and detailed"\n• Details would clarify, not confuse ✗\n• Contradicts "uncertain" effect ✗\n\nE) "honest and truthful"\n• Would provide clarity, not confusion ✗\n\nAnswer: B) unclear or open to multiple interpretations\n\nContext clue strategy:\n1. Find words describing the effect/result\n2. Determine what would cause that effect\n3. Look for contrast words (but, although, despite)\n4. Check if definition makes sense when substituted\n\nTest it: "The politician\'s [unclear] statement left voters uncertain."\nMakes perfect sense! ✓\n\nWord root: "ambi-" = both (like "ambidextrous" = both hands)\n"Ambiguous" = can be interpreted both/multiple ways',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: vocabularyTopic.id,
          question: 'Read the passage:\n\n"Despite the team\'s initial setbacks, they remained resilient, bouncing back from each defeat with renewed determination."\n\nWhat does "resilient" mean in this context?\n\nF) defeated\nG) able to recover quickly from difficulties\nH) permanently damaged\nJ) unwilling to continue\nK) confused and lost',
          solution: 'Context provides definition through explanation and contrast.\n\nSentence: "Despite setbacks, they remained resilient, bouncing back from each defeat with renewed determination."\n\nStep 1: Identify direct context clues\n\nKey phrases:\n• "Despite setbacks" (contrast word!)\n• "bouncing back from each defeat"\n• "renewed determination"\n\nThe phrase "bouncing back" directly explains what resilient means!\n\nStep 2: Analyze the contrast\n"Despite setbacks" = Even though bad things happened\n"remained resilient" = They kept a certain quality\n"bouncing back" = They recovered\n\nThe word means: ability to recover!\n\nStep 3: Evaluate options\n\nF) "defeated"\n• Opposite - they bounced back ✗\n• Contradicts context ✗\n\nG) "able to recover quickly from difficulties"\n• "Bouncing back" = recovering ✓\n• "from each defeat" = from difficulties ✓\n• Matches context perfectly ✓ CORRECT!\n\nH) "permanently damaged"\n• "Renewed determination" shows not damaged ✗\n• Opposite meaning ✗\n\nJ) "unwilling to continue"\n• "Renewed determination" shows willing ✗\n• Contradicts context ✗\n\nK) "confused and lost"\n• No confusion mentioned ✗\n• They have determination (opposite) ✗\n\nAnswer: G) able to recover quickly from difficulties\n\nContext clue types used here:\n1. Contrast: "Despite setbacks" (shows resilient contrasts with setbacks)\n2. Restatement: "bouncing back" restates the meaning\n3. Example: "renewed determination" shows how they\'re resilient\n\nReal-world usage:\n• Resilient materials bounce back to original shape\n• Resilient people recover from challenges\n• Resilient ecosystems restore after disturbance',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: vocabularyTopic.id,
          question: 'Read the passage:\n\n"The scientist\'s meticulous research methods ensured accurate results. She carefully documented every step, double-checked all measurements, and verified each calculation before drawing conclusions."\n\nBased on context, what does "meticulous" mean?\n\nA) careless and rushed\nB) extremely careful and precise\nC) creative and innovative\nD) expensive and wasteful\nE) simple and easy',
          solution: 'Multiple context clues provide definition through examples and effects.\n\nSentence structure:\nMeticulous methods → accurate results\nThen examples of what "meticulous" means in practice\n\nStep 1: Identify the effect\n"Meticulous research methods ensured accurate results"\n\nCause: meticulous methods\nEffect: accurate results\n\nWhat kind of methods ensure accuracy? Careful, thorough ones!\n\nStep 2: Examine the examples\nThe passage explains HOW she was meticulous:\n• "carefully documented every step"\n• "double-checked all measurements"\n• "verified each calculation"\n\nAll examples show extreme care and thoroughness!\n\nStep 3: Evaluate options\n\nA) "careless and rushed"\n• Opposite of "carefully" and "double-checked" ✗\n• Would NOT ensure accurate results ✗\n\nB) "extremely careful and precise"\n• "carefully documented" ✓\n• "double-checked" = extra care ✓\n• "verified" = precision ✓\n• Leads to "accurate results" ✓ PERFECT!\n\nC) "creative and innovative"\n• No creativity mentioned ✗\n• Examples focus on carefulness, not creativity ✗\n\nD) "expensive and wasteful"\n• Nothing about cost ✗\n• "Verified" prevents waste ✗\n\nE) "simple and easy"\n• Double-checking suggests thoroughness, not simplicity ✗\n• Wouldn\'t need such care if simple ✗\n\nAnswer: B) extremely careful and precise\n\nContext clue analysis:\n\n1. Cause-effect: meticulous → accurate\n   (Tells us it\'s a positive quality)\n\n2. Examples (3 given!):\n   • carefully documented\n   • double-checked\n   • verified\n   All show extreme attention to detail!\n\n3. Word structure:\n   Related to "detail" - paying attention to tiny details\n\nACT strategy for challenging vocabulary:\n• Read the entire sentence/paragraph for clues\n• Look for examples that illustrate the word\n• Check cause-effect relationships\n• See if surrounding words are synonyms\n• Substitute your answer to verify it makes sense',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: vocabularyTopic.id,
          front: 'How do you determine word meaning from context?',
          back: 'Look for context clues: 1) Effect/result words, 2) Contrast words (despite, although, but), 3) Restatement or explanation, 4) Examples. Check if your definition makes sense when substituted into the sentence.',
          hint: 'Find clues showing cause, contrast, or examples',
          isPremium: false
        },
        {
          topicId: vocabularyTopic.id,
          front: 'What are the main types of context clues?',
          back: '1) Definition/Restatement: word explained nearby, 2) Example: specific instances given, 3) Contrast: opposite meaning shown with "but/despite", 4) Cause-Effect: result shows meaning, 5) Synonym: similar word nearby.',
          hint: 'Definition, example, contrast, cause-effect, synonym',
          isPremium: false
        },
        {
          topicId: vocabularyTopic.id,
          front: 'How do you use multiple context clues together?',
          back: 'Combine different clue types: check cause-effect relationships, examine examples that illustrate meaning, look for surrounding synonyms, and verify the word structure/roots. All clues should point to the same meaning.',
          hint: 'Combine clues for complete picture',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${vocabularyTopic.title}`);
  }

  // Topic 2: Test Day Preparation
  const testDayTopic = await prisma.topic.findFirst({
    where: {
      slug: 'test-day-preparation',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (testDayTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: testDayTopic.id,
          question: 'What should you bring to the ACT test center?\n\nA) Calculator, pencils, ID, admission ticket\nB) Only your admission ticket\nC) Cell phone and calculator\nD) Laptop computer\nE) Study materials to review',
          solution: 'Knowing what to bring prevents test day problems.\n\nACT Test Day Essentials:\n\nRequired items:\n• Admission ticket (printed or digital)\n• Photo ID (school ID or driver\'s license)\n• #2 pencils (multiple, sharpened)\n• Approved calculator (for Math section)\n\nOptional but recommended:\n• Watch (analog, no smart watches)\n• Snacks and water (for breaks)\n• Extra calculator batteries\n\nProhibited items:\n• Cell phones (must be turned off and stored)\n• Smart watches\n• Study materials during test\n• Laptops/tablets\n• Notes or books\n\nStep 1: Evaluate options\n\nA) "Calculator, pencils, ID, admission ticket"\n• All essential items ✓\n• All permitted ✓\n• Complete list ✓ CORRECT!\n\nB) "Only your admission ticket"\n• Missing ID (required!) ✗\n• Missing pencils and calculator ✗\n\nC) "Cell phone and calculator"\n• Cell phone prohibited during test ✗\n• Must be turned off ✗\n\nD) "Laptop computer"\n• Not permitted ✗\n• ACT is paper-based ✗\n\nE) "Study materials to review"\n• Cannot use during test ✗\n• Should study before, not during ✗\n\nAnswer: A) Calculator, pencils, ID, admission ticket\n\nTest day checklist:\n□ Printed admission ticket\n□ Valid photo ID\n□ 3-4 sharpened #2 pencils\n□ Approved calculator (TI-84, etc.)\n□ Extra batteries\n□ Watch (non-smart)\n□ Snack and water\n□ Know test center location\n□ Arrive 30 minutes early',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: testDayTopic.id,
          question: 'You have 5 minutes left in a section and 8 questions remaining. What is the BEST strategy?\n\nF) Spend all 5 minutes on the first remaining question\nG) Leave all 8 blank\nH) Quickly bubble in random guesses for all 8\nJ) Work carefully on 2-3 questions, then guess strategically on the rest\nK) Ask for more time',
          solution: 'Time management strategy when running out of time.\n\nSituation: 5 minutes, 8 questions left\n\nTime available: 5 minutes ÷ 8 questions ≈ 37 seconds per question\nToo little time to work all problems carefully!\n\nStep 1: Understand ACT scoring\n• No penalty for wrong answers\n• Blank = 0 points, Guess = 25% chance (1/4 for A-D)\n• Never leave blanks!\n\nStep 2: Optimize your strategy\n\nBest approach:\n1. Quickly identify easiest remaining questions\n2. Work those carefully (2-3 questions)\n3. Strategically guess on the rest\n4. Fill in every bubble (never leave blank!)\n\nStep 3: Evaluate options\n\nF) "Spend all 5 minutes on first question"\n• Only 1/8 questions attempted ✗\n• 7 questions left blank (0% chance) ✗\n• Wastes guessing opportunities ✗\n\nG) "Leave all 8 blank"\n• Guaranteed 0 points ✗\n• No penalty means always guess! ✗\n\nH) "Quickly bubble random guesses for all 8"\n• Better than blank (25% chance on each) ✓\n• But misses chance to work easier ones ✗\n\nJ) "Work carefully on 2-3, then guess strategically on rest"\n• Maximizes points on easier questions ✓\n• Still guesses on others (no penalty!) ✓\n• Uses all available time effectively ✓ BEST STRATEGY!\n\nK) "Ask for more time"\n• Not allowed - time limits are strict ✗\n• Unrealistic ✗\n\nAnswer: J) Work carefully on 2-3 questions, then guess strategically on the rest\n\nStrategic guessing tips:\n1. Eliminate obviously wrong answers\n2. Look for patterns (ACT balances A, B, C, D over test)\n3. Choose same letter for all guesses (statisticallyequal)\n4. Never leave blanks!\n\nTime management:\nIf you have 1/4 of time needed:\n• Work 1/4 of problems carefully (easiest ones)\n• Guess on remaining 3/4\n• Better than rushing through all and making careless errors',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: testDayTopic.id,
          question: 'During the ACT, you notice you\'ve been filling in the wrong row on your answer sheet (you\'re one question ahead). With 10 minutes left in the section, what should you do?\n\nA) Continue with the wrong row and fix it later\nB) Panic and give up\nC) Immediately stop, carefully erase and correct all bubbles, then continue\nD) Tell the proctor and request a new answer sheet\nE) Ignore it and hope for the best',
          solution: 'Handling answer sheet mistakes requires calm, strategic thinking.\n\nProblem: Answers are bubbled one row off\nTime remaining: 10 minutes\n\nThis is a serious error that MUST be fixed!\nWrong row = all answers marked wrong = major point loss\n\nStep 1: Assess the situation\n• How many questions are affected?\n• How much time to fix it?\n• Can you still finish?\n\nStep 2: Evaluate options\n\nA) "Continue wrong row and fix later"\n• No time "later" - test ends when time\'s up ✗\n• Will get all questions wrong ✗\n• Catastrophic error ✗\n\nB) "Panic and give up"\n• Wastes 10 minutes ✗\n• Ensures poor score ✗\n• Not productive ✗\n\nC) "Immediately stop, carefully erase and correct all bubbles, then continue"\n• Fixes the critical error ✓\n• 10 minutes might be enough ✓\n• Prevents total loss ✓\n• Better to finish fewer questions correctly than many wrong ✓ BEST!\n\nD) "Tell proctor and request new answer sheet"\n• Wastes precious time explaining ✗\n• Proctor may not allow mid-test ✗\n• You can fix it yourself faster ✗\n\nE) "Ignore it and hope for the best"\n• Guarantees all wrong answers ✗\n• No benefit to hoping ✗\n\nAnswer: C) Immediately stop, carefully erase and correct all bubbles, then continue\n\nStep-by-step fix:\n1. STOP immediately when noticed\n2. Take a breath (stay calm!)\n3. Find where error started\n4. Carefully erase wrong bubbles\n5. Re-bubble correctly (double-check numbers!)\n6. Continue with remaining time\n7. If time runs out, guess on remaining questions\n\nPrevent this error:\n• Check question numbers every 5-10 questions\n• Use finger to track row while bubbling\n• Circle answers in test booklet first, then transfer\n• Develop consistent bubbling rhythm\n\nPriority ranking:\n1. Fix critical errors (wrong row, wrong section)\n2. Answer questions you can do\n3. Guess on remaining questions\n4. Never leave blanks\n\nBetter to have:\n• 20 correct answers + 10 guesses\nThan:\n• 30 wrong answers (bubbled in wrong row)',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: testDayTopic.id,
          front: 'What are the essential items to bring to the ACT test center?',
          back: 'Required: Admission ticket (printed/digital), photo ID, #2 pencils, approved calculator. Recommended: watch (non-smart), snacks and water for breaks, extra batteries. Prohibited: cell phones during test, smart watches, study materials.',
          hint: 'Ticket, ID, pencils, calculator',
          isPremium: false
        },
        {
          topicId: testDayTopic.id,
          front: 'What should you do when running out of time with multiple questions left?',
          back: 'Work carefully on 2-3 easiest remaining questions, then strategically guess on the rest. Never leave blanks (no penalty for wrong answers). Eliminate obviously wrong answers first. Better to get some right than rush all and make careless errors.',
          hint: 'Do easy ones, guess on rest, never blank',
          isPremium: false
        },
        {
          topicId: testDayTopic.id,
          front: 'What should you do if you discover you\'ve been bubbling answers in the wrong row?',
          back: 'STOP immediately, stay calm, carefully erase and correct all wrong bubbles, then continue. Better to finish fewer questions correctly than many in wrong row. Prevent this by checking question numbers every 5-10 questions and using finger to track.',
          hint: 'Stop, fix carefully, continue',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${testDayTopic.title}`);
  }

  console.log('\n');
  console.log('🎉🎉🎉 ACT PREP IS NOW 100% COMPLETE! 🎉🎉🎉');
  console.log('All 29 ACT topics now have example problems and flashcards!\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
