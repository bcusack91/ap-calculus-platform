export const lessonData = {
  topicSlug: 'sat-statistics-data-interpretation-core-skills',
  sections: [
    {
      id: 'stat-core-p2-recap',
      type: 'text' as const,
      content: `# Statistics & Data Interpretation: Practice

**Part 2 of 2 — Run the Recipes**

Here are the three recipes in order. Read the question first and decide which word it is asking for: mean, median, or range.

1. **Mean (the average).** Add every number in the list. Then divide that total by how many numbers are in the list.
2. **Median (the middle).** Put the list in order from smallest to largest. If the count is odd, the median is the number in the middle. If the count is even, add the two middle numbers and divide by $2$.
3. **Range (the spread).** Find the biggest number and the smallest number. Subtract: biggest minus smallest.

### Two habits that save points

- For the median, **write the sorted list down**. Do not try to sort it in your head.
- For the mean, count how many numbers are in the list before you divide. Circle them if it helps.

### What spread means

A **bigger range means the numbers are more spread out**. A smaller range means they are packed close together.

For example, $8, 9, 10$ has a range of $10 - 8 = 2$, so those numbers sit close together. But $2, 9, 16$ has a range of $16 - 2 = 14$, so those numbers are much more spread out — even though both lists have the same middle value.`
    },
    {
      id: 'stat-core-p2-q1',
      type: 'quiz' as const,
      question: `Find the mean of this data set: $3, 8, 2, 9, 3$`,
      options: ['$3$', '$5$', '$6$', '$8$'],
      correctAnswer: 1,
      explanation: `Add all the numbers first: $3 + 8 = 11$, then $11 + 2 = 13$, then $13 + 9 = 22$, then $22 + 3 = 25$. There are $5$ numbers in the list, so divide: $25 \\div 5 = 5$. The mean is $5$. The value $3$ appears twice in the list, but that makes it the mode, not the average.`
    },
    {
      id: 'stat-core-p2-q2',
      type: 'quiz' as const,
      question: `Find the median of this data set: $11, 4, 9, 20, 6, 15, 8$`,
      options: ['$8$', '$11$', '$6$', '$9$'],
      correctAnswer: 3,
      explanation: `Put the numbers in order from smallest to largest: $4, 6, 8, 9, 11, 15, 20$. There are $7$ numbers, so the middle one is the fourth number. Counting in from the left: $4$ is first, $6$ is second, $8$ is third, and $9$ is fourth. The median is $9$. The number $11$ sits in the middle of the original unsorted list, which is why sorting first matters.`
    },
    {
      id: 'stat-core-p2-q3',
      type: 'quiz' as const,
      question: `Find the range of this data set: $22, 17, 30, 25, 19$`,
      options: ['$13$', '$17$', '$25$', '$30$'],
      correctAnswer: 0,
      explanation: `The range is the biggest value minus the smallest value. The biggest number in the list is $30$ and the smallest is $17$. Subtract them: $30 - 17 = 13$. The range is $13$. The number $30$ on its own is only the largest value, not the distance between the two ends.`
    },
    {
      id: 'stat-core-p2-q4',
      type: 'quiz' as const,
      question: `Two data sets each have five values. Set A is $20, 21, 22, 23, 24$. Set B is $5, 14, 22, 30, 39$. Which set has the larger range, and what does that tell you?`,
      options: [
        'Set A, because its numbers are larger',
        'They have the same range',
        'Set B, because its values are more spread out',
        'Set A, because it has more values'
      ],
      correctAnswer: 2,
      explanation: `Find each range by subtracting the smallest value from the biggest value. For Set A: $24 - 20 = 4$. For Set B: $39 - 5 = 34$. Since $34$ is larger than $4$, Set B has the larger range, and a larger range means the values are more spread out from each other. Set A does contain some large numbers, but range measures the distance between the ends of a list, not how big the numbers are.`
    }
  ]
}
