/**
 * Exit Quiz — SAT Effective Language Use (Digital SAT Format)
 *
 * Passage-based questions following the Digital SAT Reading & Writing format.
 * Tests Expression of Ideas: transitions, rhetorical synthesis, and conciseness.
 *
 * Domain: Expression of Ideas
 */

export interface ExitQuizQuestion { id: string; question: string; options: string[]; correctIndex: number; explanation: string; category: string; difficulty?: 'easy' | 'medium' | 'hard' }
interface QuestionTemplate { id: string; category: string; difficulty: 'easy' | 'medium' | 'hard'; generate: () => ExitQuizQuestion }

function shuffle<T>(arr: T[]): T[] { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }; return a }

const questionPool: QuestionTemplate[] = [
  // ─── Transitions ───
  {
    id: 'elu-q1', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'Nevertheless,'
      const opts = shuffle([correct, 'Therefore,', 'Similarly,', 'Specifically,'])
      return { id: this.id, category: this.category,
        question: `A 2019 study found that students who took handwritten notes performed significantly better on conceptual questions than those who typed their notes on laptops. _______ many universities have continued to encourage or even require the use of laptops in lecture halls, citing the benefits of digital organization and accessibility.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence presents information that contrasts with the study's findings (universities continue to encourage laptops despite evidence favoring handwriting). "Nevertheless" signals this contrast.`
      }
    }
  },
  {
    id: 'elu-q2', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'For instance,'
      const opts = shuffle([correct, 'In contrast,', 'As a result,', 'At the same time,'])
      return { id: this.id, category: this.category,
        question: `The human body has evolved several remarkable mechanisms for regulating internal temperature. _______ when core body temperature rises during exercise, blood vessels near the skin dilate to release heat, and sweat glands produce moisture that cools the skin through evaporation.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence provides a specific example of the temperature-regulating mechanisms mentioned in the first. "For instance" signals that an example follows.`
      }
    }
  },
  {
    id: 'elu-q3', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'Consequently,'
      const opts = shuffle([correct, 'However,', 'In other words,', 'Alternatively,'])
      return { id: this.id, category: this.category,
        question: `The volcanic eruption of Mount Tambora in 1815 ejected an estimated 160 cubic kilometers of ash into the atmosphere, blocking sunlight across the Northern Hemisphere. _______ the following year became known as the "Year Without a Summer," as temperatures plummeted and crops failed across Europe and North America.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence describes a direct effect (crop failure, temperature drops) caused by the eruption described in the first. "Consequently" signals a cause-and-effect relationship.`
      }
    }
  },
  {
    id: 'elu-q4', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'In contrast,'
      const opts = shuffle([correct, 'Furthermore,', 'Accordingly,', 'In addition,'])
      return { id: this.id, category: this.category,
        question: `Classical conditioning, as described by Ivan Pavlov, involves learning through the association of a neutral stimulus with an automatic response; a dog, for example, may learn to salivate at the sound of a bell that has been repeatedly paired with food. _______ operant conditioning, studied extensively by B. F. Skinner, involves learning through the consequences of voluntary behavior—an organism repeats actions that are rewarded and avoids those that are punished.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage shifts from describing one type of conditioning to a fundamentally different type. "In contrast" signals this shift between differing concepts.`
      }
    }
  },
  {
    id: 'elu-q5', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'Moreover,'
      const opts = shuffle([correct, 'Instead,', 'Nevertheless,', 'On the other hand,'])
      return { id: this.id, category: this.category,
        question: `Regular physical exercise has been shown to reduce the risk of cardiovascular disease by strengthening the heart and improving circulation. _______ a growing body of research indicates that exercise also has significant cognitive benefits, including improved memory, enhanced attention, and reduced risk of age-related neurodegenerative conditions.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence adds additional information that extends the first sentence's point about the benefits of exercise. "Moreover" signals that additional, supportive information follows.`
      }
    }
  },
  // ─── Rhetorical Synthesis ───
  {
    id: 'elu-q6', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'Both aim to cut emissions, but cap-and-trade sets a fixed limit on total emissions, while a carbon tax sets a fixed price per ton of carbon.'
      const opts = shuffle([
        correct,
        'Cap-and-trade programs and carbon taxes are both policies that governments use to give businesses a reason to reduce carbon output.',
        'Under cap-and-trade, the government sets a maximum limit on total emissions, and companies buy and sell permits to emit.',
        'A carbon tax sets a price on each ton of carbon a company emits, which gives businesses a financial reason to emit less.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing a research paper comparing two approaches to reducing greenhouse gas emissions. The student wants to emphasize the key difference between cap-and-trade programs and carbon taxes.\n\nBullet points from the student's notes:\n• Cap-and-trade: government sets a maximum limit (cap) on total emissions; companies buy and sell emission permits\n• Carbon tax: government sets a price per ton of carbon emitted; no cap on total emissions\n• Both aim to incentivize businesses to reduce carbon output\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to emphasize the key difference. The correct choice acknowledges the shared goal (reducing emissions) while clearly contrasting the mechanisms (fixed limit vs. fixed price).`
      }
    }
  },
  {
    id: 'elu-q7', category: 'Rhetorical Synthesis', difficulty: 'hard',
    generate() {
      const correct = 'Because each ring in bristlecone pines, some over 4,000 years old, records one year\'s growing conditions, scientists can reconstruct past climate year by year.'
      const opts = shuffle([
        correct,
        'Bristlecone pines are among the oldest living organisms on Earth, and some of these remarkable trees have survived for more than 4,000 years.',
        'Dendrochronology is the science of dating and analyzing tree rings, and it was developed in the early twentieth century by A. E. Douglass.',
        'Scientists use many different methods to study historical climate data, including ice cores, ocean sediments, and the rings of trees.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing an article about how scientists study past climates. The student wants to highlight the precision of dendrochronology as a tool for understanding historical climate.\n\nBullet points from the student's notes:\n• Dendrochronology: the science of dating and analyzing annual tree ring patterns\n• Bristlecone pines: among the oldest living organisms; some exceed 4,000 years of age\n• Each ring reflects growing conditions for a specific year (width, density indicate temperature, rainfall)\n• Allows year-by-year climate reconstruction for millennia\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to highlight the precision of dendrochronology. The correct choice combines the ancient age of the trees with the year-by-year reconstruction capability, emphasizing precision.`
      }
    }
  },
  {
    id: 'elu-q8', category: 'Rhetorical Synthesis', difficulty: 'hard',
    generate() {
      const correct = 'Once seen mainly as Diego Rivera\'s wife, Frida Kahlo has since come to be regarded as one of the most important artists of the twentieth century.'
      const opts = shuffle([
        correct,
        'Frida Kahlo was a Mexican artist who was married to Diego Rivera, and she painted highly personal and emotional works about identity and her physical suffering.',
        'Frida Kahlo is now considered one of the most influential artists of the twentieth century by many art historians, critics, and museum curators.',
        'Frida Kahlo\'s paintings often depicted her own experiences with physical suffering and drew heavily on the rich cultural traditions of Mexico.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing a biography of Frida Kahlo for an art history class. The student wants to emphasize how Kahlo's reputation has evolved over time.\n\nBullet points from the student's notes:\n• During her lifetime, often seen primarily as Diego Rivera's wife\n• Painted highly personal works exploring identity, physical suffering, and Mexican cultural traditions\n• Posthumous reassessment: now regarded as one of the most important artists of the 20th century\n• Major retrospective exhibitions held worldwide since the 1980s\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to emphasize the evolution of Kahlo's reputation. The correct choice traces the shift from being seen mainly as Rivera's wife to being regarded as one of the most important artists, showing the reputation's evolution. The other choices describe her marriage, her subjects, or her current standing without showing change over time.`
      }
    }
  },
  {
    id: 'elu-q9', category: 'Rhetorical Synthesis', difficulty: 'hard',
    generate() {
      const correct = 'Orbiting a million miles from Earth, JWST can detect infrared light from galaxies formed over 13 billion years ago, which ground-based telescopes cannot see.'
      const opts = shuffle([
        correct,
        'The James Webb Space Telescope, which was launched in December 2021, is the successor to the Hubble Space Telescope and orbits the Sun.',
        'Ground-based telescopes have a view that is distorted by Earth\'s atmosphere, which creates turbulence and absorbs some incoming light.',
        'The James Webb Space Telescope cost approximately ten billion dollars to develop and launch, making it one of the costliest instruments ever built.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about the advantages of space-based telescopes over ground-based ones. The student wants to highlight the James Webb Space Telescope's unique capabilities.\n\nBullet points from the student's notes:\n• JWST orbits the Sun at Lagrange point 2, approximately 1 million miles from Earth\n• Specializes in infrared observations; can detect light from galaxies formed > 13 billion years ago\n• Ground-based telescopes: view distorted by Earth's atmosphere (atmospheric turbulence, absorption)\n• JWST can see objects too faint or too distant for ground-based instruments\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to highlight JWST's unique capabilities. The correct choice integrates its location, its infrared detection of ancient galaxies, and the contrast with ground-based limitations. The other choices give its launch history, its cost, or the limits of ground-based telescopes without describing what JWST can do.`
      }
    }
  },
  // ─── Conciseness ───
  {
    id: 'elu-q10', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'The study found that sleep deprivation impairs decision-making.'
      const opts = shuffle([
        correct,
        'The study found that a lack of sleep and rest impairs decision-making ability.',
        'What the study found was that sleep deprivation impairs decision-making.',
        'The study found that it impairs decisions.'
      ])
      return { id: this.id, category: this.category,
        question: `Researchers at the University of Pennsylvania conducted a week-long experiment in which participants were limited to four hours of sleep per night. _______\n\nWhich choice completes the text most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice conveys the finding clearly and concisely without redundancy. Other options repeat ideas ("sleep and rest") or add a wordy "What the study found was" opener, and the shortest version uses an unclear "it" that never names sleep deprivation.`
      }
    }
  },
  {
    id: 'elu-q11', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'The bridge, completed in 1937, remains an iconic symbol of San Francisco.'
      const opts = shuffle([
        correct,
        'Completed in 1937, remains an iconic symbol of San Francisco.',
        'The bridge, which was completed in 1937, still remains an iconic symbol of San Francisco.',
        'Completed in 1937, the bridge is still today an iconic symbol that represents San Francisco.'
      ])
      return { id: this.id, category: this.category,
        question: `The Golden Gate Bridge was a marvel of civil engineering when it opened. _______\n\nWhich choice completes the text most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice is concise and clear. Other versions add redundancies such as "still remains" or "still today... represents," and the shortest version drops the subject, leaving an unclear sentence fragment.`
      }
    }
  },
  {
    id: 'elu-q12', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'Because the soil lacked nitrogen, the crops failed.'
      const opts = shuffle([
        correct,
        'The soil lacked nitrogen; the crops failed.',
        'The reason the crops failed was because the soil lacked nitrogen.',
        'Due to the fact that the soil lacked nitrogen, the crops failed.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is revising a paragraph about agricultural challenges in sub-Saharan Africa and wants to express a causal relationship as concisely as possible.\n\nWhich choice states the relationship most concisely?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `"Because the soil lacked nitrogen, the crops failed" is the most concise version. Other versions use wordy phrases like "due to the fact that" or "the reason...was because," and the version joined by a semicolon places the two facts side by side without stating that one caused the other.`
      }
    }
  },
  // ─── Additional Transitions ───
  {
    id: 'elu-q13', category: 'Transitions', difficulty: 'hard',
    generate() {
      const correct = 'In fact,'
      const opts = shuffle([correct, 'By contrast,', 'Regardless,', 'Alternatively,'])
      return { id: this.id, category: this.category,
        question: `Many people assume that deserts are lifeless wastelands, but the Sonoran Desert in the American Southwest supports a surprisingly diverse ecosystem. _______ more than 2,000 plant species and 550 vertebrate species have been documented within its boundaries, making it one of the most biologically rich deserts on Earth.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence intensifies the first sentence's claim about surprising diversity. "In fact" signals that the speaker is adding emphatic, reinforcing detail.`
      }
    }
  },
  {
    id: 'elu-q14', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'On the other hand,'
      const opts = shuffle([correct, 'In addition,', 'As a result,', 'Likewise,'])
      return { id: this.id, category: this.category,
        question: `Some researchers argue that social media use strengthens weak social ties, enabling people to maintain connections with acquaintances they might otherwise lose touch with. _______ other scholars contend that these superficial online interactions come at the expense of deeper, more meaningful face-to-face relationships.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage presents two opposing scholarly views. "On the other hand" signals a shift to a contrasting perspective.`
      }
    }
  },
  // ─── Additional Rhetorical Synthesis ───
  {
    id: 'elu-q15', category: 'Rhetorical Synthesis', difficulty: 'hard',
    generate() {
      const correct = 'Vertical farms use far less water and land than conventional farms, but high lighting costs currently limit them to high-value crops like herbs.'
      const opts = shuffle([
        correct,
        'Vertical farms use up to 95 percent less water than conventional farms, and they need so little land that they can operate in cities.',
        'Vertical farms depend on artificial lighting, which consumes large amounts of electricity and makes the farms costly to operate.',
        'Vertical farming is a type of agriculture in which crops such as lettuce, basil, and herbs are grown indoors under artificial lights.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about the potential and limitations of vertical farming. The student wants to present a balanced assessment acknowledging both advantages and current constraints.\n\nBullet points from the student's notes:\n• Vertical farms use up to 95% less water than conventional farms\n• Require minimal land; can operate in urban environments\n• Limitation: artificial lighting consumes large amounts of electricity\n• Currently cost-effective primarily for high-value, fast-growing crops (lettuce, basil, herbs)\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants a balanced view. The correct choice acknowledges advantages (less water, less land) while presenting the key limitation (energy costs restrict viability to high-value crops).`
      }
    }
  },
  // ─── Additional Conciseness ───
  {
    id: 'elu-q16', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'The architect designed the building to maximize natural light.'
      const opts = shuffle([
        correct,
        'The architect designed the building for light.',
        'The architect designed the building in a way that would maximize natural light.',
        'The building was designed by the architect with the goal of maximizing natural light.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is revising an essay about sustainable building design and wants to express a key design decision concisely.\n\nWhich choice states the idea most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice directly states the design intent without wordy constructions like "in a way that would" or "with the goal of." The shortest version is vague: "for light" loses the idea of maximizing natural light.`
      }
    }
  },
  {
    id: 'elu-q17', category: 'Transitions', difficulty: 'hard',
    generate() {
      const correct = 'Admittedly,'
      const opts = shuffle([correct, 'Undoubtedly,', 'Surprisingly,', 'Coincidentally,'])
      return { id: this.id, category: this.category,
        question: `Proponents of year-round schooling argue that eliminating the traditional summer break would reduce learning loss and improve academic outcomes for students from low-income families. _______ the evidence supporting this claim is mixed: some studies show modest gains in reading and mathematics, while others find no statistically significant difference in achievement between year-round and traditional calendar students.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence concedes a weakness in the proponents' argument (mixed evidence). "Admittedly" signals a concession—acknowledging a point that qualifies or weakens the preceding claim.`
      }
    }
  },
  {
    id: 'elu-q18', category: 'Transitions', difficulty: 'hard',
    generate() {
      const correct = 'To that end,'
      const opts = shuffle([correct, 'Even so,', 'In retrospect,', 'By comparison,'])
      return { id: this.id, category: this.category,
        question: `The city of Copenhagen has set an ambitious goal of becoming carbon-neutral by 2025. _______ officials have invested heavily in cycling infrastructure, wind energy, and energy-efficient public buildings, making the city a global model for sustainable urban development.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence describes actions taken to achieve the goal stated in the first sentence. "To that end" means "in order to achieve that goal," connecting the actions to the objective.`
      }
    }
  },
  {
    id: 'elu-q19', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'Cultivated meat could cut livestock emissions by up to 92%, but surveys show that many people are uncomfortable eating "lab-grown" products.'
      const opts = shuffle([
        correct,
        'Cultivated meat is produced from animal cells without raising or slaughtering animals, and it uses far less land and water than conventional meat.',
        'Cultivated meat is produced from animal cells rather than from raised livestock, and its price has dropped noticeably over the past several years.',
        'Cultivated meat could reduce greenhouse emissions from livestock by up to 92% and would require far less land and water than conventional meat.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about the future of lab-grown (cultivated) meat. The student wants to highlight both the potential environmental benefits and a major obstacle to widespread adoption.\n\nBullet points from the student's notes:\n• Cultivated meat: produced from animal cells without raising/slaughtering animals\n• Could reduce greenhouse emissions from livestock by up to 92%\n• Uses far less land and water than conventional meat production\n• Obstacle: consumer reluctance—surveys show many people uncomfortable eating "lab-grown" products\n• Price has dropped but remains higher than conventional meat\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to highlight both benefits and an obstacle. The correct choice mentions the environmental advantage while also noting consumer hesitancy as a barrier.`
      }
    }
  },
  {
    id: 'elu-q20', category: 'Conciseness', difficulty: 'medium',
    generate() {
      const correct = 'The experiment confirmed that plants grow faster under blue light than under red light.'
      const opts = shuffle([
        correct,
        'The experiment confirmed that plants grow faster under blue light.',
        'What the experiment confirmed was that plants grow faster under blue light than under red light.',
        'The experiment confirmed that plants grow at a faster rate under blue light than they do under red light.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is revising a lab report and wants to state a key finding concisely.\n\nWhich choice expresses the finding most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice states the finding in a direct, active sentence. Other versions add wordy constructions, and the shortest version drops the comparison with red light, changing the finding.`
      }
    }
  },
  {
    id: 'elu-q21', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'For example,'
      const opts = shuffle([correct, 'However,', 'As a result,', 'Instead,'])
      return { id: this.id, category: this.category,
        question: `Several Arctic animals change their appearance with the seasons. _______ the arctic fox's coat is brown or gray during the summer and turns white in winter, helping the fox blend in with snow.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence gives a specific case of an Arctic animal whose appearance changes with the seasons. "For example" signals that an illustration of the first sentence's claim follows. "However" and "Instead" would signal a contrast, and "As a result" would present the fox's coat as caused by the first sentence's general statement.`
      }
    }
  },
  {
    id: 'elu-q22', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'However,'
      const opts = shuffle([correct, 'For instance,', 'Thus,', 'In addition,'])
      return { id: this.id, category: this.category,
        question: `The ancient Roman city of Pompeii was buried by the eruption of Mount Vesuvius in 79 CE. _______ the thick layer of ash that destroyed the city also preserved it, allowing archaeologists to study its buildings, paintings, and even carbonized loaves of bread many centuries later.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The first sentence describes destruction, and the second reveals an unexpected, contrasting outcome: the same ash preserved the city. "However" signals this contrast. "For instance" would introduce an example of the burial, "In addition" would simply add another point without marking the reversal, and "Thus" would present the preservation as an expected consequence rather than a surprising contrast.`
      }
    }
  },
  {
    id: 'elu-q23', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'As a result,'
      const opts = shuffle([correct, 'For example,', 'Nevertheless,', 'Similarly,'])
      return { id: this.id, category: this.category,
        question: `In the 1850s, much of London's sewage flowed untreated into the River Thames. During the unusually hot summer of 1858, the smell from the river became so overpowering that the episode became known as the "Great Stink." _______ Parliament approved funding for a vast new sewer system designed by the engineer Joseph Bazalgette.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The final sentence describes a response caused by the crisis described before it. "As a result" signals this cause-and-effect relationship. "For example" would introduce an illustration, "Nevertheless" would suggest Parliament acted despite the smell rather than because of it, and "Similarly" would introduce a parallel situation.`
      }
    }
  },
  {
    id: 'elu-q24', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'Similarly,'
      const opts = shuffle([correct, 'Conversely,', 'Therefore,', 'Otherwise,'])
      return { id: this.id, category: this.category,
        question: `Bats locate prey in darkness by producing high-pitched calls and listening for the echoes that bounce back. _______ toothed whales such as dolphins produce rapid clicks and interpret the returning sound to navigate and hunt in murky water.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `Both sentences describe animals that locate objects by producing sounds and interpreting echoes, so the second sentence presents a parallel case. "Similarly" signals that likeness. "Conversely" would signal an opposite behavior. "Therefore" would wrongly suggest that the bats' ability causes the dolphins' ability, and "Otherwise" would introduce what happens if a condition is not met.`
      }
    }
  },
  {
    id: 'elu-q25', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'Meanwhile,'
      const opts = shuffle([correct, 'Consequently,', 'For instance,', 'In conclusion,'])
      return { id: this.id, category: this.category,
        question: `In the 1860s, crews working for the Union Pacific Railroad laid track westward from Nebraska. _______ crews working for the Central Pacific, many of them Chinese immigrants, built eastward from California. The two lines finally met at Promontory Summit, Utah, in 1869.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence describes work happening at the same time as the work in the first sentence, from the opposite direction. "Meanwhile" signals simultaneous events. "Consequently" would suggest the Union Pacific's work caused the Central Pacific's work. "For instance" would introduce an example of the first sentence, and "In conclusion" would wrongly signal a summary before the passage's final event.`
      }
    }
  },
  {
    id: 'elu-q26', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'Rather,'
      const opts = shuffle([correct, 'Thus,', 'Consequently,', 'For example,'])
      return { id: this.id, category: this.category,
        question: `Contrary to a popular belief, Galileo Galilei did not invent the telescope. _______ he built improved versions of an instrument first developed by spectacle makers in the Netherlands and turned them toward the night sky, where he observed the moons of Jupiter and the phases of Venus.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The first sentence denies a common belief, and the second states what actually happened instead. "Rather" signals this correction. "Thus" and "Consequently" would present Galileo's work as a result of his not inventing the telescope, and "For example" would introduce an illustration of the denial rather than a correction of it.`
      }
    }
  },
  {
    id: 'elu-q27', category: 'Transitions', difficulty: 'medium',
    generate() {
      const correct = 'In other words,'
      const opts = shuffle([correct, 'By contrast,', 'Even so,', 'Meanwhile,'])
      return { id: this.id, category: this.category,
        question: `Economists describe the demand for insulin as highly inelastic. _______ people who depend on the medication tend to buy nearly the same amount of it even when its price rises sharply.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The second sentence restates the technical term "inelastic" in plain language. "In other words" signals a restatement. "By contrast" and "Even so" would signal information that conflicts with the first sentence, but the second sentence agrees with it. "Meanwhile" would signal a separate event happening at the same time.`
      }
    }
  },
  {
    id: 'elu-q28', category: 'Transitions', difficulty: 'easy',
    generate() {
      const correct = 'Finally,'
      const opts = shuffle([correct, 'In contrast,', 'For example,', 'Otherwise,'])
      return { id: this.id, category: this.category,
        question: `To make paper by hand, papermakers first soak plant fibers and beat them into a wet pulp. Next, they dip a fine screen into a vat of the pulp and lift it out, leaving a thin, even layer of fibers on the screen. _______ the new sheets are pressed to remove excess water and hung up to dry.\n\nWhich choice completes the text with the most logical transition?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The passage describes steps in order ("first," "Next"), and the last sentence gives the concluding step. "Finally" signals the last step in a sequence. "In contrast" would signal a difference, "For example" would introduce an illustration, and "Otherwise" would describe what happens if a step is skipped.`
      }
    }
  },
  {
    id: 'elu-q29', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'Although cuneiform was pressed into clay and hieroglyphs were carved or painted, both systems used some signs for whole words and others for sounds.'
      const opts = shuffle([
        correct,
        'Cuneiform, which developed in ancient Mesopotamia, was written by pressing a reed stylus into tablets made of soft clay.',
        'Egyptian hieroglyphs, which developed in ancient Egypt, were carved into stone monuments or painted onto walls and papyrus.',
        'Both cuneiform and hieroglyphs developed in the ancient world, but cuneiform was written on clay tablets, while hieroglyphs were carved or painted.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about two of the world's earliest writing systems. The student wants to emphasize a similarity between cuneiform and Egyptian hieroglyphs.\n\nBullet points from the student's notes:\n• Cuneiform: developed in ancient Mesopotamia; written by pressing a reed stylus into clay tablets\n• Egyptian hieroglyphs: developed in ancient Egypt; carved into stone or painted on walls and papyrus\n• Both systems used some signs to represent whole words and other signs to represent sounds\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to emphasize a similarity. The correct choice acknowledges the different writing materials but centers on what the systems share: signs for words and signs for sounds. The other choices describe only cuneiform, only hieroglyphs, or, despite opening with "Both," a difference between the two systems' materials.`
      }
    }
  },
  {
    id: 'elu-q30', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'The Svalbard Global Seed Vault stores backup seed samples from genebanks around the world so that crops lost to disaster or war can be restored.'
      const opts = shuffle([
        correct,
        'The Svalbard Global Seed Vault is built deep inside a mountain on a remote Norwegian archipelago, where permafrost helps keep it cold.',
        'Seed samples held in the Svalbard Global Seed Vault are duplicates, so the original samples remain at genebanks in their home countries.',
        'Located in Norway\'s Svalbard archipelago, the Svalbard Global Seed Vault opened in 2008 and holds seed samples from many countries around the world.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing a short article for readers who are unfamiliar with the Svalbard Global Seed Vault. The student wants to explain the vault's purpose.\n\nBullet points from the student's notes:\n• The Svalbard Global Seed Vault opened in 2008 in Norway's Svalbard archipelago\n• It is built into a mountain, where permafrost helps keep the stored seeds cold\n• It stores duplicate seed samples sent by genebanks around the world\n• Purpose: to serve as a backup so crop varieties can be restored if they are lost to natural disasters, war, or other crises\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to explain the vault's purpose. The correct choice states what the vault stores and why: to allow lost crops to be restored. The other choices describe its location, its construction, or the fact that its samples are duplicates without explaining what the vault is for.`
      }
    }
  },
  {
    id: 'elu-q31', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'The Harlem Renaissance was a flourishing of Black literature, music, and art centered in New York City\'s Harlem neighborhood in the 1920s and 1930s.'
      const opts = shuffle([
        correct,
        'Langston Hughes and Zora Neale Hurston were among the many important writers who were associated with the Harlem Renaissance.',
        'During the 1920s and 1930s, many Black writers, musicians, and visual artists gathered in the Harlem neighborhood of New York City.',
        'Langston Hughes wrote poetry about everyday Black life, while Zora Neale Hurston wrote novels and also studied African American folklore.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing an introduction for classmates who have never heard of the Harlem Renaissance. The student wants to introduce the movement to this audience.\n\nBullet points from the student's notes:\n• The Harlem Renaissance was a cultural movement of the 1920s and 1930s\n• It was centered in the Harlem neighborhood of New York City\n• It produced a flourishing of Black literature, music, and visual art\n• Key figures included the poet Langston Hughes and the novelist and folklorist Zora Neale Hurston\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `An audience unfamiliar with the movement needs to know what it was, where it happened, and when. The correct choice names the movement and supplies all three. The other choices mention individual figures or describe artists gathering in Harlem without identifying the Harlem Renaissance as a movement.`
      }
    }
  },
  {
    id: 'elu-q32', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'While weather describes atmospheric conditions that can change within hours or days, climate describes the average pattern of those conditions, typically over thirty years.'
      const opts = shuffle([
        correct,
        'Both weather and climate are described using measurements of conditions such as temperature, precipitation, humidity, and wind.',
        'Climate describes the average pattern of atmospheric conditions in a place, and it is typically calculated over a period of thirty years.',
        'Weather describes the conditions of the atmosphere at a particular time and place, and those conditions can change within hours.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about a common confusion in discussions of the environment. The student wants to emphasize a difference between weather and climate.\n\nBullet points from the student's notes:\n• Weather: atmospheric conditions at a particular time and place; can change within hours or days\n• Climate: the average pattern of atmospheric conditions in a region, usually calculated over 30 years\n• Both are described using measurements such as temperature, precipitation, humidity, and wind\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to emphasize a difference. The correct choice directly contrasts the short time scale of weather with the long time scale of climate. The other choices describe a similarity between the two or define only one of the terms without contrasting it with the other.`
      }
    }
  },
  {
    id: 'elu-q33', category: 'Rhetorical Synthesis', difficulty: 'medium',
    generate() {
      const correct = 'NASA planned for Ingenuity to make only five test flights on Mars, but the small helicopter ultimately completed seventy-two flights.'
      const opts = shuffle([
        correct,
        'In April 2021, NASA\'s Ingenuity helicopter became the first aircraft to make a powered, controlled flight on another planet.',
        'NASA\'s Ingenuity helicopter traveled to Mars attached to the Perseverance rover, which landed in Jezero Crater in February 2021.',
        'The mission of NASA\'s Ingenuity helicopter ended in January 2024, after one of its rotor blades was damaged during a landing on Mars.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about NASA's Ingenuity Mars helicopter. The student wants to emphasize that the helicopter far exceeded its planned mission.\n\nBullet points from the student's notes:\n• Ingenuity traveled to Mars with the Perseverance rover, which landed in Jezero Crater in February 2021\n• In April 2021, it made the first powered, controlled flight by an aircraft on another planet\n• It was originally planned to make up to five test flights\n• It completed 72 flights before its mission ended in January 2024 because of rotor blade damage\n\nWhich choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The student wants to show that Ingenuity exceeded its planned mission. The correct choice contrasts the five planned flights with the seventy-two it actually completed. The other choices report a historic first, its journey to Mars, or the end of its mission without comparing what was planned with what was achieved.`
      }
    }
  },
  {
    id: 'elu-q34', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'The council postponed the vote until the following week.'
      const opts = shuffle([
        correct,
        'The council postponed the vote until later, delaying it to a future date the following week.',
        'The vote was postponed by the council, which put it off until the following week.',
        'The council postponed it.'
      ])
      return { id: this.id, category: this.category,
        question: `The city council had planned to vote on the new zoning rules on Monday, but several members asked for more time to study the proposal. _______\n\nWhich choice completes the text most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice states what happened clearly and without repetition. The other longer versions repeat the idea of delay ("postponed... until later, delaying it" and "postponed... put it off"), and the shortest version uses "it" and drops the new date, leaving out when the vote will happen.`
      }
    }
  },
  {
    id: 'elu-q35', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'The museum is open every day except Monday.'
      const opts = shuffle([
        correct,
        'The museum is open every single day of the week except for on Mondays.',
        'Except for Mondays, the museum is open daily, every day of the week.',
        'The museum opens its doors to visitors daily, with the exception of Mondays.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing a visitor guide for a local history museum and wants to state the museum's schedule concisely.\n\nWhich choice states the schedule most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice gives the complete schedule in the fewest words. Other versions add unnecessary words ("every single day of the week except for on") repeat themselves ("daily, every day"), or use a roundabout phrasing ("opens its doors to visitors... with the exception of") where a plain one works.`
      }
    }
  },
  {
    id: 'elu-q36', category: 'Conciseness', difficulty: 'medium',
    generate() {
      const correct = 'The festival, held each October, attracts thousands of visitors.'
      const opts = shuffle([
        correct,
        'The annual festival, which is held each year in October, attracts thousands of visitors.',
        'Every year, the yearly festival that takes place in October attracts thousands of visitors.',
        'The festival attracts visitors.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is writing about a small town known for its apple harvest and wants to describe the town's best-known event. _______\n\nWhich choice completes the text most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice gives the timing and the size of the crowd with no repetition. Other versions say the same thing twice ("annual... each year" and "Every year, the yearly"), and the shortest version drops both when the festival is held and how many people attend.`
      }
    }
  },
  {
    id: 'elu-q37', category: 'Conciseness', difficulty: 'medium',
    generate() {
      const correct = 'The researchers repeated the experiment to confirm their results.'
      const opts = shuffle([
        correct,
        'The researchers repeated the experiment again in order to confirm their results.',
        'The researchers repeated the experiment so that they could confirm and verify their results.',
        'The researchers repeated the experiment a second time to confirm their results.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is revising a science article and wants to explain why a research team ran its study a second time. _______\n\nWhich choice completes the text most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice explains the action and its purpose directly. Every other version adds a redundancy: "repeated... again," "repeated... a second time," and "confirm and verify" each say the same thing twice, and "in order to" and "so that they could" are wordier than "to."`
      }
    }
  },
  {
    id: 'elu-q38', category: 'Conciseness', difficulty: 'medium',
    generate() {
      const correct = 'In 1903, the Wright brothers made the first controlled, powered airplane flight.'
      const opts = shuffle([
        correct,
        'In the year of 1903, the Wright brothers made the first airplane flight that was both controlled and powered.',
        'The first controlled, powered airplane flight was one that was made by the Wright brothers in 1903.',
        'The Wright brothers flew in 1903.'
      ])
      return { id: this.id, category: this.category,
        question: `A student is revising a sentence about the history of aviation and wants to state a key event concisely.\n\nWhich choice states the event most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice states the date, the people, and the achievement directly. Other versions add wordy phrases ("In the year of," "that was both," "was one that was made by"), and the shortest version loses the key point that this was the first controlled, powered airplane flight.`
      }
    }
  },
  {
    id: 'elu-q39', category: 'Conciseness', difficulty: 'easy',
    generate() {
      const correct = 'Voter turnout rose sharply this year.'
      const opts = shuffle([correct, 'Voter turnout rose sharply upward this year.', 'This year, the turnout of voters rose and increased sharply.', 'Voter turnout this year rose sharply higher.'])
      return { id: this.id, category: this.category,
        question: `A student is revising a news report about a recent local election and wants to avoid redundancy.\n\nWhich choice states the idea most concisely without sacrificing clarity?`,
        options: opts, correctIndex: opts.indexOf(correct),
        explanation: `The correct choice states the idea once, clearly. The other versions are redundant: "rose... upward," "rose and increased," and "rose... higher" each repeat the idea of rising.`
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
