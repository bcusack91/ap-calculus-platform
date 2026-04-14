export const calcabAreaCurvesPart7Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area7-intro',
      type: 'text' as const,
      content: `# Area Between Curves

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Complete Formula Reference

| Method | Formula |
|:---:|:---:|
| Area in $x$ | $\\int_a^b[f(x)-g(x)]\\,dx$ |
| Area in $y$ | $\\int_c^d[\\text{right}(y)-\\text{left}(y)]\\,dy$ |
| Total area | $\\int_a^b|f(x)-g(x)|\\,dx$ (split at crossings) |
| Signed area | $\\int_a^b f(x)\\,dx$ (allows cancellation) |

### Top AP Mistakes

| Mistake | Correction |
|:---:|:---:|
| Subtracting bottom minus top | Always check which is on top at a test point |
| Forgetting to split at crossings | Total area never cancels \u2014 split where curves cross |
| Using $x$-limits with $dy$ integral | Match limits to variable of integration |
| Not showing intersection work | AP graders need to see $f(x)=g(x)$ and solution |
| Confusing signed and total area | "Area of the region" = total; net change = signed |`
    },
    {
      id: 'area7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Foundations** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Area enclosed by $y = x^3 - x$ and $y = 0$:',
            options: ['$\\frac{1}{2}$', '$0$', '$\\frac{1}{4}$', '$1$'],
            correctAnswer: 0,
            explanation: 'Roots at $x=-1,0,1$. By symmetry, total area $= 2\\int_0^1(x-x^3)\\,dx = 2[\\frac{x^2}{2}-\\frac{x^4}{4}]_0^1 = 2 \\cdot \\frac{1}{4} = \\frac{1}{2}$.'
          },
          {
            question: 'Area between $y = \\ln x$, $y=0$, $x=e$ set up in $dy$:',
            options: ['$\\int_0^1(e-e^y)\\,dy$', '$\\int_0^e \\ln x\\,dx$', '$\\int_1^e(e-x)\\,dx$', '$\\int_0^1 e^y\\,dy$'],
            correctAnswer: 0,
            explanation: 'In $y$: right $= e$, left $= e^y$. $y$ from $0$ to $1$.'
          },
          {
            question: 'The area between $y = |x|$ and $y = 3$ is:',
            options: ['$9$', '$6$', '$3$', '$12$'],
            correctAnswer: 0,
            explanation: 'Intersect at $x = \\pm 3$. $A = \\int_{-3}^3(3-|x|)\\,dx = 2\\int_0^3(3-x)\\,dx = 2[3x-\\frac{x^2}{2}]_0^3 = 2 \\cdot \\frac{9}{2} = 9$.'
          }
        ]
      }
    },
    {
      id: 'area7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Advanced** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Area between $y = \\cos x$ and $y = \\sin x$ on $[0, \\pi/2]$:',
            options: ['$2\\sqrt{2}-2$', '$\\sqrt{2}-1$', '$1$', '$2$'],
            correctAnswer: 0,
            explanation: 'Cross at $x=\\pi/4$. $A = \\int_0^{\\pi/4}(\\cos x-\\sin x)\\,dx + \\int_{\\pi/4}^{\\pi/2}(\\sin x-\\cos x)\\,dx = [\\sin x+\\cos x]_0^{\\pi/4} + [-\\cos x-\\sin x]_{\\pi/4}^{\\pi/2} = (\\sqrt{2}-1)+(\\sqrt{2}-1) = 2\\sqrt{2}-2$.'
          },
          {
            question: 'Region between $x=y^2-2$ and $x=y$. Intersection points in $y$:',
            options: ['$y = -1$ and $y = 2$', '$y = 0$ and $y = 2$', '$y = -2$ and $y = 1$', '$y = 1$ and $y = 3$'],
            correctAnswer: 0,
            explanation: '$y^2-2=y \\Rightarrow y^2-y-2=0 \\Rightarrow (y-2)(y+1)=0 \\Rightarrow y=-1,2$.'
          },
          {
            question: '$\\int_{-3}^3 x^5\\,dx$ equals:',
            options: ['$0$', '$\\frac{729}{3}$', '$486$', '$\\frac{729}{6}$'],
            correctAnswer: 0,
            explanation: '$x^5$ is odd. Integral of an odd function on a symmetric interval is $0$.'
          },
          {
            question: 'Area between $y=4$ and $y=x^2$ using $dy$:',
            options: ['$\\int_0^4 2\\sqrt{y}\\,dy$', '$\\int_{-2}^2(4-x^2)\\,dx$', '$\\int_0^4 y\\,dy$', '$\\int_0^2 \\sqrt{y}\\,dy$'],
            correctAnswer: 0,
            explanation: 'In $y$: right $= \\sqrt{y}$, left $= -\\sqrt{y}$. Width $= 2\\sqrt{y}$. $\\int_0^4 2\\sqrt{y}\\,dy = \\frac{32}{3}$.'
          }
        ]
      }
    },
    {
      id: 'area7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final classification.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Area between $y=e^x$ and $y=e^{-x}$ on $[-1,1]$. Number of sub-integrals:',
            options: ['2 (split at $x=0$)', '1', '3', 'Cannot be computed'],
            correctAnswers: ['2 (split at $x=0$)'],
            hints: ['$e^x = e^{-x}$ at $x=0$. They switch which is on top there.'],
            explanation: '$e^x > e^{-x}$ for $x>0$ and $e^{-x} > e^x$ for $x<0$. Split at $x=0$.'
          },
          {
            label: 'Best variable for area between $x=4-y^2$ and $x=y-2$:',
            options: ['$y$ (both are functions of $y$)', '$x$ (standard setup)', 'Either is equally easy', 'Must use parametric'],
            correctAnswers: ['$y$ (both are functions of $y$)'],
            hints: ['Both curves are already expressed as $x = $ something in $y$.'],
            explanation: 'Both curves are functions of $y$. One integral in $y$ is simplest.'
          },
          {
            label: 'Signed area of $\\sin x$ on $[0, 3\\pi]$ is:',
            options: ['$2$ (three arches: $+2,-2,+2$)', '$0$', '$6$', '$4$'],
            correctAnswers: ['$2$ (three arches: $+2,-2,+2$)'],
            hints: ['$\\int_0^\\pi \\sin x\\,dx = 2$. Each half-period contributes $\\pm 2$.'],
            explanation: '$+2-2+2 = 2$. Total area would be $6$.'
          }
        ]
      }
    },
    {
      id: 'area7-input',
      type: 'input-box' as const,
      content: '**Final Challenge.** \u270d\ufe0f',
      exercise: {
        question: 'Find the area between $y = x^2$ and $y = 3x$.\n\n$A = ?$ (Enter a fraction as a/b.)',
        correctAnswer: '9/2',
        acceptableAnswers: ['9/2', '4.5'],
        hints: [
          'Intersect: $x^2=3x \\Rightarrow x(x-3)=0 \\Rightarrow x=0,3$.',
          'Top: $3x$, Bottom: $x^2$.',
          '$A = \\int_0^3(3x-x^2)\\,dx = [\\frac{3x^2}{2}-\\frac{x^3}{3}]_0^3$.',
          '$= \\frac{27}{2}-9 = \\frac{9}{2}$.'
        ],
        explanation: '$A = \\frac{27}{2}-\\frac{27}{3} = \\frac{27}{2}-9 = \\frac{9}{2}$.'
      }
    },
    {
      id: 'area7-summary',
      type: 'text' as const,
      content: `### Area Between Curves \u2014 Complete!

You\u2019ve mastered:

| Part | Topic |
|:---:|:---:|
| 1 | Foundations & setup |
| 2 | When curves cross |
| 3 | Integrating with respect to $y$ |
| 4 | Multiple regions & strategy |
| 5 | Signed vs total area |
| 6 | AP-style workshop |
| 7 | Comprehensive assessment |

> **You\u2019re ready for AP-level area between curves problems!**`
    }
  ]
};
