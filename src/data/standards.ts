// AUTO-GENERATED standards taxonomy (from the approved draft, docs/standards-draft.md).
// Official AP units / SAT-ACT domains / MCAT content categories, used to label and
// weight the standards-mastery view. Regenerate from the source draft if it changes.

export interface StandardEntry { code: string; name: string; weight?: string }

export const STANDARDS_BY_COURSE: Record<string, StandardEntry[]> = {
  "SAT (Digital) — Reading and Writing": [
    {
      "code": "RW-INF",
      "name": "Information and Ideas",
      "weight": "~26% of R&W (~12-14 of 54 questions). Comprehension, analysis, reasoning; locating, interpreting, evaluating, and integrating information/ideas from texts and informational graphics. Skill points: Central Ideas and Details; Command of Evidence (textual and quantitative); Inferences."
    },
    {
      "code": "RW-CRA",
      "name": "Craft and Structure",
      "weight": "~28% of R&W (~13-15 of 54 questions) — the largest R&W domain. Vocabulary, rhetorical analysis, cross-text synthesis. Skill points: Words in Context; Text Structure and Purpose; Cross-Text Connections."
    },
    {
      "code": "RW-EXP",
      "name": "Expression of Ideas",
      "weight": "~20% of R&W (~8-12 of 54 questions). Revising texts to improve effectiveness of written expression and meet rhetorical goals. Skill points: Rhetorical Synthesis; Transitions."
    },
    {
      "code": "RW-CON",
      "name": "Standard English Conventions",
      "weight": "~26% of R&W (~11-15 of 54 questions). Editing text to conform to core conventions of Standard English sentence structure, usage, and punctuation. Skill points: Boundaries; Form, Structure, and Sense."
    }
  ],
  "SAT (Digital) — Math": [
    {
      "code": "M-ALG",
      "name": "Algebra",
      "weight": "~35% of Math (~13-15 of 44 questions). Skill points: linear equations in one variable; linear equations in two variables; linear functions; systems of two linear equations in two variables; linear inequalities in one or two variables."
    },
    {
      "code": "M-ADV",
      "name": "Advanced Math",
      "weight": "~35% of Math (~13-15 of 44 questions). Skill points: equivalent expressions; nonlinear equations in one variable and systems of equations in two variables; nonlinear functions (quadratic, exponential, polynomial, rational, radical)."
    },
    {
      "code": "M-PSDA",
      "name": "Problem-Solving and Data Analysis",
      "weight": "~15% of Math (~5-7 of 44 questions). Skill points: ratios, rates, proportional relationships, and units; percentages; one-variable data (distributions and measures of center/spread); two-variable data (models and scatterplots); probability and conditional probability; inference from sample statistics and margin of error; evaluating statistical claims (observational studies and experiments)."
    },
    {
      "code": "M-GEO",
      "name": "Geometry and Trigonometry",
      "weight": "~15% of Math (~5-7 of 44 questions). Skill points: area and volume; lines, angles, and triangles; right triangles and trigonometry; circles."
    }
  ],
  "PSAT/NMSQT (Digital) — Reading and Writing": [
    {
      "code": "RW-INF",
      "name": "Information and Ideas",
      "weight": "~26% of R&W (54 questions total). Skill points: Central Ideas and Details; Command of Evidence (textual and quantitative); Inferences. Same domain framework as the SAT."
    },
    {
      "code": "RW-CRA",
      "name": "Craft and Structure",
      "weight": "~28% of R&W. Skill points: Words in Context; Text Structure and Purpose; Cross-Text Connections. Largest R&W domain; same framework as SAT."
    },
    {
      "code": "RW-EXP",
      "name": "Expression of Ideas",
      "weight": "~20% of R&W. Skill points: Rhetorical Synthesis; Transitions. Same framework as SAT."
    },
    {
      "code": "RW-CON",
      "name": "Standard English Conventions",
      "weight": "~26% of R&W. Skill points: Boundaries; Form, Structure, and Sense. Same framework as SAT."
    }
  ],
  "PSAT/NMSQT (Digital) — Math": [
    {
      "code": "M-ALG",
      "name": "Algebra",
      "weight": "~35% of Math (44 questions total). Same skill points and framework as the SAT Math Algebra domain."
    },
    {
      "code": "M-ADV",
      "name": "Advanced Math",
      "weight": "~35% of Math. Same skill points and framework as SAT. Note: PSAT/NMSQT content is calibrated for grades 10-11 and is slightly less advanced than the SAT, but uses the identical domain/skill taxonomy."
    },
    {
      "code": "M-PSDA",
      "name": "Problem-Solving and Data Analysis",
      "weight": "~15% of Math. Same skill points and framework as SAT."
    },
    {
      "code": "M-GEO",
      "name": "Geometry and Trigonometry",
      "weight": "~15% of Math. Same skill points and framework as SAT."
    }
  ],
  "English": [
    {
      "code": "ACT.ENG.POW",
      "name": "Production of Writing",
      "weight": "38-43% of operational questions; covers topic development, organization, unity, and cohesion (transitions). ~40 operational questions in section."
    },
    {
      "code": "ACT.ENG.KLA",
      "name": "Knowledge of Language",
      "weight": "18-23% of operational questions; word choice, concision, style, tone, and register."
    },
    {
      "code": "ACT.ENG.CSE",
      "name": "Conventions of Standard English",
      "weight": "38-43% of operational questions; sentence structure, formation, usage, and punctuation."
    }
  ],
  "Mathematics": [
    {
      "code": "ACT.MATH.PHM",
      "name": "Preparing for Higher Math",
      "weight": "~80% of operational questions; umbrella category subdivided into the 5 content areas below. ~41 operational questions in section."
    },
    {
      "code": "ACT.MATH.PHM.NQ",
      "name": "Number & Quantity",
      "weight": "10-12% (subcategory of Preparing for Higher Math)."
    },
    {
      "code": "ACT.MATH.PHM.A",
      "name": "Algebra",
      "weight": "17-20% (subcategory of Preparing for Higher Math)."
    },
    {
      "code": "ACT.MATH.PHM.F",
      "name": "Functions",
      "weight": "17-20% (subcategory of Preparing for Higher Math)."
    },
    {
      "code": "ACT.MATH.PHM.G",
      "name": "Geometry",
      "weight": "17-20% (subcategory of Preparing for Higher Math)."
    },
    {
      "code": "ACT.MATH.PHM.SP",
      "name": "Statistics & Probability",
      "weight": "12-15% (subcategory of Preparing for Higher Math)."
    },
    {
      "code": "ACT.MATH.IES",
      "name": "Integrating Essential Skills",
      "weight": "~20% of operational questions; addresses concepts typically learned before higher math (rates, percentages, proportions, area, etc.) in more complex multi-step problems."
    }
  ],
  "Reading": [
    {
      "code": "ACT.READ.KID",
      "name": "Key Ideas & Details",
      "weight": "44-52% of operational questions; reading closely to determine central ideas, summarize, understand relationships, and draw logical inferences. ~27 operational questions in section."
    },
    {
      "code": "ACT.READ.CS",
      "name": "Craft & Structure",
      "weight": "26-33% of operational questions; word/phrase meaning, text structure, point of view, purpose, and rhetorical analysis."
    },
    {
      "code": "ACT.READ.IKI",
      "name": "Integration of Knowledge & Ideas",
      "weight": "19-26% of operational questions; analyzing arguments and integrating/comparing information across multiple texts."
    }
  ],
  "Science": [
    {
      "code": "ACT.SCI.IOD",
      "name": "Interpretation of Data",
      "weight": "38-50% of operational questions; manipulate and analyze scientific data in tables, graphs, and diagrams. ~34 operational questions in section. Science is optional on the enhanced ACT (2025-2026)."
    },
    {
      "code": "ACT.SCI.SIN",
      "name": "Scientific Investigation",
      "weight": "18-32% of operational questions; understand experimental tools, procedures, and design."
    },
    {
      "code": "ACT.SCI.EMI",
      "name": "Evaluation of Models, Inferences & Experimental Results",
      "weight": "24-38% of operational questions; judge the validity of scientific information and draw conclusions/predictions. (Full official name; sometimes shortened to 'Evaluation of Models & Results'.)"
    }
  ],
  "Biological and Biochemical Foundations of Living Systems": [
    {
      "code": "FC1",
      "name": "Foundational Concept 1: Biomolecules have unique properties that determine how they contribute to the structure and function of cells, and how they participate in the processes necessary to maintain life",
      "weight": "Big idea. ~Biochemistry, biology, organic & general chemistry. Comprises ~55% of this section."
    },
    {
      "code": "1A",
      "name": "Structure and function of proteins and their constituent amino acids",
      "weight": "Content category under FC1"
    },
    {
      "code": "1B",
      "name": "Transmission of genetic information from the gene to the protein",
      "weight": "Content category under FC1"
    },
    {
      "code": "1C",
      "name": "Transmission of heritable information from generation to generation and the processes that increase genetic diversity",
      "weight": "Content category under FC1"
    },
    {
      "code": "1D",
      "name": "Principles of bioenergetics and fuel molecule metabolism",
      "weight": "Content category under FC1"
    },
    {
      "code": "FC2",
      "name": "Foundational Concept 2: Highly organized assemblies of molecules, cells, and organs interact to carry out the functions of living organisms",
      "weight": "Big idea covering cellular/organismal organization."
    },
    {
      "code": "2A",
      "name": "Assemblies of molecules, cells, and groups of cells within single cellular and multicellular organisms",
      "weight": "Content category under FC2"
    },
    {
      "code": "2B",
      "name": "The structure, growth, physiology, and genetics of prokaryotes and viruses",
      "weight": "Content category under FC2"
    },
    {
      "code": "2C",
      "name": "Processes of cell division, differentiation, and specialization",
      "weight": "Content category under FC2"
    },
    {
      "code": "FC3",
      "name": "Foundational Concept 3: Complex systems of tissues and organs sense the internal and external environments of multicellular organisms, and through integrated functioning, maintain a stable internal environment within an ever-changing external environment",
      "weight": "Big idea covering homeostasis and organ systems."
    },
    {
      "code": "3A",
      "name": "Structure and functions of the nervous and endocrine systems and ways in which these systems coordinate the organ systems",
      "weight": "Content category under FC3"
    },
    {
      "code": "3B",
      "name": "Structure and integrative functions of the main organ systems",
      "weight": "Content category under FC3"
    }
  ],
  "Chemical and Physical Foundations of Biological Systems": [
    {
      "code": "FC4",
      "name": "Foundational Concept 4: Complex living organisms transport materials, sense their environment, process signals, and respond to changes using processes that can be understood in terms of physical principles",
      "weight": "Big idea. ~Physics and general chemistry applied to living systems."
    },
    {
      "code": "4A",
      "name": "Translational motion, forces, work, energy, and equilibrium in living systems",
      "weight": "Content category under FC4"
    },
    {
      "code": "4B",
      "name": "Importance of fluids for the circulation of blood, gas movement, and gas exchange",
      "weight": "Content category under FC4"
    },
    {
      "code": "4C",
      "name": "Electrochemistry and electrical circuits and their elements",
      "weight": "Content category under FC4"
    },
    {
      "code": "4D",
      "name": "How light and sound interact with matter",
      "weight": "Content category under FC4"
    },
    {
      "code": "4E",
      "name": "Atoms, nuclear decay, electronic structure, and atomic chemical behavior",
      "weight": "Content category under FC4"
    },
    {
      "code": "FC5",
      "name": "Foundational Concept 5: The principles that govern chemical interactions and reactions form the basis for a broader understanding of the molecular dynamics of living systems",
      "weight": "Big idea. ~General chemistry, organic chemistry, biochemistry."
    },
    {
      "code": "5A",
      "name": "Unique nature of water and its solutions",
      "weight": "Content category under FC5"
    },
    {
      "code": "5B",
      "name": "Nature of molecules and intermolecular interactions",
      "weight": "Content category under FC5"
    },
    {
      "code": "5C",
      "name": "Separation and purification methods",
      "weight": "Content category under FC5"
    },
    {
      "code": "5D",
      "name": "Structure, function, and reactivity of biologically-relevant molecules",
      "weight": "Content category under FC5"
    },
    {
      "code": "5E",
      "name": "Principles of chemical thermodynamics and kinetics",
      "weight": "Content category under FC5"
    }
  ],
  "Psychological, Social, and Biological Foundations of Behavior": [
    {
      "code": "FC6",
      "name": "Foundational Concept 6: Biological, psychological, and sociocultural factors influence the ways that individuals perceive, think about, and react to the world",
      "weight": "Big idea covering sensation, perception, cognition, emotion."
    },
    {
      "code": "6A",
      "name": "Sensing the environment",
      "weight": "Content category under FC6 (sensation and perception)"
    },
    {
      "code": "6B",
      "name": "Making sense of the environment",
      "weight": "Content category under FC6 (cognition, attention, memory, language)"
    },
    {
      "code": "6C",
      "name": "Responding to the world",
      "weight": "Content category under FC6 (emotion and stress)"
    },
    {
      "code": "FC7",
      "name": "Foundational Concept 7: Biological, psychological, and sociocultural factors influence behavior and behavior change",
      "weight": "Big idea covering determinants of behavior and behavior change."
    },
    {
      "code": "7A",
      "name": "Individual influences on behavior",
      "weight": "Content category under FC7"
    },
    {
      "code": "7B",
      "name": "Social processes that influence human behavior",
      "weight": "Content category under FC7"
    },
    {
      "code": "7C",
      "name": "Attitude and behavior change",
      "weight": "Content category under FC7"
    },
    {
      "code": "FC8",
      "name": "Foundational Concept 8: Psychological, sociocultural, and biological factors influence the way we think about ourselves and others, as well as how we interact with others",
      "weight": "Big idea covering self and social cognition."
    },
    {
      "code": "8A",
      "name": "Self-identity",
      "weight": "Content category under FC8"
    },
    {
      "code": "8B",
      "name": "Social thinking",
      "weight": "Content category under FC8"
    },
    {
      "code": "8C",
      "name": "Social interactions",
      "weight": "Content category under FC8"
    },
    {
      "code": "FC9",
      "name": "Foundational Concept 9: Cultural and social differences influence well-being",
      "weight": "Big idea covering social structure and demographics."
    },
    {
      "code": "9A",
      "name": "Understanding social structure",
      "weight": "Content category under FC9"
    },
    {
      "code": "9B",
      "name": "Demographic characteristics and processes",
      "weight": "Content category under FC9"
    },
    {
      "code": "FC10",
      "name": "Foundational Concept 10: Social stratification and access to resources influence well-being",
      "weight": "Big idea covering social inequality."
    },
    {
      "code": "10A",
      "name": "Social inequality",
      "weight": "Content category under FC10 (the only content category in FC10)"
    }
  ],
  "Critical Analysis and Reasoning Skills (CARS)": [
    {
      "code": "CARS",
      "name": "Critical Analysis and Reasoning Skills",
      "weight": "Fourth MCAT section. NO foundational concepts or content categories. Built from ~9 reading passages drawn from the humanities and social sciences, testing three reasoning-skill types: (1) Foundations of Comprehension, (2) Reasoning Within the Text, (3) Reasoning Beyond the Text. No outside content knowledge is required."
    }
  ],
  "AP Calculus AB": [
    {
      "code": "Unit 1",
      "name": "Limits and Continuity",
      "weight": "10-12%"
    },
    {
      "code": "Unit 2",
      "name": "Differentiation: Definition and Fundamental Properties",
      "weight": "10-12%"
    },
    {
      "code": "Unit 3",
      "name": "Differentiation: Composite, Implicit, and Inverse Functions",
      "weight": "9-13%"
    },
    {
      "code": "Unit 4",
      "name": "Contextual Applications of Differentiation",
      "weight": "10-15%"
    },
    {
      "code": "Unit 5",
      "name": "Analytical Applications of Differentiation",
      "weight": "15-18%"
    },
    {
      "code": "Unit 6",
      "name": "Integration and Accumulation of Change",
      "weight": "17-20%"
    },
    {
      "code": "Unit 7",
      "name": "Differential Equations",
      "weight": "6-12%"
    },
    {
      "code": "Unit 8",
      "name": "Applications of Integration",
      "weight": "10-15%"
    }
  ],
  "AP Calculus BC": [
    {
      "code": "Unit 1",
      "name": "Limits and Continuity",
      "weight": "4-7%"
    },
    {
      "code": "Unit 2",
      "name": "Differentiation: Definition and Fundamental Properties",
      "weight": "4-7%"
    },
    {
      "code": "Unit 3",
      "name": "Differentiation: Composite, Implicit, and Inverse Functions",
      "weight": "4-7%"
    },
    {
      "code": "Unit 4",
      "name": "Contextual Applications of Differentiation",
      "weight": "6-9%"
    },
    {
      "code": "Unit 5",
      "name": "Analytical Applications of Differentiation",
      "weight": "8-11%"
    },
    {
      "code": "Unit 6",
      "name": "Integration and Accumulation of Change",
      "weight": "17-20%"
    },
    {
      "code": "Unit 7",
      "name": "Differential Equations",
      "weight": "6-9%"
    },
    {
      "code": "Unit 8",
      "name": "Applications of Integration",
      "weight": "6-9%"
    },
    {
      "code": "Unit 9",
      "name": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
      "weight": "11-12%"
    },
    {
      "code": "Unit 10",
      "name": "Infinite Sequences and Series",
      "weight": "17-18%"
    }
  ],
  "AP Statistics": [
    {
      "code": "Unit 1",
      "name": "Exploring One-Variable Data",
      "weight": "15-23%"
    },
    {
      "code": "Unit 2",
      "name": "Exploring Two-Variable Data",
      "weight": "5-7%"
    },
    {
      "code": "Unit 3",
      "name": "Collecting Data",
      "weight": "12-15%"
    },
    {
      "code": "Unit 4",
      "name": "Probability, Random Variables, and Probability Distributions",
      "weight": "10-20%"
    },
    {
      "code": "Unit 5",
      "name": "Sampling Distributions",
      "weight": "7-12%"
    },
    {
      "code": "Unit 6",
      "name": "Inference for Categorical Data: Proportions",
      "weight": "12-15%"
    },
    {
      "code": "Unit 7",
      "name": "Inference for Quantitative Data: Means",
      "weight": "10-18%"
    },
    {
      "code": "Unit 8",
      "name": "Inference for Categorical Data: Chi-Square",
      "weight": "2-5%"
    },
    {
      "code": "Unit 9",
      "name": "Inference for Quantitative Data: Slopes",
      "weight": "2-5%"
    }
  ],
  "AP Precalculus": [
    {
      "code": "Unit 1",
      "name": "Polynomial and Rational Functions",
      "weight": "30-40% of MC; assessed on exam"
    },
    {
      "code": "Unit 2",
      "name": "Exponential and Logarithmic Functions",
      "weight": "27-40% of MC; assessed on exam"
    },
    {
      "code": "Unit 3",
      "name": "Trigonometric and Polar Functions",
      "weight": "30-35% of MC; assessed on exam"
    },
    {
      "code": "Unit 4",
      "name": "Functions Involving Parameters, Vectors, and Matrices",
      "weight": "Not assessed on the AP Exam"
    }
  ],
  "AP Biology": [
    {
      "code": "Unit 1",
      "name": "Chemistry of Life",
      "weight": "8-11%"
    },
    {
      "code": "Unit 2",
      "name": "Cell Structure and Function",
      "weight": "10-13%"
    },
    {
      "code": "Unit 3",
      "name": "Cellular Energetics",
      "weight": "12-16%"
    },
    {
      "code": "Unit 4",
      "name": "Cell Communication and Cell Cycle",
      "weight": "10-15%"
    },
    {
      "code": "Unit 5",
      "name": "Heredity",
      "weight": "8-11%"
    },
    {
      "code": "Unit 6",
      "name": "Gene Expression and Regulation",
      "weight": "12-16%"
    },
    {
      "code": "Unit 7",
      "name": "Natural Selection",
      "weight": "13-20%"
    },
    {
      "code": "Unit 8",
      "name": "Ecology",
      "weight": "10-15%"
    }
  ],
  "AP Chemistry": [
    {
      "code": "Unit 1",
      "name": "Atomic Structure and Properties",
      "weight": "7-9%"
    },
    {
      "code": "Unit 2",
      "name": "Compound Structure and Properties",
      "weight": "7-9%"
    },
    {
      "code": "Unit 3",
      "name": "Properties of Substances and Mixtures",
      "weight": "18-22%"
    },
    {
      "code": "Unit 4",
      "name": "Chemical Reactions",
      "weight": "7-9%"
    },
    {
      "code": "Unit 5",
      "name": "Kinetics",
      "weight": "7-9%"
    },
    {
      "code": "Unit 6",
      "name": "Thermodynamics",
      "weight": "7-9%"
    },
    {
      "code": "Unit 7",
      "name": "Equilibrium",
      "weight": "7-9%"
    },
    {
      "code": "Unit 8",
      "name": "Acids and Bases",
      "weight": "11-15%"
    },
    {
      "code": "Unit 9",
      "name": "Applications of Thermodynamics",
      "weight": "7-9%"
    }
  ],
  "AP Physics 1: Algebra-Based": [
    {
      "code": "Unit 1",
      "name": "Kinematics",
      "weight": "10-15%"
    },
    {
      "code": "Unit 2",
      "name": "Force and Translational Dynamics",
      "weight": "18-23%"
    },
    {
      "code": "Unit 3",
      "name": "Work, Energy, and Power",
      "weight": "18-23%"
    },
    {
      "code": "Unit 4",
      "name": "Linear Momentum",
      "weight": "10-15%"
    },
    {
      "code": "Unit 5",
      "name": "Torque and Rotational Dynamics",
      "weight": "10-15%"
    },
    {
      "code": "Unit 6",
      "name": "Energy and Momentum of Rotating Systems",
      "weight": "5-8%"
    },
    {
      "code": "Unit 7",
      "name": "Oscillations",
      "weight": "5-8%"
    },
    {
      "code": "Unit 8",
      "name": "Fluids",
      "weight": "10-15%; added effective 2024-25, moved from AP Physics 2"
    }
  ],
  "AP Physics 2: Algebra-Based": [
    {
      "code": "Unit 9",
      "name": "Thermodynamics",
      "weight": "15-18%; units numbered sequentially after Physics 1, effective 2024-25"
    },
    {
      "code": "Unit 10",
      "name": "Electric Force, Field, and Potential",
      "weight": "15-18%"
    },
    {
      "code": "Unit 11",
      "name": "Electric Circuits",
      "weight": "15-18%"
    },
    {
      "code": "Unit 12",
      "name": "Magnetism and Electromagnetism",
      "weight": "12-15%"
    },
    {
      "code": "Unit 13",
      "name": "Geometric Optics",
      "weight": "12-15%"
    },
    {
      "code": "Unit 14",
      "name": "Waves, Sound, and Physical Optics",
      "weight": "12-15%"
    },
    {
      "code": "Unit 15",
      "name": "Modern Physics",
      "weight": "12-15%"
    }
  ],
  "AP Physics C: Mechanics": [
    {
      "code": "Unit 1",
      "name": "Kinematics",
      "weight": "10-15%; effective fall 2024"
    },
    {
      "code": "Unit 2",
      "name": "Force and Translational Dynamics",
      "weight": "20-25%"
    },
    {
      "code": "Unit 3",
      "name": "Work, Energy, and Power",
      "weight": "15-25%"
    },
    {
      "code": "Unit 4",
      "name": "Linear Momentum",
      "weight": "10-20%"
    },
    {
      "code": "Unit 5",
      "name": "Torque and Rotational Dynamics",
      "weight": "10-15%"
    },
    {
      "code": "Unit 6",
      "name": "Energy and Momentum of Rotating Systems",
      "weight": "10-15%"
    },
    {
      "code": "Unit 7",
      "name": "Oscillations",
      "weight": "10-15%"
    }
  ],
  "AP Physics C: Electricity and Magnetism": [
    {
      "code": "Unit 8",
      "name": "Electric Charges, Fields, and Gauss's Law",
      "weight": "15-25%; units numbered sequentially after Physics C: Mechanics, effective fall 2024"
    },
    {
      "code": "Unit 9",
      "name": "Electric Potential",
      "weight": "10-20%"
    },
    {
      "code": "Unit 10",
      "name": "Conductors and Capacitors",
      "weight": "10-15%"
    },
    {
      "code": "Unit 11",
      "name": "Electric Circuits",
      "weight": "15-25%"
    },
    {
      "code": "Unit 12",
      "name": "Magnetic Fields and Electromagnetism",
      "weight": "10-20%"
    },
    {
      "code": "Unit 13",
      "name": "Electromagnetic Induction",
      "weight": "10-20%"
    }
  ],
  "AP Environmental Science": [
    {
      "code": "Unit 1",
      "name": "The Living World: Ecosystems",
      "weight": "6-8%"
    },
    {
      "code": "Unit 2",
      "name": "The Living World: Biodiversity",
      "weight": "6-8%"
    },
    {
      "code": "Unit 3",
      "name": "Populations",
      "weight": "10-15%"
    },
    {
      "code": "Unit 4",
      "name": "Earth Systems and Resources",
      "weight": "10-15%"
    },
    {
      "code": "Unit 5",
      "name": "Land and Water Use",
      "weight": "10-15%"
    },
    {
      "code": "Unit 6",
      "name": "Energy Resources and Consumption",
      "weight": "10-15%"
    },
    {
      "code": "Unit 7",
      "name": "Atmospheric Pollution",
      "weight": "7-10%"
    },
    {
      "code": "Unit 8",
      "name": "Aquatic and Terrestrial Pollution",
      "weight": "7-10%"
    },
    {
      "code": "Unit 9",
      "name": "Global Change",
      "weight": "15-20%"
    }
  ],
  "AP Computer Science A": [
    {
      "code": "Unit 1",
      "name": "Using Objects and Methods",
      "weight": "15-25%; new 4-unit framework effective fall 2025"
    },
    {
      "code": "Unit 2",
      "name": "Selection and Iteration",
      "weight": "25-35%"
    },
    {
      "code": "Unit 3",
      "name": "Class Creation",
      "weight": "10-18%"
    },
    {
      "code": "Unit 4",
      "name": "Data Collections",
      "weight": "30-40%"
    }
  ],
  "AP Computer Science Principles": [
    {
      "code": "Big Idea 1",
      "name": "Creative Development",
      "weight": "10-13% of MC exam"
    },
    {
      "code": "Big Idea 2",
      "name": "Data",
      "weight": "17-22% of MC exam"
    },
    {
      "code": "Big Idea 3",
      "name": "Algorithms and Programming",
      "weight": "30-35% of MC exam"
    },
    {
      "code": "Big Idea 4",
      "name": "Computer Systems and Networks",
      "weight": "11-15% of MC exam"
    },
    {
      "code": "Big Idea 5",
      "name": "Impact of Computing",
      "weight": "21-26% of MC exam"
    }
  ],
  "AP United States History": [
    {
      "code": "APUSH-U1",
      "name": "Unit 1: Period 1, 1491–1607 (Contact & Exploration)",
      "weight": "4–6%"
    },
    {
      "code": "APUSH-U2",
      "name": "Unit 2: Period 2, 1607–1754 (Colonial America)",
      "weight": "6–8%"
    },
    {
      "code": "APUSH-U3",
      "name": "Unit 3: Period 3, 1754–1800 (Revolution & New Republic)",
      "weight": "10–17%"
    },
    {
      "code": "APUSH-U4",
      "name": "Unit 4: Period 4, 1800–1848 (Early Republic & Democracy)",
      "weight": "10–17%"
    },
    {
      "code": "APUSH-U5",
      "name": "Unit 5: Period 5, 1844–1877 (Civil War & Reconstruction)",
      "weight": "10–17%"
    },
    {
      "code": "APUSH-U6",
      "name": "Unit 6: Period 6, 1865–1898 (Industrialization & Gilded Age)",
      "weight": "10–17%"
    },
    {
      "code": "APUSH-U7",
      "name": "Unit 7: Period 7, 1890–1945 (Progressivism, WWI, Depression, WWII)",
      "weight": "10–17%"
    },
    {
      "code": "APUSH-U8",
      "name": "Unit 8: Period 8, 1945–1980 (Cold War & Postwar)",
      "weight": "10–17%"
    },
    {
      "code": "APUSH-U9",
      "name": "Unit 9: Period 9, 1980–Present (Contemporary US)",
      "weight": "4–6%"
    }
  ],
  "AP World History: Modern": [
    {
      "code": "APWHM-U1",
      "name": "Unit 1: The Global Tapestry (c. 1200–c. 1450)",
      "weight": "8–10%"
    },
    {
      "code": "APWHM-U2",
      "name": "Unit 2: Networks of Exchange (c. 1200–c. 1450)",
      "weight": "8–10%"
    },
    {
      "code": "APWHM-U3",
      "name": "Unit 3: Land-Based Empires (c. 1450–c. 1750)",
      "weight": "12–15%"
    },
    {
      "code": "APWHM-U4",
      "name": "Unit 4: Transoceanic Interconnections (c. 1450–c. 1750)",
      "weight": "12–15%"
    },
    {
      "code": "APWHM-U5",
      "name": "Unit 5: Revolutions (c. 1750–c. 1900)",
      "weight": "12–15%"
    },
    {
      "code": "APWHM-U6",
      "name": "Unit 6: Consequences of Industrialization (c. 1750–c. 1900)",
      "weight": "12–15%"
    },
    {
      "code": "APWHM-U7",
      "name": "Unit 7: Global Conflict (c. 1900–present)",
      "weight": "8–10%"
    },
    {
      "code": "APWHM-U8",
      "name": "Unit 8: Cold War and Decolonization (c. 1900–present)",
      "weight": "8–10%"
    },
    {
      "code": "APWHM-U9",
      "name": "Unit 9: Globalization (c. 1900–present)",
      "weight": "8–10%"
    }
  ],
  "AP United States Government and Politics": [
    {
      "code": "APGOV-U1",
      "name": "Unit 1: Foundations of American Democracy",
      "weight": "15–22%"
    },
    {
      "code": "APGOV-U2",
      "name": "Unit 2: Interactions Among Branches of Government",
      "weight": "25–36%"
    },
    {
      "code": "APGOV-U3",
      "name": "Unit 3: Civil Liberties and Civil Rights",
      "weight": "13–18%"
    },
    {
      "code": "APGOV-U4",
      "name": "Unit 4: American Political Ideologies and Beliefs",
      "weight": "10–15%"
    },
    {
      "code": "APGOV-U5",
      "name": "Unit 5: Political Participation",
      "weight": "20–27%"
    }
  ],
  "AP Psychology": [
    {
      "code": "APPSY-U1",
      "name": "Unit 1: Biological Bases of Behavior",
      "weight": "15–25% (revised 5-unit framework, first administered May 2025; aligned to APA Intro Psych Initiative)"
    },
    {
      "code": "APPSY-U2",
      "name": "Unit 2: Cognition",
      "weight": "15–25%"
    },
    {
      "code": "APPSY-U3",
      "name": "Unit 3: Development and Learning",
      "weight": "15–25%"
    },
    {
      "code": "APPSY-U4",
      "name": "Unit 4: Social Psychology and Personality",
      "weight": "15–25%"
    },
    {
      "code": "APPSY-U5",
      "name": "Unit 5: Mental and Physical Health",
      "weight": "15–25%"
    }
  ],
  "AP Human Geography": [
    {
      "code": "APHUG-U1",
      "name": "Unit 1: Thinking Geographically",
      "weight": "8–10%"
    },
    {
      "code": "APHUG-U2",
      "name": "Unit 2: Population and Migration Patterns and Processes",
      "weight": "12–17%"
    },
    {
      "code": "APHUG-U3",
      "name": "Unit 3: Cultural Patterns and Processes",
      "weight": "12–17%"
    },
    {
      "code": "APHUG-U4",
      "name": "Unit 4: Political Patterns and Processes",
      "weight": "12–17%"
    },
    {
      "code": "APHUG-U5",
      "name": "Unit 5: Agriculture and Rural Land-Use Patterns and Processes",
      "weight": "12–17%"
    },
    {
      "code": "APHUG-U6",
      "name": "Unit 6: Cities and Urban Land-Use Patterns and Processes",
      "weight": "12–17%"
    },
    {
      "code": "APHUG-U7",
      "name": "Unit 7: Industrial and Economic Development Patterns and Processes",
      "weight": "12–17%"
    }
  ],
  "AP Macroeconomics": [
    {
      "code": "APMACRO-U1",
      "name": "Unit 1: Basic Economic Concepts",
      "weight": "5–10%"
    },
    {
      "code": "APMACRO-U2",
      "name": "Unit 2: Economic Indicators and the Business Cycle",
      "weight": "12–17%"
    },
    {
      "code": "APMACRO-U3",
      "name": "Unit 3: National Income and Price Determination",
      "weight": "17–27%"
    },
    {
      "code": "APMACRO-U4",
      "name": "Unit 4: Financial Sector",
      "weight": "18–23%"
    },
    {
      "code": "APMACRO-U5",
      "name": "Unit 5: Long-Run Consequences of Stabilization Policies",
      "weight": "20–30%"
    },
    {
      "code": "APMACRO-U6",
      "name": "Unit 6: Open Economy—International Trade and Finance",
      "weight": "10–13%"
    }
  ],
  "AP Microeconomics": [
    {
      "code": "APMICRO-U1",
      "name": "Unit 1: Basic Economic Concepts",
      "weight": "12–15%"
    },
    {
      "code": "APMICRO-U2",
      "name": "Unit 2: Supply and Demand",
      "weight": "20–25%"
    },
    {
      "code": "APMICRO-U3",
      "name": "Unit 3: Production, Cost, and the Perfect Competition Model",
      "weight": "22–25%"
    },
    {
      "code": "APMICRO-U4",
      "name": "Unit 4: Imperfect Competition",
      "weight": "15–22%"
    },
    {
      "code": "APMICRO-U5",
      "name": "Unit 5: Factor Markets",
      "weight": "10–13%"
    },
    {
      "code": "APMICRO-U6",
      "name": "Unit 6: Market Failure and the Role of Government",
      "weight": "8–13%"
    }
  ],
  "AP English Language and Composition": [
    {
      "code": "APLANG-BI1",
      "name": "Big Idea: Rhetorical Situation (RHS)",
      "weight": "Organized by Big Ideas/skill categories, not weighted content units. Skills built across 9 instructional units; rhetorical-situation skills relate to exigence, audience, purpose, context, message."
    },
    {
      "code": "APLANG-BI2",
      "name": "Big Idea: Claims and Evidence (CLE)",
      "weight": "Thesis/claims, supporting evidence, commentary."
    },
    {
      "code": "APLANG-BI3",
      "name": "Big Idea: Reasoning and Organization (REO)",
      "weight": "Line of reasoning, organization, transitions; ~ shares MCQ with style."
    },
    {
      "code": "APLANG-BI4",
      "name": "Big Idea: Style (STL)",
      "weight": "Word choice, syntax, tone, figurative language; style/language ~25–35% of MCQ."
    }
  ],
  "AP English Literature and Composition": [
    {
      "code": "APLIT-BI-CHR",
      "name": "Big Idea: Character (CHR)",
      "weight": "Framework organized by 6 Big Ideas + 7 course skill categories; 9 genre-based instructional units (short fiction, poetry, longer fiction/drama), not weighted content units."
    },
    {
      "code": "APLIT-BI-SET",
      "name": "Big Idea: Setting (SET)"
    },
    {
      "code": "APLIT-BI-STR",
      "name": "Big Idea: Structure (STR)",
      "weight": "Plot and structure."
    },
    {
      "code": "APLIT-BI-NAR",
      "name": "Big Idea: Narration (NAR)",
      "weight": "Narrator/speaker and point of view."
    },
    {
      "code": "APLIT-BI-FIG",
      "name": "Big Idea: Figurative Language (FIG)",
      "weight": "Word choice, imagery, symbol, comparison."
    },
    {
      "code": "APLIT-BI-LAN",
      "name": "Big Idea: Literary Argumentation (LAN)",
      "weight": "Developing and supporting an interpretation (essays)."
    }
  ],
  "AP African American Studies": [
    {
      "code": "APAAS-U1",
      "name": "Unit 1: Origins of the African Diaspora",
      "weight": "~20–25% (approx.; exam = MCQ + FRQ 30% + Individual Student Project ~8.5%)"
    },
    {
      "code": "APAAS-U2",
      "name": "Unit 2: Freedom, Enslavement, and Resistance",
      "weight": "~30–35% (heaviest unit)"
    },
    {
      "code": "APAAS-U3",
      "name": "Unit 3: The Practice of Freedom",
      "weight": "~20–25%"
    },
    {
      "code": "APAAS-U4",
      "name": "Unit 4: Movements and Debates",
      "weight": "~20–25%"
    }
  ]
}

const norm = (s: string) => (s || '').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').replace(/\b(unit|the|of|to|in|a|an)\b/g,' ').replace(/\s+/g,' ').trim()

// Best-effort match of an app (courseName, categoryName) to an official standard,
// for decorating the standards-mastery view with the unit code + exam weighting.
export function findStandard(courseName: string, categoryName: string): StandardEntry | null {
  const ck = norm(courseName)
  let stds: StandardEntry[] | undefined
  for (const [course, list] of Object.entries(STANDARDS_BY_COURSE)) {
    const nk = norm(course)
    if (nk === ck || nk.includes(ck) || ck.includes(nk)) { stds = list; break }
  }
  if (!stds) return null
  const cat = norm(categoryName)
  if (!cat) return null
  return stds.find((s) => { const sn = norm(s.name); return sn === cat || sn.includes(cat) || cat.includes(sn) }) || null
}
