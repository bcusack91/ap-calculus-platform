export const apesEnergyPart6Data = {
  topicSlug: 'apes-energy',
  sections: [
    {
      id: 'apesener6-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Concepts & Resources

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free-Response 3: A School Lighting Retrofit |
| Model Answers |
| Free-Response 2: Energy Use in Four Countries |
| Model Answers |

> 🔑 **Key Concept:** Energy conservation is a favorite setting for the "Analyze an environmental problem doing calculations" free-response question, and national energy data for "Analyze and interpret quantitative data." Show every setup with units, and round only at the end.

## 📋 Free-Response 3: A School Lighting Retrofit

A high school has **800 light fixtures** that each draw **100 W**. The district plans to replace them with LED fixtures that each draw **40 W** and give the same light. The lights run **10 hours a day** on **180 school days** a year. Electricity costs **\\$0.125 per kWh**, the retrofit costs **\\$54,000**, and the regional grid emits **0.45 kg of $CO_{2}$ per kWh**. (All values are illustrative.)

**Questions**

(a) **Calculate** the electricity the retrofit saves each year, in kWh.

(b) **Calculate** the payback period of the retrofit, in years.

(c) **Calculate** the mass of $CO_{2}$ the retrofit avoids each year, in metric tons (1 t = 1,000 kg).

(d) The school heats its buildings with a natural gas boiler and buys all its electricity from the grid. **Describe** how a cogeneration system could reduce the school's total fuel use, and **identify** one reason it might save less in a school than in a hospital.

(e) **Identify** one behavioral change, requiring no new equipment, that would further reduce the school's lighting energy.
      `
    },
    {
      id: 'apesener6-input1',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Answer parts (a) to (c). Enter numbers only.

1) (a) Electricity saved per year, in kWh:

2) (b) Payback period, in years:

3) (c) $CO_{2}$ avoided per year, in metric tons (round to the nearest whole number):
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['86400', '5', '39'],
        hint1: 'Each fixture saves 60 W. Find the total kW saved, then multiply by hours per day and days per year.',
        hint2: 'Annual savings = kWh saved × \\$0.125. Payback = cost ÷ annual savings.',
        hint3: 'kWh saved × 0.45 kg per kWh, then divide by 1,000.',
        explanation: '1) 800 × 60 W = 48 kW; 48 kW × 10 h × 180 days = 86,400 kWh. 2) 86,400 × \\$0.125 = \\$10,800 per year; \\$54,000 ÷ \\$10,800 = 5 years. 3) 86,400 × 0.45 = 38,880 kg ≈ 39 t.'
      }
    },
    {
      id: 'apesener6-model1',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Power saved per fixture: $100 - 40 = 60$ W. For all fixtures: $800 \\times 60\\ \\text{W} = 48{,}000\\ \\text{W} = 48\\ \\text{kW}$.
$$48\\ \\text{kW} \\times 10\\ \\text{h/day} \\times 180\\ \\text{days} = 86{,}400\\ \\text{kWh per year}$$

**(b)** Savings: $86{,}400\\ \\text{kWh} \\times \\$0.125/\\text{kWh} = \\$10{,}800$ per year.
$$\\text{Payback} = \\frac{\\$54{,}000}{\\$10{,}800\\ \\text{per year}} = 5\\ \\text{years}$$

**(c)** $86{,}400\\ \\text{kWh} \\times 0.45\\ \\text{kg/kWh} = 38{,}880\\ \\text{kg} \\approx 38.9$ t, about **39 metric tons** of $CO_{2}$ per year.

**(d)** A cogeneration (combined heat and power) unit burns natural gas to generate electricity on site and **captures the waste heat** to warm the buildings, so one fuel input provides both services instead of a power plant's waste heat being dumped while the boiler burns more gas. A school needs heat only in cold months and only during the school day, and stands empty in summer, so much of the captured heat would have no use; a hospital needs heat and hot water around the clock, all year.

**(e)** Switch lights off in empty classrooms, use daylight from windows instead of overhead lights, or shorten lighting hours. Any one specific behavior earns the point.

### Scoring tips

- In (a), a common error is to multiply by 365 days. Use the days given in the prompt.
- In (b), payback needs **money**, so convert kWh to dollars first.
- In (c), the answer must be in the unit asked for; 38,880 kg left unconverted would not earn the point.
      `
    },
    {
      id: 'apesener6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam Practice** 🎯

Use the school retrofit above.
      `,
      exercise: {
        questions: [
          {
            question: 'If the school also adds occupancy sensors that cut lighting hours from 10 to 8 per day, how much electricity would the new LEDs use per year?',
            options: [
              '57,600 kWh',
              '69,120 kWh',
              '46,080 kWh',
              '86,400 kWh'
            ],
            correctAnswer: 2,
            explanation: '800 × 40 W = 32 kW, and 32 kW × 8 h × 180 days = 46,080 kWh. The 57,600 kWh option is the LED use at the original 10 hours a day.'
          },
          {
            question: 'Electricity prices rise from \\$0.125 to \\$0.15 per kWh just before the retrofit. How does this change the payback period?',
            options: [
              'It shortens it, because each kWh saved is worth more',
              'It lengthens it, because the electricity costs more',
              'It has no effect, because the kWh saved stay the same',
              'It shortens it, because the LEDs draw less power'
            ],
            correctAnswer: 0,
            explanation: 'Higher prices make each saved kWh worth more money, so annual savings rise to \\$12,960 and payback falls to about 4.2 years. The kWh saved and the LED power stay the same.'
          },
          {
            question: 'The school\'s grid switches to a mix emitting 0.20 kg $CO_{2}$ per kWh. What happens to the $CO_{2}$ the retrofit avoids?',
            options: [
              'It rises, because each kWh now saves more carbon',
              'It falls, because each kWh saved now prevents less carbon',
              'It stays the same, because the kWh saved do not change',
              'It falls to zero, because the grid no longer emits carbon'
            ],
            correctAnswer: 1,
            explanation: 'Avoided carbon dioxide equals kWh saved times the grid emission factor, so it drops to 86,400 × 0.20 = 17,280 kg. The retrofit still saves the same electricity and money.'
          }
        ]
      }
    },
    {
      id: 'apesener6-frq2',
      type: 'text' as const,
      content: `
## Free-Response 2: Energy Use in Four Countries

**Table 1. Energy use and $CO_{2}$ emissions per person (illustrative data)**

| Country | Population (millions) | Energy use per person (GJ/yr) | $CO_{2}$ per person (t/yr) | Largest electricity source |
|---|---|---|---|---|
| A | 50 | 300 | 15 | Coal |
| B | 80 | 120 | 7 | Natural gas |
| C | 200 | 40 | 1.5 | Coal; most rural homes cook with wood |
| D | 10 | 150 | 3 | Hydroelectric and nuclear |

**Questions**

(a) **Identify** the country most likely to be a developing country, and **justify** your choice with data from the table.

(b) **Calculate** the total annual energy use of Country A and of Country C, in EJ (1 EJ = $10^{9}$ GJ).

(c) **Calculate** the $CO_{2}$ emitted per GJ of energy used in Country A and in Country D, in kg.

(d) **Explain** why Country D emits less $CO_{2}$ per GJ than Country A.

(e) **Make a claim** about how Country C's per-person $CO_{2}$ emissions are likely to change as it industrializes, and **justify** it.

## Model Answers

**(a)** **Country C.** It has the lowest energy use per person (40 GJ, less than a seventh of Country A's) and the lowest $CO_{2}$ per person, and its rural households still cook with wood, the lowest rung of the energy ladder.

**(b)** Total = per-person use × population.
$$\\text{A: } 300\\ \\text{GJ} \\times 5.0 \\times 10^{7} = 1.5 \\times 10^{10}\\ \\text{GJ} = 15\\ \\text{EJ}$$
$$\\text{C: } 40\\ \\text{GJ} \\times 2.0 \\times 10^{8} = 8.0 \\times 10^{9}\\ \\text{GJ} = 8\\ \\text{EJ}$$

Country C has four times the population but uses about half as much energy as Country A in total.

**(c)** Convert tonnes to kilograms first.
$$\\text{A: } \\frac{15{,}000\\ \\text{kg}}{300\\ \\text{GJ}} = 50\\ \\text{kg/GJ} \\qquad \\text{D: } \\frac{3{,}000\\ \\text{kg}}{150\\ \\text{GJ}} = 20\\ \\text{kg/GJ}$$

**(d)** Country D generates most of its electricity from **hydroelectric and nuclear** plants, which emit no $CO_{2}$ while operating, whereas Country A burns **coal**, the fossil fuel that releases the most $CO_{2}$ per unit of energy.

**(e)** Its per-person $CO_{2}$ emissions will most likely **rise**. As countries develop, their reliance on fossil fuels increases (CED 6.2): households move from wood to fossil fuels and electricity, and industry and vehicle use expand. Because its electricity is already mostly from coal, each added unit of energy will bring substantial $CO_{2}$.
      `
    },
    {
      id: 'apesener6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Data Practice** 🎯

Use Table 1 above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which country emits the most $CO_{2}$ in total each year?',
            options: [
              'Country A',
              'Country B',
              'Country C',
              'Country D'
            ],
            correctAnswer: 0,
            explanation: 'Totals are per-person emissions times population: A emits 15 × 50 million = 750 million t, B 560 million t, C 300 million t and D 30 million t.'
          },
          {
            question: 'A student claims Country C\'s energy use is a bigger global problem than Country A\'s because Country C has more people. Which response uses the data correctly?',
            options: [
              'Country C uses more total energy, so the claim is supported by the data',
              'Country A uses nearly twice C\'s total energy with a smaller population',
              'The claim cannot be tested, because total energy use is not in the table',
              'Both countries use the same total energy, so neither is a bigger problem'
            ],
            correctAnswer: 1,
            explanation: 'Multiplying per-person use by population gives 15 EJ for Country A and 8 EJ for Country C, so the smaller country uses nearly twice as much. Totals can be calculated from the table even though they are not listed.'
          },
          {
            question: 'Which change would most lower Country A\'s $CO_{2}$ per GJ of energy used?',
            options: [
              'Replacing coal-fired generation with wind and solar',
              'Raising its population while holding energy use fixed',
              'Switching rural cooking from wood to charcoal fuel',
              'Importing more coal with a higher energy content'
            ],
            correctAnswer: 0,
            explanation: 'Carbon dioxide per GJ depends on the energy sources, and replacing coal with sources that burn no fuel lowers it directly. Changing population alters per-person values, not emissions per unit of energy.'
          }
        ]
      }
    },
    {
      id: 'apesener6-summary',
      type: 'text' as const,
      content: `
## Part 6 Summary

| Skill | How to do it |
|---|---|
| Energy saved | Power saved (kW) × hours per day × days per year |
| Money saved and payback | kWh × price; payback = cost ÷ annual savings |
| $CO_{2}$ avoided | kWh × emission factor; convert kg to t if asked |
| Totals from per-capita data | Per-person value × population |
| Carbon intensity | $CO_{2}$ ÷ energy used; lowest where electricity comes from hydro, nuclear, wind or solar |
| Development claims | Fossil fuel use and per-person emissions rise as countries industrialize |
| Cogeneration answers | Name the captured waste heat and a nearby, steady heat demand |

**Next:** Part 7 ties the whole topic together for review.
      `
    }
  ]
};
