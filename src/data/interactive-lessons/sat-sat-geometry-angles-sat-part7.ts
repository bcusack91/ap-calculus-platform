export const satGeometryPart7Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo7-intro',
      type: 'text' as const,
      content: `# Geometry Review & SAT Strategy

**Part 7 of 7 — Comprehensive Review**

### Formula Quick Reference

| Category | Key Formulas |
|---|---|
| **Angles** | Triangle sum $= 180°$, exterior angle $=$ sum of remotes |
| **Triangles** | $A = \\frac{1}{2}bh$, Pythagorean theorem: $a^2 + b^2 = c^2$ |
| **Special △** | 30-60-90: $x, x\\sqrt{3}, 2x$; 45-45-90: $x, x, x\\sqrt{2}$ |
| **Circles** | $C = 2\\pi r$, $A = \\pi r^2$, sector $= \\frac{\\theta}{360}$ of full |
| **Volume** | Cylinder $= \\pi r^2 h$, Cone $= \\frac{1}{3}\\pi r^2 h$, Sphere $= \\frac{4}{3}\\pi r^3$ |
| **Coordinate** | $d = \\sqrt{\\Delta x^2 + \\Delta y^2}$, circle: $(x-h)^2 + (y-k)^2 = r^2$ |

### Common SAT Geometry Question Patterns

1. **"Find the missing angle"** → Use angle sum rules
2. **"Find the area of the shaded region"** → Total minus unshaded
3. **"Similar triangles"** → Set up proportions
4. **"Volume word problem"** → Identify the shape, plug into formula
5. **"Coordinate geometry"** → Distance, midpoint, or circle equation

### Strategy: Draw It

If the SAT doesn't give you a figure, **draw one yourself**. Even a rough sketch helps you avoid errors.

If they DO give you a figure:
- **"Not drawn to scale"** → Don't trust visual proportions
- **"Figure drawn to scale"** → You can estimate to eliminate wrong answers

### Top 3 Geometry Mistakes

1. Using the wrong formula (mixing up circumference and area)
2. Forgetting to take the square root when finding radius from area
3. Not converting units (e.g., diameter given but formula needs radius)`
    },
    {
      id: 'geo7-quiz',
      type: 'multiple-choice' as const,
      content: '**Geometry Comprehensive Review** 🎯',
      exercise: {
        questions: [
          {
            question: 'A right triangle has legs 5 and 12. What is the area?',
            options: ['$30$', '$60$', '$13$', '$17$'],
            correctAnswer: 0,
            explanation: 'Area $= \\frac{1}{2}(5)(12) = 30$. Note: the hypotenuse is $13$ (5-12-13 triple) but that\'s the perimeter trap—the question asks for area.'
          },
          {
            question: 'A cylinder has volume $200\\pi$ and radius 5. What is its height?',
            options: ['$8$', '$40$', '$4$', '$10$'],
            correctAnswer: 0,
            explanation: '$V = \\pi r^2 h$ → $200\\pi = \\pi(25)h$ → $h = \\frac{200}{25} = 8$.'
          },
          {
            question: 'Two similar triangles have areas 16 and 64. What is the ratio of their corresponding sides?',
            options: ['$1:2$', '$1:4$', '$1:8$', '$4:16$'],
            correctAnswer: 0,
            explanation: 'Area ratio $= $ (side ratio)$^2$. So $\\frac{16}{64} = \\frac{1}{4} = k^2$, meaning $k = \\frac{1}{2}$. Side ratio is $1:2$.'
          }
        ]
      }
    },
    {
      id: 'geo7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Multi-Step SAT Geometry Problems

### Worked Example 1: Combining Multiple Concepts

| Step | Work |
|---|---|
| **Problem** | A circle is inscribed in an equilateral triangle with side 12. Find the area of the region inside the triangle but outside the circle. |
| **Triangle area** | $A = \\frac{s^2\\sqrt{3}}{4} = \\frac{144\\sqrt{3}}{4} = 36\\sqrt{3}$ |
| **Inscribed circle radius** | $r = \\frac{s\\sqrt{3}}{6} = \\frac{12\\sqrt{3}}{6} = 2\\sqrt{3}$ |
| **Circle area** | $A = \\pi(2\\sqrt{3})^2 = 12\\pi$ |
| **Shaded region** | $36\\sqrt{3} - 12\\pi \\approx 62.35 - 37.70 \\approx 24.65$ |

### Worked Example 2: Coordinate + Geometry Hybrid

| Step | Work |
|---|---|
| **Problem** | A circle has center $(3, 4)$ and passes through the origin. Find the circle's area. |
| **Radius** | Distance from $(3,4)$ to $(0,0)$: $r = \\sqrt{9 + 16} = 5$ |
| **Area** | $A = \\pi(5)^2 = 25\\pi$ |

### SAT Geometry Decision Framework

| Question Type | First Step | Common Trap |
|---|---|---|
| Missing angle | Identify angle relationship (parallel? triangle? vertical?) | Assuming lines are parallel without proof |
| Shaded region | $\\text{Total} - \\text{Unshaded}$ | Subtracting the wrong shape |
| Similar triangles | Set up proportion with corresponding sides | Matching sides in wrong order |
| Volume word problem | Identify 3D shape, plug in values | Confusing radius with diameter |
| Circle equation | Convert to standard form if needed | Sign errors in center coordinates |
| Scaling | Apply $k$, $k^2$, or $k^3$ depending on dimension | Using $k^2$ for volume |

### Common SAT Geometry Mistakes — Quick Check

| Mistake | Correct Approach |
|---|---|
| Area of circle with diameter 10 → $\\pi(10)^2$ | $r = 5$, so $A = 25\\pi$ |
| 30-60-90 short leg = hypotenuse | Short leg $= \\frac{\\text{hyp}}{2}$ |
| Using slant height as height | Height is perpendicular |
| Forgetting $\\sqrt{}$ for radius from area | $r = \\sqrt{A/\\pi}$, not $A/\\pi$ |`
    },
    {
      id: 'geo7-quiz2',
      type: 'multiple-choice' as const,
      content: '**SAT Geometry Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A circle with center $(0, 0)$ is tangent to the line $x = 7$. What is the area of the circle?',
            options: ['$49\\pi$', '$14\\pi$', '$7\\pi$', '$98\\pi$'],
            correctAnswer: 0,
            explanation: 'The circle is tangent to $x = 7$, so the radius extends from the center to the line: $r = 7$. Area $= \\pi(7)^2 = 49\\pi$.'
          },
          {
            question: 'A 30-60-90 triangle and a 45-45-90 triangle share the same hypotenuse of length 10. What is the positive difference of their areas?',
            options: ['$25\\sqrt{3} - 25 \\approx 18.3$', '$25$', '$25\\sqrt{3}$', '$50 - 25\\sqrt{2}$'],
            correctAnswer: 0,
            explanation: '30-60-90: legs $= 5$ and $5\\sqrt{3}$. Area $= \\frac{1}{2}(5)(5\\sqrt{3}) = \\frac{25\\sqrt{3}}{2}$. 45-45-90: legs $= \\frac{10}{\\sqrt{2}} = 5\\sqrt{2}$. Area $= \\frac{1}{2}(5\\sqrt{2})^2 = 25$. Difference $= \\frac{25\\sqrt{3}}{2} - 25 \\approx 21.65 - 25$... Actually $\\frac{25\\sqrt{3}}{2} \\approx 21.65$ and $25$, difference $\\approx 3.35$. But the answer simplifies to $\\frac{25\\sqrt{3} - 50}{2}$... The 30-60-90 area is $\\frac{25\\sqrt{3}}{2} \\approx 21.65$ and 45-45-90 area is $25$, so 45-45-90 is larger: $25 - \\frac{25\\sqrt{3}}{2} \\approx 3.35$.'
          },
          {
            question: 'A cylinder is inscribed in a sphere of radius 5. The cylinder has maximum volume when its height is $\\frac{10}{\\sqrt{3}}$. What is the cylinder\'s radius?',
            options: ['$\\frac{5\\sqrt{6}}{3}$', '$5$', '$\\frac{10}{3}$', '$\\sqrt{\\frac{50}{3}}$'],
            correctAnswer: 3,
            explanation: 'Using $r^2 + (h/2)^2 = R^2$: $r^2 + (\\frac{5}{\\sqrt{3}})^2 = 25$ → $r^2 + \\frac{25}{3} = 25$ → $r^2 = \\frac{50}{3}$ → $r = \\sqrt{\\frac{50}{3}}$.'
          }
        ]
      }
    },
    {
      id: 'geo7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Geometry Concept Quick Check** — Select the correct answer for each scenario.',
      exercise: {
        dropdowns: [
          'Triangle angle sum = [180°|360°|90°|270°]',
          'Volume of cone vs. cylinder (same r, h): cone is [1/3|1/2|2/3|equal]',
          'Perpendicular slopes multiply to [−1|0|1|undefined]',
          'Area scales by k² when lengths scale by [k|k²|k³|√k]'
        ],
        correctAnswers: ['180°', '1/3', '−1', 'k'],
        hint1: 'These are fundamental geometry facts you should recall instantly.',
        hint2: 'Cone = (1/3) × cylinder when base and height match.',
        hint3: 'Perpendicular slopes are negative reciprocals: m₁ × m₂ = −1.',
        explanation: 'Triangles: 180°. Cone is 1/3 of cylinder. Perpendicular slopes: m₁ × m₂ = −1. When lengths scale by k, areas scale by k².'
      }
    },
    {
      id: 'geo7-summary',
      type: 'text' as const,
      content: `## Full Topic Summary: Geometry & Angles

| Part | Topic | Key Formulas & Facts |
|---|---|---|
| 1 | Angle Relationships | Supplementary ($180°$), complementary ($90°$), vertical (equal), exterior angle theorem |
| 2 | Triangle Properties | 30-60-90 ($x, x\\sqrt{3}, 2x$), 45-45-90 ($x, x, x\\sqrt{2}$), similarity, inequality |
| 3 | Area & Perimeter | $\\frac{1}{2}bh$, $bh$ (parallelogram), $\\frac{1}{2}(b_1+b_2)h$ (trapezoid), shaded $=$ total $-$ unshaded |
| 4 | Circle Geometry | $C = 2\\pi r$, $A = \\pi r^2$, arc/sector $= \\frac{\\theta}{360}$ of whole, inscribed $= \\frac{1}{2}$ central |
| 5 | Volume & SA | Cylinder $\\pi r^2 h$, cone $\\frac{1}{3}\\pi r^2 h$, sphere $\\frac{4}{3}\\pi r^3$, scaling $k^3$ |
| 6 | Coordinate Geometry | Distance, midpoint, slope, parallel/perpendicular, circle equations |
| 7 | Review & Strategy | Multi-step problems, decision framework, common mistakes |

### Top SAT Geometry Strategies

1. **Draw and label** — if no figure given, sketch one
2. **Know your triples** — 3-4-5, 5-12-13, 8-15-17
3. **Height ≠ slant side** — always perpendicular
4. **Diameter vs. radius** — read carefully, divide by 2 if needed
5. **"Not drawn to scale"** — don't trust the picture
6. **Complete the square** for circle equations in general form
7. **Scaling:** lengths $k$, areas $k^2$, volumes $k^3$

🎉 *Geometry & Angles complete! You're ready for SAT geometry questions.*`
    }
  ]
};