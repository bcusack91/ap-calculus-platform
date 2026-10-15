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
      id: 'motivation-theories-p4-s5-overjustification',
      type: 'text' as const,
      content: `
### 🔬 When Rewards Backfire: The Overjustification Effect

If extrinsic rewards pull behavior, can they ever **reduce** motivation? A classic experiment says yes, under specific conditions.

### The Study: Lepper, Greene and Nisbett (1973)

| Design element | What the researchers did |
|------|-----------|
| **Participants** | Preschool children who had already shown interest in drawing with special markers during free play |
| **Conditions** | Children were randomly assigned to one of three groups: **expected award** (told in advance they would get a "Good Player" certificate for drawing), **unexpected award** (got the same certificate as a surprise afterward) or **no award** |
| **Independent variable** | Whether and how a reward was given for drawing |
| **Dependent variable** | Time each child later spent drawing with the markers during free play, recorded by observers behind a one-way mirror |
| **Result** | The expected-award group later spent about half as much free-play time drawing as the other two groups, and less than they had before the study; the unexpected-award and no-award groups did not show this drop |

### Why It Happened

This is the **overjustification effect**: promising an extrinsic reward for an activity a person already enjoys can **decrease** intrinsic motivation for it. The children who drew *in order to* get a certificate seem to have reinterpreted their reason for drawing: from "I draw because I like it" to "I draw to get a prize." Once the prize was gone, so was much of the reason.

### Why the Unexpected-Award Group Matters

The unexpected-award group received **exactly the same certificate** as the expected-award group. If merely receiving a reward lowered interest, both groups should have dropped. Only the group that **expected** the reward while drawing dropped, which points to the **expectation of working for a reward** as the cause, not the certificate itself. This is a strong example of a well-chosen comparison group ruling out an alternative explanation.

### Nuance: Not All Rewards Undermine Motivation

| Situation | Typical effect |
|------|-----------|
| An expected, tangible reward for a task the person **already enjoys** | Risk of lowering intrinsic motivation |
| A reward for a task with **little initial interest** | Can increase engagement; there is little intrinsic motivation to lose |
| Specific praise or feedback that signals **competence** | Can support intrinsic motivation |
| Rewards that feel **controlling** ("do this or no recess") | Tend to weaken intrinsic motivation |

> **AP Connection:** The overjustification effect also appears in the Thinking topic as a reason extrinsic rewards can reduce creativity. Here, focus on the motivation theory and the experimental design: IV, DV, random assignment and the purpose of each comparison group.
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
            question: 'In the marker-drawing experiment, why did the researchers include an unexpected-award group?',
            options: [
              'To test whether merely getting a certificate without expecting it beforehand lowered later interest in drawing',
              'To make sure that every child in the study received some kind of prize so that no one felt left out',
              'To measure how much the children enjoyed drawing before any of the conditions were introduced',
              'To increase the sample size so that the expected-award group would have more valid comparisons'
            ],
            correctAnswer: 0,
            explanation: 'The unexpected-award group got the same certificate without expecting it, so it separates the effect of receiving a reward from the effect of working for an expected one. Baseline interest was measured before the conditions, and the group was not added for fairness or sample size.'
          },
          {
            question: 'A town library starts paying children \\$1 for every book they read. Lila, who already read for fun every night, earns money for a month. When the program ends, she reads far less than before. Which concept best explains this?',
            options: [
              'Drive reduction',
              'Overjustification',
              'Positive incentive',
              'Boredom susceptibility'
            ],
            correctAnswer: 1,
            explanation: 'An expected reward for an activity Lila already enjoyed shifted her reason for reading from interest to payment, so her reading fell once the payments stopped. That is the overjustification effect. A positive incentive explains why reading rose during the program but not why it fell below her starting level.'
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
- Interest **drops** after an expected reward is introduced and then removed → **overjustification effect**
- A setting gives choice, builds skill and offers connection → **self-determination theory** predicts stronger intrinsic motivation

| Trap | Fix |
|------|-----------|
| "All rewards destroy intrinsic motivation" | The risk is greatest for expected, tangible rewards for tasks people already enjoy |
| "Extrinsic motivation is always bad" | Extrinsic rewards can start behavior that later becomes enjoyable, and they work well for dull tasks |
| Calling an incentive a drive | Drives come from inside (needs); incentives are outside stimuli |
| Bringing in Maslow's hierarchy | It is outside the scope of the AP exam; use the CED theories instead |
      `
    }
  ]
}
