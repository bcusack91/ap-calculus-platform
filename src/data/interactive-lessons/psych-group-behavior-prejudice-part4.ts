export const psychGroupPart4Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Group Behavior and Prejudice

**Part 4 of 7 — Biases Behind Prejudice and Reading the Data**

> 🔑 **Key Concept:** The CED names four biases that show how implicit attitudes can produce negative evaluations of others: **in-group bias**, **out-group homogeneity bias**, **ethnocentrism**, and the **just-world phenomenon**. Each one distorts judgment in a different way.

### Us and them

Your **in-group** is any group you see yourself as belonging to ("us"). An **out-group** is a group you see yourself as outside of ("them"). The same person is in-group or out-group depending on the comparison: a classmate from a rival school is out-group at a football game but in-group when your state's students compete nationally.

### The four biases

| Bias | Definition | Example |
|---|---|---|
| **In-group bias** | Favoring members of one's own group in evaluations and rewards | A manager rates proposals from her own department as stronger than equally good proposals from another department |
| **Out-group homogeneity bias** | Seeing members of an out-group as more alike than members of one's own group | "Those engineering students are all the same, but we psychology majors are really diverse." |
| **Ethnocentrism** | Judging other cultures by the standards of one's own, and seeing one's own culture as the normal or superior one | A traveler calls a country's customs "backward" because they differ from home |
| **Just-world phenomenon** | Believing the world is fair, so people get what they deserve and deserve what they get | Assuming a person who lost a job "must have done something wrong" |

### How little it takes: the minimal group studies

How weak can group membership be and still produce in-group bias? In studies published in 1971, **Henri Tajfel** and colleagues assigned British schoolboys to groups on a trivial basis, such as whether they supposedly preferred paintings by the artist Klee or the artist Kandinsky. The boys did not know who else was in their group and never met as a group. Asked to divide rewards between an anonymous in-group member and an anonymous out-group member, the boys **favored their own group**. They often chose options that **maximized the difference** between the groups even when another option would have given their own group more in absolute terms.

The lesson: in-group bias does not require history, hostility, or competition. A meaningless label is enough to start it.

### Why the just-world belief matters

Believing in a just world feels comforting, since it suggests that bad things will not happen to you if you behave well. The cost is **victim blaming**. In experiments by Melvin Lerner and colleagues in the 1960s, observers who watched a person apparently receive painful shocks, and who could do nothing to stop them, tended to **rate the victim less favorably**. Devaluing the victim let observers keep believing the world is fair.
      `
    },
    {
      id: 'group-behavior-prejudice-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Name the Bias** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After a flood destroys a low-income neighborhood, a commenter writes that residents "should have known better than to live there." Which bias does this reasoning best illustrate?',
            options: [
              'Out-group homogeneity bias',
              'The just-world phenomenon',
              'Ethnocentrism',
              'In-group bias'
            ],
            correctAnswer: 1,
            explanation: 'Blaming victims for their misfortune protects the belief that people get what they deserve, which is the just-world phenomenon. Nothing in the comment judges another culture, favors the commenter\'s own group, or claims the residents are all alike.'
          },
          {
            question: 'What was most surprising about the results of Tajfel\'s minimal group studies?',
            options: [
              'Boys favored their own group even when the groups were meaningless',
              'Boys shared rewards equally once they learned the groups were random',
              'Boys gave the out-group extra points to look fair to the researchers',
              'Boys showed bias only after the two groups competed for valuable prizes'
            ],
            correctAnswer: 0,
            explanation: 'The groups were based on a trivial preference, and the boys never met their group, yet they still favored in-group members. That showed in-group bias does not require competition, history, or real conflict.'
          },
          {
            question: 'A student from a large city says that people from small towns "all think the same way," while people from cities "have every kind of opinion." Which bias is this?',
            options: [
              'In-group bias',
              'Ethnocentrism',
              'Out-group homogeneity bias',
              'The false consensus effect'
            ],
            correctAnswer: 2,
            explanation: 'Seeing the out-group as uniform while seeing one\'s own group as varied is out-group homogeneity bias. In-group bias is about favoring one\'s own group, and false consensus is about overestimating agreement with oneself.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p4-s3-data',
      type: 'text' as const,
      content: `
## 📊 Reading the Data: A Practice Minimal-Group Study

The AP exam expects you to calculate and interpret descriptive statistics in a social psychology context. Work through this practice study (a hypothetical study written for practice, not a real publication).

> **Practice study summary.** Twelve high school volunteers were randomly assigned to a "Blue" or "Green" team by coin flip. Each volunteer then privately divided 20 points between one anonymous Blue member and one anonymous Green member. The researchers recorded how many of the 20 points each volunteer gave to a member of their **own** team.

**Points given to the in-group member (out of 20):**

| Volunteer | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Points | 12 | 10 | 14 | 11 | 13 | 10 | 15 | 12 | 10 | 14 | 11 | 12 |

### Worked example: describe the data

**Step 1 — Mean.** Add the scores and divide by the number of volunteers.

$$\\bar{x} = \\frac{12+10+14+11+13+10+15+12+10+14+11+12}{12} = \\frac{144}{12} = 12$$

**Step 2 — Median.** Order the scores: 10, 10, 10, 11, 11, 12, 12, 12, 13, 14, 14, 15. With 12 scores, the median is the average of the 6th and 7th values: (12 + 12) ÷ 2 = **12**.

