export const psychAttitudesPart3Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Attitudes and Persuasion

**Part 3 of 7 — Person Perception: Mere Exposure, Self-Fulfilling Prophecy, and Social Comparison**

> 🔑 **Key Concept:** Person perception is how we form impressions of other people and of ourselves. The CED names four processes: the **mere exposure effect** (familiarity breeds liking), the **self-fulfilling prophecy** (expectations change behavior until they come true), **social comparison** (judging ourselves against others), and **relative deprivation** (feeling deprived compared with others).

### 1. The mere exposure effect

The **mere exposure effect** occurs when repeated exposure to a stimulus over time causes people to like it more. No reward, argument, or pairing is needed. Familiarity alone does the work.

| Study | What happened |
|-------|---------------|
| **Robert Zajonc (1968)** | People rated unfamiliar stimuli, such as nonsense words and Chinese characters shown to people who could not read them, more positively the more often they had seen them. |
| **Moreland and Beach (1992)** | Four women of similar appearance attended a large college lecture course different numbers of times (0, 5, 10, or 15 sessions) and never interacted with the other students. At the end of the term, students rated the women who had attended more often as more attractive and more likable. |
| **Mita, Dermer, and Knight (1977)** | People preferred a mirror-image photo of their own face, the version they see in the mirror, while their friends preferred the true photo, the version the friends usually see. |
| **Kunst-Wilson and Zajonc (1980)** | Shapes flashed too briefly to be recognized were later preferred over new shapes. Liking increased even without conscious recognition. |

**Why does it happen?** Two common explanations:
- Familiar things are easier to process, and that ease feels pleasant.
- From an evolutionary view, something encountered many times without harm is probably safe.

**Limits that exam questions like to test:**
- The effect is strongest for stimuli that start out **neutral or mildly positive**. Repeated exposure to something people already dislike does not reliably make them like it.
- **Too much** repetition can produce boredom. Advertisers call this "wear-out."
- It explains part of why we tend to like people we see often (classmates, neighbors) and why ads repeat the same logo and jingle.

> 🔑 **AP Connection:** Mere exposure is NOT classical conditioning. In conditioning, the object is paired with something that already produces a feeling. In mere exposure, the object is simply encountered again and again with nothing paired to it.
      `
    },
    {
      id: 'attitudes-persuasion-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Familiarity and liking** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A transfer student sits near the same group of classmates in every class for a semester but rarely talks with them. By December, they rate her as more likable than other students they have seen less often. This pattern best illustrates',
            options: [
              'the halo effect',
              'the mere exposure effect',
              'a self-fulfilling prophecy',
              'upward social comparison'
            ],
            correctAnswer: 1,
            explanation: 'The classmates like her more simply because they have encountered her repeatedly, with no interaction, reward, or expectation involved. That is the mere exposure effect, which is also why proximity is linked to liking.'
          },
          {
            question: 'A radio station plays a new song every hour. Listener ratings rise over the first week, but by the third week many listeners say they are sick of it. Which conclusion is best supported?',
            options: [
              'Repetition raised liking at first, but too much airtime wore it out.',
              'Liking always rises with exposure, so later ratings must be errors.',
              'Listeners never liked the song and only rated it to please the station.',
              'Ratings fell because listeners formed a prophecy about the song.'
            ],
            correctAnswer: 0,
            explanation: 'The early rise fits the mere exposure effect, and the later drop fits its known limit: heavy repetition leads to boredom, or wear-out. The effect is not unlimited, so a later drop is expected rather than an error.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p3-s3-prophecy',
      type: 'text' as const,
      content: `
### 2. The self-fulfilling prophecy

A **self-fulfilling prophecy** happens when people behave in ways that draw out behavior from others that confirms their beliefs or perceptions about themselves or others. The expectation does not just color what you see; it changes what actually happens.

**The four-step chain:**
1. **Expectation:** A perceiver holds a belief about a target ("This student is gifted").
2. **Treatment:** The perceiver acts on the belief (more attention, warmer feedback, more challenging questions).
3. **Response:** The target reacts to that treatment (more effort, more confidence).
4. **Confirmation:** The target's behavior now matches the original expectation, and the perceiver takes it as proof.

