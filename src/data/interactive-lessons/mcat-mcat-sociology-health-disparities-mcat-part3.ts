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

**Passage-style problem.** A health department reports on Disease Z in City Q's two districts (North, historically segregated and low-income; South, affluent):

| Measure | North | South |
|---------|-------|-------|
| Crude Disease Z death rate (per 100,000/yr) | 90 | 60 |
| Age-adjusted death rate (per 100,000/yr) | 110 | 45 |
| Disease Z incidence (per 100,000/yr) | 150 | 140 |
| Disease Z prevalence (per 100,000) | 400 | 900 |
| Median survival after diagnosis | 2.1 yrs | 7.8 yrs |

A columnist concludes: "South's higher prevalence proves the disease burden falls on the affluent, so resources should flow south."

**Step 1 — reconcile the crude and adjusted rates.** Adjustment WIDENED the gap (90 vs. 60 became 110 vs. 45): South's population is older (older populations accumulate deaths, inflating its crude rate), so at any given age, North residents die of Disease Z at roughly 2.4 times South's rate. Crude rates understated the disparity; a question asking "why did adjustment increase North's relative rate?" is answered by age structure, not data error.

**Step 2 — decode the incidence/prevalence inversion.** Incidence is nearly equal — people GET the disease at similar rates. Prevalence is 2.25x higher in the South because prevalence tracks incidence times DURATION: South's median survival is nearly four times longer, so its residents LIVE with the disease (raising prevalence), while North's residents die of it quickly (truncating prevalence). High prevalence here is a marker of BETTER outcomes — the columnist has read a survival advantage as a burden.

