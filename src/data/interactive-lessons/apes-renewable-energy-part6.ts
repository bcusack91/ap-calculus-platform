export const apesRenewableEnergyPart6Data = {
  topicSlug: 'apes-renewable-energy',
  sections: [
    {
      id: 'apesrene6-intro',
      type: 'text' as const,
      content: `
# 🌞 Renewable Energy

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free Response 3 Practice: Solar for a High School |
| Model Answers |
| Free Response 1 Practice: Designing a Solar Panel Investigation |
| Model Answers |

> 🔑 **Key Concept:** The APES exam has three free-response questions: Question 1 asks you to **design an investigation**, Question 2 to **analyze and interpret quantitative data**, and Question 3 to **analyze an environmental problem doing calculations**. Energy appears in all three. Show every calculation with units, and read the verb in each part first: "identify" wants a short answer, "describe" wants a characteristic, "explain" wants a mechanism, and "justify" wants evidence.

## 📋 Free Response 3 Practice: Solar for a High School

A high school uses 400,000 kWh of electricity per year. The school board is considering a rooftop array of 500 panels rated at 400 W each. The site averages 4.5 peak sun hours per day. The installed cost is \\$400,000, and the school pays \\$0.12 per kWh. Electricity from the regional grid releases 0.40 kg of $CO_{2}$ per kWh. (All values are illustrative.)

**Questions**

(a) **Calculate** the electricity the array would generate in one year, in kWh. Show your work.

(b) **Calculate** the percent of the school's yearly electricity use that the array would supply.

(c) **Calculate** the payback period of the array, in years.

(d) **Calculate** the mass of $CO_{2}$, in metric tons, that the array would keep out of the atmosphere each year (1 metric ton = 1,000 kg).

(e) **Describe** one environmental disadvantage of producing solar panels.

(f) The school is open from 7 a.m. to 9 p.m. **Identify** one problem the array would have in meeting the school's evening demand, and **propose** one solution.

(g) A board member suggests a single small wind turbine instead. **Explain** why measuring the site's average wind speed is essential before deciding.
      `
    },
    {
      id: 'apesrene6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Answer parts (a), (c) and (d). Enter numbers only, without units.

1) (a) Electricity generated per year, in kWh:

2) (c) Payback period, to the nearest whole year:

3) (d) Metric tons of $CO_{2}$ avoided per year, to the nearest whole ton:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['328500', '10', '131'],
        hint1: 'System power: 500 × 400 W = 200 kW. Then multiply by 4.5 hours per day and by 365 days.',
        hint2: 'Yearly savings = kWh per year × \\$0.12. Divide the \\$400,000 cost by the savings.',
        hint3: 'Multiply the kWh per year by 0.40 kg per kWh, then divide by 1,000 kg per ton.',
        explanation: '1) 200 kW × 4.5 h × 365 = 328,500 kWh. 2) 328,500 × \\$0.12 = \\$39,420 per year, and \\$400,000 ÷ \\$39,420 ≈ 10.1, about 10 years. 3) 328,500 × 0.40 = 131,400 kg, which is about 131 metric tons.'
      }
    },
    {
      id: 'apesrene6-model1',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** $500 \\times 400\\ \\text{W} = 200{,}000\\ \\text{W} = 200\\ \\text{kW}$

$$200\\ \\text{kW} \\times 4.5\\ \\text{h/day} \\times 365\\ \\text{days/yr} = 328{,}500\\ \\text{kWh/yr}$$

**(b)** $\\dfrac{328{,}500}{400{,}000} \\times 100 \\approx 82\\%$

**(c)** Savings: $328{,}500\\ \\text{kWh} \\times \\$0.12 = \\$39{,}420$ per year. Payback: $\\dfrac{\\$400{,}000}{\\$39{,}420/\\text{yr}} \\approx 10.1$ years.

**(d)** $328{,}500\\ \\text{kWh} \\times 0.40\\ \\text{kg/kWh} = 131{,}400\\ \\text{kg} = 1.314 \\times 10^{5}\\ \\text{kg} \\approx 131$ metric tons.

**(e)** Mining the raw materials for panels, such as silicon, silver and copper, disturbs land and can pollute nearby water. *(Other acceptable answers: manufacturing uses energy, often from fossil fuels; discarded panels add to solid waste.)* An economic point such as "panels are expensive" earns no credit for an **environmental** disadvantage.

**(f)** *Problem:* PV produces little or nothing after sunset, but the school uses electricity until 9 p.m. *Solution:* Install a lithium-ion battery bank charged by midday surplus, or buy evening power from the grid. Both parts must be present.

**(g)** The power available in wind rises with the **cube** of wind speed, so a site with slightly lower average wind speed produces far less electricity. Without measurements, the turbine could fall far short of its expected output and never pay back its cost.

### Scoring tips

- A calculation point usually requires the setup **and** the answer with units. A bare number risks losing the point.
- Carry your own answer forward: if (a) is wrong but (c) uses it correctly, (c) can still earn credit.
- In (f), "use batteries" alone is weaker than naming how they help: "store surplus midday electricity and release it in the evening."
      `
    },
    {
      id: 'apesrene6-frq1',
      type: 'text' as const,
      content: `
## Free Response 1 Practice: Designing a Solar Panel Investigation

A student in the Northern Hemisphere, at about 40° N latitude, wants to know how the tilt of a solar panel affects its output. She mounts a small 10 W panel facing south on an adjustable frame, sets it to each angle in turn, and records the power output at noon on a clear spring day. She runs three trials at each angle. (Illustrative data.)

| Tilt angle from horizontal | 0° | 15° | 30° | 45° | 60° | 75° | 90° |
|---|---|---|---|---|---|---|---|
| Mean output (W) | 6.1 | 7.4 | 8.3 | 8.6 | 8.0 | 6.6 | 4.9 |

**Questions**

(a) **Identify** the independent variable and the dependent variable.

(b) **Identify** two variables that should be held constant.

(c) **State** a testable hypothesis for this investigation.

(d) **Describe** the relationship between tilt angle and output shown in the data.

(e) **Calculate** the percent increase in output from 0° to 45°.

(f) **Explain** why output is highest near 45° and lower at steeper or flatter angles.

(g) **Propose** one change that would make the results more representative of a whole year.
      `
    },
    {
      id: 'apesrene6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Data Practice** 🎯

Use the tilt-angle table above.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the percent increase in mean output from a tilt of 0° to a tilt of 45°?',
            options: [
              'About 29%',
              'About 41%',
              'About 71%',
              'About 25%'
            ],
            correctAnswer: 1,
            explanation: '(8.6 − 6.1) ÷ 6.1 × 100 ≈ 41 percent. Dividing by the larger value, 8.6, gives about 29 percent, which uses the wrong starting point.'
          },
          {
            question: 'Which change to the procedure would most improve the reliability of the student\'s conclusion?',
            options: [
              'Test only the angle that gave the highest output',
              'Use a different panel for each tilt angle tested',
              'Repeat the full set of angles on several clear days',
              'Measure each angle at a different time of the day'
            ],
            correctAnswer: 2,
            explanation: 'Repeating every angle on several days shows whether the pattern holds and reduces the effect of one unusual day. Changing panels or times between angles adds uncontrolled variables.'
          },
          {
            question: 'Why does output fall as the tilt increases beyond about 45° in this experiment?',
            options: [
              'Steeper panels heat up more and lose some efficiency',
              'Sunlight strikes the panel at a more glancing angle',
              'Steeper panels receive more light reflected from the ground',
              'The frame casts more shade on a panel set at a steep tilt'
            ],
            correctAnswer: 1,
            explanation: 'A panel collects the most energy when the sun\'s rays strike it head-on; at steeper tilts the same panel intercepts less direct sunlight. Ground reflection adds a little light rather than reducing it.'
          }
        ]
      }
    },
    {
      id: 'apesrene6-model2',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Independent variable: the **tilt angle** of the panel. Dependent variable: the panel's **power output** (W).

**(b)** Any two of: the same panel, the same south-facing direction, the same time of day (noon), the same day and sky conditions, the same meter.

**(c)** "If the panel is tilted closer to the angle at which the noon sun's rays strike it head-on, then its power output will increase." A null hypothesis is also acceptable: "Tilt angle has no effect on panel output."

**(d)** Output rises from 6.1 W at 0° to a maximum of 8.6 W at 45°, then falls to 4.9 W at 90°.

**(e)** $\\dfrac{8.6 - 6.1}{6.1} \\times 100 \\approx 41\\%$ increase.

**(f)** At about 40° N in spring, the noon sun stands roughly 50° above the horizon, so a panel tilted about 40–45° faces the incoming rays almost head-on and intercepts the most sunlight per unit area. Flatter or steeper panels meet the rays at a glancing angle and intercept less.

**(g)** Repeat the measurements in each season (and at several times of day), because the sun is higher in summer and lower in winter, so the best angle changes through the year.

> 🔑 **AP Connection:** In "design an investigation" questions, the independent variable is what **you** change, the dependent variable is what you **measure**, and controlled variables are everything else that could affect the result. Hypotheses should name both variables and the direction of the expected effect.
      `
    },
    {
      id: 'apesrene6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is an example of active solar heating?',
            options: [
              'A dark concrete floor that soaks up sun through large windows',
              'A roof overhang that shades south-facing windows in summer',
              'Rooftop collectors with a pump that circulates heated water',
              'Leafy trees on a home\'s south side that drop leaves in winter'
            ],
            correctAnswer: 2,
            explanation: 'Active systems use mechanical or electric equipment, such as pumps, to move a heated fluid. Thermal mass floors, overhangs and deciduous trees are passive design features with no moving equipment.'
          },
          {
            question: 'A landlocked country has active volcanoes, frequent cloud cover and weak, unsteady winds. It wants a source that supplies electricity day and night. Which option fits best?',
            options: [
              'Utility-scale solar farms',
              'Geothermal power plants',
              'Onshore wind farms',
              'Tidal barrage plants'
            ],
            correctAnswer: 1,
            explanation: 'Volcanic activity means hot rock lies near the surface, and geothermal plants run around the clock. Cloud cover limits solar, weak winds rule out wind, and a landlocked country has no tides.'
          },
          {
            question: 'Which statement describes a real environmental drawback of today\'s hydrogen fuel cell vehicles?',
            options: [
              'Their tailpipes release nitrogen oxides and fine particulates',
              'Their fuel cells burn hydrogen and give off carbon monoxide',
              'Most of their hydrogen is made from natural gas, releasing CO₂',
              'Their batteries must be replaced every year, creating waste'
            ],
            correctAnswer: 2,
            explanation: 'Most hydrogen is produced by steam methane reforming, which releases carbon dioxide at the plant. The vehicle itself emits only water, because a fuel cell does not burn its fuel.'
          },
          {
            question: 'A country\'s ethanol production rose from 2.0 × 10⁹ L to 5.0 × 10⁹ L over ten years. What was the percent increase?',
            options: [
              '60%',
              '150%',
              '250%',
              '40%'
            ],
            correctAnswer: 1,
            explanation: '(5.0 − 2.0) ÷ 2.0 × 100 = 150 percent. A value of 250 percent is the final amount as a percent of the starting amount, and 60 percent divides the change by the final value.'
          }
        ]
      }
    },
    {
      id: 'apesrene6-summary',
      type: 'text' as const,
      content: `
## Part 6 Summary

| Skill | What to remember |
|---|---|
| Yearly solar output | kW × peak sun hours × 365 |
| Payback period | Cost ÷ yearly savings |
| Emissions avoided | kWh × emission factor; convert kg to metric tons (÷ 1,000) |
| Environmental vs economic | "Expensive" is not an environmental disadvantage |
| Problem + solution | Name the problem, then a specific fix and how it works |
| Investigation design | Independent variable (changed), dependent variable (measured), controlled variables, repeated trials |
| Percent change | (new − old) ÷ old × 100 |

**Next:** Part 7 ties the whole topic together in a synthesis review.
      `
    }
  ]
};
