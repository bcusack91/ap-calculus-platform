export const asvabPcMainIdeaPart2Data = {
  topicSlug: 'asvab-pc-main-idea',
  sections: [
    {
      id: 'pcmi-p2-intro',
      type: 'text' as const,
      content: `# 📄 Main Idea and Purpose

**Part 2 of 7 — Topic and Main Idea**

### Three Layers of Every Paragraph

| Layer | What it is | How long | Example |
|:---|:---|:---|:---|
| **Topic** | What the passage is about | a word or short phrase | sleep |
| **Main idea** | The point the author makes **about** the topic | a full sentence | Getting enough sleep improves physical performance. |
| **Supporting details** | Facts, examples and reasons that back up the main idea | the rest of the passage | Athletes who slept more ran faster sprints. |

The **topic** answers "What is this about?" The **main idea** answers "What is the author saying about it?" A main idea question on the ASVAB almost always wants the second one, a full statement, not just a subject.

### Where the Main Idea Hides

When a paragraph states its main idea in one sentence, that sentence is the **topic sentence**. It can sit in different places:

| Position | How it works |
|:---|:---|
| **First sentence** (most common) | The author states the point, then supports it |
| **Last sentence** | The author builds up details, then sums them up ("As a result…", "Clearly…") |
| **Middle** | The author opens with a question, a story or background, then states the point |
| **Nowhere** (implied) | Every sentence supports a point the author never states directly (Part 5) |

> **Key Fact:** To test whether a sentence is the main idea, ask: **do all the other sentences support it?** A detail supports the main idea; the main idea does not support a detail.`
    },
    {
      id: 'pcmi-p2-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: main idea first

(1) Getting enough sleep is one of the simplest ways to improve physical performance. (2) In studies of college athletes, players who slept longer ran faster sprints and shot more accurately. (3) Sleep also speeds recovery, because the body releases growth hormone during deep sleep. (4) Even a short nap before training can sharpen reaction time.

- **Topic:** sleep.
- **Main idea:** sentence 1. Sentences 2, 3 and 4 are each one way that sleep improves performance.

### Example 2: main idea last

(1) For centuries, ships approaching a rocky coast at night depended on lighthouses. (2) Today, satellite navigation tells a captain the ship's position within a few meters. (3) Radar shows nearby ships and coastlines even in thick fog. (4) Electronic charts warn of shallow water long before a ship reaches it. (5) As a result, few ships now rely on lighthouses to find their way.

- **Topic:** lighthouses and modern navigation.
- **Main idea:** sentence 5, signaled by "As a result." Sentences 2 to 4 are the reasons.

### Example 3: main idea in the middle

(1) Have you ever wondered why a column of soldiers breaks step when crossing a bridge? (2) Marching in perfect rhythm can make a bridge sway, and the sway can grow stronger with every step. (3) In 1831, a bridge in England collapsed while soldiers marched across it in step. (4) Since then, many armies have ordered troops to walk out of step on bridges.

- Sentence 1 is a **hook** (a question to get your attention), not the point.
- **Main idea:** sentence 2: marching in step can make a bridge sway dangerously. Sentences 3 and 4 support it with an example and a result.`
    },
    {
      id: 'pcmi-p2-mc1',
      type: 'multiple-choice' as const,
      content: `**Find the main idea.** 🎯

Beavers do more than build homes for themselves; they reshape entire landscapes. A single beaver dam can turn a fast-moving stream into a wide, quiet pond. The pond becomes home to fish, frogs, ducks and insects that could not survive in the rushing stream. The dam also slows floodwater and raises the level of water underground, keeping nearby meadows green through dry summers.`,
      exercise: {
        questions: [
          {
            question: 'Which sentence best states the main idea of the passage?',
            options: [
              'Many kinds of animals change the environments they live in, often in surprising ways',
              'Beavers cause serious flooding in the meadows near their dams',
              'Beaver dams change landscapes in ways that help many other living things',
              'Beaver dams turn fast-moving streams into wide, quiet ponds'
            ],
            correctAnswer: 2,
            explanation: 'The first sentence states the point (beavers reshape landscapes), and every other sentence shows a way that change helps fish, frogs, ducks, insects and meadows. Turning streams into ponds is one supporting detail (too narrow), "many animals" goes beyond beavers (too broad), and the passage says dams slow floodwater, the reverse of causing floods.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p2-mc2',
      type: 'multiple-choice' as const,
      content: `**Main idea at the end.** 🎯

Tanisha arrives fifteen minutes before every shift. She keeps a notebook of every task her supervisor explains, so she never has to ask twice. When the team is short-handed, she volunteers for extra work without complaining. It is no surprise that after only eight months on the job, she was chosen to train the newest hires.`,
      exercise: {
        questions: [
          {
            question: 'What is the main idea of the passage?',
            options: [
              'Arriving early to every shift is the single most important habit any new employee can have',
              'Tanisha keeps a careful notebook of everything her supervisor says',
              'Supervisors should explain each task to new workers more than once',
              'Tanisha\'s dependable work habits earned her a role training new hires'
            ],
            correctAnswer: 3,
            explanation: 'The last sentence sums up the details: her habits led to her being chosen as a trainer. The notebook is one detail (too narrow), the passage never ranks arriving early above other habits, and it says nothing about how supervisors should explain tasks.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Topic, main idea or detail?** 🔽

(1) Military families move often, sometimes every two or three years. (2) To make these moves easier, many bases run relocation offices that help with housing, schools and jobs for spouses. (3) Some offices even lend out pots, pans and furniture until a family's own belongings arrive. (4) Services like these help families settle into a new community faster.`,
      exercise: {
        dropdowns: [
          {
            label: 'The topic of the passage is:',
            options: ['military pay', 'renting furniture and moving trucks on base', 'school sports', 'help for military families who move'],
            correctAnswer: 3
          },
          {
            label: 'Sentence 3 is:',
            options: ['a hook', 'the main idea of the passage', 'a supporting detail'],
            correctAnswer: 2
          },
          {
            label: 'The main idea is best stated as:',
            options: [
              'Military families move every two or three years without any help at all',
              'Relocation offices lend pots and pans to every family that arrives on base',
              'Spouses of service members often have trouble finding jobs after a move',
              'Base relocation services make frequent moves easier for military families'
            ],
            correctAnswer: 3
          }
        ],
        correctAnswers: [
          'help for military families who move',
          'a supporting detail',
          'Base relocation services make frequent moves easier for military families'
        ],
        hint1: 'What subject does every sentence touch on?',
        hint2: 'Lending pots and pans is one example of the help offered.',
        hint3: 'Which statement do sentences 2, 3 and 4 all support?',
        explanation: 'The topic is help for families who move. Sentence 3 is one example of that help, a supporting detail. The main idea, stated across sentences 2 and 4, is that base relocation services make frequent moves easier. "Without any help at all" contradicts the passage, the pots-and-pans choice is one detail stretched to "every family," and job trouble for spouses is never discussed.'
      }
    },
    {
      id: 'pcmi-p2-input',
      type: 'input-boxes' as const,
      content: `**Which sentence is the topic sentence?** ✍️

(1) Every spring, the town of Millbrook floods when the river rises. (2) Sandbags and pumps help, but only for a few days at a time. (3) This year, the town council decided that the best long-term answer is to restore the wetlands along the riverbank. (4) Wetlands act like a sponge, soaking up extra water and releasing it slowly. (5) Engineers estimate that restored wetlands could cut flood damage in half.

**1)** Type the number of the sentence that states the main idea:

**2)** How many sentences come after the main idea to support it?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '2'],
        hint1: 'Sentences 1 and 2 give background: the problem and what has not worked.',
        hint2: 'Which sentence states the decision that the rest of the passage explains?',
        hint3: 'Count the sentences after it that explain why wetlands help.',
        explanation: 'Sentences 1 and 2 set up the problem. Sentence 3 states the main idea: restoring the wetlands is the best long-term answer. Sentences 4 and 5 (two sentences) support it by explaining how wetlands work and how much they could help.'
      }
    },
    {
      id: 'pcmi-p2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Topic** = what the passage is about (a word or phrase); **main idea** = what the author says about it (a full sentence)
- The topic sentence is often **first**, sometimes **last** ("As a result…"), sometimes in the **middle** after a hook, and sometimes **not stated at all**
- Test a candidate: **do all the other sentences support it?**

> **Up Next:** Part 3 — choices that are too broad, too narrow or just right.`
    }
  ]
};
