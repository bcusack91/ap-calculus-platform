export const apesAtmosphericPollutionPart3Data = {
  topicSlug: 'apes-atmospheric-pollution',
  sections: [
    {
      id: 'apesatmo3-intro',
      type: 'text' as const,
      content: `
# 🏭 Atmospheric Pollution

**Part 3 of 7 — Sources, Particulates, Indoor Air and Noise**

---

| Section |
|---------|
| 📖 Natural and Human Sources |
| The Clean Air Act and Criteria Pollutants |
| Particulate Matter and Haze |
| Indoor Air Pollution |
| Noise Pollution and Decibels |

> 🔑 **Key Concept:** Not all air pollution comes from smokestacks, and not all of it is outdoors. This part sorts pollutants by source, explains why the smallest particles are the most dangerous, surveys the pollutants inside homes, and treats noise as a pollutant measured on a logarithmic scale (CED 7.1, 7.4, 7.5 and 7.8).
      `
    },
    {
      id: 'apesatmo3-sources',
      type: 'text' as const,
      content: `
## 📖 Natural and Human Sources

Many pollutants have **both** natural and human sources. What makes human emissions a problem is that they are concentrated where people live and are added on top of natural background levels.

| Natural source | Main pollutants |
|---|---|
| Volcanic eruptions | $SO_{2}$, particulates |
| Wildfires | Particulates (smoke), CO |
| Lightning | $NO_{x}$ |
| Trees and other plants | VOCs |
| Dust storms, pollen, sea spray | Particulates |

| Human source | Main pollutants |
|---|---|
| Coal-burning power plants | $SO_{2}$, $NO_{x}$, particulates, mercury and other toxic metals, $CO_{2}$ |
| Motor vehicles | CO, $NO_{x}$, VOCs, particulates (especially diesel) |
| Industry and smelters | $SO_{2}$, toxic metals including lead, VOCs |
| Construction, mining, farming | Dust (particulates) |

## The Clean Air Act and Criteria Pollutants

The **Clean Air Act of 1970** directed the EPA to set **National Ambient Air Quality Standards (NAAQS)** for six **criteria pollutants** and to monitor them nationwide:

| Criteria pollutant | Primary or secondary? |
|---|---|
| Carbon monoxide (CO) | Primary |
| Lead (Pb) | Primary |
| Nitrogen dioxide $(NO_{2})$ | Mostly secondary (NO is emitted, then oxidized) |
| Ground-level ozone $(O_{3})$ | Secondary |
| Particulate matter (PM10 and PM2.5) | Both |
| Sulfur dioxide $(SO_{2})$ | Primary |

Carbon dioxide is **not** one of the six criteria pollutants. The 1990 amendments to the act added the cap-and-trade program for $SO_{2}$ covered in Part 4.

### Worked Example 1: A Regulatory Success (illustrative data)

As leaded gasoline was phased out (it was banned for on-road vehicles in the United States in 1996), national lead emissions fell from about **70,000 t** in 1980 to about **700 t** in 2020.

$$\\frac{700 - 70{,}000}{70{,}000} \\times 100 = -99\\%$$

Lead emissions fell by about **99 percent**. Most lead still emitted today comes from small piston-engine aircraft that burn leaded aviation fuel and from metal smelting.
      `
    },
    {
      id: 'apesatmo3-pm',
      type: 'text' as const,
      content: `
## Particulate Matter and Haze

**Particulate matter (PM)** is a mix of solid and liquid particles suspended in the air: soot, dust, smoke, pollen, sea salt, and droplets of sulfate and nitrate. Some particles are emitted directly; others are **secondary**, forming in the air from $SO_{2}$ and $NO_{x}$.

| Class | Diameter | Typical sources | Where it lodges |
|---|---|---|---|
| **PM10** | 10 micrometers (µm) or less | Dust, pollen, mold, crushing and grinding | Nose, throat and upper airways |
| **PM2.5** | 2.5 µm or less | Combustion: vehicles, power plants, wildfires, wood burning | Deep in the lungs; the finest particles enter the bloodstream |

### Worked Example 2: How Small Is PM2.5?

A human hair is about **70 µm** across.

$$\\frac{70\\ \\text{µm}}{2.5\\ \\text{µm}} = 28$$

About 28 of the largest PM2.5 particles would fit across the width of one hair.

### Effects

- **Health:** PM2.5 worsens asthma and bronchitis and is linked to heart attacks, strokes and premature death, because the particles slip past the body's filters.
- **Haze:** Particles **scatter and absorb sunlight**, reducing visibility. Haze over national parks such as the Great Smoky Mountains has historically come largely from sulfate particles formed from power-plant $SO_{2}$.
- **Deposition:** Sulfate and nitrate particles settle out as dry acid deposition (Part 4).

> 🔑 **AP Connection:** The CED pairs particulates with two effects: **respiratory problems** and **haze** from light scattering. On a free-response question, name the effect and the mechanism together.
      `
    },
    {
      id: 'apesatmo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do public health agencies treat PM2.5 as more dangerous than PM10?',
            options: [
              'They reach deep lung tissue and the blood',
              'They are composed entirely of lead and mercury',
              'They settle to the ground within a few minutes',
              'They are emitted mainly by trees and dust storms'
            ],
            correctAnswer: 0,
            explanation: 'Fine particles slip past the nose and upper airways, lodge deep in the lungs, and the finest enter the bloodstream, which is why they are linked to heart and lung disease. They stay suspended for days and come mostly from combustion.'
          },
          {
            question: 'A student lists the six EPA criteria pollutants. Which gas does NOT belong on the list?',
            options: [
              'Carbon monoxide',
              'Sulfur dioxide',
              'Carbon dioxide',
              'Nitrogen dioxide'
            ],
            correctAnswer: 2,
            explanation: 'The six criteria pollutants are carbon monoxide, lead, nitrogen dioxide, ground-level ozone, particulate matter and sulfur dioxide. Carbon dioxide is a greenhouse gas but is not one of the six.'
          },
          {
            question: 'On a clear, humid summer day, the distant ridges of a national park look washed out and blurry. What most likely causes the poor visibility?',
            options: [
              'Fine sulfate particles that scatter and absorb sunlight',
              'Carbon monoxide gas released by tour buses',
              'Radon gas seeping up from the granite bedrock',
              'Chlorofluorocarbons leaking from old coolers'
            ],
            correctAnswer: 0,
            explanation: 'Haze is caused by fine particles, many of them sulfates formed from power-plant sulfur dioxide, that scatter and absorb light. Carbon monoxide and radon are invisible gases, and chlorofluorocarbons act in the stratosphere.'
          }
        ]
      }
    },
    {
      id: 'apesatmo3-indoor',
      type: 'text' as const,
      content: `
## Indoor Air Pollution

People in developed nations spend most of their time indoors, and tightly sealed, energy-efficient buildings can trap pollutants. Some indoor pollutants are **natural** (radon, mold); others are **human-made** (asbestos, formaldehyde, lead paint).

| Pollutant | Source | Health effect | How to reduce it |
|---|---|---|---|
| **Carbon monoxide** | Faulty furnaces, gas stoves, space heaters, generators or cars run in garages | Binds to hemoglobin and blocks oxygen delivery; headaches, dizziness, death | CO detectors; vent and maintain appliances |
| **Radon-222** | Radioactive decay of uranium in rocks and soil; enters through foundation cracks and can dissolve in well water | Lung cancer (second leading cause after smoking) | Test; seal cracks; sub-slab vent fan |
| **Asbestos** | Insulation, fireproofing and tiles in older buildings | Fibers lodge in lungs: asbestosis, lung cancer, mesothelioma | Leave intact or remove by trained crews |
| **Formaldehyde** | Glues in particleboard and plywood, carpets, upholstery | Eye and airway irritation; cancer | Ventilate; choose low-emission products |
| **Lead** | Paint in homes built before 1978; dust from chipping paint | Neurotoxin; harms children's brain development | Abate paint; clean dust |
| **Mold** | Damp basements, leaks | Allergies, asthma attacks | Fix leaks; reduce humidity |
| **VOCs** | Paints, cleaners, air fresheners | Irritation, headaches | Ventilate; low-VOC products |

### Indoor air in developing nations

Billions of people cook and heat with **wood, charcoal, crop waste or dung** burned indoors, often over open fires or simple stoves. The smoke fills homes with **particulates and carbon monoxide**. Women and young children, who spend the most time near the fire, receive the highest doses. The World Health Organization attributes millions of premature deaths each year to this household air pollution. Cleaner, vented cookstoves and switching to cleaner fuels are the main solutions.

### Worked Example 3: Radon Test (illustrative data)

The EPA recommends fixing a home if radon is at or above **4 picocuries per liter (pCi/L)**. A basement tests at **10 pCi/L**.

$$\\frac{10 - 4}{4} \\times 100 = 150\\%\\ \\text{above the action level}$$

After a sub-slab vent fan is installed, a retest reads **1.5 pCi/L**:

$$\\frac{1.5 - 10}{10} \\times 100 = -85\\%,\\ \\text{an 85 percent reduction}$$
      `
    },
    {
      id: 'apesatmo3-noise',
      type: 'text' as const,
      content: `
## Noise Pollution and Decibels

**Noise pollution** is any noise loud enough to cause physiological stress or hearing loss. Major sources are **transportation** (traffic, aircraft, ships), **construction**, and **industrial and domestic** activity.

### The decibel scale is logarithmic

Sound intensity level is measured in **decibels (dB)**. Every **10 dB** step is a **10-fold** increase in sound intensity:

$$\\text{Intensity ratio} = 10^{\\Delta \\text{dB} / 10}$$

| Sound (approximate) | dB |
|---|---|
| Whisper | 30 |
| Normal conversation | 60 |
| Heavy city traffic | 85 |
| Gas lawn mower | 90 |
| Rock concert | 110 |

Prolonged exposure at about **85 dB** and above can permanently damage hearing.

### Worked Example 4: Comparing Two Sounds

How many times more intense is a 90 dB lawn mower than a 60 dB conversation?

$$\\Delta \\text{dB} = 90 - 60 = 30 \\quad\\Rightarrow\\quad 10^{30/10} = 10^{3} = 1{,}000$$

The mower is **1,000 times** as intense, not 1.5 times (90 ÷ 60) and not 30 times. To the ear, each 10 dB step sounds roughly **twice as loud**, so 30 dB sounds about $2^{3} = 8$ times louder.

### Effects on wildlife

The CED lists four effects of noise on animals in ecosystems:

| Effect | Example |
|---|---|
| Stress | Elevated stress hormones in animals near busy roads |
| Masking of sounds used to communicate or hunt | Ship noise drowns out whale calls; road noise drowns out songbird and frog calls; bats that hunt by listening catch less prey |
| Damaged hearing | Loud seismic surveys and sonar can injure marine mammals |
| Changes to migratory routes | Animals avoid noisy corridors |

**Reducing noise:** sound barriers along highways, quieter engines and tires, flight-path and zoning rules, and slower ship speeds.
      `
    },
    {
      id: 'apesatmo3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A home's radon test reads 6 pCi/L. By what percent does it exceed the EPA action level of 4 pCi/L?

2) A highway at 80 dB is next to a park where the background is 50 dB. How many times more intense is the highway sound?

