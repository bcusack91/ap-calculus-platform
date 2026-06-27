# Standards taxonomy — DRAFT for approval

_Auto-drafted from official sources (College Board, AAMC, ACT, College Board SAT) for review. Once you approve, these become the codes the app tags content against for standards-mastery reporting. Verify the unit names/weightings against the current course frameworks before we wire them up._


## SAT/PSAT

> Taxonomy reflects the digital SAT Suite (in effect since 2023-2024 in the US; current for 2025-2026). The SAT and PSAT/NMSQT share an identical content-domain and skill-point framework — the SAME four Reading and Writing domains and four Math domains — differing mainly in difficulty calibration (PSAT/NMSQT targets grades 10-11) and score scale (PSAT/NMSQT 320-1520 vs SAT 400-1600), not in domain structure.

STRUCTURE (identical counts for SAT and PSAT/NMSQT):
- Reading and Writing: 54 questions, 64 minutes, two adaptive modules of 27 questions / 32 minutes each. All 4-option multiple choice. Of the 54, 4 are unscored pretest questions (50 operational).
- Math: 44 questions, 70 minutes, two adaptive modules of 22 questions / 35 minutes each. ~75% multiple choice, ~25% student-produced response (grid-in). Of the 44, 4 are unscored pretest (40 operational). A built-in Desmos graphing calculator and reference sheet are provided throughout.
- Both sections are multistage adaptive: module 2 difficulty depends on module 1 performance. Total ~98 questions, 2 hr 14 min.

SHARE OF QUESTIONS:
- R&W domains: Craft and Structure ~28% (largest), Information and Ideas ~26%, Standard English Conventions ~26%, Expression of Ideas ~20%. College Board publishes these as approximate proportions; per-domain question counts vary slightly by form.
- Math domains: Algebra ~35%, Advanced Math ~35%, Problem-Solving and Data Analysis ~15%, Geometry and Trigonometry ~15%.

The domain and skill names ('Words in Context', 'Command of Evidence', 'Boundaries', 'Form, Structure, and Sense', 'Rhetorical Synthesis', 'Transitions', etc.) are College Board's own published labels from the SAT Suite content-domains page. The percentage shares are consistent across College Board's Assessment Framework and multiple test-prep summaries; College Board's public 'what's on the test' pages name the domains and skills but do not always print exact percentages, which is why approximate ranges are given.

### SAT (Digital) — Reading and Writing

- `RW-INF` — **Information and Ideas** — ~26% of R&W (~12-14 of 54 questions). Comprehension, analysis, reasoning; locating, interpreting, evaluating, and integrating information/ideas from texts and informational graphics. Skill points: Central Ideas and Details; Command of Evidence (textual and quantitative); Inferences.
- `RW-CRA` — **Craft and Structure** — ~28% of R&W (~13-15 of 54 questions) — the largest R&W domain. Vocabulary, rhetorical analysis, cross-text synthesis. Skill points: Words in Context; Text Structure and Purpose; Cross-Text Connections.
- `RW-EXP` — **Expression of Ideas** — ~20% of R&W (~8-12 of 54 questions). Revising texts to improve effectiveness of written expression and meet rhetorical goals. Skill points: Rhetorical Synthesis; Transitions.
- `RW-CON` — **Standard English Conventions** — ~26% of R&W (~11-15 of 54 questions). Editing text to conform to core conventions of Standard English sentence structure, usage, and punctuation. Skill points: Boundaries; Form, Structure, and Sense.

### SAT (Digital) — Math

- `M-ALG` — **Algebra** — ~35% of Math (~13-15 of 44 questions). Skill points: linear equations in one variable; linear equations in two variables; linear functions; systems of two linear equations in two variables; linear inequalities in one or two variables.
- `M-ADV` — **Advanced Math** — ~35% of Math (~13-15 of 44 questions). Skill points: equivalent expressions; nonlinear equations in one variable and systems of equations in two variables; nonlinear functions (quadratic, exponential, polynomial, rational, radical).
- `M-PSDA` — **Problem-Solving and Data Analysis** — ~15% of Math (~5-7 of 44 questions). Skill points: ratios, rates, proportional relationships, and units; percentages; one-variable data (distributions and measures of center/spread); two-variable data (models and scatterplots); probability and conditional probability; inference from sample statistics and margin of error; evaluating statistical claims (observational studies and experiments).
- `M-GEO` — **Geometry and Trigonometry** — ~15% of Math (~5-7 of 44 questions). Skill points: area and volume; lines, angles, and triangles; right triangles and trigonometry; circles.

### PSAT/NMSQT (Digital) — Reading and Writing

