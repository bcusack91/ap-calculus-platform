export const apesBiodiversityConservationPart6Data = {
  topicSlug: 'apes-biodiversity-conservation',
  sections: [
    {
      id: 'apesbiod6-intro',
      type: 'text' as const,
      content: `
# 🛡️ Biodiversity Conservation

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free-Response Practice: Zebra Mussels in a Lake |
| Model Answers |
| Second Scenario: Monitoring an Endangered Salamander |

> 🔑 **Key Concept:** Conservation FRQs pair a data table with a chain of task verbs: **identify**, **describe**, **calculate**, **explain**, **propose** and **justify**. Each verb asks for something different, and points come from answering exactly what the verb asks.

## 📋 Free-Response Practice: Zebra Mussels in a Lake

A state agency monitored a 900-hectare lake before and after zebra mussels were first found there. About 40 ha of the lake bottom is rock or gravel that mussels can attach to. Secchi depth measures water clarity: the deeper a black-and-white disk stays visible, the clearer the water. Chlorophyll *a* measures phytoplankton. (All values are illustrative.)

| Year | Zebra mussels (per m²) | Native mussels (per m²) | Secchi depth (m) | Chlorophyll *a* (µg/L) |
|---|---|---|---|---|
| 2008 | 0 | 24 | 2.0 | 12 |
| 2010 | 15 | 22 | 2.2 | 11 |
| 2012 | 900 | 15 | 3.5 | 6 |
| 2014 | 3,200 | 6 | 4.8 | 3 |
| 2016 | 3,000 | 2 | 5.0 | 3 |
| 2018 | 2,800 | 1 | 5.1 | 3 |

**Questions**

(a) **Describe** the trend in zebra mussel density from 2008 to 2018.

(b) **Calculate** the percent decrease in native mussel density from 2010 to 2018.

(c) **Calculate** the total number of zebra mussels on the lake's hard bottom in 2014, in millions.

(d) **Calculate** the percent increase in Secchi depth from 2008 to 2014.

(e) **Explain** how zebra mussels caused both the drop in chlorophyll *a* and the rise in Secchi depth.

(f) **Identify** one characteristic of zebra mussels that makes them successful invaders.

(g) **Propose** one action that would prevent zebra mussels from spreading to a nearby uninfested lake, and **describe** one disadvantage of that action.
      `
    },
    {
      id: 'apesbiod6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without commas or units.

1) (b) Percent decrease in native mussel density from 2010 to 2018, to the nearest whole percent:

2) (c) Total zebra mussels on the hard bottom in 2014, in millions:

3) (d) Percent increase in Secchi depth from 2008 to 2014:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['95', '1280', '140'],
        hint1: 'Use 22 as the starting value: (22 − 1) ÷ 22 × 100.',
        hint2: 'Convert 40 ha to m² (1 ha = 10,000 m²), multiply by 3,200 per m², then divide by 1,000,000.',
        hint3: '(4.8 − 2.0) ÷ 2.0 × 100.',
        explanation: '(b) 21 ÷ 22 × 100 ≈ 95 percent. (c) 40 ha = 400,000 m², and 400,000 × 3,200 = 1,280,000,000, or 1,280 million. (d) 2.8 ÷ 2.0 × 100 = 140 percent.'
      }
    },
    {
      id: 'apesbiod6-model',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Zebra mussel density was zero in 2008 and very low in 2010, then rose rapidly to a peak of 3,200 per m² in 2014, and declined slightly to 2,800 per m² by 2018. A full description names the direction, the peak and the leveling off.

**(b)** $\\dfrac{22 - 1}{22} \\times 100 \\approx 95\\%$ decrease. Show the setup, not just the answer.

**(c)** Convert first, then multiply:
$$40\\ \\text{ha} \\times 10{,}000\\ \\text{m}^2/\\text{ha} = 400{,}000\\ \\text{m}^2$$
$$400{,}000\\ \\text{m}^2 \\times 3{,}200\\ \\text{per m}^2 = 1{,}280{,}000{,}000 = 1{,}280\\ \\text{million}$$
Using the whole 900 ha lake would overestimate, because mussels attach only to the hard bottom.

**(d)** $\\dfrac{4.8 - 2.0}{2.0} \\times 100 = 140\\%$ increase.

**(e)** Zebra mussels are filter feeders that strain phytoplankton from the water. As their population grew, they removed phytoplankton faster than it could reproduce, so chlorophyll *a* fell from 12 to 3 µg/L. With fewer suspended algal cells scattering light, the water became clearer and the Secchi disk stayed visible deeper. *(Two linked steps: filtering removes phytoplankton; fewer particles means clearer water.)*

**(f)** Any one, stated as a trait: rapid reproduction with very many free-swimming larvae; attachment to almost any hard surface; no predators in North America that control them; tolerance of a wide range of water conditions.

**(g)** *Proposal:* Require boats leaving the infested lake to be inspected, drained and washed at the ramp, which removes attached adults and larvae in bilge water before they reach the next lake. *Disadvantage:* Inspection stations cost money to staff and delay boaters, and a single uninspected boat can still carry mussels.

### Scoring habits that earn points

| Verb | What earns the point |
|---|---|
| Identify | A specific name or value, no explanation needed |
| Describe | Direction plus specifics (years, peak, numbers) |
| Calculate | Setup with units, then the answer |
| Explain | A cause **and** how it produces the effect |
| Propose | A specific, realistic action and how it works |
      `
    },
    {
      id: 'apesbiod6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Data Practice** 🎯

Use the zebra mussel table above.
      `,
      exercise: {
        questions: [
          {
            question: 'Between which two surveys did zebra mussel density increase by the largest factor?',
            options: [
              '2010 to 2012',
              '2012 to 2014',
              '2016 to 2018',
              '2014 to 2016'
            ],
            correctAnswer: 0,
            explanation: 'Density rose from 15 to 900 per m², a 60-fold increase, which is the steepest relative jump. From 2012 to 2014 the increase was larger in absolute terms but only about 3.6-fold.'
          },
          {
            question: 'Which claim about native mussels is best supported by the data?',
            options: [
              'Their density fell as zebra mussel density rose',
              'Warmer water each year caused their steady decline',
              'They increased after phytoplankton levels dropped in the lake',
              'Their numbers held steady until zebra mussels began to decline'
            ],
            correctAnswer: 0,
            explanation: 'Native mussel density fell every survey as zebra mussel density climbed, consistent with zebra mussels attaching to them and competing for plankton. The table contains no temperature data, so a warming explanation is not supported.'
          },
          {
            question: 'A student argues that the clearer water shows the lake ecosystem became healthier after the invasion. Which response best evaluates that claim?',
            options: [
              'Clearer water reflects lost phytoplankton, the base of the open-water food web',
              'Clearer water proves pollution levels dropped as the mussels spread',
              'Clearer water means the lake now supports more fish than it did in 2008',
              'Clearer water shows the lake has returned to its natural pre-invasion state'
            ],
            correctAnswer: 0,
            explanation: 'The water cleared because zebra mussels filtered out phytoplankton, so less energy is available to zooplankton and fish in open water. Clarity here is a symptom of the invasion, not of recovery or reduced pollution.'
          }
        ]
      }
    },
    {
      id: 'apesbiod6-salamander',
      type: 'text' as const,
      content: `
## Second Scenario: Monitoring an Endangered Salamander

A salamander listed as endangered lives in a single 12-km² watershed. Biologists run mark-recapture surveys every three years. (Illustrative data.)

| Survey year | Marked (M) | Second catch (C) | Recaptured (R) | Estimate (N) |
|---|---|---|---|---|
| 2015 | 50 | 40 | 10 | 200 |
| 2018 | 50 | 45 | 15 | 150 |
| 2021 | 50 | 36 | 15 | 120 |

A road is proposed through the watershed. Salamanders migrate each spring from upland forest to breeding ponds on the other side of the proposed route.

### Worked Example: Checking the 2021 Estimate

$$N = \\frac{M \\times C}{R} = \\frac{50 \\times 36}{15} = 120$$

### Worked Example: Rate of Decline

$$\\text{percent change, 2015 to 2021} = \\frac{120 - 200}{200} \\times 100 = -40\\%$$

$$\\text{average change} = \\frac{120 - 200}{6\\ \\text{years}} \\approx -13\\ \\text{salamanders per year}$$

At that average rate, the population would reach zero in about $120 \\div 13 \\approx 9$ more years, though real declines rarely stay perfectly linear.
      `
    },
    {
      id: 'apesbiod6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which trait makes this salamander especially vulnerable to the proposed road?',
            options: [
              'Its range covers only a single small watershed',
              'It feeds mostly on insects found in the upland forest floor',
              'It is listed as endangered under federal law already',
              'It has moist skin that absorbs oxygen from the surrounding air'
            ],
            correctAnswer: 0,
            explanation: 'With its entire range inside one watershed, a road that kills migrating adults affects the whole species, not just one population among many. Insect feeding and skin respiration do not, by themselves, raise its exposure to the road.'
          },
          {
            question: 'If the road is built, which mitigation would most directly reduce salamander deaths during the spring migration?',
            options: [
              'Tunnels under the road with fencing that guides animals toward them',
              'A captive population kept at a zoo outside the state',
              'A lower speed limit posted only during summer months',
              'New breeding ponds dug on the same side of the road as old ones'
            ],
            correctAnswer: 0,
            explanation: 'Under-road tunnels with guide fencing let salamanders cross without meeting traffic, which targets the cause of death during migration. A summer speed limit misses the spring migration, and a zoo population does nothing for the wild animals.'
          },
          {
            question: 'In the 2018 survey, researchers later found that many marks had rubbed off before the second catch. How does this affect the 2018 estimate of 150?',
            options: [
              'The true population was probably below 150',
              'Actual numbers were probably above 150',
              'No change, because M stayed at 50 in each survey',
              'No change, because C was the largest catch that year'
            ],
            correctAnswer: 0,
            explanation: 'Lost marks make R too small, which inflates N = MC ÷ R, so the 150 is an overestimate and the true population was probably smaller. The decline may therefore be even steeper than the table suggests.'
          }
        ]
      }
    }
  ]
};
