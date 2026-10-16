/**
 * Entrance Quiz — Plot, Conflict, and Theme (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-plot-conflict-theme-ent-1a',
    question: "In a short story, two brothers inherit their father's orchard. One wants to sell it to pay his debts; the other wants to keep working it, as their father did for forty years.\n\nThe conflict between the brothers most directly reveals",
    options: [
      "a clash between present need and loyalty to the past",
      "that one brother is simply greedy and the other is good",
      "the exact price the orchard would bring on the market",
      "that their father always favored the younger of the two",
    ],
    correctIndex: 0,
    explanation: "Conflict shows what characters value: one brother is pressed by his debts, the other is bound by the father's forty years of work. Calling one brother greedy flattens a clash between two real goods.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-plot-conflict-theme-ent-1b',
    question: "In a short story, a man spends years suing his neighbor over a strip of land. He wins the case, and in the final scene he stands alone on the strip while his former friend's house is put up for sale.\n\nWhich theme statement avoids reducing the story to a moral cliché?",
    options: [
      "The story teaches readers that winning is not everything, especially among friends and neighbors.",
      "The story warns readers never to take a neighbor or a friend to court.",
      "The story suggests that a victory won for pride can cost the bond it claimed to defend.",
      "The story is about a long lawsuit between two neighbors over some land.",
    ],
    correctIndex: 2,
    explanation: "This statement makes an arguable claim grounded in the outcome: the man wins the land and loses the friendship. The others offer a slogan, a rule of conduct or a summary.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Plot as Causality: Story, Plot and the Chain of Events
  {
    id: 'englit-plot-conflict-theme-ent-2a',
    question: "Which summary of a short story presents a plot, in the sense of linked causes, rather than simply a sequence of events?",
    options: [
      "The farmer's barn burned in the autumn, and the next spring he sold the farm.",
      "Too proud to accept his neighbors' help after the fire, the farmer sold the farm.",
      "The barn burned in October, and the farmer and his family left in April.",
      "The farmer lost his barn to a fire, and later he moved into the town.",
    ],
    correctIndex: 1,
    explanation: "Only this summary explains why the sale happens: his pride, not the fire alone, drives the decision. The others join events with \"and\" or \"later,\" which gives a story rather than a plot.",
    partNumber: 2,
    partTitle: "Plot as Causality: Story, Plot and the Chain of Events",
  },
  {
    id: 'englit-plot-conflict-theme-ent-2b',
    question: "In a short story, a young clerk finds a wallet full of money on a tram and decides to keep it. He spends the rest of the story inventing lies to hide it, and in the end the lies cost him his job.\n\nWhich statement best describes the story's causal chain?",
    options: [
      "Chance starts the trouble, but his own choices drive what follows.",
      "Chance alone decides every event, from the wallet to the job.",
      "Social pressure forces the clerk to keep the money against his will.",
      "The clerk's dismissal has no real link to his finding of the wallet.",
    ],
    correctIndex: 0,
    explanation: "Finding the wallet is chance, but keeping it and lying about it are decisions, and those decisions lead to the dismissal. Asking which kind of link carries the weight at each turn shows where the story places responsibility.",
    partNumber: 2,
    partTitle: "Plot as Causality: Story, Plot and the Chain of Events",
  },

  // Part 3 — Kinds of Conflict and Layered Conflicts
  {
    id: 'englit-plot-conflict-theme-ent-3a',
    question: "Read the passage below.\n\n*For three days Halvorsen fought the blizzard: digging out the door, hauling wood, feeding the stove. On the fourth day the wind dropped, and the silence was worse. He sat by the window and found himself thinking, for the first time in years, of the brother he had not written to.*\n\nThe passage's conflict is best described as moving from",
    options: [
      "a quarrel with his brother to a fight with the storm",
      "a struggle with society to a struggle with fate",
      "an inner doubt to a battle with his neighbors",
      "a struggle with nature to a reckoning with his past",
    ],
    correctIndex: 3,
    explanation: "The physical fight with the blizzard ends, and the silence turns his attention inward to an old estrangement, so the conflict migrates from outer to inner. The brother is remembered, not fought.",
    partNumber: 3,
    partTitle: "Kinds of Conflict and Layered Conflicts",
  },
  {
    id: 'englit-plot-conflict-theme-ent-3b',
    question: "In a short story, three miners are trapped underground after a collapse. Hunger, darkness and fear press on them, and they quarrel over the last lamp. Then one begins to tell stories of his childhood, and the others take turns doing the same through the night.\n\nThe storytelling functions chiefly as",
    options: [
      "a counterforce set against the conflicts",
      "the story's central conflict among the three men",
      "a flashback that shows how the mine collapsed",
      "evidence that the miners have given up all hope",
    ],
    correctIndex: 0,
    explanation: "Against nature, fear and their own quarrel, the shared stories push back with companionship instead of adding another struggle. A counterforce answers the conflicts rather than joining them.",
    partNumber: 3,
    partTitle: "Kinds of Conflict and Layered Conflicts",
  },

  // Part 4 — From Conflict to Theme: What Resolution Says
  {
    id: 'englit-plot-conflict-theme-ent-4a',
    question: "A miser spends his life hoarding coins in a tin box under the floor so that his son will be rich. After his death, the son opens the box and finds that the coins belong to a currency withdrawn from use decades earlier.\n\nThe irony of the outcome is best described as",
    options: [
      "the son, who never wanted money, becomes wealthy anyway",
      "the neighbors take the coins before the son can arrive",
      "a lifetime spent securing the future secures nothing",
      "the miser is at last rewarded for his careful habits",
    ],
    correctIndex: 2,
    explanation: "The outcome is the opposite of what the effort aimed at: decades of saving produce worthless money. In an ironic reversal, the effort itself is what the story comments on.",
    partNumber: 4,
    partTitle: "From Conflict to Theme: What Resolution Says",
  },
  {
    id: 'englit-plot-conflict-theme-ent-4b',
    question: "A student argues that a story's theme is \"greed is punished.\" In the story, a greedy merchant and his honest, generous wife both lose everything when his cargo ship sinks.\n\nWhich detail most weakens the student's reading?",
    options: [
      "The kind wife suffers the same ruin as her husband.",
      "The merchant's ship sinks in a storm far from any port.",
      "The merchant had hoarded his profits for many years.",
      "The townspeople had long resented the merchant's wealth.",
    ],
    correctIndex: 0,
    explanation: "A theme must fit the whole outcome, and the wife's identical ruin shows the loss is not aimed at greed. The other details describe the merchant or the storm without testing the claim.",
    partNumber: 4,
    partTitle: "From Conflict to Theme: What Resolution Says",
  },

  // Part 5 — Stated vs. Implied Theme, and Competing Themes
  {
    id: 'englit-plot-conflict-theme-ent-5a',
    question: "Midway through a novel, a wealthy banker, dining well, reflects that \"every man gets what he deserves in this world.\" By the end, his honest clerk has been ruined through no fault of his own, and the banker has prospered by fraud.\n\nThe banker's reflection is best treated as",
    options: [
      "the novel's stated theme, which the ending confirms",
      "a belief the plot goes on to discredit",
      "the narrator's own judgment, voiced through the banker",
      "a passing remark with no bearing on the novel's meaning",
    ],
    correctIndex: 1,
    explanation: "A character's reflection is evidence, not a verdict, and here the outcome contradicts it: the honest man suffers and the fraud thrives. The reflection belongs to the banker, not to the narrator.",
    partNumber: 5,
    partTitle: "Stated vs. Implied Theme, and Competing Themes",
  },
  {
    id: 'englit-plot-conflict-theme-ent-5b',
    question: "A story ends with a widow selling the family farm she has fought for years to keep. She weeps as she signs the papers, then walks into town feeling lighter than she has in decades.\n\nWhich statement best handles the story's competing themes?",
    options: [
      "The story suggests that people should never sell land their family has worked.",
      "The story develops many themes, such as loss, family, work and freedom.",
      "The story suggests that letting go of a burdened past is both a loss and a release.",
      "The story shows nothing but the widow's grief at losing the home she loved.",
    ],
    correctIndex: 2,
    explanation: "The tears and the lightness both matter, and this statement holds them together as a tension. The others preach a moral, list topics, or ignore half the ending.",
    partNumber: 5,
    partTitle: "Stated vs. Implied Theme, and Competing Themes",
  },

  // Part 6 — Plot, Conflict and Theme on the Exam
  {
    id: 'englit-plot-conflict-theme-ent-6a',
    question: "Read the passage below.\n\n*At dinner, Clara's father talked over everyone about the price of coal. Clara watched her mother refill his glass without being asked, and thought of the letter in her pocket from the nursing school in Leeds, which she had not yet answered.*\n\nThe conflict the passage develops is best described as one between",
    options: [
      "Clara's father and the coal merchants he complains about",
      "Clara's mother and father over the household's budget",
      "Clara and the nursing school that has turned her down",
      "Clara's own hopes and the dutiful role her mother models",
    ],
    correctIndex: 3,
    explanation: "The passage spends its attention on Clara watching her mother's silent service while holding an unanswered letter, so the deeper conflict is between her ambition and that example. The coal talk is surface, and nothing says the school rejected her.",
    partNumber: 6,
    partTitle: "Plot, Conflict and Theme on the Exam",
  },
  {
    id: 'englit-plot-conflict-theme-ent-6b',
    question: "A Question 3 prompt asks how a character's attempt to escape a family obligation contributes to an interpretation of the work as a whole.\n\nWhich thesis is both defensible and complex?",
    options: [
      "In the novel, the heroine tries to escape from caring for her sick father.",
      "In the novel, trying to escape one's obligations leads only to unhappiness.",
      "The novel uses symbolism and imagery to show how the heroine escapes.",
      "The heroine's flight from her father's sickroom shows that freedom won by abandoning duty brings guilt, yet staying would have erased her.",
    ],
    correctIndex: 3,
    explanation: "This thesis is arguable and builds in a tension (guilt on one side, self-erasure on the other) that a line of reasoning can develop. The others summarize, simplify or name devices without a claim.",
    partNumber: 6,
    partTitle: "Plot, Conflict and Theme on the Exam",
  },

  // Part 7 — Plot, Conflict and Theme Synthesis
  {
    id: 'englit-plot-conflict-theme-ent-7a',
    question: "Read the passage below.\n\n*The Pratt brothers had not spoken since their father's funeral, when Daniel took the pocket watch. Twelve years later, Daniel's son, sorting the attic, mailed the watch to his uncle with a note: \"I think this was meant for you.\" Paul wound it, set it to the right time and drove four hours without phoning first.*\n\nThe son's act functions in the plot chiefly as",
    options: [
      "the start of a new feud between the son and his father",
      "proof that the watch never really belonged to Daniel",
      "a flashback to the day of the father's funeral",
      "an outside act that breaks a long and bitter deadlock",
    ],
    correctIndex: 3,
    explanation: "Neither brother has moved in twelve years; a third person's small gesture sets off Paul's drive, so the turning point comes from outside the quarrel. Nothing suggests a new feud, a proven claim to the watch or a flashback.",
    partNumber: 7,
    partTitle: "Plot, Conflict and Theme Synthesis",
  },
  {
    id: 'englit-plot-conflict-theme-ent-7b',
    question: "Read the passage below.\n\n*The Pratt brothers had not spoken since their father's funeral, when Daniel took the pocket watch. Twelve years later, Daniel's son, sorting the attic, mailed the watch to his uncle with a note: \"I think this was meant for you.\" Paul wound it, set it to the right time and drove four hours without phoning first.*\n\nWhich theme statement best draws on the passage's chain of events, conflict and outcome?",
    options: [
      "Family quarrels are always painful, and only the passing of time can heal them.",
      "A gesture from outside a quarrel can open a way back that pride has blocked.",
      "A nephew mails a watch, and Paul then drives four hours to see his estranged brother.",
      "The passage is about family, inheritance, pride and forgiveness.",
    ],
    correctIndex: 1,
    explanation: "This statement uses the trigger (the nephew's gesture), the conflict (twelve years of pride) and the outcome (Paul's unannounced drive). The others offer a cliché, a summary or a list of topics.",
    partNumber: 7,
    partTitle: "Plot, Conflict and Theme Synthesis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Plot as Causality: Story, Plot and the Chain of Events" },
    { partNumber: 3, partTitle: "Kinds of Conflict and Layered Conflicts" },
    { partNumber: 4, partTitle: "From Conflict to Theme: What Resolution Says" },
    { partNumber: 5, partTitle: "Stated vs. Implied Theme, and Competing Themes" },
    { partNumber: 6, partTitle: "Plot, Conflict and Theme on the Exam" },
    { partNumber: 7, partTitle: "Plot, Conflict and Theme Synthesis" },
  ]
}
