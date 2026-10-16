/**
 * Entrance Quiz — Symbol and Motif in Fiction (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-symbol-motif-fiction-ent-1a',
    question: "In a story, a widow keeps her late husband's empty birdcage on the porch. In spring she hangs it in the sun; in autumn she fills it with dried flowers; in the last scene she gives it to a neighbor's child, who asks for a bird to put in it.\n\nThe changing uses of the cage most likely suggest",
    options: [
      "her wish to sell off her husband's old possessions",
      "her grief slowly opening toward new life",
      "that she has always disliked keeping birds",
      "a fixed sign of imprisonment from start to end",
    ],
    correctIndex: 1,
    explanation: "The cage's meaning develops with each return: kept empty, then decorated, then handed to a child who wants to fill it with something living. Tracing that change, rather than assigning one fixed meaning, is how a symbol's significance emerges.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-symbol-motif-fiction-ent-1b',
    question: "A student writes: \"The river in the story symbolizes life.\"\n\nWhich revision best reflects how a symbol's meaning works in literary analysis?",
    options: [
      "The river symbolizes life, as rivers do in nearly all of literature.",
      "The river changes from the boy's playground into the border he crosses alone, marking the end of childhood.",
      "The river is described in vivid and memorable detail throughout the story.",
      "The river stands for whatever each reader personally associates with water.",
    ],
    correctIndex: 1,
    explanation: "This revision ties the symbol to its context and shows its meaning developing across the story. The others assert a universal meaning, describe instead of interpret, or treat the symbol as personal opinion.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Kinds of Symbols and How a Story Signals Them
  {
    id: 'englit-symbol-motif-fiction-ent-2a',
    question: "Read the passage below.\n\n*It was the first warm day of spring, and every window in the hospital had been opened. The nurses moved through the wards smiling at the sunlight. Only Mrs. Ames drew her curtain, because she could not bear to see the blossoms on the tree her son used to climb.*\n\nThe passage treats the conventional symbol of spring chiefly by",
    options: [
      "confirming that the season brings hope to everyone in the ward",
      "ignoring the season so that the focus stays on the hospital",
      "turning its promise of renewal into a painful reminder of loss",
      "using it as a literal backdrop with no larger meaning at all",
    ],
    correctIndex: 2,
    explanation: "Spring conventionally means renewal, and the nurses receive it that way, but for Mrs. Ames the blossoms recall her son, so the story inverts the shared meaning for one viewer. Strong readings name the conventional sense and then show what the text does to it.",
    partNumber: 2,
    partTitle: "Kinds of Symbols and How a Story Signals Them",
  },
  {
    id: 'englit-symbol-motif-fiction-ent-2b',
    question: "Early in a story, a girl's grandmother gives her a brass compass whose needle sticks.\n\nWhich later moment would most strongly confirm that the compass is working as a symbol?",
    options: [
      "The compass is listed once more among the odds and ends kept in her bedroom drawer.",
      "Her younger brother borrows the compass for a day and then gives it back.",
      "Lost in a storm at the climax, she pockets the stuck compass and trusts herself.",
      "The compass is described in precise physical detail on the day she first opens it.",
    ],
    correctIndex: 2,
    explanation: "The object returns at the climax, and the girl's choice about it carries meaning, which signals a symbol. A passing list, a brief loan or a careful first description gives the object no added weight in the story.",
    partNumber: 2,
    partTitle: "Kinds of Symbols and How a Story Signals Them",
  },

  // Part 3 — A Contested Symbol: The Scarlet Letter's A
  {
    id: 'englit-symbol-motif-fiction-ent-3a',
    question: "Read the passage below.\n\n*When Old Sam hung a lantern in his window every night, the children said he was signaling to ghosts, the minister said he was showing off his oil, and his daughter, who had moved to the city years before, said nothing at all, though she once drove four hours to see if it was still lit.*\n\nThe different readings of the lantern chiefly serve to",
    options: [
      "establish that the children's reading of it is correct",
      "show that the lantern has one fixed meaning for all",
      "reveal more about each viewer than about the lantern",
      "suggest that Sam is secretly signaling to a stranger",
    ],
    correctIndex: 2,
    explanation: "The children's fancy, the minister's suspicion of vanity and the daughter's silent four-hour drive each expose the viewer's own concerns. When characters disagree about a symbol, the question is what each reading reveals, not who is right.",
    partNumber: 3,
    partTitle: "A Contested Symbol: The Scarlet Letter's A",
  },
  {
    id: 'englit-symbol-motif-fiction-ent-3b',
    question: "In a novel, a town paints a white cross on the door of a family accused of theft. After the family nurses half the town through a fever, neighbors begin calling it \"the healer's mark,\" and years later new residents paint crosses on their own doors for luck.\n\nThe changing meaning of the cross most directly shows",
    options: [
      "that the accused family had really been guilty of the theft all along",
      "that the shape of the cross changed over the years",
      "that the town forgot all about the cross once the fever had passed",
      "how a community's reading of a sign shifts with its experience",
    ],
    correctIndex: 3,
    explanation: "The mark itself never changes; what changes is how the community reads it, from accusation to gratitude to good luck. A fixed sign can record a community's revised judgment.",
    partNumber: 3,
    partTitle: "A Contested Symbol: The Scarlet Letter's A",
  },

  // Part 4 — Tracking a Motif Across a Work
  {
    id: 'englit-symbol-motif-fiction-ent-4a',
    question: "In a story, a father taps the table twice whenever his son mentions leaving home. Early on, the taps seem absent-minded; midway, they grow louder; in the final scene, as the son's bus pulls away, the father stands at the window tapping the glass twice.\n\nThe development of the gesture chiefly suggests",
    options: [
      "the father's impatience with his son's long speeches",
      "a feeling he cannot voice, building until the parting",
      "a nervous condition that a doctor might be able to cure",
      "the father's quiet approval of his son's decision to go",
    ],
    correctIndex: 1,
    explanation: "The gesture escalates each time leaving is mentioned and reaches its climax at the departure, so it carries an emotion the father never puts into words. In a motif, the meaning lies in how the repetitions differ.",
    partNumber: 4,
    partTitle: "Tracking a Motif Across a Work",
  },
  {
    id: 'englit-symbol-motif-fiction-ent-4b',
    question: "Early in a novel, a mother tells her daughter, \"We don't cry in this family.\" Midway through, the daughter says the same words to her own child. In the last chapter, at the mother's funeral, the daughter's child says them to her, and she weeps.\n\nThe final use of the phrase chiefly serves to",
    options: [
      "confirm that the family's rule has held unchanged",
      "show the child mocking her grandmother's memory",
      "reverse its force as the inherited rule breaks",
      "introduce the phrase to the reader for the first time",
    ],
    correctIndex: 2,
    explanation: "The phrase passes from generation to generation, and at its last appearance it produces the opposite of what it commands. Tracking a verbal motif means noticing who says it each time and what changes.",
    partNumber: 4,
    partTitle: "Tracking a Motif Across a Work",
  },

  // Part 5 — Symbolic Characters, Places and Actions; Common Misconceptions
  {
    id: 'englit-symbol-motif-fiction-ent-5a',
    question: "Read the passage below.\n\n*Every evening after the mill closed, Teodor walked to the bridge and dropped one stone into the river. His wife never asked why. After the mill burned down, he stopped.*\n\nWhich reading of Teodor's habit is best supported by the passage?",
    options: [
      "It marks the end of each workday, a ritual that ends with the work.",
      "It proves that he is secretly trying to build a dam across the river.",
      "It is a signal to a lover who waits for him somewhere downstream.",
      "It shows that he dislikes his wife and stays away from home.",
    ],
    correctIndex: 0,
    explanation: "The habit begins when the mill closes each day and stops when the mill is gone, so a modest reading tied to his work is what the text supports. The other readings invent meanings the passage gives no signal for.",
    partNumber: 5,
    partTitle: "Symbolic Characters, Places and Actions; Common Misconceptions",
  },
  {
    id: 'englit-symbol-motif-fiction-ent-5b',
    question: "In a novel, a family's front parlor, kept spotless for guests, is where every argument is hushed. The cluttered, warm kitchen is where secrets are finally told.\n\nThe two rooms chiefly function as",
    options: [
      "realistic details with no meaning beyond the house itself",
      "symbols of the family's great wealth and its later poverty",
      "settings chosen mainly to vary the scenery for the reader",
      "places embodying a public face and a private truth",
    ],
    correctIndex: 3,
    explanation: "Places can carry symbolic weight: the parlor is where appearances are kept up, the kitchen where honesty becomes possible. Both rooms remain literal rooms, and their meaning grows out of what happens in each.",
    partNumber: 5,
    partTitle: "Symbolic Characters, Places and Actions; Common Misconceptions",
  },

  // Part 6 — Symbol and Motif on the Exam
  {
    id: 'englit-symbol-motif-fiction-ent-6a',
    question: "Read the passage below.\n\n*At every family dinner, Grandfather's chair stood empty at the head of the table, and no one sat in it, though there were not enough chairs for the children.*\n\nIn context, the empty chair most likely represents",
    options: [
      "a lasting deference to an absent authority",
      "a carpenter's failure to build enough chairs for the family",
      "the decline of every family in the modern age",
      "the children's dislike of their grandfather",
    ],
    correctIndex: 0,
    explanation: "The family keeps the place of honor empty even when children must go without seats, a sign that the grandfather's authority still governs them. The other choices under-read the chair literally, over-read it into a grand theme, or invent a motive.",
    partNumber: 6,
    partTitle: "Symbol and Motif on the Exam",
  },
  {
    id: 'englit-symbol-motif-fiction-ent-6b',
    question: "A student is planning a Question 3 essay on a novel in which a locked trunk appears in the first chapter, is fought over in the middle, and is opened, empty, in the last.\n\nWhich plan best uses the trunk to build a line of reasoning?",
    options: [
      "One paragraph listing every scene in which the trunk is mentioned",
      "One paragraph defining symbolism, followed by a summary of the plot",
      "One paragraph per stage, each explaining what the trunk's new role reveals about the family",
      "One paragraph on the author's life and the real trunk that inspired it",
    ],
    correctIndex: 2,
    explanation: "Following the symbol through its first appearance, development and final appearance gives the essay a structure in which each paragraph explains a change. Listing, defining or biographical background leaves the change unexplained.",
    partNumber: 6,
    partTitle: "Symbol and Motif on the Exam",
  },

  // Part 7 — Synthesis: The Plough Against the Sun
  {
    id: 'englit-symbol-motif-fiction-ent-7a',
    question: "Read the passage below.\n\n*Every spring my father nailed the same horseshoe over the barn door, open end up, \"to hold the luck in.\" The year the bank took the north field, he did not take it down to repaint the door, as he always had; he painted around it. By August the paint had dried in a pale ring, and the shoe hung inside it like a picture in a frame.*\n\nThe detail that he \"painted around it\" chiefly suggests that he",
    options: [
      "will not risk disturbing a hope he still needs",
      "has grown too tired to finish his ordinary chores",
      "no longer believes the horseshoe brings any luck",
      "plans to sell the horseshoe along with the field",
    ],
    correctIndex: 0,
    explanation: "Breaking a yearly habit rather than move the horseshoe, in the very year the farm shrinks, shows how much he needs the luck it stands for. Taking it down would suggest lost faith; leaving it untouched shows the opposite.",
    partNumber: 7,
    partTitle: "Synthesis: The Plough Against the Sun",
  },
  {
    id: 'englit-symbol-motif-fiction-ent-7b',
    question: "Read the passage below.\n\n*Every spring my father nailed the same horseshoe over the barn door, open end up, \"to hold the luck in.\" The year the bank took the north field, he did not take it down to repaint the door, as he always had; he painted around it. By August the paint had dried in a pale ring, and the shoe hung inside it like a picture in a frame.*\n\nWhich thesis best accounts for the whole passage?",
    options: [
      "The horseshoe symbolizes luck, which by the end the family has plainly and finally run out of.",
      "The writer uses imagery, simile and detail to describe a barn door.",
      "Framing the shoe as the farm shrinks turns a habit of luck into a stubborn, fragile hope.",
      "A farmer nails a horseshoe over his barn door each spring and one year paints around it instead.",
    ],
    correctIndex: 2,
    explanation: "This thesis accounts for the habit, the loss and the framed shoe, and names what the change suggests. The others fix the symbol to one meaning, list devices or summarize.",
    partNumber: 7,
    partTitle: "Synthesis: The Plough Against the Sun",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Kinds of Symbols and How a Story Signals Them" },
    { partNumber: 3, partTitle: "A Contested Symbol: The Scarlet Letter's A" },
    { partNumber: 4, partTitle: "Tracking a Motif Across a Work" },
    { partNumber: 5, partTitle: "Symbolic Characters, Places and Actions; Common Misconceptions" },
    { partNumber: 6, partTitle: "Symbol and Motif on the Exam" },
    { partNumber: 7, partTitle: "Synthesis: The Plough Against the Sun" },
  ]
}
