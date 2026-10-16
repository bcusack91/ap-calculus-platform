/**
 * Entrance Quiz — Claims and Evidence (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-claims-evidence-ent-1a',
    question: "A writer claims that a new reading program raised reading scores across an entire school district. Which evidence would provide the strongest support for this claim?",
    options: [
      "A teacher's story about one struggling student who began to love books",
      "A statement from the program's publisher calling it the best on the market",
      "Results for every participating classroom before and after the program",
      "A national poll showing that most parents want their children to read more",
    ],
    correctIndex: 2,
    explanation: "District-wide scores before and after the program match the size of the claim and come from a source with no stake in the answer. One student's story is too narrow, the publisher has an interest in praising its product, and a national poll is about something else.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-claims-evidence-ent-1b',
    question: "A student's thesis reads, \"The four-day school week caused this year's drop in the district's reading scores.\" To defend this claim, the student most needs evidence that",
    options: [
      "rules out other changes that happened in the same year",
      "describes how the four-day week schedule is arranged",
      "many parents in the district dislike the four-day week",
      "shows that reading scores matter to college admissions",
    ],
    correctIndex: 0,
    explanation: "A causal claim must show that the four-day week, and not something else that changed at the same time, produced the drop. Parents' opinions, the schedule's design and the importance of scores do not establish cause.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Anatomy of an Argument: Thesis, Claims, Evidence, Commentary
  {
    id: 'englang-claims-evidence-ent-2a',
    question: "Prompt: *Write an essay that argues your position on the extent to which competition improves performance.*\n\nWhich sentence presents the most defensible thesis in response to this prompt?",
    options: [
      "Competition has been a part of human life for many thousands of years.",
      "This essay will examine whether competition helps or hurts performance.",
      "A runner in my class ran faster in the race than she ever did in practice.",
      "Competition sharpens effort on routine tasks but stifles creative work.",
    ],
    correctIndex: 3,
    explanation: "The thesis about routine and creative work takes a position, answers \"to what extent\" and invites disagreement. The others state a safe generalization, announce a topic or report an example that could serve as evidence.",
    partNumber: 2,
    partTitle: "Anatomy of an Argument: Thesis, Claims, Evidence, Commentary",
  },
  {
    id: 'englang-claims-evidence-ent-2b',
    question: "A student's paragraph begins:\n\n*(1) Small public kindnesses tend to spread. (2) One morning at a highway toll booth, a driver paid for the car behind her, and more than a dozen drivers in a row did the same.*\n\nWhich sentence would best serve as commentary after sentence 2?",
    options: [
      "That morning, more than a dozen drivers in a row paid the toll for a stranger.",
      "Another time, a customer at a coffee shop paid for the drinks of an entire line.",
      "No driver owed the stranger anything, so the chain shows generosity passes by example.",
      "Many highways have since replaced their toll booths with electronic readers.",
    ],
    correctIndex: 2,
    explanation: "Commentary explains what the evidence shows: because no one was obliged to pay, the chain suggests that example alone spreads kindness. The first option restates the evidence, the second adds more evidence and the last is beside the point.",
    partNumber: 2,
    partTitle: "Anatomy of an Argument: Thesis, Claims, Evidence, Commentary",
  },

  // Part 3 — Claims and Evidence in Real Texts
  {
    id: 'englang-claims-evidence-ent-3a',
    question: "Read the passage below.\n\n*Imagine two students with the same test scores and the same grades. One lives a block from the public library; the other lives forty minutes away, on a bus line that stops running at six. Only one of them will ever use the library's evening tutoring.*\n\nMaking the two imagined students identical in scores and grades chiefly serves to",
    options: [
      "prove that two such students really live in the writer's own town",
      "suggest that test scores predict which students use the library",
      "show the writer's personal knowledge of both students' families",
      "isolate distance from the library as the cause of the difference",
    ],
    correctIndex: 3,
    explanation: "Holding ability constant leaves only distance and the bus schedule to explain why one student can use the tutoring, which is the point of the hypothetical. The writer openly invents the case, so it proves nothing about real students, and it is not about scores or the writer's acquaintances.",
    partNumber: 3,
    partTitle: "Claims and Evidence in Real Texts",
  },
  {
    id: 'englang-claims-evidence-ent-3b',
    question: "A writer argues that her city should let residents pay parking fines in installments. Midway through, she mentions that she once paid off a single ninety-dollar fine over four months while working two jobs. This detail primarily functions to",
    options: [
      "show that she has lived the hardship her proposal addresses",
      "prove that most residents of the city cannot afford parking fines",
      "concede that installment plans would cost the city some revenue",
      "provide data on how many parking fines the city issues each year",
    ],
    correctIndex: 0,
    explanation: "Her own experience illustrates the problem and gives her standing to propose the fix. One person's case cannot prove what most residents can afford, and the detail concedes nothing and contains no citywide figures.",
    partNumber: 3,
    partTitle: "Claims and Evidence in Real Texts",
  },

  // Part 4 — Qualification and Counterargument
  {
    id: 'englang-claims-evidence-ent-4a',
    question: "Which revision qualifies the claim \"Remote learning hurts students\" by making it depend on a condition?",
    options: [
      "Remote learning hurts students who lack a quiet place to work.",
      "Remote learning probably hurts at least some students.",
      "Remote learning hurts elementary students the most.",
      "Remote learning badly hurts every single student who ever tries it.",
    ],
    correctIndex: 0,
    explanation: "The claim now holds only when a student lacks a quiet place to work, which is a condition. \"Probably\" limits certainty, \"elementary students the most\" limits scope by group, and the last revision intensifies the claim instead of qualifying it.",
    partNumber: 4,
    partTitle: "Qualification and Counterargument",
  },
  {
    id: 'englang-claims-evidence-ent-4b',
    question: "A student's draft claims, \"Violent video games make children violent.\" Which revision qualifies this overstated claim while still taking a clear position?",
    options: [
      "It could perhaps be argued that, in certain cases, games might possibly affect a few children somewhat.",
      "Violent games can make some children more aggressive for a short time, so parents should limit long sessions.",
      "Video games make every single child who plays them violent, as many worried parents have observed.",
      "Video games are a popular pastime that millions of children around the world enjoy every day.",
    ],
    correctIndex: 1,
    explanation: "The strong revision limits the claim once (some children, for a short time) and then commits to a recommendation. The first hedges so much that no position survives, the third intensifies the claim, and the last makes no claim at all.",
    partNumber: 4,
    partTitle: "Qualification and Counterargument",
  },

  // Part 5 — Evaluating Evidence: Purpose, Sufficiency and Credibility
  {
    id: 'englang-claims-evidence-ent-5a',
    question: "A writer urging her town to restore its old train station notes that the station's waiting room was where the town held its first public school classes. This detail most likely serves to",
    options: [
      "qualify the claim by admitting the station is now in poor repair",
      "link the building to a value the town's residents already hold",
      "exemplify the usual floor plan of stations built in that period",
      "refute critics who argue that restoring the station costs too much",
    ],
    correctIndex: 1,
    explanation: "Tying the station to the town's first classrooms associates it with education and civic pride, values readers already share. The detail admits no disrepair, says nothing about typical designs and answers no argument about cost.",
    partNumber: 5,
    partTitle: "Evaluating Evidence: Purpose, Sufficiency and Credibility",
  },
  {
    id: 'englang-claims-evidence-ent-5b',
    question: "A student claims, \"Banning phones in class raises test scores nationwide,\" and supports it with a single middle school whose scores rose the year after it banned phones. Which revision best matches the claim to the evidence?",
    options: [
      "At one middle school, a phone ban was followed by higher test scores.",
      "Phone bans always raise test scores, as one middle school clearly proved.",
      "Phone bans are popular with teachers in schools across the whole country.",
      "Phone bans raise the test scores of every school that chooses to adopt one.",
    ],
    correctIndex: 0,
    explanation: "One school can support a claim about one school, so narrowing the claim fixes the mismatch in scope. \"Always\" and \"every school\" claim more than one case can show, and a claim about popularity changes the subject.",
    partNumber: 5,
    partTitle: "Evaluating Evidence: Purpose, Sufficiency and Credibility",
  },

  // Part 6 — Exam Practice: Scoring Claims and Evidence
  {
    id: 'englang-claims-evidence-ent-6a',
    question: "Two body paragraphs support the same claim. Paragraph X lists four examples from different areas of life and ends, \"This proves my point.\" Paragraph Y uses two examples and, after each, explains how it supports the claim and leads to the next step. Which paragraph is likely to score higher in Row B, and why?",
    options: [
      "Paragraph X, because it draws its examples from more areas of life",
      "Paragraph Y, because readers of the exam prefer shorter paragraphs",
      "Paragraph X, because its final sentence clearly restates its main claim",
      "Paragraph Y, because it shows how each example advances the reasoning",
    ],
    correctIndex: 3,
    explanation: "Row B rewards commentary that consistently explains how evidence supports a line of reasoning, which Paragraph Y supplies. More examples without explanation, or a sentence that asserts the point, does not raise the score, and length is not the measure.",
    partNumber: 6,
    partTitle: "Exam Practice: Scoring Claims and Evidence",
  },
  {
    id: 'englang-claims-evidence-ent-6b',
    question: "In a synthesis essay, a student cites Source C, which argues against her position. She grants that Source C's point holds for one group of residents and then explains why her claim still stands for the town as a whole. This use of Source C most likely",
    options: [
      "weakens the essay, since every source should support the thesis",
      "counts only as summary, since it restates Source C's own view",
      "strengthens the reasoning by answering an opposing perspective",
      "breaks a rule requiring each source to be cited just one time",
    ],
    correctIndex: 2,
    explanation: "Conceding part of an opposing source and then answering it builds the line of reasoning and can show the complexity Row C rewards. Sources need not all agree with the thesis, the student does more than summarize, and no rule limits how often a source is cited.",
    partNumber: 6,
    partTitle: "Exam Practice: Scoring Claims and Evidence",
  },

  // Part 7 — Review: Reading and Writing Arguments
  {
    id: 'englang-claims-evidence-ent-7a',
    question: "Read the passage below.\n\n*\"Give workers a shorter week,\" the mill owners warn, \"and they will spend their idle hours thinking about how the mill is run.\" Exactly so. A worker with time to think is a worker who might find a better way to run it.*\n\nThe words \"Exactly so\" primarily serve to",
    options: [
      "concede that a shorter week would do real harm to the mill",
      "adopt the very result the owners fear as a goal worth reaching",
      "introduce data on how shorter weeks affect a mill's output",
      "shift the argument from workers' time to the owners' profits",
    ],
    correctIndex: 1,
    explanation: "The writer accepts the owners' prediction and then recasts it as a benefit: thinking workers might improve the mill. Nothing is conceded as harm, no data appears and the passage stays on workers' time.",
    partNumber: 7,
    partTitle: "Review: Reading and Writing Arguments",
  },
  {
    id: 'englang-claims-evidence-ent-7b',
    question: "In the middle of a body paragraph, a student writes, \"Some people may disagree with this,\" and then moves on to the next point. Which revision would best improve how the paragraph handles the counterargument?",
    options: [
      "Delete the sentence, since naming counterarguments makes a paragraph weaker",
      "Add the words \"but they are wrong\" to the end of the existing sentence",
      "Move the sentence to the conclusion, where the essay's objections belong",
      "State the specific objection and then answer it directly",
    ],
    correctIndex: 3,
    explanation: "A vague nod to disagreement does no work; naming the objection and answering it strengthens the reasoning. Deleting it, dismissing it without reasons or moving it still leaves the objection unanswered.",
    partNumber: 7,
    partTitle: "Review: Reading and Writing Arguments",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Anatomy of an Argument: Thesis, Claims, Evidence, Commentary" },
    { partNumber: 3, partTitle: "Claims and Evidence in Real Texts" },
    { partNumber: 4, partTitle: "Qualification and Counterargument" },
    { partNumber: 5, partTitle: "Evaluating Evidence: Purpose, Sufficiency and Credibility" },
    { partNumber: 6, partTitle: "Exam Practice: Scoring Claims and Evidence" },
    { partNumber: 7, partTitle: "Review: Reading and Writing Arguments" },
  ]
}
