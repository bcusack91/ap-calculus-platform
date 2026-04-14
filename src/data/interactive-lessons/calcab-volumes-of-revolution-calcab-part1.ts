export const calcabVolumesPart1Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol1-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 1 of 7 \u2014 The Disk Method**

### Topic Overview

| Part | Topic |
|:---:|:---:|
| **1** | **Disk method** |
| 2 | Washer method |
| 3 | Rotation about other lines |
| 4 | Cross-sectional volumes |
| 5 | Disk & washer in $y$ |
| 6 | AP-style workshop |
| 7 | Comprehensive assessment |

---

### The Disk Method

When you rotate a single curve around an axis, each cross-section is a **disk** (circle):

$$\\boxed{V = \\pi\\int_a^b [R(x)]^2\\,dx}$$

> **Key Fact:** $R(x)$ is the **distance** from the curve to the axis of rotation. For rotation about the $x$-axis, $R(x) = f(x)$.

### Step-by-Step

| Step | Action |
|:---:|:---:|
| 1 | Identify the axis of rotation |
| 2 | Find $R(x) = $ distance from curve to axis |
| 3 | Set up $\\pi\\int_a^b R^2\\,dx$ |
| 4 | Evaluate |

### Worked Example

> Rotate $y = \\sqrt{x}$ about the $x$-axis from $x=0$ to $x=4$.

$R(x) = \\sqrt{x}$.

$$V = \\pi\\int_0^4(\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = \\boxed{8\\pi}$$

> **AP Tip:** The most common mistake is forgetting to square $R(x)$ or forgetting $\\pi$. Always write the formula first.`
    },
    {
      id: 'vol1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Disk Method** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Rotate $y = x^2$ about the $x$-axis from $x=0$ to $x=2$. Volume:',
            options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$\\frac{8\\pi}{3}$', '$4\\pi$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^2 x^4\\,dx = \\pi[\\frac{x^5}{5}]_0^2 = \\frac{32\\pi}{5}$.'
          },
          {
            question: 'Rotate $y = 3$ about the $x$-axis from $x=0$ to $x=5$. Volume:',
            options: ['$45\\pi$', '$15\\pi$', '$9\\pi$', '$30\\pi$'],
            correctAnswer: 0,
            explanation: 'Cylinder: $V = \\pi\\int_0^5 9\\,dx = 9\\pi(5) = 45\\pi$. Check: $\\pi r^2 h = \\pi(9)(5) = 45\\pi$.'
          },
          {
            question: 'Rotate $y = e^x$ about the $x$-axis from $x=0$ to $x=1$. Volume:',
            options: ['$\\frac{\\pi(e^2-1)}{2}$', '$\\pi(e-1)$', '$\\pi e^2$', '$\\frac{\\pi e^2}{2}$'],
            correctAnswer: 0,
            explanation: '$V = \\pi\\int_0^1 e^{2x}\\,dx = \\pi[\\frac{e^{2x}}{2}]_0^1 = \\frac{\\pi(e^2-1)}{2}$.'
          }
        ]
      }
    },
    {
      id: 'vol1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Rotate $y = \\cos x$ about $x$-axis on $[0, \\pi/2]$. The radius is:',
            options: ['$R = \\cos x$', '$R = \\sin x$', '$R = \\cos^2 x$', '$R = \\pi \\cos x$'],
            correctAnswers: ['$R = \\cos x$'],
            hints: ['Radius = distance from curve to axis = $f(x)$.'],
            explanation: 'Rotating about $x$-axis: $R = f(x) = \\cos x$.'
          },
          {
            label: 'Disk method gives a solid with no hole because:',
            options: ['The region touches the axis of rotation', 'Only one curve is involved', 'The function is positive', 'The axis is horizontal'],
            correctAnswers: ['The region touches the axis of rotation'],
            hints: ['A hole appears only when there is a gap between the region and the axis.'],
            explanation: 'The region extends from the axis outward \u2014 every cross-section is a full disk.'
          },
          {
            label: 'The volume integral always includes $\\pi$ because:',
            options: ['Each cross-section is a circle ($A = \\pi r^2$)', 'We are measuring in radians', 'The curve is periodic', 'It simplifies the math'],
            correctAnswers: ['Each cross-section is a circle ($A = \\pi r^2$)'],
            hints: ['What shape is each slice?'],
            explanation: 'Each disk has area $\\pi R^2$. Integrating these areas gives volume.'
          }
        ]
      }
    },
    {
      id: 'vol1-input',
      type: 'input-box' as const,
      content: '**Compute.** \u270d\ufe0f',
      exercise: {
        question: 'Rotate $y = 2x$ about the $x$-axis from $x=0$ to $x=3$. Volume $= a\\pi$. Find $a$.\n\n(Enter an integer.)',
        correctAnswer: '36',
        acceptableAnswers: ['36'],
        hints: [
          '$R = 2x$.',
          '$V = \\pi\\int_0^3(2x)^2\\,dx = 4\\pi\\int_0^3 x^2\\,dx$.',
          '$= 4\\pi[\\frac{x^3}{3}]_0^3 = 4\\pi(9)$.'
        ],
        explanation: '$V = 36\\pi$. So $a = 36$.'
      }
    },
    {
      id: 'vol1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- **Disk method:** $V = \\pi\\int_a^b R^2\\,dx$
- $R$ = distance from curve to axis of rotation
- Don\u2019t forget to **square** $R$ and include $\\pi$
- Works when the region touches the axis (no hole)`
    }
  ]
};
