export const psychSocialInfluencePart3Data = {
  topicSlug: 'social-influence-conformity',
  sections: [
    {
      id: 'socia3-s1-intro',
      type: 'text' as const,
      content: `
# 🤝 Social Influence & Conformity

**Part 3 of 7 — Obedience**

Obedience is changing behavior in response to a direct command from an authority figure. Milgram's obedience study is one of the most famous — and disturbing — experiments in psychology.

### Key Definitions

| Term | Definition |
|------|-----------|
| **Obedience** | Following direct orders from an authority figure |
| **Conformity** (vs. obedience) | Adjusting to match group norms — NO direct order |
| **Compliance** | Going along with a request (not a command) from a peer |

### Milgram's Obedience Study (1963)

| Element | Detail |
|---------|--------|
| **Cover story** | "Learning and memory experiment" — the participant was the "teacher," a confederate was the "learner" |
| **Task** | Deliver increasingly intense electric shocks (15V → 450V) to the "learner" for wrong answers |
| **The shocks** | NOT REAL — the learner was a confederate who acted as if being shocked |
| **Authority figure** | An experimenter in a lab coat who gave verbal prods: "The experiment requires that you continue" |
| **Key finding** | **65%** of participants obeyed to the maximum 450V ("XXX - Danger") |
| **Prediction** | Psychiatrists predicted less than 1% would go to 450V — showing people drastically underestimate situational power |
| **Participants' distress** | Many showed extreme stress (sweating, trembling, nervous laughter) but STILL obeyed |

### Factors Affecting Obedience

| Factor | Obedience Rate | Why? |
|--------|---------------|------|
| **Original study** (authority present, learner in another room) | 65% | Reduced personal responsibility; authority present |
| **Authority NOT present** (phone instructions) | 21% | Easier to disobey without authority watching |
| **Learner in SAME room** | 40% | Harder to harm someone you can see |
| **Participant TOUCHES learner** (forces hand on shock plate) | 30% | Direct physical contact increases awareness of harm |
| **Ordinary building** (not Yale lab) | 48% | Less perceived legitimacy of authority |
| **Dissenting "teachers"** (other "teachers" refuse) | 10% | Social support for disobedience — peers modelo resistance |

> **The lesson:** Obedience is NOT about "bad people." Ordinary people obey destructive commands because of situational pressures — authority, legitimacy, gradual escalation, and diffusion of responsibility.
      `
    },
    {
      id: 'socia3-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Milgram\'s original study, MOST participants:',
            options: [
              'Refused to shock the learner after the first few trials',
              'Obeyed to the maximum 450V while showing signs of extreme distress',
              'Enjoyed delivering the shocks and showed no distress',
              'Stopped when the learner first complained of a heart condition'
            ],
            correctAnswer: 1,
            explanation: '65% of participants obeyed to the maximum 450V — but crucially, they were NOT sadistic about it. Most showed extreme distress (sweating, trembling, protesting verbally). They obeyed DESPITE wanting to stop. This distinction is critical: the study shows the power of SITUATIONAL pressure, not the cruelty of individuals. The participants were ordinary people placed in an extraordinary situation.'
          },
          {
            question: 'Which variation of Milgram\'s experiment produced the LOWEST obedience rate?',
            options: [
              'Authority figure gave instructions by phone (21%)',
              'The experiment was conducted in an ordinary office building (48%)',
              'Other "teachers" (confederates) refused to continue (10%)',
              'The learner was in the same room as the teacher (40%)'
            ],
            correctAnswer: 2,
            explanation: 'When other "teachers" (confederates) refused to continue, obedience dropped to only 10%. This is the LOWEST rate across all variations. It parallels Asch\'s finding that one dissenter dramatically reduces conformity. The principle: SOCIAL SUPPORT for resistance is the most powerful factor in reducing obedience. Having even one ally who models disobedience gives people permission to follow their conscience.'
          }
        ]
      }
    },
    {
      id: 'socia3-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Zimbardo's Stanford Prison Experiment (1971)

| Element | Detail |
|---------|--------|
| **Setup** | College students randomly assigned to "guard" or "prisoner" roles in a simulated prison in Stanford's basement |
| **Duration** | Planned for 2 weeks, stopped after 6 DAYS |
| **What happened** | Guards became increasingly abusive; prisoners became passive and depressed; Zimbardo himself got caught up in his "warden" role |
| **Why stopped** | Graduate student Christina Maslach objected to the treatment of prisoners |
| **Key finding** | The POWER OF ROLES — normal people adopted cruel behavior when placed in a powerful role with institutional support |

### Criticisms of the Stanford Prison Experiment

| Criticism | Detail |
|----------|--------|
| **Demand characteristics** | Guards may have behaved as they thought Zimbardo WANTED |
| **Zimbardo's dual role** | He was both researcher AND "warden" — contaminated the study |
| **Selection bias** | Volunteers who responded to an ad for a "prison study" may not be representative |
| **Not all guards were cruel** | About 1/3 of guards were fair; the study emphasized the extreme behaviors |
| **Ethics** | Participants experienced genuine psychological harm |
| **Replicability** | Recent attempts to replicate have produced different results |

### Conformity vs. Obedience vs. Compliance

| | Conformity | Obedience | Compliance |
|--|-----------|-----------|------------|
| **Pressure source** | Peers/group | Authority figure | Another person (request) |
| **Type of request** | Implicit (no one says "conform") | Direct command | Explicit request (not a command) |
| **Power differential** | Equal status | Unequal — authority has power | Usually equal |
| **Key study** | Asch (1951) | Milgram (1963) | Foot-in-the-door, door-in-the-face |
| **Example** | Laughing at a joke because everyone else does | Soldier follows orders | Saying yes when someone asks for a donation |

> **AP Connection:** Both Milgram and Zimbardo demonstrate the SAME theme: the power of the SITUATION over the individual (dispositional factors). This directly connects to the fundamental attribution error — we underestimate how much situations influence behavior.
      `
    },
    {
      id: 'socia3-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'In Milgram\'s original study, ___% of participants obeyed to the maximum 450 volts', answer: '65' },
          { label: 'Zimbardo\'s Stanford Prison Experiment was stopped after only ___ days', answer: '6' },
          { label: 'The strongest factor reducing obedience in Milgram\'s variations was dissenting ___', answer: 'peers' }
        ]
      }
    },
    {
      id: 'socia3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Social Influence** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A soldier follows orders to carry out a mission they personally disagree with', options: ['Conformity', 'Obedience', 'Compliance', 'Social facilitation'] },
          { label: 'A teenager changes their music taste to match their friend group', options: ['Conformity', 'Obedience', 'Compliance', 'Group polarization'] },
          { label: 'A customer adds a donation when the cashier asks "Would you like to round up for charity?"', options: ['Conformity', 'Obedience', 'Compliance', 'Groupthink'] }
        ],
        correctAnswers: ['Obedience', 'Conformity', 'Compliance'],
        hint1: 'Direct command from an authority figure (military superior).',
        hint2: 'Adjusting to match the group standard without being told to.',
        hint3: 'Agreeing to a request from a peer/equal — not a command.',
        explanation: 'Soldier = obedience (direct order from authority). Music taste = conformity (matching group norms, no command given). Rounding up = compliance (request from a non-authority figure).'
      }
    },
    {
      id: 'socia3-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Obedience Questions

**Common Misconceptions:**

| Misconception | Reality |
|--------------|---------|
| Milgram's participants were sadists | They were ordinary people showing extreme distress while obeying |
| Only "weak" people obey destructive orders | 65% obeyed — this is a MAJORITY of ordinary people |
| The Stanford Prison Experiment is considered good science | It has serious methodological criticisms (demand characteristics, Zimbardo's dual role) |
| Obedience and conformity are the same | Obedience = authority commands. Conformity = peer pressure (implicit) |
| Milgram's results wouldn't replicate today | Partial replications (up to 150V) show similar obedience rates |

**Milgram's Key Numbers:**
- **65%** obeyed to 450V (original study)
- **21%** obeyed when authority gave instructions by phone
- **10%** obeyed when peers refused
- **~1%** was the predicted obedience rate by psychiatrists

**Ethical Issues with Both Studies:**
- Participants experienced genuine psychological distress
- Informed consent was compromised (deception about shocks/study purpose)
- Right to withdraw was pressured (Milgram's prods encouraged continuation)
- These studies led to stricter IRB (Institutional Review Board) guidelines

> **AP Tip:** Never say "Milgram's study proved all people are evil." The correct interpretation is: "Situational factors (authority, legitimacy, gradual escalation) can lead ordinary people to obey destructive commands."
      `
    },
    {
      id: 'socia3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A nurse receives a phone call from a doctor she has never met, ordering her to administer an above-maximum dose of a medication. Research based on Milgram\'s findings predicts that the nurse will MOST likely:',
            options: [
              'Refuse immediately — nurses are trained to question unsafe orders',
              'Obey the order, despite knowing it violates protocol — authority figure effect',
              'Ask a colleague for advice before proceeding',
              'Report the doctor to hospital administration'
            ],
            correctAnswer: 1,
            explanation: 'In Hofling et al. (1966), a real-world replication of Milgram, 21 of 22 nurses OBEYED a phone order from an unknown "doctor" to give a patient an overdose of an unauthorized drug — despite hospital policies requiring verification. This demonstrates that obedience to perceived authority occurs even in professional settings where training SHOULD prevent it. The authority (doctor), institutional setting (hospital), and role hierarchy all contributed to obedience.'
          },
          {
            question: 'After learning about Milgram\'s study, students say they would NEVER have obeyed. This prediction is MOST likely explained by:',
            options: [
              'The students have stronger moral character than Milgram\'s participants',
              'The fundamental attribution error — students overestimate their own dispositional resistance and underestimate situational pressure',
              'Students today are less obedient than people in the 1960s',
              'The students have been trained in ethics, making them immune to obedience'
            ],
            correctAnswer: 1,
            explanation: 'This is a beautiful application of the FAE. Students attribute the PARTICIPANTS\' obedience to dispositional weakness ("they were spineless") and attribute their OWN predicted resistance to dispositional strength ("I would resist because I\'m a good person"). They underestimate the SITUATIONAL forces (authority, legitimacy, gradual escalation) that would pressure them too. Psychiatrists made the same prediction error — they predicted <1% would fully obey, when actually 65% did.'
          }
        ]
      }
    }
  ]
}
