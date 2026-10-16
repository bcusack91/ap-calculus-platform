/**
 * Entrance Quiz — Narration and Point of View (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-narration-pov-ent-1a',
    question: "Read the passage below.\n\n*In the summer of his fortieth year, Mr. Pell decided to become a poet. He bought a velvet jacket, three notebooks and a bust of Homer, and for some weeks the notebooks remained admirably clean.*\n\nThe narrator's distance from Mr. Pell chiefly allows the passage to",
    options: [
      "present his feelings from inside, just as he experiences them",
      "report his actions without passing any judgment on them",
      "show that the narrator is a fellow poet who admires him",
      "treat his ambition with gentle irony rather than share it",
    ],
    correctIndex: 3,
    explanation: "The narrator stands outside Mr. Pell and lists the props of a poet he never becomes; \"admirably clean\" praises the notebooks for being empty, a mild ironic judgment. That word also rules out a narration free of judgment.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-narration-pov-ent-1b',
    question: "A first-person narrator insists three times that she is \"perfectly calm\" while describing how she has rearranged the living-room furniture six times since midnight.\n\nThe most likely effect of this contrast is to",
    options: [
      "confirm that she is calm, since she states it so directly",
      "lead readers to doubt her self-assessment and read past it",
      "suggest that the author approves of such orderly habits",
      "show that the furniture had been badly arranged before",
    ],
    correctIndex: 1,
    explanation: "Her actions contradict her repeated claim, so readers learn to trust what she reports doing over what she says about herself. Treating her statement as fact, or as the author's view, misses the gap that unreliability creates.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — The Point-of-View Toolkit: Person and Access
  {
    id: 'englit-narration-pov-ent-2a',
    question: "Read the passage below.\n\n*Mrs. Abernathy poured the tea and asked about the harvest. Her nephew said it had been fair. She said she was glad of it. He set his cup down without drinking and looked at the window for some time.*\n\nThe narration in this passage is best described as",
    options: [
      "objective, recording only what could be seen and heard",
      "limited, entering only the nephew's thoughts and feelings",
      "omniscient, moving freely between both characters' minds",
      "first person, told by a guest seated at the same table",
    ],
    correctIndex: 0,
    explanation: "No thoughts are reported; meaning rests on speech and gesture, such as the untouched cup and the long look at the window. There is no \"I\" in the passage, and no one's mind is entered.",
    partNumber: 2,
    partTitle: "The Point-of-View Toolkit: Person and Access",
  },
  {
    id: 'englit-narration-pov-ent-2b',
    question: "Read the opening of a novel below.\n\n*You'll want to know why I sold the farm, and I'll tell you, though you won't like it. It wasn't the money.*\n\nThe \"you\" in this passage is best understood as",
    options: [
      "the main character, whose actions the narration describes",
      "the author, whom the narrator blames for selling the farm",
      "a listener the narrator imagines as he tells his story",
      "a character who will take over the rest of the narration",
    ],
    correctIndex: 2,
    explanation: "The \"I\" sold the farm and tells the story, so \"you\" is a narratee he addresses, not a second-person character who acts. The narrator, not the author, is the one who sold the farm.",
    partNumber: 2,
    partTitle: "The Point-of-View Toolkit: Person and Access",
  },

  // Part 3 — Point of View vs. Perspective
  {
    id: 'englit-narration-pov-ent-3a',
    question: "Read the passage below.\n\n*The new family had a great many children and no carpets, and they hung their washing out where the whole street could see it. I am not one to judge, but a person does notice these things.*\n\nWhich best describes the narrator's perspective?",
    options: [
      "A warm curiosity about her new neighbors' lives",
      "A disapproving respectability that she claims not to hold",
      "An outsider's envy of a large and lively family",
      "A neutral observer's report free of any opinion",
    ],
    correctIndex: 1,
    explanation: "The details she selects (no carpets, washing on display) are the measures of a respectable household, and \"I am not one to judge\" announces the very judging she is doing. Her lens is revealed by selection and diction, not by an openly stated opinion.",
    partNumber: 3,
    partTitle: "Point of View vs. Perspective",
  },
  {
    id: 'englit-narration-pov-ent-3b',
    question: "Read the passage below.\n\n*When I told Mr. Hask the news, he went white and gripped the back of a chair, and I saw at once how little the loss of the house meant to him. A man who truly cared, I reflected, would have shouted.*\n\nThe narrator's account is best described as",
    options: [
      "doubtful in its report but sound in its interpretation",
      "accurate in both its report and its interpretation",
      "invented to make Mr. Hask appear guilty of a crime",
      "trustworthy in its report but doubtful in its reading",
    ],
    correctIndex: 3,
    explanation: "The physical details (going white, gripping a chair) are reported plainly and signal shock, but the narrator reads them as indifference because he expects a shout. Separating report from interpretation shows where the account fails.",
    partNumber: 3,
    partTitle: "Point of View vs. Perspective",
  },

  // Part 4 — Naive Narrators and the Gap Between Narrator and Reader
  {
    id: 'englit-narration-pov-ent-4a',
    question: "Read the passage below, narrated by a young boy.\n\n*Uncle Rafe was the most important man in town; he said so himself. On election day he gave every man at the tavern a dollar, and they all promised to vote the right way, which shows how much people respected him.*\n\nThe gap between narrator and reader chiefly invites readers to",
    options: [
      "admire Uncle Rafe's generosity toward the town",
      "suspect the boy of lying to protect his uncle",
      "see vote-buying where the boy sees esteem",
      "conclude that the boy secretly despises Rafe",
    ],
    correctIndex: 2,
    explanation: "The boy reports the facts honestly, but his judgment (\"how much people respected him\") misreads them; readers recognize bribery. A naive narrator is trusted on facts, not on conclusions, and nothing suggests he is lying.",
    partNumber: 4,
    partTitle: "Naive Narrators and the Gap Between Narrator and Reader",
  },
  {
    id: 'englit-narration-pov-ent-4b',
    question: "Read the passage below.\n\n*I knew it was wicked to hide the Delaney boy in the hayloft when the constable came, and Father had always said the law was the law. I prayed about it that night and asked to be made better. But in the morning I took him bread anyway, which I suppose shows what kind of girl I am.*\n\nHow are readers most likely to respond to the narrator?",
    options: [
      "They admire the act she takes as proof of her sinfulness.",
      "They share her view that she has done something shameful.",
      "They suspect she is lying about having hidden the boy at all.",
      "They conclude the constable was right to pursue the boy.",
    ],
    correctIndex: 0,
    explanation: "The gap runs in reverse: the harder she condemns herself in borrowed moral language, the more readers admire her kindness. Her honesty about the facts is never in doubt.",
    partNumber: 4,
    partTitle: "Naive Narrators and the Gap Between Narrator and Reader",
  },

  // Part 5 — How Point of View Controls Knowledge
  {
    id: 'englit-narration-pov-ent-5a',
    question: "Read the passage below.\n\n*Martha set the table for three and put the kettle on, humming; Daniel's train was due at six. Forty miles north, the six o'clock train stood in a cutting, its engine on its side in the snow.*\n\nThe shift in the second sentence primarily serves to",
    options: [
      "reveal what Martha is picturing as she prepares supper",
      "show that Daniel decided not to come home after all",
      "move the narration into Daniel's own point of view",
      "give readers knowledge that turns Martha's waiting into dread",
    ],
    correctIndex: 3,
    explanation: "The omniscient narrator moves to a place Martha cannot see, so readers know of the wreck while she hums and sets the table: dramatic irony created by point of view. Nothing in the sentence enters Daniel's mind or Martha's imagination.",
    partNumber: 5,
    partTitle: "How Point of View Controls Knowledge",
  },
  {
    id: 'englit-narration-pov-ent-5b',
    question: "A novelist wants readers to puzzle over a brilliant inventor's strange behavior for most of the book, learning his reasons only in the final chapter.\n\nWhich narration best serves this aim?",
    options: [
      "Third-person narration limited to the inventor's own thoughts",
      "A first-person witness who works beside the inventor",
      "An omniscient narrator who explains every motive as it arises",
      "The inventor himself, narrating his plans as he makes them",
    ],
    correctIndex: 1,
    explanation: "A witness narrator sees the inventor's actions but not his reasoning, so the reader shares the witness's puzzlement until an explanation comes. Any narration with access to the inventor's mind would give the reasons away.",
    partNumber: 5,
    partTitle: "How Point of View Controls Knowledge",
  },

  // Part 6 — Narration on the Exam
  {
    id: 'englit-narration-pov-ent-6a',
    question: "Read the passage below, narrated in the third person.\n\n*Lydia surveyed the ballroom. Half the county had come, and most of them in last year's gowns; really, it was a wonder anyone bothered. Her own dress, of course, had come from London.*\n\nThe judgment \"really, it was a wonder anyone bothered\" most likely reflects",
    options: [
      "her own condescending view, voiced in the narration",
      "the narrator's settled verdict on the county guests",
      "the guests' own weary opinion of the evening's ball",
      "the author's criticism of all fashionable society",
    ],
    correctIndex: 0,
    explanation: "The idiom \"really\" and the smug \"of course\" belong to Lydia, so the sentence is her thought rendered in third-person narration. Treating it as the narrator's or author's verdict is the classic trap of taking a character's view as fact.",
    partNumber: 6,
    partTitle: "Narration on the Exam",
  },
  {
    id: 'englit-narration-pov-ent-6b',
    question: "A Question 2 prompt asks students to analyze how an author conveys a complex portrait of a narrator returning to his hometown after twenty years.\n\nWhich thesis makes the narration itself the backbone of its argument?",
    options: [
      "The author uses first-person point of view, imagery and tone to show how the narrator feels about the town.",
      "The narrator returns to his hometown and describes the people and places he remembers from his childhood.",
      "Through a narrator who mocks the town in words yet lingers on its details, the author reveals a love he will not admit.",
      "The narrator is unreliable because he is biased against his hometown and so cannot be trusted by the reader.",
    ],
    correctIndex: 2,
    explanation: "This thesis claims something about what the telling reveals: a gap between the narrator's words and his attention. The others list devices, summarize, or apply a label without saying what the narration makes the reader see.",
    partNumber: 6,
    partTitle: "Narration on the Exam",
  },

  // Part 7 — Narration Synthesis: Reading Montresor
  {
    id: 'englit-narration-pov-ent-7a',
    question: "Read the passage below.\n\n*You asked why I never went back to Harlow, and I have told you about the debts, and the quarrel with my brother, and the bad roads that winter. All of that is true. I see I have not mentioned Ellen. Well. The roads really were very bad.*\n\nThe narrator's return to \"the roads\" in the final sentence most likely suggests that he",
    options: [
      "considers the weather the true and only reason",
      "has forgotten who Ellen was after so many years",
      "retreats to a safe excuse to avoid a hard one",
      "wants his listener to ask him about the journey",
    ],
    correctIndex: 2,
    explanation: "He names Ellen, breaks off (\"Well.\"), and swerves back to the weather, so the evasion itself tells the listener what he will not explain. The broken-off sentence shows he remembers her all too well.",
    partNumber: 7,
    partTitle: "Narration Synthesis: Reading Montresor",
  },
  {
    id: 'englit-narration-pov-ent-7b',
    question: "A narrator ends her account of the year she ran her late father's hardware store into bankruptcy:\n\n*Everyone said Father would have done the same. I'm sure they meant it. I have their letters somewhere, if you'd like to see them.*\n\nWhich reading best accounts for the tension in these lines?",
    options: [
      "Her eagerness to prove she was blameless suggests she doubts it herself.",
      "Her calm tone shows that she has fully made her peace with the loss.",
      "Her offer of the letters shows that she wants her listener to judge her.",
      "Her words prove that her father would have made the same choices.",
    ],
    correctIndex: 0,
    explanation: "She reports others' reassurance, insists they meant it and then offers documents no one asked for, and the pile of proof betrays the doubt it is meant to settle. The letters record other people's opinions, so they prove nothing about her father, and her calm surface is what the tension complicates.",
    partNumber: 7,
    partTitle: "Narration Synthesis: Reading Montresor",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "The Point-of-View Toolkit: Person and Access" },
    { partNumber: 3, partTitle: "Point of View vs. Perspective" },
    { partNumber: 4, partTitle: "Naive Narrators and the Gap Between Narrator and Reader" },
    { partNumber: 5, partTitle: "How Point of View Controls Knowledge" },
    { partNumber: 6, partTitle: "Narration on the Exam" },
    { partNumber: 7, partTitle: "Narration Synthesis: Reading Montresor" },
  ]
}
