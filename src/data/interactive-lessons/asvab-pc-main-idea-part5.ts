export const asvabPcMainIdeaPart5Data = {
  topicSlug: 'asvab-pc-main-idea',
  sections: [
    {
      id: 'pcmi-p5-intro',
      type: 'text' as const,
      content: `# 📄 Main Idea and Purpose

**Part 5 of 7 — Best Title, Summary and Implied Main Idea**

### Three More Ways to Ask for the Main Idea

| Question | What it really asks | What a right answer looks like |
|:---|:---|:---|
| "Which is the best title?" | The main idea in a short phrase | Covers the whole passage, no more and no less |
| "Which best summarizes the passage?" | The main idea plus its key support | Uses only what the passage says, in fewer words |
| "Which statement is implied by the passage?" or "The passage suggests that…" | The point the details add up to | Something every sentence supports, even though no sentence says it |

The same size rules from Part 3 apply: a title or summary that covers one detail is **too narrow**, one that reaches beyond the passage is **too broad**, and one that adds or twists facts is **distorted**.

### When No Sentence States the Main Idea

Some passages never hand you a topic sentence. Every sentence is a detail, and you have to work out what they add up to.

1. List what each sentence tells you, in a few words.
2. Ask: **what do all of these have in common?**
3. Put that common point into one sentence of your own.
4. Choose the answer that matches it.

> **Key Fact:** An implied main idea must be supported by **every** detail. If a choice explains only some of the sentences, or needs information the passage does not give, it is not the implied main idea.`
    },
    {
      id: 'pcmi-p5-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Example 1: an implied main idea

The coffee maker in the break room has been broken for three weeks. The heater in the west office rattles all night. Two of the four printers jam on every job, and the repair request forms sit in a box that no one ever checks.

- **List:** coffee maker broken · heater rattles · printers jam · repair requests ignored.
- **Common point:** things are broken and nobody is fixing them.
- **Implied main idea:** *The office's equipment is being poorly maintained.*

A choice such as "The printers in the office are old" is **too narrow** (one detail). "Offices everywhere are uncomfortable places to work" is **too broad**. "The employees broke the equipment on purpose" is **distorted**: the passage never says how anything broke.

### Example 2: a best title

Sea turtles lay their eggs on sandy beaches at night. When the hatchlings break out weeks later, they head toward the brightest horizon, which is normally the moonlit sea. Bright lights from hotels and streetlights can confuse them and lead them inland, where many die. Some beach towns now turn off or shield their lights during nesting season.

| Title | Verdict |
|:---|:---|
| Saving Sea Turtle Hatchlings from Beach Lights | **Best**: covers the problem and the solution |
| How Sea Turtles Lay Their Eggs | Too narrow: only the first sentence |
| The Wonders of Ocean Life | Too broad |
| Why Beach Hotels Use Bright Lights | Off target: the passage never explains why |`
    },
    {
      id: 'pcmi-p5-mc1',
      type: 'multiple-choice' as const,
      content: `**Choose the best title.** 🎯

Tardigrades, animals less than a millimeter long, may be the toughest creatures on Earth. They have survived being frozen, heated far past the boiling point of water, dried out for years and even exposed to the vacuum of outer space. When conditions turn harsh, a tardigrade curls into a ball, loses almost all of its water and nearly shuts down until conditions improve.`,
      exercise: {
        questions: [
          {
            question: 'Which title best fits the passage?',
            options: [
              'A Tiny Animal That Survives Almost Anything',
              'The Smallest Animals Found Anywhere in the World',
              'How Water Freezes and Boils',
              'Life in the Vacuum of Outer Space'
            ],
            correctAnswer: 0,
            explanation: 'The passage is about how tough tardigrades are and how they survive extreme conditions. Outer space is one example (too narrow), the passage never claims tardigrades are the smallest animals, and freezing and boiling water are not its subject.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p5-mc2',
      type: 'multiple-choice' as const,
      content: `**Find the implied main idea.** 🎯

Before dawn, Sergeant Ruiz checks the weather report and inspects every vehicle in the convoy. She drives the route herself, looking for washed-out roads and fallen trees. She briefs each driver personally and makes sure every radio works. Only then does she give the order to roll out.`,
      exercise: {
        questions: [
          {
            question: 'Which statement best expresses the main idea of the passage?',
            options: [
              'Bad weather is the greatest danger a convoy can face',
              'Sergeant Ruiz is the only soldier who can repair the radios',
              'Sergeant Ruiz worries that her drivers do not know the route',
              'Sergeant Ruiz prepares carefully before her convoy moves'
            ],
            correctAnswer: 3,
            explanation: 'Every sentence describes a step Ruiz takes before the convoy leaves: weather, vehicles, route, briefings, radios. Together they show careful preparation. The passage never says she doubts her drivers, ranks weather as the greatest danger or repairs radios herself.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p5-mc3',
      type: 'multiple-choice' as const,
      content: `**Choose the best summary.** 🎯

Hands-only CPR is a simple way for a bystander to help someone whose heart has stopped. After calling 911, push hard and fast in the center of the person's chest, about 100 to 120 times a minute, and keep going until help arrives. Starting CPR right away can double or even triple a person's chance of survival.`,
      exercise: {
        questions: [
          {
            question: 'Which choice best summarizes the passage?',
            options: [
              'Only trained medics should attempt CPR on someone whose heart has stopped',
              'Hands-only CPR is simple, and starting it quickly greatly improves survival',
              'Chest compressions should be given at a rate of 100 to 120 per minute',
              'Bystanders should always wait for trained paramedics to arrive before they begin CPR'
            ],
            correctAnswer: 1,
            explanation: 'A summary keeps the main idea and the key support: CPR is simple and early CPR saves lives. The compression rate is one detail (too narrow), and the other two choices contradict the passage, which tells bystanders to start right away.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Title it.** 🔽

Workers who switch to night shifts often struggle to sleep during the day. Experts suggest keeping the bedroom dark and cool, using earplugs or a fan to block noise and going to bed at the same time every morning. Avoiding caffeine during the last few hours of a shift also helps.`,
      exercise: {
        dropdowns: [
          {
            label: 'The best title is:',
            options: ['Why Factories Run All Night', 'How to Choose the Right Fan', 'Tips for Sleeping After a Night Shift', 'Cutting Caffeine Late in a Shift'],
            correctAnswer: 2
          },
          {
            label: 'The title "How Anyone Can Get Better Sleep" is:',
            options: ['too narrow', 'too broad', 'just right'],
            correctAnswer: 1
          },
          {
            label: 'The passage is mostly made up of:',
            options: ['an argument against working night shifts', 'suggestions for solving a problem', 'a story about one worker'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Tips for Sleeping After a Night Shift', 'too broad', 'suggestions for solving a problem'],
        hint1: 'What do the experts\' suggestions all help with?',
        hint2: 'Is the passage about everyone, or about one group of workers?',
        hint3: 'The first sentence names a problem. What do the rest of the sentences offer?',
        explanation: 'Every suggestion helps night-shift workers sleep, so "Tips for Sleeping After a Night Shift" fits. "How Anyone Can Get Better Sleep" is too broad: the passage is about night-shift workers, not everyone. ("Cutting Caffeine Late in a Shift" would be too narrow, since caffeine is one detail.) After the first sentence names the problem, the rest of the passage is a list of suggestions for solving it; there is no story about one worker and no argument against night shifts.'
      }
    },
    {
      id: 'pcmi-p5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- A **best title** is the main idea in a phrase; a **summary** is the main idea plus key support, with nothing added
- Size rules still apply: watch for **too narrow, too broad, distorted**
- **Implied main idea**: list the details, find what they share, say it in one sentence
- The right answer must be supported by **every** detail

> **Up Next:** Part 6 — pacing at about 2 minutes 40 seconds a question, and the traps that catch careful readers.`
    }
  ]
};
