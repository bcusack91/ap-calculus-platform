/**
 * Entrance Quiz — Rhetorical Analysis & Argument Essays (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Rhetorical Situation
  {
    id: 'englang-rhetorical-analysis-essay-ent-1a',
    question: "A principal speaks at a morning assembly the day after vandals spray-painted the gym walls. She asks students to volunteer on Saturday to help repaint them. Which element of the rhetorical situation is the vandalism?",
    options: [
      "The exigence that prompted the speech",
      "The audience the principal is addressing",
      "The purpose the principal hopes to achieve",
      "The persona the principal adopts as speaker",
    ],
    correctIndex: 0,
    explanation: "The vandalism is the event that made the speech necessary, which is the exigence. The students are the audience, recruiting volunteers is the purpose and the vandalism says nothing about the principal's persona.",
    partNumber: 1,
    partTitle: "The Rhetorical Situation",
  },
  {
    id: 'englang-rhetorical-analysis-essay-ent-1b',
    question: "A mayor urges residents to save water during a drought, repeating the phrase \"every drop\" throughout her speech. Which sentence about the speech is analysis rather than summary?",
    options: [
      "The mayor asks residents to use less water because the reservoir is low.",
      "The refrain makes each small household choice feel decisive.",
      "The mayor gave the speech in July, during the town's third dry summer.",
      "The speech is about drought and about the town's shrinking reservoir.",
    ],
    correctIndex: 1,
    explanation: "Analysis names a choice (the repeated phrase) and explains its effect on the audience. The other sentences restate the mayor's request, give the setting or name the topic.",
    partNumber: 1,
    partTitle: "The Rhetorical Situation",
  },

  // Part 2 — Ethos, Pathos, Logos
  {
    id: 'englang-rhetorical-analysis-essay-ent-2a',
    question: "A fire chief is urging residents to install smoke alarms. Which sentence from her speech persuades chiefly through logical reasoning and evidence?",
    options: [
      "As a firefighter for twenty years, I know how fast these fires can spread.",
      "Picture your own children waking to smoke in a dark upstairs hallway.",
      "Homes with working detectors suffer far fewer deaths than homes without.",
      "We are all neighbors here, and neighbors look out for one another.",
    ],
    correctIndex: 2,
    explanation: "The sentence reasons from evidence about fire deaths to a conclusion about every home, which is an appeal to logic. The others lean on the chief's experience, on fear for one's children or on shared community values.",
    partNumber: 2,
    partTitle: "Ethos, Pathos, Logos",
  },
  {
    id: 'englang-rhetorical-analysis-essay-ent-2b',
    question: "A school nurse tells the school board: *I have treated three students this month who fainted in our unventilated gym, and the thermometer there read 94 degrees last Friday.* Which sentence of commentary best explains how her statement persuades?",
    options: [
      "Her firsthand role and the hard reading make the danger credible and concrete.",
      "The nurse says that the gym reached a temperature of 94 degrees last Friday.",
      "The nurse uses ethos, pathos and logos in her statement, which is very effective.",
      "The nurse wants the school board to build a brand-new gym within the next year.",
    ],
    correctIndex: 0,
    explanation: "Strong commentary explains how the choices work together: her experience makes her believable and the temperature makes the danger specific. The others label the appeals, restate a detail or guess at a purpose she never states.",
    partNumber: 2,
    partTitle: "Ethos, Pathos, Logos",
  },

  // Part 3 — Rhetorical Strategies & Devices
  {
    id: 'englang-rhetorical-analysis-essay-ent-3a',
    question: "Read the passage below.\n\n*The bill passed. The money never came. The roof still leaks.*\n\nThe three short, parallel sentences chiefly serve to",
    options: [
      "show the writer's confusion about the order of events",
      "supply statistics about the cost of the repairs",
      "stack up broken promises with flat finality",
      "soften the writer's criticism of the council",
    ],
    correctIndex: 2,
    explanation: "Each clipped sentence adds one more failure in the same plain form, so the list lands as a blunt, final indictment. The order is clear, there are no figures and the effect sharpens rather than softens the criticism.",
    partNumber: 3,
    partTitle: "Rhetorical Strategies & Devices",
  },
  {
    id: 'englang-rhetorical-analysis-essay-ent-3b',
    question: "Read the passage below.\n\n*Granted, the new stadium will bring jobs. But will those jobs pay enough for anyone to live near it?*\n\nThe question in the second sentence chiefly serves to",
    options: [
      "invite readers to send the writer their own opinions",
      "admit the writer is unsure whether jobs matter at all",
      "move the argument to a topic unrelated to the stadium",
      "cast doubt on the benefit the writer just conceded",
    ],
    correctIndex: 3,
    explanation: "After granting the stadium's benefit, the writer uses a question no one is meant to answer aloud to cast doubt on it, pulling readers toward the writer's view. It is not a real request, an admission of doubt or a change of subject.",
    partNumber: 3,
    partTitle: "Rhetorical Strategies & Devices",
  },

  // Part 4 — Thesis & the AP Rubric
  {
    id: 'englang-rhetorical-analysis-essay-ent-4a',
    question: "A rhetorical analysis prompt asks students to analyze the choices a commencement speaker makes to encourage anxious graduates to take risks. Which thesis would earn the Row A point?",
    options: [
      "The speaker uses many rhetorical devices, such as anecdote and humor, to persuade the graduates.",
      "By joking about his clumsy first job, the speaker disarms nervous graduates before his harder advice.",
      "This speech is about the future, and the speaker conveys his message in a very powerful way.",
      "I agree with the speaker that graduates should take more risks once they finish college.",
    ],
    correctIndex: 1,
    explanation: "A defensible rhetorical analysis thesis names a specific choice, an audience and a purpose. The others list devices, praise vaguely or argue the issue instead of analyzing the speech.",
    partNumber: 4,
    partTitle: "Thesis & the AP Rubric",
  },
  {
    id: 'englang-rhetorical-analysis-essay-ent-4b',
    question: "A rhetorical analysis essay has a clear, defensible thesis, but its body paragraphs mostly string together quotations with little explanation of how the choices work. Which rubric row is this essay most likely to lose points in?",
    options: [
      "Row A, the thesis row",
      "Row B, evidence and commentary",
      "No row, since quotations are evidence",
      "Row C alone, the sophistication row",
    ],
    correctIndex: 1,
    explanation: "Row B, worth up to four points, rewards commentary that explains how the evidence supports the line of reasoning, so quotation without explanation caps it. The thesis is already strong, and quotations alone do not earn full credit.",
    partNumber: 4,
    partTitle: "Thesis & the AP Rubric",
  },

  // Part 5 — Body Paragraphs: Evidence & Commentary
  {
    id: 'englang-rhetorical-analysis-essay-ent-5a',
    question: "A student quotes a speaker's line, \"We will not be the generation that let the river die,\" and follows it with \"This shows the speaker is passionate.\" Which revision best turns that follow-up into commentary?",
    options: [
      "This shows that the speaker is very passionate and caring about the river.",
      "This quotation is a powerful example of pathos in the speaker's speech.",
      "The speaker says that their generation should not let the river die.",
      "Framing inaction as a generation's failure makes listeners fear their legacy.",
    ],
    correctIndex: 3,
    explanation: "The revision explains how the wording works on the audience: casting inaction as a mark on a whole generation makes listeners worry about how they will be remembered. The others repeat the vague judgment, label an appeal or paraphrase the quotation.",
    partNumber: 5,
    partTitle: "Body Paragraphs: Evidence & Commentary",
  },
  {
    id: 'englang-rhetorical-analysis-essay-ent-5b',
    question: "Which transition best shows a rhetorical analysis essay tracing how the writer's argument develops, rather than hopping from device to device?",
    options: [
      "Having won readers' sympathy, the author then brings in her cost figures.",
      "The author also uses some imagery in the third paragraph of the passage.",
      "Another device the author uses in the passage is a rhetorical question.",
      "In addition, there is a metaphor that appears near the end of the passage.",
    ],
    correctIndex: 0,
    explanation: "The strong transition connects one move to the next and explains the order of the writer's choices. The others add one more device to a list without showing how the argument moves.",
    partNumber: 5,
    partTitle: "Body Paragraphs: Evidence & Commentary",
  },

  // Part 6 — Writing the Argument Essay (FRQ 3)
  {
    id: 'englang-rhetorical-analysis-essay-ent-6a',
    question: "An argument prompt asks students to take a position on the value of tradition. Which thesis best responds to the prompt?",
    options: [
      "Traditions have both advantages and disadvantages for every community.",
      "This essay will explore traditions in history and in everyday life.",
      "A tradition is worth keeping only until it starts to shield injustice.",
      "The prompt raises many interesting questions about tradition and change.",
    ],
    correctIndex: 2,
    explanation: "The qualified thesis takes a clear position and names where it stops applying. The others sit on the fence, announce a topic or describe the prompt without taking a side.",
    partNumber: 6,
    partTitle: "Writing the Argument Essay (FRQ 3)",
  },
  {
    id: 'englang-rhetorical-analysis-essay-ent-6b',
    question: "While writing the argument essay, a student wants to use an example about recycling but cannot remember the exact recycling rate she once read. What is the best approach?",
    options: [
      "Invent a precise figure so the claim sounds authoritative",
      "Attribute an estimated figure to an unnamed expert",
      "Drop the topic and argue the opposite position instead",
      "Describe what she knows without inventing a number",
    ],
    correctIndex: 3,
    explanation: "A true example told with the details one actually knows is still specific evidence, while invented numbers or experts damage credibility. Abandoning the position is unnecessary.",
    partNumber: 6,
    partTitle: "Writing the Argument Essay (FRQ 3)",
  },

  // Part 7 — Synthesis, Mastery & Exit Quiz
  {
    id: 'englang-rhetorical-analysis-essay-ent-7a',
    question: "Which plan for a rhetorical analysis essay is most likely to earn the sophistication point?",
    options: [
      "Show how the speaker's praise of her opponents makes her attack harder to dismiss",
      "Use elevated vocabulary and long, complex sentences throughout the essay",
      "Name every device in the passage and label each one with its correct term",
      "Quote so much of the passage that no important line is left out of the essay",
    ],
    correctIndex: 0,
    explanation: "Explaining a tension in the passage, here praise that strengthens criticism, shows the complex understanding Row C rewards. Device lists, big words and long quotations do not.",
    partNumber: 7,
    partTitle: "Synthesis, Mastery & Exit Quiz",
  },
  {
    id: 'englang-rhetorical-analysis-essay-ent-7b',
    question: "A resident tells a town meeting: *I have voted for every school budget this town has proposed for thirty years. I will vote against this one.*\n\nOpening with the resident's long record of support chiefly serves to",
    options: [
      "show that the resident has grown tired of voting on budgets",
      "make the opposition hard to dismiss as hostility to schools",
      "prove that this year's school budget is too large to afford",
      "concede that this year's budget deserves to pass after all",
    ],
    correctIndex: 1,
    explanation: "A thirty-year supporter cannot easily be written off as hostile to schools, so the record gives the opposition weight. The statement shows no weariness, offers no figures and opposes the budget rather than conceding it.",
    partNumber: 7,
    partTitle: "Synthesis, Mastery & Exit Quiz",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "The Rhetorical Situation" },
    { partNumber: 2, partTitle: "Ethos, Pathos, Logos" },
    { partNumber: 3, partTitle: "Rhetorical Strategies & Devices" },
    { partNumber: 4, partTitle: "Thesis & the AP Rubric" },
    { partNumber: 5, partTitle: "Body Paragraphs: Evidence & Commentary" },
    { partNumber: 6, partTitle: "Writing the Argument Essay (FRQ 3)" },
    { partNumber: 7, partTitle: "Synthesis, Mastery & Exit Quiz" },
  ]
}
