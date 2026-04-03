/**
 * Exit Quiz — SAT Vocabulary in Context (Digital SAT Format)
 *
 * Passage-based questions following the Digital SAT Reading & Writing format.
 * Each question presents a short passage with a blank and asks students
 * to select the most logical and precise word or phrase.
 *
 * Domain: Craft and Structure — Words in Context
 */

export interface ExitQuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; category: string }
interface QuestionTemplate { id: string; category: string; generate: () => ExitQuizQuestion }

function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }; return a }

function makeOptions(correct: string, distractors: string[]) {
  const others = distractors.filter(x => x !== correct).slice(0, 3)
  const all = shuffle([correct, ...others])
  return { options: all, correctIndex: all.indexOf(correct) }
}

const questionPool: QuestionTemplate[] = [
  {
    id: 'vocab-q1', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('eclectic', ['conventional', 'predictable', 'uniform'])
      return { id: this.id, category: this.category,
        question: `Jazz pianist Thelonious Monk was known for his _______ approach to composition, drawing on elements of stride piano, blues, and avant-garde experimentation. His willingness to combine seemingly incompatible musical traditions resulted in a body of work that defied easy categorization.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Eclectic" means deriving ideas from a diverse range of sources. The passage describes Monk combining multiple musical traditions, making "eclectic" the most precise choice.`
      }
    }
  },
  {
    id: 'vocab-q2', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('exacerbated', ['alleviated', 'resolved', 'initiated'])
      return { id: this.id, category: this.category,
        question: `The prolonged drought in the Horn of Africa _______ existing food shortages, pushing an already vulnerable population closer to famine. International aid organizations warned that without immediate intervention, millions of people would face acute malnutrition.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Exacerbated" means made worse. The passage indicates the drought worsened existing shortages, not that it started, fixed, or relieved them.`
      }
    }
  },
  {
    id: 'vocab-q3', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('tenuous', ['robust', 'definitive', 'straightforward'])
      return { id: this.id, category: this.category,
        question: `While some historians have drawn a connection between the decline of Roman trade networks and the collapse of the Western Roman Empire, the evidence supporting this link remains _______. Recent archaeological findings have complicated rather than clarified the picture.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Tenuous" means weak or slight. The passage states that evidence is uncertain and has been complicated by new findings, supporting a description of weakness rather than strength.`
      }
    }
  },
  {
    id: 'vocab-q4', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('ubiquitous', ['scarce', 'controversial', 'obsolete'])
      return { id: this.id, category: this.category,
        question: `Smartphones have become so _______ that researchers now study their effects on virtually every aspect of daily life, from sleep patterns and social interaction to academic performance and mental health.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Ubiquitous" means found everywhere. The passage describes smartphones as present in virtually every aspect of life, making "ubiquitous" the best fit.`
      }
    }
  },
  {
    id: 'vocab-q5', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('pragmatic', ['idealistic', 'reckless', 'theoretical'])
      return { id: this.id, category: this.category,
        question: `Rather than pursuing sweeping legislative reform, the governor adopted a more _______ strategy, focusing on incremental policy changes that could win bipartisan support. This approach frustrated some activists but proved effective in advancing several key initiatives.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Pragmatic" means dealing with things sensibly and realistically. The governor chose a practical, incremental approach over sweeping reform, making "pragmatic" the best fit.`
      }
    }
  },
  {
    id: 'vocab-q6', category: 'Tone & Connotation',
    generate() {
      const { options, correctIndex } = makeOptions('meticulous', ['careless', 'hasty', 'arbitrary'])
      return { id: this.id, category: this.category,
        question: `The restoration of Vermeer's "Girl with a Pearl Earring" required _______ attention to detail: conservators spent months analyzing paint layers under magnification before carefully removing centuries of accumulated varnish without disturbing the original pigments beneath.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Meticulous" means showing great attention to detail. The passage describes extremely careful, painstaking work, which aligns with "meticulous" rather than careless, hasty, or arbitrary approaches.`
      }
    }
  },
  {
    id: 'vocab-q7', category: 'Tone & Connotation',
    generate() {
      const { options, correctIndex } = makeOptions('unassuming', ['ostentatious', 'domineering', 'pretentious'])
      return { id: this.id, category: this.category,
        question: `Despite her considerable influence in the field of molecular biology, Dr. Jennifer Doudna has maintained an _______ public persona. Colleagues describe her as approachable and modest, qualities that have helped her build collaborative research networks spanning dozens of institutions.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Unassuming" means modest and not drawing attention to oneself. The passage describes Doudna as approachable and modest, making "unassuming" the best match.`
      }
    }
  },
  {
    id: 'vocab-q8', category: 'Tone & Connotation',
    generate() {
      const { options, correctIndex } = makeOptions('dismissive', ['enthusiastic', 'ambivalent', 'receptive'])
      return { id: this.id, category: this.category,
        question: `Early reviews of Emily Dickinson's poetry were largely _______; critics characterized her unconventional punctuation and compressed syntax as amateurish and her themes as morbid. It was not until the mid-twentieth century that scholars began to appreciate the radical formal innovation in her work.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Dismissive" means showing that something is unworthy of consideration. The passage shows critics rejecting Dickinson's work as amateurish and morbid, which is dismissive, not enthusiastic, ambivalent, or receptive.`
      }
    }
  },
  {
    id: 'vocab-q9', category: 'Academic Vocabulary',
    generate() {
      const { options, correctIndex } = makeOptions('corroborates', ['contradicts', 'undermines', 'replaces'])
      return { id: this.id, category: this.category,
        question: `A 2023 study published in Nature _______ earlier findings that exposure to green spaces is associated with lower levels of cortisol, a hormone linked to stress. The new research, conducted across fourteen countries, found consistent results regardless of participants' age, income, or urban density.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Corroborates" means confirms or supports. The new study found consistent results that match earlier findings, meaning it confirms rather than contradicts, undermines, or replaces them.`
      }
    }
  },
  {
    id: 'vocab-q10', category: 'Academic Vocabulary',
    generate() {
      const { options, correctIndex } = makeOptions('mitigate', ['amplify', 'disregard', 'guarantee'])
      return { id: this.id, category: this.category,
        question: `Engineers in the Netherlands have developed an innovative system of flood barriers designed to _______ the damage caused by rising sea levels. While the barriers cannot prevent flooding entirely, simulations suggest they could reduce property losses by as much as forty percent in low-lying coastal areas.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Mitigate" means to make less severe. The passage says the barriers reduce (but do not prevent) damage, which aligns with "mitigate."`
      }
    }
  },
  {
    id: 'vocab-q11', category: 'Academic Vocabulary',
    generate() {
      const { options, correctIndex } = makeOptions('proliferation', ['reduction', 'regulation', 'stagnation'])
      return { id: this.id, category: this.category,
        question: `The _______ of social media platforms over the past decade has transformed how political campaigns communicate with voters. Candidates now invest heavily in targeted digital advertising, a strategy that was virtually nonexistent during the 2008 election cycle.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Proliferation" means rapid increase in numbers. The passage describes social media platforms spreading rapidly over the past decade, making "proliferation" the best fit.`
      }
    }
  },
  {
    id: 'vocab-q12', category: 'Academic Vocabulary',
    generate() {
      const { options, correctIndex } = makeOptions('unprecedented', ['inevitable', 'predictable', 'insignificant'])
      return { id: this.id, category: this.category,
        question: `The speed at which the COVID-19 vaccines were developed was _______; no previous vaccine had moved from initial research to emergency authorization in under a year. Scientists credited advances in mRNA technology and massive public funding for making the accelerated timeline possible.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Unprecedented" means never done or known before. The passage explicitly states that no previous vaccine had been developed this quickly, making "unprecedented" the most precise choice.`
      }
    }
  },
  {
    id: 'vocab-q13', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('ephemeral', ['permanent', 'recurring', 'tangible'])
      return { id: this.id, category: this.category,
        question: `The street art installations created by the anonymous collective "Luminous" are intentionally _______: constructed from biodegradable materials, they are designed to deteriorate within weeks of being placed in public spaces, reflecting the artists' belief that beauty need not be lasting to be meaningful.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Ephemeral" means lasting for a very short time. The passage describes art that is designed to deteriorate within weeks, making "ephemeral" the most precise word.`
      }
    }
  },
  {
    id: 'vocab-q14', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('supplanted', ['complemented', 'preceded', 'mimicked'])
      return { id: this.id, category: this.category,
        question: `In many newsrooms, traditional print journalism has been largely _______ by digital media. Reporters who once focused exclusively on writing long-form articles now produce podcasts, video segments, and social media content as well, fundamentally altering the nature of their work.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Supplanted" means superseded or replaced. The passage describes digital media taking over the role previously held by print journalism, making "supplanted" the best fit.`
      }
    }
  },
  {
    id: 'vocab-q15', category: 'Tone & Connotation',
    generate() {
      const { options, correctIndex } = makeOptions('contentious', ['unanimous', 'trivial', 'transparent'])
      return { id: this.id, category: this.category,
        question: `The decision to rename the university's oldest dormitory has proven _______. Alumni who value the building's historical associations have clashed with students who argue that the name honors a figure with a deeply troubling record on racial justice.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Contentious" means causing or likely to cause disagreement. The passage describes a clash between two groups with opposing views, making "contentious" the best fit.`
      }
    }
  },
  {
    id: 'vocab-q16', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('anomalous', ['typical', 'gradual', 'frequent'])
      return { id: this.id, category: this.category,
        question: `Astronomers at the Keck Observatory detected an _______ signal from a star in the constellation Cygnus that did not match any known pattern of stellar behavior. The irregularity prompted a months-long investigation that ultimately revealed a previously unobserved type of magnetic field fluctuation.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Anomalous" means deviating from what is standard, normal, or expected. The signal did not match known patterns--it was irregular--making "anomalous" the most precise choice.`
      }
    }
  },
  {
    id: 'vocab-q17', category: 'Academic Vocabulary',
    generate() {
      const { options, correctIndex } = makeOptions('substantiate', ['refute', 'fabricate', 'simplify'])
      return { id: this.id, category: this.category,
        question: `The prosecution presented forensic evidence, eyewitness testimony, and financial records to _______ its claim that the defendant had orchestrated a scheme to defraud investors. The defense argued, however, that much of this evidence was circumstantial.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Substantiate" means to provide evidence to support or prove the truth of something. The prosecution is presenting evidence to support its claim, making "substantiate" the best choice.`
      }
    }
  },
  {
    id: 'vocab-q18', category: 'Tone & Connotation',
    generate() {
      const { options, correctIndex } = makeOptions('austere', ['lavish', 'chaotic', 'welcoming'])
      return { id: this.id, category: this.category,
        question: `The architecture of the Bauhaus school was deliberately _______: flat roofs, unadorned facades, and an absence of decorative ornamentation reflected the movement's belief that form should follow function without unnecessary embellishment.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Austere" means severe or strict in manner, without comfort or luxury. The passage describes architecture that is unadorned and without embellishment, which is austere.`
      }
    }
  },
  {
    id: 'vocab-q19', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('galvanized', ['divided', 'confused', 'pacified'])
      return { id: this.id, category: this.category,
        question: `The publication of Rachel Carson's "Silent Spring" in 1962 _______ public opposition to the widespread use of synthetic pesticides. Within a decade of the book's release, the Environmental Protection Agency had been established and DDT had been banned for agricultural use in the United States.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Galvanized" means shocked or excited into taking action. The passage describes the book sparking a strong public response that led to concrete policy changes, making "galvanized" the best fit.`
      }
    }
  },
  {
    id: 'vocab-q20', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('ambiguous', ['explicit', 'irrelevant', 'comprehensive'])
      return { id: this.id, category: this.category,
        question: `Legal scholars have long debated the meaning of the Second Amendment's prefatory clause, which some interpret as limiting the right to bear arms to members of organized militias and others read as simply stating one justification for a broader individual right. The clause's _______ wording has fueled more than two centuries of constitutional controversy.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Ambiguous" means open to more than one interpretation. The passage describes ongoing debate about how to interpret the wording, indicating it is ambiguous.`
      }
    }
  },
  {
    id: 'vocab-q21', category: 'Academic Vocabulary',
    generate() {
      const { options, correctIndex } = makeOptions('elucidates', ['obscures', 'contradicts', 'oversimplifies'])
      return { id: this.id, category: this.category,
        question: `In her latest monograph, historian Dr. Elena Ruiz _______ the economic factors that drove mass migration from rural Mexico to the United States during the 1940s and 1950s. Drawing on previously untranslated archival sources, Ruiz provides a clearer picture of the financial pressures facing agricultural workers during this period.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Elucidates" means makes clear, explains. The passage says Ruiz provides "a clearer picture," meaning she clarifies the economic factors, which matches "elucidates."`
      }
    }
  },
  {
    id: 'vocab-q22', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('disparate', ['identical', 'related', 'sequential'])
      return { id: this.id, category: this.category,
        question: `The curator organized the exhibit around a single theme—human trafficking over two millennia—but the artifacts themselves were remarkably _______: Roman slave collars, eighteenth-century plantation records, and contemporary news photographs occupied adjacent display cases, challenging visitors to draw connections across vastly different historical contexts.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Disparate" means essentially different in kind; not comparable. The artifacts come from vastly different time periods and contexts, making "disparate" the most precise word.`
      }
    }
  },
  {
    id: 'vocab-q23', category: 'Tone & Connotation',
    generate() {
      const { options, correctIndex } = makeOptions('skepticism', ['enthusiasm', 'indifference', 'certainty'])
      return { id: this.id, category: this.category,
        question: `When cold fusion was first announced in 1989, the scientific community responded with considerable _______. Physicists questioned whether the experiment's results could be replicated, and many suspected that measurement errors or contamination had produced misleading data.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Skepticism" means a doubting or questioning attitude. The passage describes scientists questioning results and suspecting errors, which indicates skepticism.`
      }
    }
  },
  {
    id: 'vocab-q24', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('circumvent', ['enforce', 'establish', 'endorse'])
      return { id: this.id, category: this.category,
        question: `To _______ import tariffs on steel, several manufacturers began routing shipments through intermediary countries where the materials were minimally processed before being re-exported. Trade officials described this practice as a violation of the spirit, if not the letter, of existing trade agreements.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Circumvent" means to find a way around an obstacle or restriction. The manufacturers are finding a workaround to avoid paying tariffs, making "circumvent" the best fit.`
      }
    }
  },
  {
    id: 'vocab-q25', category: 'Academic Vocabulary',
    generate() {
      const { options, correctIndex } = makeOptions('posits', ['disproves', 'disregards', 'conceals'])
      return { id: this.id, category: this.category,
        question: `Linguist Noam Chomsky _______ that humans are born with an innate capacity for language acquisition, a concept he terms "universal grammar." This theory suggests that certain structural rules are common to all human languages and are hardwired into the brain from birth.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Posits" means to put forward as a basis of argument; to assume or suggest. Chomsky is proposing a theory, which aligns with "posits."`
      }
    }
  },
  {
    id: 'vocab-q26', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('entrenched', ['flexible', 'novel', 'superficial'])
      return { id: this.id, category: this.category,
        question: `Despite decades of reform efforts, racial and economic segregation in American public schools remains deeply _______. A 2022 report by the Government Accountability Office found that more than a third of students attend schools where 75 percent or more of their classmates are of the same race.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Entrenched" means firmly established and difficult to change. The passage describes segregation that has persisted despite decades of reform, indicating it is deeply entrenched.`
      }
    }
  },
  {
    id: 'vocab-q27', category: 'Tone & Connotation',
    generate() {
      const { options, correctIndex } = makeOptions('lauded', ['criticized', 'ignored', 'feared'])
      return { id: this.id, category: this.category,
        question: `Upon its publication, Toni Morrison's "Beloved" was _______ by critics as a masterpiece of American fiction. The novel, which explores the psychological aftermath of slavery, received the Pulitzer Prize for Fiction in 1988 and is now widely considered one of the most important works of the twentieth century.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Lauded" means praised highly. The passage describes critics calling the novel a masterpiece and it winning a Pulitzer Prize, indicating praise.`
      }
    }
  },
  {
    id: 'vocab-q28', category: 'Academic Vocabulary',
    generate() {
      const { options, correctIndex } = makeOptions('catalyzed', ['delayed', 'predicted', 'trivialized'])
      return { id: this.id, category: this.category,
        question: `The invention of the printing press in the fifteenth century _______ a transformation in European intellectual life. By making books affordable and widely available, the technology accelerated the spread of scientific knowledge, religious debate, and political philosophy across the continent.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Catalyzed" means to cause or accelerate a reaction or change. The printing press triggered a broad intellectual transformation, making "catalyzed" the most precise word.`
      }
    }
  },
  {
    id: 'vocab-q29', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('commensurate', ['disproportionate', 'unrelated', 'inferior'])
      return { id: this.id, category: this.category,
        question: `Union representatives argued that the salary increases offered by management were not _______ with the rising cost of living. Workers, they noted, had received only a two-percent raise over the previous three years while housing and food costs had increased by more than fifteen percent.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Commensurate" means corresponding in size or degree; in proportion. The passage describes raises that are not proportional to rising costs, making "commensurate" the most fitting word.`
      }
    }
  },
  {
    id: 'vocab-q30', category: 'Precise Meaning',
    generate() {
      const { options, correctIndex } = makeOptions('nascent', ['established', 'declining', 'obsolete'])
      return { id: this.id, category: this.category,
        question: `In the early 2010s, the commercial space industry was still _______; only a handful of private companies had attempted orbital launches, and none had yet achieved the reliability needed to compete with government-funded space programs. A decade later, the sector had matured dramatically.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Nascent" means just beginning to develop. The passage describes an industry in its early stages that later matured, making "nascent" the best fit.`
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
