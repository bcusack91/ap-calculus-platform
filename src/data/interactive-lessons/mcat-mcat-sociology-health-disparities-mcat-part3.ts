export const mcatSocioHealthPart3Data = {
  topicSlug: 'mcat-sociology-health-disparities-mcat',
  sections: [
    {
      id: 'hdis3-intro',
      type: 'text' as const,
      content: `# Health & Healthcare Disparities — Deep Dive

**Part 3 of 4 — Measuring Disparities: Epidemiologic Tools, Segregation & Discrimination as Exposure**

### The Measurement Toolkit

Disparities are quantitative claims; know the units they are made of:

- **Incidence**: NEW cases per population at risk per time period — measures the rate of becoming sick. **Prevalence**: ALL existing cases at a point (or period) — measures the burden of being sick. The linking approximation: prevalence rises with incidence AND with disease duration. A treatment that extends life with a disease RAISES prevalence while incidence is unchanged — the classic trap.
- **Morbidity** (disease burden) vs. **mortality** (death); **life expectancy** summarizes mortality across ages; **infant mortality** is the standard cross-group sensitivity indicator because it responds quickly to social conditions and care access.
- Comparing groups: **absolute difference** (rate A minus rate B) vs. **relative ratio** (rate A over rate B). A rare disease can show a dramatic ratio (3x) with a trivial absolute difference; a common disease can show a modest ratio hiding an enormous absolute burden. Passages exploit the mismatch — always ask WHICH comparison a conclusion needs.
- **Age adjustment**: groups with different age structures (from the demographics part) cannot be compared on crude rates; standardization removes the age confound. An older population can have a higher crude death rate while being healthier at every age.

### Residential Segregation — A Fundamental Cause with Coordinates

Segregation is not merely correlated with health; it ORGANIZES the exposure package:

- Concentrates poverty, and with it: **food deserts** (low geographic access to affordable nutritious food), pollution sources and hazardous land uses (**environmental injustice** — siting follows the path of least political resistance), housing quality hazards (lead, mold, crowding), violence exposure and its chronic-stress sequelae, under-resourced schools (looping back through education → SES → health), and provider shortages/hospital closures.
- Because segregation bundles exposures, naive models that "control for" each downstream factor one at a time can make segregation's coefficient vanish while its causal role remains — you cannot adjust away the variable that ASSIGNED the other variables. Recognizing this over-adjustment logic is a tested skill.

### Discrimination as a Measurable Exposure

Modern disparities research treats discrimination the way toxicology treats a toxin — with dose, duration, and mechanism:

- **Self-report instruments** (everyday discrimination scales) predict hypertension, depression, and biomarker profiles prospectively; the chronic-vigilance pathway runs through the stress axes to allostatic load (Part 1).
- **Weathering** predictions: disparities in outcomes like preterm birth WIDEN with maternal age (cumulative exposure) and persist at high SES — because higher-SES minority individuals often carry MORE cross-race exposure and its vigilance costs, SES adjustment does not erase these disparities.
- **Race is a social category in these data**: group differences in health reflect the distribution of exposures (segregation, discrimination, care quality), not innate biology — cross-national comparisons (the same ancestry groups showing different disparities under different social systems) and immigrant-generation studies (health often DETERIORATING across generations in the new society despite rising income — the immigrant/acculturation paradox) are the standard evidence.
- **Controlling for SES** is necessary but insufficient: SES measures are not equivalent across groups (same income buys different neighborhoods and wealth), so "adjusted" residual gaps understate or misplace the social causation rather than proving biological difference.

### Gender, Intersectionality & the Paradoxes

- The **mortality-morbidity paradox**: women outlive men in nearly every society yet report higher morbidity and healthcare use — explained by cause-of-death profiles (men's higher external-cause and cardiovascular mortality), help-seeking norms (masculinity discouraging care), and differential diagnosis patterns.
- **Intersectionality** (from the stratification lesson) applied to health: axes of disadvantage interact multiplicatively — the disparities of, say, low-income minority women are not the sum of three main effects; designs must include interaction terms or stratified analyses to see them.`
    },
    {
      id: 'hdis3-worked',
      type: 'text' as const,
      content: `### Worked Example — Auditing a Disparities Data Table

A health department reports on Disease Z in City Q's two districts: North, historically segregated and low-income, and South, affluent. Each problem below audits one slice of its table.

**Problem 1.** Disease Z death rates in City Q (per 100,000/yr):

| Measure | North | South |
|---------|-------|-------|
| Crude death rate | 90 | 60 |
| Age-adjusted death rate | 110 | 45 |

- **(a)** Did age adjustment narrow or widen the gap between the districts?
- **(b)** What explains the change from crude to adjusted rates?
- **(c)** With age structure held equal, about how many times South's rate is North's Disease Z death rate?

**(a) It widened.** Adjustment turned 90 vs. 60 into 110 vs. 45, so crude rates UNDERSTATED the disparity.

**(b) Age structure.** Older populations accumulate deaths. South's older population inflates its crude rate, and North's younger one deflates its own; adjustment removes both distortions. A question asking "why did adjustment increase North's relative rate?" is answered by age structure, not data error.

**(c) About 2.4 times.** $110/45 \\approx 2.4$: with age structure held equal, North's Disease Z death rate is roughly 2.4 times South's.

**Problem 2.** City Q also reports (per 100,000):

| Measure | North | South |
|---------|-------|-------|
| Incidence per yr | 150 | 140 |
| Prevalence | 400 | 900 |
| Survival after diagnosis | 2.7 yrs | 6.4 yrs |

A columnist: "South's higher prevalence proves the burden falls on the affluent, so resources should flow south."

- **(a)** Do residents of the two districts get Disease Z at similar rates?
- **(b)** Why is South's prevalence 2.25 times North's?
- **(c)** Evaluate the columnist's measure, direction of inference, and recommendation.

**(a) Yes.** Incidence is nearly equal (150 vs. 140): people GET the disease at similar rates.

**(b) Duration.** Prevalence tracks incidence times DURATION. South's average survival is roughly 2.4 times longer, so its residents LIVE with the disease (raising prevalence), while North's residents die of it quickly (truncating prevalence).

**(c) Wrong three ways.** Wrong measure (prevalence for a burden-of-injustice claim); wrong direction (high prevalence here marks BETTER outcomes, a survival advantage read as a burden); and a recommendation that would widen the actual mortality disparity.

**Problem 3.** In City Q, incidence is nearly equal, but age-adjusted death rates are 110 (North) vs. 45 (South) and survival after diagnosis is 2.7 vs. 6.4 years. A regression controlling for insurance, stage and hospital quality erases North's survival deficit.

- **(a)** Which numbers carry the injustice-relevant disparity?
- **(b)** Does the pattern point at disease susceptibility or at detection and treatment access?
- **(c)** Does the regression acquit segregation?
- **(d)** Which question does adjusting for these variables answer?

**(a) Mortality and survival.** Age-adjusted mortality and post-diagnosis survival: equal risk of getting sick, radically unequal survival once sick.

**(b) Detection and access.** The gap points at detection timing and treatment access (Part 2's cascade), not differential susceptibility. Fundamental cause logic (Part 1) predicts exactly this pattern for a treatable disease.

**(c) No.** Insurance, stage and hospital quality are the very PATHWAYS segregation works through: mediators, not confounders.

**(d) How, not whether.** Adjusting for mediators answers "how does the disparity operate?", never "is there a disparity?"`
    },
    {
      id: 'hdis3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Measurement, Segregation & Discrimination** 🎯`,
      exercise: {
        questions: [
          {
            question: `After an effective new therapy converts Disease K from rapidly fatal to a manageable chronic condition, surveillance shows the disease's prevalence tripling over a decade while incidence stays flat. The correct interpretation is:`,
            options: [`An epidemic is now producing more new cases each year`, `The surveillance system is double-counting old cases`, `Prevention programs have failed, since prevalence rose`, `Longer survival enlarged the pool of living cases`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Prevalence approximates incidence times average duration; therapy that extends survival lengthens duration, multiplying prevalence with zero change in the rate of NEW cases (flat incidence rules out an epidemic and indicts nothing about prevention, and a known survival-extending therapy accounts for the rise without invoking counting error). Rising prevalence after treatment advances is a success signature, and misreading it as worsening burden is the classic trap this measure pair sets.`
          },
          {
            question: `District A's crude mortality rate is LOWER than District B's, but after age adjustment, District A's rate is substantially HIGHER. The best explanation is that District A:`,
            options: [`Has a younger population masking higher age-specific rates`, `Has an older population inflating its crude death rate`, `Recorded fewer deaths than actually occurred there`, `Has better healthcare and longer life expectancy than B`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Crude rates blend age-specific rates with the population's age mix; a young population generates few deaths overall even when its residents die at higher rates AT EVERY AGE. Adjustment strips the age-mix advantage and reveals the underlying excess — the direction of the crude-to-adjusted flip diagnoses the age structure. An older population would push the crude rate UP, not down; underreporting would depress crude and adjusted rates alike; and better care or longer life expectancy is contradicted by the higher adjusted rate.`
          },
          {
            question: `A study finds that children in more segregated neighborhoods have higher asthma rates. Which variable is a confounder the analysts should adjust for, rather than a mediator through which segregation acts?`,
            options: [`Air pollution levels near each child's home`, `Mold and pest levels in each child's housing`, `Each child's age at the time asthma is measured`, `Distance from each home to the nearest clinic`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `A confounder exists independently of the exposure while shaping the outcome: a child's age changes asthma risk, and age structures differ across neighborhoods, yet segregation cannot change how old a child is. Air pollution near the home, mold and pest levels in the housing, and distance to the nearest clinic are all ASSIGNED by segregation, so they are mediators downstream of it. Controlling for them would shrink segregation's coefficient by construction and explain how it acts, never whether it acts: the over-adjustment fallacy.`
          },
          {
            question: `Which finding would MOST directly support the weathering hypothesis over an explanation based purely on current income differences?`,
            options: [`Preterm birth rates are equal across groups at all ages`, `The disparity widens with maternal age and persists at high income`, `The disparity is constant across ages and vanishes at high income`, `Disparities disappear after controlling for education and income`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Weathering posits cumulative physiological wear from chronic discrimination and disadvantage — so its unique predictions are dose-by-time (disparities growing with age as exposure accumulates) and persistence despite economic success (high SES does not eliminate the exposure). A pure current-income account predicts neither the age-widening nor the high-income residual. A gap that is flat across ages and vanishes at high income, or one erased by SES controls, is exactly what income-based accounts explain comfortably.`
          },
          {
            question: `First-generation immigrants from Country V show better health than their new country's native-born population despite lower incomes, but their grandchildren's health profiles converge downward toward those of similarly situated disadvantaged native groups. This pattern is strong evidence that:`,
            options: [`Health gaps reflect social exposure, not fixed group biology`, `The immigrants' genes deteriorated across generations`, `Healthcare in Country V is superior to the new country's`, `Selective migration of the healthiest fully explains the gap`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Genetic endowment is constant across the three generations; what changed is duration of exposure to the receiving society's diet, stressors, discrimination, and neighborhood conditions — and health changed with it. This immigrant-paradox trajectory is a natural experiment separating ancestry from environment, the standard rebuttal to biological readings of racialized health gaps. Selective migration can explain the first generation's advantage, but not why grandchildren converge specifically toward disadvantaged native profiles — that target tracks shared exposure, not ancestry; and origin-country healthcare cannot reach grandchildren raised in the new country at all.`
          }
        ]
      }
    },
    {
      id: 'hdis3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Absolute vs. relative.** Differences and ratios answer different questions; a rare disease can pair a big ratio with a tiny gap.
- **Segregation bundles exposures.** It assigns food deserts, pollution, housing hazards and provider shortages to groups.
- **Discrimination as exposure.** Vigilance drives allostatic load; weathering predicts gaps that widen with age and persist at high SES.
- **Paradoxes and intersections.** Women outlive men yet report more morbidity; disadvantages interact rather than add, so stratify.

**Common traps**

- **Prevalence as burden.** Prevalence counts existing cases and rises with duration, so longer survival raises it: success, not added burden.
- **Comparing crude rates.** Different age structures distort crude rates; age adjustment can flip or widen a gap.
- **Adjusting away the cause.** Controlling for segregation's mediators explains how it acts; it never shows it has no effect.
- **Reading gaps as biology.** Immigrant-generation and cross-national patterns tie health gaps to exposure, not ancestry.`
    }
  ]
};
