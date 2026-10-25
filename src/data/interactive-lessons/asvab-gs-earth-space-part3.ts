const gseLayersFigure = {
  svg: '<svg viewBox="0 0 330 240" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted"><circle cx="120" cy="120" r="100" fill="currentColor" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/></g><circle class="fig-bg" cx="120" cy="120" r="93" stroke="currentColor" stroke-width="1.5"/><g class="fig-accent-2"><circle cx="120" cy="120" r="55" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/></g><g class="fig-accent"><circle cx="120" cy="120" r="28" fill="currentColor" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/></g><g stroke="currentColor" stroke-width="1"><line x1="194" y1="58" x2="254" y2="40"/><line x1="193" y1="107" x2="254" y2="100"/><line x1="160" y1="134" x2="254" y2="160"/><line x1="128" y1="128" x2="254" y2="210"/></g><g fill="currentColor"><circle cx="194" cy="58" r="2.5"/><circle cx="193" cy="107" r="2.5"/><circle cx="160" cy="134" r="2.5"/><circle cx="128" cy="128" r="2.5"/></g><g font-size="13" fill="currentColor"><text x="258" y="44">Layer 1</text><text x="258" y="104">Layer 2</text><text x="258" y="164">Layer 3</text><text x="258" y="214">Layer 4</text></g></svg>',
  alt: 'Cross-section of Earth drawn as four nested circles, not to scale. Layer 1 is the thin outermost ring. Layer 2 is the thick ring just inside it, the widest band in the drawing. Layer 3 is a shaded ring around the center. Layer 4 is the small circle at the very center.',
  caption: 'Figure 1. A cross-section of Earth (not to scale).',
  size: 'md' as const,
}

