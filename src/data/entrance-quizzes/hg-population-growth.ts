/**
 * Entrance Quiz — Population Growth & Decline (AP Human Geography) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: RNI vs growth rate, placing a country on the DTM
  {
    id: 'hg-population-growth-ent-1a',
    question: "Country A has a crude birth rate of 18, a crude death rate of 8 and a net migration rate of −4 (all per 1,000 people per year). What are its rate of natural increase (RNI) and its total population growth rate?",
    options: ["RNI 0.6%; total growth 1.0%", "RNI 1.0%; total growth 1.4%", "RNI 10%; total growth 6%", "RNI 1.0%; total growth 0.6%"],
    correctIndex: 3,
    explanation: "RNI = (18 − 8) ÷ 10 = 1.0% and leaves migration out. Total growth adds net migration: (18 − 8 − 4) ÷ 10 = 0.6%, because emigration removes people.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'hg-population-growth-ent-1b',
    question: "A country's crude death rate has held near 7 for two decades, while its crude birth rate has fallen from 36 to 22. Where does it best fit on the Demographic Transition Model?",
    options: ["Stage 3, since its birth rate is now falling steeply", "Stage 2, since its births still far exceed its deaths", "Stage 4, since both of its rates are now quite low", "Stage 5, since its deaths now outnumber its births"],
    correctIndex: 0,
    explanation: "A low, steady death rate with a sharply falling birth rate is the signature of Stage 3, when natural increase slows. Births still exceed deaths in Stage 3 as well, and a birth rate of 22 is too high for Stage 4.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  // Part 2 — Population Dynamics: momentum, mechanisms behind fertility
  {
    id: 'hg-population-growth-ent-2a',
    question: "A country's total fertility rate fell to 2.1 ten years ago and has stayed there. With almost no migration, its population is still growing. What best explains this?",
    options: ["Large cohorts born during earlier high fertility are now having children.", "Replacement-level fertility produces growth of about 1 percent every year.", "Its crude death rate must have risen sharply over the past ten years.", "The total fertility rate counts only first births, so it understates births."],
    correctIndex: 0,
    explanation: "This is population momentum: past high fertility left many young people, and as they reach childbearing age they produce more births than deaths even at replacement fertility. A rising death rate would slow growth, not sustain it.",
    partNumber: 2,
    partTitle: "Population Dynamics: Measuring and Explaining Change",
  },
  {
    id: 'hg-population-growth-ent-2b',
    question: "A government extends old-age pensions to all rural farm families for the first time. Through which mechanism would this most likely lower fertility?",
    options: ["Children become more valuable as workers on the farm.", "Infant deaths rise, so families plan extra births.", "Parents no longer need children to provide for them.", "Women marry younger and so begin their families earlier."],
    correctIndex: 2,
    explanation: "Where children are parents' old-age insurance, families want many; a pension removes that need, so desired family size falls. More valuable child labor, higher infant mortality and earlier marriage would all push fertility up.",
    partNumber: 2,
    partTitle: "Population Dynamics: Measuring and Explaining Change",
  },
  // Part 3 — The DTM and ETM: causes of death, model limitations
  {
    id: 'hg-population-growth-ent-3a',
    question: "In 2020 and 2021, a new infectious disease killed large numbers of people in high-income countries whose deaths had long been dominated by heart disease and cancer. What does this show about the epidemiological transition model?",
    options: ["Rich countries have always died mainly of infectious disease", "Its stages are not one-way, as infection can return at any stage", "The model applies only to countries in DTM Stage 1", "Chronic diseases disappear once a country reaches Stage 4"],
    correctIndex: 1,
    explanation: "A pandemic striking countries that had moved past infectious disease shows that the ETM is not a one-way sequence: emerging and reemerging infections, its debated fifth stage, can occur at any point. Chronic disease remained a leading killer in those countries too.",
    partNumber: 3,
    partTitle: "The Demographic and Epidemiological Transition Models",
  },
  {
    id: 'hg-population-growth-ent-3b',
    question: "A country's birth and death rates are both low and nearly equal, yet its population grows by about 1.5 percent a year. Which limitation of the Demographic Transition Model does this case reveal?",
    options: ["It cannot predict how long a country stays in any one stage.", "It assumes that countries move only forward through the stages.", "It leaves out people moving into or out of a country.", "It was built mainly from the experience of industrialized countries."],
    correctIndex: 2,
    explanation: "With natural increase near zero, the growth must come from immigration, which the DTM does not include because it tracks only births and deaths. The other limitations are real but are not what this case shows.",
    partNumber: 3,
    partTitle: "The Demographic and Epidemiological Transition Models",
  },
  // Part 4 — Malthus, His Critics, and the Data
  {
    id: 'hg-population-growth-ent-4a',
    question: "In Malthus's model, population doubles every 25 years while the food supply grows by the same fixed amount every 25 years. Starting from 1 unit of each, how much of each is there after 75 years?",
    options: ["6 units of population and 4 of food", "8 units of population and 8 of food", "8 units of population and 4 of food", "4 units of population and 4 of food"],
    correctIndex: 2,
    explanation: "Geometric growth doubles three times (1, 2, 4, 8), while arithmetic growth adds one unit three times (1, 2, 3, 4). The widening gap is why Malthus predicted famine and other positive checks.",
    partNumber: 4,
    partTitle: "Malthus, His Critics, and the Data",
  },
  {
    id: 'hg-population-growth-ent-4b',
    question: "Which piece of evidence would a neo-Malthusian most likely cite to support the view that population growth is pressing against limits?",
    options: ["Global food output per person has risen since the 1960s.", "Fertility has fallen sharply as countries have urbanized.", "Real prices of many metals fell in the late twentieth century.", "Aquifers and forests are being drained faster than they recover."],
    correctIndex: 3,
    explanation: "Neo-Malthusians extend Malthus beyond food to water, forests, energy and climate, so resource depletion is their evidence. Rising food per person, falling resource prices and falling fertility are all used against Malthusian predictions.",
    partNumber: 4,
    partTitle: "Malthus, His Critics, and the Data",
  },
  // Part 5 — Policies, Women and Aging
  {
    id: 'hg-population-growth-ent-5a',
    question: "Which policy is most likely to produce, decades later, both a male-heavy sex ratio among young adults and a rapidly aging population?",
    options: ["Generous family allowances paired with paid parental leave", "Strict birth limits where families strongly prefer sons", "A points system that admits skilled working-age immigrants", "Free secondary schooling for girls in every rural district"],
    correctIndex: 1,
    explanation: "An anti-natalist birth limit shrinks young cohorts, which ages the population, and where sons are preferred it also skews the sex ratio at birth. Family allowances and immigration of young workers push the other way.",
    partNumber: 5,
    partTitle: "Policies, Women and Aging",
  },
  {
    id: 'hg-population-growth-ent-5b',
    question: "In one country the share of women who finish secondary school rose from 20 percent to 70 percent over 25 years. Which demographic change is most likely, and why?",
    options: ["Fertility falls, as schooling delays marriage and makes children costly.", "Fertility rises, as educated women can afford to raise more children.", "Fertility holds steady, since it depends only on laws about contraception.", "Mortality rises, as women in school have less time for their families' care."],
    correctIndex: 0,
    explanation: "More schooling delays marriage and first births, opens paid work that raises the opportunity cost of each child, and improves child survival, so fertility falls. Educated mothers also lower infant mortality rather than raising it.",
    partNumber: 5,
    partTitle: "Policies, Women and Aging",
  },
  // Part 6 — AP Exam Practice: reading population data
  {
    id: 'hg-population-growth-ent-6a',
    question: "Rates per 1,000 people per year:\nCountry A — CBR 40, CDR 8, TFR 5.6\nCountry B — CBR 17, CDR 6, TFR 2.1\nCountry C — CBR 10, CDR 11, TFR 1.3\nUsing the rule of 70, about how long will Country A take to double its population at its current rate of natural increase?",
    options: ["About 22 years", "About 9 years", "About 32 years", "About 70 years"],
    correctIndex: 0,
    explanation: "Country A's RNI is (40 − 8) ÷ 10 = 3.2%, and 70 ÷ 3.2 ≈ 22 years. Seventy years would mean ignoring the growth rate entirely.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },
  {
    id: 'hg-population-growth-ent-6b',
    question: "Country R (rates per 1,000): 1970 — CBR 18, CDR 10; 1990 — CBR 12, CDR 10; 2010 — CBR 9, CDR 11; 2020 — CBR 7, CDR 12. Which response correctly identifies a DTM stage and supports it with the data?",
    options: ["From 1970 to 1990 it was in Stage 2, since its CBR stayed above its CDR.", "From 2010 to 2020 it was in Stage 5, since its CDR rose above its CBR.", "From 1990 to 2010 it was in Stage 3, since its CDR held near 10.", "It stayed in Stage 4 throughout, since both its rates were low."],
    correctIndex: 1,
    explanation: "Deaths outnumbering births while both rates are low marks Stage 5, natural decrease. A birth rate of 18 falling to 12 is far too low for Stage 2, and the rates from 1990 on are too low for Stage 3.",
    partNumber: 6,
    partTitle: "AP Exam Practice",
  },
  // Part 7 — Synthesis Review: scale and explaining with mechanisms
  {
    id: 'hg-population-growth-ent-7a',
    question: "World population growth equals natural increase, yet a rural county can shrink even when its births outnumber its deaths. What explains the difference?",
    options: ["Birth rates are always higher at the global scale than locally.", "The RNI includes migration at the local scale but not globally.", "Death rates are measured only for counties, not for the world.", "Migration is zero for the world but can dominate at the local scale."],
    correctIndex: 3,
    explanation: "No one migrates off the planet, so global change is births minus deaths; a county also gains or loses migrants, and young adults leaving can outweigh its natural increase. RNI never includes migration at any scale.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },
  {
    id: 'hg-population-growth-ent-7b',
    question: "A free-response question asks students to explain why a country's crude birth rate fell between 1980 and 2010. Which response earns the point?",
    options: ["The country moved out of Stage 2 and into Stage 3 of the DTM.", "Urban jobs and schooling made big families costly, so couples had fewer children.", "The birth rate fell because fewer babies were born there each year.", "Its population policies cut births exactly as officials had planned."],
    correctIndex: 1,
    explanation: "Only the urbanization response names a mechanism linking a cause to the falling birth rate. A DTM stage describes the pattern rather than causing it, and saying fewer babies were born just restates the change.",
    partNumber: 7,
    partTitle: "Synthesis Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Population Dynamics: Measuring and Explaining Change" },
    { partNumber: 3, partTitle: "The Demographic and Epidemiological Transition Models" },
    { partNumber: 4, partTitle: "Malthus, His Critics, and the Data" },
    { partNumber: 5, partTitle: "Policies, Women and Aging" },
    { partNumber: 6, partTitle: "AP Exam Practice" },
    { partNumber: 7, partTitle: "Synthesis Review" },
  ]
}
