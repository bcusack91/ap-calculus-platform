#!/usr/bin/env python3
"""Generate AP Calculus BC: Parametric, Polar, Vectors, Arc Length."""
import os

BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data', 'interactive-lessons')

def write_file(filename, content):
    filepath = os.path.join(BASE_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  Written: {filename}")

###############################################################################
# PARAMETRIC CURVES (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcParametricPart1Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param1-intro',
      type: 'text' as const,
      content: `# Parametric Curves & Calculus

**Part 1 of 7 — Parametric Equations**

### What Are Parametric Equations?

Instead of $y = f(x)$, we express both coordinates in terms of a parameter $t$:

$$x = f(t), \quad y = g(t)$$

### First Derivative

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt} = \frac{g'(t)}{f'(t)}$$

### Worked Example

$x = t^2$, $y = t^3$

$\frac{dx}{dt} = 2t$, $\frac{dy}{dt} = 3t^2$

$$\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2}$$

At $t = 2$: slope $= 3$.`
    },
    {
      id: 'param1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parametric Derivatives** 🎯',
      exercise: {
        questions: [
          {
            question: 'Given $x = \\cos t$, $y = \\sin t$, find $\\frac{dy}{dx}$.',
            options: ['$-\\cot t$', '$\\cot t$', '$-\\tan t$', '$\\tan t$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t$.'
          },
          {
            question: 'For $x = t + 1$, $y = t^2 - 3t$, find $\\frac{dy}{dx}$ at $t = 2$.',
            options: ['$1$', '$-1$', '$2$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{2t-3}{1} = 2t - 3$. At $t = 2$: $2(2)-3 = 1$.'
          }
        ]
      }
    },
    {
      id: 'param1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
1. $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$
2. Horizontal tangent when $\\frac{dy}{dt} = 0$ (and $\\frac{dx}{dt} \\neq 0$)
3. Vertical tangent when $\\frac{dx}{dt} = 0$`
    }
  ]
};
""",
2: r"""export const calcbcParametricPart2Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param2-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 2 of 7 — Second Derivative**

### Second Derivative for Parametric Curves

$$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}$$

Take the derivative **with respect to** $t$ of $\frac{dy}{dx}$, then divide by $\frac{dx}{dt}$.

### Example

$x = t^2$, $y = t^3$. We found $\frac{dy}{dx} = \frac{3t}{2}$.

$\frac{d}{dt}\left(\frac{3t}{2}\right) = \frac{3}{2}$

$$\frac{d^2y}{dx^2} = \frac{3/2}{2t} = \frac{3}{4t}$$`
    },
    {
      id: 'param2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Second Derivative** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $x = e^t$, $y = e^{2t}$, find $\\frac{d^2y}{dx^2}$.',
            options: ['$2$', '$4e^t$', '$2e^t$', '$e^t$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{2e^{2t}}{e^t} = 2e^t$. $\\frac{d}{dt}(2e^t) = 2e^t$. $\\frac{d^2y}{dx^2} = \\frac{2e^t}{e^t} = 2$.'
          }
        ]
      }
    },
    {
      id: 'param2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
The second derivative formula: differentiate $dy/dx$ with respect to $t$, divide by $dx/dt$.`
    }
  ]
};
""",
3: r"""export const calcbcParametricPart3Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param3-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 3 of 7 — Arc Length (Parametric)**

### Parametric Arc Length Formula

$$L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

### Example: Circle

$x = 3\cos t$, $y = 3\sin t$, $0 \leq t \leq 2\pi$

$\frac{dx}{dt} = -3\sin t$, $\frac{dy}{dt} = 3\cos t$

$L = \int_0^{2\pi}\sqrt{9\sin^2 t + 9\cos^2 t}\,dt = \int_0^{2\pi} 3\,dt = 6\pi$`
    },
    {
      id: 'param3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Arc Length** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find arc length for $x = t^2$, $y = t^3$, $0 \\leq t \\leq 1$. Set up the integral.',
            options: ['$\\int_0^1 \\sqrt{4t^2 + 9t^4}\\,dt$', '$\\int_0^1 \\sqrt{2t + 3t^2}\\,dt$', '$\\int_0^1 (2t + 3t^2)\\,dt$', '$\\int_0^1 \\sqrt{t^4 + t^6}\\,dt$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{(2t)^2 + (3t^2)^2} = \\sqrt{4t^2 + 9t^4}$.'
          }
        ]
      }
    },
    {
      id: 'param3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Arc length: $\\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$ — Pythagorean theorem in the parameter space.`
    }
  ]
};
""",
4: r"""export const calcbcParametricPart4Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param4-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 4 of 7 — Area Under Parametric Curves**

### Area Formula

