export const chemReactionTypesPart4Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt4-intro',
      type: 'text' as const,
      content: `# ⚖️ Balancing Chemical Equations

**Part 4 of 7 — The Coefficient Method**

---

### Topics in This Part

| Section |
|---------|
| ⚖️ Rules for Balancing Equations |
| What You CAN Do |
| What You CANNOT Do |
| Step-by-Step Method |
| Example: Balancing $\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$ |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rt4-rules',
      type: 'text' as const,
      content: `
## ⚖️ Rules for Balancing Equations

### What You CAN Do
- Change **coefficients** (the big numbers in front of formulas)


---

### What You CANNOT Do

> ⚠️ **Warning:** Never change **subscripts** — that changes the identity of the compound! You also cannot add or remove substances. Only adjust **coefficients**.


---

### Step-by-Step Method

1. **Write** the unbalanced equation
2. **Count** atoms of each element on both sides
3. **Balance** one element at a time using coefficients
4. **Start** with the most complex substance or elements that appear in only one reactant and one product
5. **Balance** hydrogen and oxygen last (they often appear in multiple compounds)
6. **Check** that all atoms are balanced
7. **Simplify** coefficients to smallest whole numbers


---

### Example: Balancing $\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$

| Step | Equation | Al | O |
|------|----------|-----|-----|
| Start | $\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$ | 1 vs 2 | 2 vs 3 |
| Balance Al | $2\\text{Al} + \\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$ | 2 vs 2 ✓ | 2 vs 3 |
| Balance O | $2\\text{Al} + 1.5\\text{O}_2 \\rightarrow \\text{Al}_2\\text{O}_3$ | 2 vs 2 ✓ | 3 vs 3 ✓ |
| Whole numbers | $4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3$ | 4 vs 4 ✓ | 6 vs 6 ✓ |
      `
    },
    {
      id: 'rt4-polyatomic-shortcut',
      type: 'text' as const,
      content: `
## ⚛️ The Polyatomic Ion Shortcut

> 💡 **Tip:** When a polyatomic ion appears **unchanged** on both sides of an equation, treat it as a **single unit** rather than balancing individual atoms.


---

### Example

$$\\text{Ca(OH)}_2 + \\text{H}_3\\text{PO}_4 \\rightarrow \\text{Ca}_3(\\text{PO}_4)_2 + \\text{H}_2\\text{O}$$

Instead of counting individual H, O, and P atoms, notice:
- **$PO_{4}$** appears on both sides — treat it as one unit
- Balance $PO_{4}$: need 2 on left → coefficient of $H_{3}PO_{4}$ = 2 ✓
- Balance Ca: need 3 on right → coefficient of $Ca(OH)_{2}$ = 3 ✓
- Count H: left has 3(2) + 2(3) = 12. Right needs 12 → coefficient of $H_{2}O$ = 6
- Check O from OH and $H_{2}O$: left 3(2) = 6 from OH; right 6 from $H_{2}O$ ✓

$$\\boxed{3\\text{Ca(OH)}_2 + 2\\text{H}_3\\text{PO}_4 \\rightarrow \\text{Ca}_3(\\text{PO}_4)_2 + 6\\text{H}_2\\text{O}}$$


---

### Common Polyatomic Ions to Watch For

| Ion | Formula | Ion | Formula |
|-----|---------|-----|---------|
| Sulfate | $SO_{4}^{2-}$ | Nitrate | $NO_{3}^{-}$ |
| Phosphate | $PO_{4}^{3-}$ | Carbonate | $CO_{3}^{2-}$ |
| Hydroxide | $OH^{-}$ | Ammonium | $NH_{4}^{+}$ |
      `
    },
    {
      id: 'rt4-practice-walkthrough',
      type: 'text' as const,
      content: `
## 🧪 Worked Examples

### Example 1

> **Problem:** Balance $\\text{Fe} + \\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3$

> **Solution:**

