/**
 * Entrance Quiz — SAT Reading & Textual Evidence (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Main Idea ─────────────────────────────
  {
    id: 'sre-ent-1a',
    question:
      'A passage opens: "For decades, scientists dismissed the idea that plants communicate. Recent studies, however, reveal that trees in a forest exchange nutrients and distress signals through vast underground fungal networks, fundamentally challenging our understanding of plant behavior." What is the main idea of this passage?',
    options: [
      'Scientists have always known that plants communicate underground.',
      'Trees use fungal networks to communicate, overturning prior scientific assumptions.',
      'Fungi are more important to forests than trees are.',
      'Scientists should study underground networks instead of plant behavior.',
    ],
    correctIndex: 1,
    explanation:
      'The passage contrasts the old dismissal of plant communication with new evidence of underground fungal networks, making option B the central claim. The other options either contradict the passage or misrepresent its focus.',
    partNumber: 1,
    partTitle: 'Main Idea',
  },
  {
    id: 'sre-ent-1b',
    question:
      'A passage states: "The popularity of electric vehicles has grown steadily, yet range anxiety—fear of running out of charge—remains the single greatest barrier to mass adoption. Charging infrastructure, critics argue, must triple before EVs become truly practical." Which statement best summarizes the central tension in the passage?',
    options: [
      'Electric vehicles are more popular than gasoline cars.',
      'Critics oppose electric vehicles for environmental reasons.',
      'EV growth is hindered by insufficient charging infrastructure and consumer fear.',
      'Range anxiety is caused by the high price of electric vehicles.',
    ],
    correctIndex: 2,
    explanation:
      'The passage highlights two interrelated problems—range anxiety and inadequate infrastructure—as obstacles to EV adoption. Option C accurately captures both elements of this tension.',
    partNumber: 1,
    partTitle: 'Main Idea',
  },

  // ── Part 2: Supporting Evidence ───────────────────
  {
    id: 'sre-ent-2a',
    question:
      'A student claims: "The author believes urban green spaces improve mental health." Which quotation from the passage provides the BEST evidence for this claim?',
    options: [
      '"City parks were first established in the nineteenth century to provide leisure for the working class."',
      '"Exposure to natural environments, even brief walks through tree-lined streets, consistently lowers cortisol levels and self-reported stress."',
      '"The cost of maintaining urban parks has increased significantly in recent decades."',
      '"Many cities have reduced their green space budgets due to fiscal constraints."',
    ],
    correctIndex: 1,
    explanation:
      'Option B directly connects natural environments to measurable mental-health outcomes (lower cortisol, reduced stress), directly supporting the claim. The other options discuss history or costs, not mental health benefits.',
    partNumber: 2,
    partTitle: 'Supporting Evidence',
  },
  {
    id: 'sre-ent-2b',
    question:
      'A passage argues that social media increases teenage depression. Which piece of evidence would MOST weaken this argument?',
    options: [
      'A study showing teens who use social media more than 3 hours daily report higher anxiety.',
      'A survey indicating teens prefer texting over face-to-face communication.',
      'A longitudinal study finding no significant difference in depression rates between heavy and light social media users.',
      'Data showing that social media companies profit from teen engagement.',
    ],
    correctIndex: 2,
    explanation:
      'A longitudinal study finding no significant difference directly contradicts the causal claim. The other options are either irrelevant or could even support the argument.',
    partNumber: 2,
    partTitle: 'Supporting Evidence',
  },

  // ── Part 3: Inference Skills ──────────────────────
  {
    id: 'sre-ent-3a',
    question:
      'A passage notes: "Despite being the world\'s largest democracy, India\'s voter turnout in rural areas often exceeds that of urban centers, a pattern that inverts trends seen in most Western nations." What can be inferred about Western nations?',
    options: [
      'In most Western nations, urban voter turnout tends to be higher than rural turnout.',
      'Western nations have lower overall voter turnout than India.',
      'Western rural voters are less politically engaged than Indian rural voters.',
      'India copied its democratic system from Western nations.',
    ],
    correctIndex: 0,
    explanation:
      'The phrase "inverts trends seen in most Western nations" implies that in the West the usual pattern is the opposite—urban turnout exceeds rural turnout. Option A is the direct inference.',
    partNumber: 3,
    partTitle: 'Inference Skills',
  },
  {
    id: 'sre-ent-3b',
    question:
      'A character in a short story never speaks directly, but other characters consistently defer to her opinions and seek her approval before acting. What can the reader most reasonably infer about this character?',
    options: [
      'She is shy and prefers to avoid conflict.',
      'She holds significant social authority within the group.',
      'She is unaware of the group\'s activities.',
      'She is new to the community and still learning its norms.',
    ],
    correctIndex: 1,
    explanation:
      'When others consistently defer to and seek approval from a character, the most reasonable inference is that she possesses social authority, even if she is not overtly assertive.',
    partNumber: 3,
    partTitle: 'Inference Skills',
  },

  // ── Part 4: Text Structure ────────────────────────
  {
    id: 'sre-ent-4a',
    question:
      'A passage begins by describing a problem (ocean plastic pollution), then presents two failed government solutions, and concludes by proposing a market-based incentive as the best remedy. Which text structure does this passage use?',
    options: [
      'Chronological order',
      'Compare and contrast',
      'Problem-solution with evaluation of alternatives',
      'Cause and effect only',
    ],
    correctIndex: 2,
    explanation:
      'The passage identifies a problem, evaluates failed solutions, and proposes a preferred remedy—a classic problem-solution structure with comparative evaluation of alternatives.',
    partNumber: 4,
    partTitle: 'Text Structure',
  },
  {
    id: 'sre-ent-4b',
    question:
      'An author devotes the first three paragraphs to praising a scientific theory, then spends the final two paragraphs detailing its flaws. What is the most likely purpose of this organizational choice?',
    options: [
      'To confuse the reader about the author\'s true opinion.',
      'To build credibility by acknowledging strengths before presenting a critical evaluation.',
      'To show that the theory has more strengths than weaknesses.',
      'To argue that the theory should be abandoned immediately.',
    ],
    correctIndex: 1,
    explanation:
      'Presenting strengths first before a critique is a rhetorical strategy that establishes the author\'s fairness and credibility, making the subsequent criticism more persuasive.',
    partNumber: 4,
    partTitle: 'Text Structure',
  },

  // ── Part 5: Author's Purpose ──────────────────────
  {
    id: 'sre-ent-5a',
    question:
      'An author writes: "We must act now. Every year we delay, another 8 million metric tons of plastic enter our oceans. Our grandchildren will inherit a world where fish are outnumbered by plastic debris—if we let that happen." What is the author\'s primary purpose?',
    options: [
      'To inform readers of plastic recycling techniques.',
      'To persuade readers to take immediate action on plastic pollution.',
      'To entertain readers with vivid descriptions of ocean life.',
      'To compare plastic pollution in different countries.',
    ],
    correctIndex: 1,
    explanation:
      'The imperative "We must act now," the alarming statistics, and the emotional appeal to grandchildren all signal persuasive intent aimed at motivating immediate action.',
    partNumber: 5,
    partTitle: "Author's Purpose",
  },
  {
    id: 'sre-ent-5b',
    question:
      'A science writer describes, in vivid detail, the life cycle of a monarch butterfly—its migration, metamorphosis, and habitat—without recommending any action. What is most likely the author\'s purpose?',
    options: [
      'To persuade readers to protect monarch butterflies.',
      'To argue that butterflies are more important than other insects.',
      'To inform and engage readers with the natural world.',
      'To critique government environmental policy.',
    ],
    correctIndex: 2,
    explanation:
      'Without calls to action or argumentation, the vivid descriptive detail suggests the author\'s goal is to inform and engage—sharing knowledge about the butterfly\'s life cycle.',
    partNumber: 5,
    partTitle: "Author's Purpose",
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'sre-ent-6a',
    question:
      'You are asked: "Which choice most effectively uses relevant information from the notes to accomplish the goal of introducing a key counterargument?" The goal is to acknowledge that some researchers dispute the study\'s findings. Which sentence best accomplishes this?',
    options: [
      '"The study was conducted over five years."',
      '"Some researchers, however, contend that the study\'s sample size was too small to support its sweeping conclusions."',
      '"The study received funding from a private foundation."',
      '"Participants were between the ages of 18 and 25."',
    ],
    correctIndex: 1,
    explanation:
      'Option B directly introduces a counterargument (disputing the conclusions) with a specific critique (sample size). The other options are factual details that do not constitute counterarguments.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'sre-ent-6b',
    question:
      'A student reads two paired passages. Passage 1 argues that remote work increases productivity. Passage 2 argues it decreases collaboration. Which synthesis best captures the relationship between the two passages?',
    options: [
      'Both passages agree that remote work is beneficial for employees.',
      'Passage 1 focuses on individual output while Passage 2 focuses on team dynamics, revealing that remote work has mixed effects depending on the measure used.',
      'Passage 2 directly refutes every claim made in Passage 1.',
      'Both passages use the same data to reach opposite conclusions.',
    ],
    correctIndex: 1,
    explanation:
      'The passages address different dimensions (individual productivity vs. team collaboration), so the most accurate synthesis acknowledges their different foci and the nuanced, context-dependent nature of remote work\'s effects.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'sre-ent-7a',
    question:
      'On the SAT Reading section, if a question asks "Which choice best supports the claim made in the previous sentence?" what should you do FIRST?',
    options: [
      'Read all four answer choices before re-reading the passage.',
      'Re-read the specific sentence the question references and identify exactly what claim needs support.',
      'Choose the longest answer choice, as it provides the most detail.',
      'Pick the answer that mentions the same topic as the passage title.',
    ],
    correctIndex: 1,
    explanation:
      'Textual-evidence questions require you to anchor your search in the specific claim being made. Reading the referenced sentence first ensures you know precisely what kind of support you need before evaluating the choices.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'sre-ent-7b',
    question:
      'A passage\'s final paragraph begins: "Ultimately, the evidence suggests that neither extreme position is fully correct." What role does this sentence most likely play in the passage?',
    options: [
      'It introduces a brand-new topic unrelated to the rest of the passage.',
      'It serves as a transitional hook leading to the next passage.',
      'It refutes the passage\'s thesis and introduces an opposing view.',
      'It signals a concluding synthesis that qualifies or moderates the positions discussed.',
    ],
    correctIndex: 3,
    explanation:
      '"Ultimately" signals a conclusion, and the idea that "neither extreme is fully correct" is a classic moderating synthesis—the author is pulling together the discussion to reach a nuanced resolution.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Main Idea' },
    { partNumber: 2, partTitle: 'Supporting Evidence' },
    { partNumber: 3, partTitle: 'Inference Skills' },
    { partNumber: 4, partTitle: 'Text Structure' },
    { partNumber: 5, partTitle: "Author's Purpose" },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
