export const mcatSociologyPart2Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so2-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 2 of 7 — Social Stratification & Inequality**

### Types of Social Stratification

| System | Description | Mobility | Status type |
|--------|-------------|----------|-------------|
| **Caste** | Birth-determined, rigid social position | None | Ascribed |
| **Class** | Based on economic resources | Some | Achieved (and ascribed) |
| **Estate** | Feudal landholding hierarchy | Very low | Ascribed |
| **Meritocracy** | Rewards based on ability/effort | High (idealized) | Achieved |

- **Ascribed status:** assigned at birth, involuntary (race, sex assigned at birth, caste).
- **Achieved status:** earned through choices/effort (physician, college graduate).
- **Master status:** the status that dominates how others perceive you (often overrides others — e.g., "patient," "felon").

### Social Class Indicators (SES)

- **Income**: flow — what you earn (wages, salary) per period.
- **Wealth**: stock — what you own (assets minus debts). Far more unequally distributed than income; the top decile owns the majority of national wealth.
- **Education**: level of formal schooling; the strongest single predictor of long-run SES.
- **Occupation / occupational prestige**: type of work and its social standing.

### Social Mobility

| Type | Meaning |
|------|---------|
| **Intergenerational** | Change in status across generations (parent → child) |
| **Intragenerational** | Change within one person's own lifetime/career |
| **Vertical** | Move up or down the hierarchy |
| **Horizontal** | Change positions at the same level |
| **Structural mobility** | Movement caused by changes in society itself (e.g., industrialization creating new jobs), not individual effort |

### The Three Paradigms on Inequality

