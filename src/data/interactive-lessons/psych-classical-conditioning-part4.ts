export const psychClassicalPart4Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Classical Conditioning

      **Part 4 of 7 — Generalization & Discrimination**

      After conditioning, organisms don't just respond to the exact CS — they often respond to similar stimuli too. This part covers how conditioned responses spread and how they can be narrowed down.

      ### Core Definitions
      - **stimulus generalization**: the tendency to respond to stimuli similar to the CS (e.g., a dog conditioned to a 1000 Hz tone also salivates to an 800 Hz tone)
      - **stimulus discrimination**: the learned ability to distinguish between the CS and similar stimuli that do not signal the UCS
      - **Little Albert experiment**: John B. Watson's 1920 study conditioning a baby to fear a white rat, demonstrating both conditioning and generalization
      - **generalization gradient**: the pattern showing that responses are strongest to the CS and weaken as stimuli become less similar

      ### Concrete Real-World Example
      A child bitten by a German Shepherd (UCS → fear UCR) may generalize fear to all dogs (generalization). Over time, positive experiences with friendly small dogs teach the child to discriminate — fearing only large dogs resembling the original (discrimination).

      ### Why This Matters
      The AP exam often presents scenarios involving phobias and asks you to identify generalization vs. discrimination. The Little Albert experiment is one of AP Psychology's most frequently tested studies.
      `
    },
    {
      id: 'class4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Little Albert was conditioned to fear a white rat. He then showed fear of a white rabbit, a fur coat, and a Santa Claus mask. This demonstrates:',
            options: [
              'stimulus generalization — Albert responded to stimuli similar to the original CS',
              'stimulus discrimination — Albert learned to distinguish between stimuli',
              'extinction — Albert\'s fear faded over time',
              'higher-order conditioning — new stimuli were paired with the rat'
            ],
            correctAnswer: 0,
            explanation: 'Albert\'s fear spread to similar white/furry objects — this is generalization. He responded to stimuli that resembled the original CS (white rat) but were not identical to it.'
          },
          {
            question: 'A dog conditioned to salivate to a 1000 Hz tone does NOT salivate to a 500 Hz tone. This shows:',
            options: [
              'stimulus discrimination — the dog distinguishes the CS from a dissimilar stimulus',
              'stimulus generalization — the dog responds to similar tones',
              'extinction — the response has been eliminated',
              'spontaneous recovery — the response returned after a rest'
            ],
            correctAnswer: 0,
            explanation: 'The dog has learned to discriminate: it responds to the specific CS (1000 Hz) but not to a sufficiently different stimulus (500 Hz). Discrimination is the opposite of generalization.'
          }
        ]
      }
    },
    {
      id: 'class4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Generalization vs. Discrimination

      | Concept | Definition | Example | Adaptive Value |
      |---|---|---|---|
      | Generalization | Responding to stimuli similar to the CS | Fear of all dogs after one bite | Protects against similar threats |
      | Discrimination | Responding only to the specific CS | Fearing only German Shepherds | Prevents unnecessary fear responses |
      | Generalization gradient | Response strength decreases as similarity to CS decreases | Most fear for German Shepherd, less for Labrador, none for Chihuahua | Nature's "better safe than sorry" |

      ### The Little Albert Experiment: Key Details for AP

      | Element | Detail |
      |---|---|
      | Researcher | John B. Watson (and Rosalie Rayner) |
      | Year | 1920 |
      | Subject | 9-month-old "Albert B." |
      | UCS | Loud noise (striking steel bar with hammer) |
      | UCR | Fear/crying to loud noise |
      | CS | White rat (originally neutral — Albert played with it) |
      | CR | Fear/crying at sight of white rat |
      | Generalization | Fear spread to rabbit, fur coat, Santa Claus mask, dog |
      | Ethical issues | No informed consent, no debriefing, fear was never extinguished |

      ### Why the Experiment Matters
      Watson demonstrated that emotional responses (fear) can be classically conditioned and that they generalize. This supported behaviorism's claim that most behavior is learned, not innate.
      `
    },
    {
      id: 'class4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What is the tendency to respond to stimuli similar to the CS called?

      2) What is the learned ability to respond only to the specific CS and not to similar stimuli?

      3) Who conducted the Little Albert experiment?

      Use the exact vocabulary term or name from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['stimulus generalization', 'stimulus discrimination', 'Watson'],
        hint1: 'Two words, starts with: S G',
        hint2: 'Two words, starts with: S D',
        hint3: 'Starts with: W',
        explanation: 'Expected answers: stimulus generalization (responding to similar stimuli), stimulus discrimination (responding only to the CS), and Watson (John B. Watson conducted the Little Albert study).'
      }
    },
    {
      id: 'class4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A child bitten by a dog now fears all dogs:',
            options: ['stimulus discrimination', 'stimulus generalization', 'extinction', 'spontaneous recovery']
          },
          {
            label: 'After learning, a dog salivates to a 1000 Hz tone but NOT to a 600 Hz tone:',
            options: ['stimulus generalization', 'stimulus discrimination', 'acquisition', 'higher-order conditioning']
          },
          {
            label: 'Watson conditioned Little Albert to fear a white rat. This study demonstrated:',
            options: ['classical conditioning of emotional responses', 'operant conditioning of voluntary behavior', 'observational learning through modeling', 'biological preparedness for all fears']
          }
        ],
        correctAnswers: ['stimulus generalization', 'stimulus discrimination', 'classical conditioning of emotional responses'],
        hint1: 'The fear spreads to similar stimuli — this is the "spread" concept.',
        hint2: 'The dog differentiates between the CS and a non-CS — this is the "narrowing" concept.',
        hint3: 'Watson was a strict behaviorist who believed emotions are learned.',
        explanation: 'Fear of all dogs = generalization (similar stimuli trigger the CR). Salivating only to the specific tone = discrimination. Watson demonstrated that fear is a classically conditioned emotional response.'
      }
    },
    {
      id: 'class4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Generalization is NOT the same as higher-order conditioning — generalization involves similar stimuli, while higher-order conditioning involves pairing a CS with a new neutral stimulus.
      - Discrimination does NOT require extinction — the organism learns to respond to the CS but not similar stimuli through differential reinforcement.
      - Little Albert's fear was never extinguished — Watson and Rayner did not complete the study, which raises major ethical concerns.
      - Generalization is biologically adaptive — it's better to fear all snakes after one snake bite than to fear only the exact snake.

      ### AP Strategy Moves
      - If a question describes fear/response spreading to similar objects, it's generalization.
      - If a question describes responding to one stimulus but NOT a similar one, it's discrimination.
      - Know the Little Albert details cold: UCS (loud noise), CS (white rat), CR (fear), and that fear generalized to other furry/white objects.
      - Be ready to discuss the ethical problems with the Little Albert study (no consent, no debriefing, permanent harm).
      `
    },
    {
      id: 'class4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A veteran who experienced combat develops anxiety when hearing fireworks. The veteran also becomes anxious hearing a car backfire and thunder. The anxiety response to thunder is best explained by:',
            options: [
              'stimulus generalization — thunder sounds similar to the combat sounds (CS)',
              'stimulus discrimination — the veteran distinguishes between different sounds',
              'extinction — the anxiety is fading over time',
              'higher-order conditioning — thunder was paired with fireworks'
            ],
            correctAnswer: 0,
            explanation: 'Thunder sounds similar to combat explosions (the original CS that was paired with danger). The veteran\'s anxiety generalizes to similar loud sounds. This is why PTSD often involves generalized triggers.'
          },
          {
            question: 'A researcher wants to study whether Watson\'s Little Albert experiment could be replicated today. What is the MOST significant ethical barrier?',
            options: [
              'Deliberately conditioning fear in an infant violates informed consent and causes potential lasting harm',
              'The experiment would take too long to complete',
              'Modern infants would not display fear responses',
              'Institutional review boards only approve studies on adults'
            ],
            correctAnswer: 0,
            explanation: 'Modern ethical standards (APA guidelines) require informed consent, protection from harm, and debriefing. Intentionally conditioning a lasting fear in an infant — who cannot consent — violates multiple ethical principles. This is a key AP exam point about research ethics.'
          }
        ]
      }
    }
  ]
}
