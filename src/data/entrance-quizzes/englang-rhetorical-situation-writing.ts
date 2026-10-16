/**
 * Entrance Quiz — Rhetorical Situation in Writing (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-rhetorical-situation-writing-ent-1a',
    question: "A student argues that her town should fund a free summer meal program for children. She is writing to the members of the local chamber of commerce. Which supporting point would most likely persuade this audience?",
    options: [
      "Childhood hunger is a moral failure that no decent town should tolerate",
      "The program's menus would follow the federal guidelines for nutrition",
      "Children who eat well grow into more reliable future workers",
      "Summer meal programs have operated in many towns for many years",
    ],
    correctIndex: 2,
    explanation: "Business owners care about the local economy and the workers they will hire, so linking the program to a future workforce frames the same claim in terms this audience values. A moral rebuke, technical guidelines and a vague history do not speak to what these readers care about.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-rhetorical-situation-writing-ent-1b',
    question: "A student is writing to the parks department urging it to repair the town pool. Which opening sentence best establishes the exigence of the letter?",
    options: [
      "Public pools have served as gathering places for town residents over many generations.",
      "Swimming is a healthy activity that people of every age can enjoy in the warm months.",
      "Many residents have different opinions about how the parks budget ought to be spent.",
      "A crack has kept the pool closed all summer, and swim lessons start in two weeks.",
    ],
    correctIndex: 3,
    explanation: "A specific, recent problem and a near deadline tell readers why the letter matters now. A general history, a truism about swimming and a survey of opinion could open any letter in any year.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Writing for an Audience: Beliefs, Values, and Needs
  {
    id: 'englang-rhetorical-situation-writing-ent-2a',
    question: "A student wants a homeowners' association to approve a community garden on an empty lot. Members care deeply about property values and worry that a garden would look messy. Which opening sentence best demonstrates an understanding of this audience?",
    options: [
      "Every owner here hopes for a street buyers admire, and a well-kept garden can help.",
      "Anyone who opposes a garden clearly cares more about appearances than about neighbors.",
      "Community gardens have existed in cities around the world for well over a century.",
      "Property values are a shallow concern compared with the joy of growing food together.",
    ],
    correctIndex: 0,
    explanation: "The strongest opening accepts the members' value and argues that the garden serves it, starting from common ground. Insulting the members or dismissing their value turns them into opponents, and a general history ignores what they care about.",
    partNumber: 2,
    partTitle: "Writing for an Audience: Beliefs, Values, and Needs",
  },
  {
    id: 'englang-rhetorical-situation-writing-ent-2b',
    question: "A student is writing to a parents' group about moving the high school's start time later. Most members believe a later start would simply make students stay up later. Which addition would best respond to this belief?",
    options: [
      "A reminder that every parent in the group wants children to be healthy",
      "Sleep data from nearby districts that already made the same change",
      "A remark that the writer personally prefers to sleep late on weekdays",
      "A claim that the group has its priorities backward on student health",
    ],
    correctIndex: 1,
    explanation: "A belief is a claim about what will happen, so evidence from districts that made the change can test and correct it. Restating a shared value does not answer the prediction, a personal preference is not evidence, and scolding the group alienates it.",
    partNumber: 2,
    partTitle: "Writing for an Audience: Beliefs, Values, and Needs",
  },

  // Part 3 — Introductions and Conclusions That Fit the Situation
  {
    id: 'englang-rhetorical-situation-writing-ent-3a',
    question: "A student is drafting an essay for town voters, who will decide next month whether to add fluoride to the public water supply.\n\n*(1) Since the dawn of time, people have needed water to survive. (2) Water is very important to everyone. (3) Adding fluoride to our water is a modest step that would protect children's teeth for years to come.*\n\nWhich sentence would best replace sentences 1 and 2 to orient and engage these voters?",
    options: [
      "Water covers most of the earth's surface and makes up much of the human body.",
      "Many people have strong feelings about what should be added to drinking water.",
      "This essay will explain both sides of the debate over fluoride in the water.",
      "Last year our dental clinic treated twice as many cavities as it did in 2019.",
    ],
    correctIndex: 3,
    explanation: "A local figure gives voters a concrete reason to care and leads directly into the claim in sentence 3. A general fact about water, a vague survey of feeling and an announcement of the essay's plan engage no one.",
    partNumber: 3,
    partTitle: "Introductions and Conclusions That Fit the Situation",
  },
  {
    id: 'englang-rhetorical-situation-writing-ent-3b',
    question: "A student's argument essay opens with the story of a nurse who drives forty miles each way to the nearest hospital, and argues that the county should fund a clinic in her town. Which conclusion would best bring the essay to a unified end?",
    options: [
      "In conclusion, the county should fund the clinic for the reasons given in this essay.",
      "Health care is one of the most important issues facing every community today.",
      "With a clinic down the street, she could spend those hours caring for patients instead.",
      "Who can truly say what the future holds for the health of our small towns?",
    ],
    correctIndex: 2,
    explanation: "Returning to the nurse shows what the proposal would change, which frames the essay and states its implications in one image. A bare summary, a general truth and an open question leave the reader with nothing new.",
    partNumber: 3,
    partTitle: "Introductions and Conclusions That Fit the Situation",
  },

  // Part 4 — Reading the Prompt's Situation
  {
    id: 'englang-rhetorical-situation-writing-ent-4a',
    question: "A practice prompt reads: *A college president addressed the graduating class in a year when many graduates could not find jobs. Write an essay that analyzes the rhetorical choices the president makes to encourage the graduates.*\n\nWhich thesis best uses the prompt's situation?",
    options: [
      "Facing graduates who fear a bleak job market, the president names that fear and recasts lean years as time to build skills.",
      "The president makes many rhetorical choices in his speech in order to encourage the graduating class.",
      "The president relies on repetition, vivid imagery and personal anecdote in his commencement speech to the class.",
      "The president's main purpose is to warn the graduates that the job market will never recover from this year.",
    ],
    correctIndex: 0,
    explanation: "A situated thesis ties specific choices to the audience's condition and to the purpose the prompt names. Restating the prompt and listing devices make no defensible claim, and the last option replaces the named purpose, encouragement, with a different one.",
    partNumber: 4,
    partTitle: "Reading the Prompt's Situation",
  },
  {
    id: 'englang-rhetorical-situation-writing-ent-4b',
    question: "The argument essay prompt names no audience. Which planning decision best reflects the rhetorical situation of that essay?",
    options: [
      "Write for \"society today\" so that the essay applies to every reader equally",
      "Assume the reader already agrees and devote the essay to restating the position",
      "Picture a doubtful but open reader and plan the concession that reader needs",
      "Summarize several famous opinions on the issue before deciding which to adopt",
    ],
    correctIndex: 2,
    explanation: "An unnamed audience is still an educated reader who can doubt you, so writing to one who disagrees but will listen sharpens evidence and concessions. \"Society today\" is no one, an audience that already agrees needs no persuading, and summarizing opinions hands the essay to others.",
    partNumber: 4,
    partTitle: "Reading the Prompt's Situation",
  },

  // Part 5 — Persona, Register, and Common Misconceptions
  {
    id: 'englang-rhetorical-situation-writing-ent-5a',
    question: "A student is writing an article for the school's newsletter to parents. A draft sentence reads:\n\n*It is imperative that we utilize the totality of our fiscal resources to effectuate the remediation of the gymnasium.*\n\nWhich revision best fits the register this audience calls for?",
    options: [
      "We should use the money we already have to repair the gym.",
      "Let's just throw some cash at the gym and call it a day, folks!",
      "Obviously, only a fool would refuse to fix our crumbling old gym.",
      "Remediation of the facility requires a full allocation of funds.",
    ],
    correctIndex: 0,
    explanation: "Formal register means precise and plain, not inflated, so the clear version keeps the meaning in words parents can read at once. Slang and insults misjudge the persona this audience will trust, and the technical version keeps the original problem.",
    partNumber: 5,
    partTitle: "Persona, Register, and Common Misconceptions",
  },
  {
    id: 'englang-rhetorical-situation-writing-ent-5b',
    question: "A student argues for a four-day school week and revises her essay for an audience of working parents. Which revision crosses the line from adapting to the audience into pandering?",
    options: [
      "She opens with how the plan would handle child care on the fifth day of the week.",
      "She replaces national studies with data from a nearby district that tried the plan.",
      "She concedes that some families would need help finding care on the extra day off.",
      "She abandons the four-day week for longer days, the schedule these families favor.",
    ],
    correctIndex: 3,
    explanation: "Abandoning the claim itself to please readers is pandering. Leading with child care, choosing local data and conceding a real difficulty all keep the position while changing the route to it, which is adaptation.",
    partNumber: 5,
    partTitle: "Persona, Register, and Common Misconceptions",
  },

  // Part 6 — Exam Practice: Essays and Writing Questions
  {
    id: 'englang-rhetorical-situation-writing-ent-6a',
    question: "A student is writing to the principal, who decides whether the school library can reopen at lunch.\n\n*(1) Since September, the school library has been locked during lunch. (2) For students with no quiet place at home, lunch was the only time to finish reading or print an assignment. (3) The lunch line in the cafeteria is also far too long, and that should be fixed as well. (4) Last spring, an average of forty students used the library each lunch period. (5) The principal has said the library closed because no staff member is free to supervise it.*\n\nShould the writer keep or delete sentence 3?",
    options: [
      "Keep it, because it shows that the writer cares about many school issues",
      "Delete it, because it raises a separate complaint the principal is not weighing",
      "Delete it, because its wording is too informal for a letter to a principal",
      "Delete it, because the letter already offers too much evidence for one page",
    ],
    correctIndex: 1,
    explanation: "The cafeteria line has nothing to do with the decision in front of the principal, so the sentence pulls the letter away from its one request. Adding a second complaint weakens focus rather than showing concern, the wording is not the problem and the letter's evidence is not excessive.",
    partNumber: 6,
    partTitle: "Exam Practice: Essays and Writing Questions",
  },
  {
    id: 'englang-rhetorical-situation-writing-ent-6b',
    question: "A student is writing to the principal, who decides whether the school library can reopen at lunch.\n\n*(1) Since September, the school library has been locked during lunch. (2) For students with no quiet place at home, lunch was the only time to finish reading or print an assignment. (3) Last spring, an average of forty students used the library each lunch period. (4) The principal has said the library closed because no staff member is free to supervise it.*\n\nThe writer wants to revise sentence 4 so that it acknowledges the principal's reason respectfully and leads toward a solution. Which version best accomplishes this goal?",
    options: [
      "The principal claims no staff member is free, which is hard to believe.",
      "I understand that no staff member is free at lunch, and I have an idea.",
      "Supervision is a minor detail next to what students have been losing.",
      "No staff member is free at lunch, so the library may have to stay shut.",
    ],
    correctIndex: 1,
    explanation: "This version grants the principal's reason without argument and signals that a way around it is coming, which keeps the reader willing to listen. Doubting the claim or dismissing it as minor puts the principal on the defensive, and the last version gives up the writer's goal.",
    partNumber: 6,
    partTitle: "Exam Practice: Essays and Writing Questions",
  },

  // Part 7 — Review: Writing for the Situation, Start to Finish
  {
    id: 'englang-rhetorical-situation-writing-ent-7a',
    question: "A neighborhood group ends its letter proposing a car-free street on Saturdays:\n\n*We know some will call this plan naive. We expect that. But on the first Saturday of every month we will be at the farmers' market with a petition, and we will keep coming back until the council puts the plan on its agenda.*\n\nThe first two sentences primarily serve to",
    options: [
      "blunt a likely dismissal by naming it first",
      "admit that the writers doubt the plan",
      "accuse the council of mocking the plan",
      "signal that the writers expect to fail",
    ],
    correctIndex: 0,
    explanation: "By naming the charge of naivety before readers can make it, the writers take away some of its force, then pivot with \"But\" to a concrete plan of action. They do not doubt the plan, accuse the council or expect failure.",
    partNumber: 7,
    partTitle: "Review: Writing for the Situation, Start to Finish",
  },
  {
    id: 'englang-rhetorical-situation-writing-ent-7b',
    question: "A fire chief urges residents at a town meeting to approve a budget for new equipment. Near the end she says, \"I have buried two firefighters from this town.\" Which sentence from a student's rhetorical analysis offers the strongest commentary on this choice?",
    options: [
      "The chief uses pathos in this part of her speech, which is very effective on the audience.",
      "The chief's sentence is short and contains both a personal statement and a specific number.",
      "The chief says she has buried two firefighters, which shows how dangerous a firefighter's job can be.",
      "By recalling the funerals, the chief reminds neighbors who knew those families that the vote has a human cost.",
    ],
    correctIndex: 3,
    explanation: "The strongest commentary explains how the choice works on this audience in this situation: residents who knew the dead hear the budget vote as a matter of lives. The others label an appeal, summarize or describe the sentence's form without explaining its effect.",
    partNumber: 7,
    partTitle: "Review: Writing for the Situation, Start to Finish",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Writing for an Audience: Beliefs, Values, and Needs" },
    { partNumber: 3, partTitle: "Introductions and Conclusions That Fit the Situation" },
    { partNumber: 4, partTitle: "Reading the Prompt's Situation" },
    { partNumber: 5, partTitle: "Persona, Register, and Common Misconceptions" },
    { partNumber: 6, partTitle: "Exam Practice: Essays and Writing Questions" },
    { partNumber: 7, partTitle: "Review: Writing for the Situation, Start to Finish" },
  ]
}