- `RW-INF` — **Information and Ideas** — ~26% of R&W (54 questions total). Skill points: Central Ideas and Details; Command of Evidence (textual and quantitative); Inferences. Same domain framework as the SAT.
- `RW-CRA` — **Craft and Structure** — ~28% of R&W. Skill points: Words in Context; Text Structure and Purpose; Cross-Text Connections. Largest R&W domain; same framework as SAT.
- `RW-EXP` — **Expression of Ideas** — ~20% of R&W. Skill points: Rhetorical Synthesis; Transitions. Same framework as SAT.
- `RW-CON` — **Standard English Conventions** — ~26% of R&W. Skill points: Boundaries; Form, Structure, and Sense. Same framework as SAT.

### PSAT/NMSQT (Digital) — Math

- `M-ALG` — **Algebra** — ~35% of Math (44 questions total). Same skill points and framework as the SAT Math Algebra domain.
- `M-ADV` — **Advanced Math** — ~35% of Math. Same skill points and framework as SAT. Note: PSAT/NMSQT content is calibrated for grades 10-11 and is slightly less advanced than the SAT, but uses the identical domain/skill taxonomy.
- `M-PSDA` — **Problem-Solving and Data Analysis** — ~15% of Math. Same skill points and framework as SAT.
- `M-GEO` — **Geometry and Trigonometry** — ~15% of Math. Same skill points and framework as SAT.

_Sources: https://satsuite.collegeboard.org/practice/content-domains · https://satsuite.collegeboard.org/higher-ed-professionals/sat-validity/content-domains · https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing · https://satsuite.collegeboard.org/sat/whats-on-the-test/math/overview_

## ACT

> Source: official ACT.org "Understanding Your ACT Scores" page, which publishes exact reporting-category names and percentage weighting ranges (used here verbatim). These are the score-report reporting categories, distinct from the underlying ACT College and Career Readiness Standards.

Reporting category scores are reported as raw counts (correct/total) and as a percentage; the published percentage RANGES above represent each category's share of operational questions on a given form, so they vary slightly form to form. Operational question counts cited reflect the enhanced ACT (rolled out 2025, standard for 2025-2026): English ~40, Math ~41, Reading ~27, Science ~34 operational items (additional embedded field-test items are unscored).

Math note: "Preparing for Higher Math" (~80%) is an umbrella category whose 5 subcategories (Number & Quantity, Algebra, Functions, Geometry, Statistics & Probability) each receive their own reporting score; together with "Integrating Essential Skills" this yields the commonly cited count of math reporting categories. The older pre-enhancement framework also listed a separate "Modeling" reporting category that scored questions across multiple categories; on current official materials the primary structure is Preparing for Higher Math + Integrating Essential Skills.

Scoring structure (enhanced ACT, 2025-2026): Composite (1-36) is the average of English, Math, and Reading. Science is OPTIONAL; if taken, a Science score (1-36) and a STEM score (average of Math and Science) are reported. An ELA score is reported if the optional Writing test is taken. Reading also includes an "Understanding Complex Texts" indicator reported as Below/Proficient/Above rather than a percentage.

### English

- `ACT.ENG.POW` — **Production of Writing** — 38-43% of operational questions; covers topic development, organization, unity, and cohesion (transitions). ~40 operational questions in section.
- `ACT.ENG.KLA` — **Knowledge of Language** — 18-23% of operational questions; word choice, concision, style, tone, and register.
- `ACT.ENG.CSE` — **Conventions of Standard English** — 38-43% of operational questions; sentence structure, formation, usage, and punctuation.

### Mathematics

- `ACT.MATH.PHM` — **Preparing for Higher Math** — ~80% of operational questions; umbrella category subdivided into the 5 content areas below. ~41 operational questions in section.
- `ACT.MATH.PHM.NQ` — **Number & Quantity** — 10-12% (subcategory of Preparing for Higher Math).
- `ACT.MATH.PHM.A` — **Algebra** — 17-20% (subcategory of Preparing for Higher Math).
- `ACT.MATH.PHM.F` — **Functions** — 17-20% (subcategory of Preparing for Higher Math).
- `ACT.MATH.PHM.G` — **Geometry** — 17-20% (subcategory of Preparing for Higher Math).
- `ACT.MATH.PHM.SP` — **Statistics & Probability** — 12-15% (subcategory of Preparing for Higher Math).
- `ACT.MATH.IES` — **Integrating Essential Skills** — ~20% of operational questions; addresses concepts typically learned before higher math (rates, percentages, proportions, area, etc.) in more complex multi-step problems.

### Reading

