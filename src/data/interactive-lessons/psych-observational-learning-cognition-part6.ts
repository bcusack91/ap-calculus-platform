export const psychObservationalPart6Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 6 of 7 — Problem-Solving Workshop**

This workshop applies all learning concepts to AP-style scenarios. The exam's favorite question type presents a scenario and asks you to identify WHICH type of learning is occurring. Use this systematic framework:

### 🔧 Learning Identification Framework

| Step | Question | If YES → |
|------|----------|----------|
| 1 | Is an involuntary response being triggered by a new stimulus? | **Classical conditioning** |
| 2 | Is a voluntary behavior being strengthened/weakened by consequences? | **Operant conditioning** |
| 3 | Is the organism learning by watching someone else? | **Observational learning** |
| 4 | Did the organism learn something without showing it? | **Latent learning** |
| 5 | Did the solution come suddenly after a period of no progress? | **Insight learning** |
| 6 | Did a trained behavior revert to an innate pattern? | **Instinctive drift** |
| 7 | Did a one-trial food-illness association form? | **Taste aversion** |

### The Big Three Comparison (Most Tested)

| Feature | Classical | Operant | Observational |
|---------|-----------|---------|---------------|
| **Type of behavior** | Involuntary (reflexive) | Voluntary (chosen) | Voluntary (chosen) |
| **Learning mechanism** | Association (CS + UCS) | Consequences (R → S) | Modeling (watching) |
| **Direct experience?** | Yes (paired stimuli) | Yes (consequences) | No (watching others) |
| **Key researcher** | Pavlov | Skinner | Bandura |
| **Example** | Dog salivates to bell | Rat presses lever for food | Child imitates adult's aggression |
      `
    },
    {
      id: 'obser6-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Scenario Classification** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 4-year-old watches her father cook dinner every night. One day, she picks up a toy pan and pretends to stir and flip food. She has never been rewarded for cooking. This is:',
            options: [
              'Classical conditioning — cooking was paired with food',
              'Operant conditioning — she was reinforced by pretending',
              'Observational learning — she imitated her father without direct reinforcement',
              'Insight learning — she suddenly realized how to cook'
            ],
            correctAnswer: 2,
            explanation: 'The child watched her father (model), remembered the behavior (retention), was able to imitate it (reproduction), and was motivated to do so (motivation) — all WITHOUT direct reinforcement. This is textbook observational learning (Bandura). The key clue is "never been rewarded for cooking."'
          },
          {
            question: 'A teenager gets grounded (loses phone privileges) for staying out past curfew and subsequently comes home on time. Meanwhile, her younger brother — who witnessed the grounding — also starts coming home on time even though he has never been punished. Which TWO learning types are demonstrated?',
            options: [
              'Classical conditioning (sister) + observational learning (brother)',
              'Operant conditioning/punishment (sister) + vicarious punishment/observational learning (brother)',
              'Latent learning (sister) + insight learning (brother)',
              'Instinctive drift (sister) + learned helplessness (brother)'
            ],
            correctAnswer: 1,
            explanation: 'The sister experiences DIRECT punishment (operant conditioning — positive punishment reduces curfew violation). The brother experiences VICARIOUS punishment (observational learning — he saw the consequence and changed his behavior without being directly punished). This question tests whether you can identify two different types operating in the same scenario.'
          }
        ]
      }
    },
    {
      id: 'obser6-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Complex Scenario Analysis

**Scenario 1: The Media Violence Debate**

A school shooting occurs. Politicians blame violent video games. Evaluate using learning theory:

| Perspective | Analysis |
|------------|----------|
| **Bandura (observational)** | Video games model aggression; players observe successful violence being rewarded (vicarious reinforcement). Supports concern. |
| **Counterargument** | Bandura's ARRM model: reproduction requires ability and motivation. Most gamers do NOT reproduce violence. Learning ≠ performance. |
| **Operant conditioning** | Games reinforce virtual aggression with points/rewards. But real-world consequences (punishment) discourage real aggression. |
| **Biological preparedness** | Aggression has evolutionary roots, but social constraints usually override it. |
| **Research consensus** | Violent media may increase aggressive THOUGHTS but does NOT reliably predict violent BEHAVIOR. |

**Scenario 2: Classroom Learning Applications**

| Learning Type | Application | Example |
|--------------|-------------|---------|
| Classical conditioning | Create positive associations with learning | Pairing math class with fun activities |
| Operant conditioning | Reinforce desired study behaviors | Token economy, praise for effort |
| Observational learning | Model problem-solving strategies | Teacher demonstrates thinking aloud |
| Latent learning | Don't assume non-performing students haven't learned | Test in multiple ways to reveal hidden knowledge |
| Self-efficacy | Build confidence through mastery experiences | Start with achievable problems, increase difficulty |

### Decision Tree for Tricky Scenarios

When a scenario could be multiple types:
1. Was the learner DIRECTLY experiencing stimuli/consequences? → Classical or Operant
2. Was the learner WATCHING someone else? → Observational
3. Was an involuntary response involved? → Classical (not operant)
4. Was there a consequence for the learner's behavior? → Operant (not classical)
      `
    },
    {
      id: 'obser6-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'In classical conditioning, the response is ___ (voluntary/involuntary)', answer: 'involuntary' },
          { label: 'When a trained pig roots coins instead of depositing them, it\'s called instinctive ___', answer: 'drift' },
          { label: 'A child who watches a sibling get punished experiences vicarious ___', answer: 'punishment' }
        ]
      }
    },
    {
      id: 'obser6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Learning Type** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A dog salivates when hearing car keys because keys predict a car ride to the park', options: ['Classical conditioning', 'Operant conditioning', 'Observational learning', 'Insight learning'] },
          { label: 'A student who never raises her hand knows all the answers when called on', options: ['Classical conditioning', 'Operant conditioning', 'Latent learning', 'Instinctive drift'] },
          { label: 'An employee copies the work habits of the "Employee of the Month"', options: ['Classical conditioning', 'Operant conditioning', 'Observational learning', 'Taste aversion'] }
        ],
        correctAnswers: ['Classical conditioning', 'Latent learning', 'Observational learning'],
        hint1: 'Salivation is an involuntary response triggered by an associated stimulus.',
        hint2: 'She learned but didn\'t demonstrate until motivated/asked = latent learning.',
        hint3: 'Imitating a successful model = observational learning.',
        explanation: 'Salivation to keys = classical conditioning (involuntary reflex, CS-UCS association). Knowing answers without showing = latent learning (Tolman). Copying the top performer = observational learning (Bandura — vicarious reinforcement).'
      }
    },
    {
      id: 'obser6-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Problem-Solving Checklist

**Before selecting an answer on learning questions:**

- [ ] Is the response INVOLUNTARY (salivation, fear, nausea)? → Classical conditioning
- [ ] Is the behavior VOLUNTARY with CONSEQUENCES? → Operant conditioning
- [ ] Did the learner WATCH someone else? → Observational learning
- [ ] Is there NO direct reinforcement/punishment for the learner? → Check for observational or latent
- [ ] Did a trained response REVERT to innate behavior? → Instinctive drift
- [ ] Was it a food-illness association (one trial, long delay)? → Taste aversion
- [ ] Was the solution SUDDEN after no progress? → Insight learning

**The #1 AP Trap in Learning Questions:**

Confusing CLASSICAL and OPERANT conditioning:
- **Classical**: Organism is PASSIVE — stimuli are paired BY THE EXPERIMENTER
- **Operant**: Organism is ACTIVE — behavior is followed by a consequence
- **Test**: Ask "Did the organism DO something to get the consequence?" If YES → operant. If NO (response is automatic) → classical.

> **AP Tip:** When describing observational learning in an FRQ, always mention at least ONE of the four processes (attention, retention, reproduction, motivation) to earn full credit.
      `
    },
    {
      id: 'obser6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A math teacher demonstrates how to solve quadratic equations step-by-step on the board, talking through her reasoning process. Students then practice on their own. This teaching method primarily uses:',
            options: [
              'Classical conditioning — pairing math with teacher approval',
              'Observational learning — students observe the model (teacher) and imitate the process',
              'Operant conditioning — students are reinforced for correct answers',
              'Insight learning — students experience sudden understanding'
            ],
            correctAnswer: 1,
            explanation: 'The teacher is serving as a MODEL, demonstrating the behavior (problem-solving), while students observe. This is a direct application of Bandura\'s observational learning. The students pay attention, retain the steps, reproduce them in practice, and are motivated by grades/understanding. Later, operant conditioning may also occur when they receive feedback on practice problems — but the primary teaching method is modeling.'
          },
          {
            question: 'Three-year-old Maya watches a YouTube video of other children opening toys and squealing with delight. Maya then opens her own toy box and squeals loudly, imitating the children. Her parents have never reinforced squealing. Identify ALL applicable learning concepts:',
            options: [
              'Only operant conditioning — she squeals because squealing was reinforced in the past',
              'Observational learning (imitating the model) + vicarious reinforcement (model appeared to enjoy it)',
              'Classical conditioning — toys became paired with squealing',
              'Insight learning — she suddenly discovered how to express excitement'
            ],
            correctAnswer: 1,
            explanation: 'Maya observed a model (children on YouTube), saw the model appearing happy (vicarious reinforcement — the model was "rewarded" by the joy of opening toys), and imitated the behavior. No direct reinforcement occurred for Maya. This is observational learning with vicarious reinforcement as the motivational component.'
          }
        ]
      }
    }
  ]
}
