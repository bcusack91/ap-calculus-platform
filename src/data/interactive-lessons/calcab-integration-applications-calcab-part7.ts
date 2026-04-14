export const calcabIntAppsPart7Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia7-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 7 of 7 \u2014 Comprehensive Assessment**

### Complete Formula Reference

| Application | Formula |
|:---:|:---:|
| Area (horizontal) | $\\int_a^b[f(x)-g(x)]dx$ |
| Area (vertical) | $\\int_c^d[\\text{right}-\\text{left}]dy$ |
| Cross-section volume | $\\int_a^b A(x)\\,dx$ |
| Disk method | $\\pi\\int_a^b R^2\\,dx$ |
| Washer method | $\\pi\\int_a^b(R^2-r^2)dx$ |
| Trapezoidal rule | $\\frac{\\Delta x}{2}[f_0+2f_1+\\cdots+f_n]$ |
| Net change | $\\int_a^b f'(t)\\,dt = f(b)-f(a)$ |
| Average value | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |

### Top AP Mistakes

| Mistake | Correction |
|:---:|:---:|
| Subtracting radii: $(R-r)^2$ | Use $R^2-r^2$ in washer method |
| Forgetting $\\pi$ in revolution | Cross-section: no $\\pi$. Revolution: include $\\pi$. |
| Wrong over/underestimate | Check increasing/decreasing AND concavity |
| Missing intersection points | Always find where curves cross |
| Wrong axis of rotation | Adjust radii: distance = $|f(x)-k|$ |
| Not interpreting with units | Always state quantity, units, and time interval |`
    },
    {
      id: 'ia7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Area & Volume** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = \\sqrt{x}$ about $y$-axis from $y=0$ to $y=2$ (disk in $y$). Volume:',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$4\\pi$', '$8\\pi$'],
            correctAnswer: 0,
            explanation: '$x=y^2$. $V = \\pi\\int_0^2(y^2)^2 dy = \\pi\\int_0^2 y^4\\,dy = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'Area between $y = e^x$ and $y = 1$ from $x=0$ to $x=2$:',
            options: ['$e^2-3$', '$e^2-1$', '$e^2-2$', '$e^2$'],
            correctAnswer: 0,
            explanation: '$\\int_0^2(e^x-1)dx = [e^x-x]_0^2 = (e^2-2)-(1-0) = e^2-3$.'
          },
          {
            question: 'The average value of $f(x) = x^2$ on $[0,3]$ is:',
            options: ['$3$', '$9$', '$\\frac{9}{2}$', '$6$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot 9 = 3$.'
          }
        ]
      }
    },
    {
      id: 'ia7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz \u2014 Numerical & Rates** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: '$f(0)=3, f(1)=5, f(2)=4, f(3)=7$. Trapezoidal estimate of $\\int_0^3 f\\,dx$:',
            options: ['$14$', '$12$', '$19$', '$15$'],
            correctAnswer: 0,
            explanation: '$T = \\frac{1}{2}[3+2(5)+2(4)+7] = \\frac{1}{2}(28) = 14$.'
          },
          {
            question: 'Cars pass a checkpoint at rate $r(t)$. $\\int_0^3 r(t)\\,dt = 42$ means:',
            options: ['42 cars passed during the first 3 hours', 'The rate was 42 cars/hr', '42 is the average rate', '42 cars are at the checkpoint'],
            correctAnswer: 0,
            explanation: 'Integral of rate = total count. 42 cars passed from $t=0$ to $t=3$.'
          },
          {
            question: 'If $f$ is increasing and concave down, which is the best approximation?',
            options: ['Midpoint (overestimates slightly)', 'Left (underestimates)', 'Right (overestimates)', 'Trapezoidal (underestimates)'],
            correctAnswer: 0,
            explanation: 'Concave down: midpoint overestimates but by less than right sum. Midpoint is generally the most accurate.'
          }
        ]
      }
    },
    {
      id: 'ia7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final classification.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Rotate $y=x^2$ and $y=4$ about $y=5$. Outer radius:',
            options: ['$5-x^2$', '$5-4 = 1$', '$x^2+5$', '$4-x^2$'],
            correctAnswers: ['$5-x^2$'],
            hints: ['Outer boundary is $y=x^2$ (farther from $y=5$ on the region). Distance $= 5-x^2$.'],
            explanation: '$y=x^2$ is farther from $y=5$ than $y=4$. Outer $R = 5-x^2$, inner $r = 5-4 = 1$.'
          },
          {
            label: 'Cross sections are isosceles right triangles with leg $= s$. Area formula:',
            options: ['$\\frac{1}{2}s^2$', '$s^2$', '$\\frac{\\sqrt{3}}{4}s^2$', '$\\frac{\\pi}{8}s^2$'],
            correctAnswers: ['$\\frac{1}{2}s^2$'],
            hints: ['Isosceles right triangle: two legs of length $s$. Area $= \\frac{1}{2} \\cdot s \\cdot s$.'],
            explanation: '$A = \\frac{1}{2}(\\text{leg})(\\text{leg}) = \\frac{1}{2}s^2$.'
          },
          {
            label: '$L_4 = 18$ and $R_4 = 26$. Trapezoidal approximation:',
            options: ['$22$', '$18$', '$26$', '$44$'],
            correctAnswers: ['$22$'],
            hints: ['$T = \\frac{L+R}{2}$.'],
            explanation: '$T = (18+26)/2 = 22$.'
          }
        ]
      }
    },
    {
      id: 'ia7-input',
      type: 'input-box' as const,
      content: '**Final Challenge** \u270d\ufe0f',
      exercise: {
        question: 'Rotate $y = 2x$ about the $x$-axis from $x=0$ to $x=3$. Volume $= a\\pi$. Find $a$.\n\n(Enter an integer.)',
        correctAnswer: '36',
        acceptableAnswers: ['36'],
        hints: [
          'Disk method: $R = 2x$.',
          '$V = \\pi\\int_0^3(2x)^2 dx = \\pi\\int_0^3 4x^2\\,dx$.',
          '$= 4\\pi[\\frac{x^3}{3}]_0^3 = 4\\pi \\cdot 9$.'
        ],
        explanation: '$V = 4\\pi \\cdot 9 = 36\\pi$. So $a = 36$.'
      }
    },
    {
      id: 'ia7-summary',
      type: 'text' as const,
      content: `### Integration Applications \u2014 Complete!

You\u2019ve mastered:

| Part | Topic |
|:---:|:---:|
| 1 | Area between curves |
| 2 | Cross-sectional volumes |
| 3 | Disk & washer methods |
| 4 | Riemann sums & trapezoidal rule |
| 5 | Rate problems & net change |
| 6 | Problem-solving workshop |
| 7 | Comprehensive assessment |

> **You\u2019re ready for AP-level integration application problems!**`
    }
  ]
};
