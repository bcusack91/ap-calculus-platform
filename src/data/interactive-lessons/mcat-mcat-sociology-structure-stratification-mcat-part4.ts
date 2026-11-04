export const mcatSocioStratPart4Data = {
  topicSlug: 'mcat-sociology-structure-stratification-mcat',
  sections: [
    {
      id: 'strat4-intro',
      type: 'text' as const,
      content: `# Social Structure & Stratification — Deep Dive

**Part 4 of 4 — MCAT Integration: Demographics, Population Change & Passage Strategy**

### Demographics — Stratification's Moving Picture

**Demography** studies population size, composition, and change through three engines: **fertility**, **mortality**, and **migration**.

- **Fertility rate**: births per woman (total fertility rate); replacement level is about 2.1. **Mortality**: death rates, often summarized as life expectancy; **infant mortality** is the classic development-sensitive indicator.
- **Migration**: immigration (in) minus emigration (out) = net migration. Push factors expel (war, famine, persecution); pull factors attract (jobs, safety, family networks).
- **Population pyramids**: wide base = young, high-fertility population poised to grow (population momentum); barrel shape = stable; top-heavy = aging population, rising dependency ratio (non-working young + old per working-age adult).

### The Demographic Transition Model (DTM)

| Stage | Births | Deaths | Population |
|-------|--------|--------|------------|
| 1. Preindustrial | High | High | Stable, low |
| 2. Early industrial | High | FALLING (sanitation, food, medicine) | Rapid growth |
| 3. Late industrial | FALLING (urbanization, education, contraception, child cost) | Low | Growth slows |
| 4. Postindustrial | Low | Low | Stable or declining, aging |

The exam's favorite inference: the population EXPLOSION happens in stage 2 because deaths fall a generation or more BEFORE births do — the gap, not either rate alone, drives growth. Malthus predicted population would outrun food (checked by famine and war); demographic-transition evidence is the standard rebuttal, since fertility fell with development rather than waiting for catastrophe.

### Urbanization and Population Structure as Stratification

- **Urbanization**: migration concentrates people in cities; growth can outpace infrastructure (informal settlements). **Gentrification** reverses neighborhood class composition, displacing lower-income residents; **white flight** and suburbanization earlier drained cities of capital.
- An aging population redistributes burdens: fewer workers per retiree strains pensions and health systems — demography becomes politics.

### Passage Strategy — The Sociology Table-Reading Discipline

MCAT sociology passages are mostly STUDY REPORTS. Apply a fixed reading order:

1. **Identify the design**: cross-sectional (one time point — no temporal order), longitudinal (follows the same people — supports temporal order), cohort comparison (different generations — beware confusing age effects with cohort effects), experiment (random assignment — only this licenses causal language).
2. **Identify the variables' level**: individual attribute (education), household (income), neighborhood (segregation index), nation (GDP). A claim must stay at its variable's level — inferring individual traits from group-level correlations is the **ecological fallacy**; the reverse (generalizing one person's pattern to the group) is its mirror.
3. **Hunt the confounder**: in stratification research, SES is entangled with race, neighborhood, schooling, and health — ask what was CONTROLLED before accepting any bivariate claim.
4. **Match conclusion strength to design**: "is associated with" (observational) vs. "causes" (experimental). Wrong answers routinely upgrade association to causation or relocate a finding to the wrong altitude (macro paradigm claims from micro data, and vice versa).

### Theory Discrimination — The Final Sweep

- Stability/function language → functionalism; who-benefits/ideology language → conflict; meaning/label language → interactionism; cost-benefit language → exchange.
- Capitals: money (economic) vs. know-how and tastes (cultural) vs. networks (social).
- Mobility: always classify BOTH axes — whose generation, and whether the structure itself moved.`
    },
    {
      id: 'strat4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Full Passage Walkthrough

**Problem 1.** Researchers examine Country Z, where death rates fell steeply from 1950 to 1975 while birth rates stayed high until about 1990, then declined.

- **(a)** Which stage of the demographic transition was Country Z in during 1975?
- **(b)** What was population doing then, and what drove it?
- **(c)** Does the timing of the two declines fit the model?

**(a) Stage.** Deaths down, births still high = **stage 2** of the demographic transition.

**(b) The gap.** The widening birth-death gap means population was growing at its fastest. Neither rate alone answers this: the GAP is the growth engine.

**(c) The predicted lag.** Yes. The roughly 40-year lag between the onset of mortality decline (1950) and the onset of fertility decline (1990) is exactly the model's predicted sequence: deaths fall first, births follow.

**Problem 2.** A cross-sectional 2020 dataset shows that Country Z's regions with higher average income have lower average fertility. The researchers conclude: "Rising individual income causes women to choose fewer children."

- **(a)** At what level were the data measured, and what named error does the conclusion commit?
- **(b)** Can these data put income and fertility in time order, and what was left uncontrolled?
- **(c)** What does the phrase "causes ... to choose" add that the data cannot support?
- **(d)** What finding would MOST strengthen the fertility-income claim?

**(a) Ecological fallacy.** The data correlate REGIONAL average income with REGIONAL average fertility. Nothing in region-level data shows that the individual women with higher incomes are the ones having fewer children; the correlation could even reverse at the individual level.

**(b) Design overreach.** No. Cross-sectional data cannot order income and fertility in time (fewer children might raise household income), and no confounders (urban residence, education, contraception access) were controlled.

**(c) Altitude error.** "Causes ... to choose" smuggles in a micro mechanism (individual choice) from macro data.

**(d) The strengthener.** A longitudinal, individual-level design: follow the same women, show income changes PRECEDING fertility changes, with education and residence controlled. The correct strengthener fixes the design's weakest named links (level of analysis, temporal order), not just "more data."

**Problem 3.** A theorist argues Country Z's fertility fell because children shifted from economic assets (farm labor) to economic costs (schooling, urban housing), so parents rationally chose smaller families.

- **(a)** Which theory does this account express?
- **(b)** How would a conflict theorist approach the same decline?
- **(c)** How would an interactionist approach it?

**(a) Exchange logic.** Cost-benefit machinery at the household level: **rational choice/exchange** logic.

**(b) Conflict.** A conflict theorist would foreground whose interests population policy served.

**(c) Interactionism.** An interactionist would study how the MEANING of parenthood changed. Same fertility decline, three altitude-consistent explanations: the discrimination skill this entire lesson has been building.`
    },
    {
      id: 'strat4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Demographics & Passage Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A country's population pyramid shows a very wide base and a narrow top. Even if fertility instantly dropped to replacement level, the population would keep growing for decades because:`,
            options: [`Mortality always falls faster than fertility`, `Its large young cohorts carry population momentum`, `Net migration is always positive in young countries`, `A high dependency ratio forces families to have more children`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `A wide-based pyramid means the largest cohorts are still children; as they enter reproductive years, the sheer NUMBER of childbearing adults keeps aggregate births above deaths even when each woman has only replacement-level children. This is population momentum. Mortality does not always fall faster than fertility, migration is not always positive, and a dependency ratio pushing families to have more children contradicts the stipulated replacement fertility; none explains continued growth under instant replacement fertility.`
          },
          {
            question: `Neighborhoods with more fast-food restaurants have higher average rates of diabetes. A commentator concludes that any individual who eats fast food will probably develop diabetes. The commentator's error is:`,
            options: [`The ecological fallacy, from group to individual`, `Confusing a cohort effect with an age effect`, `Treating cross-sectional data as longitudinal`, `Treating relative poverty as absolute poverty`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The data live at the neighborhood level; the conclusion is about individuals. Group-level correlations cannot be transferred to members — the diabetic residents need not even be the fast-food eaters, and neighborhood-level confounders (income, walkability, clinic access) could generate the pattern entirely. That level-jump is the ecological fallacy, regardless of the study's timing or design.`
          },
          {
            question: `Between 1980 and 2005, Country Q's death rate stayed near 8 per 1,000 while its birth rate fell from 40 to 22 per 1,000. According to the demographic transition model, Country Q in 2005 was:`,
            options: [`In stage 4, with an aging, stable population`, `In stage 2, since deaths were low`, `In stage 3, with population growth slowing`, `In stage 1, since births still exceeded deaths`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Low, steady deaths combined with births that are visibly falling is the stage-3 signature: the birth-death gap is narrowing, so growth continues but slows. Stage 1 requires HIGH death rates; stage 2 has births still high and unchanged while deaths fall; stage 4 requires births to have fallen to about the level of deaths, and 22 per 1,000 is still well above 8. The model's sequence (mortality falls first, fertility follows after a lag) places Country Q in the catch-up phase.`
          },
          {
            question: `Researchers find that 70-year-olds score lower than 30-year-olds on internet-skills tests in a single 2024 survey and conclude that aging erodes internet skills. The most important rival explanation is:`,
            options: [`Reverse causation, from skill loss to aging`, `A period effect specific to the 2024 survey`, `Random sampling error, because the sample was large`, `A cohort effect of generational experience`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A single-time-point comparison of different ages cannot separate growing old (age effect) from having been born into a particular era (cohort effect); the 70-year-olds' lower scores plausibly reflect learning history, not decline. A longitudinal design following the same people would distinguish the two. A period effect would shift every age group alike in 2024 and cannot create an age gap within one survey, reverse causation is absurd here, and large samples reduce random error while doing nothing about systematic confounding.`
          },
          {
            question: `A historically low-income urban district gains art galleries and rising rents; long-term residents relocate outward as higher-income professionals move in. The process described is:`,
            options: [`Suburbanization of the middle class`, `Gentrification with displacement`, `White flight from the city core`, `The demographic transition`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Gentrification is the reversal of a neighborhood's class composition through in-migration of higher-income residents and rising property costs, displacing established lower-income communities. Suburbanization and white flight describe the OUTWARD movement of affluent (historically white) residents from city cores — the opposite flow — and the demographic transition concerns national birth and death rates, not neighborhoods.`
          }
        ]
      }
    },
    {
      id: 'strat4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Pyramids encode the future.** A wide base means momentum-driven growth; a top-heavy pyramid means a rising dependency burden.
- **The stage-2 gap.** Deaths fall BEFORE births, and that gap, not either rate alone, produces the population explosion.
- **Name the design.** Cross-sectional data give no time order, longitudinal data do, and only experiments license "causes."
- **Theory sweep.** Stability = functionalist, who benefits = conflict, meaning = interactionist, cost-benefit = exchange.

**Common traps**

- **Ecological fallacy.** Group-level correlations cannot be applied to individuals; keep each claim at its variable's level.
- **Reading an age gap as aging.** A single-time-point age comparison cannot separate growing old from the era a cohort was born into.
- **Association as causation.** Observational designs support "is associated with"; check what was controlled before any causal claim.
- **Calling gentrification flight.** Gentrification brings higher-income residents in and displaces; white flight moved affluence out.`
    }
  ]
};
