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

**Fundamental cause theory** (Link & Phelan) explains a puzzle: specific diseases and risk factors change across history, yet the SES-health association persists. Because SES embodies flexible resources — money, knowledge, power, beneficial connections — advantaged groups redeploy those resources against WHATEVER the current health threat is (from cholera to cigarettes to novel screening technology). Prediction: disparities are LARGEST for diseases we know how to prevent or treat, and smallest where medicine is helpless — a signature the exam loves to test with data.

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

**Passage-style problem.** Researchers assemble mortality data for Country X:

1. In 1950, deaths from Disease A (no known prevention or treatment then or now) show almost no SES gradient. In 2020, Disease A mortality is still SES-flat.
2. Disease B was untreatable in 1950, with SES-flat mortality. A cheap screening test and effective treatment arrived in 1980. By 2020, Disease B mortality has fallen 70 percent overall — but the decline is 85 percent in the top SES quintile and 35 percent in the bottom, opening a wide gradient where none existed.
3. Disease C's major risk behavior was distributed EVENLY across classes in 1950; after mass publicity of the risk in 1970, the behavior declined fastest among the educated, and Disease C mortality now shows a steep gradient.

**Reading finding 1.** Where medicine and prevention are powerless, flexible resources have nothing to purchase — no gradient forms. This is fundamental cause theory's negative control, and its presence in a passage is never decorative: expect a question contrasting it with Disease B.

**Reading finding 2.** The technology arrived neutral, but deployment followed resources: knowledge of the test, insurance, clinic access, follow-up capacity. A life-saving innovation WIDENED the disparity — the theory's core prediction that new health-relevant technology is captured first and best by the advantaged. Note the trap answer "the treatment doesn't work for low-SES patients": the data show slower diffusion, not differential biology.

**Reading finding 3.** Same logic, behavioral channel: information is also a resource, and the educated converted the publicity into behavior change faster. Risk behaviors that were once class-neutral became class-patterned — which is why TODAY'S behavioral gradients (smoking) are historically recent products, not timeless class traits.

**The integrative question to expect:** "Which policy would fundamental cause theory predict REDUCES the Disease B gradient most?" Ranked by the theory: interventions that do not depend on personal flexible resources — automatic screening defaults, universal outreach, treatment brought to neighborhoods — beat information campaigns, which the advantaged metabolize faster. Any answer that only adds MORE technology without changing who can deploy it preserves or widens the gap.

**Method footnote.** All three findings are ecological time-series — no individual-level causation is licensed; the theory survives because its distinctive PATTERN (gradients tracking treatability) appears where rivals predict none.`
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
            explanation: `The design holds healthcare access (and employment itself) essentially constant, yet the gradient persists across every grade — so unequal access to doctors cannot be the main engine. The gradient's fine-grained, every-step character instead implicates psychosocial factors that vary continuously with rank, such as control over work and chronic stress, which the other options name and the data leave standing.`
          },
          {
            question: `Which pattern of disease-specific data would BEST support fundamental cause theory?`,
            options: [`Equal SES gradients across all diseases regardless of treatability`, `Steep gradients for infectious diseases, flat ones for chronic diseases`, `Gradients that vanish once universal health coverage is introduced`, `Steep gradients for treatable diseases, flat ones for untreatable diseases`],
            correctAnswer: 3,
            explanation: `The theory's mechanism is flexible resources (money, knowledge, power, connections) deployed against current threats — so advantage should show its largest health payoff exactly where something CAN be done, and no payoff where nothing can. That treatability-tracking pattern is the theory's unique fingerprint; uniform gradients would fit simpler material-deprivation accounts instead, an infectious-versus-chronic split tracks disease type rather than treatability, and gradients vanishing under universal coverage contradicts the theory's prediction that resources find new routes to advantage.`
          },
          {
            question: `A researcher measures blood pressure, cortisol regulation, inflammatory markers, and metabolic indicators in adults, combining them into a single index of cumulative physiological wear that rises with years of economic hardship. The construct being measured is:`,
            options: [`The socioeconomic gradient in health`, `Weathering, which applies only to elderly subjects`, `Allostatic load from chronic stress exposure`, `Health inequity between income groups`],
            correctAnswer: 2,
            explanation: `Allostatic load is precisely this multi-system tally of wear from prolonged stress-axis engagement — the biological ledger where chronic social adversity is recorded. The social gradient is the population-level SES-health association the index helps EXPLAIN; weathering applies the same logic to discrimination-driven accelerated aging and requires no elderly sample; inequity is a normative classification of disparities, not a biomarker.`
          },
          {
            question: `Two findings: (a) men and women differ in autoimmune disease rates in ways tied to X-chromosome biology; (b) two neighborhoods differ five-fold in asthma hospitalizations because one sits beside a freight corridor that zoning decisions routed through low-income housing. In disparity/inequity terms:`,
            options: [`Both are disparities, but only (b) is also an inequity`, `Both are disparities, and both are also inequities`, `Both are disparities, but only (a) is also an inequity`, `Neither is a disparity because both have identifiable causes`],
            correctAnswer: 0,
            explanation: `Disparity is the descriptive umbrella: any measured between-group difference, which covers both findings. Inequity adds the normative tests of avoidability and injustice — chromosome-linked disease biology fails those tests, while zoning-assigned pollution exposure passes both (it could be otherwise, and its burden was socially allocated). The distinction determines which differences health policy is obligated to target.`
          },
          {
            question: `Adults who escaped childhood poverty and achieved high incomes still show elevated cardiovascular risk decades later, compared with the always-affluent of identical adult SES. This pattern most directly supports:`,
            options: [`The claim that adult SES fully determines health`, `A life-course latency effect of early-life conditions`, `Reverse causation from adult disease to childhood poverty`, `Health selection, in which illness drives downward mobility`],
            correctAnswer: 1,
            explanation: `Holding adult SES constant while childhood conditions still predict adult disease is the definitional evidence for latency (critical/sensitive-period) effects: early environments leave durable biological signatures — stress-axis calibration, developmental programming — that later mobility does not erase. Reverse causation is chronologically impossible here, and health selection (illness pushing people down the ladder) cannot explain people who rose into affluence.`
          }
        ]
      }
    },
    {
      id: 'hdis1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Health follows a fine-grained social GRADIENT (every step matters), persisting even with universal care — access alone cannot explain it
- Social determinants — income, education, occupation, neighborhood, connection — are the upstream causes; isolation and low job control are mortality-grade exposures
- Fundamental cause theory: flexible resources (money, knowledge, power, connections) get redeployed against each era's threats — so disparities concentrate where disease is preventable/treatable, and new technology widens gaps until deployment stops depending on personal resources
- Chronic adversity becomes biology via stress axes: allostatic load tallies the wear; weathering extends it to discrimination-accelerated aging
- Disparity = any group difference; inequity = the avoidable, socially produced subset; life-course effects (latency + accumulation) mean childhood conditions echo in adult disease`
    }
  ]
};
