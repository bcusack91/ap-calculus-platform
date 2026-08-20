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

This is the most common wrong answer in the entire topic. You solve for the missing value, the new mean, the second group's mean — and then the question asks for the **change**, the **median**, or the **difference**. Your correct intermediate result is choice C, waiting.

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

*After 9 rounds her mean is 82.6; she wants a 10-round mean of at least 83.* Total so far $= 743.4$; required total $= 830$; required round $= 86.6$. One multiplication, one subtraction.

### Speed Technique 2: Deviations From an Anchor

To average 87, 91, 84, 90, 88, anchor at 88: the deviations are $-1, +3, -4, +2, 0$, summing to $0$. The mean is exactly 88. This is faster and far less error-prone than adding five three-digit numbers, and it is how you should check any mean you compute under time pressure.

### Speed Technique 3: Transformations Move Center, Scaling Moves Spread

If every value becomes $ax + b$:

- **Mean** becomes $a(\\text{mean}) + b$
- **Median** becomes $a(\\text{median}) + b$
- **Standard deviation** becomes $|a| \\times \\text{SD}$ — the $+b$ shifts everything equally and changes nothing about spread.

Order matters. "Increase by 3, then double" is $2(x+3)$; "double, then increase by 3" is $2x + 3$. Both results appear among the choices.

### Speed Technique 4: Read Frequency Tables by Cumulative Count

For a frequency table with $N$ entries, find the median by **position**, not by scanning the value column. Build the running total, then locate position $\\frac{N+1}{2}$ (odd) or average positions $\\frac{N}{2}$ and $\\frac{N}{2}+1$ (even). Adding values at the top of the distribution shifts the middle position, but the median only changes if that shift **crosses a category boundary** — sometimes it does, sometimes it does not, and the item is written to punish assuming either way.

### Speed Technique 5: Constraint Items — Push One Variable to Its Limit

"Five positive integers, mean 20, median 18, smallest 11, largest 34, what is the greatest possible second-largest value?" Write the ordered list $11, b, 18, d, 34$. The mean fixes the total, so $b + d$ is a constant. To **maximize** $d$, drive $b$ to its **minimum** legal value. Maximizing one member of a fixed-sum pair always means minimizing the other; choosing the split evenly, or pushing the wrong variable, produces the distractors.`
    },
    {
      id: 'sdi-adv-p2-q1',
      type: 'quiz' as const,
      question: 'The table shows the distribution of scores on a 12-point quiz in two sections, each with 24 students.\n\n| Score | Section R | Section S |\n|---|---|---|\n| 8 | 3 | 8 |\n| 9 | 6 | 4 |\n| 10 | 6 | 0 |\n| 11 | 6 | 4 |\n| 12 | 3 | 8 |\n\nBoth sections have a mean score of 10 and a median score of 10. Which of the following is true?',
      options: [
        'Section R has the greater standard deviation.',
        'Section S has the greater standard deviation.',
        'The standard deviations are equal, because the sections have the same mean and the same median.',
        'Section S has the greater median.'
      ],
      correctAnswer: 1,
      explanation: 'Both distributions are symmetric about 10, which is why the centers match. Section R is piled up near the center: 6 students sit exactly at the mean and only 6 sit two points away. Section S is hollowed out at the center: 16 of its 24 students sit a full 2 points from the mean and none sit at 10. Since standard deviation measures typical distance from the mean, Section S is more spread out. Choice A reverses this by reading the taller center column as more variability. Choice C confuses center with spread — identical means and medians constrain location only. Choice D contradicts the stem, which states both medians are 10.'
    },
    {
      id: 'sdi-adv-p2-q2',
      type: 'quiz' as const,
      question: 'After 9 quizzes a student’s mean score is 82.6 points. She wants her mean over 10 quizzes to be at least 83.0 points. Quiz scores are whole numbers of points. What is the least score she can earn on the tenth quiz and still meet her goal?',
      options: [
        '$83$',
        '$86$',
        '$86.6$',
        '$87$'
      ],
      correctAnswer: 3,
      explanation: 'Her total after 9 quizzes is $9(82.6) = 743.4$. To average at least 83.0 over 10 quizzes she needs a total of at least $10(83.0) = 830$, so the tenth score $s$ must satisfy $743.4 + s \\ge 830$, giving $s \\ge 86.6$. Because scores are whole numbers, the least one that works is 87. Choice C is 86.6, the value before rounding, and it is the most-picked wrong answer on this archetype. Choice B rounds 86.6 the wrong direction: at 86 the total is 829.4 and the mean is 82.94, just short of the goal. Choice A is the target mean itself, treated as a single score.'
    },
    {
      id: 'sdi-adv-p2-q3',
      type: 'quiz' as const,
      question: 'A data set has a mean of 14, a median of 12, and a standard deviation of 5. Every value in the data set is multiplied by 3, and then 4 is subtracted from each result. What are the mean, median, and standard deviation of the new data set?',
      options: [
        'Mean 38, median 32, standard deviation 15',
        'Mean 38, median 32, standard deviation 11',
        'Mean 42, median 36, standard deviation 15',
        'Mean 38, median 32, standard deviation 5'
      ],
      correctAnswer: 0,
      explanation: 'Under $x \\to 3x - 4$, both measures of center transform exactly like a data value: the mean becomes $3(14) - 4 = 38$ and the median becomes $3(12) - 4 = 32$. Standard deviation is a distance, so it is stretched by the factor 3 but untouched by the shift: $3(5) = 15$. Choice B subtracts the 4 from the standard deviation too, but shifting every value by the same amount moves the whole data set without changing how spread out it is. Choice C applies only the multiplication to the centers, dropping the $-4$. Choice D leaves the standard deviation alone, treating scaling like a shift.'
    }
  ]
};
