export const satCalcStrategyPart6Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs6-intro',
      type: 'text' as const,
      content: `# Advanced Calculator Techniques

**Part 6 of 7 — Power Moves for the SAT**

### Technique 1: Plugging In Answer Choices
When stuck, enter each answer choice into Desmos and see which one satisfies the conditions. This is **backsolving** with technology.

### Technique 2: Function Notation
- Define `f(x) = x² - 3x + 2`
- Then evaluate: `f(5)` → Desmos gives 12
- Find: `f(a) = 0` → Desmos gives a = 1, 2

### Technique 3: Transformations
Graph `f(x) = x²`, then compare:
- `f(x) + 3` → shifts up 3
- `f(x - 2)` → shifts right 2
- `-f(x)` → reflects over x-axis
- `f(2x)` → horizontal compression

### Technique 4: Using Points to Find Equations
If a parabola passes through (0, 5), (1, 2), and (3, 8):
1. Type `y = ax² + bx + c`
2. Add restrictions: `(0, 5)`, `(1, 2)`, `(3, 8)` as points
3. Adjust sliders until the curve passes through all three

### Technique 5: Absolute Value Equations
Graph `y = |2x - 6|` and `y = 10`. Click intersections to find that x = -2 and x = 8.`
    },
    {
      id: 'cs6-q1',
      type: 'quiz' as const,
      question: 'If f(x) = x³ - 4x, what is the fastest way to find f(3) on the SAT?',
      options: [
        'Compute 27 - 12 = 15 mentally',
        'Graph y = x³ - 4x and use the table to find y when x = 3',
        'Both are equally fast; choose based on comfort',
        'Use substitution in the answer choices'
      ],
      correctAnswer: 2,
      explanation: 'f(3) = 27 - 12 = 15 is quick mental math. Entering it into Desmos would take longer. For harder functions (like f(2.7)), the calculator wins. Choose the faster method for each problem.'
    }
  ]
};
