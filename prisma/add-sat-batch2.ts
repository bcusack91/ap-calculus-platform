import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding SAT Prep - Batch 2 (3 topics)\n');

  // Topic 1: Function Notation and Transformations
  const functionNotationTopic = await prisma.topic.findFirst({
    where: {
      slug: 'function-notation-transformations',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (functionNotationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: functionNotationTopic.id,
          question: 'If f(x) = 2x² - 3x + 1, what is the value of f(3) - f(1)?\n\nA) 8\nB) 10\nC) 12\nD) 14',
          solution: 'We need to evaluate f(3) and f(1), then subtract.\n\nStep 1: Find f(3)\nf(x) = 2x² - 3x + 1\nf(3) = 2(3)² - 3(3) + 1\nf(3) = 2(9) - 9 + 1\nf(3) = 18 - 9 + 1\nf(3) = 10\n\nStep 2: Find f(1)\nf(1) = 2(1)² - 3(1) + 1\nf(1) = 2(1) - 3 + 1\nf(1) = 2 - 3 + 1\nf(1) = 0\n\nStep 3: Calculate f(3) - f(1)\nf(3) - f(1) = 10 - 0 = 10\n\nAnswer: B) 10\n\nSAT Tip: Be careful with signs and order of operations. Write out each step to avoid careless errors.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: functionNotationTopic.id,
          question: 'The graph of y = f(x) is shifted 3 units to the right and 2 units up. Which equation represents the transformed graph?\n\nA) y = f(x - 3) + 2\nB) y = f(x + 3) + 2\nC) y = f(x - 3) - 2\nD) y = f(x + 3) - 2',
          solution: 'Understanding transformations:\n\nHORIZONTAL SHIFTS (inside function, opposite of what you expect):\n• f(x - h): shift RIGHT by h units\n• f(x + h): shift LEFT by h units\n• The sign is OPPOSITE to the direction!\n\nVERTICAL SHIFTS (outside function, as expected):\n• f(x) + k: shift UP by k units\n• f(x) - k: shift DOWN by k units\n• The sign matches the direction\n\nGiven transformation:\n• Shift RIGHT 3 units → f(x - 3)\n• Shift UP 2 units → add 2\n\nCombined: y = f(x - 3) + 2\n\nAnswer: A) y = f(x - 3) + 2\n\nMemory trick: "Horizontal shifts are backwards!"\n• Right means subtract (x - 3)\n• Left means add (x + 3)\n\nVertical shifts are normal:\n• Up means add (+2)\n• Down means subtract (-2)',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: functionNotationTopic.id,
          question: 'If g(x) = x² + 2x and h(x) = 3x - 1, what is g(h(2))?\n\nA) 15\nB) 24\nC) 35\nD) 48',
          solution: 'This is a composition of functions: g(h(2))\n\nWork from the INSIDE OUT.\n\nStep 1: Evaluate h(2)\nh(x) = 3x - 1\nh(2) = 3(2) - 1\nh(2) = 6 - 1\nh(2) = 5\n\nStep 2: Evaluate g(5)\nNow we need g(h(2)) = g(5)\n\ng(x) = x² + 2x\ng(5) = (5)² + 2(5)\ng(5) = 25 + 10\ng(5) = 35\n\nAnswer: C) 35\n\nComposition Strategy:\n1. Start with innermost function\n2. Evaluate it first\n3. Use that result as input for outer function\n4. g(h(2)) means: "Find h(2), then plug that into g"\n\nCommon mistake: Don\'t try to combine the functions first. Evaluate step by step from inside to outside.',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: functionNotationTopic.id,
          front: 'How do you evaluate f(a) for a function f(x)?',
          back: 'Replace every x in the function with the value a, then simplify. For example, if f(x) = 2x + 1, then f(3) = 2(3) + 1 = 7.',
          hint: 'Substitute a for x',
          isPremium: false
        },
        {
          topicId: functionNotationTopic.id,
          front: 'How do horizontal shifts work in function transformations?',
          back: 'f(x - h) shifts RIGHT h units; f(x + h) shifts LEFT h units. The sign is OPPOSITE to the direction. Remember: horizontal shifts are "backwards"!',
          hint: 'Inside the function, opposite direction',
          isPremium: false
        },
        {
          topicId: functionNotationTopic.id,
          front: 'How do you evaluate a composition g(f(x))?',
          back: 'Work from inside out: First evaluate f(x), then use that result as the input for g. For g(f(3)), first find f(3), then plug that answer into g.',
          hint: 'Inside to outside',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Function Notation and Transformations');
  }

  // Topic 2: Pronoun Usage
  const pronounUsageTopic = await prisma.topic.findFirst({
    where: {
      slug: 'pronoun-usage',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (pronounUsageTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: pronounUsageTopic.id,
          question: 'The committee members discussed the proposal, and they decided to postpone its vote until next week.\n\nWhich change, if any, should be made?\n\nA) NO CHANGE\nB) change "its" to "their"\nC) change "they" to "it"\nD) change "its" to "it\'s"',
          solution: 'Let\'s identify what each pronoun refers to:\n\n"they" refers to → committee members (plural)\n"its" refers to → the proposal (singular)\n\nChecking pronouns:\n1. "they decided" - committee members (plural) decided ✓\n2. "its vote" - the proposal\'s vote (singular, possessive) ✓\n\nBoth pronouns agree with their antecedents!\n\nAnalyzing options:\nA) NO CHANGE - Correct! Both pronouns match their antecedents ✓\nB) "their vote" - would refer to committee members\' vote, but the vote belongs to the proposal ✗\nC) "it decided" - committee (singular) could work, but "members" is plural, so "they" is better ✗\nD) "it\'s" = "it is" → "postpone it is vote" doesn\'t make sense ✗\n\nAnswer: A) NO CHANGE\n\nKey Rules:\n• Pronouns must agree in NUMBER (singular/plural)\n• Make sure pronoun clearly refers to the right noun\n• its = possessive; it\'s = it is',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: pronounUsageTopic.id,
          question: 'Each student must submit their application by Friday.\n\nWhich is the best revision?\n\nA) NO CHANGE\nB) his or her application\nC) his application\nD) its application',
          solution: 'This is about pronoun-antecedent agreement with indefinite pronouns.\n\nAntecedent: "Each student"\n• "Each" is SINGULAR (even though it refers to multiple people)\n• Indefinite pronouns like each, every, everyone, anybody are SINGULAR\n\nOriginal: "their" is PLURAL\n• Doesn\'t agree with "each student" (singular)\n\nOptions:\nA) "their" - plural, doesn\'t match singular "each" ✗\n\nB) "his or her" - singular, matches "each student" ✓\n• Correct! Formal and agrees in number\n\nC) "his" - singular but assumes male\n• Grammatically correct but not inclusive\n• SAT prefers "his or her" or gender-neutral options ✗\n\nD) "its" - for things, not people ✗\n\nAnswer: B) his or her application\n\nNote: In informal writing, "their" is increasingly accepted as singular gender-neutral, but on the SAT, formal agreement rules apply.\n\nSingular indefinite pronouns:\n• Each, every, either, neither\n• Everyone, anybody, somebody, nobody\n• Anyone, someone, no one\n\nAll take SINGULAR pronouns in formal writing.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: pronounUsageTopic.id,
          question: 'Maria enjoys hiking because it allows you to connect with nature and escape daily stress.\n\nWhich revision best improves the sentence?\n\nA) NO CHANGE\nB) it allows her to connect\nC) they allow you to connect\nD) it allows one to connect',
          solution: 'This is a pronoun SHIFT or CONSISTENCY issue.\n\nThe sentence starts with "Maria" (third person)\nThen shifts to "you" (second person)\n\nPronoun consistency rule: Don\'t switch perspective mid-sentence!\n\nOriginal problem:\n• "Maria" = third person\n• "you" = second person\n• INCONSISTENT shift ✗\n\nOptions:\n\nA) NO CHANGE - keeps the shift ✗\n\nB) "it allows her to connect"\n• "her" refers to Maria (third person)\n• Maintains consistent perspective ✓\n• Most natural and clear\n• BEST answer ✓\n\nC) "they allow you to connect"\n• "hiking" is singular, not plural (should be "it")\n• Still has "you" shift ✗\n\nD) "it allows one to connect"\n• "one" is third person, consistent\n• Grammatically correct but overly formal/stuffy\n• SAT prefers natural over awkward ✗\n\nAnswer: B) it allows her to connect\n\nPronoun Perspectives:\n• First person: I, me, we, us\n• Second person: you\n• Third person: he, she, it, they, him, her, them\n\nSAT Rule: Keep pronoun perspective consistent within a sentence!',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: pronounUsageTopic.id,
          front: 'What must pronouns agree with?',
          back: 'Pronouns must agree with their antecedent (the noun they replace) in NUMBER (singular/plural), PERSON (1st/2nd/3rd), and GENDER when applicable.',
          hint: 'Number, person, and gender',
          isPremium: false
        },
        {
          topicId: pronounUsageTopic.id,
          front: 'Are indefinite pronouns like "each," "everyone," and "anybody" singular or plural?',
          back: 'They are SINGULAR in formal writing, even though they may refer to multiple people. They should be paired with singular pronouns like "his or her," not "their."',
          hint: 'Each one is singular',
          isPremium: false
        },
        {
          topicId: pronounUsageTopic.id,
          front: 'What is a pronoun shift error?',
          back: 'Switching pronoun perspective inconsistently (e.g., from "she" to "you" or "I" to "they" within a sentence). Keep pronoun person and number consistent throughout.',
          hint: 'Inconsistent perspective',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Pronoun Usage');
  }

  // Topic 3: Analyzing Arguments
  const analyzingArgumentsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'analyzing-arguments',
      category: {
        course: {
          slug: 'sat-prep'
        }
      }
    }
  });

  if (analyzingArgumentsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: analyzingArgumentsTopic.id,
          question: 'Passage: "Electric vehicles (EVs) are clearly superior to gasoline cars. EVs produce zero emissions while driving, making them better for the environment. Additionally, electricity is cheaper than gasoline, so EV owners save money on fuel."\n\nWhich statement best describes a weakness in this argument?\n\nA) It ignores the environmental impact of electricity generation\nB) It fails to provide specific cost comparisons\nC) It doesn\'t mention the history of electric vehicles\nD) It uses overly technical language',
          solution: 'To analyze an argument, identify:\n1. The claim (conclusion)\n2. The evidence/reasoning\n3. Potential weaknesses or gaps\n\nClaim: EVs are superior to gasoline cars\n\nEvidence:\n• Zero emissions while driving\n• Cheaper fuel (electricity)\n\nAnalyzing each option:\n\nA) Ignores environmental impact of electricity generation\n• The argument says EVs produce "zero emissions while driving"\n• But doesn\'t consider WHERE the electricity comes from\n• If electricity is from coal plants, still causes pollution\n• Valid weakness - incomplete analysis! ✓\n• BEST answer ✓\n\nB) Fails to provide specific cost comparisons\n• True, but claims about cost are still reasonable\n• Minor weakness, not fundamental flaw ✗\n\nC) Doesn\'t mention history of EVs\n• History isn\'t relevant to whether they\'re superior NOW\n• Not a logical weakness ✗\n\nD) Uses overly technical language\n• The passage is actually quite simple\n• Not true ✗\n\nAnswer: A) It ignores the environmental impact of electricity generation\n\nArgument Analysis Skills:\n• Look for unstated assumptions\n• Consider counterexamples or alternative perspectives\n• Identify missing information\n• Check if evidence actually supports the claim',
          difficulty: 'MEDIUM',
          order: 1,
          isPremium: false
        },
        {
          topicId: analyzingArgumentsTopic.id,
          question: 'Passage: "A recent survey found that 80% of teenagers prefer texting to phone calls. This proves that phone calls will soon become obsolete."\n\nWhat logical flaw does this argument contain?\n\nA) False cause - assuming correlation implies causation\nB) Hasty generalization - drawing a broad conclusion from limited data\nC) Ad hominem - attacking the person rather than the argument\nD) Circular reasoning - using the conclusion as evidence',
          solution: 'Let\'s identify the logical flaw:\n\nPremise: 80% of teenagers prefer texting\nConclusion: Phone calls will become obsolete\n\nAnalyzing each flaw type:\n\nA) False cause (correlation ≠ causation)\n• This would be claiming one thing CAUSES another without proof\n• The argument isn\'t about causation ✗\n\nB) Hasty generalization\n• Drawing a BROAD conclusion from LIMITED data\n• Survey: only teenagers\n• Conclusion: ALL phone calls (everyone, everywhere) obsolete\n• Also: preference ≠ complete abandonment\n• This fits! ✓\n• CORRECT answer ✓\n\nC) Ad hominem\n• Attacking the person making the argument\n• No personal attack here ✗\n\nD) Circular reasoning\n• Using conclusion as its own evidence\n• The argument uses survey data, not circular ✗\n\nAnswer: B) Hasty generalization\n\nWhy it\'s hasty:\n• Only surveyed teenagers (not adults, businesses)\n• Preference doesn\'t mean exclusive use\n• "Soon become obsolete" is extreme claim\n• Jumps from one group\'s preference to total elimination\n\nHow to fix: Need data from all age groups, consider business/emergency use, distinguish between preference and necessity.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: analyzingArgumentsTopic.id,
          question: 'Passage: "Studies show that students who eat breakfast perform better academically. Therefore, schools should require all students to eat breakfast before class to improve test scores."\n\nWhich of the following, if true, would most weaken this recommendation?\n\nA) Some students dislike eating early in the morning\nB) The studies show correlation but cannot establish that breakfast causes better performance\nC) Breakfast foods vary in nutritional value\nD) Not all schools have the facilities to serve breakfast',
          solution: 'This question asks what would WEAKEN the recommendation.\n\nArgument structure:\n• Evidence: Students who eat breakfast perform better\n• Recommendation: Schools should require breakfast\n• Assumption: Breakfast CAUSES better performance\n\nTo weaken: Attack the assumption or show recommendation won\'t achieve goal.\n\nA) Some students dislike eating early\n• Minor inconvenience, doesn\'t address effectiveness\n• Weak objection ✗\n\nB) Studies show correlation, not causation\n• KEY POINT: Correlation ≠ causation\n• Maybe high-performing students have structured routines (including breakfast)\n• Maybe family resources allow both breakfast and academic support\n• Maybe good students make healthy choices generally\n• If breakfast doesn\'t CAUSE performance, requiring it won\'t help!\n• Fundamentally undermines the logic ✓\n• STRONGEST weakening ✓\n\nC) Breakfast foods vary in nutrition\n• Suggests some breakfasts better than others\n• Doesn\'t challenge whether breakfast helps\n• Could strengthen by suggesting quality matters ✗\n\nD) Not all schools have facilities\n• Practical objection, not logical weakness\n• About feasibility, not effectiveness ✗\n\nAnswer: B) The studies show correlation but cannot establish that breakfast causes better performance\n\nThis is the correlation vs. causation issue:\n• CORRELATION: Two things happen together\n• CAUSATION: One thing causes the other\n• You can\'t prove causation from correlation alone!\n• Confounding variables might explain both\n\nIf breakfast doesn\'t cause better performance, forcing students to eat won\'t improve scores.',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: analyzingArgumentsTopic.id,
          front: 'What are the main components of an argument to identify?',
          back: 'Claim/conclusion (what the author wants you to believe), evidence/premises (facts or reasons given), and reasoning (how evidence connects to claim). Also look for unstated assumptions.',
          hint: 'Claim, evidence, reasoning',
          isPremium: false
        },
        {
          topicId: analyzingArgumentsTopic.id,
          front: 'What is a hasty generalization?',
          back: 'Drawing a broad conclusion from insufficient or limited evidence. Example: "Three people got sick after eating at a restaurant, so the restaurant must be unsafe" (too small a sample).',
          hint: 'Jumping to conclusions with limited data',
          isPremium: false
        },
        {
          topicId: analyzingArgumentsTopic.id,
          front: 'How does correlation differ from causation in arguments?',
          back: 'Correlation means two things happen together. Causation means one CAUSES the other. Correlation does NOT prove causation - there may be confounding variables or coincidence.',
          hint: 'Together vs. causes',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 3 problems and 3 flashcards for Analyzing Arguments');
  }

  console.log('\n🎉 SAT Prep Batch 2 complete! (6/12 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
