/**
 * Exit Quiz — SAT Vocabulary in Context (Digital SAT Format)
 *
 * Passage-based questions following the Digital SAT Reading & Writing format.
 * Each question presents a short passage with a blank and asks students
 * to select the most logical and precise word or phrase.
 *
 * Domain: Craft and Structure — Words in Context
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
    id: 'vocab-q1', category: 'Precise Meaning', difficulty: 'medium',
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
    id: 'vocab-q2', category: 'Precise Meaning', difficulty: 'easy',
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
    id: 'vocab-q3', category: 'Precise Meaning', difficulty: 'hard',
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
    id: 'vocab-q4', category: 'Precise Meaning', difficulty: 'easy',
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
    id: 'vocab-q5', category: 'Precise Meaning', difficulty: 'medium',
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
    id: 'vocab-q6', category: 'Tone & Connotation', difficulty: 'easy',
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
    id: 'vocab-q7', category: 'Tone & Connotation', difficulty: 'medium',
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
    id: 'vocab-q8', category: 'Tone & Connotation', difficulty: 'easy',
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
    id: 'vocab-q9', category: 'Academic Vocabulary', difficulty: 'medium',
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
    id: 'vocab-q10', category: 'Academic Vocabulary', difficulty: 'easy',
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
    id: 'vocab-q11', category: 'Academic Vocabulary', difficulty: 'medium',
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
    id: 'vocab-q12', category: 'Academic Vocabulary', difficulty: 'easy',
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
    id: 'vocab-q13', category: 'Precise Meaning', difficulty: 'medium',
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
    id: 'vocab-q14', category: 'Precise Meaning', difficulty: 'hard',
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
    id: 'vocab-q15', category: 'Tone & Connotation', difficulty: 'easy',
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
    id: 'vocab-q16', category: 'Precise Meaning', difficulty: 'medium',
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
    id: 'vocab-q17', category: 'Academic Vocabulary', difficulty: 'medium',
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
    id: 'vocab-q18', category: 'Tone & Connotation', difficulty: 'hard',
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
    id: 'vocab-q19', category: 'Precise Meaning', difficulty: 'hard',
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
    id: 'vocab-q20', category: 'Precise Meaning', difficulty: 'easy',
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
    id: 'vocab-q21', category: 'Academic Vocabulary', difficulty: 'medium',
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
    id: 'vocab-q22', category: 'Precise Meaning', difficulty: 'hard',
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
    id: 'vocab-q23', category: 'Tone & Connotation', difficulty: 'easy',
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
    id: 'vocab-q24', category: 'Precise Meaning', difficulty: 'medium',
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
    id: 'vocab-q25', category: 'Academic Vocabulary', difficulty: 'medium',
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
    id: 'vocab-q26', category: 'Precise Meaning', difficulty: 'medium',
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
    id: 'vocab-q27', category: 'Tone & Connotation', difficulty: 'easy',
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
    id: 'vocab-q28', category: 'Academic Vocabulary', difficulty: 'medium',
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
    id: 'vocab-q29', category: 'Precise Meaning', difficulty: 'hard',
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
    id: 'vocab-q30', category: 'Precise Meaning', difficulty: 'hard',
    generate() {
      const { options, correctIndex } = makeOptions('nascent', ['established', 'declining', 'obsolete'])
      return { id: this.id, category: this.category,
        question: `In the early 2010s, the commercial space industry was still _______; only a handful of private companies had attempted orbital launches, and none had yet achieved the reliability needed to compete with government-funded space programs. A decade later, the sector had matured dramatically.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Nascent" means just beginning to develop. The passage describes an industry in its early stages that later matured, making "nascent" the best fit.`
      }
    }
  },
  {
    id: 'vocab-q31', category: 'Precise Meaning', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('resilient', ['fragile', 'sluggish', 'vulnerable'])
      return { id: this.id, category: this.category,
        question: `Tardigrades, microscopic animals less than a millimeter long, are remarkably _______: when their surroundings dry out, they can enter a dormant state and then revive, sometimes years later, once water returns.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Resilient" means able to withstand or recover from harsh conditions. The passage describes tardigrades surviving drying out and reviving later, which is resilience. "Fragile" is the opposite. "Vulnerable" means easily harmed, which contradicts surviving years without water. "Sluggish" describes slow movement, not survival.`
      }
    }
  },
  {
    id: 'vocab-q32', category: 'Precise Meaning', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('durable', ['temporary', 'decorative', 'unstable'])
      return { id: this.id, category: this.category,
        question: `The stone walls of Great Zimbabwe, built without mortar between roughly the eleventh and fifteenth centuries, have proved remarkably _______: many of the granite structures are still standing today.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Durable" means able to last a long time. Walls that are still standing centuries after construction are durable. "Temporary" and "unstable" contradict the fact that the walls still stand. "Decorative" describes appearance, but the colon points to how long the walls have lasted.`
      }
    }
  },
  {
    id: 'vocab-q33', category: 'Precise Meaning', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('unforgiving', ['flexible', 'inexpensive', 'modern'])
      return { id: this.id, category: this.category,
        question: `Because watercolor paint dries quickly and is difficult to cover once it has soaked into the paper, many artists consider it an especially _______ medium: a single misplaced stroke can be nearly impossible to correct.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Unforgiving" means allowing little room for error. The passage explains that mistakes in watercolor are nearly impossible to correct. "Flexible" suggests easy adjustment, the opposite. "Inexpensive" concerns cost, and "modern" concerns age; neither is supported by the explanation after the colon.`
      }
    }
  },
  {
    id: 'vocab-q34', category: 'Academic Vocabulary', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('influence', ['record', 'conceal', 'verify'])
      return { id: this.id, category: this.category,
        question: `Survey researchers warn that the wording of a question can _______ the answers people give: asking whether respondents "support" a policy rather than whether they "oppose" it may noticeably shift the results.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Influence" means to have an effect on. The passage says wording can shift results, so wording affects answers. "Record" describes simply capturing answers, not changing them. "Conceal" suggests hiding answers, and "verify" suggests confirming them; neither matches the idea that wording shifts responses.`
      }
    }
  },
  {
    id: 'vocab-q35', category: 'Precise Meaning', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('detailed', ['random', 'brief', 'secretive'])
      return { id: this.id, category: this.category,
        question: `A honeybee returning to its hive can tell other bees where to find food by performing a "waggle dance." The message the dance conveys is surprisingly _______, indicating both the direction of the food relative to the sun and how far away it is.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Detailed" means containing many specific pieces of information. The dance communicates both direction and distance, so its message is detailed. "Random" contradicts the idea that the dance carries meaningful information. "Brief" concerns length, which the passage does not discuss, and "secretive" is contradicted by the dance being used to share information with other bees.`
      }
    }
  },
  {
    id: 'vocab-q36', category: 'Precise Meaning', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('invaluable', ['useless', 'confusing', 'irrelevant'])
      return { id: this.id, category: this.category,
        question: `The Rosetta Stone proved _______ to scholars trying to decipher Egyptian hieroglyphs, because it presented the same decree in hieroglyphic script, in Demotic script, and in ancient Greek, a language scholars could already read.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Invaluable" means extremely useful. Because the stone paired unknown scripts with a readable language, it was extremely helpful for decipherment. "Useless" is the opposite. "Confusing" contradicts the explanation that a known language made the text readable. "Irrelevant" is ruled out because the stone contained the very scripts scholars were trying to read.`
      }
    }
  },
  {
    id: 'vocab-q37', category: 'Academic Vocabulary', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('shortage', ['surplus', 'discount', 'clearance'])
      return { id: this.id, category: this.category,
        question: `When a popular video game console sold out in stores weeks before the holidays, resellers took advantage of the _______ by listing their remaining units online at several times the original price.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `A "shortage" is a situation in which there is not enough of something. The console sold out, so supply fell short of demand, and resellers raised prices. "Surplus" means too much supply, the opposite. A "discount" or a "clearance" would lower prices rather than raise them, and neither fits a product that has sold out.`
      }
    }
  },
  {
    id: 'vocab-q38', category: 'Tone & Connotation', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('cautious', ['certain', 'thrilled', 'careless'])
      return { id: this.id, category: this.category,
        question: `Although the experimental treatment performed well in mice, the researchers remained _______ about its prospects in humans, noting that many treatments that succeed in animal studies go on to fail in clinical trials.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Cautious" means careful to avoid overconfidence. The researchers note that many treatments fail in humans, so they are careful about expectations. "Certain" and "thrilled" suggest confidence or excitement, which the word "Although" and the warning about failed trials rule out. "Careless" is the opposite of the researchers' careful attitude.`
      }
    }
  },
  {
    id: 'vocab-q39', category: 'Precise Meaning', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('restrain', ['expand', 'protect', 'describe'])
      return { id: this.id, category: this.category,
        question: `Invasive species often thrive in new habitats because they arrive without the predators and diseases that _______ their populations in their native ranges. Freed from those pressures, their numbers can grow rapidly.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Restrain" means to hold back or limit. The passage says that without predators and diseases, invasive populations grow rapidly, so those pressures normally limit population size. "Expand" is the opposite. Predators and diseases do not "protect" populations, and "describe" makes no sense as something predators do.`
      }
    }
  },
  {
    id: 'vocab-q40', category: 'Tone & Connotation', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('welcomed', ['opposed', 'overlooked', 'delayed'])
      return { id: this.id, category: this.category,
        question: `The city's decision to keep its public libraries open later on weeknights was _______ by residents: at a public meeting, dozens of parents and students spoke in favor of the change, and no one spoke against it.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Welcomed" means received with approval. Residents spoke in favor of the change with no opposition. "Opposed" is contradicted by the absence of objections. "Overlooked" is ruled out because dozens of people attended to comment. "Delayed" describes timing, which the passage never mentions.`
      }
    }
  },
  {
    id: 'vocab-q41', category: 'Academic Vocabulary', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('porous', ['impermeable', 'compacted', 'polished'])
      return { id: this.id, category: this.category,
        question: `Because the region's limestone bedrock is _______, rainwater seeps easily through it and collects in underground aquifers instead of running off the surface into streams.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Porous" means full of tiny openings that let liquid pass through. Water seeping easily through rock requires the rock to be porous. "Impermeable" means water cannot pass through, the opposite. "Compacted" suggests tightly packed material that would slow water rather than let it seep easily. "Polished" describes a smooth surface and has nothing to do with water passing through rock.`
      }
    }
  },
  {
    id: 'vocab-q42', category: 'Tone & Connotation', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('illegitimate', ['generous', 'harmless', 'temporary'])
      return { id: this.id, category: this.category,
        question: `Many American colonists regarded the Stamp Act of 1765 as _______, arguing that the British Parliament had no right to tax them because the colonies had no elected representatives in that body.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Illegitimate" means not authorized by law or proper authority. The colonists argued that Parliament had no right to tax them, a challenge to its authority. "Generous" and "harmless" contradict the colonists' objection. "Temporary" concerns duration, but their argument was about whether the tax was rightful at all.`
      }
    }
  },
  {
    id: 'vocab-q43', category: 'Tone & Connotation', difficulty: 'easy',
    generate() {
      const { options, correctIndex } = makeOptions('compelling', ['unfocused', 'cheerful', 'obscure'])
      return { id: this.id, category: this.category,
        question: `Dorothea Lange's photographs of migrant farm workers during the Great Depression were so _______ that they helped persuade both the public and government officials that the workers urgently needed aid.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Compelling" means powerfully persuasive or attention-grabbing. The photographs helped convince people to support aid, which shows their persuasive power. "Unfocused" suggests poor quality, which would not explain their effect. "Cheerful" clashes with images of hardship that prompted calls for aid, and "obscure" is contradicted by their influence on the public.`
      }
    }
  },
  {
    id: 'vocab-q44', category: 'Precise Meaning', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('sprawling', ['narrow', 'private', 'recent'])
      return { id: this.id, category: this.category,
        question: `Despite its name, the Silk Road was not a single road. It was a _______ web of overland and maritime routes that for centuries linked China with Central Asia, the Middle East, and the Mediterranean world.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Sprawling" means spreading out widely and irregularly. The passage describes many land and sea routes connecting distant regions. "Narrow" contradicts the idea of a wide web of routes. "Private" is unsupported, since the routes were used by many traders across regions. "Recent" is ruled out by "for centuries."`
      }
    }
  },
  {
    id: 'vocab-q45', category: 'Precise Meaning', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('spare', ['ornate', 'rambling', 'lyrical'])
      return { id: this.id, category: this.category,
        question: `The novelist is admired for her _______ prose. She favors short declarative sentences, avoids adjectives wherever she can, and rarely allows a paragraph to run longer than a few lines.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Spare" describes writing that is lean and free of excess. Short sentences, few adjectives, and brief paragraphs are all features of spare prose. "Ornate" and "rambling" suggest elaborate or wandering writing, the opposite. "Lyrical" suggests musical, expressive language, which does not match a style built on avoiding adjectives and keeping sentences short.`
      }
    }
  },
  {
    id: 'vocab-q46', category: 'Academic Vocabulary', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('transitional', ['specialized', 'ordinary', 'isolated'])
      return { id: this.id, category: this.category,
        question: `Tiktaalik, which lived roughly 375 million years ago, is among the best-known _______ fossils. The animal combined fish features, such as scales and fins, with features of land animals, such as a flexible neck and sturdy, wrist-like bones inside its fins, placing it between the two groups.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Transitional" describes something that marks a stage between two forms. Tiktaalik combined traits of fish and land animals and sits "between the two groups." "Specialized" suggests adaptation to one narrow role, not a blend of two. "Ordinary" is contradicted by its fame and unusual mix of features. "Isolated" is ruled out because the passage stresses its connection to two groups.`
      }
    }
  },
  {
    id: 'vocab-q47', category: 'Precise Meaning', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('fleeting', ['sweeping', 'enduring', 'peaceful'])
      return { id: this.id, category: this.category,
        question: `The immediate effect of the Magna Carta was _______: within months of its sealing in 1215, King John persuaded the pope to annul the charter, and England slid into civil war. Its reputation as a foundation of constitutional government developed only over later centuries.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Fleeting" means lasting a very short time. The charter was annulled within months, so its immediate effect was brief. "Sweeping" and "enduring" contradict the rapid annulment. "Peaceful" is contradicted by the civil war that followed.`
      }
    }
  },
  {
    id: 'vocab-q48', category: 'Academic Vocabulary', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('overestimate', ['tolerate', 'calculate', 'understate'])
      return { id: this.id, category: this.category,
        question: `Behavioral economists have found that people tend to _______ risks that are vivid and dramatic, such as plane crashes, while giving too little weight to dangers that are more common but less memorable, such as car accidents.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Overestimate" means to judge something as greater than it is. The sentence contrasts the blank with "giving too little weight to" more common dangers, so people must judge dramatic risks as larger than they are. "Understate" points the same way as "giving too little weight to," which destroys the contrast. "Calculate" and "tolerate" say nothing about misjudging the size of a risk, so neither sets up the contrast with the neglected everyday dangers.`
      }
    }
  },
  {
    id: 'vocab-q49', category: 'Precise Meaning', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('in harmony with', ['in conflict with', 'in contrast to', 'hidden from'])
      return { id: this.id, category: this.category,
        question: `Frank Lloyd Wright designed Fallingwater, a house in rural Pennsylvania, to appear _______ its natural setting: the house is built directly over a waterfall, and its walls are made of sandstone quarried on the property.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"In harmony with" means fitting together agreeably. Building over the waterfall and using stone from the site both tie the house to its setting. "In conflict with" and "in contrast to" suggest the house clashes with or stands apart from nature, the opposite of the details given. "Hidden from" is illogical, since a house cannot be hidden from its own setting.`
      }
    }
  },
  {
    id: 'vocab-q50', category: 'Precise Meaning', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('inaccessible', ['familiar', 'irrelevant', 'hostile'])
      return { id: this.id, category: this.category,
        question: `Because Venus is covered by thick clouds, its surface was long _______ to optical telescopes. Only radar, which can penetrate the cloud layer, allowed scientists to map the planet's mountains and plains in detail.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Inaccessible" means impossible to reach or observe. Clouds blocked optical telescopes, and only radar could see the surface. "Familiar" is the opposite. "Irrelevant" misstates the problem, since the surface mattered but could not be seen. "Hostile" describes harsh conditions, but the passage is about telescopes being unable to see the surface, not about the surface being dangerous.`
      }
    }
  },
  {
    id: 'vocab-q51', category: 'Precise Meaning', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('sweeping', ['modest', 'cautious', 'regional'])
      return { id: this.id, category: this.category,
        question: `The reforms of Japan's Meiji government were _______ in scope. Within a few decades of 1868, the government abolished the privileged samurai class, created a national army based on conscription, built railways, and established a nationwide system of public schools.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Sweeping" means wide-ranging. The reforms touched social class, the military, transportation, and education across the country. "Modest" and "cautious" contradict the large number of major changes. "Regional" is ruled out by the national army and nationwide schools.`
      }
    }
  },
  {
    id: 'vocab-q52', category: 'Tone & Connotation', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('overstated', ['accurate', 'defensible', 'offensive'])
      return { id: this.id, category: this.category,
        question: `Linguists caution that the popular claim that a language "has no word for" some idea is often _______. Speakers can usually express the idea through a phrase or description, even when no single word for it exists.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Overstated" means exaggerated. The claim suggests speakers cannot express an idea, when they usually can with a phrase. "Accurate" and "defensible" both contradict the linguists' caution, which says the claim usually fails. "Offensive" concerns giving insult, which does not match the point that the claim goes too far.`
      }
    }
  },
  {
    id: 'vocab-q53', category: 'Academic Vocabulary', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('spread', ['disappear', 'stabilize', 'originate'])
      return { id: this.id, category: this.category,
        question: `Antibiotic resistance can _______ rapidly through a population of bacteria. When a drug kills the susceptible cells, the few resistant survivors multiply, and within a short time they may make up most of the population.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Spread" means to extend to a larger share of a group. Resistant bacteria multiply until they dominate the population. "Disappear" and "stabilize" are contradicted by resistance growing. "Originate" refers to first appearing, but the passage describes resistant survivors that already exist becoming more common.`
      }
    }
  },
  {
    id: 'vocab-q54', category: 'Tone & Connotation', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('minimalist', ['extravagant', 'cluttered', 'traditional'])
      return { id: this.id, category: this.category,
        question: `Critics praised the director's _______ staging of the play. The set consisted of a bare wooden platform, two chairs, and a single lamp, leaving the actors' performances to carry the story.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Minimalist" describes a style that uses as few elements as possible. A bare platform with two chairs and a lamp is minimalist. "Extravagant" and "cluttered" are the opposite. "Traditional" is unsupported, since nothing suggests a bare stage was the customary way to present this play.`
      }
    }
  },
  {
    id: 'vocab-q55', category: 'Tone & Connotation', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('noncommittal', ['enthusiastic', 'hostile', 'candid'])
      return { id: this.id, category: this.category,
        question: `The mayor's response was deliberately _______. Asked whether she would support the proposed stadium, she said only that the plan "raises interesting questions" and that she looked forward to "further discussion."\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Noncommittal" means avoiding a clear position. The mayor neither supports nor opposes the stadium. "Enthusiastic" and "hostile" each imply a definite stance. "Candid" means frank and direct, the opposite of her deliberately vague reply.`
      }
    }
  },
  {
    id: 'vocab-q56', category: 'Precise Meaning', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('rejected', ['celebrated', 'unchallenged', 'misquoted'])
      return { id: this.id, category: this.category,
        question: `Although Alfred Wegener's theory of continental drift was largely _______ by geologists during his lifetime, evidence of seafloor spreading gathered in the 1960s led scientists to embrace plate tectonics, a closely related theory.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Rejected" means refused acceptance. "Although" sets up a contrast with later scientists embracing a related theory, so geologists must have refused the idea earlier. "Celebrated" and "unchallenged" remove the contrast. "Misquoted" is unsupported; nothing suggests people repeated his words inaccurately.`
      }
    }
  },
  {
    id: 'vocab-q57', category: 'Precise Meaning', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('puzzling', ['predictable', 'unsurprising', 'fortunate'])
      return { id: this.id, category: this.category,
        question: `The octopus's skill at changing color to match its surroundings is all the more _______ because the animal appears to be colorblind: its eyes seem to lack the multiple types of light receptors that most color-seeing animals use to distinguish colors.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Puzzling" means difficult to explain. It is hard to understand how an animal that cannot see color matches colors. "Predictable" and "unsurprising" contradict "all the more," which signals something surprising. "Fortunate" suggests luck, but the passage emphasizes a scientific mystery.`
      }
    }
  },
  {
    id: 'vocab-q58', category: 'Academic Vocabulary', difficulty: 'medium',
    generate() {
      const { options, correctIndex } = makeOptions('chronicles', ['predicts', 'disputes', 'trivializes'])
      return { id: this.id, category: this.category,
        question: `Jacob Lawrence's Migration Series, a set of sixty paintings completed in 1941, _______ the movement of Black Americans from the rural South to northern cities, following migrants from their reasons for leaving to the conditions they found when they arrived.\n\nWhich choice completes the text with the most logical and precise word or phrase?`,
        options, correctIndex,
        explanation: `"Chronicles" means records a series of events in order. The series follows migrants from departure to arrival. "Predicts" is ruled out because the migration was already under way. "Disputes" suggests arguing against the events, and "trivializes" suggests treating them as unimportant; neither fits a series that carefully traces the migration from start to finish.`
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
