export const actStatProbPart6Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-stat-p6-intro',
      type: 'text' as const,
      content: `
# 🗂️ Two-Way Tables and Conditional Probability

**Part 6 of 7 — Choosing the Right Denominator**

Two-way tables are among the most common data displays on the ACT. The arithmetic is easy — one division — but the answer choices are built so that dividing by the **wrong total** always produces one of them. This part is about picking the right denominator every time.

## Anatomy of a Two-Way Table

| | Walk | Bus | Car | Total |
|---|---|---|---|---|
| Grade 9 | 18 | 30 | 12 | 60 |
| Grade 10 | 14 | 26 | 20 | 60 |
| Total | 32 | 56 | 32 | 120 |

- **Inner cells** count people in two categories at once (18 students are in Grade 9 **and** walk).
- **Row and column totals** (the margins) count one category (56 students ride the bus).
- The **grand total** (120) counts everyone.

## Three Kinds of Probability

| Question wording | Numerator | Denominator | Example |
|------------------|-----------|-------------|---------|
| "a student is chosen" — P(bus) | Bus total | Grand total | $\\frac{56}{120} = \\frac{7}{15}$ |
| "a student is chosen" — P(Grade 9 **and** bus) | One inner cell | Grand total | $\\frac{30}{120} = \\frac{1}{4}$ |
| "**a Grade 9 student** is chosen" — P(bus) | One inner cell | **Grade 9 row total** | $\\frac{30}{60} = \\frac{1}{2}$ |

The last row is **conditional probability**: the condition shrinks the group you are choosing from.

$$P(A \\mid B) = \\frac{\\text{number in both } A \\text{ and } B}{\\text{number in } B}$$

Read $P(A \\mid B)$ as "the probability of $A$, **given** $B$."

## Spotting the Condition

The condition is whatever the question tells you is already known. Look for phrases like:

- "**If** a senior is chosen…" → denominator = seniors
- "**Given that** the student rides the bus…" → denominator = bus riders
- "A student **who plays a sport** is chosen…" → denominator = athletes
- "**Of** the students who walk, what fraction…" → denominator = walkers
- "What **percent of Grade 10 students**…" → denominator = Grade 10

**The condition order matters.** $P(\\text{girl} \\mid \\text{plays a sport})$ divides by athletes; $P(\\text{plays a sport} \\mid \\text{girl})$ divides by girls. The numerator is the same cell, but the answers differ. Reversing the condition is the most common trap on these questions.

## "Or" in a Table

For P(Grade 9 **or** car), add the Grade 9 total and the car total, then subtract the cell counted in both:

$$\\frac{60 + 32 - 12}{120} = \\frac{80}{120} = \\frac{2}{3}$$

## Completing a Table

Many questions leave cells blank. Every row and column must add to its total, so fill in whatever you can from those sums before answering.

| | Coffee | Tea | Total |
|---|---|---|---|
| Under 40 | 50 | **30** | 80 |
| 40 and over | **40** | **30** | 70 |
| Total | 90 | 60 | 150 |

(Bold cells were found by subtraction: $80 - 50$, $90 - 50$, then $70 - 40$.)

## Conditional Probability Without a Table

Overlapping-group problems from Part 4 work the same way. If 25 of 60 members swim, 30 run, and 10 do both, then

$$P(\\text{swims} \\mid \\text{runs}) = \\frac{10}{30} = \\frac{1}{3}$$

because the condition "runs" leaves only the 30 runners.

When information comes as **percents of percents** ("60% of customers are adults, and 30% of adults prefer streaming"), build a table for a convenient total such as 1,000 people, fill it with counts, and then divide.

## Are Two Variables Related?

Compare the conditional rates, not the raw counts. If 12 of 30 left-handed students (40%) and 48 of 120 right-handed students (40%) wear glasses, the rates are equal, so glasses and handedness appear **independent** in this group — even though 48 is much larger than 12. In general, $A$ and $B$ are independent when $P(A \\mid B) = P(A)$.
      `
    },
    {
      id: 'act-stat-p6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Same cell, two different conditions</b></summary>

**Question:** A survey asked 200 students whether they support a later school start.

| | Yes | No | Total |
|---|---|---|---|
| Freshmen | 45 | 75 | 120 |
| Seniors | 63 | 17 | 80 |
| Total | 108 | 92 | 200 |

Find (a) the probability that a randomly chosen senior said Yes, and (b) the probability that a randomly chosen Yes-voter is a senior.

**Solution:**
1. (a) The condition is "senior," so divide by the 80 seniors: $\\frac{63}{80}$.
2. (b) The condition is "said Yes," so divide by the 108 Yes votes: $\\frac{63}{108} = \\frac{7}{12}$. ✓

**ACT trap:** $\\frac{63}{200}$ answers neither question — it is P(senior **and** Yes).
</details>

<details>
<summary><b>Example 2: Percents into a table</b></summary>

**Question:** Of a streaming service's customers, 60% are adults and 40% are teens. 30% of adults and 70% of teens prefer watching on a phone. If a customer who prefers a phone is chosen at random, what is the probability that the customer is a teen?

**Solution:**
1. Imagine 1,000 customers: 600 adults and 400 teens.
2. Phone fans: $0.30 \\times 600 = 180$ adults and $0.70 \\times 400 = 280$ teens, so 460 in all.
3. Given "prefers a phone," divide by 460: $\\frac{280}{460} = \\frac{14}{23}$. ✓

**ACT trap:** 0.70 is P(phone | teen), the reverse condition.
</details>
      `
    },
    {
      id: 'act-stat-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Pick the Denominator** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The table shows pet ownership for 200 students.

| | Dog | Cat | No pet | Total |
|---|---|---|---|---|
| Grade 11 | 42 | 25 | 33 | 100 |
| Grade 12 | 28 | 35 | 37 | 100 |
| Total | 70 | 60 | 70 | 200 |

If one of the 200 students is chosen at random, what is the probability that the student owns a cat?`,
            options: [`$\\frac{1}{4}$`, `$\\frac{7}{20}$`, `$\\frac{3}{10}$`, `$\\frac{7}{12}$`],
            correctAnswer: 2,
            explanation: `No condition is given, so divide the 60 cat owners by all 200 students: $\\frac{60}{200} = \\frac{3}{10}$. The value $\\frac{1}{4} = \\frac{25}{100}$ is the cat rate within Grade 11 only, and $\\frac{7}{20} = \\frac{35}{100}$ is the rate within Grade 12 only. The value $\\frac{7}{12} = \\frac{35}{60}$ is the share of cat owners who are in Grade 12.`
          },
          {
            question: `Use the same table.

| | Dog | Cat | No pet | Total |
|---|---|---|---|---|
| Grade 11 | 42 | 25 | 33 | 100 |
| Grade 12 | 28 | 35 | 37 | 100 |
| Total | 70 | 60 | 70 | 200 |

A student who owns a dog is chosen at random. What is the probability that the student is in Grade 11?`,
            options: [`$\\frac{3}{5}$`, `$\\frac{21}{50}$`, `$\\frac{21}{100}$`, `$\\frac{7}{20}$`],
            correctAnswer: 0,
            explanation: `The condition is "owns a dog," so the denominator is the 70 dog owners, and 42 of them are in Grade 11: $\\frac{42}{70} = \\frac{3}{5}$. The value $\\frac{21}{50} = \\frac{42}{100}$ reverses the condition, giving the dog rate among Grade 11 students. The value $\\frac{21}{100} = \\frac{42}{200}$ is P(Grade 11 and dog), and $\\frac{7}{20}$ is the overall share of dog owners.`
          },
          {
            question: `Use the same table.

| | Dog | Cat | No pet | Total |
|---|---|---|---|---|
| Grade 11 | 42 | 25 | 33 | 100 |
| Grade 12 | 28 | 35 | 37 | 100 |
| Total | 70 | 60 | 70 | 200 |

If one of the 200 students is chosen at random, what is the probability that the student is in Grade 12 and has no pet?`,
            options: [`$\\frac{37}{70}$`, `$\\frac{37}{100}$`, `$\\frac{133}{200}$`, `$\\frac{37}{200}$`],
            correctAnswer: 3,
            explanation: `"And" with no condition means one inner cell over the grand total: $\\frac{37}{200}$. The value $\\frac{37}{70}$ is the share of pet-free students who are in Grade 12, and $\\frac{37}{100}$ is the pet-free rate within Grade 12; both shrink the denominator to a condition the question never states. The value $\\frac{133}{200}$ is P(Grade 12 or no pet), $\\frac{100 + 70 - 37}{200}$.`
          },
          {
            question: `At a streaming service, 60% of customers are adults and 40% are teens. Of the adults, 30% prefer watching on a phone; of the teens, 70% prefer watching on a phone. A customer who prefers watching on a phone is chosen at random. What is the probability that the customer is a teen?`,
            options: [`$\\frac{7}{10}$`, `$\\frac{14}{23}$`, `$\\frac{2}{5}$`, `$\\frac{7}{25}$`],
            correctAnswer: 1,
            explanation: `Out of 1,000 customers, $0.3(600) = 180$ adults and $0.7(400) = 280$ teens prefer a phone, so 460 do in all, and $\\frac{280}{460} = \\frac{14}{23}$. The value $\\frac{7}{10}$ is P(phone given teen), the reverse condition. The value $\\frac{2}{5}$ is the share of all customers who are teens, and $\\frac{7}{25} = 0.28$ is P(teen and phone).`
          }
        ]
      }
    },
    {
      id: 'act-stat-p6-input',
      type: 'input-boxes' as const,
      content: `
**Complete the Table** 🧮

A school surveyed 100 students about playing an instrument. Some cells are blank.

| | Plays | Does not play | Total |
|---|---|---|---|
| Juniors | 18 | | 45 |
| Seniors | | | 55 |
| Total | 40 | | 100 |

1) How many seniors play an instrument?

2) How many students in all do not play an instrument?

3) What percent of seniors play an instrument? (Enter a number only.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['22', '60', '40'],
        hint1: 'The Plays column must add to 40.',
        hint2: 'The Total row must add to 100.',
        hint3: 'The condition is "seniors," so divide by 55.',
        explanation: '1) $40 - 18 = 22$. 2) $100 - 40 = 60$. 3) $\\frac{22}{55} = 0.40$, or 40%. Dividing 22 by the 40 players would instead give the share of players who are seniors.'
      }
    },
    {
      id: 'act-stat-p6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

Use the Walk / Bus / Car table from the lesson (Grade 9: 18, 30, 12; Grade 10: 14, 26, 20; totals 32, 56, 32, 120).

| # | Question | Denominator | Answer |
|---|----------|-------------|--------|
| 1 | P(walks), any student | 120 | $\\frac{32}{120} = \\frac{4}{15}$ |
| 2 | P(Grade 10), given the student rides in a car | 32 | $\\frac{20}{32} = \\frac{5}{8}$ |
| 3 | P(car), given the student is in Grade 10 | 60 | $\\frac{20}{60} = \\frac{1}{3}$ |

**ACT Tip:** Before you divide, write the denominator in words ("all students," "car riders," "Grade 10"). Then find that total in the table.
      `
    },
    {
      id: 'act-stat-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions: Conditions and Relationships** 📋
      `,
      exercise: {
        questions: [
          {
            question: `The table shows handedness and glasses for 150 students.

| | Glasses | No glasses | Total |
|---|---|---|---|
| Left-handed | 12 | 18 | 30 |
| Right-handed | 48 | 72 | 120 |
| Total | 60 | 90 | 150 |

Which statement is best supported by the table?`,
            options: [
              `Left-handed students are more likely to wear glasses`,
              `Glasses and handedness appear independent here`,
              `Right-handed students are more likely to wear glasses`,
              `Most of the students who wear glasses are left-handed`
            ],
            correctAnswer: 1,
            explanation: `Compare rates, not counts: $\\frac{12}{30} = 40\\%$ of left-handed students and $\\frac{48}{120} = 40\\%$ of right-handed students wear glasses, so neither group is more likely and the variables appear independent. The count 48 is larger than 12 only because there are more right-handed students. Only 12 of the 60 glasses-wearers are left-handed, which is not most.`
          },
          {
            question: `In a club of 110 members, 28 swim, 30 run, and 10 both swim and run. A member who runs is chosen at random. What is the probability that the member also swims?`,
            options: [`$\\frac{1}{11}$`, `$\\frac{5}{14}$`, `$\\frac{3}{11}$`, `$\\frac{1}{3}$`],
            correctAnswer: 3,
            explanation: `The condition "runs" limits the group to the 30 runners, and 10 of them swim: $\\frac{10}{30} = \\frac{1}{3}$. The value $\\frac{1}{11} = \\frac{10}{110}$ is P(swims and runs) for the whole club. The value $\\frac{5}{14} = \\frac{10}{28}$ reverses the condition (runners among swimmers), and $\\frac{3}{11} = \\frac{30}{110}$ is the share of members who run.`
          },
          {
            question: `The table shows game preferences for 140 people.

| | Puzzle | Action | Total |
|---|---|---|---|
| Under 18 | 24 | 56 | 80 |
| 18 and over | 36 | 24 | 60 |
| Total | 60 | 80 | 140 |

A person who does NOT prefer action games is chosen at random. What is the probability that the person is under 18?`,
            options: [`$\\frac{2}{5}$`, `$\\frac{3}{10}$`, `$\\frac{6}{35}$`, `$\\frac{3}{5}$`],
            correctAnswer: 0,
            explanation: `Not preferring action means preferring puzzles, so the denominator is the 60 puzzle fans, and 24 of them are under 18: $\\frac{24}{60} = \\frac{2}{5}$. The value $\\frac{3}{10} = \\frac{24}{80}$ divides by the under-18 group instead. The value $\\frac{6}{35} = \\frac{24}{140}$ uses the grand total, and $\\frac{3}{5}$ is the share of puzzle fans who are 18 or over.`
          },
          {
            question: `Use the same table.

| | Puzzle | Action | Total |
|---|---|---|---|
| Under 18 | 24 | 56 | 80 |
| 18 and over | 36 | 24 | 60 |
| Total | 60 | 80 | 140 |

One of the 140 people is chosen at random. What is the probability that the person is under 18 or prefers puzzle games?`,
            options: [`1`, `$\\frac{23}{35}$`, `$\\frac{29}{35}$`, `$\\frac{4}{7}$`],
            correctAnswer: 2,
            explanation: `Add the under-18 total and the puzzle total, then subtract the 24 people in both: $\\frac{80 + 60 - 24}{140} = \\frac{116}{140} = \\frac{29}{35}$. Skipping the subtraction gives $\\frac{140}{140} = 1$, which would wrongly mean every person qualifies, including adults who prefer action. Subtracting the overlap twice gives $\\frac{92}{140} = \\frac{23}{35}$, and $\\frac{4}{7}$ counts the under-18 group alone.`
          }
        ]
      }
    },
    {
      id: 'act-stat-p6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **No condition:** divide by the grand total. **"And":** one inner cell over the grand total.
- **Conditional** ("if," "given," "of those who," "a student who…"): divide by the total of the **condition's** row or column. $P(A \\mid B) = \\frac{\\text{both}}{\\text{number in } B}$.
- $P(A \\mid B)$ and $P(B \\mid A)$ share a numerator but not a denominator — check which group is known.
- **"Or" in a table:** row total + column total − shared cell.
- Fill blank cells using row and column sums; turn percent information into a table of counts (try 1,000 people).
- Compare **rates**, not raw counts, to decide whether two variables are related.
      `
    }
  ]
};