- `ACT.READ.KID` — **Key Ideas & Details** — 44-52% of operational questions; reading closely to determine central ideas, summarize, understand relationships, and draw logical inferences. ~27 operational questions in section.
- `ACT.READ.CS` — **Craft & Structure** — 26-33% of operational questions; word/phrase meaning, text structure, point of view, purpose, and rhetorical analysis.
- `ACT.READ.IKI` — **Integration of Knowledge & Ideas** — 19-26% of operational questions; analyzing arguments and integrating/comparing information across multiple texts.

### Science

- `ACT.SCI.IOD` — **Interpretation of Data** — 38-50% of operational questions; manipulate and analyze scientific data in tables, graphs, and diagrams. ~34 operational questions in section. Science is optional on the enhanced ACT (2025-2026).
- `ACT.SCI.SIN` — **Scientific Investigation** — 18-32% of operational questions; understand experimental tools, procedures, and design.
- `ACT.SCI.EMI` — **Evaluation of Models, Inferences & Experimental Results** — 24-38% of operational questions; judge the validity of scientific information and draw conclusions/predictions. (Full official name; sometimes shortened to 'Evaluation of Models & Results'.)

_Sources: https://www.act.org/content/act/en/products-and-services/the-act/scores/understanding-your-scores.html · https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html · https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/description-of-english-test.html_

## MCAT

> Official AAMC MCAT content taxonomy (current 2025-2026 framework, per the AAMC "What's on the MCAT Exam?" content outline). The exam has FOUR sections. Three are science/social-science sections organized around 10 Foundational Concepts ("big ideas"), each subdivided into Content Categories (1A, 1B, ...). The fourth section, Critical Analysis and Reasoning Skills (CARS), has NO foundational concepts or content categories — it is built from reading passages (humanities/social sciences) testing reasoning skills, so it appears here with an empty standards list. Section-to-concept mapping: (1) Biological and Biochemical Foundations of Living Systems = FC 1, 2, 3; (2) Chemical and Physical Foundations of Biological Systems = FC 4, 5; (3) Psychological, Social, and Biological Foundations of Behavior = FC 6, 7, 8, 9, 10. Codes are modeled as "course" = the four sections; "standards" carry both the foundational-concept entries (codes FC1-FC10, with the AAMC "big idea" definition in the note) and the content-category entries (codes 1A, 1B, ...). All three science sections are scored 118-132 (combined total 472-528); CARS likewise 118-132. Note also that across all science sections, four Scientific Inquiry and Reasoning Skills (SIRS 1-4) and the CARS reasoning skills cut across content but are not "content categories" and are listed in the relevant section notes rather than as separate codes.

### Biological and Biochemical Foundations of Living Systems

- `FC1` — **Foundational Concept 1: Biomolecules have unique properties that determine how they contribute to the structure and function of cells, and how they participate in the processes necessary to maintain life** — Big idea. ~Biochemistry, biology, organic & general chemistry. Comprises ~55% of this section.
- `1A` — **Structure and function of proteins and their constituent amino acids** — Content category under FC1
- `1B` — **Transmission of genetic information from the gene to the protein** — Content category under FC1
- `1C` — **Transmission of heritable information from generation to generation and the processes that increase genetic diversity** — Content category under FC1
- `1D` — **Principles of bioenergetics and fuel molecule metabolism** — Content category under FC1
- `FC2` — **Foundational Concept 2: Highly organized assemblies of molecules, cells, and organs interact to carry out the functions of living organisms** — Big idea covering cellular/organismal organization.
- `2A` — **Assemblies of molecules, cells, and groups of cells within single cellular and multicellular organisms** — Content category under FC2
- `2B` — **The structure, growth, physiology, and genetics of prokaryotes and viruses** — Content category under FC2
- `2C` — **Processes of cell division, differentiation, and specialization** — Content category under FC2
- `FC3` — **Foundational Concept 3: Complex systems of tissues and organs sense the internal and external environments of multicellular organisms, and through integrated functioning, maintain a stable internal environment within an ever-changing external environment** — Big idea covering homeostasis and organ systems.
- `3A` — **Structure and functions of the nervous and endocrine systems and ways in which these systems coordinate the organ systems** — Content category under FC3
- `3B` — **Structure and integrative functions of the main organ systems** — Content category under FC3

### Chemical and Physical Foundations of Biological Systems