The prophecy can also point at **yourself**. A student who expects to bomb an audition may skip practice because "there's no point," then perform poorly and conclude she was right.

### Two classic studies

**Rosenthal and Jacobson (1968), "Pygmalion in the Classroom."** At an elementary school, teachers were told that certain students, who had actually been chosen at random, were likely to show an intellectual "growth spurt" that year. Those students showed larger IQ gains than their classmates by the end of the year, with the clearest effects in the youngest grades. Because the labels were random, the gains are attributed to teachers' expectations rather than to real differences between students.

*Critiques:* Later attempts to replicate the effect produced mixed results. Reviews of teacher-expectation research (for example, Jussim and Harber, 2005) conclude that such effects are real but usually modest, and that teachers' expectations are often fairly accurate to begin with.

**Snyder, Tanke, and Berscheid (1977).** Men had phone conversations with women after being shown a photo that they believed was of their partner. The photo, which was not actually of the partner, showed either an attractive or an unattractive woman. Listeners who heard only the women's side of the conversation rated the women whose partners believed they were attractive as friendlier and more sociable. The men's expectation changed how they talked, and that changed how the women responded.

### Self-fulfilling prophecy vs. confirmation bias

| | Self-fulfilling prophecy | Confirmation bias (Part 4) |
|--|--------------------------|----------------------------|
| What changes? | The **target's actual behavior** | Only the **perceiver's** search for and reading of information |
| Example | A coach who expects a player to be weak gives her fewer drills, and her skills stall. | A coach notices every mistake a player makes and overlooks her good plays, though her play is average. |

> 🔑 **AP Connection:** To identify a self-fulfilling prophecy, you need evidence that the target's behavior really changed because of how the perceiver treated him or her. If only the perceiver's interpretation changed, it's confirmation bias.
      `
    },
    {
      id: 'attitudes-persuasion-p3-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Process** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A manager expects a new hire to be lazy, gives him only dull tasks and little feedback, and months later sees him disengaged, "just as I expected." This is a(n) _____.',
            options: ['mere exposure effect', 'self-fulfilling prophecy', 'confirmation bias', 'fundamental attribution error']
          },
          {
            label: 'A fan who is sure a referee favors the other team remembers every close call against her side and forgets the ones that went her way. This is a(n) _____.',
            options: ['mere exposure effect', 'self-fulfilling prophecy', 'confirmation bias', 'fundamental attribution error']
          },
          {
            label: 'After walking past the same mural on the way to school every day for a year, Kai now says it is his favorite piece of art in town. This is a(n) _____.',
            options: ['mere exposure effect', 'self-fulfilling prophecy', 'confirmation bias', 'fundamental attribution error']
          }
        ],
        correctAnswers: ['self-fulfilling prophecy', 'confirmation bias', 'mere exposure effect'],
        hint1: 'Did the manager\'s treatment change how the new hire actually behaved?',
        hint2: 'The referee\'s calls did not change. Only what the fan noticed and remembered did.',
        hint3: 'Nothing was paired with the mural. Kai simply saw it over and over.',
        explanation: 'The manager\'s expectation shaped his treatment, which produced the disengagement he expected: a self-fulfilling prophecy. The fan selectively remembers evidence that fits her belief: confirmation bias. Kai\'s liking grew from repeated encounters alone: the mere exposure effect.'
      }
    },
    {
      id: 'attitudes-persuasion-p3-s5-comparison',
      type: 'text' as const,
      content: `
### 3. Social comparison

Leon Festinger's **social comparison theory** (1954) proposes that when people lack an objective standard, they evaluate their own abilities and opinions by comparing themselves with others. The CED describes two directions.

| Direction | Compare yourself with... | Common effects | Example |
|-----------|--------------------------|----------------|---------|
| **Upward** | Someone better off or more skilled | Can inspire when the gap seems closable; can lower mood and self-esteem when it doesn't | A JV runner compares her mile time with the varsity captain's. |
| **Downward** | Someone worse off or less skilled | Can lift mood and protect self-esteem; may reduce the push to improve | A student with a B notices that many classmates failed. |

