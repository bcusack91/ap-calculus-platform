export const apesFossilFuelsNuclearPart4Data = {
  topicSlug: 'apes-fossil-fuels-nuclear',
  sections: [
    {
      id: 'apesfoss4-intro',
      type: 'text' as const,
      content: `
# 🛢️ Fossil Fuels & Nuclear Energy

**Part 4 of 7 — Nuclear Power in Depth**

---

| Section |
|---------|
| 📖 Fission and the Chain Reaction |
| From Ore to Fuel Rod |
| Inside the Reactor |
| Radioactivity and Half-Life |
| Nuclear Waste |
| Three Accidents Compared |

> 🔑 **Key Concept:** Part 1 summarized nuclear power's pros and cons. This part explains how a reactor controls a chain reaction to boil water, why its waste stays dangerous for so long, and how to calculate radioactive decay with half-lives, a skill the CED names directly (CED 6.6).
      `
    },
    {
      id: 'apesfoss4-fission',
      type: 'text' as const,
      content: `
## 📖 Fission and the Chain Reaction

In **nuclear fission**, a neutron strikes the nucleus of a **uranium-235** atom, which splits into two smaller nuclei called **fission products**. The split releases a large amount of energy as heat, plus **two or three new neutrons**.

If at least one of those neutrons goes on to split another U-235 nucleus, the reaction sustains itself: a **chain reaction**. A reactor is designed to keep the chain reaction steady, with each fission causing, on average, exactly one more.

### How much energy?

Fission of 1 kg of U-235 releases roughly $8 \\times 10^{13}$ J. Burning 1 kg of bituminous coal releases about $2.7 \\times 10^{7}$ J.

$$\\frac{8 \\times 10^{13}}{2.7 \\times 10^{7}} \\approx 3 \\times 10^{6}$$

Gram for gram, fissioning U-235 releases about **3 million times** as much energy as burning coal. That is why a reactor needs so little fuel, and why its land footprint is small.

## From Ore to Fuel Rod

| Step | What happens | Environmental concern |
|---|---|---|
| **Mining** | Uranium ore is mined by surface or underground methods | Radioactive dust and **mine tailings**; radon exposure for miners |
| **Milling** | Ore is crushed and treated to extract uranium oxide ("yellowcake") | Large volumes of radioactive tailings |
| **Enrichment** | Natural uranium is only about **0.7% U-235** (the rest is U-238, which does not readily fission). Enrichment raises it to about **3–5%** for reactor fuel | Energy-intensive |
| **Fuel fabrication** | Enriched uranium is pressed into ceramic pellets, stacked inside metal tubes called **fuel rods**, bundled into fuel assemblies | |

Uranium is a mined, finite resource, so the CED classifies nuclear power as **nonrenewable**.
      `
    },
    {
      id: 'apesfoss4-reactor',
      type: 'text' as const,
      content: `
## Inside the Reactor

| Part | Job |
|---|---|
| **Fuel rods** | Hold the U-235 pellets where fission takes place |
| **Control rods** | Made of neutron-absorbing material (such as boron or cadmium); lowered into the core to slow or stop the chain reaction, raised to speed it up |
| **Moderator** | Usually water; slows the fast neutrons released by fission so they are more likely to split U-235 |
| **Coolant** | Water pumped through the core carries heat away; in most U.S. reactors, this hot, pressurized water heats a separate loop of water into steam |
| **Containment structure** | A thick steel-and-concrete dome that holds radioactive material in if something fails |

From the steam onward, the plant works exactly like a coal plant (Part 2): **steam → turbine → generator → electricity**, and a condenser cooled by river, lake or tower water.

### Environmental profile

| Advantage | Disadvantage |
|---|---|
| No air pollutants or $CO_{2}$ from the reaction itself | **Thermal pollution** from cooling water |
| Very high energy density; small land area | **Hazardous radioactive solid waste** that lasts for thousands of years |
| Steady, around-the-clock output | Mining impacts, high construction cost, and accident risk |

> 🔑 **AP Connection:** The CED calls nuclear power "cleaner" because it does not produce air pollutants, **but** it does release thermal pollution and hazardous solid waste. Quote both halves when asked to evaluate it.
      `
    },
    {
      id: 'apesfoss4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Operators need to slow the chain reaction in a reactor core quickly. What do they do?',
            options: [
              'Lower the control rods further into the core',
              'Pump more moderator water into the core',
              'Raise the fuel rods out of the cooling water',
              'Add more enriched pellets to the fuel rods'
            ],
            correctAnswer: 0,
            explanation: 'Control rods absorb neutrons, so inserting them leaves fewer neutrons to split U-235 nuclei. Adding moderator would make fission more likely, not less.'
          },
          {
            question: 'Why must uranium be enriched before it is used in most power reactors?',
            options: [
              'It contains too little of the fissile U-235',
              'Natural uranium is too radioactive to handle safely',
              'Enrichment removes all of the radioactivity from the fuel',
              'Enrichment turns U-235 into the more fissile U-238'
            ],
            correctAnswer: 0,
            explanation: 'Only about 0.7 percent of natural uranium is U-235, too little to sustain a chain reaction in most reactor designs, so it is raised to about 3 to 5 percent. U-238 does not readily fission.'
          },
          {
            question: 'Which statement about a nuclear plant\'s releases during normal operation is accurate?',
            options: [
              'It adds heat to nearby water but emits no $CO_{2}$ from fission',
              'It releases large amounts of $SO_{2}$ and particulate matter',
              'It releases more $CO_{2}$ per kWh than a natural gas plant',
              'It produces no waste of any kind during normal operation'
            ],
            correctAnswer: 0,
            explanation: 'Fission releases no combustion gases, but the plant discharges waste heat into its cooling water and produces radioactive spent fuel. Sulfur dioxide and particulates come from burning fuels.'
          }
        ]
      }
    },
    {
      id: 'apesfoss4-halflife',
      type: 'text' as const,
      content: `
## Radioactivity and Half-Life

**Radioactivity** occurs when the nucleus of an unstable isotope loses energy by emitting radiation. The **half-life** is the time it takes for **half** of the radioactive atoms in a sample to decay. After each half-life, half of what remained is left.

$$\\text{Amount remaining} = \\text{starting amount} \\times \\left(\\frac{1}{2}\\right)^{n}, \\quad n = \\frac{\\text{time elapsed}}{\\text{half-life}}$$

| Isotope | Half-life (approximate) | Why it matters |
|---|---|---|
| Iodine-131 | 8 days | Released in accidents; concentrates in the thyroid |
| Strontium-90 | 29 years | Mimics calcium; stored in bones |
| Cesium-137 | 30 years | Main long-term contaminant around Chernobyl and Fukushima |
| Plutonium-239 | About 24,000 years | Formed in spent fuel; dominates the long-term hazard |
| Uranium-235 | About 700 million years | The fuel itself |

### Worked Example 1: Amount Remaining

A spill leaves **80 g** of cesium-137 (half-life 30 years). How much remains after 90 years?

$$n = \\frac{90}{30} = 3 \\quad\\Rightarrow\\quad 80 \\times \\left(\\frac{1}{2}\\right)^{3} = 80 \\times \\frac{1}{8} = 10\\ \\text{g}$$

Or step by step: 80 → 40 (30 yr) → 20 (60 yr) → 10 g (90 yr).

### Worked Example 2: Time to Decay

How long until iodine-131 (half-life 8 days) falls to **1/16** of its starting amount?

$$\\frac{1}{16} = \\left(\\frac{1}{2}\\right)^{4} \\Rightarrow n = 4, \\quad 4 \\times 8 = 32\\ \\text{days}$$

### Worked Example 3: Percent Remaining

What percent of a strontium-90 sample remains after 145 years? $n = 145 \\div 29 = 5$, and $(1/2)^{5} = 1/32 \\approx 0.031$, or about **3.1%**.

A common rule of thumb is that a sample is considered safe after about **10 half-lives**, when about 0.1% remains. For plutonium-239, that is about 240,000 years.
      `
    },
    {
      id: 'apesfoss4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

1) A sample contains 200 mg of iodine-131 (half-life 8 days). How many milligrams remain after 24 days?

