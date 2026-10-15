export const apesWaterResourcesPart6Data = {
  topicSlug: 'apes-water-resources',
  sections: [
    {
      id: 'apeswate6-intro',
      type: 'text' as const,
      content: `
# 💧 Water Resources

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📋 FRQ 1 Practice: Design an Investigation |
| Model Answers for FRQ 1 |
| 📋 FRQ 3 Practice: Analyze an Environmental Problem Doing Calculations |
| Model Answers for FRQ 3 |

> 🔑 **Key Concept:** The APES free-response section has three questions in 70 minutes: **FRQ 1, Design an investigation**; **FRQ 2, Analyze and interpret quantitative data**; and **FRQ 3, Analyze an environmental problem doing calculations**. Water and pollution topics appear in all three. This part practices FRQ 1 and FRQ 3, and both include data reading of the kind FRQ 2 tests.

## 📋 FRQ 1 Practice: Design an Investigation

A coal-fired power plant draws cooling water from a river and returns it warmer. Students want to find out whether the discharge harms stonefly larvae, a pollution-sensitive insect. They measured the river on one summer afternoon. (Illustrative data.)

| Site | 1 km upstream | At the outfall | 0.5 km downstream | 2 km downstream | 5 km downstream |
|---|---|---|---|---|---|
| Water temperature (°C) | 16 | 27 | 24 | 20 | 17 |
| Dissolved oxygen (mg/L) | 10.0 | 7.5 | 7.9 | 8.8 | 9.7 |
| Stonefly larvae per m² | 40 | 4 | 9 | 22 | 37 |

**Questions**

(a) **Identify** the independent variable and one dependent variable in this study.

(b) **State** a testable hypothesis for the investigation.

(c) **Identify** the control site and **explain** its purpose.

(d) **Identify** one variable that should be held constant when sampling, and **justify** your choice.

(e) **Calculate** the percent decrease in dissolved oxygen and in stonefly larvae from the upstream site to the outfall.

(f) **Explain** why stonefly numbers are lowest at the outfall.

(g) **Propose** one change at the power plant that would reduce the harm, and **describe** one disadvantage of it.
      `
    },
    {
      id: 'apeswate6-input1',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the FRQ 1 table. Enter numbers only.

1) (e) Percent decrease in dissolved oxygen from the upstream site to the outfall:

2) (e) Percent decrease in stonefly larvae from the upstream site to the outfall:

3) How many degrees Celsius warmer is the water at the outfall than upstream?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '90', '11'],
        hint1: '(10.0 − 7.5) ÷ 10.0 × 100.',
        hint2: '(40 − 4) ÷ 40 × 100.',
        hint3: 'Subtract the upstream temperature from the outfall temperature.',
        explanation: '1) 2.5 ÷ 10.0 × 100 = 25 percent. 2) 36 ÷ 40 × 100 = 90 percent. 3) 27 − 16 = 11 °C.'
      }
    },
    {
      id: 'apeswate6-model1',
      type: 'text' as const,
      content: `
## Model Answers for FRQ 1

**(a)** Independent variable: **distance from the outfall** (or water temperature). Dependent variable: **number of stonefly larvae per m²** (or dissolved oxygen).

**(b)** "If heated water from the power plant lowers dissolved oxygen, then stonefly larvae will be less abundant at the outfall than upstream." A hypothesis must be testable and name both variables.

**(c)** The **site 1 km upstream** is the control, because the discharge has not reached it. It shows what the river is like without thermal pollution, so differences at other sites can be attributed to the discharge.

**(d)** Sample every site at the **same time of day**. DO rises during daylight photosynthesis and falls overnight, so sampling some sites in the morning and others in the afternoon would add a difference that has nothing to do with the plant. Other acceptable answers: the same depth, the same stream-bottom type and current speed, or the same net and sampling area.

**(e)** DO: $\\dfrac{10.0 - 7.5}{10.0} \\times 100 = 25\\%$ decrease. Stoneflies: $\\dfrac{40 - 4}{40} \\times 100 = 90\\%$ decrease.

**(f)** Water at the outfall is 11 °C warmer. Warm water holds **less dissolved oxygen**, and warmth also **raises the larvae's metabolic rate**, so they need more oxygen when less is available. Stoneflies are sensitive to low oxygen, so few survive there. *(The point needs the link from temperature to oxygen to the organism.)*

**(g)** *Proposal:* Pass the water through a **cooling tower** or **cooling pond** so it returns to the river near its natural temperature. *Disadvantage:* cooling towers are expensive to build and lose water to evaporation.

### Design checklist for any FRQ 1

| Element | What to write |
|---|---|
| Hypothesis | If (change in independent variable), then (predicted change in dependent variable) |
| Control | The condition without the treatment, used for comparison |
| Constants | Variables kept the same so they cannot explain the result |
| Repeated trials | Several samples per site, averaged, to reduce the effect of chance |

Note one weakness in this study: all samples were taken on a single afternoon. Repeating the sampling on several days would make the conclusion stronger.
      `
    },
    {
      id: 'apeswate6-frq3',
      type: 'text' as const,
      content: `
## 📋 FRQ 3 Practice: Analyze an Environmental Problem Doing Calculations

A 100-hectare farm above the Ogallala Aquifer grows corn with **furrow irrigation**, which loses about 1/3 of the water applied. Each season the crop needs **570,000 m³** of water to reach its roots. The farmer is considering **drip irrigation**, which loses about 5%. Pumping costs \\$0.20 per m³, and installing drip lines would cost \\$255,000. (Illustrative data.)

**Questions**

(a) **Calculate** the volume of water the farm must pump each season using furrow irrigation.

(b) **Calculate** the volume it must pump using drip irrigation.

(c) **Calculate** how many years the pumping savings would take to repay the cost of the drip system.

(d) **Explain** one environmental benefit of the switch other than using less water.

(e) **Identify** one reason many farmers continue to use furrow irrigation.
      `
    },
    {
      id: 'apeswate6-input2',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units or commas.

1) (a) Water pumped each season with furrow irrigation, in m³:

