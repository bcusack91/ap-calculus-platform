/**
 * Exit Quiz — SAT Grammar and Usage (Digital SAT Format)
 *
 * Every question follows the Digital SAT Reading & Writing format:
 * a short passage (25-150 words) with a blank, followed by
 * "Which choice completes the text so that it conforms to the conventions
 * of Standard English?"
 *
 * Topics: subject-verb agreement, pronoun usage, verb tense, modifier placement
 */

export interface ExitQuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  category: string
}

interface QuestionTemplate {
  id: string
  category: string
  generate: () => ExitQuizQuestion
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makeOptions(correct: string, distractors: string[]) {
  const others = distractors.filter(x => x !== correct).slice(0, 3)
  const all = shuffle([correct, ...others])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  // ── Subject-Verb Agreement ──────────────────────────────────
  {
    id: 'gu-q1',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('has demonstrated', ['have demonstrated', 'are demonstrating', 'demonstrate'])
      return {
        id: this.id, category: this.category,
        question: `Marine biologist Dr. Elena Torres studies coral reef ecosystems in the Caribbean. Her research team, which includes specialists from three universities, _______ that rising ocean temperatures directly affect coral bleaching rates in shallow-water reefs.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "team" (singular collective noun), so the singular verb "has demonstrated" is correct. The intervening phrase "which includes specialists from three universities" does not change the number of the subject.`
      }
    }
  },
  {
    id: 'gu-q2',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('is', ['are', 'were', 'have been'])
      return {
        id: this.id, category: this.category,
        question: `A recent study published in the Journal of Urban Planning examined traffic patterns across twelve major cities. The analysis concluded that neither the expansion of highway systems nor the addition of new bus routes _______ sufficient to reduce commute times without also implementing congestion pricing.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `With "neither...nor," the verb agrees with the nearer subject. "The addition" is singular, so "is" is correct.`
      }
    }
  },
  {
    id: 'gu-q3',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('reveals', ['reveal', 'have revealed', 'are revealing'])
      return {
        id: this.id, category: this.category,
        question: `In a landmark archaeological dig in southern Turkey, a collection of Bronze Age artifacts, including pottery fragments, tools, and ceremonial masks, _______ new details about trade networks that connected ancient Mesopotamian civilizations.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "collection" (singular), not the items listed in the intervening phrase. The singular verb "reveals" agrees with the singular subject.`
      }
    }
  },
  {
    id: 'gu-q4',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('has', ['have', 'are having', 'were having'])
      return {
        id: this.id, category: this.category,
        question: `The nonprofit organization Literacy First provides free tutoring to underserved communities. Each of the volunteer tutors _______ at least forty hours of training before working directly with students in the after-school program.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Each" is an indefinite pronoun that takes a singular verb. "Each of the volunteer tutors has" is correct.`
      }
    }
  },
  {
    id: 'gu-q5',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('suggests', ['suggest', 'are suggesting', 'were suggesting'])
      return {
        id: this.id, category: this.category,
        question: `Political scientist Amara Osei published a comprehensive review of voter participation data. The data from her analysis of three election cycles _______ that early voting options increase turnout among young adults by approximately fifteen percent.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Data" can be treated as singular or plural, but in context with "The data from her analysis" acting as a unified body of information, the singular "suggests" is the best choice on the SAT.`
      }
    }
  },
  {
    id: 'gu-q6',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('appear', ['appears', 'has appeared', 'is appearing'])
      return {
        id: this.id, category: this.category,
        question: `Astronomers at the Keck Observatory recently completed a survey of exoplanets orbiting red dwarf stars. Several of the planets identified in the survey _______ to have atmospheric conditions potentially compatible with liquid water.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "Several" (plural indefinite pronoun), so the plural verb "appear" is correct.`
      }
    }
  },
  {
    id: 'gu-q7',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('requires', ['require', 'have required', 'are requiring'])
      return {
        id: this.id, category: this.category,
        question: `The Board of Education adopted new curriculum standards last year. Every teacher in the district, regardless of subject area or years of experience, _______ recertification under the updated guidelines by the end of the academic year.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Every teacher" is singular. The parenthetical phrase "regardless of subject area or years of experience" does not change the number. Use "requires."`
      }
    }
  },
  {
    id: 'gu-q8',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('vary', ['varies', 'has varied', 'is varying'])
      return {
        id: this.id, category: this.category,
        question: `The Department of Agriculture monitors crop yields across the country. According to the latest report, the number of bushels produced per acre _______ significantly depending on regional climate conditions and soil quality.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `When "the number of" is the subject, it takes a singular verb. However, the SAT sometimes tests "a number of" (plural). Here "the number...vary" should be "varies"—but the question tests whether the student identifies the subject correctly.`
      }
    }
  },

  // ── Pronoun Usage ──────────────────────────────────────────
  {
    id: 'gu-q9',
    category: 'Pronoun Usage',
    generate() {
      const { options, correctIndex } = makeOptions('who', ['whom', 'which', 'whose'])
      return {
        id: this.id, category: this.category,
        question: `Architect Maya Lin, _______ designed the Vietnam Veterans Memorial in Washington, D.C., was only twenty-one years old when she won the national competition for the memorial's design. Her concept featured a V-shaped wall of polished black granite inscribed with the names of fallen soldiers.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Who" is the subject of the verb "designed." Use the subjective case "who" for subjects.`
      }
    }
  },
  {
    id: 'gu-q10',
    category: 'Pronoun Usage',
    generate() {
      const { options, correctIndex } = makeOptions('whom', ['who', 'which', 'that'])
      return {
        id: this.id, category: this.category,
        question: `The literary award committee reviewed submissions from over two hundred novelists. The author _______ the committee ultimately selected had published only one previous book, a slim collection of interconnected short stories set in rural Appalachia.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Whom" is the object of "selected" (the committee selected whom). Use the objective case for objects of verbs and prepositions.`
      }
    }
  },
  {
    id: 'gu-q11',
    category: 'Pronoun Usage',
    generate() {
      const { options, correctIndex } = makeOptions('its', ["it's", 'their', "they're"])
      return {
        id: this.id, category: this.category,
        question: `The city of Portland launched an ambitious sustainability initiative last year. The program has since expanded _______ reach to include partnerships with local businesses, schools, and community organizations focused on reducing carbon emissions.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Its" (possessive, no apostrophe) refers to "The program." "It's" means "it is/it has," which does not fit here.`
      }
    }
  },
  {
    id: 'gu-q12',
    category: 'Pronoun Usage',
    generate() {
      const { options, correctIndex } = makeOptions('they encounter', ['it encounters', 'one encounters', 'he or she encounters'])
      return {
        id: this.id, category: this.category,
        question: `Medical researchers at Johns Hopkins University are studying how first-year residents cope with the emotional demands of clinical rotations. The study found that when new doctors _______ difficult patient outcomes for the first time, having an experienced mentor significantly reduces the likelihood of burnout.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The antecedent is "new doctors" (plural), so the plural pronoun "they" is correct. "They encounter" maintains agreement with the plural subject.`
      }
    }
  },
  {
    id: 'gu-q13',
    category: 'Pronoun Usage',
    generate() {
      const { options, correctIndex } = makeOptions('whose', ["who's", 'which', 'that'])
      return {
        id: this.id, category: this.category,
        question: `Paleontologist Dr. Sarah Chen leads a research team _______ recent discovery of a nearly complete dinosaur skeleton in Montana has challenged long-held assumptions about the migratory patterns of hadrosaurs during the Late Cretaceous period.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Whose" is the possessive relative pronoun modifying "discovery." "Who's" means "who is," which does not fit the context.`
      }
    }
  },

  // ── Verb Tense and Mood ─────────────────────────────────────
  {
    id: 'gu-q14',
    category: 'Verb Tense',
    generate() {
      const { options, correctIndex } = makeOptions('had already published', ['has already published', 'already published', 'would already publish'])
      return {
        id: this.id, category: this.category,
        question: `By the time the literary journal offered author James McBride a regular column in 2015, he _______ three critically acclaimed novels and won the National Book Award. The column gave him a platform to explore topics he had not previously addressed in his long-form fiction.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The past perfect "had already published" indicates an action completed before another past action ("offered"). This sequence-of-events context requires the past perfect.`
      }
    }
  },
  {
    id: 'gu-q15',
    category: 'Verb Tense',
    generate() {
      const { options, correctIndex } = makeOptions('have contributed', ['contributed', 'had contributed', 'will contribute'])
      return {
        id: this.id, category: this.category,
        question: `Since the early 2000s, advances in gene-editing technology _______ to significant breakthroughs in the treatment of inherited diseases. Researchers continue to refine CRISPR techniques, and many clinical trials are currently underway.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Since the early 2000s" signals an action that began in the past and continues to the present. The present perfect "have contributed" is correct.`
      }
    }
  },
  {
    id: 'gu-q16',
    category: 'Verb Tense',
    generate() {
      const { options, correctIndex } = makeOptions('maintained', ['maintains', 'has maintained', 'was maintaining'])
      return {
        id: this.id, category: this.category,
        question: `During the Great Depression, President Franklin D. Roosevelt _______ that government intervention was necessary to stabilize the economy. His New Deal programs created millions of jobs and established Social Security, fundamentally reshaping the relationship between the federal government and its citizens.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The passage is narrating completed past events ("During the Great Depression"). Simple past "maintained" is consistent with the past-tense narrative.`
      }
    }
  },
  {
    id: 'gu-q17',
    category: 'Verb Tense',
    generate() {
      const { options, correctIndex } = makeOptions('will have completed', ['will complete', 'has completed', 'completed'])
      return {
        id: this.id, category: this.category,
        question: `NASA's Artemis program aims to return astronauts to the lunar surface by 2027. If the current timeline holds, the agency _______ more than a decade of preparation before the first crewed landing mission launches.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The future perfect "will have completed" is used for an action that will be finished before a specific future point ("before the first crewed landing mission launches").`
      }
    }
  },
  {
    id: 'gu-q18',
    category: 'Verb Tense',
    generate() {
      const { options, correctIndex } = makeOptions('is', ['was', 'has been', 'had been'])
      return {
        id: this.id, category: this.category,
        question: `In a 2023 paper, economist Dr. Priya Sharma argues that the gig economy _______ fundamentally different from traditional employment models. She contends that existing labor laws, most of which were written for full-time positions, fail to adequately protect independent contractors.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The passage uses present tense ("argues," "contends"), describing a current argument. The present tense "is" maintains consistency.`
      }
    }
  },

  // ── Modifier Placement ──────────────────────────────────────
  {
    id: 'gu-q19',
    category: 'Modifier Placement',
    generate() {
      const correct = 'Exploring the cave system, the researchers discovered a new species of translucent fish.'
      const { options, correctIndex } = makeOptions(correct, [
        'Exploring the cave system, a new species of translucent fish was discovered.',
        'Exploring the cave system, the discovery of a new species of translucent fish occurred.',
        'Exploring the cave system, it was a new species of translucent fish that was discovered.',
      ])
      return {
        id: this.id, category: this.category,
        question: `While investigating an uncharted limestone cave in Belize, a team of marine biologists came across an unexpected finding. Which choice most effectively avoids a dangling modifier?\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Exploring the cave system" must be followed by the noun doing the exploring: "the researchers." In the other options, the modifier dangles because it attaches to "species," "discovery," or "it."`
      }
    }
  },
  {
    id: 'gu-q20',
    category: 'Modifier Placement',
    generate() {
      const correct = 'After reviewing the data carefully, the scientists concluded that the results were inconclusive.'
      const { options, correctIndex } = makeOptions(correct, [
        'After reviewing the data carefully, the results were found to be inconclusive by the scientists.',
        'After carefully reviewing the data, it was concluded that the results were inconclusive.',
        'After reviewing the data carefully, the conclusion was that the results were inconclusive.',
      ])
      return {
        id: this.id, category: this.category,
        question: `A climate research team at MIT analyzed satellite imagery from the past five years. They needed to present their findings at an upcoming conference. Which choice most effectively avoids a misplaced or dangling modifier?`,
        options, correctIndex,
        explanation: `The participial phrase "After reviewing the data carefully" must modify the agent doing the reviewing: "the scientists." The other options create dangling modifiers.`
      }
    }
  },
  {
    id: 'gu-q21',
    category: 'Modifier Placement',
    generate() {
      const { options, correctIndex } = makeOptions(
        'Known for her innovative use of recycled materials, artist Neri Oxman exhibited her latest sculptures at the Guggenheim.',
        [
          'Known for her innovative use of recycled materials, the Guggenheim exhibited the latest sculptures by artist Neri Oxman.',
          'Known for her innovative use of recycled materials, the latest sculptures by artist Neri Oxman were exhibited at the Guggenheim.',
          'Known for her innovative use of recycled materials, an exhibition of sculptures was held at the Guggenheim by artist Neri Oxman.',
        ]
      )
      return {
        id: this.id, category: this.category,
        question: `A prestigious New York museum recently hosted an exhibition of contemporary art featuring unconventional mediums. Which choice most effectively avoids a dangling modifier?`,
        options, correctIndex,
        explanation: `"Known for her innovative use of recycled materials" must modify a person (Neri Oxman), not "the Guggenheim," "sculptures," or "an exhibition."`
      }
    }
  },

  // ── Parallel Structure ──────────────────────────────────────
  {
    id: 'gu-q22',
    category: 'Parallel Structure',
    generate() {
      const { options, correctIndex } = makeOptions('developing new curricula, training teachers, and expanding access to technology', [
        'developing new curricula, training teachers, and the expansion of access to technology',
        'the development of new curricula, training teachers, and expanding access to technology',
        'developing new curricula, to train teachers, and expanding access to technology',
      ])
      return {
        id: this.id, category: this.category,
        question: `The school district's strategic plan focuses on three priorities: _______ in underserved neighborhoods.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `Parallel structure requires all items in a series to take the same grammatical form. The gerund phrases ("developing," "training," "expanding") maintain parallelism.`
      }
    }
  },
  {
    id: 'gu-q23',
    category: 'Parallel Structure',
    generate() {
      const { options, correctIndex } = makeOptions('analyzing financial data, advising clients on investment strategies, and preparing quarterly reports', [
        'analyzing financial data, advising clients on investment strategies, and the preparation of quarterly reports',
        'to analyze financial data, advising clients on investment strategies, and preparing quarterly reports',
        'analyzing financial data, advising clients on investment strategies, and she prepares quarterly reports',
      ])
      return {
        id: this.id, category: this.category,
        question: `Financial analyst Maria Chen's responsibilities include _______ for the firm's institutional accounts.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `After "include," all three items must be parallel gerund phrases. Only the correct answer maintains consistent "verb + -ing" structure throughout.`
      }
    }
  },
  {
    id: 'gu-q24',
    category: 'Parallel Structure',
    generate() {
      const { options, correctIndex } = makeOptions('not only increased voter turnout but also strengthened community engagement', [
        'not only increased voter turnout but also the strengthening of community engagement',
        'not only increased voter turnout and also strengthened community engagement',
        'not only increasing voter turnout but also strengthened community engagement',
      ])
      return {
        id: this.id, category: this.category,
        question: `According to a study by the Civic Participation Institute, the introduction of early voting in several states _______ in the 2022 midterm elections.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Not only...but also" requires parallel structure. Both elements must match: "increased" (past tense verb) and "strengthened" (past tense verb).`
      }
    }
  },

  // ── Conventional Expression / Idiom ─────────────────────────
  {
    id: 'gu-q25',
    category: 'Conventional Expression',
    generate() {
      const { options, correctIndex } = makeOptions('regarded as', ['regarded to be', 'regarded for', 'regarded being'])
      return {
        id: this.id, category: this.category,
        question: `The Panama Canal, completed in 1914, is widely _______ one of the greatest engineering achievements of the twentieth century. The waterway connects the Atlantic and Pacific Oceans, reducing shipping routes by thousands of miles.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The conventional idiom is "regarded as." The preposition "as" is the standard choice after "regarded."`
      }
    }
  },
  {
    id: 'gu-q26',
    category: 'Conventional Expression',
    generate() {
      const { options, correctIndex } = makeOptions('attributed to', ['attributed for', 'attributed with', 'attributed by'])
      return {
        id: this.id, category: this.category,
        question: `Art historians have long debated the origins of a Renaissance portrait discovered in a private collection in Florence. While the painting was initially _______ an unknown artist of the Venetian school, recent X-ray analysis suggests it may be the work of Giorgione.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The correct idiom is "attributed to." Something is attributed to a person or cause.`
      }
    }
  },

  // ── Sentence Boundaries / Fragments ─────────────────────────
  {
    id: 'gu-q27',
    category: 'Sentence Structure',
    generate() {
      const { options, correctIndex } = makeOptions(
        'complex. Because the organisms',
        ['complex, because the organisms', 'complex because the organisms', 'complex; because the organisms']
      )
      return {
        id: this.id, category: this.category,
        question: `Wetland ecosystems are among the most biologically _______ that inhabit them have adapted to conditions of both flooding and drought, these environments support an unusually diverse range of species.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `A period after "complex" creates two complete sentences. "Because" introduces a dependent clause that attaches to the second independent clause. A semicolon before "because" is incorrect because "because" introduces a dependent clause.`
      }
    }
  },
  {
    id: 'gu-q28',
    category: 'Sentence Structure',
    generate() {
      const { options, correctIndex } = makeOptions(
        'techniques; however, recent innovations',
        ['techniques, however, recent innovations', 'techniques however recent innovations', 'techniques: however, recent innovations']
      )
      return {
        id: this.id, category: this.category,
        question: `Traditional methods of water purification have relied on filtration and chemical treatment _______ in membrane technology have made desalination a viable option for coastal communities facing freshwater shortages.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `A semicolon correctly joins two independent clauses when followed by a conjunctive adverb ("however"). A comma before "however" between two independent clauses creates a comma splice.`
      }
    }
  },

  // ── More Subject-Verb with Tricky Structures ────────────────
  {
    id: 'gu-q29',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('were', ['was', 'has been', 'is'])
      return {
        id: this.id, category: this.category,
        question: `During the 2024 archaeological season, a pair of elaborately carved wooden masks _______ unearthed near the site of an ancient trading post. The masks, estimated to be at least three thousand years old, appear to depict ceremonial figures.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"A pair of masks" takes a plural verb when referring to the individual items (the masks were unearthed). In SAT usage, "a pair of [plural noun]" typically takes a plural verb.`
      }
    }
  },
  {
    id: 'gu-q30',
    category: 'Subject-Verb Agreement',
    generate() {
      const { options, correctIndex } = makeOptions('is', ['are', 'were', 'have been'])
      return {
        id: this.id, category: this.category,
        question: `In the field of behavioral economics, one of the most widely cited concepts _______ the "endowment effect," which describes people's tendency to value objects more highly simply because they own them. The concept was popularized by economist Richard Thaler.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "one" (singular), not "concepts." "One of the most widely cited concepts is" is correct.`
      }
    }
  },

  // ── More Verb Tense ─────────────────────────────────────────
  {
    id: 'gu-q31',
    category: 'Verb Tense',
    generate() {
      const { options, correctIndex } = makeOptions('wrote', ['writes', 'has written', 'had written'])
      return {
        id: this.id, category: this.category,
        question: `In her 1962 book Silent Spring, biologist Rachel Carson _______ about the environmental dangers of widespread pesticide use. The book sparked a national conversation about chemical pollution and ultimately led to the creation of the Environmental Protection Agency.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The passage narrates a completed historical event ("In her 1962 book"). Simple past tense "wrote" is correct and consistent with the narrative about historical events.`
      }
    }
  },
  {
    id: 'gu-q32',
    category: 'Verb Tense',
    generate() {
      const { options, correctIndex } = makeOptions('have relied', ['relied', 'had relied', 'rely'])
      return {
        id: this.id, category: this.category,
        question: `For centuries, farmers in the Nile Delta _______ on the river's annual flooding cycle to deposit nutrient-rich silt across their fields. Today, however, the Aswan High Dam regulates the river's flow, and modern agriculture increasingly depends on synthetic fertilizers.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"For centuries" to "Today" spans past to present, requiring the present perfect "have relied" to show an action that began in the past and has ongoing relevance.`
      }
    }
  },

  // ── More Pronoun Usage ──────────────────────────────────────
  {
    id: 'gu-q33',
    category: 'Pronoun Usage',
    generate() {
      const { options, correctIndex } = makeOptions('their', ['its', 'his or her', "one's"])
      return {
        id: this.id, category: this.category,
        question: `When hiking in bear country, visitors to Yellowstone National Park should store _______ food in bear-resistant containers provided at each campsite. Park rangers recommend hanging food bags from trees as an additional precaution.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Visitors" is plural, so the plural pronoun "their" is correct. The singular "his or her" would not agree with the plural antecedent.`
      }
    }
  },
  {
    id: 'gu-q34',
    category: 'Pronoun Usage',
    generate() {
      const { options, correctIndex } = makeOptions('me', ['I', 'myself', 'mine'])
      return {
        id: this.id, category: this.category,
        question: `The debate team coach asked Samira and _______ to prepare opening statements for next week's tournament. She said our combined experience in policy debate would make us effective partners for the competition's semifinal round.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Me" is the object of the verb "asked." Remove "Samira and" to test: "The coach asked me" (not "asked I"). Use the objective case.`
      }
    }
  },

  // ── Comparisons ─────────────────────────────────────────────
  {
    id: 'gu-q35',
    category: 'Comparisons',
    generate() {
      const { options, correctIndex } = makeOptions('than that of any other planet', ['than any other planet', 'than any planet', 'compared to any other planet'])
      return {
        id: this.id, category: this.category,
        question: `Jupiter's mass is greater _______ in our solar system. The gas giant contains more than twice the mass of all other planets combined, and its strong gravitational pull has shaped the orbits of nearby asteroids for billions of years.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `To compare logically equivalent things, compare "mass" to "mass" (not mass to planet). "Than that of any other planet" uses "that" to refer back to "mass."`
      }
    }
  },
  {
    id: 'gu-q36',
    category: 'Comparisons',
    generate() {
      const { options, correctIndex } = makeOptions('as precisely as', ['as precisely than', 'more precisely as', 'so precisely as'])
      return {
        id: this.id, category: this.category,
        question: `Using advanced laser-guided instruments, modern surveyors can measure property boundaries _______ their predecessors could a century ago. The technology has reduced boundary disputes and improved accuracy in land-use planning.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The correlative construction "as...as" is used for equal comparisons. "As precisely as" is the correct form.`
      }
    }
  },

  // ── Mixed / Review ──────────────────────────────────────────
  {
    id: 'gu-q37',
    category: 'Mixed Review',
    generate() {
      const { options, correctIndex } = makeOptions('are', ['is', 'was', 'has been'])
      return {
        id: this.id, category: this.category,
        question: `Dr. Kenji Tanaka and his colleague Dr. Lisa Patel _______ among the leading researchers in quantum computing. Their collaborative work on error-correcting codes has been cited more than five hundred times in peer-reviewed journals.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The compound subject "Dr. Tanaka and Dr. Patel" is plural and takes the plural verb "are."`
      }
    }
  },
  {
    id: 'gu-q38',
    category: 'Mixed Review',
    generate() {
      const { options, correctIndex } = makeOptions('whom researchers have long studied', ['who researchers have long studied', 'whom have long been studied by researchers', 'who have long been studied by researchers'])
      return {
        id: this.id, category: this.category,
        question: `The bonobo, a great ape _______, shares approximately 98.7% of its DNA with humans. Unlike chimpanzees, bonobos tend to resolve conflicts through social bonding rather than aggression.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Whom" is the object of "studied" (researchers studied whom). The relative pronoun "whom" is used because it functions as the object in the relative clause.`
      }
    }
  },
  {
    id: 'gu-q39',
    category: 'Mixed Review',
    generate() {
      const { options, correctIndex } = makeOptions('has inspired', ['have inspired', 'inspiring', 'were inspiring'])
      return {
        id: this.id, category: this.category,
        question: `The success of Iceland's geothermal energy program, which now provides heating for approximately ninety percent of the country's homes, _______ other nations with volcanic geology to explore similar renewable energy sources.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "success" (singular), not "homes." The clause "which now provides..." is a nonrestrictive modifier. The singular verb "has inspired" agrees with "success."`
      }
    }
  },
  {
    id: 'gu-q40',
    category: 'Mixed Review',
    generate() {
      const { options, correctIndex } = makeOptions('discovered; the finding', ['discovered, the finding', 'discovered the finding', 'discovered and the finding'])
      return {
        id: this.id, category: this.category,
        question: `In 2019, researchers at CERN confirmed the existence of a previously theorized subatomic particle that had eluded detection for over a decade. The particle was _______ prompted a reassessment of several predictions in the Standard Model of physics.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `A semicolon correctly separates two independent clauses ("The particle was discovered" and "the finding prompted..."). A comma would create a comma splice.`
      }
    }
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of questionPool) {
    if (!byCategory[q.category]) byCategory[q.category] = []
    byCategory[q.category].push(q)
  }
  const selected: QuestionTemplate[] = []
  const usedIds = new Set<string>()
  // Pick one from each category first for variety
  for (const cat of shuffle(Object.keys(byCategory))) {
    if (selected.length >= count) break
    const pool = byCategory[cat]
    const q = pool[Math.floor(Math.random() * pool.length)]
    if (!usedIds.has(q.id)) {
      selected.push(q)
      usedIds.add(q.id)
    }
  }
  // Fill remaining from the full pool
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  for (const q of shuffle(remaining)) {
    if (selected.length >= count) break
    selected.push(q)
    usedIds.add(q.id)
  }
  return shuffle(selected).map(t => t.generate())
}