- `FC4` — **Foundational Concept 4: Complex living organisms transport materials, sense their environment, process signals, and respond to changes using processes that can be understood in terms of physical principles** — Big idea. ~Physics and general chemistry applied to living systems.
- `4A` — **Translational motion, forces, work, energy, and equilibrium in living systems** — Content category under FC4
- `4B` — **Importance of fluids for the circulation of blood, gas movement, and gas exchange** — Content category under FC4
- `4C` — **Electrochemistry and electrical circuits and their elements** — Content category under FC4
- `4D` — **How light and sound interact with matter** — Content category under FC4
- `4E` — **Atoms, nuclear decay, electronic structure, and atomic chemical behavior** — Content category under FC4
- `FC5` — **Foundational Concept 5: The principles that govern chemical interactions and reactions form the basis for a broader understanding of the molecular dynamics of living systems** — Big idea. ~General chemistry, organic chemistry, biochemistry.
- `5A` — **Unique nature of water and its solutions** — Content category under FC5
- `5B` — **Nature of molecules and intermolecular interactions** — Content category under FC5
- `5C` — **Separation and purification methods** — Content category under FC5
- `5D` — **Structure, function, and reactivity of biologically-relevant molecules** — Content category under FC5
- `5E` — **Principles of chemical thermodynamics and kinetics** — Content category under FC5

### Psychological, Social, and Biological Foundations of Behavior

- `FC6` — **Foundational Concept 6: Biological, psychological, and sociocultural factors influence the ways that individuals perceive, think about, and react to the world** — Big idea covering sensation, perception, cognition, emotion.
- `6A` — **Sensing the environment** — Content category under FC6 (sensation and perception)
- `6B` — **Making sense of the environment** — Content category under FC6 (cognition, attention, memory, language)
- `6C` — **Responding to the world** — Content category under FC6 (emotion and stress)
- `FC7` — **Foundational Concept 7: Biological, psychological, and sociocultural factors influence behavior and behavior change** — Big idea covering determinants of behavior and behavior change.
- `7A` — **Individual influences on behavior** — Content category under FC7
- `7B` — **Social processes that influence human behavior** — Content category under FC7
- `7C` — **Attitude and behavior change** — Content category under FC7
- `FC8` — **Foundational Concept 8: Psychological, sociocultural, and biological factors influence the way we think about ourselves and others, as well as how we interact with others** — Big idea covering self and social cognition.
- `8A` — **Self-identity** — Content category under FC8
- `8B` — **Social thinking** — Content category under FC8
- `8C` — **Social interactions** — Content category under FC8
- `FC9` — **Foundational Concept 9: Cultural and social differences influence well-being** — Big idea covering social structure and demographics.
- `9A` — **Understanding social structure** — Content category under FC9
- `9B` — **Demographic characteristics and processes** — Content category under FC9
- `FC10` — **Foundational Concept 10: Social stratification and access to resources influence well-being** — Big idea covering social inequality.
- `10A` — **Social inequality** — Content category under FC10 (the only content category in FC10)

### Critical Analysis and Reasoning Skills (CARS)

- `CARS` — **Critical Analysis and Reasoning Skills** — Fourth MCAT section. NO foundational concepts or content categories. Built from ~9 reading passages drawn from the humanities and social sciences, testing three reasoning-skill types: (1) Foundations of Comprehension, (2) Reasoning Within the Text, (3) Reasoning Beyond the Text. No outside content knowledge is required.

_Sources: https://students-residents.aamc.org/whats-mcat-exam/publication-chapters/whats-mcat-exam · https://students-residents.aamc.org/prepare-mcat-exam/whats-mcat-exam-pdf-outline · https://students-residents.aamc.org/biological-and-biochemical-foundations-living-systems/biological-and-biochemical-foundations-living-systems-foundational-concept-1 · https://students-residents.aamc.org/biological-and-biochemical-foundations-living-systems/biological-and-biochemical-foundations-living-systems-foundational-concept-2_

## AP — Math & Science

> All units reflect current (2025-2026) College Board Course and Exam Description (CED) frameworks. Key notes: (1) AP Precalculus Unit 4 is taught but NOT assessed on the AP Exam; weightings shown are for the multiple-choice section. (2) AP Physics 1 & 2 were revised effective 2024-25: Fluids moved from Physics 2 to Physics 1 (now Unit 8); Physics 2 units are renumbered 9-15 to continue sequentially from Physics 1, and optics was split into Geometric Optics (Unit 13) and Waves/Sound/Physical Optics (Unit 14). (3) AP Physics C: Mechanics (Units 1-7) and E&M (Units 8-13) were revised effective fall 2024 with new unit names and sequential numbering; the two C exams are separate but numbered continuously. (4) AP Computer Science A adopted a new 4-unit framework effective fall 2025 (replacing the prior 10-unit structure) and moved fully digital via Bluebook. (5) AP Computer Science Principles is organized into 5 'Big Ideas' (not numbered units); the percentages are for the end-of-course multiple-choice exam (70% of score), with the Create performance task accounting for the other 30%. Weighting percentages are given as ranges where College Board publishes ranges; where a course publishes a single value the range collapses. Exam-section weightings (MCQ vs FRQ) are not unit weightings and are summarized in notes only.

