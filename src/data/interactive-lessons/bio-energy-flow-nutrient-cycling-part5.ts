export const bioEnergyFlowPart5Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s1-intro',
      type: 'text' as const,
      content: `
## Nitrogen and Phosphorus Cycles

**Part 5 of 7 — Nitrogen and Phosphorus Cycles**

Carbon builds the skeleton of every biological molecule (Part 4), but two other elements are just as essential and are often in much shorter supply.

| Element | Where organisms use it |
|---|---|
| **Nitrogen** | Amino acids and proteins; nitrogenous bases of DNA, RNA and ATP |
| **Phosphorus** | Sugar-phosphate backbone of DNA and RNA; phosphate groups of ATP; phospholipids in every membrane |

Because organisms need these elements in quantity and the environment often supplies them slowly, nitrogen or phosphorus frequently sets the limit on how much producers can grow.

### The nitrogen paradox

About **78%** of the atmosphere is nitrogen gas ($\\text{N}_2$), yet plants and animals cannot use it. The two nitrogen atoms are held by a very strong triple bond. Only certain prokaryotes can break it, so almost all nitrogen enters living things through microbes.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s2-nitrogen',
      type: 'text' as const,
      content: `
### The Nitrogen Cycle, Step by Step

| Step | Change | Who does it |
|---|---|---|
| **Nitrogen fixation** | $\\text{N}_2 \\rightarrow \\text{NH}_3$ (which becomes $\\text{NH}_4^+$ in soil water) | *Rhizobium* bacteria in legume root nodules, free-living soil bacteria, cyanobacteria |
| **Ammonification** | Organic nitrogen in dead matter and wastes $\\rightarrow \\text{NH}_4^+$ | Decomposers (bacteria and fungi) |
| **Nitrification** | $\\text{NH}_4^+ \\rightarrow \\text{NO}_2^- \\rightarrow \\text{NO}_3^-$ | Nitrifying bacteria, which are chemoautotrophs |
| **Assimilation** | Plants absorb $\\text{NH}_4^+$ and $\\text{NO}_3^-$ and build amino acids and nucleotides | Plants and other producers; animals get nitrogen by eating |
| **Denitrification** | $\\text{NO}_3^- \\rightarrow \\text{N}_2$ returned to the atmosphere | Denitrifying bacteria in low-oxygen soils and sediments |

#### Connections worth noticing

- **Rhizobium and legumes are mutualists.** The plant supplies sugars to bacteria living in its root nodules; the bacteria supply fixed nitrogen. Farmers rotate legumes such as soybeans, clover or alfalfa with other crops to enrich nitrogen-poor soil.
- **Nitrifying bacteria link back to Part 1.** They oxidize ammonium for energy and fix carbon with it, so they are chemoautotrophs.
- **Denitrification needs low oxygen.** It speeds up in waterlogged soils and marsh sediments, which is why flooded fields can lose nitrate to the air.
- **Lightning and industry also fix nitrogen.** Human activity, mainly industrial fertilizer production, has roughly doubled the amount of fixed nitrogen entering land ecosystems each year.

