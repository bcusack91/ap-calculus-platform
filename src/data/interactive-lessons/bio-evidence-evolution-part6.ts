export const bioEvidencePart6Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🦴 Evidence of Evolution

**Part 6 of 7 — AP Practice: Evaluating Evidence for Evolution**

---

| Section |
|---------|
| What AP questions on this topic ask you to do |
| Worked free-response: cave salamanders |
| Data practice: insecticide resistance |
| Designing an experiment on resistance |
| Evaluating claims with multiple lines of evidence |

> 🔑 **Key Concept:** AP questions on evidence of evolution rarely ask you to recall a fact. They give you data (sequence differences, fossil layers, survival over time) and ask you to **make a claim, support it with specific evidence, and explain the reasoning** that connects the two.

### Task verbs and what they require

| Task verb | What a full-credit answer does | Example for this topic |
|-----------|-------------------------------|------------------------|
| **Identify** | Names the answer, no explanation needed | Identify the species most closely related to species A |
| **Describe** | States the relevant features or trend | Describe the change in survival from year 0 to year 8 |
| **Explain** | Gives the cause or mechanism, the "why" | Explain how insecticide use leads to resistance |
| **Justify** | Supports a claim with evidence from the data | Justify the claim using the sequence data |
| **Predict** | States an expected outcome | Predict survival if spraying stops |
| **Evaluate** | Judges whether evidence supports a claim | Evaluate whether eye loss is homologous |

### The claim–evidence–reasoning pattern

1. **Claim:** a direct answer to the question.
2. **Evidence:** specific numbers or observations from the stimulus (quote them).
3. **Reasoning:** the biological principle linking evidence to claim (for example, "fewer sequence differences indicate a more recent common ancestor").

Most lost points come from skipping step 2 ("the data show it") or step 3 (evidence with no principle). The worked example below shows all three.
      `
    },
    {
      id: 'bio-evidence-evolution-p6-s2-worked-frq',
      type: 'text' as const,
      content: `
### Worked free-response: cave salamanders

**Stimulus.** Two salamander species, A and B, live in caves 300 km apart. Both are pale and have no functional eyes. Species C, a sighted surface species, lives in streams near cave A; species D, also sighted, lives near cave B. Researchers sequenced a 1,000-base region of the same gene in all four species.

| Pair | Base differences |
|------|-----------------|
| A–B | 46 |
| A–C | 8 |
| B–D | 7 |
| C–D | 44 |
| A–D | 45 |
| B–C | 47 |

Embryos of species A and B begin to form small eyes, which then stop developing and become covered by skin.

**(a) Identify the species most closely related to species A.**

> Species C. A and C differ at only 8 of 1,000 bases, fewer than A differs from any other species.

**(b) Evaluate the claim that the eyeless condition of A and B was inherited from a single eyeless common ancestor.**

> **Claim:** The data do not support the claim; eye loss most likely evolved independently in each cave.
> **Evidence:** A is closest to sighted species C (8 differences) and B is closest to sighted species D (7 differences), while A and B differ at 46 bases.
> **Reasoning:** Each cave species shares a more recent ancestor with a sighted surface species than with the other cave species. If eye loss had been inherited from one eyeless ancestor, A and B would be each other's closest relatives. Eyelessness in A and B is therefore **analogous**, the product of **convergent evolution** in similar dark environments.

**(c) Explain what the embryonic eyes indicate about the ancestry of species A.**

> The eyes that begin to form and then degenerate are **vestigial** structures. They indicate that species A descended from ancestors with functional eyes, consistent with its close relationship to the sighted species C.

**(d) Justify why the DNA data are more reliable than shared appearance for determining relationships here.**

> Appearance can be shaped by similar selection pressures in similar environments (darkness favors loss of eyes and pigment in both caves), so look-alike traits may be convergent. Neutral DNA differences accumulate with time since divergence regardless of environment, so they track ancestry.

#### What made this answer score well

- Every claim quotes a number from the table.
- Each part names the principle (fewer differences = closer relatives; vestigial = inherited remnant; convergence in similar environments).
- Part (b) explicitly explains what the data **would** look like if the claim were true, then shows the data do not match.
      `
    },
    {
      id: 'bio-evidence-evolution-p6-s3-data',
      type: 'multiple-choice' as const,
      content: `
