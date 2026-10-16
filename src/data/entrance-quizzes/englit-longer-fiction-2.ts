/**
 * Entrance Quiz — Longer Fiction II (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-longer-fiction-2-ent-1a',
    question: "In a novel, the heroine spends years waiting faithfully for a sailor who promised to return. A subplot follows her cousin, who marries the first man who asks her and is, to everyone's surprise, quietly content.\n\nThe subplot most likely functions to",
    options: [
      "prove that faithful waiting is always rewarded in the end",
      "complicate her faithfulness by showing another path that works",
      "provide comic relief that has no bearing on the novel's themes",
      "explain why the sailor has failed to return to the heroine",
    ],
    correctIndex: 1,
    explanation: "Setting a contented, unromantic marriage beside years of devoted waiting makes the heroine's choice look less like the only right one, so the subplot deepens the question rather than answering it. A subplot often challenges the main plot's assumptions.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-longer-fiction-2-ent-1b',
    question: "In a novel, a man rehearses the speech he will make to the brother he has not spoken to in twenty years. At the station, the brother's train is announced late, then later still, then later again.\n\nThe repeated delays chiefly serve to",
    options: [
      "show that the railway company is badly run",
      "prove that the brother will never arrive at all",
      "add a realistic detail with no larger purpose",
      "stretch out the moment and raise its stakes",
    ],
    correctIndex: 3,
    explanation: "Each delay postpones a meeting the man has prepared for, so uncertainty and anticipation build. Delay is one of the main tools of narrative tension in long fiction.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Subplots and the Multiplot Novel
  {
    id: 'englit-longer-fiction-2-ent-2a',
    question: "In a novel, a minor plot follows a moneylender's efforts to collect a debt from a struggling farmer. Midway through, the moneylender forecloses, and the farmer's daughter, the heroine of the main plot, is forced to accept a marriage she had refused.\n\nThe moneylender plot chiefly functions as a",
    options: [
      "catalyst that sets off the main plot's crisis",
      "mirror that repeats the heroine's own situation",
      "counterweight that lightens the novel's ending",
      "digression with no connection to the main story",
    ],
    correctIndex: 0,
    explanation: "Events in the secondary line (the foreclosure) directly cause the heroine's crisis, which is the work of a catalyst. The subplot does not repeat her situation or soften the ending.",
    partNumber: 2,
    partTitle: "Subplots and the Multiplot Novel",
  },
  {
    id: 'englit-longer-fiction-2-ent-2b',
    question: "A novel follows two lines of action: a proud judge's career and a poor seamstress's struggle to raise her son. The two characters never meet until the final chapter, when the judge sentences her son.\n\nThe single meeting most likely serves to",
    options: [
      "prove that the two plots had nothing to do with each other",
      "join the two plots at a moment that exposes their gap",
      "reveal that the judge is the seamstress's long-lost brother",
      "give both lines a happy resolution",
    ],
    correctIndex: 1,
    explanation: "Where separate plots finally touch is often the strongest evidence for an argument about structure: here the lives that ran apart collide in a courtroom, where one world judges the other.",
    partNumber: 2,
    partTitle: "Subplots and the Multiplot Novel",
  },

  // Part 3 — Foreshadowing, Suspense and Surprise
  {
    id: 'englit-longer-fiction-2-ent-3a',
    question: "Early in a novel, the reader is shown a crack spreading in the dam above a village, though none of the villagers notice it. Chapters later, as the villagers prepare for their harvest festival, it rains for three days.\n\nThe reader's experience during the festival chapters is best described as",
    options: [
      "surprise at an outcome no one could have expected",
      "mystery about a crime committed long in the past",
      "suspense about a danger the characters cannot see",
      "relief that the danger has now safely passed",
    ],
    correctIndex: 2,
    explanation: "The reader has been shown the danger and fears what the rain may bring, while the characters prepare for a celebration. Foreshadowing creates suspense by letting the reader know more than the characters do.",
    partNumber: 3,
    partTitle: "Foreshadowing, Suspense and Surprise",
  },
  {
    id: 'englit-longer-fiction-2-ent-3b',
    question: "Early in a novel, a young woman breaks her mother's hand mirror and laughs it off. At the novel's end, after her marriage has collapsed, she catches sight of herself in a cracked shop window.\n\nThe link between the two moments most likely serves to",
    options: [
      "prove the superstition that broken mirrors bring bad luck",
      "show that the woman never grew up during the novel",
      "explain how the shop window came to be damaged",
      "frame her story with broken reflections, giving the first accident meaning in retrospect",
    ],
    correctIndex: 3,
    explanation: "The early accident looks trivial until the ending echoes it, and then both images suggest a fractured sense of self. Foreshadowing in long fiction is often fully visible only on looking back.",
    partNumber: 3,
    partTitle: "Foreshadowing, Suspense and Surprise",
  },

  // Part 4 — Reading Tension in a Passage
  {
    id: 'englit-longer-fiction-2-ent-4a',
    question: "Read the passage below.\n\n*The ship sailed at noon. It was eleven. Mara stood at the bottom of the gangway with her ticket in one hand and her mother's letter (“Come home; we need you”) in the other. A sailor called down: did she mean to board or not? She looked at the gulls. She looked at her shoes.*\n\nThe tension in the passage comes chiefly from",
    options: [
      "a deadline pressing on a divided mind",
      "a mystery about who wrote the letter",
      "a quarrel between Mara and the sailor",
      "a danger the ship will face at sea",
    ],
    correctIndex: 0,
    explanation: "A fixed hour approaches while Mara holds two claims on her in her two hands, the ticket and the plea to come home. Her evasive glances at the gulls and her shoes show the conflict she cannot settle.",
    partNumber: 4,
    partTitle: "Reading Tension in a Passage",
  },
  {
    id: 'englit-longer-fiction-2-ent-4b',
    question: "In a novel, readers already know that the bridge on the valley road washed out an hour ago. Jonah, late for his sister's wedding, takes the valley road:\n\n*He whistled as he drove, and when a farmer at the crossroads waved both arms at him, Jonah waved back and pressed on.*\n\nJonah's misreading of the farmer's wave chiefly serves to",
    options: [
      "show that Jonah has already heard about the bridge",
      "heighten dread as an urgent warning goes unheeded",
      "resolve the tension by bringing the scene to a close",
      "suggest that the farmer only meant to greet him",
    ],
    correctIndex: 1,
    explanation: "The reader knows the bridge is gone, so the farmer's frantic signal reads as a warning that Jonah cheerfully mistakes for a greeting. The missed chance heightens suspense rather than relieving it.",
    partNumber: 4,
    partTitle: "Reading Tension in a Passage",
  },

  // Part 5 — Endings: Resolution, Irony and Open Questions
  {
    id: 'englit-longer-fiction-2-ent-5a',
    question: "A novel opens with a boy planting an acorn on the day his father leaves for war. It ends sixty years later with the boy, now old, sitting beneath a full-grown oak as his grandson leaves for a different war.\n\nThe ending is best described as",
    options: [
      "open, leaving the central conflict wholly unsettled",
      "displaced, giving the last word to a minor plot",
      "circular, returning to the opening image to weigh time and repetition",
      "closed, resolving every conflict in lasting happiness",
    ],
    correctIndex: 2,
    explanation: "The ending returns to the opening's tree and departure, so the reader measures what has grown and what repeats. A circular ending invites comparison between its two appearances.",
    partNumber: 5,
    partTitle: "Endings: Resolution, Irony and Open Questions",
  },
  {
    id: 'englit-longer-fiction-2-ent-5b',
    question: "A novel about a factory town ends with this sentence:\n\n*The new owners announced that the mill's “improvements” had been a great success; four hundred families left Harlow that spring.*\n\nThe quotation marks around \"improvements\" chiefly serve to",
    options: [
      "quote a technical term used by the mill's engineers",
      "show that the families welcomed the owners' changes",
      "mark the title of a newspaper article about the mill",
      "signal that the narrator rejects the owners' word",
    ],
    correctIndex: 3,
    explanation: "Setting the word apart, and following it at once with four hundred departing families, gives the ending an ironic tone: the narrator reports the owners' language without endorsing it.",
    partNumber: 5,
    partTitle: "Endings: Resolution, Irony and Open Questions",
  },

  // Part 6 — Novel Structure on the Exam
  {
    id: 'englit-longer-fiction-2-ent-6a',
    question: "Read the passage below.\n\n*People who give advice freely seldom take it; and Mrs. Oduya, who had told every neighbor on Mill Lane how to keep a budget, was at that moment hiding the grocer's bill under the clock.*\n\nThe movement of the passage is best described as",
    options: [
      "from a general claim about advice to one woman's comic example",
      "from Mrs. Oduya's advice to her neighbors to a lesson in economics",
      "from comedy to grief over a debt that can never be repaid",
      "from a description of the lane to a scene of dialogue",
    ],
    correctIndex: 0,
    explanation: "The narrator states a general truth about advice-givers and then applies it, with irony, to Mrs. Oduya, who preaches budgets while hiding her own bill. Movement from general law to particular case is a common narrator's move.",
    partNumber: 6,
    partTitle: "Novel Structure on the Exam",
  },
  {
    id: 'englit-longer-fiction-2-ent-6b',
    question: "A student is writing a Question 3 essay on a novel in which the heroine's brother elopes recklessly while she chooses a slow, patient courtship.\n\nWhich topic sentence best uses the subplot to make a claim about the work as a whole?",
    options: [
      "The novel also contains a subplot about the heroine's younger brother.",
      "Placed beside the heroine's slow love, the brother's hasty marriage argues that the novel values endurance over passion.",
      "There are many characters in the novel, and the brother is one of them.",
      "The subplot about the brother takes place in chapters ten through fifteen.",
    ],
    correctIndex: 1,
    explanation: "This sentence explains what placing the two plots side by side argues, which ties the subplot to the work as a whole. The others merely note that the subplot exists or where it occurs.",
    partNumber: 6,
    partTitle: "Novel Structure on the Exam",
  },

  // Part 7 — Unit 6 Synthesis: Lydgate's "Spots of Commonness"
  {
    id: 'englit-longer-fiction-2-ent-7a',
    question: "Read the passage below, from early in a novel.\n\n*Harriet had decided at twelve that she would never live in a town like Ashby, and at twenty-two she had kept her word so far as to live at the other end of it. She would leave, naturally, once her mother was better.*\n\nThe word \"naturally\" chiefly serves to",
    options: [
      "express the narrator's full approval of Harriet's plans",
      "reveal that Harriet's mother has already recovered",
      "suggest that the town plays only a small part in the novel",
      "let Harriet's certainty sound naive and invite doubt",
    ],
    correctIndex: 3,
    explanation: "The narrator echoes Harriet's easy confidence in a way that exposes it, so the reader suspects the plan will never happen. This is verbal irony from a knowing narrator.",
    partNumber: 7,
    partTitle: "Unit 6 Synthesis: Lydgate's \"Spots of Commonness\"",
  },
  {
    id: 'englit-longer-fiction-2-ent-7b',
    question: "Read the passage below, from early in a novel.\n\n*Harriet had decided at twelve that she would never live in a town like Ashby, and at twenty-two she had kept her word so far as to live at the other end of it. She would leave, naturally, once her mother was better.*\n\nThe clause \"once her mother was better\" chiefly serves to",
    options: [
      "show that her mother's illness is minor and nearly over",
      "hint that the condition for leaving may never be met",
      "suggest that Harriet secretly wishes her mother harm",
      "describe the mother's illness in precise medical detail",
    ],
    correctIndex: 1,
    explanation: "Tying her escape to an open-ended condition points ahead to a departure that keeps being postponed, especially after the joke about how far her earlier vow has carried her. The hint works as foreshadowing.",
    partNumber: 7,
    partTitle: "Unit 6 Synthesis: Lydgate's \"Spots of Commonness\"",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Subplots and the Multiplot Novel" },
    { partNumber: 3, partTitle: "Foreshadowing, Suspense and Surprise" },
    { partNumber: 4, partTitle: "Reading Tension in a Passage" },
    { partNumber: 5, partTitle: "Endings: Resolution, Irony and Open Questions" },
    { partNumber: 6, partTitle: "Novel Structure on the Exam" },
    { partNumber: 7, partTitle: "Unit 6 Synthesis: Lydgate's \"Spots of Commonness\"" },
  ]
}
