export const physics1NewtonsThirdLawPart5Data = {
  topicSlug: 'newtons-third-law',
  sections: [
    {
      id: 'nt5-intro',
      type: 'text' as const,
      content: `
# 🚗 Two-Body Problems

**Part 5 of 7 — Newton\'s Third Law**

Two-body problems involve objects that push or pull each other through direct contact (no string needed). The key: the contact force between them forms a **Third Law pair**. We analyze each object separately while respecting the constraint that they move together.
      `
    },
    {
      id: 'nt5-contact-force',
      type: 'text' as const,
      content: `
## Direct-Contact Two-Body Problems

### Setup

Two blocks ($m_1$ and $m_2$) are touching on a frictionless surface. An external force $F$ is applied to $m_1$, pushing both blocks together.

### The Contact Force

The blocks push on each other with a **contact force**:
- $m_1$ pushes $m_2$ forward with force $F_{12}$
- $m_2$ pushes $m_1$ backward with force $F_{21} = F_{12}$ (Third Law)

### System Analysis (Both Blocks Together)

$$F = (m_1 + m_2)a$$
$$a = \\frac{F}{m_1 + m_2}$$

### Individual Analysis

**Block $m_2$ (only force: contact from $m_1$):**
$$F_{12} = m_2 a = \\frac{m_2 F}{m_1 + m_2}$$

**Block $m_1$ (external force minus contact from $m_2$):**
$$F - F_{21} = m_1 a$$
$$F_{21} = F - m_1 a = F - \\frac{m_1 F}{m_1 + m_2} = \\frac{m_2 F}{m_1 + m_2}$$

Both give the same answer — consistent ✓
      `
    },
    {
      id: 'nt5-push-direction',
      type: 'text' as const,
      content: `
## Does It Matter Which Block You Push?

### Pushing $m_1$ (force applied to the left block)

$$a = \\frac{F}{m_1 + m_2}$$

Contact force between blocks:
$$F_{\\text{contact}} = \\frac{m_2}{m_1 + m_2} F$$

### Pushing $m_2$ (force applied to the right block)

$$a = \\frac{F}{m_1 + m_2} \\quad \\text{(same acceleration!)}$$

Contact force between blocks:
$$F_{\\text{contact}} = \\frac{m_1}{m_1 + m_2} F$$

### Key Insight

- The **acceleration** is the same regardless of which block you push
- The **contact force** is different! It equals the mass of the block NOT being pushed, divided by the total mass, times $F$

### Example

$m_1 = 2$ kg, $m_2 = 8$ kg, $F = 50$ N

- Pushing $m_1$: Contact = $\\frac{8}{10}(50) = 40$ N
- Pushing $m_2$: Contact = $\\frac{2}{10}(50) = 10$ N
- Acceleration either way: $a = 50/10 = 5$ m/s²
      `
    },
    {
      id: 'nt5-stacked-blocks',
      type: 'text' as const,
      content: `
## Stacked Block Problems

### Setup

Block A sits on top of block B on a frictionless surface. A horizontal force $F$ is applied to block B.

If A and B move together (no sliding), they have the **same acceleration**.

### What Accelerates Block A?

The only horizontal force on A is **friction from B** (static friction).

$$f_s = m_A a$$

### What Does This Mean?

- Friction from B on A is **forward** (propels A)
- By Third Law, friction from A on B is **backward** (slows B)

### Maximum Acceleration Before Sliding

$$f_{s,\\max} = \\mu_s m_A g$$

$$m_A a_{\\max} = \\mu_s m_A g$$

$$a_{\\max} = \\mu_s g$$

If the applied force produces an acceleration greater than $\\mu_s g$, block A slides off block B!
      `
    },
    {
      id: 'nt5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Two-Body Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two blocks ($m_1 = 3$ kg and $m_2 = 7$ kg) are pushed together by a 50 N force applied to $m_1$ on a frictionless surface. The contact force between the blocks is:',
            options: [
              '15 N',
              '35 N',
              '50 N',
              '25 N'
            ],
            correctAnswer: 1,
            explanation: '$a = F/(m_1 + m_2) = 50/10 = 5$ m/s². Contact force = $m_2 \\times a = 7 \\times 5 = 35$ N.'
          },
          {
            question: 'In the same setup, if the 50 N force is instead applied to $m_2$, the contact force becomes:',
            options: [
              '15 N',
              '35 N',
              '50 N',
              '25 N'
            ],
            correctAnswer: 0,
            explanation: 'Same acceleration ($5$ m/s²), but now the contact force pushes $m_1$: $F_{\\text{contact}} = m_1 \\times a = 3 \\times 5 = 15$ N.'
          },
          {
            question: 'Block A (2 kg) sits on block B (8 kg) on a frictionless surface. $\\mu_s = 0.40$ between A and B. What is the maximum force that can be applied to B without A sliding off? ($g = 10$ m/s²)',
            options: [
              '8 N',
              '32 N',
              '40 N',
              '80 N'
            ],
            correctAnswer: 2,
            explanation: '$a_{\\max} = \\mu_s g = 0.40 \\times 10 = 4$ m/s². $F_{\\max} = (m_A + m_B) \\times a_{\\max} = 10 \\times 4 = 40$ N.'
          }
        ]
      }
    },
    {
      id: 'nt5-calculations',
      type: 'input-boxes' as const,
      content: `
**Two-Body Calculations** 🧮

Two blocks are in contact on a frictionless surface: $m_1 = 4$ kg and $m_2 = 6$ kg. A force of 30 N is applied horizontally to $m_1$.

1) What is the acceleration of the system (in m/s²)?

2) What is the contact force between the blocks (in N)?

3) If the force were applied to $m_2$ instead, what would the contact force be (in N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '18', '12'],
        hint1: '$a = F/(m_1 + m_2) = 30/10$.',
        hint2: 'The contact force accelerates $m_2$: $F_{\\text{contact}} = m_2 a$.',
        hint3: 'Now the contact force accelerates $m_1$: $F_{\\text{contact}} = m_1 a$.',
        explanation: '1) $a = 30/10 = 3$ m/s². 2) $F_{\\text{contact}} = m_2 a = 6 \\times 3 = 18$ N. 3) $F_{\\text{contact}} = m_1 a = 4 \\times 3 = 12$ N.'
      }
    },
    {
      id: 'nt5-dropdown-analysis',
      type: 'dropdown-select' as const,
      content: `
**Two-Body Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When two blocks are pushed together, the contact force between them is always _____ the applied force.',
            options: ['Equal to', 'Greater than', 'Less than', 'Unrelated to'],
            correctIndex: 2,
            explanation: 'The contact force equals $m_{\\text{other}}/(m_1 + m_2) \\times F$, which is always less than $F$ (since $m_{\\text{other}} < m_1 + m_2$).'
          },
          {
            label: 'In a two-block push problem, switching which block you push changes:',
            options: ['The acceleration', 'The contact force', 'Both', 'Neither'],
            correctIndex: 1,
            explanation: 'The acceleration stays the same (same total force and total mass), but the contact force changes — it\'s always proportional to the mass of the block NOT being pushed.'
          },
          {
            label: 'For stacked blocks, the force that accelerates the top block horizontally is:',
            options: ['The applied force', 'Gravity', 'Static friction from the bottom block', 'Normal force'],
            correctIndex: 2,
            explanation: 'The only horizontal force on the top block is friction from the bottom block. This friction force is what carries the top block along.'
          },
          {
            label: 'If the applied force is too large, stacked blocks will:',
            options: ['Both stop', 'Move at different accelerations (top block slides)', 'Both accelerate the same', 'Break the surface'],
            correctIndex: 1,
            explanation: 'When the required friction exceeds $\\mu_s N$, the blocks can no longer move together. The top block slides relative to the bottom block.'
          }
        ]
      }
    },
    {
      id: 'nt5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Two-Body Problems** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Blocks A (1 kg) and B (4 kg) are side by side on a frictionless surface. A 25 N force pushes A into B. The force A exerts on B is:',
            options: [
              '5 N',
              '20 N',
              '25 N',
              '100 N'
            ],
            correctAnswer: 1,
            explanation: '$a = 25/5 = 5$ m/s². Force on B = $m_B \\times a = 4 \\times 5 = 20$ N. Force on A from B (Third Law) = 20 N backward.'
          },
          {
            question: 'A 3 kg block sits on a 5 kg block on a frictionless floor. $\\mu_s = 0.50$ between blocks. The maximum acceleration without sliding is ($g = 10$ m/s²):',
            options: [
              '2 m/s²',
              '5 m/s²',
              '8 m/s²',
              '10 m/s²'
            ],
            correctAnswer: 1,
            explanation: '$a_{\\max} = \\mu_s g = 0.50 \\times 10 = 5$ m/s². If the system accelerates faster than this, the friction can\'t keep the top block in place.'
          }
        ]
      }
    }
  ]
}
