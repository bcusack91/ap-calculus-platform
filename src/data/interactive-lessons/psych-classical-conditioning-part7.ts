export const psychClassicalPart7Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class7-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Classical Conditioning

      **Part 7 of 7 — Synthesis & AP Review**

      This final part brings everything together. You'll review the full picture of classical conditioning — from Pavlov's discovery to modern applications — and prepare for AP-level synthesis questions.

      ### Core Concepts for Review
      - **classical conditioning**: involuntary, automatic responses learned through stimulus-stimulus associations
      - **biological preparedness**: the evolutionary tendency for some associations to be learned more easily than others
      - **conditioning in everyday life**: advertising, phobias, food preferences, and drug tolerance all involve classical conditioning
      - **AP scenario analysis**: the skill of identifying and labeling conditioning components in novel situations

      ### The Big Picture
      Classical conditioning explains why we develop emotional reactions, fears, preferences, and physiological responses to stimuli that were originally neutral. It's one of the most well-supported phenomena in all of psychology.

      ### Why This Matters
      The AP exam tests your ability to synthesize concepts — connecting acquisition, extinction, generalization, discrimination, and applications in a single scenario. This part trains that skill.
      `
    },
    {
      id: 'class7-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Classical conditioning differs from operant conditioning primarily because classical conditioning involves:',
            options: [
              'involuntary, automatic responses paired with stimuli',
              'voluntary behaviors shaped by rewards and punishments',
              'learning through observation and imitation',
              'conscious decision-making about behavior'
            ],
            correctAnswer: 0,
            explanation: 'Classical conditioning = involuntary, automatic responses (salivation, fear, nausea) learned through stimulus-stimulus associations. Operant conditioning = voluntary behaviors shaped by consequences (reinforcement/punishment). This distinction is one of the most important on the AP exam.'
          },
          {
            question: 'Biological preparedness helps explain why:',
            options: [
              'taste-nausea associations form more easily than light-nausea associations',
              'all stimuli are equally easy to condition',
              'classical conditioning only works with food',
              'extinction permanently erases learned associations'
            ],
            correctAnswer: 0,
            explanation: 'Biological preparedness means organisms are evolutionarily predisposed to form certain associations more easily. Taste-nausea (relevant to avoiding poisonous food) is learned faster than light-nausea (irrelevant to food safety). This challenged strict behaviorism\'s view that all associations are equally learnable.'
          }
        ]
      }
    },
    {
      id: 'class7-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Complete Classical Conditioning Reference

      ### Master Summary Table

      | Concept | Definition | Key Example | AP Tip |
      |---|---|---|---|
      | UCS | Naturally triggers response | Food, loud noise, pain | Always unlearned |
      | UCR | Natural response to UCS | Salivation, fear, flinch | Same behavior as CR, different trigger |
      | CS | Neutral stimulus after pairing | Bell, white coat, room | Was neutral BEFORE conditioning |
      | CR | Learned response to CS | Salivation to bell, fear of coat | Same behavior as UCR, learned trigger |
      | Acquisition | CS-UCS pairing builds association | Repeated bell-food pairings | Timing matters — CS should precede UCS |
      | Extinction | CS alone → CR weakens | Bell without food → less salivation | Does NOT erase learning |
      | Spontaneous recovery | CR returns after rest | Bell triggers salivation again after break | Proves learning was suppressed, not erased |
      | Generalization | Respond to similar stimuli | Fear of all dogs after one bite | Adaptive — better safe than sorry |
      | Discrimination | Respond only to specific CS | Fear German Shepherd, not Chihuahua | Learned through differential reinforcement |
      | Higher-order | CS paired with new NS | Light paired with bell (no food) | Weaker, extinguishes faster |
      | Taste aversion | One-trial food-illness learning | Sushi → nausea → avoids sushi | Violates standard conditioning rules |
      | Biological preparedness | Some associations easier | Taste-nausea > light-nausea | Challenged strict behaviorism |
      | Systematic desensitization | Relaxation + gradual exposure | Relaxing while viewing spider photos | Based on counterconditioning |

      ### Classical vs. Operant: The Key Distinction

      | Feature | Classical | Operant |
      |---|---|---|
      | Response type | Involuntary/automatic | Voluntary/chosen |
      | Learning mechanism | Association between stimuli | Association between behavior and consequence |
      | Key researchers | Pavlov, Watson | Skinner, Thorndike |
      | Example | Salivating at bell | Pressing lever for food |
      `
    },
    {
      id: 'class7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) What type of conditioning involves involuntary responses learned through stimulus-stimulus associations?

      2) What concept explains why taste-nausea associations form more easily than light-nausea associations?

      3) What therapy treats phobias by gradually pairing relaxation with feared stimuli?

      Use the exact vocabulary term from this topic.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['classical conditioning', 'biological preparedness', 'systematic desensitization'],
        hint1: 'Starts with: C',
        hint2: 'Two words, starts with: B P',
        hint3: 'Two words, starts with: S D',
        explanation: 'Expected answers: classical conditioning (involuntary associative learning), biological preparedness (evolutionary predisposition for certain associations), and systematic desensitization (gradual exposure + relaxation therapy).'
      }
    },
    {
      id: 'class7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Classical conditioning involves _____ responses; operant involves _____ behaviors:',
            options: ['involuntary; voluntary', 'voluntary; involuntary', 'conscious; unconscious', 'cognitive; behavioral']
          },
          {
            label: 'Who conducted the Little Albert experiment?',
            options: ['Pavlov', 'Skinner', 'Watson', 'Bandura']
          },
          {
            label: 'Extinction suppresses but does NOT _____ the learned association:',
            options: ['strengthen', 'erase', 'generalize', 'condition']
          }
        ],
        correctAnswers: ['involuntary; voluntary', 'Watson', 'erase'],
        hint1: 'Salivation and fear are involuntary; pressing a lever is voluntary.',
        hint2: 'This researcher was a strict behaviorist who believed emotions are learned.',
        hint3: 'Spontaneous recovery proves the association still exists after extinction.',
        explanation: 'Classical = involuntary; operant = voluntary. Watson conducted the Little Albert study. Extinction suppresses but does not erase learning — spontaneous recovery is the proof.'
      }
    },
    {
      id: 'class7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Classical conditioning is NOT limited to salivation — it applies to fear, nausea, immune responses, drug tolerance, and more.
      - Pavlov was NOT a psychologist — he was a physiologist who discovered conditioning accidentally while studying digestion.
      - The CR is NOT always weaker than the UCR — in some cases (like drug tolerance), the CR can be very strong.
      - Watson's Little Albert study would NOT be ethical today — lack of informed consent and causing lasting harm violate modern research standards.

      ### AP Free-Response Strategy
      When answering a classical conditioning FRQ:
      1. **Define** the term before applying it
      2. **Label** all four components (UCS, UCR, CS, CR) explicitly
      3. **Connect** each label to the specific scenario details
      4. **Predict** what would happen next (extinction, generalization, etc.)
      5. **Distinguish** from operant conditioning if the question requires comparison

      ### High-Frequency AP Topics in This Unit
      - Labeling UCS/UCR/CS/CR in novel scenarios
      - Distinguishing classical from operant conditioning
      - Taste aversion and biological preparedness
      - Little Albert experiment (procedure, results, ethical issues)
      - Systematic desensitization as therapy
      `
    },
    {
      id: 'class7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student associates the smell of a particular room freshener with test anxiety because their classroom always smells like it during exams. After graduation, the student walks into a store selling the same freshener and suddenly feels anxious. Later that year, the student enters the store again and feels no anxiety. This sequence illustrates:',
            options: [
              'conditioning (freshener → anxiety), then extinction (repeated exposure without exams reduces anxiety)',
              'generalization (anxiety spreads to stores), then discrimination (learning stores differ from classrooms)',
              'spontaneous recovery (anxiety returned), then higher-order conditioning',
              'biological preparedness (humans are predisposed to fear room fresheners)'
            ],
            correctAnswer: 0,
            explanation: 'The freshener (CS) was paired with exam stress (UCS) during school, creating conditioned anxiety (CR). In the store, the CS triggered anxiety without the UCS. On the later visit, repeated exposure without exams resulted in extinction. This is a complete classical conditioning timeline.'
          },
          {
            question: 'On an AP free-response question, a student writes: "The loud noise is the CR because it causes Albert to cry." What error did the student make?',
            options: [
              'The loud noise is the UCS, not the CR — the noise is a stimulus that naturally triggers fear, not a learned response',
              'The loud noise is the CS — it was paired with the rat',
              'The loud noise is the UCR — it is the natural response',
              'The student is correct — the loud noise is the CR'
            ],
            correctAnswer: 0,
            explanation: 'The loud noise is the UCS (unconditioned stimulus) — it naturally causes fear without any learning. The student confused stimulus (something in the environment) with response (what the organism does). The CR is Albert\'s fear/crying to the white rat, not to the noise. This is one of the most common errors on AP exams.'
          }
        ]
      }
    }
  ]
}
