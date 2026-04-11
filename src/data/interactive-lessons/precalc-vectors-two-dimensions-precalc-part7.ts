export const precalcVectors2DPart7Data = {
  topicSlug: 'vectors-two-dimensions-precalc',
  sections: [
    {
      id: 'p7-intro',
      type: 'text' as const,
      content: `
# 🧩 Vectors — Full Synthesis

**Part 7 of 7**

### Complete Vector Toolkit

| Concept | Formula |
|:--------|:--------|
| Components | $\\vec{v} = \\langle a, b \\rangle = a\\mathbf{i}+b\\mathbf{j}$ |
| Magnitude | $|\\vec{v}| = \\sqrt{a^2+b^2}$ |
| Unit vector | $\\hat{v} = \\frac{\\vec{v}}{|\\vec{v}|}$ |
| Dot product | $\\vec{u}\\cdot\\vec{v} = u_1v_1+u_2v_2 = |\\vec{u}||\\vec{v}|\\cos\\theta$ |
| Perpendicular | $\\vec{u}\\cdot\\vec{v} = 0$ |
| Projection | $\\text{proj}_{\\vec{v}}\\vec{u} = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\vec{v}$ |
| Work | $W = \\vec{F}\\cdot\\vec{d}$ |
| Parallel | $ad - bc = 0$ for $\\langle a,b \\rangle, \\langle c,d \\rangle$ |
| Rotation | $\\langle a\\cos\\alpha-b\\sin\\alpha, a\\sin\\alpha+b\\cos\\alpha \\rangle$ |
      `
    },
    {
      id: 'p7-strategy',
      type: 'text' as const,
      content: `
## 🎓 Problem-Solving Guide

### "Find the angle" → Use dot product: $\\cos\\theta = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}||\\vec{v}|}$

### "Check perpendicular" → Dot product = 0?

### "Find the projection" → $\\text{proj} = \\frac{\\vec{u}\\cdot\\vec{v}}{\\vec{v}\\cdot\\vec{v}}\\vec{v}$

### "Find resultant" → Vector addition

### "Equilibrium" → Sum all forces = $\\vec{0}$

### "Check parallel" → $ad - bc = 0$?

### Common Errors

- **Not normalizing**: Forgetting to divide by $|\\vec{v}|$ for unit vectors
- **Projection direction**: $\\text{proj}_{\\vec{v}}\\vec{u} \\neq \\text{proj}_{\\vec{u}}\\vec{v}$ in general
- **Angle ambiguity**: $\\tan^{-1}$ only gives angles in $(-90°, 90°)$; adjust for quadrant
- **Dot product ≠ magnitude**: $\\vec{u}\\cdot\\vec{v}$ is a scalar, not a vector
      `
    },
    {
      id: 'p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A vector perpendicular to $\\langle 5, -2 \\rangle$ is:',
            options: ['$\\langle 5, 2 \\rangle$', '$\\langle -2, -5 \\rangle$', '$\\langle 2, 5 \\rangle$', '$\\langle -5, 2 \\rangle$'],
            correctAnswer: 2,
            explanation: '$\\langle 5, -2 \\rangle \\cdot \\langle 2, 5 \\rangle = 10 + (-10) = 0$. ✓'
          },
          {
            question: '$|3\\vec{u} - 2\\vec{v}|^2$ expands to:',
            options: ['$9|\\vec{u}|^2-12\\vec{u}\\cdot\\vec{v}+4|\\vec{v}|^2$', '$9|\\vec{u}|^2+4|\\vec{v}|^2$', '$|3\\vec{u}|^2-|2\\vec{v}|^2$', '$5|\\vec{u}-\\vec{v}|^2$'],
            correctAnswer: 0,
            explanation: '$(3\\vec{u}-2\\vec{v})\\cdot(3\\vec{u}-2\\vec{v}) = 9\\vec{u}\\cdot\\vec{u}-12\\vec{u}\\cdot\\vec{v}+4\\vec{v}\\cdot\\vec{v}$.'
          },
          {
            question: 'The angle between $\\langle 1, \\sqrt{3} \\rangle$ and $\\langle \\sqrt{3}, 1 \\rangle$ is:',
            options: ['$30°$', '$45°$', '$60°$', '$90°$'],
            correctAnswer: 0,
            explanation: '$\\cos\\theta = \\frac{\\sqrt{3}+\\sqrt{3}}{2\\cdot 2} = \\frac{2\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2}$, so $\\theta = 30°$.'
          }
        ]
      }
    },
    {
      id: 'p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

**1)** $\\vec{u} = \\langle -3, 4 \\rangle$. The unit vector $\\hat{u}$ has $x$-component = ? (Enter as a fraction like "-3/5")