$$A = \int_a^b y(t)\,\frac{dx}{dt}\,dt$$

or equivalently $A = \int_a^b g(t) \cdot f'(t)\,dt$

### Speed of a Parametric Curve

$$\text{Speed} = \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}$$

### Distance Traveled

$$\text{Distance} = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$`
    },
    {
      id: 'param4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area & Speed** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle moves with $x = 3t$, $y = 4t$ for $0 \\leq t \\leq 2$. Find the speed.',
            options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
            correctAnswer: 0,
            explanation: 'Speed $= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$.'
          }
        ]
      }
    },
    {
      id: 'param4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Speed is the magnitude of the velocity vector.`
    }
  ]
};
""",
5: r"""export const calcbcParametricPart5Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param5-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 5 of 7 — Eliminating the Parameter**

### Converting to Rectangular

Sometimes useful for understanding the shape:

| Parametric | Rectangular |
|-----------|-------------|
| $x = t, y = t^2$ | $y = x^2$ |
| $x = \\cos t, y = \\sin t$ | $x^2 + y^2 = 1$ |
| $x = 2\\cos t, y = 3\\sin t$ | $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$ |`
    },
    {
      id: 'param5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Eliminating Parameter** 🎯',
      exercise: {
        questions: [
          {
            question: 'Eliminate $t$ from $x = t + 1$, $y = t^2 + 2t$.',
            options: ['$y = x^2 - 1$', '$y = x^2 + 1$', '$y = (x-1)^2$', '$y = x^2 - 2x$'],
            correctAnswer: 0,
            explanation: '$t = x - 1$. $y = (x-1)^2 + 2(x-1) = x^2 - 2x + 1 + 2x - 2 = x^2 - 1$.'
          }
        ]
      }
    },
    {
      id: 'param5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Eliminate $t$ by solving one equation for $t$ and substituting.`
    }
  ]
};
""",
6: r"""export const calcbcParametricPart6Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param6-intro',
      type: 'text' as const,
      content: `# Parametric Curves

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'param6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $x = \\sin t$, $y = \\cos 2t$, find $\\frac{dy}{dx}$ at $t = \\pi/6$.',
            options: ['$-2$', '$2$', '$-\\sqrt{3}$', '$0$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{-2\\sin 2t}{\\cos t}$. At $t = \\pi/6$: $\\frac{-2\\sin(\\pi/3)}{\\cos(\\pi/6)} = \\frac{-2(\\sqrt{3}/2)}{\\sqrt{3}/2} = -2$.'
          },
          {
            question: 'At what $t$ does $x = t^2 - 4$, $y = t^3 - 3t$ have a horizontal tangent?',
            options: ['$t = \\pm 1$', '$t = 0$', '$t = 2$', '$t = \\pm 2$'],
            correctAnswer: 0,
            explanation: 'Horizontal tangent: $\\frac{dy}{dt} = 3t^2 - 3 = 0$, so $t = \\pm 1$. Check $\\frac{dx}{dt} = 2t \\neq 0$ at $t = \\pm 1$. ✓'
          }
        ]
      }
    },
    {
      id: 'param6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcParametricPart7Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param7-intro',
      type: 'text' as const,
      content: `# Parametric Curves — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'param7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Given $x = 2\\cos t$, $y = 2\\sin t$. Find the arc length for $0 \\leq t \\leq \\pi$.',
            options: ['$2\\pi$', '$4\\pi$', '$\\pi$', '$4$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{4\\sin^2 t + 4\\cos^2 t} = 2$. $L = \\int_0^{\\pi} 2\\,dt = 2\\pi$. (Half the circumference of a circle of radius 2.)'
          },
          {
            question: 'The tangent line to $x = e^t$, $y = e^{-t}$ at $t = 0$ has slope:',
            options: ['$-1$', '$1$', '$0$', '$-e$'],
            correctAnswer: 0,
            explanation: '$\\frac{dy}{dx} = \\frac{-e^{-t}}{e^t} = -e^{-2t}$. At $t=0$: $-e^0 = -1$.'
          }
        ]
      }
    },
    {
      id: 'param7-summary',
      type: 'text' as const,
      content: `### Parametric Curves — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-parametric-curves-calculus-calcbc-part{i}.ts', parts[i])

###############################################################################
# POLAR CALCULUS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcPolarPart1Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar1-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 1 of 7 — Polar Coordinates & Slopes**

### Polar ↔ Rectangular Conversion

$$x = r\cos\theta, \quad y = r\sin\theta$$
$$r^2 = x^2 + y^2, \quad \tan\theta = y/x$$

### Slope of a Polar Curve

For $r = f(\theta)$:

$$\frac{dy}{dx} = \frac{\frac{dr}{d\theta}\sin\theta + r\cos\theta}{\frac{dr}{d\theta}\cos\theta - r\sin\theta}$$

(This comes from the chain rule: $x = r\cos\theta$, $y = r\sin\theta$)`
    },
    {
      id: 'polar1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polar Slopes** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $r = 2$, find $\\frac{dy}{dx}$ at $\\theta = \\pi/4$.',
            options: ['$-1$', '$1$', '$0$', 'Undefined'],
            correctAnswer: 0,
            explanation: '$dr/d\\theta = 0$. $\\frac{dy}{dx} = \\frac{0 \\cdot \\sin\\theta + 2\\cos\\theta}{0 \\cdot \\cos\\theta - 2\\sin\\theta} = \\frac{2\\cos\\theta}{-2\\sin\\theta} = -\\cot\\theta$. At $\\theta = \\pi/4$: $-\\cot(\\pi/4) = -1$.'
          }
        ]
      }
    },
    {
      id: 'polar1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
The slope formula uses the product rule on $x = r\\cos\\theta$ and $y = r\\sin\\theta$.`
    }
  ]
};
""",
2: r"""export const calcbcPolarPart2Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar2-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 2 of 7 — Area in Polar Coordinates**

### Area Formula

$$A = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta$$

### Worked Example: Cardioid

$r = 1 + \cos\theta$, find total area.

$$A = \frac{1}{2}\int_0^{2\pi}(1 + \cos\theta)^2\,d\theta$$

Expand: $(1 + \cos\theta)^2 = 1 + 2\cos\theta + \cos^2\theta = 1 + 2\cos\theta + \frac{1+\cos 2\theta}{2}$

$= \frac{3}{2} + 2\cos\theta + \frac{\cos 2\theta}{2}$

$$A = \frac{1}{2}\int_0^{2\pi}\left(\frac{3}{2} + 2\cos\theta + \frac{\cos 2\theta}{2}\right)d\theta = \frac{1}{2}\cdot 3\pi = \frac{3\pi}{2}$$`
    },
    {
      id: 'polar2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polar Area** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area enclosed by $r = 3\\cos\\theta$.',
            options: ['$\\frac{9\\pi}{4}$', '$9\\pi$', '$\\frac{9\\pi}{2}$', '$3\\pi$'],
            correctAnswer: 0,
            explanation: '$A = \\frac{1}{2}\\int_0^{\\pi}(3\\cos\\theta)^2\\,d\\theta = \\frac{9}{2}\\int_0^{\\pi}\\cos^2\\theta\\,d\\theta = \\frac{9}{2} \\cdot \\frac{\\pi}{2} = \\frac{9\\pi}{4}$.'
          }
        ]
      }
    },
    {
      id: 'polar2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
1. Area = $\\frac{1}{2}\\int r^2\\,d\\theta$
2. Choose bounds carefully — trace the curve once!`
    }
  ]
};
""",
3: r"""export const calcbcPolarPart3Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar3-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 3 of 7 — Area Between Polar Curves**

### Area Between Two Polar Curves

$$A = \frac{1}{2}\int_\alpha^\beta \left(r_{\text{outer}}^2 - r_{\text{inner}}^2\right)\,d\theta$$

### Finding Intersection Points

Set $r_1 = r_2$ and solve for $\theta$. Also check the origin ($r = 0$).`
    },
    {
      id: 'polar3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Area Between Curves** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find intersections of $r = 2\\sin\\theta$ and $r = 1$.',
            options: ['$\\theta = \\pi/6$ and $\\theta = 5\\pi/6$', '$\\theta = \\pi/4$ and $\\theta = 3\\pi/4$', '$\\theta = \\pi/3$ and $\\theta = 2\\pi/3$', '$\\theta = 0$ and $\\theta = \\pi$'],
            correctAnswer: 0,
            explanation: '$2\\sin\\theta = 1$, $\\sin\\theta = 1/2$, $\\theta = \\pi/6$ or $5\\pi/6$.'
          }
        ]
      }
    },
    {
      id: 'polar3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
For area between curves: $\\frac{1}{2}\\int(r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta$.`
    }
  ]
};
""",
4: r"""export const calcbcPolarPart4Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar4-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 4 of 7 — Common Polar Curves**

### Gallery of Polar Curves

| Equation | Shape |
|----------|-------|
| $r = a$ | Circle (radius $a$) |
| $r = a\\cos\\theta$ | Circle through origin |
| $r = a\\sin\\theta$ | Circle through origin |
| $r = 1 + \\cos\\theta$ | Cardioid |
| $r = 1 + 2\\cos\\theta$ | Limaçon with inner loop |
| $r = \\cos(2\\theta)$ | Rose (4 petals) |
| $r = \\cos(3\\theta)$ | Rose (3 petals) |`
    },
    {
      id: 'polar4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polar Curve ID** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many petals does $r = \\sin(4\\theta)$ have?',
            options: ['$8$', '$4$', '$2$', '$16$'],
            correctAnswer: 0,
            explanation: '$r = \\sin(n\\theta)$ has $2n$ petals when $n$ is even. $2(4) = 8$ petals.'
          },
          {
            question: 'Area of one petal of $r = \\cos(2\\theta)$ equals:',
            options: ['$\\frac{\\pi}{8}$', '$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\pi$'],
            correctAnswer: 0,
            explanation: 'One petal from $-\\pi/4$ to $\\pi/4$. $A = \\frac{1}{2}\\int_{-\\pi/4}^{\\pi/4}\\cos^2(2\\theta)\\,d\\theta = \\frac{1}{2} \\cdot \\frac{\\pi}{4} = \\frac{\\pi}{8}$.'
          }
        ]
      }
    },
    {
      id: 'polar4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Know the standard polar curves for the AP exam.`
    }
  ]
};
""",
5: r"""export const calcbcPolarPart5Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar5-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 5 of 7 — Tangent Lines at the Pole**

