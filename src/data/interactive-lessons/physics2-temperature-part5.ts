export const physics2TemperaturePart5Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te5-intro',
      type: 'text' as const,
      content: `
# 🔧 Problem-Solving Workshop

**Part 5 of 7 — Multi-Step Thermal Expansion Problems**

Now that you know the linear and volume expansion formulas, let's tackle the classic problem types that appear on the AP Physics 2 exam: gap problems, ring-on-rod problems, and compound expansion problems.
      `
    },
    {
      id: 'te5-strategies',
      type: 'text' as const,
      content: `
## Problem-Solving Strategy

### Step-by-Step Approach
1. **Identify** what is expanding (length, area, or volume?)
2. **List** known quantities: $L_0$ (or $V_0$), $\\alpha$ (or $\\beta$), $T_i$, $T_f$
3. **Calculate** $\\Delta T = T_f - T_i$
4. **Apply** the appropriate formula: $\\Delta L = \\alpha L_0 \\Delta T$ or $\\Delta V = \\beta V_0 \\Delta T$
5. **Check units** and reasonableness of answer

### Gap Problems

A gap between two rails or slabs must accommodate the expansion of one or both pieces. If two rails each of length $L_0$ share a gap:

$$\\text{Minimum gap} = 2 \\times \\alpha L_0 \\Delta T$$

(Each rail expands toward the gap from its end.)

### Ring-on-Rod Problems

**Goal:** Slip a ring over a rod (or shaft) by heating the ring or cooling the rod.

**Ring (hole) expansion:** The inner diameter of a ring expands just like a solid piece of the same material:

$$d_{\\text{ring}} = d_0(1 + \\alpha_{\\text{ring}} \\Delta T)$$

**Rod expansion:**

$$d_{\\text{rod}} = d_0'(1 + \\alpha_{\\text{rod}} \\Delta T)$$

**Condition for fit:** $d_{\\text{ring}} \\geq d_{\\text{rod}}$ (ring hole must be at least as large as the rod diameter).

### Compound Problems

When a liquid is inside an expanding container, the **apparent** volume change of the liquid is:

$$\\Delta V_{\\text{apparent}} = (\\beta_{\\text{liquid}} - \\beta_{\\text{container}}) V_0 \\Delta T$$

The liquid's true expansion minus the container's expansion gives the observable overflow or level change.
      `
    },
    {
      id: 'te5-worked-examples',
      type: 'text' as const,
      content: `
## Worked Example: Ring on a Rod

A brass ring has an inner diameter of 4.000 cm at 20°C. A steel rod has a diameter of 4.010 cm at 20°C. To what temperature must you heat the ring so it slips over the rod?

**Given:** $\\alpha_{\\text{brass}} = 19 \\times 10^{-6}$ /°C, $d_{\\text{ring}} = 4.000$ cm, $d_{\\text{rod}} = 4.010$ cm

**Need:** Find $T$ where $d_{\\text{ring}}(T) = d_{\\text{rod}}$ (rod stays at 20°C)

$$d_{\\text{ring}}(T) = d_0(1 + \\alpha \\Delta T) = d_{\\text{rod}}$$

$$4.000(1 + 19 \\times 10^{-6} \\cdot \\Delta T) = 4.010$$

$$1 + 19 \\times 10^{-6} \\cdot \\Delta T = \\frac{4.010}{4.000} = 1.0025$$

$$19 \\times 10^{-6} \\cdot \\Delta T = 0.0025$$

$$\\Delta T = \\frac{0.0025}{19 \\times 10^{-6}} = 131.6°\\text{C}$$

$$T = 20 + 131.6 = 151.6°\\text{C} \\approx 152°\\text{C}$$

You must heat the brass ring to about **152°C** for it to slip over the steel rod.
      `
    },
    {
      id: 'te5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Problem-Solving Concepts Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical steel rails (each 12.0 m long) are laid end-to-end with a gap at their junction. If the temperature can increase by 40°C, the minimum gap needed to prevent buckling is: (α_steel = 12 × 10⁻⁶ /°C)',
            options: [
              '5.76 mm (one rail expands into the gap)',
              '11.52 mm (both rails expand toward the gap)',
              '2.88 mm',
              '23.04 mm'
            ],
            correctAnswer: 1,
            explanation: 'Each rail expands: $\\Delta L = (12 \\times 10^{-6})(12.0)(40) = 5.76 \\times 10^{-3}$ m = 5.76 mm. Both rails push toward the gap, so the total gap needed is $2 \\times 5.76 = 11.52$ mm.'
          },
          {
            question: 'To remove a tight metal lid from a glass jar, you should:',
            options: [
              'Cool both the lid and jar',
              'Heat the glass jar only',
              'Run hot water over the metal lid',
              'Cool the metal lid'
            ],
            correctAnswer: 2,
            explanation: 'Metals typically have a higher $\\alpha$ than glass. Heating the metal lid causes it to expand more than the glass, loosening its grip. Running hot water over the lid is the classic kitchen trick!'
          }
        ]
      }
    },
    {
      id: 'te5-problem-drill',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Problem Drill** 🔧

1) A steel rod has diameter 2.000 cm at 25°C. A copper ring has inner diameter 1.990 cm at 25°C. To what temperature (°C) must the copper ring be heated to just fit over the rod? ($\\alpha_{\\text{Cu}} = 17 \\times 10^{-6}$ /°C, assume rod stays at 25°C.) Round to the nearest °C.

