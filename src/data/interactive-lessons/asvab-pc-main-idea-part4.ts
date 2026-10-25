export const asvabPcMainIdeaPart4Data = {
  topicSlug: 'asvab-pc-main-idea',
  sections: [
    {
      id: 'pcmi-p4-intro',
      type: 'text' as const,
      content: `# 📄 Main Idea and Purpose

**Part 4 of 7 — Author's Purpose**

### Why Was This Written?

The main idea is **what** the author says. The purpose is **why** the author says it. Purpose questions look like this:

- "The main purpose of the passage is to…"
- "The author wrote this passage primarily to…"
- "The author mentions ___ in order to…"

Most passages on the ASVAB were written for one of five purposes:

| Purpose | What the passage does | Clues to look for |
|:---|:---|:---|
| **Inform / explain** | Gives facts or explains how or why something happens | neutral tone, facts, numbers, "because" |
| **Persuade / argue** | Tries to convince you of an opinion or to take action | should, must, need to, best, worst, opinion words |
| **Instruct** | Tells you how to do something | steps, commands (do this, then that), first/next/finally |
| **Describe / entertain** | Paints a picture or tells a story | characters, events, vivid details, humor |
| **Warn** | Alerts you to a danger | never, caution, danger, can kill, avoid |

Purpose choices usually begin with a verb: *to explain, to argue, to describe, to warn, to compare, to tell how*. Match the **verb** to what the passage actually does.

> **Key Fact:** A passage can contain facts and still be persuasive. If facts are being used to **push an opinion** ("so the town **should**…"), the purpose is to persuade.`
    },
    {
      id: 'pcmi-p4-examples',
      type: 'text' as const,
      content: `## Worked Examples

### Passage A

Lightning heats the air around it to temperatures hotter than the surface of the sun. The air expands so suddenly that it creates a shock wave, which we hear as thunder.

**Purpose: to explain.** The passage gives facts about cause and effect (lightning heats the air, so thunder results). It gives no opinion and no instructions.

### Passage B

Every high school should offer a course in personal finance. Too many graduates sign their first car loan without understanding interest rates. A single semester could save them thousands of dollars and years of debt.

**Purpose: to persuade.** "Should offer" states an opinion, and the other sentences are reasons to agree with it.

### Passage C

To change a flat tire, first park on level ground and set the parking brake. Loosen the lug nuts slightly while the tire is still on the ground. Then raise the car with the jack, remove the nuts and swap the wheel.

**Purpose: to instruct.** Commands in order (first, then) tell the reader how to do a task.

### "Why Does the Author Mention…?"

Sometimes the question asks about the purpose of **one detail**, not the whole passage. Ask what job that detail does for the main idea: Is it an **example**? A **reason**? A **contrast**? A **common belief** the author wants to correct?`
    },
    {
      id: 'pcmi-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Name the purpose.** 🔽

**Passage A.** Never run a generator inside a garage, even with the door open. Generators produce carbon monoxide, a gas you cannot see or smell, and it can kill in minutes.

**Passage B.** The mule had refused to cross the creek all morning. Private Hayes tried carrots, then kind words, then a long and colorful speech. Finally the mule sighed, stepped into the water and walked across as if it had been his own idea all along.

**Passage C.** Alligators and crocodiles are both large reptiles that live near water, but they differ in several ways. Alligators have wide, U-shaped snouts, while crocodiles have narrower, V-shaped snouts. Alligators prefer fresh water, but many crocodiles can live in salt water.`,
      exercise: {
        dropdowns: [
          {
            label: 'The purpose of Passage A is to:',
            options: ['tell an amusing story', 'compare two things', 'persuade readers to vote', 'warn of a danger'],
            correctAnswer: 3
          },
          {
            label: 'The purpose of Passage B is to:',
            options: ['persuade readers to vote', 'warn of a danger', 'tell an amusing story', 'compare two things'],
            correctAnswer: 2
          },
          {
            label: 'The purpose of Passage C is to:',
            options: ['tell an amusing story', 'compare two things', 'persuade readers to vote', 'warn of a danger'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['warn of a danger', 'tell an amusing story', 'compare two things'],
        hint1: '"Never" and "can kill in minutes" are warning words.',
        hint2: 'Passage B has a character, events and a funny ending.',
        hint3: 'Passage C sets alligators and crocodiles side by side.',
        explanation: 'Passage A uses "never" and a deadly danger, so it warns. Passage B tells a short, humorous story about a stubborn mule. Passage C compares alligators and crocodiles, using "while" and "but" to point out differences. None of the passages asks readers to vote.'
      }
    },
    {
      id: 'pcmi-p4-mc1',
      type: 'multiple-choice' as const,
      content: `**Purpose of a whole passage.** 🎯

Our town should turn the empty lot on Fifth Street into a community garden. Right now the lot collects trash and weeds. A garden would give families a place to grow fresh vegetables, teach children where food comes from and bring neighbors together. The cost would be small, and volunteers have already offered their time. The town council should approve the plan at its next meeting.`,
      exercise: {
        questions: [
          {
            question: 'The author\'s main purpose is to',
            options: [
              'explain how to plant and care for a vegetable garden',
              'describe the history of the lot on Fifth Street',
              'convince readers to support a community garden',
              'warn readers about the dangers of empty lots'
            ],
            correctAnswer: 2,
            explanation: 'The passage opens and closes with "should": the town should build the garden and the council should approve it. The middle sentences are reasons. It gives no planting instructions, no history, and the trash is mentioned as a reason for the garden, not as a danger warning.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p4-mc2',
      type: 'multiple-choice' as const,
      content: `**Purpose of a whole passage.** 🎯

A GPS receiver works out where it is by listening to signals from satellites orbiting high above Earth. Each satellite constantly broadcasts the exact time and its own position. The receiver measures how long the signals from at least four satellites take to arrive, and from those travel times it calculates its own location, often to within a few meters.`,
      exercise: {
        questions: [
          {
            question: 'The passage was written mainly to',
            options: [
              'persuade readers to buy a GPS receiver before their next long road trip',
              'explain how a GPS receiver finds its location',
              'compare GPS receivers with paper maps',
              'describe the history of satellite launches'
            ],
            correctAnswer: 1,
            explanation: 'The passage walks through the process: satellites broadcast time and position, and the receiver uses signal travel times to calculate where it is. There is no sales pitch, no comparison with maps and no history.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p4-mc3',
      type: 'multiple-choice' as const,
      content: `**Purpose of a detail.** 🎯

Every summer, children and pets die after being left in parked cars. Many people believe that cracking a window open keeps a car cool enough, but tests show it makes little difference: on a warm day, the temperature inside a closed car can climb about 20 degrees Fahrenheit in just ten minutes. Never leave a child or an animal alone in a vehicle, not even for a quick errand.`,
      exercise: {
        questions: [
          {
            question: 'The author mentions cracking a window open in order to',
            options: [
              'correct a common but mistaken belief about car safety',
              'explain why cars heat up faster in summer than in winter',
              'describe the results of tests on many different car models',
              'give readers a simple way to keep a parked car cool'
            ],
            correctAnswer: 0,
            explanation: 'The author introduces the cracked window as something "many people believe," then says tests show it "makes little difference." The detail is there to correct a mistaken belief. The passage does not recommend it, compare seasons or describe tests on different models.'
          },
          {
            question: 'The main purpose of the passage as a whole is to',
            options: [
              'tell the story of a child who was left in a parked car',
              'compare how quickly different vehicles heat up on hot days',
              'warn readers about leaving anyone alone in a parked car',
              'explain how scientists measure temperatures inside cars'
            ],
            correctAnswer: 2,
            explanation: 'The passage begins with deaths in parked cars and ends with "Never leave a child or an animal alone in a vehicle." That is a warning. It does not explain measurement methods, tell one child\'s story or compare vehicles.'
          }
        ]
      }
    },
    {
      id: 'pcmi-p4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Main idea = **what**; purpose = **why**
- Five common purposes: **inform/explain, persuade, instruct, describe/entertain, warn**
- Clues: neutral facts (inform), "should/must" (persuade), commands in order (instruct), story and characters (entertain), "never/danger" (warn)
- Facts used to push an opinion still mean **persuade**
- For "Why does the author mention…?", name the detail's **job**: example, reason, contrast, or a belief being corrected

> **Up Next:** Part 5 — best title, summaries and passages that never state their main idea.`
    }
  ]
};
