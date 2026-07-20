/**
 * Exit Quiz — SAT Effective Language Use (Digital SAT Format)
 *
 * Passage-based questions following the Digital SAT Reading & Writing format.
 * Tests Expression of Ideas: transitions, rhetorical synthesis, and conciseness.
 *
 * Domain: Expression of Ideas
 */

export interface ExitQuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; category: string; difficulty?: 'easy' | 'medium' | 'hard' }
interface QuestionTemplate { id: string; category: string; difficulty: 'easy' | 'medium' | 'hard'; generate: () => ExitQuizQuestion }

function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }; return a }

const questionPool: QuestionTemplate[] = [
  // ─── Transitions ───
  {
    id: 'elu-q1', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'Nevertheless,'
      const opts = shuffle([correct, 'Therefore,', 'Similarly,', 'Specifically,'])
      return { id: this.id, category: this.category,
        question: `A 2019 study found that students who took handwritten notes performed significantly better on conceptual questions than those who typed their notes on laptops. _______ many universities have continued to encourage or even require the use of laptops in lecture halls, citing the benefits of digital organization and accessibility.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence presents information that contrasts with the study's findings (universities continue to encourage laptops despite evidence favoring handwriting). "Nevertheless" signals this contrast.`
      }
    }
  },
  {
    id: 'elu-q2', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'For instance,'
      const opts = shuffle([correct, 'In contrast,', 'As a result,', 'Meanwhile,'])
      return { id: this.id, category: this.category,
        question: `The human body has evolved several remarkable mechanisms for regulating internal temperature. _______ when core body temperature rises during exercise, blood vessels near the skin dilate to release heat, and sweat glands produce moisture that cools the skin through evaporation.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence provides a specific example of the temperature-regulating mechanisms mentioned in the first. "For instance" signals that an example follows.`
      }
    }
  },
  {
    id: 'elu-q3', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'Consequently,'
      const opts = shuffle([correct, 'However,', 'In other words,', 'Alternatively,'])
      return { id: this.id, category: this.category,
        question: `The volcanic eruption of Mount Tambora in 1815 ejected an estimated 160 cubic kilometers of ash into the atmosphere, blocking sunlight across the Northern Hemisphere. _______ the following year became known as the "Year Without a Summer," as temperatures plummeted and crops failed across Europe and North America.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence describes a direct effect (crop failure, temperature drops) caused by the eruption described in the first. "Consequently" signals a cause-and-effect relationship.`
      }
    }
  },
  {
    id: 'elu-q4', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'In contrast,'
      const opts = shuffle([correct, 'Furthermore,', 'Accordingly,', 'In addition,'])
      return { id: this.id, category: this.category,
        question: `Classical conditioning, as described by Ivan Pavlov, involves learning through the association of a neutral stimulus with an automatic response; a dog, for example, may learn to salivate at the sound of a bell that has been repeatedly paired with food. _______ operant conditioning, studied extensively by B. F. Skinner, involves learning through the consequences of voluntary behavior—an organism repeats actions that are rewarded and avoids those that are punished.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage shifts from describing one type of conditioning to a fundamentally different type. "In contrast" signals this shift between differing concepts.`
      }
    }
  },
  {
    id: 'elu-q5', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'Moreover,'
      const opts = shuffle([correct, 'Instead,', 'Nevertheless,', 'On the other hand,'])
      return { id: this.id, category: this.category,
        question: `Regular physical exercise has been shown to reduce the risk of cardiovascular disease by strengthening the heart and improving circulation. _______ a growing body of research indicates that exercise also has significant cognitive benefits, including improved memory, enhanced attention, and reduced risk of age-related neurodegenerative conditions.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence adds additional information that extends the first sentence's point about the benefits of exercise. "Moreover" signals that additional, supportive information follows.`
      }
    }
  },
  // ─── Rhetorical Synthesis ───
  {
    id: 'elu-q6', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'While both approaches aim to reduce carbon emissions, cap-and-trade programs set a fixed limit on total emissions, whereas carbon taxes set a fixed price per unit of carbon emitted.'
      const opts = shuffle([
        correct,
        'Cap-and-trade programs and carbon taxes are two policies that have been discussed by governments around the world.',
        'Carbon taxes are better than cap-and-trade programs because they are simpler to implement.',
        'Cap-and-trade programs have been used in Europe, and carbon taxes have been used in Canada.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing a research paper comparing two approaches to reducing greenhouse gas emissions. The student wants to emphasize the key difference between cap-and-trade programs and carbon taxes.\n\nBullet points from the student's notes:\n• Cap-and-trade: government sets a maximum limit (cap) on total emissions; companies buy and sell emission permits\n• Carbon tax: government sets a price per ton of carbon emitted; no cap on total emissions\n• Both aim to incentivize businesses to reduce carbon output\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to emphasize the key difference. The correct choice acknowledges the shared goal (reducing emissions) while clearly contrasting the mechanisms (fixed limit vs. fixed price).`
      }
    }
  },
  {
    id: 'elu-q7', category: 'Rhetorical Synthesis', difficulty: 'hard',
    generate() {
      const correct = 'By analyzing tree ring patterns from ancient bristlecone pines, some of which are over 4,000 years old, dendrochronologists can reconstruct past climate conditions with year-by-year precision.'
      const opts = shuffle([
        correct,
        'Bristlecone pines are interesting trees that can live for thousands of years in harsh mountain environments.',
        'Dendrochronology is the study of tree rings, and it was developed in the early twentieth century by A. E. Douglass.',
        'Scientists use many different methods to study historical climate data, including ice cores and tree rings.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing an article about how scientists study past climates. The student wants to highlight the precision of dendrochronology as a tool for understanding historical climate.\n\nBullet points from the student's notes:\n• Dendrochronology: the science of dating and analyzing annual tree ring patterns\n• Bristlecone pines: among the oldest living organisms; some exceed 4,000 years of age\n• Each ring reflects growing conditions for a specific year (width, density indicate temperature, rainfall)\n• Allows year-by-year climate reconstruction for millennia\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to highlight the precision of dendrochronology. The correct choice combines the ancient age of the trees with the year-by-year reconstruction capability, emphasizing precision.`
      }
    }
  },
  {
    id: 'elu-q8', category: 'Rhetorical Synthesis', difficulty: 'hard',
    generate() {
      const correct = 'Although Frida Kahlo\'s work was initially overshadowed by that of her husband, muralist Diego Rivera, her deeply personal paintings—many of which explore themes of identity, pain, and Mexican folklore—have since established her as one of the most influential artists of the twentieth century.'
      const opts = shuffle([
        correct,
        'Frida Kahlo was a Mexican artist who was married to Diego Rivera, and she painted many self-portraits during her lifetime.',
        'Frida Kahlo is now considered one of the most influential artists of the twentieth century by art historians and critics.',
        'Frida Kahlo\'s paintings often depicted her own experiences with physical suffering, and she was influenced by Mexican folk art traditions.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing a biography of Frida Kahlo for an art history class. The student wants to emphasize how Kahlo's reputation has evolved over time.\n\nBullet points from the student's notes:\n• During her lifetime, often seen primarily as Diego Rivera's wife\n• Painted highly personal works exploring identity, physical suffering, and Mexican cultural traditions\n• Posthumous reassessment: now regarded as one of the most important artists of the 20th century\n• Major retrospective exhibitions held worldwide since the 1980s\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to emphasize the evolution of Kahlo's reputation. The correct choice traces the shift from being overshadowed by Rivera to being recognized as one of the most influential artists, showing the reputation's evolution.`
      }
    }
  },
  {
    id: 'elu-q9', category: 'Rhetorical Synthesis', difficulty: 'hard',
    generate() {
      const correct = 'The James Webb Space Telescope, which orbits the Sun nearly one million miles from Earth, can detect infrared light from galaxies that formed more than 13 billion years ago—observations that are impossible for ground-based telescopes, whose view is distorted by Earth\'s atmosphere.'
      const opts = shuffle([
        correct,
        'The James Webb Space Telescope was launched in December 2021 and is the successor to the Hubble Space Telescope.',
        'Ground-based telescopes are limited by atmospheric interference, while space telescopes are not.',
        'The James Webb Space Telescope is very expensive, costing approximately ten billion dollars to develop and launch.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about the advantages of space-based telescopes over ground-based ones. The student wants to highlight the James Webb Space Telescope's unique capabilities.\n\nBullet points from the student's notes:\n• JWST orbits the Sun at Lagrange point 2, approximately 1 million miles from Earth\n• Specializes in infrared observations; can detect light from galaxies formed > 13 billion years ago\n• Ground-based telescopes: view distorted by Earth's atmosphere (atmospheric turbulence, absorption)\n• JWST can see objects too faint or too distant for ground-based instruments\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to highlight JWST's unique capabilities. The correct choice integrates specific details about its location, infrared detection of ancient galaxies, and the contrast with ground-based limitations.`
      }
    }
  },
  // ─── Conciseness ───
  {
    id: 'elu-q10', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'The study found that sleep deprivation impairs decision-making.'
      const opts = shuffle([
        correct,
        'The study found that not getting enough sleep and being deprived of adequate rest impairs the ability to make good decisions.',
        'What the study found was that when people are deprived of sleep, their ability to make decisions is impaired by the lack of sleep.',
        'According to what the study found, decision-making is impaired when a person has been deprived of the sleep they need.'
      ])
      return { id: this.id, category: this.category,
        question: `Researchers at the University of Pennsylvania conducted a week-long experiment in which participants were limited to four hours of sleep per night. _______\n\nWhich choice completes the text most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice conveys the finding clearly and concisely without redundancy. The other options repeat ideas ("not getting enough sleep and being deprived of rest") or use wordy constructions.`
      }
    }
  },
  {
    id: 'elu-q11', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'The bridge, completed in 1937, remains an iconic symbol of San Francisco.'
      const opts = shuffle([
        correct,
        'The bridge, which was completed and finished in 1937, remains an iconic and well-known symbol of the city of San Francisco.',
        'Completed in 1937, the bridge is still today, in the present, an iconic symbol that represents San Francisco.',
        'The bridge, which people finished building in the year 1937, continues to remain as an iconic symbol of the city.'
      ])
      return { id: this.id, category: this.category,
        question: `The Golden Gate Bridge was a marvel of civil engineering when it opened. _______\n\nWhich choice completes the text most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice is concise and clear. The others contain redundancies: "completed and finished," "iconic and well-known," "still today, in the present," etc.`
      }
    }
  },
  {
    id: 'elu-q12', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'Because the soil lacked nitrogen, the crops failed.'
      const opts = shuffle([
        correct,
        'Due to the fact that there was a deficiency of nitrogen in the soil, the crops ended up failing.',
        'The reason the crops failed was because the soil did not have enough nitrogen in it.',
        'On account of the soil lacking a sufficient amount of nitrogen, the crops were unable to grow and therefore failed.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is revising a paragraph about agricultural challenges in sub-Saharan Africa and wants to express a causal relationship as concisely as possible.\n\nWhich choice states the relationship most concisely?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `"Because the soil lacked nitrogen, the crops failed" is the most concise version. The others use wordy phrases like "due to the fact that" or "the reason...was because."`
      }
    }
  },
  // ─── Additional Transitions ───
  {
    id: 'elu-q13', category: 'Transitions', difficulty: 'hard',
    generate() {
      const correct = 'In fact,'
      const opts = shuffle([correct, 'By contrast,', 'Regardless,', 'Alternatively,'])
      return { id: this.id, category: this.category,
        question: `Many people assume that deserts are lifeless wastelands, but the Sonoran Desert in the American Southwest supports a surprisingly diverse ecosystem. _______ more than 2,000 plant species and 550 vertebrate species have been documented within its boundaries, making it one of the most biologically rich deserts on Earth.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence intensifies the first sentence's claim about surprising diversity. "In fact" signals that the speaker is adding emphatic, reinforcing detail.`
      }
    }
  },
  {
    id: 'elu-q14', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'On the other hand,'
      const opts = shuffle([correct, 'In addition,', 'As a result,', 'In summary,'])
      return { id: this.id, category: this.category,
        question: `Some researchers argue that social media use strengthens weak social ties, enabling people to maintain connections with acquaintances they might otherwise lose touch with. _______ other scholars contend that these superficial online interactions come at the expense of deeper, more meaningful face-to-face relationships.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage presents two opposing scholarly views. "On the other hand" signals a shift to a contrasting perspective.`
      }
    }
  },
  // ─── Additional Rhetorical Synthesis ───
  {
    id: 'elu-q15', category: 'Rhetorical Synthesis', difficulty: 'hard',
    generate() {
      const correct = 'Although vertical farms use significantly less water and land than traditional agriculture, the high energy costs of artificial lighting currently make them economically viable only for high-value crops such as leafy greens and herbs.'
      const opts = shuffle([
        correct,
        'Vertical farming is a type of agriculture in which crops are grown indoors in stacked layers using artificial lighting.',
        'Vertical farms use less water than traditional farms, and they can be built in urban areas where space is limited.',
        'The future of vertical farming depends on whether energy costs can be reduced through advances in LED technology.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about the potential and limitations of vertical farming. The student wants to present a balanced assessment acknowledging both advantages and current constraints.\n\nBullet points from the student's notes:\n• Vertical farms use up to 95% less water than conventional farms\n• Require minimal land; can operate in urban environments\n• Limitation: artificial lighting consumes large amounts of electricity\n• Currently cost-effective primarily for high-value, fast-growing crops (lettuce, basil, herbs)\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants a balanced view. The correct choice acknowledges advantages (less water, less land) while presenting the key limitation (energy costs restrict viability to high-value crops).`
      }
    }
  },
  // ─── Additional Conciseness ───
  {
    id: 'elu-q16', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'The architect designed the building to maximize natural light.'
      const opts = shuffle([
        correct,
        'The architect designed the building in a way that was intended to allow for the maximization of natural light.',
        'What the architect wanted to do was design the building so that it would have as much natural light as possible.',
        'The building was designed by the architect with the goal and purpose of maximizing the amount of natural light inside.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is revising an essay about sustainable building design and wants to express a key design decision concisely.\n\nWhich choice states the idea most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice directly states the design intent without wordy constructions like "in a way that was intended to allow for" or "with the goal and purpose of."`
      }
    }
  },
  {
    id: 'elu-q17', category: 'Transitions', difficulty: 'hard',
    generate() {
      const correct = 'Admittedly,'
      const opts = shuffle([correct, 'Undoubtedly,', 'Surprisingly,', 'Coincidentally,'])
      return { id: this.id, category: this.category,
        question: `Proponents of year-round schooling argue that eliminating the traditional summer break would reduce learning loss and improve academic outcomes for students from low-income families. _______ the evidence supporting this claim is mixed: some studies show modest gains in reading and mathematics, while others find no statistically significant difference in achievement between year-round and traditional calendar students.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence concedes a weakness in the proponents' argument (mixed evidence). "Admittedly" signals a concession—acknowledging a point that qualifies or weakens the preceding claim.`
      }
    }
  },
  {
    id: 'elu-q18', category: 'Transitions', difficulty: 'hard',
    generate() {
      const correct = 'To that end,'
      const opts = shuffle([correct, 'Even so,', 'In retrospect,', 'By comparison,'])
      return { id: this.id, category: this.category,
        question: `The city of Copenhagen has set an ambitious goal of becoming carbon-neutral by 2025. _______ officials have invested heavily in cycling infrastructure, wind energy, and energy-efficient public buildings, making the city a global model for sustainable urban development.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence describes actions taken to achieve the goal stated in the first sentence. "To that end" means "in order to achieve that goal," connecting the actions to the objective.`
      }
    }
  },
  {
    id: 'elu-q19', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'While lab-grown meat could dramatically reduce the environmental footprint of animal agriculture, consumer acceptance remains uncertain: surveys indicate that many people are hesitant to eat meat produced in a laboratory rather than on a farm.'
      const opts = shuffle([
        correct,
        'Lab-grown meat is meat that is produced by cultivating animal cells in a laboratory rather than by raising and slaughtering livestock.',
        'Lab-grown meat could reduce greenhouse gas emissions because traditional livestock farming produces large amounts of methane.',
        'Several companies, including Upside Foods and Eat Just, have received regulatory approval to sell lab-grown meat in the United States.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about the future of lab-grown (cultivated) meat. The student wants to highlight both the potential environmental benefits and a major obstacle to widespread adoption.\n\nBullet points from the student's notes:\n• Cultivated meat: produced from animal cells without raising/slaughtering animals\n• Could reduce greenhouse emissions from livestock by up to 92%\n• Uses far less land and water than conventional meat production\n• Obstacle: consumer reluctance—surveys show many people uncomfortable eating "lab-grown" products\n• Price has dropped but remains higher than conventional meat\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to highlight both benefits and an obstacle. The correct choice mentions the environmental advantage while also noting consumer hesitancy as a barrier.`
      }
    }
  },
  {
    id: 'elu-q20', category: 'Conciseness', difficulty: 'medium',
    generate() {
      const correct = 'The experiment confirmed that plants grow faster under blue light than under red light.'
      const opts = shuffle([
        correct,
        'What the experiment confirmed was that the growth rate of plants is faster when they are exposed to blue light compared to when they are exposed to red light.',
        'The experiment was able to confirm the finding that plants, when grown under blue light, exhibit a faster rate of growth than plants grown under red light.',
        'Based on the results of the experiment, it was confirmed that plants which are grown under blue light grow at a faster rate than plants which are grown under red light.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is revising a lab report and wants to state a key finding concisely.\n\nWhich choice expresses the finding most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice states the finding in a direct, active sentence. The other options use unnecessarily wordy constructions.`
      }
    }
  },
]

