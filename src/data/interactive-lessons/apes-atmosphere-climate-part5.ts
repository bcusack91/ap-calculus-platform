export const apesAtmosphereClimatePart5Data = {
  topicSlug: 'apes-atmosphere-climate',
  sections: [
    {
      id: 'apesatmo5-intro',
      type: 'text' as const,
      content: `
# ☁️ Atmosphere & Climate

**Part 5 of 7 — Ocean Warming, Ocean Acidification and Responses**

---

| Section |
|---------|
| 🌡️ Ocean Warming |
| 🧪 Ocean Acidification by the Numbers |
| Who Is Affected by Acidification |
| Responding: Mitigation and Adaptation |
| Common Misconceptions |

> 🔑 **Key Concept:** Rising $CO_{2}$ hits the ocean twice. The extra heat it traps warms the water (CED 9.6), and the $CO_{2}$ the ocean absorbs lowers its pH (CED 9.7). This part covers both, then the policies and technologies people use to slow climate change and to cope with it.
      `
    },
    {
      id: 'apesatmo5-warming',
      type: 'text' as const,
      content: `
## 🌡️ Ocean Warming

Ocean warming is caused by the increase in greenhouse gases in the atmosphere. Water has a very high **specific heat**, and the ocean is huge, so it has absorbed about **90%** of the excess heat trapped since the 1970s (IPCC AR6). The air, land and melting ice share the rest.

| Effect on marine life | What happens |
|---|---|
| **Loss of habitat** | Species shift toward the poles or into deeper water; cold-water species run out of room, and coral reefs bleach |
| **Metabolic changes** | Most marine animals are ectotherms, so warmer water speeds their metabolism and raises their oxygen demand, just as the water holds less oxygen |
| **Reproductive changes** | Spawning times shift; in sea turtles, nest temperature sets sex, so warmer sand produces **more females** |
| **Stratification** | A warm surface layer floats on cold, dense water and mixes less, so fewer nutrients rise to feed phytoplankton and less oxygen reaches deep water |
| **Marine heatwaves** | Short spells of extreme water temperature that can kill kelp forests, corals and fish |

**Coral bleaching**, in which heat-stressed corals expel their symbiotic algae and turn white, is explained in Biodiversity, Part 5. The CED's key points: warming causes it, and some corals recover while others die.

Warming also reduces how much $CO_{2}$ the ocean can absorb, because warm water holds less dissolved gas (Biogeochemical Cycles, Part 2), and it adds to sea-level rise through **thermal expansion** (Part 3).

### Worked Example 1: Warmer Water Holds Less Oxygen

Fresh water at sea level holds about **9.1 mg/L** of dissolved oxygen when saturated at 20°C, but only about **8.3 mg/L** at 25°C. (Seawater holds somewhat less, but follows the same pattern.)

$$\\frac{8.3 - 9.1}{9.1} \\times 100 \\approx -9\\%$$

A 5°C warming cuts the oxygen the water can hold by about 9%, while the fish in it need **more** oxygen than before.
      `
    },
    {
      id: 'apesatmo5-acid',
      type: 'text' as const,
      content: `
## 🧪 Ocean Acidification by the Numbers

The ocean absorbs roughly a quarter of the $CO_{2}$ people emit each year. The chemistry (worked through step by step in Biogeochemical Cycles, Part 2) in brief:

$$CO_{2} + H_{2}O \\rightarrow H_{2}CO_{3} \\rightarrow H^{+} + HCO_{3}^{-}$$

The extra $H^{+}$ lowers pH, and much of it combines with carbonate ions $(CO_{3}^{2-})$, leaving **less carbonate** for building calcium carbonate $(CaCO_{3})$ shells and skeletons.

The CED names the human activities behind it: **burning fossil fuels, vehicle emissions and deforestation**, all of which raise atmospheric $CO_{2}$.

### pH is logarithmic

$$\\text{pH} = -\\log[H^{+}]$$

Each drop of **1 pH unit** means **10 times** more hydrogen ions. For a drop of $d$ units, $[H^{+}]$ is multiplied by $10^{d}$.

### Worked Example 2: The Change So Far

Surface ocean pH has fallen from about **8.2** to about **8.1**.

$$10^{8.2 - 8.1} = 10^{0.1} \\approx 1.26$$

Hydrogen ion concentration has risen about **26%**, often rounded to "about 30% more acidic."

### Worked Example 3: A Possible Future (illustrative scenario)

Under high emissions, surface pH could fall to about **7.8** by 2100.

$$10^{8.1 - 7.8} = 10^{0.3} \\approx 2.0$$

That would **double** today's hydrogen ion concentration.

### Worked Example 4: Concentrations Directly

At pH 8.0, $[H^{+}] = 10^{-8.0} = 1.0 \\times 10^{-8}$ mol/L. At pH 7.7, $[H^{+}] = 10^{-7.7} \\approx 2.0 \\times 10^{-8}$ mol/L, twice as much.

> 🔑 **AP Connection:** Seawater is still **basic** (pH above 7). "Acidification" describes the **direction** of change, toward acidic, not a seawater pH below 7.
      `
    },
    {
      id: 'apesatmo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Surface ocean pH falls from 8.2 to 8.1. By about what factor does the hydrogen ion concentration change?',
            options: [
              'It rises about 1.01 times',
              'It rises about 1.26 times',
              'It rises about 10 times',
              'It falls about 0.1 times'
            ],
            correctAnswer: 1,
            explanation: 'A drop of 0.1 pH units multiplies the hydrogen ion concentration by 10 to the power 0.1, about 1.26. A tenfold rise would require a full pH unit, and a lower pH always means more hydrogen ions, not fewer.'
          },
          {
            question: 'Why does ocean acidification make it harder for oysters and corals to build their shells and skeletons?',
            options: [
              'Extra hydrogen ions tie up carbonate needed for $CaCO_{3}$',
              'Warmer water dissolves the calcium that shells are made of',
              'Carbonic acid kills algae that supply the corals with calcium',
              'Lower pH makes seawater too dense for larvae to stay afloat'
            ],
            correctAnswer: 0,
            explanation: 'Hydrogen ions combine with carbonate ions to form bicarbonate, leaving less carbonate for building calcium carbonate. Warming causes bleaching, a separate stress, and the algae supply food, not calcium.'
          },
          {
            question: 'Sea turtles nest on a beach where the sand has warmed by several degrees. Which change is most likely in the hatchlings?',
            options: [
              'More of them develop as females',
              'They hatch with weaker shells',
              'They grow to larger adult sizes',
              'Fewer of them carry parasites'
            ],
            correctAnswer: 0,
            explanation: 'In sea turtles, the incubation temperature of the egg determines sex, and warmer nests produce more females. This is one of the reproductive changes the CED links to ocean and coastal warming.'
          }
        ]
      }
    },
    {
      id: 'apesatmo5-organisms',
      type: 'text' as const,
      content: `
## Who Is Affected by Acidification

| Organism | Why it matters |
|---|---|
| **Reef-building corals** | Build $CaCO_{3}$ skeletons; reefs shelter about a quarter of marine species |
| **Oysters, clams and mussels** | Larvae struggle to build first shells; U.S. Pacific Northwest oyster hatcheries have lost larvae to corrosive upwelled water |
| **Pteropods ("sea butterflies")** | Tiny swimming snails whose thin shells can dissolve; food for fish such as salmon |
| **Coccolithophores and foraminifera** | Shelled plankton at the base of food webs |
| **Sea urchins and some crustaceans** | Calcified skeletons or shells |

Because many of these species sit near the base of food webs or build habitat, acidification can ripple through fisheries and coastal economies. Corals face both stresses at once: **bleaching** from warming and **weaker skeletons** from acidification.

## Responding: Mitigation and Adaptation

| | **Mitigation** | **Adaptation** |
|---|---|---|
| Goal | Reduce the cause: cut emissions or remove $CO_{2}$ | Reduce the harm: cope with changes already under way |
| Examples | Renewable energy, efficiency, electric transit, methane leak repair, landfill gas capture, less nitrogen fertilizer, reforestation, carbon capture and storage | Seawalls, raised buildings, managed retreat from coasts, drought-tolerant crops, cooling centers, restoring wetlands as storm buffers |

### Policy tools

| Tool | How it works |
|---|---|
| **Carbon tax** | A fee per tonne of $CO_{2}$ emitted, so polluters pay and cleaner options become cheaper by comparison |
| **Cap-and-trade** | The government sets a declining cap on total emissions and issues tradable allowances; firms that cut cheaply can sell spare allowances (the model is the 1990 Clean Air Act $SO_{2}$ program, in Atmospheric Pollution, Part 4) |
| **Carbon sequestration** | Storing carbon: naturally in forests, wetlands and soils, or by capturing $CO_{2}$ at power plants and injecting it deep underground |

### Worked Example 5: A Carbon Tax at the Pump

Burning 1 gallon of gasoline releases about **8.9 kg** of $CO_{2}$ (Energy, Part 5). At a tax of **\\$50 per tonne**:

$$8.9\\ \\text{kg} = 0.0089\\ \\text{t}, \\qquad 0.0089\\ \\text{t} \\times \\$50/\\text{t} \\approx \\$0.45\\ \\text{per gallon}$$

### International agreements

| Agreement | Year | Key features |
|---|---|---|
| **Kyoto Protocol** | 1997 | First treaty with **binding** emission targets, set only for developed countries; the United States signed but never ratified it |
| **Paris Agreement** | 2015 | Nearly every country sets its **own** targets (nationally determined contributions); goal: keep warming well below 2°C and pursue 1.5°C |
| **Kigali Amendment** to the Montreal Protocol | 2016 | Phases down HFCs, the potent greenhouse gases that replaced ozone-depleting CFCs |

## Common Misconceptions

| Misconception | Correction |
|---|---|
| "The ozone hole causes global warming." | The ozone hole lets in more **ultraviolet** light; warming comes from trapped **infrared**. They are separate problems (ozone depletion is covered in the Atmospheric Pollution lessons) |
| "A cold winter disproves climate change." | **Weather** is short-term; **climate** is the long-term average, and the trend is warming |
| "Melting sea ice is raising the sea." | Floating ice displaces its own weight; **land ice** and **thermal expansion** raise sea level (Part 3) |
| "The ocean is becoming acidic." | It is still basic, about pH 8.1; it is becoming **less basic** |
| "The greenhouse effect is bad." | The natural effect keeps Earth habitable; the problem is the **enhanced** effect |
| "If emissions stopped, temperatures would quickly fall." | Much of the added $CO_{2}$ lingers for centuries, so temperatures would roughly level off rather than drop |
      `
    },
    {
      id: 'apesatmo5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) Water in a laboratory tank falls from pH 8.0 to pH 7.0. How many times greater is its hydrogen ion concentration?

2) A carbon tax is \\$40 per tonne of $CO_{2}$. A car emits 4.6 t of $CO_{2}$ per year. What is the annual tax, in dollars?

