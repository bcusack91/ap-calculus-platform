/**
 * Entrance Quiz — Logical Fallacies (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-logical-fallacies-ent-1a',
    question: "\"If students may use calculators on a single quiz, they will stop learning arithmetic, and soon no one in town will be able to make change at a register.\" What is the main flaw in this reasoning?",
    options: [
      "It predicts a chain of worse results without support for each step",
      "It attacks the teachers who allow calculators instead of their reasons",
      "It treats how common calculators are as proof that they are useful",
      "It supports its claim about calculators by simply restating the claim",
    ],
    correctIndex: 0,
    explanation: "One quiz leads straight to a town that cannot make change, with nothing to support the steps in between. The statement attacks no one, says nothing about how common calculators are and offers a prediction rather than a restatement.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-logical-fallacies-ent-1b',
    question: "\"My opponent wants a small fee on plastic grocery bags, so she obviously wants to control everything you buy.\" This reasoning is weak chiefly because it",
    options: [
      "generalizes from too few towns that have tried such fees",
      "inflates a modest proposal into an extreme one",
      "assumes the fee caused a problem because it came first",
      "cites an authority who is speaking outside her field",
    ],
    correctIndex: 1,
    explanation: "A fee on bags is replaced by a far more extreme position, control over all purchases, that is easier to reject. No towns, sequence of events or authorities appear in the statement.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Three Ways Reasoning Breaks, and the Legitimate Moves Fallacies Imitate
  {
    id: 'englang-logical-fallacies-ent-2a',
    question: "Which of the following uses popularity as support in a legitimate way?",
    options: [
      "Most residents believe the tap water is safe, so it must be safe to drink.",
      "Millions of people take this supplement, so it must really improve memory.",
      "Most students think the test is fair, so it must measure ability accurately.",
      "A majority of residents want a dog park, so the council should consider one.",
    ],
    correctIndex: 3,
    explanation: "When the question is what residents want, what most residents say is the relevant evidence. In the other cases, belief is offered as proof of a fact (safety, effectiveness, accuracy) that belief cannot establish.",
    partNumber: 2,
    partTitle: "Three Ways Reasoning Breaks, and the Legitimate Moves Fallacies Imitate",
  },
  {
    id: 'englang-logical-fallacies-ent-2b',
    question: "\"Towns with more golf courses have residents who live longer, so our town should build a golf course to help people live longer.\" Which question most directly exposes the weakness in this reasoning?",
    options: [
      "Do golfers enjoy their sport more than people who play other sports?",
      "Have the people making this argument ever designed a golf course?",
      "Would a new course cost the town more than it would collect in fees?",
      "Could wealth be behind both the courses and the long lifespans?",
    ],
    correctIndex: 3,
    explanation: "The argument treats two things found together as cause and effect, so the key question is whether something else, such as wealth, produces both. Enjoyment and the arguers' experience are irrelevant, and cost is a fair concern that does not touch the causal claim.",
    partNumber: 2,
    partTitle: "Three Ways Reasoning Breaks, and the Legitimate Moves Fallacies Imitate",
  },

  // Part 3 — Reasoning Exposed in Real Texts: Lincoln's Fragment on Slavery and Plato's Euthyphro
  {
    id: 'englang-logical-fallacies-ent-3a',
    question: "A student argues that the school may read students' messages on the school's wireless network because \"whoever runs a network may read what passes over it.\" A classmate replies: \"Then the company that runs the network for the whole district may read the teachers' email too.\" The reply works chiefly by",
    options: [
      "attacking the student's character instead of the argument he makes",
      "predicting a chain of worse consequences if the policy is adopted",
      "following the student's rule until it covers its own defenders",
      "citing an expert in technology law who disagrees with the student",
    ],
    correctIndex: 2,
    explanation: "The classmate accepts the student's rule and follows it to a result the rule's defenders would reject, showing that it proves too much. No one's character is attacked, no chain of consequences is predicted and no expert is cited.",
    partNumber: 3,
    partTitle: "Reasoning Exposed in Real Texts: Lincoln's Fragment on Slavery and Plato's Euthyphro",
  },
  {
    id: 'englang-logical-fallacies-ent-3b',
    question: "Asked what makes a law just, a speaker answers, \"A just law is one that a fair-minded person would approve.\" Asked what makes a person fair-minded, he answers, \"A fair-minded person is one who approves of just laws.\" The main problem with his answers is that they",
    options: [
      "rely on one example in place of a general standard",
      "circle back to exactly where they first began",
      "draw on the opinions of too few people to generalize",
      "turn from laws to his opponent's character",
    ],
    correctIndex: 1,
    explanation: "Each definition depends on the other, so the reasoning goes in a circle and explains nothing. The speaker offers no example, cites no opinions and attacks no one.",
    partNumber: 3,
    partTitle: "Reasoning Exposed in Real Texts: Lincoln's Fragment on Slavery and Plato's Euthyphro",
  },

  // Part 4 — Evaluating a Line of Reasoning: Assumptions, Objections, and Mill's The Subjection of Women (1869)
  {
    id: 'englang-logical-fallacies-ent-4a',
    question: "\"The new reading app does not help students: in its first week of use, our class's reading scores did not rise at all.\" The argument assumes that",
    options: [
      "the app costs the school more than the old textbooks did",
      "one week is long enough for a reading tool to show results",
      "students prefer reading on paper to reading on a screen",
      "teachers were not trained to use the app before it began",
    ],
    correctIndex: 1,
    explanation: "Deny that one week is enough time and the flat scores no longer show the app fails, so the argument depends on that assumption. Cost, preferences and training may matter, but the argument as stated does not need any of them.",
    partNumber: 4,
    partTitle: "Evaluating a Line of Reasoning: Assumptions, Objections, and Mill's The Subjection of Women (1869)",
  },
  {
    id: 'englang-logical-fallacies-ent-4b',
    question: "Defenders of a town's old method of electing its council say that \"a century of experience has proved this method works best.\" Which point most directly challenges their reasoning?",
    options: [
      "The town has never tried another method, so it has nothing to compare this one against.",
      "Some council members chosen under the old method proved to be unpopular.",
      "The old method remains popular with most of the town's longtime residents.",
      "Other towns hold their council elections at different times of the year.",
    ],
    correctIndex: 0,
    explanation: "Experience can rank two methods only if both have been tried; a long record with one method shows survival, not superiority. Popularity, a few unpopular members and other towns' calendars leave that hidden assumption untouched.",
    partNumber: 4,
    partTitle: "Evaluating a Line of Reasoning: Assumptions, Objections, and Mill's The Subjection of Women (1869)",
  },

  // Part 5 — Nuance and Misconceptions: Over-Diagnosing, "Not Shown" vs. "Shown False," and Schopenhauer's Art of Controversy
  {
    id: 'englang-logical-fallacies-ent-5a',
    question: "A columnist supports a later school start time using only the fact that a famous actor endorses it. A reader writes back: \"So a later start time must be a bad idea.\" What is wrong with the reader's conclusion?",
    options: [
      "A weak argument for an idea does not show that the idea is false",
      "An actor's endorsement is in fact strong proof that the plan works",
      "The reader should have criticized the columnist's character instead",
      "Readers should judge a plan only by how many people already favor it",
    ],
    correctIndex: 0,
    explanation: "Showing that the columnist's support is thin leaves the question open; the idea may still be right for other reasons. Celebrity support proves little, personal attacks would add a new fallacy, and popularity is not a test of truth.",
    partNumber: 5,
    partTitle: "Nuance and Misconceptions: Over-Diagnosing, \"Not Shown\" vs. \"Shown False,\" and Schopenhauer's Art of Controversy",
  },
  {
    id: 'englang-logical-fallacies-ent-5b',
    question: "A writer arguing that the Mill Road bridge is unsafe quotes the state's chief bridge engineer, whose inspection last month found cracked supports. A reader objects, \"That's just an appeal to authority.\" Which is the best evaluation of the citation?",
    options: [
      "It is fallacious, since citing an expert always replaces real evidence",
      "It is fallacious, since one engineer is too few to trust on any matter",
      "It is sound, since state officials are more reliable than private citizens",
      "It is sound, since the engineer is an expert on this specific question",
    ],
    correctIndex: 3,
    explanation: "Citing a qualified expert speaking within her field, about her own inspection, is legitimate evidence. Calling every expert citation a fallacy over-diagnoses, and the other options give the wrong reasons for the verdict.",
    partNumber: 5,
    partTitle: "Nuance and Misconceptions: Over-Diagnosing, \"Not Shown\" vs. \"Shown False,\" and Schopenhauer's Art of Controversy",
  },

  // Part 6 — Exam Practice: Franklin's 1790 Satire, Revising Faulty Sentences, and a Sound Argument Essay
  {
    id: 'englang-logical-fallacies-ent-6a',
    question: "A letter to the council reads: *Since the council holds that any street with fewer than fifty cars an hour needs no crosswalk, I propose that we also remove the fire hydrants from every street that has not had a fire this year.*\n\nThe proposal primarily serves to",
    options: [
      "recommend saving money by removing hydrants that go unused",
      "show that fires in the town are more common than traffic",
      "extend the council's reasoning until its flaw becomes obvious",
      "praise the council for its careful and thrifty budgeting",
    ],
    correctIndex: 2,
    explanation: "Applying the council's rule to hydrants shows that measuring need by recent use ignores the rare emergency the safeguard exists for. The writer does not really want hydrants removed, compares no rates and is mocking, not praising.",
    partNumber: 6,
    partTitle: "Exam Practice: Franklin's 1790 Satire, Revising Faulty Sentences, and a Sound Argument Essay",
  },
  {
    id: 'englang-logical-fallacies-ent-6b',
    question: "A student's draft reads, \"Young people today don't care about voting.\" Which revision is most appropriate for an argument essay?",
    options: [
      "Some young people may vote less, but none of them cares at all about elections.",
      "Young people today don't care about voting, as anyone at a polling place can see.",
      "Young people rarely vote, so they have clearly stopped caring about their country.",
      "Turnout among our county's youngest voters fell last year, a sign some have lost interest.",
    ],
    correctIndex: 3,
    explanation: "The revision rests on specific evidence and draws a limited conclusion from it, matching the claim to what the evidence can show. The others keep an absolute, lean on what anyone \"can see\" or leap to a sweeping conclusion.",
    partNumber: 6,
    partTitle: "Exam Practice: Franklin's 1790 Satire, Revising Faulty Sentences, and a Sound Argument Essay",
  },

  // Part 7 — Synthesis Review: From Spotting Fallacies to Evaluating Reasoning
  {
    id: 'englang-logical-fallacies-ent-7a',
    question: "\"A family is like a ship: a ship needs one captain whose orders are never questioned, so parents should never explain their rules to their children.\" Which reply most directly challenges this analogy?",
    options: [
      "A crew must obey at once in a storm, but young people must learn to judge",
      "Many sea captains in history were harsh and treated their crews very badly",
      "The writer of this argument has most likely never served aboard any ship",
      "Most parents today would strongly disagree with such a strict view of rules",
    ],
    correctIndex: 0,
    explanation: "The reply names the difference that matters to the conclusion: a ship's chain of command exists for emergencies, while raising children aims at independent judgment. Bad captains, the writer's background and what most parents think do not touch the comparison itself.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Spotting Fallacies to Evaluating Reasoning",
  },
  {
    id: 'englang-logical-fallacies-ent-7b',
    question: "On a Section I question asking what is wrong with a passage's reasoning, a student always picks the option with the most technical-sounding term. The better approach is to choose the option that",
    options: [
      "names the most famous fallacy from a logic textbook",
      "uses the most formal vocabulary of the four choices",
      "describes the gap in this argument most accurately",
      "charges the writer with the most serious possible error",
    ],
    correctIndex: 2,
    explanation: "The exam rewards an accurate description of how this passage's support fails to reach its claim, not a label or a dramatic charge. Fame, formality and severity are not the test.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Spotting Fallacies to Evaluating Reasoning",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Three Ways Reasoning Breaks, and the Legitimate Moves Fallacies Imitate" },
    { partNumber: 3, partTitle: "Reasoning Exposed in Real Texts: Lincoln's Fragment on Slavery and Plato's Euthyphro" },
    { partNumber: 4, partTitle: "Evaluating a Line of Reasoning: Assumptions, Objections, and Mill's The Subjection of Women (1869)" },
    { partNumber: 5, partTitle: "Nuance and Misconceptions: Over-Diagnosing, \"Not Shown\" vs. \"Shown False,\" and Schopenhauer's Art of Controversy" },
    { partNumber: 6, partTitle: "Exam Practice: Franklin's 1790 Satire, Revising Faulty Sentences, and a Sound Argument Essay" },
    { partNumber: 7, partTitle: "Synthesis Review: From Spotting Fallacies to Evaluating Reasoning" },
  ]
}
