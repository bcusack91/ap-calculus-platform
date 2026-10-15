export const psychMotivationPart3Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Motivation Theories

**Part 3 of 7 — Sensation-Seeking Theory**

Two friends walk past a skydiving booth at a county fair. One signs up on the spot; the other feels queasy just reading the brochure. Same booth, same price, same weather. Sensation-seeking theory says the difference lies in the people, not the situation.

### From Arousal Theory to Sensation Seeking

Part 2 ended with a key idea: the optimal level of arousal is **not the same for everyone**. **Sensation-seeking theory**, developed by psychologist Marvin Zuckerman, builds on it.

The CED states the theory this way: **one's level of need for varied or novel experiences is the basis of motivation.**

| | Arousal theory | Sensation-seeking theory |
|------|-----------|-----------|
| **Main question** | How does everyone regulate arousal around an optimum? | Why do some people need far more novelty and intensity than others? |
| **Focus** | A general process shared by all people | **Individual differences**: a trait that varies from person to person |
| **Typical prediction** | A bored person seeks stimulation; an overwhelmed person seeks calm | A high sensation seeker chooses intense, varied, risky activities even when not bored |

### 📚 The Four Types of Sensation Seeking

The CED lists four types. A person can score high on one and low on another, so it helps to think of them as four separate dimensions.

| Type | What the person seeks | Typical behaviors |
|------|-----------|-----------|
| **Thrill or adventure seeking** | Physically exciting activities that involve speed, danger or unusual physical sensations | Skydiving, rock climbing, white-water rafting, riding the most extreme roller coaster in the park |
| **Experience seeking** | New sensations and experiences through the mind and senses, and an unconventional lifestyle | Traveling to unfamiliar places, trying unusual foods, exploring strange art or music, meeting people very different from oneself |
| **Disinhibition** | Stimulation through social situations that loosen normal restraints | Wild parties, impulsive social behavior, acting without the usual social filters |
| **Boredom susceptibility** | Avoidance of routine and repetition; strong dislike of being bored | Restlessness with repetitive tasks, quickly losing interest in predictable people, movies or jobs |

### Telling the Types Apart

The trickiest pair is **thrill or adventure seeking** vs. **experience seeking**.

- Thrill or adventure seeking is about **physical** intensity: speed, height, danger.
- Experience seeking is about **novelty for the mind and senses**: new ideas, places, foods, art and lifestyles. Visiting a remote village to learn a new language is experience seeking even though nothing about it is physically dangerous.

