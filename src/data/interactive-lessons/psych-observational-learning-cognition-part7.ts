export const psychObservationalPart7Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 7 of 7 — Synthesis & AP Review**

This final part integrates everything from the unit into one comprehensive review. Master this and you'll handle any AP question on learning theory.

### 🔧 Master Integration Table

| Concept | Researcher(s) | Key Study/Year | Core Mechanism | AP Trap to Avoid |
|---------|---------------|----------------|----------------|------------------|
| Classical conditioning | Pavlov | Dog salivation (1890s) | CS-UCS pairing → CR | Confusing with operant (involuntary vs voluntary) |
| Operant conditioning | Skinner | Skinner box (1930s) | Consequences shape behavior | Mixing up positive/negative (add/remove, not good/bad) |
| Observational learning | Bandura | Bobo doll (1961) | Modeling via ARRM | Forgetting learning ≠ performance |
| Latent learning | Tolman | Rat maze (1930) | Cognitive maps, hidden learning | Assuming no behavior = no learning |
| Insight learning | Köhler | Sultan the chimp (1925) | Sudden "aha!" restructuring | Confusing with trial-and-error |
| Learned helplessness | Seligman | Dog shock (1967) | Perceived lack of control | Not connecting to depression |
| Taste aversion | Garcia | Bright-noisy water (1966) | One-trial, long-delay learning | Forgetting it violates classical rules |
| Instinctive drift | Breland & Breland | Raccoon/pig (1961) | Biology overrides conditioning | Not recognizing innate behavior breaking through |
| Biological preparedness | Seligman | Phobia analysis (1971) | Evolutionary readiness to learn | Thinking all associations form equally |

### The Cognitive Revolution in Learning Theory

| Era | View | Key Figures | Core Idea |
|-----|------|-------------|-----------|
| **Behaviorist** (1920s-1960s) | Only observable behavior matters | Watson, Skinner | Learning = stimulus-response associations |
| **Transitional** (1930s-1960s) | Cracks in pure behaviorism | Tolman, Köhler | Internal mental processes affect learning |
| **Cognitive revolution** (1960s+) | Mind matters again | Bandura, Chomsky | Learning involves mental representations, expectations, cognition |

