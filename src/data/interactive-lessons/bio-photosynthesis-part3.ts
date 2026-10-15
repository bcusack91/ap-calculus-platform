export const bioPhotosynthesisPart3Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps3-intro',
      type: 'text' as const,
      content: `
## The Calvin Cycle — Carbon Fixation

**Part 3 of 7**

The Calvin cycle uses the ATP and NADPH produced by the light reactions to build carbohydrates from atmospheric CO$_2$.  It occurs in the **stroma** of the chloroplast.  It does not use light directly, but it depends on the light reactions for its energy inputs, so in practice it runs when the light reactions run.

> **What the AP exam expects:** the framework excludes memorizing the steps of the Calvin cycle, the structures of its molecules, and the names of its enzymes (ATP synthase is the only enzyme name you need in photosynthesis).  Focus on inputs, outputs, location, and how the cycle depends on the light reactions.
      `
    },
    {
      id: 'ps3-phases',
      type: 'text' as const,
      content: `
### Inputs, Outputs, and Logic of the Cycle

**Inputs:** CO$_2$ (from the air, entering through stomata), ATP and NADPH (from the light reactions)

**Outputs:** A 3-carbon sugar that the plant uses to build glucose and other organic molecules, plus ADP, P$_i$, and NADP$^+$, which return to the thylakoids to be recharged by the light reactions

**The logic, in three ideas:**
1. **Carbon fixation:** CO$_2$ is attached to an organic acceptor molecule that is already in the stroma.  Carbon that was a gas is now part of an organic molecule.
2. **Reduction:** Energy from **ATP** and electrons from **NADPH** convert the fixed carbon into sugar.  This is where light energy, captured in ATP and NADPH, ends up stored in chemical bonds.
3. **Regeneration:** Most of the sugar made is used, with more ATP, to **remake the acceptor molecule**, so the cycle can keep fixing CO$_2$.  Only a fraction leaves as net product.

**Carbon bookkeeping:** Each turn fixes one CO$_2$, so building one 6-carbon glucose requires **6 CO$_2$** to be fixed.

| Light reactions supply... | ...and get back from the Calvin cycle |
|---------------------------|---------------------------------------|
| ATP | ADP + P$_i$ |
| NADPH | NADP$^+$ |
      `
    },
    {
      id: 'ps3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Calvin Cycle Logic
      `,
      exercise: {
        questions: [
          {
            question: 'In the Calvin cycle, what are ATP and NADPH used for?',
            options: [
              'To split water and release oxygen',
              'To convert fixed carbon into sugar and remake the CO2 acceptor',
              'To pump H+ into the thylakoid space',
              'To absorb light energy for the chlorophyll'
            ],
            correctAnswer: 1,
            explanation: 'ATP supplies energy and NADPH supplies electrons to reduce the fixed carbon into sugar, and more ATP is used to regenerate the acceptor molecule. Water splitting, proton pumping, and light absorption all belong to the light reactions.'
          },
          {
            question: 'What is meant by "carbon fixation"?',
            options: [
              'Releasing CO2 from sugars during respiration',
              'Incorporating carbon from CO2 into an organic molecule',
              'Storing carbon as starch in the roots of the plant',
              'Converting light energy into the bonds of ATP'
            ],
            correctAnswer: 1,
            explanation: 'Carbon fixation is the step in which inorganic carbon from CO2 is attached to an organic molecule. It is the entry point of carbon into the living world.'
          },
          {
            question: 'Why must most of the sugar made in the Calvin cycle be used to regenerate the CO2 acceptor molecule?',
            options: [
              'Each CO2 fixed uses one up, so without remaking it fixation would halt',
              'Regeneration releases the O2 that the plant gives off',
              'Regeneration produces the NADPH used by the light reactions',
              'The plant cannot store sugar, so it must recycle all of it'
            ],
            correctAnswer: 0,
            explanation: 'Each CO2 is attached to an acceptor molecule, which is used up in the process. Unless the acceptor is regenerated, the stroma would quickly run out of it and carbon fixation would stop. O2 comes from water splitting, and NADPH is made in the light reactions.'
          }
        ]
      }
    },
    {
      id: 'ps3-fate',
      type: 'text' as const,
      content: `
### What Happens to the Sugar?

The sugars made by the Calvin cycle are the starting material for almost everything the plant builds or burns:

- **Energy source:** Plant cells break down sugars in **cellular respiration** to make ATP, day and night, in their mitochondria.
- **Storage:** Sugars are linked into **starch**, a polysaccharide that stores energy in leaves, roots, and seeds.
- **Transport:** Sugars are moved to non-photosynthetic tissues (roots, fruits, growing tips).
- **Structure:** Glucose is linked into **cellulose**, the main component of plant cell walls.
- **Other macromolecules:** Carbon skeletons from sugars, plus nitrogen and phosphorus from the soil, are used to build amino acids, nucleotides, and lipids.

Because heterotrophs eat plants (or eat organisms that ate plants), the carbon fixed in the Calvin cycle becomes the carbon in nearly every food web.
      `
    },
    {
      id: 'ps3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Where the Carbon Goes
      `,
      exercise: {
        questions: [
          {
            question: 'A radish plant grown in light with 14C-labeled CO2 is later moved to darkness. After several days, labeled carbon is found in CO2 released by its root cells. What best explains this?',
            options: [
              'The roots carried out the Calvin cycle in the dark',
              'Leaf sugars were carried to the roots and broken down by respiration there',
              'The roots absorbed 14CO2 from the soil and released it unchanged',
              'Light reactions in the root cells split labeled water'
            ],
            correctAnswer: 1,
            explanation: 'The 14C was fixed into sugar in the leaves by the Calvin cycle. The sugar was transported to the roots, where cellular respiration broke it down and released the labeled carbon as CO2. Roots do not photosynthesize, and the label was in CO2, not water.'
          },
          {
            question: 'Which polysaccharide do plants use to store the sugar made in photosynthesis?',
            options: [
              'Cellulose',
              'Starch',
              'Glycogen',
              'Chitin'
            ],
            correctAnswer: 1,
            explanation: 'Plants store energy as starch. Cellulose is also made from glucose but is structural (cell walls). Glycogen is the storage polysaccharide of animals and fungi, and chitin is structural in fungi and arthropods.'
          }
        ]
      }
    },
    {
      id: 'ps3-input',
      type: 'input-boxes' as const,
      content: `
### Key Terms — Calvin Cycle
      `,
      exercise: {
        questions: [
          {
            question: 'The part of the chloroplast where the Calvin cycle takes place:',
            answer: 'stroma',
            acceptableAnswers: ['stroma', 'Stroma', 'the stroma'],
            placeholder: 'e.g. thylakoid'
          },
          {
            question: 'The gas that the Calvin cycle uses as its carbon source:',
            answer: 'CO2',
            acceptableAnswers: ['CO2', 'co2', 'carbon dioxide', 'Carbon dioxide'],
            placeholder: 'e.g. O2'
          },
          {
            question: 'The number of CO2 molecules that must be fixed to make one glucose:',
            answer: '6',
            acceptableAnswers: ['6', 'six', 'Six'],
            placeholder: 'e.g. 3'
          }
        ]
      }
    },
    {
      id: 'ps3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Calvin Cycle
      `,
      exercise: {
        questions: [
          {
            question: 'The Calvin cycle is sometimes called "light-independent" but it typically stops in the dark. Why?',
            options: [
              'The cycle\'s enzymes must absorb photons directly before they can fix CO2',
              'The light reactions stop, so no ATP or NADPH reaches the cycle',
              'Stomata admit CO2 only in light, so the cycle runs out of CO2',
              'The cycle\'s enzymes are denatured in the dark and must be rebuilt'
            ],
            correctAnswer: 1,
            explanation: 'The Calvin cycle itself does not use light, but it depends on the ATP and NADPH produced by the light reactions. Without these energy inputs, fixed carbon cannot be reduced to sugar and the acceptor molecule cannot be regenerated, so the cycle stalls.'
          },
          {
            question: 'On a hot, dry afternoon a plant closes its stomata. Which part of photosynthesis is limited first, and why?',
            options: [
              'The light reactions, because closed stomata block light',
              'The Calvin cycle, because CO2 can no longer enter the leaf',
              'Water splitting, because stomata supply the water for PSII',
              'ATP synthase, because O2 cannot leave the leaf'
            ],
            correctAnswer: 1,
            explanation: 'Stomata are the pores through which CO2 enters the leaf. When they close to conserve water, CO2 inside the leaf drops and the Calvin cycle slows. Light still reaches the chloroplasts, and water reaches the leaf through the plant\'s vascular tissue, not through stomata.'
          }
        ]
      }
    }
  ]
};
