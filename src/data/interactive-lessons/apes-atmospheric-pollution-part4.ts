export const apesAtmosphericPollutionPart4Data = {
  topicSlug: 'apes-atmospheric-pollution',
  sections: [
    {
      id: 'apesatmo4-intro',
      type: 'text' as const,
      content: `
# 🏭 Atmospheric Pollution

**Part 4 of 7 — Acid Deposition and Emission Controls**

---

| Section |
|---------|
| 📖 Acid Deposition: Sources and Pattern |
| The pH Scale Is Logarithmic |
| Effects on Lakes, Soils, Forests and Buildings |
| Buffering and Liming |
| Pollution Control Technology |
| Cap-and-Trade: The 1990 Clean Air Act Amendments |

> 🔑 **Key Concept:** Part 1 outlined how $SO_{2}$ and $NO_{x}$ become acids. This part follows those acids to the ground, uses the logarithmic pH scale to compare them, explains why some regions suffer more than others, and surveys the devices and policies that cut emissions (CED 7.6 and 7.7).
      `
    },
    {
      id: 'apesatmo4-deposition',
      type: 'text' as const,
      content: `
## 📖 Acid Deposition: Sources and Pattern

**Acid deposition** is mainly the result of sulfur oxides and nitrogen oxides in the atmosphere, from human and natural sources.

| Acid | Precursor | Main human sources | Natural sources |
|---|---|---|---|
| Sulfuric acid $(H_{2}SO_{4})$ | $SO_{2}$ | Coal-burning power plants | Volcanoes |
| Nitric acid $(HNO_{3})$ | $NO_{x}$ | Motor vehicles and coal-burning power plants | Lightning |

It reaches the ground in two ways:

| Form | What falls |
|---|---|
| **Wet deposition** | Acidic rain, snow, sleet, fog and cloud droplets |
| **Dry deposition** | Acidic gases and sulfate and nitrate particles that settle onto surfaces, then form acid when wetted |

### Downwind, not next door

The CED stresses that acid deposition mainly affects communities **downwind** of coal-burning power plants. $SO_{2}$ and $NO_{x}$ can travel hundreds of kilometers before they are converted to acid and deposited.

| Region | Upwind source |
|---|---|
| Northeastern United States and southeastern Canada | Coal plants of the Ohio River Valley and Midwest, carried by the prevailing westerly winds |
| Scandinavia | Industry in the United Kingdom and central Europe |

**Tall smokestacks**, built to protect local air quality, made this worse by releasing gases higher, where winds carry them farther. (How to calculate the $SO_{2}$ produced from coal's sulfur content is covered in the Fossil Fuels & Nuclear Energy lessons, Part 5.)
      `
    },
    {
      id: 'apesatmo4-ph',
      type: 'text' as const,
      content: `
## The pH Scale Is Logarithmic

$$\\text{pH} = -\\log[H^{+}]$$

Each drop of **1 pH unit** means **10 times** the hydrogen ion concentration. A difference of $n$ units is a factor of $10^{n}$.

| pH | $[H^{+}]$ (mol/L) | Example |
|---|---|---|
| 7.0 | $10^{-7}$ | Pure water |
| 5.6 | about $2.5 \\times 10^{-6}$ | Normal rain (dissolved $CO_{2}$ forms carbonic acid) |
| 4.6 | about $2.5 \\times 10^{-5}$ | Acid rain |
| 4.0 | $10^{-4}$ | Strongly acid rain |

### Worked Example 1: Comparing Rain Samples

How many times more acidic is rain at pH 4.6 than normal rain at pH 5.6?

$$5.6 - 4.6 = 1 \\quad\\Rightarrow\\quad 10^{1} = 10\\ \\text{times}$$

How many times more acidic is pH 4.0 than pH 6.0?

$$6.0 - 4.0 = 2 \\quad\\Rightarrow\\quad 10^{2} = 100\\ \\text{times}$$

A common error is to divide the pH values: $6.0 \\div 4.0 = 1.5$. That ignores the logarithm and badly understates the difference.

### Worked Example 2: A Non-Whole Difference

Rain at pH 4.3 compared with normal rain at pH 5.6:

$$5.6 - 4.3 = 1.3 \\quad\\Rightarrow\\quad 10^{1.3} \\approx 20\\ \\text{times}$$
      `
    },
    {
      id: 'apesatmo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A rain sample has a pH of 4.6. Compared with normal rain at pH 5.6, its hydrogen ion concentration is:',
            options: [
              'About 2 times greater',
              'About 10 times greater',
              'About 1.2 times greater',
              'About 100 times greater'
            ],
            correctAnswer: 1,
            explanation: 'The samples differ by 1 pH unit, and each unit is a factor of 10. Dividing 5.6 by 4.6 gives about 1.2, which treats the logarithmic scale as if it were linear.'
          },
          {
            question: 'Two lakes receive the same acid deposition. A lake in the Adirondack Mountains, on granite, has acidified; a lake over limestone has not. Why?',
            options: [
              'Granite and thin soils hold almost no carbonate to neutralize the acid',
              'Limestone areas receive less rainfall, so less acid reaches them',
              'Granite releases sulfur as it weathers, adding to the acid input',
              'Mountain lakes are colder, and cold water holds far more acid'
            ],
            correctAnswer: 0,
            explanation: 'Limestone is calcium carbonate, which reacts with and neutralizes acid, so lakes over it are buffered. Granite and the thin soils over it have little buffering capacity, so the same deposition lowers the pH.'
          },
          {
            question: 'Most of the sulfur dioxide that causes acid deposition in the eastern United States comes from:',
            options: [
              'Coal-burning power plants',
              'Gasoline car engines',
              'Natural volcanic vents',
              'Lightning in thunderstorms'
            ],
            correctAnswer: 0,
            explanation: 'Coal-burning power plants are the main source of sulfur dioxide. Vehicles are a major source of nitrogen oxides, and lightning produces nitrogen oxides, not sulfur dioxide.'
          }
        ]
      }
    },
    {
      id: 'apesatmo4-effects',
      type: 'text' as const,
      content: `
## Effects on Lakes, Soils, Forests and Buildings

| What is affected | What happens |
|---|---|
| **Lakes and streams** | Lower pH stresses fish, amphibians and invertebrates; as pH falls, fish eggs fail to hatch and sensitive species disappear first |
| **Toxic aluminum** | Acid releases aluminum from soil minerals into water, where it damages fish gills |
| **Soils** | Acid leaches calcium and magnesium, nutrients that plants need, and mobilizes aluminum that damages roots |
| **Forests** | Nutrient loss weakens trees such as red spruce and sugar maple, making them vulnerable to cold, insects and disease; high-elevation forests are bathed in acidic clouds |
| **Buildings and statues** | Limestone and marble (calcium carbonate) dissolve; metals corrode |

### Approximate pH tolerances in lakes (species vary)

| pH | Typical change |
|---|---|
| 6.5 and above | Most aquatic species thrive |
| About 6.0 | Snails, clams and some mayflies decline |
| About 5.0 | Most fish eggs cannot hatch |
| Below about 4.5 | Few fish remain; some frogs and insects persist |

### Stone dissolving

$$CaCO_{3} + H_{2}SO_{4} \\rightarrow CaSO_{4} + H_{2}O + CO_{2}$$

Calcium carbonate in marble and limestone reacts with sulfuric acid to form calcium sulfate (gypsum), which crumbles or washes away. Carved details on old marble monuments blur over decades.

## Buffering and Liming

A **buffer** is a substance that resists changes in pH. In nature the main buffer is **calcium carbonate** from limestone bedrock and limestone-rich soils.

| Region | Bedrock | Sensitivity |
|---|---|---|
| Midwest limestone areas | Limestone | Low: acid is neutralized |
| Adirondacks, New England, Scandinavia | Granite, thin glacial soils | High: lakes acidify |

**Liming**, adding crushed limestone to a lake or its watershed, raises the pH. It treats the symptom, must be repeated, and does not remove the cause. The lasting solution is to **cut $SO_{2}$ and $NO_{x}$ emissions**.
      `
    },
    {
      id: 'apesatmo4-controls',
      type: 'text' as const,
      content: `
## Pollution Control Technology

| Device | Removes | How it works | Where |
|---|---|---|---|
| **Catalytic converter** | CO, $NO_{x}$, hydrocarbons | Metal catalysts (platinum, palladium, rhodium) convert them to $CO_{2}$, $N_{2}$, $O_{2}$ and $H_{2}O$ | Vehicle exhaust |
| **Vapor recovery nozzle** | VOCs | Captures gasoline fumes at the pump and returns them to the tank | Gas stations |
| **Wet scrubber** | $SO_{2}$ and particulates | Sprays exhaust with a limestone or lime slurry; sulfur ends up as solid calcium sulfite or gypsum | Smokestacks |
| **Dry scrubber** | $SO_{2}$ | Injects dry lime powder that reacts with the gas | Smokestacks |
| **Electrostatic precipitator** | Particulates only | Gives particles an electric charge; they collect on oppositely charged plates | Smokestacks |
| **Baghouse (fabric filter)** | Particulates only | Exhaust passes through fabric bags that trap particles | Smokestacks |
| **Fluidized bed combustion** | $SO_{2}$ and $NO_{x}$ | Coal burns mixed with limestone in a bed of particles suspended by air; limestone captures sulfur, and lower burning temperatures form less $NO_{x}$ | Boilers |

Other strategies the CED lists: **regulation** (Clean Air Act standards), **conservation** (using less electricity and driving less), and **alternative fuels** (low-sulfur coal, natural gas, renewables).

### Worked Example 3: Removal Efficiency (illustrative data)

$$\\text{Removal efficiency} = \\frac{\\text{amount in} - \\text{amount out}}{\\text{amount in}} \\times 100$$

An electrostatic precipitator receives **2,000 kg** of particulates per hour and releases **10 kg** per hour:

$$\\frac{2{,}000 - 10}{2{,}000} \\times 100 = 99.5\\%$$

### Worked Example 4: Two Devices in Series

A gas passes through a device that removes 90%, then a second that removes 80% of what is left. Multiply the fractions **remaining**, not the fractions removed:

$$(1 - 0.90) \\times (1 - 0.80) = 0.10 \\times 0.20 = 0.02$$

Only 2% escapes, so the overall removal is **98%**, not 170% and not 85%.
      `
    },
    {
      id: 'apesatmo4-captrade',
      type: 'text' as const,
      content: `
## Cap-and-Trade: The 1990 Clean Air Act Amendments

The **1990 amendments** to the Clean Air Act created the **Acid Rain Program**, a market-based system for power-plant $SO_{2}$:

| Step | What happens |
|---|---|
| 1. Cap | The government sets a national limit on total $SO_{2}$ emissions and lowers it over time |
| 2. Allowances | Plants receive **allowances**; each permits **1 ton** of $SO_{2}$ per year |
| 3. Trade | A plant that cuts emissions cheaply can **sell** spare allowances; a plant that finds cuts costly can **buy** them |
| 4. Compliance | Each plant must hold enough allowances to cover its emissions, or pay penalties |

Because the cap is fixed, total emissions fall no matter which plants do the cutting, and the cuts happen where they are cheapest. Power-plant $SO_{2}$ emissions fell sharply after the program began, and sulfate deposition in the Northeast declined. Many lakes are recovering slowly, because soils lost calcium that takes decades to replace.

### Worked Example 5: Buy or Scrub? (illustrative data)

A plant emits **50,000 t** of $SO_{2}$ a year but holds only **40,000** allowances. Allowances sell for **\\$300** each.

$$\\text{Shortfall} = 50{,}000 - 40{,}000 = 10{,}000\\ \\text{allowances}$$
$$10{,}000 \\times \\$300 = \\$3{,}000{,}000\\ \\text{per year}$$

If a scrubber costing **\\$2,000,000** per year would cut emissions to 30,000 t, the plant would save the purchase **and** have 10,000 spare allowances to sell. That incentive to over-comply is how cap-and-trade rewards cheap reductions.

> 🔑 **AP Connection:** When asked to **describe** cap-and-trade, include the cap, the tradable allowances and the result: total emissions are limited while companies choose the cheapest way to comply.
      `
    },
    {
      id: 'apesatmo4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) How many times more acidic is a lake at pH 4.5 than a lake at pH 6.5?

2) A wet scrubber receives 8,000 kg of $SO_{2}$ per hour and releases 400 kg per hour. What is its removal efficiency, in percent?

