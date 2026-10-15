/**
 * AP English Language and Composition: free-response practice bank.
 *
 * Built to the real exam: Section II is 3 essays in 2 hours 15 minutes, including
 * a 15-minute reading period, in this order:
 *   Q1 Synthesis · Q2 Rhetorical Analysis · Q3 Argument.
 * Each essay is ONE question scored on the 6-point analytic rubric:
 *   Row A Thesis (1) · Row B Evidence and Commentary (4, cumulative) · Row C Sophistication (1).
 * Two questions per type, so the bank holds two complete exams.
 *
 * Passages are real public-domain texts quoted from the editions named in each prompt.
 * Synthesis sources are either real documents (summarized, marked "adapted") or
 * clearly labelled practice sources written for this question.
 *
 * Self-grading: the page's keyword matcher lowercases the student's essay. A rubric
 * item is earned when at least `minMatches` of its keywords appear (a keyword may list
 * alternatives separated by "|"), every `requiresAll` group is also met, and, for
 * Row B, the previous Row B point was earned (the rows are cumulative, as on the
 * official rubric).
 */

export interface FRQKeywordGroup {
  keywords: string[]
  minMatches?: number
}

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
  /** Distinct keywords that must appear (default 1). */
  minMatches?: number
  /** Further keyword groups that must ALSO be met. */
  requiresAll?: FRQKeywordGroup[]
  /** Essay rubric row. Row B points are cumulative: each needs the one before it. */
  row?: 'A' | 'B' | 'C'
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export type EngLangFRQType = 'synthesis' | 'rhetorical-analysis' | 'argument'

/** Exam order, labels, points, and suggested minutes for the three real essay types. */
export const ENG_LANG_FRQ_TYPES: { type: EngLangFRQType; label: string; short: string; points: number; minutes: number }[] = [
  { type: 'synthesis', label: 'Synthesis Essay', short: 'Q1 Synthesis', points: 6, minutes: 55 },
  { type: 'rhetorical-analysis', label: 'Rhetorical Analysis Essay', short: 'Q2 Rhetorical Analysis', points: 6, minutes: 40 },
  { type: 'argument', label: 'Argument Essay', short: 'Q3 Argument', points: 6, minutes: 40 },
]

/** Real Section II time: 2 h 15 min, including the 15-minute reading period. */
export const ENG_LANG_SECTION_MINUTES = 135

