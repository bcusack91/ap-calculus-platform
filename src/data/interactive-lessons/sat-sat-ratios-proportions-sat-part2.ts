export const satRatiosPart2Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Proportions & Cross-Multiplication

**Part 2 of 7 — Setting Up Proportions, Cross-Multiplying & Scaling**

A **proportion** states that two ratios are equal:

$$\\frac{a}{b} = \\frac{c}{d}$$

**Cross-multiplication** gives:

$$a \\cdot d = b \\cdot c$$

This is the primary tool for solving proportion problems on the SAT.

**Example 1:** Solve $\\frac{3}{8} = \\frac{x}{24}$.

$$3 \\times 24 = 8 \\times x \\implies 72 = 8x \\implies x = 9$$

**Example 2:** Solve $\\frac{5}{x} = \\frac{15}{27}$.

$$5 \\times 27 = 15x \\implies 135 = 15x \\implies x = 9$$
      `
    },
    {
      id: 'sat-rp2-scaling',
      type: 'text' as const,
      content: `
## Scaling Recipes & Real-World Proportions

**Example 3 — Recipe Scaling:** A recipe for 4 servings calls for 6 cups of flour. How much flour is needed for 10 servings?

$$\\frac{6}{4} = \\frac{x}{10} \\implies 6 \\times 10 = 4x \\implies x = 15 \\text{ cups}$$

**Example 4 — Map Scale:** On a map, 2 cm represents 50 km. If two cities are 7 cm apart on the map, what is the actual distance?

$$\\frac{2}{50} = \\frac{7}{d} \\implies 2d = 350 \\implies d = 175 \\text{ km}$$

**Example 5 — Shadow Proportion:** A 6-foot person casts a 4-foot shadow. A tree casts a 20-foot shadow. How tall is the tree?

$$\\frac{6}{4} = \\frac{h}{20} \\implies 6 \\times 20 = 4h \\implies h = 30 \\text{ feet}$$

**SAT Tip:** Always put matching units in matching positions:

$$\\frac{\\text{object}_1}{\\text{shadow}_1} = \\frac{\\text{object}_2}{\\text{shadow}_2}$$
      `
    },
    {
      id: 'sat-rp2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Cross-Multiplication** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $\\frac{7}{x} = \\frac{21}{36}$',
            options: ['$x = 9$', '$x = 12$', '$x = 14$', '$x = 18$'],
            correctAnswer: 1,
            explanation: '$7 \\times 36 = 21x \\implies 252 = 21x \\implies x = 12$.'
          },
          {
            question: 'A recipe for 6 cookies uses 2 eggs. How many eggs are needed for 21 cookies?',
            options: ['$5$', '$6$', '$7$', '$8$'],
            correctAnswer: 2,
            explanation: '$\\frac{2}{6} = \\frac{e}{21} \\implies 2 \\times 21 = 6e \\implies e = 7$.'
          }
        ]
      }
    },
    {
      id: 'sat-rp2-multivar',
      type: 'text' as const,
      content: `
## Multi-Step Proportion Problems

Sometimes the SAT nests a proportion inside a larger problem.

**Example 6:** The ratio of boys to girls in a class is $3 : 4$. The ratio of girls to teachers is $8 : 1$. If there are 3 teachers, how many boys are in the class?

**Step 1:** Girls $= 8 \\times 3 = 24$.

**Step 2:** $\\frac{\\text{boys}}{\\text{girls}} = \\frac{3}{4} \\implies \\frac{b}{24} = \\frac{3}{4} \\implies b = 18$.

**Example 7:** If $\\frac{a}{b} = \\frac{2}{5}$ and $\\frac{b}{c} = \\frac{5}{3}$, find $\\frac{a}{c}$.

$$\\frac{a}{c} = \\frac{a}{b} \\cdot \\frac{b}{c} = \\frac{2}{5} \\cdot \\frac{5}{3} = \\frac{2}{3}$$

**SAT Tip:** Chain ratios by ensuring the shared quantity has the same value in both ratios. Then multiply straight across.
      `
    },
    {
      id: 'sat-rp2-input1',
      type: 'input-boxes' as const,
      content: `
**Proportion Practice** 🧮

1) Solve $\\frac{4}{9} = \\frac{x}{45}$.
2) A car uses 3 gallons of gas for every 90 miles. How many gallons for 210 miles?
3) If $\\frac{a}{b} = \\frac{3}{7}$ and $b = 35$, find $a$.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '7', '15'],
        hint1: '$4 \\times 45 = 9x$.',
        hint2: '$\\frac{3}{90} = \\frac{g}{210} \\implies 3 \\times 210 = 90g$.',
        hint3: '$\\frac{a}{35} = \\frac{3}{7} \\implies 7a = 105$.',
        explanation: '$x = 20$, gallons $= 7$, $a = 15$.'
      }
    },
    {
      id: 'sat-rp2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Proportion Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cross-multiplying $\\frac{a}{b} = \\frac{c}{d}$ gives …',
            options: ['$a + d = b + c$', '$ad = bc$', '$ac = bd$', '$a/c = b/d$']
          },
          {
            label: 'In a proportion, if you multiply numerator and denominator of one side by the same number, the proportion …',
            options: ['becomes invalid', 'stays true', 'reverses', 'doubles']
          },
          {
            label: 'To find the unknown in $\\frac{5}{12} = \\frac{x}{36}$, the fastest method is …',
            options: ['guess and check', 'cross-multiply', 'add 5 to both sides', 'subtract 12 from 36']
          }
        ],
        correctAnswers: ['$ad = bc$', 'stays true', 'cross-multiply'],
        hint1: 'Multiply diagonally.',
        hint2: 'Equivalent fractions have the same value.',
        hint3: '$5 \\times 36 = 12x$ is the fastest path.',
        explanation: 'Cross-multiplication gives $ad = bc$. Scaling a fraction keeps it equivalent. Cross-multiplying is the standard technique.'
      }
    },
    {
      id: 'sat-rp2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'On a blueprint, $\\frac{1}{4}$ inch represents 3 feet. A room measures $2\\frac{1}{2}$ inches on the blueprint. What is the actual length of the room in feet?',
            options: ['$24$', '$30$', '$36$', '$42$'],
            correctAnswer: 1,
            explanation: '$\\frac{0.25}{3} = \\frac{2.5}{d} \\implies 0.25d = 7.5 \\implies d = 30$ feet.'
          },
          {
            question: 'If 8 machines can produce 560 widgets in 7 hours, how many widgets can 5 machines produce in 10 hours?',
            options: ['$350$', '$400$', '$500$', '$700$'],
            correctAnswer: 2,
            explanation: 'Rate per machine per hour $= 560/(8 \\times 7) = 10$. With 5 machines for 10 hours: $5 \\times 10 \\times 10 = 500$.'
          }
        ]
      }
    }
  ]
};
