/**
 * Entrance Quiz — Narrative Perspective (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-narrative-perspective-ent-1a',
    question: "Read the passage below.\n\n*From the top of the stairs the party below was a forest of trouser legs and skirts, and somewhere in it a voice that was her mother's, laughing too loudly.*\n\nThe details most clearly suggest that the scene is filtered through",
    options: [
      "the hostess as she greets her guests at the front door",
      "an all-knowing narrator surveying every guest in the room",
      "a small child peering down from above",
      "a guest who has had a little too much to drink",
    ],
    correctIndex: 2,
    explanation: "Seeing the guests as \"a forest of trouser legs and skirts\" is a view from low down and above, through a child's eyes, and \"her mother's\" voice places the perceiver in the family. The details tell us about the perceiver, not just the party.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-narrative-perspective-ent-1b',
    question: "Read the passage below.\n\n*Mr. Pratt considered himself an excellent judge of character. He had hired his nephew as bookkeeper, his wife's cousin as foreman and his own son as manager, and he could not understand why the mill lost money every year.*\n\nThe gap between Mr. Pratt's view and the passage's details invites readers to",
    options: [
      "see a favoritism he cannot see in his own hiring",
      "admire his steady loyalty to the members of his family",
      "blame the mill's workers for the losses each year",
      "doubt that the mill really loses money at all",
    ],
    correctIndex: 0,
    explanation: "The details (a nephew, a cousin, a son in every key post) show what his self-image as \"an excellent judge of character\" hides from him. The interpretive gap between his view and the facts is where the passage's meaning lies.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Focalization: Who Sees and Who Speaks
  {
    id: 'englit-narrative-perspective-ent-2a',
    question: "Read the passage below.\n\n*The man at the door was very tall and smelled of rain and tobacco. Mama called him Mr. Lowell and used her company voice. He gave Sam a coin that was too big to be real money and too small to be a medal.*\n\nWhich statement best describes the narration?",
    options: [
      "A third-person narrator who renders the young boy's perceptions",
      "A first-person narrator who is the boy, telling his own story",
      "An all-knowing narrator who explains each adult's motives",
      "An outside observer who reports only actions and speech",
    ],
    correctIndex: 0,
    explanation: "The voice is third person (\"He gave Sam\"), but the impressions belong to the child: \"company voice\" and a coin too big for money and too small for a medal are a boy's categories. The narrator speaks; Sam sees.",
    partNumber: 2,
    partTitle: "Focalization: Who Sees and Who Speaks",
  },
  {
    id: 'englit-narrative-perspective-ent-2b',
    question: "Read the passage below.\n\n*I was sure, that summer, that I would be a famous violinist by twenty. I practiced in the barn so the cows could appreciate me. I did not yet know that wanting a thing and being able to do it are different, a lesson that took me another eleven years and most of my savings.*\n\nThe combination of the boy's certainty and the adult's later comment chiefly creates",
    options: [
      "bitter regret that the narrator ever took up the violin at all",
      "suspense about whether the boy will become famous one day",
      "a neutral record of what happened during one summer",
      "a fond irony toward the younger self",
    ],
    correctIndex: 3,
    explanation: "The experiencing self's confidence (\"so the cows could appreciate me\") is framed by the narrating self's rueful knowledge, so the tone is amused and affectionate rather than bitter. The adult has already told us the outcome, which removes any suspense.",
    partNumber: 2,
    partTitle: "Focalization: Who Sees and Who Speaks",
  },

  // Part 3 — The Narrative Distance Scale
  {
    id: 'englit-narrative-perspective-ent-3a',
    question: "Each sentence below describes a bridegroom left at the altar.\n\nWhich sentence is an example of free indirect discourse?",
    options: [
      "He returned to his rooms that evening and sat by the fire.",
      "He resented the whole wedding party for having watched him.",
      "He thought that he had been made a fool of in front of all.",
      "And she had smiled at him in church—smiled the whole time!",
    ],
    correctIndex: 3,
    explanation: "The exclamation and the bitter repetition of \"smiled\" are his own idiom, yet the grammar stays in the third person and past tense, with no tag. The others are narrative report, psychonarration and indirect thought (\"He thought that...\").",
    partNumber: 3,
    partTitle: "The Narrative Distance Scale",
  },
  {
    id: 'englit-narrative-perspective-ent-3b',
    question: "Read the passage below.\n\n*She would be magnificent tonight. Every head would turn; the Duchess herself would ask who she was; it would be the beginning of everything! Miss Pym then went downstairs to borrow her landlady's gloves.*\n\nThe final sentence chiefly serves to",
    options: [
      "continue her excited thoughts in her own words",
      "step back and make her grand hopes look small",
      "reveal that the Duchess has invited her personally",
      "show that her landlady disapproves of the evening",
    ],
    correctIndex: 1,
    explanation: "After a burst of free indirect discourse full of exclamations, the narration retreats to flat report, and the borrowed gloves deflate her fantasy. A sudden move away from a character's mind often produces this kind of irony.",
    partNumber: 3,
    partTitle: "The Narrative Distance Scale",
  },

  // Part 4 — Stream of Consciousness and Interior Monologue
  {
    id: 'englit-narrative-perspective-ent-4a',
    question: "Read the passage below.\n\n*Ellen stirred the soup. Too much salt—her mother had always said she had a heavy hand, standing in the kitchen at Marlow with the radio on, the war news, and Daddy not yet home, and the smell of the coal stove... The pot hissed. Ellen turned down the flame.*\n\nThe movement into memory is triggered chiefly by",
    options: [
      "a letter that arrives from the old house at Marlow",
      "the soup's taste, calling up an old family reproach",
      "the narrator's announcement of a dated flashback",
      "a conversation with her own daughter in the kitchen",
    ],
    correctIndex: 1,
    explanation: "\"Too much salt\" leads straight to her mother's old remark, and from there one association follows another: the kitchen, the radio, the war, her father. Stream-of-consciousness prose is structured by such triggers, not by announced flashbacks.",
    partNumber: 4,
    partTitle: "Stream of Consciousness and Interior Monologue",
  },
  {
    id: 'englit-narrative-perspective-ent-4b',
    question: "Read the passage below.\n\n*Ellen stirred the soup. Too much salt—her mother had always said she had a heavy hand, standing in the kitchen at Marlow with the radio on, the war news, and Daddy not yet home, and the smell of the coal stove... The pot hissed. Ellen turned down the flame.*\n\nThe last two sentences chiefly serve to",
    options: [
      "show that the soup has burned beyond saving",
      "begin a new memory of her mother's kitchen",
      "return her from the past to the present task",
      "reveal that she was never thinking of the past",
    ],
    correctIndex: 2,
    explanation: "A sound in the present (\"The pot hissed\") cuts off the memory, and the short, plain sentences bring her back to the stove. Noting where a mind returns to the present is as important as noting where it leaves.",
    partNumber: 4,
    partTitle: "Stream of Consciousness and Interior Monologue",
  },

  // Part 5 — Blind Spots, Bias and Multiple Focalizers
  {
    id: 'englit-narrative-perspective-ent-5a',
    question: "The first half of a story follows Grace, who is certain that her quiet sister-in-law disapproves of her. The second half switches to the sister-in-law, who spends the same dinner terrified that Grace finds her dull.\n\nThe switch in focalizer chiefly serves to",
    options: [
      "expose how each woman misjudges the other one",
      "prove that Grace was right about the disapproval",
      "show that the narrator prefers the sister-in-law",
      "resolve their conflict through an honest talk",
    ],
    correctIndex: 0,
    explanation: "Seeing the same dinner from inside both minds reveals that each woman's fear is a projection, a blind spot the first half alone could not show. Switching focalizers is one way authors expose what a single perspective misses.",
    partNumber: 5,
    partTitle: "Blind Spots, Bias and Multiple Focalizers",
  },
  {
    id: 'englit-narrative-perspective-ent-5b',
    question: "Read the passage below.\n\n*For thirty years Arthur had believed his wife indifferent to his career. At her funeral, a young colleague he barely knew pressed his hand. “She came to every one of your lectures,” she said. “She always sat at the back, so you wouldn't be nervous.”*\n\nThe colleague's words chiefly serve to",
    options: [
      "confirm his belief that his wife cared little for his work",
      "suggest that Arthur's wife was secretly a scholar herself",
      "reveal that the young colleague was in love with Arthur",
      "expose a devotion his view of her had missed",
    ],
    correctIndex: 3,
    explanation: "A second voice supplies a fact the focalizer never had, overturning thirty years of his judgment. Because readers have shared Arthur's view, his blind spot has been theirs too.",
    partNumber: 5,
    partTitle: "Blind Spots, Bias and Multiple Focalizers",
  },

  // Part 6 — Perspective on the Exam
  {
    id: 'englit-narrative-perspective-ent-6a',
    question: "Read the passage below.\n\n*Henry surveyed the guests. The Morrises had come, of course; they came to everything. The vicar was talking to himself again. And there, by the punch, was Edith, looking as if she had never once in her life been wrong about anything.*\n\nThe phrase \"looking as if she had never once in her life been wrong about anything\" most likely conveys the attitude of",
    options: [
      "the narrator, correcting Henry's view of Edith",
      "Henry, rendered in free indirect discourse",
      "Edith herself, describing her own confidence",
      "the other guests, who all dislike Edith",
    ],
    correctIndex: 1,
    explanation: "The passage opens with Henry surveying the room, and the sardonic asides (\"of course,\" \"again\") are his, so the judgment of Edith is his idiom in third-person narration. Treating it as the narrator's objective verdict is the classic trap.",
    partNumber: 6,
    partTitle: "Perspective on the Exam",
  },
  {
    id: 'englit-narrative-perspective-ent-6b',
    question: "A Question 2 prompt asks students to analyze how an author conveys the complexity of a woman's response to meeting her former husband at a funeral.\n\nWhich thesis makes the handling of perspective central to its argument?",
    options: [
      "The author uses free indirect discourse, imagery and dialogue to convey the woman's complex response.",
      "The woman meets her former husband at a funeral, and they speak briefly about the weather.",
      "Moving between her brisk inner commentary and a narrator who notes her trembling hands, the author shows a composure that is real and also a disguise.",
      "The woman clearly still loves her former husband and deeply regrets the divorce.",
    ],
    correctIndex: 2,
    explanation: "This thesis names a movement between the character's voice and the narrator's view, and the tension it reveals. The others list devices, summarize, or flatten the response to one feeling.",
    partNumber: 6,
    partTitle: "Perspective on the Exam",
  },

  // Part 7 — Narrative Perspective Synthesis
  {
    id: 'englit-narrative-perspective-ent-7a',
    question: "Read the passage below.\n\n*The new manager walked the shop floor at eight, nodding. Fine machines, good light and the men all at their places, which showed what a little discipline could do. Henry, at the third lathe, kept his eyes on the steel and did not mention that the foreman had phoned each of them at six to say the manager was coming.*\n\nThe second sentence is best described as",
    options: [
      "the narrator's objective report on the factory's real state",
      "Henry's private judgment of the new manager's methods",
      "the manager's smug view, voiced in free indirect style",
      "a quotation from the manager's speech to the workers",
    ],
    correctIndex: 2,
    explanation: "The verbless phrases and the smug \"what a little discipline could do\" carry the manager's own thoughts in the narrator's voice without quotation marks. The next sentence shows the scene was staged, so the view is not the narrator's objective report.",
    partNumber: 7,
    partTitle: "Narrative Perspective Synthesis",
  },
  {
    id: 'englit-narrative-perspective-ent-7b',
    question: "Read the passage below.\n\n*The new manager walked the shop floor at eight, nodding. Fine machines, good light and the men all at their places, which showed what a little discipline could do. Henry, at the third lathe, kept his eyes on the steel and did not mention that the foreman had phoned each of them at six to say the manager was coming.*\n\nThe final sentence chiefly serves to",
    options: [
      "confirm that the manager's discipline has improved the shop",
      "show that Henry admires the new manager's methods",
      "reveal that the foreman plans to replace the manager",
      "expose what the manager's view of the shop leaves out",
    ],
    correctIndex: 3,
    explanation: "Moving to Henry reveals the warning call, so the orderly floor the manager credits to discipline turns out to be a performance. The shift in focalizer exposes a blind spot rather than confirming his view.",
    partNumber: 7,
    partTitle: "Narrative Perspective Synthesis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Focalization: Who Sees and Who Speaks" },
    { partNumber: 3, partTitle: "The Narrative Distance Scale" },
    { partNumber: 4, partTitle: "Stream of Consciousness and Interior Monologue" },
    { partNumber: 5, partTitle: "Blind Spots, Bias and Multiple Focalizers" },
    { partNumber: 6, partTitle: "Perspective on the Exam" },
    { partNumber: 7, partTitle: "Narrative Perspective Synthesis" },
  ]
}
