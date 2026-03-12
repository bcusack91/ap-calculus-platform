import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding SAT Prep - Batch 3 (3 topics)\n');

  // Topic 1: Subject-Verb Agreement
  const subjectVerbTopic = await prisma.topic.findFirst({
    where: {
      slug: 'subject-verb-agreement',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (subjectVerbTopic) {
    // Check if it already has content
    const existingProblems = await prisma.exampleProblem.count({
      where: { topicId: subjectVerbTopic.id }
    });

    if (existingProblems === 0) {
      await prisma.exampleProblem.createMany({
        data: [
          {
            topicId: subjectVerbTopic.id,
            question: 'The collection of rare books, including several first editions, were donated to the library.\n\nWhich correction should be made?\n\nA) NO CHANGE\nB) change "were" to "was"\nC) change "including" to "includes"\nD) change "donated" to "donates"',
            solution: 'Identify the subject and make sure the verb agrees.\n\nSubject: "The collection" (singular)\n• NOT "books" - that\'s part of a prepositional phrase\n• Prepositional phrase "of rare books" describes the subject\n• Subject is still "collection" (singular)\n\nVerb: "were" (plural)\n\nProblem: Singular subject with plural verb ✗\n\nCorrecting:\nA) NO CHANGE - keeps error ✗\nB) "was donated" - singular verb matches singular subject ✓\nC) "includes" - doesn\'t fix the main verb agreement ✗\nD) "donates" - wrong tense (past needed) ✗\n\nAnswer: B) change "were" to "was"\n\nKey SAT Trick:\nPrepositional phrases between subject and verb are DISTRACTORS!\n• of rare books\n• including several first editions\n\nIgnore them to find the true subject.\n\nThe collection ... was donated ✓\n\nCommon prepositional phrases to watch:\n• of, with, along with, together with, as well as\n• including, in addition to, except\n\nThese DON\'T change the subject number!',
            difficulty: 'MEDIUM',
            order: 1,
            isPremium: false
          },
          {
            topicId: subjectVerbTopic.id,
            question: 'Either the manager or the employees is responsible for closing the store each night.\n\nWhich revision is correct?\n\nA) NO CHANGE\nB) change "is" to "are"\nC) change "or" to "and"\nD) change "employees" to "employee"',
            solution: 'This involves compound subjects with "either...or" or "neither...nor"\n\nRule: When subjects are joined by "or" or "nor," the verb agrees with the CLOSEST subject.\n\nSubjects: "the manager" (singular) OR "the employees" (plural)\nClosest to verb: "the employees" (plural)\nVerb should be: PLURAL\n\nOriginal: "is" (singular) ✗\n\nOptions:\nA) NO CHANGE - keeps singular verb with plural subject ✗\n\nB) change "is" to "are"\n• "are" is plural, matches "employees"\n• Correct! ✓\n\nC) change "or" to "and"\n• Would make it "manager and employees" (both = plural)\n• Would also need "are"\n• Changes meaning unnecessarily ✗\n\nD) change to singular\n• Makes both subjects singular\n• "is" would then work\n• But changes meaning (one employee vs. multiple) ✗\n\nAnswer: B) change "is" to "are"\n\nEITHER...OR / NEITHER...NOR Rules:\n• Verb agrees with CLOSEST subject\n• Either the dogs or the cat IS...\n• Either the cat or the dogs ARE...\n\nAND Rule (different!):\n• "And" makes compound subject plural\n• The cat and the dog ARE...',
            difficulty: 'MEDIUM',
            order: 2,
            isPremium: false
          },
          {
            topicId: subjectVerbTopic.id,
            question: 'Each of the students in the advanced classes have submitted their final project.\n\nIdentify all errors in this sentence.\n\nA) "have" should be "has" only\nB) "their" should be "his or her" only\nC) Both "have" should be "has" AND "their" should be "his or her"\nD) NO CHANGE',
            solution: 'Let\'s check both subject-verb agreement and pronoun agreement.\n\nPart 1: Subject-Verb Agreement\nSubject: "Each" (singular indefinite pronoun)\n• "of the students" is prepositional phrase (ignore it!)\n• "Each" is ALWAYS singular\n\nVerb: "have" (plural)\n\nError: Should be "has" (singular) ✗\n\nPart 2: Pronoun Agreement\nAntecedent: "Each" (singular)\nPronoun: "their" (plural)\n\nError: Should be "his or her" (singular) ✗\n\nBoth need fixing!\n\nCorrect version:\n"Each of the students in the advanced classes has submitted his or her final project."\n\nAnswer: C) Both "have" should be "has" AND "their" should be "his or her"\n\nSingular Indefinite Pronouns (memorize!):\n• Each, every, either, neither\n• Everyone, someone, anyone, no one\n• Everybody, somebody, anybody, nobody\n• Everything, something, anything, nothing\n\nAll take SINGULAR verbs and SINGULAR pronouns!\n\nEach student has... his or her...\nEveryone is... his or her...\nAnybody wants... his or her...\n\nSAT loves to trick you with:\n1. Prepositional phrase between subject and verb\n2. Plural-sounding words (like "everyone") that are singular\n3. Combined subject-verb AND pronoun errors',
            difficulty: 'HARD',
            order: 3,
            isPremium: true
          }
        ]
      });

      await prisma.flashcard.createMany({
        data: [
          {
            topicId: subjectVerbTopic.id,
            front: 'How do you identify the subject in a sentence with prepositional phrases?',
            back: 'Cross out prepositional phrases (of, with, including, etc.) between the subject and verb. The subject is never inside a prepositional phrase. Example: "The box of chocolates IS" not "are."',
            hint: 'Ignore prepositional phrases',
            isPremium: false
          },
          {
            topicId: subjectVerbTopic.id,
            front: 'What is the rule for either...or and neither...nor?',
            back: 'The verb agrees with the subject CLOSEST to it. Example: "Either the cat or the dogs ARE..." but "Either the dogs or the cat IS..."',
            hint: 'Match the closest subject',
            isPremium: false
          },
          {
            topicId: subjectVerbTopic.id,
            front: 'Are indefinite pronouns like "each," "everyone," and "everybody" singular or plural?',
            back: 'They are SINGULAR and take singular verbs. Examples: "Each IS," "Everyone HAS," "Everybody WANTS." Watch out for plural-looking phrases after them like "each of the students."',
            hint: 'Always singular',
            isPremium: true
          }
        ]
      });

      console.log('✅ Added 3 problems and 3 flashcards for Subject-Verb Agreement');
    } else {
      console.log('⏭️  Skipped Subject-Verb Agreement (already has content)');
    }
  }

  // Topic 2: Organization and Focus
  const organizationFocusTopic = await prisma.topic.findFirst({
    where: {
      slug: 'organization-and-focus',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (organizationFocusTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: organizationFocusTopic.id,
          question: '[1] The Golden Gate Bridge is an iconic landmark. [2] It connects San Francisco to Marin County. [3] My family visited San Francisco last summer. [4] The bridge was completed in 1937 and was the longest suspension bridge at the time.\n\nWhich sentence should be removed to improve the focus of the paragraph?\n\nA) Sentence 1\nB) Sentence 2\nC) Sentence 3\nD) Sentence 4',
          solution: 'To maintain focus, all sentences should relate to the MAIN TOPIC.\n\nAnalyzing the paragraph focus:\n• Sentences 1, 2, 4: About the Golden Gate Bridge (history, facts, significance)\n• Sentence 3: About the writer\'s family visit\n\nMain topic: The Golden Gate Bridge (factual/historical information)\n\nSentence 3: "My family visited San Francisco last summer"\n• Personal anecdote\n• Doesn\'t add factual information about the bridge\n• Off-topic from the informational focus\n• Breaks the flow\n• Should be removed! ✓\n\nAnswer: C) Sentence 3\n\nWhy keep the others:\n• Sentence 1: Introduces the topic (essential)\n• Sentence 2: Describes function/location (relevant fact)\n• Sentence 4: Historical information (supports topic)\n\nFocus Rule: Remove sentences that:\n• Introduce unrelated information\n• Shift from objective to personal (or vice versa) unexpectedly\n• Don\'t support the paragraph\'s main idea\n\nSAT Tip: Ask yourself: "What is this paragraph mainly about?" Remove anything that doesn\'t directly relate.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: organizationFocusTopic.id,
          question: '[1] Renewable energy sources are becoming increasingly important. [2] Solar panels convert sunlight into electricity. [3] Wind turbines generate power from wind. [4] Therefore, investing in renewable energy is essential for the future.\n\nTo improve the logic and organization, which sentence should be added after sentence 3?\n\nA) Many countries are building wind farms.\nB) Coal and oil are non-renewable resources.\nC) These clean energy sources reduce carbon emissions and combat climate change.\nD) Scientists have studied renewable energy for decades.',
          solution: 'Good organization requires LOGICAL FLOW and clear connections between ideas.\n\nCurrent structure:\n1. Topic: Renewable energy important\n2. Example: Solar\n3. Example: Wind\n4. Conclusion: Investment essential\n\nGap: The conclusion (sentence 4) jumps from examples to "essential for future" without explaining WHY.\n\nNeed a sentence that:\n• Connects the examples (solar, wind) to the conclusion\n• Explains WHY they\'re important\n• Bridges examples → conclusion\n\nAnalyzing options:\n\nA) "Many countries are building wind farms"\n• Just another example\n• Doesn\'t explain importance ✗\n\nB) "Coal and oil are non-renewable"\n• Introduces new topic (fossil fuels)\n• Doesn\'t connect examples to conclusion ✗\n\nC) "These clean energy sources reduce carbon emissions and combat climate change"\n• "These" refers back to solar and wind\n• Explains WHY they\'re important (environmental benefits)\n• Logically supports conclusion about investment\n• Perfect bridge! ✓\n\nD) "Scientists have studied renewable energy for decades"\n• Background information\n• Doesn\'t explain why investment is essential ✗\n\nAnswer: C) These clean energy sources reduce carbon emissions and combat climate change\n\nOrganization Principles:\n• Examples → Explanation → Conclusion\n• Use transition words/phrases\n• Make connections explicit\n• Build logically to your point',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: organizationFocusTopic.id,
          question: 'A student is writing an essay about the benefits of exercise. Which of the following would make the BEST thesis statement for the introductory paragraph?\n\nA) Exercise is something that many people do regularly.\nB) There are three main types of exercise: aerobic, strength training, and flexibility.\nC) Regular exercise improves physical health, mental well-being, and longevity.\nD) I believe everyone should exercise at least three times per week.',
          solution: 'A strong THESIS STATEMENT should:\n1. Make a clear, specific claim\n2. Preview the main points or argument\n3. Be debatable or substantive (not obvious)\n4. Avoid vague language\n5. Be objective (formal essays)\n\nAnalyzing each option:\n\nA) "Exercise is something that many people do regularly"\n• Vague and obvious\n• No argument or specific claim\n• Doesn\'t preview what essay will discuss\n• Weak thesis ✗\n\nB) "Three main types: aerobic, strength, flexibility"\n• This would work for an essay CLASSIFYING exercise types\n• But the topic is BENEFITS of exercise\n• Off-topic for this essay ✗\n\nC) "Regular exercise improves physical health, mental well-being, and longevity"\n• Specific claim about benefits\n• Previews THREE main points (likely 3 body paragraphs)\n• Substantive and arguable\n• Matches the essay topic (benefits)\n• Strong, clear thesis! ✓\n\nD) "I believe everyone should exercise at least three times per week"\n• Uses "I believe" (too personal/informal)\n• Focuses on frequency, not benefits\n• Opinion without reasoning\n• Doesn\'t preview main points ✗\n\nAnswer: C) Regular exercise improves physical health, mental well-being, and longevity\n\nWhy it\'s best:\n• Directly addresses topic (benefits)\n• Specific (names 3 benefits)\n• Provides roadmap for essay\n• Objective tone\n• Each benefit can be a body paragraph\n\nThesis Statement Formula:\n[Topic] + [Specific Claim] + [Preview of Main Points]',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: organizationFocusTopic.id,
          front: 'How do you identify an off-topic sentence in a paragraph?',
          back: 'Ask: "What is the main idea of this paragraph?" Any sentence that doesn\'t directly support or relate to that main idea should be removed to improve focus.',
          hint: 'Does it support the main idea?',
          isPremium: false
        },
        {
          topicId: organizationFocusTopic.id,
          front: 'What makes a strong thesis statement?',
          back: 'A strong thesis makes a clear, specific claim, previews main points, is debatable/substantive (not obvious), and uses objective tone. It acts as a roadmap for the essay.',
          hint: 'Clear claim + preview of points',
          isPremium: false
        },
        {
          topicId: organizationFocusTopic.id,
          front: 'What is the logical flow for body paragraphs?',
          back: 'Topic sentence → Examples/Evidence → Explanation/Analysis → Connection to thesis. Each paragraph should develop one main idea that supports the thesis.',
          hint: 'Topic → Evidence → Explain → Connect',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Organization and Focus');
  }

  // Topic 3: Reading Strategies
  const readingStrategiesTopic = await prisma.topic.findFirst({
    where: {
      slug: 'reading-strategies',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (readingStrategiesTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: readingStrategiesTopic.id,
          question: 'When approaching an SAT Reading passage, which strategy is MOST effective for managing time and accuracy?\n\nA) Read the entire passage carefully first, then answer all questions\nB) Read the questions first, then skim the passage for answers\nC) Skim the passage quickly to get the main idea, read questions, then refer back to the passage for details\nD) Read only the first and last paragraphs, then attempt the questions',
          solution: 'Effective SAT Reading requires balancing COMPREHENSION with TIME MANAGEMENT.\n\nAnalyzing each strategy:\n\nA) Read entire passage carefully first\n• Good: Deep understanding\n• Bad: Time-consuming\n• Bad: May forget details by question time\n• Bad: Wastes time on parts not tested\n• Not optimal ✗\n\nB) Read questions first, then skim\n• Good: Know what to look for\n• Bad: Hard to understand context without reading passage\n• Bad: Can miss main idea questions\n• Not recommended by most experts ✗\n\nC) Skim for main idea → Read questions → Refer back for details\n• Good: Get overall understanding (main idea, tone, structure)\n• Good: Know context for detail questions\n• Good: Can refer back efficiently for specific information\n• Good: Don\'t waste time memorizing details\n• Balanced approach! ✓\n• BEST strategy ✓\n\nD) Only first and last paragraphs\n• Bad: Miss important body paragraphs\n• Bad: Can\'t answer most questions\n• Too risky ✗\n\nAnswer: C) Skim the passage quickly to get the main idea, read questions, then refer back to the passage for details\n\nRecommended Reading Process:\n1. Skim passage (2-3 min): Main idea, tone, structure\n2. Note purpose of each paragraph mentally\n3. Read questions\n4. Return to passage for specific details\n5. Use line references efficiently\n\nSAT Reading Tip: You DON\'T need to memorize every detail. Focus on understanding the BIG PICTURE, then hunt for specifics.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: readingStrategiesTopic.id,
          question: 'What should you do when you encounter an unfamiliar word in an SAT Reading passage?\n\nA) Skip the sentence entirely and move on\nB) Spend time trying to remember the definition\nC) Use context clues from surrounding sentences to infer meaning\nD) Immediately guess the answer to save time',
          solution: 'Unfamiliar vocabulary is COMMON on SAT Reading. The test assesses your ability to use context.\n\nA) Skip the sentence entirely\n• Might miss important information\n• Question might reference that sentence\n• Too extreme ✗\n\nB) Spend time trying to remember\n• Wastes precious time\n• May not remember anyway\n• Not practical ✗\n\nC) Use context clues to infer meaning\n• SAT tests this skill specifically!\n• "Vocabulary in context" questions\n• Surrounding sentences provide hints\n• Look for:\n  - Examples\n  - Contrasts (however, but, although)\n  - Restatements (or, in other words)\n  - Cause-effect relationships\n• Most effective approach! ✓\n\nD) Immediately guess\n• Don\'t give up without trying\n• Context usually helps\n• Too hasty ✗\n\nAnswer: C) Use context clues from surrounding sentences to infer meaning\n\nContext Clue Strategies:\n\n1. DEFINITION clues:\n"Photosynthesis, the process by which plants convert sunlight to energy..."\n\n2. EXAMPLE clues:\n"Nocturnal animals, such as owls and bats..."\n\n3. CONTRAST clues:\n"Unlike the verbose speech, her presentation was concise."\n\n4. SYNONYM clues:\n"The arduous, or difficult, journey..."\n\n5. GENERAL SENSE:\nRead the whole sentence - does it make sense if the word means X?\n\nSAT Reading Philosophy: You don\'t need to know every word. You need to understand the PASSAGE using context!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: readingStrategiesTopic.id,
          question: 'You have 13 minutes left and 2 complete passages (11 questions total) remaining. What is the BEST strategy?\n\nA) Spend equal time on each passage regardless of difficulty\nB) Quickly guess on all questions to finish, then go back if time permits\nC) Read one passage carefully and answer all its questions, then do what you can on the second\nD) Triage: Skim both passages to identify which seems easier, complete that one fully, then tackle the harder passage',
          solution: 'Time management crises require STRATEGIC DECISION-MAKING.\n\nGiven: 13 minutes, 2 passages, 11 questions\nNormal pace: ~13 minutes per passage (tight!)\n\nA) Equal time regardless of difficulty\n• Might spend too much time on hard passage\n• Miss easy points\n• Not optimal use of limited time ✗\n\nB) Quickly guess on everything, then go back\n• Random guessing = ~25% accuracy\n• Better to answer some carefully\n• Wastes opportunity for points ✗\n\nC) One passage carefully, then what you can on second\n• Good: Guarantees some points\n• Bad: Doesn\'t consider which is easier\n• Better than B, but not optimal ✗\n\nD) Triage - identify easier passage, complete it, then tackle harder\n• Strategic use of time!\n• Maximize points by doing easier passage well\n• Still attempt harder passage\n• Smart prioritization ✓\n• BEST under time pressure ✓\n\nAnswer: D) Triage: Skim both passages to identify which seems easier, complete that one fully, then tackle the harder passage\n\nTriage Process (2-3 min investment):\n1. Quick skim of both passages\n2. Check passage type (some find fiction easier, others science)\n3. Look at question types\n4. Choose more manageable one\n5. Complete it thoroughly (~6-7 min)\n6. Use remaining time on harder passage\n\nGeneral Time Management:\n• Don\'t get stuck on one hard question\n• Mark difficult questions, return later\n• Easy questions are worth same points as hard ones\n• Strategic guessing better than leaving blank (no penalty)\n\nPriority Order:\n1. Easy questions you can answer quickly\n2. Medium difficulty questions\n3. Hard questions / passages\n4. Questions you\'re genuinely unsure about (guess strategically)',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: readingStrategiesTopic.id,
          front: 'What is the most efficient way to approach an SAT Reading passage?',
          back: 'Skim the passage for main idea and structure (2-3 min), then read questions and refer back to the passage for specific details. Don\'t try to memorize everything.',
          hint: 'Skim → Questions → Refer back',
          isPremium: false
        },
        {
          topicId: readingStrategiesTopic.id,
          front: 'How should you handle unfamiliar vocabulary in SAT Reading passages?',
          back: 'Use context clues from surrounding sentences. Look for definitions, examples, contrasts, or synonyms. The SAT tests your ability to infer meaning from context, not memorized vocabulary.',
          hint: 'Context clues are key',
          isPremium: false
        },
        {
          topicId: readingStrategiesTopic.id,
          front: 'What is the triage strategy for SAT Reading when running out of time?',
          back: 'Quickly assess which remaining passages/questions are easier, complete those fully first, then tackle harder ones. Maximize points by prioritizing what you can answer confidently.',
          hint: 'Do easier first, maximize points',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Reading Strategies');
  }

  console.log('\n🎉 SAT Prep Batch 3 complete! (9/12 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
