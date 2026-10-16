/**
 * Entrance Quiz — Short Fiction I (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-short-fiction-1-ent-1a',
    question: "Read the passage below.\n\n*Every Sunday for eleven years, Ruth set two cups on the table before she remembered. This morning she set out one, and then sat looking at it for a long time, as if it had made a mistake.*\n\nIn this compressed passage, the single cup chiefly suggests that",
    options: [
      "Ruth has finally stopped thinking about the person she has lost",
      "Ruth's grief has shifted, and the change itself unsettles her",
      "Ruth is careless with her routines and often forgets small things",
      "Ruth expects a visitor and is annoyed that no one has yet arrived",
    ],
    correctIndex: 1,
    explanation: "One small object carries the story: after eleven years of habit she finally sets out one cup, yet she stares at it \"as if it had made a mistake,\" so the adjustment itself becomes a new grief. She has not stopped thinking of the lost person; the long look shows the opposite.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-short-fiction-1-ent-1b',
    question: "A short story follows a boy who spends a whole summer saving coins to buy his father a fishing reel for his birthday, picturing the trip they will take together. In the final sentence, the boy wraps the new reel and sets it on a shelf beside last year's reel, still in its paper.\n\nHow does the final sentence most change the meaning of the earlier details?",
    options: [
      "It confirms the boy's generosity, the trait the story has shown all summer",
      "It reveals that the boy has forgotten which gift he bought the year before",
      "It suggests that the father dislikes fishing and never wanted such a gift",
      "It recasts the boy's summer of effort as a hope that already failed once",
    ],
    correctIndex: 3,
    explanation: "The unopened reel from last year shows that the promised trip never happened before, so the summer of saving becomes a hope the boy keeps renewing despite his father's absence. Reading the ending as simple confirmation of generosity treats it as plot closure rather than as a detail that reframes the story.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Reading Character: Details, Perspective and Motive
  {
    id: 'englit-short-fiction-1-ent-2a',
    question: "Read the passage below.\n\n*Mr. Ostrow counted his change twice, though the girl at the register had already counted it once. “People make mistakes,” he said, not unkindly, and slid a nickel back across the counter to her. “You gave me too much.”*\n\nWhich inference about Mr. Ostrow do the details best support?",
    options: [
      "He is exacting about money, and his care extends to fairness toward others",
      "He distrusts the girl and wants to embarrass her in front of the customers",
      "He is poor and fears he cannot afford to lose even a single nickel",
      "He is absent-minded and must count things twice to remember them",
    ],
    correctIndex: 0,
    explanation: "His double count shows exactness, but the action that matters is returning money that was in his favor, said \"not unkindly.\" That choice rules out distrust or embarrassment and shows his precision serves fairness, not self-interest.",
    partNumber: 2,
    partTitle: "Reading Character: Details, Perspective and Motive",
  },
  {
    id: 'englit-short-fiction-1-ent-2b',
    question: "Read the passage below.\n\n*Everyone in the village agreed that Hal Brenner was the most generous man they knew. When the church needed a new roof, he gave the largest sum and had his name painted on the board beside the door. When his own brother asked him for a small loan that winter, Hal said that times were hard for everyone.*\n\nThe details most strongly suggest that Hal's giving is chiefly motivated by",
    options: [
      "a quiet sense of religious duty",
      "fear of his brother's resentment",
      "a wish for public recognition",
      "sincere concern for his village",
    ],
    correctIndex: 2,
    explanation: "The village's label (\"most generous\") is tested against his actions: he gives where his name is painted for all to see and refuses his brother in private. The pattern points to a desire to be seen as generous, and the painted name rules out a \"quiet\" duty.",
    partNumber: 2,
    partTitle: "Reading Character: Details, Perspective and Motive",
  },

  // Part 3 — Setting: Time, Place and Values
  {
    id: 'englit-short-fiction-1-ent-3a',
    question: "Read the passage below.\n\n*In the Pruitts' front room the good chairs wore white covers all year and were uncovered only for funerals and the minister. The children ate in the kitchen. The clock on the mantel had been wound every Sunday evening for forty years, and no one could remember it ever running fast or slow.*\n\nThese setting details chiefly convey a household that values",
    options: [
      "comfort and warm hospitality",
      "thrift born of real poverty",
      "faith above family affection",
      "propriety and unchanging routine",
    ],
    correctIndex: 3,
    explanation: "Chairs saved for formal occasions, children kept out of the front room and a clock wound on the same evening for forty years all describe a world ruled by decorum and fixed habit. Nothing suggests warmth or hardship, and the minister is one formal visitor among others, not evidence of faith outranking love.",
    partNumber: 3,
    partTitle: "Setting: Time, Place and Values",
  },
  {
    id: 'englit-short-fiction-1-ent-3b',
    question: "Read the passage below.\n\n*The fair was the same fair as every year: the same sagging tents, the same mud, the same man shouting about the same ring-toss. But Lena, holding the letter that said she had been accepted, walked through it as if every bulb on the Ferris wheel had been lit for her.*\n\nThe contrast between the description of the fair and the way Lena walks through it chiefly shows that",
    options: [
      "the fair has been improved since the previous year",
      "her inner state transforms an ordinary place for her",
      "Lena is new to the fair and is easily impressed by it",
      "the narrator shares Lena's excitement about the fair",
    ],
    correctIndex: 1,
    explanation: "The narrator insists the fair is unchanged and shabby, while Lena moves through it as if it were lit for her alone, so the setting is filtered through her joy at the letter. The flat, repetitive description shows the narrator does not share that excitement.",
    partNumber: 3,
    partTitle: "Setting: Time, Place and Values",
  },

  // Part 4 — Plot and Sequence: Why Events Come in This Order
  {
    id: 'englit-short-fiction-1-ent-4a',
    question: "A short story covers a woman's entire forty-year career as a schoolteacher in two paragraphs. It then spends its remaining six pages on a single afternoon when a former student, now grown, returns a book he borrowed from her as a boy.\n\nThis pacing most strongly suggests that",
    options: [
      "the author regards teaching as dull work that is barely worth describing",
      "the forty years matter most, which is why the story presents them first",
      "the story places its real significance in that one quiet, brief visit",
      "the afternoon is important only as the most dramatic outward event",
    ],
    correctIndex: 2,
    explanation: "Pacing shows where a story places its weight: forty years pass in two paragraphs, while one quiet afternoon fills six pages. The afternoon is hardly dramatic in outward terms, so its length signals inner significance, not spectacle.",
    partNumber: 4,
    partTitle: "Plot and Sequence: Why Events Come in This Order",
  },
  {
    id: 'englit-short-fiction-1-ent-4b',
    question: "In a short story, a man who has been out of work for months spends a whole scene rehearsing aloud what he will say at tomorrow's interview, growing more confident with every line. The next scene opens with the factory gate chained shut and a closing notice wired to its bars.\n\nPlacing the rehearsal scene immediately before the chained gate primarily serves to",
    options: [
      "sharpen the loss by building up the hope that what follows removes",
      "show that the man has misread the date of his interview",
      "slow the story down so that the closing seems less important",
      "reveal that the man secretly did not want the job at all",
    ],
    correctIndex: 0,
    explanation: "The order matters: the rehearsal raises the man's confidence, and the reader's, to its height just before the closed gate takes the job away. The arrangement makes the reversal hit harder; nothing in the sequence suggests he misread a date or wanted to fail.",
    partNumber: 4,
    partTitle: "Plot and Sequence: Why Events Come in This Order",
  },

  // Part 5 — The Narrator and Point of View
  {
    id: 'englit-short-fiction-1-ent-5a',
    question: "Read the passage below, narrated in the first person.\n\n*That spring I decided I would marry Annie Doyle, who was nine and could whistle through her fingers. I practiced the proposal in the henhouse every afternoon. It did not occur to me that Annie might have opinions of her own; at seven, I had not yet met the idea.*\n\nWhich phrase most clearly reflects the older narrator's understanding rather than the boy's at the time?",
    options: [
      "“That spring I decided”",
      "“could whistle through her fingers”",
      "“I practiced the proposal in the henhouse”",
      "“I had not yet met the idea”",
    ],
    correctIndex: 3,
    explanation: "Saying he \"had not yet met the idea\" requires a later self who has since met it, so the phrase belongs to the adult looking back. The other phrases report what the boy decided, admired or did at the time.",
    partNumber: 5,
    partTitle: "The Narrator and Point of View",
  },
  {
    id: 'englit-short-fiction-1-ent-5b',
    question: "Read the passage below.\n\n*Mr. Tolliver, who prided himself on never gossiping, spent the evening explaining to his wife, in great and careful detail, exactly what was wrong with the new minister's marriage.*\n\nThe narrator's description of Mr. Tolliver primarily functions to",
    options: [
      "confirm that Mr. Tolliver is a discreet man who keeps secrets",
      "expose the gap between his self-image and his actual behavior",
      "suggest that the minister's marriage is in serious trouble",
      "show that the narrator is Mr. Tolliver's wife reporting the scene",
    ],
    correctIndex: 1,
    explanation: "The narrator sets his self-image (\"never gossiping\") against an evening spent doing exactly that, an ironic comment from outside his mind. The passage tells us about Tolliver, not the truth about the minister's marriage, and the third-person narration is not his wife's.",
    partNumber: 5,
    partTitle: "The Narrator and Point of View",
  },

  // Part 6 — From Noticing to Arguing: The Analytical Paragraph and the Rubric
  {
    id: 'englit-short-fiction-1-ent-6a',
    question: "A Question 2 prompt asks students to analyze how an author portrays a woman's complex response to losing the job she has held for twenty years.\n\nWhich thesis would most likely earn the Row A point?",
    options: [
      "The author uses imagery, dialogue and symbolism to portray the woman's response to losing her job.",
      "In the passage, a woman loses her job and must decide how she will tell her family about it.",
      "Through clipped dialogue and the empty desk she keeps returning to, the author shows her relief tangled with shame.",
      "The woman's response to losing her job is complex, and the author shows this in many different ways.",
    ],
    correctIndex: 2,
    explanation: "Row A requires a defensible interpretation; this thesis claims the response mixes relief and shame and names how the passage builds it. The others list devices without a claim, summarize the plot or restate the prompt.",
    partNumber: 6,
    partTitle: "From Noticing to Arguing: The Analytical Paragraph and the Rubric",
  },
  {
    id: 'englit-short-fiction-1-ent-6b',
    question: "A student writes this body paragraph:\n\n*The author uses imagery to show that the old man is lonely. He sits “by the cold stove with one cup.” This is imagery. He also hears “the clock in the empty hall.” This also shows he is lonely.*\n\nWhich revision would most improve the paragraph's Row B score?",
    options: [
      "Explaining how the chill and silence of the rooms mirror his isolation",
      "Adding a third quotation that also shows that the old man is lonely",
      "Replacing the word “imagery” with a more advanced literary term",
      "Opening with a summary of what happens just before the scene",
    ],
    correctIndex: 0,
    explanation: "The paragraph has specific evidence but follows each quotation with a label, so what it lacks is commentary explaining how the details create meaning. More quotations, fancier terms or added summary leave that gap in place.",
    partNumber: 6,
    partTitle: "From Noticing to Arguing: The Analytical Paragraph and the Rubric",
  },

  // Part 7 — Unit 1 Synthesis: Reading a New Story with the Whole Toolkit
  {
    id: 'englit-short-fiction-1-ent-7a',
    question: "Read the passage below.\n\n*Every evening Mrs. Hale locked the gate, then the front door, then the door to the parlor, and every evening she checked the window latches twice. Her son, home from the city, watched her from the stairs. “Nobody comes out here, Mother,” he said. She turned the last key. “That,” she said, “is the point.”*\n\nWhich claim best connects a pattern in the passage to an interpretation?",
    options: [
      "Mrs. Hale locks the gate, the doors and the windows each night while her son watches from the stairs.",
      "The repeated locking turns the house into a fortress, and her last line reveals a chosen solitude.",
      "The author uses repetition, dialogue and setting in order to develop the character of Mrs. Hale.",
      "Mrs. Hale is afraid of burglars, which shows how dangerous life in the countryside has become.",
    ],
    correctIndex: 1,
    explanation: "This claim names a pattern (the nightly locking) and uses her final line to interpret it: she is keeping people out on purpose. The other choices summarize, list devices without a claim, or read the locks literally against her own words.",
    partNumber: 7,
    partTitle: "Unit 1 Synthesis: Reading a New Story with the Whole Toolkit",
  },
  {
    id: 'englit-short-fiction-1-ent-7b',
    question: "Read the passage below.\n\n*All afternoon the rain kept the children indoors, and Clara, who had promised them a picnic, kept promising. At six the sky cleared at last, and the children ran to her, shouting. She looked out at the bright lawn, then at the packed basket, and said that it was much too late now, really, and anyway the grass was wet.*\n\nThe ending most strongly suggests that Clara's promises were",
    options: [
      "sincere, but defeated by weather beyond her control",
      "forgotten in the excitement of the long afternoon",
      "meant as a punishment for the children's noise",
      "a way of putting off a trip she never wanted",
    ],
    correctIndex: 3,
    explanation: "When the weather finally permits the picnic, she piles up excuses (\"really,\" \"anyway\"), so the ending reframes the afternoon of promising as delay. The sky has cleared, so the weather can no longer be what stops her.",
    partNumber: 7,
    partTitle: "Unit 1 Synthesis: Reading a New Story with the Whole Toolkit",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Reading Character: Details, Perspective and Motive" },
    { partNumber: 3, partTitle: "Setting: Time, Place and Values" },
    { partNumber: 4, partTitle: "Plot and Sequence: Why Events Come in This Order" },
    { partNumber: 5, partTitle: "The Narrator and Point of View" },
    { partNumber: 6, partTitle: "From Noticing to Arguing: The Analytical Paragraph and the Rubric" },
    { partNumber: 7, partTitle: "Unit 1 Synthesis: Reading a New Story with the Whole Toolkit" },
  ]
}
