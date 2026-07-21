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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
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
    "domain": "information-ideas"
  },
  {
    "id": 31,
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
    "domain": "craft-structure"
  },
  {
    "id": 32,
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
    "domain": "craft-structure"
  },
  {
    "id": 33,
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
    "domain": "craft-structure"
  },
  {
    "id": 34,
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
    "domain": "craft-structure"
  },
  {
    "id": 35,
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
    "domain": "craft-structure"
  },
  {
    "id": 36,
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
    "domain": "craft-structure"
  },
  {
    "id": 37,
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
    "domain": "craft-structure"
  },
  {
    "id": 38,
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
    "domain": "craft-structure"
  },
  {
    "id": 39,
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
    "domain": "craft-structure"
  },
  {
    "id": 40,
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
    "domain": "craft-structure"
  },
  {
    "id": 41,
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
    "domain": "craft-structure"
  },
  {
    "id": 42,
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
    "domain": "craft-structure"
  },
  {
    "id": 43,
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
    "domain": "craft-structure"
  },
  {
    "id": 44,
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
    "domain": "craft-structure"
  },
  {
    "id": 45,
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
    "domain": "craft-structure"
  },
  {
    "id": 46,
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
    "domain": "craft-structure"
  },
  {
    "id": 47,
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
    "domain": "craft-structure"
  },
  {
    "id": 48,
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
    "domain": "craft-structure"
  },
  {
    "id": 49,
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
    "domain": "craft-structure"
  },
  {
    "id": 50,
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
    "domain": "craft-structure"
  },
  {
    "id": 51,
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
    "domain": "craft-structure"
  },
  {
    "id": 52,
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
    "domain": "craft-structure"
  },
  {
    "id": 53,
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
    "domain": "craft-structure"
  },
  {
    "id": 54,
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
    "domain": "craft-structure"
  },
  {
    "id": 55,
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
    "domain": "craft-structure"
  },
  {
    "id": 56,
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
    "domain": "craft-structure"
  },
  {
    "id": 57,
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
    "domain": "craft-structure"
  },
  {
    "id": 58,
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
    "domain": "craft-structure"
  },
  {
    "id": 59,
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
    "domain": "craft-structure"
  },
  {
    "id": 60,
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
    "domain": "craft-structure"
  },
  {
    "id": 61,
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
    "domain": "expression"
  },
  {
    "id": 62,
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
    "domain": "expression"
  },
  {
    "id": 63,
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
    "domain": "expression"
  },
  {
    "id": 64,
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
    "domain": "expression"
  },
  {
    "id": 65,
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
    "domain": "expression"
  },
  {
    "id": 66,
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
    "domain": "expression"
  },
  {
    "id": 67,
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
    "domain": "expression"
  },
  {
    "id": 68,
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
    "domain": "expression"
  },
  {
    "id": 69,
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
    "domain": "expression"
  },
  {
    "id": 70,
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
    "domain": "expression"
  },
  {
    "id": 71,
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
    "domain": "expression"
  },
  {
    "id": 72,
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
    "domain": "expression"
  },
  {
    "id": 73,
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
    "domain": "expression"
  },
  {
    "id": 74,
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
    "domain": "expression"
  },
  {
    "id": 75,
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
    "domain": "expression"
  },
  {
    "id": 76,
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
    "domain": "expression"
  },
  {
    "id": 77,
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
    "domain": "expression"
  },
  {
    "id": 78,
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
    "domain": "expression"
  },
  {
    "id": 79,
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
    "domain": "expression"
  },
  {
    "id": 80,
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
    "domain": "expression"
  },
  {
    "id": 81,
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
    "domain": "expression"
  },
  {
    "id": 82,
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
    "domain": "expression"
  },
  {
    "id": 83,
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
    "domain": "expression"
  },
  {
    "id": 84,
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
    "domain": "expression"
  },
  {
    "id": 85,
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
    "domain": "expression"
  },
  {
    "id": 86,
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
    "domain": "expression"
  },
  {
    "id": 87,
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
    "domain": "expression"
  },
  {
    "id": 88,
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
    "domain": "expression"
  },
  {
    "id": 89,
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
    "domain": "expression"
  },
  {
    "id": 90,
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
    "domain": "expression"
  },
  {
    "id": 91,
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
    "domain": "conventions"
  },
  {
    "id": 92,
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
    "domain": "conventions"
  },
  {
    "id": 93,
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
    "domain": "conventions"
  },
  {
    "id": 94,
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
    "domain": "conventions"
  },
  {
    "id": 95,
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
    "domain": "conventions"
  },
  {
    "id": 96,
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
    "domain": "conventions"
  },
  {
    "id": 97,
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
    "domain": "conventions"
  },
  {
    "id": 98,
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
    "domain": "conventions"
  },
  {
    "id": 99,
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
    "domain": "conventions"
  },
  {
    "id": 100,
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
    "domain": "conventions"
  },
  {
    "id": 101,
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
    "domain": "conventions"
  },
  {
    "id": 102,
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
    "domain": "conventions"
  },
  {
    "id": 103,
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
    "domain": "conventions"
  },
  {
    "id": 104,
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
    "domain": "conventions"
  },
  {
    "id": 105,
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
    "domain": "conventions"
  },
  {
    "id": 106,
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
    "domain": "conventions"
  },
  {
    "id": 107,
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
    "domain": "conventions"
  },
  {
    "id": 108,
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
    "domain": "conventions"
  },
  {
    "id": 109,
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
    "domain": "conventions"
  },
  {
    "id": 110,
    "question": "The award recognized ____ groundbreaking research on coral reefs.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "options": [
      "Chen's and Alvarez's",
      "Chen and Alvarez",
      "Chen and Alvarez'",
      "Chen and Alvarez's"
    ],
    "correctAnswer": 3,
    "explanation": "For joint possession of a single body of research, only the last name takes the possessive: \"Chen and Alvarez's research.\" \"Chen's and Alvarez's\" signals separate research, \"Chen and Alvarez\" shows no possession, and \"Chen and Alvarez'\" uses an incorrect apostrophe form.",
    "difficulty": "medium",
    "domain": "conventions"
  },
  {
    "id": 111,
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
    "domain": "conventions"
  },
  {
    "id": 112,
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
    "domain": "conventions"
  },
  {
    "id": 113,
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
    "domain": "conventions"
  },
  {
    "id": 114,
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
    "domain": "conventions"
  },
  {
    "id": 115,
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
    "domain": "conventions"
  },
  {
    "id": 116,
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
    "domain": "conventions"
  },
  {
    "id": 117,
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
    "domain": "conventions"
  },
  {
    "id": 118,
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
    "domain": "conventions"
  },
  {
    "id": 119,
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
    "domain": "conventions"
  },
  {
    "id": 120,
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
    "domain": "conventions"
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
