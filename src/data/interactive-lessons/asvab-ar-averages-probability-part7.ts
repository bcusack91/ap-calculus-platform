export const asvabArAveragesProbabilityPart7Data = {
  topicSlug: 'asvab-ar-averages-probability',
  sections: [
    {
      id: 'arap7-intro',
      type: 'text' as const,
      content: `# 🎲 Averages, Counting and Probability

**Part 7 of 7 — Mixed Mastery Set**

This set mixes everything from Parts 2 through 5 the way the real AR subtest does: a few quick ones, several medium ones, and a few multi-step problems. Treat it like test day:

- **No calculator.** Use scratch paper for every sum and product.
- **Read the last sentence first:** average, total, missing value, count, or probability?
- **Estimate** before you compute (averages between low and high, probabilities between 0 and 1), and **check** before you answer, because on the real test you cannot go back.
- Aim for about **3.5 minutes per question** or less.`
    },
    {
      id: 'arap7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Set A: warm-up to medium.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A mechanic did 9, 12, 7, 10 and 12 oil changes on five days. What was the mean number of oil changes per day?',
            options: ['12', '10', '50', '5'],
            correctAnswer: 1,
            explanation: 'Sum: $9 + 12 + 7 + 10 + 12 = 50$, and $50 \\div 5 = 10$. 12 is the mode (the value that appears most often), 50 is the total, and 5 is the range ($12 - 7$).'
          },
          {
            question: 'Ten cards are numbered 1 through 10. One card is drawn at random. What is the probability that its number is greater than 7?',
            options: ['$\\frac{3}{10}$', '$\\frac{7}{10}$', '$\\frac{2}{5}$', '$\\frac{3}{7}$'],
            correctAnswer: 0,
            explanation: 'Favorable: 8, 9 and 10, so 3 cards out of 10: $\\frac{3}{10}$. $\\frac{7}{10}$ is the chance of 7 or less, $\\frac{2}{5}$ ($\\frac{4}{10}$) wrongly counts the 7, and $\\frac{3}{7}$ divides favorable by unfavorable instead of by the total.'
          },
          {
            question: 'A uniform store sells 4 styles of caps and 6 colors of shirts. How many different cap-and-shirt combinations are possible?',
            options: ['10', '48', '36', '24'],
            correctAnswer: 3,
            explanation: 'Each cap goes with each shirt: $4 \\times 6 = 24$. 10 adds the choices, 48 counts each combination twice, and 36 multiplies the shirt colors by themselves ($6 \\times 6$) and leaves out the caps.'
          },
          {
            question: 'A driver\'s first 3 trips averaged 40 miles each. Her fourth trip was 60 miles. What was the average length of all 4 trips?',
            options: ['60', '50', '45', '100'],
            correctAnswer: 2,
            explanation: 'Total: $3 \\times 40 + 60 = 120 + 60 = 180$ miles, and $180 \\div 4 = 45$. 50 averages 40 and 60 as if there were only two trips, 60 divides 180 by 3 (the old count), and 100 adds 40 and 60.'
          },
          {
            question: 'A manager assigns 3 different jobs (cooking, cleaning and shopping) to 3 of 5 volunteers, one job each. How many different assignments are possible?',
            options: ['10', '60', '125', '15'],
            correctAnswer: 1,
            explanation: 'The jobs are different, so order matters: 5 choices for cooking, 4 left for cleaning, 3 left for shopping: $5 \\times 4 \\times 3 = 60$. 125 lets one volunteer take more than one job ($5 \\times 5 \\times 5$), 10 counts groups of 3 without caring who gets which job, and 15 multiplies 5 by 3.'
          },
          {
            question: 'A box holds 9 snack bars: 4 chocolate and 5 peanut. Two bars are taken without replacement. What is the probability that both are chocolate?',
            options: ['$\\frac{16}{81}$', '$\\frac{4}{9}$', '$\\frac{59}{72}$', '$\\frac{1}{6}$'],
            correctAnswer: 3,
            explanation: 'First: $\\frac{4}{9}$. Then 3 chocolate are left out of 8: $\\frac{3}{8}$. Multiply: $\\frac{4}{9} \\times \\frac{3}{8} = \\frac{12}{72} = \\frac{1}{6}$. $\\frac{16}{81}$ uses $\\frac{4}{9}$ twice (no shrinking), $\\frac{4}{9}$ is only the first draw, and $\\frac{59}{72}$ adds the two fractions.'
          }
        ]
      }
    },
    {
      id: 'arap7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Set B: medium to hard.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A spinner has 12 equal sections: 5 red, 4 blue and 3 white. What is the probability that a spin does not land on blue?',
            options: ['$\\frac{1}{3}$', '$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{5}{12}$'],
            correctAnswer: 2,
            explanation: 'Blue: $\\frac{4}{12} = \\frac{1}{3}$, so not blue is $1 - \\frac{1}{3} = \\frac{2}{3}$ (8 of 12 sections). $\\frac{1}{3}$ is the chance of blue itself, $\\frac{3}{4}$ is the chance of not white, and $\\frac{5}{12}$ counts only the red sections.'
          },
          {
            question: 'A soldier\'s first 3 inspection scores average 88. What score does he need on the fourth inspection to raise his average to 90?',
            options: ['92', '96', '90', '360'],
            correctAnswer: 1,
            explanation: 'Target total: $90 \\times 4 = 360$. So far: $88 \\times 3 = 264$. Needed: $360 - 264 = 96$. 92 makes up only one test\'s 2-point shortfall instead of all three ($3 \\times 2 = 6$), 90 assumes he only has to match the target, and 360 is the target total.'
          },
          {
            question: 'On a fitness test, 15 soldiers averaged 240 points and 10 other soldiers averaged 270 points. What was the average for all 25 soldiers?',
            options: ['255', '258', '252', '510'],
            correctAnswer: 2,
            explanation: 'Totals: $15 \\times 240 = 3{,}600$ and $10 \\times 270 = 2{,}700$, so $6{,}300 \\div 25 = 252$. 255 averages the averages (the bigger group is at 240, so the answer must be below 255), 258 attaches each average to the wrong group, and 510 adds the averages.'
          },
          {
            question: 'A coin is tossed and a spinner with 5 equal sections numbered 1 to 5 is spun. What is the probability of tails and an even number?',
            options: ['$\\frac{9}{10}$', '$\\frac{1}{10}$', '$\\frac{2}{5}$', '$\\frac{1}{5}$'],
            correctAnswer: 3,
            explanation: 'Even numbers: 2 and 4, so $\\frac{2}{5}$. Multiply by the coin: $\\frac{1}{2} \\times \\frac{2}{5} = \\frac{2}{10} = \\frac{1}{5}$. $\\frac{9}{10}$ adds the probabilities, $\\frac{1}{10}$ counts only one even number, and $\\frac{2}{5}$ forgets the coin.'
          },
          {
            question: 'The average of 8 numbers is 15. One number is removed, and the average of the remaining 7 numbers is 14. What number was removed?',
            options: ['22', '1', '15', '14'],
            correctAnswer: 0,
            explanation: 'Total before: $8 \\times 15 = 120$. Total after: $7 \\times 14 = 98$. Removed: $120 - 98 = 22$. 1 is just the drop in the average, 15 uses the old average for both totals ($120 - 105$), and 14 uses the new average for both ($112 - 98$).'
          }
        ]
      }
    },
    {
      id: 'arap7-input',
      type: 'input-boxes' as const,
      content: `**One to work out.** ✍️

In a league of 10 teams, each team plays every other team exactly once. How many games are played in all? (number only)`,
      exercise: {
        boxes: 1,
        correctAnswers: ['45'],
        hint1: 'A game between two teams is a pair. Does swapping the two teams make a new game?',
        hint2: 'Ordered pairs: $10 \\times 9 = 90$.',
        hint3: 'Each game was counted twice, so divide by 2.',
        explanation: 'Team A playing Team B is the same game as Team B playing Team A, so $\\frac{10 \\times 9}{2} = \\frac{90}{2} = 45$ games. Answering 90 double counts every game.'
      }
    },
    {
      id: 'arap7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Averages, Counting and Probability

- **Average = sum ÷ count**; use the **balance shortcut** for big numbers; an average lies between the smallest and largest values
- **Median:** order first; even count, average the middle two. Better than the mean when one value is far off
- **Needed score = target × count − sum so far**; adding or removing a value changes the **count** too
- **Weighted average:** totals first; **don't average the averages**
- **Counting:** one blank per choice, multiply; no repeats means one fewer each time; unordered pairs $\\frac{n(n - 1)}{2}$
- **Probability = favorable ÷ total**; **not** = $1 - P$; **and** = multiply; **without replacement**, shrink the second denominator; **expected count** = $P \\times$ trials

### What to Do Next

1. **Take the exit quiz** for this topic to lock in your score.
2. **Review the flashcards** for the average formulas and probability rules until they are automatic.
3. **This is the last topic in the AR unit.** Review any AR topic where your exit-quiz score was lowest, then move on to the Mathematics Knowledge unit, starting with Number Properties, Exponents and Roots. Probability and counting come back on that subtest, so this practice counts twice.`
    }
  ]
};
