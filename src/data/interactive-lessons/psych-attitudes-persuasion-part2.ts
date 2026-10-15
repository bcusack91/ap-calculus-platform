export const psychAttitudesPart2Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Attitudes and Persuasion

**Part 2 of 7 — Explaining Behavior: Explanatory Style and Locus of Control**

> 🔑 **Key Concept:** Attribution theory asks how people explain behavior. Beyond one-time biases, people show stable *patterns* in how they explain good and bad events (**explanatory style**) and stable *expectations* about who controls their outcomes (**locus of control**). Both shape motivation, persistence, and mood.

### Quick recap (taught in Social Influence & Conformity, Part 1)

| Term | One-line meaning |
|------|------------------|
| Dispositional attribution | The cause is inside the person: traits, ability, effort |
| Situational attribution | The cause is outside the person: circumstances, luck, other people |
| Fundamental attribution error, self-serving bias, actor-observer bias | Predictable distortions in those explanations |

This part goes further, into how explanations become habits.

### Explanatory style: three questions about every event

The CED describes **explanatory style** as a predictable pattern in how people explain good and bad events in their own lives and in the lives of others. Martin Seligman and his colleagues described that pattern along three dimensions.

| Dimension | The question it answers | One pole | Other pole |
|-----------|-------------------------|----------|------------|
| **Internal vs. external** | Was it me, or something outside me? | "I wasn't prepared." | "The quiz covered material we never got." |
| **Stable vs. unstable** | Will this cause keep operating over time? | "I'm always bad at this." | "I had an off day." |
| **Global vs. specific** | Does this cause affect everything, or just this situation? | "I mess up everything." | "Balancing equations trips me up." |

### Optimistic and pessimistic styles

| Event | **Pessimistic** explanatory style | **Optimistic** explanatory style |
|-------|-----------------------------------|----------------------------------|
| **Bad event** | Internal, stable, global: "It's me, it will last, and it ruins everything." | External or changeable, unstable, specific: "This time, this subject, for a fixable reason." |
| **Good event** | External, unstable, specific: "I got lucky on that one test." | Internal, stable, global: "I'm good at working through hard problems." |

Notice that the pattern **flips** for good events. A pessimist explains away successes and takes ownership of failures; an optimist does the reverse.

> ⚠️ An optimistic style does not mean blaming everyone else. "I didn't study enough for this test" is internal, but it is unstable and specific, and it is one of the most useful explanations a student can give, because it points to a cause the student can change.
      `
    },
    {
      id: 'attitudes-persuasion-p2-s2-worked',
      type: 'text' as const,
      content: `
### 📝 Worked example: two students, one failed quiz

Ana and Marcus both fail the first chemistry quiz of the year.

**Ana:** "I'm just not a science person. I'm never going to get this, and honestly I'm bad at school in general."

**Marcus:** "I crammed the night before, and stoichiometry was brand new. Next time I'll start practice problems earlier."

**Step 1 — Internal or external?** Both name something about themselves, so both explanations are internal.

**Step 2 — Stable or unstable?** Ana's cause ("not a science person," "never") is permanent. Marcus's cause (cramming, a new skill) can change. Ana: stable. Marcus: unstable.

**Step 3 — Global or specific?** Ana extends the failure to "school in general." Marcus limits it to one unit. Ana: global. Marcus: specific.

**Step 4 — Classify.** Ana shows the pessimistic pattern for a bad event (internal, stable, global). Marcus shows an optimistic pattern (internal but unstable and specific).

**Step 5 — Predict behavior.** Marcus is more likely to seek help and change his study habits, because his explanation names a cause he can fix. Ana is more likely to stop trying, because her explanation says effort won't matter.

### Why explanatory style matters

- **Learned helplessness (Unit 3 and Unit 5 link):** In Seligman's early research, dogs exposed to shocks they could not escape later failed to escape shocks they could have avoided. Seligman and colleagues later proposed that people who explain bad events in an internal, stable, global way are more likely to show this kind of helplessness.
- **Depression (Unit 5):** A pessimistic explanatory style is a well-documented risk factor associated with depression. The link is correlational, but it is a reason cognitive therapies teach people to dispute pessimistic explanations.
- **Persistence:** In a correlational study of insurance sales agents, Seligman and Schulman found that agents with a more optimistic explanatory style sold more and were more likely to stay on the job.

