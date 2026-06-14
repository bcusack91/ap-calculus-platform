export const batchCards: { slug: string; cards: { front: string; back: string; hint?: string }[] }[] = [
  {
    slug: "apes-biomes-succession",
    cards: [
      {
        front: "What is a biome?",
        back: "A biome is a large geographic region characterized by a distinct climate (temperature and precipitation) and the communities of plants and animals adapted to it. Examples include tropical rainforest, desert, tundra, and temperate grassland.",
        hint: "Climate determines it"
      },
      {
        front: "What two abiotic factors most strongly determine which biome occurs in a region?",
        back: "Average annual temperature and annual precipitation. Together they control which plant types can survive, which in turn determines the entire community.",
        hint: "One thermal, one about water"
      },
      {
        front: "What are the defining characteristics of the tropical rainforest biome?",
        back: "Warm temperatures year-round, very high rainfall (often greater than 200 cm/year), little seasonal variation, nutrient-poor soils, and the highest biodiversity of any terrestrial biome.",
        hint: "Hot, wet, near the equator"
      },
      {
        front: "Why is desert soil often nutrient-rich while rainforest soil is nutrient-poor?",
        back: "In rainforests, heavy rain leaches nutrients out of the soil and nutrients are quickly taken up by dense vegetation. In deserts, low rainfall means little leaching, so nutrients accumulate in the soil even though water limits plant growth.",
        hint: "Leaching vs. low rainfall"
      },
      {
        front: "What is the difference between taiga (boreal forest) and tundra?",
        back: "Taiga is dominated by coniferous evergreen trees and has long, cold winters but a real growing season. Tundra is colder still, treeless, has permafrost, and supports only low-growing plants like mosses, lichens, and grasses.",
        hint: "One has conifers, one has permafrost"
      },
      {
        front: "What is permafrost and why is it important?",
        back: "Permafrost is permanently frozen subsoil found in tundra and some taiga. It stores large amounts of carbon; when it thaws (due to warming), it releases CO2 and methane, creating a positive feedback that accelerates climate change.",
        hint: "Frozen ground that stores carbon"
      },
      {
        front: "Define ecological succession.",
        back: "Ecological succession is the gradual, predictable change in the species composition of a community over time following a disturbance or the creation of new habitat.",
        hint: "Communities change in a sequence"
      },
      {
        front: "Distinguish primary succession from secondary succession.",
        back: "Primary succession begins on bare substrate with no soil (e.g., after a glacier retreats or new volcanic rock forms) and starts with pioneer species. Secondary succession begins where soil already exists after a disturbance (e.g., after a fire or abandoned farm field) and proceeds faster.",
        hint: "Soil present or not?"
      },
      {
        front: "What are pioneer species and give an example?",
        back: "Pioneer species are the first organisms to colonize a barren area in primary succession. Lichens and mosses are classic examples; they break down rock and add organic matter to begin soil formation.",
        hint: "First to arrive on bare rock"
      },
      {
        front: "What is a climax community?",
        back: "A climax community is the relatively stable, mature community that an ecosystem tends toward at the end of succession, where species composition remains roughly constant until the next major disturbance.",
        hint: "The stable endpoint"
      },
      {
        front: "Trap: How do r-selected and K-selected species relate to succession stages?",
        back: "Early-succession communities are dominated by r-selected species (fast-growing, many offspring, good dispersers). Late-succession/climax communities are dominated by K-selected species (slow-growing, fewer offspring, strong competitors).",
        hint: "Early = opportunists, late = competitors"
      },
      {
        front: "What is a keystone species, and how does it relate to community structure?",
        back: "A keystone species has a disproportionately large effect on its community relative to its abundance. Removing it causes major changes; for example, sea otters control sea urchins, protecting kelp forests.",
        hint: "Small numbers, big impact"
      },
      {
        front: "Worked example: A forest is clear-cut for farming, then the farm is abandoned. What type of succession follows, and roughly what sequence occurs?",
        back: "Secondary succession occurs because soil remains. The typical sequence is: weeds and grasses (r-selected pioneers), then shrubs and fast-growing trees, then slower-growing hardwoods forming a climax forest.",
        hint: "Soil is still there"
      },
      {
        front: "How does an ecotone differ from a biome?",
        back: "An ecotone is a transition zone where two communities or biomes meet and overlap (e.g., where forest grades into grassland). Ecotones often have high biodiversity (edge effect) because species from both adjacent areas occur there.",
        hint: "A boundary/transition area"
      }
    ]
  },
  {
    slug: "apes-biogeochemical-cycles",
    cards: [
      {
        front: "What is a biogeochemical cycle?",
        back: "A biogeochemical cycle is the movement and recycling of a chemical element (such as carbon, nitrogen, or phosphorus) through living organisms (bio), the geosphere (geo), and chemical reservoirs of the environment.",
        hint: "Elements cycle through life and Earth"
      },
      {
        front: "What is the difference between a reservoir (sink) and a flux in a nutrient cycle?",
        back: "A reservoir (or sink) is a place where a large amount of an element is stored (e.g., oceans store carbon). A flux is the rate of transfer of the element between reservoirs (e.g., photosynthesis moves carbon from atmosphere to plants).",
        hint: "Storage vs. movement"
      },
      {
        front: "Name the main reservoirs of carbon on Earth.",
        back: "The atmosphere (CO2), oceans (dissolved CO2 and bicarbonate), the biosphere (living and dead organisms), soils, and the lithosphere (fossil fuels, limestone, and other sedimentary rock). The lithosphere/ocean hold the largest amounts.",
        hint: "Air, water, life, rock"
      },
      {
        front: "Which two biological processes move carbon between the atmosphere and living organisms?",
        back: "Photosynthesis removes CO2 from the atmosphere and fixes it into organic compounds. Cellular respiration (and decomposition) returns CO2 to the atmosphere by breaking down organic compounds.",
        hint: "Opposites: one takes in, one releases"
      },
      {
        front: "How do humans most significantly alter the carbon cycle?",
        back: "By burning fossil fuels (and deforestation), humans transfer carbon stored in the lithosphere/biosphere into the atmosphere as CO2 far faster than natural sinks remove it, raising atmospheric CO2 and driving climate change.",
        hint: "Combustion and land clearing"
      },
      {
        front: "Why is the nitrogen cycle unique in requiring nitrogen fixation?",
        back: "Atmospheric N2 is the largest nitrogen reservoir but is inert and unusable by most organisms. Nitrogen fixation converts N2 into ammonia/ammonium that organisms can use; without it, nitrogen would be biologically unavailable despite being abundant.",
        hint: "N2 gas is unusable directly"
      },
      {
        front: "Put the key steps of the nitrogen cycle in order: nitrification, fixation, denitrification, ammonification.",
        back: "Fixation (N2 to NH3/NH4+), then nitrification (NH4+ to NO2- to NO3-), then assimilation by organisms, then ammonification (decomposers convert organic N back to NH4+), and finally denitrification (NO3- back to N2 gas).",
        hint: "Start from N2 gas, end at N2 gas"
      },
      {
        front: "What carries out biological nitrogen fixation?",
        back: "Nitrogen-fixing bacteria, including free-living soil bacteria and Rhizobium bacteria living symbiotically in the root nodules of legumes (beans, clover, peas). Lightning and the Haber process (industrial) also fix nitrogen.",
        hint: "Bacteria in legume root nodules"
      },
      {
        front: "Why does the phosphorus cycle lack a significant atmospheric (gaseous) component?",
        back: "Phosphorus has no common stable gas form, so it does not cycle through the atmosphere. It moves slowly through rock weathering, soil, water, and organisms, which makes phosphorus a frequent limiting nutrient in ecosystems.",
        hint: "No gas phase = slow cycle"
      },
      {
        front: "What is eutrophication and which nutrients drive it?",
        back: "Eutrophication is excessive nutrient enrichment of a water body, usually from nitrogen and phosphorus in fertilizer runoff or sewage. It causes algal blooms; when algae die and decompose, oxygen is depleted, killing fish (hypoxic dead zones).",
        hint: "Too much N and P feeds algae"
      },
      {
        front: "Trap: How does cultural eutrophication differ from natural eutrophication?",
        back: "Natural eutrophication is the slow, gradual nutrient enrichment of a lake over centuries. Cultural eutrophication is rapid, human-caused enrichment from agricultural runoff, fertilizers, and sewage, occurring over years instead of millennia.",
        hint: "Speed and cause: human vs. natural"
      },
      {
        front: "Describe the main steps of the hydrologic (water) cycle.",
        back: "Evaporation and transpiration move water vapor to the atmosphere; condensation forms clouds; precipitation returns water to the surface; then runoff, infiltration (recharging groundwater), and collection in oceans/lakes complete the cycle.",
        hint: "Evaporate, condense, precipitate, return"
      },
      {
        front: "What is transpiration and why does it matter in the water cycle?",
        back: "Transpiration is the release of water vapor from plant leaves through stomata. Combined with evaporation (evapotranspiration), it is a major pathway returning water to the atmosphere, especially in forests.",
        hint: "Plants 'breathe out' water vapor"
      },
      {
        front: "Worked example: A farmer over-fertilizes a field next to a river, and a dead zone forms downstream. Explain the chain of events.",
        back: "Excess N and P in runoff enter the river (cultural eutrophication). Nutrients trigger an algal bloom; the algae die and bacteria decompose them, consuming dissolved oxygen. The resulting hypoxia (low oxygen) kills fish and creates a dead zone.",
        hint: "Runoff to bloom to decay to no oxygen"
      }
    ]
  },
  {
    slug: "carbohydrates-biochemistry",
    cards: [
      {
        front: "What is the general empirical formula for a carbohydrate?",
        back: "$(\\\\mathrm{CH_2O})_n$, reflecting roughly a 1:2:1 ratio of carbon to hydrogen to oxygen. For example, glucose is $\\\\mathrm{C_6H_{12}O_6}$.",
        hint: "Carbon plus water, repeated"
      },
      {
        front: "Distinguish monosaccharides, disaccharides, and polysaccharides.",
        back: "Monosaccharides are single sugar units (e.g., glucose, fructose). Disaccharides are two units joined (e.g., sucrose, lactose). Polysaccharides are many units in long chains (e.g., starch, glycogen, cellulose).",
        hint: "One, two, many sugar units"
      },
      {
        front: "What is the difference between an aldose and a ketose?",
        back: "An aldose is a monosaccharide whose carbonyl group is an aldehyde (at the end of the chain), like glucose. A ketose has its carbonyl as a ketone (internal), like fructose.",
        hint: "Aldehyde vs. ketone carbonyl"
      },
      {
        front: "What reaction joins two monosaccharides, and what bond forms?",
        back: "A dehydration (condensation) reaction joins them, removing one water molecule and forming a glycosidic bond between the two sugar units.",
        hint: "Lose water, gain a glycosidic link"
      },
      {
        front: "What reaction breaks a glycosidic bond, and where does it matter biologically?",
        back: "Hydrolysis breaks a glycosidic bond by adding a water molecule. It is how digestion breaks polysaccharides and disaccharides into absorbable monosaccharides.",
        hint: "Add water to split the bond"
      },
      {
        front: "Name the monosaccharide components of sucrose, lactose, and maltose.",
        back: "Sucrose = glucose + fructose. Lactose = glucose + galactose. Maltose = glucose + glucose.",
        hint: "Table sugar, milk sugar, malt sugar"
      },
      {
        front: "Compare starch, glycogen, and cellulose: monomer and function.",
        back: "All are glucose polymers. Starch is the plant energy-storage polymer; glycogen is the animal energy-storage polymer (highly branched, in liver/muscle); cellulose is a structural polymer in plant cell walls.",
        hint: "Store in plants, store in animals, build plant walls"
      },
      {
        front: "Why can humans digest starch but not cellulose, even though both are glucose polymers?",
        back: "Starch uses alpha-glycosidic bonds, which human amylase can hydrolyze. Cellulose uses beta-glycosidic bonds, which human enzymes cannot break; cellulose passes through as dietary fiber.",
        hint: "Alpha vs. beta linkage"
      },
      {
        front: "What is a structural isomer? Give a carbohydrate example.",
        back: "Structural isomers have the same molecular formula but different arrangements of atoms. Glucose, fructose, and galactose are all $\\\\mathrm{C_6H_{12}O_6}$ but differ in structure.",
        hint: "Same formula, different structure"
      },
      {
        front: "What does it mean that glucose and galactose are epimers?",
        back: "Epimers are stereoisomers that differ in configuration at exactly one chiral carbon. Glucose and galactose are identical except for the orientation of the hydroxyl group on carbon 4.",
        hint: "Differ at a single carbon"
      },
      {
        front: "How do glucose molecules typically exist in aqueous solution: linear or ring form?",
        back: "Predominantly in a cyclic (ring) form. In water, the open-chain glucose cyclizes as its carbonyl reacts with a hydroxyl, forming a six-membered pyranose ring; only a small fraction is open-chain.",
        hint: "It closes into a ring in water"
      },
      {
        front: "Trap: Are all carbohydrates 'sugars'?",
        back: "No. Mono- and disaccharides are sugars (sweet, soluble), but polysaccharides like cellulose and starch are carbohydrates that are not sugars; they are large, often insoluble, and not sweet.",
        hint: "Polysaccharides count too"
      },
      {
        front: "Worked example: One molecule of sucrose is digested. What are the products and what type of reaction occurs?",
        back: "Hydrolysis (catalyzed by sucrase) adds a water molecule across the glycosidic bond, breaking sucrose into one glucose and one fructose molecule.",
        hint: "Add water, get the two monomers back"
      },
      {
        front: "What is the primary biological role of carbohydrates besides energy storage?",
        back: "Carbohydrates also provide structural support (cellulose in plants, chitin in arthropod exoskeletons) and serve in cell recognition/signaling as glycoproteins and glycolipids on cell surfaces.",
        hint: "Structure and cell labeling"
      }
    ]
  },
  {
    slug: "apes-biodiversity-conservation",
    cards: [
      {
        front: "Define biodiversity and name its three main levels.",
        back: "Biodiversity is the variety of life. Its three levels are genetic diversity (variation within a species), species diversity (number and abundance of species), and ecosystem diversity (variety of habitats and ecological processes).",
        hint: "Genes, species, ecosystems"
      },
      {
        front: "What are the two components of species diversity?",
        back: "Species richness (the number of different species present) and species evenness (how evenly individuals are distributed among those species). High diversity requires both many species and balanced abundances.",
        hint: "How many vs. how balanced"
      },
      {
        front: "Why is genetic diversity important for a population's survival?",
        back: "Genetic diversity provides the raw material for adaptation. Populations with high genetic diversity are more likely to contain individuals that can survive disease, climate change, or other stressors, reducing extinction risk.",
        hint: "Raw material for natural selection"
      },
      {
        front: "List the main human causes of biodiversity loss (HIPPCO).",
        back: "Habitat destruction/fragmentation, Invasive species, Pollution, Population growth (human), Climate change, and Overexploitation (overharvesting). Habitat loss is generally the leading cause.",
        hint: "Acronym HIPPCO"
      },
      {
        front: "What makes invasive species so harmful to native biodiversity?",
        back: "Invasive species often lack natural predators or controls in the new area, so they reproduce rapidly, outcompete native species for resources, prey on natives, or introduce disease, frequently reducing native biodiversity.",
        hint: "No natural enemies in the new range"
      },
      {
        front: "What is habitat fragmentation and why is it damaging?",
        back: "Habitat fragmentation is the breaking of a continuous habitat into smaller, isolated patches (e.g., by roads or farms). It reduces usable area, blocks migration, increases edge effects, and isolates populations, lowering genetic diversity.",
        hint: "Splitting habitat into islands"
      },
      {
        front: "Distinguish an endangered species from a threatened (vulnerable) species.",
        back: "An endangered species is at high risk of extinction in the near future. A threatened (or vulnerable) species is likely to become endangered if current trends continue but is not yet as imperiled.",
        hint: "Endangered is more severe"
      },
      {
        front: "What is a biodiversity hotspot?",
        back: "A biodiversity hotspot is a region with an exceptionally high number of endemic species (found nowhere else) that is also under significant threat of habitat loss. They are conservation priorities.",
        hint: "Many endemics plus high threat"
      },
      {
        front: "Define an endemic species and explain why endemics are vulnerable.",
        back: "An endemic species is one found naturally only in a single, often limited geographic area. Because their range is small, habitat destruction there can wipe out the entire species, making endemics especially extinction-prone.",
        hint: "Found in only one place"
      },
      {
        front: "What is the difference between in situ and ex situ conservation?",
        back: "In situ conservation protects species in their natural habitat (national parks, reserves, protected areas). Ex situ conservation protects species outside their habitat (zoos, botanical gardens, seed banks, captive breeding).",
        hint: "In place vs. out of place (Latin)"
      },
      {
        front: "Give two ecosystem services that biodiversity provides.",
        back: "Examples include pollination of crops by insects, water purification by wetlands, climate regulation by forests, soil formation, flood control, and provision of medicines and food. These have major economic value.",
        hint: "Free benefits ecosystems give people"
      },
      {
        front: "Trap: Does a higher number of species always mean higher biodiversity?",
        back: "Not necessarily. A community with one dominant species and a few rare ones has low evenness and lower effective diversity than a community with the same richness but balanced abundances. Both richness and evenness matter.",
        hint: "Remember evenness, not just count"
      },
      {
        front: "What is the purpose of the U.S. Endangered Species Act (ESA)?",
        back: "The ESA protects species listed as endangered or threatened and their critical habitat. It prohibits 'taking' (harming/killing) listed species and requires recovery plans, helping species like the bald eagle rebound.",
        hint: "Key U.S. wildlife protection law"
      },
      {
        front: "Worked example: A tropical island loses 50% of its forest to development. Why is the extinction impact likely worse than on a mainland with the same loss?",
        back: "Islands have many endemic species with small ranges and no nearby refuges to recolonize from. The same proportional habitat loss eliminates a larger share of unique species, so island endemics face far higher extinction risk.",
        hint: "Endemics plus nowhere to flee"
      }
    ]
  },
  {
    slug: "multi-digit-multiplication-grade5",
    cards: [
      {
        front: "What does it mean to multiply two multi-digit numbers like 24 x 36?",
        back: "It means adding 24 to itself 36 times (or 36 to itself 24 times). It gives the total when you have 24 groups of 36, or vice versa.",
        hint: "Repeated addition of equal groups"
      },
      {
        front: "In the standard algorithm, what is a 'partial product'?",
        back: "A partial product is the result of multiplying the top number by just one digit of the bottom number. You add the partial products together to get the final answer.",
        hint: "One piece of the multiplication"
      },
      {
        front: "When you multiply by the tens digit in the standard algorithm, why do you write a 0 (or shift left) first?",
        back: "Because the tens digit actually means that many tens, not ones. Writing the 0 places the partial product in the tens column so its place value is correct.",
        hint: "Tens place needs a placeholder"
      },
      {
        front: "Worked example: Use the standard algorithm to find 43 x 5.",
        back: "5 x 3 = 15, write 5 and carry 1. 5 x 4 = 20, plus the carried 1 = 21. So 43 x 5 = 215.",
        hint: "Multiply each digit, carry as needed"
      },
      {
        front: "What is the area (box) model for multiplying 23 x 14?",
        back: "Break each number by place value: 23 = 20 + 3 and 14 = 10 + 4. Multiply each pair: 20x10=200, 20x4=80, 3x10=30, 3x4=12. Add: 200+80+30+12 = 322.",
        hint: "Split into tens and ones, then add the boxes"
      },
      {
        front: "How do you quickly multiply a number by 10, 100, or 1000?",
        back: "Add that many zeros to the end of the number (or shift each digit left). For example, 47 x 100 = 4700 because each digit moves two places to the left.",
        hint: "Count the zeros"
      },
      {
        front: "Common trap: A student computes 36 x 24 and gets 216. Why is that wrong?",
        back: "216 is only 36 x 6 or one partial product; they forgot to multiply by the tens digit and add. The correct answer is 864 (36x4 = 144 plus 36x20 = 720).",
        hint: "Did they use BOTH digits of 24?"
      },
      {
        front: "Estimate 312 x 48 to check a calculation.",
        back: "Round to 300 x 50 = 15,000. The exact answer (14,976) should be close to this estimate, confirming it is reasonable.",
        hint: "Round each factor, then multiply"
      },
      {
        front: "Worked example: Find 124 x 6 using the standard algorithm.",
        back: "6 x 4 = 24, write 4 carry 2. 6 x 2 = 12, plus 2 = 14, write 4 carry 1. 6 x 1 = 6, plus 1 = 7. Answer: 744.",
        hint: "Work right to left, carry each time"
      },
      {
        front: "How can you multiply 25 x 16 using the distributive property mentally?",
        back: "Split 16 into 10 + 6: 25 x 10 = 250 and 25 x 6 = 150, then add 250 + 150 = 400.",
        hint: "Break a factor into friendly parts"
      },
      {
        front: "When multiplying a 3-digit by a 2-digit number, how many partial products do you add?",
        back: "Two partial products: one from multiplying by the ones digit and one from multiplying by the tens digit (shifted one place left). You then add them for the final product.",
        hint: "One per digit of the smaller number"
      },
      {
        front: "Worked example: Multiply 213 x 32 using partial products.",
        back: "213 x 2 = 426. 213 x 30 = 6390. Add: 426 + 6390 = 6816.",
        hint: "Ones partial, then tens partial, then add"
      },
      {
        front: "Why does estimating before multiplying help you avoid mistakes?",
        back: "An estimate tells you the rough size of the answer. If your exact answer is far from the estimate, you likely made an error (such as a missing partial product or a misplaced digit).",
        hint: "A sanity check on your answer"
      }
    ]
  },
  {
    slug: "multiplying-decimals-grade5",
    cards: [
      {
        front: "What is the rule for placing the decimal point when multiplying two decimals?",
        back: "Count the total number of decimal places in both factors. The product must have that same total number of decimal places, counted from the right.",
        hint: "Add up the decimal places in the factors"
      },
      {
        front: "Worked example: Find 0.4 x 0.6.",
        back: "Ignore the points: 4 x 6 = 24. Each factor has 1 decimal place, so 1 + 1 = 2 places in the answer: 0.24.",
        hint: "Multiply 4 x 6, then place 2 decimals"
      },
      {
        front: "Why is 0.4 x 0.6 smaller than both 0.4 and 0.6?",
        back: "Multiplying by a number less than 1 gives a result smaller than the original. Since both factors are less than 1, the product (0.24) is smaller than each factor.",
        hint: "Times a number under 1 shrinks it"
      },
      {
        front: "How do you multiply a decimal by 10, 100, or 1000?",
        back: "Move the decimal point one place to the right for each zero. For example, 3.45 x 100 moves the point two places: 345.",
        hint: "Decimal moves right, count the zeros"
      },
      {
        front: "Worked example: Find 1.2 x 3 (a decimal times a whole number).",
        back: "12 x 3 = 36. There is 1 decimal place total (only in 1.2), so the answer is 3.6.",
        hint: "Whole number has 0 decimal places"
      },
      {
        front: "Common trap: A student says 0.5 x 0.5 = 2.5. What went wrong?",
        back: "They placed the decimal incorrectly. 5 x 5 = 25, and there are 2 decimal places (1 + 1), so the answer is 0.25, not 2.5.",
        hint: "Two decimal places, not one"
      },
      {
        front: "How can estimation help you check a decimal product?",
        back: "Round each factor to a whole number and multiply. For 4.8 x 2.1, estimate 5 x 2 = 10, so the exact answer (10.08) should be near 10, confirming the decimal point is placed correctly.",
        hint: "Round to whole numbers first"
      },
      {
        front: "Worked example: Find 2.5 x 0.3.",
        back: "25 x 3 = 75. Total decimal places: 1 + 1 = 2, so the answer is 0.75.",
        hint: "Multiply 25 x 3, place 2 decimals"
      },
      {
        front: "When multiplying decimals, why do we line up the digits on the right (not the decimal points)?",
        back: "Unlike addition, decimal multiplication does not require aligning decimal points first. You multiply as if the numbers were whole numbers, then place the decimal in the product by counting decimal places.",
        hint: "Multiplication is different from addition here"
      },
      {
        front: "Worked example: Find 0.12 x 0.5.",
        back: "12 x 5 = 60. Decimal places: 2 + 1 = 3, so count three from the right: 0.060, which is 0.06.",
        hint: "Three decimal places, then drop a trailing zero"
      },
      {
        front: "If a product comes out as 0.080, how should you write it?",
        back: "You can drop the trailing zero and write 0.08; trailing zeros after the last nonzero digit do not change the value.",
        hint: "Trailing zeros are optional"
      },
      {
        front: "Worked example: A book costs $4.25 and you buy 3. What is the total?",
        back: "4.25 x 3: compute 425 x 3 = 1275, with 2 decimal places, giving $12.75.",
        hint: "Money usually has 2 decimal places"
      },
      {
        front: "Why does multiplying 6.5 x 10 move the decimal right but adding 10 does not?",
        back: "Multiplying by 10 makes the number ten times larger, shifting every digit to a higher place value (65). Adding 10 only increases the value by 10 (to 16.5), changing the tens digit, not the decimal placement.",
        hint: "Scaling vs. just adding"
      }
    ]
  },
  {
    slug: "multi-digit-division-grade5",
    cards: [
      {
        front: "Name the four parts of a division problem.",
        back: "The dividend is the number being divided, the divisor is the number you divide by, the quotient is the answer, and the remainder is what is left over.",
        hint: "Dividend, divisor, quotient, remainder"
      },
      {
        front: "What does the remainder represent in a division problem?",
        back: "The remainder is the amount left over that is too small to be divided evenly by the divisor. It must always be less than the divisor.",
        hint: "What is left, smaller than the divisor"
      },
      {
        front: "List the repeating steps of long division.",
        back: "Divide, multiply, subtract, bring down, and repeat. You divide the current digits by the divisor, multiply, subtract to find the leftover, bring down the next digit, and continue.",
        hint: "D-M-S-B, then repeat"
      },
      {
        front: "Worked example: Divide 84 by 4 using long division.",
        back: "4 goes into 8 two times (2 x 4 = 8, subtract 0), bring down 4. 4 goes into 4 once (1 x 4 = 4). Quotient is 21 with no remainder.",
        hint: "Tens place first, then ones"
      },
      {
        front: "Worked example: Divide 75 by 6.",
        back: "6 into 7 is 1 (6), subtract to get 1, bring down 5 to make 15. 6 into 15 is 2 (12), subtract to get 3. Answer: 12 remainder 3.",
        hint: "Don't forget the remainder"
      },
      {
        front: "How can you check the answer to a division problem with a remainder?",
        back: "Multiply the quotient by the divisor and add the remainder; it should equal the dividend. (quotient x divisor) + remainder = dividend.",
        hint: "Multiply back and add the remainder"
      },
      {
        front: "Common trap: When dividing 412 by 4, a student writes 13 instead of 103. What happened?",
        back: "They forgot to write a 0 in the quotient. 4 goes into 1 zero times, so a 0 belongs in the tens place: the correct quotient is 103.",
        hint: "Put a 0 when the divisor won't fit"
      },
      {
        front: "Worked example: Divide 936 by 4.",
        back: "4 into 9 is 2 (8), remainder 1, bring down 3 to make 13. 4 into 13 is 3 (12), remainder 1, bring down 6 to make 16. 4 into 16 is 4. Answer: 234.",
        hint: "Work left to right, digit by digit"
      },
      {
        front: "How do you estimate a quotient like 245 divided by 5 to check reasonableness?",
        back: "Use compatible numbers: 250 divided by 5 = 50, so the answer should be near 50. (The exact answer is 49.)",
        hint: "Round to numbers that divide evenly"
      },
      {
        front: "Worked example: Divide 156 by 12 (two-digit divisor).",
        back: "12 into 15 is 1 (12), remainder 3, bring down 6 to make 36. 12 into 36 is 3 (36), remainder 0. Answer: 13.",
        hint: "Estimate how many 12s fit each step"
      },
      {
        front: "When a word problem has a remainder, how do you decide what to do with it?",
        back: "It depends on the question: sometimes you round the quotient up (e.g., number of buses needed), sometimes you drop the remainder (e.g., full boxes you can fill), and sometimes the remainder itself is the answer (e.g., leftovers).",
        hint: "Read what the problem is really asking"
      },
      {
        front: "Worked example: 50 students go on a trip; each van holds 8. How many vans are needed?",
        back: "50 divided by 8 = 6 remainder 2. You need a 7th van for the 2 leftover students, so 7 vans are needed (round up).",
        hint: "Leftover people still need a van"
      },
      {
        front: "How is division related to multiplication?",
        back: "Division is the inverse of multiplication. If 6 x 7 = 42, then 42 divided by 7 = 6 and 42 divided by 6 = 7. Knowing multiplication facts makes division faster.",
        hint: "Opposite operations / fact families"
      }
    ]
  },
  {
    slug: "converting-units-grade5",
    cards: [
      {
        front: "When converting from a larger unit to a smaller unit, do you multiply or divide?",
        back: "You multiply, because it takes more of the smaller unit to make up the same amount. For example, 3 meters = 3 x 100 = 300 centimeters.",
        hint: "Bigger to smaller means more pieces"
      },
      {
        front: "When converting from a smaller unit to a larger unit, do you multiply or divide?",
        back: "You divide, because it takes fewer of the larger unit. For example, 500 cm = 500 divided by 100 = 5 meters.",
        hint: "Smaller to bigger means fewer pieces"
      },
      {
        front: "How many centimeters are in 1 meter, and millimeters in 1 centimeter?",
        back: "1 meter = 100 centimeters, and 1 centimeter = 10 millimeters. So 1 meter = 1000 millimeters.",
        hint: "Metric uses powers of 10"
      },
      {
        front: "How many meters are in a kilometer?",
        back: "1 kilometer = 1000 meters. To convert kilometers to meters, multiply by 1000; to convert meters to kilometers, divide by 1000.",
        hint: "Kilo means thousand"
      },
      {
        front: "Worked example: Convert 4.5 kilometers to meters.",
        back: "Multiply by 1000 (larger to smaller unit): 4.5 x 1000 = 4500 meters.",
        hint: "km to m, so multiply"
      },
      {
        front: "List the U.S. customary length conversions: inches, feet, yards.",
        back: "1 foot = 12 inches, 1 yard = 3 feet, and 1 mile = 5280 feet. These are not powers of 10, so memorize them.",
        hint: "12, 3, and 5280"
      },
      {
        front: "How many ounces are in a pound, and pounds in a ton?",
        back: "1 pound = 16 ounces and 1 ton = 2000 pounds (in the U.S. customary system).",
        hint: "16 and 2000"
      },
      {
        front: "What are the customary capacity conversions for cups, pints, quarts, and gallons?",
        back: "1 cup = 8 fluid ounces, 2 cups = 1 pint, 2 pints = 1 quart, and 4 quarts = 1 gallon. So 1 gallon = 16 cups.",
        hint: "8, 2, 2, 4"
      },
      {
        front: "Worked example: Convert 2 gallons to quarts.",
        back: "1 gallon = 4 quarts, and gallons are larger, so multiply: 2 x 4 = 8 quarts.",
        hint: "Gallons to quarts, multiply by 4"
      },
      {
        front: "Worked example: Convert 240 minutes to hours.",
        back: "1 hour = 60 minutes, and hours are larger, so divide: 240 divided by 60 = 4 hours.",
        hint: "Minutes to hours, divide by 60"
      },
      {
        front: "Common trap: A student converts 3 feet to inches and gets 0.25. What went wrong?",
        back: "They divided instead of multiplying. Feet are larger than inches, so you multiply: 3 x 12 = 36 inches.",
        hint: "Larger to smaller: multiply, don't divide"
      },
      {
        front: "Worked example: A ribbon is 2.5 meters long. How many centimeters is that?",
        back: "Meters to centimeters: multiply by 100. 2.5 x 100 = 250 centimeters.",
        hint: "Shift the decimal two places right"
      },
      {
        front: "How can you check whether your converted answer is reasonable?",
        back: "Compare unit sizes: if you converted to a smaller unit, the number should get larger; if to a larger unit, the number should get smaller. If it goes the wrong way, you used the wrong operation.",
        hint: "Smaller unit means a bigger number"
      },
      {
        front: "Worked example: Convert 36 inches to feet.",
        back: "1 foot = 12 inches, and feet are larger, so divide: 36 divided by 12 = 3 feet.",
        hint: "Inches to feet, divide by 12"
      }
    ]
  }
];