The second tricky pair is **boredom susceptibility** vs. the others. Boredom susceptibility is mostly about what a person **cannot tolerate** (sameness and routine), while the other three describe what a person **actively goes after**.
      `
    },
    {
      id: 'motivation-theories-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Amara spends her summer savings on a solo trip to a country whose language she does not speak, eats at food stalls she has never heard of and spends her evenings at concerts of music she has never heard before. Which type of sensation seeking does this best show?',
            options: [
              'Thrill or adventure seeking',
              'Experience seeking',
              'Disinhibition',
              'Boredom susceptibility'
            ],
            correctAnswer: 1,
            explanation: 'Amara is seeking novelty for the mind and senses through unfamiliar places, foods and music, which is experience seeking. Nothing in the trip involves physical danger or speed, she is not loosening social restraints at parties, and the scenario stresses what she seeks rather than a dislike of routine.'
          },
          {
            question: 'Which statement best describes how sensation-seeking theory differs from arousal theory?',
            options: [
              'It says that people work to keep their arousal as low as possible',
              'It explains motivation by how strongly each person needs novelty',
              'It says that every person shares the same optimal level of arousal',
              'It explains motivation by how a body restores a stable internal state'
            ],
            correctAnswer: 1,
            explanation: 'Sensation-seeking theory focuses on individual differences in the need for varied or novel experiences. Arousal theory describes a general process of seeking an optimal level, while keeping arousal low and restoring a stable internal state belong to drive-reduction thinking.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p3-s3-classify',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Example** 🔍

Choose the type of sensation seeking each person shows most clearly.
      `,
      exercise: {
        dropdowns: [
          { label: 'Diego signs up for a motorcycle racing course because he loves the rush of speed and the danger of tight corners', options: ['Thrill or adventure seeking', 'Experience seeking', 'Disinhibition', 'Boredom susceptibility'] },
          { label: 'Kiara quits a well-paid data-entry job after a month because doing the same task every day makes her restless and miserable', options: ['Thrill or adventure seeking', 'Experience seeking', 'Disinhibition', 'Boredom susceptibility'] },
          { label: 'At parties, Owen acts on impulses he would normally hold back and seeks out the loudest, wildest crowd', options: ['Thrill or adventure seeking', 'Experience seeking', 'Disinhibition', 'Boredom susceptibility'] },
          { label: 'Mei reads philosophy from cultures she knows nothing about and tries to live for a month without a phone just to see how it feels', options: ['Thrill or adventure seeking', 'Experience seeking', 'Disinhibition', 'Boredom susceptibility'] }
        ],
        correctAnswers: ['Thrill or adventure seeking', 'Boredom susceptibility', 'Disinhibition', 'Experience seeking'],
        hint1: 'Speed and physical danger point to thrill or adventure seeking.',
        hint2: 'Kiara is not chasing anything; she cannot tolerate sameness and routine.',
        hint3: 'Loosening normal social restraints is disinhibition; new ideas and lifestyles are experience seeking.',
        explanation: 'Diego seeks physical speed and danger (thrill or adventure seeking). Kiara cannot tolerate repetition (boredom susceptibility). Owen seeks stimulation by dropping social restraints (disinhibition). Mei seeks novel ideas and an unconventional way of living (experience seeking).'
      }
    },
    {
      id: 'motivation-theories-p3-s4-measure',
      type: 'text' as const,
      content: `
### 📚 Measuring Sensation Seeking

Sensation seeking is a **trait**, so researchers measure it with **self-report questionnaires**. Zuckerman's Sensation Seeking Scale uses a **forced-choice** format: each item offers two statements, and the respondent picks the one that describes them better. Items in the style of the scale look like this:

| Statement A | Statement B | Type it taps |
|------|-----------|-----------|
| I would like to try parachute jumping. | I would never want to jump out of a plane. | Thrill or adventure seeking |
| I like to explore a strange city on my own, even if I get lost. | I prefer a guided tour when I visit a new city. | Experience seeking |
| I get restless when I spend too much time at home. | I enjoy quiet evenings at home. | Boredom susceptibility |

*(Items written for this lesson to show the format; they are not quoted from the published scale.)*

Separate scores are calculated for each of the four types, plus a total score.

### Strengths and Limits of Self-Report

| Strength | Limit |
|------|-----------|
| Quick and cheap to give to large samples | People may answer in socially desirable ways, for example claiming more or less daring than they really have |
| Measures attitudes that are hard to observe directly | Answers depend on honest self-insight |
| Allows the same measure to be used across many studies | Items written in one culture may not mean the same thing in another |

### What Research Shows

Across many studies, sensation-seeking scores show some consistent patterns:

- Scores tend to **rise during adolescence, peak in the late teens and early twenties and decline with age.**
- Higher scores are **correlated with** risky driving, extreme sports, substance use and gambling, but also with healthy choices such as adventurous travel, creative hobbies and careers like firefighting or emergency medicine.
- Researchers have linked high sensation seeking to the brain's **dopamine**-based **reward system**, one reason novelty can feel especially rewarding to some people.

Notice the wording **"correlated with."** Most sensation-seeking research is **non-experimental**: researchers cannot randomly assign someone to be a high sensation seeker.
      `
    },
    {
      id: 'motivation-theories-p3-s5-terms',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️

Type one term for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'The type of sensation seeking marked by a strong dislike of routine and repetition is boredom ___.',
            answer: 'susceptibility',
            acceptableAnswers: ['susceptibility', 'boredom susceptibility'],
            explanation: 'Boredom susceptibility describes an intolerance for sameness, routine and predictable people or tasks.'
          },
          {
            question: 'A study finds that people with higher sensation-seeking scores tend to report more speeding tickets. The correlation between these variables is ___ (positive or negative).',
            answer: 'positive',
            acceptableAnswers: ['positive', 'a positive correlation', 'positive correlation'],
            explanation: 'When two variables rise together, the correlation is positive. A positive correlation still does not show that sensation seeking causes speeding.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p3-s6-correlation',
      type: 'text' as const,
      content: `
### 🔬 Worked Example: Interpreting a Sensation-Seeking Correlation

*Practice study (not a real citation).* Researchers give 300 college students a sensation-seeking questionnaire (total score 0 to 40) and ask them how many times in the past year they drove more than 15 mph over the speed limit. They report:

| Variable pair | Correlation coefficient (r) |
|------|-----------|
| Sensation-seeking total and speeding episodes | +0.42 |
| Thrill or adventure seeking subscale and speeding episodes | +0.48 |
| Sensation-seeking total and weekly hours of studying | -0.12 |

**Step 1: Direction.** The first two correlations are positive: higher scores go with more speeding. The third is negative: higher scores go with slightly fewer study hours.

**Step 2: Strength.** The closer r is to +1 or -1, the stronger the relationship. +0.48 and +0.42 are moderate; -0.12 is weak, so sensation seeking tells us very little about study hours.

**Step 3: Causation.** The study is **correlational**, so it cannot show that sensation seeking **causes** speeding. Two alternative explanations remain:

- **Third variables:** a factor such as age or a friend group that speeds could raise both scores.
- **Direction:** having gotten away with speeding might make a person describe themselves as more daring on the questionnaire.

**Step 4: Generalizability.** All participants were college students, who are young and close to the age when sensation seeking peaks. The size of the correlation might be different in middle-aged adults or in people who do not drive often.

**Step 5: Measurement.** Both variables are **self-reported**. Students might underreport speeding, which would add error and could weaken the correlation.

> **AP Connection:** On the exam, never write that a correlational finding "proves" or "causes." Use "is associated with" or "predicts," and if asked for a limitation, name a specific third variable or a problem with the sample.
      `
    },
    {
      id: 'motivation-theories-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the practice study, the correlation between sensation-seeking scores and speeding episodes is +0.42. Which conclusion is best supported?',
            options: [
              'Raising a person\'s sensation-seeking score would make them speed more often',
              'Students who score higher on sensation seeking tend to report more speeding',
              'Speeding raises a driver\'s need for novelty, so their scores rise over time',
              'Sensation seeking explains almost all of the differences in speeding episodes'
            ],
            correctAnswer: 1,
            explanation: 'A positive correlation means higher sensation-seeking scores tend to go with more reported speeding, and nothing more. The study cannot show causation in either direction, and a moderate correlation of +0.42 leaves most of the variation in speeding unexplained.'
          },
          {
            question: 'A researcher wants to know whether sensation seeking predicts choosing a risky career. Why is a correlational design used instead of an experiment?',
            options: [
              'Sensation seeking is a trait that cannot be randomly assigned to participants',
              'Experiments are not allowed to measure sensation seeking with a questionnaire',
              'Correlational studies prove which variable causes the other, unlike experiments',
              'Career choices can be measured only by watching people in their workplaces'
            ],
            correctAnswer: 0,
            explanation: 'An experiment needs a manipulated, randomly assigned independent variable, and a personality trait like sensation seeking cannot be assigned. Experiments can use questionnaires, correlational studies do not establish causation, and career choice can easily be measured by asking people.'
          },
          {
            question: 'A school counselor notices that a student who scores very high on thrill or adventure seeking keeps getting into trouble for dangerous stunts. Which recommendation best applies sensation-seeking theory?',
            options: [
              'Steer him toward rock climbing or a supervised sport that offers physical intensity',
              'Assign him extra quiet study time to lower his need for novelty to a normal level',
              'Reward him with snacks so that his behavior is driven by a physical need for food',
              'Encourage him to attend more parties so that he can lower his social restraints'
            ],
            correctAnswer: 0,
            explanation: 'Sensation-seeking theory treats the need for intense experience as a stable trait, so the most realistic approach is to channel it into safer outlets that still provide physical intensity. Quiet study time does not change the trait, food rewards address a different motive and parties target disinhibition rather than thrill seeking.'
          }
        ]
      }
    }
  ]
}
