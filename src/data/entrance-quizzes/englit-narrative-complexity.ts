/**
 * Entrance Quiz — Narrative Complexity (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-narrative-complexity-ent-1a',
    question: "Read the passage below.\n\n*When the old woman opened the letter, she laughed until she cried. Her daughter, watching from the doorway, could not tell which had come first.*\n\nThe final sentence chiefly serves to",
    options: [
      "confirm that the letter contained good news",
      "show that the daughter wrote the letter herself",
      "leave open whether the letter brought joy or grief",
      "suggest that the woman is laughing at her daughter",
    ],
    correctIndex: 2,
    explanation: "Because the daughter cannot tell whether laughter or tears came first, both readings of the letter stay plausible. Ambiguity here rests on evidence that points two ways, not on vagueness.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-narrative-complexity-ent-1b',
    question: "A short story ends as an estranged son stands outside his father's door, his hand raised to knock; the story stops before he knocks or turns away.\n\nWhich thesis best handles the story's ambiguous ending?",
    options: [
      "By stopping before the son decides, the story keeps reconciliation and refusal both alive.",
      "The story can mean anything that a reader decides it means.",
      "The story's ending is unclear, which weakens it as a work of fiction.",
      "The ending secretly reveals that the son has already forgiven his father.",
    ],
    correctIndex: 0,
    explanation: "A strong thesis explains what the work gains by staying open rather than picking a side or treating openness as a flaw. The others give up on interpretation, call ambiguity a weakness, or claim a certainty the text withholds.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Story Order and Telling Order
  {
    id: 'englit-narrative-complexity-ent-2a',
    question: "Read the opening of a novel below.\n\n*It was the last summer the four of us would spend together, though of course none of us knew it then. That June we built a raft.*\n\nThe first sentence is best described as",
    options: [
      "a flashback to the narrator's earliest memories of childhood",
      "a prolepsis that shades the summer with coming loss",
      "an ellipsis that skips over the summer entirely",
      "an opening in the middle of a heated argument",
    ],
    correctIndex: 1,
    explanation: "The narrator leaps ahead to knowledge of what will end, which moves the reader's suspense from whether something will be lost to how, and colors every happy detail that follows. That forward glance is a prolepsis.",
    partNumber: 2,
    partTitle: "Story Order and Telling Order",
  },
  {
    id: 'englit-narrative-complexity-ent-2b',
    question: "Read the passage below.\n\n*She lifted the lid of the piano. Her mother's hands, thin and quick, moving over these same keys; the metronome ticking; Don't rush, darling. She played a C, and the room was quiet again.*\n\nThe middle sentence is best described as",
    options: [
      "a prediction of what will happen at her next recital",
      "a narrator's account of the piano's long history",
      "a dream the woman has after she falls asleep",
      "a memory the piano calls up, as if present",
    ],
    correctIndex: 3,
    explanation: "Lifting the lid calls up her mother at the same keys, rendered in present-feeling fragments with no \"I remember,\" and the single note returns her to the room. The past arrives by association, not by an announced flashback.",
    partNumber: 2,
    partTitle: "Story Order and Telling Order",
  },

  // Part 3 — Frame Narratives in Depth
  {
    id: 'englit-narrative-complexity-ent-3a',
    question: "A novel opens with a young woman finding her grandmother's diary in an attic. The diary fills most of the book. In the closing frame, having read it all, the granddaughter tears out the last page and burns it.\n\nThe closing frame most likely serves to",
    options: [
      "prove that the diary's account is entirely true",
      "show that the granddaughter never finished the diary",
      "reveal that the author forgot to end the diary's story",
      "turn her response into a new mystery about the diary",
    ],
    correctIndex: 3,
    explanation: "The frame narrator's final act withholds something the reader never sees, so the outer story raises a question about the inner one instead of closing it. She has read it all, and burning a page proves nothing about its truth.",
    partNumber: 3,
    partTitle: "Frame Narratives in Depth",
  },
  {
    id: 'englit-narrative-complexity-ent-3b',
    question: "In a novel, a schoolteacher retells a story she heard from a former pupil, and at several points she stops to say that she does not believe this part herself.\n\nThe teacher's interruptions chiefly serve to",
    options: [
      "show that the pupil has been lying from start to finish",
      "put the reader on guard about how far to trust the tale",
      "provide comic relief unconnected to the pupil's story",
      "establish the teacher as the true villain of the novel",
    ],
    correctIndex: 1,
    explanation: "A frame narrator who voices doubt shapes how the reader takes the inner story, inviting caution without settling the question. Her doubts about some parts do not prove the whole tale false.",
    partNumber: 3,
    partTitle: "Frame Narratives in Depth",
  },

  // Part 4 — Multiple Narrators and Assembled Documents
  {
    id: 'englit-narrative-complexity-ent-4a',
    question: "A novel about a family's ruin is told in four sections, narrated by the father, the eldest son, the housekeeper and the family lawyer. The mother, whose decision began the ruin, never narrates.\n\nHer lack of a section most likely serves to",
    options: [
      "prove that she played no real part in the family's ruin",
      "keep her motive hidden, seen only through others' eyes",
      "show that the novel is told by an all-knowing narrator",
      "allow the lawyer to explain her thoughts completely",
    ],
    correctIndex: 1,
    explanation: "The missing voice becomes the center: readers know the mother only through the resentments, loyalties and guesses of others. Asking whose voice is absent is a key move with multiple narrators.",
    partNumber: 4,
    partTitle: "Multiple Narrators and Assembled Documents",
  },
  {
    id: 'englit-narrative-complexity-ent-4b',
    question: "In a novel told in letters, a landlady describes her lodger as \"quiet, respectable, always paid on time.\" A letter from the lodger's sister, written the same week, says he owes her a year's money and has not written home in months.\n\nRead together, the two letters most directly suggest that",
    options: [
      "the landlady is lying to protect her rental income",
      "the lodger has more than one sister writing about him",
      "the landlady's view must be the more reliable one",
      "each writer sees only part of the lodger's life",
    ],
    correctIndex: 3,
    explanation: "Each letter reports what its writer can see: the landlady knows a tenant who pays, the sister a brother who owes and stays silent. Reading across accounts means weighing each one's range of knowledge, not crowning one as true.",
    partNumber: 4,
    partTitle: "Multiple Narrators and Assembled Documents",
  },

  // Part 5 — Sustained Ambiguity and Contradiction
  {
    id: 'englit-narrative-complexity-ent-5a',
    question: "Read the passage below.\n\n*The doctor closed the door softly. “She is at rest now,” he told the family, and none of them asked him what he meant.*\n\nThe phrase \"at rest\" is ambiguous chiefly because it can mean",
    options: [
      "that she is asleep or that she has died",
      "that she has recovered or that she has moved away",
      "that she is angry or that she has calmed herself",
      "that she is at home or that she is in a hospital",
    ],
    correctIndex: 0,
    explanation: "\"At rest\" can describe sleep or serve as a gentle way of announcing death, and the family's silence keeps both meanings open. A single charged phrase can sustain two incompatible readings.",
    partNumber: 5,
    partTitle: "Sustained Ambiguity and Contradiction",
  },
  {
    id: 'englit-narrative-complexity-ent-5b',
    question: "Read the passage below.\n\n*When the letter came, Anna read it at the window, folded it into quarters and laughed once, softly. That evening she set an extra place at the table, and in the morning she cleared it away without a word.*\n\nA student calls the ending \"confusing\" because the narrator never says what the letter contained. Which response best treats the gap as productive ambiguity?",
    options: [
      "Her reaction and the unused place fit hope or dread, so the gap keeps both readings alive.",
      "The gap is a flaw in the story that a careful editor should have noticed and corrected.",
      "The letter's contents can be worked out by rereading the opening sentence more carefully.",
      "The extra place she set proves that the letter announced the arrival of a guest.",
    ],
    correctIndex: 0,
    explanation: "Productive ambiguity rests on textual evidence for more than one reading: her soft laugh and the place set and then cleared can fit a joyful or a painful letter. The gap is designed, not an error, and no detail settles it.",
    partNumber: 5,
    partTitle: "Sustained Ambiguity and Contradiction",
  },

  // Part 6 — Narrative Complexity on the Exam
  {
    id: 'englit-narrative-complexity-ent-6a',
    question: "Read the passage below.\n\n*I told him I would think about it, which was a lie; I had decided before he finished speaking. That was forty years ago. I am still not sure whether I decided well.*\n\nThe second and third sentences move the passage from",
    options: [
      "the narrator's present life to a memory from early childhood",
      "a remembered conversation to the narrator's present doubt",
      "one narrator's voice to the voice of a second narrator",
      "a dream to the waking world of the narrator's present",
    ],
    correctIndex: 1,
    explanation: "\"That was forty years ago\" steps from the recalled moment into the narrating present, where the decision is still unsettled. Separating the time of the events from the time of the telling is central to narrator questions.",
    partNumber: 6,
    partTitle: "Narrative Complexity on the Exam",
  },
  {
    id: 'englit-narrative-complexity-ent-6b',
    question: "A student's Question 3 essay on a novel includes the sentence \"The novel uses a frame narrative.\"\n\nWhich revision best turns this observation into commentary?",
    options: [
      "The novel uses a frame narrative, which is a story within a story.",
      "Frame narratives were especially popular in the nineteenth century.",
      "The frame narrative appears at the beginning and end of the novel.",
      "Because the tale of greed is told to a room of bankers, the frame makes the story an accusation aimed at its listeners.",
    ],
    correctIndex: 3,
    explanation: "This revision explains what the method of telling does to the meaning: the listeners' identity turns the tale against them. The others define the term, give history, or describe where the frame appears.",
    partNumber: 6,
    partTitle: "Narrative Complexity on the Exam",
  },

  // Part 7 — Narrative Complexity Synthesis
  {
    id: 'englit-narrative-complexity-ent-7a',
    question: "Read the opening of a letter an old man left with his will.\n\n*I set this down for my grandchildren, who have heard the story of the flood told wrongly every Christmas. I was nine. I remember the water reaching the second stair, and my brother carrying the cat. My mother always said I improved on things in the telling, and perhaps I did. But I did not improve on the cat. That much happened.*\n\nThe narrator's admission that he \"improved on things in the telling\" chiefly serves to",
    options: [
      "prove that he invented his whole account of the flood",
      "show that he has little interest in his family's past",
      "confirm that every detail he reports is accurate",
      "invite doubt about his memory even as he defends one detail",
    ],
    correctIndex: 3,
    explanation: "By granting his mother's charge, he gives readers a reason to question his memory while insisting on one detail, so two readings of his account stay open. The admission undercuts certainty without proving invention.",
    partNumber: 7,
    partTitle: "Narrative Complexity Synthesis",
  },
  {
    id: 'englit-narrative-complexity-ent-7b',
    question: "Read the opening of a letter an old man left with his will.\n\n*I set this down for my grandchildren, who have heard the story of the flood told wrongly every Christmas. I was nine. I remember the water reaching the second stair, and my brother carrying the cat. My mother always said I improved on things in the telling, and perhaps I did. But I did not improve on the cat. That much happened.*\n\nThe final sentence, \"That much happened,\" chiefly serves to",
    options: [
      "confirm that every part of the story happened as told",
      "limit his certainty to a single detail and leave the rest open",
      "show that the narrator cannot remember the flood at all",
      "introduce a second narrator who disagrees with him",
    ],
    correctIndex: 1,
    explanation: "Vouching for only the cat implies that other parts may have grown in the telling, so the narrator marks the edge of his own reliability. He remembers a great deal, and no second narrator appears.",
    partNumber: 7,
    partTitle: "Narrative Complexity Synthesis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Story Order and Telling Order" },
    { partNumber: 3, partTitle: "Frame Narratives in Depth" },
    { partNumber: 4, partTitle: "Multiple Narrators and Assembled Documents" },
    { partNumber: 5, partTitle: "Sustained Ambiguity and Contradiction" },
    { partNumber: 6, partTitle: "Narrative Complexity on the Exam" },
    { partNumber: 7, partTitle: "Narrative Complexity Synthesis" },
  ]
}