2) A concrete sidewalk slab is 5.00 m long at 5°C. What gap (in mm) is needed between slabs if the maximum temperature is 45°C? ($\\alpha_{\\text{concrete}} = 12 \\times 10^{-6}$ /°C)

3) A glass flask ($\\beta = 27 \\times 10^{-6}$ /°C) holds exactly 500.0 mL of mercury ($\\beta = 182 \\times 10^{-6}$ /°C) at 20°C. How many mL of mercury overflow when heated to 100°C?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['321', '2.4', '6.2', '2.40', '6.20'],
        hint1: '$d_{\\text{Cu}}(1 + \\alpha_{\\text{Cu}} \\Delta T) = d_{\\text{rod}}$. Solve for $\\Delta T$, then add to 25°C.',
        hint2: '$\\Delta L = \\alpha L_0 \\Delta T = (12 \\times 10^{-6})(5.00)(40)$. Convert to mm.',
        hint3: '$\\Delta V_{\\text{overflow}} = (\\beta_{\\text{Hg}} - \\beta_{\\text{glass}}) V_0 \\Delta T$.',
        explanation: '1) $1.990(1 + 17 \\times 10^{-6} \\cdot \\Delta T) = 2.000$. $1 + 17 \\times 10^{-6} \\cdot \\Delta T = 1.005025$. $\\Delta T = 0.005025 / (17 \\times 10^{-6}) = 295.6$°C. $T = 25 + 296 \\approx 321$°C. 2) $\\Delta L = (12 \\times 10^{-6})(5.00)(40) = 2.4 \\times 10^{-3}$ m $= 2.4$ mm. 3) $\\Delta V = (182 - 27) \\times 10^{-6} \\times 500.0 \\times 80 = 155 \\times 10^{-6} \\times 40{,}000 = 6.2$ mL.'
      }
    },
    {
      id: 'te5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A brass ring at 20°C is too small to fit over an aluminum cylinder at 20°C. Both are heated together. As temperature increases:',
            options: [
              'The ring fits eventually because brass expands faster (α_brass = 19 > α_Al = 23 × 10⁻⁶)',
              'The ring never fits because aluminum expands faster than brass',
              'The ring fits immediately at any higher temperature',
              'Whether it fits depends on the initial size difference and the α values'
            ],
            correctAnswer: 1,
            explanation: 'Since $\\alpha_{\\text{Al}} = 23 \\times 10^{-6} > \\alpha_{\\text{brass}} = 19 \\times 10^{-6}$, the aluminum cylinder diameter grows faster than the brass ring hole. If heated together, the fit gets **worse**, not better. You would need to heat only the ring or cool only the cylinder.'
          },
          {
            question: 'A steel tape measure gives accurate readings at 20°C. If you use it on a hot day at 40°C, your measurements of a building will read:',
            options: [
              'Correct (thermal effects cancel out)',
              'Too small (tape expanded, so each mark spans more than 1 cm — you undercount)',
              'The same (tape and building both expand equally)',
              'Too large because the building expanded'
            ],
            correctAnswer: 1,
            explanation: 'The tape expands, so each "centimeter" mark is now slightly longer than a true centimeter. The tape reads fewer centimeters than the actual length — the reading is **smaller** than the true value. The actual building dimension is **larger** than what the expanded tape reads.'
          }
        ]
      }
    }
  ]
}
