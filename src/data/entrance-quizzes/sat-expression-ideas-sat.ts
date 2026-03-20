/**
 * Entrance Quiz — SAT Expression of Ideas (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Transitions & Connections ────────────
  {
    id: 'sei-ent-1a',
    question:
      'A paragraph ends by explaining that renewable energy is less reliable than fossil fuels. The next paragraph argues that battery storage technology is rapidly improving. Which transition best connects these two paragraphs?',
    options: [
      'In addition, battery storage technology is rapidly improving.',
      'For example, battery storage technology is rapidly improving.',
      'Nevertheless, battery storage technology is rapidly improving.',
      'Similarly, battery storage technology is rapidly improving.',
    ],
    correctIndex: 2,
    explanation:
      '"Nevertheless" signals a contrast—acknowledging the reliability concern while introducing a counter-development. "In addition" implies continuation, "for example" implies illustration, and "similarly" implies a parallel idea, none of which fit the contrast between the two paragraphs.',
    partNumber: 1,
    partTitle: 'Transitions & Connections',
  },
  {
    id: 'sei-ent-1b',
    question:
      'A writer wants to introduce a sentence that provides a specific example supporting the previous sentence. Which transition word is most appropriate?',
    options: [
      'However',
      'Therefore',
      'For instance',
      'Furthermore',
    ],
    correctIndex: 2,
    explanation:
      '"For instance" signals that an example follows, which is exactly what the writer needs. "However" signals contrast, "therefore" signals conclusion or result, and "furthermore" signals an additional point, not a specific illustration.',
    partNumber: 1,
    partTitle: 'Transitions & Connections',
  },

  // ── Part 2: Conciseness ───────────────────────────
  {
    id: 'sei-ent-2a',
    question:
      'Which version of the sentence is the most concise without losing meaning?',
    options: [
      'Due to the fact that it was raining outside, the game was cancelled.',
      'Because of the outdoor rain conditions that were present, the game was cancelled.',
      'Because it was raining, the game was cancelled.',
      'The game was cancelled on account of the rain that was occurring outside.',
    ],
    correctIndex: 2,
    explanation:
      '"Because it was raining, the game was cancelled" conveys the full meaning in the fewest words. The other options use wordy phrases like "due to the fact that," "on account of," and unnecessary modifiers like "outdoor" and "that was occurring."',
    partNumber: 2,
    partTitle: 'Conciseness',
  },
  {
    id: 'sei-ent-2b',
    question:
      'Which underlined phrase should be deleted because it is redundant?\n"The new innovation [A] revolutionized manufacturing. Each individual [B] worker saw their output increase. The end result [C] was higher profit. The final conclusion [D] was widely celebrated."',
    options: [
      'new (in "new innovation")',
      '"Each individual" — should just be "Each"',
      '"end" (in "end result")',
      'All of the above phrases are redundant.',
    ],
    correctIndex: 3,
    explanation:
      'All four phrases are redundant: "innovation" is inherently new; "individual" is implied by "each"; "result" is inherently an end; "conclusion" is inherently final. On the SAT, identifying and eliminating redundancy is a key conciseness skill.',
    partNumber: 2,
    partTitle: 'Conciseness',
  },

  // ── Part 3: Relevance & Purpose ──────────────────
  {
    id: 'sei-ent-3a',
    question:
      'A paragraph focuses on the economic benefits of urban farming. Which sentence should be DELETED because it is irrelevant to the paragraph\'s focus?',
    options: [
      '"Urban farms can reduce food transportation costs by supplying produce locally."',
      '"Community gardens create jobs and generate income for neighborhood residents."',
      '"The history of farming dates back more than ten thousand years to ancient civilizations."',
      '"Rooftop farms in New York City have attracted investment from local entrepreneurs."',
    ],
    correctIndex: 2,
    explanation:
      '"The history of farming dates back more than ten thousand years" is interesting but entirely unrelated to the paragraph\'s focus on the economic benefits of urban farming. Removing irrelevant information is a key SAT expression-of-ideas skill.',
    partNumber: 3,
    partTitle: 'Relevance & Purpose',
  },
  {
    id: 'sei-ent-3b',
    question:
      'A student wants to add a sentence to a paragraph arguing that social media harms teen mental health. Which addition BEST supports the paragraph\'s purpose?',
    options: [
      '"Social media platforms were first developed in the early 2000s."',
      '"A 2022 study found that teens who spent more than three hours daily on social media were twice as likely to report symptoms of depression."',
      '"Many teenagers enjoy sharing photos and videos with their friends online."',
      '"Instagram was acquired by Facebook in 2012 for approximately one billion dollars."',
    ],
    correctIndex: 1,
    explanation:
      'The paragraph argues that social media harms teen mental health. Only option B provides direct evidence (a study with specific data) supporting that claim. The other options are factual but irrelevant to the argument being made.',
    partNumber: 3,
    partTitle: 'Relevance & Purpose',
  },

  // ── Part 4: Tone & Word Choice ────────────────────
  {
    id: 'sei-ent-4a',
    question:
      'A formal academic essay discusses climate policy. Which word choice is most appropriate for this context?',
    options: [
      '"Government officials need to get their act together on climate stuff."',
      '"Policymakers must implement comprehensive strategies to mitigate climate change."',
      '"Politicians are totally failing at dealing with the climate crisis."',
      '"Folks in charge should probably do something about the weather situation."',
    ],
    correctIndex: 1,
    explanation:
      'Option B uses formal, precise vocabulary ("policymakers," "implement," "comprehensive strategies," "mitigate") appropriate for academic writing. The other options use informal language ("get their act together," "stuff," "totally," "folks") inconsistent with an academic register.',
    partNumber: 4,
    partTitle: 'Tone & Word Choice',
  },
  {
    id: 'sei-ent-4b',
    question:
      'Which word most precisely fills the blank in this sentence: "The scientist\'s findings were ______, overturning decades of accepted theory."',
    options: [
      'good',
      'important',
      'groundbreaking',
      'notable',
    ],
    correctIndex: 2,
    explanation:
      '"Groundbreaking" most precisely captures the idea of research so significant it overturns established thinking. "Good" and "important" are vague, and while "notable" is more specific, it lacks the sense of radical transformation that "groundbreaking" conveys.',
    partNumber: 4,
    partTitle: 'Tone & Word Choice',
  },

  // ── Part 5: Organization ──────────────────────────
  {
    id: 'sei-ent-5a',
    question:
      'Four sentences need to be arranged into a logical paragraph. Which order is most logical?\n1. "These fungi form networks that transfer nutrients between trees."\n2. "Scientists call this underground system the "wood wide web."\n3. "Forests are not collections of isolated trees but interconnected communities."\n4. "Through these networks, older trees can sustain younger seedlings."',
    options: [
      '1 → 2 → 3 → 4',
      '3 → 1 → 2 → 4',
      '2 → 3 → 1 → 4',
      '4 → 1 → 2 → 3',
    ],
    correctIndex: 1,
    explanation:
      'The logical flow is: introduce the broad idea (sentence 3: forests are interconnected), explain the mechanism (sentence 1: fungi networks), name the concept (sentence 2: "wood wide web"), and give a specific example of its function (sentence 4: sustaining seedlings). Order: 3 → 1 → 2 → 4.',
    partNumber: 5,
    partTitle: 'Organization',
  },
  {
    id: 'sei-ent-5b',
    question:
      'Where should the following sentence be inserted in the paragraph?\n"This disparity is most pronounced in urban neighborhoods with limited access to grocery stores."\nParagraph: [Sentence 1] Research shows that food insecurity affects millions of Americans. [Sentence 2] Low-income families are disproportionately impacted. [Sentence 3] Community food banks struggle to meet demand.',
    options: [
      'Before Sentence 1',
      'After Sentence 1, before Sentence 2',
      'After Sentence 2, before Sentence 3',
      'After Sentence 3',
    ],
    correctIndex: 2,
    explanation:
      'The new sentence explains a specific aspect of the disparity mentioned in Sentence 2 ("Low-income families are disproportionately impacted"). Inserting it after Sentence 2 creates a logical sequence: general disparity → specific location of disparity → consequence (food banks overwhelmed).',
    partNumber: 5,
    partTitle: 'Organization',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'sei-ent-6a',
    question:
      'A writer is revising a paragraph and wants to make the writing more concise while preserving the formal tone. Which revision is best?\nOriginal: "In spite of the fact that there are many different kinds of renewable energy sources that are available, the majority of households have not yet made the transition to using them."',
    options: [
      '"Despite many available renewable energy sources, most households have not yet transitioned to them."',
      '"Even though renewable energy is out there, not many families have switched yet."',
      '"Renewable energy sources exist and are available, but households have not adopted them in large numbers."',
      '"In spite of renewables existing, the transition has not happened for most households yet."',
    ],
    correctIndex: 0,
    explanation:
      'Option A reduces the sentence from 35 words to 16 while preserving formal register and exact meaning. Option B is informal; options C and D are not significantly more concise than the original or use awkward phrasing.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'sei-ent-6b',
    question:
      'Which revision adds the most relevant supporting detail to the claim that "Electric vehicles are becoming increasingly affordable"?',
    options: [
      '"Electric vehicles are becoming increasingly affordable, and they come in many colors."',
      '"Electric vehicles are becoming increasingly affordable; the average EV price dropped by 18% between 2020 and 2023."',
      '"Electric vehicles are becoming increasingly affordable, which is a positive development for consumers."',
      '"Electric vehicles are becoming increasingly affordable, and they are also better for the environment."',
    ],
    correctIndex: 1,
    explanation:
      'Option B adds a specific, quantified statistic directly supporting the affordability claim. The other options introduce vague affirmations, different topics (color, environment), or circular reasoning without providing concrete evidence.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'sei-ent-7a',
    question:
      'On the SAT, "expression of ideas" questions test all of the following EXCEPT:',
    options: [
      'Whether transitions logically connect ideas between sentences.',
      'Whether details are relevant to the paragraph\'s main purpose.',
      'Whether subject and verb agree grammatically.',
      'Whether a sentence should be added, deleted, or moved.',
    ],
    correctIndex: 2,
    explanation:
      'Subject-verb agreement is tested under "Standard English Conventions" (grammar), not "Expression of Ideas." Expression of ideas focuses on rhetoric: organization, transitions, development, relevance, and conciseness.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'sei-ent-7b',
    question:
      'A student is asked to revise a paragraph so that it flows more logically. The best strategy is to:',
    options: [
      'Add more transition words to every sentence regardless of meaning.',
      'Shorten every sentence to under ten words.',
      'Identify the paragraph\'s main claim and ensure each sentence directly supports or develops it.',
      'Replace simple words with advanced vocabulary throughout.',
    ],
    correctIndex: 2,
    explanation:
      'Logical flow depends on ensuring each sentence has a clear relationship to the paragraph\'s central idea. Overusing transitions, shortening sentences arbitrarily, or inflating vocabulary can all obscure rather than improve coherence.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Transitions & Connections' },
    { partNumber: 2, partTitle: 'Conciseness' },
    { partNumber: 3, partTitle: 'Relevance & Purpose' },
    { partNumber: 4, partTitle: 'Tone & Word Choice' },
    { partNumber: 5, partTitle: 'Organization' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