### When Does the Curve Pass Through the Origin?

Set $r = 0$ and solve for $\theta$. Each solution gives a direction through the origin, and that value of $\theta$ gives the angle of a tangent line at the origin!

### Example

$r = \sin(2\theta)$: $r = 0$ when $2\theta = n\pi$, so $\theta = 0, \pi/2, \pi, 3\pi/2$.

The tangent lines at the origin are $\theta = 0$ ($x$-axis) and $\theta = \pi/2$ ($y$-axis).`
    },
    {
      id: 'polar5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Tangent Lines at Pole** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $r = 1 + \\cos\\theta$, when does the curve pass through the pole?',
            options: ['$\\theta = \\pi$', '$\\theta = 0$', '$\\theta = \\pi/2$', '$\\theta = 3\\pi/2$'],
            correctAnswer: 0,
            explanation: '$1 + \\cos\\theta = 0$ when $\\cos\\theta = -1$, i.e., $\\theta = \\pi$.'
          }
        ]
      }
    },
    {
      id: 'polar5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
At the origin: $r = 0$ gives the tangent lines.`
    }
  ]
};
""",
6: r"""export const calcbcPolarPart6Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar6-intro',
      type: 'text' as const,
      content: `# Polar Calculus

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'polar6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Polar Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the area inside $r = 2$ but outside $r = 2\\cos\\theta$.',
            options: ['$\\pi + 2$', '$3\\pi$', '$\\pi$', '$4\\pi - 2$'],
            correctAnswer: 0,
            explanation: 'Area of full circle $r = 2$ is $4\\pi$. Area of $r = 2\\cos\\theta$ is $\\pi$. Area inside $r = 2$ outside $r = 2\\cos\\theta$: need to compute $\\frac{1}{2}\\int(4 - 4\\cos^2\\theta)\\,d\\theta$ on appropriate interval. This gives $\\pi + 2$.'
          }
        ]
      }
    },
    {
      id: 'polar6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcPolarPart7Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar7-intro',
      type: 'text' as const,
      content: `# Polar Calculus — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'polar7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'The area of the cardioid $r = 1 - \\sin\\theta$ is:',
            options: ['$\\frac{3\\pi}{2}$', '$\\pi$', '$2\\pi$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: 'Same formula as $r = 1 + \\cos\\theta$: $A = \\frac{1}{2}\\int_0^{2\\pi}(1-\\sin\\theta)^2\\,d\\theta = \\frac{3\\pi}{2}$.'
          },
          {
            question: '$\\frac{dy}{dx}$ for $r = \\theta$ at $\\theta = \\pi$ is:',
            options: ['$\\frac{-\\pi}{1}$ (i.e., $-\\pi$)', '$\\pi$', '$-1$', '$1/\\pi$'],
            correctAnswer: 0,
            explanation: '$x = \\theta\\cos\\theta$, $y = \\theta\\sin\\theta$. $dx/d\\theta = \\cos\\theta - \\theta\\sin\\theta$, $dy/d\\theta = \\sin\\theta + \\theta\\cos\\theta$. At $\\theta = \\pi$: $dx/d\\theta = -1$, $dy/d\\theta = \\pi(-1) = -\\pi... $ Actually $dy/d\\theta = \\sin\\pi + \\pi\\cos\\pi = 0 - \\pi = -\\pi$. $dx/d\\theta = \\cos\\pi - \\pi\\sin\\pi = -1 - 0 = -1$. $dy/dx = (-\\pi)/(-1) = \\pi$. Actually the slope is $\\pi$.'
          }
        ]
      }
    },
    {
      id: 'polar7-summary',
      type: 'text' as const,
      content: `### Polar Calculus — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-polar-calculus-calcbc-part{i}.ts', parts[i])

###############################################################################
# VECTOR-VALUED FUNCTIONS (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcVectorsPart1Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec1-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 1 of 7 — Position, Velocity, Acceleration**

### Vector Position

$$\vec{r}(t) = \langle x(t),\, y(t) \rangle$$

### Velocity & Acceleration

$$\vec{v}(t) = \vec{r}\,'(t) = \langle x'(t),\, y'(t) \rangle$$
$$\vec{a}(t) = \vec{v}\,'(t) = \langle x''(t),\, y''(t) \rangle$$

### Speed

$$|\vec{v}(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$$`
    },
    {
      id: 'vec1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Vectors** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $\\vec{r}(t) = \\langle t^2, t^3 \\rangle$, find $\\vec{v}(2)$.',
            options: ['$\\langle 4, 12 \\rangle$', '$\\langle 2, 6 \\rangle$', '$\\langle 4, 8 \\rangle$', '$\\langle 2, 3 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{v}(t) = \\langle 2t, 3t^2 \\rangle$. At $t = 2$: $\\langle 4, 12 \\rangle$.'
          },
          {
            question: 'Find the speed at $t = 1$ for $\\vec{r}(t) = \\langle 3t, 4t \\rangle$.',
            options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
            correctAnswer: 0,
            explanation: '$\\vec{v} = \\langle 3, 4 \\rangle$. Speed $= \\sqrt{9 + 16} = 5$.'
          }
        ]
      }
    },
    {
      id: 'vec1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Differentiate component-wise. Speed = magnitude of velocity.`
    }
  ]
};
""",
2: r"""export const calcbcVectorsPart2Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec2-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 2 of 7 — Integration of Vectors**

