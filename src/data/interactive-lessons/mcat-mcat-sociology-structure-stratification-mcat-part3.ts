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

**Problem 1.** Sociologists compare two cohorts in an industrial city: Cohort 1 entered the labor force in 1965, Cohort 2 in 1995, after the city's factories closed. In Cohort 1, 40 percent of factory workers' children reached professional occupations; in Cohort 2, only 12 percent did.

- **(a)** What kind of mobility does the drop from 40 to 12 percent reflect?
- **(b)** What feature of the comparison points to that classification?
- **(c)** What would an effort-based explanation of the drop have to assume?

**(a) Structural mobility.** Intergenerational structural mobility: children are compared with their factory-worker parents, and the vanishing industrial ladder cut upward movement for the whole cohort.

**(b) The tell.** The comparison is across cohorts, not individuals: two whole generations meeting different opportunity structures.

**(c) The effort assumption.** That Cohort 2's children had less talent or worked less hard than Cohort 1's. Nothing in the data requires that: the opportunity structure changed, so mobility rates changed for everyone, independent of any individual's talent or effort.

**Problem 2.** In the same city's Cohort 2, the children of factory workers who DID reach professional jobs overwhelmingly had a parent who had completed some college and reported "knowing a professional family socially."

- **(a)** Which capital does a parent's college experience represent?
- **(b)** Which capital does knowing a professional family represent?
- **(c)** Which Bourdieu idea explains how these children still climbed after the closures?
- **(d)** Why is "they had more money" a weak reading of this finding?

**(a) Cultural capital.** Parental college exposure supplies the know-how and fluency that advantaged institutions reward.

**(b) Social capital.** Knowing a professional family socially is a network: resources reached through who you know.

**(c) Conversion.** Within the constrained structure, the families that still climbed held non-economic capitals. This is Bourdieu's conversion machinery: those capitals buffered a family against economic restructuring.

**(d) The passage's variables.** An answer that says only "they had more money" misses the passage's actual variables: education and networks, not income.

**Problem 3.** In the same city, interviewed Cohort 2 members who stayed in manual work overwhelmingly attributed their position to personal failure ("I didn't apply myself"), even though upward mobility had fallen from 40 to 12 percent.

- **(a)** Which belief is doing the work when people read a structural outcome as a personal one?
- **(b)** What does a conflict theorist say this belief accomplishes?
- **(c)** What does an interactionist add?
- **(d)** Is this self-blame EVIDENCE that effort differences caused the cohort-wide decline?

**(a) Meritocracy.** Members read a structural outcome as a personal one: the ideology of **meritocracy** doing legitimating work. Once the belief that positions reflect effort is internalized, structurally produced immobility is experienced as individual failure.

**(b) Conflict reading.** Experiencing immobility as personal failure quiets challenges to the structure.

**(c) Interactionist reading.** The internalized attribution shapes self-concept ("I didn't apply myself" becomes who I am).

**(d) Wrong altitude.** No. The cohort comparison is a macro claim about opportunity structures, the capitals a meso claim about families, and this a micro claim about attribution. Citing micro self-blame as evidence for the macro decline is the MCAT's favorite wrong answer.`
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
            yield: 'HIGH',
            explanation: `Cultural capital is precisely this unwritten institutional fluency — tastes, manners, and know-how transmitted in advantaged families that institutions silently reward. It is distinct from skills (human capital), from money, and from network connections (social capital). Achieved status is not a capital at all: it is a social position earned through one's own actions, not a resource she lacks. Her academic strength shows that ability and achievement are present; what is missing is the embodied knowledge that converts ability into institutional recognition.`
          },
          {
            question: `When a nation's agricultural sector mechanizes, millions of farm laborers' children end up in urban service jobs of lower standing than their parents held, regardless of individual talent. This intergenerational, downward movement is best classified as an example of:`,
            options: [`Structural mobility, because economic change moved a whole stratum`, `Social reproduction, because the lower stratum re-created itself`, `Horizontal mobility, because the children changed economic sectors`, `Meritocratic sorting, because talent determined each child's outcome`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Comparing children's positions with their parents' makes this intergenerational mobility; the question asks what further kind of movement it is. The defining feature of structural mobility is that shifts in the occupational structure itself, not individual attributes, move entire groups up or down, which is what mechanization did here. The stem severs outcomes from talent, ruling out meritocratic sorting. The children ended up lower than their parents, so the movement is vertical rather than horizontal, and positions were not re-created across generations, so it is not social reproduction.`
          },
          {
            question: `A family in a wealthy country has stable housing, sufficient food, and a television, yet cannot afford internet access, school trips, or transportation to most jobs, cutting them off from ordinary participation in their society. This situation is best described as:`,
            options: [`Absolute poverty, because participation is a basic need`, `Relative poverty, judged against their society's norms`, `Neither form of poverty, because subsistence needs are met`, `The feminization of poverty among single-mother households`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Relative poverty is measured against the prevailing standards of one's own society: subsistence is covered, but full social participation is not — which is exactly the scenario. Absolute poverty requires deprivation below subsistence. Calling it neither form of poverty mistakenly assumes poverty has only the absolute definition, and nothing here concerns the gendered distribution of poverty.`
          },
          {
            question: `Weber's multidimensional view of stratification improves on a purely economic model MOST clearly in which case?`,
            options: [`A CEO with high income, high prestige, and political power`, `Two janitors with identical wages and identical prestige`, `A subsistence farmer with no income, prestige, or power`, `A state judge with a modest salary but high prestige and power`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Weber separated class (economic), status (prestige), and power precisely because they can DIVERGE; the judge — middling on the economic axis but high on prestige and power — is invisible to a one-axis economic model. The CEO and the farmer are consistent across all three dimensions, so a single economic axis would rank them just as well; identical janitors discriminate between nothing.`
          },
          {
            question: `Researchers find that children from poor families who attend well-funded schools still enter professional jobs at lower rates than wealthy classmates with identical grades, largely because hiring flows through informal referrals from family acquaintances. The capital gap doing the work in this finding is:`,
            options: [`Social capital, because hiring flowed through referrals`, `Economic capital, because their schools received less funding`, `Cultural capital, because the poor students earned lower grades`, `Human capital, because the poor students were less skilled`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The design holds schooling quality and grades constant — equalizing the usual economic and skill explanations — and the remaining mechanism is who can activate professional networks for referrals: social capital by definition. The economic-capital and cultural-capital options rest on premises that contradict the stated controls (same schools, identical grades), and the human-capital skill claim is likewise ruled out by the grade-matching.`
          }
        ]
      }
    },
    {
      id: 'strat3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Weber's three dimensions.** Class, status/prestige and power usually travel together but can diverge.
- **Bourdieu's capitals convert.** Families convert economic, cultural and social capital into one another to reproduce advantage.
- **Mobility vocabulary.** Inter- vs. intragenerational, vertical vs. horizontal; structural mobility moves whole strata at once.
- **Absolute vs. relative poverty.** Absolute is below subsistence; relative is below one's own society's standard of participation.

**Common traps**

- **Swapping the capitals.** Know-how and credentials are cultural capital, networks social capital; neither is simply more money.
- **Swapping levels.** Colonial extraction explains between-nation inequality, not one family's poverty within a nation.
- **Self-blame as evidence.** Internalized self-blame is meritocratic ideology at work, not proof that effort caused a structural decline.
- **Relative poverty isn't poverty.** A family with food and shelter can still be poor, cut off from ordinary participation.`
    }
  ]
};
