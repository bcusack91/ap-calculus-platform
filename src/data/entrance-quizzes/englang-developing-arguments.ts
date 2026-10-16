/**
 * Entrance Quiz — Developing Arguments (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-developing-arguments-ent-1a',
    question: "A student's first body paragraph argues that classroom phone bans improve students' focus. Her second will argue that the bans also lead students to talk with one another at lunch. Which transition best shows the argument progressing rather than simply adding a point?",
    options: [
      "If bans sharpen attention in lessons, they may matter more at lunch when students start talking.",
      "Another reason that phone bans are good for schools is that they also help students at lunch.",
      "In addition, it is worth noting that phones are now used by nearly every student in the building.",
      "Phone bans have been tried in many different schools around the world in recent years.",
    ],
    correctIndex: 0,
    explanation: "The strong transition builds the second claim on the first, so the reader sees a step forward rather than a second item in a list. \"Another reason\" only adds, and the other two sentences drift away from the line of reasoning.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-developing-arguments-ent-1b',
    question: "*(1) Small towns keep their local newspapers alive longer than cities do. (2) In my grandmother's town of nine hundred people, the weekly paper still prints every high school box score.*\n\nThe writer has room for one more sentence. Which addition best deepens the point rather than merely adding to it?",
    options: [
      "Big-city newspapers have been closing one after another for many years now.",
      "My grandmother's town also has a hardware store and two churches on Main Street.",
      "No larger outlet covers those games, so the paper owns that news.",
      "Another small town nearby has a paper that has been running for over a century.",
    ],
    correctIndex: 2,
    explanation: "The added sentence explains why the example supports the claim: the paper survives because it covers what no one else does. The other choices add a contrast, an irrelevant detail or another example without explaining anything.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — From Prompt to Developed Position: Invention and Definition
  {
    id: 'englang-developing-arguments-ent-2a',
    question: "Prompt: *Write an essay that argues your position on the extent to which leisure time is wasted time.*\n\nWhich sentence best develops the essay through definition?",
    options: [
      "The dictionary defines leisure as time that is free from work or other duties.",
      "Everyone defines wasted time differently, so there is no single correct answer.",
      "Leisure is something that people in every culture have always enjoyed.",
      "By \"wasted\" I mean time that leaves a person unchanged, not time spent without pay.",
    ],
    correctIndex: 3,
    explanation: "Stipulating what \"wasted\" will mean gives the essay a standard to test every example against. A dictionary entry decides nothing about the argument, the relativist claim abandons it, and the last sentence defines nothing.",
    partNumber: 2,
    partTitle: "From Prompt to Developed Position: Invention and Definition",
  },
  {
    id: 'englang-developing-arguments-ent-2b',
    question: "A student is arguing that practice matters more than early talent. Which example would test this claim rather than only illustrate it?",
    options: [
      "A pianist who practiced four hours a day and became a skilled performer",
      "A child prodigy who quit practicing at twelve and was soon outplayed",
      "The familiar saying that practice is what makes a person perfect",
      "A general statement that most experts practice a very great deal",
    ],
    correctIndex: 1,
    explanation: "The prodigy had talent without practice, so the claim could have failed in that case; that the prodigy fell behind makes it a test. The diligent pianist only shows the claim in action, and the saying and the general statement are not evidence of anything specific.",
    partNumber: 2,
    partTitle: "From Prompt to Developed Position: Invention and Definition",
  },

  // Part 3 — The Extended Example: Hazlitt's "On the Ignorance of the Learned," 1821
  {
    id: 'englang-developing-arguments-ent-3a',
    question: "A student's body paragraph names five inventors who were mocked before they succeeded, one clause each, and ends by restating the thesis. Which revision would most improve its development?",
    options: [
      "Keep one case and explain step by step how and why it unfolded",
      "Add three more brief cases so the pattern looks even more widespread",
      "Replace the cases with a statistic showing how common the pattern is",
      "Cut the cases and restate the claim in more forceful, vivid language",
    ],
    correctIndex: 0,
    explanation: "A list shows only that a pattern is common; one developed case can show how and why it works, which is what the commentary in Row B needs. More names, an unexplained figure or a louder claim leave the paragraph just as thin.",
    partNumber: 3,
    partTitle: "The Extended Example: Hazlitt's \"On the Ignorance of the Learned,\" 1821",
  },
  {
    id: 'englang-developing-arguments-ent-3b',
    question: "Read the sentence below.\n\n*The committee studied the old bridge for six years, commissioned four reports and held eleven public hearings, and at last it agreed on the color of the railings.*\n\nThe final clause primarily serves to",
    options: [
      "praise the committee's attention to small but important details",
      "report the final decision for readers who missed the hearings",
      "judge the committee by showing how little its labor produced",
      "introduce a new subject that the writer will turn to next",
    ],
    correctIndex: 2,
    explanation: "After the long list of effort, the trivial result tells the reader how to judge the committee: the clause evaluates the event it narrates. It is ironic rather than admiring, and it is not a neutral report or a transition.",
    partNumber: 3,
    partTitle: "The Extended Example: Hazlitt's \"On the Ignorance of the Learned,\" 1821",
  },

  // Part 4 — Developing Through Complication: William James, "The Moral Equivalent of War," 1910
  {
    id: 'englang-developing-arguments-ent-4a',
    question: "Read the sentence below from a student's essay.\n\n*Supporters of standardized tests are right that colleges need a common yardstick; the real question is whether a single morning's score must be that yardstick.*\n\nWhich development move does the sentence make?",
    options: [
      "It grants the other side's central value and then shifts the debate",
      "It reopens a key term so that the term demands more than it seemed to",
      "It breaks a universal claim by offering one specific counterexample",
      "It restates the writer's own thesis in more formal and precise terms",
    ],
    correctIndex: 0,
    explanation: "The writer accepts what test supporters care about most and moves the debate to a question both sides can take up. No counterexample is offered, no key term is redefined, and the sentence does more than restate a thesis.",
    partNumber: 4,
    partTitle: "Developing Through Complication: William James, \"The Moral Equivalent of War,\" 1910",
  },
  {
    id: 'englang-developing-arguments-ent-4b',
    question: "Opponents in a debate claim that \"only competition makes people work their hardest.\" Which response best breaks this claim?",
    options: [
      "Competition can be very stressful for many people, especially the young.",
      "Volunteers rebuilding homes after a flood work past dark with no one keeping score.",
      "Some people enjoy competing with others, and some people would rather not.",
      "Competition of some kind has existed in nearly every human society.",
    ],
    correctIndex: 1,
    explanation: "A universal \"only\" claim falls to a single clear counterexample, and the volunteers show hard work without competition. Stress, preference and history do not touch the claim that competition is the only source of effort.",
    partNumber: 4,
    partTitle: "Developing Through Complication: William James, \"The Moral Equivalent of War,\" 1910",
  },

  // Part 5 — Implications, Conclusions, and Misconceptions
  {
    id: 'englang-developing-arguments-ent-5a',
    question: "A student's essay has argued that boredom often drives people to invent and create. Which concluding sentence states an implication rather than a restatement?",
    options: [
      "In conclusion, boredom can lead people to be more creative, as I have shown.",
      "Then a childhood scheduled down to the minute may cost us future discoveries.",
      "Boredom is a feeling that everyone experiences at some point in their life.",
      "To sum up, boredom has both good and bad effects on people of all ages.",
    ],
    correctIndex: 1,
    explanation: "The implication follows the thesis to a consequence the essay has not yet stated: removing idle time may remove invention. The other choices repeat the thesis, retreat to a truism or sit on the fence.",
    partNumber: 5,
    partTitle: "Implications, Conclusions, and Misconceptions",
  },
  {
    id: 'englang-developing-arguments-ent-5b',
    question: "A student plans to fit six brief examples into her argument essay \"so the reader sees how much I know.\" Which advice is most accurate?",
    options: [
      "Develop one or two examples deeply and explain how each supports the claim",
      "Replace the examples with famous quotations, which earn Row C on their own",
      "Add a seventh example so the essay covers an even wider range of fields",
      "Keep all six examples but put them in the required five-paragraph format",
    ],
    correctIndex: 0,
    explanation: "Row B rewards specific evidence that is consistently explained, so depth beats range. More examples add no explanation, quotations do not earn sophistication by themselves, and no paragraph count is required.",
    partNumber: 5,
    partTitle: "Implications, Conclusions, and Misconceptions",
  },

  // Part 6 — Exam Practice: Developing a Q3 Response and Revising a Draft
  {
    id: 'englang-developing-arguments-ent-6a',
    question: "*(1) Many people believe teenagers learn responsibility only by working for pay. (2) There is some truth in this. (3) My cousin learned to manage his time when he took a job at a car wash. (4) Still, paid work is not the only teacher of responsibility. (5) My neighbor, who has never held a job, runs her school's food drive every fall. (6) Responsibility, then, comes from being needed, not from being paid.*\n\nThe writer wants to add a sentence after sentence 5 that develops the example by showing what taught the neighbor responsibility. Which choice best accomplishes this goal?",
    options: [
      "The food drive collects canned goods from about four hundred local families.",
      "Food drives are run by many schools during the fall and winter months.",
      "She says that the food drive is one of her favorite activities of the year.",
      "If she forgets to book the trucks, two shelters run short all winter.",
    ],
    correctIndex: 3,
    explanation: "The consequence of a mistake shows that others depend on her, which is the mechanism sentence 6 names: being needed. The size of the drive, a general fact and her enjoyment add detail without explaining what taught her responsibility.",
    partNumber: 6,
    partTitle: "Exam Practice: Developing a Q3 Response and Revising a Draft",
  },
  {
    id: 'englang-developing-arguments-ent-6b',
    question: "*(1) Many people believe teenagers learn responsibility only by working for pay. (2) There is some truth in this. (3) My cousin learned to manage his time when he took a job at a car wash. (4) Still, paid work is not the only teacher of responsibility. (5) My neighbor, who has never held a job, runs her school's food drive every fall. (6) Responsibility, then, comes from being needed, not from being paid.*\n\nThe writer wants to add a final sentence that qualifies sentence 6. Which choice best accomplishes this goal?",
    options: [
      "Of course, everyone ought to volunteer at least once in their life.",
      "Paid work may yet build habits such as punctuality that volunteering rarely demands.",
      "Responsibility is one of the most important traits a person can have.",
      "Many employers prefer to hire teenagers who have volunteered before.",
    ],
    correctIndex: 1,
    explanation: "The sentence limits the claim by granting something paid work may teach better, without abandoning the point about being needed. The other sentences make a new recommendation, state a truism or add an unrelated fact.",
    partNumber: 6,
    partTitle: "Exam Practice: Developing a Q3 Response and Revising a Draft",
  },

  // Part 7 — Review: Choosing the Right Development Move
  {
    id: 'englang-developing-arguments-ent-7a',
    question: "A student's plan for a \"to what extent\" prompt about social media begins with the thesis \"Social media is bad.\" Which revision best responds to the extent the prompt asks about?",
    options: [
      "Social media is bad, and teenagers should delete their accounts right away.",
      "Social media helps some people and hurts others in many different ways.",
      "Social media eases keeping in touch but erodes deep attention.",
      "Social media has been studied by many researchers in recent years.",
    ],
    correctIndex: 2,
    explanation: "The revision draws a distinction that states how far social media helps and where it harms, which sets up a line of reasoning. The first repeats the absolute claim, the second sits on the fence and the last takes no position.",
    partNumber: 7,
    partTitle: "Review: Choosing the Right Development Move",
  },
  {
    id: 'englang-developing-arguments-ent-7b',
    question: "A student argues that homework never helps students learn, but she knows that her own math grades rose after a year of nightly practice problems. Which development move best handles this exception?",
    options: [
      "Leaving out her math experience so the reader does not notice the exception",
      "Adding more examples of students whom homework did not help in any way",
      "Restating the thesis more forcefully in the conclusion of the essay",
      "Distinguishing skill-building drills from busywork that builds nothing",
    ],
    correctIndex: 3,
    explanation: "A distinction absorbs the exception and sharpens the claim. Hiding the case, piling on agreeing examples or repeating the thesis leaves the obvious objection standing.",
    partNumber: 7,
    partTitle: "Review: Choosing the Right Development Move",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "From Prompt to Developed Position: Invention and Definition" },
    { partNumber: 3, partTitle: "The Extended Example: Hazlitt's \"On the Ignorance of the Learned,\" 1821" },
    { partNumber: 4, partTitle: "Developing Through Complication: William James, \"The Moral Equivalent of War,\" 1910" },
    { partNumber: 5, partTitle: "Implications, Conclusions, and Misconceptions" },
    { partNumber: 6, partTitle: "Exam Practice: Developing a Q3 Response and Revising a Draft" },
    { partNumber: 7, partTitle: "Review: Choosing the Right Development Move" },
  ]
}
