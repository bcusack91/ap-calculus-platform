/**
 * Entrance Quiz — Dramatic Structure (AP English Literature) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englit-dramatic-structure-ent-1a',
    question: "Read the opening lines of a play below.\n\n**Maid.** He's not back yet, ma'am.\n**Mrs. Alden.** It's past midnight.\n**Maid.** Shall I keep the soup warm?\n**Mrs. Alden.** No. Put out his slippers, though. And lock the gun cabinet.\n\nThis opening exposition most clearly establishes",
    options: [
      "a calm household routine with no hint of trouble ahead",
      "the cause of the conflict, explained by a narrator's summary",
      "a comic mood built on the maid's forgetful questions",
      "a household awaiting an absent man with dread, not just habit",
    ],
    correctIndex: 3,
    explanation: "Without any narrator, the dialogue sets up the situation: the slippers show habit, and locking the gun cabinet shows fear of what his return may bring. Exposition here frames a conflict the audience will watch unfold.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englit-dramatic-structure-ent-1b',
    question: "In a play, a farmer spends Acts 1 and 2 boasting that his son will inherit the land and marry the banker's daughter. In Act 3, the son announces that he has enlisted and leaves that night. From then on, the farmer's plans collapse one after another.\n\nThe son's announcement functions in the play's structure chiefly as",
    options: [
      "the exposition that introduces the play's situation",
      "the resolution that settles the play's central conflict",
      "the turning point where events begin to control him",
      "a subplot that has no link to the play's main action",
    ],
    correctIndex: 2,
    explanation: "The announcement changes the direction of the action: before it the farmer arranges the future, after it events overtake him. A turning point is defined by that shift, not by coming first or last.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — The Architecture of a Play
  {
    id: 'englit-dramatic-structure-ent-2a',
    question: "A play opens with a character stepping forward to tell the audience: \"You will see tonight how my brother came to lose his farm, and how I came to have it.\"\n\nThe most likely effect of revealing the outcome at the start is to",
    options: [
      "remove all suspense so that the audience can simply relax",
      "show that the speaker is unreliable and lying to the audience",
      "shift suspense from what will happen to how it comes about",
      "signal that the play is a comedy that will end happily",
    ],
    correctIndex: 2,
    explanation: "Like a prologue that announces the ending, the speech makes the audience watch each choice for how it leads to the known result, and the speaker's role in it. Knowing the ending changes the kind of suspense rather than removing it.",
    partNumber: 2,
    partTitle: "The Architecture of a Play",
  },
  {
    id: 'englit-dramatic-structure-ent-2b',
    question: "In a play, one scene shows a factory owner's family laughing over an expensive dinner. The next scene shows his workers' families sharing a single loaf in a cold tenement.\n\nPlacing these scenes side by side primarily serves to",
    options: [
      "expose by comparison the gap between two worlds",
      "show that several years have passed between the scenes",
      "introduce the play's protagonist for the first time",
      "provide comic relief after a tense and serious scene",
    ],
    correctIndex: 0,
    explanation: "Juxtaposed scenes invite the audience to compare, and the contrast of a lavish dinner with a shared loaf makes the inequality visible without any character stating it.",
    partNumber: 2,
    partTitle: "The Architecture of a Play",
  },

  // Part 3 — Speech on Stage: Dialogue, Soliloquy, Aside and Monologue
  {
    id: 'englit-dramatic-structure-ent-3a',
    question: "Read the passage below.\n\n**Lord Braxton.** My dear nephew! How well you look. I trust your journey was pleasant?\n**Edward.** Most pleasant, uncle. [Aside.] And will be more so when your will is read.\n**Lord Braxton.** You must stay the month.\n\nEdward's aside chiefly serves to",
    options: [
      "show his uncle's suspicion",
      "reveal a motive he hides from his uncle",
      "act as a soliloquy after the uncle exits",
      "suggest that he truly enjoyed his journey",
    ],
    correctIndex: 1,
    explanation: "An aside is heard by the audience but not by the other characters, so we learn Edward's interest in the inheritance while his uncle goes on welcoming him. The uncle's warm reply shows he heard nothing.",
    partNumber: 3,
    partTitle: "Speech on Stage: Dialogue, Soliloquy, Aside and Monologue",
  },
  {
    id: 'englit-dramatic-structure-ent-3b',
    question: "Read the passage below.\n\n**Margaret.** [Alone.] I did not take the letter for myself. No. I took it so that Father would not be hurt by it. It is better he never knows. And if I read it first, well, someone had to read it.\n\nThe soliloquy is best understood as",
    options: [
      "a lie she tells in order to deceive the other characters",
      "a reliable account of her entirely unselfish motives",
      "an aside that her father overhears from the next room",
      "sincere thought that exposes her own self-justification",
    ],
    correctIndex: 3,
    explanation: "By convention a soliloquy is honest thought, since no one else is present to deceive, but honest is not the same as accurate: her protests and her final excuse reveal a curiosity she will not admit. She is alone, so no one overhears.",
    partNumber: 3,
    partTitle: "Speech on Stage: Dialogue, Soliloquy, Aside and Monologue",
  },

  // Part 4 — Tragedy: Hamartia, Peripeteia, Anagnorisis and Catharsis
  {
    id: 'englit-dramatic-structure-ent-4a',
    question: "In a tragedy, a governor orders a rebel's farmhouse burned as a warning to the province. As the smoke rises, a messenger reports that the governor's son, who had secretly joined the rebels, was hiding inside.\n\nWhich statement best describes the dramatic function of the messenger's report?",
    options: [
      "His own command turns on him as he learns the truth, so reversal and recognition coincide.",
      "The background of the play's conflict is laid out for the audience for the very first time.",
      "The audience's built-up pity and fear are released at last in a comic resolution.",
      "A minor character's aside reveals a hidden motive to the audience alone.",
    ],
    correctIndex: 0,
    explanation: "The order meant to protect his rule destroys what he loves most, and in the same moment the governor moves from ignorance to knowledge. Reversal and recognition arrive together, the pattern Aristotle valued most.",
    partNumber: 4,
    partTitle: "Tragedy: Hamartia, Peripeteia, Anagnorisis and Catharsis",
  },
  {
    id: 'englit-dramatic-structure-ent-4b',
    question: "A student writes that a tragic hero's downfall must come from a single fatal flaw such as pride. In the play under discussion, the hero, an honest judge, condemns an innocent man because forged evidence persuades him.\n\nWhich response is most accurate?",
    options: [
      "The judge cannot be a tragic hero at all, because he is an honest man.",
      "The play must be a comedy, since its hero is not a proud man.",
      "Hamartia can mean an error of judgment, like the judge's mistake.",
      "The forger, not the judge, is the true tragic hero of the play.",
    ],
    correctIndex: 2,
    explanation: "Aristotle's hamartia is an \"error or frailty,\" which includes mistakes of fact and judgment, not only a vice like pride. A good man who errs is exactly the hero whose fall arouses pity and fear.",
    partNumber: 4,
    partTitle: "Tragedy: Hamartia, Peripeteia, Anagnorisis and Catharsis",
  },

  // Part 5 — Dramatic Irony, Comic Structure and Staging
  {
    id: 'englit-dramatic-structure-ent-5a',
    question: "In a comedy, the audience has just watched Mr. Pettibone hide a stolen goose in the cupboard. Then the constable arrives.\n\n**Constable.** Seen anything suspicious, Pettibone?\n**Pettibone.** [Leaning against the cupboard.] Suspicious? In this house? Nothing ever happens here.\n[A loud honk from the cupboard.]\n\nThe humor of the moment depends chiefly on",
    options: [
      "the goose we know he is hiding",
      "the constable's knowledge of the stolen goose",
      "a pun on the double meaning of \"suspicious\"",
      "Pettibone's sincere belief that he is innocent",
    ],
    correctIndex: 0,
    explanation: "Dramatic irony drives the scene: the audience knows about the goose, the constable does not, and Pettibone's casual lean against the cupboard makes the gap visible until the honk. Nothing suggests the constable already knows.",
    partNumber: 5,
    partTitle: "Dramatic Irony, Comic Structure and Staging",
  },
  {
    id: 'englit-dramatic-structure-ent-5b',
    question: "In a play, a mother keeps her son's army coat hanging by the door through Acts 1 and 2. In Act 3, after a letter arrives, she takes the coat down, folds it and puts it in a trunk without a word.\n\nThe stage business with the coat chiefly serves to",
    options: [
      "show the mother's wish to give the old coat to the poor",
      "convey through action a loss that no one speaks aloud",
      "provide some comic relief before the play's climax",
      "mark the change of season from winter into spring",
    ],
    correctIndex: 1,
    explanation: "A prop that has waited by the door for two acts is put away in silence after a letter, so the staging tells the audience what the letter said. On the page, stage directions like these are evidence to analyze.",
    partNumber: 5,
    partTitle: "Dramatic Irony, Comic Structure and Staging",
  },

  // Part 6 — Drama on the AP Exam
  {
    id: 'englit-dramatic-structure-ent-6a',
    question: "Read the passage below.\n\n**Governor.** I have served this colony twenty years. I know its people, its harvests, its debts, and I will not be lectured on my duty by a clerk who arrived last spring.\n**Clerk.** Then you will not mind if I read the ledger aloud.\n**Governor.** Read it.\n**Clerk.** Four thousand pounds, missing since March.\n**Governor.** Well.\n\nThe change in the Governor's speech across the passage chiefly marks",
    options: [
      "his growing boredom with the clerk",
      "a change of scene to a later day",
      "his discovery that the clerk is lying",
      "a shift of power to the clerk",
    ],
    correctIndex: 3,
    explanation: "His long, confident first speech shrinks to two words and then one, so the dialogue's shape shows control passing to the clerk. Tracking who speaks at length, and who is reduced to fragments, is a key move with drama passages.",
    partNumber: 6,
    partTitle: "Drama on the AP Exam",
  },
  {
    id: 'englit-dramatic-structure-ent-6b',
    question: "A student is writing a Question 3 essay on a play in which a domineering father's authority collapses in Act 3.\n\nWhich sentence best uses a staging detail as evidence for an interpretation?",
    options: [
      "The play is set in a living room, which the stage directions describe.",
      "The stage directions call for a living room, so the play is realistic.",
      "Because he alone stands while the family sits, his power is visible before he speaks and his later fall lands harder.",
      "Stage directions matter in drama because they tell actors what to do.",
    ],
    correctIndex: 2,
    explanation: "This sentence treats a stage picture as evidence and explains how it builds toward the play's turn. The others describe the setting, draw a vague conclusion, or state a general fact about drama.",
    partNumber: 6,
    partTitle: "Drama on the AP Exam",
  },

  // Part 7 — AP Review
  {
    id: 'englit-dramatic-structure-ent-7a',
    question: "In Act 2 of a play, a young clerk proudly tells his fiancée that he has burned the only letter that could ruin her father. The audience saw, in Act 1, the father's housekeeper copy that letter before handing it over.\n\nThe audience's knowledge chiefly creates",
    options: [
      "dramatic irony, as the clerk's triumph rests on a mistake we already see",
      "comic relief through a misunderstanding between two minor characters",
      "the resolution of the play's central conflict in the clerk's favor",
      "a soliloquy that reveals the housekeeper's hidden motives to the audience",
    ],
    correctIndex: 0,
    explanation: "The audience knows what the clerk does not: a copy survives, so his triumph is hollow. Because the copying happened in an earlier scene he did not witness, the knowledge belongs to the audience alone.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'englit-dramatic-structure-ent-7b',
    question: "In Act 2 of a play, a young clerk proudly tells his fiancée that he has burned the only letter that could ruin her father. The audience saw, in Act 1, the father's housekeeper copy that letter before handing it over.\n\nWhich thesis about this scene draws most fully on its structure, irony and staging?",
    options: [
      "The clerk tells his fiancée that he burned the letter, and earlier the housekeeper copied it.",
      "Showing the copy before the boast turns the lovers' happy scene into a trap we watch closing.",
      "The playwright uses dramatic irony, foreshadowing and dialogue throughout the scene.",
      "The clerk is a fool who does not deserve to marry into the family.",
    ],
    correctIndex: 1,
    explanation: "This thesis connects the order of scenes (the copy shown first), the irony (only the audience knows) and the staging (a happy scene played under threat). The others summarize, list devices or pass judgment.",
    partNumber: 7,
    partTitle: "AP Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "The Architecture of a Play" },
    { partNumber: 3, partTitle: "Speech on Stage: Dialogue, Soliloquy, Aside and Monologue" },
    { partNumber: 4, partTitle: "Tragedy: Hamartia, Peripeteia, Anagnorisis and Catharsis" },
    { partNumber: 5, partTitle: "Dramatic Irony, Comic Structure and Staging" },
    { partNumber: 6, partTitle: "Drama on the AP Exam" },
    { partNumber: 7, partTitle: "AP Review" },
  ]
}
