export const calcabVolumesPart6Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol6-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 6 of 7 \u2014 AP-Style Workshop**

### Typical AP FRQ Structure

The AP exam usually defines a region $R$ and asks:

| Part | Prompt | Method |
|:---:|:---:|:---:|
| (a) | Find area of $R$ | $\\int(\\text{top}-\\text{bottom})$ |
| (b) | Cross-sections $\\perp$ to $x$-axis | $\\int A(x)\\,dx$ |
| (c) | Rotate $R$ about a line | Disk or washer |
| (d) | Write but do not evaluate | Setup only |

### Worked AP Problem

> $R$ is bounded by $y = \\sqrt{x}$, $y = 0$, $x = 4$.

**(a) Area:**
$$A = \\int_0^4\\sqrt{x}\\,dx = \\frac{2}{3}(4^{3/2}) = \\frac{16}{3}$$

**(b) Cross-sections are squares:**

Side $= \\sqrt{x}$. $V = \\int_0^4 x\\,dx = 8$.

**(c) Rotate about $x$-axis:**

$V = \\pi\\int_0^4 x\\,dx = 8\\pi$.

**(d) Rotate about $y = 3$. Write but do not evaluate:**

$R = 3$ (from $y=0$), $r = 3-\\sqrt{x}$.

$$V = \\pi\\int_0^4\\left[9-(3-\\sqrt{x})^2\\right]dx$$

> **AP Tip:** For "write but do not evaluate," show the integral with correct limits and integrand (and the constant $\\pi$ if it belongs). You need not expand or simplify, which also avoids algebra errors.`
    },
    {
      id: 'vol6-quiz1',
      type: 'multiple-choice' as const,
      content: '**AP Practice** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Region between $y=e^x$, $y=1$, $x=1$. Rotated about $x$-axis. Volume:',
            options: ['$\\frac{\\pi(e^2-3)}{2}$', '$\\pi(e-1)$', '$\\frac{\\pi(e^2-1)}{2}$', '$\\pi e^2$'],
            correctAnswer: 0,
            explanation: 'Washer: $R=e^x$, $r=1$. $V = \\pi\\int_0^1(e^{2x}-1)\\,dx = \\pi[\\frac{e^{2x}}{2}-x]_0^1 = \\pi(\\frac{e^2}{2}-1-\\frac{1}{2}) = \\frac{\\pi(e^2-3)}{2}$.'
          },
          {
            question: 'Base: $y=1-x^2$ and $y=0$. Semicircle cross-sections. Setup:',
            options: ['$\\int_{-1}^1\\frac{\\pi(1-x^2)^2}{8}\\,dx$', '$\\int_{-1}^1\\frac{\\pi(1-x^2)^2}{2}\\,dx$', '$\\pi\\int_{-1}^1(1-x^2)^2\\,dx$', '$\\int_{-1}^1\\frac{(1-x^2)^2}{4}\\,dx$'],
            correctAnswer: 0,
            explanation: 'Diameter $= 1-x^2$, radius $= (1-x^2)/2$. Semicircle area $= \\frac{\\pi r^2}{2} = \\frac{\\pi(1-x^2)^2}{8}$.'
          },
          {
            question: '"Write but do not evaluate" on the AP exam means:',
            options: ['A complete definite integral, unevaluated', 'A description of the method in words', 'The final value from a calculator', 'The antiderivative, before the bounds'],
            correctAnswer: 0,
            explanation: 'Set up the definite integral completely, with integrand and bounds, and stop there. You need not simplify it, and you do not evaluate it. A correct integral earns the credit; a description in words, a number, or an antiderivative alone does not.'
          }
        ]
      }
    },
    {
      id: 'vol6-dropdown',
      type: 'dropdown-select' as const,
      content: '**AP decision-making.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Region between $y=x^2$ and $y=4$. Rotate about $y=4$. Disk or washer?',
            options: ['Disk: $R = 4-x^2$', 'Washer: $R = 4$, $r = x^2$', 'Disk: $R = x^2$', 'Washer: $R = 4-x^2$, $r = 4$'],
            correctAnswers: ['Disk: $R = 4-x^2$'],
            hints: ['$y=4$ is both the axis and a boundary curve. No gap.'],
            explanation: 'The region touches the axis $y=4$, so each cross-section is a full disk. $R = 4-x^2$.'
          },
          {
            label: 'Rotate about $y=-1$. Compared to $y=0$, all radii:',
            options: ['Increase by 1', 'Decrease by 1', 'Stay the same', 'Double'],
            correctAnswers: ['Increase by 1'],
            hints: ['Moving the axis down by 1 increases every distance by 1.'],
            explanation: 'Each curve is 1 unit farther from $y=-1$ than from $y=0$.'
          },
          {
            label: 'Cross sections are semicircles whose diameter, of length $s$, lies in the base. Each slice has area:',
            options: ['$\\frac{\\pi}{8}s^2$', '$\\frac{\\pi}{2}s^2$', '$\\frac{\\pi}{4}s^2$', '$\\pi s^2$'],
            correctAnswers: ['$\\frac{\\pi}{8}s^2$'],
            hints: ['The radius is half the diameter, and a semicircle is half a disk.'],
            explanation: 'The radius is $\\frac{s}{2}$, so the area is $\\frac{1}{2}\\pi\\left(\\frac{s}{2}\\right)^2 = \\frac{\\pi}{8}s^2$. Using $s$ as the radius gives $\\frac{\\pi}{2}s^2$, $\\frac{\\pi}{4}s^2$ is a full disk of diameter $s$, and $\\pi s^2$ is a full disk of radius $s$.'
          }
        ]
      }
    },
    {
      id: 'vol6-input',
      type: 'input-box' as const,
      content: '**AP Challenge.** \u270d\ufe0f',
      exercise: {
        question: 'The base is the disk $x^2+y^2 \\le 16$. Cross sections perpendicular to the $x$-axis are squares. Find the volume. Give an exact answer, or a decimal correct to three places.',
        correctAnswer: '1024/3',
        acceptableAnswers: ['1024/3', '341.333'],
        hints: [
          'Side $= 2\\sqrt{16-x^2}$.',
          '$A = (2\\sqrt{16-x^2})^2 = 4(16-x^2)$.',
          '$V = \\int_{-4}^4 4(16-x^2)\\,dx = 8\\int_0^4(16-x^2)\\,dx$.',
          '$= 8[16x-\\frac{x^3}{3}]_0^4 = 8(64-\\frac{64}{3}) = 8 \\cdot \\frac{128}{3} = \\frac{1024}{3}$.'
        ],
        explanation: '$A = (2\\sqrt{16-x^2})^2 = 4(16-x^2)$, so $V = \\int_{-4}^4 4(16-x^2)\\,dx = \\frac{1024}{3} \\approx 341.333$.'
      }
    },
    {
      id: 'vol6-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 6

- AP FRQs combine area, cross-section, and revolution in one problem
- "Write but do not evaluate" = set up only; you need not simplify
- Know cross-section formulas by heart
- Check: does region touch the axis? (disk vs washer)`
    }
  ]
};
