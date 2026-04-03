/**
 * Exit Quiz — SAT Reading Comprehension (Digital SAT Format)
 *
 * Passage-based questions following the Digital SAT Reading & Writing format.
 * Each question presents a short passage and asks students to identify
 * the main idea, draw inferences, analyze purpose, or evaluate evidence.
 *
 * Domain: Information and Ideas
 */

export interface ExitQuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; category: string }
interface QuestionTemplate { id: string; category: string; generate: () => ExitQuizQuestion }

function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }; return a }

const questionPool: QuestionTemplate[] = [
  // ─── Central Ideas and Details ───
  {
    id: 'rc-q1', category: 'Central Ideas',
    generate() {
      const correct = 'Coral reefs support a disproportionately large number of marine species relative to the ocean area they occupy.'
      const opts = shuffle([
        correct,
        'Coral reefs are the largest structures built by living organisms.',
        'Coral reefs are found exclusively in tropical waters.',
        'Coral reefs are declining primarily because of overfishing.'
      ])
      return { id: this.id, category: this.category,
        question: `Although coral reefs cover less than one percent of the ocean floor, they support approximately twenty-five percent of all known marine species. This remarkable biodiversity arises because reefs provide complex three-dimensional habitats—crevices, overhangs, and branching structures—that offer shelter, food, and breeding sites for organisms ranging from microscopic algae to large predatory fish.\n\nWhich choice best states the main idea of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage emphasizes the contrast between the small area reefs cover and the large proportion of species they support, making the first choice the best summary of the main idea.`
      }
    }
  },
  {
    id: 'rc-q2', category: 'Central Ideas',
    generate() {
      const correct = 'The expansion of railroads in the 1800s transformed the American understanding of time.'
      const opts = shuffle([
        correct,
        'Railroads were more efficient than other forms of transportation in the 1800s.',
        'Local communities resisted the imposition of standardized time zones.',
        'Time zones were first proposed by scientists rather than railroad companies.'
      ])
      return { id: this.id, category: this.category,
        question: `Before the advent of railroads, each American town set its clocks according to the local position of the sun, a system that produced hundreds of slightly different "local times" across the country. The expansion of rail travel in the mid-nineteenth century made this patchwork unworkable: a traveler heading west from New York to Chicago might pass through more than twenty time changes along the way. In 1883, the major railroad companies adopted four standardized time zones, a system that the federal government later codified into law.\n\nWhich choice best states the main idea of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage traces how railroads made the old local-time system impractical and led to standardized time zones, fundamentally transforming how Americans understood time.`
      }
    }
  },
  {
    id: 'rc-q3', category: 'Central Ideas',
    generate() {
      const correct = 'Fireflies use bioluminescence for species-specific mating communication.'
      const opts = shuffle([
        correct,
        'Fireflies are the only insects capable of producing light.',
        'All firefly species use the same flash pattern to attract mates.',
        'Bioluminescence in fireflies is primarily a defense mechanism against predators.'
      ])
      return { id: this.id, category: this.category,
        question: `Each firefly species produces a unique flash pattern—a specific sequence of blinks varying in duration, interval, and color—that allows males and females of the same species to find each other in the dark. A male Photinus pyralis, for example, produces a distinctive J-shaped swoop of light, to which females of the same species respond with a single flash after a precise two-second delay. This specificity prevents costly mating errors in habitats where multiple firefly species may be active simultaneously.\n\nWhich choice best states the main idea of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage explains how each firefly species has unique flash patterns that serve as species-specific mating signals, preventing cross-species mating errors.`
      }
    }
  },
  // ─── Inferences ───
  {
    id: 'rc-q4', category: 'Inferences',
    generate() {
      const correct = 'The immune system sometimes fails to distinguish between the body\'s own cells and foreign invaders.'
      const opts = shuffle([
        correct,
        'Autoimmune diseases are caused exclusively by genetic mutations.',
        'The immune system is generally unreliable at fighting infections.',
        'Most autoimmune conditions can be cured with currently available treatments.'
      ])
      return { id: this.id, category: this.category,
        question: `In autoimmune disorders such as rheumatoid arthritis and lupus, the body's immune system attacks healthy tissue as though it were a pathogen. Researchers have identified several factors—including genetic predisposition, hormonal fluctuations, and environmental triggers—that may contribute to this misdirected immune response, but the precise mechanisms remain poorly understood.\n\nBased on the text, what can most reasonably be inferred about the immune system?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage describes the immune system attacking the body's own healthy tissue "as though it were a pathogen," implying that the system fails to distinguish self from non-self in autoimmune disorders.`
      }
    }
  },
  {
    id: 'rc-q5', category: 'Inferences',
    generate() {
      const correct = 'The residents initially viewed the rewilding project with suspicion.'
      const opts = shuffle([
        correct,
        'The residents had always supported wildlife conservation efforts.',
        'The wolves were unsuccessful at reducing the elk population.',
        'The rewilding project had no measurable effect on the local ecosystem.'
      ])
      return { id: this.id, category: this.category,
        question: `When gray wolves were reintroduced to Yellowstone National Park in 1995, ranchers in the surrounding area protested vigorously, citing concerns about livestock predation. Over the following two decades, however, the wolves' presence triggered a cascade of ecological changes—elk herds shifted their grazing patterns, streamside vegetation recovered, and erosion declined—that eventually won grudging acknowledgment from some former opponents of the program.\n\nBased on the text, what can most reasonably be inferred about the local residents' initial reaction to the wolf reintroduction?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage mentions vigorous protests from ranchers and describes former opponents eventually giving "grudging acknowledgment," implying the project was initially viewed with suspicion.`
      }
    }
  },
  {
    id: 'rc-q6', category: 'Inferences',
    generate() {
      const correct = 'Traditional economic models may not fully account for how people actually make decisions.'
      const opts = shuffle([
        correct,
        'People always make rational financial decisions when given complete information.',
        'Behavioral economics has replaced traditional economics in all academic programs.',
        'Kahneman\'s research proved that economic models are entirely useless.'
      ])
      return { id: this.id, category: this.category,
        question: `Psychologist Daniel Kahneman's research demonstrated that people systematically deviate from the predictions of classical economic theory. In experiments, subjects consistently valued avoiding losses more heavily than acquiring equivalent gains—a phenomenon Kahneman called "loss aversion." This finding challenged the long-standing economic assumption that individuals weigh costs and benefits symmetrically when making decisions.\n\nBased on the text, what can most reasonably be inferred?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Kahneman showed people deviate from classical theory by weighing losses more than gains. This implies traditional models, which assume symmetrical evaluation, do not fully capture actual decision-making.`
      }
    }
  },
  // ─── Purpose and Function ───
  {
    id: 'rc-q7', category: 'Purpose',
    generate() {
      const correct = 'To illustrate the practical challenges that the discovery created for established scientific methodology.'
      const opts = shuffle([
        correct,
        'To argue that Röntgen\'s discoveries had little immediate scientific impact.',
        'To describe X-rays as more valuable for medical diagnosis than for physics research.',
        'To suggest that Röntgen did not fully understand his own findings.'
      ])
      return { id: this.id, category: this.category,
        question: `When Wilhelm Röntgen discovered X-rays in 1895, he could not explain the mechanism by which the mysterious radiation passed through solid objects. Existing models of electromagnetic radiation provided no framework for a form of energy that could penetrate flesh but not bone. Researchers across Europe scrambled to replicate Röntgen's experiments while simultaneously attempting to revise the theoretical foundations that his work had undermined.\n\nWhat is the main purpose of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage focuses on how Röntgen's discovery could not be explained by existing models and forced researchers to scramble to replicate and revise—illustrating the practical challenges the discovery created for established methodology.`
      }
    }
  },
  {
    id: 'rc-q8', category: 'Purpose',
    generate() {
      const correct = 'To highlight an unexpected benefit of an organism that is commonly viewed as a nuisance.'
      const opts = shuffle([
        correct,
        'To argue that mosquitoes should not be targeted by pest control programs.',
        'To explain the process by which mosquitoes transmit disease.',
        'To compare the ecological roles of mosquitoes and bees.'
      ])
      return { id: this.id, category: this.category,
        question: `Mosquitoes are typically regarded as disease-carrying pests, but ecologists point out that they play an underappreciated role in pollination. In the Arctic tundra, where bee populations are sparse, mosquitoes are among the primary pollinators of several flowering plant species. Without them, these plants might struggle to reproduce, potentially disrupting the food web that supports migratory bird populations.\n\nWhat is the main purpose of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage contrasts the common view of mosquitoes as pests with their underappreciated role as pollinators, highlighting an unexpected benefit of an organism typically considered a nuisance.`
      }
    }
  },
  {
    id: 'rc-q9', category: 'Purpose',
    generate() {
      const correct = 'To present a debate about how to interpret a specific set of archaeological findings.'
      const opts = shuffle([
        correct,
        'To prove that the Rapa Nui civilization collapsed due to environmental degradation.',
        'To describe the methods archaeologists use to date ancient stone structures.',
        'To evaluate competing theories about how the moai statues were transported.'
      ])
      return { id: this.id, category: this.category,
        question: `The archaeological record on Easter Island (Rapa Nui) has long been interpreted as evidence of a civilization that depleted its natural resources and collapsed before European contact. However, a growing number of researchers argue that this "ecocide" narrative oversimplifies the evidence. They point to recent soil analyses and revised population estimates suggesting that the island's inhabitants may have adapted to environmental changes more successfully than previously believed, maintaining a stable population well into the eighteenth century.\n\nWhat is the main purpose of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage presents two competing interpretations of the Rapa Nui archaeological record—the traditional ecocide narrative and the newer adaptation narrative—making its main purpose to present a debate about how to interpret the findings.`
      }
    }
  },
  // ─── Textual Evidence ───
  {
    id: 'rc-q10', category: 'Textual Evidence',
    generate() {
      const correct = '"Subjects who listened to a ten-minute recording of birdsong showed a measurable decrease in self-reported anxiety and cortisol levels."'
      const opts = shuffle([
        correct,
        '"Exposure to natural sounds has been a topic of growing interest among psychologists."',
        '"The researchers plan to conduct a follow-up study with a larger sample size."',
        '"Some critics have questioned whether laboratory settings can replicate real-world exposure to nature."'
      ])
      return { id: this.id, category: this.category,
        question: `A team of psychologists at the University of Surrey hypothesized that exposure to natural sounds reduces physiological markers of stress more effectively than exposure to silence or urban noise. To test this claim, they conducted a controlled experiment in which participants were randomly assigned to one of three auditory conditions.\n\nWhich quotation from the study, if added to the passage, would best support the researchers' hypothesis?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The hypothesis is that natural sounds reduce stress markers. A finding showing that birdsong (a natural sound) decreased anxiety and cortisol (a stress marker) directly supports this claim.`
      }
    }
  },
  {
    id: 'rc-q11', category: 'Textual Evidence',
    generate() {
      const correct = '"More than sixty percent of surveyed teachers reported spending their own money on classroom supplies at least once per month."'
      const opts = shuffle([
        correct,
        '"Teacher salaries vary significantly from state to state."',
        '"Many teachers say they entered the profession because they wanted to make a difference."',
        '"The federal government allocates education funding through a complex formula."'
      ])
      return { id: this.id, category: this.category,
        question: `A recent editorial argued that public school teachers in the United States are systematically under-resourced, noting that inadequate district funding forces many educators to personally subsidize the cost of basic instructional materials.\n\nWhich finding, if true, would most directly support the editorial's claim?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The editorial claims teachers personally subsidize materials due to inadequate funding. A finding that over sixty percent of teachers spend their own money on supplies directly supports this claim.`
      }
    }
  },
  // ─── Command of Evidence ───
  {
    id: 'rc-q12', category: 'Command of Evidence',
    generate() {
      const correct = 'Bilingual children scored higher than monolingual children on tasks requiring them to switch between conflicting rules.'
      const opts = shuffle([
        correct,
        'Bilingual children spoke their second language more fluently than their first.',
        'Monolingual children performed better on vocabulary tests in their native language.',
        'Both groups performed equally on all measures of cognitive ability.'
      ])
      return { id: this.id, category: this.category,
        question: `Cognitive scientist Dr. Ellen Bialystok has argued that bilingualism confers a measurable advantage in executive function—the set of mental processes involved in planning, attention, and task-switching. Her research suggests that the constant need to manage two active language systems strengthens the brain's ability to filter relevant information and suppress distractions.\n\nWhich finding, if true, would most directly support Dr. Bialystok's claim?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Bialystok claims bilingualism improves executive function, particularly task-switching. Higher scores on conflicting-rule tasks (a measure of task-switching ability) would directly support this claim.`
      }
    }
  },
  {
    id: 'rc-q13', category: 'Command of Evidence',
    generate() {
      const correct = 'Cities that invested in separated bike lanes saw a statistically significant increase in cycling commuters and a decrease in cyclist injuries.'
      const opts = shuffle([
        correct,
        'Most urban residents prefer driving to cycling regardless of available infrastructure.',
        'Bike-sharing programs are more popular in European cities than in American ones.',
        'Air quality in cities with dedicated bike lanes improved over a ten-year period.'
      ])
      return { id: this.id, category: this.category,
        question: `Urban planners have long debated whether investing in cycling infrastructure actually increases the number of people who commute by bicycle. Proponents argue that separated bike lanes make cycling safer and more appealing, thereby reducing car dependency and improving public health outcomes.\n\nWhich finding, if true, would most directly support the proponents' argument?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The proponents claim that separated bike lanes increase cycling by making it safer. Finding that such lanes increased cycling and decreased injuries directly supports both elements of this argument.`
      }
    }
  },
  // ─── Text Structure ───
  {
    id: 'rc-q14', category: 'Text Structure',
    generate() {
      const correct = 'It introduces a phenomenon and then explains the mechanism behind it.'
      const opts = shuffle([
        correct,
        'It presents two competing theories and evaluates them against evidence.',
        'It describes an experiment and reports its unexpected results.',
        'It traces the historical development of a scientific concept.'
      ])
      return { id: this.id, category: this.category,
        question: `Certain species of bamboo flower only once in their lifetimes, sometimes after growing vegetatively for more than a century. When flowering finally occurs, all individuals of the same species bloom simultaneously—even those growing on different continents. Botanists attribute this synchronization to a genetically programmed internal clock that is set when each plant first sprouts from seed and counts cell divisions until a predetermined threshold triggers flowering.\n\nWhich choice best describes the overall structure of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The text first introduces the phenomenon (synchronized bamboo flowering) and then explains the genetic mechanism behind it (an internal clock that counts cell divisions).`
      }
    }
  },
  {
    id: 'rc-q15', category: 'Text Structure',
    generate() {
      const correct = 'It challenges a common assumption by presenting contradictory evidence.'
      const opts = shuffle([
        correct,
        'It describes a process in chronological order.',
        'It compares two methods and recommends one over the other.',
        'It proposes a new theory and then acknowledges its limitations.'
      ])
      return { id: this.id, category: this.category,
        question: `It is widely believed that goldfish have a memory span of only a few seconds, but research by scientists at the University of Plymouth has demonstrated otherwise. In controlled experiments, goldfish trained to push a lever for food remembered the correct response up to five months later, a retention period comparable to that of many mammals. The findings suggest that the cognitive abilities of fish have been substantially underestimated.\n\nWhich choice best describes the overall structure of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The text opens with a common assumption (goldfish have short memories), then presents research evidence that contradicts it, challenging the assumption.`
      }
    }
  },
  // ─── Cross-Text ───
  {
    id: 'rc-q16', category: 'Cross-Text Connections',
    generate() {
      const correct = 'They would likely disagree about whether artificial intelligence threatens the livelihoods of creative professionals.'
      const opts = shuffle([
        correct,
        'They would agree that AI-generated art is indistinguishable from human-created art.',
        'They would agree that AI should be banned from creative industries.',
        'They would likely disagree about whether creativity requires consciousness.'
      ])
      return { id: this.id, category: this.category,
        question: `Text 1: Art historian Marcus Liu contends that AI-generated images are fundamentally different from human art because they lack intentionality. A human artist makes conscious choices—about color, composition, and subject—that reflect personal experience and cultural context. AI, Liu argues, merely recombines patterns from its training data without understanding or purpose.\n\nText 2: Technology journalist Priya Sharma argues that the distinction between human and AI creativity is less clear than critics like Liu suggest. She points out that many human artists also draw heavily on existing works, and that AI tools are already enabling independent artists to produce professional-quality illustrations without expensive training—democratizing access to visual expression.\n\nBased on the texts, how would Liu and Sharma most likely respond to the growing use of AI image generators in commercial design?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Liu sees AI art as fundamentally lacking intentionality (implying it shouldn't replace human artists), while Sharma sees AI as democratizing creative tools (implying it helps creative professionals). They would likely disagree about whether AI threatens creative livelihoods.`
      }
    }
  },
  {
    id: 'rc-q17', category: 'Cross-Text Connections',
    generate() {
      const correct = 'Text 2 provides a specific example that supports Text 1\'s general claim about urban tree canopy benefits.'
      const opts = shuffle([
        correct,
        'Text 2 contradicts Text 1\'s claims about the benefits of urban trees.',
        'Text 1 and Text 2 address entirely different aspects of urban planning.',
        'Text 2 argues that the benefits of urban trees are overstated by researchers like those cited in Text 1.'
      ])
      return { id: this.id, category: this.category,
        question: `Text 1: A growing body of research suggests that urban tree canopy coverage can significantly reduce ambient temperatures in city neighborhoods. A 2021 study found that streets with mature tree canopies were, on average, 4 to 6 degrees Fahrenheit cooler than comparable streets without trees during summer heat events.\n\nText 2: In Phoenix, Arizona, a city-funded initiative to plant 100,000 shade trees in low-income neighborhoods has already produced measurable results. After five years, monitored sites recorded average surface temperature reductions of 5 degrees Fahrenheit during July and August, contributing to a 15 percent decrease in heat-related emergency room visits in those areas.\n\nWhich choice best describes the relationship between the two texts?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Text 1 makes a general research-backed claim about tree canopy reducing temperatures. Text 2 provides a specific real-world example (Phoenix) that demonstrates this claim in action, with measurable temperature reductions.`
      }
    }
  },
  // ─── Additional Central Ideas ───
  {
    id: 'rc-q18', category: 'Central Ideas',
    generate() {
      const correct = 'Standardized testing may not capture the full range of student abilities.'
      const opts = shuffle([
        correct,
        'Standardized tests are the most reliable predictor of college success.',
        'Creative and practical skills are less important than analytical skills.',
        'Howard Gardner\'s theory has been universally accepted by educators.'
      ])
      return { id: this.id, category: this.category,
        question: `Psychologist Howard Gardner's theory of multiple intelligences proposes that human cognitive ability cannot be captured by a single metric. Gardner identifies at least eight distinct forms of intelligence—including linguistic, logical-mathematical, musical, and interpersonal—arguing that traditional IQ tests and standardized exams measure only a narrow slice of human potential. Critics counter that Gardner's categories lack empirical rigor, but his framework has nonetheless influenced educators who seek assessment methods that recognize diverse student strengths.\n\nWhich choice best states the main idea of the text?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage presents Gardner's argument that intelligence is multifaceted and that traditional tests capture only a narrow range, implying that standardized testing may miss the full range of student abilities.`
      }
    }
  },
  // ─── Additional Inferences ───
  {
    id: 'rc-q19', category: 'Inferences',
    generate() {
      const correct = 'Octopuses may be capable of more complex cognition than their invertebrate classification might suggest.'
      const opts = shuffle([
        correct,
        'Octopuses are the most intelligent marine animals.',
        'Invertebrates generally lack the ability to solve problems.',
        'Octopus intelligence is primarily an adaptation for avoiding predators.'
      ])
      return { id: this.id, category: this.category,
        question: `Marine biologists have documented octopuses unscrewing jars from the inside, navigating complex mazes, and recognizing individual human faces—behaviors that were once thought to require the kind of neural complexity found only in vertebrates. The octopus brain, which contains roughly 500 million neurons distributed across its arms and central brain, operates in a fundamentally different architecture from the centralized brains of mammals, yet it supports remarkably sophisticated behavior.\n\nBased on the text, what can most reasonably be inferred?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage describes cognitively complex behaviors in octopuses—an invertebrate—that were "once thought to require" vertebrate neural complexity. This implies octopuses may be capable of more complex cognition than their invertebrate status would suggest.`
      }
    }
  },
  // ─── Additional Evidence ───
  {
    id: 'rc-q20', category: 'Command of Evidence',
    generate() {
      const correct = 'Communities that adopted restorative justice programs saw a 30 percent reduction in repeat offenses compared to communities that relied solely on traditional sentencing.'
      const opts = shuffle([
        correct,
        'Restorative justice programs are more cost-effective than incarceration.',
        'Victims of crime generally prefer restorative justice to traditional court proceedings.',
        'Restorative justice was first developed in New Zealand in the 1980s.'
      ])
      return { id: this.id, category: this.category,
        question: `Proponents of restorative justice argue that bringing offenders face-to-face with the people harmed by their actions is more effective at preventing future criminal behavior than traditional punitive sentencing. By requiring offenders to understand and take responsibility for the impact of their actions, these programs aim to address the root causes of criminal behavior rather than simply imposing punishment.\n\nWhich finding, if true, would most directly support the proponents' claim?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The proponents claim restorative justice is more effective at preventing future criminal behavior than traditional sentencing. A finding showing lower repeat offenses in restorative justice communities directly supports this claim.`
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
