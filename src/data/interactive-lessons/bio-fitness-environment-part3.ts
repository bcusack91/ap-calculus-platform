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

> The AP framework lists photoperiodism and phototropism as examples of how organisms respond to their environment, but it excludes knowledge of the specific physiological mechanisms (the receptor molecules and hormones involved).  Focus on **cue → response → effect on fitness**, and on the experiments that revealed each response.

### Four plant timing and direction responses

| Response | Main cue | What the plant does | Fitness payoff |
|---|---|---|---|
| **Photoperiodism** (e.g., flowering) | Length of the night | Leaves detect night length and signal the buds to flower | Flowers open in the season when pollinators and growing conditions are best |
| **Phototropism** | Direction of light | The shoot tip detects light; the stem bends toward it | Leaves are held where they capture the most light for photosynthesis |
| **Seed dormancy and germination** | Water, cold, light, sometimes fire or smoke | The embryo stays dormant until the cue appears | Seedlings emerge when they are likely to survive |
| **Leaf abscission** | Shortening days and cooling in autumn | Leaves are shed and the scars sealed | Trees avoid losing water through leaves they cannot resupply in frozen soil |

Photoperiodism is about **when**; phototropism is about **which direction**. Both are responses to light, but they produce different outcomes.

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
| **Short-day plant** (really a "long-night" plant) | **Longer** than a critical night length | Late summer, fall or winter | Chrysanthemum, poinsettia, soybean |
| **Long-day plant** (really a "short-night" plant) | **Shorter** than a critical night length | Late spring and early summer | Spinach, radish, clover |
| **Day-neutral plant** | Not affected by night length; flowers at a certain size or age | Any time conditions allow | Tomato, cucumber |

**The critical night length** is a threshold that differs by species. A short-day plant and a long-day plant can have the *same* critical night length and still respond in opposite ways: one flowers when nights exceed it, the other when nights fall short of it.

### Where the night is measured
Leaves detect night length, not the buds. If a single leaf of a short-day plant is given long nights while the rest of the plant gets short nights, the plant can still flower. The leaf sends a signal that travels to the shoot tips and switches them from making leaves to making flowers — an example of cell communication over a long distance.
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
### Night-break experiments: designing the test

How do we know plants measure the night rather than the day?  Researchers gave plants the same total hours of light and dark but interrupted either the day or the night.

**Worked example: predicting flowering.**  A short-day plant (SDP) and a long-day plant (LDP) both have a critical night length of 12 hours. Each row is one 24-hour cycle repeated daily.

| Treatment | What the plant "reads" | SDP flowers? | LDP flowers? |
|---|---|---|---|
| 16 h light, 8 h dark | Short night | No | Yes |
| 8 h light, 16 h dark | Long night | Yes | No |
| 8 h light, 16 h dark, with a brief **flash of light** in the middle of the night | Two short nights | No | Yes |
| 8 h light, 16 h dark, with a brief **dark period** in the middle of the day | One long night | Yes | No |

**Key rule:** a brief flash during the **night** has a big effect, while a brief dark period during the **day** has almost none. That asymmetry is the evidence that plants measure night length.

