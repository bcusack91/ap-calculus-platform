import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding ACT Prep - Batch 3 (3 topics)\n');

  // Topic 1: Rhetorical Skills
  const rhetoricalSkillsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'rhetorical-skills',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (rhetoricalSkillsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: rhetoricalSkillsTopic.id,
          question: '[1] The Grand Canyon is one of the most visited national parks. [2] Millions of tourists come each year. [3] It was formed by erosion over millions of years. [4] The Colorado River carved through layers of rock.\n\nTo improve the logical flow, sentence 3 should be placed:\n\nA) where it is now\nB) before sentence 1\nC) before sentence 2\nD) after sentence 4',
          solution: 'Organization requires grouping related ideas together.\n\nCurrent organization:\n[1] Popular park (general intro)\n[2] Tourist numbers (popularity)\n[3] Formation process (geology)\n[4] Colorado River (geology)\n\nProblem: Sentences 3 and 4 both discuss geological formation, but they\'re separated by sentence 2 about tourism.\n\nStep 1: Group related ideas\n• Tourism: sentences 1, 2\n• Geology: sentences 3, 4\n\nStep 2: Determine best order\nSentences 3 and 4 should be together!\n\nBetter organization:\n[1] Intro - [2] Tourism - [3] Formation - [4] River\nOr: [1] Intro - [3] Formation - [4] River - [2] Tourism\n\nAnswer: A) where it is now\n\nWait - let me reconsider:\nIf we keep it as is, geological sentences are split.\nIf we move 3 after 4, that\'s backward (effect before cause).\n\nActually, current placement works because:\n1-2 discuss the park\'s popularity\n3-4 discuss its formation\n\nAnswer: A) where it is now (maintains topic grouping)\n\nACT rhetorical skills tip: Group sentences by topic/theme!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: rhetoricalSkillsTopic.id,
          question: 'The author wants to add a sentence that emphasizes the importance of recycling to the local community. Which sentence best accomplishes this goal?\n\nF) Recycling has been around for many decades.\nG) Our town\'s recycling program has diverted over 500 tons of waste from landfills this year alone.\nH) Many people forget to recycle their plastic bottles.\nJ) Recycling bins are typically blue or green.',
          solution: 'The goal is to emphasize importance to the LOCAL COMMUNITY.\n\nStep 1: Identify the key requirement\nMust show impact on "local community" (not general recycling info)\n\nStep 2: Evaluate each option\n\nF) "Recycling has been around for many decades"\n• General historical fact\n• No local connection ✗\n\nG) "Our town\'s recycling program has diverted over 500 tons of waste from landfills this year alone"\n• Specific to "our town" (local!) ✓\n• Shows concrete impact (500 tons) ✓\n• Demonstrates importance ✓\n\nH) "Many people forget to recycle their plastic bottles"\n• About a problem, not importance\n• General statement, not local ✗\n\nJ) "Recycling bins are typically blue or green"\n• Trivial fact about bin colors\n• No importance or local connection ✗\n\nAnswer: G) Our town\'s recycling program has diverted over 500 tons of waste from landfills this year alone.\n\nRhetorical strategy tip:\n• Read the goal carefully (local community, emphasis, importance)\n• Eliminate options missing any requirement\n• Choose option that fulfills ALL criteria',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: rhetoricalSkillsTopic.id,
          question: 'Given that all the following statements are true, which one provides the most effective transition from the previous paragraph about traditional farming to this paragraph about modern agricultural technology?\n\nA) Farmers have always worked hard.\nB) However, new technologies are revolutionizing how crops are grown.\nC) Tractors are expensive pieces of equipment.\nD) Soil quality matters for plant growth.',
          solution: 'A transition sentence must connect TWO ideas: traditional farming AND modern technology.\n\nStep 1: Identify what we\'re transitioning FROM and TO\nFROM: Traditional farming (previous paragraph)\nTO: Modern agricultural technology (this paragraph)\n\nStep 2: Look for contrast or connection\nThis is a shift from old to new → needs contrast word!\n\nStep 3: Evaluate options\n\nA) "Farmers have always worked hard"\n• Generic statement\n• No connection to technology ✗\n• No transition ✗\n\nB) "However, new technologies are revolutionizing how crops are grown"\n• "However" = contrast word ✓\n• "New technologies" = modern ag tech ✓\n• "Revolutionizing" = implies change from traditional ✓\n• Perfect transition! ✓\n\nC) "Tractors are expensive pieces of equipment"\n• Too specific (just tractors)\n• No clear transition ✗\n\nD) "Soil quality matters for plant growth"\n• Generic farming fact\n• Applies to both old and new\n• No transition ✗\n\nAnswer: B) However, new technologies are revolutionizing how crops are grown.\n\nTransition words for contrast:\nhowever, nevertheless, on the other hand, in contrast, conversely, yet, although\n\nTransition checklist:\n✓ Connects to previous paragraph\n✓ Introduces new paragraph topic\n✓ Uses appropriate transition word',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: rhetoricalSkillsTopic.id,
          front: 'How do you organize sentences in a paragraph?',
          back: 'Group related ideas together by topic or theme. Keep sentences about the same subject near each other. Order can be: chronological, general to specific, cause to effect, or by importance.',
          hint: 'Group related ideas',
          isPremium: false
        },
        {
          topicId: rhetoricalSkillsTopic.id,
          front: 'How do you choose a sentence that accomplishes a specific goal?',
          back: 'Read the goal carefully and identify ALL requirements (audience, purpose, emphasis). Eliminate options that miss any requirement. Choose the option that fulfills every criteria stated in the goal.',
          hint: 'Match ALL criteria in the goal',
          isPremium: false
        },
        {
          topicId: rhetoricalSkillsTopic.id,
          front: 'What makes an effective transition sentence?',
          back: 'It connects to the previous paragraph\'s topic AND introduces the new paragraph\'s topic. Use appropriate transition words (however, furthermore, for example) based on the relationship (contrast, addition, illustration).',
          hint: 'Bridge from old topic to new',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${rhetoricalSkillsTopic.title}`);
  }

  // Topic 2: Usage and Style
  const usageStyleTopic = await prisma.topic.findFirst({
    where: {
      slug: 'usage-and-style',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (usageStyleTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: usageStyleTopic.id,
          question: 'The students was excited about the field trip.\n\nWhich is the correct revision?\n\nF) NO CHANGE\nG) The students were\nH) The student was\nJ) The students is',
          solution: 'This is a subject-verb agreement error.\n\nSubject: "The students" (plural)\nVerb: "was" (singular) ✗ MISMATCH!\n\nStep 1: Identify subject and number\n"students" = plural (more than one)\n\nStep 2: Match verb to subject\nPlural subject needs plural verb\n\nStep 3: Evaluate options\nF) NO CHANGE - "students was" (wrong!)\nG) "students were" - plural + plural ✓ CORRECT!\nH) "student was" - changes meaning (singular)\nJ) "students is" - still wrong (plural + singular)\n\nAnswer: G) The students were\n\nCommon subject-verb patterns:\n• Singular: student/teacher/book + is/was/has\n• Plural: students/teachers/books + are/were/have\n\nTricky cases:\n• "Everyone" is singular → Everyone was\n• "Each" is singular → Each student has\n• "Both" is plural → Both students were',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: usageStyleTopic.id,
          question: 'The concert was both entertaining and also educational.\n\nWhich revision best eliminates wordiness?\n\nA) NO CHANGE\nB) both entertaining and educational\nC) entertaining and it was also educational\nD) entertaining and also it was educational too',
          solution: 'The phrase contains redundancy: "both...and also" is wordy.\n\n"Both...and" is a correlative conjunction pair - you don\'t need "also"!\n\nStep 1: Identify redundant words\n"both" already indicates two things\n"also" is unnecessary\n\nStep 2: Evaluate options for conciseness\n\nA) NO CHANGE - "both...and also" (redundant!)\n\nB) "both entertaining and educational"\n• Removes "also" ✓\n• Parallel structure ✓\n• Concise ✓ CORRECT!\n\nC) "entertaining and it was also educational"\n• Adds more words ("it was")\n• More wordy, not less ✗\n\nD) "entertaining and also it was educational too"\n• Extremely wordy\n• Has "also" AND "too" ✗\n\nAnswer: B) both entertaining and educational\n\nWordiness patterns to avoid:\n• "both...and also" → "both...and"\n• "in my opinion, I think" → "I think"\n• "the reason why is because" → "because"\n• "due to the fact that" → "because"\n• "at this point in time" → "now"\n\nACT loves testing conciseness!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: usageStyleTopic.id,
          question: 'Having completed the marathon, the medal was proudly worn by James.\n\nWhich is the best revision?\n\nF) NO CHANGE\nG) the medal, it was proudly worn by James.\nH) James proudly wore the medal.\nJ) proud wearing of the medal was done by James.\nK) James, he proudly wore the medal.',
          solution: 'This has TWO problems: dangling modifier + passive voice.\n\nProblem 1: Dangling modifier\n"Having completed the marathon" describes James, not the medal!\nThe medal didn\'t complete the marathon.\n\nProblem 2: Passive voice\n"was worn by" is weaker than active voice\n\nStep 1: Fix the modifier\nJames must come right after the comma (he completed the marathon)\n\nStep 2: Use active voice\n"James wore" is stronger than "was worn by James"\n\nStep 3: Evaluate options\n\nF) NO CHANGE\n• Dangling modifier (medal completed marathon?) ✗\n• Passive voice ✗\n\nG) "the medal, it was proudly worn by James"\n• Still has dangling modifier ✗\n• Still passive ✗\n\nH) "James proudly wore the medal"\n• James directly follows modifier ✓\n• Active voice ✓\n• Concise ✓ PERFECT!\n\nJ) "proud wearing of the medal was done by James"\n• Fixes modifier but still passive ✗\n• Wordy and awkward ✗\n\nK) "James, he proudly wore the medal"\n• Fixes modifier ✓\n• Active voice ✓\n• But "James, he" is redundant ✗\n\nAnswer: H) James proudly wore the medal.\n\nActive vs. Passive voice:\n• Active: Subject does action (James wore)\n• Passive: Subject receives action (was worn by)\n• Active voice is usually better on ACT!',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: usageStyleTopic.id,
          front: 'What is subject-verb agreement?',
          back: 'The verb must match the subject in number. Singular subjects take singular verbs (is, was, has). Plural subjects take plural verbs (are, were, have). Examples: "The student is" vs. "The students are"',
          hint: 'Singular/plural must match',
          isPremium: false
        },
        {
          topicId: usageStyleTopic.id,
          front: 'How do you eliminate wordiness?',
          back: 'Remove redundant words and phrases. Choose the most concise option that maintains meaning. Common wordy phrases: "both...and also" → "both...and", "due to the fact that" → "because", "at this point in time" → "now"',
          hint: 'Say it in fewer words',
          isPremium: false
        },
        {
          topicId: usageStyleTopic.id,
          front: 'What is the difference between active and passive voice?',
          back: 'Active voice: Subject performs action (James threw the ball). Passive voice: Subject receives action (The ball was thrown by James). ACT generally prefers active voice - it\'s more direct and concise.',
          hint: 'Active = subject does action',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${usageStyleTopic.title}`);
  }

  // Topic 3: Punctuation Rules
  const punctuationTopic = await prisma.topic.findFirst({
    where: {
      slug: 'act-punctuation-rules',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (punctuationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: punctuationTopic.id,
          question: 'My favorite subjects are: math, science, and history.\n\nWhich is the correct punctuation?\n\nA) NO CHANGE\nB) subjects are math,\nC) subjects are; math,\nD) subjects are, math,',
          solution: 'The colon after "are" is incorrect here.\n\nRule: Use a colon only after an independent clause (a complete sentence).\n\n"My favorite subjects are" is NOT a complete sentence - it needs what comes after!\n\nStep 1: Test if it\'s a complete sentence\n"My favorite subjects are" → incomplete (are WHAT?)\n\nStep 2: Determine correct punctuation\nSince it\'s not complete, NO colon needed!\nJust list directly after "are"\n\nStep 3: Evaluate options\n\nA) NO CHANGE - incorrect colon ✗\n\nB) "subjects are math,"\n• No unnecessary punctuation ✓\n• Flows naturally ✓ CORRECT!\n\nC) "subjects are; math,"\n• Semicolon after incomplete clause ✗\n\nD) "subjects are, math,"\n• Unnecessary comma ✗\n\nAnswer: B) subjects are math,\n\nComplete sentence: "My favorite subjects are math, science, and history."\n\nColon rules:\n✓ Use after independent clause: "I need three things: milk, eggs, bread."\n✗ Don\'t use after "are," "include," "such as"\n\nCorrect: "My hobbies include reading, running, and cooking."\nIncorrect: "My hobbies include: reading, running, and cooking."',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: punctuationTopic.id,
          question: 'The presentation which was very informative lasted two hours.\n\nWhich is the correct punctuation?\n\nF) NO CHANGE\nG) presentation, which was very informative,\nH) presentation; which was very informative;\nJ) presentation which was very informative,',
          solution: 'This is about restrictive vs. non-restrictive clauses.\n\n"which was very informative" is NON-RESTRICTIVE (extra information)\nNon-restrictive clauses need commas!\n\nStep 1: Determine if clause is essential\nCan we remove "which was very informative"?\n"The presentation lasted two hours" → still makes sense! ✓\n\nIt\'s non-essential (non-restrictive) → needs commas\n\nStep 2: Evaluate punctuation\n\nF) NO CHANGE\n• No commas around non-restrictive clause ✗\n\nG) "presentation, which was very informative,"\n• Commas before AND after ✓\n• Correctly set off non-essential info ✓ CORRECT!\n\nH) "presentation; which was very informative;"\n• Semicolons don\'t work here ✗\n\nJ) "presentation which was very informative,"\n• Comma only after, not before ✗\n\nAnswer: G) presentation, which was very informative,\n\nRestrictive vs. Non-restrictive:\n\nNon-restrictive (extra info, use commas):\n"My brother, who lives in Texas, is visiting."\n→ I have one brother (location is extra info)\n\nRestrictive (essential info, NO commas):\n"My brother who lives in Texas is visiting."\n→ I have multiple brothers (specifies which one)\n\nKey word signals:\n• "which" → usually non-restrictive (use commas)\n• "that" → always restrictive (no commas)',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: punctuationTopic.id,
          question: 'The team worked hard therefore they succeeded.\n\nWhich punctuation correctly joins these clauses?\n\nA) hard therefore\nB) hard, therefore,\nC) hard; therefore,\nD) hard: therefore\nE) hard therefore,',
          solution: 'Conjunctive adverbs (therefore, however, moreover) require specific punctuation.\n\nTwo independent clauses:\n1. "The team worked hard" (complete)\n2. "they succeeded" (complete)\n\nConnector: "therefore" (conjunctive adverb)\n\nStep 1: Recall conjunctive adverb punctuation\nPattern: [Independent clause]; [conjunctive adverb], [independent clause].\n\nRequires:\n• Semicolon before the conjunctive adverb\n• Comma after the conjunctive adverb\n\nStep 2: Evaluate options\n\nA) "hard therefore"\n• No punctuation ✗\n\nB) "hard, therefore,"\n• Comma before (too weak to join independent clauses) ✗\n• Comma after ✓\n\nC) "hard; therefore,"\n• Semicolon before ✓\n• Comma after ✓ CORRECT!\n\nD) "hard: therefore"\n• Colon can work but needs comma after "therefore" ✗\n\nE) "hard therefore,"\n• No punctuation before ✗\n\nAnswer: C) hard; therefore,\n\nCommon conjunctive adverbs:\ntherefore, however, moreover, furthermore, nevertheless, consequently, thus, meanwhile\n\nPattern for all: ; [conjunctive adverb], \n\nExamples:\n• "It rained; therefore, we stayed inside."\n• "She studied hard; however, the test was difficult."\n• "He finished early; consequently, he helped others."',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: punctuationTopic.id,
          front: 'When do you use a colon?',
          back: 'Use a colon after an independent clause (complete sentence) to introduce a list, explanation, or example. Don\'t use after "are," "include," or "such as." Example: "I need three items: eggs, milk, and bread."',
          hint: 'After independent clause only',
          isPremium: false
        },
        {
          topicId: punctuationTopic.id,
          front: 'What is the difference between restrictive and non-restrictive clauses?',
          back: 'Non-restrictive clauses (extra info) use commas: "My dog, who is brown, loves treats." Restrictive clauses (essential info) have no commas: "The dog that is barking needs attention." Use "which" for non-restrictive, "that" for restrictive.',
          hint: 'Essential = no commas, Extra = commas',
          isPremium: false
        },
        {
          topicId: punctuationTopic.id,
          front: 'How do you punctuate conjunctive adverbs?',
          back: 'Pattern: ; [conjunctive adverb], → Semicolon before, comma after. Conjunctive adverbs include: therefore, however, moreover, nevertheless, consequently. Example: "She studied; therefore, she passed."',
          hint: 'Semicolon before, comma after',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${punctuationTopic.title}`);
  }

  console.log('\n🎉 ACT Prep Batch 3 complete! (9/17 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
