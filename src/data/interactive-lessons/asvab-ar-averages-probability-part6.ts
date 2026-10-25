export const asvabArAveragesProbabilityPart6Data = {
  topicSlug: 'asvab-ar-averages-probability',
  sections: [
    {
      id: 'arap6-intro',
      type: 'text' as const,
      content: `# 🎲 Averages, Counting and Probability

**Part 6 of 7 — Test Strategy and Common Traps**

The wrong answer choices on AR are not random. Each one is the result of a specific, common mistake. If you know the mistakes, you can see the traps coming.

### The Seven Big Traps

| Trap | What it looks like | How to dodge it |
|:---|:---|:---|
| **Dividing by the wrong count** | Five scores added, then divided by 4; a frequency table divided by the number of rows | Count the values (or people) before you divide, and check that the average is between the low and high values |
| **Averaging the averages** | 20 people at 80 and 30 people at 90 answered as 85 | Find each group's total, add, divide by everyone; the answer leans toward the bigger group |
| **Median without ordering** | Taking the middle number of the list as printed | Rewrite the list from smallest to largest first |
| **Adding instead of multiplying** | "Heads and a 6" answered as $\\frac{1}{2} + \\frac{1}{6}$ | "And" for separate events means multiply; "both" must be smaller than each piece |
| **Not shrinking the denominator** | Two draws without replacement, both out of the full total | After the first draw, the total drops by 1 (and the favorable count may too) |
| **Double counting pairs** | 6 people shaking hands counted as $6 \\times 5 = 30$ | If swapping the two gives the same outcome, divide by 2 |
| **A count instead of a probability** | Answering 8 (the number of outcomes) when asked for a probability | Read the last sentence: a probability is a fraction between 0 and 1 |

> **Key Fact:** Each of these traps produces a number that appears among the answer choices. Finding your answer in the list does not prove it is right. Your check does.`
    },
    {
      id: 'arap6-timing',
      type: 'text' as const,
      content: `## Timing, Estimation and Back-Solving

### Timing

On the computer test you have **55 minutes for 15 questions**, about **3.5 minutes each**. A one-step average or probability question should take about a minute. That banked time pays for the multi-step ones: a needed score, a weighted average, or two draws without replacement. Remember that you cannot go back, so spend the extra seconds checking before you answer.

### Estimate to eliminate choices

- **An average** must be between the smallest and largest values. Any choice outside that range is out.
- **A combined average** of two groups must be between the two group averages and closer to the bigger group.
- **A probability** must be between 0 and 1, and the chance of "both" must be smaller than the chance of either one.

### Back-solve "needed score" questions

**Example.** Scores so far are 85, 79 and 88. What score on the fourth test gives an average of 86? Choices: 90, 92, 94, 96.

Try 92: $85 + 79 + 88 + 92 = 344$, and $344 \\div 4 = 86$. ✓ The answer is 92.

**Faster with the balance method:** compared with 86, the scores so far are $-1, -7, +2$, a total of $-6$. The fourth test must be 6 above 86, which is 92.

### Reasonableness checklist

Before you click, ask:

- Is my average **between the smallest and largest** values?
- Did I divide by the **number of values** (or people), not the number of rows or groups?
- Did I **order the list** before finding a median?
- Is my probability **between 0 and 1**, and is "both" **smaller** than each piece?
- Without replacement, did the **second denominator shrink**?
- Does swapping two people make a **new outcome**? If not, did I divide by 2?
- Did I answer the question in the **last sentence** (a probability, not a count)?`
    },
    {
      id: 'arap6-mc',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Class A has 10 students who averaged 70 on a test. Class B has 30 students who averaged 90. What was the average score of all 40 students?',
            options: ['80', '75', '85', '160'],
            correctAnswer: 2,
            explanation: 'Totals: $10 \\times 70 = 700$ and $30 \\times 90 = 2{,}700$, so $3{,}400 \\div 40 = 85$. 80 averages the two averages, which ignores that Class B is three times as big. 75 attaches each average to the wrong class, and 160 adds the averages.'
          },
          {
            question: 'A bag has 5 red chips and 3 blue chips. Two chips are drawn without replacement. Dana finds the probability that both are red as $\\frac{5}{8} \\times \\frac{5}{8}$. What should she have done?',
            options: ['She should have used $\\frac{4}{7}$ for the second draw', 'She should have added the two fractions, not multiplied', 'She should have used $\\frac{3}{8}$ for the second draw', 'She should have doubled the product, since order matters'],
            correctAnswer: 0,
            explanation: 'After one red chip is drawn, 4 red chips remain out of 7, so the correct work is $\\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$. Adding the fractions is the wrong operation for "both," and $\\frac{3}{8}$ is the chance of blue, which is not what the question asked about.'
          },
          {
            question: 'Eight club members volunteer. Two of them will co-host an event, with the same role. How many different pairs of co-hosts are possible?',
            options: ['56', '28', '16', '64'],
            correctAnswer: 1,
            explanation: 'Swapping the two co-hosts gives the same pair, so $\\frac{8 \\times 7}{2} = 28$. 56 counts every pair twice (the double-counting trap), 16 multiplies 8 by 2, and 64 pairs each member with all 8, including themselves.'
          },
          {
            question: 'A coin is tossed 3 times. What is the probability that it lands heads all 3 times?',
            options: ['$\\frac{3}{2}$', '$\\frac{3}{8}$', '$\\frac{1}{6}$', '$\\frac{1}{8}$'],
            correctAnswer: 3,
            explanation: 'Each toss is independent: $\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$ (one favorable outcome, HHH, out of 8). $\\frac{3}{2}$ adds the three halves and is bigger than 1, so it is impossible. $\\frac{3}{8}$ is the chance of exactly two heads, and $\\frac{1}{6}$ multiplies 2 by 3 for the denominator instead of using $2 \\times 2 \\times 2 = 8$ outcomes.'
          },
          {
            question: 'A mechanic finished 15, 9, 26, 11 and 19 repairs in five weeks. What is the median number of repairs?',
            options: ['26', '16', '17', '15'],
            correctAnswer: 3,
            explanation: 'Order first: 9, 11, 15, 19, 26. The middle value is 15. 26 is the middle of the list as printed (the unordered trap), 16 is the mean ($80 \\div 5$), and 17 is the range ($26 - 9$).'
          }
        ]
      }
    },
    {
      id: 'arap6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- The wrong choices come from seven traps: **wrong count**, **averaging averages**, **median without ordering**, **adding instead of multiplying**, **not shrinking the denominator**, **double counting pairs**, **a count instead of a probability**
- Bank time on one-step items (about a minute) for multi-step items; you cannot go back, so check before you click
- **Estimate** with ranges: averages between low and high, probabilities between 0 and 1
- **Back-solve** needed-score questions by plugging in a choice
- Run the **reasonableness checklist** on every answer

> **Up Next:** Part 7 — a mixed mastery set in true ASVAB style.`
    }
  ]
};
