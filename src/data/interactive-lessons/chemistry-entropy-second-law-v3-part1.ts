export const chemEntropySecondLawV3Part1Data = {
  topicSlug: 'entropy-second-law',
  sections: [
    {
      id: 'en1v3-intro',
      type: 'text' as const,
      content: `
# 🧊 Entropy From Scratch

**Part 1 of 7 — Guided Discovery**

Why does perfume spread across a room? Why does a puddle evaporate? Why can't you unscramble an egg? Let's discover the answers through hands-on problems.
      `
    },
    {
      id: 'en1v3-discovery',
      type: 'text' as const,
      content: `
## 📌 Guided Discovery: Perfume in a Room

Spray perfume in one corner of a closed room. A few minutes later you can smell it everywhere.

---

### Step 1: What happened to the molecules?

They moved from a small region into the whole room. Nothing pushed them; they simply moved randomly, and there are vastly more ways for them to be spread out than bunched in a corner.

---

### Step 2: Will they ever gather back in the corner?

Practically never. With trillions of molecules, a spread-out arrangement is overwhelmingly more likely.

---

### Step 3: Name the idea

**Entropy** ($S$) increases when **matter becomes more dispersed** or when **energy becomes more dispersed** (CED 9.1.A). The perfume spreading is matter dispersal. A hot pan cooling as its energy spreads into the kitchen is energy dispersal.

| Change | Matter or energy dispersal? | Entropy |
|--------|----------------------------|---------|
| Perfume spreads through a room | Matter | Increases |
| A puddle evaporates | Matter | Increases |
| A gas is heated | Energy (broader spread of kinetic energies) | Increases |
| Steam condenses on a cold window | Matter becomes less dispersed | Decreases |
      `
    },
    {
      id: 'en1v3-practice1',
      type: 'input-boxes' as const,
      content: `
**Discovery Questions** 🧮

Type **increase** or **decrease** for the entropy of the system.

**1)** A drop of ink spreads through a glass of water.

**2)** Water vapor freezes directly into frost on a cold window.

**3)** A sealed tank of oxygen is warmed in the sun.
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'increase', acceptableAnswers: ['increase', 'increases'] }, { question: '(2)', answer: 'decrease', acceptableAnswers: ['decrease', 'decreases'] }, { question: '(3)', answer: 'increase', acceptableAnswers: ['increase', 'increases'] }],
        hint1: 'The ink particles spread out.',
        hint2: 'A gas becomes a solid.',
        hint3: 'Warming broadens the spread of kinetic energies.',
        explanation: '1) Increase: the ink particles disperse through the water. 2) Decrease: free-moving gas molecules become locked in a solid. 3) Increase: energy becomes more dispersed as the temperature rises, even though the volume is fixed.'
      }
    },
    {
      id: 'en1v3-key-facts',
      type: 'text' as const,
      content: `
## 📌 Essential Facts for AP

| Fact | Detail |
|------|--------|
| $S$ units | **J/K** (not kJ!), or J/(mol·K) per mole |
| $S$ is | **extensive** (doubles with amount) |
| $S > 0$ always | for any substance above 0 K |
| More dispersal of matter | → higher entropy |
| Higher temperature | → energy more dispersed → higher $S$ |
| Gas > Liquid > Solid | in terms of entropy |
| $\\Delta S$ can be + or − | + when products are more dispersed than reactants |
      `
    },
    {
      id: 'en1v3-quiz',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is it practically impossible for all the air molecules in a room to gather in one corner on their own?',
            options: [
              'A law of physics forbids the molecules from moving into a corner',
              'Spread-out arrangements vastly outnumber gathered ones',
              'The molecules repel one another too strongly to gather',
              'The walls of the room push the molecules back toward the center'
            ],
            correctAnswer: 1,
            explanation: 'No law forbids it; it is simply overwhelmingly unlikely, because there are vastly more ways for the molecules to be spread out than gathered. Air molecules barely interact, and the walls do not push molecules inward.'
          },
          {
            question: 'Which is NOT true of entropy?',
            options: [
              'It increases when a solid melts',
              'It always decreases when a substance is heated',
              'It is an extensive property that scales with amount',
              'It is measured in J/K, or J/(mol·K) per mole'
            ],
            correctAnswer: 1,
            explanation: 'Heating broadens the distribution of kinetic energies, so entropy INCREASES with temperature. The other statements are true.'
          },
          {
            question: 'Rank from lowest to highest entropy: $H_{2}O(g)$, $H_{2}O(s)$, $H_{2}O(l)$',
            options: [
              '$H_{2}O(s)$ < $H_{2}O(l)$ < $H_{2}O(g)$',
              '$H_{2}O(g)$ < $H_{2}O(l)$ < $H_{2}O(s)$',
              '$H_{2}O(l)$ < $H_{2}O(s)$ < $H_{2}O(g)$',
              'All have equal entropy'
            ],
            correctAnswer: 0,
            explanation: 'In a solid the molecules vibrate in fixed positions (least dispersed), in a liquid they move past one another, and in a gas they move freely through a large volume (most dispersed).'
          }
        ]
      }
    },
    {
      id: 'en1v3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Perfume spreading through a room is an example of the dispersal of',
            options: ['energy', 'matter', 'charge', 'mass number']
          },
          {
            label: 'If you double the number of molecules, entropy',
            options: ['halves', 'doubles', 'stays the same', 'quadruples']
          },
          {
            label: 'Heating a gas in a rigid container increases its entropy because the',
            options: ['volume increases', 'kinetic energies spread over a broader range', 'molecules get larger', 'number of moles increases']
          }
        ],
        correctAnswers: ['matter', 'doubles', 'kinetic energies spread over a broader range'],
        hint1: 'The perfume molecules themselves move outward.',
        hint2: 'Entropy is extensive.',
        hint3: 'The container is rigid, so the volume is fixed.',
        explanation: 'Perfume spreading is matter dispersal. Entropy is extensive (proportional to amount). In a rigid container heating does not change the volume, but it broadens the distribution of kinetic energies, dispersing energy.'
      }
    },
    {
      id: 'en1v3-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Check** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student says "entropy measures how much energy a system has." Is this correct?',
            options: [
              'Yes — entropy is the total energy stored in a system',
              'No — entropy describes how dispersed the matter and energy are',
              'No — entropy is a measure of the system\'s temperature',
              'Partly — entropy is the energy a system loses as heat'
            ],
            correctAnswer: 1,
            explanation: 'Entropy describes how spread out matter and energy are, not how much energy a system contains. Two systems with the same energy can have very different entropies, and heat lost by a system is energy, not entropy.'
          }
        ]
      }
    }
  ]
}
