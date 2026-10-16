export const psychMotivationPart4Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Motivation Theories

**Part 4 of 7 — Self-Determination and Incentive Theory**

Sofia practices guitar for two hours a night because she loves figuring out new songs. Her brother practices for exactly thirty minutes because their parents pay him \\$5 a session. Same instrument, same house, very different reasons. This part explains why the reason matters.

### Intrinsic vs. Extrinsic Motivation

The CED states that **self-determination theory proposes that people are motivated by intrinsic (internal) or extrinsic (external) motivations.**

| | Intrinsic motivation | Extrinsic motivation |
|------|-----------|-----------|
| **Definition** | Doing something because the activity itself is interesting, enjoyable or satisfying | Doing something to gain an outside reward or avoid an outside punishment |
| **Source** | Inside the person and the activity | Outside the activity: money, grades, praise, prizes, deadlines, penalties |
| **What happens when the reward stops?** | The behavior tends to continue | The behavior often drops off |
| **Example** | Sofia playing guitar for the joy of it | Her brother practicing to earn \\$5 |

Most real behavior mixes both. A student can enjoy biology **and** want an A. The question on an exam is usually which kind of motivation **best explains** the behavior described.

### 📚 Self-Determination Theory

**Self-determination theory** was developed by psychologists Edward Deci and Richard Ryan. Its central claim is that the **kind** of motivation matters, not just the amount: behavior that feels self-chosen tends to be more persistent, more enjoyable and of higher quality than behavior that feels controlled from outside.

As useful background, the theory proposes that people are most intrinsically motivated when three basic psychological needs are met:

| Need | Meaning | Classroom example that supports it |
|------|-----------|-----------|
| **Autonomy** | Feeling that your actions are your own choice | Letting students choose their own research topic |
| **Competence** | Feeling capable and effective | Feedback that shows students how they are improving |
| **Relatedness** | Feeling connected to other people | A coach or teacher who clearly cares about the team |

Settings that thwart these needs, such as tight control, constant surveillance or harsh comparison, tend to weaken intrinsic motivation.

> **AP Connection:** The CED's essential knowledge for this theory focuses on the **intrinsic vs. extrinsic** distinction. The three needs are useful for explaining *why* a setting boosts or weakens intrinsic motivation in an EBQ answer.
      `
    },
    {
      id: 'motivation-theories-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which student is the clearest example of intrinsic motivation?',
            options: [
              'Ana studies Spanish verb charts every night so she can earn a spot in the honor society',
              'Ben edits his short film late into the night because he loves seeing the story come together',
              'Cal finishes extra math worksheets because his teacher hands out stickers for each one',
              'Dee runs laps after practice so that the coach will not bench her for the next game'
            ],
            correctAnswer: 1,
            explanation: 'Ben works on the film because the activity itself is satisfying, which is intrinsic motivation. The honor society, the stickers and avoiding the bench are all outside rewards or punishments, so they show extrinsic motivation.'
          },
          {
            question: 'A teacher wants to strengthen students\' intrinsic motivation for a semester project. Based on self-determination theory, which change is most likely to help?',
            options: [
              'Letting students pick their own topic and giving feedback on what they did well',
              'Posting every student\'s grade on the wall so classmates can compare their scores',
              'Checking in on students every ten minutes to keep them working on the assigned topic',
              'Announcing that the top three projects will each earn a gift card from the school'
            ],
            correctAnswer: 0,
            explanation: 'Choice supports autonomy and specific feedback supports competence, two needs that self-determination theory links to intrinsic motivation. Public comparison and constant monitoring feel controlling, and a gift card adds an extrinsic reward rather than strengthening interest in the work itself.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p4-s3-incentive',
      type: 'text' as const,
      content: `
### 📚 Incentive Theory

The CED states that **incentive theory explores the role of rewards (an extrinsic motivation) in motivating behavior.**

An **incentive** is an outside stimulus that attracts or repels: something we want to get or want to avoid. Incentive theory says behavior is **pulled** toward positive incentives and away from negative ones.

| Type | Definition | Examples |
|------|-----------|-----------|
| **Positive incentive** | An outside reward a person moves toward | A paycheck, a high grade, praise, a trophy, a tempting dessert |
| **Negative incentive** | An outside consequence a person moves away from | A speeding fine, detention, losing a starting position |

