export const psychObservationalPart1Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 1 of 7 — Bandura & Social Learning**

Albert Bandura challenged the behaviorist idea that all learning requires direct reinforcement. His research showed that people — especially children — learn by WATCHING others, even when they receive no reward themselves. This was revolutionary because it placed cognition back into learning theory.

| Concept | Definition | Key Detail |
|---------|-----------|------------|
| **Observational learning** | Learning by watching and imitating a model | No direct reinforcement needed |
| **Modeling** | The process of observing and imitating a behavior | The person being watched = the "model" |
| **Social learning theory** | Learning occurs in a social context through observation | Bandura's bridge between behaviorism and cognitivism |
| **Vicarious reinforcement** | Seeing someone ELSE get rewarded for a behavior | Increases likelihood YOU will imitate the behavior |
| **Vicarious punishment** | Seeing someone ELSE get punished for a behavior | Decreases likelihood YOU will imitate the behavior |

### 🗣️ Real-World Example

A teenager watches a YouTube tutorial on guitar. She has never played before, but after watching carefully, she picks up her guitar and reproduces the chords. No one reinforced her — she simply observed and imitated. This is observational learning in action. Bandura proved that organisms can learn NEW behaviors simply by watching others.

> **Why This Matters for the AP Exam:** Bandura's Bobo doll experiment is one of the 10 most-tested studies in AP Psychology. You MUST know the procedure, results, and implications — especially the finding that children imitated aggression even without being reinforced for it.
      `
    },
    {
      id: 'obser1-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Bandura\'s Bobo doll experiment, children who watched an adult punch and kick an inflatable doll later:',
            options: [
              'Showed no aggression because they were not directly reinforced',
              'Imitated the aggressive behavior when left alone with the doll',
              'Only imitated if they were rewarded for watching the adult',
              'Showed aggression only if they had a history of being reinforced for aggression'
            ],
            correctAnswer: 1,
            explanation: 'Children who observed the aggressive adult model imitated the specific aggressive behaviors (punching, kicking, using a mallet) when left alone with the Bobo doll — even though they received NO reinforcement for doing so. This directly challenged Skinner\'s view that reinforcement is required for learning.'
          },
          {
            question: 'Bandura\'s social learning theory is considered a "bridge" between which two perspectives?',
            options: [
              'Psychoanalytic and humanistic',
              'Behaviorism and cognitive psychology',
              'Biological and evolutionary psychology',
              'Structuralism and functionalism'
            ],
            correctAnswer: 1,
            explanation: 'Bandura\'s theory bridges behaviorism (learning from the environment) and cognitive psychology (mental processes like attention and memory are required). Unlike pure behaviorists, Bandura argued that THINKING is involved in learning — you must pay attention, remember, and decide to imitate.'
          }
        ]
      }
    },
    {
      id: 'obser1-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: The Bobo Doll Experiment (1961)

**Procedure:**
1. Children (ages 3–6) watched an adult model interact with a 5-foot inflatable Bobo doll
2. **Aggressive model group**: Adult punched, kicked, hit doll with mallet, yelled "Sock him!"
3. **Non-aggressive model group**: Adult played quietly with other toys, ignoring the doll
4. **Control group**: No model observed
5. Children were then mildly frustrated (shown attractive toys but told they couldn't play with them)
6. Children were left alone in a room with the Bobo doll and other toys

**Results:**

| Condition | Result |
|-----------|--------|
| Aggressive model | Children imitated specific aggressive acts (punching, mallet hits, "Sock him!") |
| Non-aggressive model | Children showed very little aggression |
| Control (no model) | Children showed very little aggression |

**Critical Additional Findings:**
- Children imitated both male and female models, but imitated **male models' aggression more**
- **Boys** were more physically aggressive than girls overall
- Girls showed more **verbal aggression** than physical aggression
- In a later study (1965), children who saw the model GET PUNISHED were less likely to imitate — BUT when offered a reward to demonstrate the behavior, they COULD do it equally well

### Key Distinction: Learning vs. Performance

Bandura's 1965 follow-up is crucial for AP: children who watched the model get punished LEARNED the behavior (they could perform it when motivated) but chose NOT to perform it. This proves that **learning and performance are different** — vicarious punishment suppresses performance, not learning.
      `
    },
    {
      id: 'obser1-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Who developed social learning theory and the Bobo doll experiment?', answer: 'Bandura' },
          { label: 'Seeing someone ELSE get rewarded for a behavior is called vicarious ___', answer: 'reinforcement' },
          { label: 'The Bobo doll study showed children learn through ___ even without direct reinforcement', answer: 'observation' }
        ]
      }
    },
    {
      id: 'obser1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A child watches an older sibling get scolded for swearing and decides not to swear', options: ['Vicarious reinforcement', 'Vicarious punishment', 'Direct reinforcement', 'Instinctive drift'] },
          { label: 'Children imitated punching a Bobo doll after watching an adult do it', options: ['Classical conditioning', 'Operant conditioning', 'Observational learning', 'Insight learning'] },
          { label: 'Children who saw the model punished COULD still perform the behavior when offered a reward', options: ['Learning ≠ performance', 'Extinction', 'Spontaneous recovery', 'Generalization'] }
        ],
        correctAnswers: ['Vicarious punishment', 'Observational learning', 'Learning ≠ performance'],
        hint1: 'Seeing someone else get punished makes you less likely to imitate = vicarious punishment.',
        hint2: 'Learning by watching and imitating = observational learning.',
        hint3: 'They learned it but didn\'t show it until motivated = learning ≠ performance.',
        explanation: 'Seeing a sibling scolded = vicarious punishment. Children imitating the model = observational learning. Performing the behavior only when incentivized = learning and performance are distinct processes.'
      }
    },
    {
      id: 'obser1-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Bandura Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Observational learning = operant conditioning | Operant requires direct reinforcement | Observational learning requires NO direct reinforcement |
| Children only imitate reinforced models | 1961 study: children imitated unreinforced aggression | Reinforcement affects PERFORMANCE, not learning |
| The Bobo doll study is about aggression only | It's really about how learning occurs | The key finding is that observation alone produces learning |
| Bandura rejected behaviorism entirely | He expanded it — didn't reject it | He added cognitive elements TO learning theory |

**Memory Trick:** **B**andura = **B**obo = **B**ehavior learned by **B**eholding (watching).

### Observational Learning vs. Other Learning Types

| Feature | Classical | Operant | Observational |
|---------|-----------|---------|---------------|
| Requires direct experience? | Yes (paired stimuli) | Yes (reinforcement/punishment) | No (watching is enough) |
| Involves cognition? | Minimal (automatic) | Some (consequences) | Yes (attention, memory, decision) |
| Involuntary or voluntary? | Involuntary responses | Voluntary behaviors | Voluntary behaviors |
| Key researcher | Pavlov | Skinner | Bandura |

> **AP Tip:** When the exam describes a child imitating behavior they saw on TV (violence, prosocial acts), the answer is almost always observational learning / Bandura — NOT operant conditioning. The child was not directly reinforced.
      `
    },
    {
      id: 'obser1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A parent frequently yells at their child for being aggressive toward siblings. Despite the punishment, the child continues to be aggressive. Bandura would explain this by noting that:',
            options: [
              'Punishment is never effective for reducing behavior',
              'The child is imitating the parent\'s aggressive behavior (yelling), which models aggression',
              'The child has a biological predisposition for aggression that cannot be changed',
              'Classical conditioning has paired the siblings with negative emotions'
            ],
            correctAnswer: 1,
            explanation: 'This is a powerful application of Bandura: the parent is MODELING aggression (yelling) while trying to punish aggression. The child observes the parent using aggression to solve problems and imitates that approach. The parent\'s behavior sends a stronger message than the parent\'s words — "aggression works."'
          },
          {
            question: 'A company shows new employees a video of a top performer receiving a bonus for excellent customer service. The new employees then adopt similar customer service behaviors. This demonstrates:',
            options: [
              'Classical conditioning — the bonus is the UCS',
              'Negative reinforcement — avoiding bad performance reviews',
              'Vicarious reinforcement through observational learning',
              'Instinctive drift toward prosocial behavior'
            ],
            correctAnswer: 2,
            explanation: 'The new employees watched someone ELSE get rewarded (vicarious reinforcement) and imitated the behavior. They were not directly reinforced themselves — they observed the model being reinforced. This is a practical application of Bandura\'s social learning theory in the workplace.'
          }
        ]
      }
    }
  ]
}
