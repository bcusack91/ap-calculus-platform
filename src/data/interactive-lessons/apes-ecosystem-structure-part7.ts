export const apesEcosystemStructurePart7Data = {
  topicSlug: 'apes-ecosystem-structure',
  sections: [
    {
      id: 'apesecos7-intro',
      type: 'text' as const,
      content: `
# 🌿 Ecosystem Structure

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Whole Topic on One Page |
| One Ecosystem, Every Idea |
| Final Checklist |

## 📖 The Whole Topic on One Page

| Part | Big idea | The calculation or skill it adds |
|---|---|---|
| 1 | Levels of organization; trophic levels; GPP and NPP | 10% rule, NPP = GPP − R |
| 2 | Productivity is a rate limited by light, water, temperature and nutrients | Light-and-dark bottles; $m^{2}$ ↔ ha ↔ $km^{2}$; $O_{2}$ to carbon (× 0.375) |
| 3 | Thermodynamics drives a one-way energy flow | Efficiency = higher ÷ lower × 100; forward and backward multi-step transfers |
| 4 | Webs, pyramids and cascades | Reading arrows; predicting removals; biomagnification factors |
| 5 | Species interactions and resource partitioning | +/− notation; transfers = higher level − lower level |
| 6 | AP task verbs and investigation design | Percent change with sign; IV, DV, controls |

### The chain of reasoning that links everything

1. **Sunlight** is captured by producers at about 1% efficiency (**GPP**).
2. Producers respire part of it; the remainder is **NPP**, the energy budget for every consumer.
3. About **10%** passes to each higher level; the rest becomes **heat** (second law).
4. That loss shapes the **energy pyramid**, limits chains to 4–5 levels and makes top predators rare.
5. Because top predators are rare and widespread, their removal can cause **trophic cascades**, and because they sit at the top, they accumulate the most **persistent pollutants**.
6. **Interactions** such as competition and mutualism, and **resource partitioning**, determine how many species can share the web, and more connections mean more resilience.
      `
    },
    {
      id: 'apesecos7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An ecosystem has an NPP of 8,000 $kcal/m^{2}/yr$. Producer respiration is 5,000 $kcal/m^{2}/yr$. What is the GPP?',
            options: [
              '3,000 $kcal/m^{2}/yr$',
              '13,000 $kcal/m^{2}/yr$',
              '1,600 $kcal/m^{2}/yr$',
              '40,000 $kcal/m^{2}/yr$'
            ],
            correctAnswer: 1,
            explanation: 'Rearranging NPP = GPP − R gives GPP = NPP + R = 8,000 + 5,000 = 13,000. Subtracting the two values instead gives 3,000, which confuses GPP with NPP.'
          },
          {
            question: 'Which observation would most directly show that a species is a keystone species?',
            options: [
              'It is the most abundant species in the community, by both number and biomass',
              'Its removal causes large changes in the abundance of many other species, despite its low numbers',
              'It feeds at more than one trophic level depending on which prey are available',
              'It occupies the producer level and supplies most of the energy in the food web'
            ],
            correctAnswer: 1,
            explanation: 'A keystone species has an effect far larger than its abundance would predict, which shows up as a cascade of changes when it is removed. A species that is simply the most abundant or the main producer is a dominant species, not a keystone.'
          },
          {
            question: 'Why do top predators such as eagles carry the highest concentrations of persistent pesticides?',
            options: [
              'They live longest and absorb more of the pesticide directly from the air they breathe',
              'They eat many prey over a lifetime and store the pesticide from each one',
              'Their larger bodies break down the pesticide more slowly than small animals can',
              'Pesticides are sprayed most heavily where top predators nest'
            ],
            correctAnswer: 1,
            explanation: 'A persistent, fat-soluble pesticide is stored rather than excreted, so every prey item adds to the predator\'s total. This biomagnification compounds at each trophic level, which places top predators at greatest risk.'
          }
        ]
      }
    },
    {
      id: 'apesecos7-scenario',
      type: 'text' as const,
      content: `
## One Ecosystem, Every Idea

**Scenario:** A 50-hectare grassland preserve supports this food chain: grasses → prairie voles → snakes → red-tailed hawks. Grass GPP is 10,000 $kcal/m^{2}/yr$ and grass respiration is 6,000 $kcal/m^{2}/yr$.

### Worked Example: Following the Energy

**Step 1. NPP.** $10{,}000 - 6{,}000 = 4{,}000$ $kcal/m^{2}/yr$

**Step 2. Area.** $50\\ \\text{ha} \\times 10{,}000\\ m^{2}/\\text{ha} = 500{,}000\\ m^{2}$

**Step 3. Total NPP.** $4{,}000 \\times 500{,}000 = 2.0 \\times 10^{9}$ kcal/yr

**Step 4. Energy to hawks** (level 4, three transfers at 10%):
$$2.0 \\times 10^{9} \\times 0.1^{3} = 2.0 \\times 10^{6}\\ \\text{kcal/yr}$$

**Step 5. How many hawks?** If one hawk needs about 100,000 kcal per year:
$$\\frac{2.0 \\times 10^{6}}{1.0 \\times 10^{5}} = 20\\ \\text{hawks}$$

This is an upper limit, since hawks also share prey with other predators.

### Connecting the ideas

- **Productivity (Part 2):** a drought that cuts grass NPP in half halves the energy for every level above, so the preserve could support only about 10 hawks.
- **Cascades (Part 4):** if hawks were poisoned, snakes would increase, voles would decrease and grasses would face less grazing.
- **Interactions (Part 5):** hawks and great horned owls both eat voles; they partition the resource by hunting at different times of day (temporal partitioning).
      `
    },
    {
      id: 'apesecos7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the grassland scenario. Enter numbers only.

1) Drought lowers grass GPP to 7,000 $kcal/m^{2}/yr$ while respiration stays at 6,000. What is the new NPP, in $kcal/m^{2}/yr$?

