const fmBoxFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="40" y1="38.9" x2="300" y2="38.9"/><line x1="40" y1="76.7" x2="300" y2="76.7"/><line x1="40" y1="114.4" x2="300" y2="114.4"/><line x1="40" y1="152.2" x2="300" y2="152.2"/><line x1="134.2" y1="31.3" x2="134.2" y2="190"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="190" x2="305" y2="190"/><line x1="40" y1="200" x2="40" y2="12"/></g><text x="302" y="206" font-size="12" fill="currentColor">x</text><text x="46" y="18" font-size="12" fill="currentColor">V</text><text x="104" y="205" font-size="11" fill="currentColor" text-anchor="middle">2</text><text x="168" y="205" font-size="11" fill="currentColor" text-anchor="middle">4</text><text x="232" y="205" font-size="11" fill="currentColor" text-anchor="middle">6</text><text x="296" y="205" font-size="11" fill="currentColor" text-anchor="middle">8</text><text x="34" y="156" font-size="11" fill="currentColor" text-anchor="end">100</text><text x="34" y="118" font-size="11" fill="currentColor" text-anchor="end">200</text><text x="34" y="80" font-size="11" fill="currentColor" text-anchor="end">300</text><text x="34" y="43" font-size="11" fill="currentColor" text-anchor="end">400</text><g class="fig-accent"><polyline points="40,190 56,136.2 72,94.8 88,64.8 104,44.9 120,34.2 128,31.8 134.2,31.3 144,32.5 152,35.3 168,44.9 184,59.1 200,76.7 216,96.5 232,117.5 248,138.4 264,158.3 280,175.8 296,190" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle class="fig-bg" cx="40" cy="190" r="4.5" stroke="currentColor" stroke-width="2"/><circle class="fig-bg" cx="296" cy="190" r="4.5" stroke="currentColor" stroke-width="2"/></g><g class="fig-accent-2"><circle cx="134.2" cy="31.3" r="4.5" fill="currentColor"/></g><text x="142" y="26" font-size="11" fill="currentColor">(2.945, 420.1)</text></svg>',
  alt: 'Graph of V(x) = x(20 - 2x)(16 - 2x) for 0 < x < 8. The curve starts at an open circle at (0, 0), rises steeply to a maximum marked with a filled dot at approximately (2.945, 420.1), then falls back to an open circle at (8, 0). Horizontal grid lines mark V = 100, 200, 300 and 400; a dashed vertical line drops from the maximum to the x-axis.',
  caption: 'Figure 2. The volume model $V(x) = x(20 - 2x)(16 - 2x)$ on its domain in context, $0 < x < 8$, with the maximum marked.',
  size: 'md' as const,
}