### AP Calculus AB

- `Unit 1` — **Limits and Continuity** — 10-12%
- `Unit 2` — **Differentiation: Definition and Fundamental Properties** — 10-12%
- `Unit 3` — **Differentiation: Composite, Implicit, and Inverse Functions** — 9-13%
- `Unit 4` — **Contextual Applications of Differentiation** — 10-15%
- `Unit 5` — **Analytical Applications of Differentiation** — 15-18%
- `Unit 6` — **Integration and Accumulation of Change** — 17-20%
- `Unit 7` — **Differential Equations** — 6-12%
- `Unit 8` — **Applications of Integration** — 10-15%

### AP Calculus BC

- `Unit 1` — **Limits and Continuity** — 4-7%
- `Unit 2` — **Differentiation: Definition and Fundamental Properties** — 4-7%
- `Unit 3` — **Differentiation: Composite, Implicit, and Inverse Functions** — 4-7%
- `Unit 4` — **Contextual Applications of Differentiation** — 6-9%
- `Unit 5` — **Analytical Applications of Differentiation** — 8-11%
- `Unit 6` — **Integration and Accumulation of Change** — 17-20%
- `Unit 7` — **Differential Equations** — 6-9%
- `Unit 8` — **Applications of Integration** — 6-9%
- `Unit 9` — **Parametric Equations, Polar Coordinates, and Vector-Valued Functions** — 11-12%
- `Unit 10` — **Infinite Sequences and Series** — 17-18%

### AP Statistics

- `Unit 1` — **Exploring One-Variable Data** — 15-23%
- `Unit 2` — **Exploring Two-Variable Data** — 5-7%
- `Unit 3` — **Collecting Data** — 12-15%
- `Unit 4` — **Probability, Random Variables, and Probability Distributions** — 10-20%
- `Unit 5` — **Sampling Distributions** — 7-12%
- `Unit 6` — **Inference for Categorical Data: Proportions** — 12-15%
- `Unit 7` — **Inference for Quantitative Data: Means** — 10-18%
- `Unit 8` — **Inference for Categorical Data: Chi-Square** — 2-5%
- `Unit 9` — **Inference for Quantitative Data: Slopes** — 2-5%

### AP Precalculus

- `Unit 1` — **Polynomial and Rational Functions** — 30-40% of MC; assessed on exam
- `Unit 2` — **Exponential and Logarithmic Functions** — 27-40% of MC; assessed on exam
- `Unit 3` — **Trigonometric and Polar Functions** — 30-35% of MC; assessed on exam
- `Unit 4` — **Functions Involving Parameters, Vectors, and Matrices** — Not assessed on the AP Exam

### AP Biology

- `Unit 1` — **Chemistry of Life** — 8-11%
- `Unit 2` — **Cell Structure and Function** — 10-13%
- `Unit 3` — **Cellular Energetics** — 12-16%
- `Unit 4` — **Cell Communication and Cell Cycle** — 10-15%
- `Unit 5` — **Heredity** — 8-11%
- `Unit 6` — **Gene Expression and Regulation** — 12-16%
- `Unit 7` — **Natural Selection** — 13-20%
- `Unit 8` — **Ecology** — 10-15%

### AP Chemistry

- `Unit 1` — **Atomic Structure and Properties** — 7-9%
- `Unit 2` — **Compound Structure and Properties** — 7-9%
- `Unit 3` — **Properties of Substances and Mixtures** — 18-22%
- `Unit 4` — **Chemical Reactions** — 7-9%
- `Unit 5` — **Kinetics** — 7-9%
- `Unit 6` — **Thermodynamics** — 7-9%
- `Unit 7` — **Equilibrium** — 7-9%
- `Unit 8` — **Acids and Bases** — 11-15%
- `Unit 9` — **Applications of Thermodynamics** — 7-9%

### AP Physics 1: Algebra-Based

- `Unit 1` — **Kinematics** — 10-15%
- `Unit 2` — **Force and Translational Dynamics** — 18-23%
- `Unit 3` — **Work, Energy, and Power** — 18-23%
- `Unit 4` — **Linear Momentum** — 10-15%
- `Unit 5` — **Torque and Rotational Dynamics** — 10-15%
- `Unit 6` — **Energy and Momentum of Rotating Systems** — 5-8%
- `Unit 7` — **Oscillations** — 5-8%
- `Unit 8` — **Fluids** — 10-15%; added effective 2024-25, moved from AP Physics 2

