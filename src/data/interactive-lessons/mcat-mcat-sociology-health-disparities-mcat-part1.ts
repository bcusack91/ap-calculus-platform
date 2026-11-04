export const mcatSocioHealthPart1Data = {
  topicSlug: 'mcat-sociology-health-disparities-mcat',
  sections: [
    {
      id: 'hdis1-intro',
      type: 'text' as const,
      content: `# Health & Healthcare Disparities — Deep Dive

**Part 1 of 4 — Social Determinants & the Social Gradient in Health**

### The Central Finding of Medical Sociology

Health tracks social position. Not as a rich-vs-poor binary, but as a **social gradient**: at EVERY step up the SES ladder, average health improves and mortality falls — executives outlive their deputies, who outlive their clerks, even when all have salaries, housing, and healthcare. The famous civil-servant cohort studies established this within a single employer with universal health coverage, which is the point: access to doctors cannot be the whole story.

### Social Determinants of Health — The Causal Inventory

The **social determinants of health** are the conditions in which people are born, live, work, and age:

| Determinant | Health pathway |
|-------------|----------------|
| Income & wealth | Nutrition, housing quality, buffering emergencies, chronic scarcity stress |
| Education | Health literacy, employment access, sense of control; strongest single SES predictor of health behaviors |
| Occupation | Hazard exposure, autonomy vs. demand (low-control jobs predict cardiovascular disease), income stability |
| Neighborhood | Food access (food deserts), walkability, pollution and toxin exposure, violence, clinic proximity |
| Social connection | Networks deliver support, norms, and care; isolation predicts mortality at magnitudes rivaling smoking |

**Fundamental cause theory** explains a puzzle: specific diseases and risk factors change across history, yet the SES-health association persists. Because SES embodies flexible resources — money, knowledge, power, beneficial connections — advantaged groups redeploy those resources against WHATEVER the current health threat is (from cholera to cigarettes to novel screening technology). Prediction: disparities are LARGEST for diseases we know how to prevent or treat, and smallest where medicine is helpless — a signature the exam loves to test with data.

<!-- yield:low -->
- Fundamental cause theory was proposed by the sociologists Bruce Link and Jo Phelan.
<!-- /yield -->

### Stress Biology — Where Sociology Meets the Endocrine Lesson

Chronic social adversity gets under the skin through the stress axes (connect to the endocrine/nervous lesson):

- Repeated or unrelenting stressors — economic insecurity, discrimination, unsafe neighborhoods — keep the HPA axis and sympathetic system chronically engaged.
- **Allostatic load**: the cumulative physiological wear (blood pressure, cortisol dysregulation, inflammation, metabolic markers) from prolonged adaptation; it rises with lower SES and mediates part of the gradient.
- The **weathering hypothesis**: chronic exposure to discrimination and disadvantage accelerates biological aging in marginalized groups — proposed to explain why some racial disparities (e.g., birth outcomes) WIDEN with maternal age and persist at every education level.

### The Vocabulary of Difference vs. Injustice

- **Health disparity**: any measurable difference in health between groups.
- **Health inequity**: the subset of disparities that are avoidable and unjust — produced by social arrangements rather than biology or free informed choice. The terms are not synonyms; exam items test the distinction.
- Disparities are documented across SES, race/ethnicity (persisting after controlling SES — pointing at discrimination, segregation, and care differences), gender (women live longer but report more morbidity; the mortality-morbidity paradox), and geography (rural hospital closures, urban environmental burdens).

### Life-Course Effects

Early environments program later health: childhood poverty predicts adult cardiovascular and metabolic disease even among the upwardly mobile (**latency effects**), while disadvantage also **accumulates** across life (pathway effects). Critical-period logic will feel familiar from embryology — the sociology version simply runs on housing, nutrition, and stress instead of teratogens.`
    },
    {
      id: 'hdis1-worked',
      type: 'text' as const,
      content: `### Worked Example — Testing Fundamental Cause Theory Against Data

**Problem 1.** In Country X, Disease B was untreatable and SES-flat in 1950. A cheap screening test and effective treatment arrived in 1980. By 2020 its mortality had fallen 60 percent overall: 85 percent in the top SES quintile, 35 percent in the bottom.

- **(a)** What happened to the SES gradient in Disease B mortality between 1950 and 2020?
- **(b)** Why, by fundamental cause theory, did a neutral technology produce the pattern in (a)?
- **(c)** An answer choice says the treatment works less well in low-SES patients. Do the data show that?
- **(d)** Which policy would the theory predict cuts the Disease B gradient most: an information campaign, more technology, or automatic screening?

**(a) The gradient.** A wide gradient opened where none existed. Mortality fell for everyone, but 85 percent at the top against 35 percent at the bottom: a life-saving innovation WIDENED the disparity.

**(b) Deployment followed resources.** Using the test and treatment took knowledge of the test, insurance, clinic access and follow-up capacity, all flexible resources. The theory's core prediction is that new health-relevant technology is captured first and best by the advantaged.

**(c) The biology trap.** No. The data show slower diffusion to the bottom quintile, not differential biology. The treatment still cut low-SES mortality by 35 percent.

**(d) Defaults win.** Interventions that do not depend on personal flexible resources (automatic screening defaults, universal outreach, treatment brought to neighborhoods) beat information campaigns, which the advantaged use faster. Adding MORE technology without changing who can deploy it preserves or widens the gap.

**Problem 2.** In Country X, Disease C's major risk behavior was spread EVENLY across classes in 1950. After mass publicity of the risk in 1970, the behavior declined fastest among the educated, and Disease C mortality now shows a steep gradient.

- **(a)** Which flexible resource produced this gradient?
- **(b)** What does this imply about today's behavioral gradients, such as smoking?
- **(c)** Country X's findings are ecological time series. What can they not license, and why does the theory survive anyway?

**(a) Information.** Same logic, behavioral channel: information is also a resource, and the educated converted the publicity into behavior change faster.

**(b) Recent, not timeless.** Risk behaviors that were once class-neutral became class-patterned, so TODAY'S behavioral gradients (smoking) are historically recent products, not timeless class traits.

**(c) Method check.** Ecological time series license no individual-level causation. The theory survives because its distinctive PATTERN appears where rival accounts predict none: gradients that open only once something can be done, after treatment for Disease B and after publicity for Disease C.

**Problem 3.** In Country X, deaths from Disease A, which had no known prevention or treatment in 1950 and still has none in 2020, show almost no SES gradient in either year.

- **(a)** Why does no gradient form for Disease A, according to fundamental cause theory?
- **(b)** What job does Disease A do in a passage that tests the theory?
- **(c)** What kind of question should you expect it to set up?

**(a) Nothing to buy.** Where medicine and prevention are powerless, flexible resources have nothing to purchase, so no gradient forms.

**(b) The negative control.** Disease A is the theory's negative control: it shows that a gradient appears only where something CAN be done. Its presence in a passage is never decorative.

**(c) The contrast item.** Expect a question contrasting Disease A with Diseases B and C: same country and same classes, but a gradient only where prevention or treatment exists. That pattern is the theory's fingerprint.`
    },
    {
      id: 'hdis1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Social Determinants & the Gradient** 🎯`,
      exercise: {
        questions: [
          {
            question: `Within a single government agency where every employee has stable pay and identical health coverage, mortality still falls step-by-step with each increase in civil-service grade. This finding is most damaging to the claim that health disparities are primarily caused by:`,
            options: [`Chronic stress differences between ranks`, `Differential access to medical care`, `Work autonomy differences between ranks`, `Health behavior differences between ranks`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The design holds healthcare access (and employment itself) essentially constant, yet the gradient persists across every grade — so unequal access to doctors cannot be the main engine. The gradient's fine-grained, every-step character instead implicates psychosocial factors that vary continuously with rank, such as control over work and chronic stress, which the other options name and the data leave standing.`
          },
          {
            question: `Which disease-specific finding would most WEAKEN fundamental cause theory?`,
            options: [`A gradient that widened after an effective treatment arrived`, `A gradient that persists under universal health coverage`, `A gradient that emerged after a risk behavior was publicized`, `A steep gradient for a disease no one can prevent or treat`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The theory's mechanism is flexible resources (money, knowledge, power, connections) deployed against current threats, so advantage should pay off where something CAN be bought (prevention or treatment) and nowhere else. A steep gradient for a disease no one can prevent or treat is the one pattern the theory says should not exist, so it weakens the theory most. A gradient that widened after an effective treatment arrived and one that emerged after a risk behavior was publicized are the theory's core predictions, and a gradient that persists under universal health coverage fits its claim that resources find new routes to advantage.`
          },
          {
            question: `A researcher measures blood pressure, cortisol regulation, inflammatory markers, and metabolic indicators in adults, combining them into a single index of cumulative physiological wear that rises with years of economic hardship. The construct being measured is:`,
            options: [`The socioeconomic gradient in health`, `Weathering, which applies only to elderly subjects`, `Allostatic load from chronic stress exposure`, `Health inequity between income groups`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Allostatic load is precisely this multi-system tally of wear from prolonged stress-axis engagement — the biological ledger where chronic social adversity is recorded. The social gradient is the population-level SES-health association the index helps EXPLAIN; weathering applies the same logic to discrimination-driven accelerated aging and requires no elderly sample; inequity is a normative classification of disparities, not a biomarker.`
          },
          {
            question: `Two findings: (a) men and women differ in autoimmune disease rates in ways tied to X-chromosome biology; (b) two neighborhoods differ five-fold in asthma hospitalizations because one sits beside a freight corridor that zoning decisions routed through low-income housing. In disparity/inequity terms:`,
            options: [`Both are disparities, but only (b) is also an inequity`, `Both are disparities, and both are also inequities`, `Both are disparities, but only (a) is also an inequity`, `Neither is a disparity because both have identifiable causes`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Disparity is the descriptive umbrella: any measured between-group difference, which covers both findings. Inequity adds the normative tests of avoidability and injustice — chromosome-linked disease biology fails those tests, while zoning-assigned pollution exposure passes both (it could be otherwise, and its burden was socially allocated). The distinction determines which differences health policy is obligated to target.`
          },
          {
            question: `Adults who escaped childhood poverty and achieved high incomes still show elevated cardiovascular risk decades later, compared with the always-affluent of identical adult SES. This pattern most directly supports:`,
            options: [`The claim that adult income and education fully determine health`, `A life-course latency effect of early-life conditions`, `Reverse causation from adult disease to childhood poverty`, `Health selection, in which illness drives downward mobility`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Holding adult SES constant while childhood conditions still predict adult disease is the definitional evidence for latency (critical/sensitive-period) effects: early environments leave durable biological signatures — stress-axis calibration, developmental programming — that later mobility does not erase. Reverse causation is chronologically impossible here, and health selection (illness pushing people down the ladder) cannot explain people who rose into affluence.`
          }
        ]
      }
    },
    {
      id: 'hdis1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **A fine-grained gradient.** Income, education, occupation, neighborhood and connection shape health at every SES step.
- **Fundamental cause theory.** Flexible resources are redeployed against each era's threats, so gaps peak where disease is preventable or treatable.
- **Adversity becomes biology.** Allostatic load tallies chronic-stress wear; childhood conditions echo in adult disease (latency).
- **Disparity vs. inequity.** A disparity is any group difference; an inequity is the avoidable, socially produced subset.

**Common traps**

- **Blaming access alone.** The gradient persists under identical coverage; job control and chronic stress, not access, vary with rank.
- **Calling every gap an inequity.** Chromosome-linked differences are disparities only; inequity needs avoidability and injustice.
- **New technology closes gaps.** A neutral innovation reaches the advantaged first, so it widens gaps until access is automatic.
- **Mobility erases early risk.** Adults who rose out of childhood poverty still carry elevated cardiovascular risk.

<!-- yield:low -->
**Low-yield extras**

- Fundamental cause theory's authors (Link and Phelan).
<!-- /yield -->`
    }
  ]
};
