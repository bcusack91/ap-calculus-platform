export const psychClassicalPart1Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class1-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Classical Conditioning

      **Part 1 of 7 — Pavlov's Discovery**

      In this part, you will learn how Ivan Pavlov accidentally discovered one of the most fundamental forms of learning while studying digestion in dogs. Focus on the mechanism of learning by association.

      ### Core Definitions
      - **Ivan Pavlov**: Russian physiologist who discovered classical conditioning while studying digestion in dogs
      - **learning**: a relatively permanent change in behavior due to experience
      - **classical conditioning**: a type of learning in which an organism comes to associate two stimuli (learning by association)

      ### Concrete Real-World Example
      A child visits the dentist and receives a painful injection. Over repeated visits, the child begins to feel anxious just seeing the dentist's white coat. The coat (originally neutral) has become associated with pain — this is classical conditioning in action.

      ### Why This Matters
      Classical conditioning appears on nearly every AP Psychology exam. You must be able to identify examples, label the components, and distinguish it from operant conditioning.
      `
    },
    {
      id: 'class1-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Pavlov originally set out to study digestion, but noticed his dogs began salivating before food was presented. This accidental finding led to the discovery of:',
            options: [
              'classical conditioning — learning through association between two stimuli',
              'operant conditioning — learning through consequences',
              'observational learning — learning by watching others',
              'insight learning — sudden realization of a solution'
            ],
            correctAnswer: 0,
            explanation: 'Pavlov discovered classical conditioning: the dogs learned to associate a neutral stimulus (bell/footsteps) with food, producing a learned salivation response. This is associative learning involving involuntary responses.'
          },
          {
            question: 'Which statement best captures the psychological definition of "learning"?',
            options: [
              'A relatively permanent change in behavior due to experience',
              'Any change in behavior, including temporary changes from fatigue or drugs',
              'The ability to memorize facts for an exam',
              'A biological maturation process that occurs with age'
            ],
            correctAnswer: 0,
            explanation: '"Learning" in psychology means a relatively permanent change in behavior due to experience. Temporary changes (fatigue, drugs) and maturational changes (puberty) do not count as learning.'
          }
        ]
      }
    },
    {
      id: 'class1-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Pavlov's Experiment Step by Step

      Understanding the exact sequence of Pavlov's experiment is essential for AP exam scenarios.

      | Phase | What Happened | Result |
      |---|---|---|
      | Before conditioning | Bell rings (neutral stimulus) | No salivation |
      | Before conditioning | Food presented (UCS) | Salivation (UCR) |
      | During conditioning | Bell + food paired repeatedly | Salivation occurs |
      | After conditioning | Bell rings alone (now a CS) | Salivation (now a CR) |

      ### Key Insight
      The bell started as a **neutral stimulus** — it produced no salivation. After repeated pairing with food, it became a **conditioned stimulus** that triggered a **conditioned response**.

      | Term | Meaning | Example in Pavlov's Study |
      |---|---|---|
      | Neutral stimulus | A stimulus that initially produces no relevant response | Bell before conditioning |
      | Associative learning | Learning that two events occur together | Bell predicts food |
      | Involuntary response | A response not under conscious control | Salivation |

      ### Classical vs. Operant (Preview)
      Classical conditioning involves **involuntary, automatic** responses. Operant conditioning (Part 5+) involves **voluntary behaviors** shaped by consequences. The AP exam frequently asks you to distinguish between them.
      `
    },
    {
      id: 'class1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What type of learning involves associating two stimuli so that one comes to trigger a response?

      2) Who discovered classical conditioning while studying digestion in dogs?

      3) What is the psychological term for a relatively permanent change in behavior due to experience?

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['classical conditioning', 'Pavlov', 'learning'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: P',
        hint3: 'Starts with: L',
        explanation: 'Expected answers: classical conditioning (learning by association), Pavlov (Russian physiologist), and learning (relatively permanent behavior change due to experience).'
      }
    },
    {
      id: 'class1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select what Pavlov was originally studying when he discovered classical conditioning:',
            options: ['emotion', 'memory', 'digestion', 'intelligence']
          },
          {
            label: 'Classical conditioning involves what type of responses?',
            options: ['voluntary behaviors', 'involuntary/automatic responses', 'conscious decisions', 'cognitive processes']
          },
          {
            label: 'Select what a neutral stimulus becomes after repeated pairing with a UCS:',
            options: ['unconditioned stimulus', 'conditioned stimulus', 'unconditioned response', 'neutral response']
          }
        ],
        correctAnswers: ['digestion', 'involuntary/automatic responses', 'conditioned stimulus'],
        hint1: 'Pavlov was a physiologist — think about what physiological process he studied.',
        hint2: 'Salivation, fear, and nausea are all examples of this type of response.',
        hint3: 'The neutral stimulus gains the power to trigger a response — it becomes "conditioned."',
        explanation: 'Pavlov studied digestion. Classical conditioning involves involuntary/automatic responses (unlike operant conditioning). A neutral stimulus becomes a conditioned stimulus (CS) after being paired with an unconditioned stimulus (UCS).'
      }
    },
    {
      id: 'class1-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Pavlov did NOT set out to study learning — his discovery was accidental while researching digestion.
      - Classical conditioning is NOT about rewards and punishments — that is operant conditioning.
      - The conditioned response (CR) is often similar to the UCR but not always identical in strength or form.
      - Learning does NOT require awareness — classical conditioning can occur without conscious knowledge.

      ### AP Strategy Moves
      - When a scenario describes an involuntary response (fear, salivation, nausea) triggered by a previously neutral stimulus, think classical conditioning.
      - Always identify all four components: UCS, UCR, CS, CR (covered in Part 2).
      - Be ready to distinguish classical from operant conditioning — the AP exam tests this distinction frequently.
      - For free-response questions, define the term first, then apply it to the specific scenario given.
      `
    },
    {
      id: 'class1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Maria feels nauseous every time she smells a particular perfume because she once got carsick while her mother was wearing it. This is an example of:',
            options: [
              'classical conditioning — the perfume became associated with nausea',
              'operant conditioning — Maria is being punished for smelling perfume',
              'observational learning — Maria learned this by watching someone else',
              'instinct — nausea to perfume is an innate biological response'
            ],
            correctAnswer: 0,
            explanation: 'This is classical conditioning: a neutral stimulus (perfume) was paired with an unconditioned stimulus (motion sickness), and now the perfume alone triggers nausea. The response is involuntary and automatic.'
          },
          {
            question: 'A researcher discovers that after repeatedly pairing a tone with a puff of air to the eye, a rabbit begins blinking at the tone alone. Why does this qualify as learning?',
            options: [
              'It represents a relatively permanent change in behavior due to experience',
              'The rabbit chose to blink, demonstrating voluntary control',
              'The blinking is an innate reflex that requires no experience',
              'The behavior is temporary and disappears immediately'
            ],
            correctAnswer: 0,
            explanation: 'Learning is defined as a relatively permanent change in behavior due to experience. The rabbit now blinks to the tone (a new behavior) because of the experience of tone-air puff pairings. This meets both criteria: permanent change + due to experience.'
          }
        ]
      }
    }
  ]
}
