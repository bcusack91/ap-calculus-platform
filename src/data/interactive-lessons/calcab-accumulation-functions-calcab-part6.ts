export const calcabAccumulationPart6Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc6-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 6 of 7 \u2014 Practice Workshop**

### Graph \u2192 Accumulation Function Analysis

This is one of the most heavily tested skills on the AP exam. Given the **graph of $f$**, you must be able to determine:

| To find... | Use... |
|---|---|
| $g(x) = \\int_0^x f(t)\\,dt$ | Signed area under $f$ from $0$ to $x$ |
| Where $g$ increases | Where $f(x) > 0$ |
| Where $g$ decreases | Where $f(x) < 0$ |
| Local max of $g$ | Where $f$ changes from $+$ to $-$ |
| Local min of $g$ | Where $f$ changes from $-$ to $+$ |
| Concavity of $g$ | $g'' = f'$: concave up when $f$ is increasing |
| Inflection points of $g$ | Where $f$ changes from increasing to decreasing (or vice versa) |

> **Strategy:** Always write down $g' = f$ and $g'' = f'$ before answering any question.`
    },
    {
      id: 'acc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Piecewise Linear Graph Analysis** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'The graph of $f$ is piecewise linear: $f(0)=4$, $f(2)=4$, $f(5)=-2$, $f(7)=-2$. Let $g(x) = \\int_0^x f(t)\\,dt$. What is $g(2)$?',
            options: ['$4$', '$8$', '$2$', '$6$'],
            correctAnswer: 1,
            explanation: '$g(2) = \\int_0^2 f(t)\\,dt$. Since $f = 4$ (constant) on $[0,2]$, the area is $4 \\times 2 = 8$.'
          },
          {
            question: 'Using the same graph ($f(0)=4$, $f(2)=4$, $f(5)=-2$, $f(7)=-2$), at what $x$-value does $g$ have its absolute maximum on $[0, 7]$?',
            options: ['$x = 0$', '$x = 2$', '$x = 4$', '$x = 5$'],
            correctAnswer: 2,
            explanation: '$g\'(x) = f(x)$. On $[2, 5]$, $f$ is linear from $4$ to $-2$: $f(x) = -2(x-2)+4 = -2x+8$. Setting $f(x) = 0$: $x = 4$. Since $f$ changes from positive to negative at $x = 4$, $g$ has its maximum there.'
          }
        ]
      }
    },
    {
      id: 'acc6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Concavity & Inflection Points** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Let $g(x) = \\int_0^x f(t)\\,dt$. If $f$ is increasing on $(1,3)$ and decreasing on $(3,5)$, what is true about $g$ at $x = 3$?',
            options: ['$g$ has a local maximum', '$g$ has a local minimum', '$g$ has an inflection point', '$g$ is undefined'],
            correctAnswer: 2,
            explanation: '$g\'\'(x) = f\'(x)$. Since $f$ changes from increasing to decreasing at $x = 3$, $f\'$ changes sign from $+$ to $-$, so $g\'\'$ changes sign. This means $g$ has an inflection point at $x = 3$.'
          },
          {
            question: 'Let $g(x) = \\int_0^x f(t)\\,dt$. On an interval where $f$ is positive and decreasing, $g$ is:',
            options: ['Increasing and concave up', 'Increasing and concave down', 'Decreasing and concave up', 'Decreasing and concave down'],
            correctAnswer: 1,
            explanation: '$g\' = f > 0$, so $g$ is increasing. $g\'\' = f\' < 0$ (since $f$ is decreasing), so $g$ is concave down. Therefore: increasing and concave down.'
          }
        ]
      }
    },
    {
      id: 'acc6-quiz3',
      type: 'multiple-choice' as const,
      content: '**Computing g from Areas** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'The graph of $f$ consists of a semicircle of radius $2$ above the $x$-axis on $[0, 4]$ and a triangle with vertices $(4, 0)$, $(6, 0)$, $(6, -3)$ below the $x$-axis. Let $g(x) = \\int_0^x f(t)\\,dt$. What is $g(6)$?',
            options: ['$2\\pi - 3$', '$2\\pi + 3$', '$2\\pi$', '$\\pi - 3$'],
            correctAnswer: 0,
            explanation: 'Semicircle area: $\\frac{1}{2}\\pi(2)^2 = 2\\pi$ (positive, above axis). Triangle area: $\\frac{1}{2}(2)(3) = 3$ (negative, below axis). $g(6) = 2\\pi - 3$.'
          },
          {
            question: 'Using the same graph, on which interval is $g$ decreasing?',
            options: ['$(0, 2)$', '$(2, 4)$', '$(4, 6)$', '$(0, 4)$'],
            correctAnswer: 2,
            explanation: '$g\' = f$. The semicircle is above the $x$-axis on $(0,4)$ so $f > 0$ and $g$ is increasing there. The triangle is below the axis on $(4,6)$ so $f < 0$ and $g$ is decreasing.'
          }
        ]
      }
    },
    {
      id: 'acc6-quiz4',
      type: 'multiple-choice' as const,
      content: '**Local Extrema from the Graph of f** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Let $g(x) = \\int_0^x f(t)\\,dt$. The values of $f$ are: $f(0) = 2$, $f(1) = 0$, $f(2) = -1$, $f(3) = 0$, $f(4) = 3$. At how many points does $g$ have a local extremum on $(0, 4)$?',
            options: ['$0$', '$1$', '$2$', '$3$'],
            correctAnswer: 2,
            explanation: '$g\' = f$. Local extrema of $g$ occur where $f$ changes sign. $f$ changes from $+$ to $-$ at $x = 1$ (local max of $g$) and from $-$ to $+$ at $x = 3$ (local min of $g$). That is $2$ local extrema.'
          },
          {
            question: 'For the same function, is $g(4)$ positive, negative, or zero?',
            options: ['Positive', 'Negative', 'Zero', 'Cannot be determined'],
            correctAnswer: 0,
            explanation: '$g(4) = \\int_0^4 f(t)\\,dt$. The positive area ($f > 0$ on $[0,1]$ and $[3,4]$) exceeds the negative area ($f < 0$ on $[1,3]$ with min value $-1$). By estimation, the net signed area is positive.'
          }
        ]
      }
    },
    {
      id: 'acc6-summary',
      type: 'text' as const,
      content: `### Workshop Complete! \ud83c\udfaf

**Key Connections:**
- $g' = f$ \u2192 use the **values** of $f$ to find where $g$ increases/decreases
- $g'' = f'$ \u2192 use the **slope** of $f$ to find concavity of $g$
- Local extrema of $g$ \u2192 where $f$ **changes sign**
- Inflection points of $g$ \u2192 where $f$ changes from **increasing to decreasing** (or vice versa)`
    }
  ]
};
