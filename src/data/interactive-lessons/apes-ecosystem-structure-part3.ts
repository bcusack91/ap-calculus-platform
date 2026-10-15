export const apesEcosystemStructurePart3Data = {
  topicSlug: 'apes-ecosystem-structure',
  sections: [
    {
      id: 'apesecos3-intro',
      type: 'text' as const,
      content: `
# 🌿 Ecosystem Structure

**Part 3 of 7 — Energy Transfer Calculations**

---

| Section |
|---------|
| 📖 The Laws of Thermodynamics in Ecosystems |
| Multi-Level Transfers: Forward and Backward |
| Diet, Land and the Energy Cost of Eating High |

> 🔑 **Key Concept:** Part 1 introduced the 10% rule. This part explains **why** about 90% of the energy disappears at each step, shows how to calculate real transfer efficiencies from data, and works problems in both directions: from producers up to predators, and from a predator's needs back down to the producers that must support it.
      `
    },
    {
      id: 'apesecos3-laws',
      type: 'text' as const,
      content: `
## 📖 The Laws of Thermodynamics in Ecosystems

| Law | Statement | What it means for a food chain |
|---|---|---|
| **First law** | Energy is neither created nor destroyed; it only changes form | Sunlight becomes chemical energy in sugar, then motion and heat in animals. None of it vanishes. |
| **Second law** | Every energy transformation converts some energy into heat, which is unavailable for work | Each feeding step loses usable energy, so less is available at every higher level. |

Energy therefore **flows one way**: from the sun, through organisms, and out to space as heat. It is never recycled. (Matter, by contrast, cycles; that is the subject of the biogeochemical cycles topic.)

### Where the "missing" 90% goes

Follow the energy stored in a population of grasshoppers that frogs feed on:

| Fate of grasshopper energy | Does it reach the frogs' biomass? |
|---|---|
| Used in the grasshoppers' own cellular respiration, lost as heat | No, and this is usually the largest loss |
| Grasshoppers never eaten (die and go to decomposers) | No, it passes to decomposers |
| Eaten but not digested (passes out as feces) | No, it passes to decomposers |
| Eaten, digested, then used for the frogs' own respiration | No, lost as heat by the frogs |
| Eaten, digested and built into new frog tissue | **Yes**, this is the roughly 10% |

### Worked Example 1: Efficiency From Data

The 10% rule is an average. Real efficiencies range from roughly 5% to 20%. To find the actual value, divide the energy at the higher level by the energy at the level below:

$$\\text{Transfer efficiency} = \\frac{\\text{energy at level } n+1}{\\text{energy at level } n} \\times 100$$

A meadow's producers store 20,000 $kcal/m^{2}/yr$. Its herbivores store 1,600 $kcal/m^{2}/yr$.

$$\\frac{1{,}600}{20{,}000} \\times 100 = 8\\%$$

So 92% of the producer energy did not become herbivore tissue.
      `
    },
    {
      id: 'apesecos3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly applies a law of thermodynamics to explain why energy pyramids narrow at each level?',
            options: [
              'Energy is destroyed as it passes from prey to predator, as the first law states',
              'Each energy transformation releases some heat, as the second law states',
              'Energy is recycled from consumers back to producers, as the first law states',
              'Organisms store all of their food as new tissue, as the second law states'
            ],
            correctAnswer: 1,
            explanation: 'The second law says every energy transformation turns some energy into unusable heat, so less is available at each higher level. The first law forbids energy from being destroyed, and energy flows one way rather than recycling.'
          },
          {
            question: 'Producers in a prairie store 25,000 $kcal/m^{2}/yr$, and the herbivores that feed on them store 2,000 $kcal/m^{2}/yr$. What is the transfer efficiency?',
            options: [
              '8 percent',
              '12.5 percent',
              '80 percent',
              '0.8 percent'
            ],
            correctAnswer: 0,
            explanation: 'Divide the higher level by the lower level: 2,000 ÷ 25,000 = 0.08, or 8 percent. The value 12.5 comes from dividing the wrong way, 25,000 ÷ 2,000.'
          },
          {
            question: 'Of the energy stored in a mouse population, most never becomes part of the owls that eat mice. Where does the largest share of it go?',
            options: [
              'Into bones and fur that the owls swallow but cannot digest',
              'Out as heat released by the mice during cellular respiration',
              'Back to producers when owls excrete nitrogen in their waste',
              'Into the soil, where it is stored permanently as humus'
            ],
            correctAnswer: 1,
            explanation: 'The largest loss at most trophic transfers is the prey population\'s own metabolism, which releases energy as heat. Undigested material and dead organisms pass energy to decomposers, and energy never returns to producers.'
          }
        ]
      }
    },
    {
      id: 'apesecos3-multistep',
      type: 'text' as const,
      content: `
## Multi-Level Transfers: Forward and Backward

### Going up: multiply by the efficiency at each step

With a 10% efficiency, each step up multiplies by 0.1. For a chain that starts at the producers (level 1):

$$E_{n} = E_{1} \\times (0.1)^{n-1}$$

**Worked Example 2:** Phytoplankton in a lake fix 800,000 kcal. How much reaches the tertiary consumers (level 4)?

| Level | Organism | Energy |
|---|---|---|
| 1 | Phytoplankton | 800,000 kcal |
| 2 | Zooplankton | $800{,}000 \\times 0.1 = 80{,}000$ kcal |
| 3 | Small fish | $80{,}000 \\times 0.1 = 8{,}000$ kcal |
| 4 | Pike | $8{,}000 \\times 0.1 = 800$ kcal |

Shortcut: three transfers, so $800{,}000 \\times 0.1^{3} = 800$ kcal.

### Going down: divide by the efficiency at each step

**Worked Example 3:** A population of hawks (tertiary consumers, level 4) needs 30 kcal per day. How much producer energy must the ecosystem fix each day to support them?

$$30 \\div 0.1 \\div 0.1 \\div 0.1 = 30 \\times 10^{3} = 30{,}000\\ \\text{kcal/day}$$

### When the efficiency is not 10%

**Worked Example 4:** In a cold-water food web, efficiency averages 15%. Producers fix 200,000 kcal. Energy at the secondary consumers (two transfers):

$$200{,}000 \\times 0.15 \\times 0.15 = 4{,}500\\ \\text{kcal}$$

Use whatever efficiency the question gives. Default to 10% only when none is given.

### Why food chains are short

Each step leaves about one-tenth as much energy. By level 5, only $0.1^{4} = 0.0001$, or 0.01%, of the producer energy remains. That is too little to support a viable population of yet another predator, which is why most food chains have only four or five levels and why top predators are few and range over large areas.
      `
    },
    {
      id: 'apesecos3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the 10% rule unless told otherwise. Enter numbers only, without commas.

1) Producers fix 50000 kcal. How many kcal reach the tertiary consumers (level 4)?

