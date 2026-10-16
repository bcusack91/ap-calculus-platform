/**
 * Entrance Quiz — Reasoning and Organization in Writing (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-reasoning-org-writing-ent-1a',
    question: "A body paragraph's topic sentence claims that later school start times improve attendance, but most of its sentences describe how teenagers' sleep cycles shift during adolescence. Which revision would best restore the paragraph's focus?",
    options: [
      "Add two more facts about adolescent sleep to the middle of the paragraph",
      "Move the whole paragraph to the end of the essay, just before the conclusion",
      "Explain how each fact about sleep makes students more likely to show up",
      "Replace the topic sentence with a question about whether teens sleep enough",
    ],
    correctIndex: 2,
    explanation: "The sleep facts are relevant only if the paragraph shows how they produce better attendance, so linking each one to the claim restores the paragraph's job. More facts deepen the drift, moving the paragraph changes nothing, and a question gives up the claim.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-reasoning-org-writing-ent-1b',
    question: "A student's essay argues that the town library should stay open until 9 p.m. on weekdays. Which conclusion best moves beyond summary to state what is at stake?",
    options: [
      "In conclusion, libraries should stay open in the evenings, as this essay has argued.",
      "Libraries have existed for thousands of years in many cultures around the world.",
      "A library that shuts at five shuts out everyone whose workday runs past five.",
      "There are many reasons, both large and small, to keep libraries open later.",
    ],
    correctIndex: 2,
    explanation: "The strong conclusion draws out the consequence of the current hours for working residents, which is what the argument implies. The others restate the thesis, drift into history or gesture vaguely at reasons.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Planning a Line of Reasoning
  {
    id: 'englang-reasoning-org-writing-ent-2a',
    question: "Which plan for an essay on school uniforms is a line of reasoning rather than a list?",
    options: [
      "Uniforms save families money; they look neat; they build school spirit.",
      "Uniforms hide income gaps, so teasing about clothes fades, so students focus.",
      "Uniforms are common in Europe, in Asia, and in many private schools in this country.",
      "Uniforms, dress codes, and free dress each have strengths, weaknesses, and supporters.",
    ],
    correctIndex: 1,
    explanation: "Each claim in the uniform-to-classroom plan depends on the one before it, so the order carries meaning. The money-neatness-spirit plan sets parallel reasons side by side, and the last two survey facts or options without building an argument.",
    partNumber: 2,
    partTitle: "Planning a Line of Reasoning",
  },
  {
    id: 'englang-reasoning-org-writing-ent-2b',
    question: "A student's readers strongly oppose her position on a new town curfew, and one objection, that the curfew punishes teenagers who work late shifts, dominates their thinking. Which order of claims best fits this situation?",
    options: [
      "Save her strongest claim for last and leave the objection for the conclusion",
      "Move from one teenager's story outward to the policy of the whole town",
      "List her reasons in the order in which they occurred to her while planning",
      "Answer the objection about late jobs first, then build on that cleared ground",
    ],
    correctIndex: 3,
    explanation: "A skeptical audience held by one objection will not weigh other claims until that objection is answered, so concession-first order fits. Leaving the objection to the end, widening from one story or listing reasons as they came to mind ignores what these readers need first.",
    partNumber: 2,
    partTitle: "Planning a Line of Reasoning",
  },

  // Part 3 — Methods of Development in Your Essays
  {
    id: 'englang-reasoning-org-writing-ent-3a',
    question: "A student's claim reads: \"Real leadership is measured by what a group can still do after the leader leaves.\" Which method of development does this claim most directly call for?",
    options: [
      "Definition, setting the boundary of a key term",
      "Comparison of two schools' leadership programs",
      "Narration of one team's season from start to end",
      "Division of leaders into three personality types",
    ],
    correctIndex: 0,
    explanation: "The claim says what true leadership is, so the paragraph must define the term and show where its boundary lies. Comparing programs, narrating a season or sorting leaders into types never pins down the term.",
    partNumber: 3,
    partTitle: "Methods of Development in Your Essays",
  },
  {
    id: 'englang-reasoning-org-writing-ent-3b',
    question: "A student claims that part-time jobs teach teenagers to manage money because a paycheck makes spending choices real. Her draft paragraph defines \"part-time job\" and then lists kinds of jobs teenagers hold. Which revision best fits the method to the claim?",
    options: [
      "Add more kinds of part-time jobs so that the list is complete",
      "Replace the definition with a dictionary entry for the word \"job\"",
      "Add a story about a teenager's first day at work with no commentary",
      "Trace step by step how a first wage alters what a teenager decides to buy",
    ],
    correctIndex: 3,
    explanation: "The claim is causal, so the paragraph must show the chain from paycheck to better spending choices. A longer list, a dictionary entry or a story left unexplained never shows the cause at work.",
    partNumber: 3,
    partTitle: "Methods of Development in Your Essays",
  },

  // Part 4 — Transitions and Coherence
  {
    id: 'englang-reasoning-org-writing-ent-4a',
    question: "*The town planted oak trees along both sides of Main Street. ________, summer afternoons on the street are now several degrees cooler than on the treeless blocks nearby.*\n\nWhich transition best fits the blank?",
    options: [
      "As a result",
      "Nevertheless",
      "For instance",
      "In the same way",
    ],
    correctIndex: 0,
    explanation: "The cooler street follows from the planting, so the relationship is cause and effect. \"Nevertheless\" claims a contrast, \"For instance\" an example and \"In the same way\" a likeness that the sentences do not have.",
    partNumber: 4,
    partTitle: "Transitions and Coherence",
  },
  {
    id: 'englang-reasoning-org-writing-ent-4b',
    question: "In a rhetorical analysis, a student quotes a mayor's promise to \"walk every block of this ward before I vote on a single budget line\" and then writes, \"This shows the mayor cares.\" Which revision best improves the coherence of the student's sentence?",
    options: [
      "This shows that the mayor really does care a great deal about residents.",
      "All of this shows that the mayor cares about many things in the ward.",
      "In conclusion, this shows that the mayor cares about the people there.",
      "The mayor's pledge to tour the ward on foot shows she means to listen first.",
    ],
    correctIndex: 3,
    explanation: "Naming what \"this\" refers to (the promise) and saying precisely what it shows ties the commentary to the quotation. The other revisions keep the vague reference and the generic claim.",
    partNumber: 4,
    partTitle: "Transitions and Coherence",
  },

  // Part 5 — Commentary Across Paragraphs, Misconceptions, and Row C
  {
    id: 'englang-reasoning-org-writing-ent-5a',
    question: "A student's first body paragraph shows that homework helps when it drills a specific skill. Her next paragraph will argue that busywork does the opposite. Which exit sentence best carries the line of reasoning from the first paragraph to the second?",
    options: [
      "Homework, in short, can be helpful for students in a great many cases.",
      "If focused practice pays off, what does pointless work do to students?",
      "Many teachers in our school assign homework on every night of the week.",
      "This shows that homework is good for students, as I said in my thesis.",
    ],
    correctIndex: 1,
    explanation: "The exit sentence states what the paragraph established and raises the question the next paragraph will answer. The others restate the thesis, add an unrelated fact or summarize without pointing ahead.",
    partNumber: 5,
    partTitle: "Commentary Across Paragraphs, Misconceptions, and Row C",
  },
  {
    id: 'englang-reasoning-org-writing-ent-5b',
    question: "To make her essay more coherent, a student adds \"Furthermore\" to the start of every body paragraph without changing anything else. What is the main problem with this revision?",
    options: [
      "\"Furthermore\" is too informal a word to use in an AP essay",
      "A transition names a relation but cannot connect unrelated claims",
      "Transitions belong only in the conclusion of an argument essay",
      "Readers prefer body paragraphs that open with a quotation instead",
    ],
    correctIndex: 1,
    explanation: "A transition is a claim about how ideas relate; if the paragraphs do not build on one another, \"Furthermore\" only labels a list. The word is not informal, transitions belong throughout an essay, and no rule favors opening with quotations.",
    partNumber: 5,
    partTitle: "Commentary Across Paragraphs, Misconceptions, and Row C",
  },

  // Part 6 — Exam Practice: Writing Questions and an Annotated Essay
  {
    id: 'englang-reasoning-org-writing-ent-6a',
    question: "*(1) Thirty years ago, the river through our town was too polluted for swimming. (2) A group of residents began testing the water every Saturday morning. (3) They posted their results on the bulletin board at the public library. (4) Within two years, the county traced the pollution to a broken pipe at a factory upstream. (5) Today the river hosts a summer swim race.*\n\nThe writer wants to add this sentence: \"Soon reporters at the weekly paper began citing the posted numbers.\" Where would it best be placed?",
    options: [
      "Before sentence 1",
      "After sentence 1",
      "After sentence 3",
      "After sentence 5",
    ],
    correctIndex: 2,
    explanation: "The new sentence refers to \"the posted numbers,\" so it must follow the posting in sentence 3, and it explains how the results reached the county before sentence 4. Anywhere earlier the numbers do not yet exist, and after sentence 5 the story has ended.",
    partNumber: 6,
    partTitle: "Exam Practice: Writing Questions and an Annotated Essay",
  },
  {
    id: 'englang-reasoning-org-writing-ent-6b',
    question: "*(1) Thirty years ago, the river through our town was too polluted for swimming. (2) A group of residents began testing the water every Saturday morning. (3) They posted their results on the bulletin board at the public library. (4) The library's brick building was paid for by a local merchant. (5) Within two years, the county traced the pollution to a broken pipe at a factory upstream. (6) Today the river hosts a summer swim race.*\n\nWhich sentence should be deleted because it interrupts the paragraph's focus?",
    options: [
      "Sentence 2",
      "Sentence 3",
      "Sentence 4",
      "Sentence 5",
    ],
    correctIndex: 2,
    explanation: "The paragraph traces how residents' testing led to a cleaner river, and the history of the library building plays no part in that sequence. Sentences 2, 3 and 5 are steps in the story.",
    partNumber: 6,
    partTitle: "Exam Practice: Writing Questions and an Annotated Essay",
  },

  // Part 7 — Review: Planning, Developing and Connecting an Argument
  {
    id: 'englang-reasoning-org-writing-ent-7a',
    question: "In her last three minutes, a student reads only the first sentence of each body paragraph: \"Another reason is cost.\" \"Also, there is safety.\" \"A third reason is fairness.\" Which quick fix would most help her essay?",
    options: [
      "Rewrite each opener to say how its claim follows the last",
      "Move her thesis from the introduction to the conclusion",
      "Replace \"Another\" and \"Also\" with \"Furthermore\" and \"Moreover\"",
      "Add a famous quotation at the start of each of the body paragraphs",
    ],
    correctIndex: 0,
    explanation: "Openers that only count reasons hide how the claims connect; a bridge clause names the relationship so the reader can follow the line. Fancier counting words, a relocated thesis or added quotations leave the claims unconnected.",
    partNumber: 7,
    partTitle: "Review: Planning, Developing and Connecting an Argument",
  },
  {
    id: 'englang-reasoning-org-writing-ent-7b',
    question: "A student's first body paragraph shows that a proposed neighborhood park would cool the surrounding blocks during summer heat waves. Her second paragraph begins, \"Another reason is that the park is important.\" Which revision makes the best bridge topic sentence?",
    options: [
      "Another important reason is that the park would help the town in many ways.",
      "If the park cools the street in July, it would also bring residents outdoors together.",
      "Secondly, the park is also important for several other reasons as well.",
      "The park site was once a rail yard, which closed many decades ago.",
    ],
    correctIndex: 1,
    explanation: "The bridge names the idea just finished (cooling) and the new one (bringing neighbors together) and links them. The other openers count reasons, stay vague or drift into history.",
    partNumber: 7,
    partTitle: "Review: Planning, Developing and Connecting an Argument",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Planning a Line of Reasoning" },
    { partNumber: 3, partTitle: "Methods of Development in Your Essays" },
    { partNumber: 4, partTitle: "Transitions and Coherence" },
    { partNumber: 5, partTitle: "Commentary Across Paragraphs, Misconceptions, and Row C" },
    { partNumber: 6, partTitle: "Exam Practice: Writing Questions and an Annotated Essay" },
    { partNumber: 7, partTitle: "Review: Planning, Developing and Connecting an Argument" },
  ]
}