3) Under cap-and-trade, a factory receives allowances for 20,000 t of $CO_{2}$ but emits 25,000 t. How many tonnes of allowances must it buy?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '184', '5000'],
        hint1: 'A drop of 1 pH unit multiplies hydrogen ions by 10 to the power 1.',
        hint2: '4.6 × 40.',
        hint3: 'Emissions minus allowances held.',
        explanation: '1) 10 to the power 1 = 10 times. 2) 4.6 t × 40 dollars per tonne = 184 dollars. 3) 25,000 − 20,000 = 5,000 t of allowances.'
      }
    },
    {
      id: 'apesatmo5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which action is an example of adaptation rather than mitigation?',
            options: [
              'Building a seawall to protect a harbor town',
              'Replacing a coal plant with a wind farm',
              'Capturing methane leaking from a landfill',
              'Planting forests on abandoned farmland'
            ],
            correctAnswer: 0,
            explanation: 'A seawall reduces harm from rising seas without reducing emissions, so it is adaptation. Wind power, methane capture and reforestation all cut or remove greenhouse gases, which is mitigation.'
          },
          {
            question: 'Which statement best describes the Kyoto Protocol (1997)?',
            options: [
              'It phased out the CFCs that destroy stratospheric ozone',
              'It banned international trade in endangered wildlife products',
              'It set binding greenhouse gas targets for developed nations',
              'It regulated how U.S. hazardous waste is stored and disposed of'
            ],
            correctAnswer: 2,
            explanation: 'The Kyoto Protocol set binding emission-reduction targets for developed countries to slow climate change. Phasing out CFCs was the Montreal Protocol, banning trade in endangered species is CITES, and hazardous waste management in the United States falls under RCRA; all four are required legislation in the CED.'
          },
          {
            question: 'A student writes that the ozone hole is the main cause of global warming. Which correction is most accurate?',
            options: [
              'The ozone hole closed decades ago, so it no longer affects any climate',
              'The ozone hole lets in more ultraviolet, but heat is trapped as infrared',
              'The ozone hole is caused by $CO_{2}$, so the two are really one problem',
              'The ozone hole lets heat escape to space, so it should cool the planet'
            ],
            correctAnswer: 1,
            explanation: 'Stratospheric ozone depletion increases ultraviolet radiation at the surface, while warming comes from greenhouse gases trapping outgoing infrared. The hole is slowly recovering, not closed, and it is caused by chlorine from CFCs, not carbon dioxide.'
          }
        ]
      }
    },
    {
      id: 'apesatmo5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Ocean warming | Caused by greenhouse gases; ocean took up about 90% of the excess heat |
| Effects on marine life | Habitat loss, faster metabolism with less oxygen, reproductive changes (sea turtle sex ratios), stratification, bleaching |
| Acidification causes | Fossil fuels, vehicle emissions, deforestation → more $CO_{2}$ dissolving |
| pH math | Each 1-unit drop = 10× more $H^{+}$; a drop of $d$ = $10^{d}$; 8.2 → 8.1 ≈ 26% more |
| Shell builders | Less carbonate for $CaCO_{3}$: corals, oysters, pteropods, plankton |
| Mitigation vs adaptation | Cut the cause vs cope with the effects |
| Policy | Carbon tax, cap-and-trade, sequestration; Kyoto 1997, Paris 2015, Kigali 2016 |

**Next:** Part 6 puts the whole topic to work on AP-style free-response and multiple-choice questions.
      `
    }
  ]
};
