import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding ACT Prep - Batch 5 (3 topics)\n');

  // Topic 1: Craft and Structure
  const craftStructureTopic = await prisma.topic.findFirst({
    where: {
      slug: 'craft-and-structure',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (craftStructureTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: craftStructureTopic.id,
          question: 'Read the following passage:\n\n"The old lighthouse stood sentinel on the rocky cliff, its weathered stones a testament to decades of fierce storms and relentless winds. Yet it remained, unbowed and unbroken, a beacon of hope for sailors navigating treacherous waters."\n\nThe phrase "stood sentinel" most nearly means:\n\nA) was falling down\nB) kept watch\nC) was being repaired\nD) attracted tourists\nE) disappeared',
          solution: 'Understanding figurative language and word choice in context.\n\n"Stood sentinel" - let\'s analyze this phrase.\n\nStep 1: Understand "sentinel"\nA sentinel is a guard or watchman who keeps watch\n\nStep 2: Consider the context\n• Lighthouse on a cliff\n• Withstood storms\n• "Beacon of hope for sailors"\n• Protective, watchful role\n\nStep 3: Evaluate options\n\nA) "was falling down"\n• Contradicts "unbowed and unbroken" ✗\n\nB) "kept watch"\n• Sentinel = guard/watchman ✓\n• Matches protective role ✓\n• Fits context perfectly ✓ CORRECT!\n\nC) "was being repaired"\n• No evidence in passage ✗\n\nD) "attracted tourists"\n• Not mentioned ✗\n• Not the meaning of sentinel ✗\n\nE) "disappeared"\n• Contradicts "it remained" ✗\n\nAnswer: B) kept watch\n\nCraft and structure analysis:\n• "Sentinel" = metaphor comparing lighthouse to a guard\n• Creates image of protection and vigilance\n• Word choice emphasizes lighthouse\'s important role\n• Personification (lighthouse acts like a person keeping watch)\n\nACT tip: Use context clues from surrounding sentences to determine figurative meanings!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: craftStructureTopic.id,
          question: 'An author writes: "The city never sleeps; its heartbeat pulses through subway tunnels and echoes in towering skyscrapers."\n\nWhat literary device is primarily used in this sentence?\n\nF) Simile\nG) Personification\nH) Alliteration\nJ) Hyperbole\nK) Onomatopoeia',
          solution: 'Identifying literary devices in context.\n\nSentence: "The city never sleeps; its heartbeat pulses through subway tunnels and echoes in towering skyscrapers."\n\nStep 1: Define each literary device\n\nF) Simile: comparison using "like" or "as"\n   Example: "The city is like a living organism"\n\nG) Personification: giving human qualities to non-human things\n   Example: "The city sleeps" (cities can\'t sleep)\n\nH) Alliteration: repetition of consonant sounds\n   Example: "Peter Piper picked"\n\nJ) Hyperbole: extreme exaggeration\n   Example: "I\'ve told you a million times"\n\nK) Onomatopoeia: words that sound like what they mean\n   Example: "buzz," "crash," "boom"\n\nStep 2: Analyze the sentence\n\nHuman qualities given to the city:\n• "never sleeps" - cities don\'t sleep (people do!)\n• "heartbeat" - cities don\'t have hearts\n• "pulses" - implies life/circulation\n\nThe city is being treated as if it\'s a living person!\n\nStep 3: Match to literary device\n\nF) Simile - No "like" or "as" ✗\nG) Personification - City has human qualities ✓ CORRECT!\nH) Alliteration - Some consonant sounds but not the main device ✗\nJ) Hyperbole - "Never sleeps" could be exaggeration, but personification is primary ✗\nK) Onomatopoeia - No sound words ✗\n\nAnswer: G) Personification\n\nWhy personification?\n• Cities cannot literally sleep, have heartbeats, or pulse\n• These are human/living organism characteristics\n• Makes the city seem alive and dynamic\n• Creates vivid, relatable imagery\n\nEffect: Helps readers feel the city\'s constant activity and energy!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: craftStructureTopic.id,
          question: 'Passage excerpt:\n\nParagraph 1: Introduces a scientist\'s childhood fascination with stars.\nParagraph 2: Describes her education and early struggles.\nParagraph 3: Details her groundbreaking discovery.\nParagraph 4: Reflects on the impact of her work on future generations.\n\nWhat is the organizational pattern of this passage?\n\nA) Spatial order\nB) Compare and contrast\nC) Chronological order\nD) Problem and solution\nE) Cause and effect',
          solution: 'Identifying organizational structure in passages.\n\nPassage structure:\n1. Childhood (early life)\n2. Education and struggles (youth/early career)\n3. Discovery (career achievement)\n4. Impact on future (looking forward)\n\nStep 1: Analyze the progression\nMovement through time:\nChildhood → Education → Career discovery → Legacy\n\nThis follows a TIME sequence!\n\nStep 2: Define organizational patterns\n\nA) Spatial order: organized by physical location\n   Example: Describing a room from left to right\n\nB) Compare and contrast: showing similarities/differences\n   Example: Comparing two scientists\n\nC) Chronological order: organized by time sequence\n   Example: Events in order they happened\n\nD) Problem and solution: presents problem, then solution\n   Example: Climate change issue → renewable energy\n\nE) Cause and effect: shows relationships between events\n   Example: Studying hard (cause) → good grades (effect)\n\nStep 3: Match structure to pattern\n\nA) Spatial - No movement through space ✗\n\nB) Compare/contrast - Only one person, no comparison ✗\n\nC) Chronological - Follows her life timeline ✓\n   • Childhood first ✓\n   • Education next ✓\n   • Career achievement ✓\n   • Legacy last ✓\n   CORRECT!\n\nD) Problem/solution - Not presenting a problem to solve ✗\n\nE) Cause/effect - Not focused on causation ✗\n   (Though there are cause-effect elements)\n\nAnswer: C) Chronological order\n\nClues for chronological order:\n• Time sequence (childhood → adult → legacy)\n• Life stages in order\n• Historical progression\n• Time transition words: "early," "later," "eventually"\n\nOther organizational patterns to know:\n• Sequential: steps in a process (not necessarily time-based)\n• Order of importance: most to least important\n• Categorical: organized by categories/types',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: craftStructureTopic.id,
          front: 'How do you determine the meaning of figurative language in context?',
          back: 'Look for context clues in surrounding sentences, consider the literal meaning of key words, think about the overall message, and match the figurative phrase to the passage\'s tone and purpose.',
          hint: 'Use context clues and literal meanings',
          isPremium: false
        },
        {
          topicId: craftStructureTopic.id,
          front: 'What is personification and how do you identify it?',
          back: 'Personification gives human qualities to non-human things (objects, animals, ideas). Look for human actions, emotions, or characteristics applied to things that can\'t actually do those things. Example: "The wind whispered" (wind can\'t whisper).',
          hint: 'Human qualities to non-human things',
          isPremium: false
        },
        {
          topicId: craftStructureTopic.id,
          front: 'What is chronological order and how do you recognize it?',
          back: 'Chronological order organizes information by time sequence. Look for: movement through time periods, life stages in order, dates/times in sequence, or time transition words (first, then, later, eventually, finally).',
          hint: 'Organized by time sequence',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${craftStructureTopic.title}`);
  }

  // Topic 2: Key Ideas and Details - Natural Science
  const keyIdeasTopic = await prisma.topic.findFirst({
    where: {
      slug: 'key-ideas-natural-science',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (keyIdeasTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: keyIdeasTopic.id,
          question: 'Read the following passage:\n\n"Photosynthesis is the process by which plants convert sunlight into chemical energy. Using chlorophyll, plants absorb light energy and use it to transform carbon dioxide and water into glucose and oxygen. This process is essential for life on Earth."\n\nWhat is the main idea of this passage?\n\nA) Chlorophyll is green\nB) Plants need sunlight to survive\nC) Photosynthesis converts light into chemical energy\nD) Oxygen is produced by plants\nE) Carbon dioxide is harmful',
          solution: 'Finding the main idea means identifying the central point of the passage.\n\nStep 1: Identify topic sentence\nFirst sentence: "Photosynthesis is the process by which plants convert sunlight into chemical energy."\n\nThis introduces the main concept!\n\nStep 2: Look for supporting details\n• How it works (chlorophyll, light absorption)\n• What\'s transformed (CO₂ + water → glucose + oxygen)\n• Why it matters (essential for life)\n\nThese all support the main idea about photosynthesis.\n\nStep 3: Evaluate options\n\nA) "Chlorophyll is green"\n• Not mentioned at all ✗\n• Minor detail, not main idea ✗\n\nB) "Plants need sunlight to survive"\n• Too general ✗\n• Doesn\'t capture the conversion process ✗\n\nC) "Photosynthesis converts light into chemical energy"\n• Matches first sentence ✓\n• Captures the core process ✓\n• Other sentences support this ✓ CORRECT!\n\nD) "Oxygen is produced by plants"\n• True but it\'s a detail, not main idea ✗\n• Doesn\'t mention photosynthesis ✗\n\nE) "Carbon dioxide is harmful"\n• Not stated in passage ✗\n• Misinterpretation ✗\n\nAnswer: C) Photosynthesis converts light into chemical energy\n\nMain idea tips:\n• Often in first or last sentence\n• Broad enough to cover whole passage\n• Supported by details in other sentences\n• Not too specific (detail) or too general\n\nDetails vs. Main Idea:\nMain: Photosynthesis converts light to chemical energy\nDetails: Uses chlorophyll, transforms CO₂ and water, produces glucose and oxygen',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: keyIdeasTopic.id,
          question: 'Passage excerpt:\n\n"The human brain contains approximately 86 billion neurons. These neurons communicate through electrical and chemical signals, forming complex networks. Research shows that learning new skills creates new neural connections, demonstrating the brain\'s remarkable plasticity."\n\nBased on the passage, what can be inferred about the brain?\n\nF) It cannot change after childhood\nG) It has a fixed number of connections\nH) It can adapt and reorganize through learning\nJ) It only uses electrical signals\nK) It has exactly 86 billion connections',
          solution: 'Making inferences requires combining stated information with logical reasoning.\n\nKey information from passage:\n1. Brain has 86 billion neurons\n2. Neurons communicate via electrical AND chemical signals\n3. Learning creates NEW neural connections\n4. Brain has "remarkable plasticity"\n\nStep 1: Understand "plasticity"\nPlasticity = ability to change and adapt\n\nStep 2: Connect the clues\n"Learning creates new connections" + "plasticity"\n→ Brain can change and reorganize!\n\nStep 3: Evaluate inferences\n\nF) "Cannot change after childhood"\n• Contradicts "learning creates new connections" ✗\n• Contradicts "plasticity" ✗\n\nG) "Has a fixed number of connections"\n• "New connections" means not fixed ✗\n\nH) "Can adapt and reorganize through learning"\n• Learning creates new connections ✓\n• Shows plasticity ✓\n• Logical inference from evidence ✓ CORRECT!\n\nJ) "Only uses electrical signals"\n• Passage says "electrical AND chemical" ✗\n• Misreads the text ✗\n\nK) "Has exactly 86 billion connections"\n• Passage says 86 billion NEURONS, not connections ✗\n• Misreads the text ✗\n\nAnswer: H) It can adapt and reorganize through learning\n\nInference vs. Stated fact:\n• Stated: "Learning creates new connections"\n• Stated: Brain has "plasticity"\n• Inference: Brain can adapt through learning (combining both facts)\n\nACT reading tip:\nInferences must be:\n✓ Supported by passage evidence\n✓ Logical conclusions from stated facts\n✓ Not contradicting any passage information',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: keyIdeasTopic.id,
          question: 'Read the passage:\n\n"Traditional classifications divided living things into five kingdoms: Monera, Protista, Fungi, Plantae, and Animalia. However, advances in molecular biology and DNA sequencing have revealed that this system doesn\'t accurately reflect evolutionary relationships. Scientists now use a three-domain system: Bacteria, Archaea, and Eukarya, which better represents the tree of life."\n\nWhich statement best describes the relationship between the old and new classification systems?\n\nA) The three-domain system replaced the five-kingdom system because it better reflects evolutionary relationships\nB) The five-kingdom system is more accurate than the three-domain system\nC) Both systems are equally valid\nD) The three-domain system has fewer categories so it is simpler\nE) DNA sequencing proved that all organisms are the same',
          solution: 'Understanding relationships between ideas and evaluating evidence.\n\nKey points from passage:\n1. Old system: 5 kingdoms\n2. Problem: "doesn\'t accurately reflect evolutionary relationships"\n3. New approach: DNA sequencing provided new evidence\n4. New system: 3 domains\n5. Improvement: "better represents the tree of life"\n\nStep 1: Identify the relationship\nOld system → New evidence (DNA) → New, better system\n\nThis is REPLACEMENT due to improved accuracy!\n\nStep 2: Evaluate each statement\n\nA) "Three-domain replaced five-kingdom because it better reflects evolutionary relationships"\n• Matches passage structure ✓\n• Cites reason: evolutionary relationships ✓\n• Mentions DNA evidence context ✓\n• Captures cause and effect ✓ CORRECT!\n\nB) "Five-kingdom is more accurate"\n• Contradicts passage ✗\n• Passage says it "doesn\'t accurately reflect" ✗\n\nC) "Both systems are equally valid"\n• Contradicts "better represents" ✗\n• Passage clearly favors new system ✗\n\nD) "Three-domain has fewer categories so it is simpler"\n• Reason given is accuracy, NOT simplicity ✗\n• Misidentifies the reasoning ✗\n\nE) "DNA proved all organisms are the same"\n• Absurd and not stated ✗\n• Misinterpretation ✗\n\nAnswer: A) The three-domain system replaced the five-kingdom system because it better reflects evolutionary relationships\n\nCritical reading for science passages:\n• Identify old vs. new information\n• Understand WHY changes were made\n• Recognize evidence supporting claims\n• Distinguish correlation from causation\n\nPassage structure:\nOLD SYSTEM → NEW EVIDENCE → NEW SYSTEM → IMPROVEMENT\n5 kingdoms → DNA sequencing → 3 domains → Better accuracy',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: keyIdeasTopic.id,
          front: 'How do you identify the main idea of a passage?',
          back: 'Look for the topic sentence (often first or last), identify what the whole passage is about, and find the point that all other sentences support. Main idea is broad enough to cover the entire passage but not too general.',
          hint: 'Central point supported by all details',
          isPremium: false
        },
        {
          topicId: keyIdeasTopic.id,
          front: 'What makes a valid inference in reading comprehension?',
          back: 'A valid inference must be: 1) Supported by evidence in the passage, 2) A logical conclusion from stated facts, 3) Not contradicting any passage information. It goes beyond what\'s directly stated but stays grounded in the text.',
          hint: 'Logical conclusion from passage evidence',
          isPremium: false
        },
        {
          topicId: keyIdeasTopic.id,
          front: 'How do you analyze relationships between ideas in science passages?',
          back: 'Identify old vs. new information, understand WHY changes occurred, recognize evidence supporting claims, and track cause-and-effect relationships. Look for transition words showing contrast (however, but) or causation (because, therefore).',
          hint: 'Track cause-effect and old vs. new',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${keyIdeasTopic.title}`);
  }

  // Topic 3: Integration of Knowledge
  const integrationTopic = await prisma.topic.findFirst({
    where: {
      slug: 'integration-of-knowledge',
      category: {
        course: { slug: 'act-prep' }
      }
    }
  });

  if (integrationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: integrationTopic.id,
          question: 'Two passages discuss renewable energy:\n\nPassage A argues that solar power is the most cost-effective renewable option.\nPassage B argues that wind power produces more energy per dollar invested.\n\nWhat do both passages agree on?\n\nA) Solar power is superior to wind power\nB) Wind power is the best option\nC) Renewable energy is worth investing in\nD) Traditional energy sources are better\nE) Energy costs don\'t matter',
          solution: 'Finding common ground between different viewpoints.\n\nPassage A: Solar power is most cost-effective\nPassage B: Wind power produces more per dollar\n\nStep 1: Identify what they disagree about\n• Which renewable source is better (solar vs. wind)\n• Metric for evaluation (cost-effectiveness vs. energy production)\n\nStep 2: Identify underlying agreement\nBoth passages:\n• Discuss renewable energy positively\n• Evaluate economic benefits\n• Assume renewables are valuable options\n\nThey disagree on WHICH renewable, but agree renewables are good!\n\nStep 3: Evaluate options\n\nA) "Solar power is superior"\n• Only Passage A claims this ✗\n• Not shared view ✗\n\nB) "Wind power is the best option"\n• Only Passage B claims this ✗\n• Not shared view ✗\n\nC) "Renewable energy is worth investing in"\n• Passage A invests in solar (renewable) ✓\n• Passage B invests in wind (renewable) ✓\n• Both support renewable investment ✓ CORRECT!\n\nD) "Traditional energy sources are better"\n• Contradicts both passages ✗\n\nE) "Energy costs don\'t matter"\n• Both discuss cost/dollars ✗\n• Both care about economics ✗\n\nAnswer: C) Renewable energy is worth investing in\n\nFinding agreement in disagreement:\n• Look at the underlying assumption\n• Identify the broader category they share\n• Distinguish specific claims from general principles\n\nVenn diagram:\nPassage A only: "Solar is best"\nBoth agree: "Renewables are valuable"\nPassage B only: "Wind is best"',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: integrationTopic.id,
          question: 'A passage discusses the benefits of exercise, citing studies from 2010, 2015, and 2020. A graph shows that participation in regular exercise increased from 40% to 65% during this same period.\n\nHow does the graph relate to the passage?\n\nF) It contradicts the passage\nG) It provides visual evidence supporting trends discussed in the passage\nH) It shows exercise decreased over time\nJ) It is unrelated to the passage\nK) It proves exercise is harmful',
          solution: 'Integrating information from text and graphics.\n\nPassage: Discusses benefits of exercise (2010-2020)\nGraph: Shows exercise participation increased 40% → 65% (2010-2020)\n\nStep 1: Identify the relationship\nSame time period: 2010-2020 ✓\nRelated topic: exercise ✓\nTrend: increasing participation ✓\n\nStep 2: Analyze how they work together\n\nPassage: Studies show benefits\nGraph: More people exercising\n\nLogical connection:\nIf studies show benefits → people learn about benefits → more people exercise\n\nThe graph SUPPORTS the passage by showing the impact!\n\nStep 3: Evaluate options\n\nF) "Contradicts the passage"\n• Both show positive view of exercise ✗\n• No contradiction ✗\n\nG) "Provides visual evidence supporting trends discussed in passage"\n• Same time period ✓\n• Related topic ✓\n• Shows increasing trend matching positive discussion ✓\n• Graph adds data to support passage ✓ CORRECT!\n\nH) "Shows exercise decreased"\n• 40% → 65% is an INCREASE ✗\n• Misreads graph ✗\n\nJ) "Unrelated to passage"\n• Same topic and time period ✗\n• Clearly related ✗\n\nK) "Proves exercise is harmful"\n• Absurd - shows increase, passage discusses benefits ✗\n\nAnswer: G) It provides visual evidence supporting trends discussed in the passage\n\nIntegrating text and graphics:\n• Check if time periods match\n• Verify topics align\n• Determine if they support, contradict, or add to each other\n• Graphics often provide data/evidence for text claims\n\nText + Graph relationship types:\n1. Support: Graph provides evidence for text claims\n2. Expand: Graph adds new related information\n3. Contradict: Graph shows opposite trend (rare)\n4. Illustrate: Graph visualizes what text describes',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: integrationTopic.id,
          question: 'Three sources discuss climate change:\n\nSource 1 (2015 study): Projects 2°C temperature increase by 2100\nSource 2 (2018 study): Projects 2.5°C temperature increase by 2100\nSource 3 (2022 study): Projects 3°C temperature increase by 2100\n\nWhat pattern emerges when comparing these sources chronologically?\n\nA) Predictions have remained constant\nB) Newer studies project greater temperature increases\nC) Older studies were more accurate\nD) Temperature predictions are decreasing\nE) All studies disagree completely',
          solution: 'Synthesizing information across multiple sources to identify patterns.\n\nData:\n• 2015: 2°C by 2100\n• 2018: 2.5°C by 2100\n• 2022: 3°C by 2100\n\nStep 1: Organize chronologically (already done)\n2015 → 2018 → 2022\n\nStep 2: Look for patterns in predictions\n2°C → 2.5°C → 3°C\n\nTrend: INCREASING predictions over time!\n\nStep 3: Interpret the pattern\nNewer studies = higher temperature predictions\n\nWhy might this happen?\n• More data available over time\n• Better models\n• Current trends worse than expected\n• Tipping points discovered\n\nStep 4: Evaluate options\n\nA) "Predictions remained constant"\n• 2°C ≠ 2.5°C ≠ 3°C ✗\n• Clear change over time ✗\n\nB) "Newer studies project greater temperature increases"\n• 2015 (oldest): 2°C (lowest)\n• 2022 (newest): 3°C (highest) ✓\n• Clear upward trend ✓ CORRECT!\n\nC) "Older studies were more accurate"\n• Can\'t determine accuracy until 2100 ✗\n• No evidence for this claim ✗\n\nD) "Temperature predictions are decreasing"\n• Opposite of the trend ✗\n• Predictions are INCREASING ✗\n\nE) "All studies disagree completely"\n• Too extreme - all predict warming ✓\n• They\'re in same range (2-3°C) ✓\n• They agree on direction, differ on magnitude ✗\n\nAnswer: B) Newer studies project greater temperature increases\n\nSynthesis across sources:\n• Arrange chronologically when dates given\n• Look for trends over time\n• Identify agreements and disagreements\n• Consider why differences might exist\n• Don\'t assume newer = more accurate (need evidence)\n\nPattern recognition:\nTime ↑ → Prediction ↑\n2015 → 2018 → 2022\n2°C → 2.5°C → 3°C\n\nThis shows projections worsening over time (possibly as more data becomes available).',
          difficulty: 'HARD',
          order: 3,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: integrationTopic.id,
          front: 'How do you find what two passages agree on when they have different arguments?',
          back: 'Look for underlying assumptions or broader categories both passages share. They might disagree on specifics but agree on general principles. Focus on what both passages assume to be true or valuable.',
          hint: 'Find shared assumptions or principles',
          isPremium: false
        },
        {
          topicId: integrationTopic.id,
          front: 'How do you integrate information from text and graphics?',
          back: 'Check if time periods match, verify topics align, and determine the relationship: Does the graphic support (provide evidence), expand (add information), contradict, or illustrate the text? Graphics often provide data for text claims.',
          hint: 'Match periods and topics, find relationship',
          isPremium: false
        },
        {
          topicId: integrationTopic.id,
          front: 'How do you synthesize information across multiple sources?',
          back: 'Arrange sources chronologically if dates given, look for trends over time, identify agreements and disagreements, consider why differences exist. Look for patterns in how information changes or what remains consistent.',
          hint: 'Organize chronologically, find patterns',
          isPremium: true
        }
      ]
    });

    console.log(`✅ Added 3 problems and 3 flashcards for ${integrationTopic.title}`);
  }

  console.log('\n🎉 ACT Prep Batch 5 complete! (15/17 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
