export const chemLewisStructuresFormalChargePart5Data = {
  topicSlug: 'lewis-structures-formal-charge',
  sections: [
    {
      id: 'ls-5-1',
      type: 'text',
      title: '💡 What Are Resonance Structures?',
      content: `Sometimes, a single Lewis structure is **not sufficient** to describe the actual electron distribution in a molecule. When electrons can be delocalized (spread out) across multiple positions, we draw **resonance structures**.\n\n**Resonance structures** are two or more valid Lewis structures for the same molecule that differ only in the **placement of electrons** (not atoms).\n\n**Key points:**\n- The atoms stay in the same positions\n- Only electrons (bonds and lone pairs) move\n- We connect resonance structures with a double-headed arrow (↔)\n- The actual molecule is a **resonance hybrid** — an average of all resonance structures\n- No single resonance structure is "correct" on its own\n\n> 💡 **Tip:** Resonance structures differ only in electron placement — the atoms never move. The real molecule is a blend (hybrid) of all structures.\n\n**The resonance hybrid** has characteristics intermediate between all contributing structures. For example, bonds that are single in one structure and double in another are actually intermediate (bond order between 1 and 2).

**Part 5 of 7 — Expanded & Incomplete Octets**

---

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ls-5-2',
      type: 'text',
      title: 'Example: Ozone $(O_{3})$',
      content: `Ozone $(O_{3})$ is a classic example of resonance.\n\n**Step 1:** Total valence electrons = 3 × 6 = 18\n\n**Step 2:** Central oxygen, with two terminal oxygens: O—O—O\n\n**Drawing Structure 1:**\n- After applying the algorithm, one valid structure is: Ö=O—Ö:\n- Central O: double bond left, single bond right\n- Left O: 2 lone pairs, Right O: 3 lone pairs\n\n**Drawing Structure 2:**\n- Equally valid: :Ö—O=Ö\n- The double bond is on the other side\n\n**Resonance structures:** Ö=O—Ö: ↔ :Ö—O=Ö\n\n**The resonance hybrid:**\n- Both O—O bonds are identical in reality\n- Bond order = 1.5 (average of single and double)\n- Bond length is between a single and double bond\n- Each terminal oxygen carries −½ formal charge on average\n\nExperiments confirm that both O—O bonds in ozone are the **same length** — proving the resonance hybrid model.`
    },
    {
      id: 'ls-5-3',
      type: 'multiple-choice',
      title: 'Understanding Resonance',
      content: 'Clarify common misconceptions about resonance.',
      exercise: {
        questions: [
          {
            question: 'What does it mean when we draw resonance structures for a molecule?',
            options: [
              'The molecule rapidly switches between the two structures',
              'The true structure is an average (hybrid) of all resonance structures',
              'One structure is correct and the other is wrong',
              'The atoms rearrange between the two forms'
            ],
            correctAnswer: 1,
            explanation: 'The molecule does NOT flip between structures. The actual structure is a resonance hybrid — a blend of all contributing structures. The electrons are delocalized across the molecule simultaneously. Atoms never move in resonance.'
          }
        ]
      }
    },
    {
      id: 'ls-5-4',
      type: 'text',
      title: 'Example: Nitrate Ion $(NO_{3}^{-})$',
      content: `The nitrate ion is a perfect example of resonance with three equivalent structures.\n\n**Total valence electrons:** 5 (N) + 3 × 6 (O) + 1 (charge) = 24\n\n**Three resonance structures:**\n\nIn each structure, nitrogen forms:\n- One double bond to one oxygen\n- Two single bonds to the other two oxygens\n\nThe double bond "rotates" among the three positions:\n\nStructure 1: O=N(—$O^{-}$)(—$O^{-}$)\nStructure 2: ($ {}^{-}O$—)N=O(—$O^{-}$)\nStructure 3: ($ {}^{-}O$—)N(—$O^{-}$)=O\n\n**Formal charges in each structure:**\n- N: FC = 5 − 0 − 8/2 = +1\n- O (double bonded): FC = 6 − 4 − 4/2 = 0\n- O (single bonded): FC = 6 − 6 − 2/2 = −1\n- Sum: +1 + 0 + 2(−1) = −1 ✓ (matches the ion charge)\n\n**The resonance hybrid:**\n- All three N—O bonds are identical\n- Bond order = 4 bonds ÷ 3 positions = **1.33**\n- Each oxygen carries a formal charge of −2/3\n- The negative charge is evenly distributed`
    },
    {
      id: 'ls-5-5',
      type: 'input-boxes',
      title: 'Practice: Resonance in $NO_{3}^{-}$',
      content: 'Answer questions about the nitrate ion resonance structures.',
      exercise: {
        inputs: [
          {
            label: '**1.** How many equivalent resonance structures does $NO_{3}^{-}$ have?',
            correctAnswer: '3',
            explanation: '$NO_{3}^{-}$ has 3 equivalent resonance structures. The double bond can be placed between N and any of the three oxygen atoms.'
          },
          {
            label: '**2.** What is the bond order of each N—O bond in the resonance hybrid? (enter as a fraction like 4/3)',
            correctAnswer: '4/3',
            explanation: 'There are 4 total bonds (1 double + 2 single = 4 bond pairs) distributed over 3 equivalent positions. Bond order = 4/3 ≈ 1.33.'
          },
          {
            label: '**3.** What is the formal charge on nitrogen in each resonance structure?',
            correctAnswer: '+1',
            explanation: 'FC on N = 5 − 0 − 8/2 = +1. Nitrogen has 4 bonds and 0 lone pairs in each resonance structure.'
          }
        ]
      }
    },
    {
      id: 'ls-5-6',
      type: 'text',
      title: '🔍 When Does Resonance Occur?',
      content: `Resonance occurs when:\n\n1. **A lone pair is adjacent to a multiple bond** — the lone pair can be delocalized\n2. **Multiple equivalent positions exist** for a double or triple bond\n3. **There is a p orbital that can overlap** with adjacent p orbitals\n\n**Common molecules/ions with resonance:**\n- Ozone $(O_{3})$: 2 resonance structures\n- Nitrate $(NO_{3}^{-})$: 3 resonance structures\n- Carbonate $(CO_{3}^{2-})$: 3 resonance structures\n- Benzene $(C_{6}H_{6})$: 2 major resonance structures\n- Acetate $(CH_{3}COO^{-})$: 2 resonance structures\n\n**Resonance does NOT occur when:**\n- All bonds are single bonds with no adjacent lone pairs\n- The structure has no possible way to rearrange electrons\n- Moving electrons would violate the octet rule`
    },
    {
      id: 'ls-5-7',
      type: 'dropdown-select',
      title: 'Identifying Resonance',
      content: 'Determine whether each molecule or ion exhibits resonance.',
      exercise: {
        dropdowns: [
          {
            id: 'ls-5-7-dd1',
            label: '$CO_{3}^{2-}$ (carbonate) has 3 equivalent resonance structures',
            options: ['Has resonance', 'No resonance'],
            correctIndex: 0,
            explanation: '$CO_{3}^{2-}$ (carbonate) has 3 equivalent resonance structures, with the double bond rotating among the three C—O positions.'
          },
          {
            id: 'ls-5-7-dd2',
            label: '$CH_{4}$ (methane) has _______',
            options: ['Has resonance', 'No resonance'],
            correctIndex: 1,
            explanation: '$CH_{4}$ (methane) has no resonance. All four C—H bonds are single bonds and there are no lone pairs or multiple bonds to rearrange.'
          },
          {
            id: 'ls-5-7-dd3',
            label: '$NO_{2}^{-}$ (nitrite) has 2 resonance structures',
            options: ['Has resonance', 'No resonance'],
            correctIndex: 0,
            explanation: '$NO_{2}^{-}$ (nitrite) has 2 resonance structures. The double bond can be on either side of the nitrogen: O=N—$O^{-}$ ↔ $ {}^{-}O$—N=O.'
          }
        ]
      }
    },
    {
      id: 'ls-5-8',
      type: 'multiple-choice',
      title: 'Resonance and Bond Properties',
      content: 'Apply resonance concepts to predict molecular properties.',
      exercise: {
        questions: [
          {
            question: 'In the carbonate ion $(CO_{3}^{2-})$, all three C—O bond lengths are measured to be equal. What does this experimental observation support?',
            options: [
              'Carbonate has no resonance structures',
              'Only one resonance structure is correct',
              'Carbonate is best described as a resonance hybrid with identical bonds',
              'The bonds alternate between single and double rapidly'
            ],
            correctAnswer: 2,
            explanation: 'Equal bond lengths confirm that carbonate is a resonance hybrid. If one structure were "correct," we would see one shorter double bond and two longer single bonds. Instead, all three bonds are identical with bond order 4/3, proving electron delocalization.'
          }
        ]
      }
    }
  ]
};
