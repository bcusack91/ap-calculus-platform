export const lessonData = {
  topicSlug: 'sat-statistics-data-interpretation-core-skills',
  sections: [
    {
      id: 'stat-core-p1-intro',
      type: 'text' as const,
      content: `# Statistics & Data Interpretation: The Basics

**Part 1 of 2 — Mean, Median, and Range**

A list of numbers is called a **data set**. The SAT asks three questions about a list over and over. Each one has a short, fixed recipe. Learn the three recipes and you can answer these questions every time.

### The three words

- **Mean** — the average. Add up all the numbers, then divide by how many numbers there are.
- **Median** — the middle number after you put the list in order from smallest to largest.
- **Range** — the biggest number minus the smallest number. It tells you how spread out the list is.

Mean and median both describe the **center** of a list. Range describes the **spread**.

### Worked example

Use this list: $4, 8, 6, 10, 2$

**Mean.** Add every number:

$4 + 8 = 12$

$12 + 6 = 18$

$18 + 10 = 28$

$28 + 2 = 30$

There are $5$ numbers, so divide by $5$: $30 \\div 5 = 6$. The mean is $6$.

**Median.** Put the list in order first. This step is not optional, and skipping it is the most common mistake on these questions:

$2, 4, 6, 8, 10$

Now find the middle. There are $5$ numbers, so the middle one is the third: $6$. The median is $6$.

**Range.** The biggest number is $10$ and the smallest is $2$. Subtract: $10 - 2 = 8$. The range is $8$.

### One extra case: an even-length list

If the list has an **even** number of values, there are two middle numbers. Add those two and divide by $2$.

For $4, 6, 8, 10$, the two middle numbers are $6$ and $8$. So the median is $\\frac{6 + 8}{2} = \\frac{14}{2} = 7$.

That is everything. Add and divide for mean, put in order and look at the middle for median, subtract for range.`
    },
    {
      id: 'stat-core-p1-q1',
      type: 'quiz' as const,
      question: `Find the mean of this data set: $5, 9, 7, 4, 5$`,
      options: ['$4$', '$5$', '$6$', '$9$'],
      correctAnswer: 2,
      explanation: `The mean is the average, so add all the numbers and divide by how many there are. Adding: $5 + 9 = 14$, then $14 + 7 = 21$, then $21 + 4 = 25$, then $25 + 5 = 30$. There are $5$ numbers in the list, so divide: $30 \\div 5 = 6$. The mean is $6$. The value $5$ is the number that shows up most often in the list, which is the mode, not the mean.`
    },
    {
      id: 'stat-core-p1-q2',
      type: 'quiz' as const,
      question: `Find the median of this data set: $12, 7, 15, 9, 20$`,
      options: ['$12$', '$15$', '$9$', '$20$'],
      correctAnswer: 0,
      explanation: `The median is the middle number, but only after the list is in order. Put the numbers in order from smallest to largest: $7, 9, 12, 15, 20$. There are $5$ numbers, so the middle one is the third number, which is $12$. The median is $12$. If you look at the middle of the original unsorted list you get $15$, which is why putting the list in order comes first.`
    },
    {
      id: 'stat-core-p1-q3',
      type: 'quiz' as const,
      question: `Find the range of this data set: $14, 6, 11, 9, 6$`,
      options: ['$6$', '$9$', '$11$', '$8$'],
      correctAnswer: 3,
      explanation: `The range is the biggest number minus the smallest number. Looking through the list, the biggest number is $14$ and the smallest number is $6$. Subtract them: $14 - 6 = 8$. The range is $8$. The number $6$ by itself is only the smallest value, not the distance between the smallest and the biggest.`
    },
    {
      id: 'stat-core-p1-q4',
      type: 'quiz' as const,
      question: `Find the median of this data set: $10, 4, 8, 6$`,
      options: ['$8$', '$7$', '$6$', '$4$'],
      correctAnswer: 1,
      explanation: `Start by putting the list in order: $4, 6, 8, 10$. There are $4$ numbers, which is an even amount, so there is no single number in the middle. The two middle numbers are $6$ and $8$. Add them and divide by $2$: $\\frac{6 + 8}{2} = \\frac{14}{2} = 7$. The median is $7$. Picking $6$ or $8$ alone leaves out the other middle number.`
    }
  ]
}