### AP Physics 2: Algebra-Based

- `Unit 9` — **Thermodynamics** — 15-18%; units numbered sequentially after Physics 1, effective 2024-25
- `Unit 10` — **Electric Force, Field, and Potential** — 15-18%
- `Unit 11` — **Electric Circuits** — 15-18%
- `Unit 12` — **Magnetism and Electromagnetism** — 12-15%
- `Unit 13` — **Geometric Optics** — 12-15%
- `Unit 14` — **Waves, Sound, and Physical Optics** — 12-15%
- `Unit 15` — **Modern Physics** — 12-15%

### AP Physics C: Mechanics

- `Unit 1` — **Kinematics** — 10-15%; effective fall 2024
- `Unit 2` — **Force and Translational Dynamics** — 20-25%
- `Unit 3` — **Work, Energy, and Power** — 15-25%
- `Unit 4` — **Linear Momentum** — 10-20%
- `Unit 5` — **Torque and Rotational Dynamics** — 10-15%
- `Unit 6` — **Energy and Momentum of Rotating Systems** — 10-15%
- `Unit 7` — **Oscillations** — 10-15%

### AP Physics C: Electricity and Magnetism

- `Unit 8` — **Electric Charges, Fields, and Gauss's Law** — 15-25%; units numbered sequentially after Physics C: Mechanics, effective fall 2024
- `Unit 9` — **Electric Potential** — 10-20%
- `Unit 10` — **Conductors and Capacitors** — 10-15%
- `Unit 11` — **Electric Circuits** — 15-25%
- `Unit 12` — **Magnetic Fields and Electromagnetism** — 10-20%
- `Unit 13` — **Electromagnetic Induction** — 10-20%

### AP Environmental Science

- `Unit 1` — **The Living World: Ecosystems** — 6-8%
- `Unit 2` — **The Living World: Biodiversity** — 6-8%
- `Unit 3` — **Populations** — 10-15%
- `Unit 4` — **Earth Systems and Resources** — 10-15%
- `Unit 5` — **Land and Water Use** — 10-15%
- `Unit 6` — **Energy Resources and Consumption** — 10-15%
- `Unit 7` — **Atmospheric Pollution** — 7-10%
- `Unit 8` — **Aquatic and Terrestrial Pollution** — 7-10%
- `Unit 9` — **Global Change** — 15-20%

### AP Computer Science A

- `Unit 1` — **Using Objects and Methods** — 15-25%; new 4-unit framework effective fall 2025
- `Unit 2` — **Selection and Iteration** — 25-35%
- `Unit 3` — **Class Creation** — 10-18%
- `Unit 4` — **Data Collections** — 30-40%

### AP Computer Science Principles

- `Big Idea 1` — **Creative Development** — 10-13% of MC exam
- `Big Idea 2` — **Data** — 17-22% of MC exam
- `Big Idea 3` — **Algorithms and Programming** — 30-35% of MC exam
- `Big Idea 4` — **Computer Systems and Networks** — 11-15% of MC exam
- `Big Idea 5` — **Impact of Computing** — 21-26% of MC exam

_Sources: https://apcentral.collegeboard.org/courses/ap-calculus-ab · https://apcentral.collegeboard.org/courses/ap-calculus-bc · https://apcentral.collegeboard.org/courses/ap-statistics · https://apcentral.collegeboard.org/courses/ap-precalculus_

## AP — Humanities & Social Science

> All unit names and weighting bands are from the College Board Course and Exam Descriptions (CEDs) / Course-at-a-Glance documents. Weightings are the approximate share of the multiple-choice section and vary slightly year to year.

Key caveats by course:
- AP Psychology: uses the REVISED 5-unit framework (first administered May 2025), aligned to the APA Introductory Psychology Initiative. This replaced the older 9-unit structure. All five units are equally weighted (15–25% each). Do NOT use the legacy 9-unit list.
- AP English Language & Composition: the CED is NOT organized into weighted content units. It uses 4 Big Ideas (Rhetorical Situation, Claims and Evidence, Reasoning and Organization, Style) that map to course skills, taught across 9 progress-building instructional units. Reported figures (e.g., style ~25–35% of MCQ) are MCQ skill emphases, not content-unit weights.
- AP English Literature & Composition: also skills-based — 6 Big Ideas (Character, Setting, Structure, Narration, Figurative Language, Literary Argumentation) + 7 course skill categories, delivered across 9 genre-based units (short fiction, poetry, longer fiction & drama). No percentage content weighting is published.
- AP African American Studies: percentages shown are approximate/derived (Unit 2 is the heaviest at roughly a third). The exam also has unusual components: free-response (~30%) plus a required Individual Student Project (~8.5% of the final score). Confirm exact bands against the current CED before treating as authoritative. This is a newer course (operational launch 2024–25).
- AP Micro Unit 3: the current CED title is "Production, Cost, and the Perfect Competition Model" (some third-party sources abbreviate as "Production Choices and Behavior").
- AP Human Geography unit titles use the full CED form ("...Patterns and Processes").

