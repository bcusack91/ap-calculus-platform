export const satExpressionPart5Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei5-intro',
      type: 'text' as const,
      content: `# Rhetorical Synthesis II: Choosing the Right Notes

**Part 5 of 7 — Rhetorical Synthesis: Choosing the Right Notes**

A synthesis question usually gives four to six notes, and the correct choice usually needs only **one to three** of them. The rest are true but irrelevant to the goal, and the wrong choices are built from exactly those notes.

### Tick Before You Read the Choices

After turning the goal into a checklist (Part 4), go down the notes and tick only the ones that serve the goal. Then look for the choice built from your ticked notes.

### The Four Trap Choices

| Trap | What it looks like | Why it fails |
|---|---|---|
| **True but off-goal** | An accurate note about a different aspect of the topic | Does a different job |
| **Half the goal** | One side of a comparison, a benefit without its cost, a cause without its effect | The goal needs both halves |
| **Background instead of the point** | The topic's definition when the goal asks for a finding or a reason | Sets the scene but never delivers |
| **Note-stuffer** | Packs in three or four notes, none of which serve the goal | More notes is not more relevant |

### Using More Notes Is Not a Virtue

The note-stuffer trap works because a long, fact-packed sentence *looks* thorough. The SAT does not reward coverage. A short sentence built from the one note the goal needs beats a long sentence built from three notes it does not.`
    },
    {
      id: 'ei5-quiz',
      type: 'multiple-choice' as const,
      content: '**Note-Selection Practice** 🎯',
      exercise: {
        questions: [
          {
            question: `While researching a topic, a student has taken the following notes: • The axolotl is a salamander native to lakes near Mexico City. • Unlike most salamanders, it keeps its gills and lives in water its whole life. • It can regrow lost limbs and even parts of its heart and brain. • Wild axolotls are critically endangered because of pollution and habitat loss. The student wants to explain why scientists who study healing are interested in the axolotl. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['An axolotl can regrow lost limbs and even parts of its heart and its brain.', 'The axolotl, a salamander native to lakes near Mexico City, is endangered.', 'Unlike most salamanders, the axolotl keeps its gills its whole life.', 'Pollution and habitat loss have made wild axolotls critically endangered.'],
            correctAnswer: 0,
            explanation: `Only one note connects to healing: the axolotl regrows limbs and parts of its heart and brain. The other choices are accurate but describe where it lives, its gills, and its endangered status, none of which explains an interest in healing.`
          },
          {
            question: `A synthesis question gives five notes. How many of them does the correct choice need to use?`,
            options: ['Only the notes that serve the goal', 'All five, combined into one sentence', 'At least four of the five notes', 'Whichever notes contain numbers'],
            correctAnswer: 0,
            explanation: `The correct choice uses the notes the goal calls for, often just one or two. A choice that combines all or most of the notes is usually a trap, and numbers matter only when the goal is about the quantity they measure.`
          }
        ]
      }    },
    {
      id: 'ei5-text2',
      type: 'text' as const,
      content: `## Deep Dive: Ticking the Notes

### Worked Example 1: One Goal, Five Notes

**Notes:**
1. Mangroves are trees that grow in salty coastal water in the tropics.
2. Their tangled roots slow waves and reduce erosion during storms.
3. The roots also shelter young fish, crabs, and shrimp.
4. Mangrove forests store large amounts of carbon in their soil.
5. Many mangrove forests have been cleared to make room for shrimp farms.

**Goal:** emphasize how mangroves protect coastlines.

| Note | Tick? | Reason |
|---|---|---|
| 1 | ➖ | Identifies mangroves; optional context |
| 2 | ✅ | Slowing waves and reducing erosion **is** coastal protection |
| 3 | ❌ | About wildlife habitat |
| 4 | ❌ | About carbon storage |
| 5 | ❌ | About a threat to mangroves |

| Choice | Verdict |
|---|---|
| "The tangled roots of mangroves slow waves and reduce erosion during storms." | ✅ Built from note 2 |
| "Mangrove roots shelter young fish, and mangrove soil stores large amounts of carbon." | ❌ Two true, off-goal notes |
| "Mangroves, tropical trees that shelter fish and store carbon, are often cleared for shrimp farms." | ❌ Note-stuffer: notes 1, 3, 4, and 5, but not 2 |
| "Mangroves are trees that grow in salty coastal water in the tropics." | ❌ Background only |

### Worked Example 2: The Half-the-Goal Trap

**Goal:** emphasize a trade-off of a new battery design (a benefit *and* its cost).

| Choice | Verdict |
|---|---|
| "The new battery charges in ten minutes but wears out twice as fast." | ✅ Benefit + cost |
| "The new battery charges in just ten minutes." | ❌ Benefit only |
| "The new battery wears out twice as fast as older designs." | ❌ Cost only |

### The Relevance Question

For every note, ask one question: **"Would the goal be accomplished without this?"** If yes, the note is optional. If the correct choice cannot do its job without it, it is required.`
    },
    {
      id: 'ei5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Note-Selection Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: `While researching a topic, a student has taken the following notes: • Tardigrades are microscopic animals, usually less than a millimeter long. • They live in moss, soil, and ocean sediments around the world. • When their surroundings dry out, they can enter a state called a tun, in which their metabolism nearly stops. • In the tun state, some tardigrades have survived years without water. The student wants to explain how tardigrades survive drought. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['In dry conditions, tardigrades enter a tun state, in which their metabolism nearly stops.', 'In the tun state, some tardigrades have survived for years without any water.', 'Tardigrades, which are microscopic animals, live in moss, soil, and ocean sediments.', 'Tardigrades are found living in moss, soil, and ocean sediments in many parts of the world.'],
            correctAnswer: 0,
            explanation: `"How" asks for the mechanism: when conditions turn dry, tardigrades enter a tun state and their metabolism nearly stops. The years-without-water sentence says how long they can last in that state, not what the state is or what triggers it. The other two describe their size and habitat.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • Perovskite solar cells are a newer type of solar cell. • In the lab, they convert sunlight to electricity about as efficiently as standard silicon cells. • They can be made at lower temperatures, which could reduce manufacturing costs. • They tend to break down when exposed to moisture and heat. The student wants to emphasize a challenge facing perovskite solar cells. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['Perovskite solar cells tend to break down under moisture and heat.', 'Perovskite cells can be made at low temperatures, which could reduce costs.', 'In the lab, perovskite cells convert sunlight about as well as silicon cells.', 'Perovskite cells are a newer kind of solar cell that could lower costs.'],
            correctAnswer: 0,
            explanation: `A challenge is a problem to overcome, and breaking down under moisture and heat is the only drawback in the notes. Lower manufacturing costs and silicon-level efficiency are advantages, and the last sentence mixes background with an advantage.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • Blue whales are the largest animals known to have lived. • An adult can be about 30 meters long. • Blue whales feed almost entirely on krill, tiny shrimplike animals. • An adult can eat several tons of krill a day during feeding season. The student wants to emphasize the contrast between the size of blue whales and the size of the animals they eat. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['At up to about 30 meters long, blue whales feed almost entirely on tiny krill.', 'Blue whales, the largest animals known, can be about 30 meters long as adults.', 'Blue whales, up to 30 meters long, eat several tons of food a day in feeding season.', 'Blue whales feed almost entirely on krill, which are small, shrimplike animals.'],
            correctAnswer: 0,
            explanation: `A contrast in size needs both sizes: the whale's enormous length and its food's tiny size. Only the 30-meters-and-tiny-krill sentence has both. The largest-animals sentence gives the whale's size alone, the several-tons sentence never says the food is small, and the krill sentence never says the whale is large.`
          }
        ]
      }
    },
    {
      id: 'ei5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Note-Selection Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'A note that is true but does not serve the goal should be [left out|included anyway|placed first|paraphrased]',
          'Goal: "emphasize how mangroves protect coastlines." The relevant note is about [roots slowing waves|carbon in the soil|young fish|shrimp farms]',
          'The choice that packs in the most notes is [often a trap|always correct|usually the shortest|never accurate]',
          'Before reading the choices, [tick the notes that serve the goal|reread every note twice|count the notes|find the longest choice]'
        ],
        correctAnswers: ['left out', 'roots slowing waves', 'often a trap', 'tick the notes that serve the goal'],
        hint1: 'Accuracy is not the test; relevance to the goal is.',
        hint2: 'Which note describes protecting a coast?',
        hint3: 'Coverage looks thorough but is not what the goal asks for.',
        explanation: 'True but off-goal notes stay out. Slowing waves protects coastlines. A note-stuffer is often a trap. Tick the relevant notes before reading the choices.'
      }
    },
    {
      id: 'ei5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Concept | Key Rule |
|---|---|
| Notes needed | Usually one to three, not all of them |
| Tick first | Mark the notes that serve the goal before reading the choices |
| True but off-goal | Accurate, wrong job |
| Half the goal | Comparisons and trade-offs need both halves |
| Note-stuffer | Coverage is not relevance |
| Relevance test | Could the goal be met without this note? |

*Next: Rhetorical Synthesis — Comparisons and Audience →*`    }
  ]
};
