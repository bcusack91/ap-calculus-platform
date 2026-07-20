/**
 * Exit Quiz — SAT Subject-Verb Agreement (Digital SAT Format)
 *
 * Passage-based questions following the Digital SAT Reading & Writing format.
 * Each question presents a short passage with a blank, testing
 * subject-verb agreement in context.
 */

export interface ExitQuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; category: string; difficulty?: 'easy' | 'medium' | 'hard' }
interface QuestionTemplate { id: string; category: string; difficulty: 'easy' | 'medium' | 'hard'; generate: () => ExitQuizQuestion }

function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }; return a }

function makeOptions(correct: string, distractors: string[]) {
  const others = distractors.filter(x => x !== correct).slice(0, 3)
  const all = shuffle([correct, ...others])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  {
    id: 'sva-q1', category: 'Intervening Phrases', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('is', ['are', 'were', 'have been'])
      return { id: this.id, category: this.category,
        question: `The professor of linguistics, along with several graduate students, _______ presenting new research on endangered languages at the annual conference next month. The work focuses on documenting oral traditions in communities where fewer than fifty native speakers remain.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "professor" (singular). The phrase "along with several graduate students" is parenthetical and does not make the subject plural. Use "is."`
      }
    }
  },
  {
    id: 'sva-q2', category: 'Intervening Phrases', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('has', ['have', 'are having', 'had'])
      return { id: this.id, category: this.category,
        question: `The collection of rare manuscripts housed in the university's special archives _______ attracted scholars from around the world. The documents, some dating to the fifteenth century, include letters, maps, and illuminated religious texts.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "collection" (singular). "Of rare manuscripts housed in the university's special archives" is a prepositional phrase that modifies "collection" but does not change its number.`
      }
    }
  },
  {
    id: 'sva-q3', category: 'Indefinite Pronouns', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('carries', ['carry', 'have carried', 'are carrying'])
      return { id: this.id, category: this.category,
        question: `In public health, each of the vaccines currently administered to children _______ a distinct set of potential side effects that must be disclosed to parents. Medical professionals are trained to explain these risks clearly and compassionately.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Each" is singular, even when followed by "of the vaccines" (plural). The singular verb "carries" is correct.`
      }
    }
  },
  {
    id: 'sva-q4', category: 'Indefinite Pronouns', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('demonstrate', ['demonstrates', 'has demonstrated', 'is demonstrating'])
      return { id: this.id, category: this.category,
        question: `Several of the studies reviewed in the meta-analysis _______ a statistically significant correlation between sleep quality and academic performance. The researchers note, however, that correlation does not imply causation.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Several" is a plural indefinite pronoun, so the plural verb "demonstrate" is correct.`
      }
    }
  },
  {
    id: 'sva-q5', category: 'Compound Subjects', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('require', ['requires', 'has required', 'is requiring'])
      return { id: this.id, category: this.category,
        question: `Both the laboratory report and the field observation essay _______ extensive revision before submission. Students in Dr. Nakamura's biology seminar typically spend several weeks refining their analyses before presenting final drafts.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `Compound subjects joined by "both...and" are plural. "Both the report and the essay require" is correct.`
      }
    }
  },
  {
    id: 'sva-q6', category: 'Compound Subjects', difficulty: 'hard',
    generate() {
      const { options, correctIndex } = makeOptions('was', ['were', 'have been', 'are'])
      return { id: this.id, category: this.category,
        question: `Neither the mayor nor the city council president _______ willing to comment on the proposed zoning changes. The silence from city hall has fueled speculation among local business owners who fear the new regulations could limit commercial development.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `With "neither...nor," the verb agrees with the nearer subject. "The city council president" is singular, so "was" is correct.`
      }
    }
  },
  {
    id: 'sva-q7', category: 'Compound Subjects', difficulty: 'hard',
    generate() {
      const { options, correctIndex } = makeOptions('is', ['are', 'were', 'have been'])
      return { id: this.id, category: this.category,
        question: `Either the original documents or a certified copy _______ acceptable for completing the application process. Applicants should verify which form of identification the office requires before scheduling an appointment.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `With "either...or," the verb agrees with the nearer subject. "A certified copy" is singular, so "is" is correct.`
      }
    }
  },
  {
    id: 'sva-q8', category: 'Inverted Sentences', difficulty: 'hard',
    generate() {
      const { options, correctIndex } = makeOptions('lie', ['lies', 'has lain', 'is lying'])
      return { id: this.id, category: this.category,
        question: `Beyond the rolling hills of Tuscany _______ some of the most productive vineyards in Italy. The region's warm climate and well-drained soils create ideal conditions for growing Sangiovese grapes, the primary varietal used in Chianti wines.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `In this inverted sentence, the subject is "vineyards" (plural), which comes after the verb. The plural verb "lie" is correct.`
      }
    }
  },
  {
    id: 'sva-q9', category: 'Inverted Sentences', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('stands', ['stand', 'have stood', 'are standing'])
      return { id: this.id, category: this.category,
        question: `At the center of the town square _______ a bronze statue of Frederick Douglass, erected in 1899 to honor the abolitionist's contributions to the civil rights movement. The statue was recently restored as part of a citywide historic preservation initiative.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `In this inverted sentence, the subject is "a bronze statue" (singular). The singular verb "stands" is correct.`
      }
    }
  },
  {
    id: 'sva-q10', category: 'Relative Clauses', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('challenge', ['challenges', 'has challenged', 'is challenging'])
      return { id: this.id, category: this.category,
        question: `The discoveries made by the research team, which include three previously unknown species of deep-sea organisms, _______ several longstanding assumptions about biodiversity in the Mariana Trench.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject of the main clause is "discoveries" (plural). The relative clause "which include..." is a nonrestrictive modifier. The plural verb "challenge" agrees with "discoveries."`
      }
    }
  },
  {
    id: 'sva-q11', category: 'Relative Clauses', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('explores', ['explore', 'have explored', 'are exploring'])
      return { id: this.id, category: this.category,
        question: `The documentary, which was produced by an award-winning team of filmmakers and features interviews with over thirty scientists, _______ the effects of microplastic pollution on marine food chains in the North Pacific.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "documentary" (singular). The long relative clause between the commas does not change the number of the subject. Use the singular verb "explores."`
      }
    }
  },
  {
    id: 'sva-q12', category: 'Collective Nouns', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('has announced', ['have announced', 'are announcing', 'announce'])
      return { id: this.id, category: this.category,
        question: `The committee responsible for selecting the annual literary prize _______ its decision to award the honor to novelist Chimamanda Ngozi Adichie. The announcement was met with widespread praise from critics and readers alike.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Committee" is a collective noun acting as a single unit, so it takes a singular verb. "Has announced" is correct.`
      }
    }
  },
  {
    id: 'sva-q13', category: 'Collective Nouns', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('is', ['are', 'were', 'have been'])
      return { id: this.id, category: this.category,
        question: `According to the Bureau of Labor Statistics, the number of Americans working remotely _______ expected to increase by twelve percent over the next five years. Economists attribute this trend to advances in communication technology and shifting employer attitudes toward flexible schedules.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"The number of" takes a singular verb ("is"). This differs from "a number of," which takes a plural verb.`
      }
    }
  },
  {
    id: 'sva-q14', category: 'Tricky Subjects', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('provides', ['provide', 'have provided', 'are providing'])
      return { id: this.id, category: this.category,
        question: `In modern agriculture, the use of genetically modified organisms _______ farmers with crops that are more resistant to drought and disease. Critics, however, argue that the long-term ecological effects of these modifications remain poorly understood.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "use" (singular), not "organisms." The prepositional phrase "of genetically modified organisms" modifies "use." Use the singular verb "provides."`
      }
    }
  },
  {
    id: 'sva-q15', category: 'Tricky Subjects', difficulty: 'hard',
    generate() {
      const { options, correctIndex } = makeOptions('remains', ['remain', 'have remained', 'are remaining'])
      return { id: this.id, category: this.category,
        question: `Whether the proposed infrastructure bill will pass the Senate before the end of the legislative session _______ uncertain. Political analysts suggest that disagreements over funding allocation could delay a final vote by several weeks.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `A noun clause beginning with "Whether" serves as a singular subject. The singular verb "remains" is correct.`
      }
    }
  },
  {
    id: 'sva-q16', category: 'Tricky Subjects', difficulty: 'hard',
    generate() {
      const { options, correctIndex } = makeOptions('were', ['was', 'has been', 'is'])
      return { id: this.id, category: this.category,
        question: `Among the items recovered from the shipwreck _______ a gold pocket watch, a leather-bound journal, and several navigational instruments dating to the early nineteenth century. Historians believe the vessel was a merchant ship that sank during a storm off the coast of Nova Scotia.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The sentence is inverted. The compound subject ("a gold pocket watch, a leather-bound journal, and several navigational instruments") is plural, so "were" is correct.`
      }
    }
  },
  {
    id: 'sva-q17', category: 'Intervening Phrases', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('influences', ['influence', 'have influenced', 'are influencing'])
      return { id: this.id, category: this.category,
        question: `The rhythm of ocean tides, governed by the gravitational pull of both the moon and the sun, _______ coastal ecosystems in ways that scientists are only beginning to understand. Tidal patterns affect everything from the feeding behavior of shorebirds to the distribution of marine algae.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "rhythm" (singular). The participial phrase "governed by the gravitational pull of both the moon and the sun" is parenthetical. Use "influences."`
      }
    }
  },
  {
    id: 'sva-q18', category: 'Indefinite Pronouns', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('has', ['have', 'are', 'were'])
      return { id: this.id, category: this.category,
        question: `Of the two hundred participants initially enrolled in the clinical trial, only one _______ reported experiencing the severe side effects described in earlier case studies. Researchers view this as a promising indicator of the drug's safety profile.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"Only one" is singular. The prepositional phrase "Of the two hundred participants" does not change the number of the subject. Use "has."`
      }
    }
  },
  {
    id: 'sva-q19', category: 'Collective Nouns', difficulty: 'hard',
    generate() {
      const { options, correctIndex } = makeOptions('disagree', ['disagrees', 'has disagreed', 'is disagreeing'])
      return { id: this.id, category: this.category,
        question: `A number of economists _______ with the Treasury Department's growth forecast for the coming fiscal year. These critics argue that the projections fail to account for the potential effects of ongoing supply chain disruptions on consumer spending.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `"A number of economists" takes a plural verb (unlike "the number of," which is singular). "Disagree" is correct.`
      }
    }
  },
  {
    id: 'sva-q20', category: 'Mixed Review', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('was', ['were', 'have been', 'are'])
      return { id: this.id, category: this.category,
        question: `The stack of papers on the professor's desk, which included drafts of three journal articles and a grant proposal, _______ nearly two feet tall by the end of the semester. Her research assistant offered to help organize the materials before the winter break.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options, correctIndex,
        explanation: `The subject is "stack" (singular). The relative clause and prepositional phrases between the subject and verb do not change the number. Use "was."`
      }
    }
  },
]

