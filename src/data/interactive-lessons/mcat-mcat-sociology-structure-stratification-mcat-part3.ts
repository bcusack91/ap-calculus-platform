export const mcatSocioStratPart3Data = {
  topicSlug: 'mcat-sociology-structure-stratification-mcat',
  sections: [
    {
      id: 'strat3-intro',
      type: 'text' as const,
      content: `# Social Structure & Stratification — Deep Dive

**Part 3 of 4 — Stratification: Class, Capital, Mobility & Poverty**

### The Architecture of Inequality

**Social stratification** is society's layered ranking of people with unequal access to resources. Systems differ in rigidity: **caste** systems close movement (position ascribed at birth), **class** systems permit movement in principle. Every stratification question ultimately asks two things: what is being unequally distributed, and how do positions transmit across generations?

### The Currencies of Position

- **Socioeconomic status (SES)**: the composite of income, education, and occupation — the workhorse variable of health-disparities research.
- Weber's three distinct dimensions (against Marx's single class axis): **class** (economic), **status/prestige** (social honor), **power** (political capacity). They usually travel together but can diverge — a drug dealer with wealth but no prestige; a member of the clergy with prestige but modest income.
- **Bourdieu's capitals**: position is held with more than money.
  - **Economic capital**: wealth and income.
  - **Cultural capital**: knowledge, tastes, manners, credentials that signal belonging in advantaged settings (knowing how to talk to a professor at office hours).
  - **Social capital**: resources accessed through networks — who you know and what they can do for you.
  - The conversion insight: families convert one capital into another (money buys elite schooling; schooling yields networks), which is HOW advantage reproduces without any formal inheritance of rank.

### Mobility — The Full Vocabulary

| Term | Meaning |
|------|---------|
| **Intergenerational mobility** | Change in position between parent and child |
| **Intragenerational mobility** | Change within one person's lifetime |
| **Vertical mobility** | Movement up or down the hierarchy |
| **Horizontal mobility** | New position, same level (nurse → teacher) |
| **Structural mobility** | Whole groups move because the economy changes shape (factory automation pushes a class down) — no individual merit or failure required |
| **Meritocracy** | The IDEAL of position by ability and effort; sociologists treat it as a legitimating belief to be tested, not assumed |

**Social reproduction** names the finding that strata re-create themselves across generations — via inherited capitals, residential segregation, school funding tied to local wealth, and network hiring.

### Poverty — Two Definitions, Different Politics

- **Absolute poverty**: resources below what subsistence requires (unable to secure food, shelter, basic care).
- **Relative poverty**: deprivation compared to the surrounding society's standard of living — you can be relatively poor with a phone and a roof; what is deprived is full participation in your society.
- **Feminization of poverty**: women disproportionately populate the poor, driven by wage gaps, single-parent household structures, and caregiving penalties.
- **Social exclusion**: the compounding shutout from institutions — banking, housing, politics, health care — that both results from and deepens poverty.

### Spatial Inequality

Place is a stratification variable: **residential segregation** concentrates poverty and advantage into different neighborhoods; concentrated-poverty neighborhoods bundle weak schools, environmental hazards, thin job networks, and distance from services (suburbanization pulled employment away from urban cores). **Environmental injustice** — hazardous land uses sited disproportionately near poor and minority communities — links spatial inequality directly to health, setting up the health-disparities lesson.

### Global Stratification

Inequality also ranks nations (high-, middle-, low-income). Note the level-of-analysis discipline: explanations of BETWEEN-nation inequality (colonial extraction, trade dependency) are not interchangeable with explanations of WITHIN-nation inequality — passages sometimes swap levels to see if you notice.`
    },
    {
      id: 'strat3-worked',
      type: 'text' as const,
      content: `### Worked Example — Whose Mobility Is It?

**Passage-style problem.** Sociologists compare two cohorts in an industrial city. Cohort 1 entered the labor force in 1965; Cohort 2 in 1995, after the city's factories closed. Findings:

1. In Cohort 1, 40 percent of factory workers' children reached professional occupations; in Cohort 2, only 12 percent did.
2. In Cohort 2, the children of factory workers who DID reach professional jobs overwhelmingly had a parent who had completed some college and reported "knowing a professional family socially."
3. Interviewed Cohort 2 members who stayed in manual work overwhelmingly attributed their position to personal failure ("I didn't apply myself").

**Reading finding 1.** The cohort-wide collapse in upward movement tracks the disappearance of an industrial ladder — this is **structural mobility** running downward: the opportunity structure changed, so mobility rates changed for everyone, independent of any individual's talent or effort. Comparing across cohorts (not individuals) is the tell.

**Reading finding 2.** Within the constrained structure, WHICH families still climbed? Those holding **cultural capital** (parental college exposure) and **social capital** (professional networks). This is Bourdieu's conversion machinery: non-economic capitals buffering a family against economic restructuring. An answer that says only "they had more money" misses the passage's actual variables.

**Reading finding 3.** Members read a structural outcome as a personal one. Sociologists flag this as the ideology of **meritocracy** doing legitimating work: when the belief that positions reflect effort is internalized, structurally produced immobility is experienced as individual failure — which quiets challenges to the structure (a conflict-theory point) and shapes self-concept (an interactionist one).

**The integrative point.** One dataset yields three altitude-appropriate claims: a macro claim about opportunity structures, a meso claim about family capitals, and a micro claim about internalized attribution. The MCAT's favorite wrong answers move a finding to the wrong altitude — e.g., citing finding 3's self-blame as EVIDENCE that effort differences caused finding 1's decline.`
    },
    {
      id: 'strat3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Stratification & Mobility** 🎯`,
      exercise: {
        questions: [
          {
            question: `A first-generation college student is academically strong but does not know that professors expect office-hours visits, how to request recommendation letters, or which extracurriculars signal "leadership" to admissions committees. Bourdieu would say she lacks:`,
            options: [`Human capital`, `Social capital`, `Cultural capital`, `Achieved status`],
            correctAnswer: 2,
            explanation: `Cultural capital is precisely this unwritten institutional fluency — tastes, manners, and know-how transmitted in advantaged families that institutions silently reward. It is distinct from skills and credentials (human capital), from money, and from network connections (social capital). Her academic strength shows achieved status is present; what is missing is the embodied knowledge that converts ability into institutional recognition.`
          },
          {
            question: `When a nation's agricultural sector mechanizes, millions of farm laborers' children end up in urban service jobs of lower relative standing — regardless of individual talent. This pattern exemplifies:`,
            options: [`Structural mobility, because economic change moved a whole stratum`, `Intragenerational mobility, because it occurred within single lifetimes`, `Horizontal mobility, because workers changed sectors`, `Meritocratic sorting, because talent determined outcomes`],
            correctAnswer: 0,
            explanation: `The defining feature of structural mobility is that shifts in the occupational structure itself — not individual attributes — move entire groups up or down. The question explicitly severs outcomes from talent, ruling out meritocratic sorting. The movement described is downward in standing (not horizontal), and it compares parents' positions to children's, making it intergenerational.`
          },
          {
            question: `A family in a wealthy country has stable housing, sufficient food, and a television, yet cannot afford internet access, school trips, or transportation to most jobs, cutting them off from ordinary participation in their society. This situation is best described as:`,
            options: [`Absolute poverty, because participation is a basic need`, `Relative poverty, judged against their society's norms`, `Neither form of poverty, because subsistence needs are met`, `The feminization of poverty among single parents`],
            correctAnswer: 1,
            explanation: `Relative poverty is measured against the prevailing standards of one's own society: subsistence is covered, but full social participation is not — which is exactly the scenario. Absolute poverty requires deprivation below subsistence. Calling it neither form of poverty mistakenly assumes poverty has only the absolute definition, and nothing here concerns the gendered distribution of poverty.`
          },
          {
            question: `Weber's multidimensional view of stratification improves on a purely economic model MOST clearly in which case?`,
            options: [`A CEO with high income, high prestige, and political power`, `Two janitors with identical wages and identical prestige`, `A subsistence farmer with no income, prestige, or power`, `A state judge with a modest salary but high prestige and power`],
            correctAnswer: 3,
            explanation: `Weber separated class (economic), status (prestige), and power precisely because they can DIVERGE; the judge — middling on the economic axis but high on prestige and power — is invisible to a one-axis economic model. The CEO and the farmer are consistent across all three dimensions, so a single economic axis would rank them just as well; identical janitors discriminate between nothing.`
          },
          {
            question: `Researchers find that children from poor families who attend well-funded schools still enter professional jobs at lower rates than wealthy classmates with identical grades, largely because hiring flows through informal referrals from family acquaintances. The capital gap doing the work in this finding is:`,
            options: [`Social capital, because hiring flowed through referrals`, `Economic capital, because school funding was unequal`, `Cultural capital, because the students' grades differed`, `Human capital, because the poor students were less skilled`],
            correctAnswer: 0,
            explanation: `The design holds schooling quality and grades constant — equalizing the usual economic and skill explanations — and the remaining mechanism is who can activate professional networks for referrals: social capital by definition. The economic-capital and cultural-capital options rest on premises that contradict the stated controls (same schools, identical grades), and the human-capital skill claim is likewise ruled out by the grade-matching.`
          }
        ]
      }
    },
    {
      id: 'strat3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Stratification systems range from closed (caste, ascribed) to open (class); SES bundles income, education, occupation
- Weber splits position into class, status/prestige, and power — dimensions that can diverge; Bourdieu adds cultural and social capital, and families CONVERT capitals to reproduce advantage
- Mobility vocabulary: inter- vs. intragenerational, vertical vs. horizontal, and structural mobility (the economy moves whole strata); meritocracy is a legitimating ideal to test, not assume
- Absolute poverty = below subsistence; relative poverty = below one's society's standard of participation; feminization of poverty and social exclusion describe who and how deep
- Space stratifies: residential segregation concentrates (dis)advantage, environmental hazards cluster near poor communities — the bridge to health disparities; keep between-nation and within-nation explanations at their own levels`
    }
  ]
};
