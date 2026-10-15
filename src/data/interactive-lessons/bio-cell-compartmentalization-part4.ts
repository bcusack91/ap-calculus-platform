export const bioCellCompartmentPart4Data = {
  topicSlug: 'cell-compartmentalization',
  sections: [
    {
      id: 'bio-cell-compartmentalization-p4-s1-intro',
      type: 'text' as const,
      content: `
## Reading Compartment Data

**Part 4 of 7 — Reading Compartment Data**

How do biologists know which enzyme works in which compartment? Mostly by breaking cells open gently, separating the pieces, and measuring where each activity ends up. AP Biology free-response questions often hand you a table from exactly this kind of experiment and ask you to make a claim, justify it, and identify controls. This part teaches you to read those tables.

### Cell fractionation by differential centrifugation

1. **Homogenize.** Cells are broken in a cold, buffered solution that keeps most organelles intact.
2. **Spin slowly.** Large, dense structures (nuclei, unbroken cells) form a pellet at the bottom of the tube.
3. **Spin the liquid above faster.** Each faster spin pellets smaller structures.
4. **Measure.** Each pellet (a "fraction") is tested for enzyme activity, protein content or DNA.

| Spin (approximate) | What pellets | Remaining liquid (supernatant) holds |
|---|---|---|
| 1,000 g for 10 min | Nuclei and cell debris | Everything smaller |
| 20,000 g for 20 min | Mitochondria, lysosomes (and chloroplasts in plants) | Membrane fragments, ribosomes, cytosol |
| 100,000 g for 60 min | Small vesicles formed from ER and Golgi fragments | Ribosomes and cytosol |
| 150,000 g for 3 h | Free ribosomes | Cytosol (soluble enzymes) |

The method works because organelles differ in size and density. It also relies on the membranes staying intact during homogenization, a point that matters for the experiment later in this part.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p4-s2-markers',
      type: 'text' as const,
      content: `
### Worked example — locating enzymes from a fractionation table

Liver cells are fractionated and three enzymes are measured in each fraction. Values are the **percent of each enzyme's total activity** recovered in that fraction.

| Fraction | Enzyme 1 | Enzyme 2 | Enzyme 3 |
|---|---|---|---|
| Nuclear pellet | 4 | 3 | 5 |
| Mitochondrial pellet | 88 | 6 | 7 |
| Microsomal (ER fragment) pellet | 5 | 85 | 6 |
| Final supernatant | 3 | 6 | 82 |

**Step 1 — Find each enzyme's peak.** Enzyme 1 peaks in the mitochondrial pellet, Enzyme 2 in the microsomal pellet, and Enzyme 3 in the supernatant.

**Step 2 — Make the claim.** Enzyme 1 is located in mitochondria, Enzyme 2 in the ER membrane system, and Enzyme 3 in the cytosol.

**Step 3 — Explain the small amounts elsewhere.** No fractionation is perfect. Some organelles break during homogenization and release their contents into the supernatant, and some fragments sediment with the wrong fraction. A claim rests on where **most** of the activity goes.

**Step 4 — Connect to function.** An enzyme of the citric acid cycle would be expected to peak with Enzyme 1. An enzyme of glycolysis would be expected to peak with Enzyme 3, because glycolysis runs in the cytosol.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p4-s3-mcq-table',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading the Fractionation Table

Use the table in the worked example.
      `,
      exercise: {
        questions: [
          {
            question: 'A fourth enzyme shows 2% of its activity in the nuclear pellet, 9% in the mitochondrial pellet, 7% in the microsomal pellet and 82% in the supernatant. Which claim is best supported?',
            options: [
              'It is a soluble protein of the cytosol',
              'It is embedded in the inner mitochondrial membrane',
              'It is packaged in vesicles that bud from the ER',
              'It is stored with the chromosomes inside the nucleus'
            ],
            correctAnswer: 0,
            explanation: 'Most of the activity stays in the final supernatant, the fraction that holds soluble cytosolic proteins. The small amounts in the pellets fit the usual imperfect separation.'
          },
          {
            question: 'In a repeat run, homogenization is made much harsher, and Enzyme 1 now shows 40% of its activity in the supernatant. What is the best explanation?',
            options: [
              'Enzyme 1 moved into the cytosol in response to the harsher treatment',
              'Broken mitochondria spilled Enzyme 1 into the liquid fraction',
              'The faster spins pulled Enzyme 1 out of the mitochondrial pellet',
              'Harsh treatment converted Enzyme 1 into a cytosolic enzyme form'
            ],
            correctAnswer: 1,
            explanation: 'Harsher homogenization ruptures more mitochondria, so their contents end up in the liquid instead of the pellet. The enzyme\'s location in the living cell has not changed; only the separation has worsened.'
          }
        ]
      }
    },
    {
      id: 'bio-cell-compartmentalization-p4-s4-latency',
      type: 'text' as const,
      content: `
### Worked example — evidence that an enzyme is enclosed by a membrane

In the 1950s, Christian de Duve's group measured an acid phosphatase (an enzyme that works best at low pH) in liver fractions. They noticed that fresh fractions showed little activity, but the same fractions showed much more activity after they had been stored for several days or treated in ways that damage membranes. This observation led to the identification of the lysosome. The table below models that kind of result (values adapted, not original data).

| Treatment of the mitochondrial-lysosomal fraction | Acid phosphatase activity (units) |
|---|---|
| Fresh, no treatment | 12 |
| Fresh + detergent that dissolves membranes | 60 |
| Stored 5 days in the cold, no treatment | 54 |
| Detergent alone, no tissue added | 0 |

**Step 1 — Compare fresh with detergent-treated.** Activity rises from 12 to 60 units, a **fivefold** increase, even though no enzyme was added.

**Step 2 — Explain.** The substrate in the test solution cannot reach the enzyme until a membrane is broken. Dissolving the membrane exposes the enzyme.

**Step 3 — Use the stored sample.** Storage slowly damages membranes and also raises activity, which supports the same explanation.

**Step 4 — Check the control.** Detergent alone gives 0, so the detergent does not create the activity itself.

**Claim:** the enzyme is enclosed in a membrane-bound compartment, and the membrane keeps it away from substrates outside.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p4-s5-input',
      type: 'input-boxes' as const,
      content: `
### Calculate from the data

A different fractionation recovers a lysosomal enzyme as follows: nuclear pellet 6 units, mitochondrial-lysosomal pellet 72 units, microsomal pellet 12 units, supernatant 30 units.

1) What is the total activity recovered, in units?

2) What percent of the total is in the supernatant? (whole number)

3) In the latency table above, by what factor did detergent raise activity in the fresh fraction?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120', '25', '5'],
        hint1: 'Add the four fractions together.',
        hint2: 'Divide the supernatant value by the total, then multiply by 100.',
        hint3: 'Divide the activity with detergent by the activity without it.',
        explanation: 'The total is 6 + 72 + 12 + 30 = 120 units, and 30 ÷ 120 = 25% sits in the supernatant, which suggests many lysosomes broke during homogenization. Detergent raised activity from 12 to 60 units, a factor of 5.'
      }
    },
    {
      id: 'bio-cell-compartmentalization-p4-s6-ph',
      type: 'text' as const,
      content: `
### Reading a pH-activity graph

A typical AP item describes two curves of enzyme activity against pH (described here in words):

- **Lysosomal hydrolase:** activity is near zero at pH 3, peaks around **pH 5**, and falls to about one-tenth of its peak by pH 7.2.
- **Cytosolic enzyme:** activity is low at pH 5, peaks near **pH 7.2**, and drops on either side.

**How to read it:**

1. Find each optimum and match it to a compartment: pH 5 matches the lysosome interior, pH 7.2 matches the cytosol.
2. Read off the activity in the *other* compartment. The hydrolase retains only about 10% of its peak activity at cytosolic pH, so a leak does limited damage.
3. State the claim with numbers: "The hydrolase is most active near pH 5, the pH of the lysosome, and retains only about 10% of that activity at pH 7.2, so the acidic compartment both enables digestion and protects the cytosol."

### Designing a compartment experiment

| Element | In the latency experiment |
|---|---|
| Independent variable | Whether membranes are intact or disrupted |
| Dependent variable | Enzyme activity measured with a standard substrate |
| Negative control | Detergent with no tissue (shows the detergent has no activity) |
| Held constant | Amount of tissue, temperature, pH of assay buffer, substrate concentration, time |

> **AP Connection:** The long free-response questions ask you to identify variables and controls, justify a claim with data, and predict results. When the data are percentages across fractions, base your claim on the fraction with most of the activity, and explain leftover activity as imperfect separation.
      `
    },
    {
      id: 'bio-cell-compartmentalization-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Experiments and Controls
      `,
      exercise: {
        questions: [
          {
            question: 'In the latency experiment, why does including a tube of detergent with no tissue strengthen the conclusion?',
            options: [
              'It shows how much enzyme the stored samples lost',
              'It rules out the detergent as the source of activity',
              'It confirms that the detergent breaks lysosome membranes',
              'It sets the pH at which the hydrolase works best'
            ],
            correctAnswer: 1,
            explanation: 'If detergent alone produced activity, the jump after detergent treatment could be an artifact. A reading of 0 shows that the extra activity came from enzyme released from the tissue.'
          },
          {
            question: 'A student claims that an enzyme peaking at pH 5 must work in the cytosol, because the cytosol is where most metabolism happens. Which evidence best refutes the claim?',
            options: [
              'Cytosolic pH is about 7.2, where this enzyme has little activity',
              'The enzyme is a protein and proteins are made on ribosomes',
              'Cytosolic enzymes are released only after harsh homogenization',
              'Most metabolism in a cell actually happens inside the nucleus'
            ],
            correctAnswer: 0,
            explanation: 'An enzyme that peaks at pH 5 would be mostly inactive at cytosolic pH, so it more likely works in an acidic compartment such as the lysosome. Being a protein says nothing about where an enzyme acts.'
          },
          {
            question: 'Fresh fractions show low activity of an enzyme that rises fivefold after membranes are dissolved. If the same fractions were instead homogenized so harshly that every membrane broke, what activity would fresh, untreated samples most likely show?',
            options: [
              'Close to zero, because harsh homogenization denatures the enzyme',
              'Close to the detergent value, because the enzyme is already exposed',
              'Close to the original low value, because enzyme stays inside',
              'Higher than the detergent value, because more lysosomes formed'
            ],
            correctAnswer: 1,
            explanation: 'If homogenization already broke every membrane, the enzyme would be exposed to substrate without detergent, so untreated activity would approach the detergent-treated value. Breaking membranes cannot create new lysosomes.'
          }
        ]
      }
    }
  ]
};