3) A plant emits 25,000 t of $SO_{2}$ and holds 22,000 allowances priced at \\$250 each. How many dollars must it spend to buy the allowances it lacks?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100', '95', '750000'],
        hint1: 'The difference is 2 pH units. Raise 10 to that power.',
        hint2: '(8,000 − 400) ÷ 8,000 × 100.',
        hint3: 'Shortfall = 25,000 − 22,000. Each allowance covers 1 ton.',
        explanation: '1) 6.5 − 4.5 = 2, and 10 squared = 100 times. 2) 7,600 ÷ 8,000 × 100 = 95 percent. 3) 3,000 allowances × 250 dollars = 750,000 dollars.'
      }
    },
    {
      id: 'apesatmo4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A coal plant installs an electrostatic precipitator and changes nothing else. Which pollutant will leave its stack at almost the same rate as before?',
            options: [
              'Fly ash and fine soot',
              'Sulfur dioxide',
              'Coarse soot and dust',
              'Mineral dust particles'
            ],
            correctAnswer: 1,
            explanation: 'An electrostatic precipitator charges and collects particles, so ash, soot and dust drop sharply. It does not capture gases, so sulfur dioxide needs a scrubber or fluidized bed combustion.'
          },
          {
            question: 'Under the 1990 sulfur dioxide cap-and-trade program, why might a utility that can cut emissions cheaply reduce them far below what it is permitted to emit?',
            options: [
              'Its unused allowances can be sold to plants that face higher costs',
              'Its cap for the next year is raised as a reward for early cuts',
              'Its plants are then exempt from nitrogen oxide standards',
              'Its tax rate falls by a set amount for every ton it avoids'
            ],
            correctAnswer: 0,
            explanation: 'Spare allowances have market value, so a plant that reduces emissions cheaply profits by selling them. That trading is what lets the program meet a fixed cap at the lowest total cost.'
          },
          {
            question: 'Which change does a catalytic converter make to vehicle exhaust?',
            options: [
              'It turns CO into $CO_{2}$ and $NO_{x}$ into $N_{2}$',
              'It turns $SO_{2}$ into gypsum and dust into ash',
              'It turns $CO_{2}$ into CO and $N_{2}$ into $NO_{x}$',
              'It turns ozone into $O_{2}$ and VOCs into soot'
            ],
            correctAnswer: 0,
            explanation: 'Catalysts oxidize carbon monoxide and hydrocarbons to carbon dioxide and water and reduce nitrogen oxides to nitrogen gas. Turning sulfur dioxide into gypsum is the job of a scrubber at a smokestack.'
          }
        ]
      }
    },
    {
      id: 'apesatmo4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Sources | $SO_{2}$ mainly from coal plants; $NO_{x}$ from vehicles and coal plants |
| Pattern | Worst downwind of coal plants; tall stacks export the problem |
| pH | Each unit = 10× $[H^{+}]$; a difference of $n$ units = $10^{n}$ |
| Effects | Fish and amphibian loss, toxic aluminum, leached calcium, weakened forests, dissolved marble and limestone |
| Buffering | Limestone neutralizes acid; granite regions are most sensitive; liming is a temporary fix |
| Devices | Catalytic converter, vapor recovery, scrubbers, electrostatic precipitator, baghouse, fluidized bed |
| Removal efficiency | (in − out) ÷ in × 100; in series, multiply fractions remaining |
| Cap-and-trade | 1990 amendments; 1 allowance = 1 ton $SO_{2}$; fixed cap, tradable allowances |

**Next:** Part 5 moves up to the stratosphere: how the ozone layer forms, how CFCs destroy it, and why the Montreal Protocol worked.
      `
    }
  ]
};
