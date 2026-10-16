/**
 * Entrance Quiz — Synthesis Writing (AP English Language) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts
  {
    id: 'englang-synthesis-ent-1a',
    question: "A synthesis prompt asks students to develop a position on whether a city should add protected bike lanes. Source A reports that crashes fell after lanes were added on two streets; Source C finds that car trips on those streets grew only slightly slower. Which sentence best demonstrates synthesis?",
    options: [
      "Read with Source C's minor delays, Source A's fewer crashes suggest safety at little cost.",
      "Source A says bike lanes reduce crashes, while Source C says they slow car traffic.",
      "Source A is about bike lanes, and Source C is about traffic on the same two streets.",
      "I agree most with Source A because its argument about bike lanes sounds the most convincing.",
    ],
    correctIndex: 0,
    explanation: "The synthesizing sentence puts the two sources in relation and draws an inference neither states alone. The others describe the sources separately, set them side by side without connecting them or endorse one without reasoning.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'englang-synthesis-ent-1b',
    question: "Source A reports that a city's library visits rose after evening hours were added. Source B, from a different state and a different research team, reports the same pattern in eleven towns. Source B's relationship to Source A is best described as",
    options: [
      "qualification",
      "corroboration",
      "concession",
      "contradiction",
    ],
    correctIndex: 1,
    explanation: "Source B independently supports the same point as Source A, which is corroboration, and its separate author and setting make it stronger. It adds no condition, grants nothing to an opponent and does not disagree.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Reading a Source Set: What to Annotate
  {
    id: 'englang-synthesis-ent-2a',
    question: "In a synthesis set about classroom air quality, one source is introduced as \"a press release from the maker of the CleanAir classroom filter, 2024.\" Before reading the excerpt, a student can most reasonably expect it to",
    options: [
      "report an independent, controlled study of air in many classrooms",
      "recount a teacher's memories of working through a winter flu season",
      "praise the product, from a writer with a stake in its sales",
      "present a neutral data table that takes no position on any product",
    ],
    correctIndex: 2,
    explanation: "A manufacturer's press release is written to promote its product, so the student should expect praise and note the stake in the source log. Its genre and author rule out an independent study, a memoir or neutral data.",
    partNumber: 2,
    partTitle: "Reading a Source Set: What to Annotate",
  },
  {
    id: 'englang-synthesis-ent-2b',
    question: "A source written by a town historian begins: *Critics in 1920 called the new library a waste of good farmland.* A student writes, \"The historian believes the library wasted good farmland.\" What is the main problem with the student's sentence?",
    options: [
      "It presents a view the historian merely reports as her own",
      "It relies on a source too old to bear on a modern question",
      "It quotes the historian where a paraphrase was needed",
      "It ignores the date given in the source's introduction line",
    ],
    correctIndex: 0,
    explanation: "The historian is describing what critics said in 1920, not stating her own judgment, so the student has mistaken a reported view for the author's. The student paraphrases rather than quotes, the historian writes in the present and the date is not the issue.",
    partNumber: 2,
    partTitle: "Reading a Source Set: What to Annotate",
  },

  // Part 3 — A Worked Source Set: Parks and the Crowded City
  {
    id: 'englang-synthesis-ent-3a',
    question: "Source A, by a downtown business association, argues that closing Main Street to cars and building a pedestrian plaza will draw shoppers downtown. Source D, a study of thirty towns, finds that such plazas drew shoppers in towns with parking nearby but emptied in towns without it. Source D's relationship to Source A is best described as",
    options: [
      "corroborating A by confirming that plazas succeed everywhere",
      "qualifying A by stating the condition its claim needs",
      "contradicting A by showing that plazas never draw shoppers",
      "extending A by applying its claim to suburban shopping malls",
    ],
    correctIndex: 1,
    explanation: "Source D accepts that plazas can draw shoppers but limits the claim to towns with nearby parking, which is qualification. It does not confirm success everywhere, deny any success or turn to malls.",
    partNumber: 3,
    partTitle: "A Worked Source Set: Parks and the Crowded City",
  },
  {
    id: 'englang-synthesis-ent-3b',
    question: "A student wants to show that a new bus route is badly overcrowded. Which pair of sources would provide the strongest corroboration?",
    options: [
      "Two letters from riders who belong to the same advocacy group",
      "A rider's photo and the agency's own passenger counts",
      "A newspaper column and a second column that quotes the first",
      "A rider survey and that same survey summarized in a press release",
    ],
    correctIndex: 1,
    explanation: "Corroboration is strongest when sources differ in author and kind of evidence; a rider's photo and the agency's own counts agree independently. The other pairs share an author, a group or a single underlying source.",
    partNumber: 3,
    partTitle: "A Worked Source Set: Parks and the Crowded City",
  },

  // Part 4 — Visual and Quantitative Sources: Reading Data Without Overclaiming
  {
    id: 'englang-synthesis-ent-4a',
    question: "A table in a synthesis set reports, for three neighborhoods of one city, the share of residents living within a ten-minute walk of a public library: Hillcrest 90 percent, Bayview 70 percent and Lowell 40 percent. Median household incomes, in the same order, are 95, 60 and 35 thousand dollars. Which claim does the table support most directly?",
    options: [
      "In this city, poorer areas have less walkable library access.",
      "Lowell residents read fewer books than Hillcrest residents do.",
      "Building a library in Lowell would raise its residents' incomes.",
      "This pattern of access holds in cities across the country.",
    ],
    correctIndex: 0,
    explanation: "The table measures income and walking distance, and access falls as income falls across the three rows. It says nothing about the effect of a new library, how much anyone reads or other cities.",
    partNumber: 4,
    partTitle: "Visual and Quantitative Sources: Reading Data Without Overclaiming",
  },
  {
    id: 'englang-synthesis-ent-4b',
    question: "Which verb phrase best completes the sentence? \"A survey of one high school's senior class ________ that students favor a later start time.\"",
    options: [
      "proves beyond doubt",
      "establishes for every school",
      "demonstrates nationally",
      "suggests",
    ],
    correctIndex: 3,
    explanation: "One class at one school is limited evidence, so a moderate verb matches its strength. The other choices claim certainty or a reach far beyond a single senior class.",
    partNumber: 4,
    partTitle: "Visual and Quantitative Sources: Reading Data Without Overclaiming",
  },

  // Part 5 — Integrating Sources: Attribution, Signal Verbs, and Common Misuses
  {
    id: 'englang-synthesis-ent-5a',
    question: "A city parks director writes: *Our parks are badly underfunded, but I will grant that the new splash pad has been a real success.* Which sentence characterizes the director's statement most accurately?",
    options: [
      "The director insists that every park program in the city has failed.",
      "The director proves with data that the parks are badly underfunded.",
      "The director concedes that the new splash pad has worked out well.",
      "The director rejects the splash pad as a waste of scarce money.",
    ],
    correctIndex: 2,
    explanation: "\"I will grant\" marks a concession, so \"concedes\" is the accurate signal verb. The director does not condemn every program, offers no data and calls the splash pad a success rather than a waste.",
    partNumber: 5,
    partTitle: "Integrating Sources: Attribution, Signal Verbs, and Common Misuses",
  },
  {
    id: 'englang-synthesis-ent-5b',
    question: "In a synthesis set on school libraries, Source F, a school board memo, notes that a full-time librarian costs about 80,000 dollars a year per school. Source C, a study, finds stronger research skills among students in schools with librarians. Which sentence best uses Source F as a counterargument and responds to it?",
    options: [
      "Admittedly, a librarian costs about 80,000 dollars a year (Source F), but Source C's gains suggest it buys real learning.",
      "The board is simply wrong about the cost of librarians (Source F), since no price is too high for learning.",
      "Source F says a librarian costs about 80,000 dollars, and Source C says students with librarians do better.",
      "Although Source F worries about cost, money should never matter when students' futures are at stake.",
    ],
    correctIndex: 0,
    explanation: "The strong sentence states the board's point accurately and answers it with evidence from another source. The others set the sources side by side, dismiss the cost without evidence or wave it away with an absolute.",
    partNumber: 5,
    partTitle: "Integrating Sources: Attribution, Signal Verbs, and Common Misuses",
  },

  // Part 6 — Exam Practice: Sources in a Q1 Response
  {
    id: 'englang-synthesis-ent-6a',
    question: "A body paragraph in a synthesis essay cites three sources, and after each one the student writes, \"This shows that libraries are important.\" Its Row B score is most likely limited because",
    options: [
      "it draws on more sources than the rubric's minimum requires",
      "its commentary never explains how evidence supports a claim",
      "it quotes its sources instead of paraphrasing what they say",
      "it states its claim at the very start of the body paragraph",
    ],
    correctIndex: 1,
    explanation: "Row B rises with commentary that consistently explains how evidence supports a line of reasoning, and a repeated general sentence explains nothing. Using three sources meets the minimum, quoting is allowed and opening with a claim is a strength.",
    partNumber: 6,
    partTitle: "Exam Practice: Sources in a Q1 Response",
  },
  {
    id: 'englang-synthesis-ent-6b',
    question: "A student cites a source reporting that only 4 of 30 students in one class had ever visited the town's new library, which charges no fees. Which follow-up sentence best stays within what the evidence shows?",
    options: [
      "This proves that most students in the town never use the library.",
      "Clearly, students today simply do not care about reading at all.",
      "Because entry is free, the gap may reflect distance or another barrier besides cost.",
      "The library must be badly designed, since so few students visit it.",
    ],
    correctIndex: 2,
    explanation: "The figure counts visits in one class but gives no reasons, so a careful writer marks the inference as tentative while ruling out cost. The others generalize to all students or assert causes the evidence never shows.",
    partNumber: 6,
    partTitle: "Exam Practice: Sources in a Q1 Response",
  },

  // Part 7 — Synthesis Review: From Source Set to Line of Reasoning
  {
    id: 'englang-synthesis-ent-7a',
    question: "A source argues that public libraries should stay open in the evenings, but only in neighborhoods where many homes lack internet access. A student's source log records its position as \"pro-library.\" Which revision makes the entry most useful?",
    options: [
      "Backs every library service in every neighborhood",
      "Opposes libraries, since the internet has replaced them",
      "Takes no stance, since it mainly reports data",
      "Backs later hours where many households lack internet",
    ],
    correctIndex: 3,
    explanation: "The precise entry records the conditional support, the kind of service and the neighborhoods, which is what a writer needs when grouping sources. The source does not endorse everything, oppose libraries or withhold a position.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Source Set to Line of Reasoning",
  },
  {
    id: 'englang-synthesis-ent-7b',
    question: "A writer wants to link a 1950 librarian's claim that libraries \"keep young people off the streets\" with a 2024 table counting teenagers' library visits. What caution matters most?",
    options: [
      "The 1950 source is too long to quote, so it must be summarized in one line",
      "A table cannot be paired with a prose source inside a single paragraph",
      "A librarian has a stake in the answer, so nothing she says can be cited",
      "The two sources measure different things, and the older one reflects its own era",
    ],
    correctIndex: 3,
    explanation: "Visit counts do not show what the librarian claimed about young people's behavior, and a 1950 judgment needs a note about currency, so the link must be stated carefully. Length does not bar quotation, data pairs well with prose and a stake calls for caution rather than exclusion.",
    partNumber: 7,
    partTitle: "Synthesis Review: From Source Set to Line of Reasoning",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Reading a Source Set: What to Annotate" },
    { partNumber: 3, partTitle: "A Worked Source Set: Parks and the Crowded City" },
    { partNumber: 4, partTitle: "Visual and Quantitative Sources: Reading Data Without Overclaiming" },
    { partNumber: 5, partTitle: "Integrating Sources: Attribution, Signal Verbs, and Common Misuses" },
    { partNumber: 6, partTitle: "Exam Practice: Sources in a Q1 Response" },
    { partNumber: 7, partTitle: "Synthesis Review: From Source Set to Line of Reasoning" },
  ]
}
