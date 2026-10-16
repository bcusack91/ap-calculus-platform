/**
 * AP Biology diagnostic v2 — Unit 8: Ecology (CED 8.1–8.7).
 * Four data sets (Paramecium growth with and without a competitor, a
 * caterpillar energy budget, stream nitrate after forest clearing, a
 * choice-chamber chi-square) plus standalone items. No r/K selection,
 * survivorship types or succession (not in the Fall 2025 CED).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-u8-s1',
    title: 'Growth of a Paramecium population',
    kind: 'graph',
    content:
      'Ten cells of a Paramecium species were added to each of two identical culture flasks that were given the same amount of bacteria as food every day. Flask 1 held only this species. Flask 2 also held 10 cells of a second Paramecium species that eats the same bacteria. The number of cells of the first species in each flask was counted every 2 days (Figure 1).',
    chart: {
      title: 'Figure 1. Number of cells of the first Paramecium species (per flask) over 16 days',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'days',
      yLabel: 'Number of cells',
      yUnit: 'cells per flask',
      xValues: [0, 2, 4, 6, 8, 10, 12, 14, 16],
      yValues: [10, 32, 92, 214, 356, 446, 482, 495, 498],
      seriesLabel: 'Flask 1 (alone)',
      comparisonSeries: [{ label: 'Flask 2 (with second species)', yValues: [10, 30, 73, 132, 173, 191, 196, 199, 200] }],
    },
  },
  {
    id: 'bio-u8-s2',
    title: 'Energy budget of a grasshopper',
    kind: 'table',
    content:
      'Researchers followed the chemical energy in the grass eaten by a group of grasshoppers over one week.\n\n' +
      '| Energy | Amount (kJ) |\n' +
      '|---|---|\n' +
      '| Energy in grass eaten | 500 |\n' +
      '| Energy lost in feces | 200 |\n' +
      '| Energy used in cellular respiration | 240 |\n' +
      '| Energy stored in new body tissue (growth and eggs) | 60 |',
  },
  {
    id: 'bio-u8-s3',
    title: 'Stream nitrate after forest clearing',
    kind: 'graph',
    content:
      'Two neighboring forested watersheds drain into separate streams. At the start of year 0, all the trees in watershed B were cut and left where they fell, and regrowth of plants was prevented with herbicide for three years; watershed A was left untouched. Researchers measured the nitrate (NO₃⁻) concentration in each stream (Figure 2).',
    chart: {
      title: 'Figure 2. Average nitrate concentration in each stream, by year',
      kind: 'line',
      xLabel: 'Year after cutting',
      xUnit: 'years',
      yLabel: 'Nitrate concentration',
      yUnit: 'mg/L',
      xValues: [-1, 0, 1, 2, 3, 4],
      yValues: [0.9, 1.0, 1.0, 0.9, 1.0, 1.0],
      seriesLabel: 'Watershed A (uncut)',
      comparisonSeries: [{ label: 'Watershed B (cut)', yValues: [0.9, 1.0, 38, 56, 45, 30] }],
    },
  },
  {
    id: 'bio-u8-s4',
    title: 'Choice chamber with pill bugs',
    kind: 'table',
    content:
      'Students placed 20 pill bugs in the center of a two-sided chamber. One side held damp paper towel and the other dry paper towel; the two sides were otherwise identical. The students counted the pill bugs on each side every 2 minutes.\n\n' +
      '| Time (min) | Pill bugs on damp side | Pill bugs on dry side |\n' +
      '|---|---|---|\n' +
      '| 0 | 10 | 10 |\n' +
      '| 2 | 12 | 8 |\n' +
      '| 4 | 12 | 8 |\n' +
      '| 6 | 14 | 6 |\n' +
      '| 8 | 13 | 7 |\n' +
      '| 10 | 15 | 5 |\n\n' +
      'Chi-square critical values at p = 0.05: df = 1, 3.84; df = 2, 5.99.',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-u8-s1-q1',
    stimulusId: 'bio-u8-s1',
    unit: 'unit-8',
    topicSlug: 'population-dynamics',
    difficulty: 'easy',
    stem: 'Based on Figure 1, what is the approximate carrying capacity of flask 1 for the first species?',
    options: ['About 500 cells', 'About 200 cells', 'About 250 cells', 'About 1,000 cells'],
    correctIndex: 0,
    explanation:
      'In flask 1 the population levels off just below 500 cells (495 on day 14 and 498 on day 16), so the flask supports about 500 cells. 200 is where the population levels off in flask 2, with the competitor. 250 is half of the carrying capacity, where growth is fastest. 1,000 is never reached.',
  },
  {
    id: 'bio-u8-s1-q2',
    stimulusId: 'bio-u8-s1',
    unit: 'unit-8',
    topicSlug: 'population-dynamics',
    difficulty: 'medium',
    stem: 'In flask 1, during which 2-day interval did the population add the most cells?',
    options: ['Days 6 to 8', 'Days 0 to 2', 'Days 2 to 4', 'Days 14 to 16'],
    correctIndex: 0,
    explanation:
      'The increases are 22 (days 0–2), 60 (2–4), 122 (4–6), 142 (6–8), 90 (8–10) and smaller after that, so the most cells were added between days 6 and 8, when the population (214 to 356) was near half the carrying capacity. Early on the population is small, so even a high per-capita rate adds few cells. Near the carrying capacity (days 14–16), growth almost stops.',
  },
  {
    id: 'bio-u8-s1-q3',
    stimulusId: 'bio-u8-s1',
    unit: 'unit-8',
    topicSlug: 'community-ecology',
    difficulty: 'hard',
    stem: 'Which conclusion is best supported by comparing flask 1 and flask 2?',
    options: [
      'Competition with the second species for food lowered the number of cells that the flask could support.',
      'The second species preyed on the first species, which is why the first species stopped growing on day 2.',
      'The second species released a chemical that killed the first species, so the first species died out.',
      'Competition with the second species raised the first species’ growth rate, so it reached its limit sooner.',
    ],
    correctIndex: 0,
    explanation:
      'Both flasks received the same food, but with a competitor eating the same bacteria, the first species leveled off at about 200 cells instead of 500. Interspecific competition reduced the resources available to it and so lowered its carrying capacity. The first species kept growing after day 2 and never died out, so neither predation that stopped its growth nor a chemical that killed it fits the data. Its growth in flask 2 was slower, not faster, at every point after day 0.',
  },
  {
    id: 'bio-u8-s2-q1',
    stimulusId: 'bio-u8-s2',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'medium',
    stem: 'What percentage of the energy in the grass the grasshoppers ate was stored in new tissue that a predator could eat?',
    options: ['12%', '20%', '40%', '80%'],
    correctIndex: 0,
    explanation:
      'New tissue holds 60 kJ of the 500 kJ eaten: 60 ÷ 500 = 0.12, or 12%. 20% divides by the 300 kJ actually absorbed (500 − 200) instead of the energy eaten. 40% is the share lost in feces. 80% divides the energy used in respiration by the energy absorbed (240 ÷ 300).',
  },
  {
    id: 'bio-u8-s2-q2',
    stimulusId: 'bio-u8-s2',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'hard',
    stem: 'A group of mice of the same total mass eats food with the same 500 kJ of energy and, like the grasshoppers, loses 200 kJ in feces. Based on the table, about how much energy would the mice most likely store in new tissue?',
    options: [
      'Much less than 60 kJ, because mice spend more of the 300 kJ they absorb on respiration to stay warm.',
      'About 60 kJ, because the mice absorb the same 300 kJ and energy flow does not depend on body heat.',
      'Much more than 60 kJ, because the mice’s warm bodies let them turn more of the 300 kJ into tissue.',
      'About 120 kJ, because mice digest food faster and so turn twice the grasshoppers’ share into tissue.',
    ],
    correctIndex: 0,
    explanation:
      'Both groups absorb 500 − 200 = 300 kJ. The grasshoppers, as ectotherms, spend 240 kJ on respiration and store 60 kJ. Mice are endotherms: they generate most of their body heat by metabolism, so a much larger share of the 300 kJ goes to cellular respiration and is lost as heat, leaving much less than 60 kJ for new tissue. How a consumer gets its body heat strongly affects its energy budget. Body heat is costly to maintain rather than making growth more efficient. Digestion speed does not change how absorbed energy is divided; the stem fixes absorption at 300 kJ, and endotherms keep a smaller, not larger, share for tissue.',
  },
  {
    id: 'bio-u8-s3-q1',
    stimulusId: 'bio-u8-s3',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'medium',
    stem: 'Which explanation best accounts for the rise in nitrate in the stream from watershed B?',
    options: [
      'With no living plants to take up nitrate, nitrate released by decomposition washed into the stream.',
      'The cut trees released large amounts of nitrogen gas, which dissolved in the stream water and became nitrate.',
      'Cutting the trees killed the decomposers in the soil, so nitrate built up because it was no longer broken down.',
      'The herbicide was made of nitrate, so spraying it on the watershed added nitrate directly to the stream water.',
    ],
    correctIndex: 0,
    explanation:
      'Decomposers broke down the dead trees and leaves, releasing nitrogen that soil bacteria convert to nitrate. Normally living plants take up most of that nitrate, but with plants killed and regrowth prevented, nitrate was not absorbed and was carried by water into the stream. Trees store nitrogen in their tissues rather than releasing large amounts of N₂ gas. Decomposition increased rather than stopped, which is the source of the nitrate. Nothing in the stem says the herbicide contained nitrogen, and the stream from watershed A shows no change.',
  },
  {
    id: 'bio-u8-s3-q2',
    stimulusId: 'bio-u8-s3',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'hard',
    stem: 'The stream from watershed B flows into a small lake. Based on Figure 2, which sequence of changes in the lake is most likely during years 1 and 2?',
    options: [
      'Algae boom on the added nitrate, then die, and decomposers breaking them down use up the lake’s O₂.',
      'Algae grow more on the nitrate, and the lake’s dissolved O₂ stays high all year because the algae keep releasing O₂.',
      'Algae decline, because the added nitrate lowers the pH of the lake below the range in which algae can survive.',
      'Algae populations stay the same, because the lake’s algae are limited only by light and never by nitrogen.',
    ],
    correctIndex: 0,
    explanation:
      'Nitrogen often limits algal growth in lakes, so a large input of nitrate causes an algal bloom. When the algae die, decomposers break them down by aerobic respiration, using up dissolved O₂ and harming fish and other animals (eutrophication). The algae do release O₂ while alive, but when the bloom dies, decomposition uses up O₂, so dissolved O₂ does not stay high. Nitrate at these levels acts as a nutrient that boosts algae, not as an acid that kills them. Many lakes are limited by nutrients such as nitrogen, so algae would respond.',
  },
  {
    id: 'bio-u8-s4-q1',
    stimulusId: 'bio-u8-s4',
    unit: 'unit-8',
    topicSlug: 'population-ecology',
    difficulty: 'easy',
    stem: 'Which statement best describes the data?',
    options: [
      'The number of pill bugs on the damp side generally rose over the 10 minutes.',
      'The number of pill bugs on the dry side generally rose over the 10 minutes.',
      'The pill bugs stayed evenly split between the two sides for all 10 minutes.',
      'The pill bugs moved back and forth, so neither side gained pill bugs overall.',
    ],
    correctIndex: 0,
    explanation:
      'The damp side went from 10 pill bugs at the start to 15 at 10 minutes, with one small dip at 8 minutes, while the dry side fell from 10 to 5. The dry side lost pill bugs, the split did not stay even after time 0, and the damp side gained 5 overall.',
  },
  {
    id: 'bio-u8-s4-q2',
    stimulusId: 'bio-u8-s4',
    unit: 'unit-8',
    topicSlug: 'population-ecology',
    difficulty: 'hard',
    stem: 'The students use a chi-square test on the 10-minute counts, with the null hypothesis that pill bugs have no preference between the two sides. Which result and conclusion are correct?',
    options: [
      'χ² = 5.0 with 1 degree of freedom, so the null hypothesis is rejected and the pill bugs prefer the damp side.',
      'χ² = 5.0 with 2 degrees of freedom, so the null hypothesis is not rejected because 5.0 is less than 5.99.',
      'χ² = 2.5 with 1 degree of freedom, so the null hypothesis is not rejected because 2.5 is less than 3.84.',
      'χ² = 50 with 1 degree of freedom, so the null hypothesis is rejected and the pill bugs prefer the dry side.',
    ],
    correctIndex: 0,
    explanation:
      'With no preference, 10 pill bugs are expected on each side. χ² = (15 − 10)²/10 + (5 − 10)²/10 = 2.5 + 2.5 = 5.0. There are 2 categories, so df = 2 − 1 = 1 and the critical value is 3.84. Since 5.0 > 3.84, the null hypothesis is rejected; more pill bugs chose the damp side. df = 2 counts the categories instead of subtracting one. 2.5 includes only one of the two sides. 50 leaves out the division by the expected value, and the bugs moved to the damp side, not the dry side.',
  },
  {
    id: 'bio-u8-001',
    unit: 'unit-8',
    topicSlug: 'community-ecology',
    difficulty: 'easy',
    stem: 'Mistletoe grows on the branches of trees and pushes structures into the tree’s tissues, from which it draws water and nutrients. Heavily infected trees grow more slowly. Which type of interaction is this?',
    options: ['Parasitism', 'Mutualism', 'Commensalism', 'Competition'],
    correctIndex: 0,
    explanation:
      'The mistletoe benefits while the tree is harmed, and the mistletoe lives on its host without killing it outright: parasitism. In mutualism both species benefit. In commensalism one benefits and the other is unaffected, but the tree grows more slowly. Competition harms both species as they use a shared, limited resource.',
  },
  {
    id: 'bio-u8-002',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'easy',
    stem: 'In a food chain, grass is eaten by grasshoppers, grasshoppers are eaten by shrews, and shrews are eaten by owls. Which trophic level do the owls occupy?',
    options: ['Tertiary consumer', 'Secondary consumer', 'Primary consumer', 'Producer'],
    correctIndex: 0,
    explanation:
      'Grass is the producer, grasshoppers are primary consumers, shrews (which eat grasshoppers) are secondary consumers, and owls (which eat shrews) are tertiary consumers. Calling owls secondary consumers skips the grasshopper level.',
  },
  {
    id: 'bio-u8-003',
    unit: 'unit-8',
    topicSlug: 'population-ecology',
    difficulty: 'easy',
    stem: 'Many songbirds begin migrating south as the days shorten in late summer, before food actually becomes scarce. How does responding to day length most likely increase the birds’ fitness?',
    options: [
      'Day length signals the coming change in season, so the birds leave before food runs out.',
      'Day length directly lowers the food supply, so the birds must leave as soon as it shortens.',
      'Day length has no effect on the birds, which migrate only once they have run out of food.',
      'Day length makes the birds produce more eggs, which they then lay on their way south.',
    ],
    correctIndex: 0,
    explanation:
      'Day length changes the same way every year and reliably predicts the coming winter, so birds that respond to it leave in time, while food is still available to fuel the journey, and survive and reproduce better. Day length itself does not remove food. The stem says the birds leave before food becomes scarce, so they are responding to a cue. Migration is not tied to laying eggs on the way.',
  },
  {
    id: 'bio-u8-004',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'medium',
    stem: 'A 100-gram lizard and a 100-gram mouse live in the same habitat at the same air temperature. Which comparison of their energy needs is most likely?',
    options: [
      'The mouse needs much more food, because it uses metabolic energy to keep its body temperature high.',
      'The lizard needs much more food, because it must keep moving to stay warm in the same habitat.',
      'Both need the same amount of food, because animals of equal mass have equal metabolic rates.',
      'The lizard needs much more food, because ectotherms lose most of their absorbed energy as heat.',
    ],
    correctIndex: 0,
    explanation:
      'Mice are endotherms: they produce most of their body heat through cellular respiration, which takes a large, continuous energy input. Lizards are ectotherms that gain heat from their surroundings, so at the same mass they need far less food. Lizards warm themselves mainly by basking, not by constant activity. Metabolic rate depends on how an animal is warmed as well as on its mass. Endotherms, not ectotherms, spend most of their absorbed energy on heat.',
  },
  {
    id: 'bio-u8-005',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'medium',
    stem: 'Fossil fuels formed from organisms that died millions of years ago. Which statement best explains why burning them raises the CO₂ concentration of the atmosphere?',
    options: [
      'Burning returns carbon from long-term storage to the air faster than photosynthesis and the oceans can remove it.',
      'Burning returns carbon that plants would soon have released anyway, so it adds nothing beyond the normal cycle.',
      'Burning destroys the ozone layer, and the loss of ozone causes extra CO₂ to form in the upper atmosphere.',
      'Burning releases carbon that was already in the air, so it only moves CO₂ from one part of the atmosphere to another.',
    ],
    correctIndex: 0,
    explanation:
      'The carbon in fossil fuels was removed from the atmosphere long ago and stored underground. Burning releases it as CO₂ much faster than producers and the oceans can take it back up, so CO₂ accumulates in the air. The carbon in fossil fuels was locked away for millions of years, outside the short-term cycle, so releasing it adds carbon to the air. Ozone loss does not produce CO₂. Photosynthesis continues, but it cannot keep pace with the added CO₂. The carbon was in long-term storage, not already in the air.',
  },
  {
    id: 'bio-u8-006',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'medium',
    stem: 'Farmers often plant beans or clover in a field one year and corn the next. Bean and clover roots house bacteria that convert N₂ gas from the air into ammonia. Why does corn planted after beans often need less nitrogen fertilizer?',
    options: [
      'The root bacteria fix atmospheric nitrogen, and the bean residue left in the soil adds usable nitrogen for the corn.',
      'The bean plants absorb all of the soil’s phosphorus, which leaves more room in the soil for corn to take up nitrogen.',
      'The bean plants release N₂ gas from their leaves, which the corn plants then take up directly through their stomata.',
      'The root bacteria break down excess nitrogen in the soil, which prevents nitrogen from building up to toxic levels.',
    ],
    correctIndex: 0,
    explanation:
      'Nitrogen-fixing bacteria in the roots (a mutualism) turn N₂, which plants cannot use, into ammonia that the plant uses to build proteins and nucleic acids. When the bean or clover residue decomposes, that nitrogen is released into the soil in forms the corn can absorb. Phosphorus uptake does not make room for nitrogen. Plants cannot use N₂ gas directly. The bacteria add usable nitrogen rather than removing it.',
  },
  {
    id: 'bio-u8-007',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'medium',
    stem: 'The concentration of a pesticide that is not broken down or excreted was measured in a lake: water, 0.00005 ppm; zooplankton, 0.04 ppm; small fish, 0.5 ppm; large fish, 2 ppm; fish-eating birds, 25 ppm. Which explanation best accounts for this pattern?',
    options: [
      'Each consumer eats many organisms from the level below and keeps their pesticide, so it concentrates up the food chain.',
      'The pesticide breaks down into more concentrated forms inside larger animals, which raises the amount measured in them.',
      'The pesticide is absorbed directly from the water, and larger animals take in more water, so they absorb more of it.',
      'Energy increases at each higher trophic level, and the pesticide is carried along with that energy into each consumer.',
    ],
    correctIndex: 0,
    explanation:
      'A pesticide that is stored in tissues instead of being broken down or excreted builds up in each organism. A consumer eats many prey over its life and keeps the pesticide from all of them, so the concentration rises at each trophic level (biomagnification). The stem says the pesticide is not broken down. Absorbing it directly from water would give similar concentrations to the water, not concentrations that rise 10–100-fold at each step of the food chain. Energy decreases, not increases, at higher trophic levels.',
  },
  {
    id: 'bio-u8-008',
    unit: 'unit-8',
    topicSlug: 'ecosystems-energy',
    difficulty: 'medium',
    stem: 'In a 17th-century experiment, a 2-kg willow seedling was planted in 90 kg of dried soil and given only water for five years. The tree grew to 76 kg, but the dried soil had lost only about 0.06 kg. Based on current understanding, where did most of the tree’s added mass come from?',
    options: [
      'CO₂ from the air fixed into sugars by photosynthesis, together with water',
      'Minerals from the soil, which the roots took up and built into new wood',
      'Sunlight, which was converted directly into the matter of the new wood',
      'Nitrogen gas from the air, which the leaves absorbed through their stomata',
    ],
    correctIndex: 0,
    explanation:
      'The soil lost almost no mass, so the wood was not built from soil minerals. Most of a plant’s dry mass is made of carbon compounds built from CO₂ fixed in photosynthesis, with hydrogen and oxygen from water. Light supplies energy, not matter. Plants cannot use N₂ gas directly, and nitrogen is a small fraction of wood.',
  },
  {
    id: 'bio-u8-009',
    unit: 'unit-8',
    topicSlug: 'population-dynamics',
    difficulty: 'medium',
    stem: 'A new four-lane highway splits a large population of forest salamanders into two small, isolated populations that rarely cross the road. Over many generations, which change is most likely in each small population?',
    options: [
      'Genetic diversity falls, because chance losses of alleles matter more in a small population.',
      'Genetic diversity rises, because each small population now produces more new mutations than before.',
      'Genetic diversity stays the same, because the salamanders still live in the same forest as before.',
      'Genetic diversity rises, because the highway brings in new salamanders from other forests nearby.',
    ],
    correctIndex: 0,
    explanation:
      'Habitat fragmentation cuts a large population into small ones with little gene flow between them. In small populations, genetic drift removes alleles more quickly, and inbreeding becomes more likely, so genetic diversity falls and the populations become more vulnerable to disease and environmental change. Small populations produce fewer new mutations, not more, because they have fewer individuals. Living in the same forest does not prevent drift. The highway blocks movement rather than adding immigrants.',
  },
  {
    id: 'bio-u8-010',
    unit: 'unit-8',
    topicSlug: 'population-dynamics',
    difficulty: 'medium',
    stem: 'A plant species is grown in plots at three densities. At 10 plants/m², each plant makes about 200 seeds; at 100 plants/m², about 40 seeds; at 1,000 plants/m², about 6 seeds. Which conclusion is best supported?',
    options: [
      'Seed production per plant falls as density rises, a density-dependent effect of crowding among plants.',
      'Seed production per plant falls as density rises, a density-independent effect of weather.',
      'Seed production per plant rises as density rises, because crowded plants pollinate more.',
      'Seed production is the same in all plots, because the plots held the same plant species.',
    ],
    correctIndex: 0,
    explanation:
      'Seeds per plant fall from 200 to 40 to 6 as density increases, so each plant reproduces less when crowded, most likely because plants compete for light, water and nutrients. A factor whose effect depends on density is density dependent. All plots shared the same weather, so weather cannot explain the difference among them. Seeds per plant fell rather than rose, and they clearly differed among the plots.',
  },
  {
    id: 'bio-u8-011',
    unit: 'unit-8',
    topicSlug: 'community-ecology',
    difficulty: 'medium',
    stem: 'Rats are accidentally brought to an island where several bird species nest on the ground and no mammal predators have ever lived. Within decades, the populations of these birds drop sharply. Which explanation is best supported?',
    options: [
      'The birds evolved without mammal predators and had no defenses against rats eating their eggs and chicks.',
      'The rats outcompeted the birds for the seeds and insects the birds ate, which slowly starved the adult birds.',
      'The rats spread a disease that only rats can carry, which killed the birds in their nests within a few days.',
      'The birds moved their nests into the trees to escape the rats, so they were no longer counted by surveys.',
    ],
    correctIndex: 0,
    explanation:
      'An introduced predator can devastate prey that evolved without it: island birds that nest on the ground have no behaviors or traits to protect eggs and chicks from mammals, so invasive rats can eat them faster than the birds can reproduce. Competition alone would not cause such a rapid, sharp drop in ground-nesting species in particular. Nothing in the stem describes a disease, and a disease carried only by rats would not kill birds. Moving nests would not reduce the populations themselves.',
  },
  {
    id: 'bio-u8-012',
    unit: 'unit-8',
    topicSlug: 'community-ecology',
    difficulty: 'hard',
    stem: 'In a valley, coyotes are the top predator and prey on foxes and raccoons, which in turn eat the eggs of ground-nesting songbirds. After a disease kills most of the coyotes, which change is most likely?',
    options: [
      'Foxes and raccoons increase, and the songbirds decline because more of their eggs are eaten.',
      'Foxes and raccoons decrease, and the songbirds increase because their nests are safer than before.',
      'Foxes and raccoons increase, and the songbirds also increase because the coyotes ate songbirds.',
      'Foxes and raccoons stay the same, because predators affect only the species they eat directly.',
    ],
    correctIndex: 0,
    explanation:
      'Removing the top predator releases its prey: with fewer coyotes, foxes and raccoons increase, and as they eat more eggs, songbird populations fall. A change at one trophic level spreads through the food web (a trophic cascade). Foxes and raccoons would not decrease when their predator disappears. The stem does not say coyotes eat songbirds, and their main effect on songbirds is indirect. Predators affect species beyond the ones they eat.',
  },
  {
    id: 'bio-u8-013',
    unit: 'unit-8',
    topicSlug: 'population-ecology',
    difficulty: 'hard',
    stem: 'In years when food is scarce, many female red squirrels skip breeding altogether, while in years with an abundant seed crop most females raise large litters. Which explanation best accounts for this pattern?',
    options: [
      'Reproduction uses energy beyond what is needed to survive, so females breed only when they take in a surplus.',
      'Reproduction uses no extra energy, so the pattern must come from females choosing mates only in good years.',
      'Reproduction is triggered by cold weather, so the pattern must come from colder winters in years with less food.',
      'Reproduction always lowers survival, so females breed only when there are too few squirrels to compete for food.',
    ],
    correctIndex: 0,
    explanation:
      'An organism must cover its maintenance needs before it can spend energy on producing and raising young. When food is scarce, a female that bred might not survive, so skipping reproduction can increase her lifetime fitness; when food is plentiful, she has a surplus to invest in a large litter. Reproduction is very costly in energy. Nothing in the stem links breeding to temperature or to how many squirrels are present; it links breeding to food supply.',
  },
]
