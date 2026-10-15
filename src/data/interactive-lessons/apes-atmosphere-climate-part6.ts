export const apesAtmosphereClimatePart6Data = {
  topicSlug: 'apes-atmosphere-climate',
  sections: [
    {
      id: 'apesatmo6-intro',
      type: 'text' as const,
      content: `
# ☁️ Atmosphere & Climate

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 Free-Response 2: Analyze and Interpret Quantitative Data |
| Model Answers |
| Free-Response 3: Methane on a Dairy Farm |
| Model Answers |

> 🔑 **Key Concept:** Climate change appears on the exam as data to interpret (trends, rates, projections) and as problems to solve with calculations ($CO_{2}$-equivalents, percent change). Show every setup with units, and when asked to **explain**, give the mechanism, not just the result.

## 📋 Free-Response 2: Analyze and Interpret Quantitative Data

A research team compiled the data below. (All values are illustrative.)

**Table 1. Global indicators**

| Year | Atmospheric $CO_{2}$ (ppm) | Temperature anomaly (°C, relative to 1951–1980) | Sea level relative to 2000 (mm) |
|---|---|---|---|
| 2000 | 370 | +0.40 | 0 |
| 2010 | 389 | +0.65 | 33 |
| 2020 | 407 | +0.90 | 70 |

**Questions**

(a) **Describe** the trend in atmospheric $CO_{2}$ from 2000 to 2020.

(b) **Calculate** the percent change in atmospheric $CO_{2}$ from 2000 to 2020.

(c) **Calculate** the average rate of sea-level rise from 2000 to 2020, in mm per year.

(d) Using your answer to (c), **calculate** the projected sea level in 2050 relative to 2000.

(e) **Explain** why the projection in (d) is likely to be an underestimate.

(f) **Identify** one natural factor that could make a single year warmer than the long-term trend.
      `
    },
    {
      id: 'apesatmo6-input1',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Table 1. Enter numbers only.

1) (b) The percent increase in atmospheric $CO_{2}$ from 2000 to 2020:

2) (c) The average rate of sea-level rise, in mm per year:

3) (d) The projected sea level in 2050 relative to 2000, in mm:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '3.5', '175'],
        hint1: '(407 − 370) ÷ 370 × 100.',
        hint2: '70 mm spread over 20 years.',
        hint3: 'Start from 70 mm in 2020 and add 30 more years at the rate from (c).',
        explanation: '1) 37 ÷ 370 × 100 = 10 percent. 2) 70 mm ÷ 20 years = 3.5 mm per year. 3) 70 + 3.5 × 30 = 70 + 105 = 175 mm above the 2000 level.'
      }
    },
    {
      id: 'apesatmo6-model1',
      type: 'text' as const,
      content: `
## Model Answers

**(a)** Atmospheric $CO_{2}$ **increased steadily**, from 370 ppm in 2000 to 389 ppm in 2010 and 407 ppm in 2020, about 1.9 ppm per year.

**(b)**
$$\\frac{407 - 370}{370} \\times 100 = \\frac{37}{370} \\times 100 = 10\\%$$

**(c)**
$$\\frac{70\\ \\text{mm} - 0\\ \\text{mm}}{2020 - 2000} = \\frac{70\\ \\text{mm}}{20\\ \\text{yr}} = 3.5\\ \\text{mm/yr}$$

**(d)**
$$70\\ \\text{mm} + (3.5\\ \\text{mm/yr} \\times 30\\ \\text{yr}) = 70 + 105 = 175\\ \\text{mm above 2000}$$

A common error is to calculate only $3.5 \\times 30 = 105$ mm, forgetting the 70 mm already risen by 2020. Multiplying 3.5 mm/yr by the full 50 years since 2000 gives the same 175 mm and is equally correct, as long as the work is shown.

**(e)** The rate is **accelerating**: sea level rose 33 mm from 2000 to 2010 but 37 mm from 2010 to 2020. Ice sheets in Greenland and Antarctica are losing mass faster, and the ocean keeps expanding as heat mixes deeper. A constant-rate projection therefore underestimates future rise.

**(f)** An **El Niño** event, which releases heat from the tropical Pacific into the atmosphere. (A volcanic eruption would make a year **cooler**, so it does not answer this question.)

### Rubric habits

- **Describe** needs a direction **and** data from the table.
- **Calculate** needs the setup, the arithmetic and the units.
- **Explain** needs the "because": here, the evidence that the rate itself is increasing.
      `
    },
    {
      id: 'apesatmo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Data Practice** 🎯

Use Table 1 above.
      `,
      exercise: {
        questions: [
          {
            question: 'Sea level rose 33 mm from 2000 to 2010 and 37 mm from 2010 to 2020. What does this pattern show?',
            options: [
              'The rate of rise slowed during the second decade',
              'The rate of rise held steady across both decades',
              'The rate of rise increased during the second decade',
              'The rise will total 37 mm in each later decade too'
            ],
            correctAnswer: 2,
            explanation: 'More millimeters were added in the second decade than the first, so the rate of rise increased. A single decade of data cannot show that later decades will match it.'
          },
          {
            question: 'Which claim is best supported by Table 1 alone?',
            options: [
              'Carbon dioxide and the temperature anomaly both increased',
              'Rising carbon dioxide alone caused all of the sea-level rise',
              'Sea level rose mostly because floating Arctic sea ice melted',
              'The anomaly will keep rising at this pace through to 2100'
            ],
            correctAnswer: 0,
            explanation: 'The table shows both quantities rising together, which is all it can support on its own. It cannot show cause, the source of the sea-level rise, or future values.'
          },
          {
            question: 'What was the average change in the temperature anomaly per decade from 2000 to 2020?',
            options: [
              'About 0.05°C',
              'About 0.25°C',
              'About 0.50°C',
              'About 0.90°C'
            ],
            correctAnswer: 1,
            explanation: 'The anomaly rose 0.90 − 0.40 = 0.50°C over two decades, or 0.25°C per decade. The value 0.50°C is the total change, not the change per decade.'
          }
        ]
      }
    },
    {
      id: 'apesatmo6-frq3',
      type: 'text' as const,
      content: `
## Free-Response 3: Methane on a Dairy Farm

A dairy farm keeps **1,000 cows**. Each cow releases about **100 kg of methane per year** through digestion. The farm's manure lagoon releases another **30 t of methane** per year. Use a 100-year GWP of 30 for methane. (Values are illustrative.)

**Questions**

(a) **Calculate** the methane released by the cows' digestion each year, in tonnes.

(b) **Calculate** the $CO_{2}$-equivalent of the methane in (a), in tonnes.

(c) A feed additive reduces digestive methane by 30%. **Calculate** the $CO_{2}$-equivalent avoided each year.

(d) **Propose** a solution that reduces methane from the manure lagoon, and **describe** one drawback of your solution.

(e) **Identify** one greenhouse gas, other than methane, released by growing the farm's fertilized feed crops, and **identify** its source.

(f) **Explain** why cutting methane slows warming over the next few decades more than cutting the same 100-year $CO_{2}$-equivalent of carbon dioxide.
      `
    },
    {
      id: 'apesatmo6-model3',
      type: 'text' as const,
      content: `
## Model Answers

**(a)**
$$1{,}000\\ \\text{cows} \\times 100\\ \\text{kg/cow} = 100{,}000\\ \\text{kg} = 100\\ \\text{t of methane}$$

**(b)**
$$100\\ \\text{t} \\times 30 = 3{,}000\\ \\text{t CO}_{2}\\text{-eq}$$

**(c)**
$$3{,}000\\ \\text{t} \\times 0.30 = 900\\ \\text{t CO}_{2}\\text{-eq avoided}$$

(Or: $100 \\times 0.30 = 30$ t of methane avoided, $\\times 30 = 900$ t.)

**(d)** *Solution:* Cover the lagoon or install an **anaerobic digester** that captures the methane (biogas) and burns it to generate electricity or heat. *Drawback:* A digester is expensive to build and maintain; also, burning the biogas still releases $CO_{2}$, though far less warming than releasing the methane.

**(e)** **Nitrous oxide** $(N_{2}O)$, released when soil microbes process **nitrogen fertilizer** (and manure) applied to fields.

**(f)** Most methane breaks down within **about a decade**, so cutting methane emissions lowers its concentration, and its warming, within years. Over 20 years each kilogram of methane traps about **80 times** as much heat as $CO_{2}$, compared with about 30 over 100 years, so the 100-year equivalent understates methane's near-term effect. $CO_{2}$, by contrast, accumulates and lingers for centuries.

### A check on scale

The farm's total methane is $100 + 30 = 130$ t, or $130 \\times 30 = 3{,}900$ t $CO_{2}$-eq per year. Burning gasoline releases about 8.9 kg of $CO_{2}$ per gallon, so that matches the $CO_{2}$ from about $3.9 \\times 10^{6} \\div 8.9 \\approx 440{,}000$ gallons of gasoline.
      `
    },
    {
      id: 'apesatmo6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In free-response 3, what would the $CO_{2}$-equivalent of the cows\' 100 t of methane be if the 20-year GWP of about 80 were used instead?',
            options: [
              '3,000 t',
              '5,600 t',
              '8,000 t',
              '2,700 t'
            ],
            correctAnswer: 2,
            explanation: '100 t × 80 = 8,000 t of carbon dioxide-equivalent, nearly three times the 100-year value of 3,000 t. The 20-year horizon gives more weight to methane because most of it breaks down within about a decade.'
          },
          {
            question: 'An anaerobic digester captures manure methane and burns it to run a generator. Which is a real drawback of this solution?',
            options: [
              'It raises the methane that the cows themselves exhale',
              'It turns the methane into a gas with a higher GWP',
              'It costs a great deal to build and to maintain',
              'It leaves the manure unusable as crop fertilizer'
            ],
            correctAnswer: 2,
            explanation: 'Digesters require a large investment and ongoing upkeep. Burning methane produces carbon dioxide, which has a far lower GWP, and the leftover digested manure is still used as fertilizer.'
          },
          {
            question: 'A free-response question asks you to explain how rising atmospheric $CO_{2}$ harms oyster farms. Which answer earns the point?',
            options: [
              'The $CO_{2}$ warms the water, so oysters expel their symbiotic algae',
              'The $CO_{2}$ thins the ozone layer, so ultraviolet harms oyster larvae',
              'Seawater absorbs $CO_{2}$, lowering pH and carbonate needed for shells',
              'The $CO_{2}$ raises the salinity of seawater, so oyster larvae dry out'
            ],
            correctAnswer: 2,
            explanation: 'Dissolved carbon dioxide forms carbonic acid, lowering pH and the carbonate ions oysters need for calcium carbonate shells. Expelling algae describes coral bleaching, and carbon dioxide does not destroy ozone or raise salinity.'
          }
        ]
      }
    },
    {
      id: 'apesatmo6-summary',
      type: 'text' as const,
      content: `
## Part 6 Summary

| FRQ habit | Example from this part |
|---|---|
| Describe a trend with numbers | $CO_{2}$ rose from 370 to 407 ppm |
| Percent change uses the starting value | (407 − 370) ÷ 370 × 100 = 10% |
| Rate = change ÷ time | 70 mm ÷ 20 yr = 3.5 mm/yr |
| Projection = current value + rate × time | 70 + 3.5 × 30 = 175 mm |
| Explain an underestimate | The rate is accelerating (33 → 37 mm per decade) |
| $CO_{2}$-eq = mass × GWP | 100 t × 30 = 3,000 t; × 80 = 8,000 t |
| Propose = specific action + drawback | Anaerobic digester; high cost |

**Next:** Part 7 ties the whole topic together.
      `
    }
  ]
};
