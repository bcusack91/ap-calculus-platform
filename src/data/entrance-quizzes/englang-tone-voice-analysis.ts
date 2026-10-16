/**
 * Entrance Quiz — Tone and Voice Analysis (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-tone-voice-analysis-ent-1a',
    question: "A newspaper columnist known for her dry, conversational style writes one week about a neighborhood festival with gentle amusement and the next week about a fatal fire with grave restraint. Which statement best describes the two columns?",
    options: [
      "Her voice stays the same while her tone changes with each subject",
      "Her tone stays the same while her voice changes with each subject",
      "She has two separate voices, one for good news and one for bad",
      "Her readers' mood decides the tone of each column she writes",
    ],
    correctIndex: 0,
    explanation: "Her dry, conversational persona is her voice, which persists across columns; amusement and gravity are attitudes toward particular subjects, which is tone. Voice is the stable element here, and mood belongs to readers, not to the writer's choices.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-tone-voice-analysis-ent-1b',
    question: "A student describes an editorial about a broken promise to veterans as \"angry.\" The editorial's anger is controlled and aimed at an injustice. Which word names this tone most precisely?",
    options: [
      "frantic",
      "petulant",
      "indignant",
      "melancholy",
    ],
    correctIndex: 2,
    explanation: "\"Indignant\" means angry at injustice, often with control, which fits the editorial. \"Frantic\" lacks control, \"petulant\" suggests childish sulking and \"melancholy\" names sadness rather than anger.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Voice in Depth: Persona, Register, and Stevenson's "An Apology for Idlers"
  {
    id: 'englang-tone-voice-analysis-ent-2a',
    question: "Read the passage below.\n\n*Having served thirty-one years as this county's fire marshal, I have learned to distrust any building that its owner calls \"fireproof.\" I have seen too many of them burn.*\n\nThe persona the writer presents is best described as",
    options: [
      "a nervous newcomer unsure of his own facts",
      "a seasoned expert whom experience made wary",
      "a playful humorist poking fun at architects",
      "a salesman promoting new safety equipment",
    ],
    correctIndex: 1,
    explanation: "Three decades on the job and the blunt \"I have seen too many of them burn\" build the voice of an authority whose experience has taught him caution. He is neither new nor joking, and he sells nothing.",
    partNumber: 2,
    partTitle: "Voice in Depth: Persona, Register, and Stevenson's \"An Apology for Idlers\"",
  },
  {
    id: 'englang-tone-voice-analysis-ent-2b',
    question: "A student arguing that high schools should start later writes for an audience of skeptical adults and adopts a wry, self-deprecating voice: \"As a former champion napper, I may be biased.\" For this audience, the voice most likely",
    options: [
      "proves the scientific claims about how teenagers sleep",
      "signals that the writer does not take the issue seriously",
      "shows contempt for adults who choose to wake up early",
      "disarms readers expecting a lazy excuse, so they will listen",
    ],
    correctIndex: 3,
    explanation: "By joking about her own bias first, the writer heads off the suspicion that she simply wants to sleep in, which makes skeptical readers more willing to hear her case. A voice proves nothing scientific, the joke does not dismiss the issue and it mocks only herself.",
    partNumber: 2,
    partTitle: "Voice in Depth: Persona, Register, and Stevenson's \"An Apology for Idlers\"",
  },

  // Part 3 — Two Targets of Tone: Lincoln's Letter to Fanny McCullough and Douglass's Letter to Ida B. Wells
  {
    id: 'englang-tone-voice-analysis-ent-3a',
    question: "A coach writes to her team the day after it lost a championship game:\n\n*We lost, and we lost badly; there is no use pretending otherwise. But I have never been prouder of a group of people who refused to quit in the fourth quarter.*\n\nThe coach's tone is best described as",
    options: [
      "candid about the loss, warm toward the players",
      "bitter about the loss and angry at the players",
      "indifferent to the loss and cheerful toward the players",
      "despairing about the loss and apologetic to the players",
    ],
    correctIndex: 0,
    explanation: "\"There is no use pretending otherwise\" is frank about the defeat, and \"never been prouder\" is warm toward the team. Nothing blames the players, the coach clearly cares about the loss and she does not despair or apologize.",
    partNumber: 3,
    partTitle: "Two Targets of Tone: Lincoln's Letter to Fanny McCullough and Douglass's Letter to Ida B. Wells",
  },
  {
    id: 'englang-tone-voice-analysis-ent-3b',
    question: "A resident's letter calls the city's decision to postpone repairs on a playground \"disappointing\" and asks the council to \"reconsider at the next meeting.\" A student describes the letter's tone as \"outraged.\" What is the main problem with this description?",
    options: [
      "\"Outraged\" is the right word but needs a modifier to be precise",
      "The diction is mild, so \"outraged\" overstates the intensity",
      "The letter is neutral, so it does not have any tone at all",
      "Tone words should not be used to describe letters to officials",
    ],
    correctIndex: 1,
    explanation: "\"Disappointing\" and a polite request to reconsider sit near the mild end of the scale; \"displeased\" or \"disappointed\" fits, while \"outraged\" is the most intense word available. The letter does have a tone, and letters can be described with tone words like any text.",
    partNumber: 3,
    partTitle: "Two Targets of Tone: Lincoln's Letter to Fanny McCullough and Douglass's Letter to Ida B. Wells",
  },

  // Part 4 — Tracking Tone Shifts: Douglass's Letter to His Former Enslaver, 1848
  {
    id: 'englang-tone-voice-analysis-ent-4a',
    question: "Read the passage below.\n\n*For twenty years I worked at the plant, and I will say this for it: the coffee was hot and the paychecks came on time. Then, on a Tuesday, a man in a gray suit read us a statement and left before anyone could ask a question. Who decided this? Who will tell my daughter her college fund is gone?*\n\nThe final two sentences mark a shift in tone best described as a move from",
    options: [
      "anger toward a calm acceptance of what has happened",
      "detached reporting toward playful and teasing humor",
      "praise of the company toward gratitude to its managers",
      "wry recollection toward anguished accusation",
    ],
    correctIndex: 3,
    explanation: "The dry, almost affectionate memory gives way to questions that demand who is responsible and voice a father's distress. The passage ends in anguish, not acceptance or humor, and it thanks no one.",
    partNumber: 4,
    partTitle: "Tracking Tone Shifts: Douglass's Letter to His Former Enslaver, 1848",
  },
  {
    id: 'englang-tone-voice-analysis-ent-4b',
    question: "Read the passage below.\n\n*For twenty years I worked at the plant, and I will say this for it: the coffee was hot and the paychecks came on time. Then, on a Tuesday, a man in a gray suit read us a statement and left before anyone could ask a question. Who decided this? Who will tell my daughter her college fund is gone?*\n\nThe writer most likely opens with the dry memory of hot coffee and on-time paychecks because",
    options: [
      "it shows that he still prefers the plant to every other employer",
      "it supplies evidence about the plant's general working conditions",
      "its restraint makes the later anguish read as earned, not habitual",
      "it signals that the passage will remain lighthearted to the end",
    ],
    correctIndex: 2,
    explanation: "A writer who begins by giving the plant its due cannot be dismissed as a chronic complainer, so the break into anguish carries weight. He is not ranking employers, the detail is not a survey of conditions and the passage does not stay light.",
    partNumber: 4,
    partTitle: "Tracking Tone Shifts: Douglass's Letter to His Former Enslaver, 1848",
  },

  // Part 5 — Double Tones and Common Misreadings: Chesterton's "On Running After One's Hat"
  {
    id: 'englang-tone-voice-analysis-ent-5a',
    question: "Read the sentence below.\n\n*My aunt, who has never once in her life been on time, assured us that she would arrive \"promptly at noon,\" and so we planned dinner for six.*\n\nThe writer's tone is best described as",
    options: [
      "affectionately wry",
      "bitterly sarcastic",
      "anxious and fearful",
      "coldly neutral",
    ],
    correctIndex: 0,
    explanation: "The gap between the aunt's promise and the family's plan is gentle, amused irony, not an attack meant to wound. Nothing is fearful, and the joke is far from neutral.",
    partNumber: 5,
    partTitle: "Double Tones and Common Misreadings: Chesterton's \"On Running After One's Hat\"",
  },
  {
    id: 'englang-tone-voice-analysis-ent-5b',
    question: "Read the passage below.\n\n*Our landlord, a generous man, has raised the rent only twice this year, and he has kindly allowed us to keep the radiator that has not worked since March.*\n\nWhich description of the passage's tone is most accurate?",
    options: [
      "Sincerely grateful, as the writer praises the landlord",
      "Neutral, as the writer simply reports what happened",
      "Confused, as the writer cannot settle on a single view",
      "Mock-grateful, with real anger beneath the praise",
    ],
    correctIndex: 3,
    explanation: "Words like \"generous\" and \"kindly\" are attached to rent increases and a broken radiator, so the praise is ironic and the grievance underneath is real. Taking the praise at face value misses the irony, and the writer's view is neither neutral nor unsettled.",
    partNumber: 5,
    partTitle: "Double Tones and Common Misreadings: Chesterton's \"On Running After One's Hat\"",
  },

  // Part 6 — Exam Practice: Dickens on the Eastern Penitentiary, 1842
  {
    id: 'englang-tone-voice-analysis-ent-6a',
    question: "From a letter opposing the closing of a rural post office:\n\n*The postal service tells us that our post office is \"underutilized.\" I counted the people who came through its door last Tuesday: forty-one, among them two farmers mailing seed orders and a widow collecting the pension check she has no other way to cash.*\n\nThe quotation marks around \"underutilized\" chiefly convey",
    options: [
      "the writer's respect for the postal service's careful study",
      "doubt about the official word and what it leaves out",
      "that the word is a technical term readers will need to learn",
      "that the writer agrees the office is seldom used by anyone",
    ],
    correctIndex: 1,
    explanation: "Setting the agency's word apart and answering it with a head count signals that the writer distrusts the label. The writer does not respect the study, is not teaching vocabulary and plainly disagrees that the office goes unused.",
    partNumber: 6,
    partTitle: "Exam Practice: Dickens on the Eastern Penitentiary, 1842",
  },
  {
    id: 'englang-tone-voice-analysis-ent-6b',
    question: "From a letter opposing the closing of a rural post office:\n\n*The postal service tells us that our post office is \"underutilized.\" I counted the people who came through its door last Tuesday: forty-one, among them two farmers mailing seed orders and a widow collecting the pension check she has no other way to cash.*\n\nThe details about the farmers and the widow chiefly serve to",
    options: [
      "show that the post office earns a large yearly profit",
      "suggest that farmers mail more letters than other people",
      "give faces to the people the official word overlooks",
      "prove that the writer works behind the post office counter",
    ],
    correctIndex: 2,
    explanation: "The farmers and the widow turn a count into particular people who depend on the office, which the abstract label leaves out. Nothing concerns profit, compares mailing habits or reveals the writer's job.",
    partNumber: 6,
    partTitle: "Exam Practice: Dickens on the Eastern Penitentiary, 1842",
  },

  // Part 7 — Review: A Complete Toolkit for Tone and Voice
  {
    id: 'englang-tone-voice-analysis-ent-7a',
    question: "A student's argument essay includes the sentence \"Anyone who supports year-round school is completely clueless.\" Which revision gives the essay a voice most likely to earn a skeptical reader's trust?",
    options: [
      "Year-round school might perhaps be somewhat less than ideal for some.",
      "It is incontrovertibly manifest that year-round schooling is deleterious.",
      "Supporters value continuity but underestimate what lost summers cost.",
      "Supporters of year-round school are, to put it nicely, a bit clueless.",
    ],
    correctIndex: 2,
    explanation: "The measured revision describes the other side fairly and then states a clear objection, which is the voice of a confident, fair writer. The others hedge into nothing, inflate the diction or keep the insult.",
    partNumber: 7,
    partTitle: "Review: A Complete Toolkit for Tone and Voice",
  },
  {
    id: 'englang-tone-voice-analysis-ent-7b',
    question: "A letter to a city council opens with courteous praise of the council's recent work and ends with a sharp demand for action on a dangerous intersection. Which sentence from a student's analysis best explains the function of this shift?",
    options: [
      "Because the praise shows good faith, the closing demand sounds fair rather than hostile.",
      "The writer is polite at first and then sharp, which shows strong feelings.",
      "The tone shifts from praise to demand in the final paragraph of the letter.",
      "The letter has several tones, including polite and sharp, which make it interesting.",
    ],
    correctIndex: 0,
    explanation: "Only this sentence explains what the shift accomplishes with the audience: the earlier courtesy makes the later demand credible. The others locate, restate or list the tones without explaining their function.",
    partNumber: 7,
    partTitle: "Review: A Complete Toolkit for Tone and Voice",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Voice in Depth: Persona, Register, and Stevenson's \"An Apology for Idlers\"" },
    { partNumber: 3, partTitle: "Two Targets of Tone: Lincoln's Letter to Fanny McCullough and Douglass's Letter to Ida B. Wells" },
    { partNumber: 4, partTitle: "Tracking Tone Shifts: Douglass's Letter to His Former Enslaver, 1848" },
    { partNumber: 5, partTitle: "Double Tones and Common Misreadings: Chesterton's \"On Running After One's Hat\"" },
    { partNumber: 6, partTitle: "Exam Practice: Dickens on the Eastern Penitentiary, 1842" },
    { partNumber: 7, partTitle: "Review: A Complete Toolkit for Tone and Voice" },
  ]
}
