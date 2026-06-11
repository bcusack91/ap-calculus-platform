export const psychSocialInfluencePart5Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia5-s1-intro',
      type: 'text' as const,
      content: `
# 🤝 Social Influence & Conformity

**Part 5 of 7 — Persuasion & Attitude Change**

How do people change others' attitudes? The Elaboration Likelihood Model explains two pathways, and compliance techniques exploit psychological principles to get people to say "yes."

### Key Definitions

| Term | Definition |
|------|-----------|
| **Elaboration Likelihood Model (ELM)** | Petty & Cacioppo's model: two routes to persuasion depending on how carefully the message is processed |
| **Central route** | Careful, thoughtful evaluation of arguments — used when motivation AND ability are HIGH |
| **Peripheral route** | Persuasion through superficial cues (attractiveness, celebrity, emotions) — used when motivation or ability is LOW |
| **Foot-in-the-door** | Start with a SMALL request, then follow with a LARGER one (consistency principle) |
| **Door-in-the-face** | Start with a LARGE unreasonable request, then follow with a SMALLER one (reciprocity/contrast) |
| **Cognitive dissonance** | Discomfort from holding contradictory beliefs or behaving inconsistently with beliefs — motivates attitude change |

### Elaboration Likelihood Model (Petty & Cacioppo, 1986)

| | Central Route | Peripheral Route |
|--|--------------|-----------------|
| **Processing** | Deep, thoughtful, analytical | Shallow, automatic, heuristic |
| **When used?** | High motivation + high ability to process | Low motivation OR low ability |
| **Cues that matter** | Quality of arguments, evidence, logic | Speaker attractiveness, number of arguments, emotional appeals |
| **Attitude change** | Long-lasting and resistant to counter-persuasion | Temporary and easily changed |
| **Example** | Reading Consumer Reports before buying a car | Buying a car because a celebrity endorses it |

> **Key insight:** The SAME message can be processed via different routes by different people. A doctor evaluates a drug's research data (central route). A patient might just trust the doctor because "she seems smart" (peripheral route).
      `
    },
    {
      id: 'socia5-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A consumer carefully reads product reviews, compares specifications, and evaluates competing brands before purchasing a laptop. This BEST illustrates:',
            options: [
              'Peripheral route persuasion — influenced by superficial cues',
              'Central route persuasion — careful, analytical processing of argument quality',
              'Foot-in-the-door technique — starting with a small commitment',
              'Cognitive dissonance — experiencing conflicting beliefs'
            ],
            correctAnswer: 1,
            explanation: 'This is textbook central route: the consumer has HIGH motivation (expensive purchase, important decision) and HIGH ability (reading reviews, comparing specs). They\'re evaluating the QUALITY of arguments, not relying on superficial cues like brand name or celebrity endorsement. Attitude change via central route is more lasting — this consumer will likely stick with their choice even if a celebrity later endorses a competitor.'
          },
          {
            question: 'A charity volunteer first asks if you would sign a petition supporting clean water (most people say yes), and the next week asks if you would donate \\$50 to the cause. This is an example of:',
            options: [
              'Door-in-the-face — starting with an unreasonably large request',
              'Central route persuasion — evaluating argument quality',
              'Foot-in-the-door — starting with a small request to increase later compliance',
              'Peripheral route persuasion — using emotional appeals'
            ],
            correctAnswer: 2,
            explanation: 'Classic foot-in-the-door technique: a small initial request (signing a petition — easy, free) creates a commitment. When the larger request comes (donating \\$50), the person is more likely to comply because: (1) they want to be CONSISTENT with their earlier action ("I already showed I care about clean water"), and (2) they\'ve developed a self-image as someone who supports this cause. The principle is CONSISTENCY — people want their actions to align.'
          }
        ]
      }
    },
    {
      id: 'socia5-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Compliance Techniques Deep Dive

| Technique | Sequence | Principle | Example |
|-----------|----------|-----------|---------|
| **Foot-in-the-door** | Small request → Large request | Consistency | "Can you watch my bag?" → later → "Can you give me a ride to the airport?" |
| **Door-in-the-face** | Large request → Small request | Reciprocity + Contrast | "Can you volunteer 10 hours/week?" → "No" → "How about just 2 hours?" |
| **Lowball** | Agree to attractive offer → terms change → person still complies | Commitment | Car dealer quotes low price → adds fees after you've committed |
| **That's-not-all** | Initial offer → sweeten the deal before response | Reciprocity | "This blender is \\$100 — but wait, I'll throw in free shipping AND a recipe book!" |

### Cognitive Dissonance (Festinger, 1957)

When behavior contradicts beliefs, people experience uncomfortable tension (dissonance) and are motivated to reduce it.

**Ways to Reduce Dissonance:**

| Strategy | Example (Smoker who knows smoking causes cancer) |
|----------|--------------------------------------------------|
| **Change behavior** | Quit smoking |
| **Change belief** | "The research isn't conclusive" |
| **Add new cognition** | "I exercise, so it balances out" |
| **Trivialize** | "Everyone dies of something" |

### Festinger & Carlsmith (1959) — The \\$1/\\$20 Study

| Element | Detail |
|---------|--------|
| **Task** | Participants did an extremely boring task (turning pegs for an hour) |
| **Manipulation** | Paid \\$1 or \\$20 to tell the next participant the task was enjoyable |
| **Result** | \\$1 group rated the task as MORE enjoyable than \\$20 group |
| **Why?** | \\$1 = insufficient justification → dissonance ("I lied for only \\$1") → changed attitude to reduce dissonance. \\$20 = sufficient justification ("I lied because of the money") → no need to change attitude |

> **AP Connection:** Insufficient justification = MORE attitude change. This is counterintuitive and frequently tested. The LESS external reward, the MORE people internalize the attitude change.

### Foot-in-the-Door vs. Door-in-the-Face

| | Foot-in-the-Door | Door-in-the-Face |
|--|------------------|------------------|
| **First request** | Small (easy to say yes) | Large (expected to be refused) |
| **Second request** | Large (the real target) | Small (the real target) |
| **Principle** | Consistency — "I already said yes once" | Reciprocity — "They compromised, so should I" |
| **When to use?** | When you want long-term commitment changes | When you want immediate one-time compliance |
      `
    },
    {
      id: 'socia5-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'The Elaboration ___ Model describes central and peripheral routes to persuasion', answer: 'Likelihood' },
          { label: 'In Festinger & Carlsmith (1959), the $___ group showed MORE attitude change because of insufficient justification', answer: '1' },
          { label: 'Foot-in-the-door works through the principle of ___ (wanting actions to align)', answer: 'consistency' }
        ]
      }
    },
    {
      id: 'socia5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Persuasion Technique** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A teenager buys expensive sneakers because their favorite athlete wears them, without researching quality', options: ['Peripheral route', 'Central route', 'Foot-in-the-door', 'Cognitive dissonance'] },
          { label: 'A car dealer quotes \\$20,000, then adds \\$3,000 in fees after you\'ve already committed to buying', options: ['Lowball technique', 'Door-in-the-face', 'Foot-in-the-door', 'Central route'] },
          { label: 'A person who eats meat tells themselves "Humans are designed to eat meat" after watching a documentary about animal cruelty', options: ['Cognitive dissonance reduction', 'Peripheral route', 'Door-in-the-face', 'Foot-in-the-door'] }
        ],
        correctAnswers: ['Peripheral route', 'Lowball technique', 'Cognitive dissonance reduction'],
        hint1: 'The teenager isn\'t analyzing product quality — they\'re influenced by a superficial cue (celebrity).',
        hint2: 'The buyer already committed, then the terms changed. They feel committed and still comply.',
        hint3: 'Behavior (eating meat) contradicts new belief (animal cruelty is wrong) — so they change their belief to reduce discomfort.',
        explanation: 'Sneakers = peripheral route (celebrity cue, no argument evaluation). Car dealer = lowball (attractive offer → changed terms after commitment). Meat eater = cognitive dissonance reduction (adding a new cognition to justify behavior that conflicts with beliefs).'
      }
    },
    {
      id: 'socia5-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Persuasion Questions

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| Central route = better/smarter | It's just a different processing mode — neither is "better." Central is used when motivation AND ability are high |
| More reward = more attitude change | LESS reward = MORE dissonance = MORE attitude change (Festinger & Carlsmith) |
| Foot-in-the-door and door-in-the-face are the same | Opposite sequences and opposite psychological principles (consistency vs. reciprocity) |
| Cognitive dissonance always leads to behavior change | People often change BELIEFS rather than behavior — the path of least resistance |

**Quick Decision Guide:**
- Person carefully analyzes evidence → **Central route**
- Person influenced by celebrity/emotions/attractiveness → **Peripheral route**
- Small request then large request → **Foot-in-the-door**
- Large request refused, then smaller request → **Door-in-the-face**
- Low price then hidden costs → **Lowball**
- Behavior contradicts beliefs, person feels uncomfortable → **Cognitive dissonance**

> **AP Tip:** The \\$1/\\$20 study is a TOP AP exam topic. Remember: \\$1 = MORE attitude change. The key term is "insufficient justification" — when external justification is weak, people must justify internally by changing their attitude.
      `
    },
    {
      id: 'socia5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A student who cheated on an exam but considers herself honest tells herself, "Everyone cheats sometimes — it\'s not a big deal." This is BEST explained by:',
            options: [
              'Central route persuasion — the student is carefully evaluating arguments',
              'Peripheral route persuasion — the student is influenced by superficial cues',
              'Cognitive dissonance — the student reduces the tension between her behavior (cheating) and self-concept (honest) by trivializing the behavior',
              'Door-in-the-face technique — the student made a large concession first'
            ],
            correctAnswer: 2,
            explanation: 'Classic cognitive dissonance: behavior (cheating) contradicts belief (I am honest). This creates uncomfortable psychological tension. Rather than changing her behavior (can\'t undo the cheating) or changing her self-concept (giving up the "honest" identity), she TRIVIALIZES the behavior ("everyone does it") to reduce the dissonance. This is one of the most common dissonance-reduction strategies: minimizing the importance of the conflicting behavior.'
          },
          {
            question: 'During an election, Voter A researches each candidate\'s policy positions and voting record before deciding. Voter B votes for the taller, more attractive candidate. According to the Elaboration Likelihood Model:',
            options: [
              'Both use central route processing — they are both making informed decisions',
              'Voter A uses central route (argument quality); Voter B uses peripheral route (attractiveness cue)',
              'Voter A uses peripheral route; Voter B uses central route',
              'Both use peripheral route — all voting decisions are based on superficial cues'
            ],
            correctAnswer: 1,
            explanation: 'Voter A: high motivation (important decision) + high ability (researching policies) = CENTRAL route — evaluating argument quality. Voter B: using attractiveness as a heuristic = PERIPHERAL route — superficial cue rather than argument quality. Voter A\'s attitude is likely more resistant to change because central route processing produces more durable attitude change. This is exactly what Petty & Cacioppo\'s ELM predicts.'
          }
        ]
      }
    }
  ]
}