3) A city's average PM2.5 falls from 16 µg/m³ to 12 µg/m³. What is the percent decrease?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '1000', '25'],
        hint1: '(6 − 4) ÷ 4 × 100.',
        hint2: 'The difference is 30 dB. Each 10 dB is a factor of 10.',
        hint3: '(12 − 16) ÷ 16 × 100, then report the size of the decrease.',
        explanation: '1) 2 ÷ 4 × 100 = 50 percent above. 2) 10 to the power 30 ÷ 10 = 10 cubed = 1,000 times. 3) −4 ÷ 16 × 100 = −25 percent, a 25 percent decrease.'
      }
    },
    {
      id: 'apesatmo3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A family in a rural village cooks three meals a day over an open wood fire inside a one-room home. Which change would most reduce the family\'s exposure to air pollution?',
            options: [
              'A vented, low-smoke stove',
              'A radon test kit for the floor',
              'Tile floors in place of old rugs',
              'Low-VOC paint on the inside walls'
            ],
            correctAnswer: 0,
            explanation: 'Indoor biomass burning fills the home with particulates and carbon monoxide; a vented, efficient stove burns less fuel and sends the smoke outdoors. The other changes target pollutants that are minor next to cooking smoke.'
          },
          {
            question: 'A homeowner\'s basement tests at 9 pCi/L of radon. Which action best addresses the problem?',
            options: [
              'Replacing the gas stove with an electric model',
              'Sealing foundation cracks and venting soil gas',
              'Installing a carbon monoxide detector nearby',
              'Removing the pressed-wood furniture upstairs'
            ],
            correctAnswer: 1,
            explanation: 'Radon seeps up from uranium-bearing rock and soil through cracks in the foundation, so sealing cracks and using a fan to vent soil gas outside lowers it. Gas stoves and detectors relate to carbon monoxide, and pressed wood releases formaldehyde.'
          },
          {
            question: 'A new highway is built beside a wetland where frogs breed. Biologists record fewer successful matings near the road. Which effect of noise best explains this?',
            options: [
              'Vibration from trucks shakes eggs loose from the plants',
              'Traffic sound masks the calls they use to attract mates',
              'Loud sound breaks apart the ozone over the breeding pools',
              'Engine noise warms the water and lowers its oxygen level'
            ],
            correctAnswer: 1,
            explanation: 'Masking of the sounds animals use to communicate is one of the CED\'s listed effects of noise. Frogs that cannot hear each other\'s calls find mates less often.'
          }
        ]
      }
    },
    {
      id: 'apesatmo3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Sources | Natural: volcanoes, wildfires, lightning, trees, dust. Human: coal plants, vehicles, industry |
| Clean Air Act (1970) | EPA sets NAAQS for six criteria pollutants: CO, Pb, $NO_{2}$, $O_{3}$, PM, $SO_{2}$ |
| Particulates | PM10 lodges in upper airways; PM2.5 reaches deep lungs and blood; particles cause haze |
| Indoor pollutants | CO, radon, asbestos, formaldehyde, lead paint, mold, VOCs |
| Radon | From uranium decay in rock; EPA action level 4 pCi/L; second leading cause of lung cancer |
| Developing nations | Indoor biomass smoke: particulates and CO |
| Noise | Each 10 dB = 10× intensity; masking, stress, hearing damage, altered migration |

**Next:** Part 4 covers acid deposition and the technologies and policies that control air pollution.
      `
    }
  ]
};