### Push vs. Pull

Incentive theory fills the biggest gap in drive-reduction theory from Part 1: behavior when **no physical need** is present.

| | Drive-reduction theory | Incentive theory |
|------|-----------|-----------|
| **Where the motivation comes from** | Inside: tension from a physical need | Outside: the appeal of a reward |
| **Metaphor** | Behavior is **pushed** | Behavior is **pulled** |
| **Explains well** | Eating when hungry | Eating dessert when already full; working overtime for a bonus |

### How Strong Is an Incentive?

The pull of an incentive is not fixed. It depends on:

- **The person.** \\$20 pulls harder for a teenager than for a millionaire.
- **Learning.** Through experience, we learn which stimuli bring rewards. This is where incentive theory overlaps with **operant conditioning** from Unit 3: a reinforcer is a consequence that makes a behavior more likely, and an incentive is that same reward viewed as something that pulls future behavior.
- **The situation.** A bottle of water is a strong incentive after a long run and a weak one after you just drank a liter.

### Worked Example: Explaining One Behavior Three Ways

*Scenario: At a family dinner, Jamal finishes a large plate of food, feels full, and then eats a slice of birthday cake when it comes out.*

1. **Drive-reduction theory:** explains the first plate (hunger, a need, restoring energy) but **not** the cake, because the hunger drive is already reduced.
2. **Incentive theory:** explains the cake. Its look, smell and taste are a positive incentive that pulls behavior even without a need.
3. **Intrinsic vs. extrinsic:** eating cake for its taste is an outside stimulus pulling behavior, so incentive language fits better than intrinsic motivation, which describes enjoying an **activity** for its own sake. Part 6 adds one more piece: social gatherings themselves are an external cue for eating.
      `
    },
    {
      id: 'motivation-theories-p4-s4-sort',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Example** 🔍

Choose the best explanation for each behavior.
      `,
      exercise: {
        dropdowns: [
          { label: 'A salesperson works extra weekends in March because the company pays a large bonus to whoever sells the most', options: ['Incentive theory', 'Intrinsic motivation', 'Drive-reduction theory', 'Arousal theory'] },
          { label: 'A retired engineer spends hours building model bridges that no one will ever see, just because she enjoys the problem-solving', options: ['Incentive theory', 'Intrinsic motivation', 'Drive-reduction theory', 'Arousal theory'] },
          { label: 'A hiker who has had no water for six hours drinks from a stream until the thirst is gone', options: ['Incentive theory', 'Intrinsic motivation', 'Drive-reduction theory', 'Arousal theory'] }
        ],
        correctAnswers: ['Incentive theory', 'Intrinsic motivation', 'Drive-reduction theory'],
        hint1: 'A bonus is an outside reward that pulls behavior.',
        hint2: 'No one sees the bridges and nothing is paid; the activity itself is the reward.',
        hint3: 'Six hours without water creates a physical need and a drive.',
        explanation: 'The sales bonus is a positive incentive pulling behavior from outside. Building bridges purely for enjoyment is intrinsic motivation. Drinking to end thirst after six hours without water reduces a drive created by a physical need and restores homeostasis.'
      }
    },
    {
      id: 'motivation-theories-p4-s5-study',
      type: 'text' as const,
      content: `
### 🔬 Research Spotlight: Testing Choice Against Points

How would a psychologist test whether intrinsic and extrinsic motivation really behave differently? Here is a practice study designed the way an AAQ or EBQ source might be (practice study, not a real citation).

| Design element | What the researchers did |
|------|-----------|
| **Participants** | 90 sixth graders at one school |
| **Conditions** | Students were randomly assigned to one of three groups for a six-week reading program: **choice** (picked their own books from the library, no rewards), **points** (read from an assigned list and earned 10 points per book toward a prize) or **control** (read from the assigned list, no points) |
| **Independent variable** | The type of reading program |
| **Dependent variables** | Books finished during the program, and books checked out voluntarily in the four weeks after it ended |
| **Results** | During the program: points 7.0, choice 5.5, control 4.0 books on average. After the program: choice 3.6, points 2.1, control 2.0 |

### Reading the Results

- **During the program**, the points group read the most. That fits **incentive theory**: the prize was an outside reward that pulled behavior.
- **After the program**, the points group fell back to about the control group's level once the points stopped. That is the typical pattern for **extrinsic motivation**: when the reward ends, so does much of the reason to keep going.
- **The choice group** kept checking out books on its own after the program ended. That fits **self-determination theory**: choosing their own books supported autonomy, and behavior that feels self-chosen tends to be driven by intrinsic motivation, which persists without outside rewards.

### Why the Control Group Matters

Without a control group, the researchers could not tell whether the points or the choice made any difference at all. Any group of sixth graders might read more in a six-week program simply because a program exists, or less in the weeks after because the school year got busier. The control group experienced those same conditions, so comparing each program to it isolates the effect of the program type. **Random assignment** makes the three groups similar at the start, which is what lets the researchers draw a **causal** conclusion.

> **AP Connection:** On the exam, a source like this one asks you to name the design (an experiment, because the IV was manipulated and students were randomly assigned), identify the IV and DV, and explain a result with a CED concept. Use **incentive theory** for behavior pulled by a reward and **intrinsic motivation** for behavior that continues because the activity is its own reward.
      `
    },
    {
      id: 'motivation-theories-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the reading study, why did the researchers include a control group that read from the assigned list without points?',
            options: [
              'To show how much students read with neither feature, so the effect of each program could be isolated',
              'To make sure that every student in the study received a reward so that no group felt left out',
              'To measure how much the students enjoyed reading before any of the conditions were introduced',
              'To increase the sample size so that the points group would have more valid comparisons'
            ],
            correctAnswer: 0,
            explanation: 'The control group went through the same weeks of school without either program feature, so differences from it can be traced to the points or the choice. The control group got no reward, its reading during the program is not a pre-study baseline and it was not added for sample size.'
          },
          {
            question: 'A gym pays members \\$2 for every visit for three months. Visits rise sharply during the program, then fall back to their old level when the payments end. Which concept best explains why the visits rose?',
            options: [
              'Drive reduction',
              'Intrinsic motivation',
              'Positive incentive',
              'Boredom susceptibility'
            ],
            correctAnswer: 2,
            explanation: 'The payment is an outside reward that pulled members to the gym, which is a positive incentive. Their return to old levels when the money stopped shows the visits depended on that extrinsic reward, not on intrinsic enjoyment. No physical need was reduced, and boredom susceptibility is a type of sensation seeking.'
          },
          {
            question: 'Which statement best contrasts incentive theory with drive-reduction theory?',
            options: [
              'Incentive theory says outside rewards pull behavior; drive-reduction theory says inner tension from needs pushes it',
              'Incentive theory says inner tension pushes behavior; drive-reduction theory says outside rewards pull it toward goals',
              'Incentive theory applies only to animals; drive-reduction theory applies to the behavior of humans and animals',
              'Incentive theory explains why people seek more arousal; drive-reduction theory explains why people seek novelty'
            ],
            correctAnswer: 0,
            explanation: 'Incentive theory explains behavior as pulled by external rewards, while drive-reduction theory explains it as pushed by internal tension from physical needs. The reversed version swaps the two, both theories apply to humans, and seeking arousal or novelty belongs to arousal and sensation-seeking theories.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p4-s7-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Intrinsic, Extrinsic and Incentives

**Quick decision guide**

- The activity is its own reward → **intrinsic motivation**
- A grade, pay, prize, praise or penalty drives the behavior → **extrinsic motivation**; if the question asks for a theory of rewards, use **incentive theory**
- Behavior rises while a reward is offered and falls back when it ends → the behavior depended on **extrinsic motivation**
- A setting gives choice, builds skill and offers connection → **self-determination theory** predicts stronger intrinsic motivation

| Trap | Fix |
|------|-----------|
| Calling an enjoyable activity an incentive | Incentives are outside rewards; doing an activity because it is enjoyable in itself is **intrinsic motivation** |
| "Extrinsic motivation is always bad" | Extrinsic rewards can start behavior that later becomes enjoyable, and they work well for dull tasks |
| Calling an incentive a drive | Drives come from inside (needs); incentives are outside stimuli |
| Bringing in Maslow's hierarchy | It is outside the scope of the AP exam; use the CED theories instead |
      `
    }
  ]
}