2) A population of snakes (secondary consumers, level 3) needs 120 kcal per day. How many kcal per day must the producers fix to support it?

3) Herbivores in a pond store 3000 kcal, and the carnivores that eat them store 240 kcal. What is the transfer efficiency, in percent?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '12000', '8'],
        hint1: 'Level 1 to level 4 is three transfers: multiply by 0.1 three times.',
        hint2: 'Level 3 is two transfers above producers: divide by 0.1 twice (multiply by 100).',
        hint3: 'Divide the higher level by the lower level, then multiply by 100.',
        explanation: '1) 50,000 × 0.1³ = 50 kcal. 2) 120 × 10² = 12,000 kcal per day. 3) 240 ÷ 3,000 = 0.08, so the efficiency is 8 percent.'
      }
    },
    {
      id: 'apesecos3-diet',
      type: 'text' as const,
      content: `
## Diet, Land and the Energy Cost of Eating High

The 10% rule explains why eating at a lower trophic level feeds more people from the same land.

### Worked Example 5: Grain or Beef?

A farm produces 2,000,000 kcal of grain per year. A person needs about 2,000 kcal per day.

**Step 1. Convert the person's need to a yearly value.**
$$2{,}000\\ \\text{kcal/day} \\times 365\\ \\text{days/yr} = 730{,}000\\ \\text{kcal/yr}$$

**Step 2. Eat the grain directly (people as primary consumers).**
$$\\frac{2{,}000{,}000}{730{,}000} \\approx 2.7\\ \\text{people fed for a year}$$

**Step 3. Feed the grain to cattle, then eat the beef (people as secondary consumers).**
$$2{,}000{,}000 \\times 0.1 = 200{,}000\\ \\text{kcal of beef}$$
$$\\frac{200{,}000}{730{,}000} \\approx 0.27\\ \\text{people fed for a year}$$

**Step 4. Compare.** Eating the grain directly feeds about 10 times as many people. Measured the other way, the beef pathway delivers 1,800,000 fewer kcal, a 90% decrease.

The 10% rule is a rounded model; feed-to-beef efficiency in real feedlots is often lower than 10%, which makes the gap even wider.

> 🔑 **AP Connection:** Diet questions often ask you to "explain one environmental benefit" of eating lower on the food chain. Tie the number to a consequence: less cropland is needed per person, so less habitat is cleared, less fertilizer runs off, and less water is used for irrigation.
      `
    },
    {
      id: 'apesecos3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Most food chains have only four or five trophic levels. Which explanation is best supported by the 10% rule?',
            options: [
              'Too little energy remains at higher levels to sustain another population',
              'Predators at high levels reproduce too slowly to keep pace with prey',
              'Nutrients such as nitrogen are used up before they reach top predators',
              'Large predators are unable to digest prey from more than one lower level'
            ],
            correctAnswer: 0,
            explanation: 'After four transfers only about 0.01 percent of producer energy is left, which cannot support a viable population at a fifth level. Nutrients cycle rather than running out, so they are not what limits chain length.'
          },
          {
            question: 'A farm grows 3,000,000 kcal of corn. Using the 10% rule, how much more food energy reaches people if they eat the corn directly instead of eating corn-fed beef?',
            options: [
              '2,700,000 kcal',
              '300,000 kcal',
              '3,000,000 kcal',
              '270,000 kcal'
            ],
            correctAnswer: 0,
            explanation: 'Corn-fed beef supplies 3,000,000 × 0.1 = 300,000 kcal, so eating the corn directly provides 3,000,000 − 300,000 = 2,700,000 kcal more. The value 300,000 is the beef energy itself, not the difference.'
          },
          {
            question: 'In an Arctic food web, transfer efficiency averages 5 percent. If producers fix 100,000 kcal, how much energy reaches the secondary consumers?',
            options: [
              '500 kcal',
              '250 kcal',
              '1,000 kcal',
              '5,000 kcal'
            ],
            correctAnswer: 1,
            explanation: 'Producers to secondary consumers is two transfers: 100,000 × 0.05 × 0.05 = 250 kcal. Using the default 10 percent would give 1,000 kcal, and stopping after one transfer gives 5,000 kcal.'
          }
        ]
      }
    },
    {
      id: 'apesecos3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| First law | Energy changes form but is never destroyed |
| Second law | Each transformation loses usable energy as heat |
| Biggest loss | Respiration (metabolism) of the lower level |
| Efficiency | Higher level ÷ lower level × 100; typically about 5–20% |
| Going up | Multiply by the efficiency once per transfer |
| Going down | Divide by the efficiency once per transfer |
| Chain length | Usually 4–5 levels: too little energy remains for more |
| Diet | Eating lower on the food chain feeds about 10 times as many people per unit of crop |

**Next:** Part 4 turns these numbers into pictures: food webs, ecological pyramids and the trophic cascades that follow when one species is removed.
      `
    }
  ]
};
