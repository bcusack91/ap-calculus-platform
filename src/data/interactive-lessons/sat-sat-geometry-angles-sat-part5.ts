export const satGeometryPart5Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'geo5-intro',
      type: 'text' as const,
      content: `# Volume and Surface Area

**Part 5 of 7 — 3D Figures**

The SAT reference sheet includes these formulas, but knowing them cold saves time.

### Volume Formulas

| Shape | Volume |
|---|---|
| Rectangular prism | $V = lwh$ |
| Cylinder | $V = \\pi r^2 h$ |
| Cone | $V = \\frac{1}{3}\\pi r^2 h$ |
| Sphere | $V = \\frac{4}{3}\\pi r^3$ |
| Pyramid | $V = \\frac{1}{3}Bh$ (where $B$ = base area) |

### Surface Area

| Shape | Surface Area |
|---|---|
| Rectangular prism | $SA = 2(lw + lh + wh)$ |
| Cylinder | $SA = 2\\pi r^2 + 2\\pi rh$ |
| Sphere | $SA = 4\\pi r^2$ |

### Common SAT Problem: Filling and Draining

"A cylindrical tank has radius 3 ft and height 10 ft. Water fills it at 2 cubic feet per minute. How long until it's full?"

$$V = \\pi(3)^2(10) = 90\\pi \\approx 282.7 \\text{ ft}^3$$
$$\\text{Time} = \\frac{90\\pi}{2} = 45\\pi \\approx 141.4 \\text{ minutes}$$

### Scaling Rule for 3D

If dimensions are scaled by factor $k$:
- **Lengths** scale by $k$
- **Areas** scale by $k^2$
- **Volumes** scale by $k^3$

**Example:** If you double all dimensions of a box, its volume increases by $2^3 = 8$ times.`
    },
    {
      id: 'geo5-quiz',
      type: 'multiple-choice' as const,
      content: '**Volume & Surface Area Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cone and a cylinder have the same radius and height. The volume of the cone is:',
            options: ['$\\frac{1}{3}$ of the cylinder\'s volume', '$\\frac{1}{2}$ of the cylinder\'s volume', 'Equal to the cylinder\'s volume', '$\\frac{2}{3}$ of the cylinder\'s volume'],
            correctAnswer: 0,
            explanation: 'Cone volume $= \\frac{1}{3}\\pi r^2 h$, cylinder volume $= \\pi r^2 h$. The cone is exactly $\\frac{1}{3}$ of the cylinder.'
          },
          {
            question: 'A sphere has surface area $100\\pi$. What is its volume?',
            options: ['$\\frac{500\\pi}{3}$', '$\\frac{400\\pi}{3}$', '$500\\pi$', '$100\\pi$'],
            correctAnswer: 0,
            explanation: '$SA = 4\\pi r^2 = 100\\pi$ → $r^2 = 25$ → $r = 5$. Volume $= \\frac{4}{3}\\pi(5)^3 = \\frac{500\\pi}{3}$.'
          },
          {
            question: 'A model building is a 1:50 scale replica. If the model has volume 8 cubic inches, the real building has volume:',
            options: ['$1{,}000{,}000$ cubic inches', '$400$ cubic inches', '$125{,}000$ cubic inches', '$50{,}000$ cubic inches'],
            correctAnswer: 0,
            explanation: 'Volume scales by $k^3$. Scale factor is 50, so real volume $= 8 \\times 50^3 = 8 \\times 125{,}000 = 1{,}000{,}000$ cubic inches.'
          }
        ]
      }
    },
    {
      id: 'geo5-text2',
      type: 'text' as const,
      content: `## Deep Dive: 3D Problem-Solving Strategies

### Worked Example 1: Transferring Between Shapes

| Step | Work |
|---|---|
| **Problem** | Water from a full cylinder (radius 3, height 12) is poured into a cone (radius 6, height $h$). The cone is filled exactly. Find $h$. |
| **Cylinder volume** | $V = \\pi(3)^2(12) = 108\\pi$ |
| **Cone volume** | $V = \\frac{1}{3}\\pi(6)^2 h = 12\\pi h$ |
| **Set equal** | $12\\pi h = 108\\pi$ → $h = 9$ |

### Worked Example 2: Surface Area in Context

| Step | Work |
|---|---|
| **Problem** | A rectangular box (4 × 6 × 3) needs to be wrapped with no overlap. How much wrapping paper is needed? |
| **Surface area** | $SA = 2(4 \\cdot 6 + 4 \\cdot 3 + 6 \\cdot 3) = 2(24 + 12 + 18) = 2(54) = 108$ sq units |

### Scaling Rules — Complete Table

| Dimension | Scale Factor | Example (original → doubled) |
|---|---|---|
| Length | $k$ | $5 → 10$ |
| Perimeter | $k$ | $20 → 40$ |
| Area / Surface area | $k^2$ | $25 → 100$ |
| Volume | $k^3$ | $125 → 1000$ |

### Common SAT 3D Question Types

1. **"How much fits inside?"** → Volume
2. **"How much material to cover?"** → Surface area
3. **"Pour from one to another"** → Set volumes equal
4. **"What happens when dimensions change?"** → Scaling rules
5. **"How long to fill/drain?"** → Volume ÷ rate`
    },
    {
      id: 'geo5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Volume & Surface Area** 🎯',
      exercise: {
        questions: [
          {
            question: 'A cylinder has radius $r$ and height $2r$. Its volume equals the volume of a sphere. What is the sphere\'s radius in terms of $r$?',
            options: ['$r\\sqrt[3]{\\frac{3}{2}}$', '$r$', '$2r$', '$\\frac{3r}{2}$'],
            correctAnswer: 0,
            explanation: 'Cylinder: $V = \\pi r^2(2r) = 2\\pi r^3$. Sphere: $V = \\frac{4}{3}\\pi R^3$. Set equal: $\\frac{4}{3}\\pi R^3 = 2\\pi r^3$ → $R^3 = \\frac{3}{2} r^3$ → $R = r\\sqrt[3]{\\frac{3}{2}}$.'
          },
          {
            question: 'If the radius of a cylinder is tripled and the height is halved, the volume is multiplied by:',
            options: ['$\\frac{9}{2}$', '$3$', '$\\frac{3}{2}$', '$9$'],
            correctAnswer: 0,
            explanation: '$V = \\pi r^2 h$. New: $\\pi(3r)^2(\\frac{h}{2}) = \\pi \\cdot 9r^2 \\cdot \\frac{h}{2} = \\frac{9}{2}\\pi r^2 h$. Volume is multiplied by $\\frac{9}{2}$.'
          },
          {
            question: 'A cube has volume 64. What is its surface area?',
            options: ['$96$', '$64$', '$128$', '$48$'],
            correctAnswer: 0,
            explanation: '$V = s^3 = 64$ → $s = 4$. Surface area $= 6s^2 = 6(16) = 96$.'
          }
        ]
      }
    },
    {
      id: 'geo5-dropdown',
      type: 'dropdown-select' as const,
      content: '**3D Figure Identification** — Match the description to the correct formula or value.',
      exercise: {
        dropdowns: [
          'Cylinder vs. Cone with same r and h: Cone volume is ____ of cylinder → [1/3|1/2|2/3|1/4]',
          'All dimensions doubled: Volume multiplied by → [8|2|4|6]',
          'Cube with edge 5: Surface area = → [150|125|100|200]',
          'Sphere with r = 3: Volume = → [36π|27π|108π|12π]'
        ],
        correctAnswers: ['1/3', '8', '150', '36π'],
        hint1: 'Cone = (1/3)πr²h vs. Cylinder = πr²h.',
        hint2: 'Volume scales as k³. When k = 2, k³ = 8.',
        hint3: 'Cube surface area = 6s². Sphere volume = (4/3)πr³.',
        explanation: 'Cone is 1/3 of cylinder. Volume scales as 2³ = 8. Cube SA = 6(25) = 150. Sphere V = (4/3)π(27) = 36π.'
      }
    },
    {
      id: 'geo5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary: Volume & Surface Area

| Shape | Volume | Surface Area |
|---|---|---|
| Rectangular prism | $lwh$ | $2(lw + lh + wh)$ |
| Cube | $s^3$ | $6s^2$ |
| Cylinder | $\\pi r^2 h$ | $2\\pi r^2 + 2\\pi rh$ |
| Cone | $\\frac{1}{3}\\pi r^2 h$ | $\\pi r^2 + \\pi r l$ ($l$ = slant) |
| Sphere | $\\frac{4}{3}\\pi r^3$ | $4\\pi r^2$ |

### Scaling Rules
- Lengths $\\times k$, Areas $\\times k^2$, Volumes $\\times k^3$

### SAT Strategy
- **"Pour from shape A to shape B"** → Set volumes equal and solve.
- **Watch units** — if radius is in cm and height in m, convert first.
- Cone = $\\frac{1}{3}$ cylinder; hemisphere = $\\frac{1}{2} \\times \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi r^3$.

*Next: Coordinate geometry — distance, midpoint, and circle equations →*`
    }
  ]
};