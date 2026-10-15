export const apesWaterResourcesPart4Data = {
  topicSlug: 'apes-water-resources',
  sections: [
    {
      id: 'apeswate4-intro',
      type: 'text' as const,
      content: `
# 💧 Water Resources

**Part 4 of 7 — Toxins: Endocrine Disruptors, POPs, Biomagnification and Dose-Response**

---

| Section |
|---------|
| 📖 Endocrine Disruptors |
| Persistent Organic Pollutants |
| Bioaccumulation vs Biomagnification |
| Worked Example: Mercury Up a Food Chain |
| Tolerance Ranges |
| Measuring Toxicity: LD50, ED50 and Thresholds |

> 🔑 **Key Concept:** Some pollutants do harm at tiny concentrations because they mimic hormones, resist breakdown or build up in fat. This part covers CED Topics 8.3, 8.7, 8.8, 8.12 and 8.13, and the calculations used to compare how toxic chemicals are.
      `
    },
    {
      id: 'apeswate4-pops',
      type: 'text' as const,
      content: `
## 📖 Endocrine Disruptors

The **endocrine system** uses hormones such as estrogen, testosterone and thyroid hormone to control growth, development and reproduction. **Endocrine disruptors** are chemicals that interfere with it, usually by mimicking a hormone or blocking its receptor.

| Source | Examples |
|---|---|
| Pesticides | DDT and some herbicides |
| Plastics | BPA and phthalates (used to harden or soften plastics) |
| Wastewater | Synthetic hormones from medications pass through sewage treatment into rivers |

**Effects named in the CED:** birth defects, developmental disorders and **gender imbalances** in fish and other species. Downstream of some wastewater outfalls, male fish have been found producing egg proteins that normally only females make. Because hormones act at very low concentrations, even trace amounts of a disruptor can matter.

## Persistent Organic Pollutants

**Persistent organic pollutants (POPs)** are synthetic, carbon-based molecules such as the insecticide **DDT** and the industrial chemicals **PCBs** (once used in electrical equipment).

| Property | Consequence |
|---|---|
| **Persistent:** they do not break down easily | They remain in soil, sediment and bodies for years to decades |
| **Fat-soluble** (not water-soluble) | They are stored in fatty tissue instead of being excreted in urine |
| **Mobile** | They travel long distances by wind and water before being redeposited, which is why Arctic animals and people who eat them carry POPs far from any source |

## Bioaccumulation vs Biomagnification

Ecosystem Structure Part 4 introduced biomagnification as pollution following the energy pyramid. The CED distinguishes two related ideas:

| Term | Scale | Example |
|---|---|---|
| **Bioaccumulation** | Within **one organism** over its lifetime: it absorbs a substance faster than it gets rid of it | An old lake trout carries more mercury than a young trout from the same lake |
| **Biomagnification** | **Across trophic levels:** concentration rises at each higher level | A tuna carries far more mercury than the small fish it eats |

Biomagnification happens because each predator eats many prey in its lifetime and keeps the fat-soluble pollutant from every one of them.

### Mercury

Mercury is released mainly by **burning coal** and by mining. It falls into lakes and oceans, where **bacteria convert it to methylmercury**, a highly toxic form that bioaccumulates and biomagnifies. Large, long-lived predatory fish such as tuna, swordfish and shark carry the most. Methylmercury damages the **nervous system**, especially in developing fetuses and children, which is why fish advisories target pregnant women and children.

### DDT and birds of prey

DDT biomagnified up aquatic food chains to fish-eating birds such as bald eagles, ospreys, peregrine falcons and brown pelicans. A breakdown product of DDT interferes with calcium deposition in eggshells, so shells were **thin and cracked** under the weight of incubating parents. The United States banned most uses of DDT in 1972, and these bird populations recovered.

**Human effects named in the CED:** DDT, mercury and PCBs can harm the reproductive, nervous and circulatory systems.
      `
    },
    {
      id: 'apeswate4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do POPs such as PCBs build up in animal bodies instead of being excreted?',
            options: [
              'They dissolve in fat, so they are stored in fatty tissue',
              'They mix into water, so cells take them in with each drink',
              'They are broken down into larger molecules inside the liver',
              'They bind to calcium and are stored inside the animal\'s bones'
            ],
            correctAnswer: 0,
            explanation: 'Fat-soluble molecules are held in fatty tissue rather than flushed out in watery urine, and because they are persistent the body cannot break them down. Water-soluble substances are the ones most easily excreted.'
          },
          {
            question: 'In one lake, 15-year-old walleye carry three times the mercury of 3-year-old walleye. Which term describes this difference?',
            options: [
              'Bioaccumulation',
              'Biomagnification',
              'Biodegradation',
              'Eutrophication'
            ],
            correctAnswer: 0,
            explanation: 'Both fish are the same species at the same trophic level, so the difference comes from build-up within each fish over a longer lifetime, which is bioaccumulation. Biomagnification compares different trophic levels.'
          },
          {
            question: 'How did DDT cause populations of bald eagles and ospreys to decline?',
            options: [
              'It thinned their eggshells, so eggs broke during incubation',
              'It killed the fish they ate, so the birds starved to death',
              'It poisoned adult birds directly while they were spraying crops',
              'It made the adult birds blind, so they could no longer hunt'
            ],
            correctAnswer: 0,
            explanation: 'DDT biomagnified in fish-eating birds and interfered with calcium in eggshells, so eggs cracked under incubating parents and few chicks hatched. Reproduction failed even while adults survived.'
          },
          {
            question: 'Male fish below a wastewater outfall are found producing egg proteins normally made only by females. Which type of pollutant is the most likely cause?',
            options: [
              'An endocrine disruptor that mimics estrogen',
              'A sediment load that buries the spawning beds',
              'A heat discharge that lowers dissolved oxygen',
              'A nutrient load that triggers an algal bloom'
            ],
            correctAnswer: 0,
            explanation: 'Egg-protein production in males is a hormonal effect, the gender imbalance the CED links to endocrine disruptors such as synthetic estrogen in wastewater. Sediment, heat and nutrients harm fish but do not act as hormones.'
          }
        ]
      }
    },
    {
      id: 'apeswate4-mercury',
      type: 'text' as const,
      content: `
## Worked Example: Mercury Up a Food Chain

Mercury concentrations in an ocean food chain (illustrative data):

| Level | Mercury (ppm) | Scientific notation |
|---|---|---|
| Seawater | 0.00002 | $2 \\times 10^{-5}$ |
| Phytoplankton | 0.002 | $2 \\times 10^{-3}$ |
| Zooplankton | 0.01 | $1 \\times 10^{-2}$ |
| Small fish (anchovy) | 0.1 | $1 \\times 10^{-1}$ |
| Tuna | 1.0 | $1 \\times 10^{0}$ |

**Biomagnification factor** = concentration at the higher level ÷ concentration at the lower level.

**1. Seawater to tuna:**
$$\\frac{1 \\times 10^{0}}{2 \\times 10^{-5}} = 0.5 \\times 10^{5} = 5 \\times 10^{4} = 50{,}000$$

**2. Small fish to tuna:** $1.0 \\div 0.1 = 10$, so each tuna holds ten times the concentration of its prey.

**3. Interpretation:** The biggest single jump is from seawater into phytoplankton ($0.002 \\div 0.00002 = 100$), because producers absorb mercury directly from the water. After that, each step multiplies the concentration again, so the top predator ends up with by far the highest dose.

To divide numbers in scientific notation, divide the front numbers and **subtract** the exponents: $\\frac{1}{2} = 0.5$ and $0 - (-5) = 5$.

## Tolerance Ranges

Every organism has a **range of tolerance** for each environmental factor, including pollutants, temperature and pH.

| Zone | What happens |
|---|---|
| **Optimum range** | Individuals are healthiest and reproduce best |
| **Zones of physiological stress** (on either side) | Individuals survive but grow and reproduce poorly |
| **Zones of intolerance** (beyond the stress zones) | Individuals die |

Picture a bell-shaped curve with the factor on the horizontal axis and population size on the vertical axis: the peak is the optimum, the sloping sides are the stress zones, and the flat zero line at both ends is intolerance.
      `
    },
    {
      id: 'apeswate4-dose',
      type: 'text' as const,
      content: `
## Measuring Toxicity: LD50, ED50 and Thresholds

A **dose-response curve** plots the dose of a substance (horizontal axis) against the percentage of a test population that responds (vertical axis). The curve is usually S-shaped: no response at low doses, a steep rise, then a level-off near 100%.

| Term | Meaning |
|---|---|
| **LD50** (lethal dose 50%) | The dose that kills 50% of a test population |
| **ED50** (effective dose 50%) | The dose at which 50% of the population shows a specific, non-lethal effect |
| **Threshold** | The dose below which no effect is observed |

Doses are given in **milligrams of substance per kilogram of body mass (mg/kg)** so results can be compared across animals of different sizes. A **lower LD50 means a more toxic substance**, because less of it kills half the population.

Because testing poisons on people is unethical, most dose-response studies use lab animals such as rats, and the results are **extrapolated** to humans. That adds uncertainty: species differ in metabolism, and real people are exposed to many chemicals at once and over long periods.

### Worked Example: Reading a dose-response table (illustrative data)

| Dose of Chemical X (mg/kg) | 0 | 10 | 20 | 40 | 80 | 160 |
|---|---|---|---|---|---|---|
| Rats killed (%) | 0 | 0 | 5 | 25 | 75 | 98 |

**1. Threshold:** no deaths at 10 mg/kg, first deaths at 20 mg/kg, so the threshold lies between 10 and 20 mg/kg.

**2. LD50:** 50% lies exactly halfway between 25% (at 40 mg/kg) and 75% (at 80 mg/kg), so the LD50 is about halfway between the doses: $\\frac{40 + 80}{2} = 60$ mg/kg.

**3. Dose for one animal:** a 0.25 kg rat would need $60\\ \\text{mg/kg} \\times 0.25\\ \\text{kg} = 15$ mg to reach the LD50.

**4. Comparing toxicity:** Chemical Y has an LD50 of 600 mg/kg. Since $600 \\div 60 = 10$, Chemical X is ten times as toxic.

> 🔑 **AP Connection:** Multiply LD50 by body mass to get a dose in milligrams. On a graph, find 50% on the vertical axis, move across to the curve, then read down to the dose.
      `
    },
    {
      id: 'apeswate4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units or commas.

1) Using the mercury table above, what is the biomagnification factor from seawater to zooplankton?

