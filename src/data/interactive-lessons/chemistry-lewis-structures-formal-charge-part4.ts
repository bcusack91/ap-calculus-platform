export const chemLewisStructuresFormalChargePart4Data = {
  topicSlug: 'lewis-structures-formal-charge',
  sections: [
    {
      id: 'ls-4-1',
      type: 'text',
      title: '⚡ What Is Formal Charge?',
      content: `**Formal charge (FC)** is a bookkeeping tool that helps us determine which Lewis structure is the most reasonable when multiple structures are possible.\n\nFormal charge tells us the hypothetical charge on each atom if all bonding electrons were shared **perfectly equally** between bonded atoms.\n\n$$\\boxed{FC = V - N - \\frac{B}{2}}$$\n\nWhere:\n- **V** = number of valence electrons (from the periodic table)\n- **N** = number of nonbonding (lone pair) electrons on the atom\n- **B** = number of bonding electrons around the atom\n\nAlternatively, since $\\frac{B}{2}$ equals the number of bonds:\n\n$$\\boxed{FC = V - N - \\text{(number of bonds)}}$$\n\n**Important:** The sum of all formal charges in a molecule must equal the overall charge of the molecule or ion.

**Part 4 of 7 — Resonance Structures**

---

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ls-4-2',
      type: 'text',
      title: '✏️ Calculating Formal Charge: $H_{2}O$ Example',
      content: `> **Problem:** Calculate the formal charge on each atom in $H_{2}O$.\n\n**Solution:**\n\nLet\'s calculate the formal charge on each atom in $H_{2}O$.\n\nThe Lewis structure: H—Ö—H (oxygen has 2 lone pairs)\n\n**Oxygen:**\n- V = 6 (Group 16)\n- N = 4 (2 lone pairs = 4 electrons)\n- B = 4 (2 bonds × 2 electrons each)\n- FC = 6 − 4 − 4/2 = 6 − 4 − 2 = **0**\n\n**Each Hydrogen:**\n- V = 1 (Group 1)\n- N = 0 (no lone pairs)\n- B = 2 (1 bond = 2 electrons)\n- FC = 1 − 0 − 2/2 = 1 − 0 − 1 = **0**\n\n**Check:** Sum of formal charges = 0 + 0 + 0 = 0 ✓ (neutral molecule)\n\nAll formal charges are zero — this is the ideal situation and confirms this is a good Lewis structure.`
    },
    {
      id: 'ls-4-3',
      type: 'multiple-choice',
      title: 'Formal Charge Formula',
      content: 'Practice using the formal charge formula.',
      exercise: {
        questions: [
          {
            question: 'In the molecule $NH_{3}$, nitrogen has 3 bonds and 1 lone pair. What is the formal charge on nitrogen? (N has 5 valence electrons)',
            options: ['+1', '0', '−1', '+2'],
            correctAnswer: 1,
            explanation: 'FC = V − N − B/2 = 5 − 2 − 6/2 = 5 − 2 − 3 = 0. Nitrogen has a formal charge of 0 in $NH_{3}$.'
          }
        ]
      }
    },
    {
      id: 'ls-4-4',
      type: 'input-boxes',
      title: 'Practice: Formal Charge Calculations',
      content: 'Calculate the formal charge for each atom using FC = V − N − B/2.',
      exercise: {
        inputs: [
          {
            label: '**1.** FC on carbon in $CO_{2}$ (C has 4 valence $e^{-}$, 0 lone pairs, 8 bonding $e^{-}$ from 2 double bonds)',
            correctAnswer: '0',
            explanation: 'FC = 4 − 0 − 8/2 = 4 − 0 − 4 = 0.'
          },
          {
            label: '**2.** FC on each oxygen in $CO_{2}$ (O has 6 valence $e^{-}$, 4 lone pair $e^{-}$, 4 bonding $e^{-}$ from 1 double bond)',
            correctAnswer: '0',
            explanation: 'FC = 6 − 4 − 4/2 = 6 − 4 − 2 = 0.'
          },
          {
            label: '**3.** FC on nitrogen in the ammonium ion $NH_{4}^{+}$ (N has 5 valence $e^{-}$, 0 lone pairs, 8 bonding $e^{-}$)',
            correctAnswer: '+1',
            explanation: 'FC = 5 − 0 − 8/2 = 5 − 0 − 4 = +1. This positive formal charge matches the overall +1 charge of the ion.'
          }
        ]
      }
    },
    {
      id: 'ls-4-5',
      type: 'text',
      title: '🔑 Rules for Choosing the Best Lewis Structure',
      content: `When multiple valid Lewis structures exist, use formal charges to pick the best one:\n\n**Rule 1:** The structure with formal charges **closest to zero** on all atoms is preferred.\n\n**Rule 2:** If formal charges cannot all be zero, **negative formal charges** should be on the **more electronegative atoms**.\n\n**Rule 3:** Structures where **adjacent atoms** have formal charges of the **same sign** are unfavorable (like charges repel).\n\n**Rule 4:** The sum of all formal charges must equal the molecule\'s overall charge.\n\n**Example: $CO_{2}$ — comparing two structures**\n\nStructure A: O=C=O → FC: all zeros ✓ Best!\nStructure B: O≡C—Ö → FC: O(≡) = +1, C = 0, O(—) = −1\n\nStructure A is preferred because all formal charges are zero.\n\n> 🔑 **Key Concept:** Minimize formal charges first (Rule 1), then place any remaining negative charges on the most electronegative atoms (Rule 2).`
    },
    {
      id: 'ls-4-6',
      type: 'multiple-choice',
      title: 'Best Lewis Structure by Formal Charge',
      content: 'Use formal charge rules to select the best structure.',
      exercise: {
        questions: [
          {
            question: 'Consider two Lewis structures for SCO (carbon is central). Structure A: S=C=O (FC: all 0). Structure B: S≡C—O (FC: S = −1, C = 0, O = +1). Which is preferred?',
            options: [
              'Structure B, because the triple bond is stronger',
              'Structure A, because all formal charges are zero',
              'Structure B, because S can handle a negative charge',
              'Both are equally good'
            ],
            correctAnswer: 1,
            explanation: 'Structure A is preferred because all formal charges are zero (Rule 1). In Structure B, the positive formal charge is on the more electronegative atom (O), which violates Rule 2.'
          }
        ]
      }
    },
    {
      id: 'ls-4-7',
      type: 'dropdown-select',
      title: 'Formal Charge Reasoning',
      content: 'Select the correct formal charge for each described atom.',
      exercise: {
        dropdowns: [
          {
            id: 'ls-4-7-dd1',
            label: 'An oxygen atom has 3 bonds and 1 lone pair. What is its formal charge?',
            options: ['−1', '0', '+1', '+2'],
            correctIndex: 2,
            explanation: 'FC = V − N − B/2 = 6 − 2 − 6/2 = 6 − 2 − 3 = +1. Oxygen normally has 2 bonds, so 3 bonds gives it a positive formal charge.'
          },
          {
            id: 'ls-4-7-dd2',
            label: 'An oxygen atom has 1 bond and 3 lone pairs. What is its formal charge?',
            options: ['−2', '−1', '0', '+1'],
            correctIndex: 1,
            explanation: 'FC = V − N − B/2 = 6 − 6 − 2/2 = 6 − 6 − 1 = −1. Fewer bonds than normal gives oxygen a negative formal charge.'
          },
          {
            id: 'ls-4-7-dd3',
            label: 'A carbon atom has 4 bonds. How many lone pairs does it have if its formal charge is 0?',
            options: ['1', '0', '2', '3'],
            correctIndex: 1,
            explanation: 'FC = V − N − B/2 → 0 = 4 − N − 8/2 → 0 = 4 − N − 4 → N = 0. Carbon with 4 bonds and 0 lone pairs has a formal charge of 0.'
          }
        ]
      }
    },
    {
      id: 'ls-4-8',
      type: 'multiple-choice',
      title: 'Formal Charge and Electronegativity',
      content: 'Apply Rule 2 of formal charge analysis.',
      exercise: {
        questions: [
          {
            question: 'Two structures for $CNO^{-}$ differ only in which atom carries the −1 formal charge. Structure A places −1 on O. Structure B places −1 on C. Which is preferred?',
            options: [
              'Structure B, because carbon is the central atom',
              'Structure A, because negative formal charge should be on the more electronegative atom',
              'Both are equally valid',
              'Structure B, because carbon needs more electrons'
            ],
            correctAnswer: 1,
            explanation: 'Rule 2 states that negative formal charges should be on the more electronegative atom. Oxygen is more electronegative than carbon, so Structure A (with −1 on O) is preferred.'
          }
        ]
      }
    }
  ]
};