2) (b) Water pumped each season with drip irrigation, in m³:

3) (c) Years for the pumping savings to repay the drip system:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['855000', '600000', '5'],
        hint1: 'If 1/3 is lost, 2/3 reaches the roots. Divide the need by 2/3.',
        hint2: 'If 5% is lost, 95% reaches the roots. Divide the need by 0.95.',
        hint3: 'Find the volume saved, multiply by \\$0.20 per m³, then divide the installation cost by the yearly savings.',
        explanation: '1) 570,000 ÷ (2/3) = 855,000 m³. 2) 570,000 ÷ 0.95 = 600,000 m³. 3) 255,000 m³ saved × \\$0.20 = \\$51,000 per year, and \\$255,000 ÷ \\$51,000 = 5 years.'
      }
    },
    {
      id: 'apeswate6-model3',
      type: 'text' as const,
      content: `
## Model Answers for FRQ 3

**(a)** Furrow loses 1/3, so 2/3 reaches the roots.
$$\\frac{570{,}000\\ \\text{m}^3}{2/3} = 570{,}000 \\times \\frac{3}{2} = 855{,}000\\ \\text{m}^3$$

**(b)** Drip loses 5%, so 95% reaches the roots.
$$\\frac{570{,}000\\ \\text{m}^3}{0.95} = 600{,}000\\ \\text{m}^3$$

**(c)** Volume saved: $855{,}000 - 600{,}000 = 255{,}000\\ \\text{m}^3$ per season.
Money saved: $255{,}000\\ \\text{m}^3 \\times \\dfrac{\\$0.20}{1\\ \\text{m}^3} = \\$51{,}000$ per year.
Payback: $\\dfrac{\\$255{,}000}{\\$51{,}000\\ \\text{per yr}} = 5$ years.

In liters, the yearly savings are $255{,}000 \\times 1{,}000 = 2.55 \\times 10^{8}$ L.

**(d)** Any one, explained: less water evaporating from the soil surface means **less salinization**; less water standing in the field means **no waterlogging**; less runoff carries **less fertilizer and sediment** into streams; slower pumping **slows depletion of the aquifer** and the spread of cones of depression.

**(e)** Furrow irrigation is **cheap** to install and simple to run, while drip lines have a high upfront cost.

> 🔑 **AP Connection:** FRQ 3 awards points for the setup as well as the answer. Show each step with units, and keep the same units throughout (m³ here, not a mix of m³ and liters).
      `
    },
    {
      id: 'apeswate6-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the FRQ 1 study, why do stonefly numbers recover by 5 km downstream?',
            options: [
              'The water has cooled again, so it holds more dissolved oxygen',
              'The plant adds oxygen that spreads evenly as the river flows',
              'Stoneflies there adapted to warm water within a few hours',
              'The current carries larvae from the outfall to that site'
            ],
            correctAnswer: 0,
            explanation: 'By 5 km the water is back to 17 °C and DO is 9.7 mg/L, close to upstream values, so oxygen-sensitive larvae can survive. Cooling water carries less oxygen, not more, and adaptation takes many generations, not hours.'
          },
          {
            question: 'A student proposes measuring only the outfall site, on many different days. What is the main weakness of this design?',
            options: [
              'It lacks an upstream comparison site',
              'It uses too many repeated trials',
              'It measures the wrong variable',
              'It samples on too many days'
            ],
            correctAnswer: 0,
            explanation: 'Without an upstream site unaffected by the discharge, there is nothing to compare the outfall with, so any effect of the plant cannot be identified. Repeated trials on many days strengthen a design rather than weaken it.'
          },
          {
            question: 'A farm switches from flood irrigation to spray irrigation to save water. What is a valid concern about the switch?',
            options: [
              'Spray needs energy to run its pumps',
              'Spray wastes more water than flood',
              'Spray waterlogs soil more than flood',
              'Spray is cheaper, so water is overused'
            ],
            correctAnswer: 0,
            explanation: 'Spray systems are more expensive than flood or furrow systems and need energy to pump water through the nozzles. Spray costs more than flood rather than less, the CED describes it as more efficient than flood, and flood is the method linked to waterlogging.'
          },
          {
            question: 'A lake receives treated sewage that passed through primary and secondary treatment only. Which problem is the lake still most at risk of?',
            options: [
              'Eutrophication from the leftover nitrogen and phosphorus',
              'Large debris such as rags and sticks entering the water',
              'Thermal pollution from the heat of the aeration tanks',
              'Saltwater intrusion from the chlorine used to disinfect'
            ],
            correctAnswer: 0,
            explanation: 'Primary and secondary treatment remove solids and most organic matter but leave much of the nitrogen and phosphorus, which tertiary treatment would remove. Those nutrients can fuel algal blooms and eutrophication.'
          }
        ]
      }
    }
  ]
};
