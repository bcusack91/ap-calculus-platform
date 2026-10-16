/**
 * Entrance Quiz — The Synthesis Essay (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-synthesis-essay-ent-1a',
    question: "Which plan for a single body paragraph best fits a synthesis essay?",
    options: [
      "Claim, first source, commentary, second source, commentary, link to the thesis",
      "Summary of Source A, summary of Source B, summary of Source C, then a conclusion",
      "Quotation, second quotation, third quotation, and finally a sentence of claim",
      "Opening anecdote, restated thesis, early conclusion, then one source at the end",
    ],
    correctIndex: 0,
    explanation: "A synthesis paragraph leads with a claim and brings in sources only to support it, with commentary after each. The other plans summarize sources in turn, stack quotations without explanation or bury the evidence after the conclusion.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-synthesis-essay-ent-1b',
    question: "A student's synthesis essay argues that schools should restrict phones during class. Its final paragraph suddenly argues that cafeteria prices are too high. What is the main problem with this conclusion?",
    options: [
      "It is too short to summarize the essay's sources",
      "It quotes no sources in its final paragraph",
      "It adds an unrelated claim in place of implications",
      "It restates the thesis in words too close to the introduction",
    ],
    correctIndex: 2,
    explanation: "A conclusion should show what follows from the argument; a new, unrelated claim breaks the line of reasoning at the last moment. Length, citations and repetition are not the problem here.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — From Prompt to Position: Reading the Task and the Sources, Then Taking a Stand
  {
    id: 'englang-synthesis-essay-ent-2a',
    question: "During the fifteen-minute reading period, which question will best help a student move from the sources to a thesis?",
    options: [
      "What does each source say, taken in order from A to G?",
      "What do I think of the issue after hearing these voices?",
      "Which of the sources is the longest and most detailed?",
      "Which of the sources include charts, tables or statistics?",
    ],
    correctIndex: 1,
    explanation: "Asking what you think about the issue leads to an argument that uses the sources; asking what each source says leads to a tour of them. Length and format do not decide a position.",
    partNumber: 2,
    partTitle: "From Prompt to Position: Reading the Task and the Sources, Then Taking a Stand",
  },
  {
    id: 'englang-synthesis-essay-ent-2b',
    question: "A synthesis set on whether a town should ban gas-powered leaf blowers includes this source from a café owner: *I'd love the town to ban leaf blowers near my patio, but my landscaping crew tells me the electric ones cost twice as much and die by noon.* How is this source most useful to a writer?",
    options: [
      "It proves that most residents of the town oppose a ban on leaf blowers",
      "It should be left out, since it does not take one clear side on the issue",
      "It supplies battery-life data from a controlled, independent study",
      "It shows a tension within one voice that a nuanced thesis can explore",
    ],
    correctIndex: 3,
    explanation: "A source that pulls in two directions, wanting quiet while worrying about cost and practicality, gives a writer a ready-made complication to build on. One owner proves nothing about most residents, mixed sources are valuable rather than useless, and her crew's report is not a study.",
    partNumber: 2,
    partTitle: "From Prompt to Position: Reading the Task and the Sources, Then Taking a Stand",
  },

  // Part 3 — Planning and Drafting a Complete Essay: A Model Response, Annotated
  {
    id: 'englang-synthesis-essay-ent-3a',
    question: "A student's plan for a synthesis essay assigns six of the seven sources to her claims and leaves one out. Which reason best justifies leaving it out?",
    options: [
      "It supports nothing in the essay's argument",
      "The rubric forbids using more than four sources",
      "Unused sources earn extra credit for selectivity",
      "Every essay must leave out at least one source",
    ],
    correctIndex: 0,
    explanation: "A source earns its place only by supporting a claim, and the directions set a minimum of three, not a requirement to use them all. There is no maximum, no credit for omission and no rule requiring one.",
    partNumber: 3,
    partTitle: "Planning and Drafting a Complete Essay: A Model Response, Annotated",
  },
  {
    id: 'englang-synthesis-essay-ent-3b',
    question: "A student's synthesis essay will argue that her town should restrict gas leaf blowers rather than ban them outright. Which opening sentence best prepares the reader for this argument?",
    options: [
      "Since the dawn of time, people everywhere have taken pride in tending their own yards.",
      "In today's society, noise is a very important issue for nearly everyone who lives in a town.",
      "When a landscaper said an electric blower dies by noon, the ban stopped looking simple.",
      "This essay will discuss each of the sources about leaf blowers, one at a time and in order.",
    ],
    correctIndex: 2,
    explanation: "A concrete detail that already contains the tension sets up a position of degree. The others are generic, state a truism or announce a tour of the sources.",
    partNumber: 3,
    partTitle: "Planning and Drafting a Complete Essay: A Model Response, Annotated",
  },

  // Part 4 — Arguing With and Against the Sources: Counter-Sources, Whole Positions, and Fair Use
  {
    id: 'englang-synthesis-essay-ent-4a',
    question: "A writer arguing for a leaf-blower ban faces a counter-source: a 1974 study finding that yard equipment caused few noise complaints. Which response dismisses the study rather than refuting it?",
    options: [
      "The study measured older engines, so its noise levels may not match today's",
      "The study is from 1974, so it is simply irrelevant to us now",
      "The study surveyed one city, so its results may not transfer to this town",
      "The study counted complaints but not health effects, which are the issue",
    ],
    correctIndex: 1,
    explanation: "Calling a source old does not show that its reasoning or evidence fails, so the response dismisses rather than answers it. The others each name a specific limit a reader can weigh.",
    partNumber: 4,
    partTitle: "Arguing With and Against the Sources: Counter-Sources, Whole Positions, and Fair Use",
  },
  {
    id: 'englang-synthesis-essay-ent-4b',
    question: "In the leaf-blower set, a landscaping trade group writes: *A ban would hurt small businesses, which cannot replace their equipment overnight.* A writer who favors a ban wants to reframe this source accurately. Which sentence does so?",
    options: [
      "The trade group admits that leaf blowers damage its workers' hearing.",
      "The trade group supports banning gas leaf blowers starting at once.",
      "The trade group's real worry is the timing, and a phased ban answers it.",
      "The trade group says that small businesses rarely use leaf blowers.",
    ],
    correctIndex: 2,
    explanation: "The group objects to replacing equipment \"overnight,\" so a writer can accurately turn that concern toward a gradual ban. The other sentences attribute claims the source never makes.",
    partNumber: 4,
    partTitle: "Arguing With and Against the Sources: Counter-Sources, Whole Positions, and Fair Use",
  },

  // Part 5 — Earning Row C in the Synthesis Essay, and the Myths That Cost Points
  {
    id: 'englang-synthesis-essay-ent-5a',
    question: "Which paragraph plan is most likely to contribute to the sophistication point in a synthesis essay on leaf blowers?",
    options: [
      "Open with \"In a world where noise is everywhere\" to set the scene",
      "Add one sentence noting that some people may disagree with the ban",
      "Show that two sources favoring a ban mean different things by \"quiet\"",
      "Use advanced, formal vocabulary in every sentence of the paragraph",
    ],
    correctIndex: 2,
    explanation: "Exploring how sources on the same side disagree about a key term is a tension across the sources, one route to Row C. Sweeping openings, token nods to disagreement and big words do not show complex thinking.",
    partNumber: 5,
    partTitle: "Earning Row C in the Synthesis Essay, and the Myths That Cost Points",
  },
  {
    id: 'englang-synthesis-essay-ent-5b',
    question: "A student plans to cite all seven sources in her synthesis essay \"to show I read them.\" Which advice is most accurate?",
    options: [
      "Cite all seven, since readers reward broad coverage of the source set",
      "Cite only three, since using more sources lowers the Row B score",
      "Cite only the visual source, since data always outweighs prose",
      "Cite only the sources that support a claim and treat three as the floor",
    ],
    correctIndex: 3,
    explanation: "The directions require at least three sources, and each one should earn its place by supporting a claim. Coverage is not rewarded for its own sake, more sources do not lower a score and no source type outranks the others.",
    partNumber: 5,
    partTitle: "Earning Row C in the Synthesis Essay, and the Myths That Cost Points",
  },

  // Part 6 — Timed Practice: A Seven-Source Set on Preserving Old Buildings
  {
    id: 'englang-synthesis-essay-ent-6a',
    question: "A synthesis response quotes three sources that agree with one another and then mentions, without answering it, a source that disagrees. Its Row B score is most likely limited because",
    options: [
      "it uses more sources than the essay's time allows",
      "its sources sit side by side, not in a reasoned line",
      "it quotes sources that are older than the prompt itself",
      "it mentions a source that disagrees, which costs points",
    ],
    correctIndex: 1,
    explanation: "Higher Row B scores require specific evidence supporting every claim in a line of reasoning, and lined-up sources with an unanswered objection do not build one. Opposing sources are welcome, and age and number are not the issue.",
    partNumber: 6,
    partTitle: "Timed Practice: A Seven-Source Set on Preserving Old Buildings",
  },
  {
    id: 'englang-synthesis-essay-ent-6b',
    question: "A draft sentence in a leaf-blower essay reads: \"The trade group opposes the ban, but it is biased.\" Which revision answers the trade group rather than dismissing it?",
    options: [
      "The trade group opposes the ban, but of course it would say that.",
      "The trade group opposes the ban, but no one else agrees with it.",
      "The trade group opposes the ban, but it is only a single group.",
      "The group fears sudden costs, and a two-year phase-in would ease them.",
    ],
    correctIndex: 3,
    explanation: "The revision engages the group's actual concern and offers a response to it. The others dismiss the source because of its motive, an unsupported claim about agreement or its size.",
    partNumber: 6,
    partTitle: "Timed Practice: A Seven-Source Set on Preserving Old Buildings",
  },

  // Part 7 — Synthesis Review: The Whole Essay, From Reading Period to Final Check
  {
    id: 'englang-synthesis-essay-ent-7a',
    question: "A writer arguing that leaf-blower bans reduce noise complaints finds a table showing that complaints fell in one town in the year after its ban. What should the writer do with this source?",
    options: [
      "Report the drop, noting one town in one year cannot prove a cause",
      "Leave the table out, since data sources are optional and risky",
      "Claim that the table proves bans end noise complaints everywhere",
      "Quote every row of the table so the reader can see all of the data",
    ],
    correctIndex: 0,
    explanation: "A careful writer states what the figures show and how far they can go. Claiming universal proof overreaches, dropping useful evidence wastes it and quoting every row crowds out commentary.",
    partNumber: 7,
    partTitle: "Synthesis Review: The Whole Essay, From Reading Period to Final Check",
  },
  {
    id: 'englang-synthesis-essay-ent-7b',
    question: "Before submitting, a student asks of each source she used: \"Would its author recognize the position I attributed to them?\" This check mainly guards against",
    options: [
      "misrepresenting a source",
      "using fewer than three sources",
      "writing a thesis that restates the prompt",
      "ending the essay without any conclusion",
    ],
    correctIndex: 0,
    explanation: "The question tests whether each source is represented fairly, so it catches misreadings and distortions. It does not count sources, check the thesis or check the conclusion.",
    partNumber: 7,
    partTitle: "Synthesis Review: The Whole Essay, From Reading Period to Final Check",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "From Prompt to Position: Reading the Task and the Sources, Then Taking a Stand" },
    { partNumber: 3, partTitle: "Planning and Drafting a Complete Essay: A Model Response, Annotated" },
    { partNumber: 4, partTitle: "Arguing With and Against the Sources: Counter-Sources, Whole Positions, and Fair Use" },
    { partNumber: 5, partTitle: "Earning Row C in the Synthesis Essay, and the Myths That Cost Points" },
    { partNumber: 6, partTitle: "Timed Practice: A Seven-Source Set on Preserving Old Buildings" },
    { partNumber: 7, partTitle: "Synthesis Review: The Whole Essay, From Reading Period to Final Check" },
  ]
}