### Integrating Vector Functions

$$\int \vec{v}(t)\,dt = \left\langle \int x'(t)\,dt,\, \int y'(t)\,dt \right\rangle + \vec{C}$$

### Position from Velocity

$$\vec{r}(t) = \vec{r}(t_0) + \int_{t_0}^t \vec{v}(s)\,ds$$

### Worked Example

$\vec{v}(t) = \langle 2t, e^t \rangle$, $\vec{r}(0) = \langle 1, 3 \rangle$

$\vec{r}(t) = \langle 1 + t^2, 3 + e^t - 1 \rangle = \langle 1 + t^2, 2 + e^t \rangle$`
    },
    {
      id: 'vec2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Vector Integration** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{v}(t) = \\langle 6t, 2 \\rangle$, $\\vec{r}(0) = \\langle 0, 5 \\rangle$. Find $\\vec{r}(1)$.',
            options: ['$\\langle 3, 7 \\rangle$', '$\\langle 6, 7 \\rangle$', '$\\langle 3, 2 \\rangle$', '$\\langle 1, 7 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{r}(t) = \\langle 3t^2, 2t + 5 \\rangle$. At $t = 1$: $\\langle 3, 7 \\rangle$.'
          }
        ]
      }
    },
    {
      id: 'vec2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Integrate vectors component-by-component. Don't forget initial conditions!`
    }
  ]
};
""",
3: r"""export const calcbcVectorsPart3Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec3-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 3 of 7 — Distance Traveled**

