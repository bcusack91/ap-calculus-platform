export const lessonData = {
  topicSlug: 'sat-statistics-data-interpretation-advanced',
  sections: [
    {
      id: 'sdi-adv-p2-traps',
      type: 'text' as const,
      content: `# Statistics & Data Interpretation: Traps & Speed

**Part 2 of 3 — The Distractor Species**

Hard-tier statistics items are not hard arithmetic. They are easy arithmetic with **one extra step**, and the answer choices are stocked with the values you produce along the way. Learn the species and you stop losing points you already earned.

### Species 1: The Intermediate Value

This is the most common wrong answer in the entire topic. You solve for the missing value, the new mean, the second group's mean — and then the question asks for the **change**, the **median**, or the **difference**. Your correct intermediate result is sitting among the choices, waiting.

> Before you bubble, re-read the last clause of the question. "By how much does it differ," "what is the median," "how many more" — these are not the quantity you just computed.

### Species 2: The Average of Averages

Any time two groups with different sizes are combined, the unweighted average of the two means is an answer choice. It is correct only when the groups are the same size, which hard items are careful never to allow.

### Species 3: The Even-Count Median

With an even number of values the median is the **average of the two middle values**, not one of them. Adding or removing a single value flips a list between odd and even, so the median almost always creeps by half a step. Distractors are built from picking a single middle-looking value instead of averaging.

### Species 4: "Both Must Move" (and "Neither Moves")

When a data set is edited, students assume the mean and median move together. They usually do not:

- Change only the **largest** value: the mean moves by $\\frac{\\text{change}}{n}$, the median does not move at all.
- Add a value **equal to the current mean**: the mean holds still, the median shifts.
- Remove a symmetric pair (two values averaging to the mean): the mean holds still, and if both lie outside the middle, so does the median.

Answer choices systematically **swap** the two changes — attaching the mean's movement to the median. Compute both. Every time.

### Species 5: Spread Confused With Center

"They have the same mean and the same median, so the standard deviations are equal" is always wrong. Center and spread are independent. Judge spread by asking one question: **on average, how far from the mean does a value sit?**`
    },
    {
      id: 'sdi-adv-p2-speed',
      type: 'text' as const,
      content: `### Speed Technique 1: Work in Totals, Not Means

Never average a list twice. Convert to a total once, edit the total, divide once at the end.

*After 6 rounds her mean is 74.5; she wants a 7-round mean of at least 76.* Total so far $= 6(74.5) = 447$; required total $= 7(76) = 532$; required round $= 532 - 447 = 85$. Two multiplications, one subtraction.

### Speed Technique 2: Deviations From an Anchor

To average 87, 91, 84, 90, 88, anchor at 88: the deviations are $-1, +3, -4, +2, 0$, summing to $0$. The mean is exactly 88. This is faster and far less error-prone than adding five two-digit numbers, and it is how you should check any mean you compute under time pressure.

### Speed Technique 3: Transformations Move Center, Scaling Moves Spread

If every value becomes $ax + b$:

- **Mean** becomes $a(\\text{mean}) + b$
- **Median** becomes $a(\\text{median}) + b$
- **Spread** (the range, or the standard deviation) is stretched by a factor of $|a|$, because multiplying every value by $a$ multiplies every gap between values by $|a|$. The $+b$ slides every value the same distance, so it changes nothing about spread.

Order matters. "Increase by 5, then triple" is $3(x+5)$; "triple, then increase by 5" is $3x + 5$. Both results appear among the choices.

### Speed Technique 4: Read Frequency Tables by Cumulative Count

For a frequency table with $N$ entries, find the median by **position**, not by scanning the value column. Build the running total, then locate position $\\frac{N+1}{2}$ (odd) or average positions $\\frac{N}{2}$ and $\\frac{N}{2}+1$ (even). Adding values at the top of the distribution shifts the middle position, but the median only changes if that shift **crosses a category boundary** — sometimes it does, sometimes it does not, and the item is written to punish assuming either way.

### Speed Technique 5: Constraint Items — Push One Variable to Its Limit

"Five positive integers, mean 16, median 15, smallest 9, largest 27, what is the greatest possible second-largest value?" Write the ordered list $9, b, 15, d, 27$. The mean fixes the total, so $b + d$ is a constant. To **maximize** $d$, drive $b$ to its **minimum** legal value. Maximizing one member of a fixed-sum pair always means minimizing the other; choosing the split evenly, or pushing the wrong variable, produces the distractors.`
    },
    {
      id: 'sdi-adv-p2-q1',
      type: 'quiz' as const,
      question: 'The table shows the distribution of scores on a 12-point quiz in two sections, each with 24 students.\n\n| Score | Section R | Section S |\n|---|---|---|\n| 8 | 3 | 8 |\n| 9 | 6 | 4 |\n| 10 | 6 | 0 |\n| 11 | 6 | 4 |\n| 12 | 3 | 8 |\n\nBoth sections have a mean score of 10 and a median score of 10. Which of the following is true?',
      options: [
        'Section R has the greater standard deviation.',
        'Section S has the greater standard deviation.',
        'The two sections have equal standard deviations.',
        'Section S has the greater median.'
      ],
      correctAnswer: 1,
      explanation: 'Both distributions are symmetric about 10, which is why the centers match. Section R is piled up near the center: 6 students sit exactly at the mean and only 6 sit two points away. Section S is hollowed out at the center: 16 of its 24 students sit a full 2 points from the mean and none sit at 10. Since standard deviation measures typical distance from the mean, Section S is more spread out. The Section R choice reverses this by reading the taller center column as more variability. The equal-standard-deviations choice confuses center with spread — identical means and medians constrain location only. The greater-median choice contradicts the stem, which states both medians are 10.'
    },
    {
      id: 'sdi-adv-p2-q2',
      type: 'quiz' as const,
      question: 'After 8 quizzes a student’s mean score is 82.5 points. She wants her mean over 9 quizzes to be at least 83.5 points. Quiz scores are whole numbers of points. What is the least score she can earn on the ninth quiz and still meet her goal?',
      options: [
        '$83.5$',
        '$91$',
        '$91.5$',
        '$92$'
      ],
      correctAnswer: 3,
      explanation: 'Her total after 8 quizzes is $8(82.5) = 660$. To average at least 83.5 over 9 quizzes she needs a total of at least $9(83.5) = 751.5$, so the ninth score $s$ must satisfy $660 + s \\ge 751.5$, giving $s \\ge 91.5$. Because scores are whole numbers, the least one that works is 92. The $91.5$ choice is the value before rounding, and it is the most-picked wrong answer on this archetype. The $91$ choice rounds 91.5 the wrong direction: at 91 the total is 751 and the mean is about 83.44, just short of the goal. The $83.5$ choice is the target mean itself, treated as a single score.'
    },
    {
      id: 'sdi-adv-p2-q3',
      type: 'quiz' as const,
      question: 'A data set has a mean of 14 and a median of 12. Every value in the data set is multiplied by 3, and then 4 is subtracted from each result. Which of the following correctly describes the mean, the median, and the spread of the new data set?',
      options: [
        'Mean 38, median 32, and the spread is tripled',
        'Mean 38, median 32, and the spread is unchanged',
        'Mean 30, median 24, and the spread is tripled',
        'Mean 30, median 24, and the spread is unchanged'
      ],
      correctAnswer: 0,
      explanation: 'Under $x \\to 3x - 4$, both measures of center transform exactly like a data value: the mean becomes $3(14) - 4 = 38$ and the median becomes $3(12) - 4 = 32$. Multiplying every value by 3 triples every gap between values, so the spread triples; subtracting 4 then slides every value the same distance, which moves the data set without changing how spread out it is. The choices with mean 30 and median 24 subtract the 4 before multiplying, computing $3(14 - 4)$ and $3(12 - 4)$, which reverses the stated order. The spread-unchanged choices treat the scaling like a shift: a shift leaves the spread alone, but a multiplication stretches it.'
    }
  ]
};
