export const psychAttitudesPart7Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Attitudes and Persuasion

**Part 7 of 7 — Synthesis Review: From Perception to Persuasion**

> 🔑 **Key Concept:** Every idea in this topic answers one of five questions: Where do attitudes come from? How do we explain what happens? How do we size up ourselves and others? Why do beliefs stick? What changes them? Seeing those links lets you handle scenarios that mix several concepts at once.

### Concept map

| Question | Concepts | Part |
|----------|----------|------|
| **Where do attitudes come from?** | Classical and operant conditioning, observational learning, direct experience, repeated exposure; explicit vs. implicit attitudes; when attitudes predict behavior | 1 |
| **How do we explain what happens?** | Explanatory style (optimistic vs. pessimistic), locus of control (internal vs. external), applying attribution biases to data | 2 |
| **How do we size up ourselves and others?** | Mere exposure effect, self-fulfilling prophecy, upward and downward social comparison, relative deprivation | 3 |
| **Why do beliefs stick?** | Belief perseverance, confirmation bias | 4 |
| **What changes attitudes?** | Cognitive dissonance (post-decision, effort, insufficient justification); ELM route factors; halo effect; foot-in-the-door and door-in-the-face | 4, 5 |
| **How do we study all of this?** | Experiments vs. correlational studies, operational definitions, AAQ and EBQ reasoning | 6 |

### How the pieces connect

- **Explanation shapes motivation.** A pessimistic explanatory style for setbacks and an external locus of control both predict giving up, the pattern linked to learned helplessness.
- **Expectations become reality.** A self-fulfilling prophecy often starts with a belief that confirmation bias keeps alive: the perceiver notices only what fits, treats the target accordingly, and then sees the "proof."
- **Familiarity and impressions are peripheral cues.** The mere exposure effect and the halo effect both let liking stand in for careful evaluation, which is why advertisers repeat logos and hire attractive spokespeople.
- **Behavior can lead attitudes.** Foot-in-the-door and cognitive dissonance both show that acting first can change what people believe afterward.
- **Strong attitudes come from deep processing.** Central-route persuasion and direct experience both produce durable attitudes that predict behavior, while belief perseverance makes those attitudes hard to undo.
      `
    },
    {
      id: 'attitudes-persuasion-p7-s2-clues',
      type: 'text' as const,
      content: `
### 🔎 Scenario clue table

Exam scenarios rarely name the concept. Find the clue, then rule out the closest look-alike.

| Clue in the scenario | Concept | Most often confused with | How to tell them apart |
|----------------------|---------|--------------------------|------------------------|
| A habit of explaining setbacks as permanent and pervasive | Pessimistic explanatory style | A single attribution | Style is a pattern across many events. |
| A general belief that outcomes depend on luck or powerful others | External locus of control | Situational attribution | Locus of control is an expectation, not an explanation of one event. |
| Liking grows from repeated encounters with nothing paired | Mere exposure effect | Classical conditioning | Conditioning needs a pairing with something that already produces a feeling. |
| An expectation changes how a target is treated, and the target changes | Self-fulfilling prophecy | Confirmation bias | In confirmation bias, only the perceiver's interpretation changes. |
| Judging yourself against someone better or worse off | Upward or downward social comparison | Relative deprivation | Relative deprivation is a sense of being shortchanged in outcomes or resources. |
| A group that is objectively better off feels cheated after comparing | Relative deprivation | Downward comparison | The comparison runs toward those who have more. |
| A belief survives after its evidence is discredited | Belief perseverance | Confirmation bias | Perseverance is the outcome; biased search and interpretation is the process. |
| Discomfort after acting against an attitude, then a shifted attitude | Cognitive dissonance | Belief perseverance | Dissonance starts with an action that conflicts with an attitude. |
| Attitudes depend on argument quality only when the listener is motivated and able | Central route | Peripheral route | Look for relevance, knowledge, time, and freedom from distraction. |
| One appealing trait colors judgments of unrelated traits | Halo effect | Mere exposure effect | The halo comes from one trait, not from repetition. |
| Small request first, larger request later | Foot-in-the-door | Door-in-the-face | Compare the sizes of the first and second requests. |

