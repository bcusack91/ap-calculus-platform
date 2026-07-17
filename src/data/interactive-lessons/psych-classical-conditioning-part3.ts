export const psychClassicalPart3Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Classical Conditioning

      **Part 3 of 7 — Acquisition & Extinction**

      Now that you know the four components, this part covers how associations are built and broken — and why they sometimes come back.

      ### Core Definitions
      - **acquisition**: the initial learning phase when the CS-UCS pairing builds the association
      - **extinction**: the gradual weakening of the CR when the CS is presented repeatedly without the UCS
      - **spontaneous recovery**: the reappearance of an extinguished CR after a rest period
      - **higher-order (second-order) conditioning**: when a CS is paired with a new neutral stimulus, turning it into a second CS

      ### Concrete Real-World Example
      A dog learns to salivate at a bell paired with food (acquisition). If the bell rings many times without food, salivation fades (extinction). After a break, the dog hears the bell again and briefly salivates (spontaneous recovery) — showing the association was suppressed, not erased.

      ### Why This Matters
      AP questions often test whether you understand that extinction does NOT erase learning — it only suppresses the response. Spontaneous recovery proves the original association still exists.
      `
    },
    {
      id: 'class3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A dog has been conditioned to salivate at a tone. The researcher then presents the tone 30 times without food, and salivation gradually stops. This process is called:',
            options: [
              'extinction — the CR weakens when the CS is presented without the UCS',
              'acquisition — the CS-UCS pairing is being strengthened',
              'spontaneous recovery — the CR reappears after a rest',
              'higher-order conditioning — the CS is being paired with a new stimulus'
            ],
            correctAnswer: 0,
            explanation: 'Extinction occurs when the CS (tone) is repeatedly presented without the UCS (food), causing the CR (salivation) to gradually weaken and stop.'
          },
          {
            question: 'Two days after extinction, the dog hears the tone again and briefly salivates. This is:',
            options: [
              'spontaneous recovery — the extinguished CR reappears after a rest period',
              'reacquisition — the dog was reconditioned',
              'generalization — the dog responds to a similar stimulus',
              'higher-order conditioning — a new association formed'
            ],
            correctAnswer: 0,
            explanation: 'Spontaneous recovery is the temporary return of the CR after a rest period following extinction. It demonstrates that extinction suppresses rather than erases the original learning.'
          }
        ]
      }
    },
    {
      id: 'class3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: The Timeline of Classical Conditioning

      | Phase | What Happens | CR Strength |
      |---|---|---|
      | **Acquisition** | CS + UCS paired repeatedly | ↑ Increasing |
      | **Extinction** | CS presented alone (no UCS) | ↓ Decreasing |
      | **Rest period** | No CS or UCS presented | — Stable |
      | **Spontaneous recovery** | CS presented again after rest | ↑ Brief return (weaker than original) |
      | **Re-extinction** | CS alone again | ↓ Faster decrease than first extinction |

      ### Higher-Order Conditioning Explained

      | Step | What Happens | Example |
      |---|---|---|
      | 1st order | Bell $(CS_{1})$ + Food (UCS) → Salivation | Dog salivates to bell |
      | 2nd order | Light (NS) + Bell $(CS_{1})$ → Salivation | Dog salivates to light |
      | Result | Light becomes $CS_{2}$ | No food was ever paired with the light |

      ### Key Insight
      Higher-order conditioning is weaker and extinguishes faster than first-order conditioning. The AP exam may ask you to explain why — the answer is that $CS_{2}$ was never directly paired with the UCS.
      `
    },
    {
      id: 'class3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What is the process of the CR gradually weakening when the CS is presented without the UCS?

      2) What is it called when an extinguished CR reappears after a rest period?

      3) What is the initial learning phase called when the CS-UCS pairing is first established?

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['extinction', 'spontaneous recovery', 'acquisition'],
        hint1: 'Starts with: E',
        hint2: 'Two words, starts with: S',
        hint3: 'Starts with: A',
        explanation: 'Expected answers: extinction (CR weakens without UCS), spontaneous recovery (extinguished CR returns after rest), and acquisition (initial CS-UCS pairing phase).'
      }
    },
    {
      id: 'class3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'CS presented repeatedly without UCS → CR weakens:',
            options: ['acquisition', 'extinction', 'spontaneous recovery', 'higher-order conditioning']
          },
          {
            label: 'Extinguished CR reappears after a rest period:',
            options: ['spontaneous recovery', 'acquisition', 'extinction', 'generalization']
          },
          {
            label: 'A CS is paired with a new neutral stimulus, creating a second CS:',
            options: ['extinction', 'spontaneous recovery', 'higher-order conditioning', 'acquisition']
          }
        ],
        correctAnswers: ['extinction', 'spontaneous recovery', 'higher-order conditioning'],
        hint1: 'The CR fades when the reinforcing UCS is removed.',
        hint2: 'Time off allows the suppressed association to temporarily resurface.',
        hint3: 'This creates a chain: NS → $CS_{2}$ through pairing with $CS_{1}$.',
        explanation: 'Extinction = CR weakens without UCS. Spontaneous recovery = CR returns after rest. Higher-order conditioning = new CS created by pairing with an existing CS, without the original UCS.'
      }
    },
    {
      id: 'class3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Extinction does NOT erase the learning — it suppresses the response. Spontaneous recovery proves the association still exists in memory.
      - Spontaneous recovery is typically weaker than the original CR and fades quickly if the UCS is not reintroduced.
      - Higher-order conditioning does NOT require the UCS to be present — only an established $CS_{1}$ is needed.
      - Re-acquisition after extinction is faster than the original learning, further proving extinction doesn't erase the association.

      ### AP Strategy Moves
      - If a question describes a response that "comes back" after a break, think spontaneous recovery.
      - If a question describes response fading without reinforcement, think extinction.
      - Timeline-based questions are common: be ready to sketch acquisition → extinction → spontaneous recovery.
      - Higher-order conditioning is a less common but high-value AP topic — know the chain of associations.
      `
    },
    {
      id: 'class3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A therapist treats a patient\'s spider phobia using exposure therapy. After many sessions of seeing spiders without any negative experience, the patient no longer feels fearful. Three months later, the patient encounters a spider and briefly feels a burst of anxiety. This brief return of fear is:',
            options: [
              'spontaneous recovery — the extinguished fear briefly returns after a rest period',
              'reacquisition — the patient was reconditioned by seeing the spider',
              'generalization — the patient is responding to a new stimulus',
              'higher-order conditioning — a new association was formed'
            ],
            correctAnswer: 0,
            explanation: 'This is spontaneous recovery: after extinction (therapy eliminated the fear) and a rest period (3 months), the CR (anxiety) briefly reappears. It will likely fade quickly without the UCS being reintroduced.'
          },
          {
            question: 'A researcher conditions a dog to salivate to a bell $(CS_{1})$. Then the researcher pairs a light with the bell (without food). The dog begins to salivate slightly at the light. This is:',
            options: [
              'higher-order conditioning — the light became a $CS_{2}$ through pairing with $CS_{1}$',
              'acquisition — the dog is learning to associate light with food',
              'generalization — the dog is responding to a similar stimulus',
              'spontaneous recovery — the CR returned after extinction'
            ],
            correctAnswer: 0,
            explanation: 'This is higher-order (second-order) conditioning. The light (NS) was paired with the bell $(CS_{1})$, making the light a $CS_{2}$. Note: food (UCS) was never paired with the light directly. The response will be weaker and extinguish faster than the original bell-salivation association.'
          }
        ]
      }
    }
  ]
}