export interface EngLangFRQ {
  id: string
  type: EngLangFRQType
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

// ---------------------------------------------------------------------------
// Shared rubric vocabulary
// ---------------------------------------------------------------------------

const COMMENTARY = [
  'because', 'this shows', 'which shows', 'shows that', 'suggests', 'demonstrates', 'reveals',
  'emphasizes', 'implies', 'this means', 'means that', 'in other words', 'so that', 'thereby',
  'illustrates', 'highlights', 'underscores', 'proves', 'explains why', 'which means', 'conveys',
  'signals', 'this matters', 'matters because', 'the effect', 'establishes', 'transforms', 'turns the',
  'turns a', 'recasts', 'invites', 'forces', 'frames', 'makes the', 'creates',
]

const REASONING = [
  'therefore', 'thus', 'consequently', 'as a result', 'moreover', 'furthermore', 'in turn',
  'which is why', 'for this reason', 'not only', 'by contrast', 'similarly', 'just as',
  'ultimately', 'in the same way', 'likewise', 'instead',
]

const SOPHISTICATION = [
  'tension', 'paradox', 'complex', 'complicat', 'irony', 'ironic', 'ambigu', 'implication',
  'broader', 'larger', 'at the same time', 'nuance', 'contradict', 'trade-off', 'tradeoff',
  'limits of', 'cuts both ways', 'double',
  'qualif', 'distinction', 'distinguish', 'on the other hand', 'underlying', 'deeper',
]

const RHETORICAL_CHOICES = [
  'diction', 'syntax', 'rhetorical question', 'repetition', 'anaphora', 'parallel', 'antithesis',
  'metaphor', 'imagery', 'allusion', 'juxtapos', 'tone', 'irony', 'ironic', 'concession',
  'catalog', 'list', 'asyndeton', 'second person', 'pronoun', 'contrast', 'exclamation',
  'hyperbole', 'sarcasm', 'figurative', 'personification', 'shift', 'appeal to', 'periodic sentence',
]

const EXAMPLE_MARKERS = [
  'for example', 'for instance', 'such as', 'consider', 'in 18', 'in 19', 'in 20', 'when i',
  'when my', 'during', 'case of', 'take the',
]

/** "(Source A)" style citations, one alternatives-group per source so minMatches counts SOURCES. */
const SOURCE_CITES = ['a', 'b', 'c', 'd', 'e', 'f', 'g'].map((l) =>
  [`(source ${l})`, `source ${l} `, `source ${l},`, `source ${l}.`, `source ${l};`, `source ${l})`, `source ${l}:`].join('|'),
)

const SYNTH_B = [
  'Row B — Evidence and Commentary, point 1 of 4: provides evidence from or references at least TWO of the provided sources, but mostly summarizes the evidence without explaining how it supports the argument.',
  'Row B — Evidence and Commentary, point 2 of 4 (cumulative): provides evidence from or references at least THREE of the provided sources and explains how some of the evidence relates to the argument, even if no line of reasoning is established or the reasoning is faulty.',
  'Row B — Evidence and Commentary, point 3 of 4 (cumulative): provides specific evidence from at least three of the provided sources to support all claims in a line of reasoning, and explains how some of the evidence supports that line of reasoning.',
  'Row B — Evidence and Commentary, point 4 of 4 (cumulative): provides specific evidence from at least three sources to support all claims in a line of reasoning, AND consistently explains how the evidence supports the line of reasoning (commentary on every source used, not just a quotation dropped in).',
]

const RA_B = [
  'Row B — Evidence and Commentary, point 1 of 4: provides evidence from the passage that is mostly general, and mostly summarizes it rather than explaining how it supports the argument.',
  'Row B — Evidence and Commentary, point 2 of 4 (cumulative): provides some specific, relevant evidence from the passage and explains how some of it relates to the argument, even if no line of reasoning is established or the reasoning is faulty.',
  'Row B — Evidence and Commentary, point 3 of 4 (cumulative): provides specific evidence to support all claims in a line of reasoning, explains how some of the evidence supports that line of reasoning, AND explains how at least one rhetorical choice in the passage contributes to the writer\'s argument, purpose, or message.',
  'Row B — Evidence and Commentary, point 4 of 4 (cumulative): provides specific evidence to support all claims, consistently explains how the evidence supports the line of reasoning, AND explains how MULTIPLE rhetorical choices in the passage contribute to the writer\'s argument, purpose, or message.',
]

const ARG_B = [
  'Row B — Evidence and Commentary, point 1 of 4: provides evidence that is mostly general, and mostly summarizes it rather than explaining how it supports the argument.',
  'Row B — Evidence and Commentary, point 2 of 4 (cumulative): provides some specific, relevant evidence and explains how some of it relates to the argument, even if no line of reasoning is established or the reasoning is faulty.',
  'Row B — Evidence and Commentary, point 3 of 4 (cumulative): provides specific evidence to support all claims in a line of reasoning and explains how some of the evidence supports that line of reasoning.',
  'Row B — Evidence and Commentary, point 4 of 4 (cumulative): provides specific evidence to support all claims in a line of reasoning AND consistently explains how the evidence supports the line of reasoning.',
]

function synthesisRubric(spec: { thesis: string[]; topic: string[]; specifics: string[]; sophistication: string }): FRQRubricItem[] {
  return [
    {
      row: 'A',
      points: 1,
      description: 'Row A — Thesis (0–1): responds to the prompt with a thesis that presents a defensible position. A thesis that only restates the prompt, summarizes the issue with no clear claim, or does not respond to the prompt earns 0.',
      keywords: spec.thesis,
      requiresAll: [{ keywords: spec.topic }],
    },
    { row: 'B', points: 1, description: SYNTH_B[0], keywords: SOURCE_CITES, minMatches: 2 },
    { row: 'B', points: 1, description: SYNTH_B[1], keywords: SOURCE_CITES, minMatches: 3, requiresAll: [{ keywords: COMMENTARY }] },
    { row: 'B', points: 1, description: SYNTH_B[2], keywords: spec.specifics, minMatches: 4, requiresAll: [{ keywords: SOURCE_CITES, minMatches: 3 }, { keywords: COMMENTARY, minMatches: 3 }, { keywords: REASONING }] },
    { row: 'B', points: 1, description: SYNTH_B[3], keywords: COMMENTARY, minMatches: 5, requiresAll: [{ keywords: REASONING, minMatches: 2 }, { keywords: SOURCE_CITES, minMatches: 4 }] },
    {
      row: 'C',
      points: 1,
      description: `Row C — Sophistication (0–1): demonstrates sophistication of thought and/or a complex understanding of the rhetorical situation, sustained across the essay, not in a single sentence. Ways to earn it: crafting a nuanced argument that consistently identifies and explores complexities or tensions across the sources; articulating the implications or limitations of the argument by situating it in a broader context; making effective rhetorical choices that strengthen the argument; or a style that is consistently vivid and persuasive. For this prompt: ${spec.sophistication}`,
      keywords: SOPHISTICATION,
      minMatches: 2,
    },
  ]
}

function rhetoricalRubric(spec: { thesis: string[]; specifics: string[]; sophistication: string }): FRQRubricItem[] {
  return [
    {
      row: 'A',
      points: 1,
      description: 'Row A — Thesis (0–1): responds to the prompt with a thesis that analyzes the writer\'s rhetorical choices. A thesis that only restates the prompt, merely lists devices ("ethos, pathos, logos") without connecting them to a purpose, or summarizes the passage earns 0.',
      keywords: RHETORICAL_CHOICES,
      requiresAll: [{ keywords: spec.thesis }],
    },
    { row: 'B', points: 1, description: RA_B[0], keywords: spec.specifics },
    { row: 'B', points: 1, description: RA_B[1], keywords: spec.specifics, minMatches: 2, requiresAll: [{ keywords: COMMENTARY }] },
    { row: 'B', points: 1, description: RA_B[2], keywords: spec.specifics, minMatches: 4, requiresAll: [{ keywords: COMMENTARY, minMatches: 3 }, { keywords: RHETORICAL_CHOICES }, { keywords: REASONING }] },
    { row: 'B', points: 1, description: RA_B[3], keywords: RHETORICAL_CHOICES, minMatches: 3, requiresAll: [{ keywords: COMMENTARY, minMatches: 5 }, { keywords: REASONING, minMatches: 2 }, { keywords: spec.specifics, minMatches: 6 }] },
    {
      row: 'C',
      points: 1,
      description: `Row C — Sophistication (0–1): demonstrates sophistication of thought and/or a complex understanding of the rhetorical situation, sustained across the essay. Ways to earn it: explaining the significance or relevance of the writer\'s rhetorical choices given the rhetorical situation; explaining a purpose or function of the passage\'s complexities or tensions; or a style that is consistently vivid and persuasive. For this passage: ${spec.sophistication}`,
      keywords: SOPHISTICATION,
      minMatches: 2,
    },
  ]
}

function argumentRubric(spec: { thesis: string[]; topic: string[]; sophistication: string }): FRQRubricItem[] {
  return [
    {
      row: 'A',
      points: 1,
      description: 'Row A — Thesis (0–1): responds to the prompt with a thesis that presents a defensible position. Agreeing, disagreeing, or qualifying all work; restating the prompt, giving no clear position, or hedging without a claim earns 0.',
      keywords: spec.thesis,
      requiresAll: [{ keywords: spec.topic }],
    },
    { row: 'B', points: 1, description: ARG_B[0], keywords: EXAMPLE_MARKERS },
    { row: 'B', points: 1, description: ARG_B[1], keywords: EXAMPLE_MARKERS, requiresAll: [{ keywords: COMMENTARY }] },
    { row: 'B', points: 1, description: ARG_B[2], keywords: EXAMPLE_MARKERS, minMatches: 2, requiresAll: [{ keywords: COMMENTARY, minMatches: 3 }, { keywords: spec.topic, minMatches: 2 }, { keywords: REASONING }] },
    { row: 'B', points: 1, description: ARG_B[3], keywords: COMMENTARY, minMatches: 5, requiresAll: [{ keywords: REASONING, minMatches: 2 }] },
    {
      row: 'C',
      points: 1,
      description: `Row C — Sophistication (0–1): demonstrates sophistication of thought and/or a complex understanding of the rhetorical situation, sustained across the essay. Ways to earn it: crafting a nuanced argument that consistently identifies and explores complexities or tensions; articulating the implications or limitations of the argument by situating it in a broader context; making effective rhetorical choices that strengthen the argument; or a style that is consistently vivid and persuasive. A single concession tacked onto the conclusion does not earn the point. For this prompt: ${spec.sophistication}`,
      keywords: SOPHISTICATION,
      minMatches: 2,
    },
  ]
}

const ESSAY_PART_PROMPT = 'Write your essay in response to the prompt above. When you grade it, check it against each row of the 6-point rubric: Row A (thesis, 1 point), Row B (evidence and commentary, 4 cumulative points), Row C (sophistication, 1 point).'

const SYNTHESIS_DIRECTIONS = `**Directions:** The following prompt is based on the accompanying sources. This question requires you to integrate a variety of sources into a coherent, well-written essay. Refer to the sources to support your position; avoid mere paraphrase or summary. Your argument should be central; the sources should support this argument. Suggested time: 15 minutes for reading the sources and 40 minutes for writing.

**Note on the sources:** sources marked *adapted* summarize real documents; sources marked *practice source* were written for this practice question and are not real publications.`

const SYNTHESIS_BULLETS = `In your response you should do the following:

- Respond to the prompt with a thesis that presents a defensible position.
- Select and use evidence from at least three of the provided sources to support your line of reasoning. Indicate clearly the sources used through direct quotation, paraphrase, or summary. Sources may be cited as Source A, Source B, etc., or by using the description in parentheses.
- Explain how the evidence supports your line of reasoning.
- Use appropriate grammar and punctuation in communicating your argument.`

const RA_BULLETS = `In your response you should do the following:

- Respond to the prompt with a thesis that analyzes the writer's rhetorical choices.
- Select and use evidence to support your line of reasoning.
- Explain how the evidence supports your line of reasoning.
- Demonstrate an understanding of the rhetorical situation.
- Use appropriate grammar and punctuation in communicating your argument.`

const ARG_BULLETS = `In your response you should do the following:

- Respond to the prompt with a thesis that presents a defensible position.
- Provide evidence to support your line of reasoning.
- Explain how the evidence supports your line of reasoning.
- Use appropriate grammar and punctuation in communicating your argument.`

// ---------------------------------------------------------------------------
// Q1 — SYNTHESIS
// ---------------------------------------------------------------------------

const synthesisFRQs: EngLangFRQ[] = [
  {
    id: 'englang-synthesis-1',
    type: 'synthesis',
    unit: 9,
    title: 'Synthesis: Later High School Start Times',
    prompt: `${SYNTHESIS_DIRECTIONS}

**Introduction.** For decades most American high schools have started earlier than elementary schools, often before 7:45 a.m., largely so that one fleet of buses can make several runs each morning. Sleep researchers and pediatricians have argued that early bells collide with adolescent biology, and California now requires later start times. Opponents point to costs for transportation, families, athletics, and after-school work.

**Assignment.** Carefully read the following seven sources, including the introductory information for each source. Write an essay that synthesizes material from at least three of the sources and develops your position on whether high schools should adopt later start times.

${SYNTHESIS_BULLETS}

---

**Source A** (American Academy of Pediatrics) — *adapted*

Summary of: Adolescent Sleep Working Group, Committee on Adolescence, and Council on School Health, "School Start Times for Adolescents," policy statement, *Pediatrics*, September 2014.

The American Academy of Pediatrics recommends that middle and high schools aim for a start time of 8:30 a.m. or later. The statement explains that the sleep-wake cycle shifts as much as two hours later at the start of puberty, making it hard for many teenagers to fall asleep early, while adolescents need about 8.5 to 9.5 hours of sleep a night. It identifies early school start times as a key modifiable cause of chronic sleep loss among teenagers and links insufficient sleep to poorer academic performance, depressed mood, obesity, and a higher risk of drowsy-driving crashes.

---

**Source B** (California law) — *adapted*

Summary of: California Senate Bill 328, signed into law in October 2019.

Beginning July 1, 2022, the regular school day at most California public high schools may begin no earlier than 8:30 a.m., and at middle schools no earlier than 8:00 a.m. Rural school districts are exempt, and optional "zero periods" offered before the regular day do not count toward the start time.

---

**Source C** (district budget director) — *practice source*

From a newspaper op-ed by the budget director of a suburban school district:

"A later bell sounds free. It is not. Our buses run three tiers every morning: high school, then middle school, then elementary. To start every high school at 8:30 without shoving our youngest children to a 7:30 start, we would need about thirty more buses and drivers, an estimated 1.4 million dollars a year. That is the salary of roughly fifteen teachers. I am not against sleep. I am against pretending that a schedule change has no price tag."

---

**Source D** (district survey data) — *practice source*

Hypothetical survey results from one 1,800-student high school, the spring before and the spring after its start time moved from 7:30 a.m. to 8:30 a.m.:

- Average weeknight sleep reported by students: **6.9 hours before → 7.4 hours after**
- Students reporting at least 8 hours of sleep on school nights: **27% before → 42% after**
- First-period tardies per week, whole school: **210 before → 120 after**
- Average first-period course grade: **81 before → 83 after**
- Time the last after-school practice ends: **5:30 p.m. before → 6:30 p.m. after**

---

**Source E** (student council president) — *practice source*

From testimony to a school board one year after the district moved its high school start to 8:45 a.m.:

"I'm not falling asleep in chemistry anymore, and my first-period grade went up. But I want the board to hear the whole picture. Practices now end after six, so athletes eat dinner at eight and start homework at nine. Two of my friends lost shifts at jobs that needed them by 3:30. The change helped most of us, but it didn't help everyone the same way."

---

**Source F** (elementary school parent) — *practice source*

From a letter to the editor:

"To free up buses for the high school's later start, our elementary school now begins at 7:40 instead of 8:50. My second grader waits at the bus stop in the dark from November to February. I want teenagers to sleep. I just don't think the solution should be to wake up seven-year-olds instead."

---

**Source G** (high school athletic director) — *practice source*

From an interview in a regional sports magazine:

"Our league includes districts that start at 7:30 and districts that start at 8:30. When we play away games, my athletes leave fifth period early to make a 4:00 bus. If every school in the league moved together, I'd have no problem. What I can't manage is a patchwork."`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: synthesisRubric({
          thesis: ['should', 'ought', 'must', 'outweigh', 'worth', 'better'],
          topic: ['start', 'bell', 'school day', '8:30', 'later'],
          specifics: ['8:30', '8.5', '9.5', 'pediatric', 'puberty', 'two hours', 'california', 'rural', '1.4 million', 'thirty', 'buses', '6.9', '7.4', '27%', '42%', 'tardies', '210', '120', 'practice', 'dinner', 'shifts', 'jobs', 'second grader', 'in the dark', '7:40', 'patchwork', 'league', 'drowsy'],
          sophistication: 'treating the question as one of HOW to schedule rather than whether sleep matters (the bus-tier problem in Sources C and F means a later high school start can simply move the burden to younger children); noticing that Source D\'s gains are real but modest; seeing that Source B and Source G together suggest coordinated, statewide change answers objections that a single district cannot.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Every school schedule is a decision about whose mornings matter. For decades, American districts have decided that bus routes matter more than adolescent sleep. **High schools should adopt later start times, but the change succeeds only when it is planned as a regional transportation reform rather than imposed as a single district's bell change, because a later bell that simply shifts the early morning onto younger children trades one harm for another.** **[Row A: a defensible position that also sets up the line of reasoning: yes, with a condition.]**

The medical case for later starts is strong because it rests on biology rather than preference. The American Academy of Pediatrics explains that the sleep cycle shifts as much as two hours later at puberty, yet teenagers still need 8.5 to 9.5 hours of sleep (Source A). An adolescent who boards a bus at 6:45 is therefore not lazy; he is being asked to run on a clock his body does not keep. This matters because the AAP connects that chronic shortfall to depressed mood and drowsy-driving crashes, harms that justify public spending in a way that mere comfort would not. **[Row B: specific evidence from Source A with commentary that explains why it supports the claim.]**

The evidence from schools that have changed confirms that the biology translates into results, though more modestly than advocates sometimes promise. In the survey in Source D, average sleep rose from 6.9 to 7.4 hours and first-period tardies fell from 210 to 120 a week after the bell moved to 8:30. Half an hour of sleep is not a miracle, and a two-point rise in first-period grades is not a revolution; however, the tardy figure suggests that a later bell changes behavior across a whole building, not only in a few motivated students. The student council president in Source E reports the same pattern from the inside: she is "not falling asleep in chemistry anymore." **[Row B: a second and third source used as specific evidence; the commentary weighs the data instead of just reporting it.]**

Yet the strongest objection to later start times is not that they fail but that someone else pays for them. The budget director in Source C notes that buses run in tiers, so starting the high school later either costs about 1.4 million dollars a year in new buses or pushes the youngest children earlier. Source F shows the second outcome: a second grader now "waits at the bus stop in the dark." This is the real trade-off, and it explains why my position is conditional. A reform that protects the sleep of sixteen-year-olds by waking seven-year-olds has not solved the sleep problem; it has moved it down the age ladder. **[Row B: the commentary consistently links each source back to the line of reasoning; Row C begins: the essay explores a tension between sources instead of dismissing the opposing side.]**

Consequently, the decision should be made at a scale larger than one district. California's law requires most high schools to start no earlier than 8:30 (Source B), which means neighboring districts move together. That answers the athletic director's complaint in Source G, who says that a "patchwork" of schedules is what he "can't manage" but that he would have "no problem" if the whole league moved together. Statewide or regional timing also lets districts redesign bus routes jointly and phase in new costs, rather than forcing a single district to choose between Source C's budget and Source F's dark bus stop. Moreover, the rural exemption in California's law shows that a well-designed mandate can bend for places where long bus routes make the math impossible. **[Row B: Sources B and G are tied to the claim, completing a line of reasoning across five sources.]**

The broader implication is that "later start times" is the wrong unit of debate. The question is not whether teenagers should sleep, which Source A settles, but whether communities will treat the morning schedule as shared public infrastructure. When they do, the benefits that Sources D and E describe become available without the hidden costs that Sources C and F expose. **[Row C: the conclusion situates the argument in a broader context (school schedules as shared infrastructure); combined with the sustained treatment of the trade-off, this earns sophistication.]**

**How this essay scores:**
- **Row A (1/1):** the thesis takes a clear, defensible position and qualifies it with a condition the essay goes on to prove.
- **Row B (4/4):** it uses specific evidence from all seven sources (at least three are required), and every body paragraph explains *how* the evidence advances the claim, not just *that* it agrees.
- **Row C (1/1):** the essay sustains a nuanced argument built on a tension across the sources (Sources C and F against A and D) and resolves it with a broader claim about regional scheduling.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~55 minutes (15-min reading period + 40 min writing)',
    calculatorAllowed: false,
  },
  {
    id: 'englang-synthesis-2',
    type: 'synthesis',
    unit: 9,
    title: 'Synthesis: Ending the Twice-a-Year Clock Change',
    prompt: `${SYNTHESIS_DIRECTIONS}

**Introduction.** Most of the United States moves its clocks forward one hour in March and back one hour in November. Polls regularly show that many Americans dislike switching, and Congress has considered making daylight saving time permanent. But Americans disagree about which time should become permanent: daylight saving time, which shifts daylight toward the evening, or standard time, which keeps more light in the morning.

**Assignment.** Carefully read the following seven sources, including the introductory information for each source. Write an essay that synthesizes material from at least three of the sources and develops your position on what the United States should do about the twice-yearly clock change: adopt permanent daylight saving time, adopt permanent standard time, or keep changing the clocks.

${SYNTHESIS_BULLETS}

---

**Source A** (Sunshine Protection Act) — *adapted*

Summary of the congressional record, 2022.

The Sunshine Protection Act would have made daylight saving time permanent across the United States, ending the November return to standard time. On March 15, 2022, the U.S. Senate passed the bill by unanimous consent. The House of Representatives did not vote on it, and the bill died when that Congress ended. Similar bills have been introduced in later sessions.

---

**Source B** (American Academy of Sleep Medicine) — *adapted*

Summary of: "Daylight Saving Time: An American Academy of Sleep Medicine Position Statement," *Journal of Clinical Sleep Medicine*, 2020.

The American Academy of Sleep Medicine argues that the United States should eliminate seasonal time changes in favor of permanent **standard** time. Standard time, it says, aligns best with human circadian biology, because morning light helps set the body's internal clock. The statement warns that the spring change to daylight saving time is associated with short-term health and safety risks and that permanent daylight saving time would leave many people waking and commuting in darkness for months.

---

**Source C** (the 1974 experiment) — *adapted*

Summary of the historical record.

During the 1973–74 energy crisis, Congress placed the country on year-round daylight saving time as a two-year experiment that began in January 1974. The dark winter mornings proved unpopular, and concern for children traveling to school before sunrise was widely reported. In October 1974, Congress amended the law to restore standard time for the winter months, ending the experiment early.

---

**Source D** (sunrise and sunset table) — *quantitative source; times calculated from standard solar equations and rounded*

Approximate sunrise and sunset times in Detroit, Michigan, under each policy:

- **December 21, permanent standard time:** sunrise about 7:58 a.m., sunset about 5:02 p.m.
- **December 21, permanent daylight saving time:** sunrise about 8:58 a.m., sunset about 6:02 p.m.
- **June 21, daylight saving time (current summer clock):** sunrise about 5:55 a.m., sunset about 9:12 p.m.
- **June 21, permanent standard time:** sunrise about 4:55 a.m., sunset about 8:12 p.m.

---

**Source E** (restaurant owners' association) — *practice source*

From an op-ed by the director of a state restaurant association:

"An extra hour of evening light is an extra hour of patio dining, youth soccer, and walks to the ice cream shop. When the clocks fall back in November, our members watch evening traffic drop the same week. Permanent daylight time would give families usable daylight after work and school all year. Who plans their life around sunrise?"

---

**Source F** (school bus driver) — *practice source*

From a letter to a newspaper editor:

"I pick up my first riders at 6:50 a.m. Under the clocks we have now, it's already dark at that hour in December. Make daylight time permanent and it stays dark until almost nine. I've driven through the 'temporary' darkness in March for years. I'd rather not do it all winter with a bus full of kids."

---

**Source G** (U.S. Department of Energy) — *adapted*

Summary of: U.S. Department of Energy, *Impact of Extended Daylight Saving Time on National Energy Consumption*, report to Congress, October 2008.

After Congress lengthened daylight saving time by about four weeks beginning in 2007, the Department of Energy estimated that the extension saved about 1.3 terawatt-hours of electricity. That equals about 0.5 percent of electricity use on each day of the extension, but only about 0.03 percent of the nation's electricity consumption for the year.`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: synthesisRubric({
          thesis: ['should', 'ought', 'must', 'better', 'outweigh'],
          topic: ['standard time', 'daylight saving', 'clock', 'permanent'],
          specifics: ['unanimous', 'senate', '2022', 'circadian', 'morning light', 'sleep medicine', '1974', 'energy crisis', 'experiment', 'detroit', '7:58', '8:58', '6:02', '5:02', '9:12', '8:12', 'patio', 'soccer', 'evening light', '6:50', 'bus', 'in the dark', '1.3', '0.5 percent', '0.03', 'energy'],
          sophistication: 'recognizing that "ending the clock change" is popular while the choice of WHICH time divides people (Source A\'s unanimous vote vs. Source C\'s 1974 reversal); weighing morning light for biology and safety against evening light for commerce and recreation; noticing that geography matters (Source D shows the western edge of a time zone); using Source G to show that the energy rationale that started DST is now marginal.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Americans agree on surprisingly little, but they come close to agreeing that changing the clocks twice a year is a nuisance. The Senate's unanimous vote in 2022 (Source A) shows how easy it is to oppose the switch; the hard part is choosing which hour to keep. **The United States should end the clock change by adopting permanent standard time, because morning light is a matter of health and safety, while evening light is a matter of convenience, and the country already learned in 1974 what happens when it chooses convenience in December.** **[Row A: a defensible position that takes a side on the real choice, with a reason that previews the line of reasoning.]**

The strongest reason to prefer standard time is biological. The American Academy of Sleep Medicine argues that standard time fits human circadian biology best, because morning light sets the body's internal clock (Source B). This matters because the clock on the wall can be moved by Congress, but the clock in the body cannot; permanent daylight time would, in effect, put the whole nation on a schedule one hour out of step with the sun every winter. The point is not that people would sleep less on one Sunday in March, but that they would wake in darkness for months. **[Row B: specific evidence from Source B with commentary that explains its significance.]**

Source D turns that abstraction into a schedule. In Detroit, on the shortest day of the year, permanent daylight time would push sunrise to about 8:58 a.m. Students who board a bus near 7:00 would travel, sit through first period, and begin second period before the sun rises. A bus driver in Source F describes exactly this fear, noting that her first pickup at 6:50 a.m. is already dark in December and would stay dark "until almost nine." Her letter is anecdotal, but the table proves that her worry is accurate arithmetic, not exaggeration. **[Row B: the quantitative source and a practice source are linked so each strengthens the other; the commentary explains how.]**

History confirms the arithmetic. In 1974, Congress adopted year-round daylight time as a two-year experiment, yet dark winter mornings and concern for schoolchildren led Congress to restore winter standard time that October (Source C). The lesson is not that Americans love changing clocks; it is that the appeal of permanent daylight time lasts only until people experience the mornings it creates. Therefore, the unanimous Senate vote in Source A tells us that the country wants to stop switching, not that it has thought through which time to keep. That is the central tension of the whole debate: a broad agreement about the problem hides a deep disagreement about the solution. **[Row B: commentary consistently explains how each source advances the line of reasoning; Row C develops: the essay distinguishes what the public wants (no switching) from what it would tolerate (dark mornings).]**

Supporters of permanent daylight time make a real case, and it deserves an answer rather than dismissal. The restaurant association in Source E is right that evening light brings "patio dining, youth soccer, and walks," and those are genuine goods. But the case for daylight time on energy grounds, the original justification for it, has largely evaporated: the Department of Energy found that adding four weeks of daylight time saved only about 0.03 percent of annual electricity use (Source G). Without an energy rationale, the argument for daylight time rests mainly on leisure, and leisure cannot outweigh the safety of children waiting for buses in the dark. Moreover, under permanent standard time Detroit would still see the sun set after 8:00 p.m. in late June (Source D), so summer evenings would remain long. **[Row B: the counterargument is answered with specific evidence from two more sources.]**

The broader lesson of this debate is that "more daylight" is an illusion; Congress cannot create sunlight, only decide who gets it. Permanent standard time gives it to the people who need it most, the children and workers who start their days early, at a modest cost to evening leisure that summer already repays. **[Row C: the essay articulates the implication of its argument in a broader frame, completing a sustained, nuanced treatment of the trade-off.]**

**How this essay scores:**
- **Row A (1/1):** the thesis chooses one of the three positions and gives a defensible reason.
- **Row B (4/4):** specific evidence from all seven sources supports each claim, and every piece of evidence is followed by commentary that explains how it supports the line of reasoning.
- **Row C (1/1):** the essay sustains a complex view (the public's agreement against switching hides a disagreement about which hour to keep), engages the opposing side fairly, and closes with a broader implication.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~55 minutes (15-min reading period + 40 min writing)',
    calculatorAllowed: false,
  },
]

// ---------------------------------------------------------------------------
// Q2 — RHETORICAL ANALYSIS
// ---------------------------------------------------------------------------

const rhetoricalFRQs: EngLangFRQ[] = [
  {
    id: 'englang-rhetorical-1',
    type: 'rhetorical-analysis',
    unit: 9,
    title: 'Rhetorical Analysis: Douglass, "What to the Slave Is the Fourth of July?"',
    prompt: `**Suggested time: 40 minutes.**

On July 5, 1852, the abolitionist Frederick Douglass, who had escaped slavery in 1838, addressed an Independence Day gathering organized by the Rochester Ladies' Anti-Slavery Society in Rochester, New York. His audience was largely made up of white Northerners who opposed slavery. The following passage is excerpted from the speech as Douglass printed it in the appendix of *My Bondage and My Freedom* (1855). Read the passage carefully. Write an essay that analyzes the rhetorical choices Douglass makes to convey his message about the meaning of the Fourth of July to his audience.

${RA_BULLETS}

---

> Fellow-Citizens—Pardon me, and allow me to ask, why am I called upon to speak here to-day? What have I, or those I represent, to do with your national independence? Are the great principles of political freedom and of natural justice, embodied in that Declaration of Independence, extended to us? and am I, therefore, called upon to bring our humble offering to the national altar, and to confess the benefits, and express devout gratitude for the blessings, resulting from your independence to us?
>
> …
>
> But, such is not the state of the case. I say it with a sad sense of the disparity between us. I am not included within the pale of this glorious anniversary! Your high independence only reveals the immeasurable distance between us. The blessings in which you this day rejoice, are not enjoyed in common. The rich inheritance of justice, liberty, prosperity, and independence, bequeathed by your fathers, is shared by you, not by me. The sunlight that brought life and healing to you, has brought stripes and death to me. This Fourth of July is *yours*, not mine. You may rejoice, I must mourn. To drag a man in fetters into the grand illuminated temple of liberty, and call upon him to join you in joyous anthems, were inhuman mockery and sacrilegious irony. Do you mean, citizens, to mock me, by asking me to speak to-day?
>
> …
>
> At a time like this, scorching irony, not convincing argument, is needed. Oh! had I the ability, and could I reach the nation's ear, I would to-day pour out a fiery stream of biting ridicule, blasting reproach, withering sarcasm, and stern rebuke. For it is not light that is needed, but fire; it is not the gentle shower, but thunder. We need the storm, the whirlwind, and the earthquake. The feeling of the nation must be quickened; the conscience of the nation must be roused; the propriety of the nation must be startled; the hypocrisy of the nation must be exposed; and its crimes against God and man must be proclaimed and denounced.
>
> What to the American slave is your Fourth of July? I answer, a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity; your sounds of rejoicing are empty and heartless; your denunciations of tyrants, brass-fronted impudence; your shouts of liberty and equality, hollow mockery; your prayers and hymns, your sermons and thanksgivings, with all your religious parade and solemnity, are to him mere bombast, fraud, deception, impiety, and hypocrisy—a thin veil to cover up crimes which would disgrace a nation of savages. There is not a nation on the earth guilty of practices more shocking and bloody, than are the people of these United States, at this very hour.`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: rhetoricalRubric({
          thesis: ['to expose', 'to force', 'to convince', 'to persuade', 'to confront', 'to shame', 'to awaken', 'to rouse', 'to convey', 'to make his audience', 'to challenge'],
          specifics: ['fellow-citizens', 'why am i called', 'national altar', 'not included', 'immeasurable distance', 'yours, not mine', 'stripes and death', 'sunlight', 'fetters', 'temple of liberty', 'sacrilegious irony', 'scorching irony', 'not light that is needed, but fire', 'thunder', 'earthquake', 'must be roused', 'sham', 'hollow mockery', 'brass-fronted', 'swelling vanity', 'thin veil', 'at this very hour', 'your celebration'],
          sophistication: 'explaining why Douglass attacks a SYMPATHETIC audience (he must shake abolitionists out of a comfortable, self-congratulatory holiday); exploring the tension between "Fellow-Citizens" and "your" independence, through which Douglass claims a citizen\'s standing to indict the nation while dramatizing his exclusion; noting that the speech openly announces its own method ("scorching irony, not convincing argument, is needed") and then performs it.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

An audience of white abolitionists in Rochester in 1852 already believed slavery was wrong. Frederick Douglass's problem was not to convince them of that belief but to make them feel its full weight on the one day when the nation most enjoyed praising itself. **Through probing rhetorical questions, a relentless contrast between "your" holiday and his own exclusion, and a deliberate shift from argument to "scorching irony," Douglass forces his sympathetic listeners to see the Fourth of July as an indictment of the nation rather than a celebration of it.** **[Row A: the thesis names specific rhetorical choices and links them to Douglass's purpose and audience.]**

Douglass opens not with gratitude, the expected note for an Independence Day speaker, but with a string of rhetorical questions: "why am I called upon to speak here to-day? What have I, or those I represent, to do with your national independence?" The questions turn the occasion itself into the problem. Because his hosts invited a formerly enslaved man to celebrate independence, his question about why he was "called upon" exposes the awkward assumption behind the invitation: that the Declaration's "great principles of political freedom" already reach him. By asking whether he must "bring our humble offering to the national altar," he casts the holiday as a religious rite and himself as a worshipper compelled to thank a god that has not blessed him. The questions thus let the audience reach the uncomfortable answer themselves, which is more unsettling than if he had simply stated it. **[Row B: specific evidence with commentary explaining how the rhetorical choice serves the purpose.]**

Douglass then answers his own questions through a pattern of pronouns and antitheses that divides the room. "This Fourth of July is *yours*, not mine. You may rejoice, I must mourn." The short, balanced clauses separate speaker from audience as sharply as the grammar allows. Moreover, the image of "the sunlight that brought life and healing to you" bringing "stripes and death to me" shows that the same national history produced opposite results depending on which side of the color line one stood. This antithesis matters because his listeners, as abolitionists, may have imagined themselves on his side of that line; the pronouns politely but firmly place them on the side of those who benefit. **[Row B: a second rhetorical choice (pronouns and antithesis), with commentary on its effect on this particular audience.]**

At the center of the passage, Douglass announces a change in method: "At a time like this, scorching irony, not convincing argument, is needed." The metaphors that follow, "not light that is needed, but fire; it is not the gentle shower, but thunder," escalate from the mild to the violent, which suggests that reasoned persuasion has already failed. The anaphoric series that follows ("the feeling of the nation must be quickened; the conscience of the nation must be roused") assigns the audience a task as well as a feeling. In this way Douglass justifies, in advance, the harshness of what comes next, so that his listeners hear his anger as necessary rather than intemperate. **[Row B: a third choice explained; the essay consistently explains how each piece of evidence advances the line of reasoning.]**

The final paragraph delivers that fire. Douglass returns to his opening question, "What to the American slave is your Fourth of July?", and answers it with a catalog in which each patriotic ideal is named and then renamed: "your celebration is a sham; your boasted liberty, an unholy license." The repeated "your" turns the audience's own vocabulary of patriotism into a list of charges, and the series grows longer and more severe until even "your prayers and hymns" become "hypocrisy." Therefore, by the passage's end, the holiday that began as an occasion for gratitude has become evidence against the nation "at this very hour." **[Row B: multiple rhetorical choices (catalog, repetition, the return to the opening question) explained in relation to the message.]**

What makes this strategy so effective is its tension with Douglass's opening words. He begins by calling his listeners "Fellow-Citizens," claiming a citizen's standing, and then insists that their independence is not his. That paradox is his argument in miniature: a man with the full moral authority of a citizen is denied the rights of one. Ironically, his exclusion gives him the standing to indict the nation from within, and his sympathetic audience cannot dismiss him as an outsider when he has just addressed them as equals. **[Row C: the essay explains a central tension in the passage and its function given the rhetorical situation, sustained across the essay's argument.]**

**How this essay scores:**
- **Row A (1/1):** a thesis that analyzes specific rhetorical choices and connects them to purpose and audience.
- **Row B (4/4):** every claim is supported with specific quotation, and the commentary consistently explains how multiple choices (questions, antithesis, metaphor, anaphora, catalog) contribute to the message.
- **Row C (1/1):** the essay reads the passage through its rhetorical situation (a sympathetic audience that must still be confronted) and explains the purpose of its central tension.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englang-rhetorical-2',
    type: 'rhetorical-analysis',
    unit: 9,
    title: 'Rhetorical Analysis: Roosevelt, "Citizenship in a Republic"',
    prompt: `**Suggested time: 40 minutes.**

On April 23, 1910, about a year after leaving the presidency, Theodore Roosevelt delivered an address titled "Citizenship in a Republic" at the Sorbonne in Paris. His audience included scholars, students, and French officials. The following passage is excerpted from the speech as printed in Roosevelt's *African and European Addresses* (1910). Read the passage carefully. Write an essay that analyzes the rhetorical choices Roosevelt makes to convince his educated audience to value action over criticism.

${RA_BULLETS}

---

> You and those like you have received special advantages; you have all of you had the opportunity for mental training; many of you have had leisure; most of you have had a chance for the enjoyment of life far greater than comes to the majority of your fellows. To you and your kind much has been given, and from you much should be expected.
>
> …
>
> Let the man of learning, the man of lettered leisure, beware of that queer and cheap temptation to pose to himself and to others as the cynic, as the man who has outgrown emotions and beliefs, the man to whom good and evil are as one. The poorest way to face life is to face it with a sneer. There are many men who feel a kind of twisted pride in cynicism; there are many who confine themselves to criticism of the way others do what they themselves dare not even attempt.
>
> …
>
> It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, and comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows the great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who know neither victory nor defeat. Shame on the man of cultivated taste who permits refinement to develop into a fastidiousness that unfits him for doing the rough work of a workaday world.`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: rhetoricalRubric({
          thesis: ['to convince', 'to persuade', 'to urge', 'to challenge', 'to inspire', 'to shame', 'to warn', 'to move', 'to convey', 'to make his audience'],
          specifics: ['special advantages', 'much has been given', 'much should be expected', 'man of learning', 'lettered leisure', 'cynic', 'with a sneer', 'twisted pride', 'dare not even attempt', 'not the critic who counts', 'in the arena', 'dust and sweat and blood', 'strives valiantly', 'errs', 'daring greatly', 'cold and timid souls', 'know neither victory nor defeat', 'cultivated taste', 'fastidiousness', 'workaday'],
          sophistication: 'explaining the risk and the strategy of telling scholars that "it is not the critic who counts" while standing in one of the world\'s great universities (Roosevelt first flatters, then warns, then inspires); noticing that the speech itself is an act of criticism, which Roosevelt manages by praising failure honestly suffered; situating the passage in Roosevelt\'s position as a recently retired president defending a life of action.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Telling a hall of professors that "it is not the critic who counts" is a dangerous move. Theodore Roosevelt, a former president speaking at the Sorbonne, one of Europe's oldest universities, was addressing exactly the people whose work is to analyze, judge, and criticize. **Roosevelt moves his audience from flattery to warning to inspiration, using the language of obligation, a portrait of the cynic, and the extended metaphor of the arena to convince the educated elite that their learning creates a duty to act rather than a license to judge.** **[Row A: the thesis identifies specific rhetorical choices and the purpose they serve for this audience.]**

Roosevelt begins by honoring his listeners rather than attacking them. The parallel clauses, "you have all of you had the opportunity for mental training; many of you have had leisure," list their privileges in a tone of respect. But the paragraph ends with a near-biblical maxim: "To you and your kind much has been given, and from you much should be expected." This sentence turns the compliment into a debt. Because the audience has just agreed that it is privileged, it can hardly reject the conclusion that privilege brings duty; the flattery thus prepares listeners to accept the criticism that follows. **[Row B: specific evidence with commentary explaining how the choice works on the audience.]**

Next, Roosevelt sketches a figure his audience would recognize and not want to become: "the man of learning, the man of lettered leisure" who is tempted "to pose ... as the cynic." His diction is pointed: the temptation is "queer and cheap," and the cynic's pride is "twisted." The aphorism "The poorest way to face life is to face it with a sneer" compresses the warning into a memorable line. By describing cynicism as a "pose" rather than a conviction, Roosevelt suggests that detached criticism is a kind of vanity, which matters because it lets him criticize the habit without insulting any particular listener. **[Row B: a second choice (diction and aphorism) with commentary connecting it to the line of reasoning.]**

The passage then reaches its famous metaphor. The doer is "the man who is actually in the arena, whose face is marred by dust and sweat and blood." The physical, almost violent imagery makes action concrete and costly, in contrast to the clean hands of the critic who merely "points out how the strong man stumbles." Moreover, the long chain of "who" clauses ("who strives valiantly; who errs, and comes short again and again") builds momentum, so the sentence itself seems to struggle forward like the man it describes. Strikingly, Roosevelt praises error: there is "no effort without error and shortcoming." This choice is essential for a scholarly audience trained to detect mistakes, because it redefines mistakes as evidence of effort rather than failure. **[Row B: multiple rhetorical choices (metaphor, imagery, anaphora of "who," syntax) explained in relation to the purpose.]**

The sentence ends with an antithesis that leaves no comfortable middle ground. The doer who fails at least "fails while daring greatly," while the "cold and timid souls who know neither victory nor defeat." The temperature words matter: the doer is covered in sweat and blood, the critic is "cold." Therefore, the final rebuke, "Shame on the man of cultivated taste," lands with full force; Roosevelt has redefined "cultivated taste," the very quality his audience values, as a possible weakness. **[Row B: commentary consistently ties each piece of evidence back to the thesis.]**

What gives the passage its power is the tension in Roosevelt's own position. He is a critic of critics, delivering a lecture in praise of action to people who spend their lives lecturing. He resolves the paradox by speaking as a man who has been "in the arena" himself, a recent president whose policies drew constant criticism. His audience would have known this, so his praise of the bloodied doer also works as a quiet defense of his own career. **[Row C: the essay explains the complexity of the rhetorical situation (a famous man of action addressing scholars) and the function of the passage's central tension.]**

**How this essay scores:**
- **Row A (1/1):** a thesis that analyzes Roosevelt's choices and links them to his purpose with a specific audience.
- **Row B (4/4):** specific quotations support every claim, and the commentary consistently explains how multiple choices (maxim, diction, metaphor, anaphora, antithesis) persuade this audience.
- **Row C (1/1):** a sustained reading of the rhetorical situation, including the irony of a critique of critics, that explains why the choices fit the occasion.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
]

// ---------------------------------------------------------------------------
// Q3 — ARGUMENT
// ---------------------------------------------------------------------------

const argumentFRQs: EngLangFRQ[] = [
  {
    id: 'englang-argument-1',
    type: 'argument',
    unit: 9,
    title: 'Argument: Mill on Knowing Only Your Own Side',
    prompt: `**Suggested time: 40 minutes.**

In *On Liberty* (1859), the philosopher John Stuart Mill writes:

> He who knows only his own side of the case, knows little of that. His reasons may be good, and no one may have been able to refute them. But if he is equally unable to refute the reasons on the opposite side; if he does not so much as know what they are, he has no ground for preferring either opinion.

Write an essay that argues your position on the extent to which Mill's claim is valid: that a person who does not understand the opposing side of a question does not truly understand his or her own.

${ARG_BULLETS}`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: argumentRubric({
          thesis: ['mill is right', 'mill is wrong', 'mill is largely', 'mill is mostly', 'valid', 'agree', 'disagree', 'to the extent', 'largely', 'only when', 'mostly', 'although', 'while'],
          topic: ['mill', 'opposing', 'other side', 'own side', 'understand', 'opponent', 'argument', 'refute'],
          sophistication: 'qualifying Mill\'s claim (it applies to genuine disagreements argued in good faith, not to settled facts) while showing that even the qualification depends on someone having done the engagement Mill demands; exploring why understanding an opponent is different from conceding to one; situating the claim in present-day contexts such as debate training, courts, or online echo chambers.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Most people defend their opinions the way they defend their hometown sports team: with loyalty, not knowledge. John Stuart Mill argues that a belief held this way is barely a belief at all, since "he who knows only his own side of the case, knows little of that." **Mill is largely right: a position that has never faced its strongest opposition is held as a habit rather than understood as a conclusion. His claim needs one qualification, however, because the duty to master the other side applies to genuine disagreements argued in good faith, not to every denial of established fact.** **[Row A: a defensible position that qualifies the claim and sets up the line of reasoning.]**

The clearest evidence for Mill comes from institutions built on his principle. For centuries, when the Catholic Church considered declaring someone a saint, it appointed an official popularly called the "devil's advocate," whose job was to argue against the candidate. The office was weakened in 1983, and critics noted that canonizations then became far more frequent. The example suggests that an institution that stops hearing the other side does not become more certain of its judgments; it simply stops testing them. Mill's claim, in other words, is not only about individual minds but about any system that needs to reach reliable conclusions. **[Row B: specific evidence with commentary that explains how it supports the claim.]**

The same principle operates in individual reasoning, as my own experience shows. When my debate coach assigned me to argue for a school cell-phone ban, a policy I opposed, I had to read the research on classroom distraction that I had been ignoring. I discovered that my original position rested on convenience, not evidence. My final view, which supported limits rather than a total ban, was stronger because it had absorbed the other side's best data. This demonstrates exactly what Mill means by knowing "little" of one's own side: until I could state the case for the ban, I could not explain why I opposed it; I merely felt that I did. **[Row B: a second piece of specific evidence; the commentary connects it to Mill's words and to the line of reasoning.]**

History offers a third case in which understanding the opposition proved decisive. Before the Lincoln–Douglas debates of 1858, Abraham Lincoln studied Stephen Douglas's doctrine of popular sovereignty so closely that he could restate it fairly and then expose its weakness: if each territory could vote for slavery, then the nation had no principle against it. Lincoln did not adopt Douglas's view; he understood it well enough to defeat it. As a result, his own position against the expansion of slavery became sharper. Therefore, the three examples together show a single pattern: engaging the strongest version of the other side turns an opinion into an argument. **[Row B: commentary consistently explains how each example advances the line of reasoning and ties the examples together.]**

The strongest objection is that some questions do not have two legitimate sides. No one should have to master the arguments of people who deny that the earth is round before rejecting them. I accept this, which is why my thesis limits Mill's claim to genuine disagreements. Yet the objection is less damaging than it seems. We can safely dismiss a flat-earth argument only because geographers, sailors, and astronomers already did the work of testing and refuting such claims. The confidence we inherit was earned through exactly the engagement Mill demands; we simply did not have to do it ourselves. **[Row C: the essay explores a complexity in the claim rather than tacking on a concession.]**

Mill's claim matters more now than in 1859. Social media lets people choose news feeds that never show them a serious opposing argument, which makes it easy to feel informed while knowing only one side. The implication of Mill's principle is uncomfortable but useful: the measure of how well we understand our own beliefs is how fairly we can state the beliefs we reject. **[Row C: the conclusion situates the argument in a broader present-day context, completing a sustained, nuanced argument.]**

**How this essay scores:**
- **Row A (1/1):** a defensible, qualified position.
- **Row B (4/4):** three specific, well-developed examples (an institution, personal experience, history), each followed by commentary that explains how it supports the line of reasoning.
- **Row C (1/1):** the essay sustains a nuanced argument, turns the strongest objection into support for a refined thesis, and articulates a broader implication.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'englang-argument-2',
    type: 'argument',
    unit: 9,
    title: 'Argument: Emerson on "A Foolish Consistency"',
    prompt: `**Suggested time: 40 minutes.**

In his essay "Self-Reliance" (1841), Ralph Waldo Emerson writes:

> A foolish consistency is the hobgoblin of little minds, adored by little statesmen and philosophers and divines. With consistency a great soul has simply nothing to do. … Speak what you think now in hard words and to-morrow speak what to-morrow thinks in hard words again, though it contradict every thing you said to-day.

Emerson suggests that holding to one's earlier views for the sake of consistency is a weakness rather than a virtue. Write an essay that argues your position on the value of consistency in a person's beliefs or actions.

${ARG_BULLETS}`,
    parts: [
      {
        label: 'Essay',
        prompt: ESSAY_PART_PROMPT,
        maxPoints: 6,
        rubric: argumentRubric({
          thesis: ['emerson is right', 'emerson is wrong', 'valid', 'agree', 'disagree', 'to the extent', 'only when', 'although', 'while', 'virtue', 'weakness', 'value'],
          topic: ['consisten', 'change', 'changing', 'mind', 'emerson', 'contradict', 'promise', 'belief'],
          sophistication: 'distinguishing consistency of BELIEF (which should yield to evidence) from consistency of CHARACTER or commitment (keeping promises, applying principles evenly), and noticing that Emerson\'s own word "foolish" already limits his claim; weighing the costs of inconsistency in leaders and institutions (trust, law) against the costs of stubbornness; situating the question in present-day politics, where changing one\'s mind is often attacked as weakness.',
        }),
        sampleAnswer: `*Annotated sample (scores 6/6). Rubric rows are marked in brackets.*

Politicians fear few insults more than "flip-flopper." The charge assumes that a person who changes position must have been either wrong before or dishonest now. Ralph Waldo Emerson rejected that assumption in 1841 when he called "a foolish consistency" the "hobgoblin of little minds." **Emerson is right that consistency of belief is no virtue, because beliefs should answer to evidence rather than to one's earlier statements; but consistency of character, keeping promises and applying principles evenly, remains essential, and the word "foolish" shows that Emerson himself attacked only the first kind.** **[Row A: a defensible, qualified position that sets up the line of reasoning.]**

Science shows why consistency of belief can be a vice. In 1912 the German scientist Alfred Wegener proposed that the continents had once been joined and had drifted apart. Many geologists rejected the idea for decades, partly because Wegener could not explain what force moved the continents. When evidence from the ocean floor in the 1950s and 1960s revealed seafloor spreading, the profession changed its mind and adopted plate tectonics. This demonstrates that the geologists who held out longest were not admirably consistent; they were loyal to a theory instead of to the evidence. Consequently, science advances precisely because it rewards the willingness Emerson describes: to "speak what to-morrow thinks" even when it contradicts yesterday. **[Row B: specific evidence with commentary explaining how it supports the claim.]**

Political history makes the same point with higher stakes. In August 1862, Abraham Lincoln wrote to the editor Horace Greeley that if he "could save the Union without freeing any slave" he would do it. Within months, he issued the Emancipation Proclamation, which took effect on January 1, 1863. A strictly consistent Lincoln would have kept emancipation off the table. Instead, the war's demands and his own moral development changed his policy, and the change is now regarded as one of his greatest acts. The example suggests that leaders who refuse to revise their positions in a crisis confuse stubbornness with principle. **[Row B: a second specific example; the commentary consistently connects it to the thesis.]**

However, Lincoln's example also shows what kind of consistency does matter. His policy changed, but his commitment to preserving the Union and his oath to the Constitution did not. People trust a leader, a friend, or a business because they can predict how that person will act when it is inconvenient. A friend who keeps a promise after his feelings change, or a court that applies the same rule to rich and poor defendants, shows consistency of character, and that kind of consistency is the foundation of trust. If we treated promises the way Emerson treats opinions, contracts and friendships would collapse. Therefore, the line of reasoning in this essay depends on a distinction: beliefs should be revised as evidence changes, while commitments should be kept even as feelings change. **[Row B: commentary develops the line of reasoning; Row C: the essay explores a tension within the evidence instead of ignoring it.]**

Read carefully, Emerson's sentence already contains this distinction. He condemns a *foolish* consistency, not consistency as such, and he directs his scorn at "little statesmen and philosophers and divines" who treat their past statements as more important than the truth. The implication for our own politics is clear: the "flip-flopper" charge should be reserved for people who change their commitments, not their conclusions. A society that punishes leaders for learning will get leaders who stop learning. **[Row C: a nuanced close reading of the prompt itself and a broader implication, sustained across the essay.]**

**How this essay scores:**
- **Row A (1/1):** a clear, qualified position that establishes the distinction the essay develops.
- **Row B (4/4):** specific, accurate evidence (Wegener and plate tectonics; Lincoln's 1862 letter and the Emancipation Proclamation; promises and courts), with commentary that consistently explains how each example advances the argument.
- **Row C (1/1):** the essay builds a complex argument on a distinction between two kinds of consistency, finds that distinction in Emerson's own wording, and draws a broader implication.`,
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~40 minutes',
    calculatorAllowed: false,
  },
]

export const apEngLangFRQs: EngLangFRQ[] = [...synthesisFRQs, ...rhetoricalFRQs, ...argumentFRQs]

export function getApEngLangFRQs(): EngLangFRQ[] {
  return apEngLangFRQs
}

export function getEngLangFRQsByType(type: EngLangFRQType, pool: EngLangFRQ[] = apEngLangFRQs): EngLangFRQ[] {
  return pool.filter((f) => f.type === type)
}

/**
 * Timed simulation: one essay of each type in exam order (Synthesis, Rhetorical
 * Analysis, Argument), 18 points, 135 minutes including the 15-minute reading period.
 */
export function generateFullExamFRQs(pool: EngLangFRQ[] = apEngLangFRQs): {
  questions: EngLangFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const pick = <T>(arr: T[]): T | undefined => arr[Math.floor(Math.random() * arr.length)]
  const questions = ENG_LANG_FRQ_TYPES.map(({ type }) => pick(getEngLangFRQsByType(type, pool)) ?? pick(getEngLangFRQsByType(type))).filter(
    (q): q is EngLangFRQ => Boolean(q),
  )
  return {
    questions,
    totalPoints: questions.reduce((sum, q) => sum + q.totalPoints, 0),
    totalMinutes: ENG_LANG_SECTION_MINUTES,
  }
}