**2)** $\\vec{u} = \\langle 1, 2 \\rangle, \\vec{v} = \\langle 4, -1 \\rangle$. $\\vec{u}\\cdot\\vec{v}$ = ?

**3)** Same vectors: $|ad - bc| = |1(-1)-2(4)|$ = ? (area of parallelogram)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-3/5', '2', '9'],
        hint1: '$|\\vec{u}| = 5$. Unit vector $x$-component $= \\frac{-3}{5}$.',
        hint2: '$1(4)+2(-1) = 4-2 = 2$.',
        hint3: '$|{-1}-8| = |-9| = 9$.',
        explanation: '1) $x = -\\frac{3}{5}$. 2) Dot product $= 2$. 3) Area $= 9$.'
      }
    },
    {
      id: 'p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$\\vec{u} = \\langle 3, 4 \\rangle, \\vec{v} = \\langle 8, -6 \\rangle$. These vectors are:',
            options: ['Parallel', 'Perpendicular', 'Neither'],
            correctAnswer: 1
          },
          {
            label: 'The dot product $\\vec{u}\\cdot\\vec{u}$ always:',
            options: ['Equals zero', 'Equals $|\\vec{u}|$', 'Equals $|\\vec{u}|^2$'],
            correctAnswer: 2
          },
          {
            label: 'Bearing 315° is which direction?',
            options: ['NE', 'SE', 'SW', 'NW'],
            correctAnswer: 3
          },
          {
            label: 'If $\\vec{u}\\cdot\\vec{v} = |\\vec{u}||\\vec{v}|$, the vectors are:',
            options: ['Perpendicular', 'Parallel (same direction)', 'Parallel (opposite direction)', 'At $45°$'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['Perpendicular', 'Equals $|\\vec{u}|^2$', 'NW', 'Parallel (same direction)'],
        hint1: '$3(8)+4(-6) = 24-24 = 0$.',
        hint2: '$\\vec{u}\\cdot\\vec{u} = u_1^2+u_2^2 = |\\vec{u}|^2$.',
        hint3: '$315° = 360° - 45°$: northwest.',
        explanation: 'Perpendicular (dot=0). Self dot = magnitude squared. 315° = NW. $\\cos\\theta = 1$ means $\\theta = 0$: parallel same direction.'
      }
    },
    {
      id: 'p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Final** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The projection of $\\langle 6, 0 \\rangle$ onto $\\langle 1, 1 \\rangle$ is:',
            options: ['$\\langle 6, 0 \\rangle$', '$\\langle 3, 3 \\rangle$', '$\\langle 3, 0 \\rangle$', '$\\langle 0, 6 \\rangle$'],
            correctAnswer: 1,
            explanation: '$\\frac{\\langle 6,0 \\rangle \\cdot \\langle 1,1 \\rangle}{|\\langle 1,1 \\rangle|^2}\\langle 1,1 \\rangle = \\frac{6}{2}\\langle 1,1 \\rangle = \\langle 3, 3 \\rangle$.'
          },
          {
            question: 'Two forces $\\vec{F}_1 = 10$ N at $0°$ and $\\vec{F}_2 = 10$ N at $120°$. The resultant magnitude is:',
            options: ['$20$ N', '$10\\sqrt{3}$ N', '$10$ N', '$0$ N'],
            correctAnswer: 2,
            explanation: '$|\\vec{R}|^2 = 100+100+2(100)\\cos 120° = 200+200(-\\frac{1}{2}) = 100$. So $|\\vec{R}| = 10$ N.'
          }
        ]
      }
    }
  ]
};
