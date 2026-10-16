/**
 * Entrance Quiz — Short Fiction III (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-short-fiction-3-ent-1a',
    question: "Read the passage below.\n\n*Every year on her birthday, Mrs. Orr's son sent flowers. This year the van came as always; she signed for the roses, read the card twice (it was in the florist's handwriting again), and set them on the hall table, where she would not have to look at them.*\n\nThe details most strongly support the inference that",
    options: [
      "the gift has become a habit masking her son's distance",
      "she dislikes roses and wishes that he had sent lilies",
      "the florist has made a mistake with this year's order",
      "her son has forgotten her birthday entirely this year",
    ],
    correctIndex: 0,
    explanation: "The flowers arrive \"as always,\" but the card is \"in the florist's handwriting again,\" and she puts them where she will not see them, so the gift reads as routine rather than closeness. The son has not forgotten, since the flowers came.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-short-fiction-3-ent-1b',
    question: "A story mentions a ticking clock four times: first as a comfort to a newly married couple, then as an irritation during their quarrel, then unwound and silent after the husband leaves, and finally rewound by the wife in the last line.\n\nThe development of the clock motif chiefly serves to",
    options: [
      "show that the couple cannot afford to buy a new clock",
      "suggest that time stands still from start to finish",
      "trace the pair's history and the wife's will to go on",
      "reveal that the husband once worked as a clockmaker",
    ],
    correctIndex: 2,
    explanation: "Each return of the clock changes with the relationship, and rewinding it in the last line marks the wife's decision to resume her life. A motif gathers meaning through recurrence with variation.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Complex Characters: Contradiction in Choice, Action and Speech
  {
    id: 'englit-short-fiction-3-ent-2a',
    question: "Read the passage below.\n\n*Ada had no patience for women who clung to the past. She said so to her niece while polishing, for the third time that week, the silver her husband had given her forty years before.*\n\nThe passage chiefly reveals",
    options: [
      "Ada's impatience with her careless young niece",
      "a woman faulting a habit she shares herself",
      "Ada's pride in a valuable collection of silver",
      "Ada's plan to sell her late husband's silver",
    ],
    correctIndex: 1,
    explanation: "Her speech scorns clinging to the past while her action, polishing an old gift for the third time in a week, does exactly that. Complexity often lives in the gap between a character's self-image and what the reader sees.",
    partNumber: 2,
    partTitle: "Complex Characters: Contradiction in Choice, Action and Speech",
  },
  {
    id: 'englit-short-fiction-3-ent-2b',
    question: "In a story, a father spends the whole tale mocking his son's wish to become a painter. In the final scene he is shown alone in the attic, carefully framing one of the boy's sketches.\n\nThe final scene's main function is to",
    options: [
      "show that he plans to sell the sketch for a profit",
      "prove that he has always been cruel to his son",
      "suggest that the son has given up painting at last",
      "reveal a pride beneath his mockery, deepening him",
    ],
    correctIndex: 3,
    explanation: "A private action contradicts his public scorn, so the father becomes a man whose love and contempt coexist. Naming the contradiction matters only when you explain what it adds, here a richer, more painful portrait.",
    partNumber: 2,
    partTitle: "Complex Characters: Contradiction in Choice, Action and Speech",
  },

  // Part 3 — Structure and Time: "An Occurrence at Owl Creek Bridge"
  {
    id: 'englit-short-fiction-3-ent-3a',
    question: "A story spends nine pages on the twenty minutes a girl waits outside the principal's office before admitting she broke a window. Its final sentence reports that in the next four years of high school she never once told a lie.\n\nThe gap between plot time and narrative time chiefly serves to",
    options: [
      "mark the wait as the turning point of her life",
      "show that the narrator has lost track of the order of events",
      "suggest that the girl was expelled from her school that day",
      "establish that the story covers only a single afternoon",
    ],
    correctIndex: 0,
    explanation: "Twenty minutes fill nearly the whole story while four years pass in a sentence, so the structure marks the wait as the turning point that shaped what followed. The final sentence shows that plot time runs for years.",
    partNumber: 3,
    partTitle: "Structure and Time: \"An Occurrence at Owl Creek Bridge\"",
  },
  {
    id: 'englit-short-fiction-3-ent-3b',
    question: "A story opens at a man's funeral. It then tells, in order, the last day of his life and ends as he steps cheerfully out of his front door that morning.\n\nEnding with the cheerful morning chiefly serves to",
    options: [
      "confirm that the funeral was only a dream",
      "let the funeral darken his ordinary happiness",
      "show that the narrator has confused the order of events",
      "suggest that the man survived the day after all",
    ],
    correctIndex: 1,
    explanation: "Because the funeral comes first, every cheerful moment of the last day is read in its shadow, and the final image becomes painful rather than light. The opening funeral is real, and the order is deliberate.",
    partNumber: 3,
    partTitle: "Structure and Time: \"An Occurrence at Owl Creek Bridge\"",
  },

  // Part 4 — Narrative Distance and Free Indirect Discourse
  {
    id: 'englit-short-fiction-3-ent-4a',
    question: "Read the passage below.\n\n*Mrs. Cole looked around the dining room. Well, the Brandons had certainly spent money on it, and showed it too, with that dreadful gilt mirror. Still, the soup was excellent. She would have the recipe out of Margaret if it killed her.*\n\nThe phrase \"that dreadful gilt mirror\" most likely reflects",
    options: [
      "the narrator's objective assessment of the room",
      "Margaret Brandon's own opinion of her mirror",
      "Mrs. Cole's judgment, in the narration",
      "the author's view of wealthy families in general",
    ],
    correctIndex: 2,
    explanation: "The colloquial \"Well,\" the sniffy \"dreadful\" and the comic resolve about the recipe are Mrs. Cole's idiom in third-person narration. In free indirect discourse, such judgments belong to the character, not to an objective narrator.",
    partNumber: 4,
    partTitle: "Narrative Distance and Free Indirect Discourse",
  },
  {
    id: 'englit-short-fiction-3-ent-4b',
    question: "Read the passage below.\n\n*He would tell her tonight. Yes, tonight; he was quite decided, he had been decided for weeks. He went home by the long road, and stopped twice to look at shop windows.*\n\nThe final sentence chiefly serves to",
    options: [
      "continue his confident thoughts in his own words",
      "show that he is shopping for a gift to give her",
      "reveal that he has already told her the news",
      "step back to show acts that undercut his resolve",
    ],
    correctIndex: 3,
    explanation: "The first sentences carry his insistent voice (\"Yes, tonight\"); the last moves to outside report of a man taking the long way and lingering, which quietly contradicts his certainty. A shift in distance can expose a character without comment.",
    partNumber: 4,
    partTitle: "Narrative Distance and Free Indirect Discourse",
  },

  // Part 5 — Ambiguity and Competing Interpretations: "The Minister's Black Veil"
  {
    id: 'englit-short-fiction-3-ent-5a',
    question: "Read the passage below.\n\n*Some said the widow kept a lamp burning for her drowned husband; others said she was afraid of the dark. The lamp burned every night for thirty years, and perhaps both were true.*\n\nThe narrator's \"perhaps both were true\" chiefly serves to",
    options: [
      "keep the lamp's meaning open between two readings",
      "confirm the gossip that the widow feared the dark",
      "mock the villagers for spreading foolish rumors",
      "reveal that her husband is in fact still alive",
    ],
    correctIndex: 0,
    explanation: "The narrator reports two rival explanations and then hedges, so the story sustains both rather than choosing. Hedges like \"perhaps\" are how a narrator builds ambiguity.",
    partNumber: 5,
    partTitle: "Ambiguity and Competing Interpretations: \"The Minister's Black Veil\"",
  },
  {
    id: 'englit-short-fiction-3-ent-5b',
    question: "In a story, a man burns his late brother's letters without reading them, watching each page until it curls into ash.\n\nWhich thesis best accounts for an alternative interpretation?",
    options: [
      "The man burns the letters because he hated his brother all his life.",
      "The story uses fire as a symbol of destruction and of anger.",
      "Though the burning can look like revenge, the care he takes over each page suggests a grief too painful to read.",
      "The story can be read in many ways, so its meaning stays open.",
    ],
    correctIndex: 2,
    explanation: "This thesis concedes one reading and then reframes it with evidence (his careful watching), which is how a qualified claim accounts for an alternative. The others assert one motive, label a symbol, or give up on interpretation.",
    partNumber: 5,
    partTitle: "Ambiguity and Competing Interpretations: \"The Minister's Black Veil\"",
  },

  // Part 6 — The Literary Argument Essay (Q3)
  {
    id: 'englit-short-fiction-3-ent-6a',
    question: "A student is writing a Question 3 essay on a novel about a family that loses its farm.\n\nWhich would be the most specific evidence to include?",
    options: [
      "The family works very hard all through the novel.",
      "The father's watch reappears in a pawnshop window on the day the farm is lost.",
      "The novel shows how difficult farm life can be.",
      "The characters face many challenges over the years.",
    ],
    correctIndex: 1,
    explanation: "Q3 rewards specific evidence recalled from memory: a named object, a placement, a concrete moment. The other choices are general statements that could describe almost any farm novel.",
    partNumber: 6,
    partTitle: "The Literary Argument Essay (Q3)",
  },
  {
    id: 'englit-short-fiction-3-ent-6b',
    question: "A student is preparing for Question 3, which asks for an argument about a work of fiction the student chooses.\n\nWhich preparation is most likely to serve the student well?",
    options: [
      "Three or four works known in close detail and covering varied concerns",
      "One long novel known in great depth, on the theory that it fits any prompt",
      "A dozen works known only from summaries, to allow the widest choice",
      "Several short poems, since they are brief enough to quote in full",
    ],
    correctIndex: 0,
    explanation: "Several well-known works with different concerns make it likely that one truly fits the prompt, and detailed knowledge supplies specific evidence. A single work may not fit, summaries give only general evidence, and Q3 calls for a work of fiction.",
    partNumber: 6,
    partTitle: "The Literary Argument Essay (Q3)",
  },

  // Part 7 — Unit 7 Synthesis: Six Big Ideas, One Argument
  {
    id: 'englit-short-fiction-3-ent-7a',
    question: "Read the passage below.\n\n*At the retirement dinner, Mr. Ferris was given a gold watch and a standing ovation. He thanked the company, praised the soup and told a joke about the stockroom that only the oldest clerks understood. On the train home he took the watch out twice to check the time, and both times put it back without looking.*\n\nThe watch functions chiefly as",
    options: [
      "a realistic detail showing the company's generosity",
      "evidence that Mr. Ferris dislikes the company's managers",
      "proof that the watch had stopped during the journey",
      "a sign of the empty time ahead that he cannot bear to face",
    ],
    correctIndex: 3,
    explanation: "A gift that marks the end of his working life, taken out twice and never looked at, carries his reluctance to face the empty hours ahead. One object here works as setting detail, character evidence and symbol at once.",
    partNumber: 7,
    partTitle: "Unit 7 Synthesis: Six Big Ideas, One Argument",
  },
  {
    id: 'englit-short-fiction-3-ent-7b',
    question: "Read the passage below.\n\n*At the retirement dinner, Mr. Ferris was given a gold watch and a standing ovation. He thanked the company, praised the soup and told a joke about the stockroom that only the oldest clerks understood. On the train home he took the watch out twice to check the time, and both times put it back without looking.*\n\nThe contrast between the dinner and the train ride chiefly serves to",
    options: [
      "show that he plans to return to work the next day",
      "reveal that his joke offended the younger clerks",
      "set his public ease against a private unease he cannot voice",
      "suggest that the dinner bitterly disappointed him",
    ],
    correctIndex: 2,
    explanation: "At the dinner he performs graciously; alone on the train his repeated, unfinished gesture shows what the performance covered. Nothing suggests he will return to work, that the joke offended anyone or that the dinner itself let him down.",
    partNumber: 7,
    partTitle: "Unit 7 Synthesis: Six Big Ideas, One Argument",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Complex Characters: Contradiction in Choice, Action and Speech" },
    { partNumber: 3, partTitle: "Structure and Time: \"An Occurrence at Owl Creek Bridge\"" },
    { partNumber: 4, partTitle: "Narrative Distance and Free Indirect Discourse" },
    { partNumber: 5, partTitle: "Ambiguity and Competing Interpretations: \"The Minister's Black Veil\"" },
    { partNumber: 6, partTitle: "The Literary Argument Essay (Q3)" },
    { partNumber: 7, partTitle: "Unit 7 Synthesis: Six Big Ideas, One Argument" },
  ]
}
