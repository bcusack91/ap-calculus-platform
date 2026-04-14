export const psychSocialInfluencePart2Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia2-s1-intro',
      type: 'text' as const,
      content: `
# 🤝 Social Influence & Conformity

**Part 2 of 7 — Conformity**

Conformity is adjusting your behavior or thinking to match a group standard. It's not always bad — it helps society function. But it can lead us to say things we don't believe.

### Key Definitions

| Term | Definition | Key Study |
|------|-----------|-----------|
| **Conformity** | Adjusting behavior or thinking to coincide with a group standard | Asch (1951) |
| **Normative social influence** | Conforming to be LIKED/accepted (going along to fit in) | Public compliance without private acceptance |
| **Informational social influence** | Conforming to be RIGHT (looking to others for guidance when uncertain) | Private acceptance — you actually change your belief |
| **Compliance** | Publicly conforming while privately disagreeing | Saying the wrong answer but knowing it's wrong |
| **Acceptance** | Both publicly and privately agreeing with the group | Actually believing the group is correct |

### Asch's Conformity Experiment (1951)

| Element | Detail |
|---------|--------|
| **Task** | Compare line lengths — identify which of 3 lines matched a standard line |
| **Setup** | 1 real participant + 6-8 confederates who unanimously gave wrong answers on 12 of 18 trials |
| **Key finding** | ~75% conformed at least ONCE; ~37% of all responses on critical trials were conforming (wrong) |
| **Without confederates** | Error rate was less than 1% (task was objectively easy) |
| **Motivation** | Primarily NORMATIVE — participants knew the answer but went along with the group |

### Factors That Increase/Decrease Conformity

| Factor | Effect on Conformity |
|--------|---------------------|
| **Group size** | Increases up to 4-5 members, then plateaus |
| **Unanimity** | ONE dissenter drops conformity dramatically (~80% reduction) |
| **Group status** | Higher-status groups → more conformity |
| **Public vs. private** | Public responses → more conformity than anonymous written ones |
| **Task difficulty** | More ambiguous tasks → more conformity (informational influence) |
| **Culture** | Collectivist cultures show higher conformity rates |
| **No prior commitment** | More conformity when you haven't already stated your answer |

> **AP Key:** The most important finding from Asch is that ONE dissenter dramatically reduces conformity. This shows conformity depends on UNANIMITY, not just majority size.
      `
    },
    {
      id: 'socia2-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Asch\'s experiment, participants conformed even though the correct answer was obvious. This conformity was PRIMARILY driven by:',
            options: [
              'Informational social influence — they genuinely thought the group was right',
              'Normative social influence — they knew the answer but didn\'t want to stand out or be rejected',
              'Obedience to authority — the experimenter told them to conform',
              'Social facilitation — the audience improved their performance'
            ],
            correctAnswer: 1,
            explanation: 'Asch\'s task was objectively EASY (error rate < 1% when alone). Participants KNEW the right answer. They conformed not because they thought the group was right (informational), but because they didn\'t want to appear different or face social rejection (normative). Post-experiment interviews confirmed participants felt anxious about disagreeing with the unanimous group. This is NORMATIVE influence — conformity driven by the desire to be liked/accepted.'
          },
          {
            question: 'A new employee asks her colleagues what the dress code is because she genuinely doesn\'t know. She dresses like them the next day. This is BEST described as:',
            options: [
              'Normative social influence — she wants to fit in',
              'Informational social influence — she looks to the group for guidance because she\'s uncertain',
              'Obedience — she follows orders from the group',
              'Compliance — she publicly conforms but privately disagrees'
            ],
            correctAnswer: 1,
            explanation: 'The employee is genuinely UNCERTAIN about the correct dress code and looks to others for information. She actually ACCEPTS the group\'s standard as correct (private acceptance, not just public compliance). This is textbook informational social influence — conformity driven by the desire to be RIGHT. If she already knew the dress code but dressed differently just to fit in, that would be normative influence.'
          }
        ]
      }
    },
    {
      id: 'socia2-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Normative vs. Informational: The Key Distinction

| Feature | Normative | Informational |
|---------|-----------|---------------|
| **Motivation** | Want to be LIKED/accepted | Want to be RIGHT/accurate |
| **Certainty** | You KNOW the answer | You're UNCERTAIN |
| **Type of conformity** | Compliance (public only) | Acceptance (private belief changes too) |
| **Increases when** | Group is watching; you care about the group | Task is ambiguous or difficult |
| **Decreases when** | Responses are private/anonymous | You have expertise or evidence |
| **Real-world example** | Laughing at a joke you don't find funny | Checking reviews before buying a product |

### Sherif's Autokinetic Effect (1935) — Informational Influence

| Element | Detail |
|---------|--------|
| **Task** | Estimate how far a point of light moves in a dark room (autokinetic effect — light appears to move) |
| **Setup** | No objectively correct answer (the light doesn't actually move) |
| **Finding** | Individual estimates CONVERGED toward a group norm over multiple trials |
| **Implication** | When reality is ambiguous, people use others' judgments as information about the "correct" answer |
| **Type of conformity** | Informational — participants actually CHANGED their private beliefs |

### Asch vs. Sherif: A Crucial Comparison

| | Asch | Sherif |
|---|------|--------|
| **Task** | Clear answer (line lengths) | Ambiguous (autokinetic effect) |
| **Primary influence** | Normative (be liked) | Informational (be right) |
| **Conformity type** | Mostly compliance | Mostly acceptance |
| **Would conformity persist in private?** | NO — dropped significantly | YES — private judgments changed too |

> **AP Tip:** When an AP question presents AMBIGUITY or UNCERTAINTY → informational influence. When it presents CLEAR answers with group pressure → normative influence. This distinction is one of the most commonly tested.
      `
    },
    {
      id: 'socia2-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'In Asch\'s study, approximately ___% of participants conformed at least once', answer: '75' },
          { label: 'Conforming to be liked/accepted is called ___ social influence', answer: 'normative' },
          { label: 'Having just ONE ___ dramatically reduces conformity in Asch\'s paradigm', answer: 'dissenter' }
        ]
      }
    },
    {
      id: 'socia2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Influence Type** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A teenager wears clothes she dislikes because her friends wear them and she fears rejection', options: ['Normative social influence', 'Informational social influence', 'Obedience', 'Social facilitation'] },
          { label: 'Lost in a new city, you follow the crowd toward what you hope is the subway station', options: ['Normative social influence', 'Informational social influence', 'Obedience', 'Compliance'] },
          { label: 'In Sherif\'s autokinetic study, a participant\'s private estimate shifts toward the group average', options: ['Normative — compliance only', 'Informational — acceptance (private belief changed)', 'Obedience to the experimenter', 'Social loafing'] }
        ],
        correctAnswers: ['Normative social influence', 'Informational social influence', 'Informational — acceptance (private belief changed)'],
        hint1: 'She knows what she likes but conforms to avoid social rejection.',
        hint2: 'You\'re genuinely uncertain and use the crowd as a source of information.',
        hint3: 'Private estimates changed = the person actually accepted the group\'s judgment.',
        explanation: 'Wearing disliked clothes to avoid rejection = normative (desire to be liked). Following crowd when lost = informational (using others as information when uncertain). Private estimate shifting = informational acceptance (belief actually changed, not just public compliance).'
      }
    },
    {
      id: 'socia2-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Conformity Questions

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| Conformity = weakness | Conformity is a normal social process; everyone conforms to some degree |
| Asch showed people are easily fooled | People KNEW the answer — they conformed due to social pressure, not ignorance |
| More people in the group = more conformity forever | Conformity plateaus around 4-5 group members |
| One dissenter has little effect | ONE dissenter reduces conformity by ~80% — it's the most powerful factor |
| conformity is always public | Informational influence can change private beliefs too |

**Asch Study Numbers to Memorize:**
- **75%** — Percentage who conformed at least once
- **37%** — Overall conformity rate across all critical trials
- **< 1%** — Error rate when participants judged alone
- **4-5** — Group size at which conformity plateaus
- **~80%** — Reduction in conformity when ONE dissenter is present

> **AP Tip:** When describing Asch in an FRQ, mention: (1) the LINE JUDGMENT task, (2) confederates gave unanimous WRONG answers, (3) ~75% conformed at least once, and (4) this was primarily NORMATIVE influence.
      `
    },
    {
      id: 'socia2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'During a jury deliberation, 11 jurors vote "guilty" and 1 juror votes "not guilty." The holdout juror privately believes the defendant is innocent. Research on conformity predicts the holdout is MOST likely to:',
            options: [
              'Always maintain their position regardless of group pressure',
              'Conform to the majority due to normative pressure, especially if the case is clear-cut',
              'Convince all 11 other jurors to change their vote',
              'Leave the jury rather than conform'
            ],
            correctAnswer: 1,
            explanation: 'Asch\'s research predicts that a lone dissenter facing a unanimous majority will often conform due to normative social influence. However, if the holdout can get even ONE other juror to agree (breaking unanimity), resistance increases dramatically. This is why the movie "12 Angry Men" is psychologically accurate — once the minority grows from 1 to 2, conformity pressure on the holdout drops substantially.'
          },
          {
            question: 'A group of friends goes to a restaurant. The first person orders a salad. The second person was planning to order a burger but switches to a salad. By the time it reaches the fifth person, everyone has ordered a salad. This chain of conformity was MOST likely driven by:',
            options: [
              'Informational social influence — everyone genuinely believes salads are the best choice',
              'Normative social influence — each person doesn\'t want to be the odd one out ordering differently',
              'Obedience — the first person is an authority figure',
              'Social facilitation — the audience improves their food choices'
            ],
            correctAnswer: 1,
            explanation: 'This is a real-world example of normative social influence cascading through a group. Each person probably had their own preference but switched to match the emerging group standard to avoid standing out. This is compliance, not acceptance — they didn\'t genuinely change their belief about what food is best; they changed their public behavior to match the group. Research shows this "order conformity" effect is strong and increases with each person who conforms.'
          }
        ]
      }
    }
  ]
}
