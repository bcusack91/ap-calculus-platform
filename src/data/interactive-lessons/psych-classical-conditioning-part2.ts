export const psychClassicalPart2Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Classical Conditioning

      **Part 2 of 7 — Key Terminology: UCS, UCR, CS, CR**

      Mastering these four terms is essential — nearly every classical conditioning question on the AP exam asks you to identify them in a novel scenario.

      ### Core Definitions
      - **UCS (unconditioned stimulus)**: a stimulus that naturally and automatically triggers a response without prior learning (e.g., food)
      - **UCR (unconditioned response)**: the unlearned, natural response to the UCS (e.g., salivation to food)
      - **CS (conditioned stimulus)**: a previously neutral stimulus that, after pairing with the UCS, triggers a conditioned response (e.g., bell)
      - **CR (conditioned response)**: the learned response to the CS (e.g., salivation to bell)

      ### Concrete Real-World Example
      A dog hears a can opener (neutral stimulus) before receiving food (UCS) every day. Eventually, the can opener sound alone (now CS) causes the dog to salivate (CR). The salivation to food was the UCR; the salivation to the can opener is the CR.

      ### Why This Matters
      The AP exam will give you a scenario and ask you to label the UCS, UCR, CS, and CR. Getting these right is worth easy points — but confusing them is a common mistake.
      `
    },
    {
      id: 'class2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Pavlov\'s experiment, the food that naturally caused the dogs to salivate is called the:',
            options: [
              'UCS (unconditioned stimulus) — it naturally triggers salivation without learning',
              'CS (conditioned stimulus) — it was paired with the bell',
              'CR (conditioned response) — it is the learned response',
              'UCR (unconditioned response) — it is the natural response'
            ],
            correctAnswer: 0,
            explanation: 'Food is the UCS because it naturally and automatically causes salivation. No learning is required. The UCS is always the stimulus that works without conditioning.'
          },
          {
            question: 'After conditioning, a dog salivates when it hears a bell. The salivation to the bell is the:',
            options: [
              'CR (conditioned response) — a learned response to the conditioned stimulus',
              'UCR (unconditioned response) — a natural response to the bell',
              'UCS (unconditioned stimulus) — the bell causes a natural response',
              'CS (conditioned stimulus) — the bell triggers learning'
            ],
            correctAnswer: 0,
            explanation: 'Salivation to the bell is the CR because it was learned through conditioning. Before conditioning, the bell produced no salivation. The same physical response (salivation) is a UCR when triggered by food and a CR when triggered by the bell.'
          }
        ]
      }
    },
    {
      id: 'class2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Identifying Components in Any Scenario

      The key to labeling components correctly is asking two questions: **(1) Was learning required?** and **(2) Is this a stimulus or a response?**

      | Term | Stimulus or Response? | Learned or Natural? | How to Identify It |
      |---|---|---|---|
      | UCS | Stimulus | Natural (unlearned) | What naturally causes the response? |
      | UCR | Response | Natural (unlearned) | What is the automatic reaction to the UCS? |
      | CS | Stimulus | Learned (conditioned) | What new stimulus triggers the response after pairing? |
      | CR | Response | Learned (conditioned) | What is the response to the CS? |

      ### Worked Example: Thunder and Lightning

      | Component | In This Scenario |
      |---|---|
      | UCS | Loud thunder (naturally startling) |
      | UCR | Flinching/fear in response to thunder |
      | Neutral stimulus → CS | Lightning flash (originally no fear response; after pairing, causes fear) |
      | CR | Flinching/fear in response to lightning alone |

      ### Common Confusion: UCR vs. CR
      The UCR and CR are often the same physical response (e.g., salivation, fear), but they differ in what triggers them. The UCR is triggered by the UCS (natural); the CR is triggered by the CS (learned).
      `
    },
    {
      id: 'class2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What is the term for a stimulus that naturally triggers a response without learning? (abbreviation)

      2) What is the term for a learned response to a previously neutral stimulus? (abbreviation)

      3) What does a neutral stimulus become after repeated pairing with the UCS? (abbreviation)

      Use the exact abbreviation from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['UCS', 'CR', 'CS'],
        hint1: 'Starts with: U',
        hint2: 'Starts with: C',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: UCS (unconditioned stimulus — naturally triggers response), CR (conditioned response — learned reaction to CS), and CS (conditioned stimulus — the neutral stimulus after pairing).'
      }
    },
    {
      id: 'class2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A stimulus that naturally and automatically triggers a response:',
            options: ['CS (conditioned stimulus)', 'UCS (unconditioned stimulus)', 'CR (conditioned response)', 'UCR (unconditioned response)']
          },
          {
            label: 'The unlearned, natural response to a UCS:',
            options: ['CR (conditioned response)', 'CS (conditioned stimulus)', 'UCR (unconditioned response)', 'UCS (unconditioned stimulus)']
          },
          {
            label: 'A previously neutral stimulus that now triggers a learned response:',
            options: ['UCR (unconditioned response)', 'CS (conditioned stimulus)', 'UCS (unconditioned stimulus)', 'CR (conditioned response)']
          }
        ],
        correctAnswers: ['UCS (unconditioned stimulus)', 'UCR (unconditioned response)', 'CS (conditioned stimulus)'],
        hint1: '"Unconditioned" means no learning is needed — it happens naturally.',
        hint2: 'A response is what the organism does; a stimulus is what the organism encounters.',
        hint3: '"Conditioned" means it was learned through pairing.',
        explanation: 'UCS naturally triggers responses. UCR is the natural reaction. CS is the previously neutral stimulus that gained its power through pairing. The key distinction: "unconditioned" = natural/unlearned, "conditioned" = learned.'
      }
    },
    {
      id: 'class2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - The CR and UCR are often the same behavior (e.g., salivation), but they are NOT the same thing — the trigger is different.
      - The CS was not always a conditioned stimulus — it started as a neutral stimulus and only became a CS after pairing.
      - "Unconditioned" does NOT mean "without conditions" — it means "without conditioning/learning."
      - Students often confuse stimulus and response — remember: stimuli are things in the environment; responses are what the organism does.

      ### AP Strategy Moves
      - For any scenario, first identify what is natural/unlearned (UCS → UCR), then identify what was learned (CS → CR).
      - Use the "before and after" test: Before conditioning, did this stimulus cause this response? If no → it's a CS/CR pair.
      - On free-response, always label all four components explicitly and connect each to the scenario.
      - Watch for the word "neutral" — it signals the stimulus that will become the CS.
      `
    },
    {
      id: 'class2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Every time a nurse gives a child a shot (causing pain), the nurse is wearing a blue uniform. Eventually, the child cries when seeing anyone in a blue uniform. In this scenario, the blue uniform is the:',
            options: [
              'CS — it was neutral but became associated with pain',
              'UCS — it naturally causes crying',
              'UCR — it is the natural response to pain',
              'CR — it is the learned crying behavior'
            ],
            correctAnswer: 0,
            explanation: 'The blue uniform started as a neutral stimulus (it didn\'t cause crying before). After repeated pairing with the shot (UCS), the uniform became a CS that now triggers crying (CR). The shot is the UCS, and crying from the shot is the UCR.'
          },
          {
            question: 'A researcher conditions a rat to flinch at a light by pairing the light with a loud noise. After conditioning, the rat flinches at the light alone. The flinching to the loud noise is the _____, and the flinching to the light is the _____.',
            options: [
              'UCR; CR — flinching to noise is natural, flinching to light is learned',
              'CR; UCR — flinching to noise is learned, flinching to light is natural',
              'UCS; CS — noise is tbe natural stimulus, light is the learned stimulus',
              'CS; UCS — light was paired, noise was unconditioned'
            ],
            correctAnswer: 0,
            explanation: 'Flinching to a loud noise is natural (UCR) — no learning required. Flinching to the light is learned through conditioning (CR). The noise is the UCS, the light is the CS. Same behavior (flinching), different labels based on the trigger.'
          }
        ]
      }
    }
  ]
}