> **Common mix-up:** nitrogen **fixation** turns $\\text{N}_2$ gas into ammonia; **nitrification** turns ammonium into nitrate. Neither one returns nitrogen to the air; only **denitrification** does.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s3-mcq-nitrogen',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Nitrogen Cycle
      `,
      exercise: {
        questions: [
          {
            question: 'A farmer plants soybeans, a legume, in a field that was low in soil nitrogen. The next year, corn planted in the same field grows better. What best explains this?',
            options: [
              'Soybean roots absorbed N2 gas directly and released it as nitrate',
              'Root-nodule bacteria fixed N2, and soybean residues left that nitrogen in the soil',
              'Soybean leaves took in nitrogen from the air through their stomata',
              'Denitrifying bacteria on soybean roots added nitrate to the soil'
            ],
            correctAnswer: 1,
            explanation: 'Rhizobium bacteria in legume root nodules fix atmospheric nitrogen, and when soybean roots and residues decompose, that fixed nitrogen stays in the soil for the next crop. Plants cannot use nitrogen gas on their own, and denitrification removes nitrate rather than adding it.'
          },
          {
            question: 'Which step of the nitrogen cycle is carried out by chemoautotrophic bacteria that oxidize ammonium for energy?',
            options: [
              'Denitrification, which converts nitrate to N2 gas',
              'Nitrification, which converts ammonium to nitrate',
              'Ammonification, which converts proteins to ammonium',
              'Nitrogen fixation, which converts N2 gas to ammonia'
            ],
            correctAnswer: 1,
            explanation: 'Nitrifying bacteria gain energy by oxidizing ammonium to nitrite and then nitrate, and they use that energy to fix carbon. Ammonification produces ammonium rather than oxidizing it, and fixation and denitrification involve nitrogen gas.'
          },
          {
            question: 'Unlike the carbon and nitrogen cycles, the phosphorus cycle',
            options: [
              'depends on bacteria to move phosphate into the air',
              'has no significant atmospheric gas phase',
              'moves mainly through the atmosphere as a gas',
              'is driven by fixation in legume root nodules'
            ],
            correctAnswer: 1,
            explanation: 'Phosphorus moves through rock, soil, water, sediments and organisms, with no significant atmospheric reservoir. Fixation in root nodules is part of the nitrogen cycle.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s4-phosphorus',
      type: 'text' as const,
      content: `
### The Phosphorus Cycle

Phosphorus has **no significant gaseous phase**. It cycles through rocks, soil, water, sediments and organisms, mostly as **phosphate** ($\\text{PO}_4^{3-}$).

1. **Weathering** of phosphate-bearing rock slowly releases phosphate into soil and water.
2. **Assimilation:** plants and algae absorb phosphate and build it into DNA, RNA, ATP and phospholipids. Consumers obtain it by eating.
3. **Decomposition** returns phosphate from wastes and dead organisms to the soil.
4. **Runoff** carries phosphate to rivers, lakes and the ocean.
5. **Sedimentation:** phosphate settles and becomes part of new rock. **Geological uplift** may expose that rock to weathering again, over millions of years.

Because there is no atmospheric shortcut, phosphorus cycles **locally and slowly**. Phosphate also binds tightly to soil particles, so little is freely available to roots at any moment.

### Limiting Nutrients

A **limiting nutrient** is the element in shortest supply relative to what producers need. Adding it increases primary production; adding other nutrients does not.

- **Nitrogen** commonly limits production in many terrestrial ecosystems and in much of the ocean.
- **Phosphorus** commonly limits production in freshwater lakes.

#### Case: Lake 226

In 1973, scientists in Ontario's Experimental Lakes Area divided Lake 226 with a plastic curtain. One basin received phosphorus, nitrogen and carbon; the other received only nitrogen and carbon. Within months the phosphorus basin turned green with algae; the other did not. Because the only difference between basins was phosphorus, the experiment identified phosphorus as the limiting nutrient in that lake.

> **AP Connection:** In a nutrient-addition experiment, the limiting nutrient is the one whose addition (alone or with others) produces the growth response, compared with a control that received none.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s5-eutrophication',
      type: 'text' as const,
      content: `
### Eutrophication and Dead Zones

**Eutrophication** is the over-enrichment of a body of water with nutrients, especially nitrogen and phosphorus. Human sources include fertilizer runoff from farms and lawns, animal waste and sewage.

#### The causal chain

1. Fertilizer runoff delivers extra nitrate and phosphate to a lake or coastal zone.
2. Limiting nutrients are suddenly abundant, so algae and cyanobacteria grow explosively in an **algal bloom**.
3. The bloom shades the water, killing submerged plants.
4. The short-lived algae die and sink.
5. **Decomposers** break down the dead algae by **aerobic respiration**, using up dissolved oxygen.
6. Deep water becomes **hypoxic** (low in oxygen). Fish and other animals that cannot leave suffocate, creating a **dead zone**.

The algae themselves release oxygen during the day, so the problem is not the living bloom but the **decomposition** that follows its death.

**Example:** nitrogen and phosphorus carried down the Mississippi River feed a hypoxic dead zone in the Gulf of Mexico that forms each summer and often covers thousands of square miles.

> **Key reasoning step:** the link between nutrients and fish death runs through **decomposers' oxygen use**. Answers that skip this step or blame the nutrients as directly toxic will not earn credit.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s6-dropdown-chain',
      type: 'dropdown-select' as const,
      content: `
