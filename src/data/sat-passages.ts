/**
 * SAT Reading Passage Bank — 60 passages across 4 genres
 *
 * Digital SAT format: short passages (1-2 paragraphs) with 1 question each.
 * Covers literary fiction, social science, natural science, and historical documents.
 */

export interface PassageQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  skill: string
  /** Authored questions awaiting human review before being treated as canonical. */
  needsReview?: boolean
}

export interface ReadingPassage {
  id: string
  title: string
  genre: 'literary' | 'social-science' | 'natural-science' | 'historical'
  text: string
  questions: PassageQuestion[]
}

export const SAT_PASSAGES: ReadingPassage[] = [
  {
    id: 'lit-01',
    title: 'The Garden Wall',
    genre: 'literary',
    text: `Maria pressed her palm flat against the stone wall that divided her family’s property from the abandoned garden next door. The stones were warm from the afternoon sun, rough beneath her fingers. She had watched through the cracks as wild blackberry brambles slowly reclaimed the footpaths, as ivy crept over the wrought-iron bench. Her mother said the garden had once been the pride of Mr. Harmon, who spent every morning there until his knees gave out. Now, at fifteen, Maria understood something her mother had not said aloud: that the wall was not really meant to keep the garden out — it was meant to keep the sadness in.`,
    questions: [
      {
        question: 'The narrator suggests that Maria’s understanding of the wall’s purpose differs from its literal function in that the wall primarily serves to',
        options: [
          'protect the family from dangerous plants',
          'contain the emotional weight of loss and decline',
          'prevent Maria from exploring forbidden territory',
          'mark a legal property boundary between neighbors'
        ],
        correctAnswer: 1,
        explanation: 'The final sentence reveals the wall symbolically contains emotional loss rather than serving a practical barrier function.',
        skill: 'central-ideas'
      },
      {
        question: 'As used in the passage, “reclaimed” (the brambles slowly reclaimed the footpaths) most nearly means',
        options: [
          'legally repossessed',
          'gradually overgrew and covered',
          'cleaned and restored',
          'formally demanded the return of'
        ],
        correctAnswer: 1,
        explanation: 'In context the wild brambles “reclaimed” the paths by overgrowing them as the garden went untended — a sense of gradual natural takeover, not a legal or restorative one.',
        skill: 'vocabulary-in-context',
      }
    ]
  },
  {
    id: 'lit-02',
    title: 'The Letter',
    genre: 'literary',
    text: `James folded the letter into thirds and slid it back into the envelope. He had read it four times now, and each time the words settled differently, like sediment in a glass of water. His sister wrote that their father was “doing well, all things considered” — a phrase James had learned to decode years ago. It meant things were not well at all, but that she lacked either the energy or the vocabulary to say so plainly. He placed the letter on the kitchen counter, anchoring it beneath the salt shaker, and stared out the window at the dark line of pines.`,
    questions: [
      {
        question: 'Based on the passage, James’s response to the letter is best described as',
        options: [
          'relieved by the positive news about his father',
          'resigned to an unspoken reality behind polite language',
          'angry at his sister for withholding information',
          'confused about the meaning of his sister’s words'
        ],
        correctAnswer: 1,
        explanation: 'James has learned to decode the euphemism, showing resignation rather than confusion or relief.',
        skill: 'inference'
      },
      {
        question: 'The simile comparing the words to “sediment in a glass of water” most directly emphasizes that the letter’s meaning',
        options: [
          'becomes clearer and more settled with each rereading',
          'shifts and resettles differently each time James reads it',
          'is deliberately obscured by his sister’s word choice',
          'grows more upsetting the longer James considers it'
        ],
        correctAnswer: 1,
        explanation: 'The text says “each time the words settled differently, like sediment” — the simile stresses that the meaning re-settles differently on each reading, not that it clarifies.',
        skill: 'craft-and-structure',
      }
    ]
  },
  {
    id: 'lit-03',
    title: 'Crossing the Bridge',
    genre: 'literary',
    text: `On the first day of her new commute, Elena noticed how the pedestrian bridge swayed underfoot when the wind picked up. By the second week she stopped noticing. By the sixth month she could cross it while reading her phone, coffee in hand, without once looking at the river forty feet below. It occurred to her, one morning when she did look down, that this was how most adaptation worked: the remarkable became invisible, and the frightening became mundane. She wondered what else she had stopped seeing.`,
    questions: [
      {
        question: 'The primary purpose of the passage is to',
        options: [
          'describe the engineering of a pedestrian bridge',
          'illustrate how habituation can lead to a loss of awareness',
          'criticize Elena’s careless commuting habits',
          'explain why bridges sway in windy conditions'
        ],
        correctAnswer: 1,
        explanation: 'Elena’s progressive numbness to the swaying bridge illustrates how habituation dulls awareness of the remarkable.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'lit-04',
    title: 'The Piano Lesson',
    genre: 'literary',
    text: `Mrs. Okafor placed her hands over Daniel’s on the piano keys, guiding his fingers through the opening bars of Chopin’s Nocturne in E-flat. “You are playing the notes,” she said, “but you are not playing the music.” Daniel frowned. He had practiced for three hours the night before, hitting every note precisely. “Close your eyes,” she instructed. “Think about someone you miss.” He thought of his grandmother, who had died the previous spring, and when he played the passage again his fingers found something the sheet music could not notate. Mrs. Okafor nodded. “Now you are beginning.”`,
    questions: [
      {
        question: 'Mrs. Okafor’s teaching method primarily emphasizes',
        options: [
          'technical precision and accuracy',
          'the importance of regular practice',
          'emotional connection as the foundation of musical expression',
          'memorizing music rather than reading sheet music'
        ],
        correctAnswer: 2,
        explanation: 'Mrs. Okafor tells Daniel he plays the notes but not the music and asks him to think of someone he misses, showing emotional connection transforms technical playing into true musical expression.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'lit-05',
    title: 'The Inheritance',
    genre: 'literary',
    text: `When the lawyer read the will, Amara was surprised to learn she had inherited not the house or the savings account, but her grandfather’s workshop — a cinder-block building behind the main house, filled with hand tools that smelled of pine resin and machine oil. Her cousins received the valuable assets. She stood at the workbench, running her thumb along a groove worn smooth by decades of her grandfather’s hands. She understood then: he had given her not a thing, but a practice. The tools were an invitation to build, not a gift to sell.`,
    questions: [
      {
        question: 'The passage suggests that Amara’s grandfather intended the workshop to represent',
        options: [
          'a financial safety net for emergencies',
          'a continuation of craft and purpose rather than monetary wealth',
          'an obligation to maintain the family property',
          'a reminder of his disappointment in his other grandchildren'
        ],
        correctAnswer: 1,
        explanation: 'Amara realizes the tools are an invitation to build, not a gift to sell, indicating her grandfather valued passing on his craft over material wealth.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'lit-06',
    title: 'Morning Routine',
    genre: 'literary',
    text: `Every morning at 5:47, before the rest of the apartment stirred, Rosa brewed coffee in the dark kitchen. She did not turn on the light — she knew each surface, each handle, each distance by feel. The coffee maker hummed its familiar warmth. Standing at the window with her cup, she watched the garbage truck make its rounds, the headlights tracing slow arcs. These thirteen minutes of solitude were her cathedral, the only space in the day that belonged entirely to her. By 6:00, her children would wake, and the machinery of other people’s needs would begin.`,
    questions: [
      {
        question: 'The phrase “her cathedral” most nearly suggests that Rosa regards her morning solitude as',
        options: [
          'a religious obligation',
          'a sacred and essential personal space',
          'an architectural interest',
          'an escape from her unhappy family'
        ],
        correctAnswer: 1,
        explanation: 'Comparing solitude to a cathedral suggests it is sacred and personally essential — a reverent space, not literally religious.',
        skill: 'vocabulary-context'
      }
    ]
  },
  {
    id: 'lit-07',
    title: 'The Photograph',
    genre: 'literary',
    text: `The photograph showed three women laughing on a porch — Keiko’s grandmother, her great-aunt, and a woman no one could identify. The unknown woman wore a floral dress and held a glass of something golden. Keiko had asked about her many times, but her grandmother always changed the subject with a deliberate, practiced ease that suggested the avoidance itself held meaning. When her grandmother passed away, Keiko found seven more photographs of the same woman, each carefully stored in separate envelopes, each labeled only with a date.`,
    questions: [
      {
        question: 'The detail that the grandmother’s avoidance was “deliberate, practiced ease” most strongly implies that',
        options: [
          'the grandmother had simply forgotten the woman',
          'the unknown woman was a casual acquaintance',
          'the grandmother was hiding a significant personal connection',
          'the photographs were taken by accident'
        ],
        correctAnswer: 2,
        explanation: 'Practiced, deliberate avoidance combined with carefully preserved and separately stored photos suggests a significant hidden relationship.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'lit-08',
    title: 'The Storm Cellar',
    genre: 'literary',
    text: `The tornado siren began at 4:15, and within two minutes the Nguyen family was underground. The cellar smelled of damp concrete and old preserves. Mr. Nguyen gathered his three children against him while the house above groaned like a living thing. When they emerged forty minutes later, the oak tree that had shaded four generations of birthday parties lay across the driveway, its roots reaching toward the sky like open hands. Everything else was intact. “We were lucky,” said Mrs. Nguyen. Her youngest daughter looked at the fallen tree and was not sure that was the right word.`,
    questions: [
      {
        question: 'The daughter’s reaction to her mother’s statement suggests she',
        options: [
          'is too young to understand the danger',
          'recognizes that surviving and being lucky are not the same thing',
          'is angry at her mother for being dismissive',
          'wants to replant the tree immediately'
        ],
        correctAnswer: 1,
        explanation: 'The daughter’s doubt about lucky suggests she grasps that the loss of the oak tree, which held four generations of memories, complicates a simple claim of good fortune.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'lit-09',
    title: 'The Translator',
    genre: 'literary',
    text: `Fatima translated for her parents at every doctor’s appointment, every parent-teacher conference, every phone call with the landlord. At twelve, she had learned words like “deductible” and “lease renewal” before she learned words like “sleepover” or “allowance.” Her English teacher once praised her vocabulary, calling it “remarkably advanced for her age.” Fatima smiled but did not explain that her vocabulary was not a sign of precociousness — it was a map of responsibilities no child should have to carry.`,
    questions: [
      {
        question: 'The passage primarily conveys the idea that',
        options: [
          'bilingual children have academic advantages',
          'language ability can mask the burden of adult responsibilities placed on children',
          'Fatima’s teacher is insensitive to immigrant families',
          'translating for parents is a rewarding family role'
        ],
        correctAnswer: 1,
        explanation: 'Fatima’s advanced vocabulary, praised as precociousness, actually reflects the adult responsibilities she carries.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'lit-10',
    title: 'The Road Not Taken Back',
    genre: 'literary',
    text: `After twenty-two years as a corporate lawyer, Marcus drove past the pottery studio on Route 9 every Tuesday and Thursday evening. He never stopped. He told himself it was because the parking lot was always full, or because his suits would get dusty, or because starting something at forty-eight was foolish. But one evening the studio’s sign was dark — “Closed Permanently.” Marcus sat in his car for ten minutes, engine running, feeling a door close that he had never quite opened.`,
    questions: [
      {
        question: 'Marcus’s reaction to the studio’s closure reveals that he',
        options: [
          'is relieved he never wasted time on pottery',
          'regrets never pursuing an interest he repeatedly deferred',
          'is upset about losing a convenient landmark on his commute',
          'plans to find another pottery studio nearby'
        ],
        correctAnswer: 1,
        explanation: 'Sitting in his car feeling a door close that he had never quite opened conveys regret — the opportunity he always deferred is now permanently gone.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'lit-11',
    title: 'Dinner Conversation',
    genre: 'literary',
    text: `At the holiday table, Priya’s uncle asked what she planned to do after graduation. “I’m applying to art school,” she said. The silence lasted exactly long enough for her aunt to pick up the serving spoon and say, “Who wants more potatoes?” Priya noticed that no one made eye contact with her for the rest of the meal, though they smiled when they passed the dishes. She had learned, from years of these gatherings, that her family communicated disapproval not through words but through the careful choreography of avoiding them.`,
    questions: [
      {
        question: 'Which choice best describes the family’s method of expressing disapproval?',
        options: [
          'vocal criticism and argument',
          'strategic silence and avoidance',
          'offering unsolicited alternative career advice',
          'leaving the table in protest'
        ],
        correctAnswer: 1,
        explanation: 'The family communicates disapproval through silence, changing the subject, avoiding eye contact, and the careful choreography of avoiding direct words.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'lit-12',
    title: 'The Mechanic',
    genre: 'literary',
    text: `Leo’s hands were permanently stained with grease — it had worked itself into the ridges of his fingerprints and settled there like a second skin. His daughter, home from college, watched him diagnose a transmission problem by sound alone, tilting his head the way a musician listens for a wrong note. She was studying engineering and could describe the physics of a drivetrain in equations. But her father knew the car the way she imagined poets knew language: not through analysis but through years of intimate, physical attention.`,
    questions: [
      {
        question: 'The comparison between Leo and a poet suggests that the author views mechanical expertise as',
        options: [
          'inferior to academic engineering knowledge',
          'a form of intuitive mastery gained through prolonged experience',
          'an outdated skill in the age of technology',
          'something that cannot be taught in schools'
        ],
        correctAnswer: 1,
        explanation: 'Comparing Leo’s mechanical knowledge to a poet’s relationship with language emphasizes intuitive mastery through intimate, physical attention rather than formal analysis.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'lit-13',
    title: 'The Empty Chair',
    genre: 'literary',
    text: `The chair at the head of the table remained empty at every Sunday dinner for two years after Grandpa Joe died. No one sat there; no one moved it. It was set with a placemat and a glass of water as if he might walk in, brushing snow from his shoulders, complaining about the cold. Then one Sunday, five-year-old Marco climbed into it. The family froze. Marco looked around, confused by the sudden attention, and said, “It looked lonely.” His grandmother let out a sound that was both a laugh and a sob, and nodded.`,
    questions: [
      {
        question: 'Marco’s action of sitting in the empty chair functions in the passage as',
        options: [
          'a disrespectful intrusion on family tradition',
          'an innocent gesture that breaks a grief ritual the adults could not',
          'a deliberate attempt to replace his grandfather',
          'evidence that children do not understand death'
        ],
        correctAnswer: 1,
        explanation: 'Marco’s innocent observation that the chair looked lonely breaks the family’s unspoken grief ritual. His grandmother’s mixed laugh-sob shows relief and emotion, not anger.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'lit-14',
    title: 'The Bookstore',
    genre: 'literary',
    text: `The Used Book Emporium smelled like vanilla and dust, a combination that Nadia associated with possibility. She came every Saturday, not to buy — she rarely had money — but to read first chapters. She had a theory: you could know everything you needed about a book from its first page. A good first page, she believed, was a handshake between author and reader — firm, honest, with just enough mystery to make you want to continue the conversation. She had read over three hundred first pages by now, and owned exactly nine books.`,
    questions: [
      {
        question: 'The handshake metaphor primarily serves to illustrate',
        options: [
          'Nadia’s view that opening pages establish a trust-based relationship between reader and author',
          'the physical experience of holding a book',
          'Nadia’s shyness around meeting new people',
          'the importance of buying books rather than borrowing them'
        ],
        correctAnswer: 0,
        explanation: 'The handshake metaphor describes Nadia’s belief that a first page establishes a relationship of trust and intrigue between author and reader.',
        skill: 'vocabulary-context'
      }
    ]
  },
  {
    id: 'lit-15',
    title: 'First Snow',
    genre: 'literary',
    text: `The first snow of the year always made Thomas think of his older brother, who had once told him that each snowflake carried a secret. “They’re messages,” David had said, “from clouds that have traveled thousands of miles. By the time they reach you, the messages have been encrypted — frozen into crystals.” Thomas was eight then, and David was the kind of brother who made the world feel larger than it was. Now Thomas was forty-one, and David had been gone for twelve years, and the first snow still arrived each November like a letter he could not quite read.`,
    questions: [
      {
        question: 'The recurring motif of the first snow primarily symbolizes',
        options: [
          'Thomas’s fear of winter weather',
          'a persistent connection to his brother that endures beyond death',
          'David’s career as a meteorologist',
          'the literal scientific process of crystallization'
        ],
        correctAnswer: 1,
        explanation: 'The snow carries David’s childhood description of messages and arrives like a letter he could not quite read, symbolizing an ongoing emotional connection to his deceased brother.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'soc-01',
    title: 'The Anchoring Effect',
    genre: 'social-science',
    text: `Psychologists Amos Tversky and Daniel Kahneman demonstrated that people’s numerical estimates are heavily influenced by an initial reference point, even when that reference is arbitrary. In one study, participants spun a rigged roulette wheel that landed on either 10 or 65, then estimated the percentage of African countries in the United Nations. Those who saw the number 10 guessed an average of 25%, while those who saw 65 guessed 45%. The initial number — entirely unrelated to the question — anchored their estimates. This anchoring effect has since been found in legal sentencing, salary negotiations, and retail pricing.`,
    questions: [
      {
        question: 'The primary purpose of the roulette wheel experiment is to illustrate that',
        options: [
          'people are poor at estimating geographic facts',
          'unrelated numerical information systematically distorts subsequent judgments',
          'gambling influences political opinions',
          'Tversky and Kahneman were interested in games of chance'
        ],
        correctAnswer: 1,
        explanation: 'The roulette number was unrelated to African countries in the UN, yet it systematically shifted participants’ estimates.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'soc-02',
    title: 'Language and Thought',
    genre: 'social-science',
    text: `The Sapir-Whorf hypothesis proposes that the structure of a language shapes its speakers’ worldview and cognition. In its strong form — linguistic determinism — language dictates thought. Most linguists now favor the weaker version: linguistic relativity, which holds that language influences thought without fully determining it. Research with the Pirahã people of the Amazon, whose language lacks precise number words, found they struggled with exact quantity matching tasks, though they handled approximate quantities well. Such evidence supports the view that language serves as a cognitive scaffold — shaping, but not imprisoning, thought.`,
    questions: [
      {
        question: 'Based on the passage, the Pirahã research most directly supports which version of the Sapir-Whorf hypothesis?',
        options: [
          'strong linguistic determinism',
          'the complete rejection of linguistic influence',
          'weak linguistic relativity',
          'the idea that all languages are equally expressive'
        ],
        correctAnswer: 2,
        explanation: 'The Pirahã struggled with exact but not approximate quantities, suggesting language influences thought without fully determining it.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'soc-03',
    title: 'The Bystander Effect',
    genre: 'social-science',
    text: `In 1968, psychologists John Darley and Bibb Latané conducted experiments showing that individuals are less likely to intervene in an emergency when other people are present — a phenomenon they termed the bystander effect. In one study, when a participant was alone and heard another person apparently having a seizure over an intercom, 85% sought help. When participants believed four others were also listening, only 31% responded. Darley and Latané attributed this to diffusion of responsibility: each person assumes someone else will act. The finding has since been replicated across cultures, though recent meta-analyses suggest the effect weakens in clearly dangerous situations.`,
    questions: [
      {
        question: 'According to the passage, the bystander effect is most accurately explained by',
        options: [
          'people’s indifference to others’ suffering',
          'the assumption that another person in the group will take responsibility',
          'poor hearing in group settings',
          'cultural norms that discourage intervention'
        ],
        correctAnswer: 1,
        explanation: 'Darley and Latané attributed the effect to diffusion of responsibility: each person assumes someone else will act.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'soc-04',
    title: 'Growth Mindset',
    genre: 'social-science',
    text: `Psychologist Carol Dweck’s research distinguishes between fixed and growth mindsets. Individuals with fixed mindsets believe intelligence and talent are innate and unchangeable traits; those with growth mindsets view these qualities as developable through effort and learning. In classroom studies, students praised for effort showed greater persistence on difficult tasks than those praised for ability. The latter group, when faced with failure, were more likely to give up, viewing the setback as proof of limited ability. Critics note, however, that some replication studies have found smaller effects, suggesting mindset may interact with other variables like socioeconomic status.`,
    questions: [
      {
        question: 'The passage suggests that praising children for ability rather than effort can',
        options: [
          'increase their motivation on all tasks',
          'lead them to interpret failure as evidence of fixed limitations',
          'have no measurable impact on behavior',
          'improve performance only on easy tasks'
        ],
        correctAnswer: 1,
        explanation: 'Students praised for ability were more likely to give up, viewing the setback as proof of limited ability.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'soc-05',
    title: 'The Dunning-Kruger Effect',
    genre: 'social-science',
    text: `In 1999, psychologists David Dunning and Justin Kruger published research showing that individuals who perform poorly on tests of logical reasoning, grammar, and humor tend to dramatically overestimate their abilities. Participants in the lowest quartile estimated their performance to be above the 60th percentile on average. Conversely, top performers slightly underestimated their standing. Dunning and Kruger explained this asymmetry: competence provides the very skills needed to recognize competence. Without those skills, poor performers lack the metacognitive ability to see their own deficiencies.`,
    questions: [
      {
        question: 'The central argument of the Dunning-Kruger research is that',
        options: [
          'all people are poor judges of their abilities',
          'incompetence impairs the ability to recognize incompetence',
          'overconfidence always leads to failure',
          'top performers are excessively modest'
        ],
        correctAnswer: 1,
        explanation: 'The key insight is that competence provides the metacognitive skills needed to evaluate performance.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'soc-06',
    title: 'The Marshmallow Test Revisited',
    genre: 'social-science',
    text: `Walter Mischel’s famous 1972 marshmallow test offered preschoolers a choice: eat one marshmallow now, or wait fifteen minutes for two. Follow-up studies found that children who waited scored higher on SATs and had better life outcomes decades later. However, a 2018 replication by Tyler Watts and colleagues, using a larger and more socioeconomically diverse sample, found that much of the correlation disappeared after controlling for family background. Children from wealthier households delayed gratification more consistently — not because they had superior self-control, but because their experience taught them that promised rewards reliably materialized.`,
    questions: [
      {
        question: 'The 2018 replication study most significantly challenges the original marshmallow test by suggesting that',
        options: [
          'children cannot delay gratification at all',
          'the original results were fabricated',
          'economic environment, not innate self-control, largely explains the observed differences',
          'marshmallows are not an effective motivator for children'
        ],
        correctAnswer: 2,
        explanation: 'The 2018 study found correlations disappeared after controlling for family background, suggesting socioeconomic environment drove the differences.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'soc-07',
    title: 'Stereotype Threat',
    genre: 'social-science',
    text: `Psychologist Claude Steele’s research on stereotype threat demonstrates that awareness of negative stereotypes about one’s group can impair performance. In studies, African American students who were told a test measured intellectual ability performed worse than those told it was a problem-solving exercise. Similarly, women performed worse on math tests when reminded of gender stereotypes. The mechanism appears to be anxiety-induced cognitive load: worrying about confirming a stereotype consumes working memory resources needed for the task.`,
    questions: [
      {
        question: 'According to the passage, stereotype threat impairs performance primarily through',
        options: [
          'reducing motivation to succeed',
          'consuming working memory resources through anxiety',
          'causing physical illness during tests',
          'lowering the difficulty of questions students attempt'
        ],
        correctAnswer: 1,
        explanation: 'The passage identifies the mechanism as anxiety-induced cognitive load that consumes working memory resources.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'soc-08',
    title: 'Confirmation Bias',
    genre: 'social-science',
    text: `Confirmation bias — the tendency to seek, interpret, and remember information that confirms preexisting beliefs — is among the most robust findings in cognitive psychology. In a classic study, participants who supported or opposed capital punishment were given the same mixed evidence about its deterrent effect. Rather than converging toward a common assessment, both groups became more extreme in their original views, selectively interpreting ambiguous data as supporting their position. Neuroscience research has found that encountering confirming information activates reward circuits in the brain, while disconfirming evidence triggers threat-response regions.`,
    questions: [
      {
        question: 'The neuroscience research mentioned in the passage suggests that confirmation bias is',
        options: [
          'easily corrected through education',
          'a deliberate strategy people adopt consciously',
          'reinforced by neurological reward and threat responses',
          'limited to discussions about capital punishment'
        ],
        correctAnswer: 2,
        explanation: 'Confirming information activates reward circuits while disconfirming evidence triggers threat responses, indicating neurological reinforcement.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'soc-09',
    title: 'Social Media and Loneliness',
    genre: 'social-science',
    text: `A 2017 study published in the American Journal of Preventive Medicine surveyed 1,787 young adults and found that those who spent more than two hours daily on social media were twice as likely to report feelings of social isolation compared to those who spent less than thirty minutes. However, the researchers cautioned against assuming causation: it remains unclear whether social media use causes loneliness or whether individuals who already feel isolated turn to social media as a substitute for in-person interaction.`,
    questions: [
      {
        question: 'The researchers cautioned against assuming causation because',
        options: [
          'the sample size was too small to draw conclusions',
          'the direction of the relationship between social media use and loneliness is uncertain',
          'participants lied about their social media usage',
          'loneliness cannot be measured accurately'
        ],
        correctAnswer: 1,
        explanation: 'The passage notes uncertainty about whether social media causes loneliness or lonely people gravitate to social media.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'soc-10',
    title: 'The Tragedy of the Commons',
    genre: 'social-science',
    text: `In 1968, ecologist Garrett Hardin described the tragedy of the commons: when a shared resource is available to all, each individual has an incentive to use as much as possible, even though collective overuse depletes the resource for everyone. A herder who adds one extra cow to the commons gains the full benefit of that cow while sharing the cost of overgrazing with all other herders. However, economist Elinor Ostrom later demonstrated that communities frequently develop self-governing institutions to manage shared resources sustainably, challenging Hardin’s assumption that only privatization or government regulation could prevent depletion.`,
    questions: [
      {
        question: 'Ostrom’s research challenged Hardin’s framework primarily by showing that',
        options: [
          'privatization is the only solution to resource depletion',
          'shared resources never become depleted',
          'communities can self-organize to manage shared resources without external control',
          'government regulation is always superior to community management'
        ],
        correctAnswer: 2,
        explanation: 'Ostrom demonstrated that communities develop self-governing institutions to manage shared resources sustainably.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'soc-11',
    title: 'Implicit Association',
    genre: 'social-science',
    text: `The Implicit Association Test (IAT), developed by Anthony Greenwald in 1998, measures unconscious biases by recording how quickly participants associate concepts. For example, the race IAT measures the speed at which subjects pair White and Black faces with positive and negative words. Faster pairings suggest stronger implicit associations. Critics, however, question the IAT’s predictive validity: a 2019 meta-analysis found that IAT scores only weakly predicted discriminatory behavior, and that an individual’s IAT score can vary significantly across sessions.`,
    questions: [
      {
        question: 'The 2019 meta-analysis weakens the IAT as a tool by demonstrating that',
        options: [
          'no one has implicit biases',
          'IAT scores poorly predict actual discriminatory behavior and fluctuate across sessions',
          'the test takes too long to administer',
          'only Americans show implicit bias'
        ],
        correctAnswer: 1,
        explanation: 'The meta-analysis found IAT scores only weakly predicted discriminatory behavior and can vary significantly across sessions.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'soc-12',
    title: 'Rational Addiction Theory',
    genre: 'social-science',
    text: `Economists Gary Becker and Kevin Murphy proposed that addiction can be modeled as rational behavior: individuals choose addictive consumption because, given their discount rate for future well-being, the present pleasure outweighs future costs. This framework has been useful in predicting that higher cigarette taxes reduce smoking and that anticipated future price increases can affect current consumption. Critics argue the model ignores neurological evidence that addiction involves compulsive behavior driven by altered brain chemistry, which undermines the assumption of free, rational choice.`,
    questions: [
      {
        question: 'The critics mentioned in the passage would most likely argue that the rational addiction model is flawed because',
        options: [
          'cigarette taxes do not reduce smoking',
          'addiction involves neurological compulsion that contradicts the assumption of rational choice',
          'economists should not study health behaviors',
          'all smokers eventually quit voluntarily'
        ],
        correctAnswer: 1,
        explanation: 'Critics argue addiction involves compulsive behavior driven by altered brain chemistry, undermining the assumption of rational choice.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'soc-13',
    title: 'The Flynn Effect',
    genre: 'social-science',
    text: `Researcher James Flynn documented a phenomenon now bearing his name: average IQ scores have risen approximately three points per decade throughout the twentieth century across industrialized nations. This increase is too rapid to be explained by genetic change, leading researchers to identify environmental factors: improved nutrition, increased access to education, smaller family sizes, and greater exposure to abstract problem-solving through technology. Interestingly, some recent studies suggest the Flynn Effect may be reversing in certain Scandinavian countries, with IQ scores declining since the 1990s.`,
    questions: [
      {
        question: 'The passage presents the Flynn Effect as primarily caused by',
        options: [
          'genetic evolution over the twentieth century',
          'environmental improvements such as nutrition, education, and technology',
          'changes in IQ test scoring methods',
          'increased immigration to industrialized nations'
        ],
        correctAnswer: 1,
        explanation: 'The passage rules out genetic change and identifies environmental factors: improved nutrition, education, smaller family sizes, and technology exposure.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'soc-14',
    title: 'Prospect Theory',
    genre: 'social-science',
    text: `Kahneman and Tversky’s prospect theory, published in 1979, challenged the classical economic assumption that people evaluate outcomes rationally. Their research demonstrated that people feel the pain of a loss roughly twice as strongly as the pleasure of an equivalent gain — a phenomenon called loss aversion. A person who loses \\$100, for example, experiences more distress than the satisfaction they would derive from finding \\$100. Prospect theory also showed that people tend to be risk-averse when facing gains but risk-seeking when facing losses.`,
    questions: [
      {
        question: 'According to prospect theory, a person holding a stock that has lost 20% of its value would most likely',
        options: [
          'sell immediately to prevent further losses',
          'hold or take greater risks to try to recover the loss',
          'feel neutral because the loss is unrealized',
          'buy more stock because it is now cheaper'
        ],
        correctAnswer: 1,
        explanation: 'Prospect theory states people are risk-seeking when facing losses, so they tend to hold on or gamble to try to get back to their reference point.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'soc-15',
    title: 'Broken Windows Theory',
    genre: 'social-science',
    text: `In 1982, criminologists James Q. Wilson and George Kelling proposed the broken windows theory: visible signs of disorder and neglect — such as broken windows, graffiti, and litter — signal that an area is unmonitored, encouraging further criminal behavior. This theory influenced policing strategies in cities like New York, which adopted aggressive enforcement of minor offenses in the 1990s. Crime rates did fall, but researchers debate whether the decline was caused by broken windows policing or by concurrent factors such as economic growth, demographic shifts, and the decline of the crack epidemic.`,
    questions: [
      {
        question: 'The passage suggests the main challenge in evaluating broken windows policing is',
        options: [
          'crime rates did not actually decline in the 1990s',
          'isolating the effect of policing from other factors that also reduced crime',
          'researchers disagree about what constitutes a broken window',
          'Wilson and Kelling later retracted their theory'
        ],
        correctAnswer: 1,
        explanation: 'The decline in crime coincided with economic growth, demographic shifts, and the decline of the crack epidemic, making it difficult to isolate the policing effect.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-01',
    title: 'Mycorrhizal Networks',
    genre: 'natural-science',
    text: `Beneath the forest floor lies an extensive network of mycorrhizal fungi that connects the root systems of trees across vast distances. These fungal networks, sometimes called the wood wide web, facilitate the transfer of carbon, water, and nutrients between trees. Research by ecologist Suzanne Simard has shown that older mother trees can recognize their own seedlings and preferentially send them carbon and defense signals through the network. When a mother tree is dying, it increases the transfer of resources to nearby seedlings.`,
    questions: [
      {
        question: 'The passage characterizes forests as more cooperative than competitive primarily based on evidence that',
        options: [
          'trees compete for sunlight in the canopy',
          'dying trees increase resource transfer to nearby seedlings through fungal networks',
          'all trees share resources equally',
          'mycorrhizal fungi are parasitic on tree roots'
        ],
        correctAnswer: 1,
        explanation: 'Mother trees preferentially send carbon and defense signals to their seedlings and increase transfers when dying — evidence of cooperative behavior.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-02',
    title: 'CRISPR Gene Editing',
    genre: 'natural-science',
    text: `CRISPR-Cas9, a gene-editing tool adapted from bacterial immune systems, allows scientists to modify DNA sequences with unprecedented precision. The system uses a guide RNA molecule to direct the Cas9 enzyme to a specific location in the genome, where it cuts both strands of the DNA helix. The cell’s repair mechanisms then either disable the gene or insert a new sequence. While CRISPR holds promise for treating genetic diseases like sickle cell anemia and cystic fibrosis, concerns persist about off-target effects and the ethical implications of editing human germline cells, which would pass modifications to future generations.`,
    questions: [
      {
        question: 'The primary ethical concern about germline editing mentioned in the passage is that',
        options: [
          'the technology is too expensive for widespread use',
          'modifications to germline cells are inherited by future generations',
          'CRISPR only works on bacterial DNA',
          'guide RNA molecules are difficult to synthesize'
        ],
        correctAnswer: 1,
        explanation: 'The passage identifies the concern about editing germline cells, which would pass modifications to future generations.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-03',
    title: 'Ocean Acidification',
    genre: 'natural-science',
    text: `As atmospheric carbon dioxide levels have increased, the world’s oceans have absorbed roughly 30% of human-produced CO₂. When CO₂ dissolves in seawater, it forms carbonic acid, lowering the ocean’s pH — a process called ocean acidification. Since the Industrial Revolution, ocean pH has dropped from 8.2 to 8.1, representing a 26% increase in acidity. This seemingly small change has significant consequences for marine organisms that build shells or skeletons from calcium carbonate, including corals, oysters, and certain plankton.`,
    questions: [
      {
        question: 'The passage indicates that ocean acidification particularly threatens organisms that',
        options: [
          'live in deep water',
          'depend on calcium carbonate for structural formation',
          'are warm-blooded marine mammals',
          'migrate long distances annually'
        ],
        correctAnswer: 1,
        explanation: 'Acidification threatens organisms that build shells or skeletons from calcium carbonate because higher acidity makes it dissolve more readily.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-04',
    title: 'The Human Microbiome',
    genre: 'natural-science',
    text: `The human body hosts approximately 38 trillion bacterial cells — slightly more than the 30 trillion human cells — forming an ecosystem known as the microbiome. The gut microbiome alone contains over 1,000 species and encodes 150 times more genes than the human genome. Research has linked microbiome composition to conditions ranging from obesity and diabetes to depression. Notably, studies in germ-free mice have shown that transplanting gut bacteria from obese mice into lean mice causes the recipients to gain weight, even on identical diets.`,
    questions: [
      {
        question: 'The mouse transplant experiment most directly supports the claim that the microbiome',
        options: [
          'is the sole cause of obesity',
          'has a causal, not merely correlational, effect on metabolism',
          'is larger than the human genome',
          'cannot be modified after birth'
        ],
        correctAnswer: 1,
        explanation: 'Transplanting gut bacteria from obese to lean mice caused weight gain on identical diets, demonstrating a causal mechanism.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-05',
    title: 'Dark Matter',
    genre: 'natural-science',
    text: `Astronomical observations indicate that visible matter — stars, planets, gas — accounts for only about 5% of the universe’s total mass-energy. Approximately 27% consists of dark matter, a substance that does not emit, absorb, or reflect light. Its existence is inferred from gravitational effects: galaxies rotate faster than their visible mass can explain. Despite decades of experiments, dark matter has never been directly detected. Some physicists have proposed Modified Newtonian Dynamics (MOND), which adjusts gravity equations rather than positing unseen matter, but MOND fails to explain observations at the galaxy cluster scale.`,
    questions: [
      {
        question: 'The passage states that MOND is considered an incomplete alternative to dark matter because it',
        options: [
          'has never been tested experimentally',
          'contradicts Newtonian physics entirely',
          'fails to account for observations at the galaxy cluster scale',
          'requires the existence of even more unseen matter'
        ],
        correctAnswer: 2,
        explanation: 'MOND fails to explain observations at the galaxy cluster scale, limiting its viability as a complete alternative.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-06',
    title: 'Epigenetics',
    genre: 'natural-science',
    text: `Epigenetics studies heritable changes in gene expression that occur without alterations to the DNA sequence itself. Chemical modifications — primarily DNA methylation and histone modification — can silence or activate genes in response to environmental factors such as diet, stress, and toxin exposure. The Dutch Hunger Winter of 1944-45 provided a natural experiment: children conceived during the famine showed higher rates of obesity, cardiovascular disease, and schizophrenia decades later. Remarkably, some of these effects appeared in the next generation as well.`,
    questions: [
      {
        question: 'The Dutch Hunger Winter research is significant because it provides evidence that',
        options: [
          'DNA mutations caused by starvation are always harmful',
          'environmental conditions can produce heritable changes in gene expression across generations',
          'famine only affects children, not adults',
          'epigenetic changes are always reversible'
        ],
        correctAnswer: 1,
        explanation: 'Effects appearing in the next generation demonstrate that environmental experiences can create heritable epigenetic changes.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'sci-07',
    title: 'Neuroplasticity',
    genre: 'natural-science',
    text: `For most of the twentieth century, neuroscientists believed that the adult brain was essentially fixed. This view has been overturned by research on neuroplasticity, which shows that the brain continues to form new neural pathways throughout life. Studies of London taxi drivers, who must memorize the city’s complex street layout, found that they had significantly larger hippocampi than bus drivers who follow fixed routes. The enlargement correlated with years of experience, suggesting the brain physically restructures in response to sustained cognitive demands.`,
    questions: [
      {
        question: 'The comparison between taxi and bus drivers most directly demonstrates that',
        options: [
          'taxi drivers are born with larger hippocampi',
          'sustained cognitive demands cause measurable physical changes in brain structure',
          'bus drivers have inferior memory abilities',
          'the hippocampus is the largest region of the brain'
        ],
        correctAnswer: 1,
        explanation: 'Hippocampal enlargement correlated with years of experience, supporting environmental cognitive demands reshaping brain structure.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-08',
    title: 'Antibiotic Resistance',
    genre: 'natural-science',
    text: `Antibiotic resistance occurs when bacteria evolve mechanisms to survive drugs designed to kill them. This process is driven by natural selection: in a population exposed to an antibiotic, susceptible bacteria die while resistant individuals survive and reproduce. Horizontal gene transfer — in which bacteria share genetic material through plasmids — accelerates the spread of resistance between species. The overuse of antibiotics in medicine and agriculture has dramatically increased selection pressure, contributing to the emergence of superbugs such as MRSA.`,
    questions: [
      {
        question: 'Horizontal gene transfer contributes to antibiotic resistance by',
        options: [
          'killing susceptible bacteria more quickly',
          'allowing bacteria to share resistance genes across species',
          'preventing mutations from occurring',
          'making antibiotics more effective over time'
        ],
        correctAnswer: 1,
        explanation: 'Horizontal gene transfer enables bacteria to share genetic material through plasmids, spreading resistance genes between species.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-09',
    title: 'Plate Tectonics',
    genre: 'natural-science',
    text: `When Alfred Wegener proposed continental drift in 1912, he supported his hypothesis with evidence from matching coastlines, identical fossils on separated continents, and geological formations that aligned when continents were reassembled. The scientific community rejected his theory for decades primarily because he could not explain the mechanism: what force could move entire continents? The answer came in the 1960s with the discovery of seafloor spreading, which provided the driving force Wegener lacked and established plate tectonics as the unifying theory of geology.`,
    questions: [
      {
        question: 'The scientific community’s initial rejection of Wegener’s theory was primarily due to',
        options: [
          'lack of fossil evidence',
          'the absence of a plausible mechanism for continental movement',
          'Wegener’s lack of scientific credentials',
          'coastlines that did not match'
        ],
        correctAnswer: 1,
        explanation: 'Despite compelling evidence, Wegener could not explain the mechanism for continental movement, making the theory unacceptable until seafloor spreading provided the answer.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'sci-10',
    title: 'Circadian Rhythms',
    genre: 'natural-science',
    text: `Circadian rhythms are roughly 24-hour cycles in biological processes regulated by an internal master clock located in the suprachiasmatic nucleus (SCN) of the hypothalamus. The SCN synchronizes with the external light-dark cycle through photosensitive ganglion cells in the retina. When exposed to blue light — particularly from screens — these cells signal the SCN to suppress melatonin production, the hormone that promotes sleep. Research has shown that using screens for two hours before bed shifts melatonin onset by approximately 1.5 hours and reduces total REM sleep by 20%.`,
    questions: [
      {
        question: 'Based on the passage, blue light from screens disrupts sleep primarily by',
        options: [
          'damaging photosensitive cells in the retina',
          'signaling the SCN to suppress melatonin production',
          'raising body temperature before sleep',
          'increasing cortisol levels throughout the day'
        ],
        correctAnswer: 1,
        explanation: 'Blue light triggers photosensitive ganglion cells to signal the SCN to suppress melatonin production, delaying sleep onset.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-11',
    title: 'mRNA Vaccines',
    genre: 'natural-science',
    text: `Traditional vaccines introduce weakened or inactivated pathogens to stimulate immune responses. mRNA vaccines use a different approach: they deliver synthetic messenger RNA encoding a viral protein directly into cells. Ribosomes in the cell read the mRNA and produce the viral protein, which the immune system recognizes as foreign. The mRNA degrades within days and never enters the cell nucleus, so it cannot alter the recipient’s DNA. The rapid development of COVID-19 mRNA vaccines was made possible by decades of prior research on mRNA stability and lipid nanoparticle delivery systems.`,
    questions: [
      {
        question: 'The passage addresses the concern about DNA alteration by noting that mRNA',
        options: [
          'is identical to DNA in structure and function',
          'integrates permanently into chromosomes',
          'degrades within days and never enters the cell nucleus',
          'requires a viral vector to reach cells'
        ],
        correctAnswer: 2,
        explanation: 'The passage states mRNA degrades within days and never enters the cell nucleus, so it cannot alter DNA.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-12',
    title: 'Photosynthesis Efficiency',
    genre: 'natural-science',
    text: `Natural photosynthesis converts only about 1-2% of absorbed solar energy into chemical energy stored in glucose. The inefficiency stems from several factors: chlorophyll absorbs primarily red and blue light, reflecting green; photorespiration diverts energy in hot, dry conditions; and the carbon-fixing enzyme RuBisCO has a slow catalytic rate. Researchers are engineering artificial photosynthetic systems that could exceed 10% efficiency by using broader-spectrum light absorbers and replacing RuBisCO with faster catalysts.`,
    questions: [
      {
        question: 'According to the passage, a key limitation of natural photosynthesis is that',
        options: [
          'plants cannot absorb any sunlight',
          'the enzyme RuBisCO operates too slowly for efficient carbon fixation',
          'glucose is not a useful form of chemical energy',
          'photosynthesis only occurs in artificial systems'
        ],
        correctAnswer: 1,
        explanation: 'The passage identifies RuBisCO’s slow catalytic rate as one of several factors reducing photosynthesis efficiency.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'sci-13',
    title: 'Quantum Entanglement',
    genre: 'natural-science',
    text: `Quantum entanglement occurs when two particles become correlated in such a way that measuring a property of one instantaneously determines the corresponding property of the other, regardless of the distance between them. Einstein famously dismissed this as spooky action at a distance. However, experiments by Alain Aspect in 1982 have confirmed that entanglement is real. Crucially, entanglement does not transmit usable information faster than light because the measurement outcomes appear random; meaningful data extraction requires classical communication to compare results.`,
    questions: [
      {
        question: 'The passage resolves the apparent conflict between entanglement and relativity by explaining that',
        options: [
          'entanglement has never been experimentally confirmed',
          'Einstein was wrong about the speed of light',
          'entanglement does not transmit usable information faster than light',
          'measurement outcomes are predetermined, not random'
        ],
        correctAnswer: 2,
        explanation: 'Entanglement does not violate relativity because measurement outcomes appear random and meaningful data extraction requires classical communication.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'sci-14',
    title: 'Coral Bleaching',
    genre: 'natural-science',
    text: `Coral reefs depend on a symbiotic relationship with zooxanthellae — photosynthetic algae that live within coral tissue, providing up to 90% of the coral’s energy through photosynthesis. When water temperatures rise even 1-2°C above the summer maximum for extended periods, corals expel their zooxanthellae in a stress response called bleaching, turning white. Without their algal partners, corals can survive for weeks but will die if temperatures do not return to normal. The Great Barrier Reef experienced unprecedented mass bleaching events in 2016, 2017, and 2020.`,
    questions: [
      {
        question: 'Coral bleaching is most accurately described as',
        options: [
          'the natural aging process of coral reefs',
          'a stress response in which corals expel symbiotic algae due to elevated temperatures',
          'a disease caused by bacterial infection',
          'the effect of ocean acidification on coral pigmentation'
        ],
        correctAnswer: 1,
        explanation: 'Bleaching occurs when corals expel their zooxanthellae in a stress response triggered by elevated temperatures.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'sci-15',
    title: 'Mitochondrial DNA',
    genre: 'natural-science',
    text: `Unlike nuclear DNA, which is inherited from both parents, mitochondrial DNA (mtDNA) is inherited exclusively from the mother. This uniparental inheritance makes mtDNA a powerful tool for tracing maternal lineages. By analyzing mutations that accumulate at a roughly constant rate, geneticists have traced all living humans’ maternal ancestry to a single woman — dubbed Mitochondrial Eve — who lived in Africa approximately 200,000 years ago. This does not mean she was the only woman alive at the time; other women also contributed to the modern gene pool through nuclear DNA, but their mitochondrial lineages eventually died out when a descendant had only sons.`,
    questions: [
      {
        question: 'The passage clarifies that Mitochondrial Eve was NOT the only woman alive at the time because',
        options: [
          'mitochondrial DNA can be inherited from fathers',
          'other women contributed nuclear DNA, but their mtDNA lineages ended when descendants had only sons',
          'Mitochondrial Eve lived before modern humans evolved',
          'researchers found multiple distinct mtDNA origins'
        ],
        correctAnswer: 1,
        explanation: 'Other women contributed nuclear DNA but their mtDNA lineages died out when a descendant had only sons, since mtDNA passes only through mothers.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'hist-01',
    title: 'Douglass on Education',
    genre: 'historical',
    text: `In his 1845 Narrative, Frederick Douglass recounted how learning to read transformed his understanding of slavery. His enslaver’s wife began teaching him the alphabet until her husband intervened, declaring that education would make Douglass unfit for slavery. From that moment, Douglass wrote, he understood the pathway from slavery to freedom. The very prohibition confirmed the power of literacy: if reading could make a person unfit to be enslaved, then it was the tool by which enslaved people could grasp their own humanity and argue for their liberation.`,
    questions: [
      {
        question: 'According to Douglass, the enslaver’s opposition to his education was significant because it',
        options: [
          'proved that enslavers were universally uneducated',
          'revealed that literacy threatened the institution of slavery itself',
          'showed that reading was an impractical skill for enslaved people',
          'reflected the enslaver’s concern for Douglass’s well-being'
        ],
        correctAnswer: 1,
        explanation: 'The prohibition confirmed literacy’s power: if reading made one unfit for slavery, then it was a tool of liberation, threatening the institution.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'hist-02',
    title: 'Federalist No. 10',
    genre: 'historical',
    text: `In Federalist No. 10, James Madison argued that a large republic was better equipped to control the dangers of political factions than a small democracy. Factions — groups united by a common interest adverse to others’ rights — were, Madison believed, inevitable in free society. A pure democracy offers no remedy because the majority faction can impose its will. But in an extended republic, the larger number of representatives and greater diversity of interests make it less probable that a majority of the whole will have a common motive to invade the rights of other citizens.`,
    questions: [
      {
        question: 'Madison’s central argument in Federalist No. 10 is that a large republic controls factions by',
        options: [
          'eliminating all political differences',
          'making it harder for any single majority to form due to the diversity of interests',
          'concentrating power in a single leader',
          'preventing citizens from forming groups'
        ],
        correctAnswer: 1,
        explanation: 'Madison argues that a large republic’s diversity of interests makes it less probable that a majority will have a common motive to invade others’ rights.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'hist-03',
    title: 'Carson on Pesticides',
    genre: 'historical',
    text: `In Silent Spring (1962), Rachel Carson challenged the chemical industry’s assurance that synthetic pesticides like DDT were safe. Carson documented how DDT accumulated in food chains through bioaccumulation: sprayed on crops, it was consumed by insects, then by birds, each level concentrating the chemical further. She linked DDT to thinning eggshells in birds of prey and declining bird populations. The chemical industry mounted an aggressive campaign to discredit both the book and its author. Nevertheless, Silent Spring catalyzed the modern environmental movement and contributed to the creation of the Environmental Protection Agency in 1970.`,
    questions: [
      {
        question: 'The chemical industry’s response to Silent Spring primarily involved',
        options: [
          'acknowledging the risks and voluntarily reducing DDT production',
          'attacking Carson’s credibility and motivations rather than addressing her evidence',
          'funding independent research to test her claims',
          'supporting the creation of the EPA'
        ],
        correctAnswer: 1,
        explanation: 'The industry mounted an aggressive campaign to discredit both the book and its author, relying on ad hominem attacks rather than scientific refutation.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'hist-04',
    title: 'Seneca Falls Declaration',
    genre: 'historical',
    text: `The Declaration of Sentiments, presented at the Seneca Falls Convention in 1848, deliberately echoed the structure and language of the Declaration of Independence. We hold these truths to be self-evident, it began, that all men and women are created equal. By inserting and women into the founding language, Elizabeth Cady Stanton and her co-authors made a strategic rhetorical choice: they forced readers to confront the gap between American ideals and American practice. If the principles of 1776 applied to all people, then excluding women from suffrage was logically inconsistent with the nation’s own stated values.`,
    questions: [
      {
        question: 'By echoing the Declaration of Independence, the authors of the Declaration of Sentiments primarily sought to',
        options: [
          'replace the Declaration of Independence with a new document',
          'expose the contradiction between America’s founding ideals and the exclusion of women',
          'argue that the founding fathers intended to include women',
          'demonstrate superior writing ability'
        ],
        correctAnswer: 1,
        explanation: 'Using the same language forced readers to confront the gap between American ideals and American practice.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'hist-05',
    title: 'Lincoln on Labor',
    genre: 'historical',
    text: `In his 1861 State of the Union address, Abraham Lincoln articulated a vision of labor and capital: Labor is prior to, and independent of, capital. Capital is only the fruit of labor, and could never have existed if labor had not first existed. Labor is the superior of capital, and deserves much the higher consideration. Lincoln was not arguing for the abolition of capital, but rather challenging the Southern planter class’s assumption that labor existed to serve capital. In his view, a just economic system allowed laborers to accumulate their own capital through hard work.`,
    questions: [
      {
        question: 'Lincoln argues in this passage that the relationship between labor and capital is one in which',
        options: [
          'capital and labor are equally valuable',
          'labor precedes and is superior to capital, which depends on labor for its existence',
          'capital should be abolished',
          'laborers should never become capitalists'
        ],
        correctAnswer: 1,
        explanation: 'Lincoln states labor is prior to and independent of capital and deserves much the higher consideration.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'hist-06',
    title: 'Sojourner Truth',
    genre: 'historical',
    text: `At the 1851 Women’s Rights Convention in Akron, Ohio, Sojourner Truth delivered her famous speech challenging the era’s prevailing arguments against women’s rights, which appealed to women’s supposed physical weakness and need for male protection. Truth pointed to her own experience as an enslaved woman who had plowed and planted, and gathered into barns and endured hardships no man offered to shelter her from. By holding her personal experience against the idealized image of fragile white womanhood, Truth exposed how arguments about women’s nature served to protect privilege rather than describe reality.`,
    questions: [
      {
        question: 'Truth’s rhetorical strategy primarily works by',
        options: [
          'citing scientific evidence about gender differences',
          'contrasting her lived experience with the idealized assumptions used to deny women rights',
          'appealing to religious authority about gender roles',
          'arguing that all women are physically equal to men'
        ],
        correctAnswer: 1,
        explanation: 'Truth uses her personal experience of physical labor and hardship to expose how arguments about women’s nature served to protect privilege.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'hist-07',
    title: 'FDR on Fear',
    genre: 'historical',
    text: `Franklin D. Roosevelt’s 1933 inaugural address, delivered at the depth of the Great Depression with 25% unemployment, is remembered for the declaration: the only thing we have to fear is fear itself. Roosevelt’s rhetorical purpose was strategic. By redefining the crisis as psychological rather than structural, he prepared the public to accept bold government intervention: if the problem was fear and inaction, then the solution was confidence and decisive presidential action. The speech laid the groundwork for the New Deal by making government activism seem not radical but necessary.`,
    questions: [
      {
        question: 'The passage suggests that Roosevelt characterized the Depression as a crisis of fear primarily in order to',
        options: [
          'minimize the severity of the economic problems',
          'justify bold government intervention by framing inaction as the true danger',
          'blame the public for causing the Depression',
          'discourage legislation that would increase government spending'
        ],
        correctAnswer: 1,
        explanation: 'By framing the crisis as fear and inaction, Roosevelt positioned confidence and decisive action as the solution, making the New Deal seem necessary.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'hist-08',
    title: 'MLK Letter from Birmingham',
    genre: 'historical',
    text: `In his 1963 Letter from Birmingham Jail, Martin Luther King Jr. responded to white clergymen who had called his demonstrations unwise and untimely. King distinguished between just and unjust laws, drawing on St. Augustine and Thomas Aquinas: One has a moral responsibility to disobey unjust laws. He further argued that the white moderate who preferred order to justice was a greater obstacle to progress than overt racial hostility, because the moderate’s preference for gradual change indefinitely deferred justice.`,
    questions: [
      {
        question: 'King argues that the white moderate is a greater obstacle than overt racial hostility because the moderate',
        options: [
          'openly supports segregation',
          'prefers maintaining order over pursuing justice, thereby delaying necessary change',
          'violently opposes civil rights demonstrations',
          'refuses to acknowledge that racial inequality exists'
        ],
        correctAnswer: 1,
        explanation: 'The white moderate’s preference for order to justice and for gradual change indefinitely deferred justice.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'hist-09',
    title: 'Hamilton on Manufacturing',
    genre: 'historical',
    text: `In his 1791 Report on Manufactures, Alexander Hamilton argued that the United States should actively promote domestic manufacturing through protective tariffs, subsidies, and government investment in infrastructure. Hamilton contended that manufacturing would diversify the economy and reduce dependence on foreign imports. He further argued that free trade theory, while sound in principle, required all nations to play by the same rules — and since European nations subsidized their own industries, American manufacturers needed government support to compete.`,
    questions: [
      {
        question: 'Hamilton argued that government support for manufacturing was necessary because',
        options: [
          'agriculture was inherently unprofitable',
          'European nations subsidized their own industries, creating an uneven playing field',
          'Jefferson had already endorsed the same position',
          'manufacturing was the only source of employment for men'
        ],
        correctAnswer: 1,
        explanation: 'Since European nations subsidized their own industries, American manufacturers needed government support to compete on an uneven playing field.',
        skill: 'evidence'
      }
    ]
  },
  {
    id: 'hist-10',
    title: 'Thoreau on Civil Disobedience',
    genre: 'historical',
    text: `In Resistance to Civil Government (1849), Henry David Thoreau argued that individuals have a duty to resist unjust government policies, even at personal cost. Writing against the backdrop of the Mexican-American War and slavery, Thoreau declared: Under a government which imprisons any unjustly, the true place for a just man is also a prison. He rejected the notion that citizens should wait for majority rule to correct injustices, arguing that the majority rules not because they are most likely to be in the right, but simply because they are physically the strongest.`,
    questions: [
      {
        question: 'Thoreau rejects majority rule as a path to justice because he believes the majority prevails based on',
        options: [
          'superior moral reasoning',
          'greater physical strength rather than moral correctness',
          'democratic legitimacy derived from elections',
          'guidance from constitutional law'
        ],
        correctAnswer: 1,
        explanation: 'Thoreau argues the majority rules not because they are most likely to be in the right but because they are physically the strongest.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'hist-11',
    title: 'Abigail Adams on Rights',
    genre: 'historical',
    text: `In a 1776 letter to her husband John Adams, who was attending the Continental Congress, Abigail Adams urged: Remember the Ladies, and be more generous and favourable to them than your ancestors. She warned that if women’s interests were not considered in the new laws, they would foment a rebellion and not hold themselves bound by laws in which they had no voice or representation. John Adams replied dismissively. Despite her advocacy, Abigail’s arguments had no effect on the Constitution, which did not address women’s suffrage until the 19th Amendment in 1920.`,
    questions: [
      {
        question: 'John Adams’s response to Abigail’s request most directly reveals',
        options: [
          'his genuine inability to understand her argument',
          'that even revolutionary leaders who championed liberty could dismiss its application to women',
          'his plan to include women in the new Constitution',
          'that Abigail lacked political knowledge'
        ],
        correctAnswer: 1,
        explanation: 'Adams dismissed women’s inclusion despite championing liberty from British rule, revealing that revolutionary principles were selectively applied.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'hist-12',
    title: 'Booker T. Washington',
    genre: 'historical',
    text: `In his 1895 Atlanta Exposition speech, Booker T. Washington proposed what became known as the Atlanta Compromise: African Americans should focus on industrial education and economic self-improvement rather than agitating for immediate social equality and political rights. W.E.B. Du Bois later challenged this position, arguing that Washington’s accommodationism surrendered the very political rights needed to protect economic gains. Du Bois contended that without the right to vote and access to higher education, economic advancement would remain fragile and dependent on white goodwill.`,
    questions: [
      {
        question: 'Du Bois’s primary objection to Washington’s approach was that',
        options: [
          'economic advancement was unimportant',
          'surrendering political rights left economic gains vulnerable to being revoked',
          'Washington’s educational model was too expensive',
          'protest was the only effective strategy for any cause'
        ],
        correctAnswer: 1,
        explanation: 'Du Bois argued that without political rights, economic advancement would remain fragile and dependent on white goodwill.',
        skill: 'central-ideas'
      }
    ]
  },
  {
    id: 'hist-13',
    title: 'The Monroe Doctrine',
    genre: 'historical',
    text: `President James Monroe’s 1823 declaration warned European powers that the Western Hemisphere was closed to further colonization and that any attempt to extend European political systems to the Americas would be considered a threat to US security. At the time, the United States lacked the military power to enforce the doctrine; British naval supremacy effectively backed the policy. The Monroe Doctrine later evolved from a defensive position into a justification for US intervention throughout Latin America, a shift its authors did not envision.`,
    questions: [
      {
        question: 'The passage notes an irony in the Monroe Doctrine in that',
        options: [
          'Monroe lacked support from Congress to issue the declaration',
          'a policy originally opposing foreign intervention later justified US intervention in the same region',
          'European powers eagerly complied with the doctrine',
          'Britain opposed the doctrine from the beginning'
        ],
        correctAnswer: 1,
        explanation: 'The doctrine shifted from a defensive position into a justification for US intervention, the opposite of its original anti-intervention purpose.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'hist-14',
    title: 'Susan B. Anthony',
    genre: 'historical',
    text: `When Susan B. Anthony was arrested for voting in the 1872 presidential election, she used her trial as a platform to challenge the constitutionality of laws that excluded women from the franchise. Anthony argued that the 14th Amendment, which guaranteed citizenship rights to all persons born or naturalized in the United States, already enfranchised women. The judge directed the jury to find her guilty without deliberation and fined her $100. Anthony refused to pay. The fine was never collected, which prevented Anthony from appealing the case to the Supreme Court — a legal maneuver that denied her the opportunity to establish precedent.`,
    questions: [
      {
        question: 'The decision not to collect Anthony’s fine was strategically significant because it',
        options: [
          'showed the court sympathized with her cause',
          'prevented her from appealing to the Supreme Court, where she might have established legal precedent for women’s suffrage',
          'confirmed that the 14th Amendment already protected women’s right to vote',
          'allowed Anthony to continue voting in subsequent elections'
        ],
        correctAnswer: 1,
        explanation: 'Not collecting the fine prevented Anthony from appealing to the Supreme Court, denying her the opportunity to establish precedent.',
        skill: 'inference'
      }
    ]
  },
  {
    id: 'hist-15',
    title: 'Eisenhower Farewell',
    genre: 'historical',
    text: `In his 1961 farewell address, President Dwight D. Eisenhower — himself a five-star general — warned against the growing influence of the military-industrial complex, a term he coined for the alliance between the military establishment and the defense industry. Eisenhower cautioned that this alliance, driven by defense contracts worth billions, could endanger liberties or democratic processes by distorting national priorities. The warning was remarkable coming from a career military leader, which gave it a credibility that a civilian politician’s similar warning might have lacked.`,
    questions: [
      {
        question: 'Eisenhower’s warning was considered especially credible because',
        options: [
          'he was a popular president with high approval ratings',
          'as a career military leader, he had no reason to unfairly criticize the military establishment',
          'the defense budget was at its historical low point',
          'other presidents had made identical warnings'
        ],
        correctAnswer: 1,
        explanation: 'The warning coming from a career military leader gave it credibility, as he could not be accused of anti-military bias.',
        skill: 'inference'
      }
    ]
  }
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function getPassagesByGenre(genre: ReadingPassage['genre']): ReadingPassage[] {
  return SAT_PASSAGES.filter(p => p.genre === genre)
}

export function getPassageByGenre(genre: ReadingPassage['genre']): ReadingPassage {
  const pool = getPassagesByGenre(genre)
  return pool[Math.floor(Math.random() * pool.length)]
}

export function getRandomPassage(): ReadingPassage {
  return SAT_PASSAGES[Math.floor(Math.random() * SAT_PASSAGES.length)]
}

export function getPassages(count: number): ReadingPassage[] {
  return shuffle(SAT_PASSAGES).slice(0, count)
}

/**
 * Get passages balanced across genres.
 * Returns approximately equal numbers from each genre.
 */
/**
 * Returns a copy of the passage with each question's options shuffled and its
 * correctAnswer index recomputed. The authored bank is heavily biased toward
 * option B (52 of 62 keys), so serving authored order makes "always pick B"
 * score ~84% — every graded consumer must go through this.
 */
export function withShuffledOptions(p: ReadingPassage): ReadingPassage {
  return {
    ...p,
    questions: p.questions.map((q) => {
      const order = shuffle(q.options.map((_, i) => i))
      return {
        ...q,
        options: order.map((i) => q.options[i]),
        correctAnswer: order.indexOf(q.correctAnswer),
      }
    }),
  }
}

export function getBalancedPassages(count: number): ReadingPassage[] {
  const genres: ReadingPassage['genre'][] = ['literary', 'social-science', 'natural-science', 'historical']
  const perGenre = Math.ceil(count / genres.length)
  const result: ReadingPassage[] = []
  for (const genre of genres) {
    const pool = shuffle(getPassagesByGenre(genre))
    result.push(...pool.slice(0, perGenre))
  }
  return shuffle(result).slice(0, count).map(withShuffledOptions)
}
