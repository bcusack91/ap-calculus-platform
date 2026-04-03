/**
 * Exit Quiz — SAT Grammar & Conventions (Digital SAT Format)
 *
 * Passage-based questions following the Digital SAT Reading & Writing format.
 * Tests Standard English Conventions: punctuation, sentence boundaries,
 * possessives, commas, colons, semicolons, dashes, and apostrophes.
 *
 * Domain: Standard English Conventions
 */

export interface ExitQuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; category: string }
interface QuestionTemplate { id: string; category: string; generate: () => ExitQuizQuestion }

function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }; return a }

const questionPool: QuestionTemplate[] = [
  // ─── Comma Usage ───
  {
    id: 'gc-q1', category: 'Commas',
    generate() {
      const correct = 'Dr. Elena Voss, a marine biologist at the Scripps Institution of Oceanography, has spent'
      const opts = shuffle([
        correct,
        'Dr. Elena Voss a marine biologist at the Scripps Institution of Oceanography, has spent',
        'Dr. Elena Voss, a marine biologist at the Scripps Institution of Oceanography has spent',
        'Dr. Elena Voss a marine biologist at the Scripps Institution of Oceanography has spent'
      ])
      return { id: this.id, category: this.category,
        question: `_______ more than two decades studying the migration patterns of Pacific leatherback sea turtles. Her research has revealed that these animals travel over 6,000 miles each year between nesting beaches in Indonesia and feeding grounds off the coast of California.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The appositive "a marine biologist at the Scripps Institution of Oceanography" is nonessential information and must be set off by commas on both sides.`
      }
    }
  },
  {
    id: 'gc-q2', category: 'Commas',
    generate() {
      const correct = 'Because the experiment required precise temperature control, the researchers'
      const opts = shuffle([
        correct,
        'Because the experiment required precise temperature control the researchers',
        'Because, the experiment required precise temperature control, the researchers',
        'Because the experiment required precise temperature control the researchers,'
      ])
      return { id: this.id, category: this.category,
        question: `_______ conducted all trials in a climate-controlled chamber maintained at exactly 22 degrees Celsius. Even minor fluctuations could have compromised the integrity of the results.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `When a subordinate clause ("Because the experiment required precise temperature control") precedes the main clause, a comma must separate them.`
      }
    }
  },
  {
    id: 'gc-q3', category: 'Commas',
    generate() {
      const correct = 'The festival features live music, artisanal food vendors, and interactive art installations.'
      const opts = shuffle([
        correct,
        'The festival features live music, artisanal food vendors and interactive art installations.',
        'The festival features live music artisanal food vendors, and interactive art installations.',
        'The festival features, live music, artisanal food vendors, and interactive art installations.'
      ])
      return { id: this.id, category: this.category,
        question: `Every summer, the coastal town of Seaside hosts a three-day cultural celebration that draws visitors from across the region. _______\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Items in a series of three or more should be separated by commas, including a comma before "and" (the Oxford comma) for clarity.`
      }
    }
  },
  // ─── Semicolons ───
  {
    id: 'gc-q4', category: 'Semicolons',
    generate() {
      const correct = 'dense; however,'
      const opts = shuffle([correct, 'dense, however,', 'dense however,', 'dense: however,'])
      return { id: this.id, category: this.category,
        question: `The atmosphere of Venus is extremely _______ recent missions have detected unexpected chemical signatures in its upper cloud layers that some scientists believe could indicate biological activity.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Two independent clauses joined by a conjunctive adverb ("however") require a semicolon before the adverb and a comma after it.`
      }
    }
  },
  {
    id: 'gc-q5', category: 'Semicolons',
    generate() {
      const correct = 'region; its'
      const opts = shuffle([correct, 'region, its', 'region its', 'region: its'])
      return { id: this.id, category: this.category,
        question: `The Basque Country spans the border between Spain and France, giving it a unique cultural identity that blends elements of both nations. The _______ cuisine, for example, incorporates French culinary techniques with Spanish ingredients, producing dishes that are celebrated in Michelin-starred restaurants worldwide.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Two closely related independent clauses not joined by a coordinating conjunction require a semicolon between them.`
      }
    }
  },
  // ─── Colons ───
  {
    id: 'gc-q6', category: 'Colons',
    generate() {
      const correct = 'three qualities: intellectual curiosity, emotional resilience, and a willingness to collaborate.'
      const opts = shuffle([
        correct,
        'three qualities, intellectual curiosity, emotional resilience, and a willingness to collaborate.',
        'three qualities; intellectual curiosity, emotional resilience, and a willingness to collaborate.',
        'three qualities—intellectual curiosity, emotional resilience, and a willingness to collaborate.'
      ])
      return { id: this.id, category: this.category,
        question: `In her commencement address, the university president told graduates that success in any field depends on _______\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `A colon is used after an independent clause to introduce a list. "Success depends on three qualities" is a complete thought, so a colon properly introduces the list that follows.`
      }
    }
  },
  {
    id: 'gc-q7', category: 'Colons',
    generate() {
      const correct = 'conclusion: the proposed tax'
      const opts = shuffle([correct, 'conclusion, the proposed tax', 'conclusion; the proposed tax', 'conclusion the proposed tax'])
      return { id: this.id, category: this.category,
        question: `After reviewing months of economic data and consulting with independent analysts, the committee reached a _______ increase would disproportionately affect small businesses in rural areas.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `A colon can follow an independent clause to introduce a statement that explains or elaborates on the preceding clause. "The committee reached a conclusion" is complete, and the colon introduces what the conclusion is.`
      }
    }
  },
  // ─── Dashes ───
  {
    id: 'gc-q8', category: 'Dashes',
    generate() {
      const correct = 'instruments—including the piano, violin, and cello—before'
      const opts = shuffle([
        correct,
        'instruments—including the piano, violin, and cello before',
        'instruments, including the piano, violin, and cello—before',
        'instruments—including the piano, violin, and cello, before'
      ])
      return { id: this.id, category: this.category,
        question: `The young musician had already mastered several _______ she turned sixteen. Her teachers described her technical proficiency as extraordinary for someone her age.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Dashes are used in pairs to set off a parenthetical element. The list "including the piano, violin, and cello" interrupts the sentence and must be enclosed by matching dashes on both sides.`
      }
    }
  },
  {
    id: 'gc-q9', category: 'Dashes',
    generate() {
      const correct = 'single trait—the ability to adapt quickly to changing circumstances.'
      const opts = shuffle([
        correct,
        'single trait; the ability to adapt quickly to changing circumstances.',
        'single trait, the ability to adapt quickly to changing circumstances.',
        'single trait the ability to adapt quickly to changing circumstances.'
      ])
      return { id: this.id, category: this.category,
        question: `After interviewing more than one hundred successful entrepreneurs, the business journalist concluded that they all shared a _______\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `A dash can be used after an independent clause to introduce a dramatic or emphatic elaboration. Here, the dash sets off the specific trait being identified.`
      }
    }
  },
  // ─── Apostrophes & Possessives ───
  {
    id: 'gc-q10', category: 'Possessives',
    generate() {
      const correct = "The orchestra's"
      const opts = shuffle([correct, "The orchestras'", 'The orchestras', "The orchestra,s"])
      return { id: this.id, category: this.category,
        question: `_______ performance of Beethoven's Ninth Symphony received a standing ovation that lasted nearly five minutes. Music critics praised the ensemble for its emotional depth and technical precision, calling the concert one of the season's finest.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The sentence refers to one orchestra possessing the performance. The singular possessive "orchestra's" is correct.`
      }
    }
  },
  {
    id: 'gc-q11', category: 'Possessives',
    generate() {
      const correct = "the researchers' findings"
      const opts = shuffle([correct, "the researcher's findings", "the researchers findings", "the researchers's findings"])
      return { id: this.id, category: this.category,
        question: `Although the initial trial involved only a small sample, _______ were consistent with those of several larger studies. The team plans to expand the experiment to include participants from multiple age groups and geographic regions.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Multiple researchers possess the findings. The plural possessive "researchers'" (apostrophe after the s) is correct.`
      }
    }
  },
  {
    id: 'gc-q12', category: 'Possessives',
    generate() {
      const correct = "its"
      const opts = shuffle([correct, "it's", "its'", "their"])
      return { id: this.id, category: this.category,
        question: `The company announced that _______ new sustainability initiative would reduce carbon emissions by thirty percent over the next five years. Environmental advocates praised the commitment but cautioned that meaningful progress would require rigorous independent monitoring.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `"Its" (no apostrophe) is the possessive form of "it." "It's" is a contraction of "it is." The sentence calls for the possessive, so "its" is correct.`
      }
    }
  },
  // ─── Sentence Boundaries ───
  {
    id: 'gc-q13', category: 'Sentence Boundaries',
    generate() {
      const correct = 'century. The'
      const opts = shuffle([correct, 'century, the', 'century the', 'century, and, the'])
      return { id: this.id, category: this.category,
        question: `The Industrial Revolution transformed manufacturing processes across Europe during the late eighteenth and early nineteenth _______ shift from hand production to machine-based manufacturing fundamentally altered labor markets, urban development, and global trade patterns.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Two independent clauses must be properly separated. A period and capital letter correctly mark the boundary between two complete sentences, avoiding a comma splice or run-on.`
      }
    }
  },
  {
    id: 'gc-q14', category: 'Sentence Boundaries',
    generate() {
      const correct = 'results, and she'
      const opts = shuffle([correct, 'results and she', 'results she', 'results, she'])
      return { id: this.id, category: this.category,
        question: `Dr. Patel analyzed the data from the clinical trial over several months. She was initially skeptical of the _______ ultimately published a paper confirming that the treatment had produced statistically significant improvements in patient outcomes.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Two independent clauses joined by a coordinating conjunction ("and") require a comma before the conjunction when both clauses have their own subject and verb.`
      }
    }
  },
  // ─── Restrictive vs. Nonrestrictive Elements ───
  {
    id: 'gc-q15', category: 'Restrictive/Nonrestrictive',
    generate() {
      const correct = 'Students who complete all required coursework by May 15'
      const opts = shuffle([
        correct,
        'Students, who complete all required coursework by May 15,',
        'Students, who complete all required coursework by May 15',
        'Students who complete all required coursework by May 15,'
      ])
      return { id: this.id, category: this.category,
        question: `_______ will be eligible to participate in the summer research program. The registrar's office will verify enrollment status and academic standing before confirming final placements.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The clause "who complete all required coursework by May 15" is restrictive—it identifies which students are eligible. Restrictive clauses should not be set off by commas.`
      }
    }
  },
  {
    id: 'gc-q16', category: 'Restrictive/Nonrestrictive',
    generate() {
      const correct = 'The Mona Lisa, which was painted by Leonardo da Vinci in the early sixteenth century, is'
      const opts = shuffle([
        correct,
        'The Mona Lisa which was painted by Leonardo da Vinci in the early sixteenth century is',
        'The Mona Lisa, which was painted by Leonardo da Vinci in the early sixteenth century is',
        'The Mona Lisa which was painted by Leonardo da Vinci in the early sixteenth century, is'
      ])
      return { id: this.id, category: this.category,
        question: `_______ arguably the most famous painting in the world. Housed in the Louvre Museum in Paris, it attracts millions of visitors each year.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The clause "which was painted by Leonardo da Vinci in the early sixteenth century" is nonrestrictive—it provides additional but nonessential information about the Mona Lisa. It must be set off by commas on both sides.`
      }
    }
  },
  // ─── Additional Commas ───
  {
    id: 'gc-q17', category: 'Commas',
    generate() {
      const correct = 'Although he had never visited Japan, the chef'
      const opts = shuffle([
        correct,
        'Although he had never visited Japan the chef',
        'Although, he had never visited Japan, the chef',
        'Although he had never visited Japan; the chef'
      ])
      return { id: this.id, category: this.category,
        question: `_______ specialized in preparing traditional Japanese cuisine. His mentor, a Tokyo-born chef de cuisine, had trained him extensively in the techniques of kaiseki cooking.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `An introductory subordinate clause ("Although he had never visited Japan") must be followed by a comma before the main clause.`
      }
    }
  },
  // ─── Additional Semicolons ───
  {
    id: 'gc-q18', category: 'Semicolons',
    generate() {
      const correct = 'experiment; the results'
      const opts = shuffle([correct, 'experiment, the results', 'experiment the results', 'experiment: the results'])
      return { id: this.id, category: this.category,
        question: `The researchers initially planned to recruit 500 participants, but budget constraints forced them to reduce the sample size. This change significantly limited the statistical power of the _______ could not be generalized to the broader population with confidence.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Two independent clauses not joined by a coordinating conjunction require a semicolon between them. A comma would create a comma splice.`
      }
    }
  },
  // ─── Additional Possessives ───
  {
    id: 'gc-q19', category: 'Possessives',
    generate() {
      const correct = "children's"
      const opts = shuffle([correct, "childrens'", 'childrens', "children"])
      return { id: this.id, category: this.category,
        question: `The pediatric ward was recently renovated to create a more welcoming environment. Bright murals now cover the walls, and the _______ playroom has been expanded to include sensory stations, a small library, and interactive digital games.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `"Children" is an irregular plural (it does not end in -s). The possessive is formed by adding 's: "children's."`
      }
    }
  },
  // ─── Mixed Review ───
  {
    id: 'gc-q20', category: 'Mixed Review',
    generate() {
      const correct = 'world\'s oceans, which cover more than seventy percent of the planet\'s surface, remain'
      const opts = shuffle([
        correct,
        'world\'s oceans which cover more than seventy percent of the planet\'s surface remain',
        'world\'s oceans, which cover more than seventy percent of the planet\'s surface remain',
        'world\'s oceans which cover more than seventy percent of the planet\'s surface, remain'
      ])
      return { id: this.id, category: this.category,
        question: `Despite centuries of exploration, the _______ largely unmapped. Oceanographers estimate that more than eighty percent of the seafloor has never been surveyed using modern sonar technology.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The nonrestrictive clause "which cover more than seventy percent of the planet's surface" must be enclosed by commas on both sides, as it provides additional but nonessential information about the oceans.`
      }
    }
  },
  {
    id: 'gc-q21', category: 'Commas',
    generate() {
      const correct = 'the senator, a former civil rights attorney, introduced'
      const opts = shuffle([
        correct,
        'the senator a former civil rights attorney introduced',
        'the senator, a former civil rights attorney introduced',
        'the senator a former civil rights attorney, introduced'
      ])
      return { id: this.id, category: this.category,
        question: `At the opening session of the new Congress, _______ a bill to expand voting access in underserved communities. The legislation would allocate federal funds for additional polling locations and extended early voting periods.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `"A former civil rights attorney" is an appositive providing nonessential information about the senator. It must be set off by commas on both sides.`
      }
    }
  },
  {
    id: 'gc-q22', category: 'Sentence Boundaries',
    generate() {
      const correct = 'glucose, but it'
      const opts = shuffle([correct, 'glucose but it', 'glucose it', 'glucose, it'])
      return { id: this.id, category: this.category,
        question: `The brain accounts for only about two percent of total body weight, yet it consumes roughly twenty percent of the body's energy supply. It relies almost exclusively on _______ can also use ketone bodies as an alternative fuel source during prolonged fasting.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Two independent clauses joined by the coordinating conjunction "but" require a comma before the conjunction.`
      }
    }
  },
  {
    id: 'gc-q23', category: 'Colons',
    generate() {
      const correct = 'mandate: every new building'
      const opts = shuffle([correct, 'mandate, every new building', 'mandate; every new building', 'mandate every new building'])
      return { id: this.id, category: this.category,
        question: `In 2023, the California state legislature passed an ambitious environmental protection _______ constructed after January 1, 2025, must include rooftop solar panels and meet stringent energy efficiency standards.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `A colon follows an independent clause and introduces a specification or elaboration. "The legislature passed a mandate" is complete, and the colon introduces the content of the mandate.`
      }
    }
  },
  {
    id: 'gc-q24', category: 'Dashes',
    generate() {
      const correct = 'idea—one that many investors initially dismissed as impractical—eventually'
      const opts = shuffle([
        correct,
        'idea—one that many investors initially dismissed as impractical eventually',
        'idea, one that many investors initially dismissed as impractical, eventually',
        'idea—one that many investors initially dismissed as impractical, eventually'
      ])
      return { id: this.id, category: this.category,
        question: `The startup founder's original _______ transformed into a company valued at over two billion dollars. Her persistence in the face of skepticism became a commonly cited example of entrepreneurial resilience.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The parenthetical phrase "one that many investors initially dismissed as impractical" interrupts the sentence and should be enclosed by matching dashes. While commas could also work, the question asks which choice conforms to conventions, and the dashes correctly set off the emphatic aside.`
      }
    }
  },
  {
    id: 'gc-q25', category: 'Mixed Review',
    generate() {
      const correct = "The author's latest novel, which has been translated into thirty-two languages, explores"
      const opts = shuffle([
        correct,
        "The authors latest novel, which has been translated into thirty-two languages, explores",
        "The author's latest novel which has been translated into thirty-two languages explores",
        "The author's latest novel, which has been translated into thirty-two languages explores"
      ])
      return { id: this.id, category: this.category,
        question: `_______ the tension between tradition and modernity in postcolonial Nigeria. Critics have praised the book for its nuanced portrayal of characters caught between competing cultural expectations.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `"Author's" requires an apostrophe (singular possessive). The nonrestrictive clause "which has been translated into thirty-two languages" must be enclosed by commas on both sides.`
      }
    }
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const byCategory: Record<string, QuestionTemplate[]> = {}
  for (const q of questionPool) { if (!byCategory[q.category]) byCategory[q.category] = []; byCategory[q.category].push(q) }
  const selected: QuestionTemplate[] = []; const usedIds = new Set<string>()
  for (const cat of shuffle(Object.keys(byCategory))) { if (selected.length >= count) break; const pool = byCategory[cat]; const q = pool[Math.floor(Math.random() * pool.length)]; if (!usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id) } }
  const remaining = questionPool.filter(q => !usedIds.has(q.id))
  for (const q of shuffle(remaining)) { if (selected.length >= count) break; selected.push(q); usedIds.add(q.id) }
  return shuffle(selected).map(t => t.generate())
}
