export const bioEnergyFlowPart1Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s1-intro',
      type: 'text' as const,
      content: `
## Autotrophs, Heterotrophs and Energy Capture

**Part 1 of 7 — Autotrophs, Heterotrophs and Energy Capture**

Every living thing needs a steady supply of free energy to stay organized, grow and reproduce. Ecology asks a simple question about that energy: **where does it come from, and where does it go?** The answer organizes this whole topic (CED 8.2, Energy Flow Through Ecosystems).

> **The central contrast:** energy flows through an ecosystem in **one direction**. It enters mostly as sunlight, is stored for a while in the chemical bonds of organic molecules, and leaves as **heat**. Matter, such as carbon, nitrogen, phosphorus and water, **cycles**: the same atoms are used again and again.

Because heat cannot be turned back into chemical energy by organisms, an ecosystem needs a constant input of new energy. A forest cut off from sunlight would run down in weeks; its carbon atoms would still be there.

### Roadmap for this topic

| Part | Focus |
|---|---|
| 1 | How energy enters: autotrophs, heterotrophs, GPP and NPP |
| 2 | How individual organisms spend energy |
| 3 | Food webs, trophic efficiency and ecological pyramids |
| 4 | Carbon and water cycles |
| 5 | Nitrogen and phosphorus cycles, eutrophication |
| 6 | AP-style data and calculation practice |
| 7 | Synthesis review |
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s2-autotrophs',
      type: 'text' as const,
      content: `
### Autotrophs: the Energy Gatekeepers

An **autotroph** ("self-feeder") builds its own organic molecules from inorganic carbon, usually $\\text{CO}_2$. Autotrophs are the **producers** of an ecosystem. They differ in the energy source they use to power that carbon fixation.

| Type | Energy source | Carbon source | Examples |
|---|---|---|---|
| **Photoautotroph** | Light | $\\text{CO}_2$ | Plants, algae, cyanobacteria |
| **Chemoautotroph** | Oxidation of small inorganic molecules | $\\text{CO}_2$ | Sulfur-oxidizing bacteria at deep-sea vents, nitrifying soil bacteria |

**Photosynthesis** captures light energy and stores it in sugar:

$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

**Chemosynthesis** captures energy released when an organism oxidizes small inorganic molecules from its surroundings, such as hydrogen sulfide ($\\text{H}_2\\text{S}$), ammonium ($\\text{NH}_4^+$) or ferrous iron ($\\text{Fe}^{2+}$). That energy is then used to fix $\\text{CO}_2$ into sugar. The CED stresses one point: **chemosynthesis can occur in the absence of oxygen**. Some chemoautotrophs use $\\text{O}_2$ to accept electrons, but others do not, so chemosynthetic life can thrive in anoxic sediments and around hydrothermal vents.

#### Case: life without sunlight

In 1977, researchers exploring hydrothermal vents on the Pacific seafloor found dense communities of giant tubeworms, clams and crabs more than 2,000 meters below the surface, where no light reaches. The base of that food web is chemoautotrophic bacteria and archaea that oxidize vent chemicals. Many of these microbes live inside the tubeworms, which have no mouth or gut.

> **Misconception check:** "Every ecosystem runs on sunlight" is false. Most do, but vent and cave communities show that chemical energy can support an entire food web. A second trap: "Plants make food, so they do not do cellular respiration." Autotrophs **do** respire; they break down their own sugars to make ATP, day and night.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s3-mcq-capture',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Energy Capture
      `,
      exercise: {
        questions: [
          {
            question: 'A community of tubeworms, clams and crabs lives around a deep-sea hydrothermal vent where no light penetrates. What is the original source of the energy that supports this community?',
            options: [
              'Chemical energy released as microbes oxidize sulfide compounds from the vent',
              'Light energy captured by algae that drift down from the surface',
              'Heat from the vent water absorbed directly into tubeworm tissue',
              'Sugar that the tubeworms make for themselves from vent carbon'
            ],
            correctAnswer: 0,
            explanation: 'Chemoautotrophic microbes oxidize vent chemicals such as hydrogen sulfide and use that energy to fix carbon, forming the base of the food web. Animals cannot use heat as an energy source, tubeworms do not fix carbon themselves, and too little surface material reaches the vents to support such dense communities.'
          },
          {
            question: 'Which statement correctly contrasts energy and matter in an ecosystem?',
            options: [
              'Energy moves through in one direction, but carbon atoms are reused repeatedly',
              'Energy is recycled by the decomposers, but carbon atoms escape the system as heat',
              'Energy and carbon atoms are recycled through the food web indefinitely',
              'Energy is reused by producers, but carbon atoms are lost at each step'
            ],
            correctAnswer: 0,
            explanation: 'Energy enters as light or chemical energy and leaves as heat that organisms cannot reuse, while atoms such as carbon cycle between organisms and the environment. Decomposers recycle matter, not energy, and atoms are never converted into heat.'
          },
          {
            question: 'A heterotroph digests a meal of starch, fat and protein. Which process splits these macromolecules into monomers the animal can absorb and use as fuel?',
            options: [
              'Hydrolysis, adding water across bonds',
              'Dehydration synthesis, removing water to form bonds',
              'Photosynthesis, using light to rebuild the polymers',
              'Chemosynthesis, oxidizing inorganic ions for energy'
            ],
            correctAnswer: 0,
            explanation: 'Digestive enzymes hydrolyze polymers by adding a water molecule across each bond, releasing monomers such as glucose, fatty acids and amino acids. Dehydration synthesis builds polymers rather than breaking them, and photosynthesis and chemosynthesis are autotroph processes.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s4-heterotrophs',
      type: 'text' as const,
      content: `