2) A waste sample's radioactivity falls from 64 units to 4 units in 120 years. What is the half-life, in years?

3) What percent of a cesium-137 sample remains after 60 years (half-life 30 years)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['25', '30', '25'],
        hint1: '24 ÷ 8 = 3 half-lives. Halve 200 three times.',
        hint2: 'Count the halvings from 64 to 4, then divide 120 years by that number.',
        hint3: '60 ÷ 30 = 2 half-lives; (1/2) squared.',
        explanation: '1) 200 → 100 → 50 → 25 mg. 2) 64 → 32 → 16 → 8 → 4 is four half-lives, so 120 ÷ 4 = 30 years. 3) (1/2)² = 1/4 = 25 percent.'
      }
    },
    {
      id: 'apesfoss4-waste',
      type: 'text' as const,
      content: `
## Nuclear Waste

Because the fission products and plutonium in spent fuel stay radioactive for so long, disposal is nuclear power's central long-term problem.

| Stage | Where the waste goes |
|---|---|
| Fresh out of the reactor | **Spent fuel rods** are extremely hot and radioactive, so they cool for years in deep water pools at the plant |
| After cooling | Rods are moved into sealed steel-and-concrete **dry casks**, stored on site |
| Long term | A deep **geologic repository** that isolates the waste for many thousands of years. The United States has none; the proposed Yucca Mountain site in Nevada was halted, so spent fuel remains at plants around the country |

Other radioactive wastes include **uranium mine and mill tailings** and lower-level waste such as contaminated tools and clothing.

## Three Accidents Compared

The CED names three cases in which accidents or natural disasters released radiation, with short- and long-term environmental effects.

| | **Three Mile Island** | **Chernobyl** | **Fukushima Daiichi** |
|---|---|---|---|
| Place and year | Pennsylvania, USA, 1979 | Ukraine (then in the USSR), 1986 | Japan, 2011 |
| Cause | Stuck valve plus operator errors led to loss of coolant | An unsafe test caused a power surge, a steam explosion and a graphite fire | An earthquake and tsunami knocked out power to the cooling pumps |
| What happened | Partial meltdown; the containment structure held | Reactor destroyed; no containment dome; fire burned for days | Meltdowns in three reactors; hydrogen explosions |
| Release | Small | Very large; spread across Europe | Large; much of it to the Pacific Ocean |
| Consequences | No deaths attributed; major safety reforms in the U.S. | About 30 deaths in the first months; thyroid cancers from iodine-131; a permanent exclusion zone of about 30 km radius | More than 100,000 people evacuated; contaminated soil and water |

> 🔑 **AP Connection:** A plant's cooling system matters even after shutdown. Fission products keep releasing heat as they decay, which is why losing cooling water, as at Fukushima, can cause a meltdown in a reactor that has already stopped its chain reaction.

### Fusion: not yet a power source

**Nuclear fusion** joins light nuclei, such as isotopes of hydrogen, into heavier ones. It powers the sun and would produce little long-lived waste, but no fusion power plant yet produces commercial electricity.
      `
    },
    {
      id: 'apesfoss4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Shortly after the Chernobyl accident, iodine-131 was the main radiation concern in milk; decades later, cesium-137 is the main concern in soil. Why?',
            options: [
              'Iodine-131 decays within weeks, while cesium-137 persists far longer',
              'Cesium-137 was released years after the explosion as the fire spread',
              'Iodine-131 was carried out of Europe by wind within a single day',
              'Cesium-137 is absorbed by cows, while iodine-131 stays in the soil'
            ],
            correctAnswer: 0,
            explanation: 'With an 8-day half-life, iodine-131 falls to about 0.1 percent of its starting amount within about 80 days. Cesium-137\'s 30-year half-life keeps it in the soil for generations.'
          },
          {
            question: 'Why did the Fukushima reactors melt down even though their chain reactions stopped when the earthquake struck?',
            options: [
              'Decay heat kept building up after the cooling pumps lost power',
              'The tsunami water started a new chain reaction in the fuel',
              'Operators removed every control rod from the cores',
              'The earthquake split additional U-235 atoms in the fuel'
            ],
            correctAnswer: 0,
            explanation: 'Fission products keep releasing heat as they decay. When the tsunami cut power to the pumps, that heat built up in the cores with no way to remove it.'
          },
          {
            question: 'A country wants to cut $CO_{2}$ emissions and replaces several coal plants with nuclear plants. Which new environmental problem must it plan for?',
            options: [
              'Storage of spent fuel',
              'More acid deposition',
              'More coal ash disposal',
              'Higher mercury output'
            ],
            correctAnswer: 0,
            explanation: 'Nuclear plants produce radioactive spent fuel that must be isolated for thousands of years. Acid deposition, coal ash and mercury are problems the switch away from coal would reduce.'
          }
        ]
      }
    },
    {
      id: 'apesfoss4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Fission | Neutron splits U-235 → fission products + heat + 2–3 neutrons → chain reaction |
| Energy density | About 3 million times the energy of the same mass of coal |
| Fuel cycle | Mining and milling (tailings) → enrichment from 0.7% to 3–5% U-235 → fuel rods |
| Reactor | Control rods absorb neutrons; moderator slows them; coolant carries heat to make steam |
| Profile | No air pollutants from fission; thermal pollution and hazardous radioactive waste; nonrenewable |
| Half-life | Remaining = start × (1/2)ⁿ, where n = time ÷ half-life |
| Waste | Pools → dry casks; no U.S. permanent repository |
| Accidents | Three Mile Island 1979, Chernobyl 1986, Fukushima 2011 |

**Next:** Part 5 compares all the nonrenewable sources side by side with data, and clears up the most common misconceptions.
      `
    }
  ]
};
