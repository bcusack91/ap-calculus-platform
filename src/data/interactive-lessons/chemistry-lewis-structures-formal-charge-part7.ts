export const chemLewisStructuresFormalChargePart7Data = {
  topicSlug: 'lewis-structures-formal-charge',
  sections: [
    {
      id: 'ls-7-1',
      type: 'text',
      title: '🎯 Synthesis: Putting It All Together',
      content: `Drawing Lewis structures on the AP exam requires combining **all** the skills from this unit. Here\'s your complete checklist:\n\n**Step 1:** Count total valence electrons (adjust for charges)\n**Step 2:** Identify the central atom (least electronegative, not H or F)\n**Step 3:** Draw single bonds to all terminal atoms\n**Step 4:** Distribute remaining electrons as lone pairs (outer atoms first)\n**Step 5:** Check octets — form multiple bonds if needed\n**Step 6:** Calculate formal charges and choose the best structure\n**Step 7:** Check for resonance — draw all equivalent structures\n**Step 8:** Consider exceptions (incomplete octets, expanded octets, radicals)\n\n**AP Exam Tips:**\n- Always show lone pairs on your drawings\n- Put brackets and the charge around ions: [structure]$ {}^{2-}$\n- When asked to "justify" your structure, discuss formal charges\n- Know that bond order from resonance affects bond length and strength

**Part 7 of 7 — Synthesis & AP Review**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'ls-7-2',
      type: 'text',
      title: '✏️ Complex Example: $SOCl_{2}$ (Thionyl Chloride)',
      content: `> **Problem:** Draw the best Lewis structure for $SOCl_{2}$ (S is central).\n\n**Solution:**\n\nLet\'s work through a complex molecule: $SOCl_{2}$ (S is central).\n\n**Step 1:** Total valence electrons\n- S: 6, O: 6, Cl: 7 × 2 = 14\n- Total = 6 + 6 + 14 = 26 $e^{-}$\n\n**Step 2:** Sulfur is the central atom\n\n**Step 3:** Draw single bonds: S—O, S—Cl, S—Cl $(uses 6 e^{-})$\n- Remaining: 26 − 6 = 20 $e^{-}$\n\n**Step 4:** Fill octets on outer atoms:\n- O gets 3 lone pairs $(6 e^{-})$, each Cl gets 3 lone pairs (6 $e^{-}$ each)\n- Total distributed: 6 + 6 + 6 = 18 $e^{-}$\n- Remaining: 20 − 18 = 2 $e^{-}$ → 1 lone pair on S\n\n**Step 5:** Check S: 3 bonds $(6 e^{-})$ + 1 lone pair $(2 e^{-})$ = 8 ✓\n\n**Step 6:** Formal charges:\n- S: 6 − 2 − 6/2 = +1\n- O: 6 − 6 − 2/2 = −1\n- Each Cl: 7 − 6 − 2/2 = 0\n\nAlternative structure with S=O double bond:\n- S: 6 − 2 − 8/2 = 0, O: 6 − 4 − 4/2 = 0\n- **All formal charges zero — this is preferred!**\n- S can have expanded octet (Period 3), so 10 $e^{-}$ around S is allowed.`
    },
    {
      id: 'ls-7-3',
      type: 'multiple-choice',
      title: 'Complex Structure Analysis',
      content: 'Apply the full algorithm to a challenging molecule.',
      exercise: {
        questions: [
          {
            question: 'In $SOCl_{2}$, why is the structure with an S=O double bond preferred over the one with all single bonds?',
            options: [
              'Double bonds are always stronger than single bonds',
              'The double bond structure has all formal charges equal to zero',
              'Sulfur cannot have a lone pair',
              'Oxygen always forms double bonds'
            ],
            correctAnswer: 1,
            explanation: 'The S=O double bond structure is preferred because it gives all atoms a formal charge of 0. Sulfur can accommodate 10 electrons because it is in Period 3 and has empty d orbitals. The all-single-bond structure gives S = +1 and O = −1, which is less favorable.'
          }
        ]
      }
    },
    {
      id: 'ls-7-4',
      type: 'input-boxes',
      title: 'Practice: $POCl_{3}$ (Phosphoryl Chloride)',
      content: 'Work through the Lewis structure for $POCl_{3}$ (P is central, bonded to one O and three Cl atoms).',
      exercise: {
        inputs: [
          {
            label: '**1.** Total valence electrons in $POCl_{3}$',
            correctAnswer: '32',
            explanation: 'P has 5, O has 6, and each Cl has 7. Total = 5 + 6 + 3(7) = 5 + 6 + 21 = 32.'
          },
          {
            label: '**2.** Electrons used in 4 single bonds (P—O and 3 P—Cl)',
            correctAnswer: '8',
            explanation: '4 bonds × 2 $e^{-}$ = 8 electrons used in bonding.'
          },
          {
            label: '**3.** In the structure with all single bonds, what is the formal charge on P? (P has 5 valence $e^{-}$, 0 lone pairs, 4 bonds)',
            correctAnswer: '+1',
            explanation: 'FC = 5 − 0 − 8/2 = 5 − 0 − 4 = +1.'
          },
          {
            label: '**4.** In the preferred structure with a P=O double bond, what is the formal charge on P? (P: 5 valence $e^{-}$, 0 lone pairs, 5 bonds)',
            correctAnswer: '0',
            explanation: 'FC = 5 − 0 − 10/2 = 5 − 0 − 5 = 0. With the double bond to O, all formal charges become 0. P can have an expanded octet since it is in Period 3.'
          }
        ]
      }
    },
    {
      id: 'ls-7-5',
      type: 'text',
      title: '🎓 AP Exam: Choosing the Best Structure',
      content: `On the AP exam, you may be given multiple Lewis structures and asked which is "best" or "most reasonable." Here\'s a decision framework:\n\n**Priority order for evaluating structures:**\n\n1. **All atoms have octets** (or appropriate exceptions)\n2. **Formal charges are minimized** (as close to 0 as possible)\n3. **Negative FC on more electronegative atoms**\n4. **No adjacent atoms with same-sign formal charges**\n\n**Common AP question types:**\n- "Draw the Lewis structure for X" — use the full algorithm\n- "Which structure is most stable?" — compare formal charges\n- "How many resonance structures?" — count equivalent placements\n- "Predict bond order" — total bonds ÷ number of positions\n- "Why is this bond length between single and double?" — resonance\n- "Explain why $BF_{3}$ acts as a Lewis acid" — incomplete octet`
    },
    {
      id: 'ls-7-6',
      type: 'multiple-choice',
      title: 'AP Practice: Cyanate Ion',
      content: 'The cyanate ion $(OCN^{-})$ can have several Lewis structures. Determine the best one.',
      exercise: {
        questions: [
          {
            question: 'For $OCN^{-}$ (C is central, 16 total valence $e^{-}$), which structure is most favorable?\n\nA: [O=C=N]$ {}^{-}$ with FC: O = 0, C = 0, N = −1\nB: [O≡C—N]$ {}^{-}$ with FC: O = +1, C = 0, N = −2\nC: [O—C≡N]$ {}^{-}$ with FC: O = −2, C = 0, N = +1',
            options: [
              'Structure A — minimal formal charges with −1 on nitrogen',
              'Structure B — triple bond makes it strongest',
              'Structure C — negative charge is on the most electronegative atom',
              'All three are equally valid'
            ],
            correctAnswer: 0,
            explanation: 'Structure A ([O=C=N]$ {}^{-}$) is best. It has the smallest formal charges (only one atom with a nonzero FC). While Structure C puts negative charge on O (more electronegative), it has charges of −2 and +1, which are much larger than Structure A\'s single −1. Minimizing formal charge magnitude is the top priority.'
          }
        ]
      }
    },
    {
      id: 'ls-7-7',
      type: 'dropdown-select',
      title: 'AP Review: Key Concepts',
      content: 'Select the correct answer for each AP-style concept question.',
      exercise: {
        dropdowns: [
          {
            id: 'ls-7-7-dd1',
            label: 'Carbon (Period 2) — can it exceed the octet?',
            options: ['Can exceed the octet', 'Cannot exceed the octet'],
            correctIndex: 1,
            explanation: 'Carbon is in Period 2 and does not have accessible d orbitals. It can NEVER have more than 8 electrons around it.'
          },
          {
            id: 'ls-7-7-dd2',
            label: 'What is the bond order of each O—O bond in $O_{3}$?',
            options: ['Bond order = 1', 'Bond order = 1.5', 'Bond order = 2'],
            correctIndex: 1,
            explanation: 'In $O_{3}$, the two O—O bonds are equivalent in the resonance hybrid. Each is a blend of single and double bond character, giving bond order = (1 + 2)/2 = 1.5.'
          },
          {
            id: 'ls-7-7-dd3',
            label: '$BF_{3}$ acts as a Lewis _______ because boron has fewer than 8 electrons',
            options: ['Lewis acid (electron acceptor)', 'Lewis base (electron donor)'],
            correctIndex: 0,
            explanation: '$BF_{3}$ has an incomplete octet (only 6 electrons on B). It readily accepts an electron pair from a Lewis base, making it a Lewis acid.'
          }
        ]
      }
    },
    {
      id: 'ls-7-8',
      type: 'multiple-choice',
      title: 'AP Practice: Comprehensive Problem',
      content: 'Tackle a multi-concept AP-style question.',
      exercise: {
        questions: [
          {
            question: 'The sulfate ion $(SO_{4}^{2-})$ has 32 total valence electrons. If all four S—O bonds are drawn as single bonds, sulfur has a formal charge of +2. By forming two S=O double bonds, sulfur\'s formal charge becomes 0. Why is this expanded octet structure acceptable?',
            options: [
              'All atoms can expand their octets when needed',
              'Sulfur is in Period 3 and has empty d orbitals available for bonding',
              'The double bonds are shorter so the molecule is smaller',
              'Formal charge rules override the octet rule for all elements'
            ],
            correctAnswer: 1,
            explanation: 'Sulfur is in Period 3, which means it has 3d orbitals available. These empty d orbitals allow sulfur to accommodate more than 8 electrons. The expanded octet structure with two double bonds is preferred because it minimizes formal charges. Period 2 elements (like C, N, O) cannot do this because they lack accessible d orbitals.'
          }
        ]
      }
    }
  ]
};