> **Key insight**: Tolman's cognitive maps and Köhler's insight learning PREDATED the cognitive revolution but were largely ignored during the height of behaviorism. Bandura's social learning theory helped bridge behaviorism and cognitive psychology.
      `
    },
    {
      id: 'obser7-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Integration Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which researcher\'s work is BEST described as bridging behaviorism and cognitive psychology?',
            options: [
              'Pavlov — his classical conditioning involved cognitive associations',
              'Skinner — his operant conditioning acknowledged internal states',
              'Bandura — his social learning theory combined behavioral and cognitive elements',
              'Watson — his Little Albert study showed cognitive processing of fear'
            ],
            correctAnswer: 2,
            explanation: 'Bandura\'s social learning theory is considered a bridge between behaviorism and cognitive psychology because it: (1) kept the behaviorist emphasis on observable behavior and environmental influence, but (2) added cognitive components like attention, retention, self-efficacy, and expectation. His concept of reciprocal determinism integrates behavior, person (cognition), and environment. Neither Pavlov/Skinner (pure behaviorists) nor Watson (radical behaviorist) incorporated cognitive elements.'
          },
          {
            question: 'Garcia & Koelling\'s taste aversion research challenged classical conditioning because it demonstrated that:',
            options: [
              'Not all neutral stimuli can become conditioned stimuli equally easily',
              'Conditioning always requires multiple pairings of CS and UCS',
              'Only food-related stimuli can be classically conditioned',
              'Extinction cannot occur with taste-related conditioned responses'
            ],
            correctAnswer: 0,
            explanation: 'Garcia showed that rats easily associated taste (gustatory) stimuli with illness but NOT with shock, and easily associated audiovisual stimuli with shock but NOT with illness. This violated the behaviorist assumption of equipotentiality — that any stimulus could be equally associated with any response. It demonstrated biological preparedness: evolution predisposes organisms to form certain associations more readily than others.'
          }
        ]
      }
    },
    {
      id: 'obser7-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Cross-Unit Connections (High-Value for AP)

Learning theory connects to MANY other AP Psychology units:

| Connection | Learning Concept → Other Unit |
|-----------|-------------------------------|
| **Phobias/Anxiety** | Classical conditioning → Abnormal Psychology |
| **Therapy** | Systematic desensitization (counterconditioning) → Treatment |
| **Token economies** | Operant conditioning → Treatment & Abnormal |
| **Media violence** | Observational learning → Social Psychology |
| **Language acquisition** | Skinner vs Chomsky → Cognition & Language |
| **Depression** | Learned helplessness → Abnormal Psychology |
| **Prejudice** | Observational learning of stereotypes → Social Psychology |
| **Parenting** | Reinforcement schedules, modeling → Developmental |
| **Drug tolerance** | Classical conditioning → Biological/Neuroscience |
| **Memory** | Encoding as learning → Cognition |
| **Motivation** | Reinforcement and drives → Motivation & Emotion |

### FRQ Template for Learning Questions

When an FRQ asks you to "explain how [concept] relates to the scenario":

**Step 1: IDENTIFY** the type of learning (use the Big Three comparison + special cases)

**Step 2: DEFINE** the concept using textbook language
- "Classical conditioning is a form of learning in which…"
- "Observational learning occurs when an organism…"

**Step 3: APPLY** directly to the scenario's specific details
- Name the specific stimulus/response/model from the scenario
- Use "In this case…" or "For example, [character name]…"

**Step 4: EXPLAIN** the mechanism
- For classical: identify CS, UCS, CR, UCR
- For operant: identify the behavior, consequence, and type (positive/negative reinforcement/punishment)
- For observational: identify the model, observer, and which ARRM process is relevant

### Sample FRQ Application

*"Marcus watches his older brother successfully negotiate a raise at work. Marcus then uses the same strategy when asking his teacher for extra credit."*

**Model Answer:** Marcus demonstrates **observational learning** (Bandura). His older brother serves as the **model**, and the successful raise is **vicarious reinforcement** — Marcus observed the positive outcome without experiencing it directly. Marcus paid **attention** to his brother's strategy, **retained** the negotiation approach, had the **ability to reproduce** it (motor reproduction), and was **motivated** by the vicarious success. This illustrates Bandura's principle that **learning can occur without direct reinforcement** — the observer need only watch and remember.
      `
    },
    {
      id: 'obser7-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Final Recall Challenge** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Bandura\'s four modeling processes: Attention, Retention, Reproduction, and ___', answer: 'Motivation' },
          { label: 'Garcia\'s research demonstrated that organisms are biologically ___ to form certain associations', answer: 'prepared' },
          { label: 'Bandura\'s model where behavior, person, and environment all influence each other is called reciprocal ___', answer: 'determinism' }
        ]
      }
    },
    {
      id: 'obser7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Researcher to Discovery** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Demonstrated that learning can occur without reinforcement using a Bobo doll', options: ['Pavlov', 'Skinner', 'Bandura', 'Tolman'] },
          { label: 'Showed rats form cognitive maps even without reinforcement', options: ['Bandura', 'Köhler', 'Tolman', 'Seligman'] },
          { label: 'Demonstrated that organisms can\'t easily associate taste with shock (biological constraints)', options: ['Garcia', 'Pavlov', 'Skinner', 'Breland & Breland'] }
        ],
        correctAnswers: ['Bandura', 'Tolman', 'Garcia'],
        hint1: 'The Bobo doll experiment showed children imitate aggression from models.',
        hint2: 'Latent learning in rat mazes revealed internal mental representations of space.',
        hint3: 'This researcher showed taste-illness and noise-shock are easy associations, but taste-shock is not.',
        explanation: 'Bandura\'s Bobo doll study (1961) showed observational learning without direct reinforcement. Tolman\'s maze studies (1930/1948) demonstrated cognitive maps and latent learning. Garcia & Koelling (1966) showed biological preparedness — taste easily associates with illness (not shock), violating equipotentiality.'
      }
    },
    {
      id: 'obser7-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 High-Frequency AP Topics in This Unit

**Most likely to appear on the AP exam** (based on frequency analysis):

1. **Classical vs. Operant conditioning** — Know the differences cold
2. **Bandura's Bobo doll study** — Procedure, results, and implications
3. **Reinforcement schedules** — Especially ratio vs. interval, fixed vs. variable
4. **Garcia's taste aversion** — How it challenges classical conditioning assumptions
5. **Learned helplessness** — Connection to depression
6. **Observational learning processes** — ARRM (Attention, Retention, Reproduction, Motivation)
7. **Biological preparedness** — Why some phobias are more common than others

### Common Misconceptions (Likely Wrong Answer Choices)

| Misconception | Reality |
|--------------|---------|
| Negative reinforcement = punishment | Negative reinforcement INCREASES behavior (removes something aversive) |
| Observational learning requires reinforcement | It requires only observation — reinforcement affects performance, not learning |
| All stimuli can be conditioned equally | Biological preparedness makes some associations easier |
| Punishment eliminates behavior permanently | Punishment suppresses behavior; it often returns when punishment stops |
| Classical conditioning only works with food | Any involuntary response can be conditioned (fear, arousal, nausea, etc.) |
| Insight learning is just fast trial-and-error | Insight involves cognitive restructuring — a qualitatively different process |

> **Final AP Tip:** The learning unit is one of the most heavily tested on the AP exam. Expect 8-12 multiple-choice questions and a high probability of an FRQ involving learning concepts. When in doubt, identify the type of learning FIRST, then explain the mechanism.
      `
    },
    {
      id: 'obser7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Final AP-Style Questions** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A therapist treats a client\'s spider phobia by gradually exposing her to spiders while she practices deep breathing and relaxation. After several sessions, the client can hold a spider without anxiety. This therapy is BEST explained by:',
            options: [
              'Operant conditioning — the client is reinforced for staying calm',
              'Observational learning — the client watches the therapist remain calm',
              'Classical conditioning — specifically counterconditioning/systematic desensitization',
              'Insight learning — the client suddenly realizes spiders are not dangerous'
            ],
            correctAnswer: 2,
            explanation: 'This is systematic desensitization, developed by Wolpe (1958), based on COUNTERCONDITIONING (a classical conditioning principle). The original association: Spider (CS) → Fear (CR). The new association: Spider (CS) + Relaxation → Calm (new CR). The relaxation response is incompatible with fear (reciprocal inhibition), so the fear CR is replaced. This is one of the most important cross-unit connections: learning theory (classical conditioning) applied to treatment (therapy).'
          },
          {
            question: 'Which of the following scenarios BEST illustrates the distinction between learning and performance that Bandura emphasized?',
            options: [
              'A student studies hard and gets an A on the test',
              'A child watches a violent TV show and immediately hits a sibling',
              'A child observes aggression but only imitates it when told there will be a reward',
              'A rat learns to press a lever faster when given food pellets more frequently'
            ],
            correctAnswer: 2,
            explanation: 'Bandura\'s 1965 follow-up study showed that ALL children LEARNED the aggressive behavior equally (learning), but only those who expected a reward PERFORMED it (performance). The child who observed aggression but only imitated it when told there would be a reward demonstrates this distinction perfectly — the learning occurred during observation, but performance depended on expected consequences (motivation component of ARRM). This is one of the most important concepts in observational learning theory.'
          }
        ]
      }
    }
  ]
}