**Big-fish-little-pond effect.** Research by Herbert Marsh and colleagues shows that students of similar ability tend to have a lower academic self-concept at high-achieving schools than at average schools. Their comparison group is stronger, so they see themselves as less able.

**Curated feeds.** Social media makes upward comparison easy, since people mostly post their best moments. Studies have found correlations between frequent upward comparison online and lower well-being. Remember that correlations alone do not show which comes first.

### 4. Relative deprivation

**Relative deprivation** is the sense of being deprived relative to others, regardless of one's absolute situation. What matters is the gap between what you have and what your comparison group has, or what you believe you deserve.

**Classic evidence.** In *The American Soldier* (Stouffer and colleagues, 1949), soldiers in the Army Air Corps were promoted faster than soldiers in the Military Police, yet the Air Corps soldiers were *more* dissatisfied with their chances of promotion. Surrounded by peers who had been promoted, they judged their own progress against a higher bar.

### Worked example: absolute vs. relative

**Situation:** Sam earns \\$60,000 a year at a company where people in the same job earn \\$75,000. Riley earns \\$45,000 at a company where people in the same job earn \\$40,000.

**Step 1 — Absolute standing:** Sam earns more than Riley.

**Step 2 — Relative standing:** Sam is \\$15,000 *below* his comparison group. Riley is \\$5,000 *above* hers.

**Step 3 — Predict:** Sam is more likely to feel deprived and dissatisfied, even though he earns more. Relative deprivation depends on the comparison, not on the absolute amount.

> 🔑 **AP Connection:** Relative deprivation is a feeling of unfairness or shortfall that grows out of upward comparison. On the exam, the tell is a person or group that is objectively fine, or even improving, yet feels worse off after learning what others have.
      `
    },
    {
      id: 'attitudes-persuasion-p3-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Person Perception** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'After finishing a 5K in 31 minutes, Nora feels discouraged when she sees that her cousin, a college runner, finished in 18 minutes. The next week she feels proud after noticing that she beat most of the walkers in her age group. Which sequence describes Nora\'s comparisons?',
            options: [
              'A downward comparison followed by an upward one',
              'A downward comparison followed by relative deprivation',
              'An upward comparison followed by a downward one',
              'Relative deprivation followed by an upward comparison'
            ],
            correctAnswer: 2,
            explanation: 'Comparing herself with a faster runner is an upward comparison, and it lowered her mood. Comparing herself with slower walkers is a downward comparison, and it lifted her mood. Relative deprivation concerns feeling shortchanged in outcomes or resources, which the scenario does not describe.'
          },
          {
            question: 'In a year when every employee at a company gets a 3% raise, workers in one department are angrier than they were the year before, when they got no raise at all. Interviews show they had learned that a rival department received 8% raises. Their anger is best explained by',
            options: [
              'downward social comparison',
              'the mere exposure effect',
              'an external locus of control',
              'relative deprivation'
            ],
            correctAnswer: 3,
            explanation: 'The workers are better off in absolute terms than last year, yet they feel worse because they compare their raise with a group that got more. Feeling deprived relative to a comparison group is relative deprivation. Their comparison is upward, not downward.'
          },
          {
            question: 'In a practice study, camp counselors are told that certain campers are "natural athletes," but the labels were actually assigned by drawing names from a hat. By the end of the summer, the labeled campers show larger skill gains. Which detail matters most for concluding that the counselors\' expectations caused those gains?',
            options: [
              'The counselors believed that every label was accurate.',
              'The label each camper received was decided by chance.',
              'The campers improved their skills over the summer.',
              'The counselors had worked at the camp for many years.'
            ],
            correctAnswer: 1,
            explanation: 'Assigning labels by chance means the labeled campers should not have differed in real ability at the start, so a difference at the end points to the counselors\' expectations and treatment. Counselors believing the labels is needed for the effect to occur, but by itself it does not rule out real ability differences.'
          }
        ]
      }
    }
  ]
}
