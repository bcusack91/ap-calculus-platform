export const satFunctionsPart3Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'fn3-intro',
      type: 'text' as const,
      content: `# Functions & Graphs

**Part 3 of 7 — Transformations of Functions**

### Vertical Transformations (Outside the function)

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Shift up $k$ | $f(x) + k$ | Graph moves up $k$ units |
| Shift down $k$ | $f(x) - k$ | Graph moves down $k$ units |
| Stretch by $a$ (if $a > 1$) | $af(x)$ | Graph gets taller |
| Compress by $a$ (if $0 < a < 1$) | $af(x)$ | Graph gets shorter |
| Reflect over x-axis | $-f(x)$ | Flip upside down |

### Horizontal Transformations (Inside the function)

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Shift right $h$ | $f(x - h)$ | Graph moves right |
| Shift left $h$ | $f(x + h)$ | Graph moves left |
| Compress by $b$ | $f(bx)$ | Graph gets narrower ($b > 1$) |
| Reflect over y-axis | $f(-x)$ | Flip left-right |

### Key Insight

Horizontal transformations are **opposite** to what you might expect:
- $f(x - 3)$ moves the graph **right**, not left
- $f(2x)$ makes the graph **narrower**, not wider

---

### Worked Example 1

**The graph of $y = f(x)$ passes through $(2, 5)$. Where does the point move under $y = 3f(x - 4) + 1$?**

| Transformation | Effect on $(2, 5)$ |
|---------------|-------------------|
| $f(x - 4)$: right 4 | $(2 + 4, 5) = (6, 5)$ |
| $3f$: stretch $y$ by 3 | $(6, 15)$ |
| $+ 1$: up 1 | $(6, 16)$ |

The point moves to $(6, 16)$.`
    },
    {
      id: 'fn3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Transformations** 🎯',
      exercise: {
        questions: [
          {
            question: 'The graph of $y = f(x)$ is shifted 2 units left and 3 units up. The new equation is:',
            options: ['$y = f(x + 2) + 3$', '$y = f(x - 2) + 3$', '$y = f(x + 2) - 3$', '$y = f(x - 3) + 2$'],
            correctAnswer: 0,
            explanation: 'Left 2: replace $x$ with $x + 2$ → $f(x+2)$. Up 3: add 3 → $f(x+2) + 3$.'
          },
          {
            question: 'If $f(x) = x^2$ and $g(x) = -(x-1)^2 + 4$, how is $g$ obtained from $f$?',
            options: ['Shift right 1, reflect over x-axis, shift up 4', 'Shift left 1, reflect over x-axis, shift up 4', 'Shift right 1, shift up 4, reflect over x-axis', 'Reflect over y-axis, shift right 1, shift up 4'],
            correctAnswer: 0,
            explanation: '$g(x) = -f(x-1) + 4$: $(x-1)$ shifts right 1, the negative reflects over x-axis, $+4$ shifts up 4.'
          },
          {
            question: 'The vertex of $y = x^2$ is at $(0,0)$. Where is the vertex of $y = 3(x+2)^2 - 5$?',
            options: ['$(-2, -5)$', '$(2, -5)$', '$(-2, 5)$', '$(2, 5)$'],
            correctAnswer: 0,
            explanation: '$(x+2)$ shifts left 2, $-5$ shifts down 5. The vertex moves from $(0,0)$ to $(-2, -5)$. The factor of 3 stretches vertically but doesn\'t move the vertex.'
          }
        ]
      }
    },
    {
      id: 'fn3-text2',
      type: 'text' as const,
      content: `### Combining Multiple Transformations

Apply transformations in this order:
1. Horizontal shifts and stretches (inside)
2. Reflections
3. Vertical stretches (outside)
4. Vertical shifts (outside)

### Worked Example 2

**Describe the transformations from $y = |x|$ to $y = -2|x + 3| + 7$.**

| Piece | Transformation |
|-------|---------------|
| $x + 3$ | Shift left 3 |
| $-2$ (coefficient) | Reflect over x-axis, stretch by factor 2 |
| $+7$ | Shift up 7 |
| Vertex | Moves from $(0, 0)$ to $(-3, 7)$ |
| Opens | Downward (because of the negative) |

### Worked Example 3

**If $f(3) = 10$, what point must be on $y = f(x + 5) - 2$?**

| Step | Work |
|------|------|
| Original point | $(3, 10)$ |
| $f(x + 5)$: left 5 | $x$-coordinate: $3 - 5 = -2$ |
| $- 2$: down 2 | $y$-coordinate: $10 - 2 = 8$ |
| New point | $(-2, 8)$ |`
    },
    {
      id: 'fn3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Applied Transformations** 🎯',
      exercise: {
        questions: [
          {
            question: 'If the graph of $y = f(x)$ has a maximum at $(4, 9)$, then $y = -f(x) + 2$ has a minimum at:',
            options: ['$(4, -7)$', '$(4, -9)$', '$(-4, -7)$', '$(4, 11)$'],
            correctAnswer: 0,
            explanation: '$-f(x)$ reflects over x-axis: max $(4,9)$ becomes min $(4,-9)$. Then $+2$ shifts up: $(4, -9+2) = (4,-7)$.'
          },
          {
            question: 'Which transformation does NOT change the x-intercepts of $f(x)$?',
            options: ['$f(x) + 3$', '$2f(x)$', '$f(x - 1)$', '$f(-x)$'],
            correctAnswer: 1,
            explanation: '$2f(x)$: if $f(a) = 0$, then $2f(a) = 0$ too. Multiplying by a constant preserves zeros. The others shift, reflect, or translate the x-intercepts.'
          },
          {
            question: 'The graph of $y = (x - 3)^2 + 1$ is reflected over the y-axis. The equation is:',
            options: ['$y = (-x - 3)^2 + 1$', '$y = (x + 3)^2 + 1$', '$y = -(x - 3)^2 + 1$', '$y = (x - 3)^2 - 1$'],
            correctAnswer: 0,
            explanation: 'Reflect over y-axis: replace $x$ with $-x$. $y = (-x - 3)^2 + 1$. Note: this equals $(x+3)^2 + 1$, so both A and B describe the same graph.'
          }
        ]
      }
    },
    {
      id: 'fn3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name That Transformation** 🔍\n\nIdentify the transformation applied to $y = f(x)$.',
      exercise: {
        dropdowns: [
          { label: '$y = f(x) + 5$', options: ['Shift up 5', 'Shift right 5', 'Stretch by 5', 'Shift left 5'] },
          { label: '$y = f(x - 4)$', options: ['Shift right 4', 'Shift left 4', 'Shift down 4', 'Compress by 4'] },
          { label: '$y = -f(x)$', options: ['Reflect over x-axis', 'Reflect over y-axis', 'Shift down 1', 'Negate the input'] },
          { label: '$y = f(-x)$', options: ['Reflect over y-axis', 'Reflect over x-axis', 'Shift left', 'No change'] }
        ],
        correctAnswers: ['Shift up 5', 'Shift right 4', 'Reflect over x-axis', 'Reflect over y-axis'],
        hint1: 'Adding outside the function = vertical shift.',
        hint2: '$f(x - h)$ moves right — opposite of what you\'d expect!',
        hint3: 'A negative outside the function flips the $y$-values.',
        explanation: '$+5$ outside = up 5. $x - 4$ inside = right 4. Negative outside = reflect over x-axis. Negative inside (on $x$) = reflect over y-axis.'
      }
    },
    {
      id: 'fn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

| Modification | Location | Direction |
|-------------|----------|-----------|
| $f(x) + k$ | Outside | Up $k$ (as expected) |
| $f(x - h)$ | Inside | Right $h$ (opposite!) |
| $af(x)$ | Outside | Vertical stretch/compress |
| $f(bx)$ | Inside | Horizontal compress (opposite!) |
| $-f(x)$ | Outside | Reflect over x-axis |
| $f(-x)$ | Inside | Reflect over y-axis |

- To track a point: apply horizontal changes to $x$, then vertical changes to $y$
- Vertex transformations: $(0,0) → (h, k)$ in $a f(x - h) + k$`
    }
  ]
};