### Practice — Build the Eutrophication Chain

Choose the correct entry for each step.
      `,
      exercise: {
        dropdowns: [
          {
            label: '1. Fertilizer runoff adds extra',
            options: ['nitrogen gas', 'nitrate and phosphate', 'dissolved oxygen', 'carbon monoxide']
          },
          {
            label: '2. Algae respond with',
            options: ['a mass toxic die-off', 'a switch to chemosynthesis', 'a population explosion', 'reduced photosynthesis']
          },
          {
            label: '3. Dead algae are broken down by decomposers using',
            options: ['photosynthesis', 'nitrogen fixation', 'denitrification', 'aerobic respiration']
          },
          {
            label: '4. The result in deeper water is',
            options: ['hypoxia that kills fish', 'higher oxygen levels', 'colder bottom water', 'more nitrogen fixation']
          }
        ],
        correctAnswers: ['nitrate and phosphate', 'a population explosion', 'aerobic respiration', 'hypoxia that kills fish'],
        hint1: 'Start with the nutrients that most often limit algal growth.',
        hint2: 'Where does the oxygen go? Think about what decomposers do with organic matter.',
        hint3: 'Decomposers respire the dead algae, and that respiration uses up dissolved oxygen.',
        explanation: 'Runoff adds nitrate and phosphate, the limiting nutrients, so algae multiply in a bloom. When they die, decomposers break them down by aerobic respiration, using up dissolved oxygen and leaving deep water hypoxic.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s7-mcq-phosphorus',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Limiting Nutrients and Eutrophication
      `,
      exercise: {
        questions: [
          {
            question: 'Soil in a flooded field becomes low in oxygen, and measurements show nitrate disappearing as N2 gas is released. Which process is responsible?',
            options: [
              'Nitrification by chemoautotrophic bacteria',
              'Denitrification by anaerobic bacteria',
              'Nitrogen fixation by cyanobacteria',
              'Ammonification by decomposers'
            ],
            correctAnswer: 1,
            explanation: 'Denitrifying bacteria use nitrate in place of oxygen when oxygen is scarce, converting it to nitrogen gas. Nitrification makes nitrate and needs oxygen, and fixation converts nitrogen gas into ammonia rather than producing it.'
          },
          {
            question: 'After an algal bloom in a lake, dissolved oxygen in deep water drops sharply and fish die. What directly consumes the oxygen?',
            options: [
              'Photosynthesis by the algae at the lake surface',
              'Aerobic respiration by decomposers breaking down dead algae',
              'Chemical reaction of nitrate with the dissolved oxygen',
              'Respiration by the fish crowding into deeper water'
            ],
            correctAnswer: 1,
            explanation: 'Decomposers respire the large mass of dead algae and use up dissolved oxygen faster than it is replaced. Photosynthesis releases oxygen, and the fish are victims of the oxygen loss rather than its main cause.'
          },
          {
            question: 'In Lake 226, the basin that received phosphorus, nitrogen and carbon developed a large algal bloom, while the basin that received only nitrogen and carbon did not. What does this indicate?',
            options: [
              'Phosphorus became toxic to algae until nitrogen was added',
              'Phosphorus was the nutrient limiting algal growth in the lake',
              'Nitrogen limited algal growth there, and phosphorus had no effect',
              'Carbon limited algal growth once phosphorus was used up'
            ],
            correctAnswer: 1,
            explanation: 'The two basins differed only in phosphorus, and only the phosphorus basin bloomed, so phosphorus was the limiting nutrient. Both basins received nitrogen and carbon, so neither of those could explain the difference.'
          }
        ]
      }
    }
  ]
};
