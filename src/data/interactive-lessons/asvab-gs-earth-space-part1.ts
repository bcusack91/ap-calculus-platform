export const asvabGsEarthSpacePart1Data = {
  topicSlug: 'asvab-gs-earth-space',
  sections: [
    {
      id: 'gse1-intro',
      type: 'text' as const,
      content: `# 🌍 Earth and Space Science

**Part 1 of 7 — Earth and Space Science on the ASVAB**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Earth and space science on the ASVAB** |
| 2 | Rocks, minerals and the rock cycle |
| 3 | Earth's layers, plate tectonics and earthquakes |
| 4 | Water, atmosphere and weather |
| 5 | The solar system, stars and seasons |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### Where This Fits on the Test

General Science (GS) is the **first subtest** of the CAT-ASVAB, so it sets the tone for your whole session.

| Version of the test | GS questions | Time |
|:---|:---:|:---:|
| CAT-ASVAB (computer, at MEPS and most MET sites) | 15 scored | 12 minutes |
| Paper ASVAB (a few MET sites) | 25 | 11 minutes |
| High-school CEP, computer version (iCAT) | 16 | part of about 90 minutes total |

On the CAT that works out to about **48 seconds per question**. Some questions may be unscored tryout items, and you can't tell which ones, so treat every question as if it counts.

The official description of GS lists **earth and space science** as one of its three areas, alongside life science and physical science. It covers four fields:

| Field | What it studies | Typical question |
|:---|:---|:---|
| **Geology** | Rocks, minerals, Earth's interior, earthquakes | "Marble is which type of rock?" |
| **Meteorology** | Weather and the atmosphere | "Which instrument measures air pressure?" |
| **Oceanography** | Oceans, tides, the water cycle | "What mainly causes ocean tides?" |
| **Astronomy** | Planets, the Moon, the Sun, stars | "What causes a solar eclipse?" |

> **Key Fact:** GS questions are short. Most are a single fact ("Which layer...?") or a single cause-and-effect step ("What causes...?"). You win this subtest by knowing a compact set of facts cold, and this lesson gives you that set in tables you can memorize.`
    },
    {
      id: 'gse1-how',
      type: 'text' as const,
      content: `## How Earth and Space Questions Are Asked

Almost every earth and space item is one of four kinds:

| Question kind | What it looks like | How to attack it |
|:---|:---|:---|
| **Define a term** | "The point on the surface directly above an earthquake's starting point is the..." | Match the definition to the vocabulary word |
| **Classify** | "Basalt is an example of which type of rock?" | Know the three or four categories and a few examples of each |
| **Cause and effect** | "Earth has seasons mainly because..." | Know the real cause and the popular wrong one |
| **Order or compare** | "Which planet is farthest from the Sun?" | Memorize the short ordered lists |

### The short lists worth memorizing

You will meet each of these again in Parts 2 through 5:

- The **three rock types**: igneous, sedimentary, metamorphic
- The **layers of Earth** from the outside in: crust, mantle, outer core, inner core
- The **layers of the atmosphere** from the ground up: troposphere, stratosphere, mesosphere, thermosphere, exosphere
- The **eight planets** in order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune

### Word roots that unlock answers

| Root | Meaning | Example |
|:---|:---|:---|
| **geo-** | Earth | geology, geography |
| **hydro-** | water | hydrosphere, hydroelectric |
| **seism-** | shaking | seismograph, seismic wave |
| **astro- / astr-** | star | astronomy, asteroid |
| **meteor-** | things in the air | meteorology (the study of weather) |

> **Key Fact:** A missing fact is not a lost question. If you know two of the four choices belong to the wrong field, you are down to a coin flip in a few seconds.`
    },
    {
      id: 'gse1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Three quick questions to see what you already know. Don\'t worry if you miss some; each one is taught later in the lesson.',
      exercise: {
        questions: [
          {
            question: 'Lava that pours out of a volcano cools and hardens. What type of rock does it form?',
            options: ['Igneous rock', 'Sedimentary rock', 'Metamorphic rock', 'Fossil rock'],
            correctAnswer: 0,
            explanation: 'Rock that forms when molten rock (magma or lava) cools is igneous; the root "ign-" means fire. Sedimentary rock forms from pressed-together sediment, metamorphic rock forms when heat and pressure change an existing rock, and "fossil rock" is not a rock type.'
          },
          {
            question: 'What causes the cycle of day and night on Earth?',
            options: ['Earth spinning on its axis', 'Earth orbiting around the Sun', 'The Moon orbiting Earth', 'The tilt of Earth\'s axis'],
            correctAnswer: 0,
            explanation: 'Earth rotates (spins) once about every 24 hours, carrying each place into sunlight and then into darkness. One orbit around the Sun takes a year, the Moon\'s orbit makes its phases, and the tilt causes seasons.'
          },
          {
            question: 'In which layer of the atmosphere does nearly all of our weather happen?',
            options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
            correctAnswer: 0,
            explanation: 'The troposphere is the lowest layer, the one we live in, and it holds almost all the water vapor, clouds and storms. The stratosphere above it holds the ozone layer; the mesosphere and thermosphere are far higher.'
          }
        ]
      }
    },
    {
      id: 'gse1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- GS is the **first** CAT-ASVAB subtest: **15** scored questions in **12** minutes, about **48 seconds** each
- Earth and space science covers **geology, meteorology, oceanography and astronomy**
- Most items are a single fact or a single cause-and-effect step, so a compact set of memorized lists goes a long way
- Learn four ordered lists: **rock types, Earth's layers, atmosphere layers, planets**
- Word roots (geo-, hydro-, seism-, astro-, meteor-) help you eliminate wrong choices fast

> **Up Next:** Part 2 — rocks, minerals and the rock cycle.`
    }
  ]
};
