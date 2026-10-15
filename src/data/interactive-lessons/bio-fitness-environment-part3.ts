export const bioFitnessPart3Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p3-s1-intro',
      type: 'text' as const,
      content: `
## Fitness and Environment: Timing and Coordination in Plants

**Part 3 of 7 — Timing and Coordination in Plants**

A plant cannot walk away from winter or chase a pollinator. Its fitness depends on doing the right thing **at the right time**: flowering when pollinators are active, ripening seeds before the first frost, germinating when water and light are available, and dropping leaves before the ground freezes. Plants coordinate these events by detecting reliable environmental cues and responding with changes in growth and gene expression.

### Four plant timing and direction responses

| Response | Main cue | Receptor or signal involved | Fitness payoff |
|---|---|---|---|
| **Photoperiodism** (e.g., flowering) | Length of the night | Phytochrome in leaves; a signal travels to buds | Flowers open in the season when pollinators and growing conditions are best |
| **Phototropism** | Direction of light | Blue-light receptors; the hormone auxin | Leaves are held where they capture the most light for photosynthesis |
| **Seed dormancy and germination** | Water, cold, light quality, sometimes fire or smoke | Abscisic acid keeps seeds dormant; gibberellins promote germination | Seedlings emerge when they are likely to survive |
| **Leaf abscission** | Shortening days and cooling in autumn | Falling auxin and rising ethylene at the leaf base | Trees shed leaves before freezing soil makes water uptake impossible |

Photoperiodism is about **when**; phototropism is about **which direction**. Both are responses to light, but they use different receptors and produce different outcomes.

### Why day length is such a good cue
Temperature varies from day to day: a warm week in February is common. Day length, by contrast, changes in exactly the same way every year at a given latitude. A plant that times flowering by day length will not be fooled by a warm spell into blooming before the last frost.
      `
    },
    {
      id: 'bio-fitness-environment-p3-s2-photoperiodism',
      type: 'text' as const,
      content: `
### Photoperiodism: plants measure the night

Early researchers named flowering plants by the day length that triggered them. Later experiments showed that what plants actually measure is the length of **uninterrupted darkness**. The names stuck anyway, so read them carefully.

| Category | Flowers when the night is… | Season of flowering | Examples |
|---|---|---|---|
| **Short-day plant** (really a "long-night" plant) | **Longer** than a critical night length | Late summer, fall or winter | Chrysanthemum, poinsettia, cocklebur, soybean |
| **Long-day plant** (really a "short-night" plant) | **Shorter** than a critical night length | Late spring and early summer | Spinach, radish, iris, clover |
| **Day-neutral plant** | Not affected by night length; flowers at a certain size or age | Any time conditions allow | Tomato, cucumber |

**The critical night length** is a threshold that differs by species. A short-day plant and a long-day plant can have the *same* critical night length and still respond in opposite ways: one flowers when nights exceed it, the other when nights fall short of it.

### Where the night is measured
Leaves detect night length, not the buds. If a single leaf of a short-day plant is given long nights while the rest of the plant gets short nights, the plant can still flower. The leaf produces a signal, a protein called **florigen** (the FT protein in many species), that travels through the phloem to the shoot tips and switches them from making leaves to making flowers.
      `
    },
    {
      id: 'bio-fitness-environment-p3-s3-mcq-core',
      type: 'multiple-choice' as const,
      content: `
**Checkpoint: classifying photoperiod responses**
      `,
      exercise: {
        questions: [
          {
            question: 'A plant has a critical night length of 12 hours. It flowers when grown with 14 h of light and 10 h of darkness, but not with 10 h of light and 14 h of darkness. How should the plant be classified?',
            options: [
              'Long-day plant',
              'Short-day plant',
              'Day-neutral plant',
              'Long-night plant'
            ],
            correctAnswer: 0,
            explanation: 'It flowers only when the night (10 h) is shorter than its critical night length, which defines a long-day (short-night) plant. "Long-night plant" is another name for a short-day plant, the opposite response.'
          },
          {
            question: 'Poinsettias are short-day plants. A grower wants plants in bloom for December. Which practice in the fall would PREVENT the plants from flowering?',
            options: [
              'Switching on lights for a few minutes in the middle of each night',
              'Covering the plants with black cloth from early evening until morning',
              'Moving the plants indoors to darkness at 5 p.m. each afternoon',
              'Keeping the plants in about 14 hours of unbroken darkness nightly'
            ],
            correctAnswer: 0,
            explanation: 'A short-day plant needs a long, uninterrupted night, and a brief light flash splits the night into two short ones, so flowering is blocked. Every other practice lengthens or protects the dark period, which promotes flowering.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p3-s4-night-break',
      type: 'text' as const,
      content: `
### Night-break experiments and phytochrome

#### The photoreceptor
**Phytochrome** is a pigment-protein that exists in two interconvertible forms:

$$\\text{P}_\\text{r} \\;\\underset{\\text{far-red light (about 730 nm)}}{\\overset{\\text{red light (about 660 nm)}}{\\rightleftharpoons}}\\; \\text{P}_\\text{fr}$$

- **Pr** absorbs red light and converts to **Pfr**, the biologically active form.
- **Pfr** absorbs far-red light and converts back to **Pr**.
- In darkness, Pfr slowly reverts to Pr. Sunlight contains more red than far-red, so Pfr builds up during the day.

The amount of Pfr at the end of the night, together with the plant's internal clock, tells the plant how long the night has been.

#### Worked example: predicting flowering
A short-day plant (SDP) and a long-day plant (LDP) both have a critical night length of 12 hours. Each row is one 24-hour cycle repeated daily.

| Treatment | What the plant "reads" | SDP flowers? | LDP flowers? |
|---|---|---|---|
| 16 h light, 8 h dark | Short night | No | Yes |
| 8 h light, 16 h dark | Long night | Yes | No |
| 8 h light, 16 h dark with a **red** flash at hour 8 of the night | Two short nights | No | Yes |
| Same, but **red then far-red** | Far-red undoes the red; one long night | Yes | No |
| Same, but **red, far-red, red** | Last flash is red; two short nights | No | Yes |

**Reasoning step by step for the last row:** the first red flash converts Pr to Pfr; far-red converts it back; the final red flash converts it to Pfr again. Only the **last** flash matters, so the plant behaves as if its night were broken.

**Key rule:** a brief flash during the **night** has a big effect, while a brief dark period during the **day** has almost none. That asymmetry is the evidence that plants measure night length.
      `
    },
    {
      id: 'bio-fitness-environment-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Predict the outcome for a short-day plant whose critical night length is 11 hours**
      `,
      exercise: {
        dropdowns: [
          {
            label: '9 h light, 15 h uninterrupted dark',
            options: ['flowers', 'does not flower', 'flowers only if red flash', 'flowers only if far-red flash']
          },
          {
            label: '9 h light, 15 h dark with a red flash in the middle of the night',
            options: ['flowers only if far-red flash', 'flowers', 'does not flower', 'flowers only if red flash']
          },
          {
            label: '9 h light, 15 h dark with red then far-red flashes mid-night',
            options: ['does not flower', 'flowers only if red flash', 'flowers', 'flowers only if far-red flash']
          },
          {
            label: '14 h light, 10 h uninterrupted dark',
            options: ['flowers only if red flash', 'flowers only if far-red flash', 'does not flower', 'flowers']
          }
        ],
        correctAnswers: ['flowers', 'does not flower', 'flowers', 'does not flower'],
        hint1: 'Compare each uninterrupted dark period with the 11-hour critical night length.',
        hint2: 'A red flash in the middle of the night splits one long night into two short ones.',
        hint3: 'When red is followed by far-red, far-red converts Pfr back to Pr, so the night counts as unbroken.',
        explanation: 'A 15-hour unbroken night exceeds 11 hours, so the plant flowers; a red flash breaks it into two short nights and blocks flowering; far-red after red cancels the break, so flowering returns; and a 10-hour night is too short.'
      }
    },
    {
      id: 'bio-fitness-environment-p3-s6-other-responses',
      type: 'text' as const,
      content: `
### Phototropism: growing toward light

When light comes from one side, a shoot bends toward it. The sequence:
1. Blue-light receptors (phototropins) near the shoot tip detect the direction of light.
2. The hormone **auxin** is transported toward the **shaded side** of the shoot.
3. Auxin causes cells on the shaded side to **elongate** more, partly by triggering proton pumps that acidify and loosen the cell walls.
4. Unequal elongation bends the shoot toward the light.

Charles Darwin and his son Francis showed in 1880 that grass seedlings did not bend when their tips were covered with an opaque cap but did bend when a transparent cap was used. The **tip** senses the light, and a signal moves down to the growing region. The plant bends because cells on the dark side grow *longer*, not because cells on the lit side shrink or die.

### Seed dormancy and germination cues
A seed that germinates at the wrong time dies. Dormancy, maintained by **abscisic acid (ABA)**, holds the embryo until conditions are right; **gibberellins** promote germination when dormancy ends.

| Cue | What it signals | Example |
|---|---|---|
| Water uptake (imbibition) | Soil is moist enough for growth | Nearly all seeds |
| Long exposure to cold (stratification) | Winter has passed | Many temperate trees and wildflowers |
| Red light (acting through phytochrome) | No leaf canopy overhead and the seed is near the surface | Small lettuce seeds; leaves absorb red but let far-red through, so seeds under a canopy stay dormant |
| Heat or smoke chemicals from fire | Competitors have been cleared | Many chaparral shrubs |

### Leaf abscission
As autumn days shorten and temperatures fall, a deciduous leaf sends less auxin to its base, and ethylene rises. A layer of cells at the base of the leaf stalk, the **abscission zone**, weakens and the leaf drops, leaving a sealed scar. Shedding leaves before the soil freezes keeps the tree from losing water through leaves it cannot resupply.
      `
    },
    {
      id: 'bio-fitness-environment-p3-s7-ap-connection',
      type: 'text' as const,
      content: `
### AP Connection: timing is a fitness issue

AP questions often ask you to connect a plant's response to its **survival and reproduction**, not just to name the hormone. Use this structure:

| Response | Cue | Physiological change | Effect on fitness |
|---|---|---|---|
| Flowering in a short-day plant | Nights longer than critical length | Leaves make florigen; buds switch to flowers | Flowers and seeds form before winter, while pollinators are still active |
| Phototropism | One-sided light | Auxin moves to shaded side; those cells elongate | More light captured → more photosynthesis → more resources for reproduction |
| Seed dormancy | Absence of cold or red light | ABA keeps the embryo dormant | Seedlings avoid emerging into frost or deep shade |
| Abscission | Short days, cooling | Abscission zone forms | Less water loss in winter; fewer frost-damaged tissues |

**Mismatch risk:** if a cue and the conditions it predicts drift apart (for example, a warming climate makes spring arrive earlier while day length stays the same), a response that once raised fitness can now lower it. Part 4 shows this happening in animals.
      `
    },
    {
      id: 'bio-fitness-environment-p3-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
**Exit check: plant responses**
      `,
      exercise: {
        questions: [
          {
            question: 'A short-day plant receives 8 h of light and 16 h of darkness, longer than its critical night length. In the middle of the night it gets a red flash followed at once by a far-red flash. What is the most likely result?',
            options: [
              'It flowers, since far-red returns Pfr to Pr and the night counts as unbroken',
              'It does not flower, since any light in the night resets its clock',
              'It does not flower, since the red flash already split the night',
              'It flowers only if the far-red flash lasts longer than the red'
            ],
            correctAnswer: 0,
            explanation: 'Phytochrome responds to the last flash: far-red converts Pfr back to Pr, cancelling the red flash, so the plant reads one long night and flowers. The duration of the far-red flash beyond what is needed to convert Pfr is not what matters.'
          },
          {
            question: 'A seedling lit only from its left side bends toward the light. Which statement explains the bending?',
            options: [
              'Auxin moves to the shaded right side, and those cells elongate more',
              'Auxin builds up on the lit left side, and those cells divide faster',
              'Light kills cells on the right side, and the stem collapses inward',
              'Water moves to the lit side, and cells there swell toward the light'
            ],
            correctAnswer: 0,
            explanation: 'Auxin is redistributed to the shaded side, where it stimulates cell elongation; longer cells on the shaded side push the tip toward the light. The lit side is not where auxin accumulates, and no cells die in the process.'
          },
          {
            question: 'Small lettuce seeds lying under a dense leaf canopy stay dormant, but identical seeds germinate in a sunny gap. Leaves absorb most red light but let far-red light pass through. What best explains this difference?',
            options: [
              'Far-red light under the leaves keeps phytochrome in the inactive Pr form',
              'Too little water reaches seeds under the leaves to imbibe',
              'Blue light in the gap triggers auxin to soften the seed coat',
              'Red light in the open gap turns Pfr into Pr, which then ends dormancy'
            ],
            correctAnswer: 0,
            explanation: 'Canopy-filtered light is rich in far-red, which keeps phytochrome in the inactive Pr form, so the seeds stay dormant; open sunlight converts Pr to active Pfr and triggers germination. Red light makes Pfr, not Pr, so that option reverses the conversion.'
          }
        ]
      }
    }
  ]
};
