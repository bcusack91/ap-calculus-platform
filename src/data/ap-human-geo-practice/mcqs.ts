import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * 60 stimulus-based AP Human Geography MCQs modeled on the College Board
 * AP Human Geography practice exam.
 *
 * Distribution by CB unit:
 *   Unit 1 (Thinking Geographically)         6
 *   Unit 2 (Population & Migration)          9
 *   Unit 3 (Cultural Patterns & Processes)   9
 *   Unit 4 (Political Patterns & Processes)  9
 *   Unit 5 (Agriculture & Rural Land Use)    9
 *   Unit 6 (Cities & Urban Land Use)        10
 *   Unit 7 (Industrial & Economic Dev.)      8
 */
export const MCQS: MCQItem[] = [
  /* ============== UNIT 1: THINKING GEOGRAPHICALLY (6) ============== */
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'A neighborhood Pizza Palace defines its delivery boundary as a 4-mile radius from the storefront. Within that boundary, all addresses receive the same 30-minute delivery guarantee.\n\nThe delivery zone described above is best classified as which of the following types of region?',
    options: [
      'A functional (nodal) region organized around a central point of activity.',
      'A formal (uniform) region defined by a single shared cultural trait.',
      'A perceptual (vernacular) region defined by popular cultural identity.',
      'A physical region defined by climate and landform boundaries.',
    ],
    correctAnswer: 0,
    explanation:
      'Functional regions are organized around a node and bounded by interaction. The delivery area centers on the storefront. Formal regions share a measurable trait (e.g., wheat-growing); perceptual regions are mental constructs (e.g., "the Midwest").',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'Image (described): A small-scale map of the world labeled at 1:50,000,000.\n\nCompared to a 1:24,000 topographic map of the same area, the world map will most likely show:',
    options: [
      'Less detail across a much larger area.',
      'Greater detail across a smaller area.',
      'The same level of detail across a larger area.',
      'Greater detail across the same-sized area.',
    ],
    correctAnswer: 0,
    explanation:
      'Small-scale maps cover large areas with low detail; large-scale maps cover small areas with high detail. 1:50,000,000 is small-scale.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'GPS-enabled fitness apps now allow users to upload geotagged running routes that aggregate into heat maps used by city planners to design new bike paths.\n\nThe data described above are best categorized as:',
    options: [
      'Volunteered geographic information (VGI) integrated into geospatial analysis.',
      'Federal census data collected by mandatory household survey.',
      'Remote-sensing data acquired by passive satellite imagery.',
      'Confidential survey data unavailable for any planning purpose.',
    ],
    correctAnswer: 0,
    explanation:
      'User-uploaded geotagged data is VGI. Census data is government-collected; remote sensing comes from satellites/aircraft; the heat maps are explicitly used by planners, ruling out option 4.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      '"Cultural traits diffuse outward from a hearth such that the most innovative ideas are first adopted in the largest cities and only later in smaller towns."\n— Geographer\'s description of one diffusion process\n\nThe pattern described is best characterized as:',
    options: [
      'Hierarchical diffusion through an urban network.',
      'Contagious diffusion through direct personal contact.',
      'Stimulus diffusion preserving the underlying idea but altering its form.',
      'Relocation diffusion via the physical movement of populations.',
    ],
    correctAnswer: 0,
    explanation:
      'Diffusion that follows urban hierarchy (largest to smallest) is hierarchical. Contagious diffusion radiates outward by proximity, stimulus alters the trait, and relocation requires migration.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'Distance decay describes the principle that:',
    options: [
      'Interaction between two places diminishes as the distance between them increases.',
      'Map projections become less accurate further from the equator in any case.',
      'The cost of producing goods rises with the latitude of the producing region.',
      'Population growth rates decline as countries acquire greater wealth.',
    ],
    correctAnswer: 0,
    explanation:
      'Distance decay = friction of distance: interaction (trade, migration, communication) declines with distance. The other options describe unrelated phenomena.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-thinking-geographically',
    question:
      'A Mercator projection is used by an online global navigation service that primarily serves shipping companies plotting compass-bearing routes between ports.\n\nThe Mercator projection is well suited to this purpose because it:',
    options: [
      'Preserves true compass direction along straight lines, simplifying nautical navigation.',
      'Preserves the true relative area of every continent on the projected map.',
      'Eliminates all distortion of shape, area, distance, and direction simultaneously.',
      'Centers the map on the South Pole to highlight Southern Hemisphere shipping.',
    ],
    correctAnswer: 0,
    explanation:
      'Mercator preserves direction (rhumb lines as straight lines) — its historical use in nautical navigation. It heavily distorts area near the poles; no projection eliminates all distortion.',
  },

  /* ============== UNIT 2: POPULATION & MIGRATION (9) ============== */
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Population pyramid (described): A pyramid with a very wide base, rapidly narrowing sides, and a small narrow top. The 0–4 cohort is the largest, and very few people are over 65.\n\nThe pyramid most likely represents a country in which stage of the Demographic Transition Model?',
    options: [
      'Stage 2 — high birth rates with rapidly falling death rates.',
      'Stage 1 — high birth and death rates producing little net growth.',
      'Stage 4 — low birth and death rates yielding zero population growth.',
      'Stage 5 — birth rates below death rates producing population decline.',
    ],
    correctAnswer: 0,
    explanation:
      'A wide base + narrow top = very high birth rates with falling death rates → Stage 2 (rapid growth). Stage 1 has wider tops; stages 4–5 have narrow bases.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Country A has an arithmetic density of 350 people per square kilometer but a physiological density of 1,800 people per square kilometer.\n\nThe difference between Country A\'s two density measures is best explained by which of the following?',
    options: [
      'A relatively small share of the country\'s land is arable.',
      'The country\'s population is concentrated almost entirely in coastal cities.',
      'The country exports the majority of its agricultural production each year.',
      'The country has a far larger total area than its near neighbors.',
    ],
    correctAnswer: 0,
    explanation:
      'Physiological density = population ÷ arable land. A high physiological density relative to arithmetic density means little of the land is farmable (e.g., Egypt, Japan).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      '"In the late nineteenth century, most migrants moved short distances; long-distance migrants headed primarily to large cities; each migration produced a counter-flow; and women dominated short-distance migration while men dominated long-distance migration."\n— Paraphrase of E. G. Ravenstein, "The Laws of Migration," 1885\n\nRavenstein\'s "laws" most directly support which of the following claims about migration?',
    options: [
      'Migration follows predictable distance, gender, and economic patterns rather than random movement.',
      'Migration is overwhelmingly forced rather than driven by individual economic decisions.',
      'Migration in the nineteenth century was confined to the North American continent.',
      'Migration consists almost entirely of single-step rural-to-urban movement by men.',
    ],
    correctAnswer: 0,
    explanation:
      'Ravenstein argued migration follows recognizable patterns (distance decay, gendered short/long distance, counter-flows). The other options misrepresent his argument.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Between 2010 and 2020, more than two million Syrians crossed international borders into Turkey, Lebanon, Jordan, and the European Union.\n\nUnder international law, the Syrians described above are best classified as:',
    options: [
      'Refugees fleeing armed conflict and persecution across an international border.',
      'Internally displaced persons relocating within their country of origin.',
      'Voluntary economic migrants pursuing employment opportunities abroad.',
      'Step migrants moving in stages within a single national labor market.',
    ],
    correctAnswer: 0,
    explanation:
      'Refugees cross international borders fleeing conflict/persecution. IDPs remain inside their country; economic migrants leave voluntarily for work.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Thomas Malthus argued in 1798 that population grows geometrically while food supply grows arithmetically, predicting recurrent crises.\n\nWhich of the following best explains why Malthusian predictions of mass famine in industrialized societies have NOT been fully realized in the twentieth century?',
    options: [
      'Technological improvements in agriculture (Green Revolution) sharply increased per-acre yields.',
      'Total world population stopped growing in the early twentieth century.',
      'Total cultivated land area has expanded at a faster rate than population growth.',
      'Industrialized nations have generally returned to subsistence agriculture since 1900.',
    ],
    correctAnswer: 0,
    explanation:
      'Green Revolution technologies (high-yield seeds, fertilizer, irrigation, mechanization) dramatically raised yields. Population continued growing; cultivated area did not expand fast enough; industrialized countries did not de-industrialize.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Country B has a total fertility rate of 1.3, a median age of 47, and a dependency ratio in which the elderly portion now exceeds the youth portion.\n\nThe demographic profile described above most likely produces which of the following challenges?',
    options: [
      'Rising costs for pensions and elder care alongside a shrinking working-age tax base.',
      'A youth bulge straining primary education and entry-level labor markets.',
      'Rapid in-migration overwhelming national housing supply.',
      'A surplus of children producing high school-overcrowding rates.',
    ],
    correctAnswer: 0,
    explanation:
      'Sub-replacement fertility (TFR ≈ 1.3) plus high median age = aging society with rising pension/elder-care burdens (Japan, Italy). The other options describe high-fertility or in-migrating societies.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      '"As economies move from agricultural through industrial to service-based economies, women\'s labor-force participation rises and family size declines."\n\nWhich of the following statistical patterns most directly supports the claim above?',
    options: [
      'A strong negative correlation between female labor-force participation rates and total fertility rates across countries.',
      'A strong positive correlation between female labor-force participation rates and total fertility rates across countries.',
      'A complete absence of relationship between female educational attainment and family size in any country.',
      'A consistent rise in fertility rates as women\'s educational attainment rises across all regions.',
    ],
    correctAnswer: 0,
    explanation:
      'Negative correlation: as women\'s workforce participation and education rise, TFR falls — a core finding in demographic transition theory.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'Between 1910 and 1970, roughly six million African Americans moved from the rural South to the urban North and West of the United States.\n\nThe migration described above is best understood as a combination of:',
    options: [
      'Push factors (Jim Crow violence and sharecropping debt) and pull factors (industrial wartime employment).',
      'Push factors (industrial pollution in northern cities) and pull factors (rural southern land grants).',
      'Government-coordinated relocation under federal civilian-resettlement orders.',
      'Voluntary repatriation under the auspices of the American Colonization Society.',
    ],
    correctAnswer: 0,
    explanation:
      'The Great Migration combined southern push factors with northern industrial pull factors during WWI and WWII. The other options invert or misidentify the actors.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-population-migration',
    question:
      'A guest-worker program brings young men from Country X to Country Y for 2–4 year contracts in construction. After their contracts expire, most return to Country X.\n\nThe arrangement described above is best classified as a form of:',
    options: [
      'Transnational circular migration that maintains strong ties to the home country.',
      'Permanent chain migration leading to large-scale family reunification abroad.',
      'Forced migration produced by armed conflict in the home country.',
      'Internal step migration within a single national labor market.',
    ],
    correctAnswer: 0,
    explanation:
      'Contract-based, return-oriented international labor migration is circular/transnational (e.g., Gulf state guest workers). The other options misclassify it.',
  },

  /* ============== UNIT 3: CULTURAL PATTERNS & PROCESSES (9) ============== */
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'A coffee chain originally based in Seattle now operates more than 35,000 stores in 80 countries, adapting menu items (e.g., matcha lattes in Japan, masala chai in India) to local tastes.\n\nThe coffee chain\'s expansion best illustrates which of the following processes?',
    options: [
      'Cultural globalization combined with glocalization (local adaptation of a global brand).',
      'Cultural relativism limiting any cross-border movement of consumer products.',
      'Cultural divergence in which a global firm refuses any local menu modification.',
      'Cultural extinction in which local food traditions are entirely replaced by the brand.',
    ],
    correctAnswer: 0,
    explanation:
      'Glocalization = global brands adapting to local cultures. The other options describe non-adaptation or wholesale replacement, which the example contradicts.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Indo-European, Sino-Tibetan, Niger-Congo, and Afro-Asiatic are examples of:',
    options: [
      'Language families grouping related languages descended from a common proto-language.',
      'Lingua francas that allow trade between speakers of different native languages.',
      'Pidgin languages that emerged in colonial port cities for limited communication.',
      'Creoles that originated as plantation languages and became mother tongues over time.',
    ],
    correctAnswer: 0,
    explanation:
      'These are language families (largest classification). Lingua francas, pidgins, and creoles are different linguistic categories.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Buddhism, Christianity, and Islam are commonly classified as universalizing religions, while Hinduism and Judaism are classified as ethnic religions.\n\nThe primary distinction between universalizing and ethnic religions rests on:',
    options: [
      'Whether the religion actively seeks converts from across cultural and ethnic boundaries.',
      'Whether the religion uses a sacred text written in any non-vernacular language.',
      'Whether the religion has more than one million adherents anywhere in the world.',
      'Whether the religion originated more than two thousand years ago in a single hearth.',
    ],
    correctAnswer: 0,
    explanation:
      'Universalizing religions seek converts globally; ethnic religions are tied to a specific people. The other options describe traits unrelated to the universal/ethnic distinction.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Map (described): A choropleth map of the United States in which counties are shaded by the percentage of residents identifying with evangelical Protestant denominations. The Bible Belt — stretching from the Carolinas through Texas — is heavily shaded.\n\nThe shaded "Bible Belt" is best classified as:',
    options: [
      'A vernacular (perceptual) region defined by shared cultural identity.',
      'A functional region organized around a single denominational headquarters.',
      'A formal political region with legally defined administrative boundaries.',
      'A physical region defined by climate and landform features.',
    ],
    correctAnswer: 0,
    explanation:
      'The "Bible Belt" is a perceptual/vernacular region — not legally defined and not organized around a single node. Religious identity in the region is real but informally bounded.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Hip-hop music originated in the Bronx in the 1970s and within two decades had local performers in Tokyo, Berlin, Lagos, and São Paulo, often blending with local musical traditions.\n\nThe global spread of hip-hop best illustrates which of the following diffusion patterns?',
    options: [
      'Contagious and stimulus diffusion combined with hierarchical diffusion through major cities.',
      'Pure relocation diffusion through migrant communities only.',
      'Pure hierarchical diffusion confined to the largest cities, with no local adaptation.',
      'Stimulus diffusion that wholly replaces all original musical features in every region.',
    ],
    correctAnswer: 0,
    explanation:
      'Hip-hop spread via contagious + hierarchical pathways (through media networks and cities) and via stimulus diffusion (local musical adaptations). The other options describe only one channel or overstate replacement.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'A neighborhood in San Francisco contains a Chinese-language daily newspaper, more than 50 Cantonese-speaking restaurants, a Buddhist temple, and several traditional pharmacies.\n\nThe neighborhood described above best illustrates:',
    options: [
      'An ethnic enclave produced by chain migration and the maintenance of cultural institutions.',
      'A homogenized urban district with no internal cultural differentiation.',
      'A planned new town built by federal urban-renewal authorities since the 1980s.',
      'A gentrified arts district displacing all longstanding cultural institutions.',
    ],
    correctAnswer: 0,
    explanation:
      'Ethnic enclaves form through chain migration and sustained cultural institutions (Chinatown). The other options invert the pattern.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'In the 19th and early 20th centuries, French colonial authorities in West Africa required schools to teach exclusively in French and discouraged the teaching of indigenous languages.\n\nThe policy described above is best characterized as:',
    options: [
      'A form of cultural imperialism that suppressed indigenous languages in favor of the colonizer\'s.',
      'A form of cultural relativism that valued all colonial-era languages equally.',
      'A reciprocal language exchange in which French and Wolof received equal classroom time.',
      'A revitalization program that preserved indigenous African oral literatures intact.',
    ],
    correctAnswer: 0,
    explanation:
      'Imperial language policy suppressing indigenous languages is cultural imperialism. The other options invert the historical record.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'A traditional folk-dance festival held in a small Andean town since pre-Columbian times has begun attracting tens of thousands of international tourists, prompting organizers to add a paid grandstand and corporate sponsorship.\n\nThe development described above best illustrates which of the following tensions?',
    options: [
      'Commodification of folk culture for global tourism, which can both preserve and transform local traditions.',
      'A complete extinction of all local cultural practice in favor of corporate entertainment.',
      'A return to pre-globalization isolation in which the town now refuses any outside visitors.',
      'A permanent prohibition by international authorities on monetizing any indigenous festival.',
    ],
    correctAnswer: 0,
    explanation:
      'Tourism-driven commodification both sustains funding for cultural practices AND alters them. The other options describe extreme outcomes that the example does not depict.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-cultural-patterns',
    question:
      'Religious data table (described): Country X is 95% Sunni Muslim and 4% Shia Muslim; Country Y is 89% Shia Muslim and 9% Sunni Muslim. Both countries share a long international border.\n\nWhich of the following two countries are most consistent with this description?',
    options: [
      'Saudi Arabia and Iran.',
      'Egypt and Israel.',
      'Turkey and Greece.',
      'Pakistan and Afghanistan.',
    ],
    correctAnswer: 0,
    explanation:
      'Saudi Arabia is overwhelmingly Sunni; Iran is overwhelmingly Shia; the two share regional rivalry across the Persian Gulf. The other pairings do not fit the Sunni/Shia profile described.',
  },

  /* ============== UNIT 4: POLITICAL PATTERNS & PROCESSES (9) ============== */
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'In 1884–85, European powers met at the Berlin Conference and divided the African continent into colonial territories whose boundaries paid little attention to existing ethnic, linguistic, or religious distributions.\n\nThe long-term political consequences of the boundaries drawn at the Berlin Conference most directly include which of the following?',
    options: [
      'Persistent ethnic conflict and weak state legitimacy in many post-independence African states.',
      'A general decline of cross-border trade across the African continent after independence.',
      'A successful continental federation that united all sub-Saharan African states by 1970.',
      'The voluntary redrawing of African political boundaries to match ethnic regions in 1960.',
    ],
    correctAnswer: 0,
    explanation:
      'Superimposed colonial boundaries that ignored ethnic geography produced lasting conflict and governance problems after independence. The other options invert the record.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'The United Kingdom has devolved significant legislative authority to the Scottish Parliament, the Welsh Senedd, and the Northern Ireland Assembly while retaining overall sovereignty in Westminster.\n\nThe arrangement described above best illustrates:',
    options: [
      'Devolution within a unitary state, producing some features of a federal system without altering ultimate sovereignty.',
      'A complete transition from a unitary to a federal state with formally co-equal subnational units.',
      'A confederal arrangement in which Westminster is subordinate to the Scottish Parliament.',
      'A return to fully centralized government in which Westminster directly administers all four nations.',
    ],
    correctAnswer: 0,
    explanation:
      'The UK remains a unitary state with devolved (delegated) authority — neither fully federal nor confederal. The other options misclassify the arrangement.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'Boundary on a map (described): A nearly perfectly straight east-west line drawn at 49°N forms the international boundary between two large North American states for nearly 2,000 kilometers.\n\nThe boundary described above is best classified as:',
    options: [
      'A geometric (artificial) boundary unrelated to physical or cultural features.',
      'A physical boundary following a major mountain range or river.',
      'A relict boundary that no longer functions politically.',
      'A subsequent boundary drawn after settlement to follow cultural divisions.',
    ],
    correctAnswer: 0,
    explanation:
      'A boundary along a line of latitude (49°N — the U.S./Canada border) is geometric. Physical boundaries follow landforms; relict boundaries are no longer functional; subsequent boundaries follow existing cultural divides.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'In 1648, European states signed the Peace of Westphalia, which ended the Thirty Years\' War and established the principle of sovereignty over a defined territory and noninterference in the internal affairs of other states.\n\nThe Peace of Westphalia is best understood as:',
    options: [
      'The foundational moment of the modern state system based on territorial sovereignty.',
      'The first formal recognition of a global government with authority over all European states.',
      'A papal decree that subordinated all secular rulers to the Catholic Church after 1648.',
      'A treaty among colonial powers that divided the Americas into Spanish and Portuguese spheres.',
    ],
    correctAnswer: 0,
    explanation:
      'Westphalia (1648) is the canonical origin of the modern sovereign-state system. The other options misidentify it.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'A long, narrow extension of one state\'s territory that reaches between two or more other states is best described as a(n):',
    options: [
      'Prorupted state.',
      'Fragmented state.',
      'Perforated state.',
      'Compact state.',
    ],
    correctAnswer: 0,
    explanation:
      'Prorupted states have a long extension (e.g., Thailand\'s southern peninsula). Fragmented = multiple separated parts; perforated = surrounds another state; compact = roughly circular.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'Map (described): A U.S. state legislative district shaped like a long, narrow snake, winding for more than 100 miles to connect distant majority-ethnic neighborhoods while excluding nearby suburban areas.\n\nThe district described above is most consistent with which of the following?',
    options: [
      'A racial gerrymander, which the U.S. Supreme Court has ruled unconstitutional in cases such as Shaw v. Reno (1993).',
      'A compact district drawn under strict Voting Rights Act compactness and contiguity rules.',
      'A neutral district drawn by an independent redistricting commission using only census data.',
      'A district shape required by the U.S. Constitution\'s Article I requirements for House districts.',
    ],
    correctAnswer: 0,
    explanation:
      'Highly irregular districts drawn primarily on racial lines were struck down in Shaw v. Reno. The other options describe districts that look very different from the one in the prompt.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'In 2014, Russia annexed Crimea following a contested referendum; the United Nations General Assembly subsequently passed Resolution 68/262 affirming Ukraine\'s territorial integrity.\n\nThe events described above are best understood in the context of which of the following geographic concepts?',
    options: [
      'Tensions between state sovereignty and irredentism (claims to ethnic kin in another state).',
      'A successful application of supranational decolonization through UN trusteeship.',
      'The voluntary decolonization of a former European overseas colony.',
      'A peaceful internal devolution within a single sovereign state.',
    ],
    correctAnswer: 0,
    explanation:
      'Russia\'s claim to ethnic Russians in Crimea is irredentism, conflicting with the Westphalian principle of territorial sovereignty. The other options misframe the conflict.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'The European Union, the African Union, NAFTA/USMCA, and ASEAN are all examples of:',
    options: [
      'Supranational organizations through which states pool sovereignty for shared political or economic goals.',
      'Subnational governments operating within a single federal state.',
      'Confederations in which member states have surrendered all military sovereignty.',
      'Colonial trusteeships administered by a single former imperial power.',
    ],
    correctAnswer: 0,
    explanation:
      'Supranational organizations involve voluntary pooling of sovereignty for shared goals. The other options misclassify them.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-political-patterns',
    question:
      'Map (described): A landlocked country in central Asia is bounded by five other states, with no direct access to any ocean or sea.\n\nThe country\'s landlocked status creates which of the following geographic challenges?',
    options: [
      'Higher transport costs and dependence on neighboring states for access to international shipping.',
      'A guarantee of freedom from any cross-border political conflict.',
      'A strong comparative advantage in maritime fishing industries.',
      'Direct access to multiple competing global naval powers.',
    ],
    correctAnswer: 0,
    explanation:
      'Landlocked states bear higher transport costs and depend on transit agreements with neighbors. The other options invert the geography.',
  },

  /* ============== UNIT 5: AGRICULTURE & RURAL LAND USE (9) ============== */
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Slash-and-burn cultivation is most commonly practiced in:',
    options: [
      'Tropical rainforest regions where soils are quickly depleted of nutrients.',
      'Temperate grasslands where soils are deep and rich in organic matter.',
      'Arid deserts where soils are limited by lack of water.',
      'Polar tundra where soils freeze for most of the year.',
    ],
    correctAnswer: 0,
    explanation:
      'Slash-and-burn (swidden) agriculture is found in tropical rainforests, where ash temporarily fertilizes nutrient-poor soils. The other biomes use very different agricultural systems.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      '"As distance from the central market increases, more land-extensive uses (such as livestock grazing) replace land-intensive uses (such as dairy or market gardening)."\n— Paraphrase of an early-19th-century agricultural land-use model\n\nThe model described above is best associated with which of the following geographers?',
    options: [
      'Johann Heinrich von Thünen, who modeled agricultural land use around a central market.',
      'Walter Christaller, who developed central-place theory of urban hierarchies.',
      'Ernst Ravenstein, who proposed the laws of migration in the late 19th century.',
      'Thomas Malthus, who argued that population grows faster than food supply.',
    ],
    correctAnswer: 0,
    explanation:
      'The Von Thünen model explains concentric agricultural land-use rings around a market based on transportation cost and land intensity. The other geographers worked on different problems.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'The Green Revolution of the mid-20th century introduced high-yielding varieties of wheat, rice, and maize, along with chemical fertilizers, pesticides, and irrigation.\n\nA significant criticism of the Green Revolution\'s impact in developing countries is that it:',
    options: [
      'Increased aggregate yields but also raised input costs that disadvantaged smallholder farmers.',
      'Reduced aggregate food production across India and Mexico in the 1960s and 1970s.',
      'Eliminated the need for any fossil-fuel inputs in commercial agriculture worldwide.',
      'Was rejected by all major Asian governments and never implemented at scale.',
    ],
    correctAnswer: 0,
    explanation:
      'Green Revolution yields rose, but chemical inputs and irrigation favored larger, capitalized farmers. The other options contradict the historical record.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Rural settlement (described): Houses are clustered together in a small village, with surrounding fields divided into long, narrow strips that radiate outward from the village center.\n\nThe pattern described above is most consistent with:',
    options: [
      'A nucleated settlement with a long-lot or open-field land-division system common in pre-modern Europe.',
      'A dispersed settlement with section/township grid lots like those of the U.S. Midwest.',
      'A linear settlement strung along a single road or river without subdivided fields.',
      'A planned suburban development using cul-de-sacs and uniform lot sizes.',
    ],
    correctAnswer: 0,
    explanation:
      'Clustered village + strip fields is the classic open-field/long-lot system (pre-enclosure England, Quebec, French Louisiana). The U.S. Midwest grid is dispersed and rectangular.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'The expansion of soybean production in the Brazilian Cerrado between 1990 and 2020 has been associated with deforestation, biodiversity loss, and emissions of greenhouse gases.\n\nThe developments described are best understood as part of:',
    options: [
      'The environmental consequences of expanding commercial agriculture into previously natural ecosystems.',
      'A federal program of organic, low-impact farming that has reduced deforestation since 1990.',
      'The traditional subsistence agriculture practiced by indigenous Amazonian communities.',
      'A general decline of Brazilian agricultural output to pre-1980 levels.',
    ],
    correctAnswer: 0,
    explanation:
      'Commercial soy expansion has driven deforestation in the Cerrado and Amazon. The other options misrepresent the actors and trends.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Vertical farming, hydroponics, and rooftop greenhouses in urban areas best represent which of the following developments?',
    options: [
      'Innovations in urban agriculture that aim to reduce food miles and supply local consumers.',
      'Subsistence farming practices that have replaced commercial agriculture in major cities.',
      'A return to plantation-style monoculture in dense urban downtowns.',
      'Federal land-redistribution programs that have transferred farmland to urban governments.',
    ],
    correctAnswer: 0,
    explanation:
      'These are urban agriculture innovations responding to food-mile and sustainability concerns. The other options misclassify them.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      '"Genetically modified (GM) crops engineered for herbicide resistance and insect resistance accounted for more than 90 percent of soybean and cotton acreage in the United States by 2020."\n\nA major debate over GM agriculture in this period most directly concerns:',
    options: [
      'Trade-offs among productivity, ecological risk, corporate seed-patent control, and consumer choice.',
      'Whether the United States produces any soybean or cotton at all in commercial quantities.',
      'A complete federal prohibition on the planting of any genetically modified crop within U.S. borders.',
      'The historical use of GM crops in pre-Columbian agriculture across the Americas.',
    ],
    correctAnswer: 0,
    explanation:
      'GM debates center on yields, environmental effects, corporate patenting (e.g., Monsanto/Bayer), and labeling. The other options describe nonexistent realities.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'The First Agricultural Revolution (Neolithic), the Second Agricultural Revolution (industrial-era), and the Third Agricultural Revolution (Green Revolution + GM technology) are best characterized as:',
    options: [
      'Three successive transformations of the productivity, technology, and social organization of agriculture.',
      'Three identical events that occurred simultaneously in every world region.',
      'Three stages of a single Malthusian collapse that has reduced food production in modern times.',
      'A series of regressions away from agriculture toward purely hunter-gatherer subsistence.',
    ],
    correctAnswer: 0,
    explanation:
      'The three agricultural revolutions are sequential transformations of agricultural productivity and social organization. The other options invert the historical record.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-agriculture',
    question:
      'Map (described): A choropleth map of the contiguous United States showing the percentage of farmland devoted to corn and soybean. Iowa, Illinois, Indiana, Minnesota, and Nebraska are heavily shaded.\n\nThe pattern shown above most directly reflects which of the following?',
    options: [
      'The U.S. Corn Belt — a regional agricultural specialization shaped by climate, soil, and federal commodity policy.',
      'A region of subsistence farming in which households grow only enough corn for domestic consumption.',
      'A region of plantation agriculture exporting corn primarily to nineteenth-century European cities.',
      'A region of urban agriculture practiced almost entirely on rooftop greenhouses.',
    ],
    correctAnswer: 0,
    explanation:
      'The shaded states are the Corn Belt — commercial monoculture supported by climate, deep prairie soils, and federal commodity programs. The other options misdescribe its scale and purpose.',
  },

  /* ============== UNIT 6: CITIES & URBAN LAND USE (10) ============== */
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'A megalopolis is best defined as:',
    options: [
      'A continuous chain of metropolitan areas (such as Boston–Washington, D.C.).',
      'A single primate city with no neighboring large urban areas.',
      'A small town that serves only as a regional market for surrounding villages.',
      'A planned suburb constructed at the edge of a single metropolitan area.',
    ],
    correctAnswer: 0,
    explanation:
      'A megalopolis is a continuous urbanized region linking multiple metro areas (BosWash, Tokaido). The other options describe smaller or different settlement types.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      '"A primate city is so disproportionately large and economically dominant that no other city in the country approaches its population or economic influence."\n\nWhich of the following pairs is the best example of a primate city and its country?',
    options: [
      'Buenos Aires and Argentina.',
      'New York City and the United States.',
      'Mumbai and India.',
      'Berlin and Germany.',
    ],
    correctAnswer: 0,
    explanation:
      'Buenos Aires holds about a third of Argentina\'s population and dominates economically — a textbook primate city. The U.S., India, and Germany have multiple large competing cities, so none of those qualifies.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'Walter Christaller\'s central-place theory predicts that:',
    options: [
      'Settlements of different sizes will arrange themselves in a hierarchy of nested market areas.',
      'All urban settlements within a country will reach the same population size over time.',
      'Cities will eventually replace agricultural land entirely in any developed country.',
      'Industrial activity will concentrate in the smallest settlements rather than the largest.',
    ],
    correctAnswer: 0,
    explanation:
      'Central-place theory describes a hierarchy of nested settlements based on threshold and range. The other options invert the prediction.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'The concentric zone, sector, and multiple-nuclei models are all examples of:',
    options: [
      'Models of internal urban land-use structure developed primarily in the 20th-century United States.',
      'Models of intercity migration developed in 19th-century Europe by Ernst Ravenstein.',
      'Models of agricultural land use around a central market town developed by Von Thünen.',
      'Models of the global supply chain developed by 21st-century logistics firms.',
    ],
    correctAnswer: 0,
    explanation:
      'These three are classic American models of internal urban structure (Burgess, Hoyt, Harris-Ullman). The other options are unrelated models.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'In many Latin American cities, lower-income residents often live in unplanned squatter settlements ("favelas," "barriadas") on the urban periphery, while wealthier residents live closer to the city core.\n\nThe spatial pattern described above is best modeled by which of the following?',
    options: [
      'The Latin American (Griffin–Ford) city model, in which a wealthy spine extends from the CBD outward.',
      'The classic concentric-zone (Burgess) model developed for early-20th-century Chicago.',
      'The North American sector (Hoyt) model with manufacturing along rail corridors.',
      'The Sub-Saharan African city model with three CBDs and a colonial overlay.',
    ],
    correctAnswer: 0,
    explanation:
      'The Griffin–Ford Latin American model places wealth along an elite spine and squatter settlements at the periphery — opposite of Burgess. The other options describe different city models.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'Between 2000 and 2020, a U.S. central-city neighborhood saw average rents triple, longstanding residents displaced, and new high-end coffee shops, art galleries, and condominiums replace older businesses and rental units.\n\nThe process described above is best identified as:',
    options: [
      'Gentrification accompanied by displacement of pre-existing low-income residents.',
      'Suburban sprawl reducing density on the metropolitan fringe.',
      'Urban decline producing widespread vacancy and disinvestment in the neighborhood.',
      'Federal urban-renewal demolition followed by public-housing reconstruction.',
    ],
    correctAnswer: 0,
    explanation:
      'Rising rents, displacement, and upscale retail/residential investment in central neighborhoods is gentrification. The other options describe opposite or unrelated processes.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'Suburban sprawl in the late 20th-century United States is most directly associated with which of the following federal policies?',
    options: [
      'Subsidized mortgage insurance (FHA, VA) and the Federal-Aid Highway Act of 1956.',
      'A federal moratorium on automobile production lasting from 1945 to 1970.',
      'A federal program of mandatory mass-transit construction in every U.S. metro area.',
      'A federal prohibition on single-family residential construction outside city limits.',
    ],
    correctAnswer: 0,
    explanation:
      'FHA/VA mortgage insurance and the Interstate Highway Act subsidized auto-oriented suburban growth. The other options describe policies that did not occur.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'A region in which a series of interconnected metropolitan areas form a continuously developed urban corridor — such as the area extending from Boston through New York and Philadelphia to Washington, D.C. — is best termed a:',
    options: [
      'Megalopolis (or megaregion).',
      'Single primate city.',
      'Edge city.',
      'Small market town.',
    ],
    correctAnswer: 0,
    explanation:
      'Continuous chains of metro areas are megalopolises (Jean Gottmann, 1961). The other options describe smaller or different units.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      '"New Urbanism" planning principles include mixed-use zoning, walkable street grids, transit-oriented development, and traditional neighborhood design.\n\nThese principles are best understood as a response to which of the following postwar U.S. trends?',
    options: [
      'Single-use zoning, automobile dependence, and low-density suburban sprawl.',
      'A general absence of automobile ownership in U.S. metropolitan areas after 1970.',
      'A federal mandate that all new housing be built within transit corridors after 1950.',
      'A nationwide collapse of suburban housing demand during the 1990s.',
    ],
    correctAnswer: 0,
    explanation:
      'New Urbanism is explicitly a response to single-use zoning and sprawl. The other options describe trends that did not occur.',
  },
  {
    type: 'mcq',
    topic: 'unit-6-cities-urban',
    question:
      'In 1900, roughly 13 percent of the world\'s population lived in cities; by 2020, more than 55 percent did.\n\nThe trend described above is best characterized as:',
    options: [
      'A global urban transition driven by industrialization, migration, and natural urban growth.',
      'A general retreat from cities in favor of rural and agricultural living after 1900.',
      'A trend confined exclusively to the United States, with no comparable pattern in any other country.',
      'A short-term fluctuation in which urban population shares returned to 1900 levels by 2020.',
    ],
    correctAnswer: 0,
    explanation:
      'The global urban transition is one of the defining demographic shifts of the modern era. The other options invert it.',
  },

  /* ============== UNIT 7: INDUSTRIAL & ECONOMIC DEVELOPMENT (8) ============== */
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Walt Rostow\'s "stages of economic growth" model proposes that countries pass through five stages from a traditional society to an "age of high mass consumption."\n\nA significant critique of Rostow\'s model is that it:',
    options: [
      'Assumes a single Western developmental pathway and underestimates global structural inequalities.',
      'Predicts that all countries will remain at the same level of development indefinitely.',
      'Was developed primarily for traditional societies in the eighteenth century, not the twentieth.',
      'Treats colonial trade relations as the central driver of economic divergence between countries.',
    ],
    correctAnswer: 0,
    explanation:
      'Rostow\'s model is widely criticized for assuming a Western linear path and ignoring colonial and dependency dynamics — those are dependency theorists\' (Frank, Wallerstein) emphases.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Immanuel Wallerstein\'s world-systems theory categorizes countries into core, semi-periphery, and periphery based on:',
    options: [
      'Their position within the global capitalist division of labor.',
      'Their geographic distance from the equator measured in kilometers.',
      'Their average annual rainfall in millimeters.',
      'Their stage in the Demographic Transition Model alone.',
    ],
    correctAnswer: 0,
    explanation:
      'Wallerstein\'s tripartite classification is based on position within the global capitalist division of labor. The other options describe unrelated metrics.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'The Human Development Index (HDI) combines which of the following indicators?',
    options: [
      'Life expectancy, education (mean and expected years of schooling), and gross national income per capita.',
      'Total population, agricultural output, and military expenditures only.',
      'Trade balance, foreign-direct-investment inflows, and currency exchange rates only.',
      'Average annual rainfall, arable-land share, and total coastline length only.',
    ],
    correctAnswer: 0,
    explanation:
      'HDI = life expectancy + education + GNI per capita. The other options list unrelated metrics.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Maquiladoras along the U.S.–Mexico border are foreign-owned factories that import components duty-free, assemble or manufacture goods using Mexican labor, and export the finished products to the United States.\n\nThe maquiladora system is best understood as an example of:',
    options: [
      'International division of labor in which production is geographically separated to exploit comparative cost advantages.',
      'Subsistence agriculture in which workers grow crops for direct household consumption.',
      'Federal protectionism in which Mexico bars all imports from the United States.',
      'Pure agglomeration in which all related industries cluster in a single global city.',
    ],
    correctAnswer: 0,
    explanation:
      'Maquiladoras illustrate the international division of labor: low-cost assembly in Mexico, components from elsewhere, sales in the U.S. The other options misclassify the model.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Alfred Weber\'s least-cost theory of industrial location identifies three primary cost factors that influence where a manufacturer chooses to locate.\n\nThose three factors are best identified as:',
    options: [
      'Transportation, labor, and agglomeration costs.',
      'Climate, soil quality, and altitude.',
      'Cultural identity, religion, and language.',
      'Voter registration, political party, and tax bracket.',
    ],
    correctAnswer: 0,
    explanation:
      'Weber\'s industrial-location model identifies transport, labor, and agglomeration as the three primary cost factors. The other options describe unrelated variables.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'Microcredit lending — small loans (often $50–$500) provided to low-income borrowers (often women) without traditional collateral — is most directly associated with:',
    options: [
      'Bottom-up development efforts to expand small-scale entrepreneurship in low-income regions.',
      'Top-down structural-adjustment programs imposed by the IMF and the World Bank in the 1980s.',
      'Free-trade agreements among large industrialized economies in the 1990s.',
      'A federal U.S. program to subsidize automobile loans in domestic suburban areas.',
    ],
    correctAnswer: 0,
    explanation:
      'Microcredit (e.g., Grameen Bank) is a bottom-up development strategy targeting small-scale entrepreneurs. The other options describe very different policy frameworks.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'A "post-Fordist" production system is best characterized by:',
    options: [
      'Flexible production, just-in-time inventory, and globally distributed supply chains.',
      'Mass production of identical goods on a single long assembly line in one country.',
      'A return to handicraft production by individual artisans without machinery.',
      'A federally mandated five-year national production plan covering all industries.',
    ],
    correctAnswer: 0,
    explanation:
      'Post-Fordism = flexibility, JIT, global supply chains. Fordism was mass production of identical goods. The other options describe unrelated systems.',
  },
  {
    type: 'mcq',
    topic: 'unit-7-industrial-economic',
    question:
      'The Gender Inequality Index (GII) measures gender-based disadvantages across reproductive health, empowerment, and labor-market participation.\n\nA country with a high GII relative to its peers most likely shows which of the following patterns?',
    options: [
      'High maternal mortality, low female parliamentary representation, and low female labor-force participation.',
      'High female educational attainment combined with universal access to reproductive health care.',
      'Equal male and female parliamentary representation paired with full labor-market parity.',
      'A complete absence of any gender-based legal restrictions on employment or political office.',
    ],
    correctAnswer: 0,
    explanation:
      'Higher GII = greater gender inequality across health, empowerment, and labor metrics. The other options describe low-GII (more egalitarian) profiles.',
  },
]