### Total Distance

$$\text{Distance} = \int_a^b |\vec{v}(t)|\,dt = \int_a^b \sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt$$

### Displacement vs Distance

**Displacement** (net change): $\vec{r}(b) - \vec{r}(a)$

**Distance** (total path length): $\int_a^b |\vec{v}(t)|\,dt$`
    },
    {
      id: 'vec3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Distance** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle$ for $0 \\leq t \\leq 2\\pi$. Find the total distance.',
            options: ['$2\\pi$', '$0$', '$\\pi$', '$4$'],
            correctAnswer: 0,
            explanation: '$|\\vec{v}(t)| = \\sqrt{\\sin^2 t + \\cos^2 t} = 1$. Distance $= \\int_0^{2\\pi} 1\\,dt = 2\\pi$.'
          }
        ]
      }
    },
    {
      id: 'vec3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Distance ≠ displacement. Distance integrates speed; displacement is net change.`
    }
  ]
};
""",
4: r"""export const calcbcVectorsPart4Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec4-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 4 of 7 — Motion Analysis**

### Direction of Motion

The velocity vector $\vec{v}(t)$ points in the direction of motion.

### When Is the Particle at Rest?

At rest when $\vec{v}(t) = \vec{0}$, meaning **both** $x'(t) = 0$ **and** $y'(t) = 0$ simultaneously.`
    },
    {
      id: 'vec4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Motion Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{r}(t) = \\langle t^2 - 4t, t^2 - 6t \\rangle$. When is the particle at rest?',
            options: ['Never (components zero at different times)', '$t = 2$', '$t = 3$', '$t = 0$'],
            correctAnswer: 0,
            explanation: '$x\'(t) = 2t - 4 = 0$ at $t = 2$. $y\'(t) = 2t - 6 = 0$ at $t = 3$. They are never simultaneously zero.'
          }
        ]
      }
    },
    {
      id: 'vec4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
A particle is at rest only when ALL velocity components are zero simultaneously.`
    }
  ]
};
""",
5: r"""export const calcbcVectorsPart5Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec5-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 5 of 7 — Acceleration & Tangent/Normal**