> 🔑 **AP Connection:** When two concepts both seem to fit, ask what the scenario says *changed*: someone's expectation, someone else's behavior, a person's interpretation, or an attitude after an action. The concept that matches the change is usually the key.
      `
    },
    {
      id: 'attitudes-persuasion-p7-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Integrated Check — Which idea fits?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A tutoring program teaches struggling students to replace thoughts like "I\'m bad at math and always will be" with "I used the wrong study method on this unit." The program is mainly trying to change the students\'',
            options: [
              'exposure to the math material',
              'social comparison with top students',
              'halo impressions of their tutors',
              'explanatory style for bad events'
            ],
            correctAnswer: 3,
            explanation: 'The program replaces an internal, stable, global explanation with one that is unstable and specific, which is a shift from a pessimistic to an optimistic explanatory style. It does not change how often students see the material, whom they compare themselves with, or how they judge their tutors.'
          },
          {
            question: 'A coach believes a freshman is "uncoachable." Which additional detail would show a self-fulfilling prophecy rather than confirmation bias alone?',
            options: [
              'The coach recalls the freshman\'s errors and forgets her good plays.',
              'The coach reads scouting notes only about the freshman\'s weak spots.',
              'The coach gives the freshman less instruction, and her skills stall.',
              'The coach rates the freshman lower than other coaches watching her.'
            ],
            correctAnswer: 2,
            explanation: 'A self-fulfilling prophecy requires the target\'s actual behavior to change because of how the perceiver treats her. Less instruction leading to stalled skills shows that change. Selective memory, selective reading, and harsher ratings change only the coach\'s view of her.'
          },
          {
            question: 'After paying a large, nonrefundable fee to join an exclusive gym, Carlos dismisses a detailed report that the gym\'s equipment is outdated and keeps praising the gym to friends. Which pair of concepts best explains his response?',
            options: [
              'Dissonance reduction and confirmation bias',
              'Central-route processing and relative deprivation',
              'Mere exposure and the foot-in-the-door technique',
              'Upward comparison and external locus of control'
            ],
            correctAnswer: 0,
            explanation: 'Paying a large fee for something inferior is dissonant, so Carlos protects his decision by raising his view of the gym, and dismissing the contrary report is confirmation bias in interpretation. Central-route processing would require weighing the report on its merits.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p7-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mixed Review — Name the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A nurse says, "My patients\' recovery depends on luck and the doctors. Nothing I do changes much." She shows a(n) _____.',
            options: ['external locus of control', 'pessimistic explanatory style for a good event', 'downward social comparison', 'post-decision dissonance']
          },
          {
            label: 'Fans at a ballpark rate a slugger who is famous for hitting home runs as a better role model and a smarter person than a teammate with fewer home runs. This is the _____.',
            options: ['halo effect', 'mere exposure effect', 'self-serving bias', 'spreading of alternatives']
          },
          {
            label: 'Residents of a neighborhood that got new parks and a library are angrier than before after learning that a nearby neighborhood got a new sports complex too. This is _____.',
            options: ['relative deprivation', 'belief perseverance', 'effort justification', 'confirmation bias']
          }
        ],
        correctAnswers: ['external locus of control', 'halo effect', 'relative deprivation'],
        hint1: 'The nurse is stating a general expectation about who controls outcomes.',
        hint2: 'One impressive trait spills over into judgments of unrelated traits.',
        hint3: 'The residents are better off than before, yet they feel worse after comparing.',
        explanation: 'The nurse expects outcomes to be controlled by luck and other people: an external locus of control. Home-run hitting shapes judgments of character and intelligence: the halo effect. A neighborhood that gained resources feels shortchanged compared with another: relative deprivation.'
      }
    },
    {
      id: 'attitudes-persuasion-p7-s5-case',
      type: 'text' as const,
      content: `
### 📝 Integrated case: the new lunch schedule

**Situation:** A high school plans to split lunch into three shorter periods next fall. The principal wants student support.

