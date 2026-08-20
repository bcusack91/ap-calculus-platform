/**
 * Per-course unique narrative paragraphs surfaced on each course landing page
 * via <CourseUniqueIntro />.
 *
 * Why this exists: every AP / test-prep landing page on the site previously
 * shared the same "Features" + "What's Covered" + "About the Exam" template,
 * with only the course name and unit titles differing. Google's quality
 * classifier (and AdSense reviewers) read these pages side-by-side and can
 * read the templated body text as duplicate / low value. Each entry below is
 * a course-specific 2-3 sentence narrative that addresses what makes the
 * exam hard, who tends to take it, and how the platform's coverage is
 * tailored — written in distinct prose so no two pages share opening
 * sentences or sentence structures.
 */

export interface CourseLandingIntro {
  /** Bold one-line takeaway shown above the body paragraphs. */
  headline: string
  /** Two short paragraphs of unique, course-specific copy. */
  paragraphs: [string, string]
}

export const courseLandingIntros: Record<string, CourseLandingIntro> = {
  'ap-calculus-ab': {
    headline: 'Built around the eight units that actually move your AP Calculus AB score.',
    paragraphs: [
      "AP Calculus AB hinges on three big ideas — limits, derivatives, and integrals — but the score breakdown is dominated by Units 4 and 5 (analytical applications of derivatives and contextual rates of change). Our coverage front-loads those units with worked examples drawn directly from released CB free-response prompts, so the first time you see 'a particle moves along the x-axis…' you've already done it twice.",
      "Most students lose points on AP Calc AB not because they can't compute a derivative, but because they can't translate an English-language scenario into the right setup. Every interactive lesson here ends with a translation drill: a short word problem, the model setup, and a step-by-step rubric so you can self-grade against the AP scoring guide.",
    ],
  },
  'ap-calculus-bc': {
    headline: 'Everything in AB plus the BC-only topics that students consistently underprepare for.',
    paragraphs: [
      "AP Calculus BC reuses the entire AB curriculum and then adds parametric/polar calculus, sequences and series, and Taylor polynomials — and historically the BC-only units account for roughly 40% of the FRQ section. Our BC track marks every BC-only topic clearly so you can skip review of material you already know and focus on series convergence tests, Lagrange error bounds, and polar area integrals.",
      "We pay particular attention to the alternating series remainder and Lagrange error bound questions, which appear almost every year and are where strong AB students lose points moving up to BC. Each interactive lesson includes a 'common pitfall' callout drawn from real AP examiner feedback.",
    ],
  },
  'ap-physics-1': {
    headline: 'Algebra-based, conceptually heavy, and notorious for the lowest AP pass rate.',
    paragraphs: [
      "AP Physics 1 has historically had one of the toughest curves of any AP exam — fewer than 10% of students score a 5 — largely because the FRQs reward verbal reasoning and free-body diagrams over plug-and-chug calculation. Our lessons treat every problem as a reasoning exercise first: identify the system, draw the FBD, write the conservation statement, and only then reach for an equation.",
      "The 2024 redesign re-emphasised fluid mechanics and rotational motion. We've updated Units 5 and 7 to match the current course framework and added FRQ practice for the new experimental design and qualitative-quantitative translation question types.",
    ],
  },
  'ap-physics-2': {
    headline: 'Where Physics 1 reasoning meets fluids, thermodynamics, E&M, and modern physics.',
    paragraphs: [
      "AP Physics 2 is conceptually broader than AP Physics 1 — the same algebra-based math, but applied across seven topic areas including thermal physics, fluid statics and dynamics, geometric and physical optics, and a brief introduction to quantum and nuclear phenomena. Many students walk in expecting Physics 1 with circuits and find a dramatically wider conceptual surface.",
      "Our coverage emphasises the experimental-design FRQ that appears every year and the 'paragraph-length response' that asks students to argue from microscopic mechanisms to macroscopic outcomes — both areas where exam scores cluster well below 50% credit.",
    ],
  },
  'ap-physics-c-mechanics': {
    headline: 'Calculus-based mechanics for students aiming at engineering and physics majors.',
    paragraphs: [
      "AP Physics C: Mechanics is the calculus-based analogue of Physics 1's mechanics half — same conceptual vocabulary, but with derivatives and integrals replacing kinematic equations. The exam is short (35 MCQs and 3 FRQs in 90 minutes) but dense, and FRQs frequently chain together kinematics, energy, momentum, and rotation in a single multi-part scenario.",
      "We treat the rotational mechanics and angular momentum unit as the make-or-break section: it accounts for ~25% of points and trips up students who never built strong intuition for moment of inertia integrals. Every rotation lesson includes a parallel translational analogue so you can see the symmetry directly.",
    ],
  },
  'ap-physics-c-em': {
    headline: 'Calculus-based electromagnetism — small audience, narrow margin between scores.',
    paragraphs: [
      "AP Physics C: E&M is one of the smallest AP exam populations and one of the most demanding. The course assumes confident multivariable-adjacent calculus (line integrals, surface integrals, gradient/divergence/curl in plain language) and applies it across electrostatics, conductors and dielectrics, circuits, magnetism, and electromagnetic induction.",
      "We lean heavily into Gauss's Law and Ampère's Law symmetry choices — picking the right Gaussian surface or Amperian loop is the difference between a 1-line solution and an unsolvable integral. Each lesson walks through the symmetry decision explicitly before any math.",
    ],
  },
  'ap-chemistry': {
    headline: 'Reaction-mechanism reasoning, equilibrium, and acid-base — the three FRQ pillars.',
    paragraphs: [
      "AP Chemistry FRQs reward students who can write a coherent mechanistic explanation, not just balance equations. Roughly half of the 7 FRQs every year touch equilibrium (Units 7-8) or acid-base (Unit 8), and we've structured our coverage so that buffer chemistry and Le Chatelier's principle get more practice problems than any other topic.",
      "We also include a dedicated module on the 'particulate-level diagram' question type, which appears on nearly every recent FRQ section and asks students to redraw a molecular-level picture after a stated change. This is one of the highest-leverage skills for moving from a 3 to a 4.",
    ],
  },
  'ap-biology': {
    headline: 'Eight units, four big ideas, and a heavy emphasis on data analysis.',
    paragraphs: [
      "Modern AP Biology has shifted away from memorisation toward experimental design, data interpretation, and quantitative reasoning. Roughly 40% of MCQs are now data-grounded and ask students to draw conclusions from a chart or experiment they've never seen, which is why our lessons pair every concept with a small data set and a guided 'claim-evidence-reasoning' walkthrough.",
      "We prioritise Units 3 (Cellular Energetics) and 6 (Gene Expression) because together they account for ~40% of the exam and are where students with weaker biochemistry backgrounds tend to lose the most ground. Every lesson in those units links back to the four AP Big Ideas explicitly.",
    ],
  },
  'ap-statistics': {
    headline: 'A reasoning exam with formulas — the FRQs are graded almost entirely on writing.',
    paragraphs: [
      "AP Statistics is graded less on whether you reach the correct numerical answer and more on whether you state assumptions, name the procedure, communicate the conclusion in context, and link the conclusion back to the original question. Many students with strong math instincts under-score because they never wrote a complete inferential conclusion.",
      "Our practice FRQs are scored against the official AP rubric line-by-line, with every 'state, plan, do, conclude' step called out separately so you can see exactly which sub-step would be marked partial credit by a real reader.",
    ],
  },
  'ap-psychology': {
    headline: 'Vocabulary-dense, but the FRQs reward applied reasoning across units.',
    paragraphs: [
      "AP Psychology covers nine units of dense vocabulary, but the FRQ section consistently asks students to apply terms across units — pairing a developmental concept with a learning concept and a social concept in a single applied scenario. We've built our flashcard decks around this cross-unit application pattern rather than within-unit definition drills.",
      "The 2024 redesign tightened the experimental design and statistics expectations. Our Unit 0 ('Scientific Foundations of Psychology') matches the new framework and includes the operational-definition and confounding-variable practice that increasingly appears in MCQs.",
    ],
  },
  'ap-human-geography': {
    headline: "Often a 9th- or 10th-grader's first AP — taught here without assuming prior AP experience.",
    paragraphs: [
      "AP Human Geography is one of the most commonly chosen first AP exams, and the curriculum assumes essentially no prior geography or social-science background. Our lessons take that seriously: every model (von Thünen, Christaller, Rostow, demographic transition) is introduced with a real-world example before any abstract diagram.",
      "Roughly 30% of FRQ points come from spatial-thinking questions that ask students to compare two regions, and another ~20% from the demographic transition / population pyramid family. We weight practice toward those two FRQ archetypes accordingly.",
    ],
  },
  'ap-us-government': {
    headline: 'Foundational documents and required Supreme Court cases — the spine of the exam.',
    paragraphs: [
      "AP U.S. Government and Politics is built around 9 required Supreme Court cases and 9 foundational documents that students are expected to apply to novel scenarios on the FRQ. Our coverage devotes a full lesson to each required case with the holding, reasoning, and a comparable 'apply-it' scenario — because the SCOTUS Comparison FRQ explicitly asks for that comparison.",
      "We also build out the Argumentative Essay FRQ separately. This is the highest-point-value question on the exam and the one where students most often write strong content but lose points for not naming a specific document or providing a clear thesis statement.",
    ],
  },
  'ap-us-history': {
    headline: 'Nine periods, three FRQ types, and a DBQ that rewards specific evidence over breadth.',
    paragraphs: [
      "APUSH covers nearly 500 years of history across 9 periods, but the AP exam concentrates on Periods 3-8 (1754-1980) — over 80% of FRQ stimulus material comes from that range. Our period-by-period lessons reflect this weighting rather than giving equal time to every era.",
      "The DBQ is the largest single point-source on the exam. Our DBQ practice library includes scoring against the official 7-point rubric, with separate drills for each rubric row (thesis, contextualization, evidence beyond the documents, sourcing, and complexity).",
    ],
  },
  'ap-world-history': {
    headline: 'Starting at 1200 CE — broader chronology, tighter time limits than APUSH.',
    paragraphs: [
      "AP World History: Modern starts in 1200 CE and asks students to compare societies across continents using AP-specific reasoning processes (causation, comparison, continuity-and-change-over-time). Most students underestimate how much of the FRQ section depends on naming the correct reasoning process and applying it explicitly.",
      "Our lessons highlight 'connection points' across regions — for example, the Columbian Exchange links Units 4 and 5, and the Industrial Revolution links Units 5 and 6 — because the LEQ and DBQ both reward cross-regional comparison over single-region depth.",
    ],
  },
  'ap-macroeconomics': {
    headline: 'Graphs first, definitions second — every FRQ is a graph manipulation in disguise.',
    paragraphs: [
      "Roughly 90% of AP Macroeconomics FRQ points are awarded for correctly drawing and shifting graphs (AD-AS, money market, loanable funds, foreign exchange) in response to a stated shock. Students who can verbally describe the policy mechanism but can't draw the graph correctly consistently score 1-2 points below their conceptual understanding.",
      "We treat each graph as a procedural skill: every lesson includes a blank-graph drill where the only task is to reproduce the diagram from scratch under a 60-second timer, which is roughly the pace of the actual FRQ.",
    ],
  },
  'ap-microeconomics': {
    headline: 'Perfect competition vs. monopoly — the comparative analysis at the heart of every FRQ.',
    paragraphs: [
      "AP Microeconomics rewards students who can draw and label the four firm-level graphs (perfect competition long-run, perfect competition short-run, monopoly, monopolistic competition) with the correct shaded regions for profit, deadweight loss, and consumer/producer surplus. Almost every long FRQ is a variation on these four diagrams.",
      "Our practice library focuses on the elasticity / tax-incidence family of questions, which has appeared on every recent exam and asks students to predict who bears more of a tax based on relative elasticities — a topic many students learn definitionally but never see modeled to scoring rubric standards.",
    ],
  },
  'ap-english-language': {
    headline: 'Three essays, one MCQ section, all built on the same rhetorical analysis vocabulary.',
    paragraphs: [
      "AP English Language and Composition is one of the most consistently graded AP exams: every essay is scored on a 6-point analytic rubric that breaks cleanly into thesis (1 pt), evidence and commentary (4 pts), and sophistication (1 pt). Students who learn the rubric explicitly tend to gain a full point on each essay within a few weeks.",
      "We focus practice on the synthesis essay (where students integrate 6+ source documents into a single argument) because it has the largest gap between average student performance and a 5-level response, and because the synthesis structure transfers directly to college first-year writing.",
    ],
  },
  'ap-english-literature': {
    headline: 'Close reading of poetry, prose, and a third literary work of your own choosing.',
    paragraphs: [
      "AP English Literature and Composition asks students to write three essays in two hours: a poetry analysis, a prose fiction analysis, and a 'literary argument' on a free-choice work. The third essay is where many students underperform because they default to plot summary instead of an argument supported by specific textual evidence.",
      "Our literary-analysis lessons build a working vocabulary of techniques (diction, syntax, imagery, point of view, structure, figurative language) and then drill the move from 'I noticed X' to 'X creates Y effect, which advances theme Z' — the rhetorical move the AP rubric most consistently rewards.",
    ],
  },
  'ap-environmental-science': {
    headline: 'Quantitative reasoning and current-event environmental issues — both heavily tested.',
    paragraphs: [
      "AP Environmental Science is the only AP science exam without a separate calculator section, but FRQs frequently require numerical answers (population growth rates, half-lives, energy efficiency). Students lose points for skipping unit conversions or for not showing setup before the answer — both rubric requirements.",
      "Our coverage emphasises the 'data analysis' FRQ that has appeared on every recent exam and asks students to read a graph, identify a trend, and propose a mitigation strategy. The mitigation step is where many strong students under-score by listing generic interventions instead of one specific to the data shown.",
    ],
  },
  'ap-african-american-studies': {
    headline: 'A new AP course (full launch 2024-25) with a 4-unit, 4-FRQ structure.',
    paragraphs: [
      "AP African American Studies is one of the College Board's newest courses and follows a different structure from older APs: 4 units (Origins of the African Diaspora; Freedom, Enslavement, and Resistance; The Practice of Freedom; Movements and Debates) and a project-based component. The exam itself is shorter than most APs and weights document analysis heavily.",
      "Our lessons emphasise the primary-source document set that anchors the course — speeches, letters, photographs, and visual art — and the source-analysis FRQ that asks students to identify the historical context, audience, and purpose of an unfamiliar document.",
    ],
  },
  'ap-computer-science-a': {
    headline: 'Java syntax, object-oriented design, and a rigorous focus on tracing code by hand.',
    paragraphs: [
      "AP Computer Science A is taught and tested in Java and asks students to read code as much as to write it — roughly half of MCQs are 'what does this code print?' or 'what is the value of x after this loop?' problems. Students who only practice writing code from scratch consistently underperform on the MCQ section.",
      "Our coverage devotes equal time to tracing exercises and to the FRQ method-implementation problems. We also include the array-of-objects and 2D-array problem types that appear on essentially every released exam and form the spine of the longest FRQs.",
    ],
  },
  'ap-cs-principles': {
    headline: 'A breadth-first computing course with a Create Performance Task, not a traditional exam-only structure.',
    paragraphs: [
      "AP Computer Science Principles is structured very differently from CSA: students complete a Create Performance Task (a programming project submitted by April 30) that contributes ~30% of the AP score, plus a 70-question MCQ exam in early May. Many students focus on the exam and underprepare for the CPT — leaving easy points on the table.",
      "Our coverage is split clearly between the Big Ideas (data, algorithms, programming, computer systems and networks, impact of computing) and a separate CPT preparation track that walks through the written response prompts and the program-purpose / development-process expectations.",
    ],
  },
  'organic-chemistry': {
    headline: 'College-level orgo — built for pre-med, pre-pharm, and chem majors.',
    paragraphs: [
      "Organic chemistry is rarely failed because students can't memorise reactions; it's failed because students can't predict products from new reactant combinations. Our lessons emphasise mechanism-based reasoning: every reaction is taught as a sequence of arrow-pushing steps from nucleophile to electrophile, with the rate-determining step explicitly called out.",
      "We map every reaction in our problem library to the underlying mechanism class (SN1, SN2, E1, E2, electrophilic addition, electrophilic aromatic substitution, etc.) so you build pattern recognition rather than memorising a table of named reactions in isolation.",
    ],
  },
  // 'sat' intro removed (owner request, Aug 2026): the SAT page now leads
  // with the personalized study plan (SATStudyPlan) instead of course copy.
  'act': {
    headline: 'Pace-driven, content-broad — speed is the main differentiator on every section.',
    paragraphs: [
      "The ACT consistently rewards pace over depth: each section gives roughly 30-60 seconds per question, which is significantly less than the SAT. Students who score below their potential almost always run out of time on Reading or Science before they run out of correct answers, so our prep weights timing drills as heavily as content review.",
      "Our Science section coverage focuses on the three passage types (Data Representation, Research Summaries, Conflicting Viewpoints) rather than on biology/chemistry/physics content — because the ACT Science section is fundamentally a reading-graphs-and-tables test that uses scientific contexts as window dressing.",
    ],
  },
  'mcat': {
    headline: 'Six-and-a-half hours, four sections, and a critical-reasoning section that often decides the score.',
    paragraphs: [
      "The MCAT is unlike any undergraduate exam in length and pacing: 230 questions over 7 hours 30 minutes (with breaks), and the CARS (Critical Analysis and Reasoning Skills) section is widely regarded as the hardest to improve on because it doesn't reward content knowledge at all — only careful reading.",
      "Our coverage is organised around AAMC's content-category outline and weights practice toward the highest-frequency topics: amino acids and protein structure, enzyme kinetics, acid-base chemistry, and the social-science content (psychology and sociology vocabulary) that anchors the entire fourth section.",
    ],
  },
}