Grades 4–8 / Algebra / Geometry: There is NO single national standard equivalent to the College Board AP units for these levels. The closest widely-used national framework is the Common Core State Standards (CCSS) — for math, the K–8 grade-level domains (e.g., Operations & Algebraic Thinking, Number & Operations, Ratios & Proportional Relationships, Expressions & Equations, Functions, Geometry, Statistics & Probability) and the high-school conceptual categories where "Algebra" and "Geometry" live (CCSS does not define discrete Algebra/Geometry courses but high-school domains: Number & Quantity, Algebra, Functions, Modeling, Geometry, Statistics & Probability). However, CCSS adoption is state-by-state (several states use their own standards, e.g., TEKS in Texas, Florida B.E.S.T.), so it is not truly "national." For this app the most reliable approach is to either (a) map to CCSS domains/clusters where the audience is CCSS-aligned, or (b) use the app's own internal topic groupings (custom units) for grades 4–8, Algebra, and Geometry, optionally tagging each topic with a CCSS code for districts that want alignment. Recommend the app's own groupings as the canonical structure with optional CCSS cross-references, since no AP-style authoritative unit list exists below AP/college level.

### AP United States History

- `APUSH-U1` — **Unit 1: Period 1, 1491–1607 (Contact & Exploration)** — 4–6%
- `APUSH-U2` — **Unit 2: Period 2, 1607–1754 (Colonial America)** — 6–8%
- `APUSH-U3` — **Unit 3: Period 3, 1754–1800 (Revolution & New Republic)** — 10–17%
- `APUSH-U4` — **Unit 4: Period 4, 1800–1848 (Early Republic & Democracy)** — 10–17%
- `APUSH-U5` — **Unit 5: Period 5, 1844–1877 (Civil War & Reconstruction)** — 10–17%
- `APUSH-U6` — **Unit 6: Period 6, 1865–1898 (Industrialization & Gilded Age)** — 10–17%
- `APUSH-U7` — **Unit 7: Period 7, 1890–1945 (Progressivism, WWI, Depression, WWII)** — 10–17%
- `APUSH-U8` — **Unit 8: Period 8, 1945–1980 (Cold War & Postwar)** — 10–17%
- `APUSH-U9` — **Unit 9: Period 9, 1980–Present (Contemporary US)** — 4–6%

### AP World History: Modern

- `APWHM-U1` — **Unit 1: The Global Tapestry (c. 1200–c. 1450)** — 8–10%
- `APWHM-U2` — **Unit 2: Networks of Exchange (c. 1200–c. 1450)** — 8–10%
- `APWHM-U3` — **Unit 3: Land-Based Empires (c. 1450–c. 1750)** — 12–15%
- `APWHM-U4` — **Unit 4: Transoceanic Interconnections (c. 1450–c. 1750)** — 12–15%
- `APWHM-U5` — **Unit 5: Revolutions (c. 1750–c. 1900)** — 12–15%
- `APWHM-U6` — **Unit 6: Consequences of Industrialization (c. 1750–c. 1900)** — 12–15%
- `APWHM-U7` — **Unit 7: Global Conflict (c. 1900–present)** — 8–10%
- `APWHM-U8` — **Unit 8: Cold War and Decolonization (c. 1900–present)** — 8–10%
- `APWHM-U9` — **Unit 9: Globalization (c. 1900–present)** — 8–10%

### AP United States Government and Politics

- `APGOV-U1` — **Unit 1: Foundations of American Democracy** — 15–22%
- `APGOV-U2` — **Unit 2: Interactions Among Branches of Government** — 25–36%
- `APGOV-U3` — **Unit 3: Civil Liberties and Civil Rights** — 13–18%
- `APGOV-U4` — **Unit 4: American Political Ideologies and Beliefs** — 10–15%
- `APGOV-U5` — **Unit 5: Political Participation** — 20–27%

### AP Psychology

