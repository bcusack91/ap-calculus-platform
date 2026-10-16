/**
 * Entrance Quiz — Population Distribution & Composition (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Population Distribution: ecumene, computing density
  {
    id: 'hg-population-distribution-ent-1a',
    question: "Herding families live year-round on Mongolia's grasslands, though at very few people per km². Antarctica's research stations are staffed by scientists who rotate in and out for a season or a year. Which classification is correct?",
    options: ["Neither belongs to the ecumene, since both are so thinly settled.", "Both belong to the ecumene, since both have people living there.", "The grasslands belong to the ecumene, but Antarctica does not.", "Antarctica belongs to the ecumene, but the grasslands do not."],
    correctIndex: 2,
    explanation: "The ecumene is land people inhabit permanently, however sparsely, so year-round herding country counts. Antarctica has only temporary, rotating residents, so it remains outside the ecumene.",
    partNumber: 1,
    partTitle: "Population Distribution",
  },
  {
    id: 'hg-population-distribution-ent-1b',
    question: "Country K has 20 million people, 400,000 km² of land and 40,000 km² of arable land. Country L has 60 million people, 300,000 km² of land and 150,000 km² of arable land. Which statement is correct?",
    options: ["K is higher on both measures", "L is higher on both measures", "Both have roughly 450 people per km² of arable land", "L leads on arithmetic density, K on physiological"],
    correctIndex: 3,
    explanation: "Arithmetic density is 20 million ÷ 400,000 = 50 per km² for K and 60 million ÷ 300,000 = 200 for L; physiological density is 20 million ÷ 40,000 = 500 for K and 60 million ÷ 150,000 = 400 for L. A country can be less crowded overall yet put more pressure on its farmland.",
    partNumber: 1,
    partTitle: "Population Distribution",
  },
  // Part 2 — Where People Live and Why: physical and human factors
  {
    id: 'hg-population-distribution-ent-2a',
    question: "Most of Russia's people live in its European west rather than in Siberia. Which explanation correctly combines a physical factor and a human factor?",
    options: ["Siberia's cold limits farming, and a law bars settlement east of the Urals.", "Siberia's desert heat blocks farming, and its cities were founded only recently.", "Siberia's cold limits farming, and the west has long been the nation's economic core.", "The west has a tropical climate, and the national capital lies on the Pacific coast."],
    correctIndex: 2,
    explanation: "Long, severe winters and permafrost limit agriculture in Siberia (physical), while the west holds the historic heartland, the largest cities and most jobs (human). No law bars settlement east of the Urals, Siberia is cold rather than a hot desert, and Moscow is in the west.",
    partNumber: 2,
    partTitle: "Where People Live and Why",
  },
  {
    id: 'hg-population-distribution-ent-2b',
    question: "A desert city has grown from a small town to a metropolitan area of millions within a few decades. Which statement best explains this growth?",
    options: ["Human factors such as trade and piped-in water outweighed the limits of the desert.", "Hot desert climates attract dense settlement wherever groundwater lies near the surface.", "Physical factors always decide distribution, so the soil around the city must be rich.", "The city lies outside the ecumene, so its growth does not count as permanent settlement."],
    correctIndex: 0,
    explanation: "Physical conditions set limits, but economic and political choices, such as trade, tourism and engineered water supplies, can override them. A permanently settled city is part of the ecumene, and deserts do not generally attract dense settlement.",
    partNumber: 2,
    partTitle: "Where People Live and Why",
  },
  // Part 3 — Three Density Measures: interpreting combinations
  {
    id: 'hg-population-distribution-ent-3a',
    question: "Country P has a physiological density of 1,900 and an agricultural density of 15 per km² of arable land. Country Q has a physiological density of 2,000 and an agricultural density of 400. Which country is more likely to import much of its food while most of its workers hold nonfarm jobs, and why?",
    options: ["Country P, since few farmers work its scarce farmland", "Country Q, since many farmers work its scarce farmland", "Country Q, since its physiological density is higher", "Country P, since its physiological density is lower"],
    correctIndex: 0,
    explanation: "Both countries have heavy pressure on farmland, but P's very low agricultural density means a small, mechanized farm work force, so most people work in other sectors and food imports are likely. The 100-point gap in physiological density is not meaningful.",
    partNumber: 3,
    partTitle: "Three Density Measures",
  },
  {
    id: 'hg-population-distribution-ent-3b',
    question: "A country's arithmetic density is 20 people per km² and its physiological density is 1,000 people per km² of arable land. About what share of its land is arable?",
    options: ["About 2 percent", "About 20 percent", "About 50 percent", "About 98 percent"],
    correctIndex: 0,
    explanation: "Physiological ÷ arithmetic density equals total land ÷ arable land: 1,000 ÷ 20 = 50, so arable land is about 1/50 of the total, or 2 percent. A large gap between the two measures always signals scarce farmland.",
    partNumber: 3,
    partTitle: "Three Density Measures",
  },
  // Part 4 — Consequences of Distribution and Density: services, carrying capacity
  {
    id: 'hg-population-distribution-ent-4a',
    question: "A government must provide medical care to a vast northern territory where a few thousand people live in small villages with no road links. Which plan best fits the challenge this population distribution creates?",
    options: ["A specialist hospital in every village so no one has to travel", "A subway line linking each village to one regional hospital", "Air transport and nurse-run clinics that send serious cases far away", "Walk-in clinics within a few blocks of every home in the territory"],
    correctIndex: 2,
    explanation: "With so few people spread so far apart, each facility serves very few patients, so full hospitals everywhere are unaffordable; small clinics plus air transport to distant hospitals is the typical response. Subways and walk-in clinics on every block depend on high density.",
    partNumber: 4,
    partTitle: "Consequences of Distribution and Density",
  },
  {
    id: 'hg-population-distribution-ent-4b',
    question: "Country A has 500 people per km² and imports much of its food. Country B has 15 people per km², and its growing herds are stripping grasslands faster than they recover. Which statement is best supported?",
    options: ["Country A is overpopulated, because its density is far higher.", "Country B may exceed its local carrying capacity though it is less dense.", "Neither can be overpopulated, because carrying capacity is set by land area.", "Country B is underpopulated, so climate alone must explain the damage."],
    correctIndex: 1,
    explanation: "Carrying capacity depends on resources, technology, consumption and trade, not on density alone. Country B's land is degrading under its population, while Country A sustains a dense population with imports.",
    partNumber: 4,
    partTitle: "Consequences of Distribution and Density",
  },
  // Part 5 — Population Composition and Pyramids: reading skews, planning
  {
    id: 'hg-population-distribution-ent-5a',
    question: "A country's population pyramid shows about 115 males for every 100 females in the cohorts aged 0 to 14, while working-age cohorts are nearly balanced and older cohorts have more women. Which explanation fits best?",
    options: ["Male labor migration into the country", "Wartime deaths among young men", "Sex-selective births favoring boys", "Longer life expectancy for women"],
    correctIndex: 2,
    explanation: "A male surplus that appears from birth in the youngest cohorts points to sex-selective births, since the natural ratio at birth is about 105. Labor migration would swell working-age cohorts, war would cut men, and longer female lives explain only the older cohorts.",
    partNumber: 5,
    partTitle: "Population Composition and Pyramids",
  },
  {
    id: 'hg-population-distribution-ent-5b',
    question: "A country's pyramid shows an unusually large cohort aged 5 to 14, with smaller cohorts below and above it. As that cohort ages over the next 10 to 15 years, which demand will rise most?",
    options: ["More primary-school classrooms", "Jobs and housing for young adults", "Elder care and pension payments", "Pediatric care for newborn infants"],
    correctIndex: 1,
    explanation: "Each cohort moves up the pyramid as it ages, so in 10 to 15 years this group will be about 15 to 29 and entering the job and housing markets. Demand for primary schools will fall as the group leaves them, and elder care is decades away.",
    partNumber: 5,
    partTitle: "Population Composition and Pyramids",
  },
  // Part 6 — AP Exam Practice: density table and pyramid stimulus
  {
    id: 'hg-population-distribution-ent-6a',
    question: "Densities in people (or farmers) per km²:\nKel — arithmetic 40, physiological 2,000, agricultural 500\nMora — arithmetic 300, physiological 900, agricultural 10\nSana — arithmetic 8, physiological 50, agricultural 3\nWhich country is most likely a large food exporter?",
    options: ["Mora, which has the highest arithmetic density", "Mora, which has the fewest farmers working each km² of its farmland", "Kel, which has the most farmers per km² of farmland", "Sana, which has much farmland per person and few farmers"],
    correctIndex: 3,
    explanation: "Sana's low physiological density means abundant farmland per person, and its very low agricultural density means large mechanized farms, the profile of a food exporter. Sana, not Mora, has the fewest farmers per km² of farmland.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Density Data and Pyramids",
  },
  {
    id: 'hg-population-distribution-ent-6b',
    question: "Over 20 years, Country T's share of people under age 15 fell from 25 to 14 percent, while its share aged 65 and over rose from 9 to 18 percent. A free-response question asks students to explain one consequence of this change. Which response earns the point?",
    options: ["The share of people aged 65 and over doubled, from 9 to 18 percent of the total.", "Fewer young people will join the work force, so each worker will support more retirees.", "The falling share of children shows that many infants in Country T die before age five.", "Country T's large working-age middle will soon need more maternity wards and schools."],
    correctIndex: 1,
    explanation: "An aging structure with small young cohorts means fewer new workers paying in while more people draw pensions and need care. Restating the data is description, a shrinking child share reflects fewer births rather than infant deaths, and the middle-aged bulge is moving toward retirement.",
    partNumber: 6,
    partTitle: "AP Exam Practice: Density Data and Pyramids",
  },
  // Part 7 — Synthesis Review: linking distribution, density and composition
  {
    id: 'hg-population-distribution-ent-7a',
    question: "A country has an arithmetic density of 25 per km² and a physiological density of 2,500 per km² of arable land, and 90 percent of its people live along one river valley. Which pair of statements is supported?",
    options: ["Its arable land is about 1 percent of the total, and its people are evenly dispersed.", "Its arable land is about 10 percent of the total, and its people are highly concentrated.", "Its arable land is about 99 percent of the total, and its people are evenly dispersed.", "Its arable land is about 1 percent of the total, and its people are highly concentrated."],
    correctIndex: 3,
    explanation: "Total land ÷ arable land = 2,500 ÷ 25 = 100, so about 1 percent is arable, and having 90 percent of people in one valley is a highly clustered distribution, as along the Nile.",
    partNumber: 7,
    partTitle: "Synthesis Review: Where, How Dense, and Who",
  },
  {
    id: 'hg-population-distribution-ent-7b',
    question: "A student sees a population pyramid with a very wide base and concludes that the country must have a high death rate. What is the best correction?",
    options: ["A wide base shows an aging population rather than a high death rate.", "A wide base reflects many recent births, not how many people die.", "A wide base shows male workers migrating in, not deaths among residents.", "A wide base shows a low birth rate combined with long life expectancy."],
    correctIndex: 1,
    explanation: "The base of a pyramid reflects births, so a wide base means high fertility. A sharp narrowing at every step may suggest high mortality too, but that is a separate inference from the base.",
    partNumber: 7,
    partTitle: "Synthesis Review: Where, How Dense, and Who",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Population Distribution" },
    { partNumber: 2, partTitle: "Where People Live and Why" },
    { partNumber: 3, partTitle: "Three Density Measures" },
    { partNumber: 4, partTitle: "Consequences of Distribution and Density" },
    { partNumber: 5, partTitle: "Population Composition and Pyramids" },
    { partNumber: 6, partTitle: "AP Exam Practice: Density Data and Pyramids" },
    { partNumber: 7, partTitle: "Synthesis Review: Where, How Dense, and Who" },
  ]
}
