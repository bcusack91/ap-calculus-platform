/**
 * Entrance Quiz — The Rhetorical Situation (Reading) (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-rhetorical-situation-ent-1a',
    question: "Read the opening of a letter to a local newspaper.\n\n*Last Thursday, a third cyclist this year was struck at the corner of Elm and Fifth. I have walked that crossing with my daughter every school morning for six years, and I have written to this paper about it twice before. This time I am asking the council for one thing: install the signal it approved and then shelved three years ago.*\n\nWhich of the following is the exigence of the letter?",
    options: [
      "The writer's six years of walking her daughter across the Elm and Fifth crossing",
      "The latest collision at the crossing, the third of the year",
      "The writer's request that the council finally install the shelved signal",
      "The council's earlier decision to approve the signal and then shelve it",
    ],
    correctIndex: 1,
    explanation: "\"This time\" ties the letter to the newest event: the cyclist struck last Thursday is what prompted the writer to write now. The request is the purpose, and the shelved signal and her years of walking are background, not the trigger.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-rhetorical-situation-ent-1b',
    question: "Read the opening of a notice.\n\n*You already know the drill: goggles on, phones in the lockers, no food past the yellow line. What you may not know is why we painted a second line by the fume hoods this fall.*\n\nThe writer's choices suggest that the intended audience is",
    options: [
      "students who have spent earlier terms working in this lab",
      "visitors touring the laboratory for the very first time",
      "administrators deciding on next year's lab budget",
      "safety inspectors checking the lab for violations",
    ],
    correctIndex: 0,
    explanation: "\"You already know the drill\" and the casual list of familiar rules assume readers who have used the lab before; only the new line needs explaining. First-time visitors would need the old rules explained, and budget makers or inspectors would not be addressed this casually.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — The Six Components in Depth
  {
    id: 'englang-rhetorical-situation-ent-2a',
    question: "A high school principal writes to families the day after the state releases scores showing a sharp drop in eighth-grade reading. Her letter states that small-group tutoring works and asks families to sign up by October 1. Over the past three years, the district has cut two reading-specialist positions.\n\nWhich detail belongs to the letter's context rather than to its exigence, purpose or message?",
    options: [
      "The state's release of the new reading scores",
      "The principal's request that families sign up by October 1",
      "Earlier staffing reductions in reading support",
      "The principal's claim that small-group tutoring works",
    ],
    correctIndex: 2,
    explanation: "The staffing cuts are a wider condition that shapes how families will read the letter. The score release is the exigence, signing up is the purpose and the claim about tutoring is the message.",
    partNumber: 2,
    partTitle: "The Six Components in Depth",
  },
  {
    id: 'englang-rhetorical-situation-ent-2b',
    question: "A worker speaks to coworkers the night before they vote on a new contract.\n\n*I've stood on that line beside most of you since before the new plant opened. Some of you will vote yes tomorrow and some of you no, and I won't call either side foolish. But every one of us wants the same thing: a pension that is still there when we need it.*\n\nThe speaker's reference to the pension primarily serves to",
    options: [
      "reveal that she has already decided how she will vote",
      "establish her expertise on the details of pension law",
      "suggest that the dispute over the contract is settled",
      "unite a divided group around a concern all its members share",
    ],
    correctIndex: 3,
    explanation: "Having acknowledged that her listeners disagree, she turns to the one value they hold in common, which lets her speak to both sides at once. She never states her vote, claims legal expertise or says the dispute is over.",
    partNumber: 2,
    partTitle: "The Six Components in Depth",
  },

  // Part 3 — Case Studies: Two Texts from 1776
  {
    id: 'englang-rhetorical-situation-ent-3a',
    question: "Both passages concern the planned closing of a rural hospital.\n\nPassage 1, from a letter by the hospital's board to the state health department: *The Board respectfully submits the following figures for the Department's review, together with the travel times residents would face to the nearest emergency room.*\n\nPassage 2, from a nurse's speech at a rally: *They are counting on us to go home quietly. We will not. Not tonight, not next week, not until these doors stay open.*\n\nWhich statement best explains why the two passages differ so sharply in voice?",
    options: [
      "The board wants officials who weigh evidence to approve its case, while the nurse wants supporters to stay committed",
      "The nurse spoke before any decision, while the board wrote after the closing was settled",
      "The nurse knows less than the board about the hospital, so she relies on feeling rather than on figures",
      "The nurse speaks to state officials who distrust figures, while the board writes to the hospital's own staff",
    ],
    correctIndex: 0,
    explanation: "Same cause, different situations: formal figures suit officials who must be persuaded by evidence, and short defiant sentences suit a crowd that must be kept from giving up. Nothing in the passages supports a difference in timing or knowledge, and the audiences are reversed in the last option.",
    partNumber: 3,
    partTitle: "Case Studies: Two Texts from 1776",
  },
  {
    id: 'englang-rhetorical-situation-ent-3b',
    question: "A mayor speaks to residents a month after a flood.\n\n*No one in this room needs me to tell you how long the water stayed. You filled the sandbags. You pulled up the carpets. You know. What I can tell you is that this river has never once kept this town down for good.*\n\nThe mayor's open acknowledgment of the hardship is effective primarily because",
    options: [
      "it informs residents of damage they had not yet heard about",
      "it lets the mayor avoid announcing any plan for rebuilding",
      "it shifts responsibility for the damage onto the residents",
      "listeners who lived through it would distrust any denial",
    ],
    correctIndex: 3,
    explanation: "His audience endured the flood firsthand, so minimizing it would ring false; admitting it earns the credibility he needs for his hopeful claim. He tells them nothing new, blames no one and is not dodging a plan in this excerpt.",
    partNumber: 3,
    partTitle: "Case Studies: Two Texts from 1776",
  },

  // Part 4 — Close Reading: Douglass's "What to the Slave Is the Fourth of July?"
  {
    id: 'englang-rhetorical-situation-ent-4a',
    question: "A new principal speaks to her teachers at their first meeting of the year.\n\n*When I was hired, I was told this was a school with problems. I have now spent a week in your classrooms. I have not seen one problem I would not be proud to work on beside you.*\n\nThe move from \"a school with problems\" to \"your classrooms\" primarily serves to",
    options: [
      "praise the hiring committee for its honest view of the school",
      "side with the teachers against the label the school was given",
      "warn the teachers that she will be watching them closely",
      "suggest that the school's problems lie mainly in its building",
    ],
    correctIndex: 1,
    explanation: "She reports the outside verdict in impersonal terms, then turns to what she saw in rooms that belong to her listeners and casts herself as working beside them. She does not endorse the committee's view, threatens no one and says nothing about the building.",
    partNumber: 4,
    partTitle: "Close Reading: Douglass's \"What to the Slave Is the Fourth of July?\"",
  },
  {
    id: 'englang-rhetorical-situation-ent-4b',
    question: "A neighborhood association voted unanimously last spring to oppose a highway that would cut through a poorer district across town. Since the vote, no member has attended a hearing or written to an official. A guest speaker tells them:\n\n*What a comfort it must be to have opposed the highway. The bulldozers, I am sure, will be very impressed by your resolution.*\n\nWhy is irony a fitting strategy for this audience?",
    options: [
      "Its members support the highway, so the speaker needs evidence to change their minds",
      "Its members distrust the speaker, so humor is needed to win their goodwill first",
      "Its members agree in principle, so the speaker must unsettle their complacency",
      "Its members do not know the plan, so the speaker must make its facts vivid",
    ],
    correctIndex: 2,
    explanation: "The association already opposes the highway; what it lacks is action. Irony exposes the gap between its comfortable resolution and the bulldozers, which arguing the settled point could not do. The audience is neither opposed, uninformed nor shown to be distrustful.",
    partNumber: 4,
    partTitle: "Close Reading: Douglass's \"What to the Slave Is the Fourth of July?\"",
  },

  // Part 5 — Complex Situations: Divided Audiences and Layered Purposes
  {
    id: 'englang-rhetorical-situation-ent-5a',
    question: "A college president issues a statement after a contested campus march.\n\n*To the students who marched on Tuesday: your concern for the workers who clean these halls does this college credit. To those who found the march disruptive: the right to assemble is one this college exists to protect, and so is your right to say you were inconvenienced. To all of you: my office door is open Friday.*\n\nThe statement's structure primarily serves to",
    options: [
      "side with the marchers while appearing to stay strictly neutral",
      "summarize the march for readers who were not on campus",
      "warn both groups that any further protests will be punished",
      "address rival groups in turn, then join them in one invitation",
    ],
    correctIndex: 3,
    explanation: "Each group is addressed directly and granted something it values before \"To all of you\" folds both into a shared next step. The statement credits both sides, threatens no one and does not narrate the march.",
    partNumber: 5,
    partTitle: "Complex Situations: Divided Audiences and Layered Purposes",
  },
  {
    id: 'englang-rhetorical-situation-ent-5b',
    question: "From a eulogy delivered at a public funeral attended by the city council:\n\n*In his career, the captain ran into eleven burning buildings. He walked out of ten. The eleventh had no working sprinklers, and its owner had been cited for that four times. We bury him today. Tomorrow, this council votes on the sprinkler ordinance.*\n\nWhich statement best describes the purposes of the passage?",
    options: [
      "It honors the dead while steering listeners toward a decision",
      "It honors the dead while keeping clear of the fire's causes",
      "It argues for the ordinance and gives the captain little attention",
      "It blames the council for the death and calls for its resignation",
    ],
    correctIndex: 0,
    explanation: "The passage mourns the captain and, in the same breath, points the council to tomorrow's vote, so one purpose serves the other. It names the missing sprinklers directly, keeps the captain at the center and never calls for anyone to resign.",
    partNumber: 5,
    partTitle: "Complex Situations: Divided Audiences and Layered Purposes",
  },

  // Part 6 — AP Practice: Rhetorical Analysis of Susan B. Anthony (1873)
  {
    id: 'englang-rhetorical-situation-ent-6a',
    question: "*Headnote: A nurse addressed the county board, which must vote on whether to close the only clinic in the county that stays open at night. Most board members live in the county seat, twenty miles from the clinic.*\n\n*Members of the board: tonight, after this meeting, you will drive home on a good road to a town with a hospital. The families I serve would drive those same twenty miles at two in the morning, with a feverish child in the back seat, if they own a car at all.*\n\nWhich detail from the headnote best explains why the nurse describes the board's drive home?",
    options: [
      "The board members must vote on whether the clinic closes",
      "She works as a nurse for families near the clinic",
      "Most members live in the county seat, far from the clinic",
      "The clinic is the only one in the county open at night",
    ],
    correctIndex: 2,
    explanation: "Because the members live in the county seat, their own easy drive home becomes a measure of the trip the closing would force on others. The other details set up the situation but do not explain why she mentions the board's drive.",
    partNumber: 6,
    partTitle: "AP Practice: Rhetorical Analysis of Susan B. Anthony (1873)",
  },
  {
    id: 'englang-rhetorical-situation-ent-6b',
    question: "*Headnote: A nurse addressed the county board, which must vote on whether to close the only clinic in the county that stays open at night. Most board members live in the county seat, twenty miles from the clinic.*\n\n*Members of the board: tonight, after this meeting, you will drive home on a good road to a town with a hospital. The families I serve would drive those same twenty miles at two in the morning, with a feverish child in the back seat, if they own a car at all.*\n\nThe contrast between the two drives primarily serves to",
    options: [
      "make the board feel the distance its vote would impose on others",
      "praise the board for keeping the county's roads in good repair",
      "suggest that board members ought to move closer to the clinic",
      "show that most families in the county do not own any car",
    ],
    correctIndex: 0,
    explanation: "Setting the members' routine drive beside a frightened family's night trip turns an abstract vote into a burden they can picture. The road is a backdrop, not a compliment, she asks for no move, and \"if they own a car at all\" raises a doubt rather than reporting a statistic.",
    partNumber: 6,
    partTitle: "AP Practice: Rhetorical Analysis of Susan B. Anthony (1873)",
  },

  // Part 7 — Synthesis Review: Reading Any Text Through Its Situation
  {
    id: 'englang-rhetorical-situation-ent-7a',
    question: "*Headnote: A newly hired police chief, who came from another city, speaks at a church in a neighborhood where an officer recently shot an unarmed teenager. Residents have long said the department ignores them. His remarks are broadcast, and the department's officers are watching.*\n\nWhich statement best names the central tension the chief faces?",
    options: [
      "He must justify the department's budget to residents who want lower taxes",
      "He must prove his qualifications to residents who doubt his training",
      "He must earn residents' trust without seeming to abandon his own officers",
      "He must announce new rules to officers without letting residents hear them",
    ],
    correctIndex: 2,
    explanation: "Two audiences pull in opposite directions: residents who feel ignored and officers who will judge whether he stands by them. Nothing in the headnote raises budgets, his training or secret rules.",
    partNumber: 7,
    partTitle: "Synthesis Review: Reading Any Text Through Its Situation",
  },
  {
    id: 'englang-rhetorical-situation-ent-7b',
    question: "*Headnote: A newly hired police chief, who came from another city, speaks at a church in a neighborhood where an officer recently shot an unarmed teenager. Residents have long said the department ignores them.*\n\n*I was not here when this happened, and I will not pretend to know this neighborhood better than you do. I will be in this building every Thursday night for the next three months. Come and tell me what I need to know.*\n\nThe chief's statement that he \"will not pretend to know this neighborhood better than you do\" primarily serves to",
    options: [
      "assure his officers that he will not interfere with their work",
      "excuse the department from blame for the recent shooting",
      "establish his authority over residents unused to policing",
      "show residents who feel unheard that he means to listen first",
    ],
    correctIndex: 3,
    explanation: "For people who say the department ignores them, admitting what he does not know and promising weekly sessions signals that he will listen. The line addresses residents, not officers, and it neither excuses the department nor asserts authority.",
    partNumber: 7,
    partTitle: "Synthesis Review: Reading Any Text Through Its Situation",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "The Six Components in Depth" },
    { partNumber: 3, partTitle: "Case Studies: Two Texts from 1776" },
    { partNumber: 4, partTitle: "Close Reading: Douglass's \"What to the Slave Is the Fourth of July?\"" },
    { partNumber: 5, partTitle: "Complex Situations: Divided Audiences and Layered Purposes" },
    { partNumber: 6, partTitle: "AP Practice: Rhetorical Analysis of Susan B. Anthony (1873)" },
    { partNumber: 7, partTitle: "Synthesis Review: Reading Any Text Through Its Situation" },
  ]
}