- `APPSY-U1` — **Unit 1: Biological Bases of Behavior** — 15–25% (revised 5-unit framework, first administered May 2025; aligned to APA Intro Psych Initiative)
- `APPSY-U2` — **Unit 2: Cognition** — 15–25%
- `APPSY-U3` — **Unit 3: Development and Learning** — 15–25%
- `APPSY-U4` — **Unit 4: Social Psychology and Personality** — 15–25%
- `APPSY-U5` — **Unit 5: Mental and Physical Health** — 15–25%

### AP Human Geography

- `APHUG-U1` — **Unit 1: Thinking Geographically** — 8–10%
- `APHUG-U2` — **Unit 2: Population and Migration Patterns and Processes** — 12–17%
- `APHUG-U3` — **Unit 3: Cultural Patterns and Processes** — 12–17%
- `APHUG-U4` — **Unit 4: Political Patterns and Processes** — 12–17%
- `APHUG-U5` — **Unit 5: Agriculture and Rural Land-Use Patterns and Processes** — 12–17%
- `APHUG-U6` — **Unit 6: Cities and Urban Land-Use Patterns and Processes** — 12–17%
- `APHUG-U7` — **Unit 7: Industrial and Economic Development Patterns and Processes** — 12–17%

### AP Macroeconomics

- `APMACRO-U1` — **Unit 1: Basic Economic Concepts** — 5–10%
- `APMACRO-U2` — **Unit 2: Economic Indicators and the Business Cycle** — 12–17%
- `APMACRO-U3` — **Unit 3: National Income and Price Determination** — 17–27%
- `APMACRO-U4` — **Unit 4: Financial Sector** — 18–23%
- `APMACRO-U5` — **Unit 5: Long-Run Consequences of Stabilization Policies** — 20–30%
- `APMACRO-U6` — **Unit 6: Open Economy—International Trade and Finance** — 10–13%

### AP Microeconomics

- `APMICRO-U1` — **Unit 1: Basic Economic Concepts** — 12–15%
- `APMICRO-U2` — **Unit 2: Supply and Demand** — 20–25%
- `APMICRO-U3` — **Unit 3: Production, Cost, and the Perfect Competition Model** — 22–25%
- `APMICRO-U4` — **Unit 4: Imperfect Competition** — 15–22%
- `APMICRO-U5` — **Unit 5: Factor Markets** — 10–13%
- `APMICRO-U6` — **Unit 6: Market Failure and the Role of Government** — 8–13%

### AP English Language and Composition

- `APLANG-BI1` — **Big Idea: Rhetorical Situation (RHS)** — Organized by Big Ideas/skill categories, not weighted content units. Skills built across 9 instructional units; rhetorical-situation skills relate to exigence, audience, purpose, context, message.
- `APLANG-BI2` — **Big Idea: Claims and Evidence (CLE)** — Thesis/claims, supporting evidence, commentary.
- `APLANG-BI3` — **Big Idea: Reasoning and Organization (REO)** — Line of reasoning, organization, transitions; ~ shares MCQ with style.
- `APLANG-BI4` — **Big Idea: Style (STL)** — Word choice, syntax, tone, figurative language; style/language ~25–35% of MCQ.

### AP English Literature and Composition

- `APLIT-BI-CHR` — **Big Idea: Character (CHR)** — Framework organized by 6 Big Ideas + 7 course skill categories; 9 genre-based instructional units (short fiction, poetry, longer fiction/drama), not weighted content units.
- `APLIT-BI-SET` — **Big Idea: Setting (SET)**
- `APLIT-BI-STR` — **Big Idea: Structure (STR)** — Plot and structure.
- `APLIT-BI-NAR` — **Big Idea: Narration (NAR)** — Narrator/speaker and point of view.
- `APLIT-BI-FIG` — **Big Idea: Figurative Language (FIG)** — Word choice, imagery, symbol, comparison.
- `APLIT-BI-LAN` — **Big Idea: Literary Argumentation (LAN)** — Developing and supporting an interpretation (essays).

### AP African American Studies

- `APAAS-U1` — **Unit 1: Origins of the African Diaspora** — ~20–25% (approx.; exam = MCQ + FRQ 30% + Individual Student Project ~8.5%)
- `APAAS-U2` — **Unit 2: Freedom, Enslavement, and Resistance** — ~30–35% (heaviest unit)
- `APAAS-U3` — **Unit 3: The Practice of Freedom** — ~20–25%
- `APAAS-U4` — **Unit 4: Movements and Debates** — ~20–25%

_Sources: https://apcentral.collegeboard.org/media/pdf/ap-us-history-course-and-exam-description.pdf · https://apcentral.collegeboard.org/media/pdf/ap-us-history-course-at-a-glance.pdf · https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description.pdf · https://apcentral.collegeboard.org/media/pdf/ap-world-history-course-at-a-glance.pdf_
