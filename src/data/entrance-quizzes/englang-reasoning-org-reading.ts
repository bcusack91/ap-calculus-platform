/**
 * Entrance Quiz — Reasoning and Organization in Reading (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-reasoning-org-reading-ent-1a',
    question: "An editorial has three paragraphs. The first reports that flood damage in a riverside town has tripled in a decade. The second explains that new parking lots now send rainwater straight into the river instead of letting it soak into the ground. The third urges the town to require porous pavement and rain gardens. The editorial is organized primarily as",
    options: [
      "a problem, the cause behind it and a proposed remedy",
      "a claim, a concession to critics and then a rebuttal",
      "a series of town events told in the order they happened",
      "a comparison of two towns and their flood policies",
    ],
    correctIndex: 0,
    explanation: "The paragraphs move from the damage, to why it is happening, to what should be done, which is problem, cause and solution. No opposing view is conceded, the paragraphs are not a chronology and only one town is discussed.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-reasoning-org-reading-ent-1b',
    question: "Read the passage below.\n\n*(1) Many readers assume that public libraries are emptying as books go digital. (2) Yet visits to our branch rose last year. (3) The new visitors came less for books than for the free study rooms, the printers and the help with job applications.*\n\nSentence 2 functions primarily to",
    options: [
      "provide background on the history of the library branch",
      "dispute the opening belief with a fact",
      "concede that most reading has moved online",
      "introduce the writer's own reasons for visiting",
    ],
    correctIndex: 1,
    explanation: "\"Yet\" turns against the assumption in sentence 1 with a fact that contradicts it, and sentence 3 then explains the fact. The sentence gives no history, concedes nothing and says nothing about the writer's visits.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Line of Reasoning in Depth: Federalist No. 10
  {
    id: 'englang-reasoning-org-reading-ent-2a',
    question: "Read the passage below.\n\n*The town can meet its growing need for water in only three ways: build a reservoir, buy water from the city or use less. A reservoir would flood the valley farms that feed us. The city's price has doubled every decade. We are left, then, with using less.*\n\nWhich of the following, if true, would most weaken the support the reasoning gives to its conclusion?",
    options: [
      "Some residents of the town have never visited the valley farms.",
      "The city also sells its water to several other nearby towns.",
      "A fourth workable option exists, such as reusing treated wastewater on fields.",
      "The town's population has grown steadily over the past decade.",
    ],
    correctIndex: 2,
    explanation: "The argument rules out options until one is left, so it works only if the three options are the only ones; a fourth workable option breaks the chain. The other facts do not touch any step of the elimination.",
    partNumber: 2,
    partTitle: "Line of Reasoning in Depth: Federalist No. 10",
  },
  {
    id: 'englang-reasoning-org-reading-ent-2b',
    question: "A writer describes five rural towns that lost their only grocery store and then saw residents' health decline. She concludes that every town needs a grocery store within reach of its residents. This line of reasoning is best described as",
    options: [
      "deductive, applying a general rule to one particular town",
      "concessive, granting an opposing point before rebutting it",
      "circular, assuming the conclusion within its own premises",
      "inductive, moving from several cases to a general claim",
    ],
    correctIndex: 3,
    explanation: "The writer gathers specific cases first and then draws a general conclusion from them, which is inductive arrangement. She starts from no general rule, grants no opposing point and does not assume what she concludes.",
    partNumber: 2,
    partTitle: "Line of Reasoning in Depth: Federalist No. 10",
  },

  // Part 3 — Methods of Development: Washington, Paine and Bacon
  {
    id: 'englang-reasoning-org-reading-ent-3a',
    question: "Read the sentence below.\n\n*A city is not a machine that runs smoothly once its parts are oiled; it is a garden, which grows whether or not anyone tends it and grows wild when no one does.*\n\nThe sentence develops its claim primarily through",
    options: [
      "a narrative of how the city was founded and how it first grew",
      "an analogy that casts the city as a living thing needing care",
      "a definition of the word \"city\" taken from a legal code",
      "a cause-effect account of how machines replaced gardeners",
    ],
    correctIndex: 1,
    explanation: "The sentence rejects one comparison (a machine) for another (a garden), so that a city appears to need ongoing care. It tells no story, gives no formal definition and traces no history of machines.",
    partNumber: 3,
    partTitle: "Methods of Development: Washington, Paine and Bacon",
  },
  {
    id: 'englang-reasoning-org-reading-ent-3b',
    question: "Read the passage below.\n\n*When my grandfather's barn burned, the neighbors had a new frame standing in four days, and not one of them sent a bill. Our town council has now spent a month arguing over who should pay to fix a single culvert.*\n\nThe story of the barn functions mainly to",
    options: [
      "describe the building methods of an earlier generation",
      "set a past measure that makes the present look small",
      "explain what caused the fire that destroyed the barn",
      "define what the writer means by a neighbor's duties",
    ],
    correctIndex: 1,
    explanation: "Narration supplies a measure, quick unpaid help, and the next sentence holds the council's delay against it. The story says nothing about methods or the fire's cause, and it illustrates rather than defines.",
    partNumber: 3,
    partTitle: "Methods of Development: Washington, Paine and Bacon",
  },

  // Part 4 — Unity, Coherence and Transitions: Federalist No. 51 and Mill
  {
    id: 'englang-reasoning-org-reading-ent-4a',
    question: "Read the passage below.\n\n*Suppose the new highway does save commuters ten minutes. Suppose, further, that it brings the downtown shops all the traffic its backers promise. Grant even that the noise will be less than we fear. It would still cut the east side off from the only park it has.*\n\nThe sequence \"Suppose... Suppose, further... Grant even\" serves primarily to",
    options: [
      "show that the writer cannot decide how to judge the highway",
      "allow the other side more each time and answer it anyway",
      "list three facts that the writer has personally verified",
      "concede that the highway should be built despite the park",
    ],
    correctIndex: 1,
    explanation: "Each step grants the backers a stronger case, and the last sentence shows the objection survives all of it. The writer is not undecided, verifies nothing and never concedes that the highway should be built.",
    partNumber: 4,
    partTitle: "Unity, Coherence and Transitions: Federalist No. 51 and Mill",
  },
  {
    id: 'englang-reasoning-org-reading-ent-4b',
    question: "Read the passage below.\n\n*We were promised a quiet street. The quiet lasted until the first delivery trucks arrived at dawn. Soon the quiet became a joke the neighbors told at block parties, and now the word appears only on the developer's signs.*\n\nThe repetition of \"quiet\" contributes chiefly to",
    options: [
      "a shift from the writer's own view to the view of a neighbor",
      "a list of the other promises the developer failed to keep",
      "evidence that the delivery trucks have since been rerouted",
      "the unity of an account tracing one broken promise from start to end",
    ],
    correctIndex: 3,
    explanation: "Each sentence returns to the same word, so the passage follows a single promise from offer to empty slogan. The voice stays the writer's, no other promises are listed and nothing suggests the trucks were rerouted.",
    partNumber: 4,
    partTitle: "Unity, Coherence and Transitions: Federalist No. 51 and Mill",
  },

  // Part 5 — Nuance and Misconceptions: Patrick Henry, 1775
  {
    id: 'englang-reasoning-org-reading-ent-5a',
    question: "Read the passage below.\n\n*Should a town that spent forty thousand dollars on fireworks last summer tell its teachers there is no money for books? Should a council that found room in its budget for a new scoreboard tell the library it found nothing?*\n\nThe questions in the passage serve primarily to",
    options: [
      "request budget figures from members of the council",
      "admit that the writer is unsure how money is spent",
      "expose the council's priorities through pointed contrasts",
      "praise the town for its generous summer celebrations",
    ],
    correctIndex: 2,
    explanation: "Each question sets a spending choice beside a refusal, so the answer the writer expects is an obvious no, and the council's priorities stand exposed. The questions are rhetorical, the writer clearly knows the figures and the fireworks are criticized, not praised.",
    partNumber: 5,
    partTitle: "Nuance and Misconceptions: Patrick Henry, 1775",
  },
  {
    id: 'englang-reasoning-org-reading-ent-5b',
    question: "Read the passage below.\n\n*(1) For thirty years the mill whistle told this town when to wake, when to eat and when to sleep. (2) We set our clocks by it and our lives around it. (3) Last spring the whistle blew for the last time. (4) Now we must learn to keep our own time.*\n\nSentence 4 marks a shift from",
    options: [
      "remembering the past to facing what must change now",
      "the writer's view to the view held by the mill's owners",
      "praise of the old mill to an attack on its former owners",
      "a description of the town to a set of employment figures",
    ],
    correctIndex: 0,
    explanation: "The first three sentences recall how the whistle ordered life and how it ended; the last turns to the present task that loss creates. The voice stays the writer's, no owners are attacked and no figures appear.",
    partNumber: 5,
    partTitle: "Nuance and Misconceptions: Patrick Henry, 1775",
  },

  // Part 6 — Exam Practice: A Passage Set and a Model Analysis
  {
    id: 'englang-reasoning-org-reading-ent-6a',
    question: "Read the passage below.\n\n*Some argue that because the old rail line once carried the town's prosperity, reopening it will bring prosperity back. But a road that served the horse need not serve the truck. And in truth the line never carried much prosperity at all; the town grew rich on the river, not on the rails.*\n\nThe final sentence functions mainly to",
    options: [
      "withdraw the horse-and-truck comparison as unfair to opponents",
      "summarize the argument before the writer turns to a new topic",
      "deny the premise the writer had let stand until then",
      "concede that reopening the rail line might still help the town",
    ],
    correctIndex: 2,
    explanation: "The writer first argues that even a true premise would not support the conclusion, then denies the premise itself: the rails were never the source of prosperity. The comparison is not withdrawn, nothing is summarized and nothing is conceded.",
    partNumber: 6,
    partTitle: "Exam Practice: A Passage Set and a Model Analysis",
  },
  {
    id: 'englang-reasoning-org-reading-ent-6b',
    question: "An essay about farm closures opens with one family's last harvest and only later gives statewide figures. Which sentence from a student's rhetorical analysis best explains why the writer arranges the evidence this way?",
    options: [
      "The writer uses both a personal story and a set of statistics in the essay.",
      "The statistics in the later paragraphs are persuasive because they are precise.",
      "The opening story is about a family that loses the farm it has worked for years.",
      "With the story first, readers feel the loss before the numbers can shrink it into a statistic.",
    ],
    correctIndex: 3,
    explanation: "The strong sentence explains the effect of the order itself: the story makes the loss felt so the figures cannot make it abstract. The others list the evidence, praise one piece of it or summarize the story.",
    partNumber: 6,
    partTitle: "Exam Practice: A Passage Set and a Model Analysis",
  },

  // Part 7 — Review: Reading for Structure
  {
    id: 'englang-reasoning-org-reading-ent-7a',
    question: "A passage states that any law nobody enforces teaches contempt for law, notes that the city's ban on sidewalk parking has not been enforced in years, and concludes that the ban should be either enforced or repealed. Its organization is best described as",
    options: [
      "deductive, moving from a general rule to one case",
      "inductive, moving from many cases to a rule",
      "chronological, tracing the ban's history year by year",
      "narrative, building to a lesson from a personal story",
    ],
    correctIndex: 0,
    explanation: "The passage begins with a general principle and applies it to one law, which is deductive arrangement. It does not gather cases, trace a history or tell a story.",
    partNumber: 7,
    partTitle: "Review: Reading for Structure",
  },
  {
    id: 'englang-reasoning-org-reading-ent-7b',
    question: "Paragraph 2 of an essay claims that most residents support the town's new park. Paragraph 3 begins: *Support, though, is not the same as use: the survey's own figures show that fewer than one resident in ten visited the park last year.*\n\nParagraph 3 relates to paragraph 2 primarily by",
    options: [
      "narrowing what the earlier claim is able to show",
      "adding more evidence in support of the same claim",
      "restating the earlier claim in different words",
      "turning to a subject unrelated to the park",
    ],
    correctIndex: 0,
    explanation: "Paragraph 3 accepts the support figures but limits what they prove, separating approval from use. It does not support, repeat or abandon the earlier claim.",
    partNumber: 7,
    partTitle: "Review: Reading for Structure",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Line of Reasoning in Depth: Federalist No. 10" },
    { partNumber: 3, partTitle: "Methods of Development: Washington, Paine and Bacon" },
    { partNumber: 4, partTitle: "Unity, Coherence and Transitions: Federalist No. 51 and Mill" },
    { partNumber: 5, partTitle: "Nuance and Misconceptions: Patrick Henry, 1775" },
    { partNumber: 6, partTitle: "Exam Practice: A Passage Set and a Model Analysis" },
    { partNumber: 7, partTitle: "Review: Reading for Structure" },
  ]
}