2) What is the percent change in NPP from the original 4,000? (include the sign)

3) Using the new NPP and the same 50 ha, how many hawks needing 100,000 kcal per year could the preserve support?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1000', '-75', '5'],
        hint1: 'NPP = GPP − respiration.',
        hint2: 'Percent change = (new − old) ÷ old × 100.',
        hint3: 'Total NPP = 1,000 × 500,000. Then multiply by 0.1 three times and divide by 100,000.',
        explanation: '1) 7,000 − 6,000 = 1,000. 2) (1,000 − 4,000) ÷ 4,000 × 100 = −75 percent. 3) 1,000 × 500,000 = 5.0 × 10^8 kcal; × 0.1³ = 5.0 × 10^5 kcal; ÷ 100,000 = 5 hawks.'
      }
    },
    {
      id: 'apesecos7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the drought scenario, GPP fell by 30 percent but NPP fell by 75 percent. What best explains the larger drop in NPP?',
            options: [
              'Respiration stayed the same, so the whole loss came out of the smaller amount left over for growth',
              'Drought raises the 10% transfer efficiency, which pulls more energy out of the producer level',
              'Grasses stop respiring during drought, which lowers GPP and NPP by the same amount',
              'Voles ate more grass during the drought, which is subtracted directly from GPP'
            ],
            correctAnswer: 0,
            explanation: 'NPP is what remains after a fixed respiration cost, so a 3,000 kcal drop in GPP removed 3,000 of the original 4,000 kcal of NPP. Grazing by voles is not part of the GPP-minus-respiration calculation.'
          },
          {
            question: 'A conservation group wants to raise the number of hawks the preserve can support. Which action would be most effective, based on energy flow?',
            options: [
              'Release more hawks into the preserve',
              'Expand the preserve to add more grassland area',
              'Remove the snakes that compete with hawks',
              'Add a fifth trophic level above the hawks'
            ],
            correctAnswer: 1,
            explanation: 'The number of top predators is limited by the total NPP at the base, which depends on area. Releasing extra hawks exceeds the energy available, and removing snakes would also remove prey that the hawks eat.'
          },
          {
            question: 'Which pair correctly matches a concept with its explanation?',
            options: [
              'Inverted biomass pyramid: phytoplankton turnover is fast enough to feed a larger standing crop of consumers',
              'Inverted energy pyramid: top predators sometimes hold more energy than the prey levels below them',
              'Commensalism: both species benefit, as when mycorrhizal fungi trade soil minerals with plant roots for sugars',
              'Competitive exclusion: two species share a resource by using it at different times of day'
            ],
            correctAnswer: 0,
            explanation: 'Fast-reproducing phytoplankton can support a larger zooplankton biomass at any one moment, inverting the biomass pyramid. Energy pyramids never invert, fungi and roots form a mutualism, and using a resource at different times is temporal partitioning.'
          }
        ]
      }
    },
    {
      id: 'apesecos7-checklist',
      type: 'text' as const,
      content: `
## Final Checklist

Before the exam, make sure you can do each of these without notes:

- Compute NPP, GPP or respiration from the other two
- Find GPP, NPP and respiration from light-and-dark-bottle data
- Convert between $m^{2}$, hectares and $km^{2}$ and multiply a rate by an area
- Calculate a transfer efficiency from data and apply any efficiency over several levels, forward or backward
- Explain the energy loss with the second law and cellular respiration
- Read a food web, assign trophic levels and predict a two-step cascade
- Explain why biomass and numbers pyramids can invert but energy pyramids cannot
- Classify an interaction with +/− notation and name the type of resource partitioning
- Compute a percent change and report its sign

> 🔑 **AP Connection:** Ecosystem structure (CED Unit 1) connects forward to biodiversity (Unit 2), population ecology (Unit 3) and pollution (Unit 8 biomagnification). If you can follow energy from sunlight to the top predator and explain every loss, you have the foundation for all of them.
      `
    }
  ]
};