**Data Practice — Insecticide Resistance** 🎯

A town sprayed one insecticide for mosquito control every summer from year 0 to year 8, then stopped. Each year, researchers exposed a sample of wild-caught mosquitoes to a standard dose and recorded the percent that survived.

| Year | 0 | 2 | 4 | 6 | 8 | 12 (4 years after spraying stopped) |
|------|---|---|---|---|---|----|
| Survival (%) | 2 | 9 | 31 | 64 | 85 | 60 |
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes the survival data from year 0 to year 8?',
            options: [
              'Survival rose by about the same amount in each two-year interval',
              'Survival rose slowly in the early years and then rose very steeply',
              'Survival rose steeply in the early years and then fell toward zero',
              'Survival stayed near its starting level until the spraying stopped'
            ],
            correctAnswer: 1,
            explanation: 'Survival rose by 7 points in the first two years, then by 22 and 33 points, a slow start followed by a steep climb. The increases were not equal, survival never fell during spraying, and it had already reached 85% by year 8.'
          },
          {
            question: 'The 2% survival at year 0 is most important as evidence for which conclusion?',
            options: [
              'Resistant mosquitoes existed before the spraying began',
              'The standard dose was too weak to kill healthy mosquitoes',
              'Spraying caused mutations in the first season of exposure',
              'Mosquitoes needed several years to start producing mutations'
            ],
            correctAnswer: 0,
            explanation: 'Some mosquitoes survived the dose before any spraying, showing that heritable resistance was already present for selection to act on. If the dose were too weak, far more than 2% would survive, and mutation does not wait for, or result from, exposure.'
          },
          {
            question: 'Four years after spraying stopped, survival fell from 85% to 60%. Which explanation is most consistent with these data?',
            options: [
              'Each mosquito slowly lost the resistance it had built up',
              'Leftover insecticide kept inducing resistance at a lower rate',
              'Susceptible mosquitoes developed new mutations once spraying ended',
              'Resistant mosquitoes left fewer offspring once the insecticide was gone'
            ],
            correctAnswer: 3,
            explanation: 'Without the insecticide, resistance no longer raised survival, and if it carried a cost, resistant mosquitoes left fewer offspring, so the resistance allele frequency fell. Individuals do not lose acquired resistance, and mutations are not produced on demand when conditions change.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p6-s4-design',
      type: 'text' as const,
      content: `
### Designing an experiment on resistance

AP free-response questions often ask you to design or critique an experiment. Here is a full model for one question.

**Question:** Does repeated spraying with a herbicide cause a weed population to become more resistant?

**Design.**

1. Start with seeds from **one** wild population, so all groups begin with the same genetic variation.
2. Grow **10 lines** of plants in identical pots. Spray 5 lines with the herbicide each generation (**treatment**); never spray the other 5 (**control**).
3. In each line, collect seeds only from plants that survive to reproduce and use them to grow the next generation.
4. Keep **soil, water, light, temperature, and pot size the same** for every line.
5. After 6 generations, grow a sample from every line and apply one **standard test dose**. Record the **percent of plants that survive**.

**Variables.**

| Role | In this experiment |
|------|-------------------|
| Independent variable | Whether a line was sprayed each generation |
| Dependent variable | Percent of plants surviving the standard test dose |
| Control group | Unsprayed lines from the same seed stock |
| Controlled variables | Soil, water, light, temperature, pot size, seed source |
| Replication | Five lines per group, so one unusual line cannot drive the result |

**Prediction and reasoning.** If herbicide spraying selects for heritable resistance, the sprayed lines should show **higher** survival at the test dose than the unsprayed lines, because only resistant plants contributed seeds in the sprayed lines. If the unsprayed lines show the same survival, spraying had no detectable effect.

**A common design flaw:** comparing a sprayed field with a different, unsprayed field. The two fields began with different plants, so any difference might reflect their starting genetics rather than the spraying. Starting every line from the same seed stock removes that problem.
      `
    },
    {
      id: 'bio-evidence-evolution-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Identify the Parts of the Design** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In the herbicide experiment, the independent variable is _____.',
            options: ['whether a line was sprayed', 'percent of plants surviving', 'the soil used in each pot', 'the original seed source']
          },
          {
            label: 'The dependent variable is _____.',
            options: ['whether a line was sprayed', 'percent of plants surviving', 'the soil used in each pot', 'the original seed source']
          },
          {
            label: 'The unsprayed lines grown from the same seed stock serve as the _____.',
            options: ['control group', 'independent variable', 'dependent variable', 'treatment group']
          },
          {
            label: 'If spraying selects for heritable resistance, sprayed lines should show _____ survival at the test dose than unsprayed lines.',
            options: ['higher', 'lower', 'equal', 'zero']
          }
        ],
        correctAnswers: ['whether a line was sprayed', 'percent of plants surviving', 'control group', 'higher'],
        hint1: 'The independent variable is the factor the researcher deliberately changes between groups.',
        hint2: 'The dependent variable is what is measured at the end of the experiment.',
        hint3: 'Only survivors reproduced in the sprayed lines, so resistance alleles should become more common there.',
        explanation: 'Spraying is the manipulated factor and survival at the test dose is the measured outcome. Unsprayed lines from the same seeds are the control, and selection predicts higher survival in sprayed lines because only resistant plants contributed seeds.'
      }
    },
    {
      id: 'bio-evidence-evolution-p6-s6-evaluate',
      type: 'text' as const,
      content: `
### Evaluating claims with multiple lines of evidence

The strongest arguments in this topic combine **independent** kinds of evidence. Evidence is independent when it is gathered by different methods that could have disagreed.

| Claim | Fossil evidence | Anatomical evidence | Molecular evidence | Biogeographic evidence |
|-------|----------------|---------------------|-------------------|------------------------|
| Whales descended from land mammals | Whale fossils with legs, in rock of the expected ages | Vestigial pelvic bones; mammalian limb bones in flippers | DNA groups whales with hippos | — |
| Tetrapods descended from lobe-finned fishes | Transitional forms such as *Tiktaalik* | Limb bones match fin bones of lobe-finned fishes | Shared developmental genes for fins and limbs | — |
| Galápagos finches descended from mainland colonists | — | Beak shapes vary around a shared body plan | DNA closest to South American relatives | Islands resemble the nearest mainland |

When answering "which evidence best supports," pick the option that (1) reflects **ancestry rather than function**, and (2) comes from a **different line** than the evidence already given, if the question asks for additional support.

> 🔑 **AP Connection:** Evidence that would have to be true if the claim were false is not support. Shared habitat, shared diet, or shared body shape can all arise by convergence, so they do not show common ancestry.
      `
    },
    {
      id: 'bio-evidence-evolution-p6-s7-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Practice — Evaluating Evidence** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A researcher claims that whales descended from land mammals. Which pair of observations, from two independent lines of evidence, best supports this claim?',
            options: [
              'A streamlined body and fins shared by whales and sharks',
              'Air breathing in whales plus milk production in mothers',
              'Fossil whales with hind legs plus DNA linking whales to hippos',
              'Ocean habitats shared by whales and by many fish species'
            ],
            correctAnswer: 2,
            explanation: 'Legged fossil whales come from the rock record and the whale-hippo grouping comes from DNA, so two independent methods point to land-mammal ancestry. A streamlined body and ocean habitat reflect convergence, and air breathing with milk shows whales are mammals without showing descent from land dwellers.'
          },
          {
            question: 'A student hypothesizes that a pesticide causes resistance mutations in beetles. Which experimental result would most directly contradict this hypothesis?',
            options: [
              'Beetle survival rises over generations of exposure to the pesticide',
              'Resistant beetles turn up in lines that were never exposed to it',
              'Offspring of resistant beetles are resistant without any exposure',
              'Beetle survival falls when beetles are exposed to higher doses'
            ],
            correctAnswer: 1,
            explanation: 'If resistance appears in lines that never met the pesticide, the pesticide cannot be causing the mutations. Rising survival under exposure, inheritance of resistance, and dose-dependent killing are expected whether the pesticide induces or selects resistance.'
          }
        ]
      }
    }
  ]
};
