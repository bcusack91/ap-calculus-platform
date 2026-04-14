export const calcabOptimizationPart1Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'opt1-intro',
      type: 'text' as const,
      content: `# Optimization

**Part 1 of 7 \u2014 Setting Up Optimization Problems**

### Topic Overview

| Part | Topic |
|:---:|:---:|
| **1** | **Setting up optimization problems** |
| 2 | Geometric optimization |
| 3 | Applied & business optimization |
| 4 | 3D optimization (cylinders & cones) |
| 5 | Distance & mixed optimization |
| 6 | AP-style workshop |
| 7 | Comprehensive assessment |

### The 5-Step Optimization Strategy

$$\\boxed{\\text{1. Variables} \\to \\text{2. Objective} \\to \\text{3. Constraint} \\to \\text{4. Critical pts} \\to \\text{5. Verify}}$$

| Step | Action | Example |
|:---:|:---:|:---:|
| 1. Define variables | Label unknowns, draw a diagram | $x =$ width, $y =$ length |
| 2. Write objective | Function to max/min | $A = xy$ |
| 3. Apply constraint | Eliminate one variable | $2x + y = 200 \\Rightarrow y = 200-2x$ |
| 4. Find critical points | Set $f'(x) = 0$ and solve | $A'(x) = 200-4x = 0$ |
| 5. Verify max/min | Second derivative or endpoints | $A''(x) = -4 < 0 \\Rightarrow$ max |

### Worked Example: Rancher Fencing

> A rancher has 200 m of fencing to enclose a rectangle along a river (no fence on the river side). Find the maximum area.

Let $x =$ width, $y =$ length along river.

**Constraint:** $2x + y = 200 \\Rightarrow y = 200 - 2x$

**Objective:** $A(x) = x(200-2x) = 200x - 2x^2$

$$A'(x) = 200 - 4x = 0 \\quad \\Rightarrow \\quad x = 50$$

$A''(x) = -4 < 0$ \u2014 concave down \u2014 **maximum**

$y = 200-100 = 100$. $\\boxed{A_{\\max} = 50 \\times 100 = 5000 \\text{ m}^2}$

> **Key Fact:** The optimal rectangle along a wall always has the side parallel to the wall equal to **twice** the perpendicular side.`
    },
    {
      id: 'opt1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Setting Up** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'A farmer has 120 m of fencing for all 4 sides of a rectangle. What dimensions maximize the area?',
            options: ['$30 \\times 30$', '$20 \\times 40$', '$10 \\times 50$', '$25 \\times 35$'],
            correctAnswer: 0,
            explanation: '$2x+2y=120$, $y=60-x$. $A=x(60-x)$, $A\'=60-2x=0$ at $x=30$. A square maximizes area for a fixed perimeter.'
          },
          {
            question: 'The sum of two positive numbers is 50. What is their maximum product?',
            options: ['$625$', '$600$', '$500$', '$650$'],
            correctAnswer: 0,
            explanation: '$P=x(50-x)=50x-x^2$. $P\'=50-2x=0$ at $x=25$. $P=25 \\times 25=625$.'
          },
          {
            question: 'In the rancher fencing problem, why do we only need $2x+y=200$ (not $2x+2y$)?',
            options: ['One side is along the river (no fence needed)', 'Two sides share a wall', 'We use half the fencing', 'The shape is a triangle'],
            correctAnswer: 0,
            explanation: 'The river provides one side, so only 3 sides need fencing: two widths $x$ and one length $y$.'
          }
        ]
      }
    },
    {
      id: 'opt1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the setup.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'In "minimize surface area of a box with volume 500," the objective function is:',
            options: ['Surface area', 'Volume', 'Perimeter', 'Cost'],
            correctAnswers: ['Surface area'],
            hints: ['"Minimize surface area" tells you the objective.'],
            explanation: 'The objective is what you optimize. The constraint is volume = 500.'
          },
          {
            label: 'After substituting the constraint, the objective should be a function of:',
            options: ['One variable', 'Two variables', 'Three variables', 'No variables'],
            correctAnswers: ['One variable'],
            hints: ['The constraint eliminates one variable.'],
            explanation: 'The constraint reduces from 2 unknowns to 1, so you can take a single derivative.'
          },
          {
            label: 'If $A\'\'(x) < 0$ at a critical point, the critical point is a:',
            options: ['Local maximum', 'Local minimum', 'Inflection point', 'Saddle point'],
            correctAnswers: ['Local maximum'],
            hints: ['Think concavity.'],
            explanation: '$A\'\' < 0$ means concave down, so the critical point is a local maximum.'
          }
        ]
      }
    },
    {
      id: 'opt1-input',
      type: 'input-box' as const,
      content: '**Solve.** \u270d\ufe0f',
      exercise: {
        question: 'A farmer has 300 m of fencing and wants to enclose a rectangle along a river (no fence on the river side). Find the maximum area in m$^2$.\n\n(Enter an integer.)',
        correctAnswer: '11250',
        acceptableAnswers: ['11250'],
        hints: [
          'Constraint: $2x + y = 300$.',
          '$A(x) = x(300-2x) = 300x - 2x^2$.',
          '$A\'(x) = 300 - 4x = 0$ at $x = 75$. $A = 75 \\times 150$.'
        ],
        explanation: '$y = 300-2(75)=150$. $A = 75 \\times 150 = 11250$ m$^2$.'
      }
    },
    {
      id: 'opt1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- Define variables clearly and draw a diagram
- The **objective** is what you maximize/minimize
- The **constraint** reduces to one variable
- Use the Second Derivative Test or endpoint analysis to verify
- AP Tip: Always state the domain of the objective function`
    }
  ]
};