export const asvabGsEarthSpacePart3Data = {
  topicSlug: 'asvab-gs-earth-space',
  sections: [
    {
      id: 'gse3-layers',
      type: 'text' as const,
      content: `# 🌍 Earth and Space Science

**Part 3 of 7 — Earth's Layers, Plate Tectonics and Earthquakes**

### Earth's Layers, Outside In

| Layer | State | What to remember |
|:---|:---|:---|
| **Crust** | Solid | Thinnest layer. Ocean crust (basalt) is thin and dense; continental crust (granite) is thicker and lighter |
| **Mantle** | Solid rock that flows very slowly | Thickest layer, most of Earth's volume. Slow **convection currents** here move the plates |
| **Outer core** | **Liquid** iron and nickel | Its swirling metal produces Earth's **magnetic field** |
| **Inner core** | **Solid** iron and nickel | Hottest part, yet solid because the **pressure** is enormous |

**Mnemonic:** "**C**ats **M**ake **O**dd **I**nventions" → Crust, Mantle, Outer core, Inner core.

### Two more names you will see

- **Lithosphere** ("rock sphere"): the crust plus the rigid top of the mantle. It is broken into large pieces called **tectonic plates**.
- **Asthenosphere**: the soft, slowly flowing layer of the upper mantle that the plates ride on.

> **Key Fact:** The outer core is the only **liquid** layer. Temperature rises all the way to the center, so if a question asks why the inner core is solid even though it is hotter, the answer is **pressure**.`
    },
    {
      id: 'gse3-figure-check',
      type: 'dropdown-select' as const,
      figure: gseLayersFigure,
      content: '**Read the cross-section.** 🔽 Match each description to a numbered layer in the figure.',
      exercise: {
        dropdowns: [
          {
            label: 'The layer made of liquid metal:',
            options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
            correctAnswer: 2
          },
          {
            label: 'The thinnest layer, the one we live on:',
            options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
            correctAnswer: 0
          },
          {
            label: 'The layer that makes up most of Earth\'s volume:',
            options: ['Layer 1', 'Layer 2', 'Layer 3', 'Layer 4'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Layer 3', 'Layer 1', 'Layer 2'],
        hint1: 'From the outside in: crust, mantle, outer core, inner core.',
        hint2: 'The outer core is liquid; the inner core is solid.',
        hint3: 'The mantle is the thickest band.',
        explanation: 'Layer 1 is the crust (thinnest, our home), Layer 2 is the mantle (most of Earth\'s volume), Layer 3 is the liquid outer core, and Layer 4 is the solid inner core.'
      }
    },
    {
      id: 'gse3-plates',
      type: 'text' as const,
      content: `## Plate Tectonics

About 300 million years ago the continents were joined in one supercontinent, **Pangaea**. Alfred Wegener proposed **continental drift** after noticing that coastlines (like South America and Africa) fit together and that matching fossils and rocks appear on both sides of oceans. Today we know the continents ride on moving **plates**, a few centimeters per year.

### The three kinds of plate boundaries

| Boundary | Plates move... | What forms there | Real example |
|:---|:---|:---|:---|
| **Divergent** | **Apart** | Mid-ocean ridges, rift valleys, **new crust** (seafloor spreading) | Mid-Atlantic Ridge |
| **Convergent** | **Together** | Ocean under continent: deep **trench** + volcanic mountains. Continent into continent: tall **folded mountains** | Andes; Himalayas |
| **Transform** | **Past each other** sideways | Faults and frequent earthquakes; crust neither made nor destroyed | San Andreas Fault |

**Memory hook:** Divergent = **divide**, convergent = **collide**, transform = **slide**.

When a dense ocean plate meets a lighter plate, the ocean plate sinks beneath it: this is **subduction**. The sinking plate melts, and that magma feeds volcanoes.`
    },
    {
      id: 'gse3-quakes',
      type: 'text' as const,
      content: `## Earthquakes and Volcanoes

When rocks along a fault suddenly slip, the energy travels outward as **seismic waves**.

- **Focus** (hypocenter): the point **underground** where the slip starts
- **Epicenter**: the point on the **surface directly above** the focus

### Seismic waves

| Wave | Speed | Motion | Travels through |
|:---|:---|:---|:---|
| **P wave** (primary) | Fastest, arrives first | Push-pull (compression) | Solids, liquids and gases |
| **S wave** (secondary) | Slower, arrives second | Side to side (shear) | **Solids only** |
| **Surface wave** | Slowest | Rolling | Along the surface; causes the most damage |

S waves cannot pass through the outer core. That "shadow" is how scientists learned the outer core is liquid.

### Measuring size

A **seismograph** records the shaking. On the magnitude scale (the Richter scale and its modern replacement), each **whole number up** means **10 times** the ground-shaking amplitude. Two steps up is $10 \\times 10 = 100$ times.

### Volcanoes

- Most volcanoes sit on plate boundaries, especially the **Ring of Fire** around the Pacific Ocean.
- Some form over a **hot spot**, a plume of hot mantle under the middle of a plate (Hawaii).
- An undersea earthquake can push up the water above it and start a **tsunami**.`
    },
    {
      id: 'gse3-mc',
      type: 'multiple-choice' as const,
      content: '**Plates and earthquakes.** 🎯',
      exercise: {
        questions: [
          {
            question: 'The Himalayas, the tallest mountains on Earth, are still rising. What kind of plate boundary formed them?',
            options: ['Two continental plates colliding', 'Two plates pulling apart', 'Two plates sliding past each other', 'An ocean plate over a hot spot'],
            correctAnswer: 0,
            explanation: 'The Indian plate is pushing into the Eurasian plate. Neither continent sinks easily, so the crust crumples upward into folded mountains. Pulling apart makes ridges and rifts, sliding makes faults, and hot spots make volcanic islands.'
          },
          {
            question: 'Along the San Andreas Fault in California, two plates grind sideways past each other. This is which type of boundary?',
            options: ['Transform', 'Divergent', 'Convergent', 'Subduction'],
            correctAnswer: 0,
            explanation: 'Plates sliding horizontally past each other form a transform boundary. Divergent plates move apart, convergent plates move together, and subduction is what happens at some convergent boundaries.'
          },
          {
            question: 'S waves travel only through solids, and they do not pass through Earth\'s outer core. What can you conclude?',
            options: ['The outer core is liquid', 'The outer core is the coldest layer', 'The outer core is made of rock', 'The outer core is thinner than the crust'],
            correctAnswer: 0,
            explanation: 'If a wave that needs a solid cannot cross a layer, that layer is not solid. The outer core is liquid iron and nickel. It is not cold, it is metal rather than rock, and it is far thicker than the crust.'
          },
          {
            question: 'An earthquake starts 12 km below a town. The point on the ground directly above where it started is called the:',
            options: ['Epicenter', 'Focus', 'Fault line', 'Seismic gap'],
            correctAnswer: 0,
            explanation: 'The epicenter is the surface point directly above the starting point. The focus is the underground starting point itself, a fault is the break the rocks slip along, and a seismic gap is a stretch of fault that has not slipped recently.'
          }
        ]
      }
    },
    {
      id: 'gse3-input',
      type: 'input-boxes' as const,
      content: `**Magnitude math.** ✍️ Each whole step up the magnitude scale multiplies the ground-shaking amplitude by 10.

**1)** How many times greater is the shaking amplitude of a magnitude 6 earthquake than a magnitude 4?

**2)** How many times greater is the shaking amplitude of a magnitude 7 earthquake than a magnitude 6?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['100', '10'],
        hint1: 'Count the whole steps between the two magnitudes.',
        hint2: 'Multiply by 10 once for each step.',
        hint3: 'Two steps: $10 \\times 10$.',
        explanation: '(1) From 4 to 6 is two steps: $10 \\times 10 = 100$ times the amplitude. (2) From 6 to 7 is one step: 10 times. (Released energy grows even faster, about 32 times per step, but the amplitude rule is the one to know.)'
      }
    },
    {
      id: 'gse3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Layers outside in: **crust** (thinnest), **mantle** (thickest), **outer core** (the only **liquid** layer), **inner core** (solid because of pressure)
- **Lithosphere** = rigid plates; **asthenosphere** = the soft mantle layer they ride on
- Divergent = **divide** (ridges, new crust); convergent = **collide** (trenches, volcanoes, folded mountains); transform = **slide** (faults, earthquakes)
- **Focus** is underground; **epicenter** is the surface point above it
- **P waves** are fastest and pass through anything; **S waves** need solids; **surface waves** do the most damage
- Each magnitude step = **10 times** the shaking amplitude

> **Up Next:** Part 4 — water, the atmosphere and weather.`
    }
  ]
};
