/**
 * Entrance Quiz — Social Commentary in Drama (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-social-commentary-drama-ent-1a',
    question: "Read the exchange below, from a play set in a large house.\n\n**Mrs. Vane.** Sit down, Ellen. No, not there. There.\n**Ellen.** Yes, ma'am.\n**Mrs. Vane.** You may pour. Not too much for Mr. Vane; he's watching his health. And none for yourself, of course.\n\nThe exchange chiefly reveals",
    options: [
      "a warm friendship between two social equals",
      "a mistress ruling her servant's place and speech",
      "Ellen's secret control over the whole household",
      "Mrs. Vane's concern for Ellen's health and comfort",
    ],
    correctIndex: 1,
    explanation: "Mrs. Vane decides where Ellen sits, what she does and what she may not have, while Ellen's only words are \"Yes, ma'am.\" Who controls speech, space and goods is how drama shows power.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-social-commentary-drama-ent-1b',
    question: "In Act 1 of a play, a headmistress tells parents at prize day that her school treats its scholarship girls \"exactly like every other pupil.\" In Act 2, alone with a teacher, she orders the scholarship girls moved to the back row for the school photograph.\n\nThe contrast between the two scenes chiefly serves to",
    options: [
      "show that she has sincerely changed her mind",
      "prove that the teacher secretly runs the school",
      "provide comic relief before the play's climax",
      "expose the gap between her public image and her practice",
    ],
    correctIndex: 3,
    explanation: "The play sets the public speech against a private order, so the audience sees what the parents cannot: her fairness is a performance. Public versus private is a core way drama stages social critique.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — How a Play Argues: The Problem Play and Social Realism
  {
    id: 'englit-social-commentary-drama-ent-2a',
    question: "A realist play opens with this stage direction:\n\n*[A narrow kitchen in a mill town. A calendar from the mill hangs over the stove. On the table, a stack of unpaid bills is held down by a pay envelope. It is Friday.]*\n\nThe stage direction chiefly serves to",
    options: [
      "establish a carefree, comic mood for the family",
      "tell the actors exactly where they should stand",
      "show the family's reliance on the mill at once",
      "suggest that the family is wealthy and secure",
    ],
    correctIndex: 2,
    explanation: "The mill's calendar, the bills and the pay envelope set out the household's economics in objects, so the room itself states the problem the play will explore. Realist settings carry social meaning.",
    partNumber: 2,
    partTitle: "How a Play Argues: The Problem Play and Social Realism",
  },
  {
    id: 'englit-social-commentary-drama-ent-2b',
    question: "A play ends with a widow refusing to sign her late husband's land over to a railway company. The final stage direction reads:\n\n*[She tears the contract in half. Outside, the whistle of the first train. Curtain.]*\n\nThe final stage direction most likely serves to",
    options: [
      "show that the railway company has given up its plans",
      "leave the audience to judge if her stand can last",
      "resolve the play's conflict wholly in the widow's favor",
      "indicate that the widow will soon leave town by train",
    ],
    correctIndex: 1,
    explanation: "Her defiant gesture is answered at once by the sound of the train already running, so the ending poses a question rather than a verdict. A problem play typically leaves its social question for the audience.",
    partNumber: 2,
    partTitle: "How a Play Argues: The Problem Play and Social Realism",
  },

  // Part 3 — A Doll's House: Power, Money and the Public/Private Divide
  {
    id: 'englit-social-commentary-drama-ent-3a',
    question: "Read the exchange below.\n\n**Clerk.** The will is unsigned, madam. It has no force.\n**Widow.** He wrote every word of it himself. He meant it.\n**Clerk.** What he meant is not my concern. What he signed is.\n\nThe exchange chiefly stages a conflict between",
    options: [
      "legal form and private intention",
      "two heirs competing for one estate",
      "a clerk's honesty and a widow's greed",
      "old church law and new civil law",
    ],
    correctIndex: 0,
    explanation: "The clerk speaks for a public system that sees only signatures; the widow speaks for a private world where meaning lies in intention. Like the clash between law and motive in social drama, neither side is simply a villain.",
    partNumber: 3,
    partTitle: "A Doll's House: Power, Money and the Public/Private Divide",
  },
  {
    id: 'englit-social-commentary-drama-ent-3b',
    question: "Read the speech below. A father has just learned that his son was expelled from university for organizing a strike on behalf of the college servants.\n\n**Father.** I don't doubt your reasons, Edward. Your reasons do you credit. But the Fortescues dine with us on Thursday. You will tell them you are resting after an illness, and you will tell it well.\n\nThe father's response chiefly reveals that",
    options: [
      "he admires his son's stand and plans to defend it publicly",
      "he fears above all that his son has fallen seriously ill",
      "he blames the Fortescues for the expulsion",
      "for him appearances outweigh his son's principles",
    ],
    correctIndex: 3,
    explanation: "He grants the son's reasons in two short sentences and then turns to the dinner guests and a cover story, so reputation governs the family's response. The illness is the lie he orders, not a fear.",
    partNumber: 3,
    partTitle: "A Doll's House: Power, Money and the Public/Private Divide",
  },

  // Part 4 — Satire on Stage: Target, Norm and Method
  {
    id: 'englit-social-commentary-drama-ent-4a',
    question: "Read the speech below, from a comedy about a town council.\n\n**Alderman.** I take a little from the poor-box, yes. But only on Tuesdays, and never more than I can carry. A man must have standards.\n\nThe satire in this speech works chiefly through",
    options: [
      "deflation, as a grand speech ends in a stumble",
      "mistaken identity, as he is taken for another man",
      "inversion, treating rules for stealing as virtues",
      "understatement of the town's wealth and comfort",
    ],
    correctIndex: 2,
    explanation: "The alderman presents rules about when and how much he steals as if they were principles, turning vice into a kind of virtue. The implied norm is honesty, which his \"standards\" mock.",
    partNumber: 4,
    partTitle: "Satire on Stage: Target, Norm and Method",
  },
  {
    id: 'englit-social-commentary-drama-ent-4b',
    question: "A comedy mocks a family of social climbers who rename their dog \"Viscount\" and practice fainting before parties. No one is harmed, and the play ends with the family happily married off.\n\nThe satire is best described as",
    options: [
      "Horatian, genially mocking folly",
      "Juvenalian, bitterly exposing vice",
      "a tragedy disguised as a light comedy",
      "a problem play with an unsettled ending",
    ],
    correctIndex: 0,
    explanation: "The targets are vanity and pretension, treated with amused laughter and a happy ending, the marks of Horatian satire. Nothing in the play aims at cruelty or corruption with anger.",
    partNumber: 4,
    partTitle: "Satire on Stage: Target, Norm and Method",
  },

  // Part 5 — Indirect Commentary: Subtext, Chekhov and Common Misconceptions
  {
    id: 'englit-social-commentary-drama-ent-5a',
    question: "Read the exchange below.\n\n**Mother.** You'll write, of course. They say the post from the coast is very slow.\n**Son.** The boat sails at six.\n**Mother.** Your father always wrote on Sundays. Every Sunday, for forty years.\n**Son.** I should see to the trunk.\n\nThe exchange chiefly suggests",
    options: [
      "a cheerful farewell between two eager travelers",
      "the son's secret plan to cancel his voyage",
      "a mother holding on to her son and a son already gone",
      "the mother's anger that her husband never wrote",
    ],
    correctIndex: 2,
    explanation: "The two speakers talk past each other: she answers in letters and memory, he in departure times and luggage. The feeling lies in the gap between their replies, not in any stated emotion.",
    partNumber: 5,
    partTitle: "Indirect Commentary: Subtext, Chekhov and Common Misconceptions",
  },
  {
    id: 'englit-social-commentary-drama-ent-5b',
    question: "In a play about a corrupt town, a young teacher delivers eloquent speeches against greed. Later scenes show him borrowing money he never repays and flattering the mayor in hope of a promotion.\n\nThe later scenes chiefly serve to",
    options: [
      "prove that his speeches state the playwright's own view",
      "qualify his speeches as one voice the play tests",
      "show that the mayor is the true hero of the play",
      "reveal that the town is not corrupt after all",
    ],
    correctIndex: 1,
    explanation: "By undercutting the most eloquent speaker, the play refuses to let any one character serve as its mouthpiece. His ideas may still matter, but the play weighs them against his conduct.",
    partNumber: 5,
    partTitle: "Indirect Commentary: Subtext, Chekhov and Common Misconceptions",
  },

  // Part 6 — Social Commentary on the Exam
  {
    id: 'englit-social-commentary-drama-ent-6a',
    question: "Read the scene below.\n\n**Maid.** *(setting down the tray)* Will that be all, sir?\n**Gentleman.** Yes, yes. *(He does not look up from his paper.)*\n**Maid.** *(pausing at the door)* The young lady upstairs is asking for you, sir. She's been asking since noon.\n**Gentleman.** *(turning a page)* Tell her I'm occupied.\n\nThe stage directions chiefly reveal",
    options: [
      "his indifference, shown by his refusal to look up",
      "his deep concern for the young lady waiting upstairs",
      "the maid's rudeness toward her employer",
      "a comic misunderstanding about the tray",
    ],
    correctIndex: 0,
    explanation: "He never looks up and keeps turning pages while a servant and a woman upstairs wait on him, so gesture shows a power that withholds attention. On the page, stage directions are evidence.",
    partNumber: 6,
    partTitle: "Social Commentary on the Exam",
  },
  {
    id: 'englit-social-commentary-drama-ent-6b',
    question: "A student is writing a Question 3 essay on a play in which a wife leaves her husband.\n\nWhich sentence uses context most responsibly?",
    options: [
      "The playwright supported women's rights, which proves the heroine is right to leave.",
      "Back then, all women everywhere were completely powerless in every way.",
      "Because the play's lawyer says a wife's property is not her own, her leaving refuses the one rule her world gives her.",
      "The play was written more than a century ago, so its ideas are now out of date.",
    ],
    correctIndex: 2,
    explanation: "This sentence builds its context from the play itself and uses it to sharpen a claim. The others treat biography as proof, generalize sweepingly, or dismiss the play without analysis.",
    partNumber: 6,
    partTitle: "Social Commentary on the Exam",
  },

  // Part 7 — Social Commentary Synthesis: An Enemy of the People
  {
    id: 'englit-social-commentary-drama-ent-7a',
    question: "Read the end of a scene below.\n\n**Chairwoman.** The committee has reviewed the complaint that the orphanage roof leaks. By a show of hands, the roof is declared sound. *(All hands rise. Rain drips onto the table.)*\n**Clerk.** Shall I fetch a bucket?\n**Chairwoman.** Minute that the roof is sound.\n\nThe scene chiefly satirizes",
    options: [
      "the clerk's failure to keep the minutes in order",
      "the orphans' ingratitude toward the committee",
      "the town's generous funding of the orphanage",
      "a body of officials that votes away a fact anyone can see",
    ],
    correctIndex: 3,
    explanation: "A question of fact is settled by a show of hands while rain falls on the committee's own table, and the chairwoman answers the drip by recording the vote. The target is officials who prefer procedure to evidence.",
    partNumber: 7,
    partTitle: "Social Commentary Synthesis: An Enemy of the People",
  },
  {
    id: 'englit-social-commentary-drama-ent-7b',
    question: "In the final scene of a play, a reformer who has exposed the town council's corruption declares that he will leave \"this town of cowards\" forever. As he packs, the council clerk who first leaked him the documents, and who has lost her job for it, comes to say goodbye; he does not recognize her.\n\nPlacing these actions side by side chiefly serves to",
    options: [
      "confirm that the townspeople are all cowards",
      "show the clerk seeking revenge on the reformer",
      "complicate his victory by showing whom his contempt overlooks",
      "reveal that the council has finally been replaced",
    ],
    correctIndex: 2,
    explanation: "The clerk's sacrifice made his exposé possible, yet he lumps the whole town together and does not know her, so the play qualifies the hero who has been right about the council. The juxtaposition tests him rather than endorsing him.",
    partNumber: 7,
    partTitle: "Social Commentary Synthesis: An Enemy of the People",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "How a Play Argues: The Problem Play and Social Realism" },
    { partNumber: 3, partTitle: "A Doll's House: Power, Money and the Public/Private Divide" },
    { partNumber: 4, partTitle: "Satire on Stage: Target, Norm and Method" },
    { partNumber: 5, partTitle: "Indirect Commentary: Subtext, Chekhov and Common Misconceptions" },
    { partNumber: 6, partTitle: "Social Commentary on the Exam" },
    { partNumber: 7, partTitle: "Social Commentary Synthesis: An Enemy of the People" },
  ]
}
