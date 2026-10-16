/**
 * Entrance Quiz — Diction and Syntax (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-diction-syntax-ent-1a',
    question: "Read the passage below.\n\n*For twenty years the town delayed, debated and deferred. Tonight it decides.*\n\nWhich statement best describes how the diction and syntax work together?",
    options: [
      "Technical words and complex clauses lend the passage a detached objectivity",
      "Playful words and fragments undercut the seriousness of the coming vote",
      "A run of stalling verbs gives way to a brief sentence that ends the stalling",
      "Formal words and balanced clauses suggest that both sides are equally right",
    ],
    correctIndex: 2,
    explanation: "Three verbs of avoidance pile up in the first sentence, and the short second sentence, with its single decisive verb, closes the delay. The words are neither technical nor playful, and nothing weighs two sides against each other.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-diction-syntax-ent-1b',
    question: "A company announcement calls its layoffs \"rightsizing.\" A union flyer calls the same layoffs \"gutting the workforce.\" The union's phrase differs from the company's chiefly in that it",
    options: [
      "casts the cuts as violent harm",
      "states a different number of jobs lost",
      "uses more technical business vocabulary",
      "describes a different event at the company",
    ],
    correctIndex: 0,
    explanation: "\"Gutting\" carries the violence of butchery, while \"rightsizing\" makes the cuts sound like a sensible adjustment; the denotation is shared and the connotation differs. Neither phrase gives a number, the union's is less technical, and both name the same layoffs.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Diction in Depth: Roosevelt's Revisions to the War Message, December 1941
  {
    id: 'englang-diction-syntax-ent-2a',
    question: "An editorial's first draft called a factory's closing \"a setback for the town.\" The published version calls it \"a wound to the town.\" The revision chiefly",
    options: [
      "makes the closing sound more temporary and minor than before",
      "shifts the editorial into a more technical and official register",
      "adds a precise figure about the number of jobs that were lost",
      "turns a passing loss into an injury that will hurt and leave a scar",
    ],
    correctIndex: 3,
    explanation: "A setback can be recovered from, but a wound causes pain and may leave a scar, so the new noun makes the loss deeper and more personal. It does the opposite of minimizing, adds no figures and is less official, not more.",
    partNumber: 2,
    partTitle: "Diction in Depth: Roosevelt's Revisions to the War Message, December 1941",
  },
  {
    id: 'englang-diction-syntax-ent-2b',
    question: "A report on a flood could have said that the water \"reached many places in town.\" Instead it says the water \"reached Maple Street, the Riverside Diner, the elementary school gym and the back pew of St. Anne's.\" Naming the specific places chiefly serves to",
    options: [
      "show that the writer is an expert on the history of the town",
      "suggest that the flood was smaller than earlier reports claimed",
      "make the damage concrete, so readers can follow it from site to site",
      "prove that the town had ignored earlier warnings about the river",
    ],
    correctIndex: 2,
    explanation: "Specific nouns let readers locate each place and feel the damage spread from a street to a church pew, which a general phrase cannot do. The list shows no historical expertise, makes the flood seem larger rather than smaller and says nothing about warnings.",
    partNumber: 2,
    partTitle: "Diction in Depth: Roosevelt's Revisions to the War Message, December 1941",
  },

  // Part 3 — Syntax in Depth: Clauses, Balance, and Johnson's Letter to Lord Chesterfield, 1755
  {
    id: 'englang-diction-syntax-ent-3a',
    question: "Which sentence places the most emphasis on the danger posed by the old bridge?",
    options: [
      "The bridge is popular with the commuters, but its supports are cracking.",
      "Although its supports are cracking, the bridge is popular with commuters.",
      "The bridge's supports are cracking, and it is popular with commuters.",
      "The bridge, with its cracking supports, remains popular with commuters.",
    ],
    correctIndex: 0,
    explanation: "The danger gets its own independent clause after \"but\" and falls at the end of the sentence, the position of greatest emphasis. The other versions subordinate it, give it equal weight with popularity or tuck it into an opening phrase.",
    partNumber: 3,
    partTitle: "Syntax in Depth: Clauses, Balance, and Johnson's Letter to Lord Chesterfield, 1755",
  },
  {
    id: 'englang-diction-syntax-ent-3b',
    question: "Read the sentence below.\n\n*Not when the factory closed, not when the bank failed, not even when the school board voted to merge, but when the diner turned off its sign, the town knew it was over.*\n\nThe structure of the sentence primarily serves to",
    options: [
      "list the town's troubles in order of their cost",
      "hold the decisive event and its meaning for last",
      "show the writer cannot decide which event mattered",
      "suggest that the diner caused the other closings",
    ],
    correctIndex: 1,
    explanation: "The sentence delays its main clause behind a series of rejected moments, so the small, final event and what it meant land with full weight. The events are not ranked by cost, the writer is certain which one mattered and nothing says the diner caused the rest.",
    partNumber: 3,
    partTitle: "Syntax in Depth: Clauses, Balance, and Johnson's Letter to Lord Chesterfield, 1755",
  },

  // Part 4 — Punctuation, Repetition, and Sentence Shape: Thoreau's Walden, 1854
  {
    id: 'englang-diction-syntax-ent-4a',
    question: "Read the sentence below.\n\n*The new superintendent—the fourth in six years—promised the district a period of stability.*\n\nThe dashes around \"the fourth in six years\" chiefly serve to",
    options: [
      "play down a detail the writer considers unimportant",
      "mark the phrase as a quotation from the superintendent",
      "introduce a list of the earlier superintendents' names",
      "break in with a fact that makes the pledge ring hollow",
    ],
    correctIndex: 3,
    explanation: "Dashes break into the sentence and give the aside extra emphasis, and the rapid turnover it reports makes the promise of stability ironic. Parentheses would play the detail down; the dashes list no names and quote no one.",
    partNumber: 4,
    partTitle: "Punctuation, Repetition, and Sentence Shape: Thoreau's Walden, 1854",
  },
  {
    id: 'englang-diction-syntax-ent-4b',
    question: "Read the sentence below.\n\n*We waited for the bus, and waited, and waited, and checked the schedule, and waited.*\n\nThe repeated \"and\" chiefly serves to",
    options: [
      "speed the account toward its sudden climax",
      "make the wait feel as long as it was",
      "show the writer's confusion about the schedule",
      "rank the events in order of their importance",
    ],
    correctIndex: 1,
    explanation: "Joining every action with \"and\" slows the sentence and stretches it out, so its form imitates the tedium it describes. The sentence drags rather than speeds, shows boredom rather than confusion and ranks nothing.",
    partNumber: 4,
    partTitle: "Punctuation, Repetition, and Sentence Shape: Thoreau's Walden, 1854",
  },

  // Part 5 — Diction and Syntax Together: Older Meanings, Combined Effects, and Common Misreadings
  {
    id: 'englang-diction-syntax-ent-5a',
    question: "Read the sentence below, written in an older style.\n\n*The old surveyor kept a careful account of every acre, for he was a man of nice judgment who could tell a boundary stone from a fallen one at forty paces.*\n\nIn context, the word \"nice\" most nearly means",
    options: [
      "pleasant",
      "precise",
      "kind",
      "polite",
    ],
    correctIndex: 1,
    explanation: "A man who keeps careful accounts and can tell one stone from another at a distance has exact, discriminating judgment, the older sense of \"nice.\" The modern senses of pleasant, kind or polite do not fit the sentence's logic.",
    partNumber: 5,
    partTitle: "Diction and Syntax Together: Older Meanings, Combined Effects, and Common Misreadings",
  },
  {
    id: 'englang-diction-syntax-ent-5b',
    question: "Read the passage below.\n\n*The meeting ran three hours. Speakers argued over parking, budgets, the color of the new benches and whether the gazebo needed a second coat of paint. Nothing was decided. We went home.*\n\nA student claims that the last two short sentences \"create urgency.\" Which is the best correction?",
    options: [
      "They signal a tired letdown after so much trivial argument, not haste.",
      "The sentences are too short to carry any real meaning in the passage.",
      "The passage contains no short sentences, only long and complex ones.",
      "Short sentences always slow a passage down and so cannot be urgent.",
    ],
    correctIndex: 0,
    explanation: "After a long list of trivial disputes, the flat short sentences record that nothing came of it; their effect is deflation, not haste. Short sentences can carry great weight, the passage plainly has them, and no sentence length has a fixed effect.",
    partNumber: 5,
    partTitle: "Diction and Syntax Together: Older Meanings, Combined Effects, and Common Misreadings",
  },

  // Part 6 — Exam Practice: Wilson's War Message, April 2, 1917
  {
    id: 'englang-diction-syntax-ent-6a',
    question: "A resident tells the city council: *This is not a dispute about parking. It is a dispute about who this downtown is for.*\n\nThe change from \"a dispute about parking\" to \"a dispute about who this downtown is for\" chiefly",
    options: [
      "lifts a practical complaint into a question of belonging",
      "narrows the issue to the number of parking spaces available",
      "concedes that parking is the real issue at stake in the dispute",
      "shifts blame from the city to the owners of downtown shops",
    ],
    correctIndex: 0,
    explanation: "Repeating \"a dispute about\" and replacing \"parking\" with a question of who belongs downtown raises the stakes from logistics to community. The second sentence widens rather than narrows the issue, rejects parking as the real issue and blames no one.",
    partNumber: 6,
    partTitle: "Exam Practice: Wilson's War Message, April 2, 1917",
  },
  {
    id: 'englang-diction-syntax-ent-6b',
    question: "A superintendent writes: *It is a hard thing to close a school that has stood on this corner for ninety years. But a building is not an education.*\n\nThe word \"But\" and the short second sentence chiefly serve to",
    options: [
      "signal that the superintendent has changed sides on the closing",
      "introduce figures about the school's falling enrollment",
      "soften the first sentence's criticism of the old school building",
      "give the claim the final word after a cost has been granted",
    ],
    correctIndex: 3,
    explanation: "The first sentence concedes the pain of closing; \"But\" turns to the claim, and the short, plain sentence leaves it standing last. The superintendent keeps the position, gives no figures and was not criticizing the building in the first place.",
    partNumber: 6,
    partTitle: "Exam Practice: Wilson's War Message, April 2, 1917",
  },

  // Part 7 — Review: The Toolkit, the Method, and Mixed Practice
  {
    id: 'englang-diction-syntax-ent-7a',
    question: "In which sentence does the form most clearly imitate the meaning?",
    options: [
      "The committee approved the budget on Tuesday afternoon.",
      "Experts disagree about the long-term effects of the policy.",
      "The line moved slowly and slowly and then not at all.",
      "Our town has three parks, two libraries and one pool.",
    ],
    correctIndex: 2,
    explanation: "The repeated \"and slowly\" drags the sentence out and then stops it, just as the line slows and halts. The other sentences report facts in ordinary shapes that do not mirror their content.",
    partNumber: 7,
    partTitle: "Review: The Toolkit, the Method, and Mixed Practice",
  },
  {
    id: 'englang-diction-syntax-ent-7b',
    question: "A speaker at a public hearing ends: *We came for answers. We leave with a date.* Which sentence from a student's rhetorical analysis offers the strongest commentary on this ending?",
    options: [
      "The speaker ends with two short sentences, which help to create urgency.",
      "The matched sentences shrink what was promised into a mere calendar entry.",
      "The ending of the speech is very effective and memorable for the audience.",
      "The speaker uses parallel structure in the two sentences at the very end.",
    ],
    correctIndex: 1,
    explanation: "The strongest commentary explains how the matched structure works: the parallel sentences invite comparison, and the drop from \"answers\" to \"a date\" exposes the hearing's emptiness. The others assign a generic effect, praise vaguely or merely name the device.",
    partNumber: 7,
    partTitle: "Review: The Toolkit, the Method, and Mixed Practice",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Diction in Depth: Roosevelt's Revisions to the War Message, December 1941" },
    { partNumber: 3, partTitle: "Syntax in Depth: Clauses, Balance, and Johnson's Letter to Lord Chesterfield, 1755" },
    { partNumber: 4, partTitle: "Punctuation, Repetition, and Sentence Shape: Thoreau's Walden, 1854" },
    { partNumber: 5, partTitle: "Diction and Syntax Together: Older Meanings, Combined Effects, and Common Misreadings" },
    { partNumber: 6, partTitle: "Exam Practice: Wilson's War Message, April 2, 1917" },
    { partNumber: 7, partTitle: "Review: The Toolkit, the Method, and Mixed Practice" },
  ]
}