**Step 3 — name the disparity correctly.** The injustice-relevant numbers are age-adjusted mortality and post-diagnosis survival: equal risk of getting sick, radically unequal survival once sick — pointing at detection timing and treatment access (Part 2's cascade), not at differential disease susceptibility. Fundamental cause logic (Part 1) predicts exactly this pattern for a treatable disease.

**Step 4 — anticipate the over-adjustment trap.** Suppose a regression controls for insurance, stage at diagnosis, and hospital quality, and North's survival deficit "disappears." That does NOT acquit segregation — those controls are the very PATHWAYS segregation works through (mediators, not confounders). Adjusting for mediators answers "how does the disparity operate?", never "is there a disparity?"

**Verdict on the columnist:** wrong measure (prevalence for burden-of-injustice claims), wrong direction (high prevalence reflecting long survival), and a resource recommendation that would widen the actual mortality disparity.`
    },
    {
      id: 'hdis3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Measurement, Segregation & Discrimination** 🎯`,
      exercise: {
        questions: [
          {
            question: `After an effective new therapy converts Disease K from rapidly fatal to a manageable chronic condition, surveillance shows the disease's prevalence tripling over a decade while incidence stays flat. The correct interpretation is:`,
            options: [`An epidemic of new infections is now under way`, `The surveillance system is double-counting old cases`, `Prevention programs have failed, since prevalence rose`, `Longer survival enlarged the pool of living cases`],
            correctAnswer: 3,
            explanation: `Prevalence approximates incidence times average duration; therapy that extends survival lengthens duration, multiplying prevalence with zero change in the rate of NEW cases (flat incidence rules out an epidemic and indicts nothing about prevention, and a known survival-extending therapy accounts for the rise without invoking counting error). Rising prevalence after treatment advances is a success signature, and misreading it as worsening burden is the classic trap this measure pair sets.`
          },
          {
            question: `District A's crude mortality rate is LOWER than District B's, but after age adjustment, District A's rate is substantially HIGHER. The best explanation is that District A:`,
            options: [`Has a younger population masking higher age-specific rates`, `Has an older population inflating its crude death rate`, `Recorded fewer deaths than actually occurred there`, `Has better healthcare and longer life expectancy than B`],
            correctAnswer: 0,
            explanation: `Crude rates blend age-specific rates with the population's age mix; a young population generates few deaths overall even when its residents die at higher rates AT EVERY AGE. Adjustment strips the age-mix advantage and reveals the underlying excess — the direction of the crude-to-adjusted flip diagnoses the age structure. An older population would push the crude rate UP, not down; underreporting would depress crude and adjusted rates alike; and better care or longer life expectancy is contradicted by the higher adjusted rate.`
          },
          {
            question: `A regression finds that a strong association between residential segregation and asthma disappears once the model controls for housing quality, air pollution exposure, and neighborhood poverty. The soundest conclusion is:`,
            options: [`Segregation has no causal effect on asthma`, `Segregation affects asthma only through air pollution`, `The controls are mediators through which segregation acts`, `Asthma drives families into segregated neighborhoods`],
            correctAnswer: 2,
            explanation: `Segregation's causal role is precisely to ASSIGN housing quality, pollution exposure, and concentrated poverty to groups; those variables are mediators downstream of it, not confounders lurking behind it. Controlling for mediators shrinks the exposure's coefficient by construction — the analysis decomposes the mechanism rather than testing existence. Mistaking mediator adjustment for refutation is the over-adjustment fallacy, and because three pathways were controlled together, no single one (such as pollution alone) can be crowned the sole route.`
          },
          {
            question: `Which finding would MOST directly support the weathering hypothesis over an explanation based purely on current income differences?`,
            options: [`Preterm birth rates are equal across groups at all ages`, `The disparity widens with maternal age and persists at high income`, `The disparity is constant across ages and vanishes at high income`, `Disparities disappear after controlling for education and income`],
            correctAnswer: 1,
            explanation: `Weathering posits cumulative physiological wear from chronic discrimination and disadvantage — so its unique predictions are dose-by-time (disparities growing with age as exposure accumulates) and persistence despite economic success (high SES does not eliminate the exposure). A pure current-income account predicts neither the age-widening nor the high-income residual. A gap that is flat across ages and vanishes at high income, or one erased by SES controls, is exactly what income-based accounts explain comfortably.`
          },
          {
            question: `First-generation immigrants from Country V show better health than their new country's native-born population despite lower incomes, but their grandchildren's health profiles converge downward toward those of similarly situated disadvantaged native groups. This pattern is strong evidence that:`,
            options: [`Health gaps reflect social exposure, not fixed group biology`, `The immigrants' genes deteriorated across generations`, `Healthcare in Country V is superior to the new country's`, `Selective migration of the healthiest fully explains the gap`],
            correctAnswer: 0,
            explanation: `Genetic endowment is constant across the three generations; what changed is duration of exposure to the receiving society's diet, stressors, discrimination, and neighborhood conditions — and health changed with it. This immigrant-paradox trajectory is a natural experiment separating ancestry from environment, the standard rebuttal to biological readings of racialized health gaps. Neither superior origin-country healthcare nor selective migration of the healthiest can explain the grandchildren's decline, since both advantages would predict persistence rather than convergence.`
          }
        ]
      }
    },
    {
      id: 'hdis3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Incidence = new cases (risk of becoming sick); prevalence = existing cases (burden), rising with duration — treatments that extend survival raise prevalence with flat incidence
- Compare groups with the RIGHT arithmetic: absolute differences vs. relative ratios answer different questions; never compare crude rates across different age structures — adjustment can flip or widen gaps
- Segregation bundles exposures (food deserts, pollution siting, housing hazards, provider shortage); its downstream variables are mediators — adjusting for them explains the mechanism, never refutes the cause
- Discrimination is a dosed exposure: vigilance → stress axes → allostatic load; weathering predicts age-widening, SES-resistant disparities; immigrant-generation and cross-national patterns pin health gaps on environment, not ancestry
- Women's mortality-morbidity paradox and intersectional (interactive, not additive) disadvantage require stratified reading of any disparities table`
    }
  ]
};
