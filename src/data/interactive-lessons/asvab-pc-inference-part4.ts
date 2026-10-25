export const asvabPcInferencePart4Data = {
  topicSlug: 'asvab-pc-inference',
  sections: [
    {
      id: 'pcin-p4-intro',
      type: 'text' as const,
      content: `# 📄 Inference, Tone and Word Meaning

**Part 4 of 7 — Tone, Attitude and Style**

### Tone: How the Author Sounds

**Tone** is the author's feeling toward the subject, the way a voice can sound cheerful, angry or flat. On paper, you hear it through **word choice** and **details**.

| Positive | Negative | Neutral or careful |
|:---|:---|:---|
| enthusiastic, admiring, hopeful, nostalgic (fondly remembering the past), humorous | critical, disapproving, sarcastic (saying the opposite of what is meant), alarmed, bitter | objective, informative, matter-of-fact, cautious (hedging, not certain) |

**Attitude** questions ask the same thing about one person or idea: "The author's attitude toward the new policy is…"

### Clues to Tone

- **Loaded words**: *finally, sadly, remarkable, absurd, so-called, "improved"* in quotation marks
- **What the author chooses to mention**: only problems, only praise, or both sides
- **Hedges**: *may, might, suggests, some* point to a cautious tone
- **Plain facts with no feeling words** point to an objective tone

### Style and Technique: How the Author Makes the Point

| Technique | What it looks like |
|:---|:---|
| **Statistics** | Numbers and percentages to show size or seriousness |
| **Anecdote** | A short story about one person or event |
| **Comparison or contrast** | Setting two things side by side |
| **Example** | A specific case that illustrates a general claim |
| **Question** | An opening question to draw the reader in |
| **Expert opinion** | Quoting or citing someone with authority |

> **Key Fact:** Tone answers must match the passage's **strength** too. A passage that mildly questions a policy is "skeptical," not "furious." Choose the tone word that is as strong as the passage, no more and no less.`
    },
    {
      id: 'pcin-p4-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Objective

The meeting began at 0900. The committee reviewed three proposals for the new range schedule and voted to adopt the second one.

**Tone: objective.** Only facts, no feeling words.

### Cautious

The early results suggest, though they do not prove, that the new training method may reduce injuries.

**Tone: cautious.** "Suggest," "do not prove" and "may" all hedge.

### Critical

The so-called upgrade to the payroll system has left hundreds of employees waiting weeks for their checks.

**Tone: critical.** "So-called" signals doubt, and the only detail given is a serious failure.

### Identifying a Technique

Last year, more than 40,000 homes in the county lost power for at least two days during winter storms. A few simple steps can keep your family safe.

**Technique:** a **statistic** (40,000 homes, two days) shows how serious the problem is before the author offers advice.`
    },
    {
      id: 'pcin-p4-mc1',
      type: 'multiple-choice' as const,
      content: `**Name the tone.** 🎯

Grandpa's hardware store smelled of sawdust and machine oil. He knew every customer by name and could find a single brass hinge in a drawer of thousands. I still think of those Saturday mornings whenever I walk into one of today's giant home-improvement warehouses.`,
      exercise: {
        questions: [
          {
            question: 'The tone of the passage is best described as',
            options: ['objective', 'nostalgic', 'sarcastic', 'alarmed'],
            correctAnswer: 1,
            explanation: 'The writer fondly remembers the smells, the personal service and "those Saturday mornings," which is nostalgia. Nothing is said with mocking intent, nothing is alarming, and the warm personal memories are not objective.'
          }
        ]
      }
    },
    {
      id: 'pcin-p4-mc2',
      type: 'multiple-choice' as const,
      content: `**Name the attitude.** 🎯

The city spent two million dollars on a decorative fountain downtown while potholes on residential streets went unrepaired for another year. Residents deserve to know why decorations came before safety.`,
      exercise: {
        questions: [
          {
            question: 'The author\'s attitude toward the city\'s spending is',
            options: ['critical', 'admiring', 'amused', 'uncertain'],
            correctAnswer: 0,
            explanation: 'The author contrasts the costly fountain with unrepaired potholes and demands an explanation, which is criticism. There is no praise or humor, and the author is not unsure: the point is stated firmly.'
          }
        ]
      }
    },
    {
      id: 'pcin-p4-mc3',
      type: 'multiple-choice' as const,
      content: `**Name the technique.** 🎯

When Rosa Vega's hiking partner twisted an ankle miles from the trailhead, the whistle and foil blanket in Vega's small pouch helped rescuers find them both before dark. Every hiker should carry a basic survival kit, even on a short day hike.`,
      exercise: {
        questions: [
          {
            question: 'The author supports the recommendation mainly by',
            options: [
              'giving statistics about hiking injuries in the national parks',
              'telling what happened to one pair of hikers on a trail',
              'quoting a park ranger about trail safety',
              'comparing kits sold by different stores'
            ],
            correctAnswer: 1,
            explanation: 'The author tells a short story (an anecdote) about Vega and her partner to show why a kit matters, then makes the recommendation. There are no statistics, no expert quotation and no comparison of kits.'
          }
        ]
      }
    },
    {
      id: 'pcin-p4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each sentence to its tone.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: '"We are thrilled to welcome the new recruits, and we can\'t wait to see what they will accomplish!"',
            options: ['enthusiastic', 'cautious', 'objective'],
            correctAnswer: 0
          },
          {
            label: '"The data may point to a link, but more study is needed before anyone draws conclusions."',
            options: ['cautious', 'objective', 'enthusiastic'],
            correctAnswer: 0
          },
          {
            label: '"The convoy left at 0600 and arrived at 1130 after one fuel stop."',
            options: ['cautious', 'objective', 'enthusiastic'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['enthusiastic', 'cautious', 'objective'],
        hint1: '"Thrilled" and an exclamation point show strong positive feeling.',
        hint2: '"May" and "more study is needed" hedge.',
        hint3: 'Times and facts with no feeling words.',
        explanation: 'The first sentence is enthusiastic ("thrilled," "can\'t wait"). The second is cautious, hedging with "may" and calling for more study. The third is objective: just times and facts.'
      }
    },
    {
      id: 'pcin-p4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Tone** = how the author sounds; listen for loaded words, chosen details, hedges, or plain facts
- Know the common tone words: **enthusiastic, admiring, nostalgic, humorous, critical, sarcastic, alarmed, objective, cautious**
- Match the tone's **strength**: mild doubt is not fury
- **Techniques**: statistics, anecdote, comparison, example, question, expert opinion

> **Up Next:** Part 5 — figuring out what a word means in the passage, especially familiar words used in unfamiliar ways.`
    }
  ]
};