**Step 3 — Mode.** The values 10 and 12 each appear three times, so the data are **bimodal** (modes of 10 and 12).

**Step 4 — Range.** Highest minus lowest: 15 − 10 = **5**.

**Step 5 — Interpret.** An equal split would be 10 points. The mean of 12 shows that, on average, volunteers gave their own team 2 more points than a fair split. No volunteer gave the in-group fewer than 10 points. This pattern is consistent with **in-group bias** created by an arbitrary label.

### What these numbers can and cannot show

| Question | Answer |
|---|---|
| Can we say the team label **caused** the bias? | Only with a comparison: a design in which some volunteers had no team labels at all would show whether the labels made the difference. |
| Does a mean of 12 mean **every** volunteer was biased? | No. A mean describes the group; three volunteers split the points evenly. |
| Would a larger sample help? | Yes. With only 12 volunteers, one or two unusual scores can shift the mean, and the results are harder to generalize. |
| Is a 2-point difference **meaningful**? | That is a question of **effect size** (how large the difference is) and **statistical significance** (how unlikely the result would be by chance alone). A tiny difference can be significant in a huge sample and still matter little in practice. |
      `
    },
    {
      id: 'group-behavior-prejudice-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A second practice group of five volunteers gave these numbers of points (out of 20) to an in-group member: **11, 13, 10, 16, 15**.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the mean number of points given to the in-group member?',
            answer: '13',
            acceptableAnswers: ['13.0', 'thirteen'],
            explanation: 'The sum is 11 + 13 + 10 + 16 + 15 = 65, and 65 ÷ 5 = 13.'
          },
          {
            question: 'What is the median?',
            answer: '13',
            acceptableAnswers: ['13.0', 'thirteen'],
            explanation: 'In order the scores are 10, 11, 13, 15, 16, so the middle (third) value is 13.'
          },
          {
            question: 'What is the range?',
            answer: '6',
            acceptableAnswers: ['6.0', 'six'],
            explanation: 'The range is the highest score minus the lowest: 16 − 10 = 6.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p4-s5-correlation',
      type: 'text' as const,
      content: `
## 🔗 Correlation in Prejudice Research

Many studies of prejudice are **correlational**, because researchers cannot randomly assign people to hold a belief for years.

> **Practice survey summary.** A researcher surveyed 400 adults. Each completed a scale measuring belief in a just world and a scale measuring how much they blamed victims in short stories about accidents and crimes. The correlation between the two scores was **r = +0.42**.

### Worked example: interpreting the correlation

1. **Direction:** positive. People with **higher** just-world scores tended to give **higher** victim-blaming scores.
2. **Strength:** moderate. The points would form a visible upward trend on a scatterplot, but with plenty of scatter.
3. **What it does not show:** that believing in a just world **causes** victim blaming. The reverse is possible (people who blame victims may adopt just-world beliefs to justify themselves), and a **third variable** could drive both, such as political attitudes or religious beliefs about fate.
4. **What would test causation:** an experiment that randomly assigns people to read material that strengthens or weakens just-world beliefs and then measures victim blaming.

| Correlation coefficient | What it tells you |
|---|---|
| Sign (+ or −) | Direction of the relationship |
| Size (closer to ±1) | Strength of the relationship |
| r near 0 | Little or no linear relationship |
| Any value | Never, by itself, cause and effect |
      `
    },
    {
      id: 'group-behavior-prejudice-p4-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Interpreting Prejudice Data** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the practice survey, belief in a just world and victim blaming correlated at r = +0.42. Which conclusion is best supported?',
            options: [
              'Believing in a just world causes people to blame victims',
              'Those higher in just-world belief tended to blame victims more',
              'About 42 percent of the adults surveyed blamed the victims',
              'Victim blaming and just-world belief are almost the same trait'
            ],
            correctAnswer: 1,
            explanation: 'A moderate positive correlation means higher scores on one scale tend to go with higher scores on the other. It does not show causation, it is not a percentage of people, and a value of 0.42 is far from the near-perfect relationship that would suggest one trait.'
          },
          {
            question: 'A researcher wants to know whether arbitrary team labels cause in-group bias. Which addition to the practice minimal-group study would best answer that question?',
            options: [
              'A larger sample of volunteers who are all assigned to a team',
              'A control condition that splits points with no teams formed',
              'A survey asking volunteers whether they liked their own team',
              'A second session in which the same volunteers repeat the task'
            ],
            correctAnswer: 1,
            explanation: 'A no-label comparison condition shows what point splits look like without group membership, so a difference between conditions can be attributed to the labels. A larger sample, a liking survey, or a repeated session still lacks a comparison group.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p4-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Bias Vocabulary Meets Data Skills

On the exam, these biases often appear inside a study summary. Expect to:

1. **Identify the bias** shown by the results (favoring "us" is in-group bias; "they are all alike" is out-group homogeneity).
2. **Calculate** a mean, median, mode, or range from a small data set.
3. **Explain what the design allows** you to conclude: experiments with random assignment support causal claims; correlations do not.

**Next up — Part 5:** If labels alone create bias, what happens when groups compete for real prizes, and what can bring them back together? Part 5 covers social traps and superordinate goals.
      `
    }
  ]
}
