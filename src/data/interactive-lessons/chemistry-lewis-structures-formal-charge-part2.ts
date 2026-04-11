export const chemLewisStructuresFormalChargePart2Data = {
  topicSlug: 'lewis-structures-formal-charge',
  sections: [
    {
      id: 'ls-2-1',
      type: 'text',
      title: '📋 The Step-by-Step Algorithm for Drawing Lewis Structures',
      content: `Drawing Lewis structures follows a systematic algorithm. Master these steps and you can draw the structure for any molecule or ion.\n\n**Step 1:** Count the **total valence electrons**\n- Sum valence e⁻ for all atoms\n- Add e⁻ for negative charges, subtract for positive charges\n\n**Step 2:** Identify the **central atom**\n- Usually the least electronegative atom (not H or F)\n- H and F are always terminal (outer) atoms\n\n**Step 3:** Draw **single bonds** from the central atom to each surrounding atom\n- Each single bond uses 2 electrons\n\n**Step 4:** Distribute **remaining electrons** as lone pairs\n- Fill octets on outer atoms first\n- Place any leftover electrons on the central atom\n\n**Step 5:** Check — does every atom have an octet?\n- If the central atom lacks an octet, convert lone pairs on outer atoms into multiple bonds\n\n> 💡 **Tip:** The central atom is usually the least electronegative atom. H and F are *always* terminal atoms.

**Part 2 of 7 — Octet Rule & Exceptions**

---

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ls-2-2',
      type: 'multiple-choice',
      title: 'Choosing the Central Atom',
      content: 'The central atom is a critical first decision in drawing Lewis structures.',
      exercise: {
        questions: [
          {
            question: 'In the molecule SCl₂, which atom should be the central atom?',
            options: ['Cl, because it is more electronegative', 'S, because it is less electronegative', 'Either atom can be central', 'Cl, because there are more Cl atoms'],
            correctAnswer: 1,
            explanation: 'The central atom is typically the least electronegative atom. Sulfur is less electronegative than chlorine, so S is the central atom. Hydrogen and fluorine are never central atoms.'
          }
        ]
      }
    },
    {
      id: 'ls-2-3',
      type: 'text',
      title: '✏️ Worked Example: Drawing the Lewis Structure of H₂O',
      content: `> **Problem:** Draw the Lewis structure of water (H₂O).\n\n**Solution:**\n\nLet\'s apply the algorithm to water (H₂O).\n\n**Step 1: Count valence electrons**\n- O: 6 e⁻, H: 1 e⁻ each → Total = 6 + 2(1) = 8 e⁻\n\n**Step 2: Central atom**\n- Oxygen is the central atom (H is always terminal)\n\n**Step 3: Draw single bonds**\n- H—O—H uses 2 bonds = 4 electrons\n- Remaining: 8 − 4 = 4 electrons\n\n**Step 4: Distribute remaining electrons**\n- H atoms already have their duet (2 e⁻ from the bond)\n- Place remaining 4 e⁻ as 2 lone pairs on oxygen\n\n**Step 5: Check octets**\n- O: 2 bonds (4 e⁻) + 2 lone pairs (4 e⁻) = 8 e⁻ ✓\n- Each H: 1 bond (2 e⁻) = 2 e⁻ ✓ (duet rule)\n\nThe Lewis structure of water shows oxygen with two bonding pairs and two lone pairs, giving it a bent shape.`
    },
    {
      id: 'ls-2-4',
      type: 'input-boxes',
      title: 'Practice: Lewis Structure of CCl₄',
      content: 'Work through the algorithm for carbon tetrachloride (CCl₄).',
      exercise: {
        inputs: [
          {
            label: '**1.** Total valence electrons in CCl₄ (C has 4, each Cl has 7)',
            correctAnswer: '32',
            explanation: 'C contributes 4 and each Cl contributes 7. Total = 4 + 4(7) = 4 + 28 = 32 valence electrons.'
          },
          {
            label: '**2.** How many electrons are used in the four C—Cl single bonds?',
            correctAnswer: '8',
            explanation: 'Each single bond uses 2 electrons. Four bonds use 4 × 2 = 8 electrons.'
          },
          {
            label: '**3.** How many electrons remain after placing the bonds?',
            correctAnswer: '24',
            explanation: '32 total − 8 used in bonds = 24 electrons remaining to distribute as lone pairs.'
          },
          {
            label: '**4.** How many lone pairs does each Cl atom receive?',
            correctAnswer: '3',
            explanation: 'Each Cl needs 6 more electrons (it already shares 2 from the bond). 6 electrons = 3 lone pairs per Cl atom. Check: 4 Cl × 6 e⁻ = 24 e⁻, which uses all remaining electrons.'
          }
        ]
      }
    },
    {
      id: 'ls-2-5',
      type: 'text',
      title: '✏️ Worked Example: Lewis Structure of HCN',
      content: `> **Problem:** Draw the Lewis structure for hydrogen cyanide (HCN).\n\n**Solution:**\n\nLet\'s draw the Lewis structure for hydrogen cyanide (HCN).\n\n**Step 1: Count valence electrons**\n- H: 1, C: 4, N: 5 → Total = 10 e⁻\n\n**Step 2: Central atom**\n- Carbon is the central atom (least electronegative, H is always terminal)\n- Arrangement: H—C—N\n\n**Step 3: Draw single bonds**\n- H—C and C—N single bonds use 4 electrons\n- Remaining: 10 − 4 = 6 electrons\n\n**Step 4: Distribute remaining electrons**\n- Place lone pairs on the outer atom (N) first\n- N gets 3 lone pairs (6 e⁻) → N has 2 (bond) + 6 = 8 ✓\n- But C only has 4 e⁻ (2 bonds) — not enough!\n\n**Step 5: Form multiple bonds**\n- Convert 2 lone pairs from N into 2 additional bonds\n- Result: H—C≡N (a triple bond between C and N)\n- C: 2 (H bond) + 6 (triple bond) = 8 ✓\n- N: 6 (triple bond) + 2 (1 lone pair) = 8 ✓\n\nHCN has a **triple bond** between carbon and nitrogen, with one lone pair on nitrogen.`
    },
    {
      id: 'ls-2-6',
      type: 'multiple-choice',
      title: 'Applying the Algorithm',
      content: 'Test your understanding of the Lewis structure drawing process.',
      exercise: {
        questions: [
          {
            question: 'After drawing single bonds in a Lewis structure, where do you place the remaining electrons first?',
            options: ['On the central atom', 'On the most electronegative atom', 'On the outer (terminal) atoms', 'Between atoms as additional bonds'],
            correctAnswer: 2,
            explanation: 'Remaining electrons are placed on the outer (terminal) atoms first to complete their octets. Only after the outer atoms have octets do you place extra electrons on the central atom.'
          }
        ]
      }
    },
    {
      id: 'ls-2-7',
      type: 'dropdown-select',
      title: 'Lewis Structure Decisions',
      content: 'For each molecule, select the correct central atom.',
      exercise: {
        dropdowns: [
          {
            id: 'ls-2-7-dd1',
            label: 'In NH₃, which atom is the central atom?',
            options: ['H', 'N'],
            correctIndex: 1,
            explanation: 'Nitrogen is the central atom. Hydrogen is always a terminal atom because it can only form one bond.'
          },
          {
            id: 'ls-2-7-dd2',
            label: 'In CO₂, which atom is the central atom?',
            options: ['O', 'C'],
            correctIndex: 1,
            explanation: 'Carbon is the central atom because it is less electronegative than oxygen. The least electronegative atom (excluding H) is usually the central atom.'
          },
          {
            id: 'ls-2-7-dd3',
            label: 'In BF₃, which atom is the central atom?',
            options: ['F', 'B'],
            correctIndex: 1,
            explanation: 'Boron is the central atom. Fluorine is always a terminal atom due to its high electronegativity.'
          }
        ]
      }
    },
    {
      id: 'ls-2-8',
      type: 'input-boxes',
      title: 'Practice: NF₃ Lewis Structure',
      content: 'Apply the algorithm to nitrogen trifluoride (NF₃).',
      exercise: {
        inputs: [
          {
            label: '**1.** Total valence electrons in NF₃',
            correctAnswer: '26',
            explanation: 'N has 5 valence e⁻ and each F has 7. Total = 5 + 3(7) = 5 + 21 = 26.'
          },
          {
            label: '**2.** Electrons remaining after drawing 3 single N—F bonds',
            correctAnswer: '20',
            explanation: '3 bonds × 2 e⁻ = 6 electrons used. 26 − 6 = 20 electrons remain.'
          },
          {
            label: '**3.** How many lone pairs are on the nitrogen atom in the final structure?',
            correctAnswer: '1',
            explanation: 'Each F gets 3 lone pairs (9 lone pairs total = 18 e⁻). That leaves 20 − 18 = 2 electrons = 1 lone pair on nitrogen. N then has 3 bonds (6 e⁻) + 1 lone pair (2 e⁻) = 8 e⁻ ✓.'
          }
        ]
      }
    }
  ]
};
