// SAT Reading & Writing question bank for competitive mode, organized by the 4
// Digital SAT R&W domains (Information & Ideas, Craft & Structure, Expression of
// Ideas, Standard English Conventions). Assembled from per-domain pools; 30 per
// domain (10 easy / 10 medium / 10 hard). getSatRwQuestions(count, domain?) filters.

export type SatRwDomain = 'information-ideas' | 'craft-structure' | 'expression' | 'conventions'

export interface SatRwQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  domain: SatRwDomain
  /** Official College Board skill this question targets (student-facing). */
  skill?: string
}

const RW_DOMAINS: readonly SatRwDomain[] = ['information-ideas', 'craft-structure', 'expression', 'conventions']

const allQuestions: SatRwQuestion[] = [
  {
    "id": 1,
    "question": "The following is a short passage.\n\n\"The Sahara Desert was not always a sea of sand. Roughly 8,000 years ago, monsoon rains fed vast lakes and grasslands across North Africa, supporting hippos, elephants, and human settlements. A gradual shift in the region's climate eventually dried these landscapes into the desert seen today.\"\n\nWhich choice best states the main idea of the passage?",
    "options": [
      "Hippos once outnumbered elephants in North Africa.",
      "The Sahara was once a green, water-rich region before climate change turned it to desert.",
      "Human settlements caused the Sahara to dry out.",
      "Monsoon rains still reach the Sahara each year."
    ],
    "correctAnswer": 1,
    "explanation": "The passage's central point is that the once-green, wet Sahara later dried into desert due to a climate shift.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 2,
    "question": "The following is a short passage.\n\n\"Honeybees communicate the location of food through a 'waggle dance.' The angle of the dance relative to vertical signals the direction of the food source in relation to the sun, while the duration of the waggle indicates how far away it is.\"\n\nAccording to the passage, what does the duration of the waggle indicate?",
    "options": [
      "The type of flower found.",
      "The number of bees needed.",
      "The distance to the food source.",
      "The direction relative to the sun."
    ],
    "correctAnswer": 2,
    "explanation": "The passage explicitly states the duration of the waggle indicates how far away the food is.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 3,
    "question": "The following is a short passage.\n\n\"Ada Lovelace, working in the 1840s, wrote what many consider the first computer algorithm—a set of instructions intended for Charles Babbage's proposed Analytical Engine. Though the machine was never built in her lifetime, her notes anticipated that such devices could do far more than calculate numbers.\"\n\nWhich choice best states the main idea of the passage?",
    "options": [
      "Lovelace built the first working computer.",
      "Babbage disagreed with Lovelace's ideas.",
      "The Analytical Engine was widely used in the 1840s.",
      "Lovelace wrote an early algorithm and foresaw the broader potential of computing machines."
    ],
    "correctAnswer": 3,
    "explanation": "The passage emphasizes both her early algorithm and her insight that such machines could do more than calculate.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 4,
    "question": "The following is a short passage.\n\n\"Bioluminescence—the production of light by living organisms—is surprisingly common in the deep ocean, where sunlight cannot reach. Many creatures use it to lure prey, while others flash it to startle or evade predators.\"\n\nAccording to the passage, one reason organisms use bioluminescence is to",
    "options": [
      "warm the surrounding water.",
      "attract prey toward them.",
      "photosynthesize in darkness.",
      "communicate with the surface."
    ],
    "correctAnswer": 1,
    "explanation": "The passage states that many creatures use bioluminescence to lure, or attract, prey.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 5,
    "question": "The following is a short passage.\n\n\"The Great Wall of China is often described as a single continuous structure, but it is actually a network of walls, trenches, and natural barriers built by different dynasties over many centuries. Sections vary widely in construction, from packed earth to cut stone.\"\n\nWhich choice best states the main idea of the passage?",
    "options": [
      "The Great Wall is a varied network built over centuries, not one continuous structure.",
      "The Great Wall is made entirely of cut stone.",
      "One dynasty completed the Great Wall in a single century.",
      "The Great Wall was built to connect cities for trade."
    ],
    "correctAnswer": 0,
    "explanation": "The passage corrects the common view by presenting the wall as a varied, multi-dynasty network.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 6,
    "question": "The following is a short passage.\n\n\"In Kate Chopin's short fiction, quiet domestic settings often conceal intense inner conflict. A character may appear calm at the dinner table while wrestling privately with a desire for freedom she cannot openly express.\"\n\nAccording to the passage, Chopin's calm domestic scenes often",
    "options": [
      "describe large public gatherings.",
      "hide a character's inner struggle.",
      "focus mainly on humor.",
      "avoid any mention of feeling."
    ],
    "correctAnswer": 1,
    "explanation": "The passage states that quiet domestic settings conceal intense inner conflict.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 7,
    "question": "The following is a short passage.\n\n\"Coral reefs cover less than one percent of the ocean floor, yet they provide habitat for roughly a quarter of all marine species. This concentration of life makes reefs one of the planet's most biologically diverse ecosystems.\"\n\nWhich choice best states the main idea of the passage?",
    "options": [
      "Coral reefs are found on most of the ocean floor.",
      "Marine species avoid coral reefs.",
      "Despite their small area, coral reefs host a large share of marine life.",
      "Coral reefs contain no plant life."
    ],
    "correctAnswer": 2,
    "explanation": "The passage contrasts the reefs' tiny area with the large fraction of marine species they support.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 8,
    "question": "The following is a short passage.\n\n\"The printing press introduced by Johannes Gutenberg around 1440 allowed books to be produced far more quickly than by hand-copying. As printed texts became cheaper and more plentiful, literacy spread beyond the small circle of scholars who had previously controlled written knowledge.\"\n\nAccording to the passage, one effect of the printing press was that",
    "options": [
      "scholars stopped reading books.",
      "hand-copying became more common.",
      "books became rarer and more expensive.",
      "literacy spread beyond a small group of scholars."
    ],
    "correctAnswer": 3,
    "explanation": "The passage states literacy spread beyond the small circle of scholars once books became cheaper.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 9,
    "question": "The following is a short passage.\n\n\"Tardigrades, sometimes called 'water bears,' are microscopic animals famous for their toughness. They can survive extreme cold, intense radiation, and even the vacuum of space by entering a dried-out, dormant state called cryptobiosis.\"\n\nAccording to the passage, tardigrades survive extreme conditions by",
    "options": [
      "growing much larger.",
      "entering a dormant, dried-out state.",
      "living only in warm water.",
      "moving quickly to safety."
    ],
    "correctAnswer": 1,
    "explanation": "The passage explicitly attributes their survival to cryptobiosis, a dried-out dormant state.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 10,
    "question": "The following is a short passage.\n\n\"Rosalind Franklin's X-ray images of DNA were crucial to revealing its double-helix structure. Although her contribution was long overlooked, historians now recognize that her precise photographs provided key evidence for one of biology's most important discoveries.\"\n\nWhich choice best states the main idea of the passage?",
    "options": [
      "Franklin's overlooked X-ray images were key evidence for the discovery of DNA's structure.",
      "Franklin discovered a new element using X-rays.",
      "Historians have never studied Franklin's work.",
      "The double-helix structure was known before Franklin's photographs."
    ],
    "correctAnswer": 0,
    "explanation": "The passage centers on Franklin's photographs providing key, once-overlooked evidence for DNA's structure.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 11,
    "question": "The following is a short passage.\n\n\"Some plants, such as the resurrection fern, can lose up to three-quarters of their water content and appear completely dead. Yet within hours of rainfall, they rehydrate and resume normal growth. Researchers studying drought-resistant crops are increasingly interested in the chemistry behind this recovery.\"\n\nWhich quotation from the passage best supports the claim that the resurrection fern's ability has practical scientific value?",
    "options": [
      "\"can lose up to three-quarters of their water content\"",
      "\"appear completely dead\"",
      "\"Researchers studying drought-resistant crops are increasingly interested in the chemistry behind this recovery.\"",
      "\"within hours of rainfall, they rehydrate\""
    ],
    "correctAnswer": 2,
    "explanation": "The claim is about practical scientific value; the quotation about drought-resistant crop researchers directly supports that.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 12,
    "question": "The following is a short passage.\n\n\"City planner Maria Ortiz argued that adding bike lanes would not reduce car traffic unless the lanes formed a connected network. Isolated stretches, she warned, leave riders stranded and discourage cycling.\"\n\nWhich choice best describes Ortiz's view of isolated bike lanes?",
    "options": [
      "They are the fastest way to reduce car traffic.",
      "They are ineffective because they do not connect into a usable network.",
      "They are preferred by most cyclists.",
      "They should replace all car lanes."
    ],
    "correctAnswer": 1,
    "explanation": "Ortiz warns that isolated stretches strand riders and discourage cycling, so she views them as ineffective without connectivity.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 13,
    "question": "The following is a short passage.\n\n\"A researcher measured reaction times of participants after different amounts of sleep. Those who slept eight hours averaged a reaction time of 220 milliseconds, while those who slept only four hours averaged 310 milliseconds. Longer reaction times indicate slower responses.\"\n\nWhich choice best uses the data to complete the claim that sleep loss slows responses?\n\nParticipants who slept only four hours",
    "options": [
      "responded faster than those who slept eight hours.",
      "had reaction times of 220 milliseconds.",
      "had slower reaction times, averaging 310 milliseconds.",
      "showed no change in reaction time."
    ],
    "correctAnswer": 2,
    "explanation": "The four-hour group averaged 310 ms, a longer (slower) reaction time, supporting the claim that sleep loss slows responses.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 14,
    "question": "The following is a short passage.\n\n\"The novelist described the harbor town not through grand descriptions but through small, repeated details: the smell of salt, gulls circling a fishmonger's stall, the creak of moored boats. These recurring images gradually build the reader's sense of place.\"\n\nWhich choice best supports the idea that the author creates atmosphere through accumulation rather than direct description?",
    "options": [
      "\"the novelist described the harbor town\"",
      "\"grand descriptions\"",
      "\"the creak of moored boats\"",
      "\"These recurring images gradually build the reader's sense of place.\""
    ],
    "correctAnswer": 3,
    "explanation": "The claim is about building atmosphere through accumulation; the sentence about recurring images gradually building a sense of place directly supports it.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 15,
    "question": "The following is a short passage.\n\n\"Archaeologists uncovered a 3,000-year-old kitchen with grinding stones, storage jars still holding grain residue, and a clay oven. The variety and quantity of tools suggest that food preparation here was not for a single household but for a larger group.\"\n\nWhich choice, if true, would most strengthen the archaeologists' conclusion?",
    "options": [
      "The site also contained many large serving vessels sized for dozens of people.",
      "The grinding stones were made of common local rock.",
      "The oven was similar in shape to modern ovens.",
      "The grain residue came from a single type of wheat."
    ],
    "correctAnswer": 0,
    "explanation": "Serving vessels sized for dozens directly supports the conclusion that food was prepared for a larger group.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 16,
    "question": "The following is a short passage.\n\n\"In a survey of commuters, 68% who used a new express train said they arrived at work less stressed, compared with 41% of those who continued driving. The transit agency cited these figures when proposing to expand the express line.\"\n\nWhich choice best uses the data to support the agency's proposal?",
    "options": [
      "Driving commuters reported less stress than express-train users.",
      "A larger share of express-train users reported arriving less stressed than driving commuters did.",
      "Equal shares of both groups reported less stress.",
      "Most express-train users reported more stress after switching."
    ],
    "correctAnswer": 1,
    "explanation": "68% versus 41% shows a larger share of express-train users felt less stressed, supporting expansion.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 17,
    "question": "The following is a short passage.\n\n\"During the 1920s, radio transformed how Americans experienced news and music. For the first time, families in distant regions could hear the same broadcast on the same evening, sharing a common cultural moment despite the miles between them.\"\n\nWhich choice best supports the claim that radio fostered a sense of shared national experience?",
    "options": [
      "\"radio transformed how Americans experienced news and music\"",
      "\"During the 1920s\"",
      "\"families in distant regions could hear the same broadcast on the same evening\"",
      "\"news and music\""
    ],
    "correctAnswer": 2,
    "explanation": "The detail that distant families heard the same broadcast simultaneously best supports the shared-experience claim.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 18,
    "question": "The following is a short passage.\n\n\"A biologist noted that a certain frog species calls loudly only after rainfall. When the biologist played recordings of rain, the frogs began calling even though no actual rain fell. This suggests the frogs respond to the sound of rain itself as a cue.\"\n\nWhich choice best supports the biologist's conclusion?",
    "options": [
      "The frogs are a certain species.",
      "The frogs began calling in response to rain recordings when no rain fell.",
      "The frogs call loudly after rainfall.",
      "The biologist studied frogs."
    ],
    "correctAnswer": 1,
    "explanation": "That the frogs called to recordings with no real rain shows they respond to the sound itself, supporting the conclusion.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 19,
    "question": "The following is a short passage.\n\n\"Two lakes were tested for a pollutant. Lake A, near a factory, showed a concentration of 45 parts per billion, while Lake B, far from any industry, showed 6 parts per billion. Safe levels are considered below 10 parts per billion.\"\n\nWhich choice best uses the data to support the claim that proximity to industry is associated with higher pollution?",
    "options": [
      "Lake B exceeded safe levels while Lake A did not.",
      "Both lakes had identical pollutant levels.",
      "Lake A, near the factory, had a far higher concentration than Lake B, far from industry.",
      "Neither lake exceeded the safe level of 10 parts per billion."
    ],
    "correctAnswer": 2,
    "explanation": "Lake A near industry (45 ppb) far exceeded distant Lake B (6 ppb), supporting the association with industry.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 20,
    "question": "The following is a short passage.\n\n\"The poet revised the same eight-line poem more than forty times over two decades, her notebooks show. Each version trims a word or shifts a line break, yet the poem's core image remains unchanged.\"\n\nWhich choice best supports the idea that the poet valued precision over reinvention?",
    "options": [
      "\"more than forty times over two decades\"",
      "\"Each version trims a word or shifts a line break, yet the poem's core image remains unchanged.\"",
      "\"her notebooks show\"",
      "\"the same eight-line poem\""
    ],
    "correctAnswer": 1,
    "explanation": "The detail that small changes were made while the core image stayed constant shows a focus on precision, not reinvention.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 21,
    "question": "The following is a short passage.\n\n\"Researchers observed that a species of ant farms fungus for food, but the fungus can only grow if kept free of a particular mold. The ants secrete a substance that suppresses the mold. Colonies whose members were prevented from producing this secretion saw their fungus gardens overtaken and collapse.\"\n\nWhich choice best supports the inference that the ants' secretion is essential to their food supply?",
    "options": [
      "The ants farm fungus for food.",
      "The fungus grows in gardens.",
      "The mold is a particular type.",
      "Colonies unable to produce the secretion lost their fungus gardens to mold."
    ],
    "correctAnswer": 3,
    "explanation": "That gardens collapsed when the secretion was absent shows the secretion is essential to maintaining the food supply.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 22,
    "question": "The following is a short passage.\n\n\"A historian noted that a medieval town's tax records list far more bakers than the town's population would seem to require. She also found that the same records show large shipments of bread leaving the town gates each week.\"\n\nWhich inference is best supported by connecting these two observations?",
    "options": [
      "The town produced bread not only for itself but for export to other places.",
      "The town's population was undercounted in the records.",
      "Bakers in the town were unusually wealthy.",
      "The town imported most of its bread from elsewhere."
    ],
    "correctAnswer": 0,
    "explanation": "An excess of bakers plus weekly bread shipments out of town together imply production for export, not just local use.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 23,
    "question": "The following is a short passage.\n\n\"In a memory study, participants recalled 30% of a word list when tested in the same room where they learned it, but only 18% when tested in a different room. A separate group that learned and were tested in the same room while listening to identical background music recalled 34%.\"\n\nWhich choice best completes the inference that context supports recall?\n\nBecause recall was higher when the testing setting matched the learning setting, the data suggest that",
    "options": [
      "background music always harms memory.",
      "recall is unaffected by where testing occurs.",
      "matching environmental context tends to improve recall.",
      "changing rooms improves memory the most."
    ],
    "correctAnswer": 2,
    "explanation": "Higher recall in matched settings (30% and 34%) versus a changed room (18%) supports that matching context improves recall.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 24,
    "question": "The following is a short passage.\n\n\"An economist compared two neighborhoods. In one, a new grocery store opened and, over the next year, reported theft of fresh produce dropped 22% at nearby corner shops. In the other, where no store opened, such theft rose 5%. The economist argued that improved access to affordable food can reduce certain petty crimes.\"\n\nWhich choice best uses the data to support the economist's argument?",
    "options": [
      "Produce theft rose in the neighborhood that gained a grocery store.",
      "Produce theft changed by the same amount in both neighborhoods.",
      "Where a grocery store opened, produce theft fell, while it rose where none opened.",
      "The grocery store had no measurable effect on theft."
    ],
    "correctAnswer": 2,
    "explanation": "A 22% drop where the store opened versus a 5% rise where none did supports the link between food access and reduced theft.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 25,
    "question": "The following is a short passage.\n\n\"A literary critic observed that in the author's novels, characters who narrate their own stories consistently misjudge others' motives, while events narrated by an outside voice are reported accurately. The critic suggested this pattern is deliberate.\"\n\nWhich inference about the author's technique is best supported?",
    "options": [
      "The author uses unreliable first-person narrators to signal characters' limited understanding.",
      "The author avoids using any narrators.",
      "The author believes outside narrators are always dishonest.",
      "The author writes only nonfiction."
    ],
    "correctAnswer": 0,
    "explanation": "First-person narrators misjudging motives while outside voices are accurate implies deliberate use of unreliable narration to signal limited understanding.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 26,
    "question": "The following is a short passage.\n\n\"Two groups of seedlings were grown under identical light and water. One group's soil was inoculated with a common fungus that attaches to roots; the other's was not. After eight weeks, the inoculated seedlings averaged 24 centimeters tall, while the others averaged 15 centimeters. The fungus takes sugars from the plant but delivers extra nutrients from the soil.\"\n\nWhich choice best supports the inference that the fungus benefits the plants despite taking their sugars?",
    "options": [
      "Both groups received identical light and water.",
      "The fungus attaches to roots.",
      "Inoculated seedlings grew taller on average than those without the fungus.",
      "The fungus takes sugars from the plant."
    ],
    "correctAnswer": 2,
    "explanation": "Greater average height in inoculated seedlings shows a net benefit, supporting the inference despite the sugar cost.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 27,
    "question": "The following is a short passage.\n\n\"A geologist studying a canyon found a layer of volcanic ash sandwiched between two rock layers. The ash can be precisely dated, and any fossil found below it must be older than the ash, while any found above must be younger.\"\n\nWhich inference is best supported by the passage?",
    "options": [
      "The ash layer can help establish whether nearby fossils are older or younger than a known date.",
      "All fossils in the canyon are the same age.",
      "Volcanic ash cannot be dated accurately.",
      "Fossils above the ash are older than those below it."
    ],
    "correctAnswer": 0,
    "explanation": "Because the ash is precisely datable and separates older-below from younger-above fossils, it can establish relative fossil ages against a known date.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 28,
    "question": "The following is a short passage.\n\n\"A public-health team tracked handwashing at two hospitals. At Hospital X, which installed sinks at every doorway, staff washed their hands an average of 12 times per shift and infection rates fell 30%. At Hospital Y, where sinks remained clustered in a few rooms, staff averaged 5 washes per shift and infections were unchanged.\"\n\nWhich choice best supports the inference that convenient sink placement encouraged handwashing?",
    "options": [
      "Infection rates were unchanged at both hospitals.",
      "Staff at both hospitals washed their hands equally often.",
      "Where sinks were placed at every doorway, staff washed their hands far more often than where sinks were clustered.",
      "Hospital Y installed sinks at every doorway."
    ],
    "correctAnswer": 2,
    "explanation": "More frequent washing where sinks were conveniently placed at every doorway supports the inference about placement.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 29,
    "question": "The following is a short passage.\n\n\"An analyst reviewed a company's decade of records. In years when it spent more on employee training, its product-defect rate was consistently lower, and in the two years it cut training sharply, defects spiked the following year. The analyst concluded that training investment and product quality are closely linked.\"\n\nWhich choice best uses the described data to support the analyst's conclusion?",
    "options": [
      "Defect rates were unrelated to training in every year.",
      "Higher training spending coincided with lower defect rates, and cuts to training were followed by spikes in defects.",
      "The company never changed its training spending.",
      "Defects were highest in years of greatest training spending."
    ],
    "correctAnswer": 1,
    "explanation": "The pattern of lower defects with more training and spikes after cuts supports the claimed link between training and quality.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 30,
    "question": "The following is a short passage.\n\n\"A team studying language learning found that adults who practiced a new language for 20 minutes daily retained 15% more vocabulary after a month than those who practiced 140 minutes once a week, despite both groups practicing the same total time. The researchers proposed that spacing practice out aids retention.\"\n\nWhich choice best supports the researchers' proposal?",
    "options": [
      "Both groups practiced for the same total amount of time, yet daily practice yielded higher retention.",
      "The weekly group practiced for less total time overall.",
      "Daily practice and weekly practice produced identical retention.",
      "Neither group retained any vocabulary after a month."
    ],
    "correctAnswer": 0,
    "explanation": "With total time held equal, higher retention for the daily (spaced) group supports the claim that spacing aids retention.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 31,
    "question": "The following is a short passage.\n\n\"Tardigrades, often called 'water bears,' are microscopic animals that can survive conditions lethal to nearly all other life. They endure extreme heat, intense radiation, and even the vacuum of space by entering a dormant state in which their metabolism almost completely stops.\"\n\nWhich choice best states the main idea of the passage?",
    "options": [
      "Tardigrades are the smallest animals living on Earth.",
      "Radiation poses the single greatest threat to tardigrades.",
      "Tardigrades withstand extreme conditions by entering a near-dormant state.",
      "Tardigrades prefer to live in the vacuum of outer space."
    ],
    "correctAnswer": 2,
    "explanation": "The passage's central point is that tardigrades survive extreme conditions by nearly shutting down their metabolism. The other choices are unstated (size, preference for space) or overstated (radiation as the single greatest threat).",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 32,
    "question": "The following is a short passage.\n\n\"In 1804, Meriwether Lewis and William Clark set out to map territories newly claimed by the United States. Their expedition relied heavily on Sacagawea, a Shoshone woman whose knowledge of the land and of several Native languages helped the party navigate difficult country and negotiate with the nations they met.\"\n\nAccording to the passage, Sacagawea contributed to the expedition primarily by",
    "options": [
      "providing knowledge of the land and languages that aided navigation and negotiation.",
      "supplying the money needed to fund the journey.",
      "drawing the first detailed maps of the western territories.",
      "persuading the United States to claim new land."
    ],
    "correctAnswer": 0,
    "explanation": "The passage states her knowledge of the land and languages helped the party navigate and negotiate. The other choices describe roles the passage never assigns to her.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 33,
    "question": "The following is a short passage.\n\n\"A recent workplace survey found that employees who take a short walk during their lunch break report feeling more focused in the afternoon than those who remain at their desks. Since the survey was published, many companies have added walking paths near their offices.\"\n\nWhich choice is most strongly supported by the passage?",
    "options": [
      "Walking is the only reliable way to improve afternoon focus.",
      "Most employees would rather skip their lunch break entirely.",
      "Employees who stay at their desks are less productive in every task.",
      "Some companies believe that midday walks may benefit employees' focus."
    ],
    "correctAnswer": 3,
    "explanation": "Companies adding walking paths after the survey implies they see a possible benefit to focus. The others are absolute or unsupported claims the passage never makes.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 34,
    "question": "The following is a short passage.\n\n\"A study measured the average daily water absorbed by four common houseplants. Ferns absorbed 250 milliliters per day, peace lilies 180 milliliters, snake plants 60 milliliters, and succulents 40 milliliters.\"\n\nWhich choice best uses data from the study to compare the plants' water needs?",
    "options": [
      "Succulents absorbed more water each day than snake plants did.",
      "Ferns absorbed the most water per day, more than six times the amount succulents absorbed.",
      "Peace lilies and snake plants absorbed nearly identical amounts of water.",
      "Snake plants required the most water of the four plants studied."
    ],
    "correctAnswer": 1,
    "explanation": "Ferns' 250 mL is more than six times succulents' 40 mL, and it is the largest value. The distractors reverse or misstate the figures (succulents 40 < snake plants 60; peace lilies 180 is far from snake plants' 60; snake plants are not the highest).",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 35,
    "question": "The following is a short passage.\n\n\"In the novel, Eleanor never spoke of the sea, though she kept a small jar of sand on her windowsill and grew quiet whenever a gull cried overhead. Her children learned early not to ask about the coastal town where she had spent her girlhood.\"\n\nWhich choice is most strongly supported by the passage?",
    "options": [
      "The coastal town likely holds memories Eleanor prefers not to revisit aloud.",
      "Eleanor intends to return to the coastal town in the near future.",
      "Eleanor's children have never once seen the ocean.",
      "Eleanor finds the cries of gulls physically painful to hear."
    ],
    "correctAnswer": 0,
    "explanation": "Her silence, the kept sand, and her children's learned caution together suggest the town carries feelings she avoids discussing. The other options add plans, facts, or reactions the passage does not establish.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 36,
    "question": "The following is a short passage.\n\n\"Botanists hypothesized that a certain orchid attracts pollinators by mimicking the scent of a female bee rather than by offering nectar. To test the idea, they recorded which insects visited the orchid and how those insects behaved.\"\n\nWhich finding, if true, would most directly support the botanists' hypothesis?",
    "options": [
      "The orchid produced noticeably more flowers in warmer growing seasons.",
      "The orchid's petals were a vivid, uniform shade of yellow.",
      "Male bees repeatedly landed on the orchid and attempted to mate with its flowers.",
      "Female bees consistently avoided the orchid and never landed on it."
    ],
    "correctAnswer": 2,
    "explanation": "If male bees try to mate with the flowers, the orchid is likely imitating a female bee's scent, directly supporting the hypothesis. Flower count, petal color, and female bees' avoidance do not bear on scent mimicry.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 37,
    "question": "The following is a short passage.\n\n\"Economists long assumed that people choose whatever option maximizes their own financial gain. Behavioral research has challenged that assumption, showing that concerns such as fairness, reputation, and emotion often shape decisions as strongly as the prospect of profit does.\"\n\nWhich choice best states the main idea of the passage?",
    "options": [
      "People never take money into account when making decisions.",
      "Behavioral research has proven that economists are usually mistaken.",
      "Reputation outweighs profit in essentially every human decision.",
      "Human decisions are shaped by more than financial self-interest alone."
    ],
    "correctAnswer": 3,
    "explanation": "The passage's point is that factors beyond profit influence choices. The distractors overstate the claim (never, usually mistaken, outweighs in every decision) beyond what the text supports.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 38,
    "question": "The following is a short passage.\n\n\"A marine biologist proposed that a coral reef's bright colors come from algae that live inside the coral's tissue. She predicted that if the coral were made to expel its algae, it would lose its color.\"\n\nWhich finding, if true, would most strongly support the biologist's prediction?",
    "options": [
      "Corals that expelled their algae turned pale white within a few weeks.",
      "Coral reefs are found mainly in warm, shallow tropical waters.",
      "Certain reef fish are strongly attracted to brightly colored coral.",
      "The algae can survive on their own for a time in open seawater."
    ],
    "correctAnswer": 0,
    "explanation": "Coral losing color after expelling its algae is exactly what the prediction forecasts. The other findings concern habitat, fish behavior, or algae independence and do not test the color prediction.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 39,
    "question": "The following is a short passage.\n\n\"A city tracked how residents commuted over a decade. In 2013, 60 percent drove alone, 25 percent used public transit, and 15 percent biked or walked. By 2023, driving alone had fallen to 45 percent and biking or walking had risen to 30 percent, while transit stayed at 25 percent.\"\n\nWhich choice best uses data from the passage to describe the change over the decade?",
    "options": [
      "Public transit use climbed sharply between 2013 and 2023.",
      "The share of residents who biked or walked doubled while driving alone declined.",
      "Driving alone remained the choice of most residents in 2023.",
      "Biking or walking became the most common way to commute by 2023."
    ],
    "correctAnswer": 1,
    "explanation": "Biking or walking rose from 15 to 30 percent (a doubling) as driving alone fell from 60 to 45 percent. Transit was unchanged; 45 percent is not a majority; and driving alone (45) still exceeded biking or walking (30).",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 40,
    "question": "The following is a short passage.\n\n\"Deep-sea anglerfish live where sunlight never reaches. Instead of ranging widely to hunt in the darkness, they dangle a glowing lure and wait for curious animals to drift close. This approach uses very little energy, an advantage in an environment where prey is scarce.\"\n\nWhich choice is most strongly supported by the passage?",
    "options": [
      "Anglerfish are the only creatures in the deep sea able to produce light.",
      "Some sunlight must occasionally filter down to where anglerfish live.",
      "An energy-saving way of hunting is especially valuable where prey is hard to find.",
      "The animals drawn to the lure are more intelligent than the anglerfish."
    ],
    "correctAnswer": 2,
    "explanation": "The passage links the low-energy strategy to the advantage of scarce prey, supporting that energy-saving hunting matters most where food is limited. The other choices are contradicted (sunlight) or never suggested (only light producer, relative intelligence).",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 41,
    "question": "The following is a short passage.\n\n\"Researchers recorded the average number of books read per year within four age groups. People aged 18 to 29 read 12 books, those aged 30 to 49 read 9 books, those aged 50 to 64 read 14 books, and those aged 65 and older read 17 books.\"\n\nWhich choice best uses data from the study to support a claim about reading and age?",
    "options": [
      "Adults aged 65 and older read more books on average than any younger group.",
      "Adults aged 30 to 49 read the most books of any age group.",
      "Each older age group read more than the group immediately younger than it.",
      "All four age groups read roughly the same number of books per year."
    ],
    "correctAnswer": 0,
    "explanation": "The 65-and-older group's 17 books is the highest figure, so it exceeds every younger group. The distractors are false: 30 to 49 read the fewest (9); the 30-to-49 group read fewer than the 18-to-29 group; and the values range widely from 9 to 17.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 42,
    "question": "The following is a short passage.\n\n\"A historian argued that the printing press did not merely spread existing ideas more quickly but actively shaped which ideas survived, because printers reproduced chiefly the works they believed would sell.\"\n\nWhich finding, if true, would most directly support the historian's specific argument that the press shaped which ideas survived?",
    "options": [
      "The printing press could produce books far faster than scribes copying by hand.",
      "Literacy rates rose in cities where printing presses became common.",
      "Works that printers judged unprofitable were seldom reprinted and gradually vanished.",
      "Early printed books were often more costly than handwritten copies."
    ],
    "correctAnswer": 2,
    "explanation": "The specific claim is about selection determining survival; unprofitable works disappearing while others were reprinted directly demonstrates that. Speed, literacy, and cost are on topic for printing but do not address which ideas survived.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 43,
    "question": "The following is a short passage.\n\n\"A research team hypothesized that a night-blooming cactus opens its flowers only after dark specifically to avoid losing water to the daytime heat. They designed experiments to identify what triggers the blooming.\"\n\nWhich finding, if true, would most strongly weaken the team's hypothesis?",
    "options": [
      "The cactus's flowers were pollinated almost entirely by nocturnal moths.",
      "The cactus lost a large amount of water whenever its flowers opened in the heat.",
      "Several other desert plants are also known to bloom during the night.",
      "The cactus regularly opened its flowers during daylight whenever the air stayed cool."
    ],
    "correctAnswer": 3,
    "explanation": "If the cactus opens by day whenever it is cool, then blooming is not restricted to darkness and is not driven by avoiding daytime heat, undercutting the hypothesis. The other findings are neutral or actually consistent with night blooming.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 44,
    "question": "The following is a short passage.\n\n\"During the 1870s, refrigerated railcars let Chicago meatpackers ship dressed beef across the country. Before this, cattle had been shipped live and slaughtered near their destination, so butchers in distant cities had faced little competition and largely set their own prices.\"\n\nWhich choice is most strongly supported by the passage?",
    "options": [
      "Live cattle were generally unable to survive long train journeys.",
      "Refrigerated railcars likely increased the competition faced by butchers in distant cities.",
      "Chicago meatpackers eventually abandoned the use of refrigerated railcars.",
      "Butchers in distant cities welcomed the arrival of Chicago beef."
    ],
    "correctAnswer": 1,
    "explanation": "Distant butchers previously faced little competition; the arrival of shipped Chicago beef implies new competitors, so competition likely rose. The other options add claims about cattle survival, later abandonment, or butchers' attitudes that the passage does not support.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 45,
    "question": "The following is a short passage.\n\n\"The translator's task is often described as carrying meaning intact from one language into another. Yet some theorists contend that because every language divides experience differently, no translation can be a perfect mirror; the translator inevitably makes choices that reshape the text even while striving to remain faithful to it.\"\n\nWhich choice best states the main idea of the passage?",
    "options": [
      "Translation unavoidably involves interpretive choices that reshape a text, even when the translator aims for fidelity.",
      "Translators should take care never to change a text's meaning in any respect.",
      "Certain languages are simply impossible to translate into any other language.",
      "Faithful translation is only achievable between closely related languages."
    ],
    "correctAnswer": 0,
    "explanation": "The passage's central claim is that faithful translation still requires reshaping choices because languages differ. The distractors give advice or absolute assertions the passage does not make.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 46,
    "question": "The following is a short passage.\n\n\"A survey recorded how many hours teenagers and adults spent on four media types in a typical week. Teenagers spent 20 hours on streaming video, 8 on music, 15 on social media, and 3 on news. Adults spent 12 hours on streaming video, 6 on music, 9 on social media, and 10 on news.\"\n\nWhich choice best uses data from the survey?",
    "options": [
      "Teenagers and adults spent an equal number of hours on music each week.",
      "Adults spent more time on social media than teenagers did.",
      "News was the only one of the four media types on which adults spent more time than teenagers.",
      "Teenagers spent less time on streaming video than adults did."
    ],
    "correctAnswer": 2,
    "explanation": "Adults exceeded teenagers only on news (10 vs. 3); teens led on video (20 vs. 12), music (8 vs. 6), and social media (15 vs. 9). The distractors misread these figures.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 47,
    "question": "The following is a short passage.\n\n\"A sociologist claimed that community gardens strengthen neighborhoods not chiefly by producing food but by creating regular occasions for neighbors who would otherwise never interact to meet and work side by side.\"\n\nWhich finding, if true, would most directly support the sociologist's specific claim?",
    "options": [
      "Residents who joined a community garden reported forming friendships with neighbors they had never spoken to before.",
      "Community gardens produced a substantial harvest of fresh vegetables each season.",
      "Property values rose noticeably in neighborhoods that established community gardens.",
      "Community gardens required volunteers to water the plants nearly every day."
    ],
    "correctAnswer": 0,
    "explanation": "The specific claim is about social interaction, so new friendships among previously unacquainted neighbors supports it directly. Harvest size, property values, and watering logistics are on topic for gardens but not for the interaction claim.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 48,
    "question": "The following is a short passage.\n\n\"Vaccines train the immune system by exposing it to a harmless piece of a pathogen. Because the immune system 'remembers' that specific exposure, it can respond far faster if the real pathogen later appears. Some newer vaccines, however, are aimed at pathogens that mutate rapidly.\"\n\nWhich choice is most strongly supported by the passage?",
    "options": [
      "Vaccines are what cause the pathogens they target to begin mutating.",
      "The immune system is unable to remember more than one pathogen at a time.",
      "The harmless piece used in a vaccine can itself cause serious illness.",
      "A vaccine's protection may hold up less well against a pathogen that changes rapidly."
    ],
    "correctAnswer": 3,
    "explanation": "Immune memory is of a specific form of the pathogen, so a rapidly mutating pathogen may no longer match that memory, implying weaker protection. The other choices are contradicted or unsupported by the passage.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 49,
    "question": "The following is a short passage.\n\n\"Archaeologists uncovered pottery of an identical style at two ancient settlements separated by a rugged mountain range. One team proposed that the two communities traded with each other directly, rather than each having invented the same style independently.\"\n\nWhich finding, if true, would most strongly support the trade hypothesis?",
    "options": [
      "Each settlement sat near clay deposits with very similar mineral content.",
      "A worn footpath scattered with broken pottery of the same style ran across the mountains between the sites.",
      "The pottery at the two sites was consistently made in slightly different sizes.",
      "The two communities spoke languages that were entirely unrelated."
    ],
    "correctAnswer": 1,
    "explanation": "A path between the sites littered with that same pottery is direct evidence of contact and exchange, supporting trade. Similar clay actually favors independent invention, and size differences or unrelated languages do not support direct trade.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 50,
    "question": "The following is a short passage.\n\n\"A laboratory tested how quickly a new adhesive set at several temperatures. At 10 degrees Celsius it set in 40 minutes, at 20 degrees in 25 minutes, at 30 degrees in 15 minutes, and at 40 degrees in 12 minutes.\"\n\nWhich choice best uses data from the test to describe the relationship between temperature and setting time?",
    "options": [
      "As temperature rose, setting time decreased, but the decreases grew smaller at higher temperatures.",
      "As temperature rose, setting time increased at a steady rate.",
      "Setting time was shortest at the lowest temperature the lab tested.",
      "Temperature had no measurable effect on the adhesive's setting time."
    ],
    "correctAnswer": 0,
    "explanation": "Setting time fell from 40 to 25 to 15 to 12 minutes as temperature rose, and the drops (15, 10, 3 minutes) shrank, matching the correct choice. The distractors reverse the trend, misidentify the shortest time, or deny any effect.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 51,
    "question": "The following is a short passage.\n\n\"Honeybees communicate the location of food through a behavior known as the waggle dance. By moving in a figure-eight pattern and vibrating its body, a returning forager conveys both the direction of a flower patch and its distance from the hive. Other bees then use this information to fly directly to the food source.\"\n\nWhich choice best states the main idea of the text?\n",
    "options": [
      "Foraging bees vibrate mainly to warn the hive of danger.",
      "Honeybees prefer flower patches that are close to the hive.",
      "Honeybees use a specialized dance to share the location of food with other bees.",
      "The waggle dance is the only method bees have for finding flowers."
    ],
    "correctAnswer": 2,
    "explanation": "The text's central point is that the waggle dance communicates a food source's direction and distance to the hive. The other choices are unstated (danger, preference for nearby patches) or overstated (that it is the only method).",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 52,
    "question": "The following is a short passage.\n\n\"The Silk Road was not a single paved road but a vast network of trade routes linking East Asia with the Mediterranean. Along these routes, merchants exchanged not only silk and spices but also ideas, religions, and technologies. Caravans often traveled only a portion of the network, passing goods from one trading city to the next.\"\n\nAccording to the text, goods along the Silk Road were typically transported by\n",
    "options": [
      "a single caravan that traveled the entire route from East Asia to the Mediterranean.",
      "caravans that each covered only part of the network, handing goods off between cities.",
      "ships that sailed the length of the Mediterranean Sea.",
      "merchants who dealt exclusively in silk and no other product."
    ],
    "correctAnswer": 1,
    "explanation": "The text states caravans often traveled only a portion of the network, passing goods city to city. The other choices contradict the text (single caravan, silk-only) or introduce unsupported details (ships).",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 53,
    "question": "The following is a short passage.\n\n\"In the novel, Mara keeps a locked drawer of unsent letters, each addressed to a person she has quarreled with over the years. She rereads them on sleepless nights, editing lines she will never mail. The narrator observes that Mara finds it far easier to perfect an apology than to deliver one.\"\n\nWhich choice best states the main idea of the text?\n",
    "options": [
      "Mara enjoys writing letters purely as a creative hobby.",
      "Mara has permanently lost touch with everyone she once knew.",
      "Mara intends to mail all of her stored letters very soon.",
      "Mara privately rehearses reconciliations she cannot bring herself to complete."
    ],
    "correctAnswer": 3,
    "explanation": "The main idea is captured by the narrator's remark that Mara perfects apologies but never delivers them. The other options are unsupported (hobby, mailing soon) or overstated (lost touch with everyone).",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 54,
    "question": "The following is a short passage.\n\n\"Researchers studying urban parks found that residents who lived within a ten-minute walk of green space used it far more often than those who lived farther away. Interestingly, the quality of the park mattered less than its proximity: even small, unremarkable parks nearby drew frequent visitors. The team concluded that access, more than amenities, shaped how often people spent time outdoors.\"\n\nAccording to the text, what most strongly influenced how frequently residents used a park?\n",
    "options": [
      "How close the park was to where they lived.",
      "The number of amenities the park offered.",
      "The overall size and appearance of the park.",
      "The ages of the residents who were surveyed."
    ],
    "correctAnswer": 0,
    "explanation": "The text concludes that access, meaning proximity, mattered more than amenities. Amenities and size are explicitly downplayed, and resident age is never mentioned.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 55,
    "question": "The following is a short passage.\n\n\"For decades, biologists assumed that the octopus's remarkable camouflage was directed entirely by its brain. Recent work, however, has revealed that octopus skin contains light-sensitive proteins of the same kind found in eyes. This finding suggests that the skin itself may detect light and adjust color locally, without waiting for instructions from the central nervous system.\"\n\nWhich choice best states the main idea of the text?\n",
    "options": [
      "Octopuses have sharper eyesight than most other marine animals.",
      "New findings suggest octopus skin may sense light and change color on its own, revising an earlier assumption.",
      "Camouflage in octopuses is now known to be controlled solely by the brain.",
      "Light-sensitive proteins occur only in the eyes of animals, never elsewhere."
    ],
    "correctAnswer": 1,
    "explanation": "The passage contrasts the old assumption (brain-directed camouflage) with new evidence that skin may sense light locally. Choice C restates the discredited view, while the others are unsupported or contradicted by the finding.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Central Ideas and Details"
  },
  {
    "id": 56,
    "question": "The following is a short passage.\n\n\"The naturalist John Muir spent months alone in the Sierra Nevada, filling notebooks with careful observations. He later wrote that the mountains restored him, describing the wilderness as more nourishing to him than any comfort a city could offer.\"\n\nA student claims that Muir regarded time in the wilderness as beneficial to his own well-being. Which detail from the text best supports the student's claim?\n",
    "options": [
      "Muir spent months alone in the Sierra Nevada.",
      "Muir filled his notebooks with careful observations.",
      "Muir described the wilderness as more nourishing to him than any city comfort.",
      "Muir traveled into the mountains to make his observations."
    ],
    "correctAnswer": 2,
    "explanation": "The claim is about wilderness benefiting Muir's well-being; calling it more nourishing than any city comfort directly supports that. The other details describe what he did, not how it affected him.",
    "difficulty": "easy",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 57,
    "question": "The following is a short passage.\n\n\"A team testing a new drought-resistant wheat grew it alongside a standard variety during an unusually dry season. At harvest, they recorded each type's grain yield, water use, and root depth. The researchers hoped to show that the new wheat could maintain its yield even under water stress.\"\n\nWhich finding from the study, if true, would most directly support the researchers' hope?\n",
    "options": [
      "The new wheat produced nearly the same yield as the standard variety while using less water.",
      "The standard wheat grew slightly taller than the new wheat.",
      "Both varieties were planted in the field on the same day.",
      "The new wheat developed shallower roots than the standard variety."
    ],
    "correctAnswer": 0,
    "explanation": "The hope is that the new wheat maintains yield under water stress; matching yield while using less water directly supports that. Plant height, planting date, and root depth do not speak to maintained yield under stress.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 58,
    "question": "The following is a short passage.\n\n\"An economist argues that remote work has reshaped small towns by drawing professionals who once clustered in cities. She contends that these newcomers bring spending power that revives struggling local businesses. To test this idea, she examined several towns that gained remote workers between 2019 and 2023.\"\n\nWhich finding would most directly support the economist's argument that remote workers revive local businesses?\n",
    "options": [
      "Remote workers often reported feeling isolated after moving to small towns.",
      "The towns generally had lower housing costs than the nearby cities.",
      "Towns that gained remote workers saw rising revenue at their local shops and restaurants.",
      "Some remote workers chose to move back to cities after about a year."
    ],
    "correctAnswer": 2,
    "explanation": "Her argument is that newcomers' spending revives local businesses; rising revenue at local shops and restaurants is the direct evidence. The other findings concern well-being, housing costs, or turnover, none of which shows business revival.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 59,
    "question": "The following is a short passage.\n\n\"A biologist measured how quickly a lizard's body temperature rose when it moved from shade into sunlight. While in the shade, the lizard's temperature held steady at 22 degrees Celsius. After 5 minutes in sunlight it reached 28 degrees, and after 10 minutes it reached 34 degrees.\"\n\nWhich choice most effectively uses data from the measurements to illustrate how sunlight affected the lizard's body temperature?\n",
    "options": [
      "The lizard's temperature rose from 22 degrees in the shade to 34 degrees after 10 minutes in sunlight.",
      "The lizard appeared to prefer resting in the shade rather than the sun.",
      "The lizard's temperature stayed at 22 degrees for the entire observation.",
      "The biologist observed the lizard for well over an hour."
    ],
    "correctAnswer": 0,
    "explanation": "The rise from 22 degrees in shade to 34 degrees after 10 minutes in sun directly illustrates sunlight's warming effect. Choice C contradicts the data, and the others introduce claims the measurements do not report.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 60,
    "question": "The following is a short passage.\n\n\"A survey asked residents of three neighborhoods how satisfied they were with local public transit. In Neighborhood A, 70 percent were satisfied; in Neighborhood B, 45 percent; and in Neighborhood C, 30 percent. Neighborhood A had the most frequent bus service, while Neighborhood C had the least.\"\n\nA city planner claims that more frequent bus service is associated with higher rider satisfaction. Which choice most effectively uses data from the survey to support the planner's claim?\n",
    "options": [
      "Neighborhood B, in the middle of the range, reported a satisfaction rate of 45 percent.",
      "Residents of all three neighborhoods reported at least some satisfaction with transit.",
      "Residents of Neighborhood C reported that they rarely rode the bus at all.",
      "Neighborhood A, with the most frequent service, had the highest satisfaction at 70 percent, while Neighborhood C, with the least, had the lowest at 30 percent."
    ],
    "correctAnswer": 3,
    "explanation": "The claim links more frequent service to higher satisfaction; pairing A (most service, 70 percent) against C (least service, 30 percent) shows that association. Choice B cites one figure without the link, and C states ridership the survey never reports.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 61,
    "question": "The following is a short passage.\n\n\"Researchers compared two protective coatings for solar panels. Panels with Coating X retained 95 percent of their original efficiency after one year, while panels with Coating Y retained only 80 percent. Uncoated panels retained just 68 percent over the same period.\"\n\nThe researchers concluded that Coating X best preserves panel efficiency over time. Which choice most effectively uses data from the study to support this conclusion?\n",
    "options": [
      "Coating X panels retained 95 percent of their efficiency after one year, more than Coating Y panels (80 percent) or uncoated panels (68 percent).",
      "Uncoated panels retained 68 percent of their original efficiency over the year.",
      "Coating Y panels ended the year performing better than the Coating X panels did.",
      "All of the panels lost at least some efficiency over the course of the year."
    ],
    "correctAnswer": 0,
    "explanation": "Supporting that Coating X best preserves efficiency requires showing it retained the most, 95 percent versus 80 and 68 percent. Choice C contradicts the data, B reports only one value, and D is true but does not single out Coating X.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Command of Evidence"
  },
  {
    "id": 62,
    "question": "The following is a short passage.\n\n\"When the printing press spread across Europe, the number of books produced multiplied rapidly. Texts that had once taken scribes months to copy by hand could now be printed in a matter of days. As a result, ideas that had previously been confined to a few monasteries ______\"\n\nWhich choice most logically completes the text?\n",
    "options": [
      "could reach a far wider audience than ever before.",
      "became considerably more difficult for readers to obtain.",
      "were mostly destroyed by the arrival of the new technology.",
      "remained of interest only to the scribes who once copied them."
    ],
    "correctAnswer": 0,
    "explanation": "Faster, cheaper printing means confined ideas could spread widely, so a wider audience follows logically. The other choices reverse the passage's logic of greater availability and diffusion.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 63,
    "question": "The following is a short passage.\n\n\"Certain desert plants open the pores on their leaves only at night, taking in carbon dioxide when the air is cool and humid. They store this carbon in a chemical form until daylight, when they carry out photosynthesis with their pores sealed shut. This adaptation lets the plants photosynthesize during the day while ______\"\n\nWhich choice most logically completes the text?\n",
    "options": [
      "absorbing most of their water directly through their leaves.",
      "releasing the stored carbon dioxide back into the atmosphere.",
      "losing as little water as possible to the dry daytime air.",
      "keeping their leaf pores wide open throughout the afternoon."
    ],
    "correctAnswer": 2,
    "explanation": "Sealing pores by day, after taking in carbon at night, serves to limit water loss in dry daytime air, the logical benefit. Choices B and D contradict the described sealed-pore behavior, and A is unsupported.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 64,
    "question": "The following is a short passage.\n\n\"Every evening, old Tomas set two cups of tea on the kitchen table, though he had lived alone since his wife passed. He never drank from the second cup; by morning it sat cold and untouched, and he would quietly pour it out before setting a fresh one that night.\"\n\nBased on the text, it can most reasonably be inferred that Tomas\n",
    "options": [
      "is expecting a guest to arrive at his home soon.",
      "still keeps his late wife present in his daily habits.",
      "has grown to dislike the taste of the tea he makes.",
      "has forgotten that his wife is no longer living."
    ],
    "correctAnswer": 1,
    "explanation": "Setting and pouring out a second cup each day, knowing he lives alone, suggests he keeps his wife present in habit. He clearly knows she has passed (ruling out D), and a guest or tea dislike is unsupported.",
    "difficulty": "medium",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 65,
    "question": "The following is a short passage.\n\n\"In a study of decision-making, shoppers were offered free samples of 24 jams on one day and only 6 jams on another. Far more shoppers stopped to taste when 24 jams were displayed, yet those who saw only 6 were roughly ten times more likely to actually buy a jar. The researchers noted that the smaller display produced more purchases despite drawing fewer tasters.\"\n\nBased on the text, it can most reasonably be inferred that\n",
    "options": [
      "offering a greater number of choices does not always lead to more purchases.",
      "shoppers generally dislike being offered free samples in stores.",
      "jam is a more popular grocery item than most other products.",
      "shoppers almost always buy the very first product they taste."
    ],
    "correctAnswer": 0,
    "explanation": "The larger display drew more tasters but fewer buyers, so more choices did not yield more purchases, the reasonable inference. The other options are contradicted or go well beyond what the study shows.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 66,
    "question": "The following is a short passage.\n\n\"Deep-sea anglerfish live at depths that sunlight never reaches, yet many species possess large, well-developed eyes. Because no sunlight penetrates so deep, the only light present comes from the faint glow that some organisms produce themselves. Scientists therefore suspect that the anglerfish's large eyes are adapted primarily to ______\"\n\nWhich choice most logically completes the text?\n",
    "options": [
      "see by the sunlight that filters down from the ocean's surface.",
      "sense small changes in the temperature of the surrounding water.",
      "distinguish a wide range of colors under bright conditions.",
      "detect the dim light generated by other living organisms."
    ],
    "correctAnswer": 3,
    "explanation": "Since the only light at those depths comes from organisms' own glow, large eyes would logically be adapted to detect that faint biological light. Choices A and C assume light the passage says is absent, and B swaps sight for temperature sensing.",
    "difficulty": "hard",
    "domain": "information-ideas",
    "skill": "Inferences"
  },
  {
    "id": 67,
    "question": "The volunteers worked ____ through the night, refusing to rest until every family displaced by the flood had a warm place to sleep.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "reluctantly",
      "briefly",
      "tirelessly",
      "carelessly"
    ],
    "correctAnswer": 2,
    "explanation": "\"Refusing to rest\" signals sustained, energetic effort—\"tirelessly.\" \"Reluctantly\" and \"briefly\" contradict the ongoing work, and \"carelessly\" adds a negative the passage does not support.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 68,
    "question": "Although the instructions looked complicated at first, the guide assured the campers that pitching the tent was actually quite ____.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "simple",
      "costly",
      "dangerous",
      "famous"
    ],
    "correctAnswer": 0,
    "explanation": "\"Although…complicated at first\" sets up a contrast, so the tent must really be easy—\"simple.\" The other choices do not oppose \"complicated.\"",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 69,
    "question": "Because the young pianist had practiced the same piece for months, her performance was remarkably ____, with no missed notes.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "hesitant",
      "brief",
      "loud",
      "polished"
    ],
    "correctAnswer": 3,
    "explanation": "Months of practice and \"no missed notes\" indicate a smooth, refined performance—\"polished.\" \"Hesitant\" is the opposite, and \"brief\" and \"loud\" are unsupported.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 70,
    "question": "The critic called the documentary ____, praising how it presented both sides of the debate without ever taking a side.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "biased",
      "balanced",
      "confusing",
      "boring"
    ],
    "correctAnswer": 1,
    "explanation": "\"Both sides…without ever taking a side\" describes fairness—\"balanced.\" \"Biased\" is the opposite, and the others are not supported.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 71,
    "question": "After the long drought finally ended, the once-brown fields grew ____ again, covered in fresh green grass.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "barren",
      "silent",
      "lush",
      "narrow"
    ],
    "correctAnswer": 2,
    "explanation": "\"Fresh green grass\" after the rain describes rich growth—\"lush.\" \"Barren\" is the opposite, and \"silent\" and \"narrow\" do not fit.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 72,
    "question": "While some reviewers dismissed the artist's later work as repetitive, others admired its ____ consistency, seeing in each nearly identical canvas a deliberate meditation on sameness.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "accidental",
      "chaotic",
      "reluctant",
      "principled"
    ],
    "correctAnswer": 3,
    "explanation": "The admirers view the repetition as intentional and thoughtful (\"deliberate meditation\"), so the consistency is \"principled.\" \"Accidental\" contradicts \"deliberate,\" and \"chaotic\" contradicts \"consistency.\"",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 73,
    "question": "The senator's speech was praised for its ____ tone: firm in its convictions yet never dismissive of those who disagreed.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "combative",
      "measured",
      "apathetic",
      "evasive"
    ],
    "correctAnswer": 1,
    "explanation": "\"Firm…yet never dismissive\" describes controlled, moderate delivery—\"measured.\" \"Combative\" clashes with \"never dismissive,\" and \"apathetic\" clashes with \"firm in its convictions.\"",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 74,
    "question": "Far from being a mere imitation, the young composer's symphony was strikingly ____, weaving folk melodies into forms no one had attempted before.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "derivative",
      "conventional",
      "inventive",
      "tentative"
    ],
    "correctAnswer": 2,
    "explanation": "\"Far from…imitation\" and \"no one had attempted before\" signal originality—\"inventive.\" \"Derivative\" and \"conventional\" mean the opposite.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 75,
    "question": "Even under intense questioning, the witness remained ____, offering the same account she had given from the very first day.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "consistent",
      "flustered",
      "evasive",
      "forgetful"
    ],
    "correctAnswer": 0,
    "explanation": "\"The same account…from the very first day\" indicates steadiness—\"consistent.\" The other three suggest wavering, which the passage rules out.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 76,
    "question": "The novelist's descriptions are so ____ that readers often feel they can smell the rain and hear the floorboards creak.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "vague",
      "clumsy",
      "brief",
      "vivid"
    ],
    "correctAnswer": 3,
    "explanation": "Sensory immersion (\"smell…hear\") points to lifelike detail—\"vivid.\" \"Vague\" and \"brief\" undercut the richness, and \"clumsy\" adds an unsupported negative.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 77,
    "question": "Critics initially derided the theory as ____, but decades of accumulating evidence eventually forced even its harshest skeptics to concede its plausibility.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "untenable",
      "axiomatic",
      "meticulous",
      "provisional"
    ],
    "correctAnswer": 0,
    "explanation": "The theory was mocked yet later vindicated, so critics first thought it indefensible—\"untenable.\" \"Axiomatic\" (self-evidently true) contradicts their derision, and \"meticulous\" and \"provisional\" do not describe an objection.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 78,
    "question": "The essayist's prose, though never showy, achieves a quiet ____: each unassuming clause accretes into an argument of surprising force.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "ostentation",
      "monotony",
      "potency",
      "levity"
    ],
    "correctAnswer": 2,
    "explanation": "\"Argument of surprising force\" built from modest clauses signals understated power—\"potency.\" \"Ostentation\" contradicts \"never showy,\" and \"monotony\" and \"levity\" miss the sense of force.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 79,
    "question": "Rather than resolving the paradox, the philosopher seemed content to ____ it, turning it over from angle to angle without ever demanding a tidy conclusion.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "dispel",
      "inhabit",
      "refute",
      "conceal"
    ],
    "correctAnswer": 1,
    "explanation": "\"Content…without…a tidy conclusion\" and \"turning it over\" suggest dwelling within the paradox—\"inhabit.\" \"Dispel\" and \"refute\" imply resolving it, which he declines, and \"conceal\" is unsupported.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 80,
    "question": "The diplomat's famed ____ allowed her to deliver unwelcome news in terms so gracious that adversaries often thanked her for it.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "bluntness",
      "indifference",
      "volatility",
      "tact"
    ],
    "correctAnswer": 3,
    "explanation": "Delivering bad news graciously so adversaries thank her exemplifies sensitivity—\"tact.\" \"Bluntness\" and \"volatility\" are opposite, and \"indifference\" does not explain the graciousness.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 81,
    "question": "The following text is from a science article.\n\nHoneybees communicate the location of food through a \"waggle dance.\" By moving in a figure-eight and vibrating, a returning bee tells others the direction and distance of a flower patch. This behavior lets a whole hive respond quickly to new food sources.\n\nWhat is the main purpose of the text?",
    "options": [
      "To argue that bees are more intelligent than other insects",
      "To describe the taste of the honey that bees produce",
      "To explain how honeybees share information about food",
      "To compare honeybees with other dancing animals"
    ],
    "correctAnswer": 2,
    "explanation": "The text describes the waggle dance and what it communicates, so its purpose is to explain how bees share information about food. The other choices introduce claims (intelligence, taste, other animals) the text never makes.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 82,
    "question": "The following text is from a short story.\n\nMara stared at the acceptance letter, reading it three times before she believed it. Then she let out a shout that startled the cat, spun around the kitchen, and immediately dialed her grandmother's number.\n\nWhat function do Mara's actions serve in the text?",
    "options": [
      "To show that Mara doubts the letter is real",
      "To convey Mara's overwhelming excitement",
      "To suggest that Mara dislikes surprises",
      "To explain why Mara owns a cat"
    ],
    "correctAnswer": 1,
    "explanation": "Shouting, spinning, and rushing to call her grandmother dramatize joy, so the actions convey excitement. The other options misread the scene.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 83,
    "question": "The following text is from a history textbook.\n\nThe printing press, introduced in Europe in the fifteenth century, made books far cheaper to produce. As a result, ideas spread more quickly than ever before, and literacy rates began to rise across the continent.\n\nWhich choice best describes the overall structure of the text?",
    "options": [
      "It presents a technology and then describes its effects",
      "It lists arguments for and against a new invention",
      "It compares two competing technologies",
      "It tells a story about a single inventor"
    ],
    "correctAnswer": 0,
    "explanation": "The text names the printing press, then traces its consequences (cheaper books, faster spread of ideas, rising literacy)—a cause-and-effect structure. It offers no debate, comparison, or personal narrative.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 84,
    "question": "The following text is from a nature essay.\n\nWe tend to picture glaciers as permanent, immovable features of the landscape. Yet a glacier is really a river of ice, creeping downhill grain by grain, grinding valleys into new shapes over centuries.\n\nWhat is the main rhetorical purpose of the second sentence?",
    "options": [
      "To provide statistical evidence about glacier speed",
      "To argue that glaciers should be protected",
      "To define an unfamiliar scientific term for the reader",
      "To correct a common misconception introduced in the first sentence"
    ],
    "correctAnswer": 3,
    "explanation": "The first sentence states a common belief (\"permanent, immovable\"); the second (\"Yet…\") overturns it by revealing that glaciers move. Its purpose is to correct that misconception, not to give statistics, argue policy, or define a term.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 85,
    "question": "The following text is from a literary review.\n\nThe memoir's first half, all sunlit childhood and easy laughter, lulls the reader into comfort. Then, without warning, the tone darkens, and the same house that felt safe becomes a place of dread.\n\nWhich choice best describes the function of the word \"Then\" in the text?",
    "options": [
      "It signals a shift from one emotional register to a contrasting one",
      "It introduces a summary of the memoir's plot",
      "It concedes a weakness in the memoir",
      "It provides a specific example of the author's style"
    ],
    "correctAnswer": 0,
    "explanation": "\"Then\" marks the pivot from the comforting first half to the dread of the second—a shift in emotional register. It does not summarize, concede a flaw, or give a stylistic example.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 86,
    "question": "The following text is from an article about urban design.\n\nCity planners once assumed that wider roads would ease congestion. In practice, though, added lanes often invite more drivers, and traffic swells to fill the new space—a phenomenon researchers call \"induced demand.\"\n\nWhat is the main purpose of the text?",
    "options": [
      "To recommend that cities stop building roads entirely",
      "To describe the daily experience of commuters",
      "To introduce a counterintuitive effect that challenges an old assumption",
      "To celebrate the achievements of modern city planners"
    ],
    "correctAnswer": 2,
    "explanation": "The text sets up planners' old assumption, then presents the surprising opposite result (induced demand). Its purpose is to introduce that counterintuitive effect; it stops short of a policy recommendation and does not narrate commuting or praise planners.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 87,
    "question": "The following text is from an essay on translation.\n\nA translator, we like to imagine, is a pane of glass: the truest one is the one we notice least. But this ideal of invisibility conceals a quiet paradox, for every choice to disappear is itself a choice, an act of shaping as decisive as any the original author made.\n\nWhat is the main rhetorical purpose of the text?",
    "options": [
      "To praise translators who render texts word for word",
      "To question an idealized view of translation by exposing a tension within it",
      "To provide instructions for aspiring literary translators",
      "To compare translation with the craft of glassmaking"
    ],
    "correctAnswer": 1,
    "explanation": "The passage names the ideal of the invisible translator, then reveals its \"paradox\"—invisibility is still an active choice. The purpose is to complicate that ideal by exposing an internal tension, not to praise literalism, instruct, or seriously compare glassmaking.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 88,
    "question": "The following text is from a novel.\n\nHe had rehearsed the apology a hundred times—each word weighed, each pause placed. But standing at last on her doorstep, he found the careful speech dissolving, and what came out instead was a single, graceless \"I'm sorry.\"\n\nWhich choice best describes the function of the second sentence in the text?",
    "options": [
      "It reinforces the impression of control established in the first sentence",
      "It provides background about the characters' history",
      "It summarizes the novel's central conflict",
      "It undercuts the careful preparation of the first sentence with an unplanned outcome"
    ],
    "correctAnswer": 3,
    "explanation": "The first sentence stresses meticulous rehearsal; the second (\"But…\") shows the plan collapsing into an unrehearsed apology. Its function is to undercut that preparation with an unplanned result, not to reinforce control, give backstory, or summarize the plot.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 89,
    "question": "The following text is from a critical essay.\n\nThe painting rewards the patient viewer. At a glance it is merely a bowl of fruit; linger, however, and the bruised pear, the fly on the rind, and the light already fading from the window begin to whisper that all this abundance is only borrowed time.\n\nWhat is the main purpose of the text?",
    "options": [
      "To catalog the objects a still-life painter typically includes",
      "To argue that still-life painting is superior to portraiture",
      "To suggest that the painting's meaning emerges only through sustained attention",
      "To explain the techniques used to paint realistic fruit"
    ],
    "correctAnswer": 2,
    "explanation": "The essay contrasts the casual \"glance\" with what the patient viewer discovers, arguing the deeper meaning (mortality, \"borrowed time\") surfaces only through lingering. It is not a mere catalog, a ranking of genres, or a technique guide.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 90,
    "question": "The following text is from a science history book.\n\nFor centuries the mapmakers' blank spaces were filled with sea monsters and speculation. It is tempting to mock such flourishes, but they served an honest function: they marked, plainly, the boundary where knowledge ended and imagination began.\n\nWhat is the main rhetorical purpose of the text's second sentence?",
    "options": [
      "To reframe a seemingly foolish practice as meaningful",
      "To dismiss old maps as products of ignorance",
      "To describe the artistic style of medieval cartographers",
      "To trace the invention of modern surveying tools"
    ],
    "correctAnswer": 0,
    "explanation": "The second sentence resists the impulse to \"mock\" and argues instead that the monsters \"served an honest function.\" Its purpose is to reframe an apparently foolish practice as meaningful, not to dismiss, catalog style, or trace tool invention.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 91,
    "question": "Text 1\nCommunity gardens are a clear good for cities. They give neighbors fresh vegetables, turn empty lots into green space, and bring people together around a shared project.\n\nText 2\nCommunity gardens sound lovely, but they use land that a growing city badly needs for housing. A single garden may serve a few dozen families; the apartments that could stand there would serve hundreds.\n\nHow would the author of Text 2 most likely respond to the view expressed in Text 1?",
    "options": [
      "By agreeing that gardens should replace all new housing",
      "By denying that gardens provide any fresh vegetables",
      "By suggesting that empty lots should remain empty",
      "By arguing that the benefits of gardens are outweighed by the city's need for housing"
    ],
    "correctAnswer": 3,
    "explanation": "Text 2 concedes that gardens \"sound lovely\" but insists housing serves far more people, so its author would say the benefits are outweighed by the housing need. The other options misstate Text 2's position.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 92,
    "question": "Text 1\nHomework is essential. Practicing skills at home is how students turn a day's lesson into lasting knowledge.\n\nText 2\nStudents already spend six hours in class. Piling on homework cuts into sleep, family time, and play—the very things young people need to stay healthy.\n\nWhich choice best describes the relationship between the two texts?",
    "options": [
      "Text 2 provides evidence that supports Text 1's claim",
      "Text 2 presents a concern that challenges Text 1's endorsement",
      "Text 2 restates Text 1's argument in different words",
      "Text 2 explains how to assign better homework"
    ],
    "correctAnswer": 1,
    "explanation": "Text 1 endorses homework; Text 2 raises concerns (lost sleep, family time, play) that push against it. Text 2 challenges Text 1 rather than supporting, restating, or offering assignment tips.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 93,
    "question": "Text 1\nZoos play a vital role in conservation. Breeding programs have saved species that were nearly extinct in the wild, and no documentary can match the way a live animal sparks a child's wonder.\n\nText 2\nWe grant that a few breeding programs have succeeded. Still, most zoo animals belong to species in no danger at all, kept in enclosures far too small, chiefly to draw ticket-buying crowds.\n\nHow does Text 2 respond to Text 1?",
    "options": [
      "It rejects Text 1's conservation claim entirely as false",
      "It offers additional examples that strengthen Text 1's argument",
      "It concedes a limited point from Text 1 while disputing its broader defense of zoos",
      "It shifts the discussion to an unrelated topic"
    ],
    "correctAnswer": 2,
    "explanation": "Text 2 grants (\"We grant\") that some breeding programs work—a concession—then argues most zoo animals are not endangered and are kept for profit, disputing the broad defense. It neither rejects everything nor supports Text 1.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 94,
    "question": "Text 1\nThe new remote-work policy is a triumph. Employees save hours of commuting, report higher satisfaction, and can live wherever they choose.\n\nText 2\nRemote work suits seasoned employees well. But newcomers, denied the casual mentorship that happens in a shared office, often flounder—learning the unwritten rules of a job is far harder over video calls.\n\nWhich choice best states how the author of Text 2 would likely regard Text 1's assessment?",
    "options": [
      "As correct for experienced workers but incomplete regarding newcomers",
      "As entirely mistaken about the value of remote work",
      "As too pessimistic about employee satisfaction",
      "As focused too narrowly on commuting times alone"
    ],
    "correctAnswer": 0,
    "explanation": "Text 2 says remote work \"suits seasoned employees well\" (agreeing with Text 1 for them) but flags a gap—newcomers lose mentorship—so Text 1 is right for experienced workers yet incomplete. Text 2 does not call it entirely wrong or too pessimistic.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 95,
    "question": "Text 1\nHistorians should strive for objectivity, setting aside their own sympathies to reconstruct the past as it actually was. Only such discipline separates history from mere opinion.\n\nText 2\nThe dream of the wholly neutral historian is a fond illusion. Every choice—what to include, whether to call an uprising a \"rebellion\" or a \"revolution\"—smuggles in a judgment. Better to name one's commitments openly than to hide behind a false neutrality.\n\nHow would the author of Text 2 most likely characterize the ideal described in Text 1?",
    "options": [
      "As a worthy standard that historians easily achieve",
      "As dangerous because it makes history indistinguishable from opinion",
      "As irrelevant to how history is actually written today",
      "As unattainable, since interpretation inevitably shapes even word choice"
    ],
    "correctAnswer": 3,
    "explanation": "Text 2 calls neutrality \"a fond illusion\" and shows that even naming events (\"rebellion\" vs. \"revolution\") embeds judgment, so the Text 1 ideal is unattainable. Text 2 does not say it is easily achieved, and it is Text 1, not Text 2, that fears opinion.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 96,
    "question": "Text 1\nGreat inventions are the work of great individuals. Edison, Bell, the Wright brothers—history advances by the flashes of genius that visit singular minds.\n\nText 2\nEvery \"lone genius\" stood atop a scaffold others built. Edison's lab employed dozens; the Wrights drew on decades of prior aeronautics. The spark may strike one person, but the tinder is always collective.\n\nWhich choice best describes the relationship between the two texts?",
    "options": [
      "Text 2 dismisses the individuals Text 1 names as unimportant",
      "Text 2 reframes Text 1's examples to emphasize the collective contributions behind individual achievement",
      "Text 2 provides statistical proof that Text 1 is correct",
      "Text 2 and Text 1 reach the same conclusion by different routes"
    ],
    "correctAnswer": 1,
    "explanation": "Text 2 takes Text 1's own examples (Edison, the Wrights) and recasts them—labs of dozens, decades of prior work—to stress collective foundations. It reframes rather than dismisses the individuals and reaches a different conclusion from Text 1.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 97,
    "question": "The museum's new exhibit was surprisingly ____: rather than crowding the walls with paintings, the curators left wide, open spaces around each work.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "sparse",
      "cluttered",
      "colorful",
      "expensive"
    ],
    "correctAnswer": 0,
    "explanation": "\"Wide, open spaces around each work\" and the contrast with \"crowding the walls\" point to an uncrowded display—\"sparse.\" \"Cluttered\" is the opposite, and \"colorful\" and \"expensive\" are not supported.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 98,
    "question": "Although the recipe seemed intimidating at first glance, the chef reassured the students that its steps were actually quite ____ once they understood the basic technique.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "costly",
      "manageable",
      "dangerous",
      "famous"
    ],
    "correctAnswer": 1,
    "explanation": "The contrast with \"intimidating\" calls for a word meaning easy to handle—\"manageable.\" \"Costly,\" \"dangerous,\" and \"famous\" do not oppose \"intimidating\" the way the sentence requires.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 99,
    "question": "The coach praised the team's ____ effort: even after they fell behind by twenty points, not a single player stopped hustling.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "careless",
      "brief",
      "quiet",
      "relentless"
    ],
    "correctAnswer": 3,
    "explanation": "\"Not a single player stopped hustling\" describes sustained, determined effort—\"relentless.\" \"Brief\" is the opposite, \"careless\" adds an unsupported negative, and \"quiet\" is irrelevant.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 100,
    "question": "The novelist's later works grew increasingly ____: where her early stories spelled out every motive plainly, these demanded that readers assemble meaning from hints and silences.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "oblique",
      "transparent",
      "tedious",
      "autobiographical"
    ],
    "correctAnswer": 0,
    "explanation": "Requiring readers to \"assemble meaning from hints and silences,\" in contrast to spelling motives out \"plainly,\" describes indirect writing—\"oblique.\" \"Transparent\" is the opposite, and \"tedious\" and \"autobiographical\" are unsupported.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 101,
    "question": "Far from serving as a passive observer, the ambassador took a ____ role in the negotiations, drafting compromises and pressing both delegations toward agreement.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "nominal",
      "decorative",
      "proactive",
      "reluctant"
    ],
    "correctAnswer": 2,
    "explanation": "\"Far from...passive\" plus \"drafting compromises\" and \"pressing both delegations\" signals active initiative—\"proactive.\" \"Nominal\" and \"decorative\" imply an in-name-only role, and \"reluctant\" contradicts her drive.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 102,
    "question": "The editor's feedback was never wounding; her criticism was so ____ that writers often thanked her even as she flagged their weakest paragraphs.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "blunt",
      "vague",
      "sparse",
      "tactful"
    ],
    "correctAnswer": 3,
    "explanation": "Criticism that is \"never wounding\" and leaves writers grateful is delivered with care—\"tactful.\" \"Blunt\" is the opposite in tone, while \"vague\" and \"sparse\" describe clarity or amount, not diplomacy.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 103,
    "question": "Reviewers admired the memoir's ____ tone: the author recounts even her cruelest setbacks without a trace of self-pity, reporting them as calmly as she might describe the weather.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "callous",
      "indifferent",
      "dispassionate",
      "effusive"
    ],
    "correctAnswer": 2,
    "explanation": "Reporting painful events 'calmly' and 'without...self-pity' describes composure, not coldness—'dispassionate' means free of distorting emotion while still engaged with the material. 'Callous' and 'indifferent' wrongly imply she does not care about the setbacks, and 'effusive' means gushing with emotion, the opposite of the restrained, unsentimental tone the passage praises.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 104,
    "question": "The senator's speeches were admired less for their arguments than for their ____ phrasing—lines so memorably compact that reporters quoted them verbatim and voters repeated them for weeks.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "verbose",
      "epigrammatic",
      "grandiose",
      "ornate"
    ],
    "correctAnswer": 1,
    "explanation": "\"Memorably compact\" lines that are \"quoted...verbatim\" are terse and quotable—\"epigrammatic.\" \"Verbose\" and \"ornate\" both imply wordiness or elaborate decoration, the opposite of compact, and \"grandiose\" describes pomposity rather than concision.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 105,
    "question": "Although the committee's report ran to hundreds of pages, its conclusions proved disappointingly ____: it restated familiar findings and offered almost no original analysis of its own.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
    "options": [
      "exhaustive",
      "concise",
      "controversial",
      "derivative"
    ],
    "correctAnswer": 3,
    "explanation": "\"Restated familiar findings\" with \"almost no original analysis\" describes unoriginal work—\"derivative.\" \"Exhaustive\" is a tempting trap tied to the report's length, but it praises thoroughness rather than naming the lack of originality; \"concise\" contradicts \"hundreds of pages,\" and \"controversial\" is unsupported.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 106,
    "question": "For decades, coral reefs were studied mainly for their beauty and biodiversity. More recently, though, economists have begun to catalog the reefs' hidden financial value: the fisheries they sustain, the tourism they draw, and the coastal storm damage they prevent. A single reef, one analysis estimates, can save a shoreline community millions of dollars each year.\n\nWhich choice best describes the function of the second sentence in the passage?",
    "options": [
      "It marks a shift from valuing reefs aesthetically to valuing them economically.",
      "It supplies a specific dollar figure that supports the passage's main claim.",
      "It questions whether reefs deserve the attention scientists give them.",
      "It defines a scientific term introduced earlier in the passage."
    ],
    "correctAnswer": 0,
    "explanation": "The second sentence pivots with \"More recently, though\" from beauty and biodiversity to economic value, framing the rest of the passage. Choice B describes the third sentence's dollar figure, not the second; choices C and D name functions the sentence never performs.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 107,
    "question": "Advocates of the four-day workweek often cite productivity studies, but those studies vary widely in quality. Some track only a handful of employees; others run for just a few weeks. Until larger and longer trials are conducted, even sympathetic economists urge caution in drawing firm conclusions.\n\nWhat is the main rhetorical purpose of the final sentence?",
    "options": [
      "To dismiss the four-day workweek as impractical",
      "To recommend restraint in interpreting the current evidence",
      "To summarize the specific findings of the productivity studies",
      "To propose a new method for measuring worker productivity"
    ],
    "correctAnswer": 1,
    "explanation": "The final sentence urges \"caution in drawing firm conclusions\" until better trials exist—restraint about the evidence. It does not reject the workweek itself (A), report what the studies found (C), or offer a new measurement method (D).",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 108,
    "question": "The painter is often celebrated as a pioneer of abstraction, supposedly the first to abandon recognizable subjects entirely. Yet her earliest abstract canvases, recently reexamined under infrared light, still hold faint outlines of flowers and figures beneath their washes of color. The legend of a clean break, it seems, tidies a messier truth.\n\nWhich choice best describes the function of the final sentence of the passage?",
    "options": [
      "It concedes that the painter's reputation is entirely undeserved.",
      "It resolves the passage's tension by endorsing the traditional account.",
      "It reframes the preceding evidence as a correction to a simplified story.",
      "It introduces a rival painter for comparison."
    ],
    "correctAnswer": 2,
    "explanation": "By saying the \"legend of a clean break...tidies a messier truth,\" the final sentence casts the infrared evidence as a correction to the tidy pioneer narrative. Choice A overstates the point (her reputation is complicated, not erased), B reverses it, and D adds a comparison the passage never makes.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 109,
    "question": "Skeptics of vertical farming stress its steep energy costs: stacking crops indoors means replacing free sunlight with electric lighting. Proponents counter that vertical farms use a fraction of the water and land conventional agriculture demands. Neither figure, however, means much in isolation—the honest comparison depends on which resource a given region can least afford to squander.\n\nWhat is the main rhetorical purpose of the final sentence?",
    "options": [
      "It declares vertical farming clearly superior to conventional agriculture.",
      "It offers a compromise by proposing a hybrid farming method.",
      "It restates the skeptics' objection in stronger terms.",
      "It suggests the debate cannot be settled by either side's favored statistic alone."
    ],
    "correctAnswer": 3,
    "explanation": "The final sentence says \"neither figure...means much in isolation,\" making the comparison depend on regional priorities—so no single statistic resolves it. It does not crown a winner (A), propose a hybrid method (B), or merely amplify the skeptics' point (C), since it balances both sides.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 110,
    "question": "Most guidebooks describe the old quarter as quaint and unchanging, a pocket of the past preserved for visitors. The residents tell a different story: rents that climb every year, familiar shops swapped for souvenir stalls, neighbors who can no longer afford to stay. What tourists read as timelessness, the people who live there experience as slow displacement.\n\nWhich choice best describes the function of the second sentence in the passage?",
    "options": [
      "It offers a firsthand counterpoint that complicates the guidebooks' portrayal.",
      "It concedes that the guidebooks' description is essentially accurate.",
      "It provides statistical evidence about the neighborhood's economy.",
      "It predicts that the old quarter will soon be demolished."
    ],
    "correctAnswer": 0,
    "explanation": "The second sentence introduces the residents' contrasting account of rising rents and lost shops, complicating the guidebooks' \"quaint and unchanging\" image. It contradicts rather than concedes that image (B), gives concrete examples rather than statistics (C), and makes no prediction of demolition (D).",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 111,
    "question": "The study's authors are careful to note what their data cannot show. Their surveys captured how often people reported feeling lonely, but not why—whether from isolation, from crowds that felt impersonal, or from causes the questionnaire never named. This caveat, the authors add, does not weaken their findings so much as mark the boundary of what those findings can claim.\n\nWhat is the main rhetorical purpose of the final sentence?",
    "options": [
      "To acknowledge a limitation while affirming the study's core value",
      "To retract the study's central conclusion",
      "To fault the authors for a poorly designed survey",
      "To introduce an unrelated line of future research"
    ],
    "correctAnswer": 0,
    "explanation": "The final sentence frames the caveat as one that \"does not weaken their findings so much as mark the boundary\" of their claims—conceding a limit while preserving the study's worth. It does not withdraw the conclusion (B), attack the design, which the authors raise neutrally (C), or launch a new research topic (D).",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 112,
    "question": "Text 1\nMany educators argue that homework reinforces classroom learning. By practicing new skills at home, students move material into long-term memory and arrive better prepared for the next lesson.\n\nText 2\nCritics counter that homework's benefits are unevenly distributed. Students with quiet homes and available tutors gain the most, while those without such support fall further behind—so homework can widen the very gaps schools hope to close.\n\nBased on the texts, how would the author of Text 2 most likely respond to the claim about homework in Text 1?",
    "options": [
      "By agreeing that homework carries no academic value whatsoever",
      "By noting that homework's benefits reach some students far more than others",
      "By recommending that classroom instruction time be shortened",
      "By denying that practice can improve memory at all"
    ],
    "correctAnswer": 1,
    "explanation": "Text 2 does not reject practice outright; it argues the benefits Text 1 describes accrue mainly to students with home support. That makes B the fit. A overstates Text 2's position, C is unrelated, and D contradicts nothing Text 2 actually disputes.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 113,
    "question": "Text 1\nThe biographer treats the inventor's famous notebooks as reliable records of discovery, quoting their dated entries to establish exactly when each breakthrough occurred.\n\nText 2\nRecent archival work complicates any such use of the notebooks. The inventor, it turns out, often rewrote earlier pages years later, backdating ideas to strengthen his position in patent disputes. The dates on the page cannot be taken at face value.\n\nBased on the texts, how would the author of Text 2 most likely respond to the biographer's method described in Text 1?",
    "options": [
      "By endorsing the notebooks as a precise timeline of discovery",
      "By arguing that the inventor deserves no credit for any of his inventions",
      "By cautioning that the notebooks' dates are unreliable and cannot pin down when breakthroughs occurred",
      "By claiming that the patent disputes are the most important part of the inventor's legacy"
    ],
    "correctAnswer": 2,
    "explanation": "Text 2 shows the inventor backdated entries, so its author would warn that the dated evidence the biographer trusts cannot fix the timing of discoveries. A reverses that view, B overreaches beyond anything Text 2 claims, and D mistakes a supporting detail (the disputes) for a judgment about his legacy.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 114,
    "question": "Text 1\nEcologists restoring the wetland favor removing the non-native reeds entirely. Native plants, they argue, cannot recover while the aggressive newcomers monopolize sunlight and soil.\n\nText 2\nOther researchers urge caution. In this particular marsh, the non-native reeds have for decades provided the only stable nesting cover for several declining bird species. Stripping them out all at once could doom those birds before native plants mature enough to replace that shelter.\n\nBased on the texts, how would the author of Text 2 most likely respond to the removal strategy proposed in Text 1?",
    "options": [
      "By denying that the non-native reeds compete with native plants at all",
      "By recommending that the wetland be left entirely undisturbed",
      "By warning that removing the reeds all at once could endanger birds that depend on them",
      "By agreeing that immediate, total removal is the safest course"
    ],
    "correctAnswer": 2,
    "explanation": "Text 2 accepts that the reeds cause problems but warns that abrupt, total removal could doom birds that nest in them—choice C. It never denies the competition Text 1 cites (A), never calls for leaving the marsh untouched (B), and directly opposes immediate total removal (D).",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 115,
    "question": "Text 1\nThe economist credits the city's falling crime rate to its expanded police force, observing that arrests rose in the same years crime declined.\n\nText 2\nCorrelation of this kind is easy to misread. Over the same period the city also saw rising employment, an aging population, and new streetlights on once-dark blocks—each independently linked to lower crime. Isolating the effect of policing alone would require ruling such factors out, which the available data do not.\n\nBased on the texts, how would the author of Text 2 most likely respond to the economist's explanation in Text 1?",
    "options": [
      "By denying that the city's crime rate fell at all",
      "By conceding that policing was certainly the sole cause of the decline",
      "By insisting that crime rates cannot be measured reliably",
      "By noting that other simultaneous changes could account for the drop, making the causal claim premature"
    ],
    "correctAnswer": 3,
    "explanation": "Text 2 lists confounding factors—employment, age, lighting—that the data cannot rule out, so its author would call the economist's single-cause claim premature (D). It does not dispute that crime fell (A), affirm policing as the sole cause (B, the opposite), or argue that crime is unmeasurable (C).",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 116,
    "question": "Text 1\nProponents of open-plan offices claim they foster collaboration: with no walls between desks, employees speak more freely and ideas spread faster.\n\nText 2\nObservation tells a subtler story. When one firm's partitions came down, workers did interact more—but mostly in brief, superficial exchanges. Substantive conversations, the kind that actually generate ideas, dropped sharply as employees retreated behind headphones to escape the constant interruptions.\n\nBased on the texts, how would the author of Text 2 most likely respond to the claim in Text 1 that open-plan offices make ideas spread faster?",
    "options": [
      "By agreeing fully and adding that written communication improved as well",
      "By granting that casual interaction rose while disputing that meaningful, idea-generating exchange did",
      "By denying that removing the walls changed how often employees spoke at all",
      "By concluding that collaboration does not matter to a firm's success"
    ],
    "correctAnswer": 1,
    "explanation": "Text 2 concedes that workers interacted more but reports that substantive, idea-generating talk fell—so its author would challenge the \"ideas spread faster\" claim while accepting the rise in casual contact (B). A overstates agreement, C contradicts Text 2's own concession that interaction rose, and D dismisses collaboration in a way Text 2 never does.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 117,
    "question": "As used in the following sentence, what does \"secure\" most nearly mean?\n\n\"After hours of climbing, the team paused on a wide ledge to secure their ropes to an iron bolt before continuing upward.\"",
    "options": [
      "obtain",
      "fasten",
      "promise",
      "defend"
    ],
    "correctAnswer": 1,
    "explanation": "Attaching ropes to an iron bolt describes fastening or anchoring them firmly in place. \"Obtain,\" \"promise,\" and \"defend\" do not fit the physical action of tying ropes to a fixed point.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 118,
    "question": "Which choice completes the text with the most logical and precise word or phrase?\n\nThe recipe was surprisingly ______: with only four ingredients and a single pot, even a first-time cook could follow it.",
    "options": [
      "elaborate",
      "costly",
      "simple",
      "ancient"
    ],
    "correctAnswer": 2,
    "explanation": "\"Only four ingredients and a single pot\" and a first-time cook succeeding both signal ease, so \"simple\" fits. \"Elaborate\" is the opposite, and cost and age are never mentioned.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 119,
    "question": "Which choice best states the main purpose of the text?\n\nSea otters spend much of their day grooming their fur. Unlike most marine mammals, otters have no blubber to keep warm. Instead, they rely on a dense coat that traps a layer of air against the skin. Keeping that coat clean and full of air is a matter of survival, not vanity.",
    "options": [
      "To compare the diets of sea otters and other marine mammals",
      "To argue that sea otters are the cleanest animals in the ocean",
      "To describe the process by which blubber keeps animals warm",
      "To explain why a particular animal behavior is essential rather than merely cosmetic"
    ],
    "correctAnswer": 3,
    "explanation": "The text presents otter grooming and ends by stressing it is \"survival, not vanity,\" so its purpose is to show the behavior is necessary. Diet, cleanliness rankings, and blubber are not the focus.",
    "difficulty": "easy",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 120,
    "question": "Which choice completes the text with the most logical and precise word or phrase?\n\nAlthough the committee's report ran to hundreds of pages, its central recommendation could be stated ______: fund the repairs now, or pay far more later.",
    "options": [
      "succinctly",
      "reluctantly",
      "ambiguously",
      "eloquently"
    ],
    "correctAnswer": 0,
    "explanation": "The contrast with \"hundreds of pages\" and the short either/or statement point to brevity, so \"succinctly\" fits in both meaning and neutral tone. \"Eloquently\" concerns style rather than length, and the others do not match.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 121,
    "question": "Which choice completes the text with the most logical and precise word or phrase?\n\nCritics initially dismissed the painter's later works as careless, but recent scholarship has ______ that view, showing that each apparent smudge followed a deliberate plan.",
    "options": [
      "reinforced",
      "complicated",
      "ignored",
      "predicted"
    ],
    "correctAnswer": 1,
    "explanation": "\"But\" marks a shift away from the dismissive view, and evidence of deliberate planning undermines it, so the scholarship has \"complicated\" (challenged) that view. \"Reinforced\" is the opposite; \"ignored\" and \"predicted\" do not fit.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 122,
    "question": "As used in the following sentence, what does \"arrest\" most nearly mean?\n\n\"The unusual silence seemed to arrest the crowd, and for a moment no one in the plaza moved or spoke.\"",
    "options": [
      "detain by law",
      "accuse",
      "stop",
      "decorate"
    ],
    "correctAnswer": 2,
    "explanation": "The crowd froze, with no one moving or speaking, so \"arrest\" means to halt or bring to a stop. The context of a silence affecting a crowd rules out the legal senses \"detain by law\" and \"accuse.\"",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 123,
    "question": "Which choice best describes the function of the underlined sentence in the text as a whole?\n\nFor decades, engineers assumed that adding more sensors to a bridge would always improve safety monitoring. A 2019 study challenged this assumption. It found that beyond a certain point, extra sensors produced so much conflicting data that inspectors actually missed warning signs they would otherwise have caught.\n\nUnderlined sentence: \"A 2019 study challenged this assumption.\"",
    "options": [
      "It provides statistical evidence supporting the engineers' original view.",
      "It offers a personal anecdote to lighten a technical discussion.",
      "It defines a term that the rest of the text goes on to illustrate.",
      "It introduces a finding that reverses the expectation described in the previous sentence."
    ],
    "correctAnswer": 3,
    "explanation": "The sentence pivots from the long-held assumption to a study that undercuts it, setting up the contrary finding that follows. It supplies no statistics, anecdote, or definition.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 124,
    "question": "Which choice best describes the overall structure of the text?\n\nThe idea sounds appealing: plant a trillion trees and offset the world's carbon emissions. And it is true that forests absorb carbon. Yet the math is less reassuring. Even under ideal conditions, newly planted trees would take decades to mature, and the land required exceeds what is realistically available.",
    "options": [
      "A proposal is presented, partly conceded, and then qualified by practical objections.",
      "A historical trend is traced from its origins to the present day.",
      "Two competing scientific theories are described and then reconciled.",
      "A personal experience is recounted and used to justify a policy."
    ],
    "correctAnswer": 0,
    "explanation": "The text states the tree-planting proposal, grants that forests absorb carbon (\"it is true\"), then raises objections about time and land. It is not a history, a reconciliation of theories, or a personal narrative.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 125,
    "question": "Text 1\nRemote work, its supporters argue, frees employees from long commutes and lets them structure their days around peak productivity rather than office hours. The result, studies suggest, is happier workers and lower turnover.\n\nText 2\nThe hidden cost of remote work is the erosion of the informal exchange—the hallway chat, the overheard question—through which junior employees once learned their craft. Efficiency metrics may rise even as mentorship quietly disappears.\n\nHow would the author of Text 2 most likely respond to the claim about productivity in Text 1?",
    "options": [
      "By denying that remote workers are ever more productive than office workers",
      "By insisting that long commutes have no effect on employee satisfaction",
      "By granting that measured output can improve while arguing that harder-to-measure benefits are lost",
      "By recommending that companies eliminate all in-person meetings"
    ],
    "correctAnswer": 2,
    "explanation": "Text 2 concedes that \"efficiency metrics may rise\" but warns that mentorship \"quietly disappears,\" so it accepts the productivity gain while stressing an unmeasured loss. The other options overstate or contradict Text 2.",
    "difficulty": "medium",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 126,
    "question": "Which choice completes the text with the most logical and precise word or phrase?\n\nThe historian's account is admirably thorough, yet its relentless accumulation of dates and figures can ______ the very argument it means to support, burying the reader's attention beneath detail.",
    "options": [
      "clarify",
      "obscure",
      "summarize",
      "provoke"
    ],
    "correctAnswer": 1,
    "explanation": "\"Burying the reader's attention beneath detail\" indicates that the mass of detail hides the argument, so \"obscure\" fits. \"Clarify\" is the opposite, and \"summarize\" and \"provoke\" do not match the sense of being buried.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 127,
    "question": "Which choice completes the text with the most logical and precise word or phrase?\n\nFar from being a passive recorder of events, the memoirist is a ______ curator, choosing which memories to preserve and which to let fade.",
    "options": [
      "reckless",
      "reluctant",
      "forgetful",
      "deliberate"
    ],
    "correctAnswer": 3,
    "explanation": "\"Choosing which memories to preserve\" describes intentional selection, set against \"passive recorder,\" so \"deliberate\" fits. \"Reckless,\" \"reluctant,\" and \"forgetful\" all contradict purposeful curation.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Words in Context"
  },
  {
    "id": 128,
    "question": "Which choice best describes the overall structure of the text?\n\nIt is tempting to read the poem as a straightforward celebration of spring. The opening stanzas overflow with blossoms and birdsong. But the final couplet, with its abrupt turn to the coming frost, casts a shadow backward over everything that precedes it, so that the earlier joy reads, on a second pass, as something the speaker already knows will not last.",
    "options": [
      "An initial interpretation is offered, then shown to be transformed by a later detail.",
      "A poem's structure is compared unfavorably with that of a rival work.",
      "A biographical fact is used to explain a poet's recurring themes.",
      "A general rule about poetry is stated and then applied to several examples."
    ],
    "correctAnswer": 0,
    "explanation": "The text gives a first reading (\"celebration of spring\"), then shows how the final couplet reframes it, casting \"a shadow backward.\" No comparison, biography, or set of examples appears.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 129,
    "question": "Which choice best describes the main purpose of the text?\n\nPopular histories often credit a single inventor with the light bulb, the telephone, or the airplane. Such stories are satisfying, but they mislead. Nearly every landmark invention emerged from a crowded field of rivals working toward the same goal, and the \"inventor\" we remember is frequently just the one who filed the paperwork first.",
    "options": [
      "To celebrate the achievements of a few well-known inventors",
      "To explain the legal process for obtaining a patent",
      "To correct a common misconception about how major inventions come about",
      "To argue that inventions no longer require individual genius"
    ],
    "correctAnswer": 2,
    "explanation": "The text calls the single-inventor narrative misleading and replaces it with a picture of many rivals, so its purpose is corrective. It does not celebrate inventors, detail patent law, or make a claim limited to the present.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Text Structure and Purpose"
  },
  {
    "id": 130,
    "question": "Text 1\nZoos, defenders maintain, have become arks for endangered species. Captive breeding programs have restored animals like the California condor to the wild, achievements that would have been impossible without the resources and expertise that zoos concentrate in one place.\n\nText 2\nNo breeding program can substitute for the thing a wild animal actually needs: habitat. Every dollar and hour devoted to maintaining a species in captivity is one not spent protecting the forests and wetlands where it might otherwise live freely—and to which, if those places vanish, it can never return.\n\nWhich choice best describes how Text 2 responds to the argument in Text 1?",
    "options": [
      "It denies that any species has ever been restored to the wild",
      "It claims that zoos lack the expertise to run breeding programs",
      "It agrees that habitat protection should be abandoned in favor of captivity",
      "It grants that captive breeding may work but argues it draws resources away from a more fundamental need"
    ],
    "correctAnswer": 3,
    "explanation": "Text 2 does not dispute the condor-style successes; it argues that captivity consumes money and time that habitat protection—\"the thing a wild animal actually needs\"—requires. The other options contradict Text 2's actual claims.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 131,
    "question": "Text 1\nThe value of a liberal-arts education, its champions say, lies precisely in its impracticality. Studying philosophy or literature teaches students how to think, not merely what to do—a flexible capacity that outlasts any particular job skill.\n\nText 2\nEmployers today report that they can teach new hires the specific tools of a trade in weeks. What they cannot easily supply is the ability to reason through an unfamiliar problem, weigh competing arguments, and write clearly. Ironically, these \"impractical\" habits of mind have become the most practical qualifications of all.\n\nWhich choice best describes the relationship between the two texts?",
    "options": [
      "Text 2 rejects the central claim that Text 1 advances",
      "Text 2 reframes as practical the very quality that Text 1 defends as impractical",
      "Text 2 provides a historical origin for the trend Text 1 describes",
      "Text 2 dismisses liberal-arts education as outdated"
    ],
    "correctAnswer": 1,
    "explanation": "Text 1 praises liberal arts for teaching thinking over job skills, calling it impractical; Text 2 argues those same \"impractical\" habits are now the most practical qualifications. Text 2 recasts, rather than rejects, Text 1's point.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 132,
    "question": "Text 1\nStandardized tests, whatever their flaws, offer one thing that grades cannot: a common yardstick. A student's A in one school may reflect work that would earn a C in another, but a test score means the same thing everywhere.\n\nText 2\nThe apparent objectivity of a test score is an illusion. Scores track family income almost as faithfully as they track ability, because wealthier families can buy tutoring, test prep, and repeated attempts. A \"common yardstick\" that measures privilege is not common at all.\n\nHow would the author of Text 1 most likely respond to the argument made in Text 2?",
    "options": [
      "By agreeing that standardized tests should be eliminated entirely",
      "By denying that family income has any relationship to test scores",
      "By conceding that scores are influenced by wealth while maintaining that grades vary even more unpredictably across schools",
      "By arguing that grades are a more objective measure than test scores"
    ],
    "correctAnswer": 2,
    "explanation": "Text 1's case rests on tests being more comparable than grades, not on their being perfectly fair, so its author could accept the point about wealth yet still hold that grades are even less consistent. The other options abandon or contradict Text 1's position.",
    "difficulty": "hard",
    "domain": "craft-structure",
    "skill": "Cross-Text Connections"
  },
  {
    "id": 133,
    "question": "Sea otters spend nearly all of their lives in the water. ____ they occasionally haul out onto rocks to rest and groom.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "However,",
      "Therefore,",
      "For example,",
      "Likewise,"
    ],
    "correctAnswer": 0,
    "explanation": "The second sentence contrasts the first: otters live almost entirely in water, yet they sometimes climb onto rocks. \"However\" signals this contrast; the other choices signal result, example, or similarity.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 134,
    "question": "A sudden cold snap damaged much of the region's citrus crop. ____ orange prices climbed sharply at grocery stores the following week.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nevertheless,",
      "In contrast,",
      "As a result,",
      "For instance,"
    ],
    "correctAnswer": 2,
    "explanation": "The rise in prices is the effect of the damaged crop, so a cause-and-effect transition fits. \"As a result\" conveys this; the others signal contrast or example.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 135,
    "question": "Many everyday tools rely on simple machines. A bottle opener, ____ uses a lever to pry the cap off a bottle.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "however,",
      "for example,",
      "therefore,",
      "in contrast,"
    ],
    "correctAnswer": 1,
    "explanation": "The bottle opener is a specific instance of the general claim about tools using simple machines. \"For example\" introduces that instance; the others signal contrast or result.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 136,
    "question": "The new community library offers thousands of print books. ____ it provides free access to a large collection of digital audiobooks.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nevertheless,",
      "As a result,",
      "For example,",
      "In addition,"
    ],
    "correctAnswer": 3,
    "explanation": "The second sentence adds another offering to the first. \"In addition\" signals this addition; the other choices signal contrast, result, or example.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 137,
    "question": "Penguins are classified as birds. ____ they are completely unable to fly.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "However,",
      "Consequently,",
      "Similarly,",
      "For instance,"
    ],
    "correctAnswer": 0,
    "explanation": "Because birds are typically associated with flight, the fact that penguins cannot fly is a contrast. \"However\" fits; the others signal result, similarity, or example.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 138,
    "question": "Maria practiced the violin for two hours every day for a year. ____ she earned first place at the regional competition.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nevertheless,",
      "In contrast,",
      "Consequently,",
      "For example,"
    ],
    "correctAnswer": 2,
    "explanation": "Her win is the result of her dedicated practice, so a cause-and-effect transition fits. \"Consequently\" conveys this; the others signal contrast or example.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 139,
    "question": "First, the dough must rest for an hour so that the gluten can relax. ____ the baker rolls it out and cuts it into shapes.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "However,",
      "In contrast,",
      "For example,",
      "Next,"
    ],
    "correctAnswer": 3,
    "explanation": "The sentences describe steps in a sequence. \"Next\" signals the following step; the other choices signal contrast or example.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 140,
    "question": "While researching dog breeds, a student took the following notes:\n- The Akita is a breed of dog.\n- The Akita originated in Japan.\n- Akitas were originally bred to hunt large game.\n- Akitas have thick double coats.\n\nThe student wants to emphasize where the Akita comes from. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "The Akita, a breed with a thick double coat, was bred to hunt large game.",
      "The Akita is a breed of dog that originated in Japan.",
      "Akitas have thick double coats and were bred to hunt large game.",
      "The Akita was originally bred to hunt large game."
    ],
    "correctAnswer": 1,
    "explanation": "The goal is to emphasize the breed's origin. Only the choice whose main point is that the Akita originated in Japan accomplishes this; the others focus on coat or hunting.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 141,
    "question": "A student is writing about two rivers and took the following notes:\n- The Nile flows through Egypt.\n- The Amazon flows through Brazil.\n- Both rivers are among the longest in the world.\n- Both rivers support diverse wildlife.\n\nThe student wants to emphasize a similarity between the two rivers. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "The Nile flows through Egypt, while the Amazon flows through Brazil.",
      "Like the Amazon, the Nile is among the longest rivers in the world.",
      "The Nile flows through Egypt.",
      "The Amazon supports diverse wildlife in Brazil."
    ],
    "correctAnswer": 1,
    "explanation": "The goal is to emphasize a similarity. Only the choice using \"Like\" to note that both are among the longest rivers highlights what they share; the others state differences or single facts.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 142,
    "question": "A student took the following notes about an athlete:\n- Simone Biles is a gymnast.\n- She competed at the 2016 Olympics.\n- She won four gold medals at those Olympics.\n- She is from the United States.\n\nThe student wants to emphasize Biles's achievement at the 2016 Olympics. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Simone Biles, a gymnast from the United States, competed at the 2016 Olympics.",
      "Simone Biles is a gymnast from the United States.",
      "At the 2016 Olympics, Simone Biles won four gold medals.",
      "Simone Biles competed at the 2016 Olympics as a gymnast."
    ],
    "correctAnswer": 2,
    "explanation": "The goal is to emphasize her achievement. Only the choice stating that she won four gold medals highlights the accomplishment; the others merely note participation or background.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 143,
    "question": "The committee expected the fundraiser to draw a modest crowd. ____ nearly a thousand people showed up, overwhelming the volunteers.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Instead,",
      "Therefore,",
      "Similarly,",
      "In addition,"
    ],
    "correctAnswer": 0,
    "explanation": "The actual turnout contradicts what was expected, so a contrast transition fits. \"Instead\" signals that reality replaced the expectation; the others signal result, similarity, or addition.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 144,
    "question": "The novel's plot is undeniably gripping. Its characters, ____ often feel thin and underdeveloped.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "for example,",
      "as a result,",
      "however,",
      "likewise,"
    ],
    "correctAnswer": 2,
    "explanation": "The praise for the plot contrasts with the criticism of the characters. \"However\" signals this contrast; the others signal example, result, or similarity.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 145,
    "question": "Researchers found that the new vaccine remained stable at room temperature for weeks. ____ it could be shipped to remote clinics without costly refrigeration.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nonetheless,",
      "In contrast,",
      "For instance,",
      "Thus,"
    ],
    "correctAnswer": 3,
    "explanation": "The ability to ship without refrigeration follows from the vaccine's stability, a cause-and-effect relationship. \"Thus\" fits; the others signal contrast or example.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 146,
    "question": "The proposed highway would significantly shorten commute times for suburban drivers. ____ it would ease traffic congestion in the downtown core.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "However,",
      "Moreover,",
      "In contrast,",
      "For example,"
    ],
    "correctAnswer": 1,
    "explanation": "The second sentence adds a further benefit to the first. \"Moreover\" signals this addition; the other choices signal contrast or example.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 147,
    "question": "Some animals have evolved remarkable camouflage to avoid predators. The leaf-tailed gecko, ____ blends almost perfectly with the bark of the trees it rests on.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "nevertheless,",
      "for instance,",
      "therefore,",
      "on the other hand,"
    ],
    "correctAnswer": 1,
    "explanation": "The gecko is a specific instance of animals with remarkable camouflage. \"For instance\" introduces the example; the others signal contrast or result.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 148,
    "question": "The startup struggled to attract investors during its first two years. ____ after a successful product demonstration, funding began to pour in.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Similarly,",
      "Consequently,",
      "For example,",
      "Eventually,"
    ],
    "correctAnswer": 3,
    "explanation": "The sentences describe a turn that occurs later in time rather than a direct result of the struggle. \"Eventually\" fits the temporal sequence; the others signal similarity, result, or example.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 149,
    "question": "A student is writing about a scientific concept and took the following notes:\n- Bioluminescence is the production of light by living organisms.\n- Fireflies use bioluminescence to attract mates.\n- Many deep-sea creatures are bioluminescent.\n- The light is produced by a chemical reaction inside the organism.\n\nThe student wants to introduce the concept to an audience unfamiliar with the term. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Fireflies use bioluminescence to attract mates.",
      "Bioluminescence, the production of light by living organisms, is found in fireflies and many deep-sea creatures.",
      "The light of bioluminescence is produced by a chemical reaction inside the organism.",
      "Many deep-sea creatures are bioluminescent, as are fireflies."
    ],
    "correctAnswer": 1,
    "explanation": "Introducing the term to an unfamiliar audience requires defining it. Only the choice that defines bioluminescence as the production of light by living organisms does so; the others assume the reader already knows the term.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 150,
    "question": "A student took the following notes about two composers:\n- Bach composed during the Baroque period.\n- Stravinsky composed during the 20th century.\n- Bach's music is known for its intricate counterpoint.\n- Stravinsky's music is known for its bold, driving rhythms.\n\nThe student wants to emphasize a difference between the two composers' musical styles. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Bach composed during the Baroque period, and Stravinsky composed during the 20th century.",
      "Both Bach and Stravinsky are celebrated composers.",
      "Whereas Bach's music is known for its intricate counterpoint, Stravinsky's is known for its bold, driving rhythms.",
      "Bach's music features intricate counterpoint."
    ],
    "correctAnswer": 2,
    "explanation": "The goal is a difference in musical style. Only the choice contrasting counterpoint with driving rhythms addresses style; the first contrasts time periods, not style, and the others state a similarity or single fact.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 151,
    "question": "A student took the following notes about a research study:\n- Ecologists studied a coral reef off the coast of Australia.\n- The study lasted five years.\n- The goal was to understand how rising ocean temperatures affect coral.\n- The team measured coral bleaching each year.\n\nThe student wants to explain the purpose of the study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "The five-year study took place off the coast of Australia.",
      "Each year, the team measured coral bleaching on the reef.",
      "Ecologists conducted the study to understand how rising ocean temperatures affect coral.",
      "Ecologists studied a coral reef for five years."
    ],
    "correctAnswer": 2,
    "explanation": "The purpose is the study's goal. Only the choice stating that the study aimed to understand how rising temperatures affect coral explains its purpose; the others describe location, method, or duration.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 152,
    "question": "A student took the following notes about a video game:\n- The game was released in 2011.\n- It was developed by a small studio.\n- By 2020, it had sold over 200 million copies.\n- It lets players build structures out of blocks.\n\nThe student wants to emphasize the game's commercial success. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "The game, released in 2011, lets players build structures out of blocks.",
      "By 2020, the game had sold over 200 million copies.",
      "The game was developed by a small studio in 2011.",
      "Players of the game build structures out of blocks."
    ],
    "correctAnswer": 1,
    "explanation": "Commercial success is best shown by sales figures. Only the choice noting that it sold over 200 million copies emphasizes success; the others describe gameplay or development.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 153,
    "question": "The mayor insisted that the new stadium project would have almost no impact on the city budget. ____ it ended up costing taxpayers millions of dollars more than promised.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Likewise,",
      "In fact,",
      "For this reason,",
      "In summary,"
    ],
    "correctAnswer": 1,
    "explanation": "The second sentence sharply corrects and intensifies against the mayor's claim. \"In fact\" introduces the contradicting reality; the others signal similarity, result, or summary.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 154,
    "question": "The experimental treatment did not worsen patients' symptoms, as some physicians had feared. ____ it produced a measurable improvement in nearly every case.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Accordingly,",
      "In the meantime,",
      "By comparison,",
      "On the contrary,"
    ],
    "correctAnswer": 3,
    "explanation": "Rather than harming patients, the treatment did the opposite by helping them. \"On the contrary\" signals this reversal of the feared outcome; the others signal result, time, or comparison.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 155,
    "question": "The engineers concentrated on strengthening the bridge's central span. ____ a separate crew reinforced the support cables at each end.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Consequently,",
      "In contrast,",
      "Meanwhile,",
      "For instance,"
    ],
    "correctAnswer": 2,
    "explanation": "The two crews were working at the same time on different parts. \"Meanwhile\" signals this simultaneity; the others signal result, contrast, or example.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 156,
    "question": "Hikers on the canyon trail must carry enough water for the entire route. ____ they risk severe dehydration in the desert heat.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Similarly,",
      "In addition,",
      "Nevertheless,",
      "Otherwise,"
    ],
    "correctAnswer": 3,
    "explanation": "The second sentence states what happens if the first condition is not met. \"Otherwise\" signals this conditional consequence; the others signal similarity, addition, or contrast.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 157,
    "question": "A student took the following notes about desert animals:\n- The fennec fox has large ears that release body heat.\n- The jackrabbit also has oversized ears that dissipate heat.\n- Both animals are active mainly at night.\n- Both live in hot desert environments.\n\nThe student wants to emphasize a physical trait the two animals share. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Both the fennec fox and the jackrabbit are active mainly at night.",
      "The fennec fox and the jackrabbit both have large ears that help release body heat.",
      "The fennec fox lives in a hot desert environment.",
      "The jackrabbit is active at night and lives in the desert."
    ],
    "correctAnswer": 1,
    "explanation": "The goal is a shared physical trait. Only the choice noting that both have large heat-releasing ears identifies a physical feature; the others describe behavior or habitat.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 158,
    "question": "A student took the following notes:\n- Some plants can survive extreme conditions.\n- The resurrection plant can lose 95 percent of its water and revive.\n- It curls into a dry brown ball during droughts.\n- When water returns, it unfurls and turns green within hours.\n\nThe student wants to present the resurrection plant as an example of a plant that survives extreme conditions. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "During droughts, the resurrection plant curls into a dry brown ball.",
      "The resurrection plant unfurls and turns green within hours when water returns.",
      "The resurrection plant, which can lose 95 percent of its water and revive, is one plant that survives extreme conditions.",
      "Some plants, such as the resurrection plant, can turn green quickly."
    ],
    "correctAnswer": 2,
    "explanation": "The goal is to present the plant as an example of the general claim about surviving extreme conditions. Only the choice that ties its water loss and revival directly to that claim does so; the others give isolated details.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 159,
    "question": "A student took the following notes about an experiment:\n- Researchers tested whether background music improves memory.\n- They expected music to help participants recall word lists.\n- Participants who studied in silence actually recalled more words.\n- The silence advantage was strongest with instrumental music playing.\n\nThe student wants to emphasize the surprising outcome of the experiment. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Researchers tested whether background music improves memory.",
      "The silence advantage was strongest when instrumental music was playing.",
      "Although the researchers expected music to aid recall, participants who studied in silence remembered more words.",
      "The researchers expected background music to help participants recall word lists."
    ],
    "correctAnswer": 2,
    "explanation": "The surprise lies in the gap between expectation and result. Only the choice contrasting the expectation with the opposite finding emphasizes the surprising outcome; the others state the setup or a detail.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 160,
    "question": "A student took the following notes:\n- In the 1930s, poor farming practices stripped the Great Plains of native grasses.\n- A severe drought then struck the region.\n- Without deep roots to hold the soil, winds lifted it into massive dust storms.\n- The period became known as the Dust Bowl.\n\nThe student wants to emphasize what caused the dust storms. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "The 1930s Dust Bowl was a period of massive dust storms on the Great Plains.",
      "A severe drought struck the Great Plains during the 1930s.",
      "Because poor farming had stripped away the native grasses that held the soil, winds were able to lift it into massive dust storms.",
      "The Great Plains lost much of its native grass cover in the 1930s."
    ],
    "correctAnswer": 2,
    "explanation": "The goal is to emphasize the cause of the storms. Only the choice using \"Because\" to link the loss of soil-anchoring grasses to the storms conveys causation; the others state facts without connecting cause and effect.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 161,
    "question": "In the northern colony, settlers built their economy around fishing and shipbuilding. In the southern colony, ____ large plantations dominated, relying on cash crops such as tobacco.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "by contrast,",
      "in the same way,",
      "as a result,",
      "for instance,"
    ],
    "correctAnswer": 0,
    "explanation": "The two colonies had opposite economic foundations. \"By contrast\" signals the difference; the others signal similarity, result, or example.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 162,
    "question": "A student took the following notes about the human body:\n- The kidneys are two bean-shaped organs.\n- They are located just below the rib cage.\n- They filter waste products out of the blood.\n- The filtered waste leaves the body as urine.\n\nThe student wants to explain the primary function of the kidneys. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "The kidneys are two bean-shaped organs located just below the rib cage.",
      "The kidneys filter waste products out of the blood, which then leaves the body as urine.",
      "The kidneys are located just below the rib cage.",
      "Waste eventually leaves the body as urine."
    ],
    "correctAnswer": 1,
    "explanation": "The primary function is filtering waste from the blood. Only the choice describing that filtering process explains what the kidneys do; the others describe shape, location, or a downstream detail.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 163,
    "question": "The bridge had not been inspected in more than a decade, and several of its support cables were visibly frayed. ____ engineers recommended closing it to traffic immediately.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nevertheless,",
      "For example,",
      "Therefore,",
      "In contrast,"
    ],
    "correctAnswer": 2,
    "explanation": "The frayed, uninspected cables are the cause and the closure recommendation is the effect, so a cause-effect transition is needed. \"Therefore\" signals result; \"Nevertheless\" and \"In contrast\" mark contrast, and \"For example\" signals illustration.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 164,
    "question": "Regular exercise strengthens the heart and improves circulation. ____ it can lift a person's mood by triggering the release of endorphins.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Additionally,",
      "However,",
      "As a result,",
      "In other words,"
    ],
    "correctAnswer": 0,
    "explanation": "The second sentence adds another benefit of exercise to the ones in the first, so an additive transition fits. \"Additionally\" adds; \"However\" contrasts, \"As a result\" shows cause-effect, and \"In other words\" restates.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 165,
    "question": "Solar panels have become far cheaper over the past decade, and installation rates have soared. ____ many homeowners in cloudy regions remain skeptical that the technology will ever pay off for them.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Consequently,",
      "Likewise,",
      "In summary,",
      "Nonetheless,"
    ],
    "correctAnswer": 3,
    "explanation": "The homeowners' skepticism runs counter to the good news in the first sentence, so a contrast transition is needed. \"Nonetheless\" concedes the contrast; \"Consequently\" is result, \"Likewise\" is similarity, and \"In summary\" signals a conclusion.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 166,
    "question": "The museum's new wing houses artifacts from cultures rarely represented in Western collections. ____ it displays a set of Nok terracotta figures from ancient Nigeria.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nevertheless,",
      "For example,",
      "As a result,",
      "In conclusion,"
    ],
    "correctAnswer": 1,
    "explanation": "The Nok figures are a specific instance of the rarely represented cultures mentioned first, so an exemplifying transition fits. \"For example\" illustrates; the others mark contrast, result, and conclusion.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 167,
    "question": "The company moved all of its data storage to encrypted servers and required two-factor authentication for every account. ____ the number of successful breaches dropped to nearly zero within a year.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Consequently,",
      "However,",
      "Similarly,",
      "For instance,"
    ],
    "correctAnswer": 0,
    "explanation": "The stronger security measures are the cause and the drop in breaches the effect, so a result transition is needed. \"Consequently\" shows cause-effect; \"However\" contrasts, \"Similarly\" compares, and \"For instance\" illustrates.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 168,
    "question": "Critics praised the novel's inventive structure and lush prose, and it won several major awards. ____ its dense allusions and constantly shifting timelines left many general readers thoroughly bewildered.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "As a result,",
      "Furthermore,",
      "For example,",
      "Admittedly,"
    ],
    "correctAnswer": 3,
    "explanation": "The praise in the first sentence is followed by an acknowledged drawback, a concession, so \"Admittedly\" fits. \"As a result\" is cause-effect, \"Furthermore\" would add another like point, and \"For example\" illustrates.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 169,
    "question": "The drought did not merely reduce the harvest; it wiped out entire fields that had produced grain for generations. ____ some farmers reported losing every acre they had planted that spring.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nonetheless,",
      "Meanwhile,",
      "Indeed,",
      "In contrast,"
    ],
    "correctAnswer": 2,
    "explanation": "The second sentence strengthens the first with an even more extreme detail, so an intensifying transition fits. \"Indeed\" intensifies; \"Nonetheless\" and \"In contrast\" mark contrast, and \"Meanwhile\" marks time.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 170,
    "question": "The treaty rests on a principle of reciprocity. ____ each nation agrees to extend to the others exactly the trade privileges it receives from them.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nevertheless,",
      "That is,",
      "For instance,",
      "Consequently,"
    ],
    "correctAnswer": 1,
    "explanation": "The second sentence restates and defines the principle named in the first rather than offering one example of it, so \"That is\" (elaboration) fits. \"For instance\" would signal an example, and the others mark contrast and result.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 171,
    "question": "The researchers first calibrated the instrument against a sample of known concentration. ____ they measured the unknown solution three times to be sure the readings were consistent.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "As a result,",
      "In contrast,",
      "For example,",
      "Next,"
    ],
    "correctAnswer": 3,
    "explanation": "The two sentences describe consecutive steps in a procedure rather than a causal link, so a sequence transition fits. \"Next\" marks order; \"As a result\" wrongly implies cause-effect, and the others mark contrast and illustration.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 172,
    "question": "Supporters argue that the new zoning law will bring badly needed housing to the city center. ____ the law does little to guarantee that any of those new units will be affordable to current residents.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Still,",
      "Accordingly,",
      "Likewise,",
      "In fact,"
    ],
    "correctAnswer": 0,
    "explanation": "The second sentence raises a limitation that counters the supporters' claim, so a contrast transition is needed. \"Still\" concedes the contrast; \"Accordingly\" is result, \"Likewise\" is similarity, and \"In fact\" would intensify rather than oppose.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 173,
    "question": "Many everyday materials expand when heated and contract when cooled, sometimes with damaging force. ____ the steel rails of a railroad can buckle on an unusually hot afternoon.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "For instance,",
      "That is,",
      "On the other hand,",
      "As a result,"
    ],
    "correctAnswer": 0,
    "explanation": "The buckling rail is a specific instance of the general phenomenon described first, so an exemplifying transition fits. \"For instance\" illustrates; \"That is\" would signal a restatement rather than an example, and the others mark contrast and result.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 174,
    "question": "While researching a topic, a student has taken the following notes:\n\n- The baobab is a tree native to Africa, Madagascar, and Australia.\n- It can store up to 120,000 liters of water in its trunk.\n- Some baobabs live for more than 1,000 years.\n- Local communities use its fruit, bark, and leaves.\n\nThe student wants to introduce the baobab tree to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Some baobabs live for more than 1,000 years, and local communities use the tree's fruit, bark, and leaves.",
      "The baobab stores water in its trunk, one of many adaptations that trees have evolved over time.",
      "The baobab, a long-lived tree native to Africa, Madagascar, and Australia, can store up to 120,000 liters of water in its trunk.",
      "Because it can store up to 120,000 liters of water, the baobab is native to three continents."
    ],
    "correctAnswer": 2,
    "explanation": "The goal is to introduce the tree to people unfamiliar with it, so the best choice identifies what it is and where it grows and adds a striking fact. The other choices assume familiarity, add an unsupported claim, or invent a false cause.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 175,
    "question": "While researching a topic, a student has taken the following notes:\n\n- Clara Schumann was a 19th-century German pianist and composer.\n- Fanny Mendelssohn was a 19th-century German pianist and composer.\n- Schumann composed a piano concerto at age 16.\n- Mendelssohn wrote more than 450 musical works.\n- Both women performed publicly at a time when few women did.\n\nThe student wants to emphasize a similarity between the two musicians. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Clara Schumann composed a piano concerto at 16, whereas Fanny Mendelssohn wrote more than 450 musical works.",
      "Both Clara Schumann and Fanny Mendelssohn were 19th-century German musicians who performed publicly at a time when few women did.",
      "Fanny Mendelssohn wrote more than 450 musical works over the course of the 19th century.",
      "Although both were German, Clara Schumann was mainly a pianist and Fanny Mendelssohn mainly a composer."
    ],
    "correctAnswer": 1,
    "explanation": "The goal is to emphasize a similarity, and only this choice names a trait the two musicians shared. The others contrast their outputs, describe just one musician, or misstate the notes.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 176,
    "question": "While researching a topic, a student has taken the following notes:\n\n- Boiling water kills most microorganisms by heating it to 100 degrees Celsius.\n- Boiling requires a heat source and fuel.\n- Chlorination adds small amounts of chlorine to water.\n- Chlorination leaves a residual that keeps water safe during storage.\n- Both methods are widely used to make water drinkable.\n\nThe student wants to emphasize a distinction between the two methods. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Both boiling and chlorination are widely used methods for making water drinkable.",
      "Boiling water kills most microorganisms, and adding chlorine to water does the same.",
      "Chlorination adds chlorine to water, which keeps the water safe even after it has been boiled.",
      "Unlike boiling, which requires fuel and offers no lasting protection, chlorination leaves a residual that keeps stored water safe."
    ],
    "correctAnswer": 3,
    "explanation": "The goal is to emphasize a distinction, and only this choice contrasts the methods, noting that chlorination offers lasting protection while boiling does not. The others stress similarity or misstate the notes.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 177,
    "question": "While researching a topic, a student has taken the following notes:\n\n- A study tracked 200 office workers for six months.\n- Workers who took a 10-minute walk every afternoon reported less fatigue.\n- They also completed tasks slightly faster than those who did not walk.\n- The effect was strongest among workers over 40.\n\nThe student wants to generalize from the study's specific findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "The study suggests that short afternoon walks may help office workers feel less tired and work more efficiently.",
      "In the study, 200 office workers were tracked over a period of six months.",
      "Every office worker who takes a 10-minute walk will feel less fatigued and finish tasks faster.",
      "The effect of the afternoon walks was strongest among the workers who were over 40."
    ],
    "correctAnswer": 0,
    "explanation": "The goal is to generalize, and only this choice draws a hedged general conclusion from the results. The others report the method, overgeneralize with an absolute claim, or restate a single specific finding.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 178,
    "question": "While researching a topic, a student has taken the following notes:\n\n- Tardigrades are microscopic animals often called water bears.\n- Scientists long assumed that complex animals could not survive the vacuum of space.\n- In a 2007 experiment, tardigrades were exposed to open space for 10 days.\n- Many of the tardigrades survived and later reproduced.\n- Most were also exposed to high levels of solar radiation.\n\nThe student wants to emphasize why the 2007 result surprised researchers. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Tardigrades, microscopic animals often called water bears, were exposed to open space for 10 days in 2007.",
      "After being exposed to open space for 10 days, many of the tardigrades survived and later reproduced.",
      "Because scientists had assumed that complex animals could not survive the vacuum of space, the tardigrades' survival after 10 days in open space was unexpected.",
      "The tardigrades were exposed both to the vacuum of space and to high levels of solar radiation."
    ],
    "correctAnswer": 2,
    "explanation": "The result surprised researchers because it defied a prior assumption, so the best choice pairs that assumption with the survival. The others report the event or the conditions without explaining why it was unexpected.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 179,
    "question": "While researching a topic, a student has taken the following notes:\n\n- Dendrochronology is the study of tree rings to date past events.\n- Each ring represents one year of a tree's growth.\n- Ring width varies with rainfall and temperature.\n- Researchers used dendrochronology to date the timbers in a medieval cathedral.\n- The timbers were felled around the year 1230.\n\nThe student wants to introduce dendrochronology to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Dendrochronology, the study of the annual rings that trees form as they grow, lets researchers date past events, such as the felling of a medieval cathedral's timbers.",
      "The timbers of the medieval cathedral were felled around the year 1230.",
      "Because ring width varies with rainfall and temperature, each ring represents a single year of a tree's growth.",
      "Researchers used dendrochronology to date the timbers of a medieval cathedral to around the year 1230."
    ],
    "correctAnswer": 0,
    "explanation": "The goal is to introduce dendrochronology to an unfamiliar audience, so the best choice defines the term and gives an application. One distractor assumes the reader already knows the term, one reports only the finding, and one falsely links two notes as cause and effect.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 180,
    "question": "While researching a topic, a student has taken the following notes:\n\n- Both Katsushika Hokusai and Utagawa Hiroshige made Japanese woodblock prints.\n- Hokusai often exaggerated natural forms for dramatic effect.\n- Hiroshige favored calm, atmospheric depictions of everyday scenes.\n- Both artists were active in the 19th century.\n- Both influenced later European painters.\n\nThe student wants to emphasize a distinction between the two artists' techniques. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Both Hokusai and Hiroshige made Japanese woodblock prints that influenced later European painters.",
      "Hokusai and Hiroshige were both active in the 19th century, when Japanese woodblock printing flourished.",
      "Hiroshige, like Hokusai, exaggerated natural forms for dramatic effect in his prints.",
      "Whereas Hokusai often exaggerated natural forms for dramatic effect, Hiroshige favored calm, atmospheric depictions of everyday scenes."
    ],
    "correctAnswer": 3,
    "explanation": "The goal is to emphasize a distinction in technique, and only this choice contrasts Hokusai's exaggeration with Hiroshige's calm scenes. The others stress similarity or misstate Hiroshige's approach.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 181,
    "question": "While researching a topic, a student has taken the following notes:\n\n- Coral reefs worldwide have been losing their color, a process called bleaching.\n- Researchers proposed that warmer ocean temperatures trigger bleaching.\n- To test this, they monitored reef temperatures and color for five years.\n- Reefs in the warmest waters bleached most often.\n- The team is now studying whether some corals can adapt.\n\nThe student wants to present the researchers' hypothesis. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "Over the course of five years, the reefs in the warmest waters bleached most often.",
      "The researchers hypothesized that warmer ocean temperatures cause coral reefs to bleach.",
      "The researchers are now studying whether some corals can adapt to warmer waters.",
      "Coral reefs around the world have been losing their color in a process known as bleaching."
    ],
    "correctAnswer": 1,
    "explanation": "The goal is to present the hypothesis, the proposed explanation being tested, so the best choice states what the researchers predicted. The others give a result, describe future work, or provide background.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 182,
    "question": "While researching a topic, a student has taken the following notes:\n\n- Engineers tested a new self-healing concrete containing dormant bacteria.\n- When cracks let in water, the bacteria activate and produce limestone.\n- The limestone seals the cracks before they can widen.\n- In trials, treated samples sealed cracks up to 0.8 millimeters wide.\n- Untreated concrete cracks often require costly manual repair.\n\nThe student wants to emphasize the significance of the finding for future construction. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    "options": [
      "By sealing cracks on its own, the self-healing concrete could reduce the costly manual repairs that ordinary concrete requires, making it promising for future construction.",
      "The self-healing concrete contains dormant bacteria that activate when cracks let water into the material.",
      "In trials, the treated samples sealed cracks that were up to 0.8 millimeters wide.",
      "Untreated concrete cracks often require repairs that must be done by hand."
    ],
    "correctAnswer": 0,
    "explanation": "The goal is to emphasize significance for future construction, and only this choice ties the self-sealing property to reduced repair costs. The others describe the mechanism, report a trial result, or provide background.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 183,
    "question": "The city council initially planned to close the old library branch to save money. ______ community members raised enough funds to keep it open for another decade.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Therefore,",
      "However,",
      "For example,",
      "In addition,"
    ],
    "correctAnswer": 1,
    "explanation": "The council planned to close the branch, but the community kept it open instead, so the sentences express a contrast. 'However' signals that reversal; 'Therefore' marks cause/effect, 'For example' introduces an illustration, and 'In addition' adds a similar point, none of which fit.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 184,
    "question": "Maria practiced the violin for three hours every day for a year. ______ she was selected as concertmaster of the youth orchestra.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nevertheless,",
      "For instance,",
      "As a result,",
      "Meanwhile,"
    ],
    "correctAnswer": 2,
    "explanation": "The extensive practice is the cause and her selection is the effect, so a cause/effect transition is needed. 'As a result' shows that outcome; 'Nevertheless' signals contrast, 'For instance' an example, and 'Meanwhile' simultaneous time, none of which fit.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 185,
    "question": "While studying two species of frogs, a student took these notes:\n- The red-eyed tree frog is active mainly at night.\n- The poison dart frog is active mainly during the day.\n- Both species live in tropical rainforests.\n\nThe student wants to emphasize a difference between the two frog species. Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
      "Both the red-eyed tree frog and the poison dart frog live in tropical rainforests.",
      "The poison dart frog is active mainly during the day.",
      "The red-eyed tree frog and the poison dart frog are both frogs.",
      "The red-eyed tree frog is active mainly at night, whereas the poison dart frog is active mainly during the day."
    ],
    "correctAnswer": 3,
    "explanation": "The goal is to emphasize a DIFFERENCE; only the last choice contrasts one frog's nighttime activity with the other's daytime activity. The first states a similarity, the second gives a single fact, and the third is a generic similarity.",
    "difficulty": "easy",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 186,
    "question": "The new fertilizer increased crop yields by nearly twenty percent. ______ it reduced the amount of water the plants needed to thrive.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "In contrast,",
      "Additionally,",
      "Consequently,",
      "Otherwise,"
    ],
    "correctAnswer": 1,
    "explanation": "The second sentence adds a separate benefit of the fertilizer, so an addition transition fits. 'Additionally' adds the point; 'In contrast' signals opposition, 'Consequently' would wrongly claim the water savings resulted from the yield increase, and 'Otherwise' implies an alternative.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 187,
    "question": "Many everyday materials exhibit surprising properties when cooled to extremely low temperatures. ______ certain metals lose all electrical resistance and become superconductors.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nonetheless,",
      "Similarly,",
      "In conclusion,",
      "For example,"
    ],
    "correctAnswer": 3,
    "explanation": "The second sentence gives a specific instance of the surprising properties mentioned first, so an example transition is needed. 'For example' introduces that instance; 'Nonetheless' signals contrast, 'Similarly' needs a prior comparable case, and 'In conclusion' signals a summary.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 188,
    "question": "The researchers first collected soil samples from each of the forty plots. ______ they analyzed the samples in the laboratory to measure nitrogen content.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Afterward,",
      "In contrast,",
      "For example,",
      "Regardless,"
    ],
    "correctAnswer": 0,
    "explanation": "The word 'first' sets up a sequence of steps, and the analysis follows the collection in time, so a sequence transition fits. 'Afterward' shows the next step; 'In contrast' signals opposition, 'For example' introduces an illustration, and 'Regardless' dismisses a condition.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 189,
    "question": "A student researching two lakes took these notes:\n- Lake Baikal is located in Russia.\n- Lake Tanganyika is located in Africa.\n- Both lakes are among the deepest freshwater lakes on Earth.\n- Both lakes are home to species found nowhere else.\n\nThe student wants to emphasize a similarity between the two lakes. Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
      "Lake Baikal is located in Russia, while Lake Tanganyika is located in Africa.",
      "Lake Baikal is located in Russia.",
      "Like Lake Baikal, Lake Tanganyika is home to species found nowhere else on Earth.",
      "Lake Tanganyika, unlike Lake Baikal, is located in Africa."
    ],
    "correctAnswer": 2,
    "explanation": "The goal is to emphasize a SIMILARITY; only the third choice presents a shared trait, using 'Like' to link both lakes' unique species. The first and fourth stress differences in location, and the second states a single fact.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 190,
    "question": "A student took these notes about a recent study:\n- Researchers studied how sleep affects memory.\n- Participants who slept eight hours recalled 40 percent more words than those who stayed awake.\n- The study was published in 2022.\n\nThe student wants to present the study's main finding to an audience unfamiliar with the research. Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
      "A 2022 study found that participants who slept eight hours recalled 40 percent more words than those who stayed awake.",
      "The study was published in 2022.",
      "Researchers studied how sleep affects memory.",
      "Some participants stayed awake instead of sleeping."
    ],
    "correctAnswer": 0,
    "explanation": "To present the finding to an unfamiliar audience, the choice must state the actual result clearly; the first choice reports the 40 percent difference. The second gives only the date, the third names the topic without the finding, and the fourth is an incidental detail.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 191,
    "question": "While researching how glass bottles are recycled, a student took these notes:\n- Collected bottles are first sorted by color.\n- The sorted glass is then crushed into small pieces called cullet.\n- The cullet is melted in a furnace.\n- The molten glass is shaped into new bottles.\n\nThe student wants to describe what happens to the glass immediately after it is sorted by color. Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
      "The glass is melted in a furnace and shaped into new bottles.",
      "After being sorted by color, the glass is crushed into small pieces called cullet.",
      "Collected bottles are first sorted by color.",
      "The molten glass is shaped into new bottles."
    ],
    "correctAnswer": 1,
    "explanation": "The goal asks for the step immediately after sorting; the notes show that sorted glass is next crushed into cullet, which the second choice states. The first and fourth describe later steps, and the third restates the sorting step itself.",
    "difficulty": "medium",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 192,
    "question": "The volunteers did not merely meet their fundraising goal. ______ they exceeded it by more than fifty thousand dollars.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Similarly,",
      "For example,",
      "In fact,",
      "Meanwhile,"
    ],
    "correctAnswer": 2,
    "explanation": "The second sentence intensifies the first, going beyond 'met the goal' to 'exceeded it,' so an emphasis transition is needed. 'In fact' strengthens the point; 'Similarly' needs a comparable case, 'For example' introduces an instance, and 'Meanwhile' signals simultaneous time.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 193,
    "question": "Solar panels are far more efficient than they were a decade ago. ______ they still cannot generate power on their own at night.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Admittedly,",
      "Therefore,",
      "For instance,",
      "Likewise,"
    ],
    "correctAnswer": 0,
    "explanation": "The sentence concedes a lasting limitation despite the improvement, so a concession transition fits. 'Admittedly' acknowledges the drawback; 'Therefore' marks cause/effect, 'For instance' introduces an example, and 'Likewise' signals similarity.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 194,
    "question": "Some of the museum's exhibits focus on ancient pottery, while others display modern sculpture and digital art. ______ the collection spans thousands of years of human creativity.\n\nWhich choice completes the text with the most logical transition?",
    "options": [
      "Nevertheless,",
      "For instance,",
      "Earlier,",
      "Overall,"
    ],
    "correctAnswer": 3,
    "explanation": "The second sentence draws a broad conclusion that covers the varied exhibits just listed, so a generalizing transition is needed. 'Overall' sums up the whole collection; 'Nevertheless' signals contrast, 'For instance' introduces an example, and 'Earlier' signals time.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Transitions"
  },
  {
    "id": 195,
    "question": "A student studying renewable energy took these notes:\n- Wind farms generate electricity without burning fuel.\n- Solar arrays generate electricity without burning fuel.\n- Hydroelectric dams generate electricity without burning fuel.\n\nThe student wants to make a generalization about these three energy sources. Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
      "Wind farms generate electricity without burning fuel.",
      "Wind, solar, and hydroelectric power all generate electricity without burning fuel.",
      "Hydroelectric dams rely on flowing water to spin turbines.",
      "Solar arrays generate electricity without burning fuel."
    ],
    "correctAnswer": 1,
    "explanation": "A generalization must draw one broad statement covering all three sources; the second choice unites them under the shared trait of generating power without burning fuel. The first and fourth describe only a single source, and the third adds a detail not in the notes.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 196,
    "question": "While researching a coastal town, a student took these notes:\n- The town's population grew rapidly between 2000 and 2020.\n- A large technology company opened its headquarters there in 2001.\n- The company employs more than ten thousand workers.\n- Many workers moved to the town to be near their jobs.\n\nThe student wants to explain why the town's population grew. Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
      "The town's population grew rapidly between 2000 and 2020.",
      "A large technology company in the town employs more than ten thousand workers.",
      "The town's population grew rapidly because a technology company opened its headquarters there, drawing thousands of workers to the area.",
      "The town is located on the coast."
    ],
    "correctAnswer": 2,
    "explanation": "To explain the cause, the choice must link the growth to a reason; the third connects the population increase to the company that drew workers in. The first states the effect without a cause, the second gives a fact without linking it to growth, and the fourth is irrelevant.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 197,
    "question": "A student researching two ancient writing systems took these notes:\n- Egyptian hieroglyphs were written using pictorial symbols.\n- Cuneiform was written by pressing a wedge-shaped stylus into clay.\n- Both systems were used more than three thousand years ago.\n- Both systems have been deciphered by modern scholars.\n\nThe student wants to emphasize a difference between the two writing systems. Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
      "Both Egyptian hieroglyphs and cuneiform were used more than three thousand years ago.",
      "Both writing systems have eventually been deciphered by modern scholars.",
      "Egyptian hieroglyphs and cuneiform are both ancient writing systems.",
      "Whereas Egyptian hieroglyphs used pictorial symbols, cuneiform was formed by pressing a wedge-shaped stylus into clay."
    ],
    "correctAnswer": 3,
    "explanation": "The goal is to emphasize a DIFFERENCE; only the last choice contrasts the pictorial symbols of hieroglyphs with the wedge-pressed technique of cuneiform. The first three all state similarities shared by both systems.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 198,
    "question": "A student took these notes about an experiment:\n- Biologists tested whether background music affects plant growth.\n- One group of bean plants was exposed to classical music for six hours a day.\n- A second group grew in silence.\n- After eight weeks, the two groups showed no measurable difference in height.\n\nThe student wants to present the experiment's conclusion to readers unfamiliar with it. Which choice most effectively uses the notes to accomplish this goal?",
    "options": [
      "In an experiment testing whether background music affects plant growth, bean plants exposed to classical music grew no taller than those grown in silence.",
      "Biologists tested whether background music affects plant growth.",
      "One group of bean plants was exposed to classical music for six hours a day.",
      "The experiment lasted eight weeks."
    ],
    "correctAnswer": 0,
    "explanation": "To present the conclusion to an unfamiliar audience, the choice must state the outcome; the first reports that the music-exposed plants grew no taller than the silent ones. The second gives only the question, the third a setup detail, and the fourth a minor fact.",
    "difficulty": "hard",
    "domain": "expression",
    "skill": "Rhetorical Synthesis"
  },
  {
    "id": 199,
    "question": "The old clock in the hallway finally stopped working, and ____ hands are frozen at noon.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "its",
      "it's",
      "its'",
      "it is"
    ],
    "correctAnswer": 0,
    "explanation": "The possessive form of \"it\" is \"its\" (no apostrophe): \"its hands.\" \"It's\" and \"it is\" both mean \"it is,\" which is illogical here, and \"its'\" is not a word.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 200,
    "question": "The volunteers packed up ____ supplies before the storm arrived.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "they're",
      "there",
      "theyre",
      "their"
    ],
    "correctAnswer": 3,
    "explanation": "The possessive pronoun \"their\" is needed to show the supplies belong to the volunteers. \"They're\" means \"they are,\" \"there\" indicates place, and \"theyre\" is a misspelling.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 201,
    "question": "My sister ____ to the gym every morning before work.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "go",
      "going",
      "goes",
      "gone"
    ],
    "correctAnswer": 2,
    "explanation": "The singular subject \"My sister\" requires the singular present-tense verb \"goes.\" \"Go\" is plural, \"going\" and \"gone\" are non-finite forms that cannot stand alone as the main verb.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 202,
    "question": "The ____ in the parking lot were all covered with a thin layer of frost.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "car's",
      "cars",
      "cars'",
      "car"
    ],
    "correctAnswer": 1,
    "explanation": "The plural verb \"were\" and \"all\" signal a plain plural noun, \"cars\" (no possession). \"Car's\" is singular possessive, \"cars'\" is plural possessive, and singular \"car\" does not agree with \"were.\"",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 203,
    "question": "Please make sure ____ ready to present when the meeting begins.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "you're",
      "your",
      "youre",
      "yours"
    ],
    "correctAnswer": 0,
    "explanation": "The contraction \"you're\" (you are) fits: \"make sure you are ready.\" \"Your\" is possessive, \"yours\" is a possessive pronoun, and \"youre\" is a misspelling.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 204,
    "question": "Each of the finalists ____ a short speech before the awards were announced.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "give",
      "giving",
      "have given",
      "gives"
    ],
    "correctAnswer": 3,
    "explanation": "The subject \"Each\" is singular and takes the singular verb \"gives,\" regardless of the intervening phrase \"of the finalists.\" \"Give\" and \"have given\" are plural, and \"giving\" is not a finite verb.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 205,
    "question": "The author ____ novel won the prize will speak at the library tonight.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "who's",
      "whos",
      "whose",
      "whose'"
    ],
    "correctAnswer": 2,
    "explanation": "The possessive relative pronoun \"whose\" shows the novel belongs to the author. \"Who's\" means \"who is,\" \"whos\" is a misspelling, and \"whose'\" is not a word.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 206,
    "question": "The museum's new exhibit opened last week ____ it has already attracted record crowds.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ", and",
      ", it",
      " and",
      "and,"
    ],
    "correctAnswer": 0,
    "explanation": "Two independent clauses joined by the coordinating conjunction \"and\" need a comma before it: \"last week, and it has...\" \", it\" creates a comma splice, \" and\" omits the required comma, and \"and,\" misplaces the comma.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 207,
    "question": "The ____ playground was repainted with bright colors over the summer.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "childrens'",
      "childrens",
      "childs'",
      "children's"
    ],
    "correctAnswer": 3,
    "explanation": "\"Children\" is already plural, so its possessive is \"children's.\" \"Childrens'\" and \"childrens\" treat \"children\" as if it needed a plural -s, and \"childs'\" is not a valid form.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 208,
    "question": "Yesterday the technician ____ the printer and replaced the ink cartridge.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "fixes",
      "fixed",
      "will fix",
      "fix"
    ],
    "correctAnswer": 1,
    "explanation": "\"Yesterday\" and the paired verb \"replaced\" establish the simple past, so \"fixed\" maintains consistent tense and parallelism. \"Fixes\" and \"fix\" are present, and \"will fix\" is future.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 209,
    "question": "The experiment produced unexpected results ____ the researchers decided to run it again.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ", so that",
      " so",
      "; so",
      ", so"
    ],
    "correctAnswer": 3,
    "explanation": "Two independent clauses joined by the coordinating conjunction \"so\" require a comma before it: \"results, so the researchers...\" \", so that\" makes the second part a subordinate purpose clause (meaning shift), \" so\" omits the comma, and \"; so\" wrongly pairs a semicolon with a coordinating conjunction.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 210,
    "question": "The recipe calls for three simple ingredients ____ flour, water, and salt.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ":",
      ";",
      ",",
      "and"
    ],
    "correctAnswer": 0,
    "explanation": "A colon follows the complete clause \"The recipe calls for three simple ingredients\" to introduce the list. A semicolon must join two independent clauses, a comma under-punctuates the introduction, and \"and\" produces \"ingredients and flour, water, and salt.\"",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 211,
    "question": "The first speaker ran over her allotted time ____ the schedule for the rest of the afternoon had to be revised.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      " so",
      ",",
      ";",
      ";,"
    ],
    "correctAnswer": 2,
    "explanation": "The semicolon correctly joins two independent clauses: \"time; the schedule...had to be revised.\" \" so\" is a run-on missing punctuation, a lone comma creates a splice, and \";,\" is malformed.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 212,
    "question": "The novel's protagonist, a disgraced detective ____ spends the story seeking redemption.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "(no punctuation)",
      ", ",
      ";",
      ":"
    ],
    "correctAnswer": 1,
    "explanation": "The nonrestrictive appositive \"a disgraced detective\" is set off by a pair of commas, so a closing comma is needed before \"spends.\" Omitting it leaves the appositive unbalanced, and a semicolon or colon cannot close an appositive.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 213,
    "question": "The collection of rare stamps ____ displayed in a locked case near the entrance.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "is",
      "are",
      "were",
      "have been"
    ],
    "correctAnswer": 0,
    "explanation": "The singular subject \"collection\" takes \"is,\" not the plural verbs \"are,\" \"were,\" or \"have been.\" The intervening phrase \"of rare stamps\" does not change the number of the subject.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 214,
    "question": "The chef prepared each dish so carefully that ____ looked like a work of art.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "they",
      "them",
      "those",
      "it"
    ],
    "correctAnswer": 3,
    "explanation": "The antecedent \"each dish\" is singular, so the singular pronoun \"it\" is required. \"They,\" \"them,\" and \"those\" are plural and do not agree with \"each dish.\"",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 215,
    "question": "The scientists — whose findings had been questioned for years ____ finally received recognition for their work.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ",",
      " —",
      ";",
      ":"
    ],
    "correctAnswer": 1,
    "explanation": "A parenthetical opened with a dash must be closed with a matching dash: \"— whose findings had been questioned for years — finally received...\" A comma, semicolon, or colon cannot close a dash-opened element.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 216,
    "question": "The manager, along with her assistants, ____ attending the conference in Denver.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "are",
      "were",
      "is",
      "have been"
    ],
    "correctAnswer": 2,
    "explanation": "The subject is the singular \"manager\"; a phrase beginning with \"along with\" does not make the subject plural, so \"is\" is correct. \"Are,\" \"were,\" and \"have been\" are plural.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 217,
    "question": "The batteries were completely drained ____ we had to postpone the demonstration.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ", so",
      "; so",
      " so",
      ", so that"
    ],
    "correctAnswer": 0,
    "explanation": "Two independent clauses joined by the coordinating conjunction \"so\" take a comma before it: \"drained, so we had to postpone.\" \"; so\" wrongly pairs a semicolon with a coordinating conjunction, \" so\" omits the comma, and \", so that\" changes the meaning to a purpose clause.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 218,
    "question": "The award recognized ____ groundbreaking collaborative research on coral reefs.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "Chen's and Alvarez's",
      "Chen and Alvarez",
      "Chen and Alvarez'",
      "Chen and Alvarez's"
    ],
    "correctAnswer": 3,
    "explanation": "Because the research is explicitly collaborative — a single shared body — joint possession places the possessive on only the last name: 'Chen and Alvarez's research.' 'Chen's and Alvarez's' would signal separate bodies of research, contradicting 'collaborative'; 'Chen and Alvarez' shows no possession; and 'Chen and Alvarez'' uses an incorrect apostrophe form.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 219,
    "question": "The internship taught her to analyze data, to write clear reports, and ____ effectively with clients.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "communicating",
      "to communicate",
      "communicated",
      "she communicated"
    ],
    "correctAnswer": 1,
    "explanation": "Parallel structure requires the third item to match the infinitives \"to analyze\" and \"to write,\" so \"to communicate\" is correct. \"Communicating,\" \"communicated,\" and \"she communicated\" break the parallel series.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 220,
    "question": "Neither the coach nor the players ____ satisfied with the referee's final call.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "were",
      "was",
      "has been",
      "is"
    ],
    "correctAnswer": 0,
    "explanation": "In a \"neither...nor\" construction, the verb agrees with the nearer subject, here the plural \"players,\" so \"were\" is correct. \"Was,\" \"has been,\" and \"is\" are singular and disagree with \"players.\"",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 221,
    "question": "The bridge ____ was built in 1932, remains the busiest crossing in the region.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      " that",
      " which",
      ", which",
      ", that"
    ],
    "correctAnswer": 2,
    "explanation": "The closing comma after \"1932\" shows the clause is nonrestrictive, which requires an opening comma and \"which\": \", which was built in 1932,.\" \"That\" cannot introduce a nonrestrictive clause, and \" which\" without the opening comma leaves the pair unbalanced.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 222,
    "question": "There was only one thing the hikers wanted after the long climb ____ a hot meal and a warm bed.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ";",
      ",",
      " being",
      ":"
    ],
    "correctAnswer": 3,
    "explanation": "A colon follows the complete clause to introduce the explanatory phrase \"a hot meal and a warm bed.\" A semicolon must join independent clauses, a comma under-punctuates, and \" being\" creates an ungrammatical phrase.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 223,
    "question": "Walking through the ancient ruins, ____.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "the towering columns amazed the tourists",
      "the tourists were amazed by the towering columns",
      "there were towering columns that amazed the tourists",
      "the amazement of the tourists grew"
    ],
    "correctAnswer": 1,
    "explanation": "The introductory modifier \"Walking through the ancient ruins\" must describe the people doing the walking, so \"the tourists\" must be the subject. The other options illogically make the columns, \"there,\" or \"the amazement\" the walkers, creating dangling modifiers.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 224,
    "question": "The relay team included Ana, the anchor ____ Beth, the lead-off runner; and Carla, the second leg.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ";",
      ",",
      ": ",
      " and,"
    ],
    "correctAnswer": 0,
    "explanation": "Because each list item already contains an internal comma, the items must be separated by semicolons, matching the \"; and Carla\" later in the sentence. A comma, a colon, or \" and,\" would blur the boundaries between items.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 225,
    "question": "By the time the firefighters arrived, the flames ____ most of the warehouse.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "consumed",
      "have consumed",
      "consume",
      "had consumed"
    ],
    "correctAnswer": 3,
    "explanation": "The past perfect \"had consumed\" shows the burning was completed before the firefighters arrived (another past action). \"Consumed\" loses the sequence, \"have consumed\" is present perfect, and \"consume\" is present tense.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 226,
    "question": "The committee announced ____ decision after three hours of deliberation.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "their",
      "it's",
      "its",
      "they're"
    ],
    "correctAnswer": 2,
    "explanation": "The collective noun \"committee\" acts as a single unit reaching one decision, so the singular possessive \"its\" is correct. \"Their\" treats the singular committee as plural, \"it's\" means \"it is,\" and \"they're\" means \"they are.\"",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 227,
    "question": "The new policy will not only reduce costs but also ____ efficiency across all departments.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "improving",
      "improve",
      "it improves",
      "improved"
    ],
    "correctAnswer": 1,
    "explanation": "The correlative pair \"not only...but also\" must link parallel elements; to match \"reduce,\" the base verb \"improve\" is required. \"Improving,\" \"it improves,\" and \"improved\" break the parallel structure.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 228,
    "question": "By the end of the expedition, all six ____ boots were caked with mud.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "hiker's",
      "hikers",
      "hikers's",
      "hikers'"
    ],
    "correctAnswer": 3,
    "explanation": "\"All six\" establishes a plural, and the boots belong to them, so the plural possessive \"hikers'\" is correct. \"Hiker's\" is singular (contradicting \"six\"), \"hikers\" shows no possession, and \"hikers's\" is an incorrect form.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 229,
    "question": "Each morning, the librarian ____ the returned books before the branch opens to the public.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "sort",
      "sorting",
      "sorts",
      "to sort"
    ],
    "correctAnswer": 2,
    "explanation": "The singular subject \"librarian\" requires the singular present-tense verb \"sorts\"; \"sort\" is plural, and \"sorting\" and \"to sort\" are nonfinite forms that cannot serve as the main verb.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 230,
    "question": "By the end of the field trip, all six ____ permission slips had been collected and filed.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "students'",
      "students",
      "student's",
      "students's"
    ],
    "correctAnswer": 0,
    "explanation": "\"Six\" indicates more than one student, and the slips belong to them, so the plural possessive \"students'\" is required; \"student's\" is singular possessive, while \"students\" and \"students's\" are not correct possessive forms.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 231,
    "question": "____ the entire class applauded the visiting author for nearly a full minute.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "As the lecture ended",
      "As the lecture, ended",
      "As, the lecture ended",
      "As the lecture ended,"
    ],
    "correctAnswer": 3,
    "explanation": "An introductory dependent clause should be followed by a comma before the main clause; the comma belongs after \"ended,\" not between the subject and its verb or immediately after \"As.\"",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 232,
    "question": "The stack of newspapers near the recycling bins ____ higher every single week.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "grow",
      "grows",
      "have grown",
      "are growing"
    ],
    "correctAnswer": 1,
    "explanation": "The singular subject is \"stack\"; the intervening prepositional phrase \"of newspapers near the recycling bins\" does not change the number, so the singular verb \"grows\" is correct.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 233,
    "question": "The architect ____ design won the international competition will oversee construction of the new library.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "whose",
      "who's",
      "whom",
      "that's"
    ],
    "correctAnswer": 0,
    "explanation": "The possessive relative pronoun \"whose\" is needed to show that the design belongs to the architect; \"who's\" means \"who is,\" \"whom\" is an object pronoun, and \"that's\" means \"that is.\"",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 234,
    "question": "The prototype passed every laboratory test ____ the engineers still refused to approve it for production.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ", nevertheless,",
      "; nevertheless,",
      " nevertheless,",
      ", nevertheless"
    ],
    "correctAnswer": 1,
    "explanation": "Two independent clauses joined by the conjunctive adverb \"nevertheless\" require a semicolon before it and a comma after it; a comma before the second clause creates a comma splice, and omitting punctuation creates a run-on.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 235,
    "question": "During the retreat, the counselors organized activities such as canoeing, rock climbing, and ____ around the campfire.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "to sing",
      "they sang",
      "sang",
      "singing"
    ],
    "correctAnswer": 3,
    "explanation": "The items in the list are gerunds (\"canoeing,\" \"rock climbing\"), so parallel structure requires the gerund \"singing\"; the infinitive, clause, and past-tense forms all break the parallel pattern.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 236,
    "question": "Each of the volunteers who signed up for the early morning shift ____ expected to arrive by seven o'clock.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "are",
      "were",
      "have been",
      "is"
    ],
    "correctAnswer": 3,
    "explanation": "The subject is the singular indefinite pronoun \"Each,\" which takes a singular verb; the intervening phrase \"of the volunteers who signed up for the early morning shift\" does not affect agreement, so \"is\" is correct.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 237,
    "question": "The Great Barrier Reef ____ is home to thousands of marine species found nowhere else on Earth.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "which lies off the coast of Australia",
      ", which lies off the coast of Australia",
      ", which lies off the coast of Australia,",
      "which lies off the coast of Australia,"
    ],
    "correctAnswer": 2,
    "explanation": "The clause \"which lies off the coast of Australia\" is nonrestrictive and must be set off by a pair of commas, one before and one after; using only one comma or no commas at all is incorrect.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 238,
    "question": "There ____ a surprising number of errors in the final draft that the editor had promised was flawless.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "is",
      "are",
      "was",
      "has been"
    ],
    "correctAnswer": 1,
    "explanation": "In this inverted construction the true subject is \"a number of errors,\" and \"a number of\" is plural, so the plural verb \"are\" is required; \"is,\" \"was,\" and \"has been\" are all singular and do not agree.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 239,
    "question": "Neither the head coach nor the assistant trainers ____ willing to change the team's rigorous practice schedule.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "is",
      "was",
      "are",
      "has been"
    ],
    "correctAnswer": 2,
    "explanation": "In a \"neither...nor\" construction the verb agrees with the nearer subject, which is the plural \"assistant trainers,\" so the plural verb \"are\" is correct; the singular forms do not agree.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 240,
    "question": "After three days of deliberation, the jury ____ reached a unanimous verdict, and its foreperson read the decision aloud.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "have",
      "has",
      "were",
      "are"
    ],
    "correctAnswer": 1,
    "explanation": "The collective noun \"jury\" acts as a single unit here, confirmed by the singular pronoun \"its,\" so it takes the singular auxiliary \"has\"; \"have\" is plural, and \"were\" and \"are\" cannot correctly form \"reached\" in this active sentence.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 241,
    "question": "Although the new smartphone received glowing reviews, ____ short battery life quickly frustrated many of the customers who bought it.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "their",
      "it's",
      "its",
      "its'"
    ],
    "correctAnswer": 2,
    "explanation": "The possessive determiner \"its\" is needed to show that the battery life belongs to the singular \"smartphone\"; \"it's\" means \"it is,\" \"their\" is plural, and \"its'\" is not a standard word.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 242,
    "question": "The judges agreed that no competitor had trained more diligently than ____ over the course of the demanding season.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "her",
      "hers",
      "herself",
      "she"
    ],
    "correctAnswer": 3,
    "explanation": "In formal Standard English \"than\" functions as a conjunction introducing the implied clause \"than she [had trained],\" so the subject pronoun \"she\" is correct; \"her,\" \"hers,\" and \"herself\" cannot serve as the subject of that clause.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 243,
    "question": "The exchange students spent the summer in Lisbon, and by August ____ command of Portuguese had improved dramatically.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "there",
      "they're",
      "their",
      "thier"
    ],
    "correctAnswer": 2,
    "explanation": "The possessive pronoun \"their\" is needed to show that the command of Portuguese belongs to the students; \"there\" refers to place, \"they're\" means \"they are,\" and \"thier\" is a misspelling.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 244,
    "question": "By the time the paramedics reached the scene, the driver ____ from the overturned vehicle without any assistance.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "had escaped",
      "escaped",
      "has escaped",
      "escapes"
    ],
    "correctAnswer": 0,
    "explanation": "The escape was completed before the paramedics arrived, so the past perfect \"had escaped\" is needed to show that one past action finished before another; the simple past, present perfect, and present tense fail to establish this sequence.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 245,
    "question": "The trail guide told us to pack only the essentials for the overnight hike ____ a headlamp, a water filter, and a lightweight tent.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ";",
      ":",
      ",",
      "."
    ],
    "correctAnswer": 1,
    "explanation": "A colon follows the independent clause and correctly introduces the list; a semicolon requires an independent clause after it, a comma cannot introduce this series, and a period would leave the list as a sentence fragment.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 246,
    "question": "Having rehearsed the speech dozens of times, ____ delivered it flawlessly at the awards ceremony.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "the speech",
      "his delivery",
      "Marcus",
      "there"
    ],
    "correctAnswer": 2,
    "explanation": "The introductory participial phrase \"Having rehearsed the speech dozens of times\" must modify the noun that follows, and only a person can rehearse; \"Marcus\" is the logical subject, whereas \"the speech,\" \"his delivery,\" and \"there\" create dangling or illogical modifiers.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 247,
    "question": "The renovation was intended not only to modernize the building's appearance but also ____ its energy efficiency.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "increasing",
      "an increase in",
      "increased",
      "to increase"
    ],
    "correctAnswer": 3,
    "explanation": "The correlative conjunction \"not only...but also\" requires parallel grammatical forms; because the first element is the infinitive \"to modernize,\" the second must be the infinitive \"to increase.\"",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 248,
    "question": "When given the option, the veteran journalist prefers conducting interviews in person ____ them by email.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "than conducting",
      "than to conduct",
      "to conducting",
      "for conducting"
    ],
    "correctAnswer": 2,
    "explanation": "The Standard English idiom is \"prefer X to Y,\" and parallelism requires the gerund \"conducting,\" so \"to conducting\" is correct; \"prefer\" does not take \"than,\" and \"for conducting\" is not idiomatic.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 249,
    "question": "____ the marine biologists tagged dozens of sea turtles and released them back into the lagoon.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "During the three-week expedition the marine biologists",
      "During, the three-week expedition the marine biologists",
      "During the three-week expedition, the marine biologists",
      "During the three-week, expedition the marine biologists"
    ],
    "correctAnswer": 2,
    "explanation": "An introductory prepositional phrase should be followed by a comma that separates it from the main clause: 'During the three-week expedition, the marine biologists...'. Omitting the comma, inserting it after the preposition 'During', or placing it inside the phrase after 'three-week' all violate the convention.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 250,
    "question": "For the mural, the students blended ____ to capture the colors of the evening sky.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "red, orange, and yellow paint",
      "red orange and yellow paint",
      "red, orange and, yellow paint",
      "red orange, and yellow, paint"
    ],
    "correctAnswer": 0,
    "explanation": "Items in a series are separated by commas, including before the conjunction: 'red, orange, and yellow paint.' Dropping the commas, placing a comma after 'and,' or scattering commas incorrectly all break the convention for a series.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 251,
    "question": "The theater company announced that ____ planning to stage three new productions this season.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "its",
      "its'",
      "it",
      "it's"
    ],
    "correctAnswer": 3,
    "explanation": "The sentence needs the contraction 'it's' meaning 'it is': 'it's planning to stage three new productions.' The possessive 'its' and the nonstandard 'its'' are not contractions, and the bare pronoun 'it' leaves the clause without a verb.",
    "difficulty": "easy",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 252,
    "question": "The museum's new wing houses suits of medieval armor____older galleries focus on Renaissance paintings.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ", the",
      "; the",
      " the",
      ": the"
    ],
    "correctAnswer": 1,
    "explanation": "Two independent clauses may be joined by a semicolon: 'medieval armor; the older galleries...'. A comma alone creates a splice, no punctuation creates a fused run-on, and a colon is wrong because the second clause presents a contrasting fact rather than an explanation of the first.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 253,
    "question": "The novel's protagonist, a disgraced astronomer who flees to a remote island____spends the final chapters rebuilding his shattered telescope.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "— spends",
      " spends",
      ", spends",
      "; spends"
    ],
    "correctAnswer": 2,
    "explanation": "The supplement 'a disgraced astronomer who flees to a remote island' opens with a comma, so it must close with a matching comma: 'island, spends.' A dash mismatches the opening comma, omitting the mark leaves the supplement unclosed, and a semicolon cannot pair with a comma to bracket a nonessential element.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 254,
    "question": "The lab technicians followed the same protocol for every sample____label it, log its origin, and store it at four degrees Celsius.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ": label",
      ", label",
      "; label",
      " label"
    ],
    "correctAnswer": 0,
    "explanation": "A colon follows the complete independent clause 'The lab technicians followed the same protocol for every sample' to introduce the list that specifies the protocol. A comma or no punctuation creates a run-on, and a semicolon cannot introduce a list that is not itself an independent clause.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 255,
    "question": "The stack of overdue library books ____ teetering on the very edge of the circulation counter.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "were",
      "have been",
      "are",
      "was"
    ],
    "correctAnswer": 3,
    "explanation": "The subject is the singular noun 'stack,' not the intervening phrase 'of overdue library books,' so it takes the singular verb 'was.' The plural verbs 'were,' 'have been,' and 'are' incorrectly agree with 'books' rather than with the true subject.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 256,
    "question": "The hikers were relieved to discover that ____ campsite lay just beyond the next ridge.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "there",
      "their",
      "they're",
      "there's"
    ],
    "correctAnswer": 1,
    "explanation": "A possessive is needed to modify 'campsite': 'their campsite.' 'There' indicates place, 'they're' means 'they are,' and 'there's' means 'there is,' none of which can show possession here.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 257,
    "question": "By the time the referee blew the final whistle, the underdog team ____ a two-goal lead.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "builds",
      "has built",
      "had built",
      "will build"
    ],
    "correctAnswer": 2,
    "explanation": "The lead was established before the past-tense moment 'blew the final whistle,' so the earlier action takes the past perfect 'had built.' The present 'builds,' present perfect 'has built,' and future 'will build' are all inconsistent with the past-time frame.",
    "difficulty": "medium",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 258,
    "question": "The algorithm sorted the enormous data set in mere seconds____it flagged three anomalies that the researchers had overlooked for weeks.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "; it",
      ", it",
      " it",
      ", and, it"
    ],
    "correctAnswer": 0,
    "explanation": "Two independent clauses require a semicolon (or a period, or a comma plus a conjunction): 'seconds; it flagged...'. A lone comma produces a comma splice, no punctuation produces a fused run-on, and the extra comma after 'and' is not permitted between a conjunction and the clause it introduces.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 259,
    "question": "The economist who first proposed the controversial carbon tax model ____ at the international climate conference next spring.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      ", will speak",
      "will, speak",
      ", will, speak",
      "will speak"
    ],
    "correctAnswer": 3,
    "explanation": "No punctuation should separate the subject 'The economist who first proposed the controversial carbon tax model' from its verb 'will speak.' Each of the other choices inserts an unnecessary comma between the subject and verb or inside the verb phrase itself.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Boundaries"
  },
  {
    "id": 260,
    "question": "Neither of the two proposals submitted by the finance team fully addressed ____ long-term impact on the city's operating budget.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "their",
      "its",
      "it's",
      "there"
    ],
    "correctAnswer": 1,
    "explanation": "The pronoun refers to the singular subject 'Neither,' not to the plural phrase 'two proposals,' so the singular possessive 'its' is required. 'Their' disagrees in number, 'it's' is the contraction 'it is,' and 'there' shows place, not possession.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 261,
    "question": "The architect ____ bold, glass-heavy design won the international competition will personally oversee the renovation.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "who's",
      "whos",
      "whose",
      "who"
    ],
    "correctAnswer": 2,
    "explanation": "The possessive relative pronoun 'whose' is needed to show that the design belongs to the architect: 'the architect whose bold, glass-heavy design won.' 'Who's' means 'who is,' 'whos' is not a word, and 'who' cannot function as a possessive modifier of 'design.'",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 262,
    "question": "If the ancient aqueduct ____ still intact today, engineers could study its remarkable design firsthand.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "were",
      "was",
      "is",
      "would be"
    ],
    "correctAnswer": 0,
    "explanation": "A present contrary-to-fact conditional uses the subjunctive 'were' in the if-clause: 'If the ancient aqueduct were still intact.' The indicative 'was' and 'is' fail to signal the hypothetical, and 'would be' belongs in the main clause, not the if-clause.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 263,
    "question": "The summer internship taught her how to analyze market trends, draft detailed financial reports, and ____ to a room of skeptical investors.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "pitching promising ideas",
      "how she might pitch promising ideas",
      "promising ideas were pitched",
      "pitch promising ideas"
    ],
    "correctAnswer": 3,
    "explanation": "The series follows the pattern 'how to analyze... draft... and pitch,' so parallel structure requires the base verb phrase 'pitch promising ideas.' The gerund 'pitching,' the added clause 'how she might pitch,' and the passive 'promising ideas were pitched' each break the parallelism.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  },
  {
    "id": 264,
    "question": "Rushing to catch the last train of the night, ____.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "the umbrella was left on the platform by Maria",
      "Maria left her umbrella on the platform",
      "there was no time for Maria to grab her umbrella",
      "Maria's umbrella was forgotten on the platform"
    ],
    "correctAnswer": 1,
    "explanation": "The introductory modifier 'Rushing to catch the last train of the night' must describe the subject that immediately follows, and only a person can be rushing, so 'Maria' must be that subject. The other choices make 'the umbrella,' 'there,' or 'Maria's umbrella' the subject, creating a dangling modifier.",
    "difficulty": "hard",
    "domain": "conventions",
    "skill": "Form, Structure, and Sense"
  }
]

function pick(pool: SatRwQuestion[], count: number): SatRwQuestion[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Return `count` questions. When `domain` names a valid domain, draws only
 * from that domain; otherwise draws from the whole bank (mixed). The optional
 * argument is backward-compatible — existing callers pass only a count.
 */
export function getSatRwQuestions(count: number = 10, domain?: string): SatRwQuestion[] {
  const pool = domain && (RW_DOMAINS as readonly string[]).includes(domain)
    ? allQuestions.filter(q => q.domain === domain)
    : allQuestions
  return pick(pool, count)
}
