/**
 * Entrance Quiz — Style in Reading (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-style-reading-ent-1a',
    question: "Read the passage below.\n\n*The committee studied the proposal for eighteen months, consulted engineers from three states, held public hearings in every ward and revised its cost estimates twice. Then it voted no.*\n\nThe final sentence primarily serves to",
    options: [
      "deliver the outcome bluntly after a lengthy buildup",
      "summarize each of the committee's many careful steps",
      "suggest that the vote was close and hotly contested",
      "introduce the next subject the writer plans to address",
    ],
    correctIndex: 0,
    explanation: "After one long sentence piling up the committee's work, four plain words deliver the result, so the contrast in length makes the anticlimax sting. The sentence summarizes nothing, says nothing about how close the vote was and does not open a new topic.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-style-reading-ent-1b',
    question: "Two newspapers report the same event.\n\nReport A: *Officials relocated forty residents from the riverside camp on Monday.*\n\nReport B: *Officials drove forty residents out of their riverside homes on Monday.*\n\nThe difference in diction between the reports chiefly reveals that",
    options: [
      "Report A gives more precise factual detail than Report B does",
      "Report B describes a different event from the one in Report A",
      "Report A was written for children and Report B for adults",
      "Report B casts those people as victims of force",
    ],
    correctIndex: 3,
    explanation: "\"Drove... out\" and \"homes\" carry force and loss, while \"relocated\" and \"camp\" sound neutral and administrative, so Report B frames the residents as wronged. Both reports give the same facts about the same event, and nothing suggests different audiences by age.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — From Choices to Tone
  {
    id: 'englang-style-reading-ent-2a',
    question: "Read the passage below.\n\n*Our new mayor has promised, for the third time this year, to fix the pothole on Garden Street. The pothole, for its part, has made no promises. It simply grows, quietly and faithfully, like the only public servant in town who shows up every day.*\n\nThe tone of the passage is best described as",
    options: [
      "wry and gently mocking",
      "furious and accusatory",
      "neutral and informative",
      "admiring yet cautious",
    ],
    correctIndex: 0,
    explanation: "Praising the pothole as a faithful \"public servant\" pokes fun at the mayor's broken promises with dry humor rather than rage. The comparison is too pointed to be neutral, and nothing in it admires the mayor.",
    partNumber: 2,
    partTitle: "From Choices to Tone",
  },
  {
    id: 'englang-style-reading-ent-2b',
    question: "Read the passage below.\n\n*My grandmother's kitchen had one window, a stove that hissed when you lit it and a table scarred by sixty years of homework and pie crusts. It is a parking lot now. I drive past it more often than I need to.*\n\nThe tone of the passage is best described as",
    options: [
      "resentful and bitterly angry",
      "detached and clinical",
      "nostalgic and quietly sorrowful",
      "playful and whimsical",
    ],
    correctIndex: 2,
    explanation: "Affectionate details of the kitchen, the flat statement of its loss and the admission of driving past \"more often than I need to\" express longing and grief held in check. Nothing is bitter, the details are too loving to be clinical, and the passage is not playful.",
    partNumber: 2,
    partTitle: "From Choices to Tone",
  },

  // Part 3 — Comparisons That Carry Meaning: Edwards, 1741
  {
    id: 'englang-style-reading-ent-3a',
    question: "An editorial calls a new tax code \"a maze built by people who already know the way out.\" The comparison chiefly suggests that the code",
    options: [
      "is far too short to cover the cases it needs to",
      "favors the insiders who designed it",
      "was written by people who wanted it to be simple",
      "will soon be replaced by a newer and better law",
    ],
    correctIndex: 1,
    explanation: "A maze confuses those inside it, but its builders know the exit, so the image transfers a hidden advantage to the code's authors. A maze is complicated, not short or simple, and the image predicts nothing about replacement.",
    partNumber: 3,
    partTitle: "Comparisons That Carry Meaning: Edwards, 1741",
  },
  {
    id: 'englang-style-reading-ent-3b',
    question: "In one draft, a writer describes a city's homeless residents as \"litter on the sidewalks.\" In a revision, she calls them \"neighbors without doors.\" Compared with the first comparison, the second chiefly",
    options: [
      "makes the residents seem more numerous and more threatening",
      "describes the residents' physical surroundings more precisely",
      "removes any suggestion that the residents need help from anyone",
      "restores the dignity and belonging that the first image strips away",
    ],
    correctIndex: 3,
    explanation: "\"Litter\" turns people into trash to be cleared away, while \"neighbors\" makes them members of the community who happen to lack homes. The revision does not make them more threatening, adds no physical detail and, by naming what they lack, implies need rather than removing it.",
    partNumber: 3,
    partTitle: "Comparisons That Carry Meaning: Edwards, 1741",
  },

  // Part 4 — Imagery and Selected Detail: London's East End, 1902
  {
    id: 'englang-style-reading-ent-4a',
    question: "Read the passage below.\n\n*The new stadium's luxury boxes have heated seats, private chefs and a view of the river. Two blocks away, the elementary school's furnace has been broken since November, and the children wear their coats in class.*\n\nPlacing the two scenes side by side primarily serves to",
    options: [
      "contrast spending on comfort with neglect of a school",
      "describe the architecture and design of the new stadium in detail",
      "praise the stadium for offering its guests a view of the river",
      "explain how school furnaces are repaired during the winter",
    ],
    correctIndex: 0,
    explanation: "The juxtaposition sets luxury beside children in coats, so readers feel an argument about priorities that the writer never states outright. The passage does not dwell on architecture, its mention of the view is not praise, and it explains nothing about repairs.",
    partNumber: 4,
    partTitle: "Imagery and Selected Detail: London's East End, 1902",
  },
  {
    id: 'englang-style-reading-ent-4b',
    question: "Read the sentence below.\n\n*At 4:10 on a Tuesday afternoon, I counted eleven children waiting at the corner of Fifth and Market for a crossing guard the district had cut in March.*\n\nThe precise time, number and street names chiefly serve to",
    options: [
      "show that the writer works as a city traffic engineer",
      "suggest that the problem happens only on Tuesdays",
      "make the scene read as testimony, not mere impression",
      "list statistics drawn from the district's own records",
    ],
    correctIndex: 2,
    explanation: "Exact details make the scene hard to dismiss as exaggeration; the writer is reporting what she saw. Nothing indicates her profession, one observed Tuesday does not limit the problem to Tuesdays, and the count is her own, not district data.",
    partNumber: 4,
    partTitle: "Imagery and Selected Detail: London's East End, 1902",
  },

  // Part 5 — Shifts, Irony, and Understatement: Zitkala-Ša, 1900
  {
    id: 'englang-style-reading-ent-5a',
    question: "From a company newsletter:\n\n*We are proud to report another record year. Profits rose twelve percent, and only three hundred employees had to be let go to make it happen.*\n\nThe phrase \"only three hundred employees\" is ironic chiefly because it",
    options: [
      "reports an accurate count of the workers who were laid off",
      "treats a serious loss as a small price, exposing the priorities",
      "praises the employees for helping the company to succeed",
      "exaggerates the profits to make the company look stronger",
    ],
    correctIndex: 1,
    explanation: "\"Only\" shrinks three hundred lost jobs into a minor cost, and the gap between that word and the real loss reveals what the company values. The number may be accurate, but that is not what makes it ironic; the line praises no one and exaggerates nothing.",
    partNumber: 5,
    partTitle: "Shifts, Irony, and Understatement: Zitkala-Ša, 1900",
  },
  {
    id: 'englang-style-reading-ent-5b',
    question: "Read the passage below.\n\n*After the hurricane took the roof, two walls and most of the furniture, my father surveyed what was left of the house and said, \"Well, it could use some airing out.\"*\n\nThe father's remark is best described as",
    options: [
      "understatement that meets disaster with dry humor",
      "hyperbole that exaggerates how bad the damage is",
      "a complaint about the house's poor original design",
      "a literal comment on the house's lack of ventilation",
    ],
    correctIndex: 0,
    explanation: "Calling a wrecked house in need of \"airing out\" presents a catastrophe as a minor chore, which is understatement used for wry humor. It shrinks rather than exaggerates the damage, criticizes no design and is plainly not meant literally.",
    partNumber: 5,
    partTitle: "Shifts, Irony, and Understatement: Zitkala-Ša, 1900",
  },

  // Part 6 — Exam Practice: Section I Style Questions and a Q2 Paragraph
  {
    id: 'englang-style-reading-ent-6a',
    question: "Read the passage below.\n\n*O Department of Motor Vehicles, keeper of forms, guardian of the numbered ticket, patient warden of the plastic chairs! Four hours I have sat before thee, and still thou callest number 212.*\n\nThe elevated address primarily serves to",
    options: [
      "thank the agency sincerely for its careful and patient service",
      "explain the history of the agency to readers who are new drivers",
      "shift the passage from humor into a mournful lament for lost time",
      "mock the agency by heaping grand titles on its dullest routines",
    ],
    correctIndex: 3,
    explanation: "Solemn, old-fashioned praise (\"keeper of forms,\" \"thou callest\") is wasted on tickets and plastic chairs, and the mismatch makes the agency ridiculous. The praise is not sincere, gives no history and keeps the comic tone.",
    partNumber: 6,
    partTitle: "Exam Practice: Section I Style Questions and a Q2 Paragraph",
  },
  {
    id: 'englang-style-reading-ent-6b',
    question: "A writer describing a flooded neighborhood notes that \"the high-water mark sits just above the light switches.\" Which sentence from a student's rhetorical analysis offers the strongest commentary on this detail?",
    options: [
      "The writer uses imagery in this sentence to describe how high the flood rose in the neighborhood.",
      "Measured against light switches, the flood becomes a height readers can picture on their walls.",
      "This detail is very vivid and effective, and it helps the reader picture the whole flooded scene.",
      "The writer says the water rose all the way up to the light switches, which is very high indeed.",
    ],
    correctIndex: 1,
    explanation: "Strong commentary explains how the choice works: an everyday household measure makes the flood personal and exact for readers. The others label the device, praise it vaguely or paraphrase the detail.",
    partNumber: 6,
    partTitle: "Exam Practice: Section I Style Questions and a Q2 Paragraph",
  },

  // Part 7 — Review: Reading Style at Passage Scale
  {
    id: 'englang-style-reading-ent-7a',
    question: "Read the passage below.\n\n*The meadow was ours every summer: clover to our knees, a creek clear enough to count the pebbles. Then the survey stakes went in, orange flags snapping in the wind. Now there is a drive-through where the creek bent, and I cannot find the pebbles even in memory.*\n\nWhich description best captures how the tone develops?",
    options: [
      "from anger at the meadow to a calm acceptance of change",
      "from detached description to playful, teasing humor",
      "from fond recollection through intrusion to quiet loss",
      "from fear of the creek to relief that it is gone",
    ],
    correctIndex: 2,
    explanation: "Loving detail gives way to the survey stakes and then to the drive-through and a memory that has faded, so the tone moves from affection to grief. Nothing is angry, playful or fearful.",
    partNumber: 7,
    partTitle: "Review: Reading Style at Passage Scale",
  },
  {
    id: 'englang-style-reading-ent-7b',
    question: "Why is \"the tone is emotional\" a weak answer to a question about a passage's tone?",
    options: [
      "Tone questions on the exam never concern feelings at all",
      "It names no particular attitude",
      "Emotional tones occur only in fiction, never in essays",
      "It describes the subject of the passage instead of its mood",
    ],
    correctIndex: 1,
    explanation: "Grief, indignation and delight are all emotional, so the label says nothing precise about the writer's attitude. Tone is about attitude, which often involves feeling, appears in nonfiction and is distinct from both subject and mood.",
    partNumber: 7,
    partTitle: "Review: Reading Style at Passage Scale",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "From Choices to Tone" },
    { partNumber: 3, partTitle: "Comparisons That Carry Meaning: Edwards, 1741" },
    { partNumber: 4, partTitle: "Imagery and Selected Detail: London's East End, 1902" },
    { partNumber: 5, partTitle: "Shifts, Irony, and Understatement: Zitkala-Ša, 1900" },
    { partNumber: 6, partTitle: "Exam Practice: Section I Style Questions and a Q2 Paragraph" },
    { partNumber: 7, partTitle: "Review: Reading Style at Passage Scale" },
  ]
}
