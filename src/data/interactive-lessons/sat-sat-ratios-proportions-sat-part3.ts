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

If you double your speed, the trip takes half the time.

---

### Worked Example 1 — Direct Variation from a Table

**Does this table show direct variation?**

| $x$ | 2 | 5 | 8 | 10 |
|-----|---|---|---|-----|
| $y$ | 6 | 15 | 24 | 30 |

| Check | $y/x$ |
|-------|--------|
| $6/2$ | $3$ |
| $15/5$ | $3$ |
| $24/8$ | $3$ |
| $30/10$ | $3$ |

Yes — $k = 3$ is constant, so $y = 3x$.

### Worked Example 2 — Inverse Variation Application

**It takes 4 painters 9 days to paint a building. How long for 6 painters?**

| Step | Work |
|------|------|
| Workers × time = constant | $4 × 9 = 36$ worker-days |
| New equation | $6 × t = 36$ |
| Solve | $t = 6$ days |`
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
      id: 'rp3-text2',
      type: 'text' as const,
      content: `### Recognizing Variation on the SAT

The SAT often disguises variation problems. Here are keywords to watch for:

| Keyword | Type | Equation |
|---------|------|----------|
| "proportional to" | Direct | $y = kx$ |
| "varies directly" | Direct | $y = kx$ |
| "varies inversely" | Inverse | $xy = k$ |
| "constant product" | Inverse | $xy = k$ |
| "varies jointly with $x$ and $y$" | Joint direct | $z = kxy$ |

### Worked Example 3 — Joint Variation

**$z$ varies directly with $x$ and inversely with $y^2$. If $z = 8$ when $x = 4$ and $y = 1$, find $z$ when $x = 6$ and $y = 2$.**

| Step | Work |
|------|------|
| Set up formula | $z = \\frac{kx}{y^2}$ |
| Find $k$ | $8 = \\frac{k(4)}{1^2}$ → $k = 2$ |
| Use new values | $z = \\frac{2(6)}{2^2} = \\frac{12}{4} = 3$ |

### Worked Example 4 — Graph Clue

**The graph of $y$ vs $x$ passes through the origin and is a straight line. What type of variation?**

Direct variation — $y = kx$ always passes through $(0, 0)$ and has slope $k$.

If the graph is a hyperbola ($y = k/x$), it's inverse variation.`
    },
    {
      id: 'rp3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Variation Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'The force $F$ between two magnets varies inversely with the square of the distance $d$. If $F = 20$ when $d = 3$, what is $F$ when $d = 6$?',
            options: ['$5$', '$10$', '$40$', '$80$'],
            correctAnswer: 0,
            explanation: '$F = k/d^2$. $20 = k/9$ → $k = 180$. When $d = 6$: $F = 180/36 = 5$.'
          },
          {
            question: 'Which equation represents "y is directly proportional to the square root of x"?',
            options: ['$y = k\\sqrt{x}$', '$y = kx^2$', '$y^2 = kx$', '$y = k/\\sqrt{x}$'],
            correctAnswer: 0,
            explanation: '"Directly proportional to $\\sqrt{x}$" means $y = k\\sqrt{x}$.'
          },
          {
            question: 'If $xy = 60$ and $x$ triples, by what factor does $y$ change?',
            options: ['Divided by 3', 'Multiplied by 3', 'Stays the same', 'Divided by 9'],
            correctAnswer: 0,
            explanation: 'Inverse variation: $xy = 60$. If $x$ triples, $y$ must be divided by 3 to keep the product at 60.'
          }
        ]
      }
    },
    {
      id: 'rp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Direct or Inverse?** 🔍\n\nClassify each relationship.',
      exercise: {
        dropdowns: [
          { label: 'More workers → less time to complete a job', options: ['Inverse variation', 'Direct variation', 'Neither', 'Joint variation'] },
          { label: 'More hours worked → more money earned', options: ['Direct variation', 'Inverse variation', 'Neither', 'Joint variation'] },
          { label: 'Higher speed → less time for same trip', options: ['Inverse variation', 'Direct variation', 'Neither', 'Joint variation'] },
          { label: 'Doubling side length → quadrupling area', options: ['Neither (it\'s quadratic: A = $s^{2}$)', 'Direct variation', 'Inverse variation', 'Joint variation'] }
        ],
        correctAnswers: ['Inverse variation', 'Direct variation', 'Inverse variation', 'Neither (it\'s quadratic: A = $s^{2}$)'],
        hint1: 'When one goes up and the other goes down (with constant product), it\'s inverse.',
        hint2: 'Hours and pay increase together — that\'s direct.',
        hint3: 'Area varies with the *square* of the side, not linearly — so it\'s not simple direct variation.',
        explanation: 'Workers × time = constant work → inverse. Pay = rate × hours → direct. Distance = speed × time → inverse (for fixed distance). Area = $s^{2}$ is not linear direct variation.'
      }
    },
    {
      id: 'rp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Type | Equation | Constant | Graph |
|------|----------|----------|-------|
| Direct | $y = kx$ | $y/x = k$ | Line through origin |
| Inverse | $y = k/x$ | $xy = k$ | Hyperbola |
| Joint | $z = kxy$ | — | 3D surface |

- Find $k$ from a known pair, then use it for all other questions
- "Proportional to" on the SAT usually means **direct** variation
- Inverse variation: product stays constant as one goes up, the other goes down
- Watch for $y = kx^2$ or $y = k\\sqrt{x}$ — these are NOT simple direct/inverse`
    }
  ]
};