> 🔑 **AP Connection:** Explanatory style is a *pattern* across many events. One sentence after one bad grade is an attribution; a habit of explaining many setbacks the same way is an explanatory style. If a stem says "usually," "every time," or "across situations," think explanatory style.
      `
    },
    {
      id: 'attitudes-persuasion-p2-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Classify the explanation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After dropping an easy pass in the final minute of a game, a player says, "I always choke when it matters, and I ruin things for everyone." Her explanation for this bad event is best classified as',
            options: [
              'external, unstable, and specific, an optimistic style',
              'internal, unstable, and specific, an optimistic style',
              'external, stable, and global, a pessimistic style',
              'internal, stable, and global, a pessimistic style'
            ],
            correctAnswer: 3,
            explanation: '"I always choke" places the cause in herself (internal) and makes it permanent (stable), and "I ruin things for everyone" spreads it beyond this game (global). Internal, stable, and global explanations for a bad event form the pessimistic style.'
          },
          {
            question: 'Theo wins the regional spelling bee and tells his friends, "The judges just picked easy words today. I\'ll probably never place again." His explanation is best described as',
            options: [
              'An optimistic style applied to a good event',
              'The self-serving bias protecting his ego',
              'A pessimistic style applied to a good event',
              'An internal locus of control over success'
            ],
            correctAnswer: 2,
            explanation: 'Theo explains a success with an external cause (easy words), an unstable cause (just today), and a specific one (this bee). For good events, that is the pessimistic pattern. A self-serving bias would have him take credit for the win, not give it away.'
          },
          {
            question: 'Which response to being turned down for a summer job best reflects an optimistic explanatory style?',
            options: [
              '"My answers were rushed, and I can practice them before the next interview."',
              '"Managers here are all unfair, so applying anywhere else is a waste of time."',
              '"I am just not the kind of person that employers would ever want to hire."',
              '"I always say the wrong thing, in job interviews and everywhere else too."'
            ],
            correctAnswer: 0,
            explanation: 'Rushed answers are a cause that is unstable (they can be practiced) and specific (one interview skill), which is the optimistic pattern for a bad event. Blaming unfair managers everywhere is external but stable and global, so it still predicts giving up, and the other two responses are internal, stable, and global.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p2-s4-locus',
      type: 'text' as const,
      content: `
### 🎛️ Locus of control

**Locus of control**, a concept developed by Julian Rotter, is a person's general expectation about what controls the outcomes in his or her life.

| | **Internal locus of control** | **External locus of control** |
|--|-------------------------------|-------------------------------|
| Core belief | "What happens to me depends mainly on my own actions." | "What happens to me depends mainly on luck, fate, or powerful others." |
| Typical statement | "If I put in the work, my grade will go up." | "Grades depend on which teacher you get." |
| Associated with (correlational findings) | More active coping, more health-protective behavior, higher achievement | More stress and helplessness when facing setbacks |

Rotter measured locus of control with a questionnaire of paired statements in which people pick the one they agree with more. Because locus of control is measured rather than assigned, most findings about it are **correlational**: an internal locus is linked with good outcomes, but those outcomes could also feed back into how much control people feel.

**A classic study of perceived control.** Ellen Langer and Judith Rodin (1976) worked with residents of a nursing home. Residents on one floor were encouraged to make their own choices, such as arranging their rooms and caring for a plant themselves. Residents on a comparison floor were told the staff would take care of these things for them. The residents given responsibility became more active and reported feeling happier, and a later follow-up suggested better health. Increasing people's sense of control over everyday outcomes changed their behavior and well-being.

### Keep these four ideas separate

| Concept | When it happens | Core question | Example |
|---------|-----------------|---------------|---------|
| **Attribution** | After one event | Why did that happen? | "She won because she practiced." |
| **Explanatory style** | A habit across many events | How do I usually explain good and bad events? | "Bad things are always my fault and ruin everything." |
| **Locus of control** | A general expectation, before outcomes | Do my actions control what happens to me? | "If I study, my grades go up." |
| **Self-efficacy** (Topic 4.5) | A belief about one task, before trying | Can I do this specific thing? | "I can solve these calculus problems." |

