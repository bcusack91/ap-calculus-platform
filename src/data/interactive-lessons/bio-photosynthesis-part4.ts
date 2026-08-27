export const bioPhotosynthesisPart4Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'ps4-intro',
      type: 'text' as const,
      content: `
## C3, C4, and CAM Photosynthesis

**Part 4 of 7**

Plants have evolved different strategies to deal with the problem of photorespiration.  Three major carbon fixation pathways are recognized, named after the first stable product of carbon fixation:

- **C3 plants** — initial product is a 3-carbon molecule (3-PGA)
- **C4 plants** — initial product is a 4-carbon molecule (oxaloacetate)
- **CAM plants** — use crassulacean acid metabolism (temporal separation)

All three types ultimately use the Calvin cycle for sugar synthesis, but C4 and CAM plants have evolved mechanisms to **concentrate CO$_2$ around RuBisCO**, minimizing photorespiration.
      `
    },
    {
      id: 'ps4-c3',
      type: 'text' as const,
      content: `
### C3 Photosynthesis

C3 plants (e.g., rice, wheat, soybeans, most trees) use only the Calvin cycle for carbon fixation.  RuBisCO directly fixes CO$_2$ from the air in the **mesophyll cells**.

**Characteristics:**
- Most common pathway (~85% of plant species)
- Initial fixation product: **3-PGA** (3-phosphoglycerate), a 3-carbon molecule
- Susceptible to photorespiration, especially in hot, dry, or bright conditions
- **Optimal environment:** Cool, moist climates with moderate light

When stomata close to conserve water, CO$_2$ levels drop and O$_2$ rises inside the leaf, dramatically increasing photorespiration.
      `
    },
    {
      id: 'ps4-c4',
      type: 'text' as const,
      content: `
### C4 Photosynthesis — Spatial Separation

C4 plants (e.g., corn/maize, sugarcane, sorghum, crabgrass) have evolved a two-step carbon fixation process that **spatially separates** initial carbon fixation from the Calvin cycle:

**Step 1 — Mesophyll cells:**
- The enzyme **PEP carboxylase** (not RuBisCO) fixes CO$_2$ by attaching it to **PEP** (phosphoenolpyruvate, 3C) to form **oxaloacetate** (OAA, 4C)
- OAA is quickly converted to **malate** (4C)
- Malate is transported to the **bundle-sheath cells** via plasmodesmata

**Step 2 — Bundle-sheath cells:**
- Malate is decarboxylated, releasing CO$_2$ inside the bundle-sheath cells
- This CO$_2$ is then fixed by **RuBisCO** in the normal Calvin cycle
- The remaining 3C molecule (pyruvate) returns to the mesophyll to regenerate PEP (costs 2 ATP)

**Why this works:**
- PEP carboxylase has a **much higher affinity for CO$_2$** than RuBisCO and does **not** bind O$_2$
- CO$_2$ is concentrated to high levels around RuBisCO in the bundle-sheath cells
- Photorespiration is virtually eliminated

**Cost:** 2 extra ATP per CO$_2$ fixed (for PEP regeneration), so C4 photosynthesis is only advantageous when photorespiration would otherwise be significant.

| Feature | C3 | C4 |
|---------|----|----|
| First CO$_2$ fixation enzyme | RuBisCO | PEP carboxylase |
| First stable product | 3-PGA (3C) | Oxaloacetate (4C) |
| Leaf anatomy | No bundle-sheath distinction | **Kranz anatomy** (distinct mesophyll/bundle-sheath) |
| Photorespiration | Significant in hot conditions | Minimal |
| ATP cost per CO$_2$ | 3 ATP | 5 ATP |
| Optimal environment | Cool, moist | Hot, sunny, tropical |
      `
    },
    {
      id: 'ps4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — C3 vs C4
      `,
      exercise: {
        questions: [
          {
            question: 'What is the key advantage of PEP carboxylase over RuBisCO for initial CO2 fixation?',
            options: [
              'PEP carboxylase produces more ATP',
              'PEP carboxylase has a high affinity for CO2 and does not bind O2, preventing photorespiration',
              'PEP carboxylase directly produces glucose',
              'PEP carboxylase does not require energy'
            ],
            correctAnswer: 1,
            explanation: 'PEP carboxylase binds CO2 effectively even at low concentrations and lacks the oxygenase activity that plagues RuBisCO. This allows C4 plants to capture CO2 efficiently in the mesophyll and deliver it at high concentrations to RuBisCO in the bundle-sheath cells.'
          },
          {
            question: 'C4 photosynthesis requires 2 additional ATP per CO2 compared to C3. Under what conditions is this extra cost worthwhile?',
            options: [
              'In cold, shady environments where light is limiting',
              'In hot, sunny environments where photorespiration would otherwise waste even more energy',
              'Underwater where CO2 diffusion is slow',
              'At night when the Calvin cycle is inactive'
            ],
            correctAnswer: 1,
            explanation: 'The extra 2 ATP per CO2 is a worthwhile investment only when photorespiration would otherwise consume more energy than the C4 "pump" costs. In hot, bright conditions, photorespiration can waste 25-50% of fixed carbon in C3 plants, far exceeding the 2 ATP cost of C4.'
          }
        ]
      }
    },
    {
      id: 'ps4-cam',
      type: 'text' as const,
      content: `
### CAM Photosynthesis — Temporal Separation

**CAM** (Crassulacean Acid Metabolism) plants — e.g., cacti, pineapple, jade plant, many succulents — face extreme water stress and have evolved a different strategy: **temporal separation** of carbon fixation and the Calvin cycle.

**Night (stomata OPEN):**
- CO$_2$ enters through open stomata
- **PEP carboxylase** fixes CO$_2$ into oxaloacetate, which is converted to **malate**
- Malate is stored in large **vacuoles** (as malic acid)

**Day (stomata CLOSED):**
- Stomata close to prevent water loss
- Malate is released from the vacuole and **decarboxylated**, releasing CO$_2$
- CO$_2$ is fixed by RuBisCO in the Calvin cycle using ATP and NADPH from the light reactions

**Key difference from C4:**
- C4 plants separate fixation and Calvin cycle **spatially** (different cell types)
- CAM plants separate them **temporally** (different times of day)
- Both use PEP carboxylase for initial fixation and concentrate CO$_2$ around RuBisCO

| Feature | C4 | CAM |
|---------|----|----|
| Separation type | Spatial (mesophyll vs. bundle-sheath) | Temporal (night vs. day) |
| Stomata | Open during the day | Open at **night**, closed during the day |
| Growth rate | Fast (corn, sugarcane) | Slow (cacti, succulents) |
| Environment | Hot, sunny, moderate water | Hot, very dry (desert) |
      `
    },
    {
      id: 'ps4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — CAM Plants
      `,
      exercise: {
        questions: [
          {
            question: 'CAM plants open their stomata at night and close them during the day. What is the primary advantage of this strategy?',
            options: [
              'It allows the plant to photosynthesize at night',
              'It minimizes water loss by keeping stomata closed during the hottest part of the day while still allowing CO2 uptake at cooler nighttime temperatures',
              'It prevents O2 from entering the leaf',
              'It increases the rate of the Calvin cycle'
            ],
            correctAnswer: 1,
            explanation: 'Opening stomata at night (when temperatures are lower and humidity is higher) dramatically reduces water loss through transpiration. CO2 is stored as malic acid overnight and released for the Calvin cycle during the day when light is available.'
          },
          {
            question: 'Both C4 and CAM plants use PEP carboxylase for initial CO2 fixation. The key difference between the two strategies is:',
            options: [
              'C4 plants use RuBisCO; CAM plants do not',
              'C4 separates fixation spatially (different cells); CAM separates fixation temporally (day vs. night)',
              'CAM plants do not perform the Calvin cycle',
              'C4 plants store malate in vacuoles; CAM plants do not'
            ],
            correctAnswer: 1,
            explanation: 'Both rely on PEP carboxylase for initial fixation and RuBisCO for the Calvin cycle. C4 achieves separation in different cell types (mesophyll vs. bundle-sheath). CAM achieves separation at different times (night for fixation, day for Calvin cycle).'
          }
        ]
      }
    },
    {
      id: 'ps4-dropdown',
      type: 'dropdown-select' as const,
      content: `
### Match the Plant Type
      `,
      exercise: {
        questions: [
          {
            question: 'Rice and wheat are examples of:',
            options: ['C3 plants', 'C4 plants', 'CAM plants'],
            correctAnswer: 'C3 plants'
          },
          {
            question: 'Corn (maize) and sugarcane are examples of:',
            options: ['C3 plants', 'C4 plants', 'CAM plants'],
            correctAnswer: 'C4 plants'
          },
          {
            question: 'Cacti and pineapple are examples of:',
            options: ['C3 plants', 'C4 plants', 'CAM plants'],
            correctAnswer: 'CAM plants'
          },
          {
            question: 'Plants with Kranz anatomy (distinct mesophyll and bundle-sheath cells) are:',
            options: ['C3 plants', 'C4 plants', 'CAM plants'],
            correctAnswer: 'C4 plants'
          }
        ]
      }
    },
    {
      id: 'ps4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Carbon Fixation Strategies
      `,
      exercise: {
        questions: [
          {
            question: 'Global warming is increasing both temperature and atmospheric CO2 levels. How might this affect the competitive advantage of C4 plants over C3 plants?',
            options: [
              'C4 advantage would increase because temperatures are rising',
              'C4 advantage would decrease because higher CO2 levels reduce photorespiration in C3 plants, partially offsetting the temperature effect',
              'There would be no change',
              'Both C3 and C4 would be replaced by CAM plants'
            ],
            correctAnswer: 1,
            explanation: 'Rising CO2 levels benefit C3 plants by providing more CO2 relative to O2 at the RuBisCO active site, reducing photorespiration. This "CO2 fertilization effect" partially offsets the increased photorespiration from higher temperatures, potentially narrowing the C4 advantage in some environments.'
          },
          {
            question: 'A student identifies a desert plant that gains weight mainly at night and has thick, fleshy leaves with large vacuoles. This plant most likely uses:',
            options: [
              'C3 photosynthesis',
              'C4 photosynthesis',
              'CAM photosynthesis',
              'Chemosynthesis'
            ],
            correctAnswer: 2,
            explanation: 'Night CO2 fixation, desert habitat, fleshy leaves, and large vacuoles (for storing malic acid) are all hallmarks of CAM plants. The plant opens stomata at night to fix CO2 via PEP carboxylase, stores malate in vacuoles, and runs the Calvin cycle during the day with stomata closed.'
          }
        ]
      }
    }
  ]
};