| Paradigm | Level | Why does stratification exist? |
|----------|-------|--------------------------------|
| **Functionalism** (Davis–Moore) | Macro | Inequality is functional: it motivates the most capable people to fill the most important, demanding roles. |
| **Conflict theory** (Marx) | Macro | Inequality reflects the bourgeoisie's exploitation of the proletariat; the powerful reproduce their advantage. |
| **Symbolic interactionism** | Micro | Class shapes everyday interaction, consumption symbols, and how people display/perceive status (cf. Weber's status groups). |

- **Davis–Moore thesis** = the functionalist defense of inequality. The classic critique (Tumin): it ignores inherited privilege and undervalued-but-essential jobs.
- **Marx:** class defined by relationship to the **means of production** (owners vs. workers).
- **Weber:** stratification is multidimensional — **class** (economic), **status** (prestige), and **party** (power).

### Poverty & Its Framing

- **Absolute poverty:** lacking resources for survival (food, shelter).
- **Relative poverty:** falling below the typical standard of one's society.
- **Social reproduction:** institutions (esp. education) transmit and perpetuate inequality across generations.
- **Cultural capital (Bourdieu):** non-financial assets (knowledge, manners, credentials) that confer advantage. **Social capital:** resources accessed through one's network.

### Health Disparities (ULTRA HIGH YIELD)

Social determinants of health (SDOH) — the conditions in which people are born, grow, live, work, and age:
- **Economic stability**, **education access**, **healthcare access**, **neighborhood/built environment**, **social/community context**.
- **SES gradient:** health improves at every step UP the SES ladder — not just a poor-vs.-rich split (Whitehall studies).
- **Race/ethnicity**: disparities in access, treatment intensity, and outcomes, partly independent of SES.
- **Geography**: rural underservice; urban environmental exposures.

### Demographic Snapshot — U.S. Life Expectancy by Group (illustrative)

| Group | Approx. life expectancy (yrs) | Interpretation |
|-------|-------------------------------|----------------|
| Highest income quintile | ~87 | Largest gap is by income, not just race |
| Lowest income quintile | ~78 | ~9-yr gap tracks the SES gradient |
| Non-Hispanic White | ~78 | |
| Non-Hispanic Black | ~75 | Reflects structural + access disparities |
| Hispanic | ~80 | "Hispanic paradox" — better than SES predicts |

### Intersectionality (Crenshaw)

Multiple social identities (race, class, gender, sexuality) **intersect** to create unique experiences of privilege or disadvantage. A low-income Black woman faces a configuration of disadvantage that is **not** simply the sum of "being low-income" + "being Black" + "being a woman" — it is qualitatively distinct.`
    },
    {
      id: 'so2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Stratification & Health Disparities** 🎯`,
      exercise: {
        questions: [
          {
            question: `A sociologist argues that paying surgeons far more than orderlies is necessary because it motivates talented people to endure years of difficult training for a role society critically needs. This argument reflects:`,
            options: [`The Davis–Moore thesis (functionalism) — stratification motivates the most able to fill the most important roles`, `Conflict theory — inequality reflects exploitation by the powerful`, `Symbolic interactionism — class shapes everyday meaning`, `Intersectionality — overlapping identities create unique disadvantage`],
            correctAnswer: 0,
            explanation: `The Davis–Moore thesis is the functionalist justification of inequality: unequal rewards are a functional mechanism to ensure the most qualified people fill the most demanding, socially important positions. The conflict-theory trap (option 2) makes the opposite claim — that inequality is exploitation that benefits the powerful, NOT a beneficial motivator. Tumin's critique of Davis–Moore is itself essentially a conflict-theory rebuttal.`
          },
          {
            question: `Using the life-expectancy table, the LARGEST gap shown is between the highest- and lowest-income quintiles (~9 years), exceeding the Black–White gap (~3 years). The best interpretation is:`,
            options: [`Socioeconomic status (the SES gradient) is a powerful determinant of health, and income captures variation that race alone does not`, `Race has no effect on health outcomes`, `Genetic differences between income groups explain the gap`, `The data prove poverty is caused by poor health`],
            correctAnswer: 0,
            explanation: `The table shows a graded relationship: health improves at every step up the SES ladder, and the income gap here is larger than the racial gap — illustrating the SES gradient. Option 2 overreaches (race still shows a gap and intersects with SES). Option 3 invokes genetics, which SDOH research rejects as the primary driver. Option 4 reverses causation; the data show association, and the dominant causal story runs from social conditions to health.`
          },
          {
            question: `A study finds that children of college-educated parents are themselves far more likely to attend college, partly because they absorb academic vocabulary, study habits, and "how school works" at home. Bourdieu would label these inherited, non-financial advantages:`,
            options: [`Cultural capital, a mechanism of social reproduction`, `Structural mobility`, `Absolute poverty`, `Achieved status`],
            correctAnswer: 0,
            explanation: `Cultural capital is non-financial assets — knowledge, linguistic style, dispositions, credentials — that advantage their holders within institutions like schools. Their transmission across generations is social reproduction. The trap is structural mobility (option 2), which refers to movement driven by society-wide changes (e.g., new industries), not inherited household advantage. Absolute poverty and achieved status are unrelated concepts.`
          }
        ]
      }
    },
    {
      id: 'so2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Stratification & Inequality

<details>
<summary><b>Example 1: Apply a paradigm to an inequality scenario</b></summary>

**Question:** A passage notes that elite private schools give their graduates connections and credentials that secure top jobs, "perpetuating advantage across generations." Which paradigm and which specific concept does this reflect?

**Solution:**
1. The emphasis is on inequality being **reproduced** to benefit those already advantaged → **conflict theory** (macro, power/inequality). ✓
2. The specific mechanism — institutions transmitting advantage across generations — is **social reproduction**; the connections/credentials are **cultural and social capital** (Bourdieu).
3. Contrast: a **functionalist** (Davis–Moore) would instead argue the system sorts talent into important roles efficiently.

**MCAT skill:** "perpetuating/reproducing advantage" + "who benefits" → conflict theory; "motivates the able / fills important roles" → functionalism.
</details>

<details>
<summary><b>Example 2: Classify the mobility</b></summary>

**Question:** Automation eliminates most factory jobs in a region; displaced workers retrain and move into lower-paid service jobs. Classify this movement.

**Solution:**
1. The cause is a change in the economy itself (automation), not individual merit → **structural mobility.** ✓
2. The direction is downward in pay/prestige → **vertical (downward) mobility.**
3. It occurs within workers' own careers → **intragenerational.**

**Why it matters:** Structural mobility decouples movement from individual effort — a frequent MCAT trap when a passage credits or blames individuals for shifts that were actually macro-economic.
</details>

<details>
<summary><b>Example 3: Read a health-disparity data table</b></summary>

**Question:** A table shows infant mortality (per 1,000 live births): top income quintile = 4; bottom quintile = 9; and within the bottom quintile, a further gap by race. What two sociological concepts does this pattern illustrate?

**Solution:**
1. Mortality worsening as income falls = the **SES gradient** / social determinants of health. ✓
2. A *further* racial gap **within** the lowest-income group, distinct from the income effect = **intersectionality** — race and class combine to produce a disadvantage not reducible to either alone. ✓

**Connection:** On the MCAT, when a table shows disparities along two axes simultaneously (income AND race), the intended concept is almost always intersectionality layered on the SES gradient.
</details>`
    },
    {
      id: 'so2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Stratification systems: caste (ascribed, rigid) vs. class (achieved + ascribed) vs. meritocracy (idealized).
- Functionalism (Davis–Moore) defends inequality; conflict theory (Marx) sees exploitation; Weber adds status & party.
- Income (flow) vs. wealth (stock); wealth is far more unequal.
- SES gradient: health improves at every step up the ladder. Intersectionality: overlapping identities create unique, non-additive disadvantage.
- Cultural capital + social reproduction (Bourdieu) explain how advantage is inherited.`
    }
  ]
};
