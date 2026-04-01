export const calcabAccumulationPart7Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc7-intro',
      type: 'text' as const,
      content: `# Accumulation Functions \u2014 Review

**Part 7 of 7 \u2014 Comprehensive Assessment**

This final assessment tests your ability to analyze accumulation functions from graphs of $f$, compute values of $g$, and determine properties of $g$, $g'$, and $g''$.`
    },
    {
      id: 'acc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Graph Analysis** \ud83c\udfaf\n\nThe graph of $f$ is piecewise linear with vertices at $(0, -1)$, $(2, 3)$, $(4, 3)$, $(6, -1)$. Let $g(x) = \\int_0^x f(t)\\,dt$.',
      exercise: {
        questions: [
          {
            question: 'The graph of $f$ is piecewise linear: $f(0)=-1$, $f(2)=3$, $f(4)=3$, $f(6)=-1$. Let $g(x) = \\int_0^x f(t)\\,dt$. Where does $g$ have a local minimum on $(0,6)$?',
            options: ['$x = 0$', '$x = \\frac{1}{2}$', '$x = 2$', '$g$ has no local minimum on $(0,6)$'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x)$. On $[0,2]$, $f$ is linear from $-1$ to $3$: $f(x) = -1 + 2x$. $f = 0$ at $x = \\frac{1}{2}$. Since $f$ changes from negative to positive, $g$ has a local minimum at $x = \\frac{1}{2}$.'
          },
          {
            question: 'Using the same graph, find $g(4)$.',
            options: ['$4$', '$6$', '$8$', '$10$'],
            correctAnswer: 2,
            explanation: '$g(4) = \\int_0^4 f(t)\\,dt$. On $[0,2]$: trapezoid with heights $-1$ and $3$, width $2$: $\\frac{1}{2}(2)(-1+3) = 2$. On $[2,4]$: rectangle with height $3$, width $2$: $3 \\times 2 = 6$. Total: $2 + 6 = 8$.'
          },
          {
            question: 'Using the same graph ($f(0)=-1$, $f(2)=3$, $f(4)=3$, $f(6)=-1$), on which interval is $g$ concave down?',
            options: ['$(0, 2)$', '$(2, 4)$', '$(4, 6)$', '$(0, 4)$'],
            correctAnswer: 2,
            explanation: '$g\'\'(x) = f\'(x)$. On $(4,6)$, $f$ decreases from $3$ to $-1$, so $f\' < 0$, meaning $g\'\' < 0$ and $g$ is concave down.'
          }
        ]
      }
    },
    {
      id: 'acc7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Inequality & Ordering Questions** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Let $g(x) = \\int_0^x f(t)\\,dt$ where $f$ is the piecewise linear function with $f(0) = 2$, $f(2) = 2$, $f(3) = 0$, $f(5) = -2$. Which inequality is true?',
            options: ['$g(3) < g(2) < g(5)$', '$g(2) < g(3) < g(5)$', '$g(5) < g(2) < g(3)$', '$g(5) < g(3) < g(2)$'],
            correctAnswer: 2,
            explanation: '$g(2) = 2 \\times 2 = 4$. $g(3) = 4 + \\frac{1}{2}(1)(2) = 5$. $g(5) = 5 + \\frac{1}{2}(2)(0 + (-2)) = 5 - 2 = 3$. So $g(5) = 3 < g(2) = 4 < g(3) = 5$.'
          },
          {
            question: 'For the same function, rank $g\'(1)$, $g\'(3)$, and $g\'\'(4)$ from least to greatest.',
            options: ['$g\'\'(4) < g\'(3) < g\'(1)$', '$g\'(3) < g\'\'(4) < g\'(1)$', '$g\'(1) < g\'(3) < g\'\'(4)$', '$g\'\'(4) < g\'(1) < g\'(3)$'],
            correctAnswer: 0,
            explanation: '$g\'(1) = f(1) = 2$. $g\'(3) = f(3) = 0$. $g\'\'(4) = f\'(4)$. On $[3,5]$, $f$ goes from $0$ to $-2$, so $f\' = \\frac{-2}{2} = -1$. Thus $g\'\'(4) = -1 < g\'(3) = 0 < g\'(1) = 2$.'
          }
        ]
      }
    },
    {
      id: 'acc7-quiz3',
      type: 'multiple-choice' as const,
      content: '**Mixed Graph & Accumulation** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Let $g(x) = \\int_0^x f(t)\\,dt$. If $f(2) = 0$, $f\'(2) = -3$, and $f$ changes sign from positive to negative at $x = 2$, which statement is true?',
            options: ['$g$ has a local min at $x = 2$ and $g$ is concave down at $x = 2$', '$g$ has a local max at $x = 2$ and $g$ is concave down at $x = 2$', '$g$ has a local max at $x = 2$ and $g$ is concave up at $x = 2$', '$g$ has an inflection point at $x = 2$'],
            correctAnswer: 1,
            explanation: '$g\'(2) = f(2) = 0$ and $f$ changes $+$ to $-$, so $g$ has a local max. $g\'\'(2) = f\'(2) = -3 < 0$, so $g$ is concave down at $x = 2$.'
          },
          {
            question: 'The graph of $f$ consists of two triangles: one above the $x$-axis on $[0,3]$ with height $4$, and one below on $[3,7]$ with height $2$. Let $g(x) = \\int_0^x f(t)\\,dt$. What is $g(7)$?',
            options: ['$2$', '$-2$', '$6$', '$10$'],
            correctAnswer: 0,
            explanation: 'Triangle above: $\\frac{1}{2}(3)(4) = 6$. Triangle below: $\\frac{1}{2}(4)(2) = 4$ (negative). $g(7) = 6 - 4 = 2$.'
          }
        ]
      }
    },
    {
      id: 'acc7-summary',
      type: 'text' as const,
      content: `### Accumulation Functions \u2014 Complete! \u2705

You have mastered the key skills:
- Computing $g(x) = \\int_0^x f(t)\\,dt$ as signed area
- Finding extrema using $g' = f$ (sign changes of $f$)
- Analyzing concavity using $g'' = f'$ (increasing/decreasing behavior of $f$)
- Ordering values of $g$, $g'$, and $g''$`
    }
  ]
};