- Balance Fe: $2\\text{Fe} + \\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3$ → Fe: 2 = 2 ✓
- Balance O: need 3 O on left, but $O_{2}$ gives even numbers → use LCM of 2 and 3 = 6
- $2\\text{Fe} + 1.5\\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3$ → multiply all by 2:
$$\\boxed{4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3}$$

Check: Fe: 4 = 4 ✓, O: 6 = 6 ✓


---

### Example 2

> **Problem:** Balance $\\text{Al} + \\text{HCl} \\rightarrow \\text{AlCl}_3 + \\text{H}_2$

> **Solution:**

- Balance Cl: $\\text{Al} + 3\\text{HCl} \\rightarrow \\text{AlCl}_3 + \\text{H}_2$
- Balance H: 3H on left, 2H on right → LCM = 6
- $\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2$ → wait, now Cl: 6 vs 6 ✓
- Balance Al: need 2 on left:
$$\\boxed{2\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2}$$

Check: Al: 2 = 2 ✓, H: 6 = 6 ✓, Cl: 6 = 6 ✓
      `
    },
    {
      id: 'rt4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Balancing Equations Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When balancing a chemical equation, you may change:',
            options: [
              'Subscripts only',
              'Coefficients only',
              'Both subscripts and coefficients',
              'The chemical formulas of the products'
            ],
            correctAnswer: 1,
            explanation: 'Only coefficients (numbers in front of formulas) may be changed. Changing subscripts would change the identity of the substance, which is not allowed.'
          },
          {
            question: 'What is the coefficient of $O_{2}$ when the equation $\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$ is balanced?',
            options: [
              '3',
              '4',
              '5',
              '7'
            ],
            correctAnswer: 2,
            explanation: '$\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$. Products have 3(2) + 4(1) = 10 oxygen atoms → 10/2 = 5 $O_{2}$.'
          },
          {
            question: 'The polyatomic ion shortcut is most useful when:',
            options: [
              'All atoms are monatomic ions',
              'A polyatomic ion appears intact on both sides',
              'You need to decompose a compound',
              'The equation involves only elements'
            ],
            correctAnswer: 1,
            explanation: 'When a polyatomic ion (like $SO_{4}^{2-}$, $NO_{3}^{-}$, or $PO_{4}^{3-}$) appears unchanged on both sides of the equation, you can balance it as a single unit instead of tracking each atom individually.'
          },
          {
            question: 'Which equation is correctly balanced?',
            options: [
              '$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$',
              '$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$',
              '$\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$',
              '$2\\text{H}_2 + 2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$'
            ],
            correctAnswer: 1,
            explanation: '$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$: Left has 4 H and 2 O. Right has 4 H and 2 O. Balanced! ✓'
          }
        ]
      }
    },
    {
      id: 'rt4-balance-coefficients',
      type: 'input-boxes' as const,
      content: `
**Find the Missing Coefficients** 🧮

Balance each equation. Enter the coefficient of the indicated substance.

**1)** $\\underline{\\hspace{1em}}\\,\\text{N}_2 + \\underline{\\hspace{1em}}\\,\\text{H}_2 \\rightarrow \\underline{\\hspace{1em}}\\,\\text{NH}_3$ → coefficient of $H_{2}$ = ?

**2)** $\\underline{\\hspace{1em}}\\,\\text{Al} + \\underline{\\hspace{1em}}\\,\\text{HCl} \\rightarrow \\underline{\\hspace{1em}}\\,\\text{AlCl}_3 + \\underline{\\hspace{1em}}\\,\\text{H}_2$ → coefficient of HCl = ?

