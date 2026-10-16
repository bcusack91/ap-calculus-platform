/**
 * Entrance Quiz — Introduction to Rhetoric (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-intro-rhetoric-ent-1a',
    question: "From a roofer's column in a county newsletter:\n\n*I have repaired roofs in this county for thirty years, and I have never seen hail like last week's. If your shingles are more than fifteen years old, have them checked before the spring rains. A small leak caught now costs a few hundred dollars; a collapsed ceiling costs thousands.*\n\nWhich statement best describes how the writer persuades her readers?",
    options: [
      "She relies on fear of disaster in place of any actual reasoning",
      "She cites outside experts so readers need not trust her judgment",
      "Her decades on the job lend weight to her practical comparison",
      "She appeals to pride in their homes rather than to their budgets",
    ],
    correctIndex: 2,
    explanation: "Thirty years of repairs give her standing to judge the hail, and that standing lends weight to the practical comparison between a small repair and a ruined ceiling; the appeals work together. She cites no outside experts, and the cost comparison is reasoning, not fear alone.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-intro-rhetoric-ent-1b',
    question: "A city water department sends two notices about the same repair.\n\nTo its engineers: *Pump Station 4 offline Tuesday, 6 a.m. to 2 p.m., for impeller replacement. Expect turbidity in Zone B.*\n\nTo residents of one neighborhood: *Your tap water may look cloudy on Tuesday morning. It is safe to drink, and it should clear by lunchtime.*\n\nThe differences between the two notices best illustrate",
    options: [
      "a writer hiding technical facts from readers who might object",
      "a writer fitting content and diction to each audience's needs",
      "a writer whose second notice fails to state a clear purpose",
      "a writer who is more honest with experts than with the public",
    ],
    correctIndex: 1,
    explanation: "Engineers need the station, schedule and technical cause; residents need to know what they will see and whether it is safe. Each version is a strategic choice for its reader. Nothing is concealed, and the second notice's purpose, reassurance, is clear.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Rhetoric as a System of Strategic Choices
  {
    id: 'englang-intro-rhetoric-ent-2a',
    question: "A school superintendent ends a letter to parents about winter bus delays:\n\n*We cannot promise that every bus will run on time this winter. We can promise that when one doesn't, you will hear it from us first.*\n\nWhich sentence from a student's essay offers the most complete rhetorical analysis of this ending?",
    options: [
      "The superintendent uses parallel structure and ethos in her closing in order to persuade the parents.",
      "The superintendent says that buses may run late this winter but that she will tell the parents first.",
      "By admitting what she can't guarantee first, she makes her one pledge sound honest to wary parents.",
      "The closing is very effective because it is memorable and leaves parents with a good feeling about the district.",
    ],
    correctIndex: 2,
    explanation: "The strongest sentence names the specific choice (the cannot/can pairing), explains its effect (the pledge sounds honest) and ties it to the audience. The others label devices, summarize or declare the ending \"effective\" without explaining how.",
    partNumber: 2,
    partTitle: "Rhetoric as a System of Strategic Choices",
  },
  {
    id: 'englang-intro-rhetoric-ent-2b',
    question: "A writer defending a new sewer project says:\n\n*Yes, the plan costs more than doing nothing. So did every bridge this town has ever built.*\n\nA student writes, \"The writer mentions the cost of the plan.\" Which revision describes the writer's choice most precisely?",
    options: [
      "The writer ignores the plan's cost and turns instead to the town's history.",
      "The writer denies that the plan costs more than leaving things as they are.",
      "The writer lists the bridges the town has built over the past century.",
      "The writer concedes the cost, then recasts it as the usual price of progress.",
    ],
    correctIndex: 3,
    explanation: "\"Yes, the plan costs more\" grants the objection, and the bridge comparison reframes expense as what every lasting improvement has required. \"Mentions\" misses both moves; the writer does not ignore or deny the cost, and no bridges are listed.",
    partNumber: 2,
    partTitle: "Rhetoric as a System of Strategic Choices",
  },

  // Part 3 — Close Reading Worked Example: The Gettysburg Address
  {
    id: 'englang-intro-rhetoric-ent-3a',
    question: "From a speech at a town meeting on the old covered bridge:\n\n*For a hundred years this bridge has carried our wagons, then our trucks, then our school buses. The engineers tell us it can no longer bear that weight, and I believe them. But a bridge is measured by more than tons, and I ask you to measure this one by the people who have crossed it.*\n\nThe sentence beginning \"But\" primarily serves to",
    options: [
      "grant the engineers' finding but judge the bridge another way",
      "dispute the engineers' finding about the weight the bridge can hold",
      "add new facts about the age and history of the covered bridge",
      "shift the speech's attention to the cost of repairing the bridge",
    ],
    correctIndex: 0,
    explanation: "The speaker has just granted the engineers' point, and the \"But\" sentence keeps that concession while asking listeners to judge the bridge by its place in people's lives. It disputes nothing, adds no history and never mentions cost.",
    partNumber: 3,
    partTitle: "Close Reading Worked Example: The Gettysburg Address",
  },
  {
    id: 'englang-intro-rhetoric-ent-3b',
    question: "From a speech at a town meeting on the old covered bridge:\n\n*For a hundred years this bridge has carried our wagons, then our trucks, then our school buses. The engineers tell us it can no longer bear that weight, and I believe them. But a bridge is measured by more than tons, and I ask you to measure this one by the people who have crossed it.*\n\nThe sequence \"our wagons, then our trucks, then our school buses\" primarily serves to",
    options: [
      "suggest that the trucks did the most damage to the bridge",
      "show the bridge serving the town through every era",
      "list the vehicles the engineers used in testing the bridge",
      "show that the town has grown poorer over the past century",
    ],
    correctIndex: 1,
    explanation: "Each vehicle marks a later era, and the last one, school buses, ties the bridge to the town's children, so the series compresses a century of loyal use. It assigns no blame, describes no test and says nothing about the town's wealth.",
    partNumber: 3,
    partTitle: "Close Reading Worked Example: The Gettysburg Address",
  },

  // Part 4 — Reading Like the Exam: Question Families and Irony
  {
    id: 'englang-intro-rhetoric-ent-4a',
    question: "The opening paragraphs of a travel essay:\n\n*(1) Every guidebook to the city tells you to visit the cathedral square at dawn, when the light is gold and the stones are empty. I followed that advice for three mornings.*\n\n*(2) On the fourth morning I slept late, wandered out at noon and found the square packed with vendors, schoolchildren and a brass band, and I understood that I had been seeing a postcard, not a city.*\n\nThe function of paragraph 1 is to",
    options: [
      "describe how the cathedral square looks in early light",
      "establish a convention that the writer will then go on to overturn",
      "list the guidebooks the writer read before the journey",
      "explain why the writer got to the city earlier than planned",
    ],
    correctIndex: 1,
    explanation: "Paragraph 1 presents the standard guidebook wisdom so that paragraph 2 can reject it in favor of the crowded, living square. Describing the dawn light is what the paragraph says, not what it does, and no guidebooks are listed.",
    partNumber: 4,
    partTitle: "Reading Like the Exam: Question Families and Irony",
  },
  {
    id: 'englang-intro-rhetoric-ent-4b',
    question: "From a report to a neighborhood association:\n\n*Our committee is proud to announce that the new parking policy has been a complete success. Since January, complaints about crowded lots have fallen to zero, largely because the lots are now empty: almost no one can afford the permits.*\n\nThe speaker's attitude toward the parking policy is best described as",
    options: [
      "wry disapproval",
      "earnest pride",
      "furious outrage",
      "neutral detachment",
    ],
    correctIndex: 0,
    explanation: "The speaker keeps the form of a proud announcement while revealing that the \"success\" came from pricing people out, which signals amused criticism. Taken literally, the words sound proud, but the irony undercuts them, and the light touch is too mild for outrage.",
    partNumber: 4,
    partTitle: "Reading Like the Exam: Question Families and Irony",
  },

  // Part 5 — Misconceptions and Nuance: What Analysis Is Not
  {
    id: 'englang-intro-rhetoric-ent-5a',
    question: "*Headnote: A retired coach writes to the parents of his town, many of whom pay for private travel teams, urging them to support a free recreation league.*\n\nWhich purpose statement would best support a rhetorical analysis of the coach's letter?",
    options: [
      "The coach writes to persuade the parents of the town to agree with his letter.",
      "The coach informs readers about the history of youth sports in the town.",
      "The coach uses many rhetorical strategies to make his letter more effective.",
      "The coach asks parents who fund elite clubs to back sports open to every child.",
    ],
    correctIndex: 3,
    explanation: "A useful purpose statement names the audience (families invested in paid teams) and the change sought (valuing a free league). \"To persuade\" fits any argument, the letter is not mainly informative, and a list of unnamed strategies says nothing.",
    partNumber: 5,
    partTitle: "Misconceptions and Nuance: What Analysis Is Not",
  },
  {
    id: 'englang-intro-rhetoric-ent-5b',
    question: "Read the passage below.\n\n*As a responsible employer, I have found that the simplest way to reduce workplace injuries is to stop recording them. Our safety figures have never looked better, and the savings on paperwork alone have paid for a handsome new fountain in the lobby.*\n\nWhich statement best describes the relationship between the speaker and the writer?",
    options: [
      "The writer sincerely recommends this policy to other employers",
      "The speaker and the writer both mock the employees who were hurt",
      "The writer is reporting a real employer's words without comment",
      "The writer creates a calm speaker whose logic exposes the absurd",
    ],
    correctIndex: 3,
    explanation: "A speaker who proudly hides injuries and spends the savings on a fountain is a satirical persona; his reasonable tone makes the policy's cruelty obvious. Reading the passage as sincere advice, or as the writer's own view of workers, confuses speaker with writer.",
    partNumber: 5,
    partTitle: "Misconceptions and Nuance: What Analysis Is Not",
  },

  // Part 6 — AP Practice: The Three Essays and the 6-Point Rubric
  {
    id: 'englang-intro-rhetoric-ent-6a',
    question: "A rhetorical analysis prompt asks students to analyze the choices a mayor makes in a speech urging residents to save water during a drought. Which thesis would earn the Row A point?",
    options: [
      "Residents ought to save water during droughts because the reservoir is a resource that all of them share.",
      "The mayor casts saving water as a neighborly duty, pairing reservoir data with images of shared streets.",
      "The mayor uses ethos, pathos and logos throughout her speech to persuade residents to conserve water.",
      "The mayor discusses the drought in her speech and asks residents to use less water.",
    ],
    correctIndex: 1,
    explanation: "A rhetorical analysis thesis must make a defensible claim about the writer's choices and their purpose. Arguing for conservation answers a different essay, labeling appeals names no choices, and the last option only summarizes.",
    partNumber: 6,
    partTitle: "AP Practice: The Three Essays and the 6-Point Rubric",
  },
  {
    id: 'englang-intro-rhetoric-ent-6b',
    question: "A rhetorical analysis essay has a defensible thesis and explains every quotation with specific commentary. Its body paragraphs never discuss the broader situation, but its final sentence offers an impressive, complex observation about the writer's historical moment. How is the essay most likely scored in Row C?",
    options: [
      "It earns the point because the final sentence shows complex thinking",
      "It earns the point because strong commentary always includes Row C",
      "It misses the point because complexity must run through the essay",
      "It misses the point because Row C is awarded only in argument essays",
    ],
    correctIndex: 2,
    explanation: "Row C rewards sophistication shown consistently across a response, so one strong closing sentence is not enough. Strong Row B commentary does not automatically earn Row C, and all three essays can earn it.",
    partNumber: 6,
    partTitle: "AP Practice: The Three Essays and the 6-Point Rubric",
  },

  // Part 7 — Synthesis Review: From First Read to Finished Analysis
  {
    id: 'englang-intro-rhetoric-ent-7a',
    question: "Read the passage below.\n\n*It is fashionable to say that boredom is the enemy of the young. I am not so sure. Boredom sent me, at eleven, into my grandmother's attic; the attic sent me into a trunk of old letters; the letters sent me into history. Idle hours are not empty hours. They are hours waiting to be claimed.*\n\nWhich statement best describes the passage's line of reasoning?",
    options: [
      "It doubts a popular view and backs the doubt with an example and a rule",
      "It defines boredom and then argues that schools should build it into the day",
      "It concedes that boredom harms the young and then narrows that concession",
      "It tells a family story and ends without drawing any general conclusion",
    ],
    correctIndex: 0,
    explanation: "The writer doubts the fashionable claim, supports the doubt with the attic story and closes with a general rule about idle hours. There is no definition or proposal for schools, no concession and no lack of a conclusion.",
    partNumber: 7,
    partTitle: "Synthesis Review: From First Read to Finished Analysis",
  },
  {
    id: 'englang-intro-rhetoric-ent-7b',
    question: "Read the passage below.\n\n*It is fashionable to say that boredom is the enemy of the young. I am not so sure. Boredom sent me, at eleven, into my grandmother's attic; the attic sent me into a trunk of old letters; the letters sent me into history. Idle hours are not empty hours. They are hours waiting to be claimed.*\n\nThe chain of clauses built on \"sent me\" primarily serves to",
    options: [
      "make one dull afternoon lead step by step to an interest that lasted for life",
      "suggest that the writer was forced into the attic against her will",
      "list the household chores the writer avoided as a child",
      "contrast the writer's grandmother with the writer's parents",
    ],
    correctIndex: 0,
    explanation: "Each clause picks up the last noun of the one before it, so boredom leads to the attic, the attic to the letters and the letters to history; the structure enacts the claim that idle time can turn into something. Nothing suggests force, chores or a contrast between relatives.",
    partNumber: 7,
    partTitle: "Synthesis Review: From First Read to Finished Analysis",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Rhetoric as a System of Strategic Choices" },
    { partNumber: 3, partTitle: "Close Reading Worked Example: The Gettysburg Address" },
    { partNumber: 4, partTitle: "Reading Like the Exam: Question Families and Irony" },
    { partNumber: 5, partTitle: "Misconceptions and Nuance: What Analysis Is Not" },
    { partNumber: 6, partTitle: "AP Practice: The Three Essays and the 6-Point Rubric" },
    { partNumber: 7, partTitle: "Synthesis Review: From First Read to Finished Analysis" },
  ]
}
