export const lessonData = {
  topicSlug: 'sat-effective-language-use-advanced',
  sections: [
    {
      id: 'elu-adv-p1-intro',
      type: 'text' as const,
      content: `# Effective Language Use: The 700-800 Patterns

**Part 1 of 3 — Rhetorical Synthesis, Solved from the Goal**

Hard-tier synthesis items ("a student has taken the following notes...") are never about the notes. Every option is **factually accurate**. The question is decided entirely by the **goal sentence** — and at this level, the goal contains a precise demand that only one option satisfies structurally.

### Archetype 1: The Two-Halves Rule
Goals like *emphasize a difference / a change / a trade-off / a tension / a disproportion* demand **both halves inside one sentence**: both figures, both dates, both techniques, the benefit AND the cost. Any option carrying only one half — however dramatic — states no comparison and dies instantly. This single rule solves more hard synthesis items than any other.

### Archetype 2: The Causal Chain
Goals like *explain why* or *explain the connection* demand the mechanism **run end to end**. The wrong options each supply one segment: the first link only, the outcome only, or accurate background that never touches the causal question. If the goal asks "why," the right answer almost always contains *because*, *so*, or an equivalent connective — and completes the chain.

### Archetype 3: The Audience Filter
*Introduce X to an unfamiliar audience* → the sentence must **name X and say what it physically is**; options that mention X while assuming you know it all fail. *Present a finding to an audience already familiar with X* → background about X is now dead weight; the sentence must deliver the **result**, not the setup.

### Archetype 4: The Right Dimension
The subtlest trap: an option that genuinely contrasts the two things — **on the wrong axis**. The goal says *difference in longevity* and the trap contrasts manufacturing; the goal says *responses to heat* and the trap contrasts protein yield. Underline the goal's key noun and demand that exact dimension appear in the answer.`
    },
    {
      id: 'elu-adv-p1-q1',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- Perovskite solar cells can be printed at low temperatures onto flexible film.
- Silicon solar cells require furnace processing above 1,000 degrees Celsius.
- Perovskite cells begin to lose efficiency after months of exposure to humidity.
- Silicon cells routinely operate for 25 years.
- Both types convert sunlight directly into electricity.

The student wants to emphasize the difference in the two cell types' longevity. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `Perovskite cells can be printed at low temperatures onto flexible film, whereas silicon cells demand furnace processing above 1,000 degrees Celsius.`,
        `While silicon solar cells routinely operate for 25 years, perovskite cells begin to lose efficiency after only months of exposure to humidity.`,
        `Silicon solar cells routinely operate for a quarter of a century.`,
        `Both perovskite and silicon cells convert sunlight directly into electricity, though the two are manufactured very differently.`
      ],
      correctAnswer: 1,
      explanation: `The goal names a specific dimension — longevity — and demands both cell types on it, which only the 25-years-versus-months sentence delivers. The first option is the wrong-dimension trap: a genuine contrast, but on manufacturing, not lifespan. The third gives one lifespan with nothing to compare it to, so no difference is stated. The last emphasizes what the technologies share and waves at a difference without giving it.`
    },
    {
      id: 'elu-adv-p1-q2',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- A camera obscura is a darkened chamber into which light enters through a small hole.
- The hole projects an inverted image of the outside scene onto the far wall.
- Some seventeenth-century painters may have traced such projections.
- The optics were described by Ibn al-Haytham around 1021.
- Modern experiments reproduce the projections using room-sized chambers.

The student wants to introduce the camera obscura to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `A camera obscura is a darkened chamber into which light enters through a small hole, casting an inverted image of the outside scene onto the far wall.`,
        `Ibn al-Haytham described the optics of the camera obscura around the year 1021.`,
        `Some seventeenth-century painters may have traced projections produced by a camera obscura.`,
        `Modern experiments with room-sized chambers have reproduced the projections some painters may once have traced.`
      ],
      correctAnswer: 0,
      explanation: `Introducing an unfamiliar device requires naming it and stating what it physically is and does, which only the first option accomplishes. The other three all mention the camera obscura or its projections while presupposing the reader already knows what the device is: the second defines it only by who described it, the third by who may have used it, and the fourth never names the device at all — the exact failure the audience specification is designed to catch.`
    },
    {
      id: 'elu-adv-p1-q3',
      type: 'quiz' as const,
      question: `While researching a topic, a student has taken the following notes:
- Grapes absorb volatile phenols from wildfire smoke through their skins.
- Inside the fruit, the phenols bind to sugars and become tasteless.
- Fermentation breaks those sugar bonds, releasing the phenols.
- Wine from smoke-exposed grapes can taste acrid even when the fresh fruit tasted normal.

The student wants to explain why smoke taint can go undetected until after fermentation. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
      options: [
        `Grapes absorb volatile phenols from wildfire smoke through their skins.`,
        `Wine made from smoke-exposed grapes can taste acrid even when the fresh fruit tasted completely normal.`,
        `Fermentation breaks the chemical bonds that form between smoke phenols and the fruit's sugars.`,
        `Because smoke phenols bind to the fruit's sugars and turn tasteless, the taint stays hidden until fermentation breaks those bonds and releases the phenols into the wine.`
      ],
      correctAnswer: 3,
      explanation: `An explanation of why the taint hides must run the causal chain end to end: binding makes the phenols tasteless, fermentation unbinds them, so detection comes late. Only the last option completes that chain. The first gives the chain's opening link, the third gives a middle link, and the second states the puzzling outcome without any mechanism — each is accurate, and each answers a question other than 'why.'`
    }
  ]
}