**Step 1 — Persuasion route.** For current freshmen and sophomores, the change is personally relevant, so they are likely to take the **central route**: strong reasons (shorter lines, more seating) will persuade them, and weak reasons will backfire. For seniors who graduate before the change, relevance is low, so **peripheral cues** such as a popular teacher's endorsement will matter more.

**Step 2 — Presentation.** The student council first asks students to fill out a one-question survey about lunch lines, then a week later asks them to sign a letter supporting the plan. That is **foot-in-the-door**.

**Step 3 — Halo.** The plan is announced by the school's beloved soccer coach. Students who admire her judge the plan more favorably without reading the details, which is a **halo effect** working on the peripheral route.

**Step 4 — After the change.** Students who signed the letter and then find the new periods rushed feel **cognitive dissonance**. Because they freely signed in public, many will adjust their attitude ("it's not that rushed") rather than admit they were wrong.

**Step 5 — Comparison.** When students hear that a rival school kept one long lunch, some feel **relative deprivation**, even though their own lines are shorter than before.

**Step 6 — Explanations.** A student who keeps missing lunch says, "I'm always disorganized; I mess everything up." That is a **pessimistic explanatory style**. A friend who says, "I need to pack my bag before the bell" shows an optimistic one.

### ⚠️ Final misconception sweep

| Misconception | Correction |
|---------------|------------|
| Locus of control, explanatory style, and self-efficacy are the same. | Expectation of control vs. habit of explaining events vs. belief in one's ability at a task. |
| Mere exposure always increases liking. | It works best for neutral stimuli and fades with overexposure. |
| Confirmation bias changes the target's behavior. | That is the self-fulfilling prophecy; confirmation bias changes only the perceiver's search and interpretation. |
| More reward for an action means more attitude change. | Less external justification produces more dissonance-driven change. |
| Central-route processing means being persuaded. | It means careful evaluation, which can lead to rejecting weak arguments. |
      `
    },
    {
      id: 'attitudes-persuasion-p7-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Final Practice — Mixed Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Seniors who will graduate before a new lunch schedule begins are asked to support it. According to the elaboration likelihood model, their attitudes will depend mostly on',
            options: [
              'the quality of the arguments for the new plan',
              'peripheral cues such as who endorses the plan',
              'how many of the arguments they can counter',
              'the number of hours they spend studying it'
            ],
            correctAnswer: 1,
            explanation: 'A change that will not affect the seniors has low personal relevance, which lowers motivation and pushes them toward the peripheral route. Peripheral cues like an admired endorser will matter more than argument quality.'
          },
          {
            question: 'A researcher wants to know whether students with an internal locus of control earn higher grades. She gives 300 students a locus-of-control questionnaire and collects their grade point averages. Which statement about her study is accurate?',
            options: [
              'It is an experiment because she measured two variables in the same students.',
              'It shows that grades cause locus of control if the correlation is positive.',
              'It can show a relationship but cannot show that locus of control causes grades.',
              'It needs a placebo group to show any relationship between the two variables.'
            ],
            correctAnswer: 2,
            explanation: 'Measuring two variables without manipulating either one makes this a correlational study. It can reveal a relationship, but it cannot establish that locus of control causes grades, or the reverse, and placebo groups belong to experiments.'
          },
          {
            question: 'Students in a club spent a whole weekend building a float that the judges called "average." Afterward, members rate the float as the best in school history, and they ignore photos showing that other floats were larger and more detailed. Which combination is shown?',
            options: [
              'Upward comparison, then belief perseverance',
              'Effort justification, then confirmation bias',
              'Mere exposure, then a self-fulfilling prophecy',
              'Relative deprivation, then a halo effect'
            ],
            correctAnswer: 1,
            explanation: 'The members value the float more because they worked hard on it, which is effort justification, and they protect that view by ignoring contrary photos, which is confirmation bias. Their evidence was never discredited, so belief perseverance does not fit, and no expectation changed anyone else\'s behavior.'
          }
        ]
      }
    }
  ]
}
