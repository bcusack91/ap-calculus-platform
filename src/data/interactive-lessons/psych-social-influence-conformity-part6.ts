export const psychSocialInfluencePart6Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia6-s1-intro',
      type: 'text' as const,
      content: `
# 🤝 Social Influence & Conformity

**Part 6 of 7 — Problem-Solving Workshop**

This section integrates ALL social influence concepts into a decision framework for AP exam scenarios.

### Social Influence Identification Framework

| Ask This Question | If YES → | Key Study/Concept |
|-------------------|----------|-------------------|
| Is someone following a DIRECT ORDER from an authority? | **Obedience** | Milgram (1963) |
| Is someone adjusting behavior to match a GROUP? | **Conformity** | Asch (1951) |
| Is someone in a group adjusting to AMBIGUOUS information? | **Informational influence** | Sherif (1935) |
| Is someone going along to AVOID REJECTION? | **Normative influence** | Asch (1951) |
| Is someone agreeing to a REQUEST (not command)? | **Compliance** | Foot-in-the-door, door-in-the-face |
| Is a person's PERFORMANCE changing because others watch? | **Social facilitation** | Zajonc (1965) |
| Is a person putting in LESS EFFORT in a group? | **Social loafing** | Latané et al. |
| Is a group suppressing DISSENT to maintain harmony? | **Groupthink** | Janis (1972) |
| Is a group's position becoming MORE EXTREME? | **Group polarization** | Moscovici & Zavalloni |
| Is someone ANONYMOUS in a group acting impulsively? | **Deindividuation** | Zimbardo (1970) |
| Is someone carefully evaluating MESSAGE QUALITY? | **Central route** | Petty & Cacioppo (1986) |
| Is someone swayed by SUPERFICIAL CUES (celebrity, emotion)? | **Peripheral route** | Petty & Cacioppo (1986) |
| Does behavior CONFLICT with beliefs, causing discomfort? | **Cognitive dissonance** | Festinger (1957) |
| Does a person explain others' behavior as due to CHARACTER? | **FAE** | Ross (1977) |

### The Hardest AP Distinctions

| Pair | How to Tell Them Apart |
|------|----------------------|
| **Conformity vs. Obedience** | Conformity = peer pressure (implicit, no command). Obedience = authority figure gives direct orders |
| **Normative vs. Informational** | Normative = "I'll look stupid" (social acceptance). Informational = "They probably know better" (accuracy) |
| **Groupthink vs. Group Polarization** | Groupthink = suppressed dissent, bad process. Polarization = no suppression, group just becomes more extreme |
| **Social Facilitation vs. Social Loafing** | Facilitation = individually evaluated, audience watching. Loafing = contributions pooled, not individually tracked |
| **Foot-in-the-door vs. Door-in-the-face** | FITD = small → large (consistency). DITF = large → small (reciprocity) |
      `
    },
    {
      id: 'socia6-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During a jury deliberation, one juror privately doubts the defendant\'s guilt but votes "guilty" because all other jurors have already voted guilty and the juror doesn\'t want to be the only holdout. This BEST illustrates:',
            options: [
              'Informational social influence — the juror believes others know better',
              'Normative social influence — the juror conforms to avoid social rejection',
              'Obedience — the juror follows the judge\'s orders',
              'Groupthink — the jury suppresses critical evaluation'
            ],
            correctAnswer: 1,
            explanation: 'The key phrase is "doesn\'t want to be the only holdout" — this is about SOCIAL ACCEPTANCE, not about believing others are right. The juror PRIVATELY doubts guilt (they still believe the defendant may be innocent) but publicly conforms. This is normative influence: compliance without acceptance. If the juror had genuinely changed their mind because "11 people can\'t all be wrong," that would be informational influence.'
          },
          {
            question: 'A study finds that people who just ran on a treadmill (high arousal) made MORE errors when learning a new video game but FEWER errors when playing a game they had already mastered. This is BEST explained by:',
            options: [
              'Social loafing — the aroused participants put in less effort',
              'Social facilitation theory — arousal enhances dominant responses (correct for mastered, incorrect for new)',
              'Cognitive dissonance — the arousal creates psychological tension',
              'Group polarization — the running made their attitudes more extreme'
            ],
            correctAnswer: 1,
            explanation: 'This describes Zajonc\'s social facilitation theory applied to arousal more broadly. Arousal strengthens DOMINANT responses: for a mastered game, the dominant response is correct (fewer errors); for a new game, the dominant response is incorrect (more errors). While the classic version involves audience presence, the underlying mechanism is AROUSAL — and any source of arousal can produce this effect. The AP exam may test this broader application.'
          }
        ]
      }
    },
    {
      id: 'socia6-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Multi-Concept Scenario Analysis

**Scenario: A Workplace Meeting**

A tech company is deciding whether to launch a risky new product. Analyze each event:

| Event | Concept | Why? |
|-------|---------|------|
| The CEO says "I want this product launched by March" | **Obedience** | Direct order from authority figure |
| Team members who have doubts stay silent | **Groupthink** (self-censorship) | Withholding dissent to maintain group harmony |
| After discussing only the product's benefits, the team becomes even more enthusiastic | **Group polarization** | Initial lean (positive) → more extreme after one-sided discussion |
| A junior employee signs off on a small design element, then is asked to lead the entire project | **Foot-in-the-door** | Small commitment → larger commitment (consistency) |
| The marketing team uses a famous athlete to promote the product | **Peripheral route** | Celebrity endorsement = superficial cue, not argument quality |
| An engineer who privately thinks the product is flawed tells himself "Innovation requires risk" | **Cognitive dissonance reduction** | Behavior (working on flawed product) contradicts belief (it's flawed) → changes belief to reduce tension |

### Common AP Scenario Types

**Type 1: "Which concept explains...?"**
- Look for the KEY behavioral indicator (direct order? group pressure? attitude change?)
- Use the identification framework above

**Type 2: "Which study is MOST relevant?"**
- Match the scenario to the closest classic study:
  - Authority figure + harmful behavior → Milgram
  - Group pressure + obvious answer → Asch
  - Ambiguous situation + group convergence → Sherif
  - Role behavior + power → Zimbardo
  - Boring task + small reward → Festinger & Carlsmith

**Type 3: "What would MOST likely happen?"**
- Apply the research findings:
  - 65% obey authority to max (Milgram)
  - 75% conform at least once (Asch)
  - Groups become more extreme (polarization)
  - Less reward = more attitude change (dissonance)
      `
    },
    {
      id: 'socia6-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Conformity is adjusting to match a group; obedience is following a direct ___ from authority', answer: 'order' },
          { label: 'Normative influence is about social acceptance; ___ influence is about gaining accurate information', answer: 'informational' },
          { label: 'Groupthink involves suppressed ___; group polarization involves becoming more extreme', answer: 'dissent' }
        ]
      }
    },
    {
      id: 'socia6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A soldier carries out orders to detain civilians even though he personally disagrees with the policy', options: ['Obedience', 'Conformity', 'Compliance', 'Groupthink'] },
          { label: 'A new employee starts dressing casually after noticing everyone else in the office wears casual clothes', options: ['Conformity', 'Obedience', 'Social facilitation', 'Cognitive dissonance'] },
          { label: 'An advertising campaign shows a beautiful model using their product, without mentioning product features', options: ['Peripheral route', 'Central route', 'Foot-in-the-door', 'Informational influence'] }
        ],
        correctAnswers: ['Obedience', 'Conformity', 'Peripheral route'],
        hint1: 'Direct orders from a military authority — not peer pressure.',
        hint2: 'No one told the employee to dress casually — they adjusted to match the group norm.',
        hint3: 'Beauty = superficial cue, no argument quality being evaluated.',
        explanation: 'Soldier = obedience (direct order from authority, despite personal disagreement). Employee = conformity (adjusting to match implicit group norm, no direct order). Ad campaign = peripheral route (using attractiveness as a cue rather than presenting argument quality).'
      }
    },
    {
      id: 'socia6-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: The "Process of Elimination" Method

When a social influence question is tricky, systematically eliminate:

**Step 1: Is there an authority figure giving orders?**
- YES → Obedience (not conformity)
- NO → Continue

**Step 2: Is there a group?**
- YES → Could be conformity, groupthink, polarization, facilitation, loafing, deindividuation
- NO → Could be persuasion, compliance, dissonance

**Step 3: What is the group effect?**
- Adjusting to match the group → Conformity (normative or informational?)
- Suppressing dissent for harmony → Groupthink
- Becoming more extreme → Group polarization
- Performing better/worse with audience → Social facilitation
- Less effort in group → Social loafing
- Acting impulsively while anonymous → Deindividuation

**Step 4: Is it persuasion?**
- Evaluating argument quality → Central route
- Influenced by superficial cues → Peripheral route
- Small then large request → Foot-in-the-door
- Large then small request → Door-in-the-face
- Behavior contradicts beliefs → Cognitive dissonance

> **AP Tip:** The most commonly tested distinction is normative vs. informational influence. Ask: "Is the person worried about being REJECTED (normative) or worried about being WRONG (informational)?"
      `
    },
    {
      id: 'socia6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In a classic study, participants performed a boring task and were paid either $1 or $20 to tell the next participant it was enjoyable. Those paid $1 later rated the task as more enjoyable. A student explains this by saying, "The $1 participants must have been people who naturally enjoy boring tasks." This explanation BEST demonstrates:',
            options: [
              'Cognitive dissonance — the student is experiencing psychological tension',
              'The fundamental attribution error — attributing behavior to disposition rather than the situational manipulation',
              'Peripheral route persuasion — the student is using superficial cues',
              'Normative social influence — the student is conforming to the expected interpretation'
            ],
            correctAnswer: 1,
            explanation: 'Beautiful integration question! The $1/$20 finding is about cognitive dissonance (insufficient justification), but the STUDENT\'S EXPLANATION is a separate concept — the FAE. The student attributes the $1 participants\' behavior to their personality (\"naturally enjoy boring tasks\") rather than the situational factor (insufficient monetary justification creating dissonance). This is exactly the FAE: overestimating dispositional factors and underestimating situational ones.'
          },
          {
            question: 'A manager notices that her team generates more creative ideas when brainstorming individually vs. in a group. When the team works together, some members contribute very little while a few do most of the work. The REDUCED creativity in the group is BEST explained by:',
            options: [
              'Social facilitation — the complex task of brainstorming is impaired by the audience',
              'Social loafing — individual contributions are pooled, reducing accountability and effort',
              'Groupthink — the team is suppressing creative ideas to maintain harmony',
              'Group polarization — the team\'s ideas become more extreme rather than creative'
            ],
            correctAnswer: 1,
            explanation: 'The key evidence is "some members contribute very little while a few do most of the work." This is the hallmark of social loafing — when individual contributions are pooled in a group, accountability decreases and effort drops. Social facilitation is tempting (brainstorming IS complex), but the question describes unequal contribution, not arousal-based performance changes. Groupthink would involve suppressing dissent for harmony, which isn\'t described here.'
          }
        ]
      }
    }
  ]
}