function selectTemplates(count: number, difficulty?: 'easy' | 'medium' | 'hard'): QuestionTemplate[] {
  if (difficulty) {
    const fillOrder: Record<'easy' | 'medium' | 'hard', ('easy' | 'medium' | 'hard')[]> = { easy: ['easy', 'medium', 'hard'], medium: ['medium', 'easy', 'hard'], hard: ['hard', 'medium', 'easy'] }
    const selected: QuestionTemplate[] = []
    for (const tier of fillOrder[difficulty]) { if (selected.length >= count) break; for (const q of shuffle(questionPool.filter(t => t.difficulty === tier))) { if (selected.length >= count) break; selected.push(q) } }
    return selected
  }
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of questionPool) { if (!byCategory[q.category]) byCategory[q.category] = []; byCategory[q.category].push(q) }
  const selected: QuestionTemplate[] = []; const usedIds = new Set<string>()
  for (const cat of shuffle(Object.keys(byCategory))) { if (selected.length >= count) break; const pool = byCategory[cat]; const q = pool[Math.floor(Math.random() * pool.length)]; if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id) } }
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  for (const q of shuffle(remaining)) { if (selected.length >= count) break; selected.push(q); usedIds.add(q.id) }
  return selected
}

export function generateExitQuiz(count: number = 10, _topicSlug?: string, difficulty?: 'easy' | 'medium' | 'hard'): ExitQuizQuestion[] {
  return shuffle(selectTemplates(count, difficulty)).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
}
