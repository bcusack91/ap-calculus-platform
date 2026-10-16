/**
 * Entrance Quiz — Ethos, Pathos, and Logos (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-ethos-pathos-logos-ent-1a',
    question: "From a coach's letter to the school board:\n\n*I have coached this team for eleven seasons. Last fall, two of my players collapsed from heat on a field with no shade and no water fountain. The district's own survey found that the field reaches 104 degrees by three o'clock. Before another player falls, fund the shade structure.*\n\nWhich statement best describes how the letter persuades?",
    options: [
      "Experience, a vivid incident and data reinforce one urgent request",
      "It rests only on the coach's authority and offers no real evidence",
      "Its statistic carries the case, and the story is mere decoration",
      "Its emotional story stands alone, with nothing else to support it",
    ],
    correctIndex: 0,
    explanation: "Eleven seasons of coaching give the writer standing, the collapsed players make the danger felt, and the survey supplies proof; each strengthens the others. The letter does offer evidence, and neither the figure nor the story works alone.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-ethos-pathos-logos-ent-1b',
    question: "A hospital's report to the public on its new children's wing is twenty pages of budgets and bed counts, with no mention of any patient or family. The chief risk of this approach is that readers will",
    options: [
      "feel that their emotions are being worked on",
      "doubt that the figures in the report are accurate",
      "find the case for the wing hard to care about",
      "think the hospital is boasting of credentials",
    ],
    correctIndex: 2,
    explanation: "Figures without any human picture can inform readers while leaving them unmoved, since nothing shows who the wing will serve. The report makes no emotional appeal, gives no reason to doubt its numbers and mentions no credentials.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes
  {
    id: 'englang-ethos-pathos-logos-ent-2a',
    question: "A chemist testifying before a state committee about a pesticide her own company makes begins: *I helped develop this compound, and I was proud of it. I am here because I can no longer stand behind it.*\n\nThis opening chiefly builds the chemist's credibility by",
    options: [
      "showing that she speaks against her own interest and so is sincere",
      "listing technical credentials that will impress the committee",
      "flattering the committee members' judgment on scientific matters",
      "borrowing the reputation of a famous colleague who agrees with her",
    ],
    correctIndex: 0,
    explanation: "Criticizing her own work and employer rules out a selfish motive, which builds good character; her role in developing the compound also shows knowledge. She lists no credentials, flatters no one and cites no colleague.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'englang-ethos-pathos-logos-ent-2b',
    question: "An inspector general begins her report: *I did not seek this assignment, and I will not pretend to enjoy what this report requires me to say about the agency I have served for twenty years.*\n\nExpressing reluctance chiefly serves to",
    options: [
      "admit that her report contains claims she could not verify",
      "signal that she plans to resign before the report is released",
      "appeal to readers' pity for the difficulties of her position",
      "answer the suspicion that she likes attacking her employer",
    ],
    correctIndex: 3,
    explanation: "A writer who takes no pleasure in criticism cannot easily be dismissed as hostile or sensational, and twenty years of service shows loyalty rather than grudge. The sentence admits no gaps, announces no resignation and asks for credibility, not pity.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples
  {
    id: 'englang-ethos-pathos-logos-ent-3a',
    question: "A news story about a factory fire first reported that \"forty-one workers died.\" A revised version gives the names and ages of the first three victims and then adds \"and thirty-eight others.\" The revision most strengthens the story's emotional appeal by",
    options: [
      "turning a number into particular people whom readers can mourn",
      "adding precision that makes the death toll easier to verify",
      "establishing the newspaper's expertise on industrial safety",
      "softening the tragedy for readers who might find it upsetting",
    ],
    correctIndex: 0,
    explanation: "Names and ages make the dead individuals, which moves readers in a way a total cannot; \"thirty-eight others\" then makes the scale personal too. The count is the same, no expertise is claimed and the revision intensifies rather than softens the loss.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'englang-ethos-pathos-logos-ent-3b',
    question: "After a fire destroyed a town's only library, the mayor told residents: *Tonight we grieve for what we lost. Tomorrow we start collecting books, one box at a time, until every shelf is full again.*\n\nThe mayor's chief emotional purpose is to",
    options: [
      "deepen residents' anger at whoever caused the fire",
      "turn shared grief into shared resolve",
      "convince residents the fire could not have been prevented",
      "distract residents from the loss by discussing the budget",
    ],
    correctIndex: 1,
    explanation: "The mayor first honors the grief (\"Tonight we grieve\") and then gives it a direction, a common project, so sorrow becomes determination. He stirs no anger, makes no claim about prevention and does not change the subject.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Logos in Depth: Burke's Speech on Conciliation with America, 1775
  {
    id: 'englang-ethos-pathos-logos-ent-4a',
    question: "\"The town should repave Elm Street first; it carries the most school buses.\" This argument depends on which unstated premise?",
    options: [
      "Roads that carry children should be repaired before other roads.",
      "School buses are larger than most other vehicles on town roads.",
      "Elm Street has not been repaved at any time since it was built.",
      "Most residents of the town would rather not pay for any paving.",
    ],
    correctIndex: 0,
    explanation: "Carrying the most buses supports going first only if roads that carry children deserve priority; that is the missing premise. The size of buses, the street's history and residents' reluctance do not connect the reason to the claim.",
    partNumber: 4,
    partTitle: "Logos in Depth: Burke's Speech on Conciliation with America, 1775",
  },
  {
    id: 'englang-ethos-pathos-logos-ent-4b',
    question: "A teacher argues: *Keep the old reading program while we test the new one. If the new one fails, the old one remains; but drop the old one first, and if the new one fails, nothing remains.*\n\nThe mirrored structure of the argument chiefly serves to",
    options: [
      "offer data on how often new reading programs fail",
      "appeal to readers' fear of change for its own sake",
      "show just why the order of the two choices matters",
      "rely on the writer's long experience as a teacher",
    ],
    correctIndex: 2,
    explanation: "Setting the two sequences side by side makes the reasoning plain: one order keeps a fallback and the other loses it. The sentence contains no data, objects to the order rather than to change itself and makes no claim about experience.",
    partNumber: 4,
    partTitle: "Logos in Depth: Burke's Speech on Conciliation with America, 1775",
  },

  // Part 5 — Appeals in Combination, Kairos, and Misconceptions: Garrison's "To the Public," 1831
  {
    id: 'englang-ethos-pathos-logos-ent-5a',
    question: "At a town's hundredth-anniversary celebration, a speaker urges residents to restore the abandoned train depot. Which choice makes the best use of the occasion?",
    options: [
      "Citing the depot's yearly maintenance costs over the past decade",
      "Describing depots that were restored in towns in other states",
      "Recalling that the town grew up around that depot a century ago",
      "Listing the architects who designed the depot and its platforms",
    ],
    correctIndex: 2,
    explanation: "A centennial makes listeners think about origins, so tying the depot to the town's founding seizes the moment. Costs, other towns and architects might support the case, but none draws on the anniversary.",
    partNumber: 5,
    partTitle: "Appeals in Combination, Kairos, and Misconceptions: Garrison's \"To the Public,\" 1831",
  },
  {
    id: 'englang-ethos-pathos-logos-ent-5b',
    question: "A speech urging stricter building inspections describes the families of people killed when a poorly inspected apartment building collapsed. A student calls the description \"manipulation.\" Which response is most accurate?",
    options: [
      "The student is right, since any description of grieving families is a fallacy",
      "The description is acceptable only if it is followed by several statistics",
      "Emotional appeals are effective, so they are beyond any fair criticism",
      "Emotion that fits the facts and serves the claim is a legitimate appeal",
    ],
    correctIndex: 3,
    explanation: "The families' grief is a fitting response to a preventable disaster and connects directly to the case for inspections. Not every emotional appeal is a fallacy, statistics are not a required companion, and effectiveness does not make an appeal immune to judgment.",
    partNumber: 5,
    partTitle: "Appeals in Combination, Kairos, and Misconceptions: Garrison's \"To the Public,\" 1831",
  },

  // Part 6 — Exam Practice: John Brown's Speech to the Court, 1859
  {
    id: 'englang-ethos-pathos-logos-ent-6a',
    question: "A pharmacist testifies before a state committee on a bill to cap the price of insulin: *I have filled prescriptions in this town for twenty-six years. Last month a man asked me which of his two insulin pens he could skip this week. He was not asking a medical question. He was asking which days he could afford to be sick.*\n\nThe pharmacist's first sentence chiefly serves to",
    options: [
      "show that she is opposed to the bill before the committee",
      "suggest that she will be retiring from her work quite soon",
      "establish her standing to report what patients are facing",
      "introduce the statistics on insulin prices that will follow",
    ],
    correctIndex: 2,
    explanation: "Twenty-six years behind the counter give her the authority to describe what patients face, so the story that follows carries weight. She supports the bill, says nothing about retiring and offers a story rather than statistics.",
    partNumber: 6,
    partTitle: "Exam Practice: John Brown's Speech to the Court, 1859",
  },
  {
    id: 'englang-ethos-pathos-logos-ent-6b',
    question: "The same pharmacist continues: *He was not asking a medical question. He was asking which days he could afford to be sick.*\n\nThese two sentences chiefly serve to",
    options: [
      "show that the pharmacist misunderstood what the man asked",
      "suggest that the man needed to see a different doctor",
      "prove that insulin is overprescribed in the state",
      "recast what he asked as a choice forced on him by cost",
    ],
    correctIndex: 3,
    explanation: "Denying that the question was medical and restating it in terms of affording to be sick shows that price, not health, was making his decision. She understood him perfectly, recommends no doctor and makes no claim about prescribing rates.",
    partNumber: 6,
    partTitle: "Exam Practice: John Brown's Speech to the Court, 1859",
  },

  // Part 7 — Review: Using the Appeals to Explain, Not to Label
  {
    id: 'englang-ethos-pathos-logos-ent-7a',
    question: "A writer arguing against a highway bypass notes that each of three nearby towns lost most of its downtown shops within five years of its own bypass opening. Which sentence best turns \"The writer uses logos\" into analysis?",
    options: [
      "The writer uses logos in this part of the essay by including evidence about three towns.",
      "Pointing to three towns with the same fate makes that fate seem likely here too.",
      "The writer's logic in this part of the essay is very strong and persuasive to the reader.",
      "Logos is the appeal to logic and reason, and the writer uses it in this paragraph.",
    ],
    correctIndex: 1,
    explanation: "The strong sentence explains how the evidence works: a pattern in comparable towns makes the predicted harm seem probable. The others repeat the label, praise vaguely or define the term.",
    partNumber: 7,
    partTitle: "Review: Using the Appeals to Explain, Not to Label",
  },
  {
    id: 'englang-ethos-pathos-logos-ent-7b',
    question: "A student plans a rhetorical analysis essay with one body paragraph on ethos, one on pathos and one on logos. Which advice is most useful?",
    options: [
      "Add a fourth paragraph on kairos so that every appeal is covered",
      "Organize by the writer's choices and what they accomplish",
      "Define each appeal fully before discussing the passage at all",
      "Keep the plan, since the rubric requires all three of the appeals",
    ],
    correctIndex: 1,
    explanation: "The rubric rewards explaining how specific choices serve the writer's purpose, and one choice often works on several levels. More labels or definitions add nothing, and no row requires naming the appeals.",
    partNumber: 7,
    partTitle: "Review: Using the Appeals to Explain, Not to Label",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Key Processes" },
    { partNumber: 3, partTitle: "Patterns & Examples" },
    { partNumber: 4, partTitle: "Logos in Depth: Burke's Speech on Conciliation with America, 1775" },
    { partNumber: 5, partTitle: "Appeals in Combination, Kairos, and Misconceptions: Garrison's \"To the Public,\" 1831" },
    { partNumber: 6, partTitle: "Exam Practice: John Brown's Speech to the Court, 1859" },
    { partNumber: 7, partTitle: "Review: Using the Appeals to Explain, Not to Label" },
  ]
}
