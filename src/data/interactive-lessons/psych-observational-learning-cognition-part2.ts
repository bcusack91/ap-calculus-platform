export const psychObservationalPart2Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 2 of 7 — Modeling Processes**

Not all observation leads to learning. Bandura identified four essential processes that must occur for observational learning to succeed. If any one fails, the behavior will NOT be reproduced. Think of it as a chain — every link must hold.

| Process | Definition | What Breaks It |
|---------|-----------|----------------|
| **Attention** | You must NOTICE and focus on the model | Distraction, model not salient, low interest |
| **Retention** | You must REMEMBER what you observed | Poor memory, too complex, no mental rehearsal |
| **Reproduction** | You must be physically/mentally ABLE to perform the behavior | Lack of skill, physical limitations, insufficient practice |
| **Motivation** | You must WANT to perform the behavior | No incentive, vicarious punishment, low self-efficacy |

### 🗣️ Real-World Example

You watch a cooking show and see a chef make a soufflé. You paid **attention** (watched carefully), you **retained** the steps (took mental notes), and you are **motivated** (you want to impress dinner guests). But when you try to **reproduce** it, your soufflé collapses — you lacked the motor skill. Learning occurred (you know HOW), but reproduction failed.

> **Why This Matters for the AP Exam:** The four processes (ARRM — Attention, Retention, Reproduction, Motivation) frequently appear in FRQ questions. You may be asked to identify which process failed in a given scenario. Motivation is the trickiest — it involves vicarious reinforcement/punishment.
      `
    },
    {
      id: 'obser2-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student watches a math teacher solve a problem on the board but is texting during the demonstration. When asked to solve a similar problem, the student cannot do it. Which modeling process FAILED?',
            options: [
              'Attention — the student was distracted and didn\'t observe the model',
              'Retention — the student forgot the steps',
              'Reproduction — the student lacks math ability',
              'Motivation — the student doesn\'t care about math'
            ],
            correctAnswer: 0,
            explanation: 'The student was texting (distracted) and therefore did not attend to the model\'s demonstration. Without attention — the FIRST step — retention, reproduction, and motivation are irrelevant. The chain breaks at the first link.'
          },
          {
            question: 'A child watches an older sibling ride a bicycle and tries to imitate but keeps falling. Which modeling process is the primary barrier?',
            options: [
              'Attention — the child didn\'t watch carefully enough',
              'Retention — the child forgot how to do it',
              'Reproduction — the child lacks the physical coordination needed',
              'Motivation — the child doesn\'t want to ride a bike'
            ],
            correctAnswer: 2,
            explanation: 'The child watched (attention), remembered (retention), and is motivated (trying to do it). The problem is reproduction — the child\'s motor skills and coordination are not yet developed enough to perform the behavior. With practice, reproduction will improve.'
          }
        ]
      }
    },
    {
      id: 'obser2-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: The Four Processes Explained

**1. Attention — "Did I watch?"**
- Model characteristics that increase attention: attractiveness, prestige, similarity to observer, competence
- Observer characteristics: arousal level, perceptual capacity, past reinforcement for paying attention
- **AP key:** Children pay MORE attention to models who are similar to them (same gender, age, perceived status)

**2. Retention — "Do I remember?"**
- Requires mental rehearsal (cognitive rehearsal, mental imagery)
- More complex behaviors require more retention effort
- Verbal coding (describing the behavior to yourself) improves retention
- **AP key:** This is the cognitive component that separates Bandura from Skinner

**3. Reproduction — "Can I do it?"**
- Physical and cognitive ability to perform the behavior
- Improves with practice; initial attempts may be imperfect
- Self-observation and corrective feedback help
- **AP key:** Reproduction separates LEARNING from PERFORMANCE — you can learn something you can't perform

**4. Motivation — "Do I want to?"**

| Motivation Factor | Effect | Example |
|-------------------|--------|---------|
| **Vicarious reinforcement** | Model rewarded → observer more likely to imitate | Seeing classmate praised for helping |
| **Vicarious punishment** | Model punished → observer less likely to imitate | Seeing classmate scolded for cheating |
| **Self-reinforcement** | Internal satisfaction from performing the behavior | Pride after mastering a new skill |
| **Self-efficacy** | Belief in one's ability to succeed | "I CAN do this" → more likely to try |

### Bandura's Reciprocal Determinism

Bandura also proposed that behavior, personal factors (cognition, emotion), and the environment all influence each other in a continuous loop:

**Behavior ↔ Person ↔ Environment**

Example: A confident student (person) participates in class (behavior), which leads to teacher praise (environment), which increases confidence (person), which leads to more participation (behavior).
      `
    },
    {
      id: 'obser2-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'What are Bandura\'s four modeling processes? (A, R, R, M)', answer: 'attention, retention, reproduction, motivation' },
          { label: 'What is it called when seeing a model get REWARDED makes you more likely to imitate?', answer: 'vicarious reinforcement' },
          { label: 'Bandura\'s model where behavior, person, and environment all interact is called reciprocal ___', answer: 'determinism' }
        ]
      }
    },
    {
      id: 'obser2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Failed Process** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A gymnast watches an Olympic routine but can\'t perform the triple flip', options: ['Attention failure', 'Retention failure', 'Reproduction failure', 'Motivation failure'] },
          { label: 'A child sees a classmate get detention for swearing and decides not to swear', options: ['Vicarious reinforcement', 'Vicarious punishment', 'Self-reinforcement', 'Direct punishment'] },
          { label: 'A student watched the lecture but can\'t recall the steps a week later', options: ['Attention failure', 'Retention failure', 'Reproduction failure', 'Motivation failure'] }
        ],
        correctAnswers: ['Reproduction failure', 'Vicarious punishment', 'Retention failure'],
        hint1: 'The gymnast watched and remembered, but can\'t physically perform it.',
        hint2: 'Seeing someone ELSE get punished = vicarious punishment.',
        hint3: 'Watched the lecture (attention was fine) but can\'t recall = retention failure.',
        explanation: 'The gymnast has attention, retention, and motivation — but lacks the physical ability (reproduction). The child\'s decision is driven by vicarious punishment. The student attended but retention failed over time.'
      }
    },
    {
      id: 'obser2-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Modeling Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Confusing motivation with reproduction | Motivation = wanting to; Reproduction = being able to | A person can be motivated but unable to reproduce |
| Thinking vicarious reinforcement = direct reinforcement | Vicarious = watching someone ELSE get reinforced | Direct = YOU receive the reinforcement |
| Ignoring the attention step | Attention is required FIRST | Without attention, no other process matters |
| Reciprocal determinism = one-way causation | All three elements influence each other | It's a continuous feedback loop, not linear |

**Memory Trick:** **A**-**R**-**R**-**M** = **A** **R**abbit **R**uns **M**adly (Attention → Retention → Reproduction → Motivation)

**Who Increases Attention?** Models who are:
- **P**restigious (celebrity, authority figure)
- **S**imilar (same gender, age, ethnicity)
- **A**ttractive (physically or socially)
- **C**ompetent (skilled at the behavior)

> **AP Tip:** In FRQ questions about observational learning, always identify WHICH of the four processes is relevant. Simply saying "observational learning" without specifying the process earns partial credit at best.
      `
    },
    {
      id: 'obser2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A music student watches a famous pianist perform a complex piece on YouTube (attention), practices it mentally in her head (retention), and is highly motivated to learn it. After months of practice, she finally performs it successfully. Which statement best captures the role of reproduction in this scenario?',
            options: [
              'Reproduction occurred instantly after watching the video',
              'Reproduction required extensive practice to develop the necessary motor skills',
              'Reproduction was unnecessary because she already had the knowledge',
              'Reproduction only required motivation, not physical practice'
            ],
            correctAnswer: 1,
            explanation: 'Reproduction — the third process — requires physical and cognitive ability to perform the observed behavior. For complex motor skills like piano performance, reproduction requires extensive practice even when attention, retention, and motivation are all present. Learning occurred during observation, but performance required developing the motor skills.'
          },
          {
            question: 'According to reciprocal determinism, a child who is naturally outgoing (personal factor) joins a drama club (behavior), receives praise from the teacher (environment), and becomes even more outgoing (personal factor). What does this example illustrate?',
            options: [
              'The environment completely determines behavior',
              'Personal factors, behavior, and environment influence each other continuously',
              'Behavior is determined only by reinforcement history',
              'Personal factors are more important than environment'
            ],
            correctAnswer: 1,
            explanation: 'Reciprocal determinism states that personal factors (outgoing personality), behavior (joining drama), and environment (teacher praise) all influence each other in a continuous feedback loop. None is the sole cause — they interact. This is Bandura\'s key contribution beyond simple behaviorism.'
          }
        ]
      }
    }
  ]
}
