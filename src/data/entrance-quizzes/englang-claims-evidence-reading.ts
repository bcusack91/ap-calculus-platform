/**
 * Entrance Quiz — Claims and Evidence in Reading (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-claims-evidence-reading-ent-1a',
    question: "Read the passage below.\n\n*Students who eat breakfast at school score higher on morning tests than students who skip it. The district's free breakfast program, then, is raising test scores.*\n\nThe most serious weakness in this reasoning is that it",
    options: [
      "relies on an expert speaking outside her field",
      "treats a link between trends as proof of cause",
      "uses statistics that are clearly out of date",
      "draws its conclusion from a single anecdote",
    ],
    correctIndex: 1,
    explanation: "Students who eat the breakfast may differ in other ways from those who skip it, so the higher scores show a link, not that the program causes them. The passage cites no expert, no dated figures and no single story.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-claims-evidence-reading-ent-1b',
    question: "A writer argues that a new bridge design can withstand a strong earthquake. Which source would provide the most credible support for this claim?",
    options: [
      "A famous architect's interview praising the beauty of the bridge's arches",
      "A survey of residents who say they feel safe whenever they cross the bridge",
      "The mayor's statement that this will be the safest bridge in the whole state",
      "A structural engineer's report on how the bridge performed in seismic tests",
    ],
    correctIndex: 3,
    explanation: "A structural engineer reporting test results has expertise in exactly the question at issue. An architect praising beauty speaks outside the question, residents' feelings are not evidence of strength, and the mayor's assurance is an unsupported assertion.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Finding the Thesis: Stated, Delayed and Implied
  {
    id: 'englang-claims-evidence-reading-ent-2a',
    question: "Read the passage below.\n\n*(1) Homework has its defenders, and they are right that practice builds skill. (2) A pianist who never practices between lessons will not improve. (3) Still, the two hours a night many high schoolers now face look nothing like a pianist's focused twenty minutes. (4) Much of that work is copied, rushed or finished after midnight. (5) Schools should cap homework at one hour a night and make that hour count.*\n\nWhich statement best expresses the central claim of the passage?",
    options: [
      "Homework should be abolished because most of it is copied or rushed.",
      "Practice between lessons is essential to building any real skill.",
      "Many high school students now face two hours of homework a night.",
      "Schools should limit homework to one productive hour each night.",
    ],
    correctIndex: 3,
    explanation: "The position arrives after the concession and the turn word \"Still\": cap homework at a focused hour. Abolishing homework is stronger than the writer's claim, the point about practice is the concession, and the two-hour figure is evidence.",
    partNumber: 2,
    partTitle: "Finding the Thesis: Stated, Delayed and Implied",
  },
  {
    id: 'englang-claims-evidence-reading-ent-2b',
    question: "Read the passage below.\n\n*The new mall has a fountain that plays music on the hour, a food court with nineteen counters and a garage with room for two thousand cars. It has no bench where a person can sit without buying something. Last week a guard asked an old man resting at the edge of the fountain whether he was \"waiting on a purchase.\"*\n\nThe passage most strongly implies which claim?",
    options: [
      "This mall serves spenders, not people who only want to rest.",
      "The mall's fountain and food court are welcome additions to the town.",
      "Shopping centers should be barred from building large parking garages.",
      "The guard behaved rudely and should be disciplined by the mall's owners.",
    ],
    correctIndex: 0,
    explanation: "The details move from lavish features for shoppers to the missing benches and the guard's question, and together they imply that the mall values buyers over people. The passage is not praising the mall, says nothing against garages and uses the guard as one example, not the point.",
    partNumber: 2,
    partTitle: "Finding the Thesis: Stated, Delayed and Implied",
  },

  // Part 3 — Evidence at Work: Johnson's Voting Rights Address, 1965
  {
    id: 'englang-claims-evidence-reading-ent-3a',
    question: "From an essay about a school district's buildings:\n\n*The district reports that fourteen percent of its classrooms fell below the heating standard last winter. One of them was Room 114, where students took a chemistry exam wearing gloves.*\n\nThe second sentence primarily serves to",
    options: [
      "correct an error in the district's own figure",
      "show that most classrooms were warm enough",
      "give a human picture of what the figure means",
      "present the writer's credentials as a teacher",
    ],
    correctIndex: 2,
    explanation: "The statistic states the scale of the problem, and the gloved chemistry students show what one cold room is actually like. The sentence accepts the district's number, does not dwell on the warm rooms and says nothing about the writer.",
    partNumber: 3,
    partTitle: "Evidence at Work: Johnson's Voting Rights Address, 1965",
  },
  {
    id: 'englang-claims-evidence-reading-ent-3b',
    question: "A council member argues that the city must reopen a free clinic it closed last year. She first describes three patients who were turned away and went without treatment. She then quotes the city charter's pledge to provide \"care for every resident who cannot pay.\" The quotation from the charter chiefly serves to",
    options: [
      "prove that patients have been turned away since the clinic closed",
      "show that the closing breaks a promise the city already made",
      "concede that the charter was written long before the clinic opened",
      "introduce the history of the charter for residents unfamiliar with it",
    ],
    correctIndex: 1,
    explanation: "The patients' stories establish the fact of harm; the charter supplies the value, showing that the closing contradicts a commitment the city itself made. The quotation proves nothing about who was turned away, concedes nothing and is not offered as history.",
    partNumber: 3,
    partTitle: "Evidence at Work: Johnson's Voting Rights Address, 1965",
  },

  // Part 4 — Reading Qualification: Roosevelt's "The Man with the Muck-Rake," 1906
  {
    id: 'englang-claims-evidence-reading-ent-4a',
    question: "Read the passage below.\n\n*I am a believer in standardized tests. They give a student from an unknown school a way to be noticed, and they catch what a generous grader might miss. But a test is useful only so long as it is treated as one measure among several; the day a single score decides a child's future, the test stops measuring and starts sorting.*\n\nThe writer's attitude toward standardized tests is best described as",
    options: [
      "unreserved enthusiasm",
      "conditional approval",
      "reluctant hostility",
      "detached neutrality",
    ],
    correctIndex: 1,
    explanation: "The writer praises the tests sincerely and then limits that praise to tests used as one measure among several. \"Unreserved\" ignores the condition, \"hostility\" ignores the praise, and the writer is plainly not neutral.",
    partNumber: 4,
    partTitle: "Reading Qualification: Roosevelt's \"The Man with the Muck-Rake,\" 1906",
  },
  {
    id: 'englang-claims-evidence-reading-ent-4b',
    question: "Read the passage below.\n\n*I am a believer in standardized tests. They give a student from an unknown school a way to be noticed, and they catch what a generous grader might miss. But a test is useful only so long as it is treated as one measure among several; the day a single score decides a child's future, the test stops measuring and starts sorting.*\n\nThe phrase \"only so long as it is treated as one measure among several\" primarily serves to",
    options: [
      "concede that tests ought to be abolished in the end",
      "extend the writer's praise to every kind of exam",
      "introduce evidence about how colleges use scores",
      "set the condition the writer's support depends on",
    ],
    correctIndex: 3,
    explanation: "\"Only so long as\" makes the writer's support depend on how tests are used, which is the heart of the qualified position. The phrase narrows rather than widens the praise, calls for no abolition and cites no evidence.",
    partNumber: 4,
    partTitle: "Reading Qualification: Roosevelt's \"The Man with the Muck-Rake,\" 1906",
  },

  // Part 5 — Misreadings and Traps: Tone, Voiced Claims and Wrong Answers
  {
    id: 'englang-claims-evidence-reading-ent-5a',
    question: "Read the passage below.\n\n*Critics insist that a four-day school week would leave young children unsupervised every Friday. The district's own pilot found the opposite: attendance at its Friday enrichment programs ran above eighty percent all year.*\n\nThe first sentence functions primarily as",
    options: [
      "the writer's own reservation about the four-day plan",
      "evidence that the district's pilot program failed",
      "a position the writer reports in order to rebut it",
      "the central claim that the rest of the passage defends",
    ],
    correctIndex: 2,
    explanation: "\"Critics insist\" marks a voiced view, and the next sentence answers it with the pilot's results. The writer does not share the worry, the pilot is presented as a success, and the passage argues against the first sentence rather than for it.",
    partNumber: 5,
    partTitle: "Misreadings and Traps: Tone, Voiced Claims and Wrong Answers",
  },
  {
    id: 'englang-claims-evidence-reading-ent-5b',
    question: "From a letter to a town council:\n\n*I have counted the potholes on Birch Lane, and I am pleased to report that they now outnumber the residents. If the trend continues, we plan to secede from the town and declare ourselves a lake. In the meantime, we would settle for one truck of asphalt before the first frost.*\n\nWhich statement best captures the writer's main claim?",
    options: [
      "The residents of Birch Lane intend to secede from the town.",
      "Every road in the town is in worse shape than Birch Lane.",
      "The writer has counted every pothole on Birch Lane.",
      "Birch Lane needs repaving before the cold weather arrives.",
    ],
    correctIndex: 3,
    explanation: "Beneath the jokes, the one serious request is for asphalt before the frost. The secession threat is playful exaggeration taken literally, the claim about every road is broader than anything the letter says, and the pothole count is a detail, not the point.",
    partNumber: 5,
    partTitle: "Misreadings and Traps: Tone, Voiced Claims and Wrong Answers",
  },

  // Part 6 — Exam Practice: A Du Bois Passage Set and a Scored Paragraph
  {
    id: 'englang-claims-evidence-reading-ent-6a',
    question: "From an editorial about a town's downtown:\n\n*The new parking fees did not, by themselves, empty the shops on Front Street; a recession and the mall on Route 3 did much of that work. But the fees, beyond any reasonable doubt, hastened the decline.*\n\nThe writer qualifies the claim about the parking fees by",
    options: [
      "denying that the fees had any effect on the Front Street shops",
      "blaming the decline entirely on the new mall along Route 3",
      "separating causing the decline from making it happen sooner",
      "conceding that the shops had never been profitable at all",
    ],
    correctIndex: 2,
    explanation: "\"Did not, by themselves\" denies sole cause, and \"hastened the decline\" asserts a real contributing role, so the claim is narrowed but kept. The writer does not deny the fees mattered, does not blame the mall alone and says nothing about past profits.",
    partNumber: 6,
    partTitle: "Exam Practice: A Du Bois Passage Set and a Scored Paragraph",
  },
  {
    id: 'englang-claims-evidence-reading-ent-6b',
    question: "From a letter by an engineering firm to a county board:\n\n*We raise these concerns about the bridge design not as a rival company hoping to win the contract (we did not bid on it) but as residents who will drive across this bridge every day.*\n\nThe words \"not as a rival company hoping to win the contract\" primarily serve to",
    options: [
      "answer in advance a suspicion about the writers' motives",
      "admit that the firm lost the contract to a competitor",
      "describe the steps of the county's bidding process",
      "praise the company that was awarded the contract",
    ],
    correctIndex: 0,
    explanation: "Readers might dismiss criticism from a competing firm as self-interest, so the writers rule out that motive before it is raised. The firm says it did not bid, so it lost nothing, and the letter neither explains bidding nor praises the winner.",
    partNumber: 6,
    partTitle: "Exam Practice: A Du Bois Passage Set and a Scored Paragraph",
  },

  // Part 7 — Review: Reading Any Argument for Its Claims
  {
    id: 'englang-claims-evidence-reading-ent-7a',
    question: "Read the passage below.\n\n*(1) It is often said that the library's new self-checkout machines will make librarians unnecessary. (2) The machines are fast; a patron can check out ten books in under a minute. (3) But speed was never the library's purpose. (4) Last month librarians answered more than two thousand questions, on everything from tax forms to job applications. (5) The board should keep every librarian position, even as it keeps the machines.*\n\nWhich evidence, if added, would most strengthen the argument for board members who doubt that librarians are still needed?",
    options: [
      "A count of the patrons who visited only to ask a librarian for help",
      "A history of how libraries first adopted barcodes and scanners",
      "A survey asking patrons how fast they would like checkout to be",
      "Photographs of the library's newly renovated reading room",
    ],
    correctIndex: 0,
    explanation: "The board's doubt is whether librarians still do necessary work, so a count of patrons who came only for a librarian's help answers it directly. Barcode history, checkout speed and the reading room do not touch that doubt.",
    partNumber: 7,
    partTitle: "Review: Reading Any Argument for Its Claims",
  },
  {
    id: 'englang-claims-evidence-reading-ent-7b',
    question: "Read the passage below.\n\n*(1) It is often said that the library's new self-checkout machines will make librarians unnecessary. (2) The machines are fast; a patron can check out ten books in under a minute. (3) But speed was never the library's purpose. (4) Last month librarians answered more than two thousand questions, on everything from tax forms to job applications. (5) The board should keep every librarian position, even as it keeps the machines.*\n\nThe phrase \"even as it keeps the machines\" in sentence 5 primarily serves to",
    options: [
      "concede that the machines should replace a few staff",
      "show the writer objects to cuts, not to the machines",
      "introduce evidence about what the machines cost",
      "reverse the position the writer took in sentence 3",
    ],
    correctIndex: 1,
    explanation: "The phrase limits the claim: the writer accepts the machines and opposes only the loss of librarians. It concedes no job cuts, offers no cost evidence and is consistent with sentence 3.",
    partNumber: 7,
    partTitle: "Review: Reading Any Argument for Its Claims",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Finding the Thesis: Stated, Delayed and Implied" },
    { partNumber: 3, partTitle: "Evidence at Work: Johnson's Voting Rights Address, 1965" },
    { partNumber: 4, partTitle: "Reading Qualification: Roosevelt's \"The Man with the Muck-Rake,\" 1906" },
    { partNumber: 5, partTitle: "Misreadings and Traps: Tone, Voiced Claims and Wrong Answers" },
    { partNumber: 6, partTitle: "Exam Practice: A Du Bois Passage Set and a Scored Paragraph" },
    { partNumber: 7, partTitle: "Review: Reading Any Argument for Its Claims" },
  ]
}