**Experimental design notes (AP skill 3.C):**
- **Independent variable:** the timing of the interruption (night vs. day) or the night length.
- **Dependent variable:** whether (or how many) plants flower.
- **Controls:** plants given the same light/dark schedule with no interruption, grown at the same temperature, with the same species and age.
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
            options: ['flowers', 'does not flower', 'flowers only with a night flash', 'flowers only in constant light']
          },
          {
            label: '9 h light, 15 h dark with a brief flash of light in the middle of the night',
            options: ['flowers only in constant light', 'flowers', 'does not flower', 'flowers only with a night flash']
          },
          {
            label: '9 h light (with a brief dark break at midday), 15 h uninterrupted dark',
            options: ['does not flower', 'flowers only with a night flash', 'flowers', 'flowers only in constant light']
          },
          {
            label: '14 h light, 10 h uninterrupted dark',
            options: ['flowers only with a night flash', 'flowers only in constant light', 'does not flower', 'flowers']
          }
        ],
        correctAnswers: ['flowers', 'does not flower', 'flowers', 'does not flower'],
        hint1: 'Compare each uninterrupted dark period with the 11-hour critical night length.',
        hint2: 'A flash of light in the middle of the night splits one long night into two short ones.',
        hint3: 'A short dark break during the day does not change the length of the night.',
        explanation: 'A 15-hour unbroken night exceeds 11 hours, so the plant flowers; a night flash breaks it into two short nights and blocks flowering; a dark break during the day leaves the long night intact, so the plant flowers; and a 10-hour night is too short.'
      }
    },
    {
      id: 'bio-fitness-environment-p3-s6-other-responses',
      type: 'text' as const,
      content: `
### Phototropism: growing toward light

When light comes from one side, a shoot bends toward it because cells on the **shaded side elongate more** than cells on the lit side.  The bend is caused by unequal growth, not by cells on the lit side shrinking or dying.

**The classic experiment.**  Charles Darwin and his son Francis showed in 1880 that grass seedlings did not bend when their tips were covered with an opaque cap but did bend when a transparent cap was used, or when only the lower stem was covered.  Conclusions:
- The **tip** senses the direction of light.
- A **chemical signal** moves from the tip down to the growing region, where the bending happens.  (Later work identified the signal as a plant hormone.)

This is a good model of how to reason from an experiment: each treatment removes one possible explanation.

### Seed dormancy and germination cues
A seed that germinates at the wrong time dies.  Dormancy holds the embryo until a cue signals that conditions are right:

| Cue | What it signals | Example |
|---|---|---|
| Water uptake | Soil is moist enough for growth | Nearly all seeds |
| Long exposure to cold | Winter has passed | Many temperate trees and wildflowers |
| Light | No leaf canopy overhead and the seed is near the surface | Small lettuce seeds stay dormant in deep shade |
| Heat or smoke chemicals from fire | Competitors have been cleared | Many chaparral shrubs |

### Leaf abscission
As autumn days shorten and temperatures fall, deciduous trees shed their leaves and seal the scars.  Shedding leaves before the soil freezes keeps the tree from losing water through leaves it cannot resupply.
      `
    },
    {
      id: 'bio-fitness-environment-p3-s7-ap-connection',
      type: 'text' as const,
      content: `
### AP Connection: timing is a fitness issue

AP questions often ask you to connect a plant's response to its **survival and reproduction**. Use this structure:

| Response | Cue | Response | Effect on fitness |
|---|---|---|---|
| Flowering in a short-day plant | Nights longer than critical length | Buds switch to flowers | Flowers and seeds form before winter, while pollinators are still active |
| Phototropism | One-sided light | Shaded-side cells elongate; shoot bends | More light captured → more photosynthesis → more resources for reproduction |
| Seed dormancy | No cold period yet, or deep shade | Embryo stays dormant | Seedlings avoid emerging into frost or deep shade |
| Abscission | Short days, cooling | Leaves shed | Less water loss in winter; fewer frost-damaged tissues |

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
            question: 'A short-day plant receives 8 h of light and 16 h of darkness, longer than its critical night length. On some nights a brief light flash is given at hour 8 of the dark period; on others, a brief dark period is given at hour 4 of the light period. Which result is expected?',
            options: [
              'It flowers with the daytime dark break but not with the night flash',
              'It flowers with the night flash but not with the daytime dark break',
              'It flowers with both, since total hours of light are unchanged',
              'It flowers with neither, since any interruption resets the plant'
            ],
            correctAnswer: 0,
            explanation: 'The plant measures uninterrupted darkness. A night flash splits the 16-hour night into two 8-hour nights, shorter than the critical length, so flowering is blocked. A short dark break during the day leaves the long night intact, so the plant flowers.'
          },
          {
            question: 'A seedling lit only from its left side bends toward the light. Which statement explains the bending?',
            options: [
              'Cells on the shaded right side elongate more than cells on the lit side',
              'Cells on the lit left side divide faster and push the stem over',
              'Light kills cells on the right side, and the stem collapses inward',
              'Water moves to the lit side, and cells there swell toward the light'
            ],
            correctAnswer: 0,
            explanation: 'Unequal elongation bends the shoot: cells on the shaded side grow longer, pushing the tip toward the light. No cells die, and the bend is not caused by faster division on the lit side.'
          },
          {
            question: 'In Darwin\'s experiment, seedlings with an opaque cap over the tip did not bend toward light, but seedlings with the lower stem covered did bend. What does this show?',
            options: [
              'The tip detects the light, and a signal travels to the region that bends',
              'The lower stem detects the light and bends on its own',
              'Light must reach every part of the shoot for bending to occur',
              'Caps of any kind stop the seedling from growing'
            ],
            correctAnswer: 0,
            explanation: 'Covering the tip blocked bending, while covering the lower stem did not, so the tip is the light-sensing region. Because bending happens below the tip, a signal must travel from the tip to the growing region.'
          }
        ]
      }
    }
  ]
};