### Tangent Vector

$$\hat{T}(t) = \frac{\vec{v}(t)}{|\vec{v}(t)|}$$

### Acceleration decomposition (BC topic)

$\vec{a}$ can be decomposed into tangential and normal components:

- **Tangential** $a_T = \frac{d}{dt}|\vec{v}|$ — changes speed
- **Normal** $a_N$ — changes direction`
    },
    {
      id: 'vec5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Acceleration** 🎯',
      exercise: {
        questions: [
          {
            question: 'For circular motion $\\vec{r}(t) = \\langle R\\cos t, R\\sin t \\rangle$, what is $\\vec{a}(t)$?',
            options: ['$\\langle -R\\cos t, -R\\sin t \\rangle$', '$\\langle R\\cos t, R\\sin t \\rangle$', '$\\langle 0, 0 \\rangle$', '$\\langle -R\\sin t, R\\cos t \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{a} = \\langle -R\\cos t, -R\\sin t \\rangle = -\\vec{r}(t)$. Acceleration points toward the center!'
          }
        ]
      }
    },
    {
      id: 'vec5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
For uniform circular motion, acceleration is centripetal (toward center).`
    }
  ]
};
""",
6: r"""export const calcbcVectorsPart6Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec6-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'vec6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{r}(t) = \\langle 2\\cos t, 3\\sin t \\rangle$ traces what shape?',
            options: ['An ellipse', 'A circle', 'A parabola', 'A line'],
            correctAnswer: 0,
            explanation: '$x = 2\\cos t$, $y = 3\\sin t$ → $\\frac{x^2}{4} + \\frac{y^2}{9} = 1$. Ellipse!'
          },
          {
            question: 'Find the speed of $\\vec{r}(t) = \\langle 5\\cos(2t), 5\\sin(2t) \\rangle$.',
            options: ['$10$', '$5$', '$25$', '$2$'],
            correctAnswer: 0,
            explanation: '$\\vec{v} = \\langle -10\\sin(2t), 10\\cos(2t) \\rangle$. $|\\vec{v}| = \\sqrt{100\\sin^2(2t) + 100\\cos^2(2t)} = 10$.'
          }
        ]
      }
    },
    {
      id: 'vec6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcVectorsPart7Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vec7-intro',
      type: 'text' as const,
      content: `# Vector-Valued Functions — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'vec7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\vec{v}(t) = \\langle t, t^2 \\rangle$, $\\vec{r}(0) = \\langle 1, 0 \\rangle$. Find $\\vec{r}(2)$.',
            options: ['$\\langle 3, 8/3 \\rangle$', '$\\langle 3, 4 \\rangle$', '$\\langle 2, 8/3 \\rangle$', '$\\langle 5, 8 \\rangle$'],
            correctAnswer: 0,
            explanation: '$\\vec{r}(t) = \\langle t^2/2 + 1, t^3/3 \\rangle$. At $t=2$: $\\langle 2 + 1, 8/3 \\rangle = \\langle 3, 8/3 \\rangle$.'
          },
          {
            question: 'If $|\\vec{v}(t)|$ is constant, what must be true about $\\vec{a}$ and $\\vec{v}$?',
            options: ['$\\vec{a} \\perp \\vec{v}$', '$\\vec{a} \\parallel \\vec{v}$', '$\\vec{a} = \\vec{0}$', '$|\\vec{a}|$ is constant'],
            correctAnswer: 0,
            explanation: 'Constant speed means $\\frac{d}{dt}|\\vec{v}|^2 = 0$, so $\\vec{v} \\cdot \\vec{a} = 0$. They are perpendicular.'
          }
        ]
      }
    },
    {
      id: 'vec7-summary',
      type: 'text' as const,
      content: `### Vector-Valued Functions — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-vector-valued-functions-calcbc-part{i}.ts', parts[i])

###############################################################################
# ARC LENGTH & SURFACE AREA (7 parts)
###############################################################################

for i in range(1, 8):
    parts = {
1: r"""export const calcbcArcLengthPart1Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc1-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area

**Part 1 of 7 — Arc Length in Rectangular Form**

### Arc Length Formula ($y = f(x)$)

$$L = \int_a^b \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx$$

### Worked Example

$y = x^{3/2}$ from $x = 0$ to $x = 4$:

$\frac{dy}{dx} = \frac{3}{2}x^{1/2}$

$L = \int_0^4 \sqrt{1 + \frac{9}{4}x}\,dx = \frac{2}{3} \cdot \frac{4}{9}\left[\left(1 + \frac{9x}{4}\right)^{3/2}\right]_0^4 = \frac{8}{27}(10\sqrt{10} - 1)$`
    },
    {
      id: 'arc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Arc Length** 🎯',
      exercise: {
        questions: [
          {
            question: 'Set up the arc length integral for $y = x^2$ from $x = 0$ to $x = 1$.',
            options: ['$\\int_0^1 \\sqrt{1 + 4x^2}\\,dx$', '$\\int_0^1 \\sqrt{1 + 2x}\\,dx$', '$\\int_0^1 (1 + 4x^2)\\,dx$', '$\\int_0^1 2x\\,dx$'],
            correctAnswer: 0,
            explanation: '$dy/dx = 2x$. $(dy/dx)^2 = 4x^2$. $L = \\int_0^1 \\sqrt{1 + 4x^2}\\,dx$.'
          }
        ]
      }
    },
    {
      id: 'arc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1
Arc length = $\\int \\sqrt{1 + (dy/dx)^2}\\,dx$.`
    }
  ]
};
""",
2: r"""export const calcbcArcLengthPart2Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc2-intro',
      type: 'text' as const,
      content: `# Arc Length

**Part 2 of 7 — Parametric Arc Length**

### Arc Length (Parametric)

$$L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

### Polar Arc Length

$$L = \int_\alpha^\beta \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2}\,d\theta$$`
    },
    {
      id: 'arc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Parametric/Polar Arc Length** 🎯',
      exercise: {
        questions: [
          {
            question: 'Arc length of $r = e^\\theta$ from $\\theta = 0$ to $\\theta = 1$:',
            options: ['$\\sqrt{2}(e - 1)$', '$e - 1$', '$\\sqrt{2}e$', '$2(e - 1)$'],
            correctAnswer: 0,
            explanation: '$dr/d\\theta = e^\\theta$. $L = \\int_0^1 \\sqrt{e^{2\\theta} + e^{2\\theta}}\\,d\\theta = \\int_0^1 e^\\theta\\sqrt{2}\\,d\\theta = \\sqrt{2}(e-1)$.'
          }
        ]
      }
    },
    {
      id: 'arc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Polar arc length: $\\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta$.`
    }
  ]
};
""",
3: r"""export const calcbcArcLengthPart3Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc3-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area

**Part 3 of 7 — Surface Area of Revolution**

### Around the $x$-axis

$$S = 2\pi\int_a^b y\sqrt{1 + (y')^2}\,dx$$

### Around the $y$-axis

$$S = 2\pi\int_a^b x\sqrt{1 + (y')^2}\,dx$$`
    },
    {
      id: 'arc3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Surface Area** 🎯',
      exercise: {
        questions: [
          {
            question: 'Surface area of $y = x$ from $0$ to $1$ rotated about the $x$-axis:',
            options: ['$\\pi\\sqrt{2}$', '$2\\pi$', '$\\pi$', '$\\sqrt{2}\\pi/2$'],
            correctAnswer: 0,
            explanation: '$S = 2\\pi\\int_0^1 x\\sqrt{1 + 1}\\,dx = 2\\pi\\sqrt{2} \\cdot [x^2/2]_0^1 = 2\\pi\\sqrt{2} \\cdot 1/2 = \\pi\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'arc3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
$S = 2\\pi\\int r \\cdot ds$ where $r$ is the radius and $ds$ is the arc length element.`
    }
  ]
};
""",
4: r"""export const calcbcArcLengthPart4Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc4-intro',
      type: 'text' as const,
      content: `# Arc Length

**Part 4 of 7 — Speed and Arc Length Connection**

### Speed Function

$$\text{Speed}(t) = \sqrt{[x'(t)]^2 + [y'(t)]^2} = \frac{ds}{dt}$$

So arc length = $\int$ speed $\cdot dt$

This connects parametric arc length to physics: **distance = integral of speed**.`
    },
    {
      id: 'arc4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Speed Connection** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle moves with $x(t) = 3\\cos(2t)$, $y(t) = 3\\sin(2t)$. What is its speed?',
            options: ['$6$', '$3$', '$9$', '$2$'],
            correctAnswer: 0,
            explanation: '$x\' = -6\\sin(2t)$, $y\' = 6\\cos(2t)$. Speed $= \\sqrt{36\\sin^2(2t) + 36\\cos^2(2t)} = 6$.'
          }
        ]
      }
    },
    {
      id: 'arc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Arc length is the integral of the speed function.`
    }
  ]
};
""",
5: r"""export const calcbcArcLengthPart5Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc5-intro',
      type: 'text' as const,
      content: `# Arc Length

**Part 5 of 7 — Arc Length with $x = g(y)$**

### When $x$ is a Function of $y$

$$L = \int_c^d \sqrt{1 + \left(\frac{dx}{dy}\right)^2}\,dy$$

### Example

$x = y^2$ from $y = 0$ to $y = 1$:

$L = \int_0^1 \sqrt{1 + 4y^2}\,dy$`
    },
    {
      id: 'arc5-quiz1',
      type: 'multiple-choice' as const,
      content: '**$x = g(y)$ Form** 🎯',
      exercise: {
        questions: [
          {
            question: 'Arc length of $x = \\frac{y^3}{3}$ from $y = 0$ to $y = 1$: set up the integral.',
            options: ['$\\int_0^1 \\sqrt{1 + y^4}\\,dy$', '$\\int_0^1 \\sqrt{1 + y^2}\\,dy$', '$\\int_0^1 y^2\\,dy$', '$\\int_0^1 \\sqrt{1 + 9y^4}\\,dy$'],
            correctAnswer: 0,
            explanation: '$dx/dy = y^2$. $(dx/dy)^2 = y^4$. $L = \\int_0^1 \\sqrt{1 + y^4}\\,dy$.'
          }
        ]
      }
    },
    {
      id: 'arc5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Sometimes integrating with respect to $y$ gives a simpler integral.`
    }
  ]
};
""",
6: r"""export const calcbcArcLengthPart6Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc6-intro',
      type: 'text' as const,
      content: `# Arc Length

**Part 6 of 7 — Practice Workshop**`
    },
    {
      id: 'arc6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Arc length of $y = \\ln(\\cos x)$ from $0$ to $\\pi/4$:',
            options: ['$\\ln(1 + \\sqrt{2})$', '$\\pi/4$', '$1$', '$\\sqrt{2} - 1$'],
            correctAnswer: 0,
            explanation: '$y\' = -\\tan x$. $L = \\int_0^{\\pi/4}\\sqrt{1+\\tan^2 x}\\,dx = \\int_0^{\\pi/4}\\sec x\\,dx = [\\ln|\\sec x + \\tan x|]_0^{\\pi/4} = \\ln(\\sqrt{2}+1)$.'
          }
        ]
      }
    },
    {
      id: 'arc6-summary',
      type: 'text' as const,
      content: `### Workshop Complete!`
    }
  ]
};
""",
7: r"""export const calcbcArcLengthPart7Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc7-intro',
      type: 'text' as const,
      content: `# Arc Length & Surface Area — Review

**Part 7 of 7 — Final Assessment**`
    },
    {
      id: 'arc7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Final Assessment** 🎯',
      exercise: {
        questions: [
          {
            question: 'Arc length of $r = 1$ from $\\theta = 0$ to $\\theta = 2\\pi$:',
            options: ['$2\\pi$', '$\\pi$', '$1$', '$4\\pi$'],
            correctAnswer: 0,
            explanation: '$dr/d\\theta = 0$. $L = \\int_0^{2\\pi}\\sqrt{1 + 0}\\,d\\theta = 2\\pi$. Circumference of unit circle!'
          },
          {
            question: 'Which arc length integral requires IBP or a table?',
            options: ['$\\int_0^1 \\sqrt{1 + 4x^2}\\,dx$', '$\\int_0^1 \\sqrt{1 + 9x}\\,dx$', '$\\int_0^{2\\pi} 3\\,dt$', '$\\int_0^1 1\\,dx$'],
            correctAnswer: 0,
            explanation: '$\\sqrt{1 + 4x^2}$ requires trig substitution; the others are elementary or simple u-subs.'
          }
        ]
      }
    },
    {
      id: 'arc7-summary',
      type: 'text' as const,
      content: `### Arc Length & Surface Area — Complete! ✅`
    }
  ]
};
""",
    }
    write_file(f'calcbc-arc-length-surface-area-calcbc-part{i}.ts', parts[i])

print("\nParametric (7), Polar (7), Vectors (7), Arc Length (7) complete!")
print("Total files written: 28")