### Heterotrophs: Living on Captured Energy

A **heterotroph** ("other-feeder") cannot fix carbon. It obtains both energy and carbon from organic molecules made by other organisms. Animals, fungi and most bacteria are heterotrophs.

The CED's key statement: heterotrophs **capture energy present in carbon compounds produced by other organisms**, and they may metabolize **carbohydrates, lipids and proteins** by **hydrolysis** as sources of free energy.

| Macromolecule | Hydrolyzed into | Fate in the cell |
|---|---|---|
| Carbohydrates (starch, glycogen) | Monosaccharides such as glucose | Glycolysis and cellular respiration |
| Lipids (fats) | Glycerol and fatty acids | Fatty acids broken down and fed into respiration |
| Proteins | Amino acids | Used to build proteins, or deaminated and used as fuel |

Fats store more than twice as much energy per gram as carbohydrates or proteins, which is why animals that face long fasts, such as migrating birds and hibernating mammals, store energy as fat.

Heterotrophs include several roles you will meet again in Part 3:

- **Consumers** eat living organisms (herbivores, carnivores, omnivores).
- **Detritivores** eat dead organic matter (earthworms, millipedes).
- **Decomposers**, mainly bacteria and fungi, secrete enzymes that hydrolyze dead material and absorb the products. Decomposers release the atoms locked in dead bodies back to the soil, water and air, which is why they are central to nutrient cycling.

At every step, cellular respiration converts some of the chemical energy into ATP and the rest into heat. The heat warms the organism and its surroundings, then radiates away. That is the one-way exit for ecosystem energy.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s5-gpp-npp',
      type: 'text' as const,
      content: `
### Gross and Net Primary Production

**Primary production** is the amount of light or chemical energy that autotrophs convert to chemical energy in organic compounds during a given time. Ecologists separate two measures:

- **Gross primary production (GPP):** the total energy fixed by producers.
- **Net primary production (NPP):** what remains after producers use some of that energy in their own cellular respiration ($R$).

$$\\text{NPP} = \\text{GPP} - R$$

NPP is the energy stored as new producer biomass. It is the only energy available to herbivores, decomposers and every level above them, so NPP sets the energy budget for the rest of the ecosystem.

#### Worked example

A temperate forest's producers fix **2,400 kcal/m²/yr** (GPP) and use **1,300 kcal/m²/yr** in respiration.

1. $\\text{NPP} = 2{,}400 - 1{,}300 = 1{,}100$ kcal/m²/yr
2. Fraction of GPP stored: $\\dfrac{1{,}100}{2{,}400} \\approx 0.46$, or about **46%**
3. Interpretation: just under half of the energy the trees capture becomes new leaves, wood and roots that consumers can eat.

#### Where is NPP highest?

Per square meter, tropical rain forests, coral reefs and estuaries are among the most productive ecosystems because they combine abundant light, warmth, water and nutrients. Per square meter, the open ocean and deserts are low. Yet the open ocean contributes a large share of Earth's total NPP because it covers so much of the planet. Always check whether a question asks about productivity **per unit area** or **in total**.

> **AP Connection:** Free-response questions often give GPP and respiration in a table and ask for NPP, or give NPP and respiration and ask for GPP. Write the equation first, substitute, and keep the units.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s6-input-npp',
      type: 'input-boxes' as const,
      content: `
### Practice — Calculating NPP

The producers in a grassland have a GPP of **6,000 kJ/m²/yr** and use **3,600 kJ/m²/yr** in cellular respiration.

1) What is the NPP, in kJ/m²/yr?

2) What percent of the GPP is stored as NPP? (Enter a number only.)
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['2400', '40'],
        hint1: 'NPP is what is left after the producers pay their own respiration cost: NPP = GPP − R.',
        hint2: 'Subtract: 6,000 − 3,600. Then divide that answer by the GPP.',
        hint3: '2,400 ÷ 6,000 = 0.40. Convert the decimal to a percent.',
        explanation: 'NPP = 6,000 − 3,600 = 2,400 kJ/m²/yr, and 2,400 ÷ 6,000 = 0.40, so 40% of the gross production is stored as new biomass available to consumers.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s7-mcq-production',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Primary Production
      `,
      exercise: {
        questions: [
          {
            question: 'Two forests have the same gross primary production, but the producers in forest X respire a larger share of what they fix. Compared with forest Y, forest X has',
            options: [
              'less net primary production left for herbivores',
              'more net primary production left for herbivores',
              'equal net primary production, set by equal GPP',
              'less photosynthesis in each square meter of forest'
            ],
            correctAnswer: 0,
            explanation: 'NPP equals GPP minus respiration, so with equal GPP the forest whose producers respire more keeps less energy as biomass for consumers. Photosynthesis is the same in both forests because their GPP is the same.'
          },
          {
            question: 'Per square meter, the open ocean has low NPP, yet it contributes a large share of Earth\'s total NPP. What best explains this?',
            options: [
              'Its vast extent makes up for the low output of each unit of surface',
              'Its phytoplankton respire much less than land plants do',
              'Its producers capture more light per cell than trees do',
              'Its consumers return extra carbon dioxide to producers'
            ],
            correctAnswer: 0,
            explanation: 'Total production is productivity per area multiplied by area, and the open ocean covers most of Earth\'s surface. The other choices describe differences in physiology that would raise productivity per square meter, which is not what makes the ocean\'s total large.'
          }
        ]
      }
    }
  ]
};
