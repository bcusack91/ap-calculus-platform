export const psychClassicalPart6Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class6-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Classical Conditioning

      **Part 6 of 7 — Problem-Solving Workshop**

      This part trains you to analyze novel scenarios like the AP exam requires. You'll practice identifying conditioning components, designing experiments, and predicting outcomes.

      ### Core Skills
      - **Identifying UCS, UCR, CS, CR in novel scenarios**: the most common AP question type for this topic
      - **Designing classical conditioning experiments**: knowing what controls and variables to include
      - **Predicting generalization and discrimination**: determining how a conditioned response will spread or narrow
      - **Analyzing real-world conditioning**: applying concepts to everyday situations like advertising, phobias, and therapy

      ### The AP Question Formula
      Most AP classical conditioning questions follow this pattern:
      1. A scenario describes a stimulus paired with another stimulus
      2. An organism develops a new response to the first stimulus
      3. You must label the components and/or predict what happens next

      ### Why This Matters
      The AP exam rarely asks you to simply define terms — it asks you to APPLY them. This workshop builds that skill.
      `
    },
    {
      id: 'class6-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A cat comes running to the kitchen when it hears the electric can opener, because the sound has been paired with receiving food. Identify the CS and CR:',
            options: [
              'CS = can opener sound; CR = running to kitchen',
              'CS = food; CR = running to kitchen',
              'CS = can opener sound; CR = eating food',
              'CS = kitchen; CR = hearing the can opener'
            ],
            correctAnswer: 0,
            explanation: 'The can opener sound (originally neutral) was paired with food (UCS) and became the CS. Running to the kitchen is the learned response to the sound (CR). The food is the UCS, and eating/salivating to food is the UCR.'
          },
          {
            question: 'To test whether a conditioning procedure was effective, a researcher should:',
            options: [
              'present the CS alone and observe whether the CR occurs',
              'present the UCS alone and observe the UCR',
              'present the CS and UCS together',
              'remove all stimuli and wait for spontaneous recovery'
            ],
            correctAnswer: 0,
            explanation: 'The test for successful conditioning is presenting the CS alone. If the organism produces the CR without the UCS present, conditioning has occurred. Presenting the CS and UCS together is the acquisition phase, not the test.'
          }
        ]
      }
    },
    {
      id: 'class6-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Scenario Analysis Practice

      ### Worked Example: The Dentist Scenario

      "Every time 5-year-old Sam visits the dentist, the drill makes a loud, painful noise. Now Sam feels anxious just walking into the dentist's waiting room."

      | Component | Identification | Reasoning |
      |---|---|---|
      | UCS | Loud, painful drill noise | Naturally causes distress — no learning needed |
      | UCR | Pain/fear from drill | Natural response to the painful noise |
      | NS → CS | Dentist's waiting room | Was neutral, now triggers anxiety after association |
      | CR | Anxiety in waiting room | Learned response to the previously neutral room |

      ### Predicting What Happens Next

      | Scenario | Prediction | Concept |
      |---|---|---|
      | Sam visits dentist 10 times with no drill | Anxiety gradually fades | Extinction |
      | After 6 months, Sam returns to dentist | Brief anxiety returns | Spontaneous recovery |
      | Sam feels anxious in ANY doctor's office | Anxiety spreads to similar settings | Generalization |
      | Sam is anxious at dentist but NOT at pediatrician | He distinguishes the two | Discrimination |

      ### Experiment Design Checklist

      | Element | What to Include |
      |---|---|
      | Independent variable | The CS-UCS pairing (present or absent) |
      | Dependent variable | The strength/presence of the CR |
      | Control group | Group that receives CS without UCS pairing |
      | Random assignment | Participants randomly assigned to groups |
      | Operational definition | How you measure the CR (e.g., salivation volume, galvanic skin response) |
      `
    },
    {
      id: 'class6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      Scenario: "A child who was stung by a bee now cries when seeing any flying insect."

      1) The bee sting is the _____ (abbreviation)

      2) Crying at the sight of any flying insect demonstrates _____

      3) If the child learns to fear bees but NOT butterflies, this shows _____

      Use the exact vocabulary term from this topic.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['UCS', 'generalization', 'discrimination'],
        hint1: 'The sting naturally causes pain — no learning required.',
        hint2: 'The fear spreads to similar stimuli.',
        hint3: 'The child learns to tell the difference between threatening and non-threatening stimuli.',
        explanation: 'The bee sting is the UCS (naturally causes pain/fear). Crying at all flying insects = generalization (responding to similar stimuli). Fearing bees but not butterflies = discrimination (distinguishing CS from similar stimuli).'
      }
    },
    {
      id: 'class6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To test if conditioning was successful, you present the:',
            options: ['UCS alone', 'CS alone', 'CS + UCS together', 'neither CS nor UCS']
          },
          {
            label: 'The dependent variable in a conditioning experiment is typically:',
            options: ['the presence of the UCS', 'the strength of the CR', 'the type of CS used', 'the number of participants']
          },
          {
            label: 'A person conditioned to fear a white coat at the dentist also fears white coats at the hospital. This is:',
            options: ['discrimination', 'generalization', 'extinction', 'acquisition']
          }
        ],
        correctAnswers: ['CS alone', 'the strength of the CR', 'generalization'],
        hint1: 'The whole point of the test is seeing if the CS can trigger the response WITHOUT the UCS.',
        hint2: 'The DV is what you measure — and you\'re measuring whether the organism learned a new response.',
        hint3: 'The fear spreads to a similar stimulus in a different context.',
        explanation: 'Test conditioning by presenting CS alone. The DV is the CR (what you\'re measuring). Fear of white coats in other settings = generalization.'
      }
    },
    {
      id: 'class6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - The UCS is NOT always food — it can be any stimulus that naturally triggers a response (loud noise, pain, drug, etc.).
      - The CR doesn't have to be identical to the UCR — for drug conditioning, the CR is often the OPPOSITE of the drug effect (compensatory response).
      - "Neutral stimulus" is used BEFORE conditioning; "CS" is used AFTER conditioning — they're the same stimulus at different timepoints.
      - Classical conditioning can occur unconsciously — the organism doesn't need to be aware of the association.

      ### AP Strategy Moves
      - For scenario analysis: (1) Find what's natural/unlearned → UCS/UCR. (2) Find the new trigger → CS. (3) Find the learned response → CR.
      - If asked to design an experiment: include IV, DV, control group, operational definitions, and random assignment.
      - Prediction questions: ask "What would happen if the CS is presented alone repeatedly?" → extinction. "After a rest period?" → spontaneous recovery.
      - Free-response tip: Always explicitly label each component AND explain WHY it fits that label.
      `
    },
    {
      id: 'class6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A college student always studies in a specific coffee shop. During exams, she finds that just the smell of coffee makes her feel more alert and focused, even before drinking any. In this scenario, the smell of coffee is the:',
            options: [
              'CS — the smell was paired with studying/alertness and now triggers focus on its own',
              'UCS — coffee smell naturally causes alertness',
              'CR — the alertness is the conditioned response',
              'UCR — feeling alert is a natural reaction to smell'
            ],
            correctAnswer: 0,
            explanation: 'The coffee smell (originally neutral in terms of focus) was repeatedly paired with the studying context and caffeine alertness (UCS). It became a CS that triggers a conditioned feeling of alertness (CR). The actual caffeine is the UCS.'
          },
          {
            question: 'A researcher wants to demonstrate that a dog\'s salivation to a bell is due to classical conditioning and not a natural reflex. Which evidence would be most convincing?',
            options: [
              'Show that the dog did NOT salivate to the bell before the CS-UCS pairings began',
              'Show that the dog salivates to food',
              'Show that other dogs also salivate to bells',
              'Show that the dog salivates more with each conditioning trial'
            ],
            correctAnswer: 0,
            explanation: 'The strongest evidence for learning is showing that the response was NOT present before conditioning. If the dog didn\'t salivate to the bell initially but does after pairing with food, the change must be due to the conditioning experience — meeting the definition of learning.'
          }
        ]
      }
    }
  ]
}
