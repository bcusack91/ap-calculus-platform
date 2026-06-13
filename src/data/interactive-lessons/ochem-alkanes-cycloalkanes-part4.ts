export const oChemAlkanesPart4Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan4-intro',
      type: 'text' as const,
      content: `
## Ring Strain in Cycloalkanes

**Part 4 of 7 — Angle Strain, Torsional Strain, and Ring Size**

The internal angles of a flat regular polygon are fixed by geometry: $60^\\circ$ for a triangle (cyclopropane), $90^\\circ$ for a square (cyclobutane), $108^\\circ$ for a pentagon (cyclopentane), $120^\\circ$ for a hexagon. But $sp^3$ carbon "wants" the tetrahedral angle of $109.5^\\circ$. The deviation from this ideal produces **angle (Baeyer) strain**.

Total ring strain has up to three contributors:

- **Angle strain** — compression or expansion of $C-C-C$ bond angles away from $109.5^\\circ$.
- **Torsional strain** — eclipsing of $C-H$ bonds on adjacent ring carbons (worst when the ring is forced flat).
- **Steric (transannular) strain** — atoms across the ring crowding each other (matters in medium rings).

Real rings are not flat (except cyclopropane, which has no choice): cyclobutane, cyclopentane, and cyclohexane **pucker** to trade a little angle strain for a large relief of torsional strain. The chair of cyclohexane is the perfect solution — zero angle strain and zero torsional strain.
      `
    },
    {
      id: 'alkan4-combustion',
      type: 'text' as const,
      content: `
### Measuring Strain: Heat of Combustion per CH₂

We cannot weigh "strain" directly, but we can measure it through **heats of combustion** ($\\Delta H_{comb}$). Every cycloalkane $C_nH_{2n}$ burns to $CO_2$ and $H_2O$; a strained ring stores extra energy that is released on combustion, so it burns "hotter" per $CH_2$ unit than a strain-free reference.

Dividing $\\Delta H_{comb}$ by the number of $CH_2$ groups gives a per-$CH_2$ value. A completely strain-free $CH_2$ releases about $157.4\\;\\text{kcal/mol}$ (the value for a long unstrained chain). Excess above this reflects ring strain:

| Ring | Ring strain (total) | Strain per $CH_2$ |
|------|---------------------|-------------------|
| Cyclopropane | $\\approx 27.5\\;\\text{kcal/mol}$ | $\\approx 9.2\\;\\text{kcal/mol}$ (highest) |
| Cyclobutane | $\\approx 26\\;\\text{kcal/mol}$ | $\\approx 6.6\\;\\text{kcal/mol}$ |
| Cyclopentane | $\\approx 6.5\\;\\text{kcal/mol}$ | $\\approx 1.3\\;\\text{kcal/mol}$ |
| **Cyclohexane** | $\\approx 0\\;\\text{kcal/mol}$ | $\\approx 0$ (strain-free) |
| Cycloheptane | $\\approx 6.4\\;\\text{kcal/mol}$ | $\\approx 0.9\\;\\text{kcal/mol}$ |

> **Worked interpretation:** Cyclopropane's $\\Delta H_{comb}$ per $CH_2$ is the *largest* of any cycloalkane, signaling the *most* strain per carbon. The total strain happens to be similar for cyclopropane and cyclobutane (~26–27 kcal/mol), but spread over fewer carbons in cyclopropane, so *per* $CH_2$ cyclopropane is clearly the most strained. Cyclohexane sits at the baseline — essentially zero strain.
      `
    },
    {
      id: 'alkan4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Sources of Strain
      `,
      exercise: {
        questions: [
          {
            question: 'Cyclopropane has the highest strain per CH₂ of any cycloalkane. What is the dominant cause?',
            options: [
              'Steric strain between distant atoms',
              'Severe angle strain — the $60^\\circ$ internal angle is far from the ideal $109.5^\\circ$ (plus torsional strain from eclipsed C–H bonds)',
              'It has no hydrogens',
              'Dipole–dipole repulsion'
            ],
            correctAnswer: 1,
            explanation: 'Cyclopropane is locked flat (three points define a plane) with 60° internal angles — an enormous ~50° deviation from tetrahedral, giving severe angle strain. Its C–H bonds are also fully eclipsed (torsional strain). Together these make it the most strained per CH2.'
          },
          {
            question: 'Why can we use heat of combustion to measure ring strain?',
            options: [
              'Because strain energy is stored in the molecule and released as extra heat on combustion, raising $\\Delta H_{comb}$ per CH₂ above the strain-free baseline',
              'Because strained rings do not burn',
              'Because combustion creates strain',
              'Because all rings release the same heat'
            ],
            correctAnswer: 0,
            explanation: 'A strained ring is higher in energy than a strain-free reference, so when it burns to the same products (CO2 + H2O) it releases that extra stored energy as additional heat. Normalizing per CH2 and comparing to the strain-free value (~157.4 kcal/mol per CH2) isolates the ring strain.'
          },
          {
            question: 'The C–C–C bond angle in cyclobutane (~88–90°) deviates from $109.5^\\circ$. Besides angle strain, what additional strain does the (nearly) flat ring suffer, and how does cyclobutane partially relieve it?',
            options: [
              'No additional strain; it is perfectly flat',
              'Torsional strain from eclipsed C–H bonds, partially relieved by puckering out of plane',
              'Only steric strain, relieved by ring expansion',
              'Ionic strain, relieved by adding charge'
            ],
            correctAnswer: 1,
            explanation: 'A planar four-membered ring would fully eclipse its C–H bonds (torsional strain). Cyclobutane puckers slightly (one carbon out of plane) to reduce eclipsing — accepting marginally worse angle strain in exchange for relieving torsional strain. The net is still significant total strain.'
          }
        ]
      }
    },
    {
      id: 'alkan4-rings',
      type: 'text' as const,
      content: `
### Ring-by-Ring Tour

**Cyclopropane (most strained).** Three carbons necessarily lie in one plane, fixing the angle at $60^\\circ$ — a catastrophic deviation from $109.5^\\circ$. The bonds cannot point directly at one another, so they form **"banana bonds"** (bent bonds) with poor orbital overlap. All C–H bonds are eclipsed. Result: high reactivity for a "saturated" compound; cyclopropane rings open under conditions alkanes ignore.

**Cyclobutane (still significantly strained).** Internal angle near $90^\\circ$. The ring **puckers** to relieve some torsional strain, leaving substantial angle strain. Total strain is comparable to cyclopropane, but distributed over four carbons.

**Cyclopentane (nearly strain-free).** A flat pentagon would have $108^\\circ$ angles — almost perfect! — but a flat ring eclipses all C–H bonds. To dodge that torsional strain it adopts a puckered **"envelope"** (one carbon out of plane) or twist conformation. Net strain is small (~6.5 kcal/mol total, ~1.3 per CH₂).

**Cyclohexane (strain-free).** The chair achieves $\\approx 109.5^\\circ$ angles *and* fully staggered bonds simultaneously. Essentially zero strain. This is why six-membered rings are by far the most common ring size in nature and pharmaceuticals.

**Medium rings (7–12).** These reintroduce modest strain from **transannular** (across-the-ring) steric crowding and imperfect staggering, before large rings (>14) become essentially strain-free again.

> **Reactivity link:** Strain is stored energy, so the most strained rings (cyclopropane, cyclobutane) are the most reactive toward ring-opening reactions. Cyclohexane, being strain-free, behaves like an ordinary unreactive alkane. "Saturated" does not always mean "unreactive" when strain is present.
      `
    },
    {
      id: 'alkan4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Ring Size and Stability
      `,
      exercise: {
        questions: [
          {
            question: 'A flat cyclopentane would have internal angles of $108^\\circ$, very close to tetrahedral. Why does cyclopentane still pucker into an "envelope" conformation?',
            options: [
              'To increase angle strain',
              'Because $108^\\circ$ is far from $109.5^\\circ$',
              'To relieve torsional strain — a planar ring would eclipse all its C–H bonds',
              'To form a double bond'
            ],
            correctAnswer: 2,
            explanation: 'The 108° angle of a flat pentagon is essentially ideal for angle strain, but a flat ring fully eclipses adjacent C–H bonds (torsional strain). Cyclopentane puckers (envelope/twist) to stagger those bonds, trading a tiny bit of angle strain for a large relief of torsional strain. Net strain is low.'
          },
          {
            question: 'Why is the six-membered ring the most common ring size in biology and drug molecules?',
            options: [
              'It has the highest ring strain, making it reactive',
              'Its chair conformation is essentially strain-free (no angle strain, no torsional strain)',
              'It is the smallest possible ring',
              'It cannot undergo ring flips'
            ],
            correctAnswer: 1,
            explanation: 'The chair of cyclohexane simultaneously achieves ~109.5° bond angles and fully staggered C–H bonds, giving essentially zero strain and maximal stability. Strain-free six-membered rings form readily and persist, which is why they dominate natural products and pharmaceuticals.'
          },
          {
            question: 'Cyclopropane is a saturated hydrocarbon, yet it is unusually reactive and undergoes ring-opening reactions. Why?',
            options: [
              'Because it contains a double bond',
              'Because its high ring strain (stored energy) is released when the strained ring opens',
              'Because it is aromatic',
              'Because it is ionic'
            ],
            correctAnswer: 1,
            explanation: 'Ring strain is stored potential energy. Opening the strained ring of cyclopropane releases that energy, providing a thermodynamic driving force absent in unstrained alkanes. Thus the most strained rings (cyclopropane, cyclobutane) are the most prone to ring-opening, despite being "saturated."'
          }
        ]
      }
    },
    {
      id: 'alkan4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Comparing Strain
      `,
      exercise: {
        questions: [
          {
            question: 'Rank cyclopropane, cyclopentane, and cyclohexane by strain per CH₂, from most to least.',
            options: [
              'Cyclopropane > cyclopentane > cyclohexane',
              'Cyclohexane > cyclopentane > cyclopropane',
              'Cyclopentane > cyclopropane > cyclohexane',
              'All three are equal'
            ],
            correctAnswer: 0,
            explanation: 'Cyclopropane (~9.2 kcal/mol per CH2) >> cyclopentane (~1.3) > cyclohexane (~0). The 60° angles and eclipsed bonds of cyclopropane make it by far the most strained per carbon; the cyclohexane chair is the strain-free baseline.'
          },
          {
            question: 'Two molecules have similar TOTAL ring strain (~26–27 kcal/mol): cyclopropane and cyclobutane. Why is cyclopropane nonetheless considered more strained?',
            options: [
              'Cyclobutane has no strain',
              'On a per-CH₂ basis cyclopropane is more strained, since its similar total strain is spread over only three carbons instead of four',
              'Cyclopropane has more carbons',
              'They are equally strained in every sense'
            ],
            correctAnswer: 1,
            explanation: 'Total strain is comparable, but cyclopropane distributes it over 3 CH2 units versus 4 for cyclobutane, so the strain PER CH2 in cyclopropane (~9.2) exceeds that in cyclobutane (~6.6). Per-CH2 normalization (from heats of combustion) is the fair way to compare different ring sizes.'
          }
        ]
      }
    }
  ]
}
