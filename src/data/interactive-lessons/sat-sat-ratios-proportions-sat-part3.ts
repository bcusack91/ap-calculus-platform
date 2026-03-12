export const satRatiosPart3Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'rp3-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percentages

**Part 3 of 7 — Direct and Inverse Variation**

### Direct Variation: $y = kx$

"$y$ is directly proportional to $x$" means as $x$ doubles, $y$ doubles.

Constant of proportionality: $k = y/x$

**Example:** If $y = 12$ when $x = 4$, then $k = 3$ and $y = 3x$.

### Inverse Variation: $y = k/x$

"$y$ is inversely proportional to $x$" means as $x$ doubles, $y$ halves.

Product is constant: $xy = k$

**Example:** If $y = 6$ when $x = 8$, then $k = 48$ and $y = 48/x$.

When $x = 12$: $y = 48/12 = 4$

### Joint Variation

"$z$ varies directly with $x$ and inversely with $y$": $z = kx/y$

### SAT Application

Speed and time for a fixed distance: $d = rt$, so $t = d/r$ — time is inversely proportional to rate.

If you double your speed, the trip takes half the time.`
    },
    {
      id: 'rp3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Variation** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $y$ varies directly with $x$ and $y = 15$ when $x = 5$, what is $y$ when $x = 8$?',
            options: ['$24$', '$18$', '$40$', '$3$'],
            correctAnswer: 0,
            explanation: '$k = 15/5 = 3$. So $y = 3x$. When $x = 8$: $y = 24$.'
          },
          {
            question: 'If $y$ varies inversely with $x$ and $y = 10$ when $x = 3$, what is $y$ when $x = 6$?',
            options: ['$5$', '$20$', '$15$', '$2$'],
            correctAnswer: 0,
            explanation: '$k = xy = 30$. When $x = 6$: $y = 30/6 = 5$. As $x$ doubled, $y$ halved.'
          },
          {
            question: 'A trip of 300 miles takes 5 hours at a constant speed. At what speed would the same trip take 4 hours?',
            options: ['$75$ mph', '$60$ mph', '$80$ mph', '$100$ mph'],
            correctAnswer: 0,
            explanation: '$d = rt$: $300 = r \\times 4$ → $r = 75$ mph. (Original speed was $60$ mph — to go faster means higher speed.)'
          }
        ]
      }
    },
    {
      id: 'rp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Direct: $y = kx$ (ratio is constant: $y/x = k$)
- Inverse: $y = k/x$ (product is constant: $xy = k$)
- "Proportional" on SAT usually means direct variation ($y = kx$)
- Check with a known pair to find $k$, then use $k$ for the new scenario`
    }
  ]
};
