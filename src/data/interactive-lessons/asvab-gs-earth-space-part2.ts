export const asvabGsEarthSpacePart2Data = {
  topicSlug: 'asvab-gs-earth-space',
  sections: [
    {
      id: 'gse2-minerals',
      type: 'text' as const,
      content: `# 🌍 Earth and Space Science

**Part 2 of 7 — Rocks, Minerals and the Rock Cycle**

### Minerals Versus Rocks

A **mineral** is a naturally occurring, inorganic solid with a definite chemical makeup and an orderly crystal structure. Quartz, feldspar, calcite and halite (rock salt) are minerals.

A **rock** is a mixture of one or more minerals (or bits of other rocks). Granite, for example, is a rock made of quartz, feldspar and mica crystals.

> **Key Fact:** Minerals are the ingredients; rocks are the recipes. If an answer choice names a single substance with one chemical formula, it is a mineral.

### Telling minerals apart

| Property | What it means |
|:---|:---|
| **Hardness** | How well the mineral resists being scratched |
| **Luster** | How the surface reflects light (metallic, glassy, dull) |
| **Streak** | The color of its powder when rubbed on unglazed tile |
| **Cleavage / fracture** | Breaks along flat planes (cleavage) or unevenly (fracture) |

### The Mohs hardness scale

Hardness is ranked from **1 (softest)** to **10 (hardest)**. A mineral scratches anything **lower** on the scale and is scratched by anything **higher**.

| Hardness | Mineral | Everyday comparison |
|:---:|:---|:---|
| 1 | Talc | Crumbles under a fingernail |
| 2 | Gypsum | Fingernail (about 2.5) scratches it |
| 3 | Calcite | Copper coin (about 3.5) scratches it |
| 4 | Fluorite | |
| 5 | Apatite | Glass and a steel knife are about 5.5 |
| 6 | Orthoclase feldspar | Scratches glass |
| 7 | Quartz | |
| 8 | Topaz | |
| 9 | Corundum | Rubies and sapphires |
| 10 | Diamond | Hardest natural mineral |

**Mnemonic, in order 1 to 10:** "**T**ired **G**iraffes **C**an **F**ind **A**pples **F**or **Q**uick **T**asty **C**runchy **D**inners."

> **Key Fact:** The scale is a ranking, not a ruler. A mineral of hardness 6 scratches one of hardness 5; you don't need any more than that.`
    },
    {
      id: 'gse2-rocks',
      type: 'text' as const,
      content: `## The Three Rock Types

| Type | How it forms | Clues in the rock | Examples |
|:---|:---|:---|:---|
| **Igneous** ("fire") | Molten rock cools and hardens | Interlocking crystals or glassy texture | Granite, basalt, obsidian, pumice |
| **Sedimentary** | Sediment (sand, mud, shells) is laid down in layers, then **compacted** and **cemented** | Layers; grains; **fossils** | Sandstone, shale, limestone, conglomerate |
| **Metamorphic** ("change form") | Heat and pressure change an existing rock **without melting it** | Bands or flattened, lined-up crystals | Marble, slate, quartzite, gneiss |

### Igneous: where it cooled sets the crystal size

| Cooled... | Name | Speed | Crystals | Example |
|:---|:---|:---|:---|:---|
| Underground, from **magma** | Intrusive | Slow | Large, easy to see | Granite |
| At the surface, from **lava** | Extrusive | Fast | Tiny, or none (glass) | Basalt, obsidian |

Magma is molten rock **below** the surface; once it erupts it is called **lava**. Pumice is lava so full of gas bubbles that it can float.

### Metamorphic rocks and their parents

| Parent rock | Becomes |
|:---|:---|
| Limestone | Marble |
| Shale | Slate |
| Sandstone | Quartzite |
| Granite | Gneiss |

### The rock cycle

Any rock can become any other type:

- Weathering and erosion break rock into **sediment** → compaction and cementation make **sedimentary** rock
- Deep burial with heat and pressure → **metamorphic** rock
- Melting makes magma → cooling makes **igneous** rock

### Breaking rock down and moving it

| Process | What happens | Examples |
|:---|:---|:---|
| **Weathering** | Rock breaks down **in place** | Mechanical: ice wedging, tree roots. Chemical: acid rain dissolving limestone, iron rusting |
| **Erosion** | Pieces are **carried away** | Rivers, wind, glaciers, gravity (landslides) |
| **Deposition** | Moving material is **dropped** | A river delta; a sand dune |

**Soil** is weathered rock mixed with **humus**, the dark decayed remains of plants and animals.

> **Key Fact:** Weathering breaks, erosion takes, deposition drops. Fossils almost always appear in **sedimentary** rock, because heat destroys them in igneous and metamorphic rock.`
    },
    {
      id: 'gse2-worked',
      type: 'text' as const,
      content: `## Worked Examples

**Example 1.** A rock has large pink and white crystals you can see without a magnifier. How did it form?

Large crystals mean the crystals had a long time to grow, which happens when magma cools **slowly underground**. The rock is intrusive igneous rock, such as granite.

**Example 2.** A mineral scratches calcite but is scratched by apatite. What is its hardness?

Calcite is 3 and apatite is 5. The mineral scratches 3 and is scratched by 5, so its hardness is between them: **4**, which is fluorite.

**Example 3.** Water seeps into a crack in a rock, freezes and expands, and splits the rock. Is this weathering or erosion?

The rock broke apart **where it sits**, so this is **mechanical weathering** (called ice wedging or frost wedging). If a stream then carried the pieces away, that would be erosion.`
    },
    {
      id: 'gse2-mc',
      type: 'multiple-choice' as const,
      content: '**Rocks and minerals.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which of these is a mineral rather than a rock?',
            options: ['Quartz', 'Granite', 'Sandstone', 'Marble'],
            correctAnswer: 0,
            explanation: 'Quartz is a single substance with one chemical makeup and a crystal structure, so it is a mineral. Granite is a mixture of minerals, sandstone is cemented sand grains, and marble is a metamorphic rock.'
          },
          {
            question: 'Limestone buried deep underground is changed by heat and pressure, but it never melts. What does it become?',
            options: ['Marble, a metamorphic rock', 'Granite, an igneous rock', 'Shale, a sedimentary rock', 'Basalt, an igneous rock'],
            correctAnswer: 0,
            explanation: 'Heat and pressure without melting is metamorphism, and limestone\'s metamorphic form is marble. Granite and basalt form from cooled molten rock, and shale is a sedimentary rock made from mud.'
          },
          {
            question: 'Tree roots grow into a crack in a boulder and slowly pry it apart. This is an example of:',
            options: ['Mechanical weathering', 'Chemical weathering', 'Erosion by gravity', 'Deposition'],
            correctAnswer: 0,
            explanation: 'The rock is being physically broken in place, with no change to its chemistry, so this is mechanical weathering. Chemical weathering changes the minerals (as acid rain does), erosion carries pieces away, and deposition drops them somewhere new.'
          },
          {
            question: 'Basalt has crystals too small to see without a microscope. What does this tell you about how it formed?',
            options: ['Lava cooled quickly at the surface', 'Magma cooled slowly deep underground', 'Sediment was pressed into thin layers', 'Heat and pressure flattened its crystals'],
            correctAnswer: 0,
            explanation: 'Tiny crystals mean fast cooling, which happens when lava reaches the surface: basalt is extrusive igneous rock. Slow underground cooling gives large crystals, pressed sediment makes sedimentary rock, and flattened crystals are a sign of metamorphism.'
          }
        ]
      }
    },
    {
      id: 'gse2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each rock.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Shale, made of fine mud pressed into thin layers:',
            options: ['Sedimentary', 'Igneous', 'Metamorphic', 'A mineral'],
            correctAnswer: 0
          },
          {
            label: 'Obsidian, a shiny black volcanic glass:',
            options: ['Igneous', 'Sedimentary', 'Metamorphic', 'A mineral'],
            correctAnswer: 0
          },
          {
            label: 'Slate, formed when shale is squeezed and heated:',
            options: ['Metamorphic', 'Igneous', 'Sedimentary', 'A mineral'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Sedimentary', 'Igneous', 'Metamorphic'],
        hint1: 'Layers of pressed sediment point to one type; cooled molten rock to another.',
        hint2: 'Obsidian is lava that cooled so fast no crystals formed.',
        hint3: 'An existing rock changed by heat and pressure is metamorphic.',
        explanation: 'Shale is compacted mud, so it is sedimentary. Obsidian is lava that cooled almost instantly, so it is igneous. Slate is shale changed by heat and pressure without melting, so it is metamorphic. None of the three is a single mineral.'
      }
    },
    {
      id: 'gse2-input',
      type: 'input-boxes' as const,
      content: `**Use the Mohs scale.** ✍️

**1)** The hardness of diamond:

**2)** A mineral scratches apatite but is scratched by quartz. What whole-number hardness does it have?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['10', '6'],
        hint1: 'Diamond is at the very top of the scale.',
        hint2: 'Apatite is 5 and quartz is 7. Which whole number lies between them?',
        hint3: 'The mineral at 6 is orthoclase feldspar.',
        explanation: '(1) Diamond is the hardest natural mineral, 10 on the scale. (2) Scratching apatite (5) means it is harder than 5; being scratched by quartz (7) means it is softer than 7. The only whole number between is 6, orthoclase feldspar.'
      }
    },
    {
      id: 'gse2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- A **mineral** is one natural inorganic crystalline substance; a **rock** is a mixture of minerals
- **Mohs scale** 1 to 10: talc, gypsum, calcite, fluorite, apatite, feldspar, quartz, topaz, corundum, diamond ("Tired Giraffes Can Find Apples For Quick Tasty Crunchy Dinners")
- **Igneous** = cooled molten rock (slow underground → big crystals; fast at surface → tiny crystals or glass)
- **Sedimentary** = compacted, cemented sediment, in layers, often with **fossils**
- **Metamorphic** = changed by heat and pressure without melting: limestone → marble, shale → slate, sandstone → quartzite
- **Weathering** breaks rock in place, **erosion** carries it away, **deposition** drops it

> **Up Next:** Part 3 — Earth's layers, plate tectonics and earthquakes.`
    }
  ]
};
