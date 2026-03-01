export const satRatiosPart6Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-rp6-intro',
      type: 'text' as const,
      content: `
# 🗺️ Scale Factors & Similar Figures

**Part 6 of 7 — Map Scales, Similar Triangles & Area/Volume Scaling**

A **scale factor** $k$ relates corresponding lengths of two similar figures:

$$\\text{new length} = k \\times \\text{original length}$$

**Key scaling rules:**

| Dimension | How it scales |
|-----------|---------------|
| Length | $\\times k$ |
| Area | $\\times k^2$ |
| Volume | $\\times k^3$ |

**Example 1 — Map:** A map has scale $1 : 25{,}000$. Two points are 8 cm apart on the map. Actual distance?

$$8 \\times 25{,}000 = 200{,}000 \\text{ cm} = 2 \\text{ km}$$
      `
    },
    {
      id: 'sat-rp6-similar',
      type: 'text' as const,
      content: `
## Similar Triangles

Two triangles are **similar** ($\\triangle ABC \\sim \\triangle DEF$) when corresponding angles are equal and corresponding sides are proportional.

**Example 2:** $\\triangle ABC \\sim \\triangle DEF$ with sides $AB = 6$, $BC = 8$, $CA = 10$ and $DE = 9$. Find $EF$ and $FD$.

$$k = \\frac{DE}{AB} = \\frac{9}{6} = 1.5$$

$$EF = 8 \\times 1.5 = 12 \\qquad FD = 10 \\times 1.5 = 15$$

**Example 3 — Indirect measurement:** A 5-foot student casts a 3-foot shadow. A flagpole casts a 21-foot shadow. Height of flagpole?

$$\\frac{5}{3} = \\frac{h}{21} \\implies h = \\frac{5 \\times 21}{3} = 35 \\text{ feet}$$

**SAT Tip:** Parallel lines inside a triangle create smaller similar triangles (AA similarity). Watch for these!
      `
    },
    {
      id: 'sat-rp6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Similar Figures** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '$\\triangle PQR \\sim \\triangle STU$. If $PQ = 4$, $QR = 6$, and $ST = 10$, what is $TU$?',
            options: ['$12$', '$15$', '$8$', '$20$'],
            correctAnswer: 1,
            explanation: '$k = 10/4 = 2.5$. $TU = 6 \\times 2.5 = 15$.'
          },
          {
            question: 'Two similar rectangles have a length ratio of $3 : 5$. If the smaller has area $36$ cm², what is the area of the larger?',
            options: ['$60$ cm²', '$100$ cm²', '$90$ cm²', '$75$ cm²'],
            correctAnswer: 1,
            explanation: 'Area scales by $k^2 = (5/3)^2 = 25/9$. Area $= 36 \\times 25/9 = 100$ cm².'
          }
        ]
      }
    },
    {
      id: 'sat-rp6-areavolume',
      type: 'text' as const,
      content: `
## Area & Volume Scaling

These scaling laws are **extremely important** for SAT geometry.

**Example 4 — Area:** Two similar pentagons have corresponding sides in ratio $2 : 7$. The smaller has area $20$ cm². Find the larger's area.

$$\\text{Area ratio} = \\left(\\frac{7}{2}\\right)^2 = \\frac{49}{4}$$

$$\\text{Larger area} = 20 \\times \\frac{49}{4} = 245 \\text{ cm}^2$$

**Example 5 — Volume:** A model car is built at $1 : 18$ scale. If the model's fuel tank holds $0.5$ mL, estimate the real tank's capacity.

$$\\text{Volume ratio} = 18^3 = 5{,}832$$

$$\\text{Real capacity} = 0.5 \\times 5{,}832 = 2{,}916 \\text{ mL} \\approx 2.9 \\text{ L}$$

**Real-world tank ≈ 50 L**, so this is a rough model (real scaling of hollow objects is more complex), but the math principle holds.

---

**Quick Reference:**

$$\\text{If scale factor} = k \\implies \\text{Perimeter} \\times k, \\; \\text{Area} \\times k^2, \\; \\text{Volume} \\times k^3$$
      `
    },
    {
      id: 'sat-rp6-input1',
      type: 'input-boxes' as const,
      content: `
**Scale Factor Practice** 🧮

1) A map scale is $1$ cm $: 50$ km. Two cities are $7.5$ cm apart on the map. Actual distance in km?
2) Two similar triangles have side ratio $3 : 4$. The smaller has area $27$ cm². What is the larger's area?
3) A cube has side 2 cm. A similar cube has side 6 cm. How many times larger is the bigger cube's volume?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['375', '48', '27'],
        hint1: '$7.5 \\times 50$.',
        hint2: 'Area ratio $= (4/3)^2 = 16/9$. Larger area $= 27 \\times 16/9$.',
        hint3: 'Volume ratio $= (6/2)^3 = 3^3$.',
        explanation: '$7.5 \\times 50 = 375$ km. $27 \\times 16/9 = 48$ cm². $3^3 = 27$ times.'
      }
    },
    {
      id: 'sat-rp6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Scaling Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If every length in a figure is doubled, the area is multiplied by …',
            options: ['2', '4', '8', '16']
          },
          {
            label: 'Two triangles with the same three angles are always …',
            options: ['congruent', 'similar', 'right triangles', 'isosceles']
          },
          {
            label: 'The volume of a sphere scales with the cube of the radius, so tripling the radius multiplies the volume by …',
            options: ['3', '9', '27', '81']
          }
        ],
        correctAnswers: ['4', 'similar', '27'],
        hint1: 'Area scales as $k^2$; $2^2 = 4$.',
        hint2: 'AAA (or AA) similarity.',
        hint3: '$3^3 = 27$.',
        explanation: 'Area $\\propto k^2$, so doubling lengths quadruples area. Equal angles ⇒ similar. Volume $\\propto r^3$, so $3^3 = 27$.'
      }
    },
    {
      id: 'sat-rp6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In the figure, $\\overline{DE} \\parallel \\overline{BC}$ in $\\triangle ABC$. If $AD = 4$, $DB = 6$, and $DE = 5$, what is $BC$?',
            options: ['$7.5$', '$10$', '$12.5$', '$8$'],
            correctAnswer: 2,
            explanation: '$\\triangle ADE \\sim \\triangle ABC$. $k = AB/AD = 10/4 = 2.5$. $BC = 5 \\times 2.5 = 12.5$.'
          },
          {
            question: 'Two similar cylinders have height ratio $2 : 5$. The smaller has volume $40\\pi$ cm³. What is the volume of the larger?',
            options: ['$100\\pi$', '$250\\pi$', '$625\\pi$', '$500\\pi$'],
            correctAnswer: 2,
            explanation: 'Volume ratio $= (5/2)^3 = 125/8$. $V = 40\\pi \\times 125/8 = 625\\pi$ cm³.'
          }
        ]
      }
    }
  ]
};