function selectTemplates(count: number, difficulty?: 'easy' | 'medium' | 'hard'): QuestionTemplate[] {
  if (difficulty) {
    const fillOrder: Record<'easy' | 'medium' | 'hard', ('easy' | 'medium' | 'hard')[]> = { easy: ['easy', 'medium', 'hard'], medium: ['medium', 'easy', 'hard'], hard: ['hard', 'medium', 'easy'] }
    const selected: QuestionTemplate[] = []
    for (const tier of fillOrder[difficulty]) { if (selected.length >= count) break; for (const q of shuffle(questionPool.filter(t => t.difficulty === tier))) { if (selected.length >= count) break; selected.push(q) } }
    return selected
  }
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of questionPool) { if (!byCategory[q.category]) byCategory[q.category] = []; byCategory[q.category].push(q) }
  const selected: QuestionTemplate[] = []; const usedIds = new Set<string>()
  for (const cat of shuffle(Object.keys(byCategory))) { if (selected.length >= count) break; const pool = byCategory[cat]; const q = pool[Math.floor(Math.random() * pool.length)]; if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id) } }
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  for (const q of shuffle(remaining)) { if (selected.length >= count) break; selected.push(q); usedIds.add(q.id) }
  return selected
}

export function generateExitQuiz(count: number = 10, _topicSlug?: string, difficulty?: 'easy' | 'medium' | 'hard'): ExitQuizQuestion[] {
  return shuffle(selectTemplates(count, difficulty)).map(t => ({ ...t.generate(), difficulty: t.difficulty }))
}
