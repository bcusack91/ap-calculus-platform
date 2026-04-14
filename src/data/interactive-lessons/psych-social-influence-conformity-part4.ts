export const psychSocialInfluencePart4Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia4-s1-intro',
      type: 'text' as const,
      content: `
# 🤝 Social Influence & Conformity

**Part 4 of 7 — Group Behavior**

How do groups change individual behavior? Sometimes groups make us perform better, sometimes worse. Understanding these effects is essential for the AP exam.

### Key Definitions

| Term | Definition |
|------|-----------|
| **Social facilitation** | Improved performance on SIMPLE/well-learned tasks in the presence of others; WORSE on complex/new tasks |
| **Social loafing** | Reduced individual effort when working in a group |
| **Deindividuation** | Loss of self-awareness and self-restraint in group situations that foster anonymity |
| **Group polarization** | After group discussion, group attitudes become MORE EXTREME in the direction they already leaned |
| **Groupthink** | Desire for group harmony overrides realistic appraisal of alternatives — leads to poor decisions |

### Social Facilitation (Zajonc, 1965)

| Task Type | Effect of Audience | Why? |
|-----------|-------------------|------|
| **Simple/well-learned** (riding a bike) | BETTER performance | Arousal enhances dominant (well-practiced) responses |
| **Complex/new** (learning calculus) | WORSE performance | Arousal impairs non-dominant (unfamiliar) responses |

> **The mechanism:** Others → increased arousal → dominant response strengthened. If the dominant response is correct (simple task) → better performance. If the dominant response is wrong (complex task) → worse performance.

### Real-World Example
A professional basketball player shoots free throws BETTER with a crowd watching (simple, well-practiced). But a beginning player shoots WORSE with a crowd (complex, unfamiliar task). Same situation, opposite effects — all explained by arousal level and task difficulty.
      `
    },
    {
      id: 'socia4-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to Zajonc\'s theory of social facilitation, a concert pianist performing a well-rehearsed piece in front of an audience would MOST likely:',
            options: [
              'Perform worse because the audience causes anxiety',
              'Perform better because arousal enhances dominant responses on well-learned tasks',
              'Perform the same regardless of audience size',
              'Experience social loafing because others are present'
            ],
            correctAnswer: 1,
            explanation: 'A well-rehearsed piece = simple/well-learned task. The dominant response (playing correctly) is well-practiced. Arousal from the audience STRENGTHENS the dominant response, leading to better performance. This is the key insight of social facilitation: the same audience presence has opposite effects depending on whether the task is well-learned vs. new.'
          },
          {
            question: 'During a class group project, four students each contribute less effort than if they were working alone. This BEST illustrates:',
            options: [
              'Group polarization — the group is becoming more extreme',
              'Groupthink — desire for harmony overrides critical thinking',
              'Social loafing — reduced individual effort in a group setting',
              'Deindividuation — loss of self-awareness in the group'
            ],
            correctAnswer: 2,
            explanation: 'Social loafing is the tendency for individuals to exert less effort when working in a group. It occurs because individual contributions are harder to identify, reducing accountability. Key distinction: social facilitation improves performance on SIMPLE tasks with an audience watching; social loafing REDUCES effort when individual contributions are pooled and cannot be separately evaluated.'
          }
        ]
      }
    },
    {
      id: 'socia4-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Groupthink (Janis, 1972)

Groupthink occurs when the desire for unanimity in a cohesive group overrides the motivation to realistically evaluate alternatives.

**Symptoms of Groupthink:**

| Symptom | Description |
|---------|------------|
| **Illusion of invulnerability** | Group feels they can't fail |
| **Self-censorship** | Members withhold dissenting opinions to avoid conflict |
| **Illusion of unanimity** | Silence is interpreted as agreement |
| **Direct pressure on dissenters** | Members who disagree are pressured to conform |
| **Mindguards** | Members protect the group from information that might challenge consensus |

**Historical Examples:**
- **Bay of Pigs invasion** (1961): Kennedy's advisors suppressed doubts about the plan
- **Challenger disaster** (1986): Engineers' concerns about O-ring seals were overridden by pressure to launch
- **Enron collapse**: Corporate culture silenced dissent

**Preventing Groupthink:** Assign a "devil's advocate," encourage dissent, bring in outside experts, allow anonymous feedback

### Group Polarization

| Before Discussion | After Discussion | Example |
|-------------------|-----------------|---------|
| Slightly supportive of a policy | STRONGLY supportive | Jury that initially leans guilty becomes MORE certain of guilt |
| Slightly against a risk | STRONGLY against | Investment committee initially cautious makes extremely conservative choice |
| Slightly prejudiced | MORE prejudiced | Online echo chambers make moderate views more extreme |

> **Why does polarization happen?** (1) Social comparison — people shift to be more extreme to gain group approval. (2) Persuasive arguments — hearing ONLY one side's arguments strengthens that position.

### Deindividuation

| Factor | Effect |
|--------|--------|
| **Anonymity** (costumes, online, crowds) | Increased impulsive/aggressive behavior |
| **Group size** | Larger groups → greater anonymity → more deindividuation |
| **Arousal** | Heightened emotional states reduce self-monitoring |

**Classic finding (Zimbardo, 1970):** Participants in hoods and coats (anonymous) delivered longer shocks than those wearing name tags. Online trolling is a modern example — anonymity + group membership → reduced self-restraint.

### Social Facilitation vs. Social Loafing

| | Social Facilitation | Social Loafing |
|--|-------------------|----------------|
| **When?** | Being WATCHED/evaluated individually | Contributions POOLED and not individually identified |
| **Effect on performance** | Better on simple tasks, worse on complex | Always worse (less effort) |
| **Key mechanism** | Arousal/evaluation apprehension | Diffusion of responsibility |
| **Reduce it?** | N/A (it's automatic) | Make individual contributions identifiable |
      `
    },
    {
      id: 'socia4-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Social facilitation improves performance on ___ tasks but hurts on complex tasks', answer: 'simple' },
          { label: 'Groupthink occurs when desire for ___ overrides critical thinking', answer: 'harmony' },
          { label: 'Group ___ means group attitudes become more extreme after discussion', answer: 'polarization' }
        ]
      }
    },
    {
      id: 'socia4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Group Phenomenon** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A committee unanimously approves a risky plan because no one wants to voice concerns', options: ['Groupthink', 'Group polarization', 'Social facilitation', 'Social loafing'] },
          { label: 'Sports fans wearing team paint and masks engage in vandalism they would never do alone', options: ['Deindividuation', 'Social loafing', 'Group polarization', 'Groupthink'] },
          { label: 'A focus group that starts slightly favoring a product ends with enthusiastic endorsement', options: ['Group polarization', 'Groupthink', 'Social facilitation', 'Deindividuation'] }
        ],
        correctAnswers: ['Groupthink', 'Deindividuation', 'Group polarization'],
        hint1: 'Self-censorship and pressure to agree — the group values harmony over accuracy.',
        hint2: 'Anonymity (face paint, masks) + group = loss of self-awareness and restraint.',
        hint3: 'The group didn\'t suppress dissent — they were already leaning one way and became more extreme.',
        explanation: 'Committee = groupthink (harmony overrides critical evaluation). Sports fans = deindividuation (anonymity + group leads to behavior they wouldn\'t do alone). Focus group = group polarization (initial lean becomes more extreme after discussion).'
      }
    },
    {
      id: 'socia4-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Group Behavior Questions

**Hardest AP Distinctions:**

| Groupthink | Group Polarization |
|------------|-------------------|
| Desire for harmony SUPPRESSES dissent | No suppression — group just shifts to more extreme position |
| Results in BAD decisions (uncritical) | Results in MORE EXTREME decisions (not necessarily bad) |
| Requires cohesive group that values unanimity | Happens in any group discussion |
| Key: self-censorship, pressure on dissenters | Key: initial lean → amplified after discussion |

| Social Facilitation | Social Loafing |
|--------------------|----------------|
| Individual is EVALUATED | Individual contributions are POOLED |
| Better on simple tasks, worse on complex | Always reduced effort |
| Driven by arousal/evaluation | Driven by diffusion of responsibility |
| Example: running faster in a race | Example: clapping less loudly in a group |

**AP Tip:** The word "HARMONY" = groupthink. The word "EXTREME" = group polarization. The word "ANONYMOUS" = deindividuation. The word "AUDIENCE" = social facilitation.
      `
    },
    {
      id: 'socia4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'An online forum about climate change, where all members already believe it is a serious threat, becomes increasingly extreme in its positions over several months. This BEST illustrates:',
            options: [
              'Groupthink — the forum suppresses dissenting opinions',
              'Group polarization — the group shifts to an even more extreme position through discussion',
              'Deindividuation — online anonymity leads to extreme behavior',
              'Social facilitation — members perform better on the simple task of agreement'
            ],
            correctAnswer: 1,
            explanation: 'This is group polarization: the group already leaned one direction (belief in climate change as serious), and through continued discussion they became MORE extreme. Key: no mention of suppressing dissent (which would be groupthink). The mechanism is exposure to one-sided persuasive arguments + social comparison (wanting to be at least as committed as other members). Online echo chambers are textbook examples of group polarization.'
          },
          {
            question: 'A student who studies well alone struggles to focus during a study group where each person is responsible for summarizing different chapters. Which group phenomenon BEST explains the student\'s REDUCED effort?',
            options: [
              'Social facilitation — studying is a complex task, so performance worsens',
              'Social loafing — individual contributions are pooled in the group, reducing effort',
              'Groupthink — desire for group harmony is distracting',
              'Deindividuation — the student loses self-awareness in the group'
            ],
            correctAnswer: 1,
            explanation: 'Social loafing is the best fit: the student exerts less effort because individual contributions are pooled in a group. The student\'s work will be merged with others\', reducing accountability. Social facilitation is tempting but incorrect here — social facilitation is about being WATCHED/evaluated individually, not about pooled contributions. The key question: is the individual being evaluated separately (facilitation) or is their effort pooled with others (loafing)?'
          }
        ]
      }
    }
  ]
}