**Worked distinction:** Jordan agrees that grades depend on effort (internal locus of control) but doubts he can write a strong essay (low self-efficacy for essay writing). Both can be true at once. Locus of control is about whether actions matter; self-efficacy is about whether you can perform the action.
      `
    },
    {
      id: 'attitudes-persuasion-p2-s5-input',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'A student says, "Whether I get the scholarship depends on luck and the committee\'s mood, not on anything I do." This student shows a(n) _____ locus of control.',
            answer: 'external',
            acceptableAnswers: ['external locus', 'external locus of control', 'externally'],
            explanation: 'Expecting outcomes to be controlled by luck or powerful others is an external locus of control.'
          },
          {
            question: 'In explanatory style, the dimension that asks whether a cause will keep operating over time runs from stable to _____.',
            answer: 'unstable',
            acceptableAnswers: ['temporary', 'not stable'],
            explanation: 'The stable versus unstable dimension asks whether the cause is permanent ("I\'m always bad at this") or temporary ("I had an off day").'
          },
          {
            question: 'Believing you can successfully carry out one specific task, such as giving a speech, is called self-_____.',
            answer: 'efficacy',
            acceptableAnswers: ['self-efficacy', 'self efficacy', 'efficacy belief'],
            explanation: 'Self-efficacy is a task-specific belief in one\'s own capability, which is different from a general expectation that actions control outcomes.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p2-s6-data',
      type: 'text' as const,
      content: `
### 📊 Applying attribution biases to new data

On the exam you are less likely to be asked "define self-serving bias" than to be shown data and asked what pattern it reveals.

**Practice data set (hypothetical):** Forty high school coaches were asked to explain their team's last win and last loss. Each explanation was coded as internal (the team's effort, skill, or preparation) or external (referees, weather, injuries, luck).

| Explanation coded as... | After a win | After a loss |
|-------------------------|-------------|--------------|
| Internal | 78% | 31% |
| External | 22% | 69% |

**Reading the table:**
1. Compare the columns, not the rows. Internal explanations drop from 78% after wins to 31% after losses.
2. Name the pattern. Coaches credit their own team for wins and outside forces for losses, which is the **self-serving bias** operating at the level of a group.
3. State a limit. These are coded verbal explanations from one sample of coaches, so the data show what coaches *say*, not what actually caused the results.

### ⚠️ Misconceptions about explanation and control

| Misconception | Correction |
|---------------|------------|
| Any external explanation is optimistic. | "The whole system is rigged against me" is external but stable and global, and it predicts giving up. Optimism for bad events is about unstable and specific causes. |
| Locus of control is an explanation of one event. | It is a general expectation that a person carries into many situations. |
| Internal locus of control and high self-efficacy are the same thing. | A person can believe effort matters while doubting his or her skill at a particular task. |
| Explanatory style is a fixed trait. | It can change. Cognitive therapies (Unit 5) train people to notice and dispute pessimistic explanations. |
| Pessimistic style means negative attitudes toward others. | It describes how a person explains events, especially his or her own setbacks and successes. |
      `
    },
    {
      id: 'attitudes-persuasion-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Data and Distinctions** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Look again at the practice coach data. Which result, if it had been found instead, would most weaken the claim that the coaches showed a self-serving bias?',
            options: [
              'The same pattern appeared for coaches across every sport in the sample',
              'Coaches gave internal explanations for most wins and for most ties too',
              'Coaches of winning teams gave longer explanations than losing coaches',
              'Internal explanations made up about the same share after wins and losses'
            ],
            correctAnswer: 3,
            explanation: 'The self-serving bias is an asymmetry: credit for success, outside blame for failure. If internal explanations were equally common after wins and losses, the asymmetry would disappear. A pattern repeated across sports would strengthen the claim, and the other two results do not compare wins with losses.'
          },
          {
            question: 'Kiara strongly agrees that "how well I do in school depends on my own effort," but she says she is terrible at public speaking and dreads her history presentation. Which pairing best describes Kiara?',
            options: [
              'External locus of control with low self-efficacy for speaking',
              'Internal locus of control with a pessimistic explanatory style',
              'Internal locus of control with low self-efficacy for speaking',
              'Internal locus of control with high self-efficacy for speaking'
            ],
            correctAnswer: 2,
            explanation: 'Believing that outcomes depend on her effort is an internal locus of control, and doubting her ability to give a speech is low self-efficacy for that task. Nothing describes a habit of explaining bad events as permanent and pervasive, so there is no evidence of a pessimistic explanatory style.'
          }
        ]
      }
    }
  ]
}
