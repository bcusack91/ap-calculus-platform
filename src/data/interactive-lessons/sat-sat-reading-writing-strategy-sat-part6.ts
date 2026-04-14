export const satRWStrategyPart6Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw6-intro',
      type: 'text' as const,
      content: `# Rhetorical Synthesis

**Part 6 of 7 — Notes-Based Questions**

A new question type on the Digital SAT presents you with bullet-point **notes** from a student's research and asks you to write a sentence that accomplishes a specific goal.

### Format

You'll see something like:

**Notes:**
- The James Webb Space Telescope (JWST) launched in December 2021
- JWST orbits the sun at Lagrange Point 2, about 1 million miles from Earth
- Its primary mirror is 6.5 meters in diameter, compared to Hubble's 2.4 meters  
- JWST primarily observes infrared light, while Hubble observes visible and ultraviolet light

**Question:** "The student wants to emphasize a difference between JWST and Hubble. Which choice most effectively uses the notes to accomplish this goal?"

### Strategy

1. **Read the goal carefully** — What does the question ask you to do?
2. **Identify which notes are relevant** to that specific goal
3. **Eliminate choices** that accomplish a DIFFERENT goal

### Common Goals

| Goal | What to Look For |
|---|---|
| "Emphasize a difference" | Answer must COMPARE two things |
| "Present a key finding" | Answer must state a result or discovery |
| "Introduce the topic to a new audience" | Answer should be general/accessible |
| "Support the claim that X" | Answer must directly support X |

### SAT Trap ⚠️

All four answer choices will use information from the notes. The trap is choosing an answer that's **factually correct** but doesn't **accomplish the stated goal**. Always re-read the goal before selecting your answer.`
    },
    {
      id: 'rw6-quiz',
      type: 'multiple-choice' as const,
      content: '**Rhetorical Synthesis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Notes: Prairie dogs live in underground burrow systems called "towns." Some towns contain thousands of individuals. Prairie dogs use distinct alarm calls for different predators—one call for hawks, another for coyotes. Researchers believe this represents a sophisticated language system. Goal: "Emphasize the complexity of prairie dog communication."',
            options: ['"Prairie dogs use distinct alarm calls to differentiate between predators such as hawks and coyotes, which researchers consider a sophisticated language system."', '"Prairie dogs live in large underground burrow systems called towns that can contain thousands of individuals."', '"Researchers have studied prairie dogs to understand their underground living habitat and social behavior."', '"Prairie dogs, which live in underground towns, are found throughout the American Great Plains."'],
            correctAnswer: 0,
            explanation: 'The goal is about communication complexity. Only option A discusses alarm calls and language sophistication. The other options focus on habitat (B, D) or are too general (C).'
          },
          {
            question: 'When answering rhetorical synthesis questions, what should you do FIRST?',
            options: ['Underline the specific goal stated in the question', 'Read all the notes carefully', 'Look at the answer choices', 'Identify the main topic of the notes'],
            correctAnswer: 0,
            explanation: 'The goal is everything in these questions. All answers will be factually based on the notes, but only one achieves the stated goal. Reading the goal first focuses your evaluation.'
          }
        ]
      }
    },
    {
      id: 'rw6-text2',
      type: 'text' as const,
      content: `## Deep Dive: Mastering Rhetorical Synthesis

### Worked Example 1: Matching Goals to Answers

**Notes:**
- Coral reefs support ~25% of marine species despite covering <1% of the ocean floor
- Rising ocean temperatures cause coral bleaching
- Some coral species can adapt to warmer waters
- Marine biologists are studying heat-resistant coral strains

| Goal | Best Answer Strategy |
|---|---|
| "Emphasize an environmental threat" | Focus on bleaching + temperature rise |
| "Highlight coral reefs' ecological importance" | Focus on 25% of species + <1% coverage |
| "Present a reason for optimism" | Focus on adaptation + heat-resistant research |
| "Introduce the topic to a general audience" | Combine importance + broad overview |

### Worked Example 2: Eliminating Wrong Answers

| Answer Choice | Goal: "Emphasize an environmental threat" | Why? |
|---|---|---|
| "Coral reefs support 25% of marine species." | ❌ Wrong goal | This is importance, not threat |
| "Rising temperatures cause bleaching, threatening reef ecosystems." | ✅ Correct | Directly addresses threat |
| "Some corals can adapt to warmer waters." | ❌ Wrong goal | This is optimism, not threat |
| "Biologists study heat-resistant strains." | ❌ Wrong goal | This is research, not threat |

### The 3-Step Rhetorical Synthesis Method

| Step | Action | Example |
|---|---|---|
| 1. Read the goal | Underline key verbs: "emphasize," "compare," "introduce" | "Emphasize a **difference**" |
| 2. Filter notes | Which notes relate to that goal? | Notes mentioning both JWST AND Hubble |
| 3. Match & eliminate | Which answer uses those notes for that purpose? | Answer comparing mirror sizes |

### Common Goal Keywords

| Keyword | Meaning | What the Answer Should Do |
|---|---|---|
| Emphasize | Stress / highlight | Focus narrowly on one aspect |
| Compare / contrast | Show similarities or differences | Mention BOTH items |
| Introduce | Give overview | Be general and accessible |
| Support the claim that… | Provide evidence | Directly back up the stated claim |
| Present a finding | State a result | Include research outcome or data |`
    },
    {
      id: 'rw6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Rhetorical Synthesis** 🎯',
      exercise: {
        questions: [
          {
            question: 'Notes: Octopuses have three hearts and blue blood. They can change color and texture in milliseconds. A 2021 study found octopuses throw debris at other octopuses they seem irritated with. Octopuses have been observed using coconut shells as portable shelters. Goal: "Present evidence of intelligent behavior."',
            options: ['"Octopuses demonstrate intelligence by using coconut shells as portable shelters and deliberately throwing debris at other octopuses."', '"With three hearts and blue blood, octopuses are among the most physiologically unique marine animals."', '"Octopuses can change color and texture in milliseconds, a remarkable camouflage ability."', '"A 2021 study documented several notable behaviors in octopuses, including debris throwing."'],
            correctAnswer: 0,
            explanation: 'The goal is "evidence of intelligent behavior." Tool use (coconut shells) and deliberate social behavior (throwing debris) are intelligence indicators. B discusses physiology, C discusses camouflage, and D is too vague about intelligence.'
          },
          {
            question: 'A student is writing about solar energy. Notes mention cost decreases, efficiency improvements, environmental benefits, and land use concerns. Goal: "Acknowledge a limitation of solar energy." Which type of information should the answer focus on?',
            options: ['Land use concerns', 'Cost decreases', 'Efficiency improvements', 'Environmental benefits'],
            correctAnswer: 0,
            explanation: '"Acknowledge a limitation" means address a drawback. Land use concerns are the only negative aspect in the notes. Cost decreases, efficiency improvements, and environmental benefits are all positives.'
          },
          {
            question: 'Why does the SAT make all four answer choices factually correct in rhetorical synthesis questions?',
            options: ['To test whether you can match information to a specific rhetorical purpose', 'To make the questions easier by removing factual errors', 'To test reading comprehension of the notes', 'To ensure students read all the notes carefully'],
            correctAnswer: 0,
            explanation: 'Rhetorical synthesis tests PURPOSE, not accuracy. All answers are true based on the notes — the skill is selecting the one that achieves the stated GOAL. This is what makes goal-reading the critical first step.'
          }
        ]
      }
    },
    {
      id: 'rw6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Rhetorical Synthesis Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'First step: read the [goal|notes|answers|title]',
          '"Emphasize a difference" requires mentioning [both items|one item|all notes|the main topic]',
          'All four answers will be factually [correct|incorrect|similar|identical]',
          'The trap is choosing an answer that is correct but doesn\'t match the [goal|notes|format|tone]'
        ],
        correctAnswers: ['goal', 'both items', 'correct', 'goal'],
        hint1: 'The goal determines which answer is right.',
        hint2: 'You can\'t compare without mentioning both.',
        hint3: 'All answers come from the notes — all are factually accurate.',
        explanation: 'Goal first, always. Comparisons need both items mentioned. All answers are factually correct — the differentiator is purpose. The classic trap: correct info, wrong goal.'
      }
    },
    {
      id: 'rw6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Concept | Key Rule |
|---|---|
| Question format | Notes + goal → match answer to goal |
| First step | Always read the goal/purpose first |
| Common trap | Factually correct answer that serves wrong goal |
| "Emphasize" | Focus narrowly on one aspect |
| "Compare/contrast" | Must mention both items being compared |
| "Introduce" | Be general and accessible |
| 3-step method | Goal → filter notes → match & eliminate |

*Next: R&W Module Review & Test Strategy →*`
    }
  ]
};