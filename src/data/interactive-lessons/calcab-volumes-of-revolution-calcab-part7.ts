export const calcabVolumesPart7Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol7-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Complete Formula Reference

| Method | Formula | When to Use |
|:---:|:---:|:---:|
| Disk | $\\pi\\int R^2\\,dx$ | Region touches axis |
| Washer | $\\pi\\int(R^2-r^2)dx$ | Gap between region and axis |
| Cross-section | $\\int A(x)\\,dx$ | Known shape, no rotation |
| Disk in $y$ | $\\pi\\int R^2\\,dy$ | Rotate about $y$-axis |

### Top AP Mistakes

| Mistake | Correction |
|:---:|:---:|
| $(R-r)^2$ instead of $R^2-r^2$ | Expand: they are NOT equal |
| Forgetting $\\pi$ | Revolution always has $\\pi$; cross-section may not |
| Wrong axis \u2192 wrong radii | $R = |f(x)-k|$, test a point |
| Using $dx$ for $y$-axis rotation | Match variable to perpendicular direction |
| Wrong cross-section formula | Memorize all 5 shapes |
| Not showing setup on FRQ | Write integral before evaluating |`
    },
    {
      id: 'vol7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Methods** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = x^3$ about $x$-axis from $x=0$ to $x=1$. Volume:',
            options: ['$\\frac{\\pi}{7}$', '$\\frac{\\pi}{4}$', '$\\frac{2\\pi}{7}$', '$\\frac{\\pi}{3}$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^1 x^6\\,dx = \\frac{\\pi}{7}$.'
          },
          {
            question: 'Which creates a ring (annulus) cross-section?',
            options: ['Washer method', 'Disk method', 'Cross-section method', 'All methods'],
            correctAnswer: 0,
            explanation: 'Washer = ring with outer radius $R$ and inner radius $r$.'
          },
          {
            question: 'Rotate $y=2$ and $y=x$ about $y=-1$ on $[0,2]$. Outer radius:',
            options: ['$R = 3$', '$R = 2$', '$R = x+1$', '$R = 2-x$'],
            correctAnswer: 0,
            explanation: '$y=2$ is farther from $y=-1$. $R = 2-(-1) = 3$.'
          }
        ]
      }
    },
    {
      id: 'vol7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Cross-Sections & Setup** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Base between $y=x$ and $y=0$ on $[0,2]$. Equilateral triangles $\\perp$ to $x$-axis. Setup:',
            options: ['$\\int_0^2 \\frac{\\sqrt{3}}{4}x^2\\,dx$', '$\\int_0^2 x^2\\,dx$', '$\\int_0^2 \\frac{x^2}{2}\\,dx$', '$\\pi\\int_0^2 x^2\\,dx$'],
            correctAnswer: 0,
            explanation: 'Side $= x$. Equilateral triangle area $= \\frac{\\sqrt{3}}{4}x^2$.'
          },
          {
            question: 'Region between $y=x^2$ and $y=4$ about $y=5$. Inner radius:',
            options: ['$r = 1$', '$r = 5-x^2$', '$r = 5$', '$r = 4-x^2$'],
            correctAnswer: 0,
            explanation: '$y=4$ is closer to $y=5$. $r = 5-4 = 1$.'
          },
          {
            question: 'Rotate $x = y^2$ about $x = 5$ from $y=0$ to $y=2$. Variable:',
            options: ['$dy$ (vertical axis $x=5$)', '$dx$', 'Either', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Axis $x=5$ is vertical \u2192 integrate in $dy$. $R = 5-y^2$.'
          },
          {
            question: 'For a semicircle cross-section with diameter $d$, the area formula constant is:',
            options: ['$\\frac{\\pi}{8}$', '$\\frac{\\pi}{2}$', '$\\frac{1}{2}$', '$\\frac{\\pi}{4}$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{\\pi}{8}d^2$. Radius $= d/2$, semicircle $= \\frac{\\pi(d/2)^2}{2} = \\frac{\\pi d^2}{8}$.'
          }
        ]
      }
    },
    {
      id: 'vol7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final classification.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Rotate $y=\\sqrt{x}$ and $y=0$ about $y=2$ on $[0,4]$. Outer radius:',
            options: ['$R = 2$ (from $y=0$)', '$R = 2-\\sqrt{x}$', '$R = \\sqrt{x}$', '$R = 2+\\sqrt{x}$'],
            correctAnswers: ['$R = 2$ (from $y=0$)'],
            hints: ['$y=0$ is farther from $y=2$ than $y=\\sqrt{x}$ is.'],
            explanation: '$R = 2-0 = 2$. $r = 2-\\sqrt{x}$.'
          },
          {
            label: 'Cross-section volume has $\\pi$ in the answer. The shape must be:',
            options: ['Semicircle (or other circular shape)', 'Square', 'Equilateral triangle', 'Any shape'],
            correctAnswers: ['Semicircle (or other circular shape)'],
            hints: ['Only circular shapes have $\\pi$ in their area formula.'],
            explanation: 'Semicircle: $A = \\frac{\\pi s^2}{8}$. The $\\pi$ carries into the volume.'
          },
          {
            label: 'Disk method is a special case of washer where:',
            options: ['$r = 0$', '$R = r$', '$R = 0$', '$r = 1$'],
            correctAnswers: ['$r = 0$'],
            hints: ['No hole \u2192 inner radius is zero.'],
            explanation: 'Washer with $r=0$: $\\pi\\int(R^2-0)\\,dx = \\pi\\int R^2\\,dx$ = disk.'
          }
        ]
      }
    },
    {
      id: 'vol7-input',
      type: 'input-box' as const,
      content: '**Final Challenge.** \u270d\ufe0f',
      exercise: {
        question: 'Rotate $y = x^2$ about the $x$-axis from $x=0$ to $x=3$. Volume $= \\frac{a\\pi}{b}$ (lowest terms). Find $a+b$.\n\n(Enter an integer.)',
        correctAnswer: '248',
        acceptableAnswers: ['248'],
        hints: [
          '$V = \\pi\\int_0^3 x^4\\,dx$.',
          '$= \\pi[\\frac{x^5}{5}]_0^3 = \\frac{243\\pi}{5}$.',
          '$a = 243$, $b = 5$.'
        ],
        explanation: '$V = \\frac{243\\pi}{5}$. $a+b = 243+5 = 248$.'
      }
    },
    {
      id: 'vol7-summary',
      type: 'text' as const,
      content: `### Volumes of Revolution \u2014 Complete!

You\u2019ve mastered:

| Part | Topic |
|:---:|:---:|
| 1 | Disk method |
| 2 | Washer method |
| 3 | Rotation about other lines |
| 4 | Cross-sectional volumes |
| 5 | Disk & washer in $y$ |
| 6 | AP-style workshop |
| 7 | Comprehensive assessment |

> **You\u2019re ready for AP-level volume problems!**`
    }
  ]
};