**3)** $\\underline{\\hspace{1em}}\\,\\text{Fe}_2\\text{O}_3 + \\underline{\\hspace{1em}}\\,\\text{CO} \\rightarrow \\underline{\\hspace{1em}}\\,\\text{Fe} + \\underline{\\hspace{1em}}\\,\\text{CO}_2$ → coefficient of CO = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '6', '3'],
        hint1: '$\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$. Each $NH_{3}$ has 3 H atoms; 2 $NH_{3}$ needs 6 H atoms.',
        hint2: '$2\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2$. Each $AlCl_{3}$ has 3 Cl; two $AlCl_{3}$ need 6 Cl.',
        hint3: '$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$. 3 O from $Fe_{2}O_{3}$ + 3 from CO = 6 O; products have 3(2) = 6 O.',
        explanation: '1) $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$: N: 2=2 ✓, H: 6=6 ✓. 2) $2\\text{Al} + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2$: Al: 2=2 ✓, H: 6=6 ✓, Cl: 6=6 ✓. 3) $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$: Fe: 2=2 ✓, O: 3+3=6 and 3(2)=6 ✓, C: 3=3 ✓.'
      }
    },
    {
      id: 'rt4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Balancing Strategy — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You should usually balance hydrogen and oxygen',
            options: ['first', 'last', 'never', 'only if they appear once']
          },
          {
            label: 'If a coefficient of 1.5 appears, you should',
            options: ['leave it as is', 'round to 2', 'multiply all coefficients by 2', 'start over']
          },
          {
            label: 'Changing a subscript in a formula would change the',
            options: ['amount of substance', 'identity of the substance', 'coefficients', 'temperature']
          },
          {
            label: 'The Law of Conservation of Mass requires that balanced equations have equal',
            options: ['numbers of molecules on both sides', 'masses of each element on both sides', 'numbers of each type of atom on both sides', 'volumes on both sides']
          }
        ],
        correctAnswers: ['last', 'multiply all coefficients by 2', 'identity of the substance', 'numbers of each type of atom on both sides'],
        hint1: 'H and O often appear in multiple compounds, making them trickier to balance first.',
        hint2: 'Fractional coefficients are valid mathematically, but we prefer whole numbers.',
        hint3: '$H_{2}O$ vs. $H_{2}O_{2}$ are different substances with different subscripts.',
        explanation: 'Balance H and O last since they appear in many compounds. Multiply all coefficients by the denominator to eliminate fractions. Changing subscripts changes what the compound is (e.g., $H_{2}O$ ≠ $H_{2}O_{2}$). Conservation of mass means atoms are conserved — same count on both sides.'
      }
    },
    {
      id: 'rt4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Balancing Equations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Balance: $\\text{KMnO}_4 + \\text{HCl} \\rightarrow \\text{KCl} + \\text{MnCl}_2 + \\text{Cl}_2 + \\text{H}_2\\text{O}$. What is the coefficient of HCl?',
            options: [
              '8',
              '12',
              '16',
              '20'
            ],
            correctAnswer: 2,
            explanation: '$2\\text{KMnO}_4 + 16\\text{HCl} \\rightarrow 2\\text{KCl} + 2\\text{MnCl}_2 + 5\\text{Cl}_2 + 8\\text{H}_2\\text{O}$. K: 2=2 ✓, Mn: 2=2 ✓, Cl: 16 = 2+4+10 = 16 ✓, H: 16=16 ✓, O: 8=8 ✓.'
          },
          {
            question: 'The sum of all coefficients in the balanced equation $\\text{Al} + \\text{Fe}_2\\text{O}_3 \\rightarrow \\text{Al}_2\\text{O}_3 + \\text{Fe}$ is:',
            options: [
              '5',
              '6',
              '7',
              '8'
            ],
            correctAnswer: 1,
            explanation: '$2\\text{Al} + \\text{Fe}_2\\text{O}_3 \\rightarrow \\text{Al}_2\\text{O}_3 + 2\\text{Fe}$. Coefficients: 2 + 1 + 1 + 2 = 6. Al: 2=2 ✓, Fe: 2=2 ✓, O: 3=3 ✓.'
          }
        ]
      }
    }
  ]
}