export const precalcFunctionModelingPart3Data = {
  topicSlug: 'function-modeling-precalc',
  sections: [
    {
      id: 'fm3-intro',
      type: 'text' as const,
      content: `# 🧭 Function Model Selection and Construction

**Part 3 of 7 — Polynomial Models in Context**

### Building a Polynomial from Geometry

An open-top box is made from a $20$ cm by $16$ cm sheet of cardboard by cutting a square of side $x$ cm from each corner and folding up the sides.

| Dimension | Expression (cm) |
|:---|:---:|
| Height | $x$ |
| Length | $20 - 2x$ |
| Width | $16 - 2x$ |

$$V(x) = x(20 - 2x)(16 - 2x)$$

Expanding: $(20 - 2x)(16 - 2x) = 4x^2 - 72x + 320$, so

$$V(x) = 4x^3 - 72x^2 + 320x,$$

a **cubic** polynomial with leading coefficient $4$. A product of three lengths that each depend on $x$ is always degree $3$.

### Domain in Context

Algebraically $V(x)$ is defined for every real number. In **context**, every dimension must be positive:

$$x > 0, \\qquad 20 - 2x > 0 \\Rightarrow x < 10, \\qquad 16 - 2x > 0 \\Rightarrow x < 8$$

The tightest restriction wins: the **domain in context is $0 < x < 8$**.

### What the Zeros Mean

$V(x) = 0$ when $x = 0$, $x = 8$ or $x = 10$.

- $x = 0$: no square is cut, so there is no height and no box.
- $x = 8$: the two $8$ cm cuts use up the whole $16$ cm width, so the width is $0$.
- $x = 10$: outside the domain in context; it has no meaning for this box.

> **Key Fact:** The zeros of a model are the inputs where the output quantity is **zero**. Always check whether a zero lies inside the domain in context before interpreting it.`
    },
    {
      id: 'fm3-figure',
      type: 'figure' as const,
      figure: fmBoxFigure,
      content: `## Reading the Model on Its Domain

The graph shows $V(x)$ only for $0 < x < 8$, with **open circles** at both ends because neither endpoint produces a box.

### The maximum, from the calculator

Using the calculator's **maximum** feature on the graph, the local maximum is at approximately $x = 2.945$, where $V \\approx 420.110$. In context: **cutting squares of side approximately $2.945$ cm gives the largest possible volume, approximately $420.110$ cubic centimeters.**

### Average rate of change, with units

$$V(1) = 1 \\cdot 18 \\cdot 14 = 252, \\qquad V(2) = 2 \\cdot 16 \\cdot 12 = 384$$

$$\\text{Average rate of change on } [1, 2] = \\frac{384 - 252}{2 - 1} = 132 \\text{ cubic centimeters per centimeter}$$

In words: as the cut grows from $1$ cm to $2$ cm, the volume increases at an average rate of $132$ cubic centimeters per centimeter of cut.

$$V(3) = 3 \\cdot 14 \\cdot 10 = 420, \\qquad V(4) = 4 \\cdot 12 \\cdot 8 = 384, \\qquad \\text{so on } [3, 4]: \\frac{384 - 420}{1} = -36$$

The negative sign says the volume is **decreasing** on that interval: past the maximum, bigger cuts make a smaller box.

> **Key Fact:** A rate of change is a number **with units** and **an interval**: "cubic centimeters per centimeter, on $[3, 4]$."`
    },
    {
      id: 'fm3-mc',
      type: 'multiple-choice' as const,
      figure: fmBoxFigure,
      content: '**Use the graph and the model $V(x) = x(20 - 2x)(16 - 2x)$.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the domain of $V$ in the context of the box?',
            options: ['$0 < x < 8$', '$0 < x < 10$', '$0 \\le x \\le 16$', 'All real numbers'],
            correctAnswer: 0,
            explanation: 'The width $16 - 2x$ must be positive, which forces $x < 8$; the length condition $x < 10$ is looser. The function is defined for all real numbers algebraically, but the context restricts it.'
          },
          {
            question: 'According to the graph, which statement about the model is correct?',
            options: ['Increasing on $(0, 2.945)$ and decreasing on $(2.945, 8)$', 'The volume increases on the whole domain $(0, 8)$', 'The maximum volume occurs at the endpoint $x = 8$', 'The volume is negative for $x$ between $4$ and $8$'],
            correctAnswer: 0,
            explanation: 'The curve rises to the marked maximum at $x \\approx 2.945$ and falls afterward. At $x = 8$ the volume is $0$, and the graph stays above the axis on the whole domain.'
          },
          {
            question: 'The average rate of change of $V$ on $[1, 2]$ is $132$. Which interpretation is correct?',
            options: ['From $x = 1$ to $x = 2$, the volume grows by an average of $132$ cubic centimeters per centimeter of cut', 'The volume of the box is $132$ cubic centimeters when the cut is $2$ centimeters long', 'The volume increases by a total of $132$ cubic centimeters over the whole domain of the model', 'Each centimeter of cut adds exactly $132$ cubic centimeters to the volume everywhere on the domain'],
            correctAnswer: 0,
            explanation: 'An average rate of change is tied to its interval and carries units of output per input. $V(2) = 384$, not $132$; the rate is not constant on a cubic, so it does not apply "everywhere."'
          }
        ]
      }
    },
    {
      id: 'fm3-input',
      type: 'input-boxes' as const,
      content: `**A closed box.** ✍️

A box has a square base of side $x$ cm and height $12 - x$ cm, so its volume is $V(x) = x^2(12 - x)$ cubic centimeters.

**1)** $V(4)$, in cubic centimeters:

**2)** The domain in context is $0 < x < c$. The value of $c$:

**3)** The average rate of change of $V$ on $[2, 4]$, in cubic centimeters per centimeter:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['128', '12', '44'],
        hint1: '$4^2 \\cdot (12 - 4)$.',
        hint2: 'The height $12 - x$ must be positive.',
        hint3: '$V(2) = 4 \\cdot 10 = 40$. Then $\\frac{V(4) - V(2)}{4 - 2}$.',
        explanation: '(1) $V(4) = 16 \\cdot 8 = 128$. (2) $12 - x > 0$ gives $x < 12$, so $c = 12$. (3) $\\frac{128 - 40}{2} = \\frac{88}{2} = 44$ cubic centimeters per centimeter: between $x = 2$ and $x = 4$ the volume grows at an average rate of $44$ cubic centimeters for each centimeter added to the base.'
      }
    },
    {
      id: 'fm3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Say it the AP way.** 🔽 For the open-top box, the calculator gives a maximum of $V \\approx 420.110$ at $x \\approx 2.945$.',
      exercise: {
        dropdowns: [
          {
            label: 'The best statement of the result is:',
            options: ['Approximately $420.110$ cubic centimeters, when the cut is approximately $2.945$ cm', 'Exactly $420$ cubic centimeters, when the cut is exactly $3$ centimeters', 'Approximately $2.945$ cubic centimeters, when the cut is approximately $420.110$ cm', 'Approximately $420.110$ cubic centimeters, for every cut between $0$ and $8$ cm'],
            correctAnswer: 0
          },
          {
            label: 'The average rate of change of $V$ on $[3, 4]$ is $-36$. This means:',
            options: ['Between cuts of $3$ cm and $4$ cm, the volume falls by an average of $36$ cubic centimeters per centimeter', 'Between cuts of $3$ cm and $4$ cm, the volume rises by an average of $36$ cubic centimeters per centimeter', 'The volume of the box is exactly $36$ cubic centimeters when the cut is $4$ cm', 'The volume decreases by a total of $36$ cubic centimeters over the entire domain'],
            correctAnswer: 0
          },
          {
            label: 'The number of zeros of $V$ inside the domain in context $0 < x < 8$ is:',
            options: ['$0$', '$1$', '$2$', '$3$'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Approximately $420.110$ cubic centimeters, when the cut is approximately $2.945$ cm', 'Between cuts of $3$ cm and $4$ cm, the volume falls by an average of $36$ cubic centimeters per centimeter', '$0$'],
        hint1: 'Values from a calculator are approximate, and the input and output must not be swapped.',
        hint2: 'A rate of change names its interval and its units.',
        hint3: 'The zeros are $x = 0, 8, 10$. Which satisfy $0 < x < 8$?',
        explanation: 'Report both coordinates of the maximum with "approximately" and units. A negative average rate of change describes a decrease per unit of input on the stated interval. The zeros $0$ and $8$ are the endpoints, which are excluded, and $10$ is outside, so there are no zeros inside the domain in context.'
      }
    },
    {
      id: 'fm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- A product of lengths that each depend on $x$ gives a **polynomial** whose degree is the number of factors
- The **domain in context** comes from requiring every quantity to make sense (positive lengths)
- **Zeros** are inputs where the output is zero; interpret only those inside the domain in context
- Find a **maximum** with the calculator; report it as "approximately … when $x$ is approximately …"
- An **average rate of change** is $\\frac{\\Delta \\text{output}}{\\Delta \\text{input}}$ **with units and an interval**

> **Up Next:** Part 4 — piecewise-defined functions: reading the brace and choosing the right rule.`
    }
  ]
};
