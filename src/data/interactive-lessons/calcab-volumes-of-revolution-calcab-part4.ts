export const calcabVolumesPart4Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'vol4-intro',
      type: 'text' as const,
      content: `# Volumes of Revolution

**Part 4 of 7 \u2014 Cross-Sectional Volumes**

### Known Cross-Sections (Not Revolution!)

Instead of rotating, cross-sections of known shapes are stacked along an axis:

$$\\boxed{V = \\int_a^b A(x)\\,dx}$$

where $A(x)$ is the area of the cross-section at position $x$.

> **Key Fact:** No $\\pi$ in the formula (unless the cross-section is a semicircle). The $\\pi$ in disk/washer comes from circular cross-sections.

### Cross-Section Area Formulas

If the side length is $s = f(x) - g(x)$:

| Shape | Area Formula |
|:---:|:---:|
| Square | $A = s^2$ |
| Semicircle (diameter $= s$) | $A = \\frac{\\pi s^2}{8}$ |
| Equilateral triangle | $A = \\frac{\\sqrt{3}}{4}s^2$ |
| Isosceles right triangle (leg $= s$) | $A = \\frac{1}{2}s^2$ |
| Isosceles right triangle (hyp $= s$) | $A = \\frac{1}{4}s^2$ |

### Worked Example

> Base: region between $y = \\sqrt{x}$ and $y = 0$ on $[0,4]$. Cross-sections $\\perp$ to $x$-axis are **squares**.

Side $= \\sqrt{x} - 0 = \\sqrt{x}$. Area $= (\\sqrt{x})^2 = x$.

$$V = \\int_0^4 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^4 = \\boxed{8}$$

> **AP Tip:** Cross-section volume problems are one of the most frequently tested FRQ topics. Practice identifying which formula to use from the shape name.`
    },
    {
      id: 'vol4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Cross-Sections** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Base between $y=x$ and $y=x^2$ on $[0,1]$. Squares $\\perp$ to $x$-axis. Volume:',
            options: ['$\\frac{1}{30}$', '$\\frac{1}{6}$', '$\\frac{1}{15}$', '$\\frac{2}{15}$'],
            correctAnswer: 0,
            explanation: '$s = x-x^2$. $A = (x-x^2)^2 = x^2-2x^3+x^4$. $V = [\\frac{x^3}{3}-\\frac{x^4}{2}+\\frac{x^5}{5}]_0^1 = \\frac{1}{3}-\\frac{1}{2}+\\frac{1}{5} = \\frac{1}{30}$.'
          },
          {
            question: 'Same base. Equilateral triangles. Volume:',
            options: ['$\\frac{\\sqrt{3}}{120}$', '$\\frac{\\sqrt{3}}{30}$', '$\\frac{1}{30}$', '$\\frac{\\sqrt{3}}{60}$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{\\sqrt{3}}{4}(x-x^2)^2$. $V = \\frac{\\sqrt{3}}{4} \\cdot \\frac{1}{30} = \\frac{\\sqrt{3}}{120}$.'
          },
          {
            question: 'Base: circle $x^2+y^2=9$. Squares $\\perp$ to $x$-axis. Side $=$',
            options: ['$2\\sqrt{9-x^2}$', '$\\sqrt{9-x^2}$', '$9-x^2$', '$3$'],
            correctAnswer: 0,
            explanation: 'Top: $y=\\sqrt{9-x^2}$, bottom: $y=-\\sqrt{9-x^2}$. Side $= 2\\sqrt{9-x^2}$.'
          }
        ]
      }
    },
    {
      id: 'vol4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the shape to the formula.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Semicircular cross-sections with diameter $s$. Area:',
            options: ['$\\frac{\\pi s^2}{8}$', '$\\frac{\\pi s^2}{2}$', '$\\frac{s^2}{2}$', '$\\pi s^2$'],
            correctAnswers: ['$\\frac{\\pi s^2}{8}$'],
            hints: ['Radius $= s/2$. Area of semicircle $= \\frac{1}{2}\\pi r^2 = \\frac{\\pi(s/2)^2}{2}$.'],
            explanation: '$A = \\frac{1}{2}\\pi(\\frac{s}{2})^2 = \\frac{\\pi s^2}{8}$.'
          },
          {
            label: 'Cross-section volume vs revolution volume: when do you use $\\pi$?',
            options: ['Only for circular/semicircular cross-sections', 'Always', 'Never for cross-sections', 'Only for revolution'],
            correctAnswers: ['Only for circular/semicircular cross-sections'],
            hints: ['$\\pi$ appears in the area formula only when the shape is circular.'],
            explanation: 'Squares, triangles: no $\\pi$. Semicircles: $\\frac{\\pi s^2}{8}$ includes $\\pi$. Revolution: $\\pi R^2$.'
          },
          {
            label: '"Perpendicular to the $x$-axis" means cross-sections are:',
            options: ['Vertical slices at each $x$', 'Horizontal slices', 'Along the axis', 'Random orientation'],
            correctAnswers: ['Vertical slices at each $x$'],
            hints: ['Perpendicular to $x$-axis = standing up at each $x$-value.'],
            explanation: 'Each cross-section sits at a particular $x$. Integrate from $a$ to $b$ in $x$.'
          }
        ]
      }
    },
    {
      id: 'vol4-input',
      type: 'input-box' as const,
      content: '**Calculate.** \u270d\ufe0f',
      exercise: {
        question: 'Base between $y = 1-x^2$ and $y = 0$. Square cross-sections $\\perp$ to $x$-axis. Volume $= \\frac{a}{b}$ (lowest terms). Find $a+b$.\n\n(Enter an integer.)',
        correctAnswer: '31',
        acceptableAnswers: ['31'],
        hints: [
          'Intersect: $1-x^2=0$ at $x=\\pm 1$. Side $= 1-x^2$.',
          '$V = \\int_{-1}^1(1-x^2)^2\\,dx = 2\\int_0^1(1-2x^2+x^4)\\,dx$.',
          '$= 2[x-\\frac{2x^3}{3}+\\frac{x^5}{5}]_0^1 = 2(1-\\frac{2}{3}+\\frac{1}{5})$.',
          '$= 2 \\cdot \\frac{8}{15} = \\frac{16}{15}$. $a=16, b=15$.'
        ],
        explanation: '$V = \\frac{16}{15}$. $a=16$, $b=15$, so $a+b = 31$.'
      }
    },
    {
      id: 'vol4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- Cross-section volume: $V = \\int A(x)\\,dx$ \u2014 no automatic $\\pi$
- Find the side length from the base region
- Memorize the 5 common cross-section area formulas
- Very common on AP FRQ problems`
    }
  ]
};