2) A pesticide has an LD50 of 20 mg/kg in mice. What dose, in milligrams, reaches the LD50 for a 0.5 kg animal?

3) In a dose-response test, 30% of fish die at 10 mg/L and 70% die at 20 mg/L. Estimate the LD50 in mg/L by assuming a straight line between these points.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['500', '10', '15'],
        hint1: 'Divide 0.01 by 0.00002.',
        hint2: 'Multiply the LD50 by the body mass in kilograms.',
        hint3: '50% is exactly halfway between 30% and 70%.',
        explanation: '1) 0.01 ÷ 0.00002 = 500. 2) 20 mg/kg × 0.5 kg = 10 mg. 3) 50% is halfway between 30% and 70%, so the LD50 is halfway between 10 and 20 mg/L, which is 15 mg/L.'
      }
    },
    {
      id: 'apeswate4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Insecticide A has an LD50 of 5 mg/kg in rats, and insecticide B has an LD50 of 500 mg/kg. Which conclusion is correct?',
            options: [
              'A is more toxic, since a smaller dose kills half the rats',
              'B is more toxic, since its LD50 value is the larger number',
              'A and B are equally toxic, since both kill half the rats',
              'Neither can be compared, since their doses use different units'
            ],
            correctAnswer: 0,
            explanation: 'The LD50 is the dose that kills half the test animals, so the chemical that does it at the smaller dose is more toxic. A needs one-hundredth the dose of B, and both use the same mg/kg units.'
          },
          {
            question: 'Why is toxicity reported in milligrams per kilogram of body mass instead of total milligrams?',
            options: [
              'A given dose is more concentrated in a smaller body',
              'Heavier animals always excrete chemicals more slowly',
              'Lab scales cannot measure total doses below 1 milligram',
              'It removes every difference between rats and humans'
            ],
            correctAnswer: 0,
            explanation: 'The same total amount is more concentrated in a small body than in a large one, so dividing by body mass lets results be compared fairly across sizes. It does not remove the uncertainty of extrapolating from rats to humans.'
          },
          {
            question: 'A study finds the ED50 for drowsiness from a sedative is 2 mg/kg and its LD50 is 200 mg/kg. What does the ED50 tell you?',
            options: [
              'Half the test animals became drowsy at 2 mg/kg',
              'Fifty percent of the animals died at 2 mg/kg',
              'No animal showed any sign of drowsiness below 2 mg/kg',
              'Every test animal became drowsy at 2 mg/kg'
            ],
            correctAnswer: 0,
            explanation: 'The ED50 is the dose at which 50% of the population shows the stated effect, here drowsiness. The dose that kills half is the LD50, and the dose below which no effect occurs is the threshold.'
          },
          {
            question: 'Why is it difficult to prove that a specific pollutant causes a disease in humans?',
            options: [
              'People face many chemicals at once, and dosing them on purpose is unethical',
              'Most pollutants leave the body in hours, so exposure cannot be measured',
              'Lab animals respond exactly as people do, so no human studies are needed',
              'Chemical exposure harms only wildlife, so human cases are extremely rare'
            ],
            correctAnswer: 0,
            explanation: 'People encounter many substances over long periods, so isolating one cause is hard, and deliberate dosing experiments on humans would be unethical. Persistent pollutants stay in the body for years, and lab-animal results carry uncertainty when applied to people.'
          }
        ]
      }
    },
    {
      id: 'apeswate4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Endocrine disruptors | Mimic or block hormones; birth defects, developmental disorders, gender imbalances in fish |
| POPs | Synthetic, persistent, fat-soluble, travel far by wind and water (DDT, PCBs) |
| Bioaccumulation | Build-up within one organism over its life |
| Biomagnification | Rising concentration at each higher trophic level |
| Mercury | Coal burning → bacteria make methylmercury → highest in large predatory fish; neurotoxin |
| DDT | Eggshell thinning in eagles, ospreys, falcons and pelicans |
| Tolerance range | Optimum, stress zones, intolerance zones |
| LD50 / ED50 / threshold | Dose killing 50% / dose with an effect in 50% / dose below which no effect |
| Calculations | Factor = higher ÷ lower; dose = LD50 × body mass; lower LD50 = more toxic |

**Next:** Part 5 follows what happens to sewage and solid waste after we throw it away, and how pollution and pathogens affect human health.
      `
    }
  ]
};
