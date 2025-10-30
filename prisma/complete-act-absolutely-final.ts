import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding ACT Prep - ABSOLUTE FINAL (2 topics)\n');

  // Topic 1: Guessing Strategies
  const guessingTopic = await prisma.topic.findFirst({
    where: {
      slug: 'guessing-strategies',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (guessingTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: guessingTopic.id,
          question: 'You have no idea how to solve a math problem. What is the BEST guessing strategy?\n\nA) Leave it blank\nB) Choose "C" (the middle option)\nC) Eliminate any obviously wrong answers, then guess\nD) Bubble in "A" for all questions you don\'t know\nE) Skip it and come back later',
          solution: 'Strategic guessing can improve your score significantly.\n\nKey facts about ACT:\n• NO penalty for wrong answers\n• Blank = 0% chance of points\n• Random guess = 25% chance (1 out of 4 or 5)\n• Eliminate 1 wrong → 33% chance\n• Eliminate 2 wrong → 50% chance!\n\nStep 1: Never leave blanks\nBlank = guaranteed 0 points\nGuess = possible points\n\nStep 2: Evaluate strategies\n\nA) "Leave it blank"\n• 0% chance of points ✗\n• Wastes an opportunity ✗\n\nB) "Choose C (middle option)"\n• No better than random (20% or 25%) ✗\n• Doesn\'t use problem information ✗\n\nC) "Eliminate obviously wrong answers, then guess"\n• Uses problem information ✓\n• Improves odds above 25% ✓\n• Maximizes chance of points ✓ BEST!\n\nD) "Bubble in A for all unknowns"\n• Same as random (25%) ✗\n• Doesn\'t eliminate options ✗\n\nE) "Skip it and come back later"\n• Fine if time allows ✓\n• But must guess before time\'s up! ✗\n\nAnswer: C) Eliminate any obviously wrong answers, then guess\n\nElimination strategies:\n\nMath:\n• Eliminate negative when answer must be positive\n• Eliminate unreasonably large/small values\n• Plug in answer choices to eliminate wrong ones\n\nEnglish:\n• Eliminate options that create grammar errors\n• Eliminate wordy options when concise is better\n• Eliminate options that change meaning incorrectly\n\nReading:\n• Eliminate extremes ("always," "never," "only")\n• Eliminate options contradicting the passage\n• Eliminate options answering different question\n\nScience:\n• Eliminate options contradicting data\n• Eliminate options using wrong units\n• Eliminate options outside data range\n\nGuessing odds:\n• 5 options, random guess: 20%\n• Eliminate 1: 25%\n• Eliminate 2: 33%\n• Eliminate 3: 50%\n• Every elimination helps!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: guessingTopic.id,
          question: 'On the ACT Reading section, you\'re unsure about a question asking for the "main idea." Two answer choices seem possible. How should you decide?\n\nF) Choose the first one you read\nG) Choose the one that covers the entire passage, not just one paragraph\nH) Choose the most specific answer\nJ) Leave it blank\nK) Choose the longest answer',
          solution: 'Strategic elimination for reading comprehension questions.\n\nQuestion type: Main idea\nSituation: Two possible answers remaining\n\nStep 1: Understand main idea characteristics\nMain idea should:\n• Cover ENTIRE passage (not just part)\n• Be broad enough to include all paragraphs\n• Not be too specific (that\'s a detail)\n• Not be too general (that\'s vague)\n\nStep 2: Evaluate decision strategies\n\nF) "Choose the first one you read"\n• Random choice ✗\n• Doesn\'t use passage knowledge ✗\n\nG) "Choose the one that covers the entire passage, not just one paragraph"\n• Matches main idea definition ✓\n• Main idea = whole passage ✓\n• Common trap: detail from one paragraph ✓ BEST!\n\nH) "Choose the most specific answer"\n• Specific = detail, not main idea ✗\n• Main idea is broader ✗\n\nJ) "Leave it blank"\n• No guessing penalty! ✗\n• 50% chance (2 options left) is good ✗\n\nK) "Choose the longest answer"\n• Length doesn\'t indicate correctness ✗\n• No correlation ✗\n\nAnswer: G) Choose the one that covers the entire passage, not just one paragraph\n\nMain idea vs. Supporting detail:\n\nMain idea:\n• Covers whole passage\n• Broader scope\n• Often in intro or conclusion\n• Answers "What is this passage about?"\n\nSupporting detail:\n• Appears in one paragraph\n• Specific example or fact\n• Supports main idea\n• Answers "What evidence is given?"\n\nACT trap answers for main idea:\n1. Too specific (supporting detail from one paragraph)\n2. Too general (could apply to many passages)\n3. Contradicts passage\n4. True statement but not the MAIN point\n\nElimination checklist:\n□ Does it cover the whole passage?\n□ Is it mentioned in multiple paragraphs?\n□ Does it connect to the title/topic?\n□ Is it broad but not too vague?\n\nWhen stuck between two, ask:\n"Which one is the umbrella that the other fits under?"\nThe broader one covering more content = main idea!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: guessingTopic.id,
          question: 'With 30 seconds left, you have 5 questions unanswered. You notice your answer pattern is: A, A, B, C, D, A, B, C, D. What should you do?\n\nA) Leave them blank to avoid wrong answers\nB) All guess "A" since you haven\'t used it much recently\nC) Continue the pattern with A, B, C, D, A\nD) Randomly bubble different letters\nE) Just bubble all "C"',
          solution: 'Advanced guessing strategy under extreme time pressure.\n\nSituation:\n• 30 seconds left\n• 5 questions unanswered\n• Recent pattern: A, A, B, C, D, A, B, C, D\n\nTime available: 30 seconds ÷ 5 questions = 6 seconds each\nToo little time to read questions!\n\nStep 1: Understand ACT answer distribution\n• ACT balances answer distribution\n• Over the whole test, roughly equal A, B, C, D, E/F\n• But not necessarily in order or in short sequences\n• Your recent pattern doesn\'t predict future answers\n\nStep 2: Evaluate strategies\n\nA) "Leave them blank"\n• Guaranteed 0 points ✗\n• No penalty for guessing ✗\n• Always guess! ✗\n\nB) "All guess A (haven\'t used it much recently)"\n• Gambler\'s fallacy ✗\n• Past answers don\'t affect future ones ✗\n• But at least you\'re guessing! Partially OK\n\nC) "Continue the pattern with A, B, C, D, A"\n• Assumes pattern continues (unlikely) ✗\n• ACT doesn\'t follow predictable patterns ✗\n• But still better than blanks ✗\n\nD) "Randomly bubble different letters"\n• Statistical best approach ✓\n• Maximizes chance of hitting correct answers ✓\n• No pattern assumption ✓ BEST!\n\nE) "Just bubble all C"\n• Common strategy (middle option) ✓\n• Same as random over 5 questions ≈\n• Simpler to execute quickly ✓\n• Practically equivalent to D\n\nAnswer: D) Randomly bubble different letters (or E is acceptable)\n\nWhy random/varied is best:\n\nIf correct answers are: B, D, A, C, B\n\n• All "A": 1/5 correct (20%)\n• All "C": 1/5 correct (20%)\n• Random mix (A,B,C,D,E): ≈1-2/5 correct (20-40%)\n\nRandom gives you best AVERAGE outcome!\n\nExtreme time pressure strategy:\n1. No time to read? → Must guess\n2. Never leave blank (no penalty!)\n3. Vary your guesses (A, B, C, D pattern)\n4. OR pick one letter for simplicity (all C)\n5. Bubble neatly (no time to fix mistakes!)\n\nPrevention is better:\n• Pace yourself throughout section\n• Don\'t spend too long on hard questions\n• Mark questions to return to\n• Always fill in an answer before moving on\n• Leave 1-2 minutes for final check\n\nReality check:\n5 random guesses (25% each) = expect 1-2 correct\nThat\'s 1-2 more points than leaving blank!\nOver multiple sections, these points add up!',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: guessingTopic.id,
          front: 'What is the best guessing strategy on the ACT?',
          back: 'Never leave blanks (no penalty for wrong answers). Always eliminate obviously wrong answers first to improve odds. If you eliminate 1 option, your odds improve from 25% to 33%. If you eliminate 2, odds jump to 50%!',
          hint: 'Eliminate wrong answers, then guess',
          isPremium: false
        },
        {
          topicId: guessingTopic.id,
          front: 'How do you choose between two possible answers for a main idea question?',
          back: 'Choose the answer that covers the ENTIRE passage, not just one paragraph. Main ideas are broad enough to include all paragraphs. Specific details from one paragraph are trap answers. Ask: "Which is the umbrella covering more content?"',
          hint: 'Main idea covers whole passage',
          isPremium: false
        },
        {
          topicId: guessingTopic.id,
          front: 'What should you do when you have multiple questions left and no time to read them?',
          back: 'Never leave blanks! Randomly bubble different letters (A, B, C, D pattern) for best statistical outcome, or choose one letter for all (like "C") for simplicity. Both are better than leaving blank. Random guessing gives you ~25% chance per question.',
          hint: 'Never blank, random or pick one letter',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${guessingTopic.title}`);
  }

  // Topic 2: Time Management (ACT)
  const timeManagementTopic = await prisma.topic.findFirst({
    where: {
      slug: 'act-time-management',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (timeManagementTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: timeManagementTopic.id,
          question: 'The ACT Math section has 60 questions in 60 minutes. What is the recommended time per question?\n\nA) 30 seconds\nB) 45 seconds\nC) 1 minute\nD) 2 minutes\nE) It doesn\'t matter',
          solution: 'Understanding ACT timing is crucial for success.\n\nACT Math Section:\n• 60 questions\n• 60 minutes\n• Calculator allowed\n\nStep 1: Calculate time per question\n60 minutes ÷ 60 questions = 1 minute per question\n\nStep 2: Consider reality\n• Some questions are quick (30 seconds)\n• Some questions are complex (2 minutes)\n• Average should be 1 minute\n\nStep 3: Evaluate options\n\nA) "30 seconds"\n• Too fast for most questions ✗\n• Would finish too early ✗\n\nB) "45 seconds"\n• Slightly too fast ✗\n• Better to use full time ✗\n\nC) "1 minute"\n• Matches 60 min ÷ 60 questions ✓\n• Realistic average pace ✓\n• Allows time for checking ✓ CORRECT!\n\nD) "2 minutes"\n• Too slow (would only finish 30 questions) ✗\n• Would run out of time ✗\n\nE) "It doesn\'t matter"\n• Time management is critical! ✗\n• Would likely run out of time ✗\n\nAnswer: C) 1 minute\n\nACT Section Timing Guide:\n\n📝 English: 45 min, 75 questions = 36 seconds each\n➗ Math: 60 min, 60 questions = 1 minute each\n📖 Reading: 35 min, 40 questions = 52 seconds each (+ reading time!)\n🔬 Science: 35 min, 40 questions = 52 seconds each (+ analyzing data!)\n\nTime management strategy:\n1. Know your pace (use practice tests)\n2. Don\'t get stuck on one question\n3. Skip hard ones, return later\n4. Mark questions for review\n5. Always guess before moving on\n6. Save 2-3 minutes for final check\n\nMath-specific timing:\n• Questions 1-30: Easier (30-45 sec each)\n• Questions 31-45: Medium (1-1.5 min each)\n• Questions 46-60: Harder (1.5-2 min each)\n\nAdjust pace as you go!\n\nIf you spend 2 minutes on Q1:\nYou\'ve "borrowed" 1 minute from another question\nMake it up on easier questions!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: timeManagementTopic.id,
          question: 'You\'re 20 minutes into the ACT Reading section (35 min total) and have completed 1 passage with 10 questions. How should you adjust?\n\nF) Continue at the same pace\nG) Speed up significantly - you\'re behind\nH) Slow down to ensure accuracy\nJ) Skip the next passage entirely\nK) Give up and guess on the rest',
          solution: 'Monitoring and adjusting pace during the test.\n\nACT Reading Section:\n• Total time: 35 minutes\n• Total passages: 4\n• Total questions: 40 (10 per passage)\n\nTarget pace:\n35 min ÷ 4 passages = 8.75 minutes per passage\nRound to: ≈9 minutes per passage (including reading!)\n\nCurrent pace:\n• Time elapsed: 20 minutes\n• Passages completed: 1\n• Time per passage: 20 minutes\n\nStep 1: Analyze the situation\nTarget: 9 min per passage\nActual: 20 min for first passage\nYou\'re WAY behind!\n\nRemaining:\n• Time left: 35 - 20 = 15 minutes\n• Passages left: 3\n• Time per passage: 15 ÷ 3 = 5 minutes each!\n\nStep 2: Determine adjustment needed\nNeed to go from 20 min/passage → 5 min/passage\nMust speed up significantly!\n\nStep 3: Evaluate options\n\nF) "Continue at same pace"\n• Would only finish 1.75 passages total ✗\n• Would leave 2+ passages blank ✗\n\nG) "Speed up significantly - you\'re behind"\n• Must speed up to finish ✓\n• 5 min per passage is possible ✓\n• Skim more, answer strategically ✓ CORRECT!\n\nH) "Slow down to ensure accuracy"\n• Wrong direction! ✗\n• Would guarantee incomplete test ✗\n\nJ) "Skip next passage entirely"\n• Waste of points ✗\n• Better to attempt all ✗\n\nK) "Give up and guess on rest"\n• Too extreme ✗\n• Can still salvage score ✗\n\nAnswer: G) Speed up significantly - you\'re behind\n\nHow to speed up reading:\n\n1. Skim don\'t read word-for-word\n   • Read first and last paragraph carefully\n   • Skim middle paragraphs\n   • Note topic of each paragraph\n\n2. Read questions first\n   • Know what to look for\n   • Reference questions = skim to find\n\n3. Don\'t re-read unnecessarily\n   • Answer from memory when possible\n   • Only go back for specific details\n\n4. Guess strategically on harder questions\n   • Don\'t spend 3 minutes on one question\n   • Eliminate and guess if stuck\n\n5. Focus on easier passages first\n   • If one passage is harder, save for last\n   • Maximize points in limited time\n\nAdjusted strategy for remaining 15 minutes:\n• Passage 2: 6 minutes (skim + answer)\n• Passage 3: 5 minutes (skim + answer)\n• Passage 4: 4 minutes (skim + answer)\n• Final check: 0 minutes (no time!)\n\nNot ideal, but better than leaving passages blank!\n\nLesson learned:\n• Check time after each passage\n• First passage should take 8-9 minutes MAX\n• Adjust pace early, not when it\'s too late!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: timeManagementTopic.id,
          question: 'During ACT Science, you encounter a conflicting viewpoints passage (usually the longest). With 10 minutes left and this passage plus 2 more data passages remaining, what\'s the best approach?\n\nA) Spend 8 minutes on the long passage, rush the other two\nB) Skip the long passage and do the two shorter ones first\nC) Give equal time (3.3 minutes) to each\nD) Read all three passages first, then answer all questions\nE) Guess on all three and take a break',
          solution: 'Strategic time allocation based on passage difficulty and point value.\n\nSituation:\n• 10 minutes remaining\n• 1 conflicting viewpoints passage (typically 7 questions, harder)\n• 2 data representation passages (typically 5-6 questions each, easier)\n• ≈18 questions total\n\nStep 1: Analyze passage characteristics\n\nConflicting Viewpoints:\n• Longest reading time\n• Most complex\n• Usually 7 questions\n• Questions can be tricky\n\nData Representation:\n• Less reading\n• Analyze graphs/tables\n• Usually 5-6 questions each\n• Often more straightforward\n\nStep 2: Calculate optimal strategy\n\nTotal points available: All questions worth 1 point each!\n\nOption 1: Do long passage first\n• 8 min on 7 questions\n• 2 min on 11 questions → rushing, likely errors\n\nOption 2: Do short passages first\n• 7 min on 11 questions (≈38 sec each)\n• 3 min on 7 questions (≈26 sec each)\n• More balanced, maximizes accuracy on easier ones\n\nStep 3: Evaluate options\n\nA) "8 min on long, rush other two"\n• Rushing 11 questions in 2 minutes ✗\n• Likely many careless errors ✗\n\nB) "Skip long passage, do shorter ones first"\n• Secures points on easier passages ✓\n• Can return to long if time remains ✓\n• Maximizes total points ✓ BEST!\n\nC) "Equal time (3.3 min each)"\n• Too little time for conflicting viewpoints ✗\n• Wastes efficiency on easier passages ✗\n\nD) "Read all, then answer all"\n• Wastes time ✗\n• Forget details from first passages ✗\n\nE) "Guess and take a break"\n• Gives up points ✗\n• No breaks during section ✗\n\nAnswer: B) Skip the long passage and do the two shorter ones first\n\nACT Science strategy principles:\n\n1. Not all passages are equal difficulty\n   • Data representation: Usually easier\n   • Research summaries: Medium\n   • Conflicting viewpoints: Usually hardest\n\n2. All questions worth same points!\n   • Easy question = 1 point\n   • Hard question = 1 point\n   • Do easier ones first!\n\n3. Time allocation priority\n   • Maximize points per minute\n   • Easy passages → High points/minute\n   • Hard passages → Low points/minute\n\nOptimal time management:\n\nWith 10 minutes left:\n1. Identify easiest passages (quick scan)\n2. Do easier passages thoroughly (7 min, 11 questions)\n3. Spend remaining time on hardest passage (3 min, 7 questions)\n4. Guess on any unanswered in last 10 seconds\n\nResult:\n• 11 questions done carefully (likely 9-10 correct)\n• 7 questions attempted quickly (likely 3-4 correct)\n• Total: 12-14 points instead of possibly 8-10\n\nGeneral ACT wisdom:\n"Get the easy points first, then fight for the hard ones."\n\nApplies to all sections!\n• Do passages in any order\n• Skip hard questions, return later\n• Secure points on questions you can definitely do\n• Use remaining time on harder ones',
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
          front: 'What is the recommended time per question for each ACT section?',
          back: 'English: 36 sec (75 questions/45 min), Math: 1 min (60 questions/60 min), Reading: 52 sec per question but 9 min per passage including reading, Science: 52 sec (40 questions/35 min including analyzing data). Adjust as needed!',
          hint: 'English 36s, Math 1m, Reading/Science 52s',
          isPremium: false
        },
        {
          topicId: timeManagementTopic.id,
          front: 'What should you do if you realize you\'re behind pace during a section?',
          back: 'Speed up significantly: skim instead of deep reading, answer from memory when possible, guess strategically on harder questions, focus on easier problems first. Check time after each passage/set of questions to adjust early, not late.',
          hint: 'Skim more, guess on hard ones, focus on easy',
          isPremium: false
        },
        {
          topicId: timeManagementTopic.id,
          front: 'How should you allocate time when you have multiple passages of different difficulties remaining?',
          back: 'Do easier passages first to maximize points per minute. All questions are worth 1 point, so get easy points first. Spend remaining time on harder passages. In Science, data representation passages are usually easier than conflicting viewpoints.',
          hint: 'Easy passages first, all questions = 1 point',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${timeManagementTopic.title}`);
  }

  console.log('\n');
  console.log('🎉🎉🎉 ACT PREP IS NOW 100% COMPLETE (FOR REAL)! 🎉🎉🎉');
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
