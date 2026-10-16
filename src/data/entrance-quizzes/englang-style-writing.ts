/**
 * Entrance Quiz — Style in Writing (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-style-writing-ent-1a',
    question: "A student's draft reads: \"This thing affects people in a bad way.\" Which revision best improves the precision of the sentence?",
    options: [
      "This issue impacts individuals in a very negative manner.",
      "This policy raises renters' monthly costs.",
      "This matter affects many members of society in harmful ways.",
      "This situation is really bad for a lot of the people involved.",
    ],
    correctIndex: 1,
    explanation: "Naming the policy, the group and the harm turns a vague complaint into a claim a reader can weigh. The other revisions swap in longer abstract words or intensifiers and stay just as general.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-style-writing-ent-1b',
    question: "A student's letter to her principal about the dress code is calm and respectful until one sentence calls the policy \"idiotic.\" Which revision best fits the rest of the letter?",
    options: [
      "Add more words like \"idiotic\" so that the tone stays consistent throughout",
      "Keep the word, since strong language persuades every kind of reader",
      "Replace \"idiotic\" with \"counterproductive\" to keep the measured tone",
      "Move the word into the first sentence so that the reader sees it early",
    ],
    correctIndex: 2,
    explanation: "One insult in a measured letter reads as a lapse and gives a skeptical reader a reason to stop listening; a precise, neutral word keeps the criticism and the tone. More insults, keeping it or moving it all make the problem worse.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Precise Diction in Your Own Writing
  {
    id: 'englang-style-writing-ent-2a',
    question: "Which revision of \"The committee did not pay any attention to the residents' complaints\" best puts the statement in positive form?",
    options: [
      "The committee was not very attentive to what the residents said.",
      "The committee did not really attend to the residents' complaints.",
      "The committee paid little attention, if any, to the complaints.",
      "The committee ignored the residents' complaints.",
    ],
    correctIndex: 3,
    explanation: "A single positive verb states what the committee did instead of hedging around what it did not do. The other versions keep the negative or soften it with \"little\" and \"not very.\"",
    partNumber: 2,
    partTitle: "Precise Diction in Your Own Writing",
  },
  {
    id: 'englang-style-writing-ent-2b',
    question: "A student opposes a plan to cut evening service on a bus route. She is writing to council members who support the cuts. Which description of the plan best suits this audience?",
    options: [
      "the council's heartless gutting of the route",
      "this totally ridiculous and unfair plan",
      "the proposed cut to night trips on the Route 12 bus line",
      "the so-called savings the council keeps bragging about",
    ],
    correctIndex: 2,
    explanation: "Readers who favor the cuts will keep reading only if the plan is described accurately and without a thumb on the scale. The other phrases insult the very people the student needs to persuade.",
    partNumber: 2,
    partTitle: "Precise Diction in Your Own Writing",
  },

  // Part 3 — Building Clear Sentences: Coordination and Subordination
  {
    id: 'englang-style-writing-ent-3a',
    question: "*The bake sale raised four hundred dollars, ________ the band still could not afford the trip to the state competition.*\n\nWhich connector best fits the blank?",
    options: [
      "so",
      "yet",
      "for",
      "and so",
    ],
    correctIndex: 1,
    explanation: "The second clause states an outcome the first would lead a reader not to expect, so the relationship is contrast. \"So\" and \"and so\" claim a result, and \"for\" claims a cause.",
    partNumber: 3,
    partTitle: "Building Clear Sentences: Coordination and Subordination",
  },
  {
    id: 'englang-style-writing-ent-3b',
    question: "A draft sentence reads: \"Walking into the cafeteria, the smell of burned toast greeted the students.\" Which revision corrects the dangling modifier?",
    options: [
      "Walking into the cafeteria, the smell of burned toast greeted all of them.",
      "Walking into the cafeteria, the students all smelled burned toast at once.",
      "The smell of burned toast, walking into the cafeteria, greeted the students.",
      "Walking into the cafeteria, burned toast was what the students smelled.",
    ],
    correctIndex: 1,
    explanation: "The opening phrase describes the students, so the students must be the subject that follows it. The other versions still make the smell or the toast the thing doing the walking.",
    partNumber: 3,
    partTitle: "Building Clear Sentences: Coordination and Subordination",
  },

  // Part 4 — Concision, Emphasis, and Variety
  {
    id: 'englang-style-writing-ent-4a',
    question: "Which revision of the following sentence is most concise and direct?\n\n*It is important to note that, due to the fact that the bridge was closed, many commuters were forced to take a longer route in order to get to work.*",
    options: [
      "Due to the fact of the bridge's closure, commuters took a longer route in order to get to work.",
      "Because the bridge was closed, many commuters drove a longer route to work.",
      "It is important to note that the bridge's closure forced many commuters onto a longer route.",
      "Many commuters, owing to the fact that the bridge was closed, were forced onto longer routes.",
    ],
    correctIndex: 1,
    explanation: "\"Because\" replaces \"due to the fact that,\" the padding about importance disappears and the commuters become the active subject. Each other version keeps at least one of the stock phrases.",
    partNumber: 4,
    partTitle: "Concision, Emphasis, and Variety",
  },
  {
    id: 'englang-style-writing-ent-4b',
    question: "A student wants a sentence about a hospital's new program to end on its most important idea: the lives the program saved. Which version best accomplishes this goal?",
    options: [
      "The program saved eleven lives in its first year, although it cost more than expected.",
      "Eleven lives were saved in the program's first year, though it cost more than expected.",
      "The program, which saved eleven lives in its first year, cost more than expected.",
      "Although it cost more than first projected, the program saved eleven lives in its first year.",
    ],
    correctIndex: 3,
    explanation: "Conceding the cost first and placing the lives saved in the main clause at the end gives that idea the most emphatic position. The other versions end on the cost, which leaves the drawback ringing in the reader's ear.",
    partNumber: 4,
    partTitle: "Concision, Emphasis, and Variety",
  },

  // Part 5 — Conventions as Rhetoric, and Common Misconceptions
  {
    id: 'englang-style-writing-ent-5a',
    question: "A draft reads: \"The museum's attendance fell last year, the new dinosaur exhibit drew record crowds.\" Which revision corrects the comma splice and makes the contrast clear?",
    options: [
      "The museum's attendance fell last year, the new dinosaur exhibit, however, drew record crowds.",
      "The museum's attendance fell last year: the new dinosaur exhibit drew record crowds.",
      "The museum's attendance fell last year; however, the new dinosaur exhibit drew record crowds.",
      "The museum's attendance fell last year, and the new dinosaur exhibit drew record crowds.",
    ],
    correctIndex: 2,
    explanation: "A semicolon followed by \"however\" joins the two clauses correctly and names the contrast. The first version is still a splice, the colon wrongly presents the exhibit as an explanation of the drop, and \"and\" is correct but names no contrast.",
    partNumber: 5,
    partTitle: "Conventions as Rhetoric, and Common Misconceptions",
  },
  {
    id: 'englang-style-writing-ent-5b',
    question: "Believing that argument essays must never use \"I,\" a student rewrites a strong personal example about her summer job as \"One might observe that a person could, in certain cases, learn from work.\" Which advice is most accurate?",
    options: [
      "First person is allowed, and her specific example can serve as evidence",
      "She is right, because first person costs points on every AP essay",
      "She should also avoid beginning any sentence with \"And\" or \"But\"",
      "She should add more advanced vocabulary so the sentence sounds objective",
    ],
    correctIndex: 0,
    explanation: "The rubric does not forbid first person, and in the argument essay a specific personal example can be evidence if it is explained. The rewrite trades a concrete case for a vague hedge; the other advice repeats classroom myths.",
    partNumber: 5,
    partTitle: "Conventions as Rhetoric, and Common Misconceptions",
  },

  // Part 6 — Exam Practice: Revising Drafts and Earning Row C
  {
    id: 'englang-style-writing-ent-6a',
    question: "From a student's opinion piece written in a calm, measured voice:\n\n*For a decade the city has ________ the Westside pool, patching its cracks only after inspectors close it.*\n\nWhich verb best conveys disapproval while keeping the measured tone of the piece?",
    options: [
      "murdered",
      "maintained",
      "moved",
      "neglected",
    ],
    correctIndex: 3,
    explanation: "The verb names a real failure, care given only when forced, without exaggerating it. \"Murdered\" overstates wildly, \"maintained\" drops the criticism and \"moved\" is inaccurate.",
    partNumber: 6,
    partTitle: "Exam Practice: Revising Drafts and Earning Row C",
  },
  {
    id: 'englang-style-writing-ent-6b',
    question: "*(1) The Westside pool has been closed for two summers. (2) Its filtration system failed inspection two years ago. (3) The pool was designed by the same local architect who designed the town hall. (4) Without it, children in the neighborhood have nowhere nearby to swim. (5) Repairing the filters would cost a fraction of building a new pool.*\n\nThe writer is considering deleting sentence 3. Should the writer make this deletion?",
    options: [
      "Yes, since its detail is unrelated to the case for reopening",
      "Yes, because it contradicts the inspection date given in sentence 2",
      "No, because it shows the pool is historic and therefore worth saving",
      "No, because it supports the claim about repair costs in sentence 5",
    ],
    correctIndex: 0,
    explanation: "The architect has nothing to do with the closure, the children's need or the cost of repair, so the sentence interrupts the argument. It conflicts with no date and does not support the cost claim, and the paragraph never argues from history.",
    partNumber: 6,
    partTitle: "Exam Practice: Revising Drafts and Earning Row C",
  },

  // Part 7 — Review: A Revision Toolkit for Your Own Prose
  {
    id: 'englang-style-writing-ent-7a',
    question: "Which sentence correctly presses two closely related complete statements together without a conjunction?",
    options: [
      "The vote was close, the debate was not.",
      "The vote was close: and the debate was not.",
      "The vote was close; the debate was not.",
      "The vote, was close; the debate was not.",
    ],
    correctIndex: 2,
    explanation: "A semicolon is the mark that joins two independent clauses without a conjunction. A comma alone makes a splice, a colon cannot be followed by \"and\" here, and a comma between subject and verb is an error.",
    partNumber: 7,
    partTitle: "Review: A Revision Toolkit for Your Own Prose",
  },
  {
    id: 'englang-style-writing-ent-7b',
    question: "A student revises \"The plan will help the town\" to \"The plan will facilitate a plethora of myriad benefits for the municipality.\" What is the main problem with the revision?",
    options: [
      "The inflated words blur the claim instead of making it any more precise",
      "The revision is too short to show the sophistication readers reward",
      "The revision should use more technical, specialized vocabulary",
      "The revision should be rewritten in the passive voice to sound formal",
    ],
    correctIndex: 0,
    explanation: "Words chosen for their size rather than their fit lengthen the sentence while still never saying what the benefits are. Length, jargon and the passive voice would not fix the missing precision.",
    partNumber: 7,
    partTitle: "Review: A Revision Toolkit for Your Own Prose",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Precise Diction in Your Own Writing" },
    { partNumber: 3, partTitle: "Building Clear Sentences: Coordination and Subordination" },
    { partNumber: 4, partTitle: "Concision, Emphasis, and Variety" },
    { partNumber: 5, partTitle: "Conventions as Rhetoric, and Common Misconceptions" },
    { partNumber: 6, partTitle: "Exam Practice: Revising Drafts and Earning Row C" },
    { partNumber: 7, partTitle: "Review: A Revision Toolkit for Your Own Prose" },
  ]
}
