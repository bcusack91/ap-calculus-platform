export const lessonData = {
  topicSlug: 'sat-statistics-data-interpretation-advanced',
  sections: [
    {
      id: 'sdi-adv-p3-intro',
      type: 'text' as const,
      content: `# Statistics & Data Interpretation: Timed Drill

**Part 3 of 3 — 5 Questions, About 90 Seconds Each**

Work these under a clock. Before each one, run the checklist:

1. **Convert every mean to a total.** $\\text{sum} = n \\times \\text{mean}$.
2. **Underline the actual question.** Change, or level? Median, or mean? Count, or amount?
3. **If two groups combine, weight them** — and remember the lever runs backward: sizes are proportional to the opposite distances.
4. **If the data set is edited, compute both statistics twice.** Never predict the median's behavior from the mean's.
5. **If the answer must be a whole number,** decide which direction the constraint forces you to round *before* you look at the choices.

If you find yourself averaging two averages, stop — you have almost certainly walked into the item's main trap.`
    },
    {
      id: 'sdi-adv-p3-q1',
      type: 'quiz' as const,
      question: 'The seven values in a data set are 5, 8, 10, 13, 16, 19, and 27. The largest value, 27, is replaced by 48, and no other value changes. Which of the following correctly describes the effect on the mean and on the median?',
      options: [
        'The mean increases by 21 and the median is unchanged.',
        'The median increases by 3 and the mean is unchanged.',
        'Both the mean and the median increase by 3.',
        'The mean increases by 3 and the median is unchanged.'
      ],
      correctAnswer: 3,
      explanation: 'The original values total 98, so the mean is $98/7 = 14$ and the median is the fourth value, 13. Replacing 27 with 48 adds 21 to the total, giving $119/7 = 17$, an increase of 3. The edit happens at the top of the ordered list, so the fourth value is still 13 and the median does not move. Choice A applies the raw change of $48 - 27 = 21$ directly to the mean instead of spreading it across all seven values. Choice B swaps the roles, giving the response to an extreme edit to the median. Choice C drags the median along with the mean, but changing the largest value cannot shift the middle position.'
    },
    {
      id: 'sdi-adv-p3-q2',
      type: 'quiz' as const,
      question: 'Sample A consists of 30 measurements with a mean of 12.0. Sample B has a mean of 20.0. The two samples combined have a mean of 15.0. How many measurements are in Sample B?',
      options: [
        '$50$',
        '$18$',
        '$90$',
        '$48$'
      ],
      correctAnswer: 1,
      explanation: 'The combined mean of 15 lies 3 above Sample A’s mean and 5 below Sample B’s mean, so the sizes are in the ratio $5 : 3$ with A the larger: Sample B has $30(3/5) = 18$ measurements. Verifying with totals, $\\frac{30(12) + 18(20)}{48} = \\frac{720}{48} = 15$. Choice A reverses the lever, computing $30(5/3) = 50$, which would pull the combined mean down toward 12 rather than up to 15. Choice C is the raw shortfall in total, $15(30) - 12(30) = 90$, treated as a count of measurements instead of a sum. Choice D is the combined sample size, an intermediate value.'
    },
    {
      id: 'sdi-adv-p3-q3',
      type: 'quiz' as const,
      question: 'A teacher entered 40 test scores and computed a mean of 72.5. She then discovered that a score of 91 had been entered as 19. After correcting that single entry, what is the mean of the 40 scores?',
      options: [
        '$70.7$',
        '$72.5$',
        '$74.3$',
        '$144.5$'
      ],
      correctAnswer: 2,
      explanation: 'The recorded total was $40(72.5) = 2900$. The entry was 72 points too low, so the corrected total is $2900 + 72 = 2972$ and the corrected mean is $2972/40 = 74.3$. Choice A subtracts the 72 instead of adding it, the sign error that comes from not asking which direction the mistake pushed the total. Choice B assumes one bad entry among forty cannot move the mean, but a 72-point error spread over 40 scores moves it by exactly 1.8. Choice D adds the full 72 to the mean rather than to the total, treating a single-score correction as though it applied to every score.'
    },
    {
      id: 'sdi-adv-p3-q4',
      type: 'quiz' as const,
      question: 'The frequency table shows the number of pets reported by 40 households.\n\n| Number of pets | Number of households |\n|---|---|\n| 0 | 5 |\n| 1 | 9 |\n| 2 | 14 |\n| 3 | 8 |\n| 4 | 4 |\n\nSix additional households are surveyed, and each of them reports 4 pets. By how much does the median number of pets increase?',
      options: [
        '$0$',
        '$0.5$',
        '$1$',
        '$2$'
      ],
      correctAnswer: 0,
      explanation: 'With 40 households the median averages the 20th and 21st ordered values. The cumulative counts are 5, 14, 28, 36, 40, so positions 15 through 28 all report 2 pets; both middle values are 2 and the median is 2. Adding six households at 4 pets gives 46 households, so the median now averages the 23rd and 24th values. The new cumulative counts are 5, 14, 28, 36, 46, and positions 15 through 28 still report 2 pets, so the median is still 2 and the increase is 0. Choice D is the median itself, the intermediate value rather than the change. Choices B and C assume that shifting the middle position must change the median, but the shift only matters if it crosses a category boundary, and here it does not — this is exactly why the position must be checked rather than guessed.'
    },
    {
      id: 'sdi-adv-p3-q5',
      type: 'quiz' as const,
      question: 'A set of five positive integers has a mean of 24 and a median of 21. The smallest value in the set is 13 and the largest is 41. What is the greatest possible value of the second-largest number in the set?',
      options: [
        '$24$',
        '$41$',
        '$22.5$',
        '$32$'
      ],
      correctAnswer: 3,
      explanation: 'Write the ordered set as $13, b, 21, d, 41$ with $13 \\le b \\le 21 \\le d \\le 41$. The mean of 24 fixes the total at $5(24) = 120$, so $13 + b + 21 + d + 41 = 120$ and $b + d = 45$. Since the pair has a fixed sum, maximizing $d$ means minimizing $b$: take $b = 13$, giving $d = 32$, which satisfies $21 \\le 32 \\le 41$. Choice A pushes $b$ to its maximum of 21 instead of its minimum, which minimizes $d$ rather than maximizing it. Choice C splits 45 evenly between $b$ and $d$, and also violates the requirement that the values be integers. Choice B is the largest value in the set, the fifth number, not the second-largest.'
    }
  ]
};
