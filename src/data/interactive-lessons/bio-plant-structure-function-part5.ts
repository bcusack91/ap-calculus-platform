export const bioPlantStructureFunctionPart5Data = {
  topicSlug: 'plant-structure-function',
  sections: [
    {
      id: 'plt5-intro',
      type: 'text' as const,
      content: `# Tropisms & Photoperiodism 🌻

Plants can't walk away from danger or toward resources, so they **grow** in response to environmental stimuli. These directional growth responses are called **tropisms**.

## Types of Tropisms

| Tropism | Stimulus | Positive Response | Negative Response |
|---|---|---|---|
| **Phototropism** | Light | Grows toward light (shoots) | Grows away from light (some roots) |
| **Gravitropism** | Gravity | Grows with gravity (roots) | Grows against gravity (shoots) |
| **Thigmotropism** | Touch/contact | Coils around support (tendrils) | Grows away from contact |

## Phototropism — Growing Toward Light

The **Cholodny-Went model** explains phototropism:

1. Blue light is detected by **phototropin** receptors on the lit side
2. Phototropins activate **PIN proteins** that redistribute auxin
3. Auxin moves laterally to the **shaded side** of the stem
4. Higher auxin concentration on the shaded side promotes **greater cell elongation**
5. Differential elongation causes the stem to **bend toward** the light

### Historical Experiments

| Experiment | Setup | Result | Conclusion |
|---|---|---|---|
| **Darwin (1880)** | Covered tip of grass coleoptile | No bending | The tip perceives light |
| **Boysen-Jensen (1913)** | Gelatin block between tip and base | Bending occurred | Signal is a diffusible chemical |
| **Went (1926)** | Agar block with tip extract on one side | Asymmetric growth | Chemical (auxin) causes bending |`
    },
    {
      id: 'plt5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Tropisms** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A plant shoot placed on its side will bend upward (negative gravitropism). This occurs because:',
            options: [
              'Gravity destroys cells on the bottom of the shoot',
              'Auxin accumulates on the lower side, promoting elongation there, pushing the tip upward',
              'Light from above causes phototropism to override gravity',
              'Ethylene produced on the upper side inhibits growth there'
            ],
            correctAnswer: 1,
            explanation: 'In a horizontally oriented shoot, gravity causes auxin to accumulate on the lower side. Since shoots respond to auxin by elongating, the lower side elongates more, causing the shoot to bend upward (negative gravitropism).'
          },
          {
            question: 'In roots, the gravitropic response is opposite to shoots because:',
            options: [
              'Roots don\'t contain auxin',
              'Roots are positively gravitropic — high auxin on the lower side inhibits elongation there',
              'Roots use a completely different hormone for gravitropism',
              'Root cells elongate in response to gravity directly, without hormones'
            ],
            correctAnswer: 1,
            explanation: 'In roots, auxin also accumulates on the lower side due to gravity. However, roots are more sensitive to auxin — high concentrations inhibit cell elongation. So the lower side grows less, and the root bends downward (positive gravitropism).'
          },
          {
            question: 'Went\'s experiment showed that when an agar block containing auxin was placed asymmetrically on a decapitated coleoptile, the coleoptile:',
            options: [
              'Stopped growing entirely',
              'Grew straight upward',
              'Bent away from the side with the agar block',
              'Bent toward the side without the agar block'
            ],
            correctAnswer: 2,
            explanation: 'The agar block released auxin on one side, causing greater cell elongation on that side. This differential growth made the coleoptile bend away from the side with more auxin (since that side grew longer).'
          }
        ]
      }
    },
    {
      id: 'plt5-content2',
      type: 'text' as const,
      content: `## Gravitropism — Sensing Gravity

### How Plants Sense Gravity: Statoliths

- Special cells called **statocytes** (in root cap and shoot endodermis) contain **statoliths** — dense starch-filled amyloplasts
- Statoliths settle to the **bottom** of cells due to gravity
- Their position triggers **redistribution of auxin** via PIN proteins
- In roots: auxin accumulates on the lower side → **inhibits elongation** → root grows downward
- In shoots: auxin accumulates on the lower side → **promotes elongation** → shoot grows upward

## Thigmotropism — Response to Touch

- **Tendrils** of climbing plants coil around supports upon contact
- Touch stimulates differential growth: cells on the touching side grow slower
- Involves **calcium ion signaling** and changes in gene expression
- Some responses are rapid (e.g., Venus flytrap closing in < 0.5 seconds — though this is a nastic movement, not tropism)

### Thigmomorphogenesis
Repeated mechanical stimulation (wind, touch) causes plants to grow **shorter and thicker** — an adaptation to withstand mechanical stress. This is why trees on windy hillsides are shorter and sturdier.

## Photoperiodism — Measuring Day Length 📅

Many plants use **day length** (photoperiod) to time seasonal responses like flowering, dormancy, and leaf drop.

### Short-Day vs. Long-Day Plants

**Critical correction**: Despite the names, plants actually measure the length of **uninterrupted darkness**, not day length!

| Category | Flowers When... | Actually Responds To | Examples |
|---|---|---|---|
| **Short-day plants** | Days are short | Night length exceeds a critical minimum | Chrysanthemums, poinsettias, soybeans |
| **Long-day plants** | Days are long | Night length is shorter than a critical maximum | Spinach, lettuce, wheat |
| **Day-neutral plants** | Regardless of photoperiod | Not regulated by day length | Tomatoes, corn, roses |`
    },
    {
      id: 'plt5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check: Photoperiodism** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A short-day plant requires 14 hours of darkness to flower. If a brief flash of light interrupts the dark period after 10 hours, the plant will:',
            options: [
              'Flower normally because it already had 10 hours of darkness',
              'Not flower because the continuous dark period was interrupted',
              'Flower earlier because the light stimulates flowering',
              'Produce more leaves instead of flowers'
            ],
            correctAnswer: 1,
            explanation: 'Short-day plants (more accurately, long-night plants) require an uninterrupted dark period exceeding their critical length. A flash of light during the dark period "resets the clock," and the plant will not flower because it never experienced a continuous 14-hour dark period.'
          },
          {
            question: 'The pigment responsible for detecting photoperiod in plants is:',
            options: ['Chlorophyll a', 'Carotenoids', 'Phytochrome', 'Phototropin'],
            correctAnswer: 2,
            explanation: 'Phytochrome is the photoreceptor pigment that exists in two interconvertible forms (Pr and Pfr) and allows plants to measure the length of darkness. It plays a key role in photoperiodism and other light-dependent responses.'
          }
        ]
      }
    },
    {
      id: 'plt5-content3',
      type: 'text' as const,
      content: `## Phytochrome — The Photoperiod Sensor

Phytochrome is a photoreceptor protein that exists in **two interconvertible forms**:

| Form | Absorbs | Converted To | When Dominant |
|---|---|---|---|
| **Pr** (inactive) | Red light (660 nm) | Pfr | In darkness (Pfr slowly converts back to Pr) |
| **Pfr** (active) | Far-red light (730 nm) | Pr | In sunlight (sunlight has more red than far-red) |

### How It Works

- During the **day**: red light converts Pr → **Pfr** (active form accumulates)
- During the **night**: Pfr **slowly reverts** back to Pr (no light to maintain Pfr)
- After a long night: most phytochrome is in the **Pr** form
- After a short night: significant **Pfr** remains

### Phytochrome and Flowering

- **Short-day plants**: Flower when Pfr levels are **low** (after long nights allow Pfr → Pr conversion)
- **Long-day plants**: Flower when Pfr levels are **high** (short nights don't allow complete conversion)
- A **flash of red light** during the dark period converts Pr → Pfr → prevents short-day plant flowering / promotes long-day plant flowering
- A **flash of far-red light** after red reverses the effect (Pfr → Pr)

### Classic Experiment: Night-Break with Red/Far-Red Light

| Treatment | Short-Day Plant | Long-Day Plant |
|---|---|---|
| Long uninterrupted night | Flowers ✓ | Does not flower ✗ |
| Long night + red light flash | Does not flower ✗ | Flowers ✓ |
| Long night + red then far-red flash | Flowers ✓ | Does not flower ✗ |

The **last wavelength** applied determines the response — demonstrating phytochrome's reversible switching.`
    },
    {
      id: 'plt5-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks: Tropisms & Photoperiodism** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Dense starch granules called ___ settle in root cap cells and help plants detect gravity.',
            options: ['statoliths', 'plastids', 'vesicles', 'ribosomes']
          },
          {
            label: '"Short-day" plants actually measure the length of uninterrupted ___, not day length.',
            options: ['darkness', 'light', 'temperature', 'rainfall']
          },
          {
            label: 'The active form of phytochrome is ___, which accumulates during daylight exposure.',
            options: ['Pfr', 'Pr', 'PAR', 'PSI']
          },
          {
            label: 'A flash of ___ light during a long night prevents flowering in short-day plants by converting Pr to Pfr.',
            options: ['red', 'far-red', 'blue', 'green']
          }
        ],
        correctAnswers: ['statoliths', 'darkness', 'Pfr', 'red'],
        hint1: 'These amyloplast-derived granules act like tiny weights inside cells.',
        hint2: 'The key insight is that plants measure continuous dark periods, not light periods.',
        hint3: 'This form absorbs far-red light and triggers biological responses.',
        explanation: 'Statoliths are dense starch-filled amyloplasts that settle to the bottom of statocytes, enabling gravity perception. Short-day plants require a minimum uninterrupted dark period. Pfr is the biologically active phytochrome form that accumulates in light and slowly reverts to Pr in darkness. Red light converts Pr → Pfr, which disrupts the required dark period for short-day plants.'
      }
    }
  ]
}
